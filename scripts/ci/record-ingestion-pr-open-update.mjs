#!/usr/bin/env node
import { appendFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const repository = process.env.GITHUB_REPOSITORY;
const action = process.env.INGEST_PR_LIFECYCLE_ACTION;
const prNumber = Number(process.env.INGEST_PR_NUMBER);
const runId = process.env.GITHUB_RUN_ID;
const runAttempt = process.env.GITHUB_RUN_ATTEMPT ?? '1';
const stateDirectory = process.env.INGEST_STATE_DIR ?? 'data/ingestion-lifecycle';
if (!repository || !['opened', 'reopened', 'updated'].includes(action) || !Number.isInteger(prNumber) || prNumber <= 0 || !runId) {
  throw new Error('缺少有效的聚合 PR 生命周期环境变量');
}

const headSha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const pullRequest = `https://github.com/${repository}/pull/${prNumber}`;
const changedPaths = execFileSync('git', [
  'diff', '--name-only', 'origin/main...HEAD', '--', 'data/candidates',
], { encoding: 'utf8' }).split(/\r?\n/).filter(Boolean);
const viewerPaths = [...new Set(changedPaths.filter((file) => /^data\/candidates\/[a-z0-9-]+\/viewer\.md$/.test(file)))];

let written = 0;
for (const viewerPath of viewerPaths) {
  const markdown = await readFile(viewerPath, 'utf8');
  const hash = markdown.match(/^\| 本次候选指纹 \| `sha256:([a-f0-9]{64})` \|$/m)?.[1];
  if (!hash) continue;

  const providerId = viewerPath.split('/')[2];
  const candidateHash = `sha256:${hash}`;
  const lifecyclePath = path.join(stateDirectory, providerId, `${hash}.jsonl`);
  const lifecycleEvent = {
    event_id: `pr-${prNumber}-${action}-${runId}-${runAttempt}`,
    provider_id: providerId,
    candidate_hash: candidateHash,
    event: action,
    occurred_at: new Date().toISOString(),
    pull_request: pullRequest,
    head_sha: headSha,
  };

  await mkdir(path.dirname(lifecyclePath), { recursive: true });
  let previous = '';
  try { previous = await readFile(lifecyclePath, 'utf8'); }
  catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }
  if (previous.split(/\r?\n/).some((line) => line && JSON.parse(line).event_id === lifecycleEvent.event_id)) continue;
  await appendFile(lifecyclePath, `${JSON.stringify(lifecycleEvent)}\n`);
  written += 1;
}

console.log(`已为 ${written} 个 Provider 候选记录 PR ${action} 生命周期事件。`);
