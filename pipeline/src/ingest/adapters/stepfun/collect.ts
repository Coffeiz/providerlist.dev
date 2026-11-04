import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, latestSnapshotRetrievedAt, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { extractDocumentObservation } from '../document-observation.ts';
import type { Observed, OfferingFact, PriceFact, PriceRuleFact, ProviderCollectionIR, ReviewItem, ServiceFacts } from '../../ir/provider-collection.ts';
import { STEPFUN_INGEST_SOURCES } from './sources.ts';

interface TableRow {
  readonly source_id: string;
  readonly section: string;
  readonly unit?: string;
  readonly headers: readonly string[];
  readonly cells: readonly string[];
  readonly text: string;
}

interface ModelFact {
  readonly model_id: string;
  readonly source_id: string;
  readonly evidence: string;
}

function normalizeModelName(value: string): string {
  return value.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function modelNameMatches(displayName: string, modelId: string): boolean {
  const display = normalizeModelName(displayName);
  const id = normalizeModelName(modelId);
  if (!display || !id) return false;
  if (display === id) return true;
  // Some official display names omit the API ID's conventional "preview" suffix.
  return id.endsWith('preview') && display === id.slice(0, -'preview'.length);
}

export interface StepFunCandidateFacts {
  readonly market: 'cn';
  readonly current_catalog_entries: readonly { readonly display_name: string; readonly source_id: string }[];
  readonly current_models: readonly ModelFact[];
  readonly api_price_rows: readonly TableRow[];
  readonly price_listed_model_ids: readonly string[];
  readonly step_plan_rows: readonly TableRow[];
  readonly api_routes: readonly { readonly source_id: string; readonly method: string; readonly path: string; readonly transport?: 'https' | 'wss' }[];
  readonly international: {
    readonly market: 'global';
    readonly current_catalog_entries: readonly { readonly display_name: string; readonly source_id: string }[];
    readonly current_models: readonly ModelFact[];
    readonly api_price_rows: readonly TableRow[];
    readonly step_plan_rows: readonly TableRow[];
    readonly api_routes: readonly { readonly source_id: string; readonly method: string; readonly path: string; readonly transport?: 'https' | 'wss' }[];
    readonly api_document_sources: readonly string[];
    readonly capability_document_sources: readonly string[];
    readonly source_gaps: readonly string[];
  };
  readonly source_coverage: readonly { readonly source_id: string; readonly captured: boolean; readonly table_rows: number }[];
}

function scopeForSource(document: CapturedDocument): 'model_catalog' | 'pricing' | 'api' | 'capability' | 'plan' | 'documentation' {
  if (document.source.scope) return document.source.scope;
  const id = document.source.id;
  if (/model-catalog|models-api/.test(id)) return 'model_catalog';
  if (/pricing/.test(id)) return /step-plan/.test(id) ? 'plan' : 'pricing';
  if (/web-search|reasoning|multi-turn|json-mode|streaming|prompt-cache|prompt-guide|tool-call|image-guide|video-guide|voice-guide/.test(id)) return 'capability';
  if (/api|quickstart/.test(id)) return 'api';
  return 'documentation';
}

function recordsForSource(sourceId: string, facts: StepFunCandidateFacts): unknown[] {
  const currentModels = [...facts.current_models, ...facts.international.current_models];
  const currentCatalog = [...facts.current_catalog_entries, ...facts.international.current_catalog_entries];
  const prices = [...facts.api_price_rows, ...facts.international.api_price_rows];
  const plans = [...facts.step_plan_rows, ...facts.international.step_plan_rows];
  const routes = [...facts.api_routes, ...facts.international.api_routes];
  return [
    ...currentCatalog.filter(({ source_id }) => source_id === sourceId),
    ...currentModels.filter(({ source_id }) => source_id === sourceId),
    ...prices.filter(({ source_id }) => source_id === sourceId),
    ...plans.filter(({ source_id }) => source_id === sourceId),
    ...routes.filter(({ source_id }) => source_id === sourceId),
  ];
}

function observed<T>(value: T, sourceRef: string, locator: string, assertion?: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, ...(assertion ? { assertion } : {}) }] };
}

function decimalPrice(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const normalized = value.replaceAll('\\$', '$').replaceAll('\\', '').replaceAll(',', '').trim().replace(/^[$¥￥]/, '');
  return /^(?:0|[1-9]\d*)(?:\.\d+)?$/.test(normalized) ? normalized : undefined;
}

function tokenPriceForModel(
  rows: readonly TableRow[],
  pricingBody: string,
  sourceId: string,
  modelId: string,
  market: 'cn' | 'global',
): PriceFact | undefined {
  const cnTokenUnitDeclared = /单位：元\s*[／/]\s*百万\s*tokens。?/i.test(pricingBody);
  const row = rows.find((candidate) => {
    const headers = candidate.headers.map((header) => header.toLowerCase());
    const cells = candidate.cells;
    const rowModelId = (cells[0] ?? '').replace(/^`|`$/g, '').trim();
    if (rowModelId !== modelId) return false;
    if (market === 'cn') {
      return /^model id$/i.test(candidate.headers[0] ?? '')
        && /缓存未命中/.test(candidate.headers[1] ?? '')
        && /缓存命中/.test(candidate.headers[2] ?? '')
        && /输出价格/.test(candidate.headers[3] ?? '')
        && cnTokenUnitDeclared
        && /元\s*[／/]\s*百万\s*tokens/i.test(candidate.unit ?? '');
    }
    return /^model$/i.test(candidate.headers[0] ?? '')
      && /billing unit/i.test(candidate.headers[1] ?? '')
      && /input \(cache miss\)/i.test(headers[2] ?? '')
      && /input \(cache hit\)/i.test(headers[3] ?? '')
      && /^output$/i.test(headers[4] ?? '')
      && /^1m tokens$/i.test(cells[1] ?? '');
  });
  if (!row) return undefined;
  const amountCells = market === 'cn' ? row.cells.slice(1, 4) : row.cells.slice(2, 5);
  const [input, cacheRead, output] = amountCells.map(decimalPrice);
  if (input === undefined || cacheRead === undefined || output === undefined) return undefined;
  const evidence = {
    source_ref: sourceId,
    locator: `pricing/${modelId}/per-1m-tokens`,
    assertion: `官方${market === 'cn' ? '中国' : '国际'}定价表按百万 Token 列出 ${modelId} 的未命中缓存输入、命中缓存输入和输出价格。`,
  };
  const rule: PriceRuleFact = {
    rate_items: [
      { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: input },
      { metric: 'cache_read', unit: 'per_1m_tokens', quantity: 1, amount_decimal: cacheRead },
      { metric: 'output', unit: 'per_1m_tokens', quantity: 1, amount_decimal: output },
    ],
    evidence: [evidence],
  };
  return {
    provider_model_id: observed(modelId, sourceId, evidence.locator, evidence.assertion),
    currency: observed(market === 'cn' ? 'CNY' : 'USD', sourceId, evidence.locator, '币种按官方对应市场价格页明确标示。'),
    unit: observed('per_1m_tokens', sourceId, evidence.locator, '价格表按百万 Token 计价。'),
    rules: { value: [rule], evidence: [evidence] },
  };
}

function stepfunService(
  market: 'cn' | 'global',
  catalogSource: string,
  catalogEntries: StepFunCandidateFacts['current_catalog_entries'],
  models: readonly ModelFact[],
  pricingSource: string,
  priceRows: readonly TableRow[],
  pricingBody: string,
): ServiceFacts {
  const id = market === 'cn' ? 'cn' : 'global';
  const offerings: OfferingFact[] = models
    .filter(({ source_id }) => source_id === catalogSource)
    .map(({ model_id, evidence }) => {
      const price = tokenPriceForModel(priceRows, pricingBody, pricingSource, model_id, market);
      const displayName = catalogEntries.find((entry) => entry.source_id === catalogSource && modelNameMatches(entry.display_name, model_id))?.display_name;
      return {
        provider_model_id: observed(model_id, catalogSource, `model-catalog/${model_id}`, evidence),
        ...(displayName ? { display_name: observed(displayName, catalogSource, `model-catalog/${displayName}`, '官方当前模型目录列出该展示名称。') } : {}),
        service_id: observed(id, catalogSource, '#market', `官方${market === 'cn' ? '中国' : '国际'}市场模型目录列出该型号。`),
        supply_observations: [{ kind: 'listed_current' as const, evidence: [{ source_ref: catalogSource, locator: `model-catalog/${model_id}`, assertion: evidence }] }],
        operations: [],
        prices: price ? [price] : [],
      };
    });
  return {
    id: observed(id, catalogSource, '#market', `官方${market === 'cn' ? '中国' : '国际'}模型目录来源。`),
    name: observed(market === 'cn' ? '中国区' : '国际区', catalogSource, '#market', '适配器依据官方分市场目录来源标注服务市场名称。'),
    endpoints: [],
    offerings,
    capabilities: [],
    plans: [],
  };
}

/** 将当前目录与精确匹配的 Token 费率映射为 IR，其余来源仍保留观察。 */
export function toStepfunIR(documents: readonly CapturedDocument[], current: StepFunCandidateFacts): ProviderCollectionIR {
  if (!documents.some(({ source }) => source.id === 'stepfun-model-catalog') ||
      !documents.some(({ source }) => source.id === 'stepfun-global-model-catalog')) {
    throw new Error('阶跃星辰中国区或国际区模型目录来源缺失，不能生成 IR');
  }
  const documentObservations = documents.map((document) => {
    const raw = extractDocumentObservation(document);
    const records = recordsForSource(document.source.id, current);
    const isModelList = ['stepfun-model-catalog', 'stepfun-global-model-catalog'].includes(document.source.id);
    return {
      source_ref: raw.source_id,
      scope: scopeForSource(document),
      extraction: raw.extraction ?? 'markdown' as const,
      access_scope: raw.access_scope ?? 'public' as const,
      title: raw.title,
      tables: isModelList ? [] : raw.tables,
      structured_records: isModelList ? records : [...raw.structured_records, ...records],
      api_mentions: isModelList ? [] : raw.api_mentions,
      plan_or_price_mentions: isModelList ? [] : raw.plan_or_price_mentions,
      capability_mentions: isModelList ? [] : raw.capability_mentions,
      model_id_mentions: [...new Set(records.flatMap((record) => {
        if (!record || typeof record !== 'object') return [];
        const value = record as Record<string, unknown>;
        return typeof value.model_id === 'string' ? [value.model_id] : [];
      }))],
      excerpt: isModelList ? '' : raw.excerpt,
    };
  });
  const reviewItems: ReviewItem[] = [{
    id: 'stepfun-domain-facts-not-normalized',
    kind: 'incomplete_coverage',
    message: '中国和国际目录中的可对应型号已映射为 listed_current Offering；只将模型 ID、币种、计量单位和缓存/输出费率均明确的 Token 价格映射为 PriceFact。中国区 Step 5 Preview 当前表价按 0.70 元／百万 tokens 记录，但此前已使用按量付费 API 的用户保留 0.35 元费率，账号分群尚未建模。其他音频计量、限时免费、API Route、能力与 Step Plan 仍需核验。',
    evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: '官方来源已采集，内容仅作为来源观察或旧候选解析记录保留。' })),
  }];
  const cnPricingBody = documents.find(({ source }) => source.id === 'stepfun-api-pricing')?.body ?? '';
  const globalPricingBody = documents.find(({ source }) => source.id === 'stepfun-global-api-pricing')?.body ?? '';
  const cnService = stepfunService('cn', 'stepfun-model-catalog', current.current_catalog_entries, current.current_models, 'stepfun-api-pricing', current.api_price_rows, cnPricingBody);
  const globalService = stepfunService('global', 'stepfun-global-model-catalog', current.international.current_catalog_entries, current.international.current_models, 'stepfun-global-api-pricing', current.international.api_price_rows, globalPricingBody);
  const services = [cnService, globalService];
  const coverage = documentObservations.map((observation) => {
    const catalogService = services.find(({ id }) => id.value === (observation.source_ref === 'stepfun-global-model-catalog' ? 'global' : 'cn'));
    if (observation.source_ref === 'stepfun-model-catalog' || observation.source_ref === 'stepfun-global-model-catalog') {
      return {
        ...coverageBase(observation, documents),
        status: 'partial' as const,
        record_count: catalogService?.offerings.length ?? 0,
        record_unit: 'current Offering records',
        note: '可确认 API ID 的当前型号已映射为 Offering；其余展示名和历史型号保留在目录观察中。',
      };
    }
    const pricingService = observation.source_ref === 'stepfun-api-pricing' ? cnService
      : observation.source_ref === 'stepfun-global-api-pricing' ? globalService : undefined;
    if (pricingService) {
      const count = pricingService.offerings.reduce((total, offering) => total + offering.prices.length, 0);
      return {
        ...coverageBase(observation, documents),
        status: 'partial' as const,
        record_count: count,
        record_unit: 'PriceFact records',
        note: '仅映射完整 Token 费率行；字符、时长、音色、工具、文件和 Step Plan 计费仍保留观察。',
      };
    }
    return coverageBase(observation, documents);
  });
  return {
    ir_version: '1.0.0',
    provider_id: 'stepfun',
    observed_at: latestSnapshotRetrievedAt(documents.map(({ metadata }) => metadata)),
    source_refs: documents.map(({ source }) => source.id),
    coverage,
    document_observations: documentObservations,
    collection_notes: ['中国区和国际区目录、价格、API 路由与 Step Plan 按来源及市场分开；目录只生成 listed_current 观察，只有完整匹配的 Token 价格进入 PriceFact，其余计费类型仍待映射。'],
    profile: {
      name: observed('阶跃星辰', 'stepfun-model-catalog', '#title', '中文官方开放平台目录标识为阶跃星辰。'),
      aliases: observed(['StepFun'], 'stepfun-global-model-catalog', '#title', '国际官方模型目录以 StepFun 作为品牌名。'),
      kind: observed('first_party', 'stepfun-model-catalog', '#title', '阶跃星辰开放平台由 StepFun 以自身品牌提供模型 API；按 Provider 分类语义归为原厂直连。'),
      docs: observed({
        overview: 'https://platform.stepfun.com/docs/zh/guides/models/list',
        pricing: 'https://platform.stepfun.com/docs/zh/guides/pricing/details',
        api: 'https://platform.stepfun.com/docs/zh/api-reference/chat/chat-completion-create',
        capabilities: 'https://platform.stepfun.com/docs/zh/guides/developer/web-search',
        messages_api: 'https://platform.stepfun.com/docs/zh/api-reference/chat/messages-create',
        responses_api: 'https://platform.stepfun.com/docs/zh/api-reference/responses/responses-create',
      }, 'stepfun-model-catalog', '#title', '文档链接对应适配器登记的官方中文页面。'),
    },
    services,
    review_items: reviewItems,
  };
}

function coverageBase(observation: ProviderCollectionIR['document_observations'][number], documents: readonly CapturedDocument[]) {
  const source = documents.find(({ source }) => source.id === observation.source_ref)?.source;
  const records = observation.structured_records;
  const base = {
    source_ref: observation.source_ref,
    scope: observation.scope ?? source?.scope ?? 'documentation' as const,
    ...(source?.market ? { market: source.market } : {}),
    status: records.length ? 'partial' as const : 'not_parsed' as const,
  };
  return records.length
    ? { ...base, record_count: records.length, record_unit: 'structured document records', note: '来源记录已提取，领域映射仍不完整。' }
    : { ...base, note: '来源正文保留为观察，当前未生成结构化记录。' };
}

function renderIRReview(candidate: CandidateEnvelope<ProviderCollectionIR>): string {
  const ir = candidate.current;
  return [
    '# StepFun ProviderCollectionIR 候选', '',
    `- IR 指纹：\`${candidate.candidate_hash}\``,
    `- 来源数：${ir.source_refs.length}`, `- 文档观察：${ir.document_observations.length}`,
    `- 尚未归一的领域线索：${ir.review_items.length} 项`,
    '', '## 来源覆盖', '',
    '| 来源 | 市场 | 数据域 | 状态 | 数量 | 说明 |', '|---|---|---|---|---:|---|',
    ...ir.coverage.map(({ source_ref, market, scope, status, record_count, record_unit, note }) =>
      `| ${source_ref} | ${market ?? '—'} | ${scope} | ${status} | ${record_count === undefined ? '—' : `${record_count} ${record_unit ?? ''}`} | ${(note ?? '—').replace(/[|\r\n]/g, ' ')} |`),
    '', 'IR 按市场映射当前目录 Offering 和可精确匹配的 Token PriceFact；尚未映射的 API、能力、套餐及其他计量价格仍保留观察。',
    '',
  ].join('\n');
}

function cells(line: string): string[] {
  return line.replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/<br\s*\/?\s*>/gi, ' / ').replace(/\\\|/g, '|'));
}

function isSeparator(line: string): boolean {
  return /^\|(?:\s*:?-+:?\s*\|)+$/.test(line);
}

function markdownTables(document: CapturedDocument): TableRow[] {
  const lines = document.body.split(/\r?\n/).map((line) => line.trim());
  const rows: TableRow[] = [];
  let section = '';
  let unit = '';
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index] ?? '';
    const heading = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
    if (heading?.[1]) {
      section = heading[1];
      unit = '';
    }
    const unitMatch = /^单位[：:]\s*(.+)$/.exec(line);
    if (unitMatch?.[1]) unit = unitMatch[1];
    if (!line.startsWith('|') || !isSeparator(lines[index + 1] ?? '')) continue;
    const headers = cells(line);
    index += 2;
    while (index < lines.length && lines[index]?.startsWith('|')) {
      const row = lines[index] ?? '';
      if (!isSeparator(row)) rows.push({ source_id: document.source.id, section, ...(unit ? { unit } : {}), headers, cells: cells(row), text: row });
      index++;
    }
    index--;
  }
  return rows;
}

function parseCurrentModels(catalog: CapturedDocument): ModelFact[] {
  const facts = [...catalog.body.matchAll(/(?:API\s*模型\s*ID|API\s*model\s*ID)\s*[:：]\s*(?:`([^`]+)`|([A-Za-z0-9][A-Za-z0-9._:-]*))/gi)].map((match) => ({
    model_id: (match[1] ?? match[2])!, source_id: catalog.source.id,
    evidence: catalog.body.slice(Math.max(0, match.index! - 140), Math.min(catalog.body.length, match.index! + match[0].length + 30)).replace(/\s+/g, ' ').trim(),
  }));
  return [...new Map(facts.map((fact) => [fact.model_id.toLowerCase(), fact])).values()];
}

function mapCatalogModelsToApiIds(
  catalogEntries: StepFunCandidateFacts['current_catalog_entries'],
  explicitModels: readonly ModelFact[],
  priceListedModelIds: readonly string[],
): ModelFact[] {
  const explicitById = new Map(explicitModels.map((model) => [model.model_id.toLowerCase(), model]));
  const candidateIds = [...new Set([...explicitModels.map(({ model_id }) => model_id), ...priceListedModelIds])];
  const explicit = [...explicitById.values()];
  const entries = catalogEntries.flatMap((catalogEntry) => {
    const matches = candidateIds.filter((modelId) => modelNameMatches(catalogEntry.display_name, modelId));
    if (matches.length !== 1) return [];
    const modelId = matches[0]!;
    const explicit = explicitById.get(modelId.toLowerCase());
    if (explicit) return [];
    return [{
      model_id: modelId,
      source_id: catalogEntry.source_id,
      evidence: `官方当前目录列出型号「${catalogEntry.display_name}」，官方定价表用精确 API 模型 ID「${modelId}」标识；按名称规范化后唯一对应。`,
    }];
  });
  return [...new Map([...explicit, ...entries].map((model) => [model.model_id.toLowerCase(), model])).values()];
}

function parseCatalogEntries(catalog: CapturedDocument): StepFunCandidateFacts['current_catalog_entries'] {
  const start = catalog.body.indexOf('## 全部公开模型');
  if (start < 0) throw new Error('阶跃星辰模型目录缺少“全部公开模型”分区');
  const nextSection = catalog.body.indexOf('\n## ', start + 1);
  const section = catalog.body.slice(start, nextSection < 0 ? undefined : nextSection);
  const lines = section.split(/\r?\n/).map((line) => line.replace(/^>\s?/, '').trim()).filter(Boolean);
  const titleIndexes = lines.flatMap((line, index) => /^Step(?:Audio)?(?:[- ]|\d)/.test(line) && !line.includes('](') ? [index] : []);
  const entries: StepFunCandidateFacts['current_catalog_entries'][number][] = [];
  for (let entryIndex = 0; entryIndex < titleIndexes.length; entryIndex++) {
    const startIndex = titleIndexes[entryIndex]!;
    const displayName = lines[startIndex]!;
    entries.push({ display_name: displayName, source_id: catalog.source.id });
  }
  return [...new Map(entries.map((entry) => [entry.display_name, entry])).values()];
}

function parseInternationalCatalog(catalog: CapturedDocument): StepFunCandidateFacts['international']['current_catalog_entries'] {
  const start = catalog.body.indexOf('## All public models');
  if (start < 0) throw new Error('StepFun International model overview is missing the “All public models” section');
  const nextSection = catalog.body.indexOf('\n## ', start + 1);
  const section = catalog.body.slice(start, nextSection < 0 ? undefined : nextSection);
  const lines = section.split(/\r?\n/).map((line) => line.replace(/^>\s?/, '').trim()).filter(Boolean);
  const titleIndexes = lines.flatMap((line, index) => /^Step(?:Audio)?(?:[- ]|\d)/.test(line) && !line.includes('](') ? [index] : []);
  const entries: StepFunCandidateFacts['international']['current_catalog_entries'][number][] = [];
  for (let entryIndex = 0; entryIndex < titleIndexes.length; entryIndex++) {
    const titleIndex = titleIndexes[entryIndex]!;
    const displayName = lines[titleIndex]!;
    entries.push({ display_name: displayName, source_id: catalog.source.id });
  }
  return [...new Map(entries.map((entry) => [entry.display_name, entry])).values()];
}

function parseInternationalModelFacts(
  entries: StepFunCandidateFacts['international']['current_catalog_entries'],
  explicitModels: readonly ModelFact[],
  priceListedModelIds: readonly string[],
): ModelFact[] {
  return mapCatalogModelsToApiIds(entries, explicitModels, priceListedModelIds);
}

function parseRoutes(documents: readonly CapturedDocument[]): StepFunCandidateFacts['api_routes'] {
  const selected = new Set([
    ...documents.filter(({ source }) => source.scope === 'api' || source.scope === 'capability').map(({ source }) => source.id),
    'stepfun-models-api', 'stepfun-chat-api', 'stepfun-messages-api', 'stepfun-responses-api', 'stepfun-quickstart', 'stepfun-web-search',
  ]);
  const routes = documents.filter(({ source }) => selected.has(source.id)).flatMap(({ source, body }) => {
    const httpRoutes = [...body.matchAll(/(?:^|[\s`])(GET|POST|PUT|DELETE|PATCH)\s+`?(https?:\/\/[^\s`]+)`?/gmi)];
    const websocketRoutes = [...body.matchAll(/`?(wss:\/\/api\.stepfun\.(?:com|ai)\/[^\s`'"<>]+)`?/gmi)];
    const parsedHttp = httpRoutes.flatMap((match) => {
      try {
        const url = new URL(match[2]!);
        return ['api.stepfun.com', 'api.stepfun.ai'].includes(url.hostname) ? [{ source_id: source.id, method: match[1]!.toUpperCase(), path: decodeURIComponent(url.pathname), transport: 'https' as const }] : [];
      } catch { return []; }
    });
    const parsedWebsocket = websocketRoutes.flatMap((match) => {
      try {
        const url = new URL(match[1]!);
        return [{ source_id: source.id, method: 'WEBSOCKET', path: decodeURIComponent(url.pathname), transport: 'wss' as const }];
      } catch { return []; }
    });
    return [...parsedHttp, ...parsedWebsocket];
  });
  return [...new Map(routes.map((route) => [`${route.source_id}:${route.method}:${route.path}:${route.transport ?? ''}`, route])).values()];
}

function buildFacts(documents: readonly CapturedDocument[]): StepFunCandidateFacts {
  const catalog = documents.find(({ source }) => source.id === 'stepfun-model-catalog');
  if (!catalog) throw new Error('阶跃星辰模型目录未被采集');
  const currentCatalogEntries = parseCatalogEntries(catalog);
  const priceDoc = documents.find(({ source }) => source.id === 'stepfun-api-pricing');
  const planDoc = documents.find(({ source }) => source.id === 'stepfun-step-plan-pricing');
  if (!priceDoc || !planDoc) throw new Error('缺少阶跃星辰 API 或 Step Plan 定价来源');
  const internationalCatalog = documents.find(({ source }) => source.id === 'stepfun-global-model-catalog');
  const internationalPriceDoc = documents.find(({ source }) => source.id === 'stepfun-global-api-pricing');
  const internationalPlanDoc = documents.find(({ source }) => source.id === 'stepfun-global-step-plan-overview');
  if (!internationalCatalog || !internationalPriceDoc || !internationalPlanDoc) {
    throw new Error('StepFun International model catalog, pricing, or plan source was not captured');
  }
  const apiPriceRows = markdownTables(priceDoc);
  const stepPlanRows = markdownTables(planDoc);
  const priceListedModelIds = [...new Set(apiPriceRows.flatMap((row) => {
    if (!/^(?:Model ID|模型 ID|模型ID)$/i.test(row.headers[0] ?? '')) return [];
    const id = (row.cells[0] ?? '').replace(/^`|`$/g, '').trim();
    return /^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(id) ? [id] : [];
  }))];
  const currentModels = mapCatalogModelsToApiIds(currentCatalogEntries, parseCurrentModels(catalog), priceListedModelIds);
  if (currentModels.length === 0) throw new Error('阶跃星辰公开模型目录与价格表未能对应出 API 模型 ID，拒绝产出空候选');
  const internationalCatalogEntries = parseInternationalCatalog(internationalCatalog);
  if (internationalCatalogEntries.length === 0) throw new Error('StepFun International model overview produced no current catalog entries');
  const internationalPriceRows = markdownTables(internationalPriceDoc);
  const internationalPriceListedModelIds = [...new Set(internationalPriceRows.flatMap((row) => {
    if (!/^(?:Model ID|模型 ID|模型ID)$/i.test(row.headers[0] ?? '')) return [];
    const id = (row.cells[0] ?? '').replace(/^`|`$/g, '').trim();
    return /^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(id) ? [id] : [];
  }))];
  const internationalPlanRows = markdownTables(internationalPlanDoc);
  const internationalDocuments = documents.filter(({ source }) => source.market === 'global');
  const internationalApiRoutes = parseRoutes(internationalDocuments);
  return {
    market: 'cn',
    current_catalog_entries: currentCatalogEntries,
    current_models: currentModels,
    api_price_rows: apiPriceRows,
    price_listed_model_ids: priceListedModelIds,
    step_plan_rows: stepPlanRows,
    api_routes: parseRoutes(documents.filter(({ source }) => source.market !== 'global')),
    international: {
      market: 'global',
      current_catalog_entries: internationalCatalogEntries,
      current_models: parseInternationalModelFacts(
        internationalCatalogEntries,
        parseCurrentModels(internationalCatalog),
        internationalPriceListedModelIds,
      ),
      api_price_rows: internationalPriceRows,
      step_plan_rows: internationalPlanRows,
      api_routes: internationalApiRoutes,
      api_document_sources: internationalDocuments.filter(({ source }) => source.scope === 'api').map(({ source }) => source.id),
      capability_document_sources: internationalDocuments.filter(({ source }) => source.scope === 'capability').map(({ source }) => source.id),
      source_gaps: ['未在国际站文档索引发现独立 Web Search 指南；国际定价页有搜索计费项，但尚无国际 API 能力文档证据。'],
    },
    source_coverage: documents.map(({ source }) => ({
      source_id: source.id,
      captured: true,
      table_rows: markdownTables(documents.find((item) => item.source.id === source.id)!).length,
    })),
  };
}

export async function collectStepfun(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, STEPFUN_INGEST_SOURCES);
  const current = buildFacts(documents);
  const ir = toStepfunIR(documents, current);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'stepfun',
    documents,
    current: ir,
    modelCount: current.current_models.length + current.international.current_models.length,
    renderReview: renderIRReview,
  });
}

export const stepfunParser = { markdownTables, parseCurrentModels, mapCatalogModelsToApiIds, parseCatalogEntries, toStepfunIR };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectStepfun({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
