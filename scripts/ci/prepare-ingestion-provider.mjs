#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const provider = process.env.INGEST_PROVIDER;
const repository = process.env.GITHUB_REPOSITORY;
const runnerTemp = process.env.RUNNER_TEMP;
if (!provider || !/^[a-z0-9-]+$/.test(provider) || !repository || !runnerTemp) {
  throw new Error('缺少有效的 Provider、仓库或 Runner 临时目录');
}

const stateRef = 'refs/remotes/origin/provider-ingest-state';
const prRef = 'refs/remotes/origin/automation/provider-ingest';
if (remoteBranchExists('provider-ingest-state')) fetchBranch('provider-ingest-state', stateRef);
if (remoteBranchExists('automation/provider-ingest')) fetchBranch('automation/provider-ingest', prRef);

const baseStateTree = treeHash(stateRef, `data/candidates/${provider}`);
const baseLifecycleTree = treeHash(stateRef, `data/ingestion-lifecycle/${provider}`);
const baseViewerBlob = blobHash(prRef, `data/candidates/${provider}/viewer.md`);
const baseMainStateTree = treeHash('HEAD', `data/candidates/${provider}`);
const baseMainLifecycleTree = treeHash('HEAD', `data/ingestion-lifecycle/${provider}`);
const candidateDir = path.join('data/candidates', provider);
const lifecycleDir = path.join('data/ingestion-lifecycle', provider);

await copyBranchFiles(stateRef, candidateDir, [
  new RegExp(`^${escapeRegex(candidateDir)}/(?:(?:ir|global|ir-global)/)?(?:state|current-supply-state|catalog-absence)\\.json$`),
  new RegExp(`^${escapeRegex(candidateDir)}/(?:ir/)?decisions/[a-f0-9]{64}\\.json$`),
]);
await copyBranchFiles(stateRef, lifecycleDir, [new RegExp(`^${escapeRegex(lifecycleDir)}/(?:ir/)?[a-f0-9]{64}\\.jsonl$`)]);
if (baseViewerBlob) await copyBlob(prRef, `data/candidates/${provider}/viewer.md`);

const baseline = {
  provider_id: provider,
  base_state_tree: baseStateTree,
  base_lifecycle_tree: baseLifecycleTree,
  base_viewer_blob: baseViewerBlob,
  base_main_state_tree: baseMainStateTree,
  base_main_lifecycle_tree: baseMainLifecycleTree,
};
await writeFile(path.join(runnerTemp, 'provider-ingestion-baseline.json'), `${JSON.stringify(baseline, null, 2)}\n`);
console.log(`已为 ${provider} 准备隔离采集基线。`);

function runGit(args, { allowFailure = false } = {}) {
  try { return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim(); }
  catch (error) {
    if (allowFailure) return '';
    const stderr = error instanceof Error && 'stderr' in error ? String(error.stderr) : '';
    throw new Error(`git ${args.join(' ')} 执行失败：${stderr || String(error)}`);
  }
}

function remoteBranchExists(branch) {
  return runGit(['ls-remote', '--heads', 'origin', branch]).length > 0;
}

function fetchBranch(branch, ref) {
  runGit(['fetch', 'origin', `${branch}:${ref}`]);
}

function treeHash(ref, gitPath) {
  if (runGit(['rev-parse', '--verify', ref], { allowFailure: true }) === '') return null;
  return runGit(['rev-parse', '--verify', `${ref}:${gitPath}`], { allowFailure: true }) || null;
}

function blobHash(ref, gitPath) {
  if (runGit(['rev-parse', '--verify', ref], { allowFailure: true }) === '') return null;
  return runGit(['rev-parse', '--verify', `${ref}:${gitPath}`], { allowFailure: true }) || null;
}

async function copyBranchFiles(ref, gitDirectory, allowedPaths) {
  if (runGit(['rev-parse', '--verify', ref], { allowFailure: true }) === '') return;
  const paths = runGit(['ls-tree', '-r', '--name-only', ref, '--', gitDirectory]).split(/\r?\n/).filter(Boolean);
  for (const gitPath of paths) {
    if (!allowedPaths.some((pattern) => pattern.test(gitPath))) continue;
    const target = path.join(process.cwd(), gitPath);
    await mkdir(path.dirname(target), { recursive: true });
    await copyBlob(ref, gitPath, target);
  }
}

async function copyBlob(ref, gitPath, target = path.join(process.cwd(), gitPath)) {
  const content = execFileSync('git', ['show', `${ref}:${gitPath}`], { encoding: 'buffer' });
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
}

function escapeRegex(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
