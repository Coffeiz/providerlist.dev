#!/usr/bin/env node
import { pathToFileURL } from 'node:url';
/**
 * 聚合采集 PR 正文的唯一渲染入口。
 *
 * 为什么单独成文件：PR 正文过去有两套实现——`scripts/ci/merge-*.mjs` 和
 * `pipeline/src/ingest/sync.ts`——各自拼一遍模板，后来漂移成
 * 「workflow 实际用的那条把状态信息全丢了，审阅者看不出哪个 Provider 要重点看」。
 * 现在只有这一个真源，workflow 与本地预览都走它。
 *
 * 排版约定（对应 PRD-INGEST-1 §5.2 / §5.5）：
 * - 每个待评审 Provider 一行，带**状态**，`needs_review` / `invalid_data` 显著标注；
 * - 采集失败的 Provider 单独点名——失败不得伪装成无变化；
 * - viewer 链接用**仓库内相对路径**，不硬编码仓库名与分支名；
 * - 不重复复制各 Provider 的差异表，也不重复「无变化」Provider。
 */

/** 待评审 Provider 的状态。 */
const REVIEW_STATUSES = new Set(['changed_ready', 'needs_review', 'invalid_data']);

/** 需要人工判断、不得合并的状态。 */
const BLOCKING_STATUSES = new Set(['needs_review', 'invalid_data']);

/**
 * 渲染聚合 PR 正文。
 *
 * @param {object} input
 * @param {string} input.template  PR 正文模板。
 * @param {Array<{provider: string, status: string, message?: string, fingerprint?: string|null}>} input.runEntries 本次运行每个 Provider 的结果。
 * @param {Array<{provider: string, viewerPath: string, status?: string, message?: string}>} input.viewerEntries 分支上待评审的 viewer 清单。
 * @param {string} [input.irProjectionSummary] 正式字段投影摘要（仅由 Sync 聚合 workflow 提供）。
 * @returns {string} 渲染后的 PR 正文。
 */
export function renderIngestionPrBody({ template, runEntries, viewerEntries, irProjectionSummary }) {
  const run = new Map(runEntries.map((entry) => [entry.provider, entry]));
  const failed = runEntries.filter((entry) => entry.status === 'collection_failed');
  const counted = {
    total: runEntries.length,
    changed: runEntries.filter((e) => e.status === 'changed_ready').length,
    needsReview: runEntries.filter((e) => e.status === 'needs_review').length,
    invalidData: runEntries.filter((e) => e.status === 'invalid_data').length,
    unchanged: runEntries.filter((e) => e.status === 'unchanged').length,
    stale: runEntries.filter((e) => e.status === 'stale_needs_rerun').length,
    failed: failed.length,
  };

  const rows = viewerEntries.map((entry) => {
    const status = entry.status ?? run.get(entry.provider)?.status ?? 'changed_ready';
    const flag = BLOCKING_STATUSES.has(status) ? ' ⚠️ 需人工判断' : '';
    return `| \`${entry.provider}\` | \`${status}\`${flag} | [查看差异](${entry.viewerPath}) |`;
  });

  const overview = [
    '| 项目 | 数量 |',
    '|---|---:|',
    `| 本次运行 Provider | ${counted.total} |`,
    `| 有可评审变化 | ${counted.changed} |`,
    `| 待人工判断（needs_review） | ${counted.needsReview} |`,
    `| 候选无效（invalid_data） | ${counted.invalidData} |`,
    `| 无变化（unchanged） | ${counted.unchanged} |`,
    `| 基线冲突需重跑 | ${counted.stale} |`,
    `| 采集失败 | ${counted.failed} |`,
  ].join('\n');

  const failureNote = failed.length
    ? [
        '',
        '> ⚠️ **本次有 Provider 采集失败**：',
        ...failed.map((entry) => `> - \`${entry.provider}\` — ${cell(entry.message) || '未提供失败原因'}`),
        '>',
        '> 采集失败**不构成「无变化」**，也不代表供应清空；这些 Provider 本轮没有可信候选，因此不生成差异报告。',
      ].join('\n')
    : '';

  const stale = runEntries.filter((entry) => entry.status === 'stale_needs_rerun');
  const staleNote = stale.length
    ? [
        '',
        '> 🔁 **以下 Provider 因基线被其他轮次推进而跳过**：',
        ...stale.map((entry) => `> - \`${entry.provider}\` — ${cell(entry.message) || '基线已变化'}`),
        '>',
        '> 这些 Provider 的本轮结果没有被写入，以免覆盖较新的状态；请重跑对应 Provider。',
      ].join('\n')
    : '';

  const reviewRows = viewerEntries.map((entry) => {
    const status = entry.status ?? run.get(entry.provider)?.status ?? 'changed_ready';
    const message = cell(entry.message ?? run.get(entry.provider)?.message);
    const note = BLOCKING_STATUSES.has(status)
      ? '需人工判断后才能合并'
      : status === 'changed_ready'
        ? '可直接按差异决定是否更新正式数据'
        : '—';
    return `- \`${entry.provider}\`（\`${status}\`）：${message || '—'}。${note}。`;
  });

  const links = viewerEntries.length
    ? ['| Provider | 状态 | 差异报告 |', '|---|---|---|', ...rows].join('\n')
    : '本次没有新增或更新待评审 Provider 差异。';

  const validation = viewerEntries.length
    ? reviewRows.join('\n')
    : '本次没有新增候选差异。';

  return template
    .replace('{{run_overview}}', overview)
    .replace('{{run_failures}}', failureNote)
    .replace('{{run_stale}}', staleNote)
    .replace('{{provider_viewer_links}}', links)
    .replace('{{ir_projection_summary}}', irProjectionSummary ?? '本地采集预览没有执行正式字段投影。')
    .replace('{{validation_summary}}', validation);
}

/** 表格/列表单元格里的文本：压掉换行与竖线，避免撑破排版。 */
function cell(value) {
  return String(value ?? '').replace(/[|\r\n]+/g, ' ').trim();
}

/** 状态是否属于「需要评审」的一类。 */
export function isReviewStatus(status) {
  return REVIEW_STATUSES.has(status);
}

export { BLOCKING_STATUSES };

// 本地预览：`node scripts/ci/render-ingestion-pr-body.mjs <描述.json>`
// 描述文件形如 { "runEntries": [...], "viewerEntries": [...] }。
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { readFile: read } = await import('node:fs/promises');
  const { resolve } = await import('node:path');
  const descriptionPath = process.argv[2];
  if (!descriptionPath) {
    console.error('用法：node scripts/ci/render-ingestion-pr-body.mjs <描述.json>');
    process.exitCode = 2;
  } else {
    const description = JSON.parse(await read(resolve(descriptionPath), 'utf8'));
    const template = await read(resolve('.github/templates/ingestion-pr.md'), 'utf8');
    console.log(renderIngestionPrBody({ template, ...description }));
  }
}
