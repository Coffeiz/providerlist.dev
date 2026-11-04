/**
 * 目录编译器测试。
 *
 * 重点覆盖「发布目录与 manifest 清单严格一致」这条不变量：
 * 从 data/ 删除 Provider 后，旧的产物文件不能继续留在发布目录里。
 */

import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { buildCatalog } from './build.ts';

const FIXTURES = path.resolve(import.meta.dirname, '../fixtures/data');

/** 递归复制目录树。 */
async function copyTree(from: string, to: string): Promise<void> {
  await mkdir(to, { recursive: true });
  for (const entry of await readdir(from, { withFileTypes: true })) {
    const source = path.join(from, entry.name);
    const target = path.join(to, entry.name);
    if (entry.isDirectory()) await copyTree(source, target);
    else await writeFile(target, await readFile(source));
  }
}

/** 复制夹具到临时目录，便于单独增删 Provider。 */
async function stageData(): Promise<{ dataDir: string; outDir: string }> {
  const base = await mkdtemp(path.join(tmpdir(), 'providerlist-build-'));
  const dataDir = path.join(base, 'data');
  const outDir = path.join(base, 'dist');
  await mkdir(path.join(dataDir, 'providers'), { recursive: true });
  const entries = await readdir(path.join(FIXTURES, 'providers'));
  for (const name of entries) {
    await writeFile(
      path.join(dataDir, 'providers', name),
      await readFile(path.join(FIXTURES, 'providers', name)),
    );
  }
  // upstream/ 不搬——「缺参考汇率快照」那条用例依赖它一开始就不存在。
  // 规范 Model 注册表是 DATA-3 的硬依赖，编译时没有它会直接中止。
  await copyTree(path.join(FIXTURES, 'models'), path.join(dataDir, 'models'));
  return { dataDir, outDir };
}

test('构建产出的当前目录与 manifest 清单完全一致', async () => {
  const { dataDir, outDir } = await stageData();
  try {
    await buildCatalog({ dataDir, outDir, dataVersion: 'v-test-1' });

    const manifest = JSON.parse(
      await readFile(path.join(outDir, 'v1', 'manifest.json'), 'utf8'),
    ) as { files: { path: string }[] };

    const listed = new Set(manifest.files.map((f) => f.path.replace(/^\/v1\//, '')));
    // manifest 不列自己（无法预先知道自己的哈希），单独计入。
    listed.add('manifest.json');

    // 目录里实际存在的公开文件必须完整匹配 Manifest。
    const actual: string[] = [];
    const walk = async (dir: string, prefix: string): Promise<void> => {
      for (const entry of await readdir(dir, { withFileTypes: true })) {
        const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
        if (entry.isDirectory()) await walk(path.join(dir, entry.name), rel);
        else actual.push(rel);
      }
    };
    await walk(path.join(outDir, 'v1'), '');

    // 当前目录不得有清单外的文件
    for (const file of actual) {
      assert.ok(listed.has(file), `发布目录存在清单外的文件：${file}`);
    }
    // 清单里的每个文件都必须真实存在（含快照）
    for (const file of listed) {
      const onDisk = path.join(outDir, 'v1', file);
      await readFile(onDisk, 'utf8'); // 不存在则抛错
    }
  } finally {
    await rm(path.dirname(outDir), { recursive: true, force: true });
  }
});

test('删除 Provider 后旧产物不再残留，但历史快照保留', async () => {
  const { dataDir, outDir } = await stageData();
  try {
    const first = await buildCatalog({ dataDir, outDir, dataVersion: 'v-test-1' });
    assert.ok(
      first.files.some((f) => f.path === '/v1/providers/example-ai.json'),
      '首次构建应产出 example-ai',
    );

    // 从源数据里移除一个 Provider。
    await rm(path.join(dataDir, 'providers', 'example-ai.json'));

    const second = await buildCatalog({ dataDir, outDir, dataVersion: 'v-test-2' });

    // 清单里不再有它
    assert.ok(
      !second.files.some((f) => f.path === '/v1/providers/example-ai.json'),
      '重建后清单不应再包含已删除的 Provider',
    );

    // 当前目录里也不能残留
    const stale = path.join(outDir, 'v1', 'providers', 'example-ai.json');
    await assert.rejects(
      () => readFile(stale, 'utf8'),
      '已删除的 Provider 不应继续留在发布目录中',
    );

    await assert.rejects(
      () => readFile(path.join(outDir, 'v1', 'snapshots', 'v-test-1', 'providers', 'example-ai.json'), 'utf8'),
      '不应生成公开版本快照',
    );
  } finally {
    await rm(path.dirname(outDir), { recursive: true, force: true });
  }
});

test('校验不通过时不产出任何产物，也不清理已有目录', async () => {
  const { dataDir, outDir } = await stageData();
  try {
    await buildCatalog({ dataDir, outDir, dataVersion: 'v-test-1' });

    // 写一个非法 Provider：币种不是 ISO 4217
    await writeFile(
      path.join(dataDir, 'providers', 'broken.json'),
      JSON.stringify({
        provider: { id: 'broken', name: 'Broken', kind: 'vendor' },
        services: [],
      }),
    );
    await assert.rejects(
      () => buildCatalog({ dataDir, outDir, dataVersion: 'v-test-2' }),
      '校验失败必须中止构建',
    );

    // 上一版产物应完好
    const manifest = await readFile(path.join(outDir, 'v1', 'manifest.json'), 'utf8');
    assert.match(manifest, /v-test-1/);
  } finally {
    await rm(path.dirname(outDir), { recursive: true, force: true });
  }
});

test('有参考汇率快照时同时发布站点与公开参考汇率数据', async () => {
  const { dataDir, outDir } = await stageData();
  try {
    await mkdir(path.join(dataDir, 'upstream', 'fx'), { recursive: true });
    await writeFile(
      path.join(dataDir, 'upstream', 'fx', 'eur-reference.json'),
      await readFile(path.join(FIXTURES, 'upstream', 'fx', 'eur-reference.json')),
    );

    const result = await buildCatalog({ dataDir, outDir, dataVersion: 'v-test-1' });
    assert.ok(result.files.some((f) => f.path === '/v1/fx.json'), '有效汇率快照属于公开 API v1');

    const published = JSON.parse(
      await readFile(path.join(outDir, 'assets', 'datasets', 'fx.json'), 'utf8'),
    ) as { fx_reference: { base: string; as_of_date: string } };
    assert.equal(published.fx_reference.base, 'USD');
    assert.match(published.fx_reference.as_of_date, /^\d{4}-\d{2}-\d{2}$/);
  } finally {
    await rm(path.dirname(outDir), { recursive: true, force: true });
  }
});

test('缺参考汇率快照时不发布 fx.json，只给一条提示', async () => {
  const { dataDir, outDir } = await stageData();
  try {
    const result = await buildCatalog({ dataDir, outDir, dataVersion: 'v-test-1' });

    assert.ok(
      !result.files.some((f) => f.path === '/v1/fx.json'),
      '没有快照时不应发布 fx.json',
    );
    assert.ok(
      result.issues.some((i) => i.code === 'fx.snapshot_absent' && i.severity === 'warning'),
      '应给出「缺快照」提示，而不是静默当作 1:1',
    );
  } finally {
    await rm(path.dirname(outDir), { recursive: true, force: true });
  }
});

test('参考汇率快照不合法时中止构建', async () => {
  const { dataDir, outDir } = await stageData();
  try {
    await mkdir(path.join(dataDir, 'upstream', 'fx'), { recursive: true });
    await writeFile(
      path.join(dataDir, 'upstream', 'fx', 'eur-reference.json'),
      JSON.stringify({
        id: 'fx-broken',
        base: 'USD',
        quotes: [{ currency: 'CNY', rate_decimal: '6.67577' }],
        as_of_date: '2026-10-22',
        retrieved_at: '2026-10-23T00:00:00Z',
        source: { publisher: 'ECB', dataset: 'x', url: 'https://example.com' },
        derivation: { formula: 'USD_per_EUR = (EUR/USD)', pairs: ['USD//EUR'] },
      }),
    );

    await assert.rejects(
      () => buildCatalog({ dataDir, outDir, dataVersion: 'v-test-1' }),
      '参考汇率推导币对错误时必须中止构建',
    );
  } finally {
    await rm(path.dirname(outDir), { recursive: true, force: true });
  }
});
