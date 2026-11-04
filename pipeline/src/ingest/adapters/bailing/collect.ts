import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { extractDocumentObservation } from '../document-observation.ts';
import type { EvidenceRef, OperationFact, PriceFact, ProviderCollectionIR, ProviderProfileFacts, RouteFact } from '../../ir/provider-collection.ts';
import { BAILING_INGEST_SOURCES } from './sources.ts';

interface EvidenceLine { readonly source_id: string; readonly section: string; readonly raw: string; readonly model_names: readonly string[] }
export interface BailingCandidateFacts {
  readonly directory_evidence: readonly EvidenceLine[];
  /** 官方按量定价页中的百灵原厂模型；第三方平台段不进入该列表。 */
  readonly pricing_model_ids: readonly string[];
  readonly price_evidence: readonly EvidenceLine[];
  /** 下架说明中的当前可用清单，用来与价格页和 FAQ 交叉核对。 */
  readonly current_api_models: readonly string[];
  readonly faq_api_models: readonly string[];
  readonly price_catalog_mismatches: {
    readonly priced_not_current: readonly string[];
    readonly current_without_price: readonly string[];
    readonly faq_not_current: readonly string[];
  };
  readonly documented_api_models: readonly string[];
  readonly api_recommended_models: readonly string[];
  readonly route_evidence: readonly EvidenceLine[];
  readonly capability_evidence: readonly EvidenceLine[];
  readonly plan_and_quota_evidence: readonly EvidenceLine[];
  readonly marketplace_prices_excluded: true;
}
type IRCandidate = CandidateEnvelope<ProviderCollectionIR>;
const NAME = /\b(?:Ling|Ring|Ming)-[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*\b|\bAntAngelMed\b/g;
function clean(body: string): string { return body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<h[1-6]\b[^>]*>/gi, '\n## ').replace(/<\/(?:p|li|tr|h[1-6]|div|section)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&#39;|&apos;/gi, "'").replace(/[\t ]+/g, ' '); }
function evidence(sourceId: string, body: string, matcher: RegExp): EvidenceLine[] {
  let section = '未识别章节';
  return clean(body).split(/\r?\n/).map((raw) => raw.trim()).filter(Boolean).flatMap((raw) => {
    if (/^#{1,6}\s+/.test(raw)) section = raw.replace(/^#{1,6}\s+/, '');
    if (!matcher.test(raw)) return [];
    const model_names = [...new Set(raw.match(NAME) ?? [])];
    return [{ source_id: sourceId, section, raw, model_names }];
  });
}
function facts(documents: readonly CapturedDocument[]): BailingCandidateFacts {
  const required = [
    'bailing-models', 'bailing-api-overview', 'bailing-api-openai', 'bailing-api-anthropic', 'bailing-api-asr', 'bailing-api-tts',
    'bailing-current-models', 'bailing-pricing', 'bailing-faq', 'bailing-structured-output',
    'bailing-multimodal-api', 'bailing-billing-upgrade',
  ];
  const byId = new Map(documents.map((doc) => [doc.source.id, doc]));
  if (required.some((id) => !byId.has(id))) throw new Error('蚂蚁百灵当前目录、API Route、能力、价格与额度来源须完整采集');
  const pricing = byId.get('bailing-pricing')!;
  const pricingLines = evidence(pricing.source.id, pricing.body, /模型定价|Ling-|Ring-|输入价格|输出价格|免费 token|RMB|人民币|第三方平台/i);
  if (pricingLines.length < 8) throw new Error(`蚂蚁百灵价格页证据行异常偏少：${pricingLines.length}`);
  const directory = evidence('bailing-models', byId.get('bailing-models')!.body, /Ling|Ring|Ming|模型家族|模型系列|最新模型/);
  const api = evidence('bailing-api-overview', byId.get('bailing-api-overview')!.body, /Ling-|Ring-|Ming-|API|上下文窗口|model/i);
  const currentCatalog = evidence('bailing-current-models', byId.get('bailing-current-models')!.body, /Ling-|Ring-|Ming-/);
  const faq = evidence('bailing-faq', byId.get('bailing-faq')!.body, /目前支持 API|Ling-|Ring-|Ming-|上下文|Token|免费额度/i);
  const faqApiModels = [...new Set(faq
    .filter(({ section }) => section === '哪些模型版本支持 API 调用？')
    .flatMap(({ model_names }) => model_names))];
  const currentApiModels = [...new Set(currentCatalog
    .filter(({ section }) => section === '当前可用模型')
    .flatMap(({ model_names }) => model_names))];
  const apiRecommendedModels = [...new Set(api
    .filter(({ raw }) => /智能对话 API 推荐使用/.test(raw))
    .flatMap(({ model_names }) => model_names))];
  const pricingModelIds = [...new Set(pricingLines
    .filter(({ section }) => section === '模型定价')
    .flatMap(({ model_names }) => model_names))];
  const routeEvidence = ['bailing-api-overview', 'bailing-api-openai', 'bailing-api-anthropic', 'bailing-api-asr', 'bailing-api-tts']
    .flatMap((sourceId) => evidence(sourceId, byId.get(sourceId)!.body, /POST|https?:\/\/api\.ant-ling\.com|\/v1\/|\/anthropic|OpenAI 兼容接口|Anthropic 兼容接口/i));
  const capabilityEvidence = ['bailing-api-overview', 'bailing-api-openai', 'bailing-api-anthropic', 'bailing-api-asr', 'bailing-api-tts', 'bailing-structured-output', 'bailing-multimodal-api']
    .flatMap((sourceId) => evidence(sourceId, byId.get(sourceId)!.body, /Function Calling|工具调用|response_format|JSON Schema|结构化输出|图像输入|视频输入|多模态理解|音频理解|语音识别|语音合成/i));
  const planAndQuotaEvidence = ['bailing-pricing', 'bailing-faq', 'bailing-billing-upgrade']
    .flatMap((sourceId) => evidence(sourceId, byId.get(sourceId)!.body, /按量计费|每日.{0,12}免费|月度.{0,12}抵扣|Token 抵扣券|包月套餐|套餐|充值|额度|优惠结束/i));
  if (!directory.length || !currentApiModels.length || !pricingModelIds.length || !faqApiModels.length || !apiRecommendedModels.length) {
    throw new Error('蚂蚁百灵模型目录、当前可用清单、原厂定价或 FAQ/API 型号缺少可解析证据');
  }
  const currentIds = new Set(currentApiModels);
  const pricingIds = new Set(pricingModelIds);
  return {
    directory_evidence: directory,
    pricing_model_ids: pricingModelIds,
    price_evidence: pricingLines,
    current_api_models: currentApiModels,
    faq_api_models: faqApiModels,
    price_catalog_mismatches: {
      priced_not_current: pricingModelIds.filter((id) => !currentIds.has(id)),
      current_without_price: currentApiModels.filter((id) => !pricingIds.has(id)),
      faq_not_current: faqApiModels.filter((id) => !currentIds.has(id)),
    },
    route_evidence: routeEvidence,
    capability_evidence: capabilityEvidence,
    plan_and_quota_evidence: planAndQuotaEvidence,
    marketplace_prices_excluded: true,
    documented_api_models: currentApiModels,
    api_recommended_models: apiRecommendedModels,
  };
}

function evidenceRef(sourceId: string, locator: string, assertion: string): EvidenceRef {
  return { source_ref: sourceId, ...(locator.trim() ? { locator } : {}), assertion };
}

function tableCells(row: string): string[] {
  return [...row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(([, cell]) => cell ?? '');
}

function currentCellAmount(cell: string): string | undefined {
  // Ignore struck-through list prices; only the currently displayed green value is authoritative.
  const current = cell.match(/<span\b(?=[^>]*\bstyle=["'][^"']*color\s*:\s*green)[^>]*>([\s\S]*?)<\/span>/i)?.[1];
  if (!current) return undefined;
  const text = clean(current).replace(/[¥￥\s,]/g, '');
  return /^(?:0|[1-9]\d*)(?:\.\d+)?$/.test(text) ? text : undefined;
}

function bailingPriceFacts(
  document: CapturedDocument,
  currentModelIds: ReadonlySet<string>,
): { readonly pricesByModelId: ReadonlyMap<string, PriceFact>; readonly parsedModelIds: readonly string[]; readonly promotionModelIds: readonly string[] } {
  const tables = [...document.body.matchAll(/<table\b[\s\S]*?<\/table>/gi)].map(([table]) => table);
  const officialTable = tables.find((table) => {
    const headers = [...table.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi)].map(([, header]) => clean(header ?? ''));
    return headers.length === 5 && headers[0] === '模型' && /输入价格/.test(headers[2] ?? '')
      && /输出价格/.test(headers[3] ?? '') && /缓存读取/.test(headers[4] ?? '');
  });
  if (!officialTable) return { pricesByModelId: new Map(), parsedModelIds: [], promotionModelIds: [] };

  const promotionModelIdsFromNotice = new Set(clean(document.body).split(/\r?\n/)
    .filter((line) => /限时/.test(line) && /优惠结束后/.test(line))
    .flatMap((line) => line.match(NAME) ?? []));
  const pricesByModelId = new Map<string, PriceFact>();
  const parsedModelIds: string[] = [];
  const promotionModelIds: string[] = [];
  for (const [rowIndex, [row]] of [...officialTable.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].entries()) {
    const cells = tableCells(row);
    const modelId = clean(cells[0] ?? '').trim();
    if (!currentModelIds.has(modelId)) continue;
    const [input, output, cacheRead] = cells.slice(2, 5).map(currentCellAmount);
    if (input === undefined || output === undefined || cacheRead === undefined) continue;
    const locator = `#模型定价/table/1/row/${rowIndex + 1}`;
    const evidence = [evidenceRef(document.source.id, locator, `官方人民币价格表列出 ${modelId} 的当前绿色报价；删除线原价不作为现行价格。` )];
    const isPromotion = promotionModelIdsFromNotice.has(modelId);
    if (isPromotion) promotionModelIds.push(modelId);
    const price: PriceFact = {
      provider_model_id: { value: modelId, evidence },
      currency: { value: 'CNY', evidence: [evidenceRef(document.source.id, '#模型定价', '官方价格页声明所有价格均以人民币（RMB）计价。')] },
      unit: { value: 'per_1m_tokens', evidence: [evidenceRef(document.source.id, locator, '官方价格表按每百万 Token 计价。')] },
      rules: { value: [{
        rate_items: [
          { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: input },
          { metric: 'output', unit: 'per_1m_tokens', quantity: 1, amount_decimal: output },
          { metric: 'cache_read', unit: 'per_1m_tokens', quantity: 1, amount_decimal: cacheRead },
        ],
        evidence,
      }], evidence },
    };
    pricesByModelId.set(modelId, price);
    parsedModelIds.push(modelId);
  }
  return { pricesByModelId, parsedModelIds, promotionModelIds };
}

function documentedModelIds(body: string): readonly string[] {
  const text = clean(body);
  const modelOptions = text.match(/可选值\s*[:：]\s*((?:[A-Za-z0-9_.-]+(?:\s*[、,，]\s*[A-Za-z0-9_.-]+)*))/)?.[1];
  if (!modelOptions) return [];
  return [...new Set(modelOptions.match(NAME) ?? [])];
}

function htmlAttribute(tag: string, name: string): string | undefined {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*([\"'])(.*?)\\1`, 'i'));
  return match?.[2]?.replace(/&amp;/gi, '&').trim();
}

function toBailingProfile(documents: readonly CapturedDocument[]): ProviderProfileFacts | undefined {
  const modelDocs = documents.find(({ source }) => source.id === 'bailing-models');
  const overview = documents.find(({ source }) => source.id === 'bailing-api-overview');
  const pricing = documents.find(({ source }) => source.id === 'bailing-pricing');
  if (!modelDocs || !overview || !pricing) return undefined;

  const description = modelDocs.body.match(/<meta\b(?=[^>]*\bname=[\"']description[\"'])([^>]*)>/i)?.[0];
  const keywords = modelDocs.body.match(/<meta\b(?=[^>]*\bname=[\"']keywords[\"'])([^>]*)>/i)?.[0];
  const name = [htmlAttribute(description ?? '', 'content'), htmlAttribute(keywords ?? '', 'content')]
    .filter((value): value is string => Boolean(value))
    .flatMap((value) => value.split(/[：,:，]/).map((part) => part.trim()))
    .find((value) => value === '蚂蚁百灵');
  const brandedImage = [...modelDocs.body.matchAll(/<img\b[^>]*>/gi)]
    .map(([tag]) => ({ tag, alt: htmlAttribute(tag, 'alt') }))
    .find(({ alt }) => alt === 'Ant Ling');
  if (!name || !brandedImage) return undefined;

  const profileEvidence = (sourceRef: string, locator: string, assertion: string): EvidenceRef[] => [
    evidenceRef(sourceRef, locator, assertion),
  ];
  return {
    name: {
      value: name,
      evidence: profileEvidence('bailing-models', 'head > meta[name="description"|"keywords"]', '蚂蚁百灵官方模型文档的页面描述和关键词明确标识产品名称。'),
    },
    aliases: {
      value: [brandedImage.alt!],
      evidence: profileEvidence('bailing-models', 'header img[alt="Ant Ling"]', '官方开发者文档导航使用 Ant Ling 品牌标识。'),
    },
    kind: {
      value: 'first_party',
      evidence: [
        evidenceRef('bailing-models', 'header img[alt="Ant Ling"]', 'Provider 官方开发者文档以 Ant Ling 品牌发布模型目录。'),
        evidenceRef('bailing-api-overview', 'API 文档页', '该官方 API 文档属于同一 Ant Ling 开发者站点。'),
      ],
    },
    docs: {
      value: { overview: overview.source.url, pricing: pricing.source.url },
      evidence: [
        evidenceRef(overview.source.id, 'registered source URL', 'Provider API 概览文档入口。'),
        evidenceRef(pricing.source.id, 'registered source URL', 'Provider 按量价格文档入口。'),
      ],
    },
  };
}

/** 只把官方当前清单及 API 明确支持的事实映射为 IR；未解析的 API/能力仍留在旧候选观察。 */
export function toBailingCollectionIR(documents: readonly CapturedDocument[], current: BailingCandidateFacts): ProviderCollectionIR {
  const currentModels = documents.find(({ source }) => source.id === 'bailing-current-models');
  if (!currentModels) throw new Error('蚂蚁百灵当前可用模型来源缺失，不能生成供应 IR');
  const market = currentModels.source.market;
  if (market !== 'cn') throw new Error('蚂蚁百灵当前可用模型来源缺少中国市场标记');

  const models = new Set(current.current_api_models);
  const profile = toBailingProfile(documents);
  const pricingDocument = documents.find(({ source }) => source.id === 'bailing-pricing');
  const pricing = pricingDocument ? bailingPriceFacts(pricingDocument, models) : { pricesByModelId: new Map<string, PriceFact>(), parsedModelIds: [], promotionModelIds: [] };
  const observations = documents.map((document) => {
    const observation = extractDocumentObservation(document);
    return {
      source_ref: observation.source_id,
      scope: observation.scope,
      extraction: observation.extraction,
      access_scope: observation.access_scope,
      title: observation.title,
      tables: observation.tables,
      structured_records: observation.structured_records,
      api_mentions: observation.api_mentions,
      plan_or_price_mentions: observation.plan_or_price_mentions,
      capability_mentions: observation.capability_mentions,
      model_id_mentions: [...new Set(document.body.match(NAME) ?? [])],
      excerpt: observation.excerpt,
    };
  });
  const endpointDocs = [
    {
      id: 'openai-compatible', sourceId: 'bailing-api-openai', baseUrl: 'https://api.ant-ling.com/v1',
      protocol: 'OpenAI Chat Completions', routePattern: /POST\s+https:\/\/api\.ant-ling\.com\/v1\/chat\/completions/i,
      routeProtocol: 'chat-completions', path: '/chat/completions', locator: 'POST /v1/chat/completions',
    },
    {
      id: 'anthropic-compatible', sourceId: 'bailing-api-anthropic', baseUrl: 'https://api.ant-ling.com/anthropic',
      protocol: 'Anthropic Messages', routePattern: /POST\s+https:\/\/api\.ant-ling\.com\/anthropic\/v1\/messages/i,
      routeProtocol: 'messages', path: '/v1/messages', locator: 'POST /anthropic/v1/messages',
    },
  ] as const;
  const endpoints = endpointDocs.flatMap((endpoint) => {
    const document = documents.find(({ source }) => source.id === endpoint.sourceId);
    if (!document || !endpoint.routePattern.test(clean(document.body))) return [];
    const evidence = [evidenceRef(endpoint.sourceId, endpoint.locator, `官方 API 文档示例明确给出 ${endpoint.protocol} 请求地址；Base URL 按该地址的协议前缀登记。`)];
    return [{
      id: { value: endpoint.id, evidence },
      base_url: { value: endpoint.baseUrl, evidence },
      api_region: { value: '中国', evidence: [evidenceRef(endpoint.sourceId, endpoint.locator, '该文档属于蚂蚁百灵中国市场 API。')] },
      documentation: { value: document.source.url, evidence },
    }];
  });
  const routeFactsByModelId = new Map<string, RouteFact[]>();
  const routeSourcesWithoutModelList: string[] = [];
  for (const endpoint of endpointDocs) {
    const document = documents.find(({ source }) => source.id === endpoint.sourceId);
    if (!document || !endpoint.routePattern.test(clean(document.body))) continue;
    const documentedIds = documentedModelIds(document.body);
    if (!documentedIds.length) {
      routeSourcesWithoutModelList.push(endpoint.sourceId);
      continue;
    }
    const supportedIds = documentedIds.filter((modelId) => models.has(modelId));
    for (const providerModelId of supportedIds) {
      const evidence = [evidenceRef(endpoint.sourceId, '#model/可选值', `官方 API Schema 的 model 可选值明确包含 ${providerModelId}；仅与当前 API 型号清单精确相交时映射模型级 Route。`)];
      const route: RouteFact = {
        id: { value: endpoint.routeProtocol, evidence },
        endpoint_ref: { value: endpoint.id, evidence: [evidenceRef(endpoint.sourceId, endpoint.locator, '该 API 请求示例与登记的同协议 Service Endpoint 一致。')] },
        protocol: { value: endpoint.routeProtocol, evidence },
        method: { value: 'POST', evidence: [evidenceRef(endpoint.sourceId, endpoint.locator, '官方请求定义明确使用 POST。')] },
        path_template: { value: endpoint.path, evidence: [evidenceRef(endpoint.sourceId, endpoint.locator, `官方请求 URL 明确包含路径 ${endpoint.path}。`)] },
        operation_kind: { value: 'text_generation', evidence },
        provider_model_ids: { value: [providerModelId], evidence },
        documentation: { value: document.source.url, evidence },
      };
      const modelRoutes = routeFactsByModelId.get(providerModelId) ?? [];
      modelRoutes.push(route);
      routeFactsByModelId.set(providerModelId, modelRoutes);
    }
  }
  const operationEvidenceByModelId = new Map([...routeFactsByModelId].map(([modelId, routes]) => [
    modelId,
    routes.flatMap(({ id }) => id.evidence),
  ]));
  const coverage = documents.map(({ source }) => ({
    source_ref: source.id,
    scope: source.scope ?? 'documentation',
    ...(source.market ? { market: source.market } : {}),
    status: source.id === currentModels.source.id || source.id === pricingDocument?.source.id && pricing.parsedModelIds.length > 0 ? 'complete' as const
      : endpoints.some(({ documentation }) => documentation.value === source.url) ? 'partial' as const : 'not_parsed' as const,
    ...(source.id === currentModels.source.id
      ? { record_count: models.size, record_unit: 'unique current model IDs', note: '已解析官方“当前可用模型”清单；仅该来源范围可据以形成当前供应观察。' }
      : source.id === pricingDocument?.source.id && pricing.parsedModelIds.length > 0
        ? { record_count: pricing.parsedModelIds.length, record_unit: 'Offering PriceFact records', note: '仅解析官方原厂人民币价格表的当前报价，删除线原价和第三方市场表不进入 IR。' }
      : routeFactsByModelId.size && endpointDocs.some(({ sourceId }) => sourceId === source.id)
        ? { record_count: [...routeFactsByModelId.values()].flat().filter(({ documentation }) => documentation?.value === source.url).length, record_unit: 'Route records', note: '已按官方 model 可选值和当前清单的精确交集映射逐模型 Route；参数/输入输出 Schema 仍未完整映射。' }
      : endpoints.some(({ documentation }) => documentation.value === source.url)
        ? { record_count: 1, record_unit: 'API Endpoint records', note: '已提取 Service Endpoint；官方模型支持列表无法解析，逐模型 Route 留在 Review。' }
        : { note: '原始页面与结构化线索保留在候选中；尚未映射为 IR 领域事实。' }),
  }));
  const offerings = [...models].sort((a, b) => a.localeCompare(b)).map((providerModelId) => {
    const evidence = [evidenceRef(currentModels.source.id, '#当前可用模型', '官方当前可用模型清单明确列出该 API 型号。')];
    return {
      provider_model_id: { value: providerModelId, evidence },
      display_name: { value: providerModelId, evidence: [evidenceRef(currentModels.source.id, '#当前可用模型 API ID', '官方当前可用模型清单使用精确 API ID 标识模型；在没有独立展示名时沿用该官方标识。')] },
      service_id: { value: 'cn', evidence: [evidenceRef(currentModels.source.id, '#当前可用模型', '该型号列于中国市场 API 当前可用清单。')] },
      supply_observations: [{ kind: 'listed_current' as const, evidence }],
      operations: routeFactsByModelId.has(providerModelId) ? [{
        id: { value: 'text-generation', evidence: operationEvidenceByModelId.get(providerModelId)! },
        kind: { value: 'text_generation', evidence: operationEvidenceByModelId.get(providerModelId)! },
        routes: routeFactsByModelId.get(providerModelId)!,
      } satisfies OperationFact] : [],
      prices: pricing.pricesByModelId.has(providerModelId) ? [pricing.pricesByModelId.get(providerModelId)!] : [],
    };
  });
  const latestObservedAt = documents.map(({ metadata }) => metadata.retrieved_at).sort().at(-1);
  const reviewItems = coverage.filter(({ status }) => status !== 'complete').map((record, index) => ({
    id: `bailing-coverage-${String(index + 1).padStart(2, '0')}`,
    kind: 'incomplete_coverage' as const,
    message: `${record.scope} 来源 ${record.source_ref} 尚未映射为 IR 领域事实。`,
    evidence: [evidenceRef(record.source_ref, '', record.note ?? '来源内容保留在文档观察中。')],
  }));
  if (current.price_catalog_mismatches.priced_not_current.length || current.price_catalog_mismatches.current_without_price.length) {
    reviewItems.push({
      id: 'bailing-price-catalog-crosscheck',
      kind: 'incomplete_coverage',
      message: '价格目录与当前 API 型号清单存在差异；逐行核对未映射价格并保留来源证据。',
      evidence: [
        evidenceRef('bailing-pricing', '#模型定价', `价格页型号：${current.pricing_model_ids.join('、')}`),
        evidenceRef(currentModels.source.id, '#当前可用模型', `当前型号：${current.current_api_models.join('、')}`),
      ],
    });
  }
  if (pricingDocument && pricing.promotionModelIds.length) {
    reviewItems.push({
      id: 'bailing-promotion-expiry',
      kind: 'incomplete_coverage',
      message: '当前价格表包含限时促销报价，但官方页面未给出明确结束日期；价格按页面当前展示值记录，促销有效期需持续核验。',
      evidence: [evidenceRef(pricingDocument.source.id, '#定价', `官方促销说明涉及 ${pricing.promotionModelIds.join('、')}，优惠结束后逐步恢复原价，但未标注结束日期。`)],
    });
  }
  if (routeSourcesWithoutModelList.length) {
    for (const sourceId of routeSourcesWithoutModelList) reviewItems.push({
      id: `bailing-route-models-${sourceId}`,
      kind: 'incomplete_coverage',
      message: `来源 ${sourceId} 有明确 Route，但未能解析其模型支持列表；不推断逐模型支持关系。`,
      evidence: [evidenceRef(sourceId, '', '需核查页面结构是否变化或是否存在可机器识别的 model 枚举。')],
    });
  }

  return {
    ir_version: '1.0.0',
    provider_id: 'bailing',
    observed_at: latestObservedAt ?? currentModels.metadata.retrieved_at,
    source_refs: documents.map(({ source }) => source.id),
    coverage,
    document_observations: observations,
    ...(profile ? { profile } : {}),
    collection_notes: [
      '当前供应 IR 映射官方“当前可用模型”清单、原厂人民币 Token 价格、API 文档明确给出的 Service Endpoint，以及 model Schema 可选值和当前目录精确交集内的模型级 Route。参数/输入输出 Schema、能力与额度仍保留在 Review 或并行旧候选。',
      'ModelScope/第三方市场模型价格已由旧采集器排除，不进入本 Provider IR。',
    ],
    services: [{
      id: { value: 'cn', evidence: [evidenceRef(currentModels.source.id, '#当前可用模型', '来源登记的市场为 cn。')] },
      name: { value: '中国市场', evidence: [evidenceRef(currentModels.source.id, '#当前可用模型', '来源明确登记为中国市场；该名称用于展示对应市场线路。')] },
      endpoints,
      offerings,
      capabilities: [],
      plans: [],
    }],
    review_items: reviewItems,
  };
}
function renderIRReview(candidate: IRCandidate): string {
  const facts = candidate.current;
  const offerings = facts.services.flatMap((service) => service.offerings);
  const prices = offerings.flatMap(({ prices }) => prices);
  const routes = offerings.flatMap(({ operations }) => operations.flatMap(({ routes }) => routes));
  return [
    '# 蚂蚁百灵 Provider 采集 IR 候选', '',
    `- 当前供应 Offering：${offerings.length} 个`,
    `- Token PriceFact：${prices.length} 个`,
    `- 模型级 Route：${routes.length} 条`,
    `- 文档观察：${facts.document_observations.length} 份`,
    `- 待核对：${facts.review_items.length} 项`,
    '',
    '当前 IR 已映射官方当前可用清单、原厂人民币 Token 价格，以及 OpenAI Chat Completions / Anthropic Messages 的模型级 Route。Route 仅来自文档 model 枚举与当前清单的精确交集；请求参数、输入输出 Schema、音频 Route、能力和套餐仍未映射，不得把未完成覆盖解释为不支持。',
    '', '## 当前 API 型号', '',
    ...offerings.map(({ provider_model_id }) => `- \`${provider_model_id.value}\``),
    '', '## 已映射 Route', '',
    ...routes.map(({ protocol, method, path_template, provider_model_ids }) => `- \`${method.value} ${path_template.value}\` (${protocol.value}) · \`${provider_model_ids?.value.join(', ') ?? 'model ID 未解析'}\``),
    '', '## 覆盖缺口', '',
    ...facts.coverage.filter(({ status }) => status !== 'complete').map(({ source_ref, scope, status }) => `- \`${source_ref}\`（${scope}）：${status}`),
    '',
  ].join('\n');
}

export async function collectBailing(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, BAILING_INGEST_SOURCES);
  const current = facts(documents);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'bailing',
    documents,
    current: toBailingCollectionIR(documents, current),
    modelCount: current.current_api_models.length,
    renderReview: renderIRReview,
  });
}
export const bailingParser = { clean, evidence, toBailingCollectionIR, toBailingProfile, bailingPriceFacts, documentedModelIds };
const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') { const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..'); collectBailing({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }); }
