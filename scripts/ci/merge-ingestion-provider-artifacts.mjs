#!/usr/bin/env node
import { cp, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

import { renderIngestionPrBody } from './render-ingestion-pr-body.mjs';

const providers = JSON.parse(required('INGESTION_PROVIDERS_JSON'));
const artifactsRoot = required('INGESTION_ARTIFACTS_DIR');
const stateDirectory = required('INGEST_STATE_DIR');
const runId = required('GITHUB_RUN_ID');
const runAttempt = process.env.GITHUB_RUN_ATTEMPT ?? '1';
const currentAttempt = Number(runAttempt);
if (!Number.isSafeInteger(currentAttempt) || currentAttempt < 1) throw new Error('GITHUB_RUN_ATTEMPT 必须是正整数');
const repository = required('GITHUB_REPOSITORY');
const serverUrl = process.env.GITHUB_SERVER_URL ?? 'https://github.com';
const prBranch = process.env.INGEST_PR_BRANCH ?? 'automation/provider-ingest';
const fxOutcome = process.env.INGEST_FX_OUTCOME ?? 'skipped';
const prBodyPath = required('INGEST_PR_BODY_PATH');
const summaryPath = required('GITHUB_STEP_SUMMARY');
const workspace = process.cwd();
let parseToml;
if (!Array.isArray(providers) || providers.some((provider) => typeof provider !== 'string' || !/^[a-z0-9-]+$/.test(provider))) {
  throw new Error('并行采集 Provider 清单无效');
}

const reportRows = [];
const runResults = [];
const promotionRows = [];
const modelIdRows = [];
const artifactAttempts = await findArtifactAttempts(artifactsRoot, runId, currentAttempt);
let staleCount = 0;
for (const provider of providers) {
  // A workflow rerun does not recreate artifacts for successful jobs. Reuse the
  // newest available attempt for each Provider, while newer attempts override it.
  const artifactAttempt = artifactAttempts.get(provider);
  const artifactDirectory = artifactAttempt === undefined
    ? null
    : path.join(artifactsRoot, `provider-ingest-${runId}-${artifactAttempt}-${provider}`);
  if (!artifactDirectory) {
    const message = '没有可用的采集 Artifact；检查 Provider job 是否完成或 Artifact 是否已过期';
    reportRows.push(`| \`${provider}\` | \`artifact_missing\` | — | ${safeCell(message)} |`);
    runResults.push({ provider, status: 'artifact_missing', message, fingerprint: null });
    continue;
  }
  const manifestPath = path.join(artifactDirectory, 'manifest.json');
  let manifest;
  try { manifest = JSON.parse(await readFile(manifestPath, 'utf8')); }
  catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    const message = `Artifact 缺少 manifest；检查 Provider job（产物来自 attempt ${artifactAttempt}）`;
    reportRows.push(`| \`${provider}\` | \`artifact_missing\` | — | ${safeCell(message)} |`);
    runResults.push({ provider, status: 'artifact_missing', message, fingerprint: null });
    continue;
  }
  if (manifest.provider_id !== provider) throw new Error(`Artifact Provider 身份不匹配：${provider}`);
  if (manifest.candidate_scope !== undefined && manifest.candidate_scope !== 'multi' && !isCandidateScope(manifest.candidate_scope)) {
    throw new Error(`Artifact 候选范围无效：${provider}`);
  }
  const candidateScopes = manifest.candidate_scopes ?? [manifest.candidate_scope ?? 'legacy'];
  if (!Array.isArray(candidateScopes) || !candidateScopes.length || candidateScopes.some((scope) => !isCandidateScope(scope))) {
    throw new Error(`Artifact 候选范围列表无效：${provider}`);
  }
  if (manifest.status === 'collection_failed') {
    reportRows.push(`| \`${provider}\` | \`collection_failed\` | — | ${safeCell(manifest.message)} |`);
    runResults.push({ provider, status: 'collection_failed', message: manifest.message ?? '', fingerprint: manifest.fingerprint ?? null });
    continue;
  }

  const currentStateTree = treeHash(stateDirectory, `data/candidates/${provider}`);
  const currentLifecycleTree = treeHash(stateDirectory, `data/ingestion-lifecycle/${provider}`);
  const currentMainStateTree = treeHash(workspace, `data/candidates/${provider}`);
  const currentMainLifecycleTree = treeHash(workspace, `data/ingestion-lifecycle/${provider}`);
  const currentViewerBlob = blobHash('HEAD', `data/candidates/${provider}/viewer.md`);
  const staleReasons = [];
  if (currentStateTree !== (manifest.base_state_tree ?? null)) staleReasons.push('候选基线已由另一轮采集推进');
  if (currentLifecycleTree !== (manifest.base_lifecycle_tree ?? null)) staleReasons.push('候选生命周期已由另一轮评审推进');
  if (currentMainStateTree !== (manifest.base_main_state_tree ?? null)) staleReasons.push('main 分支的同 Provider 候选已被人工更新');
  if (currentMainLifecycleTree !== (manifest.base_main_lifecycle_tree ?? null)) staleReasons.push('main 分支的同 Provider 生命周期已被人工更新');
  if (currentViewerBlob !== (manifest.base_viewer_blob ?? null)) staleReasons.push('聚合 PR 中的 Provider 报告已发生变化');
  if (staleReasons.length) {
    staleCount += 1;
    const reason = `${staleReasons.join('；')}；未覆盖基线，请重跑该 Provider`;
    reportRows.push(`| \`${provider}\` | \`stale_needs_rerun\` | ${manifest.fingerprint ? `\`${manifest.fingerprint}\`` : '—'} | ${safeCell(reason)} |`);
    runResults.push({ provider, status: 'stale_needs_rerun', message: reason, fingerprint: manifest.fingerprint ?? null });
    continue;
  }

  for (const candidateScope of candidateScopes) {
    await mergeProviderState(artifactDirectory, stateDirectory, provider, candidateScope);
  }
  for (const candidateScope of candidateScopes.filter((scope) => scope === 'ir' || scope === 'ir-global')) {
    const addedModelIds = await recordNewModelIds(provider, candidateScope);
    if (addedModelIds.length) {
      modelIdRows.push(`| \`${provider}\` / \`${candidateScope}\` | ${addedModelIds.map((id) => `\`${safeCell(id)}\``).join(', ')} |`);
    }
  }
  for (const candidateScope of candidateScopes.filter((scope) => scope === 'ir' || scope === 'ir-global')) {
    try {
      const output = execFileSync('pnpm', [
        '--filter', '@providerlist/pipeline', 'ingest:ir:apply', '--', provider, candidateScope,
      ], { cwd: workspace, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
      promotionRows.push(`| \`${provider}\` / \`${candidateScope}\` | ${safeCell(output || '无正式字段变化')} |`);
    } catch (error) {
      const stderr = error instanceof Error && 'stderr' in error ? String(error.stderr) : String(error);
      promotionRows.push(`| \`${provider}\` / \`${candidateScope}\` | 投影待核：${safeCell(stderr)} |`);
    }
  }
  const viewerPath = path.join('data/candidates', provider, 'viewer.md');
  if (manifest.viewer_blob && manifest.viewer_blob !== (manifest.base_viewer_blob ?? null)) {
    const sourceViewer = path.join(artifactDirectory, viewerPath);
    if (!await exists(sourceViewer)) throw new Error(`变化报告缺失：${sourceViewer}`);
    const targetViewer = path.join(workspace, viewerPath);
    await mkdir(path.dirname(targetViewer), { recursive: true });
    await cp(sourceViewer, targetViewer, { force: true });
  }
  const reusedAttempt = artifactAttempt < currentAttempt ? `复用 attempt ${artifactAttempt} 的采集产物` : '';
  const message = [manifest.message, reusedAttempt].filter(Boolean).join('；');
  reportRows.push(`| \`${provider}\` | \`${manifest.status}\` | ${manifest.fingerprint ? `\`${manifest.fingerprint}\`` : '—'} | ${safeCell(message)} |`);
  runResults.push({ provider, status: manifest.status, message, fingerprint: manifest.fingerprint ?? null });
}

const pendingViewers = await listPendingViewers();

const summary = [
  '## Provider 并行采集结果',
  '',
  '| Provider | 状态 | 候选指纹 | 说明 |',
  '|---|---|---|---|',
  ...reportRows,
  '',
  '## ECB 参考汇率',
  '',
  fxOutcome === 'success'
    ? '汇率采集成功；快照差异会随本 PR 一并审阅。'
    : '汇率采集失败；现有快照已保留。请检查 Sync 日志并重试。',
  '',
  '### IR 正式字段投影（随本 PR 审核）',
  '',
  '| Provider / 候选范围 | 结果 |',
  '|---|---|',
  ...(promotionRows.length ? promotionRows : ['| 无 | 本轮没有可投影的 IR 候选 |']),
  '',
  '### 新发现的模型 ID（仅供人工补录 Model）',
  '',
  '| Provider / 候选范围 | 新增 ID |',
  '|---|---|',
  ...(modelIdRows.length ? modelIdRows : ['| 无 | 本轮没有新增 Provider Model ID |']),
  '',
  '新增 ID 只写入 `data/candidates/<provider>/model-ids.json`；不会自动创建规范 Model、类型、规格、能力、限制、价格或 Route。模型事实继续人工核验并维护在 `data/models/`。',
  '',
  '投影写入 `data/providers/` 与自动采集来源记录 `data/collector/providers.json` 的 PR 差异；来源证据保留在采集候选和评审报告中。PR 获批并合并后，Provider 事实才进入正式目录。',
  '',
  `当前聚合分支待评审报告：${pendingViewers.length} 份；本轮因基线冲突跳过 ${staleCount} 家，需重跑对应 Provider。`,
  '',
].join('\n');
await writeFile(summaryPath, `${summary}\n`, { flag: 'a' });

const template = await readFile(path.join(workspace, '.github/templates/ingestion-pr.md'), 'utf8');
const irProjectionSummary = [
  '### ECB 参考汇率',
  '',
  fxOutcome === 'success'
    ? '汇率采集成功；如有变化，快照位于 `data/upstream/fx/eur-reference.json`，随本 PR 审阅。'
    : '汇率采集失败；现有快照已保留，请检查 Sync 日志并重试。',
  '',
  promotionRows.length
    ? ['### Provider 数据投影', '', '| Provider / 候选范围 | 结果 |', '|---|---|', ...promotionRows].join('\n')
    : '### Provider 数据投影\n\n本轮没有可投影的 IR 候选。',
  '### 新发现模型 ID（ID-only）',
  '',
  '| Provider / 候选范围 | 新增 ID |',
  '|---|---|',
  ...(modelIdRows.length ? modelIdRows : ['| 无 | 本轮没有新增 Provider Model ID |']),
  '',
  '新 ID 写入 `data/candidates/<provider>/model-ids.json` 并随本 PR 合并；不自动生成正式 Model。模型规格、类型、能力、限制和发布信息继续手动维护，Provider 数据照常投影。',
].join('\n\n');
const prBody = renderIngestionPrBody({
  template,
  runEntries: runResults,
  viewerEntries: pendingViewers,
  irProjectionSummary,
  repository,
  serverUrl,
  viewerRef: prBranch,
});
await writeFile(prBodyPath, prBody);
await writeFile(process.env.GITHUB_OUTPUT, `changed_providers=${JSON.stringify(pendingViewers.map(({ provider }) => provider))}\n`);
console.log(`当前聚合 PR 有 ${pendingViewers.length} 个 Provider viewer；本轮跳过 ${staleCount} 个基线已变化的结果。`);

async function recordNewModelIds(provider, candidateScope) {
  const scopeParts = candidateScope === 'ir' ? ['ir'] : ['ir-global'];
  const statePath = path.join(workspace, 'data/candidates', provider, ...scopeParts, 'state.json');
  if (!await exists(statePath)) return [];
  const state = JSON.parse(await readFile(statePath, 'utf8'));
  const ir = state.facts;
  if (state.provider_id !== provider || ir?.provider_id !== provider || !Array.isArray(ir.services)) {
    throw new Error(`IR 候选身份或服务列表无效：${provider}/${candidateScope}`);
  }

  let known = new Set();
  known = new Set(await readProviderModelIds(workspace, provider));

  const observed = new Set();
  for (const service of ir.services) {
    for (const offering of service.offerings ?? []) {
      const modelId = offering.provider_model_id?.value;
      if (typeof modelId === 'string' && modelId.trim() && !known.has(modelId.trim())) observed.add(modelId.trim());
    }
  }

  const candidatePath = path.join(workspace, 'data/candidates', provider, 'model-ids.json');
  let existing = [];
  if (await exists(candidatePath)) {
    existing = JSON.parse(await readFile(candidatePath, 'utf8'));
    if (!Array.isArray(existing) || existing.some((id) => typeof id !== 'string')) {
      throw new Error(`ID-only Model 候选文件格式无效：${candidatePath}`);
    }
  }
  const alreadyCandidate = new Set(existing);
  const newlyObserved = [...observed].filter((id) => !alreadyCandidate.has(id));
  if (!newlyObserved.length) return [];
  const merged = [...new Set([...existing, ...observed])].sort((left, right) => left.localeCompare(right));
  await mkdir(path.dirname(candidatePath), { recursive: true });
  await writeFile(candidatePath, `${JSON.stringify(merged, null, 2)}\n`);
  return newlyObserved.sort((left, right) => left.localeCompare(right));
}

async function findArtifactAttempts(root, workflowRunId, maxAttempt) {
  const attempts = new Map();
  let entries;
  try { entries = await readdir(root, { withFileTypes: true }); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return attempts;
    throw error;
  }
  const prefix = `provider-ingest-${workflowRunId}-`;
  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.startsWith(prefix)) continue;
    const match = entry.name.slice(prefix.length).match(/^(\d+)-([a-z0-9-]+)$/);
    if (!match) continue;
    const attempt = Number(match[1]);
    const provider = match[2];
    if (!Number.isSafeInteger(attempt) || attempt < 1 || attempt > maxAttempt) continue;
    if (attempt > (attempts.get(provider) ?? 0)) attempts.set(provider, attempt);
  }
  return attempts;
}

async function readProviderModelIds(root, provider) {
  const providerRoot = path.join(root, 'data/providers', provider);
  const legacyPath = path.join(root, 'data/providers', `${provider}.json`);
  if (!await exists(providerRoot)) {
    if (!await exists(legacyPath)) return [];
    const document = JSON.parse(await readFile(legacyPath, 'utf8'));
    return (document.services ?? []).flatMap((service) => (service.offerings ?? []).map((offering) => offering.id ?? offering.provider_model_id));
  }
  const entries = await readdir(providerRoot, { withFileTypes: true });
  const ids = [];
  for (const entry of entries.filter((item) => item.isDirectory())) {
    const serviceRoot = path.join(providerRoot, entry.name);
    const offeringsPath = path.join(serviceRoot, 'offerings.json');
    if (await exists(offeringsPath)) {
      const offerings = JSON.parse(await readFile(offeringsPath, 'utf8'));
      if (!Array.isArray(offerings)) throw new Error(`Provider Offering 源文件格式无效：${offeringsPath}`);
      ids.push(...offerings.map((offering) => offering.id ?? offering.provider_model_id));
      continue;
    }
    const offeringsDir = path.join(serviceRoot, 'offerings');
    if (!await exists(offeringsDir)) continue;
    for (const file of (await readdir(offeringsDir, { withFileTypes: true })).filter((item) => item.isFile() && /\.(?:json|toml)$/.test(item.name))) {
      const offeringPath = path.join(offeringsDir, file.name);
      const source = await readFile(offeringPath, 'utf8');
      const offering = file.name.endsWith('.toml') ? parseTomlSource(source) : JSON.parse(source);
      if (!offering || typeof offering.id !== 'string') throw new Error(`Provider Offering 缺少 id：${offeringPath}`);
      ids.push(offering.id);
    }
  }
  return ids;
}

function parseTomlSource(source) {
  if (!parseToml) {
    const require = createRequire(path.join(workspace, 'pipeline/package.json'));
    parseToml = require('smol-toml').parse;
  }
  return parseToml(source);
}

async function mergeProviderState(artifactDirectory, targetDirectory, provider, candidateScope) {
  const sourceRoot = path.join(artifactDirectory, 'data');
  const scopeParts = candidateScope === 'legacy' ? [] : [candidateScope];
  const targetCandidates = path.join(targetDirectory, 'data/candidates', provider, ...scopeParts);
  const sourceCandidates = path.join(sourceRoot, 'candidates', provider, ...scopeParts);
  for (const filename of ['state.json', 'current-supply-state.json', 'catalog-absence.json']) {
    await copyFileIfPresent(path.join(sourceCandidates, filename), path.join(targetCandidates, filename));
  }
  const sourceDecisions = path.join(sourceCandidates, 'decisions');
  if (await exists(sourceDecisions)) {
    await mkdir(path.join(targetCandidates, 'decisions'), { recursive: true });
    await cp(sourceDecisions, path.join(targetCandidates, 'decisions'), { recursive: true, force: true });
  }
  const sourceReviews = path.join(sourceCandidates, 'reviews');
  if (await exists(sourceReviews)) {
    await mkdir(path.join(targetCandidates, 'reviews'), { recursive: true });
    await cp(sourceReviews, path.join(targetCandidates, 'reviews'), { recursive: true, force: true });
  }
  const sourceLifecycle = path.join(sourceRoot, 'ingestion-lifecycle', provider);
  if (await exists(sourceLifecycle)) {
    await mkdir(path.join(targetDirectory, 'data/ingestion-lifecycle', provider), { recursive: true });
    await cp(sourceLifecycle, path.join(targetDirectory, 'data/ingestion-lifecycle', provider), { recursive: true, force: true });
  }
}

async function listPendingViewers() {
  const candidatesRoot = path.join(workspace, 'data/candidates');
  // 还没有任何候选目录时（例如本轮所有 Provider 都采集失败）直接返回空清单，
  // 不能因此崩掉——失败要如实报告，不能阻断整个聚合步骤。
  if (!await exists(candidatesRoot)) return [];
  const providersOnBranch = await readdir(candidatesRoot, { withFileTypes: true });
  const pending = [];
  for (const entry of providersOnBranch) {
    if (!entry.isDirectory() || !/^[a-z0-9-]+$/.test(entry.name)) continue;
    const relativePath = `data/candidates/${entry.name}/viewer.md`;
    const viewerPath = path.join(workspace, relativePath);
    if (!await exists(viewerPath)) continue;
    const viewerHash = git(['hash-object', viewerPath], workspace, true);
    const mainHash = blobHash('origin/main', relativePath);
    if (viewerHash && viewerHash !== mainHash) {
      pending.push({
        provider: entry.name,
        viewerPath: relativePath,
        ...(await readViewerStatus(viewerPath)),
      });
    }
  }
  return pending.sort((a, b) => a.provider.localeCompare(b.provider));
}

/**
 * 从 viewer 里读回采集状态与说明。
 *
 * viewer 是采集器自己写的报告，`needs_review` / `invalid_data` 会在标题后
 * 插入一行 `**采集状态：xxx**`。PR 正文要据此标注哪些 Provider 需要人工判断，
 * 因此这里解析同一行，而不是另建一份状态表。
 */
async function readViewerStatus(viewerPath) {
  try {
    const report = await readFile(viewerPath, 'utf8');
    const match = report.match(/^\*\*采集状态：([a-z_]+)\*\*\s*(?:—\s*(.*))?$/m);
    if (!match) return {};
    return { status: match[1], ...(match[2] ? { message: match[2].trim() } : {}) };
  } catch {
    return {};
  }
}

async function copyFileIfPresent(source, target) {
  if (!await exists(source)) return;
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { force: true });
}

async function exists(target) {
  try { await stat(target); return true; }
  catch (error) { if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return false; throw error; }
}

function git(args, cwd = workspace, allowFailure = false) {
  try { return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim() || null; }
  catch (error) {
    if (allowFailure) return null;
    const stderr = error instanceof Error && 'stderr' in error ? String(error.stderr) : '';
    throw new Error(`git ${args.join(' ')} 执行失败：${stderr || String(error)}`);
  }
}

function treeHash(directory, gitPath) {
  return git(['rev-parse', '--verify', `HEAD:${gitPath}`], directory, true);
}

function blobHash(ref, gitPath) {
  return git(['rev-parse', '--verify', `${ref}:${gitPath}`], workspace, true);
}

function safeCell(value) { return String(value ?? '').replace(/[|\r\n]/g, ' '); }
function isCandidateScope(scope) {
  return scope === 'legacy' || (typeof scope === 'string' && /^[a-z0-9][a-z0-9-]*$/.test(scope) && scope !== 'multi');
}
function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`缺少环境变量 ${name}`);
  return value;
}
