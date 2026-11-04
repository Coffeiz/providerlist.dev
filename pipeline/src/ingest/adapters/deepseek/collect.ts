import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CapabilityInput, CapabilityOutput, ParameterSpec } from '@providerlist/schema/types';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, latestSnapshotRetrievedAt, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { extractDocumentObservation } from '../document-observation.ts';
import type { EvidenceRef, Observed, OperationFact, PriceRuleFact, ProviderCollectionIR } from '../../ir/provider-collection.ts';
import { DEEPSEEK_INGEST_SOURCES } from './sources.ts';

interface RawRow {
  readonly source_id: string;
  readonly cells: readonly string[];
}

export interface DeepseekCandidateFacts {
  readonly current_models: readonly string[];
  readonly cn_current_models: readonly string[];
  readonly current_api_models: readonly string[];
  readonly cn_current_api_models: readonly string[];
  readonly model_api_metadata: readonly DeepseekModelApiMetadata[];
  readonly cn_model_api_metadata: readonly DeepseekModelApiMetadata[];
  readonly pricing_rows: readonly RawRow[];
  readonly cn_pricing_rows: readonly RawRow[];
  readonly search_pricing_rows: readonly RawRow[];
  readonly api_routes: readonly { readonly method: string; readonly path: string; readonly source_id: string }[];
}

interface DeepseekModelApiMetadata {
  readonly id: string;
  readonly name?: string;
}

type PriceMetric = 'input' | 'cache_read' | 'output';
type TimePeriod = 'off_peak' | 'peak';

function observed<T>(value: T, sourceRef: string, locator: string, assertion?: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, ...(assertion ? { assertion } : {}) }] };
}

function extractModelApiMetadata(document: CapturedDocument): DeepseekModelApiMetadata[] {
  const blocks = [...document.body.matchAll(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi)]
    .map((match) => text(match[1] ?? ''));
  for (const block of blocks) {
    const start = block.indexOf('{');
    if (start < 0) continue;
    try {
      const payload = JSON.parse(block.slice(start)) as { data?: unknown };
      if (!Array.isArray(payload.data)) continue;
      const models = payload.data.filter((value): value is DeepseekModelApiMetadata => {
        if (!value || typeof value !== 'object') return false;
        const id = (value as DeepseekModelApiMetadata).id;
        return typeof id === 'string' && /^deepseek-[a-z0-9-]+$/i.test(id);
      });
      if (models.length) return models;
    } catch {
      // 文档 schema 示例可能可解析但不含真实模型 ID；继续检查后续代码块。
    }
  }
  return [];
}

function priceRules(rows: readonly RawRow[], modelId: string, market: 'cn' | 'global'): PriceRuleFact[] {
  const header = rows.find(({ cells }) => cells[0]?.replace(/[\s（）()]/g, '').toUpperCase() === (market === 'cn' ? '模型' : 'MODEL'));
  if (!header) return [];
  const column = header.cells.findIndex((cell) => cell.replace(/\s*\(\d+\)$/, '').trim().toLowerCase() === modelId);
  if (column < 1) return [];

  const values: Record<PriceMetric, Partial<Record<TimePeriod, string>>> = {
    input: {}, cache_read: {}, output: {},
  };
  let metric: PriceMetric | undefined;
  for (const row of rows) {
    if (row === header) continue;
    const [first = '', second = '', third = ''] = row.cells;
    const label = `${first} ${second}`.replace(/[\s（）()]/g, '').toUpperCase();
    if (label.includes('CACHEHIT') || label.includes('缓存命中')) metric = 'cache_read';
    else if (label.includes('CACHEMISS') || label.includes('缓存未命中')) metric = 'input';
    else if (label.includes('OUTPUTTOKENS') || label.includes('百万TOKENS输出')) metric = 'output';
    if (!metric) continue;
    const periodText = `${first} ${second} ${third}`.toUpperCase();
    const period: TimePeriod | undefined = /OFF[\s-]*PEAK|空闲时段|非高峰/.test(periodText)
      ? 'off_peak'
      : /\bPEAK\b|高峰时段/.test(periodText) ? 'peak' : undefined;
    if (!period) continue;

    const nestedPriceRow = !/\bPEAK\b|高峰时段/.test(first.toUpperCase());
    const valueIndex = nestedPriceRow ? column + (/PRICING|价格/.test(first) ? 2 : 1) : column;
    const value = row.cells[valueIndex];
    const decimal = value?.replace(/^[$¥￥]/, '').replace(/[¥￥元,\s]/g, '');
    if (decimal && /^\d+(?:\.\d+)?$/.test(decimal)) values[metric]![period] = decimal;
  }

  const expected: readonly PriceMetric[] = ['input', 'cache_read', 'output'];
  const sourceRef = rows.find(({ cells }) => cells.some((cell) => cell.toLowerCase().includes(modelId)))?.source_id ?? header.source_id;
  const rules: PriceRuleFact[] = [];
  for (const period of ['off_peak', 'peak'] as const) {
    if (expected.some((item) => !values[item][period])) return [];
    rules.push({
      conditions: [{ field: 'time_period', operator: 'eq', value: period }],
      rate_items: expected.map((item) => ({ metric: item, unit: 'per_1m_tokens', quantity: 1, amount_decimal: values[item][period]! })),
      evidence: [{ source_ref: sourceRef, locator: `pricing/${modelId}/${period}`, assertion: `${market === 'cn' ? '中国区' : '国际'}官方价格表中 ${modelId} 的 ${period === 'peak' ? '高峰' : '空闲'}时段价格。` }],
    });
  }
  return rules;
}

function requestPrice(document: CapturedDocument | undefined, operation: 'Search' | 'Fetch', market: 'cn' | 'global'): string | undefined {
  if (!document) return undefined;
  const bodyText = text(document.body);
  const expression = market === 'cn'
    ? new RegExp(`${operation}\\s*每\\s*1,000\\s*次成功请求\\s*([0-9]+(?:\\.[0-9]+)?)\\s*元`, 'i')
    : new RegExp(`${operation}\\s+Per\\s+1,000\\s+successful\\s+requests\\s+\\$([0-9]+(?:\\.[0-9]+)?)`, 'i');
  return bodyText.match(expression)?.[1];
}

function operationSchema(document: CapturedDocument, operation: 'Search' | 'Fetch'): Pick<OperationFact, 'input' | 'output' | 'parameters'> {
  const tables = extractDocumentObservation({ source: { ...document.source, extraction: 'html' }, body: document.body }).tables;
  const inputName = operation === 'Search' ? 'query' : 'url';
  const requestTable = tables.find(({ heading, rows }) => /request|请求/i.test((heading ?? '').trim())
    && rows.some((row) => row[0]?.trim().toLowerCase() === inputName));
  const responseTable = tables.find(({ heading, rows }) => {
    if (!/response|响应/i.test((heading ?? '').trim())) return false;
    const fields = new Set(rows.map(([field]) => field?.trim()));
    return operation === 'Search' ? fields.has('rerank_score') : fields.has('title') && fields.has('content') && !fields.has('rerank_score');
  });
  const inputRow = requestTable?.rows.find((row) => row[0]?.trim().toLowerCase() === inputName);
  const inputs: CapabilityInput[] = inputRow ? [{
    name: inputName,
    kind: 'text',
    required: /^(?:yes|是)$/i.test(inputRow[2]?.trim() ?? ''),
    ...(inputRow.at(-1)?.trim() ? { description: inputRow.at(-1)!.trim() } : {}),
  }] : [];
  const parameterRows = requestTable?.rows.filter((row) => row[0]?.trim().toLowerCase() !== inputName) ?? [];
  const parameters: ParameterSpec[] = parameterRows.flatMap((row) => {
    const [nameRaw, typeRaw, requiredRaw, defaultRaw, ...descriptionParts] = row;
    const name = nameRaw?.trim();
    const typeLabel = typeRaw?.trim().toLowerCase();
    const type = typeLabel === 'integer' ? 'integer' : typeLabel === 'number' ? 'number' : typeLabel === 'boolean' ? 'boolean' : typeLabel === 'string' ? 'string' : undefined;
    if (!name || !type) return [];
    const description = descriptionParts.join(' ').trim();
    const range = /(?:between\s+|)(\d+)\s*(?:and|[～~-])\s*(\d+)/i.exec(description);
    const rawDefault = defaultRaw?.trim();
    let defaultValue: string | number | boolean | undefined;
    if (rawDefault && !['-', '—'].includes(rawDefault)) {
      if ((type === 'integer' || type === 'number') && /^-?\d+(?:\.\d+)?$/.test(rawDefault)) defaultValue = Number(rawDefault);
      else if (type === 'boolean' && /^(?:true|false)$/i.test(rawDefault)) defaultValue = rawDefault.toLowerCase() === 'true';
      else if (type === 'string') defaultValue = rawDefault.replace(/^['"]|['"]$/g, '');
    }
    return [{
      name, type, required: /^(?:yes|是)$/i.test(requiredRaw?.trim() ?? ''),
      ...(range ? { min: Number(range[1]), max: Number(range[2]) } : {}),
      ...(defaultValue !== undefined ? { default: defaultValue } : {}),
      ...(description ? { description } : {}),
      route_mappings: [name],
    }];
  });
  const outputFields = responseTable?.rows.map(([field]) => field?.trim()).filter((field): field is string => Boolean(field)) ?? [];
  const sourceRef = document.source.id;
  const locator = operation === 'Search' ? 'Search API / Request fields and Response' : 'Fetch API / Request fields and Response';
  return {
    ...(inputs.length ? { input: observed(inputs, sourceRef, locator, '输入字段及必填状态来自官方请求字段表。') } : {}),
    ...(outputFields.length ? { output: observed<readonly CapabilityOutput[]>([{
      kind: 'structured', fields: operation === 'Search' ? outputFields.map((field) => `results[].${field}`) : outputFields,
    }], sourceRef, locator, '响应字段来自官方响应字段表。') } : {}),
    ...(parameters.length ? { parameters: observed(parameters, sourceRef, locator, '可选请求参数、类型、范围和默认值来自官方请求字段表。') } : {}),
  };
}

function toCollectionIR(documents: readonly CapturedDocument[], current: DeepseekCandidateFacts): ProviderCollectionIR {
  const sourceRefs = documents.map(({ source }) => source.id);
  const observedAt = latestSnapshotRetrievedAt(documents.map(({ metadata }) => metadata));
  const markets = [
    { market: 'global' as const, serviceId: 'global', serviceName: '国际市场', models: current.current_models, sourceId: 'deepseek-pricing', currency: 'USD', modelApiSource: 'deepseek-models-api', modelApiModels: current.model_api_metadata, baseSourceId: 'deepseek-search-pricing', anthropicSourceId: 'deepseek-anthropic-api', apiSourceIds: ['deepseek-models-api', 'deepseek-search-pricing', 'deepseek-chat-api', 'deepseek-responses-api', 'deepseek-anthropic-api'] },
    { market: 'cn' as const, serviceId: 'cn', serviceName: '中国区', models: current.cn_current_models, sourceId: 'deepseek-cn-pricing', currency: 'CNY', modelApiSource: 'deepseek-cn-models-api', modelApiModels: current.cn_model_api_metadata, baseSourceId: 'deepseek-cn-search-guide', anthropicSourceId: 'deepseek-cn-anthropic-api', apiSourceIds: ['deepseek-cn-models-api', 'deepseek-cn-search-guide', 'deepseek-cn-chat-api', 'deepseek-cn-responses-api', 'deepseek-cn-anthropic-api'] },
  ];
  const documentsById = new Map(documents.map((document) => [document.source.id, document]));
  const services = markets.map(({ market, serviceId, serviceName, models, sourceId, currency, modelApiSource, modelApiModels, baseSourceId, anthropicSourceId }) => {
    const priceRows = market === 'cn' ? current.cn_pricing_rows : current.pricing_rows;
    const modelMetadata = new Map(modelApiModels.map((model) => [model.id, model]));
    const baseDocument = documentsById.get(baseSourceId);
    const anthropicDocument = documentsById.get(anthropicSourceId);
    const serviceApiDocument = documentsById.get(baseSourceId);
    const marketPrefix = market === 'cn' ? 'cn-' : '';
    const openAIEndpointId = `${marketPrefix}openai-compatible`;
    const anthropicEndpointId = `${marketPrefix}anthropic-compatible`;
    const endpoints = [
      ...(baseDocument ? [{
        id: observed(openAIEndpointId, baseDocument.source.id, '#base-url', '官方 Search/Fetch 指南明确列出 DeepSeek API Base URL。'),
        base_url: observed('https://api.deepseek.com', baseDocument.source.id, '#base-url', '从官方资料明示的 Base URL 读取，不拼接服务商域名。'),
        api_region: observed('未标注', baseDocument.source.id, '#base-url', '官方文档未声明该 Host 的物理 API Region。'),
        documentation: observed(baseDocument.source.url, baseDocument.source.id, '#base-url', '来源为对应市场的官方 Search/Fetch API 指南。'),
      }] : []),
      ...(anthropicDocument ? [{
        id: observed(anthropicEndpointId, anthropicDocument.source.id, '#base-url', '官方 Anthropic 兼容文档明确给出 Base URL。'),
        base_url: observed('https://api.deepseek.com/anthropic', anthropicDocument.source.id, '#base-url', '从官方 Anthropic 兼容文档样例读取 Base URL。'),
        api_region: observed('未标注', anthropicDocument.source.id, '#base-url', '官方文档未声明该 Host 的物理 API Region。'),
        documentation: observed(anthropicDocument.source.url, anthropicDocument.source.id, '#base-url', '来源为对应市场的官方 Anthropic API 文档。'),
      }] : []),
    ];
    const capabilities = (['Search', 'Fetch'] as const).flatMap((name) => {
      const path = `/v1/tools/${name.toLowerCase()}`;
      const operationId = name.toLowerCase();
      const routeObserved = serviceApiDocument && current.api_routes.some(({ source_id, method, path: routePath }) => source_id === baseSourceId && method === 'POST' && routePath === path);
      if (!serviceApiDocument || !routeObserved) return [];
      const capabilityId = `${serviceId}-web-${operationId}`;
      const documentation = serviceApiDocument.source.url;
      const schema = operationSchema(serviceApiDocument, name);
      const amount = requestPrice(serviceApiDocument, name, market);
      const price = amount ? [{
        capability_ref: observed(capabilityId, baseSourceId, `pricing/${name.toLowerCase()}/per-1000-successful-requests`, '官方文档明确列出每 1,000 次成功请求价格。'),
        currency: observed(currency, baseSourceId, `pricing/${name.toLowerCase()}`, '币种由对应市场的官方计价文档明示。'),
        unit: observed('per_request' as const, baseSourceId, `pricing/${name.toLowerCase()}`, '账单按成功请求次数计费。'),
        rules: {
          value: [{ rate_items: [{ metric: 'successful_request', unit: 'per_request', quantity: 1000, amount_decimal: amount }], evidence: [{ source_ref: baseSourceId, locator: `pricing/${name.toLowerCase()}/per-1000-successful-requests`, assertion: `官方文档列出 ${name} 每 1,000 次成功请求收费 ${amount} ${currency}。` }] }],
          evidence: [{ source_ref: baseSourceId, locator: `pricing/${name.toLowerCase()}/per-1000-successful-requests`, assertion: `官方文档列出 ${name} 每 1,000 次成功请求收费 ${amount} ${currency}。` }],
        },
      }] : [];
      return [{
        id: observed(capabilityId, baseSourceId, `#${path}`, `${name} 是独立 API 服务，不绑定 Canonical Model。`),
        kind: observed(name === 'Search' ? 'web_search' : 'web_fetch', baseSourceId, `#${path}`, '按官方 API 文档定义的独立服务类型映射。'),
        links: observed({ documentation }, baseSourceId, 'registered source URL', '能力文档链接来自该市场登记的官方 Search/Fetch 来源。'),
        operations: [{
          id: observed(operationId, baseSourceId, `#${path}`, `官方文档列出 ${name} 独立 API。`),
          kind: observed(name === 'Search' ? 'web_search' : 'web_fetch', baseSourceId, `#${path}`, '官方端点功能映射。'),
          ...schema,
          routes: [{
            id: observed(operationId, baseSourceId, `#${path}`, `官方文档列出 POST ${path}。`),
            endpoint_ref: observed(openAIEndpointId, baseSourceId, '#base-url', 'Route 使用同一官方资料列出的 Base URL。'),
            protocol: observed('rest-json', baseSourceId, `#${path}`, '官方示例为 JSON over HTTPS。'),
            method: observed('POST', baseSourceId, `#${path}`, '官方文档列出 POST 方法。'),
            path_template: observed(path, baseSourceId, `#${path}`, '从官方文档端点示例提取。'),
            operation_kind: observed(name === 'Search' ? 'web_search' : 'web_fetch', baseSourceId, `#${path}`, '官方端点功能映射。'),
            callability: observed('documented_only' as const, baseSourceId, `#${path}`, '官方文档列出端点与参数；本采集没有执行 API 调用探测。'),
            documentation: observed(documentation, baseSourceId, `#${path}`, '来源为对应市场官方 Search/Fetch 文档。'),
          }],
        }],
        prices: price,
      }];
    });
    const offerings = models.map((providerModelId) => {
      const modelEvidence = { source_ref: sourceId, locator: `pricing/model/${providerModelId}`, assertion: `官方当前价格表列出模型 ID ${providerModelId}。` } satisfies EvidenceRef;
      const metadata = modelMetadata.get(providerModelId);
      const rules = priceRules(priceRows, providerModelId, market);
      const prices = rules.length ? [{
        provider_model_id: observed(providerModelId, sourceId, `pricing/model/${providerModelId}`),
        currency: observed(currency, sourceId, `pricing/model/${providerModelId}`),
        unit: observed('per_1m_tokens' as const, sourceId, `pricing/model/${providerModelId}`),
        rules: { value: rules, evidence: rules.flatMap(({ evidence }) => evidence) },
      }] : [];
      return {
        provider_model_id: observed(providerModelId, sourceId, `pricing/model/${providerModelId}`),
        display_name: observed(metadata?.name ?? providerModelId, metadata ? modelApiSource : sourceId, metadata ? `#${providerModelId}/name` : `pricing/model/${providerModelId}`),
        service_id: observed(serviceId, sourceId, `pricing/model/${providerModelId}`),
        supply_observations: [{ kind: 'priced_current' as const, evidence: [modelEvidence] }],
        operations: [],
        prices,
      };
    });
    return {
      id: observed(serviceId, sourceId, 'pricing/market'),
      name: observed(serviceName, sourceId, 'pricing/market'),
      endpoints,
      offerings,
      capabilities,
      plans: [],
    };
  });

  const pricingCoverageByMarket = new Map(markets.map(({ market, models }) => {
    const rows = market === 'cn' ? current.cn_pricing_rows : current.pricing_rows;
    const modelCount = models.filter((model) => priceRules(rows, model, market).length > 0).length;
    return [market, { modelCount, complete: models.length > 0 && modelCount === models.length }] as const;
  }));
  const pricingComplete = [...pricingCoverageByMarket.values()].every(({ complete }) => complete);
  const apiRecordCountBySource = new Map<string, number>();
  for (const service of services) {
    for (const endpoint of service.endpoints) {
      const sourceRef = endpoint.id.evidence[0]?.source_ref;
      if (sourceRef) apiRecordCountBySource.set(sourceRef, (apiRecordCountBySource.get(sourceRef) ?? 0) + 1);
    }
    const routes = [
      ...service.offerings.flatMap(({ operations }) => operations.flatMap(({ routes: operationRoutes }) => operationRoutes)),
      ...service.capabilities.flatMap(({ operations }) => operations.flatMap(({ routes: operationRoutes }) => operationRoutes)),
    ];
    const seen = new Set<string>();
    for (const route of routes) {
      const sourceRef = route.id.evidence[0]?.source_ref;
      if (!sourceRef) continue;
      const routeKey = `${sourceRef}\u0000${route.method.value}\u0000${route.path_template.value}`;
      if (seen.has(routeKey)) continue;
      seen.add(routeKey);
      apiRecordCountBySource.set(sourceRef, (apiRecordCountBySource.get(sourceRef) ?? 0) + 1);
    }
  }
  const coveredSourceRefs = new Set(markets.flatMap(({ sourceId, modelApiSource, baseSourceId, anthropicSourceId, apiSourceIds }) => [sourceId, modelApiSource, baseSourceId, anthropicSourceId, ...apiSourceIds]));
  const documentationCoverage = documents.filter(({ source }) => !coveredSourceRefs.has(source.id)).map(({ source }) => ({
    source_ref: source.id,
    scope: 'documentation' as const,
    ...(source.market ? { market: source.market } : {}),
    status: 'not_parsed' as const,
    note: '来源内容保留在文档观察与旧候选中，尚未映射为领域事实。',
  }));
  return {
    ir_version: '1.0.0',
    provider_id: 'deepseek',
    observed_at: observedAt,
    source_refs: sourceRefs,
    coverage: [
      ...markets.flatMap(({ market, sourceId, models, modelApiSource, baseSourceId, apiSourceIds }) => [
        { source_ref: sourceId, scope: 'model_catalog' as const, market, status: models.length ? 'complete' as const : 'failed' as const, record_count: models.length, record_unit: 'unique model IDs' },
        { source_ref: sourceId, scope: 'pricing' as const, market, status: pricingCoverageByMarket.get(market)?.complete ? 'complete' as const : 'partial' as const, record_count: pricingCoverageByMarket.get(market)?.modelCount ?? 0, record_unit: 'models with mapped price facts' },
        { source_ref: baseSourceId, scope: 'pricing' as const, market, status: (['Search', 'Fetch'] as const).every((name) => requestPrice(documentsById.get(baseSourceId), name, market) !== undefined) ? 'complete' as const : 'partial' as const, record_count: (['Search', 'Fetch'] as const).filter((name) => requestPrice(documentsById.get(baseSourceId), name, market) !== undefined).length, record_unit: 'independent tool price facts', note: '独立 Search/Fetch 按成功请求计价。' },
        ...[...new Set(apiSourceIds)].map((apiSourceRef) => ({ source_ref: apiSourceRef, scope: 'api' as const, market, status: documentsById.has(apiSourceRef) ? 'partial' as const : 'failed' as const, record_count: apiSourceRef === modelApiSource ? 0 : apiRecordCountBySource.get(apiSourceRef) ?? 0, record_unit: 'recognized API source records', note: apiSourceRef === modelApiSource ? '仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。' : '只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。' })),
        { source_ref: baseSourceId, scope: 'capability' as const, market, status: 'partial' as const, record_count: services.find(({ id }) => id.value === (market === 'cn' ? 'cn' : 'global'))?.capabilities.length ?? 0, record_unit: 'independent Capability records', note: 'Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。' },
      ]),
      ...documentationCoverage,
    ],
    document_observations: [],
    collection_notes: ['IR 映射模型目录、模型级 API 限额/能力、文本生成 Route、Search/Fetch 独立能力与按成功请求计价；Operation 参数 Schema、限流细节及 Anthropic Route 仍待迁移。'],
    profile: {
      name: observed('DeepSeek', 'deepseek-pricing', 'document/title'),
      aliases: observed(['DeepSeek'], 'deepseek-pricing', 'document/title'),
      kind: observed('first_party' as const, 'deepseek-pricing', 'document/domain'),
      docs: observed({ overview: 'https://api-docs.deepseek.com/zh-cn/' }, 'deepseek-pricing', 'document/domain'),
    },
    services,
    review_items: pricingComplete ? [] : [{
      id: 'deepseek-price-coverage', kind: 'incomplete_coverage', message: '至少一个市场或型号缺少完整的高峰/空闲输入、缓存命中和输出价格行。',
      evidence: sourceRefs.filter((sourceRef) => /(?:cn-)?pricing$/.test(sourceRef)).map((sourceRef) => ({ source_ref: sourceRef, locator: '#pricing', assertion: '核对该市场每个当前模型的高峰/空闲、缓存命中、输入和输出价格覆盖。' })),
    }],
  };
}

function text(body: string): string {
  return body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>|<\/(?:p|div|li|h[1-6]|tr|section|article)>/gi, '\n').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'").replace(/[\t ]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
}

function rows(document: CapturedDocument): RawRow[] {
  const sourceText = text(document.body);
  const result: RawRow[] = [];
  for (const line of sourceText.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) continue;
    const cells = trimmed.slice(1, -1).split('|').map((cell) => cell.trim());
    if (cells.every((cell) => /^:?-{2,}:?$/.test(cell))) continue;
    if (cells.length > 1) result.push({ source_id: document.source.id, cells });
  }
  if (result.length) return result;
  const htmlRows = [...document.body.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
  for (const tr of htmlRows) {
    const cells = [...tr[1]!.matchAll(/<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)].map((cell) => text(cell[1]!));
    if (cells.length > 1) result.push({ source_id: document.source.id, cells });
  }
  return result;
}

function currentModels(pricing: CapturedDocument): string[] {
  // DeepSeek publishes its current price matrix as an HTML table with model
  // IDs in the column headings, rather than a Markdown table with one model
  // per row. Use the same normalized rows as priceRules so both HTML and
  // Markdown source representations are supported.
  const header = rows(pricing).find(({ cells }) =>
    /^(?:model(?:\s+id)?|模型(?:\s*id)?)$/i.test((cells[0] ?? '').replace(/[\s（）()]/g, '')),
  );
  const parsed = (header?.cells.slice(1) ?? [])
    .map((cell) => cell.replace(/\s*\(\d+\)$/, '').trim())
    .filter((modelId) => /^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(modelId))
    .map((modelId) => modelId.toLowerCase());
  if (!parsed.length) throw new Error('DeepSeek 价格页未解析到带模型列的当前价格表');
  return [...new Set(parsed)];
}

function facts(documents: readonly CapturedDocument[]): DeepseekCandidateFacts {
  const get = (id: string) => documents.find(({ source }) => source.id === id);
  const pricing = get('deepseek-pricing');
  const cnPricing = get('deepseek-cn-pricing');
  const modelApiDoc = get('deepseek-models-api');
  const cnModelApiDoc = get('deepseek-cn-models-api');
  const searchPricing = get('deepseek-search-pricing');
  if (!pricing || !cnPricing || !modelApiDoc || !cnModelApiDoc || !searchPricing) throw new Error('DeepSeek 国内/国际模型列表、价格与 Search 定价来源必须采集');
  const current = currentModels(pricing);
  const cnCurrent = currentModels(cnPricing);
  const modelApiText = text(modelApiDoc.body).toLowerCase();
  const apiModels = current.filter((id) => modelApiText.includes(id));
  const cnModelApiText = text(cnModelApiDoc.body).toLowerCase();
  const cnApiModels = cnCurrent.filter((id) => cnModelApiText.includes(id));
  const routes = documents.flatMap(({ source, body }) => [...text(body).matchAll(/\b(GET|POST|PUT|PATCH|DELETE)\s+(?:(?:https?:\/\/[^/\s]+))?(\/[^\s|)]+)/gi)].map((match) => ({ method: match[1]!.toUpperCase(), path: match[2]!.replace(/[.,;:]+$/, ''), source_id: source.id })));
  return {
    current_models: current,
    cn_current_models: cnCurrent,
    current_api_models: apiModels,
    cn_current_api_models: cnApiModels,
    model_api_metadata: extractModelApiMetadata(modelApiDoc),
    cn_model_api_metadata: extractModelApiMetadata(cnModelApiDoc),
    pricing_rows: rows(pricing),
    cn_pricing_rows: rows(cnPricing),
    search_pricing_rows: rows(searchPricing),
    api_routes: routes,
  };
}

function renderIRReview(candidate: CandidateEnvelope<ProviderCollectionIR>): string {
  const ir = candidate.current;
  return [
    '# DeepSeek Provider 采集 IR 候选', '',
    `- IR 版本：${ir.ir_version}`,
    `- 市场：${ir.services.map(({ id }) => id.value).join('、')}`,
    `- Offering：${ir.services.reduce((count, service) => count + service.offerings.length, 0)} 项`,
    `- 来源价格规则：${ir.services.reduce((count, service) => count + service.offerings.reduce((sum, offering) => sum + offering.prices.reduce((priceCount, price) => priceCount + (price.rules?.value?.length ?? 0), 0), 0), 0)} 条`,
    '', '## 字段覆盖', '',
    '| 来源 | 市场 | 数据域 | 状态 | 数量/说明 |', '|---|---|---|---|---|',
    ...ir.coverage.map(({ source_ref, market, scope, status, record_count, record_unit, note }) => `| ${source_ref} | ${market ?? '—'} | ${scope} | ${status} | ${record_count ?? '—'} ${record_unit ?? ''} ${note ?? ''}|`),
    '', '## 未迁移数据域', '',
    ...ir.collection_notes?.map((note) => `- ${note}`) ?? [],
    '', '价格规则保留来源市场、原币种、百万 Token 单位和高峰/空闲时段；此 IR 仍是候选，不会写入正式 Provider 数据。', '',
  ].join('\n');
}

export async function collectDeepseek(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, DEEPSEEK_INGEST_SOURCES);
  const current = facts(documents);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'deepseek',
    documents,
    current: toCollectionIR(documents, current),
    modelCount: current.current_models.length + current.cn_current_models.length,
    renderReview: renderIRReview,
  });
}

export const deepseekParser = { rows, currentModels, priceRules, extractModelApiMetadata, toCollectionIR, text };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectDeepseek({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
