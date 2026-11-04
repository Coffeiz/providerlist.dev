import type { CandidateEnvelope, IngestSource } from '../types.ts';
import { captureDocumentSet, latestSnapshotRetrievedAt, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from './document-set.ts';
import { extractDocumentObservation } from './document-observation.ts';
import type { ProviderCollectionIR } from '../ir/provider-collection.ts';

export interface OfficialDocsAdapterConfig {
  readonly providerId: string;
  readonly displayName: string;
  readonly sources: readonly IngestSource[];
  readonly modelIdPattern: RegExp;
  readonly knownLimitations: readonly string[];
  readonly excludedModelNotes?: readonly string[];
  readonly mapToIR?: (
    documents: readonly CapturedDocument[],
    facts: OfficialDocsCandidateFacts,
    documentObservationsIR: ProviderCollectionIR,
  ) => ProviderCollectionIR;
  readonly extractModelCatalogRecords?: (documents: readonly CapturedDocument[]) => readonly {
    readonly model_id: string;
    readonly display_name: string;
    readonly status: string;
    readonly source_id: string;
  }[];
}

interface ModelMention {
  readonly source_id: string;
  readonly scope: IngestSource['scope'];
  readonly access_scope: IngestSource['access_scope'];
  readonly ids: readonly string[];
}

export interface OfficialDocsCandidateFacts {
  /** 每份来源按原有范围保存；文档提及不等于目录供应。 */
  readonly observations: ReturnType<typeof extractDocumentObservation>[];
  readonly model_catalog_records?: readonly {
    readonly model_id: string;
    readonly display_name: string;
    readonly status: string;
    readonly source_id: string;
  }[];
  readonly model_id_mentions: readonly ModelMention[];
  readonly pricing_source_ids: readonly string[];
  readonly api_source_ids: readonly string[];
  readonly capability_source_ids: readonly string[];
  readonly plan_source_ids: readonly string[];
  readonly coverage_gaps: readonly { readonly area: string; readonly status: 'not_structured' | 'account_scoped' | 'not_in_sources'; readonly note: string }[];
  readonly known_limitations: readonly string[];
  readonly excluded_model_notes: readonly string[];
}

type Candidate = CandidateEnvelope<OfficialDocsCandidateFacts>;
type IRCandidate = CandidateEnvelope<ProviderCollectionIR>;

function sourceGapFacts(documents: readonly CapturedDocument[], config: OfficialDocsAdapterConfig): OfficialDocsCandidateFacts {
  const observations = documents.map(extractDocumentObservation);
  const modelIdMentions = documents.flatMap((document): ModelMention[] => {
    const ids = [...new Set(document.body.match(config.modelIdPattern) ?? [])].sort((a, b) => a.localeCompare(b));
    return ids.length ? [{ source_id: document.source.id, scope: document.source.scope, access_scope: document.source.access_scope, ids }] : [];
  });
  const sourceIds = (scope: IngestSource['scope']) => documents.filter(({ source }) => source.scope === scope).map(({ source }) => source.id);
  const coverageGaps: OfficialDocsCandidateFacts['coverage_gaps'][number][] = [];
  if (!sourceIds('model_catalog').length) coverageGaps.push({ area: '公开模型目录', status: 'not_in_sources', note: '已登记来源没有可确认完整性的公开当前目录。' });
  else coverageGaps.push({ area: '公开模型目录完整性', status: 'not_structured', note: '保留目录页面与模型 ID 线索；未将页面提及自动判定为账号可调用目录。' });
  if (documents.some(({ source }) => source.scope === 'api' && source.access_scope === 'account_scoped')) {
    coverageGaps.push({ area: '账号可用模型清单', status: 'account_scoped', note: '官方接口说明表明清单按凭证/账号返回；本采集器不使用凭证调用。' });
  }
  coverageGaps.push(sourceIds('api').length
    ? { area: 'API Host、Route 与 Method', status: 'not_structured', note: 'API 文档快照与通用端点线索已保留；尚未规范映射到 Provider/Service/Route，也不从通用协议推断逐模型支持。' }
    : { area: 'API Host、Route 与 Method', status: 'not_in_sources', note: '未登记通用 API 接入/参考来源。' });
  coverageGaps.push(sourceIds('capability').length
    ? { area: 'Provider/Service 独立能力', status: 'not_structured', note: '能力文档片段已保留；尚未映射到独立 Service 或明确关联的 Offering。' }
    : { area: 'Provider/Service 独立能力', status: 'not_in_sources', note: '未登记 Provider/Service 独立能力来源。' });
  if (sourceIds('pricing').length) coverageGaps.push({ area: '逐模型价格与计量条件', status: 'not_structured', note: '价格来源的表格和原始金额线索已保留；币种、计量单位、阈值、折扣及模型适用范围尚未映射成 PriceRule。' });
  for (const area of ['逐模型上下文与最大输出', '逐模型输入/输出模态与限制', '逐模型发布日期与生命周期']) {
    coverageGaps.push({ area, status: 'not_structured', note: '通用资料片段保存在候选中，尚未形成逐模型、字段级证据映射；不推断为不支持。' });
  }
  if (!sourceIds('pricing').length) coverageGaps.push({ area: '公开价格', status: 'not_in_sources', note: '未登记公开价格来源。' });
  if (!sourceIds('plan').length) coverageGaps.push({ area: '订阅/计划', status: 'not_in_sources', note: '未登记独立计划来源；不得由 API 价格或产品宣传推断套餐。' });
  else coverageGaps.push({ area: '计划价格与资格条件', status: 'not_structured', note: '计划来源虽已登记，具体价格、周期、市场/账号资格及模型权益仍需按来源逐项核验；候选不推断其覆盖范围。' });
  return {
    observations,
    ...(config.extractModelCatalogRecords ? { model_catalog_records: config.extractModelCatalogRecords(documents) } : {}),
    model_id_mentions: modelIdMentions,
    pricing_source_ids: sourceIds('pricing'),
    api_source_ids: sourceIds('api'),
    capability_source_ids: sourceIds('capability'),
    plan_source_ids: sourceIds('plan'),
    coverage_gaps: coverageGaps,
    known_limitations: config.knownLimitations,
    excluded_model_notes: config.excludedModelNotes ?? [],
  };
}

function renderReview(candidate: Candidate, displayName: string): string {
  const facts = candidate.current;
  return [
    `# ${displayName} 官方通用资料采集候选`, '',
    `- 来源快照：${candidate.sources.length} 份`,
    '',
    '## 适配器核对边界', '',
    '- 页面中的模型 ID、目录表格、价格、API 路径及能力线索不在此重复展开；字段级新增、更新与缺席待核实项仅见上方变更摘要。',
    '- 来源快照与完整机器事实保存在候选 JSON。模型 ID 提及不单独证明当前供应、账号可用性或市场覆盖。',
    '- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。',
    '', '## 已知边界', '', ...facts.known_limitations.map((note) => `- ${note}`),
    ...(facts.excluded_model_notes.length ? ['', '## 排除范围', '', ...facts.excluded_model_notes.map((note) => `- ${note}`)] : []),
    '',
  ].join('\n');
}

function toCollectionIR(
  providerId: string,
  documents: readonly CapturedDocument[],
  facts: OfficialDocsCandidateFacts,
): ProviderCollectionIR {
  if (documents.length === 0) {
    throw new Error('官方文档 IR 缺少快照，无法确定观察时间或来源覆盖。');
  }
  const modelMentions = new Map(facts.model_id_mentions.map(({ source_id, ids }) => [source_id, ids]));
  const coverageGapsByArea = facts.coverage_gaps;
  const observations = facts.observations.map(({ source_id, ...observation }) => ({
    ...observation,
    source_ref: source_id,
    model_id_mentions: modelMentions.get(source_id) ?? [],
  }));
  const reviewItems = coverageGapsByArea.map((gap, index) => {
    const sources = documents.filter(({ source }) => {
      if (gap.area.includes('模型目录')) return source.scope === 'model_catalog';
      if (gap.area.includes('价格') || gap.area.includes('订阅')) return source.scope === 'pricing' || source.scope === 'plan';
      if (gap.area.includes('API')) return source.scope === 'api';
      if (gap.area.includes('能力')) return source.scope === 'capability';
      return source.scope === 'model_catalog' || source.scope === 'documentation';
    });
    const evidenceSources = sources.length ? sources : documents;
    return {
      id: `coverage-gap-${String(index + 1).padStart(2, '0')}`,
      kind: 'incomplete_coverage' as const,
      message: `${gap.area}：${gap.note}`,
      evidence: evidenceSources.map(({ source }) => ({
        source_ref: source.id,
        assertion: sources.length ? gap.status : `${gap.status}；已检查登记来源，但没有找到与该缺口直接匹配的数据域来源。`,
      })),
    };
  });
  const latestObservedAt = latestSnapshotRetrievedAt(documents.map(({ metadata }) => metadata));

  return {
    ir_version: '1.0.0',
    provider_id: providerId,
    observed_at: latestObservedAt,
    source_refs: documents.map(({ source }) => source.id),
    coverage: documents.map(({ source }) => ({
      source_ref: source.id,
      scope: source.scope ?? 'documentation',
      ...(source.market ? { market: source.market } : {}),
      status: 'not_parsed' as const,
      note: '文档线索已保留，尚未映射为可投影的 Provider / Service / Offering 字段。',
    })),
    document_observations: observations,
    collection_notes: [...facts.known_limitations, ...facts.excluded_model_notes],
    services: [],
    review_items: reviewItems,
  };
}

function renderIRReview(candidate: IRCandidate, displayName: string): string {
  const facts = candidate.current;
  const modelMentionCount = facts.document_observations.reduce((count, observation) => count + observation.model_id_mentions.length, 0);
  return [
    `# ${displayName} 官方通用资料采集候选`, '',
    `- 来源快照：${candidate.sources.length} 份`,
    `- 文档观察：${facts.document_observations.length} 份；模型 ID 提及：${modelMentionCount} 条`,
    `- 已生成 Offering：${facts.services.reduce((count, service) => count + service.offerings.length, 0)} 个`,
    '',
    '## 适配器核对边界', '',
    '- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。',
    '- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。',
    '- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。',
    ...(facts.collection_notes?.length ? ['', '## 已知边界', '', ...facts.collection_notes.map((note) => `- ${note}`)] : []),
    '',
  ].join('\n');
}

export async function collectOfficialProviderDocs(config: OfficialDocsAdapterConfig, options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, config.sources);
  const current = sourceGapFacts(documents, config);
  const mentionCount = new Set(current.model_id_mentions.flatMap(({ ids }) => ids)).size;
  const documentObservationsIR = toCollectionIR(config.providerId, documents, current);
  const ir = config.mapToIR?.(documents, current, documentObservationsIR) ?? documentObservationsIR;
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: config.providerId,
    documents,
    current: ir,
    modelCount: mentionCount,
    renderReview: (candidate) => renderIRReview(candidate, config.displayName),
  });
}

/** 导出纯解析入口，供离线静态夹具测试使用。 */
export const officialDocsParser = { sourceGapFacts, renderReview, toCollectionIR, renderIRReview };
