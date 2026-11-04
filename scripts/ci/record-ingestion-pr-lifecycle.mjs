#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath) throw new Error('缺少 GITHUB_EVENT_PATH');
const event = JSON.parse(await readFile(eventPath, 'utf8'));
const pr = event.pull_request;
const repository = process.env.GITHUB_REPOSITORY;
if (!repository || !pr || !Number.isInteger(pr.number)) throw new Error('GitHub PR 事件数据不完整');
if (pr.head?.ref !== 'automation/provider-ingest' || pr.head?.repo?.full_name !== repository) {
  console.log('不是本仓库的 Provider 聚合采集 PR，跳过。');
  process.exit(0);
}
if (event.action !== 'closed') throw new Error(`不支持的 PR 生命周期事件：${event.action}`);

function ghJson(endpoint, args = []) {
  return JSON.parse(execFileSync('gh', ['api', ...args, endpoint], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }));
}

const fileOutput = execFileSync('gh', [
  'api', '--paginate', `repos/${repository}/pulls/${pr.number}/files`, '--jq', '.[].filename',
], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
const viewerPaths = [...new Set(fileOutput.split(/\r?\n/).filter((file) => /^data\/candidates\/[a-z0-9-]+\/viewer\.md$/.test(file)))];
if (viewerPaths.length === 0) {
  console.log('聚合 PR 没有关联 Provider viewer，无候选生命周期可记录。');
  process.exit(0);
}

const merged = pr.merged === true;
let approvedReviewer = null;
if (merged) {
  const reviewLines = execFileSync('gh', [
    'api', '--paginate', `repos/${repository}/pulls/${pr.number}/reviews`,
    '--jq', `.[] | select(.state == "APPROVED" and .commit_id == "${pr.head.sha}" and .user.type == "User") | {login: .user.login, submitted_at: .submitted_at}`,
  ], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).trim().split(/\r?\n/).filter(Boolean);
  if (reviewLines.length) {
    const matchingReviews = reviewLines.map((line) => JSON.parse(line));
    approvedReviewer = matchingReviews.reduce((latest, review) =>
      !latest || Date.parse(review.submitted_at) > Date.parse(latest.submitted_at) ? review : latest, null);
  }
}

const written = [];
for (const viewerPath of viewerPaths) {
  const contentResponse = ghJson(`repos/${repository}/contents/${viewerPath}?ref=${pr.head.sha}`);
  const markdown = Buffer.from(contentResponse.content, 'base64').toString('utf8');
  const hash = markdown.match(/^\| 本次候选指纹 \| `sha256:([a-f0-9]{64})` \|$/m)?.[1];
  if (!hash) continue;

  const providerId = viewerPath.split('/')[2];
  const candidateHash = `sha256:${hash}`;
  const decisionPath = path.join('data/candidates', providerId, 'decisions', `${hash}.json`);
  const lifecyclePath = path.join('data/ingestion-lifecycle', providerId, `${hash}.jsonl`);
  const eventType = merged ? (approvedReviewer ? 'merged_approved' : 'merged_without_current_approval') : 'closed_unmerged';
  const lifecycleEvent = {
    event_id: `pr-${pr.number}-${eventType}-${pr.head.sha}`,
    provider_id: providerId,
    candidate_hash: candidateHash,
    event: eventType,
    occurred_at: pr.merged_at ?? pr.closed_at,
    pull_request: pr.html_url,
    head_sha: pr.head.sha,
    ...(approvedReviewer ? { reviewed_by: approvedReviewer.login, reviewed_at: approvedReviewer.submitted_at } : {}),
  };

  if (merged && approvedReviewer) {
    await mkdir(path.dirname(decisionPath), { recursive: true });
    const decision = {
      provider_id: providerId,
      candidate_hash: candidateHash,
      decision: 'accepted',
      decided_at: pr.merged_at,
      reviewed_by: approvedReviewer.login,
      reason: `聚合采集 PR #${pr.number} 在该 reviewer 对当前 head 批准后合并；此记录不代表候选字段已写入正式目录。`,
      reference: pr.html_url,
    };
    try {
      await writeFile(decisionPath, `${JSON.stringify(decision, null, 2)}\n`, { flag: 'wx' });
      written.push(decisionPath);
    } catch (error) {
      if (!(error instanceof Error && 'code' in error && error.code === 'EEXIST')) throw error;
      const existing = JSON.parse(await readFile(decisionPath, 'utf8'));
      if (existing.provider_id !== providerId || existing.candidate_hash !== candidateHash || existing.decision !== 'accepted') {
        throw new Error(`已有不同决定，拒绝覆盖：${decisionPath}`);
      }
    }
  }

  await mkdir(path.dirname(lifecyclePath), { recursive: true });
  let previous = '';
  try { previous = await readFile(lifecyclePath, 'utf8'); }
  catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
  if (!previous.split(/\r?\n/).some((line) => line && JSON.parse(line).event_id === lifecycleEvent.event_id)) {
    await appendFile(lifecyclePath, `${JSON.stringify(lifecycleEvent)}\n`);
    written.push(lifecyclePath);
  }
}

console.log(`已记录 ${written.length} 项聚合 PR 候选处理材料；PR ${merged ? '已合并' : '未合并关闭'}。`);
if (merged && !approvedReviewer) console.log('当前 head 没有可追溯的人工批准，未自动记录 accepted 决定。');
