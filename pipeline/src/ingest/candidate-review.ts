import type { CandidateEnvelope } from './types.ts';
import { keyedEntries, semanticallyEqual } from './semantic-diff.ts';

type FlatFacts = ReadonlyMap<string, unknown>;

const FIELD_LABELS: Readonly<Record<string, string>> = {
  provider_id: '服务商', candidate_kind: '候选类型', market: '市场', model_id: '模型 ID', provider_model_id: '服务商模型 ID',
  source_id: '来源 ID', source_name: '来源名称', request_url: '官方页面', content_hash: '内容哈希', retrieved_at: '取回时间',
  observed_at: '观察时间', service_id: '服务线 ID', offering_id: '供应项 ID', state: '状态', status: '状态',
  id: 'ID', name: '名称', type: '类型', kind: '类别', display_name: '展示名称', model_type: '模型类型', input: '输入', output: '输出', modalities: '模态',
  context: '上下文长度', context_window: '上下文长度', max_output_tokens: '最大输出 tokens',
  input_modalities: '输入模态', output_modalities: '输出模态', price: '价格', pricing: '价格信息',
  amount: '金额', amount_decimal: '金额', currency: '币种', unit: '计量单位', metric: '计费指标',
  condition: '适用条件', conditions: '适用条件', tier: '服务档位', operation: '操作', operation_id: '操作 ID',
  method: 'HTTP 方法', path: '路径', path_template: 'API 路径', base_url: 'API 地址', endpoint: 'API 端点',
  parameters: '参数', enum: '可选值', route_mappings: '参数路径', required: '是否必填', description: '说明', default: '默认值', minimum: '最小值', maximum: '最大值', min: '最小值', max: '最大值',
  capabilities: '能力', coverage_gaps: '覆盖缺口', availability: '供应状态信息', catalog_rows: '目录记录', pricing_rows: '价格记录',
  documentation_mentions: '文档提及', api_routes: 'API 路径', source_coverage: '来源覆盖',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function flattenFacts(value: unknown, prefix = ''): FlatFacts {
  const result = new Map<string, unknown>();
  const visit = (current: unknown, path: string): void => {
    if (Array.isArray(current)) {
      if (current.every((item) => item === null || ['string', 'number', 'boolean'].includes(typeof item))) {
        result.set(path || '/', current);
        return;
      }
      const entries = keyedEntries(current);
      if (entries) {
        for (const [key, item] of entries) {
          const segment = `@${key}`.replace(/~/g, '~0').replace(/\//g, '~1');
          visit(item, path ? `${path}/${segment}` : `/${segment}`);
        }
        return;
      }
    }
    if (isRecord(current) && Object.keys(current).length > 0) {
      for (const key of Object.keys(current).sort()) {
        if (path === '' && key === 'observed_at') continue;
        if (key === 'locator' && /\/evidence(?:\/|$)/u.test(path)) continue;
        const segment = key.replace(/~/g, '~0').replace(/\//g, '~1');
        visit(current[key], path ? `${path}/${segment}` : `/${segment}`);
      }
      return;
    }
    result.set(path || '/', current);
  };
  visit(value, prefix);
  return result;
}

function sourceCell(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/\|/g, '&#124;').replace(/\r?\n/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/`/g, '&#96;');
}

function reviewText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\|/g, '&#124;').replace(/\r?\n/g, '<br>');
}

function expandableValue(summary: string, items: readonly string[]): string {
  return `${summary}<details><summary>展开完整内容</summary><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></details>`;
}

function reviewValue(value: unknown, field?: string): string {
  if (value === undefined) return '未记录';
  if (value === null) return '明确未知';
  if (typeof value === 'string') return value.length ? reviewText(value) : '空字符串';
  if (typeof value === 'boolean') return value ? '是' : '否';
  if (typeof value === 'number') {
    const formatted = Number.isSafeInteger(value) ? new Intl.NumberFormat('zh-CN').format(value) : String(value);
    if (field === 'context' || field === 'context_window' || field === 'max_output_tokens') return `${formatted} tokens`;
    return formatted;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return '空列表';
    const items = value.map((item) => reviewValue(item, field));
    if (value.length > 12 || JSON.stringify(value).length > 1_200) return expandableValue(`列表（${value.length} 项）`, items);
    return items.map((item) => `• ${item}`).join('<br>');
  }
  if (isRecord(value)) {
    const entries = Object.entries(value);
    if (entries.length === 0) return '空对象';
    const items = entries.map(([key, item]) => `${reviewFieldSegment(key)}：${reviewValue(item, key)}`);
    if (entries.length > 12 || JSON.stringify(value).length > 1_200) return expandableValue(`对象（${entries.length} 个字段）`, items);
    return items.join('<br>');
  }
  return reviewText(String(value));
}

function lineLcsRows(before: readonly string[], after: readonly string[]): Uint16Array[] {
  const rows = Array.from({ length: before.length + 1 }, () => new Uint16Array(after.length + 1));
  for (let i = before.length - 1; i >= 0; i -= 1) {
    for (let j = after.length - 1; j >= 0; j -= 1) {
      rows[i]![j] = before[i] === after[j]
        ? rows[i + 1]![j + 1]! + 1
        : Math.max(rows[i + 1]![j]!, rows[i]![j + 1]!);
    }
  }
  return rows;
}

function changedLines(before: readonly string[], after: readonly string[], rows: readonly Uint16Array[]): { readonly previous: readonly string[]; readonly current: readonly string[] } | null {
  const removed: string[] = [];
  const added: string[] = [];
  let i = 0;
  let j = 0;
  while (i < before.length && j < after.length) {
    if (before[i] === after[j]) {
      i += 1;
      j += 1;
    } else if (rows[i + 1]![j]! >= rows[i]![j + 1]!) {
      removed.push(before[i++]!);
    } else {
      added.push(after[j++]!);
    }
  }
  while (i < before.length) removed.push(before[i++]!);
  while (j < after.length) added.push(after[j++]!);
  if (removed.length === 0 || added.length === 0) return null;
  return { previous: removed, current: added };
}

function lineDiff(previous: string, current: string): { readonly previous: readonly string[]; readonly current: readonly string[] } | null {
  if (previous.length < 500 || current.length < 500) return null;
  const before = previous.split(/\r?\n/u);
  const after = current.split(/\r?\n/u);
  if (before.length * after.length > 300_000) return null;
  return changedLines(before, after, lineLcsRows(before, after));
}

function stringArrayDiff(previous: unknown, current: unknown): { readonly previous: readonly string[]; readonly current: readonly string[] } | null {
  if (!Array.isArray(previous) || !Array.isArray(current)
    || !previous.every((item) => typeof item === 'string')
    || !current.every((item) => typeof item === 'string')) return null;
  const unmatched = new Map<string, number>();
  for (const value of previous as string[]) unmatched.set(value, (unmatched.get(value) ?? 0) + 1);
  const added: string[] = [];
  for (const value of current as string[]) {
    const count = unmatched.get(value) ?? 0;
    if (count > 0) unmatched.set(value, count - 1);
    else added.push(value);
  }
  const removed = [...unmatched].flatMap(([value, count]) => Array.from({ length: count }, () => value));
  if (removed.length === 0 && added.length === 0) return null;
  return { previous: removed, current: added };
}

function reviewTextDiffValue(lines: readonly string[], side: 'previous' | 'current', kind: '差异项' | '差异片段'): string {
  const label = side === 'previous' ? '删除' : '新增';
  if (lines.length > 12 || lines.reduce((total, line) => total + line.length, 0) > 1_200) {
    const items = lines.map((line) => `<li>${reviewText(line)}</li>`).join('');
    return `${kind}（${label} ${lines.length} 项）<details><summary>展开完整差异</summary><ul>${items}</ul></details>`;
  }
  const content = lines.length > 0 ? lines.map(reviewText).join('<br>') : '无';
  return `${kind}（${label}；相同内容已省略）：${content}`;
}

function reviewChangeValue(change: FactChange, side: 'previous' | 'current'): string {
  const collectionDiff = stringArrayDiff(change.previous, change.current);
  if (collectionDiff) return reviewTextDiffValue(collectionDiff[side], side, '差异项');
  const textDiff = typeof change.previous === 'string' && typeof change.current === 'string'
    ? lineDiff(change.previous, change.current)
    : null;
  if (textDiff) return reviewTextDiffValue(textDiff[side], side, '差异片段');
  return reviewValue(change[side], change.path.split('/').at(-1));
}

function decodeSegment(segment: string): string {
  return segment.replace(/~1/g, '/').replace(/~0/g, '~');
}

function reviewFieldSegment(segment: string): string {
  const decoded = decodeSegment(segment);
  if (decoded.startsWith('@')) return `记录 ${reviewText(decoded.slice(1))}`;
  if (/^\d+$/.test(decoded)) return `第 ${Number(decoded) + 1} 项`;
  const label = FIELD_LABELS[decoded];
  return label && label !== decoded ? `${label}（${reviewText(decoded)}）` : reviewText(decoded.replace(/_/g, ' '));
}

function humanizeFieldPath(segments: readonly string[]): string {
  const visibleSegments = segments.filter((segment) => segment !== 'value');
  return visibleSegments.length ? visibleSegments.map(reviewFieldSegment).join(' › ') : '完整记录';
}

interface ChangeLocation {
  readonly section: string;
  readonly entity?: string;
  readonly fields: readonly string[];
}

function changeLocation(path: string, providerId: string): ChangeLocation {
  const segments = path.split('/').filter(Boolean).map(decodeSegment);
  const root = segments[0] ?? '';
  if (root === 'services') {
    const market = segments[1]?.replace(/^@/u, '') ?? '未知市场';
    const recordKind = segments[2];
    const entityId = segments[3]?.startsWith('@') ? segments[3].slice(1) : undefined;
    const entityLabels: Readonly<Record<string, string>> = {
      offerings: 'Model', capabilities: 'Capability', plans: 'Plan', endpoints: 'API endpoint',
      operations: 'Operation',
    };
    if (recordKind && entityId) {
      let entity = `${entityLabels[recordKind] ?? reviewFieldSegment(recordKind)} / ${entityId}`;
      let fieldStart = 4;
      const operationId = segments[fieldStart + 1];
      if (recordKind === 'capabilities' && segments[fieldStart] === 'operations' && operationId?.startsWith('@')) {
        entity += ` › Operation / ${operationId.slice(1)}`;
        fieldStart += 2;
      }
      return { section: `市场 / ${market}`, entity, fields: segments.slice(fieldStart) };
    }
    return { section: `市场 / ${market}`, fields: segments.slice(2) };
  }
  if (root === 'models' && segments[1]?.startsWith('@')) {
    return { section: `Provider / ${providerId}`, entity: `Model / ${segments[1].slice(1)}`, fields: segments.slice(2) };
  }
  if (root === 'document_observations' && segments[1]?.startsWith('@')) {
    return { section: '文档观察', entity: `来源 / ${segments[1].slice(1)}`, fields: segments.slice(2) };
  }
  if (root === 'coverage') return { section: '来源覆盖', fields: segments.slice(1) };
  if (root === 'review_items' && segments[1]?.startsWith('@')) {
    return { section: '待核对项目', entity: `项目 / ${segments[1].slice(1)}`, fields: segments.slice(2) };
  }
  if (root === 'source_refs' && segments[1]?.startsWith('@')) {
    return { section: '来源', entity: `来源 / ${segments[1].slice(1)}`, fields: segments.slice(2) };
  }
  if (root === 'provider' || root === 'provider_id' || root === 'profile' || root === 'candidate_kind') {
    return { section: `Provider / ${providerId}`, entity: root === 'profile' ? '档案' : undefined, fields: root === 'provider' ? segments.slice(1) : segments };
  }
  const entityIndex = segments.findIndex((segment) => segment.startsWith('@'));
  const section = root ? reviewFieldSegment(root) : `Provider / ${providerId}`;
  if (entityIndex >= 0) {
    return { section, entity: `Record / ${segments[entityIndex]!.slice(1)}`, fields: segments.slice(entityIndex + 1) };
  }
  return { section: `Provider / ${providerId}`, fields: segments };
}

function renderChangeGroups(changes: readonly FactChange[], providerId: string): string[] {
  const groups = new Map<string, { readonly location: ChangeLocation; readonly changes: FactChange[] }>();
  for (const change of changes) {
    const location = changeLocation(change.path, providerId);
    const key = `${location.section}\u0000${location.entity ?? ''}`;
    const group = groups.get(key) ?? { location, changes: [] };
    group.changes.push(change);
    groups.set(key, group);
  }
  const lines: string[] = [];
  let currentSection = '';
  for (const { location, changes: groupChanges } of groups.values()) {
    if (location.section !== currentSection) {
      currentSection = location.section;
      lines.push(`### ${reviewText(currentSection)}`, '');
    }
    if (location.entity) lines.push(`#### ${reviewText(location.entity)}`, '');
    lines.push('| 字段 | 变化 | 原值 | 新值 |', '|---|---|---|---|');
    for (const change of groupChanges) {
      const field = humanizeFieldPath(changeLocation(change.path, providerId).fields);
      lines.push(`| ${field} | ${change.kind} | ${reviewChangeValue(change, 'previous')} | ${reviewChangeValue(change, 'current')} |`);
    }
    lines.push('');
  }
  return lines;
}

interface FactChange {
  readonly path: string;
  readonly kind: '新增' | '更新' | '缺席待核实';
  readonly previous: unknown;
  readonly current: unknown;
}

function factChanges<TFacts>(candidate: CandidateEnvelope<TFacts>): FactChange[] {
  const before = candidate.previous === null ? new Map<string, unknown>() : flattenFacts(candidate.previous);
  const after = flattenFacts(candidate.current);
  const paths = [...new Set([...before.keys(), ...after.keys()])].sort();
  return paths.flatMap((path): FactChange[] => {
    const hadBefore = before.has(path);
    const hasAfter = after.has(path);
    const previous = before.get(path);
    const current = after.get(path);
    if (hadBefore && hasAfter && semanticallyEqual(previous, current)) return [];
    const kind = !hadBefore ? '新增' : !hasAfter ? '缺席待核实' : '更新';
    if (kind === '新增') return expandAddedValue(path, current);
    return [{ path, kind, previous, current }];
  });
}

function expandAddedValue(path: string, value: unknown): FactChange[] {
  if (Array.isArray(value) && value.length > 0) {
    if (value.every((item) => item === null || ['string', 'number', 'boolean'].includes(typeof item))) {
      return [{ path, kind: '新增', previous: undefined, current: value }];
    }
    return value.flatMap((item, index) => expandAddedValue(`${path}/${index}`, item));
  }
  if (isRecord(value) && Object.keys(value).length > 0) {
    return Object.keys(value).sort().flatMap((key) => {
      const segment = key.replace(/~/g, '~0').replace(/\//g, '~1');
      return expandAddedValue(`${path}/${segment}`, value[key]);
    });
  }
  return [{ path, kind: '新增', previous: undefined, current: value }];
}

function indentProviderReport(report: string): string {
  let fence: { readonly marker: string; readonly length: number } | null = null;
  return report.trim().split('\n').map((line) => {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    const marker = fenceMatch?.[1];
    if (fence) {
      const closingFence = line.match(/^\s*(`{3,}|~{3,})\s*$/)?.[1];
      if (closingFence && closingFence[0] === fence.marker[0] && closingFence.length >= fence.length) fence = null;
      return line;
    }
    if (marker) {
      fence = { marker, length: marker.length };
      return line;
    }
    return line.replace(/^(#{1,6})(\s+)/, (_match, hashes: string, spacing: string) => `${'#'.repeat(Math.min(6, hashes.length + 2))}${spacing}`);
  }).join('\n');
}

/** 所有采集器共用的候选评审外框；providerReport 保留各自的来源解释和领域细节。 */
export function renderCandidateReview<TFacts>(candidate: CandidateEnvelope<TFacts>, providerReport: string): string {
  const marketNames = [...new Set(candidate.sources.map((source) => source.market).filter((market): market is 'cn' | 'global' => market !== undefined))];
  const markets = marketNames.length ? marketNames.join(' / ') : '未分市场';
  const summary = candidate.previous === null
    ? '首次观察；以下逐项列出本次取得的候选事实。'
    : '与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。';
  const changes = factChanges(candidate);
  const changeCounts = {
    added: changes.filter(({ kind }) => kind === '新增').length,
    updated: changes.filter(({ kind }) => kind === '更新').length,
    missing: changes.filter(({ kind }) => kind === '缺席待核实').length,
  };
  const lines = [
    `# ${candidate.provider_id} 采集评审`,
    '',
    '## 采集摘要',
    '',
    '| 项目 | 内容 |',
    '|---|---|',
    `| Provider | \`${sourceCell(candidate.provider_id)}\` |`,
    `| 候选类型 | \`${sourceCell(candidate.candidate_kind)}\` |`,
    `| 市场 | ${sourceCell(markets)} |`,
    `| 观察时间（UTC） | ${sourceCell(candidate.observed_at)} |`,
    `| 前一候选指纹 | ${candidate.previous_candidate_hash ? `\`${sourceCell(candidate.previous_candidate_hash)}\`` : '首次观察'} |`,
    `| 本次候选指纹 | \`${sourceCell(candidate.candidate_hash)}\` |`,
    `| 来源快照 | ${candidate.sources.length} 份 |`,
    '',
    '## 变更摘要',
    '',
    summary,
    '',
    `变更统计：新增 ${changeCounts.added} 项，更新 ${changeCounts.updated} 项，缺席待核实 ${changeCounts.missing} 项。`,
    '',
    ...(changes.length ? [
      '## 字段变化',
      '',
      ...renderChangeGroups(changes, candidate.provider_id),
    ] : ['本轮没有语义字段变化。']),
    '',
    '> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。',
    '',
    '## 来源快照',
    '',
    '| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |',
    '|---|---|---|---:|---:|---|',
    ...candidate.sources.map((source) => `| ${sourceCell(source.market ?? '未分市场')} | \`${sourceCell(source.source_id)}\` · ${sourceCell(source.source_name)} | ${sourceCell(source.request_url)} | ${sourceCell(source.retrieved_at)} | ${source.http_status} | \`${sourceCell(source.content_hash)}\` |`),
    '',
    `## ${sourceCell(candidate.provider_id)} 专属证据与核对说明`,
    '',
    indentProviderReport(providerReport),
    '',
  ];
  return lines.join('\n');
}
