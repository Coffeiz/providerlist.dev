#!/usr/bin/env node
/**
 * 发布产物合并。
 *
 * 目标：让仓库根的 `dist/` 成为**最终发布根目录**——
 * 网站文件在根，公开 JSON 在 `/v1/`，与 `docs/guides/operations.md` 的
 * wrangler 配置（`"assets": { "directory": "./dist" }`）对齐。
 *
 * 两段构建的产物关系：
 *
 * ```
 *   pipeline ──▶ dist/v1/**                  对外 JSON（权威）
 *              └─ dist/assets/datasets/**   站点专用数据
 *   frontend (vite)    ──▶ frontend/dist/** 站点（自带两份数据拷贝）
 *                            │
 *                            └──▶ dist/         ← 本脚本合并
 * ```
 *
 * 合并规则：
 * - 站点文件（`index.html`、`assets/`）复制进 `dist/` 根。
 * - `dist/v1/**` 与 `dist/assets/datasets/**` **以 generator 产物为准**——站点里那份只是自包含的便利拷贝，
 *   合并时用权威版本覆盖，避免两个来源不一致。
 * - **不删除** `dist/v1/`：generator 已经清理过陈旧产物，本脚本只做叠加。
 *
 * 合并后必须自检：SPA fallback 陷阱——`/v1/*.json` 必须是真实文件，
 * 否则静态托管会把不存在的 JSON 请求错返回 `index.html`（200 HTML）。
 *
 * 用法：node scripts/build-release.mjs [--catalog DIR] [--site DIR] [--out DIR]
 * 默认：catalog=<repo>/dist/v1，site=<repo>/frontend/dist，out=<repo>/dist
 * 退出码 0 = 合并成功，1 = 失败。
 */

import { cp, mkdir, readFile, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const repoRoot = path.resolve(import.meta.dirname, '..');

/** 解析 `--key value` 形式的参数。 */
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token?.startsWith('--')) continue;
    const key = token.slice(2);
    const value = argv[i + 1];
    if (value && !value.startsWith('--')) {
      out[key] = value;
      i += 1;
    }
  }
  return out;
}

async function exists(target) {
  return (await stat(target).catch(() => null)) !== null;
}

/** 站点产物里需要复制到发布根的条目（`v1/` 除外；datasets 后续由 generator 覆盖）。 */
async function siteEntries(siteDir) {
  return (await readdir(siteDir, { withFileTypes: true }))
    .filter((entry) => entry.isFile() || entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => name !== 'v1');
}

/**
 * Copy site assets without replacing the generator-owned dataset directory.
 *
 * 同时**删除发布根里站点侧已不存在的资产**。构建产物带内容哈希，
 * 每次构建文件名都会变；只做覆盖不删除，会让上一轮的哈希文件
 * 一直留在发布根里（既白占部署体积，也让人误以为还有多版本并存）。
 */
async function mergeSiteAssets(siteAssetsDir, releaseAssetsDir) {
  await mkdir(releaseAssetsDir, { recursive: true });
  const siteEntries = new Set();
  for (const entry of await readdir(siteAssetsDir, { withFileTypes: true })) {
    if (entry.name === 'datasets') continue;
    siteEntries.add(entry.name);
    const source = path.join(siteAssetsDir, entry.name);
    const target = path.join(releaseAssetsDir, entry.name);
    await rm(target, { recursive: true, force: true });
    await cp(source, target, { recursive: true });
  }
  for (const entry of await readdir(releaseAssetsDir, { withFileTypes: true })) {
    if (entry.name === 'datasets') continue;
    if (siteEntries.has(entry.name)) continue;
    await rm(path.join(releaseAssetsDir, entry.name), { recursive: true, force: true });
  }
}

/** 递归列出目录下所有文件的相对路径。 */
async function listFiles(dir, base = dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listFiles(full, base)));
    else if (entry.isFile()) out.push(path.relative(base, full));
  }
  return out;
}

/**
 * 把公开 JSON 产物合并进发布根的 `v1/`。
 *
 * 默认情况下 **catalog 就在发布根里面**（`<repo>/dist/v1` 是 `<repo>/dist` 的子目录）。
 * 这时如果先 `rm -rf` 再拷贝，等于把源目录删掉——正是
 * 「两个构建脚本互相覆盖目录」那个陷阱。
 *
 * 所以：
 * - 源与目标是同一路径 → 什么都不用做。
 * - 否则复制过去，并**清理陈旧文件**（源里没有的），
 *   而不是整体删除——整体删除会把「源即目标」的情况也一起搞坏。
 */
async function mergeCatalog(catalogDir, targetDir) {
  if (path.resolve(catalogDir) === path.resolve(targetDir)) return;

  await cp(catalogDir, targetDir, { recursive: true, force: true });

  const expected = new Set(await listFiles(catalogDir));
  for (const relative of await listFiles(targetDir)) {
    if (expected.has(relative)) continue;
    await rm(path.join(targetDir, relative), { force: true });
  }
}

async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const catalogDir = path.resolve(args.catalog ?? path.join(repoRoot, 'dist', 'v1'));
  const siteDir = path.resolve(args.site ?? path.join(repoRoot, 'frontend', 'dist'));
  const releaseDir = path.resolve(args.out ?? path.join(repoRoot, 'dist'));

  if (!(await exists(catalogDir))) {
    console.error('✗ 未找到公开 JSON 产物。请先运行 `pnpm build:catalog`。');
    process.exitCode = 1;
    return;
  }
  if (!(await exists(siteDir))) {
    console.error('✗ 未找到站点产物。请先运行 `pnpm build:frontend`。');
    process.exitCode = 1;
    return;
  }

  const entries = await siteEntries(siteDir);
  for (const name of entries) {
    const from = path.join(siteDir, name);
    const to = path.join(releaseDir, name);
    if (name === 'assets') {
      await mergeSiteAssets(from, to);
      continue;
    }
    await rm(to, { recursive: true, force: true });
    await cp(from, to, { recursive: true });
  }

  // 发布根里如果还留着站点已不再产出的目录（例如被移除的自托管字体），
  // 它们会被一起部署上去——既白占体积，也让人误判线上还有这些资源。
  // `v1/` 由 generator 管理，不在这里清理。
  for (const entry of await readdir(releaseDir, { withFileTypes: true })) {
    if (entry.name === 'v1') continue;
    if (entries.includes(entry.name)) continue;
    await rm(path.join(releaseDir, entry.name), { recursive: true, force: true });
  }

  // 公开 JSON 以 **generator 产物为准**。
  // 站点产物里那份 v1/ 只是自包含的便利拷贝，合并时用权威版本覆盖——
  // 否则「两个来源不一致」的问题会被带上线。
  await mergeCatalog(catalogDir, path.join(releaseDir, 'v1'));

  // 站点内部数据集由目录编译器单独生成，不能使用可能过期的 Vite 拷贝。
  const datasetDir = path.join(path.dirname(catalogDir), 'assets', 'datasets');
  if (!(await exists(datasetDir))) {
    console.error('✗ 未找到站点数据集产物。请确认目录编译器已完成。');
    process.exitCode = 1;
    return;
  }
  await mergeCatalog(datasetDir, path.join(releaseDir, 'assets', 'datasets'));

  // 自检：发布根必须能独立提供 /v1/*.json
  const required = [
    'index.html',
    path.join('v1', 'manifest.json'),
    path.join('v1', 'schema', 'public-provider.schema.json'),
    path.join('assets', 'datasets', 'catalog-current.json'),
  ];
  for (const relative of required) {
    if (!(await exists(path.join(releaseDir, relative)))) {
      console.error(`✗ 发布产物缺少 ${relative}`);
      process.exitCode = 1;
      return;
    }
  }

  // manifest 必须能解析，且声明的文件都在
  const manifest = JSON.parse(
    await readFile(path.join(catalogDir, 'manifest.json'), 'utf8'),
  );
  for (const file of manifest.files) {
    const target = path.join(releaseDir, file.path.replace(/^\//, ''));
    if (!(await exists(target))) {
      console.error(`✗ manifest 声明的文件不存在于发布产物：${file.path}`);
      process.exitCode = 1;
      return;
    }
  }

  const siteFiles = entries.filter((name) => !name.startsWith('.'));
  console.log(`✓ 发布产物合并完成 → ${releaseDir}`);
  console.log(`  站点文件：${siteFiles.join(', ')}`);
  console.log(`  公开 JSON：${manifest.files.length} 个（/v1/**）`);
  console.log('  SPA fallback 自检：/v1/*.json 均为真实文件，不会被错返回 index.html');
}

// 用 fileURLToPath 比较：仓库路径含非 ASCII 字符时 import.meta.url 是百分号编码的，
// 直接和 process.argv[1] 比会不相等——脚本会静默什么都不做（退出码仍是 0）。
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
