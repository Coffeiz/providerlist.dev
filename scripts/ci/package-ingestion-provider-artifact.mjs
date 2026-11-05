#!/usr/bin/env node
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const provider = process.env.INGEST_PROVIDER;
const runnerTemp = process.env.RUNNER_TEMP;
const summaryPath = process.env.INGEST_HANDOFF_SUMMARY_PATH;
const outcome = process.env.INGEST_COLLECT_STEP_OUTCOME;
if (!provider || !/^[a-z0-9-]+$/.test(provider) || !runnerTemp || !summaryPath) {
  throw new Error('缺少采集 Artifact 所需的 Provider 或 Runner 环境变量');
}

const root = process.cwd();
const outputDirectory = path.join(runnerTemp, 'provider-ingest-output', provider);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

let baseline = { provider_id: provider, base_state_tree: null, base_lifecycle_tree: null, base_viewer_blob: null, base_main_state_tree: null, base_main_lifecycle_tree: null };
try { baseline = JSON.parse(await readFile(path.join(runnerTemp, 'provider-ingestion-baseline.json'), 'utf8')); }
catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }

const summary = await readFile(summaryPath, 'utf8').catch(() => '');
const row = summary.split(/\r?\n/).find((line) => line.startsWith(`| \`${provider}\` |`));
const cells = row?.split('|').map((cell) => cell.trim()).filter(Boolean) ?? [];
const statusMatch = cells[1]?.match(/^`(unchanged|changed_ready|needs_review|invalid_data|collection_failed)`$/);
const fingerprintMatch = cells[2]?.match(/^`(sha256:[a-f0-9]{64})`$/);
const status = outcome === 'success' && statusMatch ? statusMatch[1] : 'collection_failed';
const fingerprint = fingerprintMatch?.[1] ?? null;
const candidateScopeCell = cells[6] ?? '';
const candidateScopes = candidateScopeCell
  ? candidateScopeCell.replaceAll('`', '').split('+').filter(Boolean)
  : outcome === 'success' ? [] : ['legacy'];
if (!candidateScopes.length || candidateScopes.some((scope) => !isCandidateScope(scope))) throw new Error('采集摘要中的候选范围无效');
const irFingerprint = cells[7]?.match(/^`(sha256:[a-f0-9]{64})`$/)?.[1] ?? null;
const message = status === 'collection_failed'
  ? `采集步骤未成功完成（${outcome ?? 'unknown'}），请查看对应 job 日志。`
  : (cells[5] ?? '');

const candidateSource = path.join(root, 'data/candidates', provider);
const candidateTarget = path.join(outputDirectory, 'data/candidates', provider);
for (const candidateScope of candidateScopes) {
  const scopeParts = candidateScope === 'legacy' ? [] : [candidateScope];
  for (const filename of ['state.json', 'current-supply-state.json', 'catalog-absence.json']) {
    const scopeRoot = path.join(candidateSource, ...scopeParts);
    await copyIfPresent(path.join(scopeRoot, filename), path.join(candidateTarget, ...scopeParts, filename));
  }
}
await copyIfPresent(path.join(candidateSource, 'viewer.md'), path.join(candidateTarget, 'viewer.md'));
for (const candidateScope of candidateScopes) {
  const scopeParts = candidateScope === 'legacy' ? [] : [candidateScope];
  const scopeRoot = path.join(candidateSource, ...scopeParts);
  const scopeFingerprint = await readCandidateFingerprint(scopeRoot)
    ?? (candidateScope.startsWith('ir') ? irFingerprint ?? fingerprint : fingerprint);
  for (const directory of ['decisions', 'reviews']) {
    const source = path.join(scopeRoot, directory);
    if (directory === 'reviews' && scopeFingerprint) {
      const hash = scopeFingerprint.slice(7);
      for (const extension of ['json', 'md']) {
        await copyIfPresent(path.join(source, `${hash}.${extension}`), path.join(candidateTarget, ...scopeParts, directory, `${hash}.${extension}`));
      }
    } else if (directory === 'decisions') {
      await copyDirectoryIfPresent(source, path.join(candidateTarget, ...scopeParts, directory));
    }
  }
}

const snapshotBundle = await createProviderSnapshotBundle(
  candidateTarget,
  path.join(root, 'data/upstream/snapshots'),
  outputDirectory,
);
await copyDirectoryIfPresent(path.join(root, 'data/ingestion-lifecycle', provider), path.join(outputDirectory, 'data/ingestion-lifecycle', provider));

const viewerPath = path.join(candidateSource, 'viewer.md');
const viewerBlob = await fileExists(viewerPath)
  ? execFileSync('git', ['hash-object', viewerPath], { encoding: 'utf8' }).trim()
  : null;
const manifest = {
  provider_id: provider,
  candidate_scope: candidateScopes.length === 1 ? candidateScopes[0] : 'multi',
  candidate_scopes: candidateScopes,
  status,
  fingerprint,
  ir_fingerprint: irFingerprint,
  message,
  base_state_tree: baseline.base_state_tree ?? null,
  base_lifecycle_tree: baseline.base_lifecycle_tree ?? null,
  base_viewer_blob: baseline.base_viewer_blob ?? null,
  base_main_state_tree: baseline.base_main_state_tree ?? null,
  base_main_lifecycle_tree: baseline.base_main_lifecycle_tree ?? null,
  viewer_blob: viewerBlob,
  collector_outcome: outcome ?? 'unknown',
  snapshot_bundle: snapshotBundle,
};
await writeFile(path.join(outputDirectory, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`已打包 ${provider} Artifact，状态：${status}。`);
if (snapshotBundle) {
  console.log(
    `来源快照已精简为单个压缩包：${snapshotBundle.sources} 个来源，${snapshotBundle.versions} 个被候选引用的版本，` +
      `${snapshotBundle.raw_bytes} bytes → ${snapshotBundle.compressed_bytes} bytes。`,
  );
} else {
  console.log('当前候选没有来源快照引用；未生成空快照包。');
}

async function copyIfPresent(source, target) {
  if (!await fileExists(source)) return;
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { force: true });
}

async function copyDirectoryIfPresent(source, target) {
  if (!await fileExists(source)) return;
  const entries = await readdir(source);
  if (!entries.length) return;
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { recursive: true, force: true });
}

async function createProviderSnapshotBundle(candidateDirectory, snapshotsDirectory, artifactDirectory) {
  const references = new Map();
  await collectSnapshotReferences(candidateDirectory, references);
  if (!references.size) return null;

  const stagingRoot = path.join(artifactDirectory, '.snapshot-bundle-staging');
  const bundlePath = path.join(artifactDirectory, 'snapshot-bundle.tar.gz');
  await rm(stagingRoot, { recursive: true, force: true });
  await rm(bundlePath, { force: true });

  let rawBytes = 0;
  const sources = new Set();
  try {
    const orderedReferences = [...references.values()].sort((left, right) =>
      `${left.source_id}/${left.body_file}`.localeCompare(`${right.source_id}/${right.body_file}`),
    );
    for (const reference of orderedReferences) {
      const sourceDir = path.join(snapshotsDirectory, reference.source_id);
      const bodyPath = path.join(sourceDir, reference.body_file);
      const metadataPath = path.join(sourceDir, reference.body_file.replace(/\.body$/u, '.json'));
      const [body, metadataText] = await Promise.all([
        readFile(bodyPath).catch((error) => missingSnapshot(error, bodyPath)),
        readFile(metadataPath, 'utf8').catch((error) => missingSnapshot(error, metadataPath)),
      ]);
      const metadata = JSON.parse(metadataText);
      const bodyHash = `sha256:${createHash('sha256').update(body).digest('hex')}`;
      if (metadata.source_id !== reference.source_id || metadata.body_file !== reference.body_file ||
        metadata.content_hash !== reference.content_hash || bodyHash !== reference.content_hash ||
        metadata.byte_length !== body.byteLength) {
        throw new Error(`候选引用的来源快照元数据或正文校验失败：${reference.source_id}/${reference.body_file}`);
      }

      const targetDir = path.join(stagingRoot, 'data/upstream/snapshots', reference.source_id);
      await mkdir(targetDir, { recursive: true });
      await Promise.all([
        cp(bodyPath, path.join(targetDir, reference.body_file)),
        cp(metadataPath, path.join(targetDir, path.basename(metadataPath))),
      ]);
      rawBytes += body.byteLength + Buffer.byteLength(metadataText);
      sources.add(reference.source_id);
    }
    try {
      execFileSync('tar', ['-czf', bundlePath, '-C', stagingRoot, 'data/upstream/snapshots'], { stdio: 'pipe' });
    } catch (error) {
      const stderr = error instanceof Error && 'stderr' in error ? String(error.stderr) : String(error);
      throw new Error(`无法创建 Provider 来源快照聚合包：${stderr}`);
    }
  } catch (error) {
    await rm(bundlePath, { force: true });
    throw error;
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }

  return {
    file: 'snapshot-bundle.tar.gz',
    sources: sources.size,
    versions: references.size,
    raw_bytes: rawBytes,
    compressed_bytes: (await stat(bundlePath)).size,
  };
}

async function collectSnapshotReferences(directory, result) {
  if (!await fileExists(directory)) return;
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectSnapshotReferences(entryPath, result);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
    let value;
    try { value = JSON.parse(await readFile(entryPath, 'utf8')); }
    catch (error) {
      if (error instanceof SyntaxError) continue;
      throw error;
    }
    collectSnapshotReferencesFromValue(value, result, entryPath);
  }
}

function collectSnapshotReferencesFromValue(value, result, candidatePath) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectSnapshotReferencesFromValue(item, result, candidatePath));
    return;
  }
  if (!value || typeof value !== 'object') return;

  addSnapshotReference(value, result, candidatePath);
  for (const [key, item] of Object.entries(value)) {
    if (key === 'source_id' || key === 'body_file' || key === 'content_hash') continue;
    collectSnapshotReferencesFromValue(item, result, candidatePath);
  }
}

function addSnapshotReference(value, result, candidatePath) {
  const { source_id: sourceId, body_file: bodyFile, content_hash: contentHash } = value;
  if (typeof sourceId !== 'string' || typeof bodyFile !== 'string' || typeof contentHash !== 'string') return;
  const validSourceId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(sourceId);
  const validBodyFile = path.basename(bodyFile) === bodyFile && /^sha256-[a-f0-9]{64}\.body$/u.test(bodyFile);
  const validHash = /^sha256:[a-f0-9]{64}$/u.test(contentHash) && bodyFile === `${contentHash.replace(':', '-')}.body`;
  if (!validSourceId || !validBodyFile || !validHash) {
    throw new Error(`候选包含无效的来源快照引用：${candidatePath}`);
  }
  result.set(`${sourceId}/${bodyFile}`, { source_id: sourceId, body_file: bodyFile, content_hash: contentHash });
}

function missingSnapshot(error, filePath) {
  if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
    throw new Error(`候选引用的来源快照文件不存在：${filePath}`);
  }
  throw error;
}

async function fileExists(filePath) {
  try { await stat(filePath); return true; }
  catch (error) { if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return false; throw error; }
}

function isCandidateScope(scope) {
  return scope === 'legacy' || (/^[a-z0-9][a-z0-9-]*$/.test(scope) && scope !== 'multi');
}

async function readCandidateFingerprint(scopeRoot) {
  for (const filename of ['state.json', 'current-supply-state.json']) {
    try {
      const state = JSON.parse(await readFile(path.join(scopeRoot, filename), 'utf8'));
      if (typeof state.candidate_hash === 'string' && /^sha256:[a-f0-9]{64}$/.test(state.candidate_hash)) return state.candidate_hash;
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') continue;
      if (error instanceof SyntaxError) continue;
      throw error;
    }
  }
  return null;
}
