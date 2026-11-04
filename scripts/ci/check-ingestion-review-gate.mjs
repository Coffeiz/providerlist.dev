import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

const baseRef = process.env.GITHUB_BASE_REF || process.env.REVIEW_BASE_REF;
if (!baseRef) {
  console.log('不是 Pull Request 运行，跳过采集评审门禁。');
  process.exit(0);
}

const changed = execFileSync('git', ['diff', '--name-only', `origin/${baseRef}...HEAD`, '--', 'data/candidates'], { encoding: 'utf8' })
  .split(/\r?\n/)
  .filter((file) => /^data\/candidates\/[a-z0-9-]+\/viewer\.md$/.test(file));

const event = process.env.GITHUB_EVENT_PATH
  ? JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'))
  : {};
const review = await findCurrentHeadApproval(event);
const blocked = [];
for (const file of changed) {
  const report = await readFile(file, 'utf8');
  const match = report.match(/^\*\*采集状态：(needs_review|invalid_data)\*\*/m);
  if (match?.[1] === 'invalid_data') blocked.push(`${file}: invalid_data`);
  if (match?.[1] === 'needs_review' && !review.approved) blocked.push(`${file}: needs_review（需要当前 head 的人工批准）`);
}

if (blocked.length > 0) {
  console.error('采集候选仍需处理，当前 PR 不可合并：');
  for (const item of blocked) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`采集评审门禁通过：检查 ${changed.length} 份变化 Provider viewer${review.approved ? `；当前 head 已由 ${review.reviewer} 批准` : ''}。`);

async function findCurrentHeadApproval(payload) {
  const pullRequest = payload.pull_request;
  let number = pullRequest?.number;
  let headSha = pullRequest?.head?.sha;
  const repository = process.env.GITHUB_REPOSITORY;
  const headRef = process.env.GITHUB_REF_NAME;
  if ((!number || !headSha) && repository && headRef && process.env.GH_TOKEN) {
    try {
      const open = JSON.parse(execFileSync('gh', [
        'pr', 'list', '--state', 'open', '--head', headRef, '--json', 'number,headRefOid',
      ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }));
      const current = open.find((candidate) => candidate.headRefOid === process.env.GITHUB_SHA);
      number ??= current?.number;
      headSha ??= current?.headRefOid;
    } catch {
      return { approved: false };
    }
  }
  if (!number || !headSha || !repository || !process.env.GH_TOKEN) return { approved: false };

  try {
    const pages = JSON.parse(execFileSync('gh', [
      'api', '--paginate', '--slurp', `repos/${repository}/pulls/${number}/reviews`,
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }));
    const reviews = pages.flat().filter((item) =>
      item.commit_id === headSha && item.user?.type === 'User' && typeof item.submitted_at === 'string');
    const latestByReviewer = new Map();
    for (const item of reviews) {
      const prior = latestByReviewer.get(item.user.login);
      if (!prior || item.submitted_at > prior.submitted_at) latestByReviewer.set(item.user.login, item);
    }
    const approval = [...latestByReviewer.values()].find((item) => item.state === 'APPROVED');
    return approval ? { approved: true, reviewer: approval.user.login } : { approved: false };
  } catch {
    return { approved: false };
  }
}
