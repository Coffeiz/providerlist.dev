/**
 * 发布产物合并测试。
 *
 * **自带夹具，不依赖仓库的构建状态。**
 * CI 的顺序是「先 test 后 build」——如果测试依赖 `dist/` 已经存在，
 * 它在 CI 上必然失败。测试必须自己准备输入。
 *
 * 重点保护「发布根目录能独立提供服务」这条不变量：
 * 网站文件在根，`/v1/*.json` 是**真实文件**（不是被 SPA fallback 出来的 HTML）。
 */

import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(import.meta.dirname, '..');
const script = path.join(repoRoot, 'scripts', 'build-release.mjs');

async function exists(target) {
  return (await stat(target).catch(() => null)) !== null;
}

/** 造一套最小但完整的输入：公开 JSON 产物 + 站点产物。 */
async function makeFixtures() {
  const base = await mkdtemp(path.join(tmpdir(), 'providerlist-release-'));
  const catalog = path.join(base, 'catalog', 'v1');
  const site = path.join(base, 'site');
  const out = path.join(base, 'out');

  await mkdir(path.join(catalog, 'schema'), { recursive: true });
  await mkdir(path.join(catalog, 'providers'), { recursive: true });
  await mkdir(path.join(base, 'catalog', 'assets', 'datasets'), { recursive: true });
  await mkdir(path.join(site, 'assets'), { recursive: true });
  await mkdir(path.join(site, 'assets', 'datasets'), { recursive: true });
  await mkdir(path.join(site, 'v1'), { recursive: true });

  await writeFile(path.join(catalog, 'manifest.json'), JSON.stringify({
    schema_version: '1.0.0',
    data_version: '20261023.abc123',
    generated_at: '2026-10-23T00:00:00.000Z',
    catalog_status: 'published',
    files: [
      { path: '/v1/manifest.json', sha256: 'sha256:x', bytes: 1 },
      { path: '/v1/schema/public-provider.schema.json', sha256: 'sha256:y', bytes: 2 },
      { path: '/v1/providers/example-ai.json', sha256: 'sha256:z', bytes: 3 },
    ],
  }));
  await writeFile(path.join(catalog, 'schema', 'public-provider.schema.json'), '{}');
  await writeFile(path.join(catalog, 'providers', 'example-ai.json'), '{}');
  await writeFile(path.join(base, 'catalog', 'assets', 'datasets', 'catalog-current.json'), '{"source":"generator"}');

  // 站点产物：自带一份 v1/ 拷贝（内容故意不同，用来验证合并时以 generator 为准）
  await writeFile(path.join(site, 'index.html'), '<!doctype html><html></html>');
  await writeFile(path.join(site, 'assets', 'index.js'), 'console.log(1)');
  await writeFile(path.join(site, 'assets', 'datasets', 'catalog-current.json'), '{"source":"stale-site-copy"}');
  await writeFile(path.join(site, 'v1', 'manifest.json'), '{"stale":true}');

  return { base, catalog, site, out };
}

async function runMerge({ catalog, site, out }) {
  return execFileAsync(
    process.execPath,
    [script, '--catalog', catalog, '--site', site, '--out', out],
    { cwd: repoRoot },
  );
}

test('发布根目录包含网站入口与公开 JSON', async () => {
  const fixtures = await makeFixtures();
  try {
    await runMerge(fixtures);

    assert.ok(await exists(path.join(fixtures.out, 'index.html')), '缺少 index.html');
    assert.ok(await exists(path.join(fixtures.out, 'assets')), '缺少 assets/');
    assert.ok(
      await exists(path.join(fixtures.out, 'v1', 'manifest.json')),
      '缺少 /v1/manifest.json',
    );
    assert.ok(
      await exists(path.join(fixtures.out, 'v1', 'schema', 'public-provider.schema.json')),
      '缺少公开 JSON Schema',
    );
    assert.ok(
      await exists(path.join(fixtures.out, 'assets', 'datasets', 'catalog-current.json')),
      '缺少站点内部数据集',
    );
    assert.equal(
      await readFile(path.join(fixtures.out, 'assets', 'datasets', 'catalog-current.json'), 'utf8'),
      '{"source":"generator"}',
      '站点数据集也必须以目录编译器产物为准',
    );
  } finally {
    await rm(fixtures.base, { recursive: true, force: true });
  }
});

test('manifest 声明的每个文件都存在于发布根', async () => {
  const fixtures = await makeFixtures();
  try {
    await runMerge(fixtures);

    const manifest = JSON.parse(
      await readFile(path.join(fixtures.out, 'v1', 'manifest.json'), 'utf8'),
    );

    assert.ok(manifest.files.length > 0);
    for (const file of manifest.files) {
      const target = path.join(fixtures.out, file.path.replace(/^\//, ''));
      assert.ok(await exists(target), `发布根缺少 ${file.path}`);
    }
  } finally {
    await rm(fixtures.base, { recursive: true, force: true });
  }
});

test('发布根的 /v1 JSON 以 generator 产物为准，不被站点拷贝覆盖', async () => {
  const fixtures = await makeFixtures();
  try {
    await runMerge(fixtures);

    const fromGenerator = await readFile(
      path.join(fixtures.catalog, 'manifest.json'),
      'utf8',
    );
    const fromRelease = await readFile(
      path.join(fixtures.out, 'v1', 'manifest.json'),
      'utf8',
    );
    assert.equal(fromRelease, fromGenerator, '站点里的旧拷贝不得覆盖权威版本');
  } finally {
    await rm(fixtures.base, { recursive: true, force: true });
  }
});

test('缺公开 JSON 产物时明确失败，不产出半成品', async () => {
  const fixtures = await makeFixtures();
  try {
    const empty = path.join(fixtures.base, 'empty');
    await mkdir(empty, { recursive: true });

    await assert.rejects(
      () =>
        execFileAsync(
          process.execPath,
          [script, '--catalog', empty, '--site', fixtures.site, '--out', fixtures.out],
          { cwd: repoRoot },
        ),
      '缺产物必须失败',
    );
  } finally {
    await rm(fixtures.base, { recursive: true, force: true });
  }
});

test('公开 JSON 目录就在发布根里面时不会自毁', async () => {
  // 默认布局就是这种：catalog = <out>/v1。
  // 如果先 rm 再拷，源目录会被自己删掉——「两个构建脚本互相覆盖目录」的陷阱。
  const base = await mkdtemp(path.join(tmpdir(), 'providerlist-nested-'));
  try {
    const out = path.join(base, 'dist');
    const catalog = path.join(out, 'v1');
    const site = path.join(base, 'site');

    await mkdir(path.join(catalog, 'schema'), { recursive: true });
    await mkdir(path.join(site, 'assets'), { recursive: true });
    await writeFile(path.join(site, 'index.html'), '<!doctype html><html></html>');
    await writeFile(path.join(site, 'assets', 'index.js'), 'console.log(1)');
    await writeFile(path.join(catalog, 'manifest.json'), JSON.stringify({
      schema_version: '1.0.0',
      data_version: '20261023.abc123',
      generated_at: '2026-10-23T00:00:00.000Z',
      catalog_status: 'published',
      files: [
        { path: '/v1/manifest.json', sha256: 'sha256:x', bytes: 1 },
        { path: '/v1/schema/public-provider.schema.json', sha256: 'sha256:y', bytes: 2 },
      ],
    }));
    await writeFile(path.join(catalog, 'schema', 'public-provider.schema.json'), '{}');
    await mkdir(path.join(out, 'assets', 'datasets'), { recursive: true });
    await writeFile(path.join(out, 'assets', 'datasets', 'catalog-current.json'), '{}');

    await execFileAsync(
      process.execPath,
      [script, '--catalog', catalog, '--site', site, '--out', out],
      { cwd: repoRoot },
    );

    assert.ok(
      await exists(path.join(catalog, 'manifest.json')),
      'catalog 目录不能被合并过程删掉',
    );
    assert.ok(
      await exists(path.join(out, 'index.html')),
      '站点文件应合并进发布根',
    );
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});
