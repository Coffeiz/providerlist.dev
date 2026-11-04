import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { TENCENT_INGEST_SOURCES } from './sources.ts';
import type { CapabilityFact, Observed, OperationFact, PlanFact, ProviderCollectionIR, PriceFact, PriceRuleFact, RouteFact } from '../../ir/provider-collection.ts';
import { extractDocumentObservation } from '../document-observation.ts';

interface SourceEvidence {
  readonly source_id: string;
  readonly rows: readonly string[];
}

export interface TencentCandidateFacts {
  readonly catalog_evidence: SourceEvidence;
  readonly pricing_evidence: SourceEvidence;
  readonly video_input_image_pricing_rows: readonly VideoInputImagePricingRow[];
  readonly coding_plan_evidence: SourceEvidence;
  readonly token_plan_evidence: SourceEvidence;
  readonly supply_status_evidence: SourceEvidence;
  readonly api_usage_evidence: SourceEvidence;
  readonly language_api_evidence: SourceEvidence;
  readonly vector_api_evidence: SourceEvidence;
  readonly web_search_evidence: SourceEvidence;
  readonly api_guide_evidence: SourceEvidence;
  readonly image_api_evidence: SourceEvidence;
  readonly video_api_evidence: SourceEvidence;
  readonly api_3d_evidence: SourceEvidence;
  readonly speech_api_evidence: SourceEvidence;
  readonly multimodal_api_evidence: SourceEvidence;
  readonly image_api_overview_evidence: SourceEvidence;
  readonly hy_image_api_evidence: SourceEvidence;
  readonly video_api_overview_evidence: SourceEvidence;
  readonly world_api_overview_evidence: SourceEvidence;
  readonly speech_api_overview_evidence: SourceEvidence;
  readonly image_understanding_evidence: SourceEvidence;
  readonly video_understanding_evidence: SourceEvidence;
  readonly product_overview_evidence: SourceEvidence;
  readonly models_dev_entries: readonly string[];
  readonly model_ids: readonly string[];
  readonly account_api_list: 'not_called';
}

export interface VideoInputImagePricingRow {
  readonly model_name: string;
  readonly resolution: string;
  readonly free_image_count: number;
  readonly billed_from_image: number;
  readonly tokens_per_image: string;
  readonly amount_per_image: string;
  readonly currency: 'CNY';
}

function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}

/** 腾讯文档把正文放在静态 hydration JSON 中；只解正文，不解析脚本逻辑。 */
export function tencentArticleBody(body: string): string {
  const match = body.match(/window\.__staticRouterHydrationData\s*=\s*JSON\.parse\(("(?:\\.|[^"\\])*")\)/);
  if (!match) return body;
  try {
    const hydration = JSON.parse(JSON.parse(match[1]!)) as {
      loaderData?: { 'product-article'?: { data?: { article?: { content?: { body?: unknown } } } } };
    };
    const articleBody = hydration.loaderData?.['product-article']?.data?.article?.content?.body;
    return typeof articleBody === 'string' ? articleBody : body;
  } catch {
    return body;
  }
}

function normalizedCellText(value: string): string {
  return value
    .replace(/<br\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(x[\da-f]+|\d+);/gi, (_match, code: string) => {
      const point = code[0]?.toLowerCase() === 'x' ? Number.parseInt(code.slice(1), 16) : Number.parseInt(code, 10);
      return Number.isFinite(point) && point >= 0 && point <= 0x10ffff ? String.fromCodePoint(point) : _match;
    })
    .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&apos;/gi, "'")
    .replace(/[\s\uFEFF\u200B]+/g, ' ')
    .trim();
}

/**
 * 腾讯有些目录行在一个模型名称下列出多个独立调用 ID。通用表格提取会把
 * 列表/code 节点拍平成空格文本；这里仅在原始来源结构明确分隔多个值时展开。
 */
function tencentModelIdsInCell(document: CapturedDocument, value: string | undefined): string[] {
  if (!value?.trim()) return [];
  const target = normalizedCellText(value);
  const body = tencentArticleBody(document.body);
  for (const match of body.matchAll(/<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)\s*>/gi)) {
    const cell = match[1] ?? '';
    if (normalizedCellText(cell) !== target) continue;
    const listItems = [...cell.matchAll(/<div\b[^>]*class="[^"]*\btse-markdown-ul\b[^"]*"[^>]*>([\s\S]*?)<\/div\s*>/gi)]
      .map((item) => normalizedCellText(item[1] ?? ''))
      .filter(Boolean);
    const codeItems = [...cell.matchAll(/<code\b[^>]*>([\s\S]*?)<\/code\s*>/gi)]
      .map((item) => normalizedCellText(item[1] ?? ''))
      .filter(Boolean);
    const separated = listItems.length > 1 ? listItems : codeItems.length > 1 ? codeItems : [];
    if (separated.length > 1 && normalizedCellText(separated.join(' ')) === target) return separated;
  }
  return [target];
}

function documentTables(document: CapturedDocument) {
  return extractDocumentObservation({
    source: { ...document.source, extraction: 'html' },
    body: tencentArticleBody(document.body),
  }).tables;
}

function decimal(value: string): string | null {
  const normalized = value.replace(/[\s,]/g, '');
  return /^\d+(?:\.\d+)?$/.test(normalized) ? normalized : null;
}

/** 将来源可精确关联的 Kinfra Embedding 目录与价格映射到领域 IR。 */
export function tencentCollectionIR(documents: readonly CapturedDocument[], observedAt?: string): ProviderCollectionIR {
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const catalog = byId.get('tencent-model-list');
  const pricing = byId.get('tencent-model-pricing');
  const vectorApi = byId.get('tencent-vector-api');
  const apiUsage = byId.get('tencent-api-usage');
  const productOverview = byId.get('tencent-product-overview');
  const apiGuide = byId.get('tencent-api-guide-index');
  const languageApi = byId.get('tencent-language-api');
  const webSearch = byId.get('tencent-web-search');
  const codingPlan = byId.get('tencent-coding-plan');
  const tokenPlan = byId.get('tencent-token-plan');
  const globalTokenPlan = byId.get('tencent-token-plan-global');
  if (!catalog || !pricing || !vectorApi || !apiUsage || !languageApi || !webSearch || !productOverview || !apiGuide || !codingPlan || !tokenPlan || !globalTokenPlan) {
    throw new Error('腾讯 TokenHub IR 缺少模型目录、价格、API、产品档案或计划入口来源');
  }
  const catalogTable = documentTables(catalog).find(({ headers }) => headers.some((header) => /model（调用参数）/i.test(header))
    && headers.some((header) => /输出维度/.test(header)));
  const priceTable = documentTables(pricing).find(({ headers }) => headers.some((header) => /计费项/.test(header))
    && headers.some((header) => /价格（元\/百万 tokens）/.test(header)));
  if (!catalogTable || !priceTable) throw new Error('腾讯 TokenHub 向量模型目录或价格表未能解析');
  const tokenPlanFacts = parseTencentTokenPlanDescriptions(tokenPlan);
  const globalTokenPlanFacts = parseTencentGlobalTokenPlanDescriptions(globalTokenPlan);
  const idColumn = catalogTable.headers.findIndex((header) => /model（调用参数）/i.test(header));
  const nameColumn = catalogTable.headers.findIndex((header) => /模型名称/.test(header));
  const dimensionColumn = catalogTable.headers.findIndex((header) => /输出维度/.test(header));
  const catalogRows = new Map<string, { readonly name: string; readonly tableIndex: number }>();
  for (const [tableIndex, table] of documentTables(catalog).entries()) {
    const modelIdIndex = table.headers.findIndex((header) => /model（调用参数）/i.test(header));
    const modelNameIndex = table.headers.findIndex((header) => /模型名称/.test(header));
    if (modelIdIndex < 0 || modelNameIndex < 0) continue;
    for (const row of table.rows) {
      const modelIds = tencentModelIdsInCell(catalog, row[modelIdIndex]);
      const name = row[modelNameIndex]?.trim();
      if (name) {
        for (const modelId of modelIds) {
          if (!catalogRows.has(modelId)) catalogRows.set(modelId, { name, tableIndex });
        }
      }
    }
  }
  if (catalogRows.size === 0) throw new Error('腾讯 TokenHub 当前模型目录没有解析到可用 Model ID');
  const languageTables = documentTables(languageApi);
  const protocolMatrix = languageTables.find(({ headers }) => headers.some((header) => /model 参数值/.test(header))
    && headers.some((header) => /OpenAI Chat Completions/.test(header))
    && headers.some((header) => /Anthropic/.test(header)));
  const protocolPaths = languageTables.find(({ headers }) => headers.some((header) => /^协议$/.test(header))
    && headers.some((header) => /^路径$/.test(header)));
  if (!protocolMatrix || !protocolPaths) throw new Error('腾讯 TokenHub 语言协议支持矩阵或协议路径表缺失');
  const languageModelColumn = protocolMatrix.headers.findIndex((header) => /model 参数值/.test(header));
  const protocolColumns = [
    { header: 'OpenAI Chat Completions', protocol: 'chat-completions', pathLabel: 'OpenAI Chat Completions' },
    { header: 'OpenAI Responses', protocol: 'responses', pathLabel: 'OpenAI Responses' },
    { header: 'Anthropic', protocol: 'messages', pathLabel: 'Anthropic Messages' },
  ].map((entry) => ({ ...entry, column: protocolMatrix.headers.findIndex((header) => header === entry.header) }))
    .filter((entry) => entry.column >= 0);
  const pathColumn = protocolPaths.headers.findIndex((header) => /^路径$/.test(header));
  const protocolPathByLabel = new Map(protocolPaths.rows.map((row) => [row[0]?.trim() ?? '', row[pathColumn]?.trim() ?? '']));
  const languageRoutesByModel = new Map<string, RouteFact[]>();
  for (const row of protocolMatrix.rows) {
    const providerModelIds = tencentModelIdsInCell(languageApi, row[languageModelColumn]);
    for (const providerModelId of providerModelIds) {
      if (!catalogRows.has(providerModelId)) continue;
      for (const entry of protocolColumns) {
        if (!/✓|✔|✅/.test(row[entry.column] ?? '')) continue;
        const routePath = protocolPathByLabel.get(entry.pathLabel);
        if (!routePath) continue;
        const locator = `#protocol-matrix/${providerModelId}/${entry.pathLabel}`;
        const assertion = `官方语言协议矩阵为 ${providerModelId} 标记支持 ${entry.pathLabel}；协议路径表列出 ${routePath}。`;
        languageRoutesByModel.set(providerModelId, [...(languageRoutesByModel.get(providerModelId) ?? []), {
          id: observed(`${entry.protocol}/${providerModelId}`, languageApi.source.id, locator, assertion),
          endpoint_ref: observed('tokenhub-api', apiUsage.source.id, '#endpoint/https://tokenhub.tencentmaas.com', 'Route 关联官方 API 使用说明中广州 Endpoint。'),
          protocol: observed(entry.protocol, languageApi.source.id, locator, assertion),
          method: observed('POST', languageApi.source.id, locator, '官方语言协议端点使用 POST 请求。'),
          path_template: observed(routePath, languageApi.source.id, locator, assertion),
          operation_kind: observed('text_generation', languageApi.source.id, locator, '语言协议矩阵属于模型推理接口。'),
          provider_model_ids: observed([providerModelId], languageApi.source.id, locator, '协议矩阵精确列出该模型调用参数。'),
        }]);
      }
    }
  }
  const webSearchTables = documentTables(webSearch);
  const webSearchMatrix = webSearchTables.find(({ headers }) => headers.some((header) => /model 参数值/.test(header))
    && headers.some((header) => /^API 协议$/.test(header)) && headers.some((header) => /^端点$/.test(header)));
  const webSearchParamTables = webSearchTables.filter(({ headers }) => headers.some((header) => /^参数$/.test(header))
    && headers.some((header) => /^必选$/.test(header)) && headers.some((header) => /^说明$/.test(header)));
  if (!webSearchMatrix || webSearchParamTables.length < 2) throw new Error('腾讯 TokenHub 联网搜索模型矩阵或请求参数表缺失');
  const webModelColumn = webSearchMatrix.headers.findIndex((header) => /model 参数值/.test(header));
  const webProtocolColumn = webSearchMatrix.headers.findIndex((header) => /^API 协议$/.test(header));
  const webEndpointColumn = webSearchMatrix.headers.findIndex((header) => /^端点$/.test(header));
  const parameterTables = webSearchParamTables.map((table) => new Map(table.rows.map((row) => [row[0]?.trim() ?? '', row])));
  const chatSearchParams = [
    { name: 'enable', type: 'boolean' as const, required: true, default: true,  route_mappings: ['$.enable'] },
    { name: 'search_source', type: 'string' as const, required: false, default: 'standard', enum: ['lite', 'standard'],  route_mappings: ['$.search_source'] },
    { name: 'user_location', type: 'object' as const, required: false,  route_mappings: ['$.user_location'] },
  ];
  const responsesSearchParams = [
    { name: 'tools[].type', type: 'string' as const, required: true, enum: ['web_search'],  route_mappings: ['$.tools[].type'] },
    { name: 'tools[].search_source', type: 'string' as const, required: false, default: 'standard', enum: ['lite', 'standard'],  route_mappings: ['$.tools[].search_source'] },
    { name: 'tools[].search_context_size', type: 'string' as const, required: false, default: 'medium', enum: ['low', 'medium', 'high'],  route_mappings: ['$.tools[].search_context_size'] },
    { name: 'tools[].user_location', type: 'object' as const, required: false,  route_mappings: ['$.tools[].user_location'] },
  ];
  const webSearchServiceOperations = new Map<string, OperationFact>();
  const webSearchModelIdsByProtocol = new Map<string, Set<string>>();
  for (const row of webSearchMatrix.rows) {
    const providerModelId = row[webModelColumn]?.trim();
    if (!providerModelId || !catalogRows.has(providerModelId)) continue;
    const protocolText = row[webProtocolColumn] ?? '';
    const endpointText = row[webEndpointColumn] ?? '';
    const operationEntries = [
      { matches: /Chat API/.test(protocolText) && endpointText.includes('/v1/chat/completions'), protocol: 'chat-completions', path: '/v1/chat/completions', id: 'web-search-chat', inputName: 'messages', parameters: chatSearchParams, parameterTable: parameterTables.find((table) => table.has('enable')), outputFields: ['search_results[].index', 'search_results[].url', 'search_results[].name', 'search_results[].snippet', 'search_results[].site'] },
      { matches: /Responses API/.test(protocolText) && endpointText.includes('/v1/responses'), protocol: 'responses', path: '/v1/responses', id: 'web-search-responses', inputName: 'input', parameters: responsesSearchParams, parameterTable: parameterTables.find((table) => table.has('search_context_size')), outputFields: ['output[].type', 'output[].action.query', 'output[].content[].annotations[].url', 'output[].content[].annotations[].title'] },
    ].filter((entry) => entry.matches && entry.parameterTable);
    for (const entry of operationEntries) {
      const supportedModelIds = webSearchModelIdsByProtocol.get(entry.protocol) ?? new Set<string>();
      supportedModelIds.add(providerModelId);
      webSearchModelIdsByProtocol.set(entry.protocol, supportedModelIds);
      const locator = `#search-matrix/${providerModelId}/${entry.protocol}`;
      const assertion = `官方联网搜索支持矩阵为 ${providerModelId} 列出 ${entry.protocol}，并明确端点 ${entry.path}。`;
      const route: RouteFact = {
        id: observed(`${entry.id}/${providerModelId}`, webSearch.source.id, locator, assertion),
        endpoint_ref: observed('tokenhub-api', apiUsage.source.id, '#endpoint/https://tokenhub.tencentmaas.com', 'Route 关联官方 API 使用说明中广州 Endpoint。'),
        protocol: observed(entry.protocol, webSearch.source.id, locator, assertion),
        method: observed('POST', webSearch.source.id, locator, '官方搜索端点使用 POST 请求。'),
        path_template: observed(entry.path, webSearch.source.id, locator, assertion),
        operation_kind: observed('web_search', webSearch.source.id, locator, '官方文档将该模型请求中的联网搜索作为内置工具。'),
        provider_model_ids: observed([providerModelId], webSearch.source.id, locator, '官方支持矩阵精确列出该模型调用参数。'),
      };
      if (!webSearchServiceOperations.has(entry.protocol)) {
        webSearchServiceOperations.set(entry.protocol, {
          id: observed(entry.id, webSearch.source.id, locator, '官方联网搜索文档列出该 Provider 能力支持的协议操作。'),
          kind: observed('web_search', webSearch.source.id, locator, '官方文档将联网搜索定义为 Provider 提供的内置工具能力。'),
          routes: [{
            id: observed(entry.id, webSearch.source.id, locator, assertion),
            endpoint_ref: route.endpoint_ref,
            protocol: route.protocol,
            method: route.method,
            path_template: route.path_template,
            operation_kind: route.operation_kind,
          }],
          input: observed([{ name: entry.inputName, kind: 'structured', required: true }], webSearch.source.id, `#${entry.protocol}/request`, `官方 ${entry.protocol} 请求使用必填 ${entry.inputName} 字段承载搜索请求输入。`),
          output: observed([{ kind: 'structured', fields: entry.outputFields }], webSearch.source.id, `#${entry.protocol}/response`, '主要搜索调用结果与引用字段按官方响应示例和字段表登记。'),
          parameters: observed(entry.parameters, webSearch.source.id, `#${entry.protocol}/parameters`, '请求参数按官方协议参数表逐字段映射。'),
        });
      }
    }
  }
  const webSearchCapabilityOperations = [...webSearchServiceOperations.entries()].map(([protocol, operation]) => {
    const modelIds = [...(webSearchModelIdsByProtocol.get(protocol) ?? [])].sort();
    const protocolParameters = protocol === 'chat-completions' ? chatSearchParams : responsesSearchParams;
    const inputParameter = {
      name: 'model',
      type: 'string' as const,
      required: true,
      enum: modelIds,
      route_mappings: ['$.model'],
    };
    return {
      ...operation,
      parameters: observed([inputParameter, ...protocolParameters], webSearch.source.id, `#${protocol}/parameters`, '模型 ID 来自官方联网搜索支持矩阵；联网搜索参数按对应协议参数表映射。'),
    };
  });
  const priceIdColumn = priceTable.headers.findIndex((header) => /模型名称/.test(header));
  const metricColumn = priceTable.headers.findIndex((header) => /计费项/.test(header));
  const amountColumn = priceTable.headers.findIndex((header) => /价格（元\/百万 tokens）/.test(header));
  const endpointTable = documentTables(apiUsage).find(({ headers }) => headers.some((header) => /地域/.test(header)) && headers.some((header) => /接口地址/.test(header)));
  const regionColumn = endpointTable?.headers.findIndex((header) => /地域/.test(header)) ?? -1;
  const endpointColumn = endpointTable?.headers.findIndex((header) => /接口地址/.test(header)) ?? -1;
  const vectorDocumentText = htmlText(tencentArticleBody(vectorApi.body));
  const routeUrl = vectorDocumentText.match(/https:\/\/tokenhub(?:-intl)?\.tencentmaas\.com\/v1\/embeddings/i)?.[0];
  if (!endpointTable || !routeUrl) throw new Error('腾讯 TokenHub 向量 API 的地域 Endpoint 表或完整 Embeddings URL 缺失');
  const routeEndpoint = new URL(routeUrl);
  const endpoint = endpointTable.rows.find((row) => {
    try { return new URL(row[endpointColumn] ?? '').origin === routeEndpoint.origin; } catch { return false; }
  });
  if (!endpoint) throw new Error('腾讯 TokenHub 向量 API 主机无法与官方地域 Endpoint 表精确关联');
  const apiRegion = endpoint[regionColumn]?.trim();
  if (!apiRegion) throw new Error('腾讯 TokenHub Endpoint 缺少官方地域标签');
  const prices = new Map<string, { readonly metric: string; readonly amount: string }[]>();
  let currentPriceModelName: string | undefined;
  for (const row of priceTable.rows) {
    const rowModelName = row[priceIdColumn]?.trim();
    if (rowModelName) currentPriceModelName = rowModelName;
    const modelName = rowModelName || currentPriceModelName;
    const billingMetric = row[metricColumn] ?? '';
    if (!modelName || !/文本输入|图片输入|视频输入/.test(billingMetric)) continue;
    const amount = decimal(row[amountColumn] ?? '');
    const metric = /图片/.test(billingMetric) ? 'input_image' : /视频/.test(billingMetric) ? 'input_video' : 'input';
    if (amount !== null) prices.set(modelName, [...(prices.get(modelName) ?? []), { metric, amount }]);
  }
  const vectorOfferings = catalogTable.rows.flatMap((row) => {
    const providerModelId = row[idColumn]?.trim();
    const displayName = row[nameColumn]?.trim();
    const dimension = decimal(row[dimensionColumn] ?? '');
    if (!providerModelId || !displayName || !dimension) return [];
    const modelPrices = prices.get(displayName) ?? [];
    const priceFacts: PriceFact[] = modelPrices.length ? [{
      provider_model_id: observed(providerModelId, catalog.source.id, `#model/${providerModelId}`, '模型 ID 来自官方向量模型目录。'),
      currency: observed('CNY', pricing.source.id, '#vector-pricing', '官方价格表标示人民币。'),
      unit: observed('per_1m_tokens', pricing.source.id, '#vector-pricing', '官方价格表按百万 tokens 报价。'),
      rules: observed<readonly PriceRuleFact[]>([{
        rate_items: modelPrices.map(({ metric, amount }) => ({ metric, unit: 'per_1m_tokens' as const, quantity: 1, amount_decimal: amount })),
        evidence: [{ source_ref: pricing.source.id, locator: `#model/${providerModelId}`, assertion: '按官方价格表中相同模型名称关联该计费项。' }],
      }], pricing.source.id, `#model/${providerModelId}`, '仅关联模型名称与计费项均明确的 Token 价格。'),
    }] : [];
    return [{
      provider_model_id: observed(providerModelId, catalog.source.id, `#model/${providerModelId}`, '模型调用参数来自官方向量模型目录。'),
      display_name: observed(displayName, catalog.source.id, `#model/${providerModelId}`, '模型名称来自官方向量模型目录。'),
      service_id: observed('cn', catalog.source.id, '#vector-models', '来源属于腾讯云 TokenHub 中国市场。'),
      supply_observations: [{ kind: 'listed_current' as const, evidence: [{ source_ref: catalog.source.id, locator: `#model/${providerModelId}`, assertion: '模型当前列于官方向量模型目录。' }] }],
      operations: [{
        id: observed('embeddings', vectorApi.source.id, '#post-v1-embeddings', '官方向量 API 文档说明 Embeddings 接口。'),
        kind: observed('embedding', vectorApi.source.id, '#post-v1-embeddings', '官方接口用于生成向量表示。'),
        routes: [{
          id: observed('openai-embeddings', vectorApi.source.id, '#post-v1-embeddings', '官方文档明确标注 OpenAI Embeddings API 兼容。'),
          endpoint_ref: observed('tokenhub-api', apiUsage.source.id, `#endpoint/${routeEndpoint.origin}`, 'Route 的主机与 API 使用说明中的官方 Endpoint 表按 origin 精确匹配。'),
          protocol: observed('openai_embeddings', vectorApi.source.id, '#post-v1-embeddings', '官方文档明确标注 OpenAI Embeddings API 兼容。'),
          method: observed('POST', vectorApi.source.id, '#post-v1-embeddings', '官方文档列出 POST 请求。'),
          path_template: observed(routeEndpoint.pathname, vectorApi.source.id, '#post-v1-embeddings', '官方完整 Embeddings URL 中的路径。'),
          operation_kind: observed('embedding', vectorApi.source.id, '#post-v1-embeddings', '接口用途为文本或多模态向量生成。'),
          provider_model_ids: observed([providerModelId], catalog.source.id, `#model/${providerModelId}`, '此模型由目录明确列为向量模型。'),
        }],
      }],
      prices: priceFacts,
    }];
  });
  const vectorOfferingsById = new Map(vectorOfferings.map((offering) => [offering.provider_model_id.value, offering]));
  const videoInputImagePrices = new Map(parseVideoInputImagePricing(pricing.body).map((row) => [row.model_name.toLowerCase(), row]));
  const offerings = [...catalogRows].map(([providerModelId, model]) => {
    const vectorOffering = vectorOfferingsById.get(providerModelId);
    if (vectorOffering) return vectorOffering;
    const locator = `#model-catalog/${model.tableIndex}/${providerModelId}`;
    const assertion = '模型调用参数和名称来自腾讯云 TokenHub 官方当前模型目录。';
    const imagePrice = videoInputImagePrices.get(providerModelId.toLowerCase());
    const imagePriceFact: PriceFact[] = imagePrice ? [{
      provider_model_id: observed(providerModelId, catalog.source.id, locator, assertion),
      currency: observed(imagePrice.currency, pricing.source.id, `#video/${providerModelId}/input-image`, '官方价格表将超额输入图片价格列为人民币。'),
      unit: observed('per_image', pricing.source.id, `#video/${providerModelId}/input-image`, '官方价格表按张列出输入图片价格。'),
      rules: observed<readonly PriceRuleFact[]>([{
        conditions: [{ field: 'usage.input_image_index', operator: 'gt', value: imagePrice.free_image_count }],
        rate_items: [{ metric: 'input_image', unit: 'per_image', quantity: 1, amount_decimal: imagePrice.amount_per_image }],
        evidence: [{ source_ref: pricing.source.id, locator: `#video/${providerModelId}/input-image`, assertion: `前 ${imagePrice.free_image_count} 张输入图片免费，从第 ${imagePrice.billed_from_image} 张起每张 ¥${imagePrice.amount_per_image}。` }],
      }], pricing.source.id, `#video/${providerModelId}/input-image`, '按官方免费张数与后续每张价格生成增量计费规则。'),
    }] : [];
    const routes = languageRoutesByModel.get(providerModelId) ?? [];
    const operations = [...(routes.length ? [{
      id: observed('text-generation', languageApi.source.id, `#protocol-matrix/${providerModelId}`, '官方语言协议矩阵列出该模型支持的协议。'),
      kind: observed('text_generation', languageApi.source.id, `#protocol-matrix/${providerModelId}`, '官方协议表属于语言模型调用。'),
      routes,
    }] : [])];
    return {
      provider_model_id: observed(providerModelId, catalog.source.id, locator, assertion),
      display_name: observed(model.name, catalog.source.id, locator, assertion),
      service_id: observed('cn', catalog.source.id, '#model-list', '来源属于腾讯云 TokenHub 中国市场。'),
      supply_observations: [{ kind: 'listed_current' as const, evidence: [{ source_ref: catalog.source.id, locator, assertion: '模型列于腾讯云 TokenHub 当前模型目录。' }] }],
      operations,
      prices: imagePriceFact,
    };
  });
  const sourceRefs = documents.map(({ source }) => source.id);
  const observations = documents.map((document) => {
    const observation = extractDocumentObservation({ source: document.source, body: tencentArticleBody(document.body) });
    return { source_ref: observation.source_id, scope: observation.scope, extraction: observation.extraction, access_scope: observation.access_scope, title: observation.title, tables: observation.tables, structured_records: observation.structured_records, api_mentions: observation.api_mentions, plan_or_price_mentions: observation.plan_or_price_mentions, capability_mentions: observation.capability_mentions, excerpt: observation.excerpt, model_id_mentions: observation.tables.flatMap(({ headers, rows }) => {
      const idIndex = headers.findIndex((header) => /model（调用参数）/i.test(header));
      return idIndex < 0 ? [] : rows.flatMap((row) => tencentModelIdsInCell(document, row[idIndex]));
    }) };
  });
  const retrieved = documents.map(({ metadata }) => metadata.retrieved_at).sort().at(-1);
  if (!retrieved && !observedAt) throw new Error('腾讯 TokenHub IR 缺少观察时间');
  return {
    ir_version: '1.0.0', provider_id: 'tencent-tokenhub', observed_at: observedAt ?? retrieved!, source_refs: sourceRefs,
    coverage: documents.map(({ source }) => source.id === catalog.source.id
      ? { source_ref: source.id, scope: 'model_catalog' as const, market: 'cn' as const, status: 'complete' as const, record_count: offerings.length, record_unit: 'unique current model IDs', note: '官方当前目录所有可解析调用 ID 均映射为 listed_current Offering；这不表示账号已开通或模型调用成功。' }
      : source.id === pricing.source.id
        ? { source_ref: source.id, scope: 'pricing' as const, market: 'cn' as const, status: 'partial' as const, record_count: offerings.reduce((count, offering) => count + offering.prices.length, 0), record_unit: 'mapped PriceFact records', note: '当前仅映射 Kinfra 向量模型价格；其他模型价格和非 Token 价格仍保留来源观察。' }
        : source.id === languageApi.source.id
          ? { source_ref: source.id, scope: 'api' as const, market: 'cn' as const, status: 'partial' as const, record_count: [...languageRoutesByModel.values()].reduce((count, routes) => count + routes.length, 0), record_unit: 'Route records', note: '按官方语言协议支持矩阵映射当前目录型号的 Chat Completions、Responses 与 Anthropic Messages 路由；参数和完整输入输出约束仍待映射。' }
          : source.id === tokenPlan.source.id
            ? { source_ref: source.id, scope: 'plan' as const, market: 'cn' as const, status: 'complete' as const, record_count: tokenPlanFacts.length, record_unit: 'Token Plan tier descriptions', note: '通用与 Hy Token Plan 的适用场景原文已按套餐档位解析；不将订阅权益解释为通用 API 能力。' }
          : source.id === globalTokenPlan.source.id
            ? { source_ref: source.id, scope: 'plan' as const, market: 'global' as const, status: 'complete' as const, record_count: globalTokenPlanFacts.length, record_unit: 'Global Token Plan tiers', note: '官方国际站列出新加坡可用的四档个人 Token Plan；按页面英文原文记录价格、额度和推荐场景。' }
          : source.id === webSearch.source.id
            ? { source_ref: source.id, scope: 'capability' as const, market: 'cn' as const, status: 'partial' as const, record_count: webSearchModelIdsByProtocol.size, record_unit: 'recognized protocol operations with mapped input and output', note: `官方联网搜索支持矩阵映射 ${webSearchModelIdsByProtocol.size} 种协议操作、${new Set([...webSearchModelIdsByProtocol.values()].flatMap((ids) => [...ids])).size} 个模型 ID；输入项与响应字段归入 Provider Service Capability。` }
        : { source_ref: source.id, scope: source.scope ?? 'documentation', market: source.market ?? 'cn', status: source.id === vectorApi.source.id || source.id === apiUsage.source.id ? 'partial' as const : 'not_parsed' as const, note: '未进入领域字段的官方材料保留为文档观察；不得从缺席推断不存在。' }),
    document_observations: observations,
    profile: {
      name: observed('腾讯云 TokenHub', productOverview.source.id, 'head > title', '腾讯云官方产品简介标题将 TokenHub 标识为腾讯云大模型服务平台。'),
      aliases: observed(['大模型服务平台 TokenHub'], productOverview.source.id, 'head > title', '官方标题中的完整产品名称作为可检索别名。'),
      kind: observed('cloud_platform', productOverview.source.id, 'head > meta[name="description"]', '官方简介将 TokenHub 描述为聚合腾讯混元、DeepSeek 等多家模型的一站式 AI 大模型服务平台。'),
      docs: observed({
        overview: productOverview.source.url,
        api: apiGuide.source.url,
        model_list: catalog.source.url,
        pricing: pricing.source.url,
        coding_plan: codingPlan.source.url,
        token_plan: tokenPlan.source.url,
        token_plan_global: globalTokenPlan.source.url,
      }, productOverview.source.id, 'official documentation links', '文档入口取自已登记的腾讯云 TokenHub 官方来源。'),
    },
    services: [{
      id: observed('cn', catalog.source.id, '#model-list', 'TokenHub 来源登记为中国市场。'),
      name: observed('中国市场', catalog.source.id, '#model-list', '该模型目录来源登记为中国市场；Service 名称对应同一市场范围。'),
      endpoints: [{
        id: observed('tokenhub-api', apiUsage.source.id, `#endpoint/${routeEndpoint.origin}`, 'Route 使用 API 使用说明表中与完整向量 URL 完全匹配的 Endpoint。'),
        base_url: observed(routeEndpoint.origin, apiUsage.source.id, `#endpoint/${routeEndpoint.origin}`, '完整向量 URL 的 origin 与官方 Endpoint 表精确匹配。'),
        api_region: observed(apiRegion, apiUsage.source.id, `#endpoint/${routeEndpoint.origin}`, '地域标签来自官方 Endpoint 表。'),
        documentation: observed(apiUsage.source.url, apiUsage.source.id, `#endpoint/${routeEndpoint.origin}`, 'API 接入说明中的地域和 Endpoint 对照表。'),
      }],
      offerings,
      capabilities: webSearchServiceOperations.size ? [{
        id: observed('web-search', webSearch.source.id, '#supported-models', '官方联网搜索支持矩阵登记了 TokenHub Provider 级内置联网搜索能力。'),
        kind: observed('web_search', webSearch.source.id, '#supported-models', '官方文档将联网搜索定义为 Provider 提供的能力。'),
        operations: webSearchCapabilityOperations,
        links: observed({ documentation: webSearch.source.url }, webSearch.source.id, '#supported-models', '联网搜索能力的官方说明。'),
      } satisfies CapabilityFact] : [],
      plans: tokenPlanFacts,
    }, {
      id: observed('global', globalTokenPlan.source.id, '#token-plan', 'Token Plan Overview 是腾讯云国际站的 Global 套餐来源。'),
      name: observed('国际市场', globalTokenPlan.source.id, '#token-plan', '套餐来源对应 TokenHub 国际站 Service。'),
      endpoints: [], offerings: [], capabilities: [], plans: globalTokenPlanFacts,
    }],
    review_items: [{
      id: 'tencent-tokenhub-domain-migration-incomplete',
      kind: 'incomplete_coverage',
      subject_ref: 'service/cn',
      message: `已将目录中的 ${offerings.length} 个调用 ID 映射为 listed_current Offering，并按官方矩阵生成 ${[...languageRoutesByModel.values()].reduce((count, routes) => count + routes.length, 0)} 条语言模型 Route，以及 ${webSearchCapabilityOperations.length} 条带输入项和响应字段的 Provider 联网搜索协议操作；语言、图像、视频、语音、3D、联网搜索和 Plan 仍有未完成映射，不能据此替换完整 Provider 记录。`,
      evidence: [
        { source_ref: catalog.source.id, locator: '#model-categories' },
        { source_ref: pricing.source.id, locator: '#pricing-categories' },
        { source_ref: vectorApi.source.id, locator: '#embedding-api' },
      ],
    }],
  };
}

type Candidate = CandidateEnvelope<TencentCandidateFacts>;
const MODEL_TOKEN = /\b(?:hunyuan|hy|deepseek|glm|kimi|MiniMax|mimo|qwen|kling|vidu|pixverse|wand|hy-image|hy-video|youtu|kinfra)[A-Za-z0-9_.:/-]*/gi;

function normalizedLines(body: string): string[] {
  return body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '\n').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '\n')
    .replace(/<br\s*\/?>|<\/(?:p|div|li|h[1-6]|section|article|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .split(/\r?\n/).map((line) => line.replace(/[\t ]+/g, ' ').trim()).filter(Boolean);
}

function evidence(document: CapturedDocument, pattern: RegExp, maximum = 500): SourceEvidence {
  const matcher = new RegExp(pattern.source, pattern.flags.replace('g', ''));
  return { source_id: document.source.id, rows: normalizedLines(document.body).filter((line) => matcher.test(line)).slice(0, maximum) };
}

function htmlText(value: string): string {
  const slateText = [...value.matchAll(/data-slate-string="true">([\s\S]*?)<\/span>/gi)].map((match) => match[1] ?? '');
  const text = slateText.length > 0 ? slateText.join('') : value;
  return text.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_match, value: string) => String.fromCodePoint(Number(value)))
    .replace(/&#x([\da-f]+);/gi, (_match, value: string) => String.fromCodePoint(Number.parseInt(value, 16)))
    .replace(/[\t\r\n ]+/g, ' ').trim();
}

/** 从 TokenHub 视频价格表行中提取“首批免费、超出后按张收费”的输入图片费率。 */
export function parseVideoInputImagePricing(body: string): VideoInputImagePricingRow[] {
  const rows: VideoInputImagePricingRow[] = [];
  const ordinal = (value: string): number => {
    const numeric = Number(value);
    if (Number.isSafeInteger(numeric)) return numeric;
    const smallNumbers: Readonly<Record<string, number>> = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
    if (value === '十') return 10;
    if (value.startsWith('十')) return 10 + (smallNumbers[value.slice(1)] ?? Number.NaN);
    if (value.endsWith('十')) return (smallNumbers[value.slice(0, -1)] ?? Number.NaN) * 10;
    const tenIndex = value.indexOf('十');
    if (tenIndex >= 0) return (smallNumbers[value.slice(0, tenIndex)] ?? 1) * 10 + (smallNumbers[value.slice(tenIndex + 1)] ?? 0);
    return smallNumbers[value] ?? Number.NaN;
  };
  for (const tableRow of body.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...(tableRow[1] ?? '').matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)]
      .map((cell) => htmlText(cell[1] ?? ''));
    if (cells.length < 6) continue;
    const modelName = cells[0] ?? '';
    const usage = cells[4] ?? '';
    const displayedAmount = cells[5] ?? '';
    if (!modelName || !/视频/i.test(cells[1] ?? '') || !/输入图片/.test(usage)) continue;
    const free = usage.match(/输入图片前\s*(\d+)\s*张免费/i);
    const billed = usage.match(/第\s*(\d+|[一二三四五六七八九十]+)\s*张起\s*([\d,]+)\s*tokens\s*\/\s*张/i);
    const amount = displayedAmount.match(/输入图片前\s*\d+\s*张免费第\s*(?:\d+|[一二三四五六七八九十]+)\s*张起\s*([\d.]+)\s*元\s*\/\s*张/i);
    const unitPrice = cells[3]?.match(/([\d.]+)\s*元\s*\/\s*百万\s*tokens/i);
    if (!free || !billed || !amount || !unitPrice) continue;
    const freeImageCount = Number(free[1]);
    const billedFromImage = ordinal(billed[1]!);
    if (!Number.isSafeInteger(freeImageCount) || !Number.isSafeInteger(billedFromImage) || billedFromImage !== freeImageCount + 1) continue;
    rows.push({
      model_name: modelName,
      resolution: cells[2] ?? '',
      free_image_count: freeImageCount,
      billed_from_image: billedFromImage,
      tokens_per_image: billed[2]!.replaceAll(',', ''),
      amount_per_image: amount[1]!,
      currency: 'CNY',
    });
  }
  return rows;
}

/** Capture the visible plan scenario copy from the two official Token Plan tables. */
export function parseTencentTokenPlanDescriptions(document: CapturedDocument): PlanFact[] {
  const body = tencentArticleBody(document.body);
  const planTables = [...body.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)].flatMap((tableMatch) => {
    const rows = [...(tableMatch[1] ?? '').matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((rowMatch) =>
      [...(rowMatch[1] ?? '').matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cellMatch) => htmlText(cellMatch[1] ?? '')));
    const headers = rows[0] ?? [];
    if (!(headers.some((header) => /套餐/.test(header))
      && headers.some((header) => /价格/.test(header))
      && headers.some((header) => /适用场景/.test(header)))) return [];
    const priorText = htmlText(body.slice(0, tableMatch.index));
    const seriesMentions = [...priorText.matchAll(/(通用|Hy)\s*Token\s*Plan/gi)];
    const seriesLabel = seriesMentions.at(-1)?.[1];
    const series = /^Hy$/i.test(seriesLabel ?? '') ? 'hy' : /通用/i.test(seriesLabel ?? '') ? 'general' : undefined;
    if (!series) throw new Error(`无法从官方页面章节标题识别 Token Plan 系列：${headers.join(' / ')}`);
    return [{ headers, rows: rows.slice(1), series }];
  });
  const facts: PlanFact[] = [];
  for (const [tableIndex, table] of planTables.entries()) {
    const tierIndex = table.headers.findIndex((header) => /套餐/.test(header));
    const priceIndex = table.headers.findIndex((header) => /价格/.test(header));
    const allowanceIndex = table.headers.findIndex((header) => /用量限制/.test(header));
    const descriptionIndex = table.headers.findIndex((header) => /适用场景/.test(header));
    for (const row of table.rows) {
      const label = row[tierIndex] ?? '';
      const normalizedLabel = label.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      const seriesMatch = /^(通用|Hy)\s*Token\s*Plan\s*(.+)$/i.exec(normalizedLabel);
      const tier = seriesMatch?.[2]?.trim() || normalizedLabel;
      const description = row[descriptionIndex]?.trim();
      if (!tier) continue;
      const series = seriesMatch ? (/^Hy$/i.test(seriesMatch[1] ?? '') ? 'hy' : 'general') : table.series;
      const normalizedTier = tier.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!normalizedTier) continue;
      const locator = `#token-plan/pricing-table:${tableIndex + 1}/row:${label}`;
      const amount = /([\d,]+(?:\.\d+)?)\s*元\s*\/\s*月/.exec(row[priceIndex] ?? '')?.[1]?.replaceAll(',', '');
      const credits = /([\d,]+)\s*积分/.exec(row[allowanceIndex] ?? '')?.[1]?.replaceAll(',', '');
      facts.push({
        id: observed(`token-plan-${series}-${normalizedTier}`, document.source.id, locator, 'Plan ID is derived from the official Token Plan series and tier labels.'),
        name: observed(seriesMatch ? `${seriesMatch[1]} Token Plan ${tier}` : label, document.source.id, locator, 'Plan name is copied from the official Token Plan table.'),
        billing_options: observed(amount ? [{ billing_period: 'month' as const, subscription_fee: { currency: 'CNY', amount } }] : [], document.source.id, locator, 'Monthly price is copied from the official Token Plan table when present.'),
        ...(description ? { description: observed(description, document.source.id, locator, '套餐描述逐字采集自官方适用场景单元格，保留中文原文。') } : {}),
        ...(credits ? { credits: observed(Number(credits), document.source.id, locator, 'Monthly credit allowance is copied from the official Token Plan table.') } : {}),
      });
    }
  }
  const uniqueFacts = new Map<string, PlanFact>();
  for (const fact of facts) {
    const id = fact.id.value;
    const previous = uniqueFacts.get(id);
    if (!previous) {
      uniqueFacts.set(id, fact);
      continue;
    }
    const samePlan = previous.name?.value === fact.name?.value
      && JSON.stringify(previous.billing_options.value) === JSON.stringify(fact.billing_options.value)
      && previous.description?.value === fact.description?.value
      && previous.credits?.value === fact.credits?.value;
    if (!samePlan) throw new Error(`腾讯 Token Plan 页面为 ${id} 提供了冲突的重复套餐行`);
  }
  return [...uniqueFacts.values()];
}

/** Capture each named plan column and its official copy from Tencent Cloud's global plan page. */
export function parseTencentGlobalTokenPlanDescriptions(document: CapturedDocument): PlanFact[] {
  const tables = [...tencentArticleBody(document.body).matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)].flatMap((tableMatch) => {
    const rows = [...(tableMatch[1] ?? '').matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((rowMatch) =>
      [...(rowMatch[1] ?? '').matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cellMatch) => htmlText(cellMatch[1] ?? '')));
    const headers = rows[0] ?? [];
    return headers.some((header) => /^Plan$/i.test(header))
      && headers.some((header) => /\bPlan$/i.test(header))
      && rows.some((row) => /^Recommended$/i.test(row[0] ?? ''))
      ? [{ headers, rows: rows.slice(1) }]
      : [];
  });
  return tables.flatMap((table, tableIndex) => {
    const recommendation = table.rows.find((row) => /^Recommended$/i.test(row[0] ?? ''));
    const price = table.rows.find((row) => /^Price$/i.test(row[0] ?? ''));
    const usage = table.rows.find((row) => /^Usage Limit$/i.test(row[0] ?? ''));
    if (!recommendation || !price || !usage) return [];
    return table.headers.flatMap((header, column) => {
      const tier = /^(.*?)\s+Plan$/i.exec(header)?.[1]?.trim();
      if (!tier || column === 0) return [];
      const description = recommendation[column]?.trim();
      const amount = /USD\s*([\d.]+)\s*\/\s*month/i.exec(price[column] ?? '')?.[1];
      const credits = /([\d,]+)\s*credits/i.exec(usage[column] ?? '')?.[1]?.replaceAll(',', '');
      const slug = tier.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!slug) return [];
      const locator = `#plan-specifications/table:${tableIndex + 1}/column:${tier}`;
      return [{
        id: observed(`token-plan-global-${slug}`, document.source.id, locator, 'Plan ID is derived from the official global Token Plan column label.'),
        name: observed(`Token Plan ${tier}`, document.source.id, locator, 'Plan name is taken from the official global Token Plan table.'),
        billing_options: observed(amount ? [{ billing_period: 'month' as const, subscription_fee: { currency: 'USD', amount } }] : [], document.source.id, locator, 'Monthly USD price is copied from the official global Token Plan table when present.'),
        ...(description ? { description: observed(description, document.source.id, locator, 'Description is copied verbatim from the official English Recommended cell.') } : {}),
        ...(credits ? { credits: observed(Number(credits), document.source.id, locator, 'Monthly credit allowance is copied from the official global Token Plan table.') } : {}),
      }];
    });
  });
}

export function tencentCandidateFacts(documents: readonly CapturedDocument[]): TencentCandidateFacts {
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const get = (suffix: string) => {
    const result = byId.get(`tencent-${suffix}`);
    if (!result) throw new Error(`腾讯 TokenHub 缺少必需来源：${suffix}`);
    return result;
  };
  const catalogDoc = get('model-list');
  const pricingDoc = get('model-pricing');
  const codingDoc = get('coding-plan');
  const tokenDoc = get('token-plan');
  const statusDoc = get('product-dynamics');
  const apiUsageDoc = get('api-usage');
  const languageApiDoc = get('language-api');
  const vectorApiDoc = get('vector-api');
  const webSearchDoc = get('web-search');
  const apiGuideDoc = get('api-guide-index');
  const imageApiDoc = get('image-api-index');
  const videoApiDoc = get('video-api-index');
  const api3dDoc = get('3d-api-index');
  const speechApiDoc = get('speech-api-index');
  const multimodalApiDoc = get('multimodal-api-index');
  const imageOverviewDoc = get('image-api-overview');
  const hyImageApiDoc = get('hy-image-api');
  const videoOverviewDoc = get('video-api-overview');
  const worldOverviewDoc = get('world-api-overview');
  const speechOverviewDoc = get('speech-api-overview');
  const imageUnderstandingDoc = get('image-understanding-api');
  const videoUnderstandingDoc = get('video-understanding-api');
  const productOverviewDoc = get('product-overview');
  const catalog = evidence(catalogDoc, MODEL_TOKEN);
  const pricing = evidence(pricingDoc, MODEL_TOKEN);
  if (catalog.rows.length < 10 || pricing.rows.length < 10) throw new Error('腾讯 TokenHub 模型或价格证据行数异常偏少');
  const videoInputImagePricingRows = parseVideoInputImagePricing(pricingDoc.body);
  if (pricingDoc.body.includes('输入图片') && videoInputImagePricingRows.length === 0) {
    throw new Error('腾讯 TokenHub 价格页包含输入图片计费，但采集器没有解析出阶梯价');
  }
  const modelIds = [...new Set([...catalog.rows, ...pricing.rows].flatMap((line) => line.match(MODEL_TOKEN) ?? []))];
  return {
    catalog_evidence: catalog,
    pricing_evidence: pricing,
    video_input_image_pricing_rows: videoInputImagePricingRows,
    coding_plan_evidence: evidence(codingDoc, /套餐|模型|价格|额度|Base URL|禁止以 API|严禁 API/),
    token_plan_evidence: evidence(tokenDoc, /套餐|模型|价格|额度|积分|Credits|Base URL/),
    supply_status_evidence: evidence(statusDoc, /新增支持模型|下线|模型|地域/),
    api_usage_evidence: evidence(apiUsageDoc, /接口域名|广州|新加坡|全球|Authorization|Bearer|GET \/v1\/models|POST \/v1|Base URL|Anthropic|Responses/),
    language_api_evidence: evidence(languageApiDoc, /模型支持的协议概览|OpenAI Chat|Responses|Anthropic|\| ✅|\| ❌|协议与调用方式|\/v1\/chat\/completions|\/v1\/responses|\/v1\/messages/),
    vector_api_evidence: evidence(vectorApiDoc, /支持的模型|kinfra-|POST https|\/v1\/embeddings|输入文本|输出维度|价格说明/),
    web_search_evidence: evidence(webSearchDoc, /联网搜索|Responses API|Chat API|web_search_options|search_results|模型与协议支持矩阵|\/v1\/responses|\/v1\/chat\/completions/),
    api_guide_evidence: evidence(apiGuideDoc, /API 使用说明|语言模型|图像生成模型|视频生成模型|3D 生成模型|语音模型|多模态理解|向量模型|联网搜索/),
    image_api_evidence: evidence(imageApiDoc, /图像生成模型调用概览|生图调用指南/),
    video_api_evidence: evidence(videoApiDoc, /视频生成模型调用概览|生视频调用指南/),
    api_3d_evidence: evidence(api3dDoc, /混元调用指南|Tripo 调用指南|世界模型调用概览|3D/),
    speech_api_evidence: evidence(speechApiDoc, /语音模型调用概览|语音识别|语音合成|AI 配音|音乐生成/),
    multimodal_api_evidence: evidence(multimodalApiDoc, /图片理解|视频理解/),
    image_api_overview_evidence: evidence(imageOverviewDoc, /模型列表|model 参数值|文生图|参考生图|接口类型|model-id/),
    hy_image_api_evidence: evidence(hyImageApiDoc, /模型列表|model 参数值|接口描述|POST https|image_url|同步|输入上限|尺寸约束/),
    video_api_overview_evidence: evidence(videoOverviewDoc, /模型列表|model 参数值|文生|图生|接口类型|端点/),
    world_api_overview_evidence: evidence(worldOverviewDoc, /模型列表|model 参数值|接口类型|提交端点|hy-world/),
    speech_api_overview_evidence: evidence(speechOverviewDoc, /能力分类|模型名称|model 参数值|接口类型|端点|同步|异步/),
    image_understanding_evidence: evidence(imageUnderstandingDoc, /支持的 API|支持的模型|Chat Completions|Responses|image_url|输入|上限/),
    video_understanding_evidence: evidence(videoUnderstandingDoc, /支持的 API|支持的模型|Chat Completions|video_url|输入|上限/),
    product_overview_evidence: evidence(productOverviewDoc, /TokenHub|模型|API|套餐|图像|视频|3D/),
    models_dev_entries: ['tencent-tokenhub', 'tencent-coding-plan', 'tencent-token-plan'],
    model_ids: modelIds,
    account_api_list: 'not_called',
  };
}

export function renderTencentReview(_candidate: Candidate): string {
  return [
    '## 适配器核对边界',
    '',
    '本节不重复展开当前目录、价格原文、模型清单或完整 API 路径。字段级新增、更新与缺席待核实项仅见上方变更摘要；来源快照与完整机器事实保存在候选 JSON。',
    '',
    '候选仅表示官方来源观察，不代表字段已核验、供应已确认或数据已发布。目录缺席不单独构成退役结论。',
    '',
  ].join('\n');
}

function renderTencentIRReview(candidate: CandidateEnvelope<ProviderCollectionIR>): string {
  const service = candidate.current.services.find(({ id }) => id.value === 'cn');
  const priced = service?.offerings.filter(({ prices }) => prices.length > 0).length ?? 0;
  return [
    '## IR 覆盖摘要',
    '',
    `本候选包含 ${service?.offerings.length ?? 0} 个精确匹配的向量模型，其中 ${priced} 个有可结构化价格。模型目录、维度、向量 Route 与价格均保留字段级来源。`,
    '',
    '语言、图像、视频、语音、3D、联网搜索及订阅 Plan 目前仅保留来源观察，尚未完成领域字段映射；此候选不用于更新正式 Provider 数据。',
    '',
  ].join('\n');
}

export async function collectTencent(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, TENCENT_INGEST_SOURCES);
  const current = tencentCandidateFacts(documents);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'tencent-tokenhub',
    documents,
    current: tencentCollectionIR(documents),
    modelCount: current.model_ids.length,
    renderReview: renderTencentIRReview,
  });
}

export const tencentParser = { evidence, normalizedLines };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectTencent({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
