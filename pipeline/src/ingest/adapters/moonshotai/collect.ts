import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope, IngestSource } from '../../types.ts';
import type { CapabilityInput, CapabilityOutput, ParameterSpec } from '@providerlist/schema/types';
import { captureDocumentSet, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { buildDocumentObservationIR } from '../document-observation.ts';
import type { CapabilityFact, EndpointFact, Observed, OperationFact, PriceFact, PriceRuleFact, ReviewItem, RouteFact, ServiceFacts } from '../../ir/provider-collection.ts';
import { MOONSHOTAI_INGEST_SOURCES } from './sources.ts';

interface TableRow {
  readonly source_id: string;
  readonly section: string;
  readonly headers: readonly string[];
  readonly cells: readonly string[];
  readonly text: string;
}

interface ModelFact {
  readonly model_id: string;
  readonly source_id: string;
  readonly status: 'listed_current' | 'listed_retired';
  readonly evidence: string;
}

export interface MoonshotCandidateFacts {
  readonly market: 'cn';
  readonly current_models: readonly ModelFact[];
  readonly retired_models: readonly ModelFact[];
  readonly global_current_models: readonly ModelFact[];
  readonly global_retired_models: readonly ModelFact[];
  readonly pricing_rows: readonly TableRow[];
  readonly pricing_text_mentions: readonly { readonly source_id: string; readonly evidence: string }[];
  readonly api_document_mentions: readonly { readonly source_id: string; readonly evidence: string }[];
  readonly source_coverage: readonly {
    readonly source_id: string;
    readonly captured: boolean;
    readonly useful_price_rows: number;
    readonly note?: string;
  }[];
}

function unescapeCell(value: string): string {
  return value.trim().replace(/<br\s*\/?\s*>/gi, ' / ').replace(/\\\|/g, '|');
}

function markdownTables(document: CapturedDocument): TableRow[] {
  const lines = document.body.split(/\r?\n/).map((line) => line.trim());
  const rows: TableRow[] = [];
  let section = '';
  const isSeparator = (line: string): boolean => /^\|(?:\s*:?-+:?\s*\|)+$/.test(line);
  const cells = (line: string): string[] => line.replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map(unescapeCell);
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index] ?? '';
    const heading = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
    if (heading?.[1]) section = heading[1];
    const separator = lines[index + 1] ?? '';
    if (!line.startsWith('|') || !separator.startsWith('|') || !isSeparator(separator)) continue;
    const headers = cells(line);
    index += 2;
    while (index < lines.length && lines[index]?.startsWith('|')) {
      const row = lines[index] ?? '';
      if (!isSeparator(row)) rows.push({ source_id: document.source.id, section, headers, cells: cells(row), text: row });
      index++;
    }
    index--;
  }
  return rows;
}

function bracketBlock(text: string, openIndex: number): string | undefined {
  if (text[openIndex] !== '[') return undefined;
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = openIndex; index < text.length; index++) {
    const char = text[index] ?? '';
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === '`' || char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === '[') depth++;
    if (char === ']' && --depth === 0) return text.slice(openIndex, index + 1);
  }
  return undefined;
}

function arrayChildren(block: string): string[] {
  const children: string[] = [];
  let depth = 0;
  let quote = '';
  let escaped = false;
  let start = -1;
  for (let index = 1; index < block.length - 1; index++) {
    const char = block[index] ?? '';
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === '`' || char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === '[') {
      if (depth === 0) start = index;
      depth++;
    } else if (char === ']') {
      depth--;
      if (depth === 0 && start >= 0) {
        children.push(block.slice(start, index + 1));
        start = -1;
      }
    }
  }
  return children;
}

function htmlPricingTables(document: CapturedDocument): TableRow[] {
  const text = document.body;
  const rows: TableRow[] = [];
  let searchFrom = 0;
  while (true) {
    const rowsToken = text.indexOf('rows:[', searchFrom);
    if (rowsToken < 0) break;
    const rowsStart = rowsToken + 'rows:'.length;
    const rowsBlock = bracketBlock(text, rowsStart);
    if (!rowsBlock) break;
    searchFrom = rowsStart + rowsBlock.length;
    const columnsToken = text.lastIndexOf('columns:[', rowsToken);
    const columnsStart = columnsToken < 0 ? -1 : columnsToken + 'columns:'.length;
    const columnsBlock = columnsStart >= 0 ? bracketBlock(text, columnsStart) : undefined;
    const headers = columnsBlock
      ? [...columnsBlock.matchAll(/(?:title:\`([^`]+)\`|children:\`([^`]+)\`)/g)]
        .map((match) => match[1] ?? match[2] ?? '')
      : [];
    for (const row of arrayChildren(rowsBlock)) {
      const values = [...row.matchAll(/`([^`]*)`/g)]
        .map((match) => match[1] ?? '')
        .filter((value) => !value.startsWith('/docs/') && !value.startsWith('/guide/'));
      if (!values.length) continue;
      rows.push({
        source_id: document.source.id,
        section: '官方 HTML 定价表',
        headers,
        cells: values,
        text: values.join(' | '),
      });
    }
  }
  return rows;
}

function visibleHtmlText(body: string): string {
  return body
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '\n')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '\n')
    .replace(/<!--([\s\S]*?)-->/g, '\n')
    .replace(/<\/(?:p|li|h[1-6]|tr|td|th|div)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/[ \t]+/g, ' ');
}

function modelId(row: TableRow): string | undefined {
  const firstCell = row.cells[0] ?? '';
  const match = /^`([^`]+)`$/.exec(firstCell.trim());
  return match?.[1];
}

function uniqueModels(rows: readonly TableRow[], sourceId: string, status: ModelFact['status']): ModelFact[] {
  return [...new Map(rows.flatMap((row) => {
    const id = modelId(row);
    return id ? [[id.toLowerCase(), { model_id: id, source_id: sourceId, status, evidence: row.text }] as const] : [];
  })).values()];
}

function observed<T>(value: T, sourceRef: string, locator: string, assertion?: string): Observed<T> {
  return {
    value,
    evidence: [{ source_ref: sourceRef, locator, ...(assertion ? { assertion } : {}) }],
  };
}

function readableDocumentationUrl(value: string | undefined): string | undefined {
  return value?.replace(/\.md(?=([?#].*)?$)/i, '');
}

function tokenPriceFact(row: TableRow, modelId: string): PriceFact | undefined {
  const rateForHeader = (header: string): { metric: string; ttl?: string } | undefined => {
    if (/^(?:输入|input)$/i.test(header)) return { metric: 'input' };
    if (/^(?:输出|output)$/i.test(header)) return { metric: 'output' };
    if (/^(?:缓存命中|cached input)$/i.test(header)) return { metric: 'cache_read' };
    if (/缓存写入.*(?:5\s*min|5m)|^5m writes$/i.test(header)) return { metric: 'cache_write', ttl: '5min' };
    if (/缓存写入.*(?:1\s*h|1h)|^1h writes$/i.test(header)) return { metric: 'cache_write', ttl: '1h' };
    return undefined;
  };
  const pricePattern = /^(?:¥|￥|\$)\s*(\d+(?:\.\d+)?)\s*\/\s*MTok$/i;
  const rates: PriceRuleFact['rate_items'][number][] = [];
  let currency: string | undefined;
  for (let index = 1; index < Math.min(row.headers.length, row.cells.length); index++) {
    const rate = rateForHeader(row.headers[index] ?? '');
    if (!rate) continue;
    const raw = row.cells[index] ?? '';
    const match = pricePattern.exec(raw.trim());
    if (!match) return undefined;
    const nextCurrency = raw.trim().startsWith('$') ? 'USD' : 'CNY';
    if (currency && currency !== nextCurrency) return undefined;
    currency = nextCurrency;
    rates.push({ ...rate, unit: 'per_1m_tokens', quantity: 1, amount_decimal: match[1]! });
  }
  if (!currency || !rates.some(({ metric }) => metric === 'input') || !rates.some(({ metric }) => metric === 'output')) return undefined;

  const sourceRef = row.source_id;
  const locator = `pricing/${modelId}`;
  const assertion = '官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。';
  return {
    provider_model_id: observed(modelId, sourceRef, locator, assertion),
    currency: observed(currency, sourceRef, locator, assertion),
    unit: observed('per_1m_tokens', sourceRef, locator, assertion),
    rules: observed([{ rate_items: rates, evidence: [{ source_ref: sourceRef, locator, assertion }] }], sourceRef, locator, assertion),
  };
}

interface BatchPricingEvidence {
  readonly model_ids: readonly string[];
  readonly pricing_source_ref: string;
  readonly route_source_ref: string;
}

function batchPricingEvidence(documents: readonly CapturedDocument[], market: 'cn' | 'global'): BatchPricingEvidence | undefined {
  const prefix = market === 'global' ? 'moonshotai-global-' : 'moonshotai-';
  const pricing = documents.find(({ source }) => source.id === `${prefix}batch-pricing`);
  const createApi = documents.find(({ source }) => source.id === `${prefix}batch-create-api`);
  if (!pricing || !createApi || !openApiPostPath(createApi, '/v1/batches')) return undefined;
  const text = pricing.metadata.content_type?.includes('html') ? visibleHtmlText(pricing.body) : pricing.body;
  const supported = market === 'global'
    ? /Batch API supports\s+([\s\S]{0,200}?)\s+models/i.exec(text)?.[1]
    : /Batch API 支持\s+([\s\S]{0,200}?)\s+模型/i.exec(text)?.[1];
  const discount = market === 'global'
    ? /Batch API inference costs are\s+(\d+(?:\.\d+)?)% of the standard model price/i.exec(text)?.[1]
    : /批量推理 API 费用为标准模型价格的\s*(\d+(?:\.\d+)?)%/i.exec(text)?.[1];
  if (!supported || discount !== '60') return undefined;
  const modelIds = [...new Set((supported.match(/kimi-[a-z0-9.-]+/gi) ?? []).map((modelId) => modelId.replace(/[.,]+$/, '')))];
  return modelIds.length ? { model_ids: modelIds, pricing_source_ref: pricing.source.id, route_source_ref: createApi.source.id } : undefined;
}

function decimalTimesSixTenths(amount: string): string | undefined {
  const match = /^(\d+)(?:\.(\d+))?$/.exec(amount);
  if (!match) return undefined;
  const fraction = match[2] ?? '';
  const scaled = BigInt(`${match[1]}${fraction}`) * 6n;
  const scale = fraction.length + 1;
  const digits = scaled.toString().padStart(scale + 1, '0');
  const whole = digits.slice(0, -scale);
  const decimals = digits.slice(-scale).replace(/0+$/, '');
  return decimals ? `${whole}.${decimals}` : whole;
}

function batchOperationFact(modelId: string, serviceId: string, evidence: BatchPricingEvidence): OperationFact {
  const market = serviceId === 'global' ? 'global' : 'cn';
  const sourceRef = evidence.route_source_ref;
  const locator = 'openapi/POST-/v1/batches/requestBody/BatchCreateRequest';
  const assertion = `官方 Batch API 明确支持 ${modelId}，并列出创建批处理任务的请求 Schema。`;
  const route: RouteFact = {
    id: observed(`batch-inference-${market}`, sourceRef, 'openapi/POST-/v1/batches', assertion),
    endpoint_ref: observed(`openai-compatible-${market}`, sourceRef, 'openapi/servers', '批处理创建路由与同市场 OpenAI 兼容 API 共用服务 Base URL。'),
    protocol: observed('batch', sourceRef, 'openapi/POST-/v1/batches', '官方 API 文档将此接口定义为批处理任务创建。'),
    method: observed('POST', sourceRef, 'openapi/POST-/v1/batches', '官方 OpenAPI 声明 POST /v1/batches。'),
    path_template: observed('/batches', sourceRef, 'openapi/POST-/v1/batches', 'API Base URL 已包含 /v1 前缀，因此 Route 路径为 /batches。'),
    operation_kind: observed('batch_inference', sourceRef, locator, assertion),
    provider_model_ids: observed([modelId], evidence.pricing_source_ref, 'batch-supported-models', `官方 Batch 定价页将 ${modelId} 列入支持型号。`),
    documentation: observed(readableDocumentationUrl(MOONSHOTAI_INGEST_SOURCES.find(({ id }) => id === sourceRef)?.url) ?? '', sourceRef, 'openapi/POST-/v1/batches', '官方 Batch 创建 API 文档。'),
  };
  const parameterEvidence = (field: string) => [{ source_ref: sourceRef, locator: `${locator}/${field}`, assertion: '参数类型、必填性和约束来自 BatchCreateRequest OpenAPI Schema。' }];
  return {
    id: observed('batch_inference', sourceRef, locator, assertion),
    kind: observed('batch_inference', sourceRef, locator, '对 JSONL 输入文件异步执行批量 Chat Completions。'),
    routes: [route],
    parameters: observed([
      { name: 'input_file_id', type: 'string', required: true, route_mappings: ['/input_file_id'],  evidence_refs: parameterEvidence('input_file_id').map(({ source_ref }) => source_ref) },
      { name: 'endpoint', type: 'string', required: true, enum: ['/v1/chat/completions'], route_mappings: ['/endpoint'], evidence_refs: parameterEvidence('endpoint').map(({ source_ref }) => source_ref) },
      { name: 'completion_window', type: 'string', required: true,  route_mappings: ['/completion_window'], evidence_refs: parameterEvidence('completion_window').map(({ source_ref }) => source_ref) },
      { name: 'metadata', type: 'object', required: false,  route_mappings: ['/metadata'], evidence_refs: parameterEvidence('metadata').map(({ source_ref }) => source_ref) },
    ], sourceRef, locator, '参数从官方 OpenAPI 请求体 Schema 读取；未将示例或默认值扩展为额外约束。'),
    output: observed([{ kind: 'structured', fields: ['id', 'status', 'output_file_id', 'error_file_id'] }], sourceRef, 'openapi/components/schemas/BatchObject', '创建接口返回含任务 ID、状态和结果文件 ID 的 BatchObject。'),
    schema_operation: observed({ id: 'batch_inference', kind: 'batch_inference', execution: { mode: 'async_job', documentation: '批处理任务以状态字段跟踪执行进度。' } }, sourceRef, locator, '官方 BatchObject 包含异步任务 ID 与状态。'),
  };
}

function batchPriceFact(base: PriceFact, pricingSourceRef: string): PriceFact | undefined {
  const baseRules = base.rules.value;
  if (baseRules.length !== 1) return undefined;
  const rateItems = baseRules[0]!.rate_items.map((rate) => {
    const amount = decimalTimesSixTenths(rate.amount_decimal);
    return amount ? { ...rate, amount_decimal: amount } : undefined;
  });
  if (rateItems.some((rate) => !rate)) return undefined;
  return {
    ...base,
    operation_ref: observed('batch_inference', pricingSourceRef, 'batch-discount', 'Batch 价格属于对应模型的异步批处理 Operation。'),
    rules: {
      value: [{
        ...baseRules[0]!,
        rate_items: rateItems as PriceRuleFact['rate_items'],
        evidence: [...baseRules[0]!.evidence, { source_ref: pricingSourceRef, locator: 'batch-pricing/60-percent', assertion: '官方 Batch 定价声明按标准模型价格的 60% 收費。' }],
      }],
      evidence: [...base.rules.evidence, { source_ref: pricingSourceRef, locator: 'batch-pricing/60-percent', assertion: 'Batch 价格按标准模型价格的 60% 计算。' }],
    },
  };
}

function endpointsFromOverview(document: CapturedDocument): EndpointFact[] {
  const rows = markdownTables(document).filter((row) =>
    row.headers.some((header) => /base_url/i.test(header.replace(/\\/g, '')))
      && row.headers.some((header) => /兼容 API|compatible API/i.test(header)),
  );
  const marketSuffix = document.source.market === 'global' ? 'global' : 'cn';
  const apiRegion = document.source.market === 'global' ? '全球' : '中国';
  const endpoints = rows.flatMap((row) => {
    const label = row.cells[0] ?? '';
    const baseUrl = (row.cells[1] ?? '').match(/https:\/\/[^\s`|)]+/)?.[0];
    const documentation = readableDocumentationUrl((row.cells[2] ?? '').match(/https:\/\/[^\s)]+/)?.[0]);
    const protocol = /anthropic.*messages/i.test(label) ? 'anthropic'
      : /openai.*(?:chat completions|responses)/i.test(label) ? 'openai'
        : undefined;
    if (!baseUrl || !protocol || !/^https:\/\//.test(baseUrl)) return [];
    const assertion = `官方${apiRegion} API 概述在「${label}」协议行列出该 Base URL。`;
    return [{
      id: observed(`${protocol}-compatible-${marketSuffix}`, document.source.id, `protocol-compatibility/${label}`, assertion),
      base_url: observed(baseUrl, document.source.id, `protocol-compatibility/${label}`, assertion),
      api_region: observed(apiRegion, document.source.id, `protocol-compatibility/${label}`, assertion),
      ...(documentation ? { documentation: observed(documentation, document.source.id, `protocol-compatibility/${label}`, `官方协议概述链接到该接口文档：${label}。`) } : {}),
    }];
  });
  const unique = new Map<string, EndpointFact>();
  for (const endpoint of endpoints) {
    // Chat and Responses share one OpenAI-compatible Base URL. Keep one
    // endpoint record; protocol-specific documentation belongs to each Route.
    if (!unique.has(endpoint.id.value)) unique.set(endpoint.id.value, endpoint);
  }
  return [...unique.values()];
}

interface ModelApiRouteConfig {
  readonly source_suffix: 'chat-api' | 'responses-api' | 'messages-api';
  readonly protocol: 'chat-completions' | 'responses' | 'messages';
  readonly endpoint_protocol: 'openai' | 'anthropic';
  readonly documented_path: string;
  readonly path_template: string;
  readonly request_schema?: string;
  readonly response_schema: string;
}

const MODEL_API_ROUTES: readonly ModelApiRouteConfig[] = [
  { source_suffix: 'chat-api', protocol: 'chat-completions', endpoint_protocol: 'openai', documented_path: '/v1/chat/completions', path_template: '/chat/completions', response_schema: 'ChatCompletionResponse' },
  { source_suffix: 'responses-api', protocol: 'responses', endpoint_protocol: 'openai', documented_path: '/v1/responses', path_template: '/responses', request_schema: 'ResponsesRequest', response_schema: 'ResponsesResponse' },
  { source_suffix: 'messages-api', protocol: 'messages', endpoint_protocol: 'anthropic', documented_path: '/anthropic/v1/messages', path_template: '/v1/messages', request_schema: 'MessagesRequest', response_schema: 'MessagesResponse' },
];

function modelIdsFromRequestSchemas(document: CapturedDocument, knownModelIds: ReadonlySet<string>): Set<string> {
  const openApiStart = document.body.lastIndexOf('\nopenapi:');
  if (openApiStart < 0) return new Set();
  const lines = document.body.slice(openApiStart).split(/\r?\n/);
  const supported = new Set<string>();
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index] ?? '';
    const property = /^(\s*)model:\s*$/.exec(line);
    if (!property) continue;
    const indent = property[1]?.length ?? 0;
    const block: string[] = [];
    for (let next = index + 1; next < lines.length; next++) {
      const candidate = lines[next] ?? '';
      if (candidate.trim() && (candidate.match(/^\s*/)?.[0].length ?? 0) <= indent) break;
      block.push(candidate);
    }
    for (const [, id] of block.join('\n').matchAll(/`([^`]+)`/g)) {
      if (id && knownModelIds.has(id)) supported.add(id);
    }
    for (let childIndex = 0; childIndex < block.length; childIndex++) {
      const enumLine = block[childIndex] ?? '';
      const enumMatch = /^(\s*)enum:\s*$/.exec(enumLine);
      if (!enumMatch) continue;
      const enumIndent = enumMatch[1]?.length ?? 0;
      for (let valueIndex = childIndex + 1; valueIndex < block.length; valueIndex++) {
        const valueLine = block[valueIndex] ?? '';
        if (valueLine.trim() && (valueLine.match(/^\s*/)?.[0].length ?? 0) <= enumIndent) break;
        const value = /^\s*-\s*['"]?([^'"\s]+)['"]?\s*$/.exec(valueLine)?.[1];
        if (value && knownModelIds.has(value)) supported.add(value);
      }
    }
  }
  return supported;
}

function openApiPostPath(document: CapturedDocument, path: string): boolean {
  const openApiStart = document.body.lastIndexOf('\nopenapi:');
  if (openApiStart < 0) return false;
  const openApi = document.body.slice(openApiStart);
  const pathIndex = openApi.indexOf(`${path}:`);
  if (pathIndex < 0) return false;
  const rest = openApi.slice(pathIndex + path.length + 1);
  const nextPathIndex = rest.search(/\n\s{2,}\/[^\n]*:\s*\n/u);
  const pathBlock = nextPathIndex < 0 ? rest : rest.slice(0, nextPathIndex);
  return /^\s{4}post:\s*$/mu.test(pathBlock);
}

function modelApiRoutes(
  documents: readonly CapturedDocument[],
  modelIds: readonly string[],
  serviceId: string,
): Map<string, RouteFact[]> {
  const market = serviceId === 'global' ? 'global' : 'cn';
  const suffix = market === 'global' ? 'global-' : '';
  const knownModelIds = new Set(modelIds);
  const routesByModelId = new Map(modelIds.map((id) => [id, [] as RouteFact[]]));
  for (const config of MODEL_API_ROUTES) {
    const sourceId = `moonshotai-${suffix}${config.source_suffix}`;
    const document = documents.find(({ source }) => source.id === sourceId);
    if (!document || !openApiPostPath(document, config.documented_path)) continue;
    const supportedIds = modelIdsFromRequestSchemas(document, knownModelIds);
    for (const modelId of supportedIds) {
      const endpointId = `${config.endpoint_protocol}-compatible-${market}`;
      const locator = `openapi/${config.documented_path}/request/model`;
      const assertion = `官方 API 请求 Schema 将「${modelId}」列为 ${config.protocol} 路由的 model 值。`;
      const reasoning = reasoningForModelRoute(config, modelId, sourceId, locator);
      const route: RouteFact = {
        id: observed(`${config.protocol}-${market}`, sourceId, locator, assertion),
        endpoint_ref: observed(endpointId, sourceId, 'protocol-compatibility', 'Route 关联同市场 API 概述中列出的兼容协议 Base URL。'),
        protocol: observed(config.protocol, sourceId, locator, '协议类型按官方 API 文档定义。'),
        method: observed('POST', sourceId, `openapi${config.documented_path}/post`, '官方 OpenAPI 将该操作声明为 POST。'),
        path_template: observed(config.path_template, sourceId, `openapi${config.documented_path}`, '完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。'),
        operation_kind: observed('text_generation', sourceId, locator, '该模型 API Route 用于生成文本响应。'),
        provider_model_ids: observed([modelId], sourceId, locator, assertion),
        ...(reasoning ? { reasoning } : {}),
        documentation: observed(readableDocumentationUrl(document.source.url) ?? document.source.url, sourceId, `openapi${config.documented_path}`, '来源为该 Route 的官方 API 文档。'),
      };
      routesByModelId.get(modelId)?.push(route);
    }
  }
  return routesByModelId;
}

function reasoningForModelRoute(
  route: ModelApiRouteConfig,
  modelId: string,
  sourceId: string,
  locator: string,
): Observed<import('@providerlist/schema/types').RouteReasoningSpec> | undefined {
  if (route.protocol === 'responses' && /^kimi-k3(?:\.|$)/.test(modelId)) {
    return observed({
      supported: true,
      controls: [{ kind: 'effort', wire_path: ['reasoning', 'effort'], values: ['low', 'high', 'max'], default: 'max', source: 'reasoning.effort' }],
    }, sourceId, `${locator}/reasoning.effort`, '官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。');
  }
  if (route.protocol !== 'chat-completions') return undefined;
  if (/^kimi-k3(?:\.|$)/.test(modelId)) {
    return observed({
      supported: true,
      controls: [{ kind: 'effort', wire_path: ['reasoning_effort'], values: ['low', 'high', 'max'], default: 'max', source: 'reasoning_effort' }],
    }, sourceId, `${locator}/reasoning_effort`, '官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。');
  }
  if (modelId === 'kimi-k2.6') {
    return observed({
      supported: true,
      controls: [{ kind: 'toggle', wire_path: ['thinking', 'type'], values: ['enabled', 'disabled'], default: 'enabled', off_encoding: 'disabled', source: 'thinking.type' }],
    }, sourceId, `${locator}/thinking/type`, '官方 Chat API 文档列出 kimi-k2.6 的 thinking.type enabled/disabled 模式，默认 enabled。');
  }
  if (/^kimi-k2\.7-code(?:-highspeed)?$/.test(modelId)) {
    return observed({ supported: true }, sourceId, `${locator}/thinking`, '官方 Chat API 文档说明 kimi-k2.7-code 始终启用思考；高速版使用相同请求 Schema，未声明可调推理控制。');
  }
  return undefined;
}

function toolsEndpointFromOverview(document: CapturedDocument): EndpointFact | undefined {
  const host = document.body.match(/^https:\/\/api\.moonshot\.(?:cn|ai)\s*$/m)?.[0];
  if (!host) return undefined;
  const market = document.source.market === 'global' ? 'global' : 'cn';
  const region = market === 'global' ? '全球' : '中国';
  const documentation = readableDocumentationUrl(document.source.url);
  return {
    id: observed(`moonshot-tools-api-${market}`, document.source.id, '#服务地址', `官方 API 概述将 ${host} 列为服务地址。`),
    base_url: observed(host, document.source.id, '#服务地址', '联网搜索与网页抓取 REST 路由使用官方服务根地址。'),
    api_region: observed(region, document.source.id, '#服务地址', `官方${region} API 概述。`),
    ...(documentation ? {
      documentation: observed(documentation, document.source.id, 'API 概述', '官方 API 概述说明服务地址并链接该市场的工具接口文档。'),
    } : {}),
  };
}

function toolRoutesFromOverview(document: CapturedDocument): RouteFact[] {
  const endpoint = toolsEndpointFromOverview(document);
  if (!endpoint) return [];
  const market = document.source.market === 'global' ? 'global' : 'cn';
  const rows = markdownTables(document).filter(({ headers }) =>
    headers.some((header) => /端点|endpoint/i.test(header))
      && headers.some((header) => /方法|method/i.test(header)),
  );
  return rows.flatMap((row) => {
    const path = (row.cells[0] ?? '').match(/`([^`]+)`/)?.[1];
    if (!path || !['/v1/tools/search', '/v1/tools/search_pro', '/v1/tools/fetch'].includes(path)) return [];
    const method = row.cells[1]?.trim().toUpperCase();
    const documentation = readableDocumentationUrl(row.cells.find((cell) => /https:\/\//.test(cell))?.match(/https:\/\/[^\s)]+/)?.[0]);
    if (method !== 'POST') return [];
    const operation = path.endsWith('/fetch') ? 'web_fetch' : path.endsWith('/search_pro') ? 'web_search_pro' : 'web_search_basic';
    const sourceRef = document.source.id;
    const assertion = `官方 API 概述在端点列表中列出 ${method} ${path}。`;
    return [{
      id: observed(`${operation}-${market}`, sourceRef, `api-endpoints/${path}`, assertion),
      endpoint_ref: observed(endpoint.id.value, sourceRef, `api-endpoints/${path}`, '该端点使用官方 API 服务根地址。'),
      protocol: observed(path.endsWith('/fetch') || path.includes('/tools/') ? 'kimi-tools' : 'openai', sourceRef, `api-endpoints/${path}`, assertion),
      method: observed(method, sourceRef, `api-endpoints/${path}`, assertion),
      path_template: observed(path, sourceRef, `api-endpoints/${path}`, assertion),
      operation_kind: observed(operation, sourceRef, `api-endpoints/${path}`, assertion),
      ...(documentation ? { documentation: observed(documentation, sourceRef, `api-endpoints/${path}`, '官方 API 概述链接到该端点的专用文档。') } : {}),
    }];
  });
}

interface ToolPriceRow {
  readonly operation_id: 'web_search_basic' | 'web_search_pro' | 'web_fetch';
  readonly amount: string;
  readonly source_ref: string;
  readonly locator: string;
  readonly condition_field: string;
}

function toolPricesFromDocument(document: CapturedDocument): ToolPriceRow[] {
  if (!/websearch-pricing$/.test(document.source.id)) return [];
  const text = visibleHtmlText(document.body);
  const rows: ToolPriceRow[] = [];
  const market = document.source.market === 'global' ? 'global' : 'cn';
  const patterns: readonly [ToolPriceRow['operation_id'], RegExp, string, string][] = market === 'global'
    ? [
      ['web_search_basic', /\$\s*(\d+(?:\.\d+)?)\s*per call for Web Search Basic/i, 'web-search-basic', 'response.search_results.non_empty'],
      ['web_search_pro', /\$\s*(\d+(?:\.\d+)?)\s*per call for Web Search Pro/i, 'web-search-pro', 'response.search_results.non_empty'],
      ['web_fetch', /URL Fetch Billing Logic[\s\S]{0,500}?\$\s*(\d+(?:\.\d+)?)\s*per call/i, 'web-fetch', 'response.markdown.non_empty'],
    ]
    : [
      ['web_search_basic', /联网搜索 Basic\s*￥\s*(\d+(?:\.\d+)?)\s*\/次/, '联网搜索 Basic / 联网搜索 Pro 计费逻辑', 'response.search_results.non_empty'],
      ['web_search_pro', /联网搜索 Pro\s*￥\s*(\d+(?:\.\d+)?)\s*\/次/, '联网搜索 Basic / 联网搜索 Pro 计费逻辑', 'response.search_results.non_empty'],
      ['web_fetch', /网页抓取计费逻辑[\s\S]{0,400}?￥\s*(\d+(?:\.\d+)?)\s*\/次/, '网页抓取计费逻辑', 'response.markdown.non_empty'],
    ];
  for (const [operation_id, pattern, locator, condition_field] of patterns) {
    const match = pattern.exec(text);
    if (match?.[1]) rows.push({ operation_id, amount: match[1], source_ref: document.source.id, locator, condition_field });
  }
  return rows;
}

function toolPriceFact(row: ToolPriceRow, operationId: string, market: string): PriceFact {
  const currency = market === 'global' ? 'USD' : 'CNY';
  const assertion = '官方独立工具定价按次收费，且仅在成功返回非空结果时计费。';
  const evidence = [{ source_ref: row.source_ref, locator: row.locator, assertion }];
  return {
    operation_ref: observed(operationId, row.source_ref, row.locator, '价格归属由官方按次计费条目与 API 概述中的端点对应。'),
    capability_ref: observed(row.operation_id === 'web_fetch' ? 'web-fetch' : 'web-search', row.source_ref, row.locator, assertion),
    currency: observed(currency, row.source_ref, row.locator, `官方${market === 'global' ? '国际' : '中国'}市场定价使用${currency}。`),
    unit: observed('per_request', row.source_ref, row.locator, '官方定价明确为每次调用。'),
    rules: observed([{
      rate_items: [{ metric: 'request', unit: 'per_request', quantity: 1, amount_decimal: row.amount }],
      conditions: [{ field: row.condition_field, operator: 'eq', value: true }],
      evidence,
    }], row.source_ref, row.locator, assertion),
  };
}

function openApiObjectSchema(document: CapturedDocument, schemaName: string): {
  readonly properties: readonly ParameterSpec[];
  readonly required: readonly string[];
} | undefined {
  const openApiStart = document.body.lastIndexOf('\nopenapi:');
  if (openApiStart < 0) return undefined;
  const lines = document.body.slice(openApiStart).split(/\r?\n/);
  const schemaIndex = lines.findIndex((line) => line === `    ${schemaName}:`);
  if (schemaIndex < 0) return undefined;
  let schemaEnd = lines.length;
  for (let index = schemaIndex + 1; index < lines.length; index++) {
    if (/^    [A-Z][A-Za-z0-9]*:\s*$/.test(lines[index] ?? '')) {
      schemaEnd = index;
      break;
    }
  }
  const schemaLines = lines.slice(schemaIndex + 1, schemaEnd);
  const requiredIndex = schemaLines.findIndex((line) => /^      required:\s*$/.test(line));
  const required = requiredIndex < 0 ? [] : schemaLines.slice(requiredIndex + 1)
    .map((line) => /^        - ([A-Za-z0-9_]+)\s*$/.exec(line)?.[1])
    .filter((name): name is string => Boolean(name));
  const propertiesIndex = schemaLines.findIndex((line) => /^      properties:\s*$/.test(line));
  if (propertiesIndex < 0) return undefined;
  const propertiesLines = schemaLines.slice(propertiesIndex + 1, requiredIndex < 0 ? schemaLines.length : requiredIndex);
  const fields: { name: string; lines: string[] }[] = [];
  for (const line of propertiesLines) {
    const field = /^        ([A-Za-z][A-Za-z0-9_]*):\s*$/.exec(line)?.[1];
    if (field) fields.push({ name: field, lines: [] });
    else fields.at(-1)?.lines.push(line);
  }
  const properties = fields.flatMap(({ name, lines: fieldLines }): ParameterSpec[] => {
    const typeText = /^          type:\s*(string|integer|number|boolean|object|array)\s*$/m.exec(fieldLines.join('\n'))?.[1];
    if (!typeText) return [];
    const type = typeText === 'integer' || typeText === 'number' || typeText === 'boolean' || typeText === 'object' || typeText === 'array' ? typeText : 'string';
    const minimum = /^          minimum:\s*(\d+(?:\.\d+)?)\s*$/m.exec(fieldLines.join('\n'))?.[1];
    const maximum = /^          maximum:\s*(\d+(?:\.\d+)?)\s*$/m.exec(fieldLines.join('\n'))?.[1];
    const defaultLine = /^          default:\s*(.+?)\s*$/m.exec(fieldLines.join('\n'))?.[1];
    const descriptionLine = /^          description:\s*(.*?)\s*$/m.exec(fieldLines.join('\n'))?.[1];
    const description = descriptionLine && descriptionLine !== '>-' && descriptionLine !== '>'
      ? descriptionLine.replace(/^['"]|['"]$/g, '')
      : undefined;
    return [{
      name,
      type,
      required: required.includes(name),
      route_mappings: [`/${name}`],
      evidence_refs: [document.source.id],
      ...(minimum ? { min: Number(minimum) } : {}),
      ...(maximum ? { max: Number(maximum) } : {}),
      ...(defaultLine && /^(?:true|false|-?\d+(?:\.\d+)?)$/.test(defaultLine) ? { default: JSON.parse(defaultLine) as unknown } : {}),
      ...(description ? { description } : {}),
    }];
  });
  return properties.length ? { properties, required } : undefined;
}

function toolOperationSchema(document: CapturedDocument, path: string): Pick<OperationFact, 'input' | 'output' | 'parameters'> {
  const isSearch = path.includes('/search');
  const request = openApiObjectSchema(document, isSearch ? 'ToolsSearchRequest' : 'ToolsFetchRequest');
  const response = openApiObjectSchema(document, isSearch ? 'ToolsSearchResponse' : 'ToolsFetchResponse');
  const sourceRef = document.source.id;
  const parameters = request?.properties.map((parameter) => ({
    ...parameter,
    required: request.required.includes(parameter.name),
    route_mappings: parameter.route_mappings?.map((mapping) => `/request${mapping}`),
  }));
  const outputFields = response?.properties.map(({ name }) => name);
  const inputParameter = parameters?.find(({ name }) => name === 'text_query' || name === 'url');
  return {
    ...(parameters?.length ? { parameters: observed(parameters, sourceRef, `openapi/components/schemas/${isSearch ? 'ToolsSearchRequest' : 'ToolsFetchRequest'}`, '请求参数从官方 OpenAPI 对象 Schema 逐字段提取。') } : {}),
    ...(inputParameter ? { input: observed([{
      name: inputParameter.name,
      kind: 'text',
      required: inputParameter.required,
      ...(inputParameter.description ? { description: inputParameter.description } : {}),
    }], sourceRef, `openapi/components/schemas/${isSearch ? 'ToolsSearchRequest/text_query' : 'ToolsFetchRequest/url'}`, '文本输入项及原文说明从官方 OpenAPI Request Schema 提取。') } : {}),
    ...(outputFields?.length ? { output: observed<readonly CapabilityOutput[]>([{ kind: 'structured', fields: outputFields }], sourceRef, `openapi/components/schemas/${isSearch ? 'ToolsSearchResponse' : 'ToolsFetchResponse'}`, '输出字段从官方 OpenAPI 响应对象 Schema 提取。') } : {}),
  };
}

function toolResponseContractReviewItems(documents: readonly CapturedDocument[]): ReviewItem[] {
  return documents.flatMap((document): ReviewItem[] => {
    const isSearch = document.source.id.endsWith('websearch-api');
    const isFetch = document.source.id.endsWith('webfetch-api');
    if (!isSearch && !isFetch) return [];
    const schemaName = isSearch ? 'ToolsSearchResponse' : 'ToolsFetchResponse';
    const response = openApiObjectSchema(document, schemaName);
    const emptyResultDescription = isSearch
      ? response?.properties.find(({ name }) => name === 'search_results')?.description
      : undefined;
    const errorResponse = openApiObjectSchema(document, 'ErrorResponse');
    const errorRequired = errorResponse?.required ?? [];
    const responseRequired = response?.required ?? [];
    const errorStatusCodes = [...new Set([...document.body.matchAll(/^\s*>?\s*\|\s*((?:4|5)\d{2})\s*\|/gmu)].map((match) => match[1]))].sort();
    const knownResponseFacts = [
      ...(emptyResultDescription ? [`search_results 语义：${emptyResultDescription}`] : []),
      ...(responseRequired.length ? [`响应必填字段：${responseRequired.join(', ')}`] : []),
      ...(errorRequired.length ? [`ErrorResponse 必填字段：${errorRequired.join(', ')}`] : []),
      ...(errorStatusCodes.length ? [`文档错误 HTTP 状态码：${errorStatusCodes.join(', ')}`] : []),
    ];
    const sourceRef = document.source.id;
    return [{
      id: `moonshot-tool-response-contract-${sourceRef}`,
      kind: 'unsupported_mapping',
      subject_ref: sourceRef,
      message: `${knownResponseFacts.length ? knownResponseFacts.join('；') + '。' : '官方响应 Schema 未能完整解析。'} 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。`,
      evidence: [{
        source_ref: sourceRef,
        locator: `openapi/components/schemas/${schemaName}`,
        assertion: knownResponseFacts.join('；') || '官方响应结构未能完整解析，保持响应语义待核对。',
      }],
    }];
  });
}

function openApiSchemaBlock(document: CapturedDocument, schemaName: string): string[] | undefined {
  const openApiStart = document.body.lastIndexOf('\nopenapi:');
  if (openApiStart < 0) return undefined;
  const lines = document.body.slice(openApiStart).split(/\r?\n/);
  const start = lines.findIndex((line) => line === `    ${schemaName}:`);
  if (start < 0) return undefined;
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index++) {
    if (/^    [A-Z][A-Za-z0-9]*:\s*$/.test(lines[index] ?? '')) {
      end = index;
      break;
    }
  }
  return lines.slice(start + 1, end);
}

function openApiModelRequestSchema(document: CapturedDocument, modelId: string): string | undefined {
  const openApiStart = document.body.lastIndexOf('\nopenapi:');
  if (openApiStart < 0) return undefined;
  const lines = document.body.slice(openApiStart).split(/\r?\n/);
  const names = lines.flatMap((line) => /^    ([A-Z][A-Za-z0-9]*Request):\s*$/.exec(line)?.[1] ?? []);
  return names.find((name) => {
    const block = openApiSchemaBlock(document, name)?.join('\n') ?? '';
    return /(?:^|\n)\s*model:\s*$/m.test(block)
      && (block.includes(`- ${modelId}`) || block.includes(`\`${modelId}\``));
  });
}

function openApiRequestParameters(
  document: CapturedDocument,
  schemaName: string | undefined,
  modelId: string,
  visited = new Set<string>(),
): ParameterSpec[] {
  if (!schemaName || visited.has(schemaName)) return [];
  visited.add(schemaName);
  const schemaLines = openApiSchemaBlock(document, schemaName);
  if (!schemaLines) return [];
  const inherited = schemaLines.flatMap((line) => {
    const ref = /^        - \$ref:\s*['"]?#\/components\/schemas\/([A-Za-z0-9_]+)['"]?\s*$/.exec(line)?.[1];
    return ref ? openApiRequestParameters(document, ref, modelId, visited) : [];
  });
  const directProperties = schemaLines.some((line) => /^      properties:\s*$/.test(line));
  const propertyIndents = directProperties ? new Set([6]) : new Set([10]);
  const properties = schemaLines.flatMap((line, lineIndex) => {
    const propertyIndent = /^(\s*)properties:\s*$/.exec(line)?.[1]?.length;
    if (propertyIndent === undefined || !propertyIndents.has(propertyIndent)) return [];
    const siblings: { name: string; lines: string[] }[] = [];
    for (let index = lineIndex + 1; index < schemaLines.length; index++) {
      const candidate = schemaLines[index] ?? '';
      if (candidate.trim() && (candidate.match(/^\s*/)?.[0].length ?? 0) <= propertyIndent) break;
      const field = new RegExp(`^\\s{${propertyIndent + 2}}([A-Za-z][A-Za-z0-9_]*):\\s*$`).exec(candidate)?.[1];
      if (field) siblings.push({ name: field, lines: [] });
      else siblings.at(-1)?.lines.push(candidate);
    }
    const required = new Set<string>();
    const requiredLine = schemaLines.findIndex((candidate) => new RegExp(`^\\s{${propertyIndent}}required:\\s*$`).test(candidate));
    if (requiredLine >= 0) {
      for (let index = requiredLine + 1; index < schemaLines.length; index++) {
        const candidate = schemaLines[index] ?? '';
        if (candidate.trim() && (candidate.match(/^\s*/)?.[0].length ?? 0) <= propertyIndent) break;
        const name = new RegExp(`^\\s{${propertyIndent + 2}}- ([A-Za-z][A-Za-z0-9_]*)\\s*$`).exec(candidate)?.[1];
        if (name) required.add(name);
      }
    }
    return siblings.flatMap(({ name, lines: fieldLines }) => {
      const text = fieldLines.join('\n');
      const fieldMetaIndent = propertyIndent + 4;
      const rawType = new RegExp(`^\\s{${fieldMetaIndent}}type:\\s*(string|integer|number|boolean|object|array)\\s*$`, 'm').exec(text)?.[1];
      if (!rawType) return [];
      const type: ParameterSpec['type'] = rawType === 'string' || rawType === 'integer' || rawType === 'number' || rawType === 'boolean' || rawType === 'object' || rawType === 'array' ? rawType : 'string';
      const enumIndent = new RegExp(`^\\s{${fieldMetaIndent}}enum:\\s*$`, 'm').test(text) ? fieldMetaIndent : undefined;
      const enumValues = enumIndent === undefined ? undefined : text.split(/\r?\n/).flatMap((enumCandidate) => {
        const value = new RegExp(`^\\s{${enumIndent + 2}}-\\s+(?:['\"]([^'\"]*)['\"]|([^\\s#]+))\\s*$`).exec(enumCandidate);
        const raw = value?.[1] ?? value?.[2];
        return raw && raw !== 'null' ? [raw] : [];
      });
      const minimum = new RegExp(`^\\s{${fieldMetaIndent}}minimum:\\s*(-?\\d+(?:\\.\\d+)?)\\s*$`, 'm').exec(text)?.[1];
      const maximum = new RegExp(`^\\s{${fieldMetaIndent}}maximum:\\s*(-?\\d+(?:\\.\\d+)?)\\s*$`, 'm').exec(text)?.[1];
      const defaultValue = new RegExp(`^\\s{${fieldMetaIndent}}default:\\s*(.*?)\\s*$`, 'm').exec(text)?.[1];
      const rawDescription = new RegExp(`^\\s{${fieldMetaIndent}}description:\\s*([^\\n]*)$`, 'm').exec(text)?.[1]?.trim();
      const description = rawDescription && !['>', '>-', '|', '|-'].includes(rawDescription)
        ? rawDescription.replace(/^['"]|['"]$/g, '')
        : undefined;
      return [{
        name,
        type,
        required: required.has(name),
        route_mappings: [`/${name}`],
        evidence_refs: [document.source.id],
        ...(name === 'model' ? { enum: [modelId] } : enumValues?.length ? { enum: enumValues } : {}),
        ...(minimum ? { min: Number(minimum) } : {}),
        ...(maximum ? { max: Number(maximum) } : {}),
        ...(defaultValue && /^(?:true|false|-?\d+(?:\.\d+)?)$/.test(defaultValue) ? { default: JSON.parse(defaultValue) as unknown } : {}),
        ...(description ? { description } : {}),
      } satisfies ParameterSpec];
    });
  });
  const merged = new Map<string, ParameterSpec>();
  for (const parameter of [...inherited, ...properties]) merged.set(parameter.name, parameter);
  return [...merged.values()];
}

function openApiRequestCapabilityInputs(document: CapturedDocument, schemaName: string | undefined): CapabilityInput[] {
  if (!schemaName) return [];
  const schemaLines = openApiSchemaBlock(document, schemaName);
  if (!schemaLines) return [];
  const propertyNames = new Set(schemaLines.flatMap((line) => /^\s{8}(messages|input):\s*$/.exec(line)?.[1] ?? []));
  const required = new Set<string>();
  for (let index = 0; index < schemaLines.length; index++) {
    const indent = /^(\s*)required:\s*$/.exec(schemaLines[index] ?? '')?.[1]?.length;
    if (indent !== 6 && indent !== 10) continue;
    for (let next = index + 1; next < schemaLines.length; next++) {
      const line = schemaLines[next] ?? '';
      if (line.trim() && (line.match(/^\s*/)?.[0].length ?? 0) <= indent) break;
      const field = new RegExp(`^\\s{${indent + 2}}- (messages|input)\\s*$`).exec(line)?.[1];
      if (field) required.add(field);
    }
  }
  return [...propertyNames].map((name) => ({
    name,
    kind: 'text',
    required: required.has(name),

  }));
}

function modelOperationSchema(
  document: CapturedDocument,
  route: ModelApiRouteConfig,
  modelId: string,
): Pick<OperationFact, 'input' | 'output' | 'parameters'> {
  const requestSchema = route.request_schema ?? openApiModelRequestSchema(document, modelId);
  const parameters = openApiRequestParameters(document, requestSchema, modelId);
  const inputs = openApiRequestCapabilityInputs(document, requestSchema);
  const inferredFromParameters = parameters
    .filter(({ name }) => ['messages', 'input'].includes(name))
    .map(({ name, required, description }) => ({ name, kind: 'text', required, description }));
  const resolvedCapabilityInputs = inputs.length ? inputs : inferredFromParameters;
  const response = openApiObjectSchema(document, route.response_schema);
  const outputFields = response?.properties.map(({ name }) => name);
  const supportsStreaming = parameters.some(({ name, type }) => name === 'stream' && type === 'boolean');
  return {
    ...(parameters.length ? {
      parameters: observed(parameters, document.source.id, `openapi/components/schemas/${requestSchema}`, '请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。'),
    } : {}),
    ...(resolvedCapabilityInputs.length ? {
      input: observed(resolvedCapabilityInputs, document.source.id, `openapi/components/schemas/${requestSchema}`, '输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。'),
    } : {}),
    ...(outputFields?.length ? {
      output: observed<readonly CapabilityOutput[]>([{
        kind: 'structured', fields: outputFields,
        ...(supportsStreaming ? { streaming: true } : {}),
      }], document.source.id, `openapi/components/schemas/${route.response_schema}`, supportsStreaming
        ? '响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。'
        : '响应为官方声明的结构化 JSON 对象；字段清单来自响应 Schema。'),
    } : {}),
  };
}

function capabilityFromToolRoutes(
  kind: 'web_search' | 'web_fetch',
  market: string,
  sourceRef: string,
  routes: readonly RouteFact[],
  prices: readonly ToolPriceRow[],
  apiDocuments: readonly CapturedDocument[],
): CapabilityFact | undefined {
  const prefix = kind === 'web_search' ? 'web_search_' : 'web_fetch';
  const selectedRoutes = routes.filter(({ id }) => id.value.startsWith(prefix));
  if (!selectedRoutes.length) return undefined;
  const operations: OperationFact[] = selectedRoutes.map((route) => {
    const documentId = `${market === 'global' ? 'moonshotai-global-' : 'moonshotai-'}${route.path_template.value.endsWith('/fetch') ? 'webfetch-api' : 'websearch-api'}`;
    const document = apiDocuments.find(({ source }) => source.id === documentId);
    return {
      id: route.id,
      kind: route.operation_kind,
      routes: [route],
      ...(document ? toolOperationSchema(document, route.path_template.value) : {}),
    };
  });
  const priceFacts = prices.flatMap((price) => {
    const operation = operations.find(({ id }) => id.value === `${price.operation_id}-${market}`);
    return operation ? [toolPriceFact(price, operation.id.value, market)] : [];
  });
  const assertion = `官方${market === 'global' ? '国际' : '中国'} API 概述列出该独立工具端点。`;
  return {
    id: observed(kind === 'web_search' ? 'web-search' : 'web-fetch', sourceRef, '#api-endpoints', assertion),
    kind: observed(kind, sourceRef, '#api-endpoints', '该工具有独立 REST 端点，不绑定 Canonical Model。'),
    operations,
    prices: priceFacts,
  };
}

function apiMentions(documents: readonly CapturedDocument[]): MoonshotCandidateFacts['api_document_mentions'] {
  return documents.filter(({ source }) => /(?:api-overview|api-list-models|chat-api|responses-api|messages-api|batch-api|websearch-api|webfetch-api|file-upload-api|batch-create-api)$/.test(source.id)).flatMap(({ source, body }) => {
    const evidence = body.split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => /(?:GET|POST)\s+`?\/v1\//i.test(line) || /https:\/\/api\.moonshot\.(?:cn|ai)\/v1/i.test(line))
      .slice(0, 30);
    return evidence.map((text) => ({ source_id: source.id, evidence: text }));
  });
}

export function factsFromDocuments(documents: readonly CapturedDocument[]): MoonshotCandidateFacts {
  const catalog = documents.find(({ source }) => source.id === 'moonshotai-model-catalog');
  const globalCatalog = documents.find(({ source }) => source.id === 'moonshotai-global-model-catalog');
  if (!catalog || !globalCatalog) throw new Error('Kimi 中国或国际模型目录未被采集');
  const parseCatalog = (document: CapturedDocument) => {
    const rows = markdownTables(document);
    const retiredHeading = /^##\s+(?:已下线模型|Deprecated Models)\s*$/im.exec(document.body);
    const currentHeading = retiredHeading?.index ?? -1;
    if (currentHeading < 0) throw new Error(`Kimi ${document.source.market} 模型目录结构变化：缺少下线模型分界`);
    const catalogRows = rows.filter((row) => row.headers.some((header) => /模型名称|model name/i.test(header)) && row.cells.length > 1);
    const current = uniqueModels(catalogRows.filter((row) => document.body.indexOf(row.text) < currentHeading), document.source.id, 'listed_current');
    const retired = uniqueModels(catalogRows.filter((row) => document.body.indexOf(row.text) >= currentHeading), document.source.id, 'listed_retired');
    if (current.length === 0 || retired.length === 0) throw new Error(`Kimi ${document.source.market} 目录解析为零：拒绝产出空候选`);
    return { current, retired };
  };
  const { current: currentModels, retired: retiredModels } = parseCatalog(catalog);
  const { current: globalCurrentModels, retired: globalRetiredModels } = parseCatalog(globalCatalog);
  const pricingDocuments = documents.filter(({ source }) => /pricing/.test(source.id));
  const pricingRows = [...new Map(pricingDocuments.flatMap((document) => [
    ...markdownTables(document),
    ...htmlPricingTables(document),
  ]).map((row) => [`${row.source_id}:${row.cells.join('\u0000')}`, row] as const)).values()];
  const pricingTextMentions = pricingDocuments.flatMap(({ source, body, metadata }) => {
    const text = metadata.content_type?.includes('html') ? visibleHtmlText(body) : body;
    return text.split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => /(?:￥|¥)\s*\d/.test(line) && /(?:次|百万|token|请求)/i.test(line) || /Batch API.{0,100}60%/.test(line))
      .map((evidence) => ({ source_id: source.id, evidence }));
  });
  const sourceCoverage = documents.map(({ source }) => ({
    source_id: source.id,
    captured: true,
    useful_price_rows: /pricing/.test(source.id) ? pricingRows.filter((row) => row.source_id === source.id).length : 0,
    ...(/chat-pricing|batch-pricing/.test(source.id) && !pricingRows.some((row) => row.source_id === source.id)
      ? { note: '官方定价页未取得可解析的定价表格；价格保持未披露。' }
      : {}),
  }));
  return {
    market: 'cn',
    current_models: currentModels,
    retired_models: retiredModels,
    global_current_models: globalCurrentModels,
    global_retired_models: globalRetiredModels,
    pricing_rows: pricingRows,
    pricing_text_mentions: pricingTextMentions,
    api_document_mentions: apiMentions(documents),
    source_coverage: sourceCoverage,
  };
}

export function toMoonshotIR(documents: readonly CapturedDocument[], current: MoonshotCandidateFacts) {
  const marketCatalogs = documents.filter(({ source }) => /(?:global-)?model-catalog$/.test(source.id));
  if (marketCatalogs.length !== 2 || !marketCatalogs.some(({ source }) => source.market === 'cn') || !marketCatalogs.some(({ source }) => source.market === 'global')) {
    throw new Error('Kimi IR 必须同时包含中国和国际模型目录来源');
  }
  const modelIdsBySource = Object.fromEntries(marketCatalogs.map(({ source }) => [
    source.id,
    [...new Set([
      ...current.current_models.filter(({ source_id }) => source_id === source.id).map(({ model_id }) => model_id),
      ...current.retired_models.filter(({ source_id }) => source_id === source.id).map(({ model_id }) => model_id),
      ...current.global_current_models.filter(({ source_id }) => source_id === source.id).map(({ model_id }) => model_id),
      ...current.global_retired_models.filter(({ source_id }) => source_id === source.id).map(({ model_id }) => model_id),
    ])],
  ]));
  const recordsBySource: Record<string, readonly unknown[]> = {};
  for (const source of documents.map(({ source }) => source.id)) {
    const models = [
      ...current.current_models, ...current.retired_models,
      ...current.global_current_models, ...current.global_retired_models,
    ].filter(({ source_id }) => source_id === source);
    const prices = current.pricing_rows.filter(({ source_id }) => source_id === source);
    const priceText = current.pricing_text_mentions.filter(({ source_id }) => source_id === source);
    const api = current.api_document_mentions.filter(({ source_id }) => source_id === source);
    recordsBySource[source] = [...models, ...prices, ...priceText, ...api];
  }
  const currentModelIdsByMarket = {
    cn: new Set(current.current_models.map(({ model_id }) => model_id)),
    global: new Set(current.global_current_models.map(({ model_id }) => model_id)),
  };
  const tokenPriceRows = current.pricing_rows.filter(({ source_id }) => /(?:global-)?chat-pricing$/.test(source_id));
  const unmappedTokenPriceRows = tokenPriceRows.filter((row) => {
    const market = row.source_id.includes('global-') ? 'global' : 'cn';
    const modelId = row.cells[0]?.trim();
    return !modelId || !currentModelIdsByMarket[market].has(modelId) || !tokenPriceFact(row, modelId);
  });
  const services: ServiceFacts[] = marketCatalogs.map(({ source }) => {
    const serviceId = source.market === 'global' ? 'global' : 'cn';
    const apiOverview = documents.find(({ source: candidate }) => candidate.id === `moonshotai${source.market === 'global' ? '-global' : ''}-api-overview`);
    const marketModels = source.market === 'global' ? current.global_current_models : current.current_models;
    const batchPricing = batchPricingEvidence(documents, source.market === 'global' ? 'global' : 'cn');
    const modelRoutesById = modelApiRoutes(documents, marketModels.map(({ model_id }) => model_id), serviceId);
    const pricingSourceId = `moonshotai-${source.market === 'global' ? 'global-' : ''}chat-pricing`;
    const offerings = marketModels.map(({ model_id, evidence }) => ({
      provider_model_id: observed(model_id, source.id, `model-catalog/${model_id}`, evidence),
      display_name: observed(model_id, source.id, `model-catalog/${model_id}`, '官方模型目录的「模型名称」列以该型号 ID 作为名称。'),
      service_id: observed(serviceId, source.id, `model-catalog/${model_id}`, `官方${source.market === 'global' ? '国际' : '中国'}区当前模型目录列出该型号。`),
      supply_observations: [{
        kind: 'listed_current' as const,
        evidence: [{ source_ref: source.id, locator: `model-catalog/${model_id}`, assertion: evidence }],
      }],
      operations: (() => {
        const routes = modelRoutesById.get(model_id) ?? [];
        const operations: OperationFact[] = routes.map((route) => {
          const config = MODEL_API_ROUTES.find(({ protocol }) => protocol === route.protocol.value)!;
          const sourceRef = route.id.evidence[0]!.source_ref;
          const document = documents.find(({ source }) => source.id === sourceRef)!;
          const operationId = config.protocol === 'chat-completions' ? 'text_generation' : `text_generation_${config.protocol}`;
          return {
            id: observed(operationId, sourceRef, `openapi/${config.documented_path}`, '按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。'),
            kind: observed('text_generation', sourceRef, `openapi/${config.documented_path}`, '官方协议操作用于生成文本响应。'),
            routes: [route],
            ...modelOperationSchema(document, config, model_id),
          };
        });
        if (batchPricing?.model_ids.includes(model_id)) operations.push(batchOperationFact(model_id, serviceId, batchPricing));
        return operations;
      })(),
      prices: current.pricing_rows
        .filter((row) => row.source_id === pricingSourceId && row.cells[0]?.trim() === model_id)
        .flatMap((row) => {
          const price = tokenPriceFact(row, model_id);
          if (!price) return [];
          const batch = batchPricing?.model_ids.includes(model_id)
            ? batchPriceFact(price, batchPricing.pricing_source_ref)
            : undefined;
          return [price, ...(batch ? [batch] : [])];
        }),
    }));
    const regionLabel = source.market === 'global' ? '国际市场' : '中国市场';
    const marketKey = source.market === 'global' ? 'global' : 'cn';
    const toolEndpoint = apiOverview ? toolsEndpointFromOverview(apiOverview) : undefined;
    const endpoints = [
      ...(apiOverview ? endpointsFromOverview(apiOverview) : []),
      ...(toolEndpoint ? [toolEndpoint] : []),
    ];
    const toolRoutes = apiOverview ? toolRoutesFromOverview(apiOverview) : [];
    const toolPrices = documents.flatMap(toolPricesFromDocument).filter(({ source_ref }) =>
      source_ref.includes(marketKey === 'global' ? 'global-' : 'moonshotai-')
        && (marketKey === 'global' ? source_ref.startsWith('moonshotai-global-') : !source_ref.startsWith('moonshotai-global-')),
    );
    const capabilities = [
      ...(apiOverview ? [capabilityFromToolRoutes('web_search', marketKey, apiOverview.source.id, toolRoutes, toolPrices, documents)].filter((fact): fact is CapabilityFact => fact !== undefined) : []),
      ...(apiOverview ? [capabilityFromToolRoutes('web_fetch', marketKey, apiOverview.source.id, toolRoutes, toolPrices, documents)].filter((fact): fact is CapabilityFact => fact !== undefined) : []),
    ];
    return {
      id: observed(serviceId, source.id, '#market', `型号目录来自${source.market === 'global' ? '国际' : '中国'}开放平台。`),
      name: observed(regionLabel, source.id, '#market', `按官方${regionLabel}模型目录的市场范围登记 Service 名称。`),
      endpoints,
      offerings: offerings,
      capabilities,
      plans: [],
    };
  });
  const currentModelsByCatalog: Readonly<Record<string, readonly ModelFact[]>> = {
    'moonshotai-model-catalog': current.current_models,
    'moonshotai-global-model-catalog': current.global_current_models,
  };
  const ordinaryApiDocuments = documents.filter(({ source }) => /(?:global-)?(?:chat|responses|messages)-api$/.test(source.id));
  const reviewItems: ReviewItem[] = [
    ...toolResponseContractReviewItems(documents),
    {
      id: 'moonshot-catalog-and-prices-not-mapped-to-service-facts',
      kind: 'unsupported_mapping',
      message: '当前目录已按市场映射为 listed_current Offering；协议文档中明确声明的模型级 Route 已按协议分别生成 Operation，直接类型请求参数、messages/input 输入项和结构化响应外层字段已提取。oneOf 联合类型、复杂嵌套消息/媒体结构、完整输出约束、工具响应必需性及错误边界仍在 Review。',
      evidence: [
        ...marketCatalogs.map(({ source }) => ({ source_ref: source.id, locator: 'current models', assertion: `市场=${source.market} 的官方当前目录支持 Offering 供应范围。` })),
        ...ordinaryApiDocuments.map(({ source }) => ({ source_ref: source.id, locator: 'OpenAPI request/response schemas', assertion: '该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。' })),
      ],
    },
    {
      id: 'moonshot-membership-plan-pricing-not-mapped',
      kind: 'unsupported_mapping',
      message: 'Batch 按官方支持型号、异步创建 API 和标准模型价格 60% 映射为独立批处理 Operation 定价；会员订阅计划仍需与 API 按量价格分别核对。',
      evidence: documents.filter(({ source }) => /batch-pricing$|batch-create-api$/.test(source.id)).map(({ source }) => ({ source_ref: source.id }))
        .concat(documents.some(({ source }) => /batch-pricing$|batch-create-api$/.test(source.id)) ? [] : documents.slice(0, 1).map(({ source }) => ({ source_ref: source.id, assertion: '当前登记来源没有单独的会员订阅计划价格资料；不将 API 按量或 Batch 价格当作订阅价格。' }))),
    },
    ...unmappedTokenPriceRows.map((row, index): ReviewItem => ({
      id: `moonshot-token-price-unparsed-${index + 1}`,
      kind: 'unparsed_fact',
      message: `官方 Token 价格行「${row.cells[0] ?? '未知型号'}」未能可靠归一；保留在来源观察中，不生成 PriceFact。`,
      evidence: [{ source_ref: row.source_id, locator: `pricing/${row.cells[0] ?? 'unknown'}`, assertion: row.text }],
    })),
  ];
  const ir = buildDocumentObservationIR({
    providerId: 'moonshotai',
    documents,
    modelIdsBySource,
    recordsBySource,
    coverageBySource: Object.fromEntries(documents.filter(({ source }) => /model-catalog$/.test(source.id) || /pricing/.test(source.id) || /(?:global-)?(?:api-overview|chat-api|responses-api|messages-api|batch-api|batch-create-api|websearch-api|webfetch-api)$/.test(source.id)).map(({ source }) => [
      source.id,
      { status: 'partial' as const, note: /(?:global-)?api-overview$/.test(source.id)
        ? '协议 Base URL 已映射为 Endpoint；独立工具 Route 来自 API 概述，普通模型 Route 由各协议文档分别限定模型范围。'
        : /(?:global-)?(?:chat|responses|messages)-api$/.test(source.id)
        ? '该协议文档中明确列出的模型 Route 已映射为独立 Operation；可表示的直接类型请求参数、messages/input 字段和响应外层字段已提取。oneOf 联合类型、复杂嵌套输入/输出约束、流式细节和错误边界仍待归一。'
        : /(?:global-)?batch-create-api$/.test(source.id)
        ? 'Batch 创建 Route、请求参数和异步返回字段已映射；查询、取消和文件生命周期流程仍需核对。'
        : /(?:global-)?batch-api$/.test(source.id)
        ? 'Batch 指南用于补充异步处理方式和输入文件要求；其余 Batch 生命周期细节仍需核对。'
        : /chat-pricing$/.test(source.id)
        ? '可精确匹配的按量 Token 价格已映射为 PriceFact；未识别行和其他计费类型仍在 Review。'
        : '型号、价格或服务线索已抽取；Batch 与独立工具价格尚未映射为领域 PriceFact。' },
    ])),
    collectionNotes: ['中国与国际市场的目录和定价分别保留，不跨市场合并。', '当前模型、历史模型、模型 API 与独立服务能力需要不同的领域映射。'],
    reviewItems,
  });
  return {
    ...ir,
    coverage: ir.coverage.map((record) => {
      const marketModels = currentModelsByCatalog[record.source_ref];
      if (marketModels) {
        return {
          ...record,
          status: 'complete' as const,
          record_count: marketModels.length,
          record_unit: 'unique current model IDs',
          note: '当前型号目录已完整解析并映射为 Offering；下线型号分区保留在文档观察中，不作为当前供应。',
        };
      }
      if (record.scope === 'pricing' && /(?:global-)?chat-pricing$/.test(record.source_ref)) {
        return {
          ...record,
          record_count: tokenPriceRows.filter((row) => row.source_id === record.source_ref && !unmappedTokenPriceRows.includes(row)).length,
          record_unit: 'recognized Token price rows',
        };
      }
      if (record.scope === 'pricing' && /(?:global-)?batch-pricing$/.test(record.source_ref)) {
        const market = record.market === 'global' ? 'global' : 'cn';
        const supported = batchPricingEvidence(documents, market)?.model_ids ?? [];
        return {
          ...record,
          record_count: supported.filter((modelId) => services.find(({ id }) => id.value === market)?.offerings
            .some(({ provider_model_id }) => provider_model_id.value === modelId)).length,
          record_unit: 'supported model IDs with Batch PriceFacts',
          note: '官方 Batch 支持型号和 60% 定价规则已映射；价格仅对同市场已解析的标准 Token 价格生成。',
        };
      }
      if (record.scope === 'api' && /(?:global-)?batch-create-api$/.test(record.source_ref)) {
        const serviceId = record.market === 'global' ? 'global' : 'cn';
        return {
          ...record,
          record_count: services.find(({ id }) => id.value === serviceId)?.offerings
            .flatMap(({ operations }) => operations)
            .filter(({ id }) => id.value === 'batch_inference').length ?? 0,
          record_unit: 'Batch Operation records',
          note: '创建 Batch Operation、Route、请求参数与异步任务返回字段已映射。',
        };
      }
      if (record.scope === 'pricing' && /(?:global-)?websearch-pricing$/.test(record.source_ref)) {
        const pricingDocument = documents.find(({ source }) => source.id === record.source_ref);
        return {
          ...record,
          record_count: pricingDocument ? toolPricesFromDocument(pricingDocument).length : 0,
          record_unit: 'independent tool price facts',
          note: '按次独立工具价格已映射；legacy 内建搜索计费未混入，成功但空响应不计费条件保留在价格规则中。',
        };
      }
      if (record.scope === 'api' && /(?:global-)?api-overview$/.test(record.source_ref)) {
        const serviceId = record.market === 'global' ? 'global' : 'cn';
        return {
          ...record,
          record_count: services.find(({ id }) => id.value === serviceId)?.endpoints.length ?? 0,
          record_unit: 'API Endpoint records',
        };
      }
      if (record.scope === 'api' && /(?:global-)?(?:chat|responses|messages)-api$/.test(record.source_ref)) {
        const serviceId = record.market === 'global' ? 'global' : 'cn';
        return {
          ...record,
          record_count: services.find(({ id }) => id.value === serviceId)?.offerings
            .flatMap(({ operations }) => operations.flatMap(({ routes }) => routes))
            .filter(({ id }) => id.evidence.some(({ source_ref }) => source_ref === record.source_ref)).length ?? 0,
          record_unit: 'Route records',
          note: '明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。',
        };
      }
      if (record.scope === 'api' && /(?:global-)?(?:websearch|webfetch)-api$/.test(record.source_ref)) {
        const serviceId = record.market === 'global' ? 'global' : 'cn';
        return {
          ...record,
          status: 'partial' as const,
          record_count: services.find(({ id }) => id.value === serviceId)?.capabilities
            .flatMap(({ operations }) => operations)
            .filter(({ routes }) => routes.some(({ path_template }) => record.source_ref.includes('webfetch')
              ? path_template.value.endsWith('/fetch')
              : path_template.value.includes('/search'))).length ?? 0,
          record_unit: 'independent Capability Operation records',
          note: '独立工具路由、官方请求参数/输入项和主要响应字段已映射；响应 requiredness、空结果语义与错误响应仍待逐项核对。',
        };
      }
      return record;
    }),
    services,
  };
}

function renderIRReview(candidate: CandidateEnvelope<import('../../ir/provider-collection.ts').ProviderCollectionIR>): string {
  return [
    '# Kimi 官方资料 IR 观察候选', '',
    `- IR 指纹：\`${candidate.candidate_hash}\``,
    `- 来源快照：${candidate.sources.length} 份`,
    `- 中国目录 ID：${candidate.current.document_observations.find(({ source_ref }) => source_ref === 'moonshotai-model-catalog')?.model_id_mentions.length ?? 0} 个`,
    `- 国际目录 ID：${candidate.current.document_observations.find(({ source_ref }) => source_ref === 'moonshotai-global-model-catalog')?.model_id_mentions.length ?? 0} 个`,
    '- 两市场当前目录已投影为 Offering；模型级 Chat Completions、Responses 与 Anthropic Messages Route 按官方支持范围映射。Batch 支持型号、创建 Route、请求参数、异步输出与 60% 价格已映射。联网搜索和网页抓取已映射为独立 Capability；普通模型请求参数与输入输出 Schema、工具响应语义/错误边界及会员计划仍需 Review。',
    '', '## 待人工核对', '', ...candidate.current.review_items.map(({ message }) => `- ${message}`),
    '', '## 来源快照', '', ...candidate.sources.map(({ source_id, request_url }) => `- \`${source_id}\`：${request_url}`), '',
  ].join('\n');
}

export async function collectMoonshotai(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, MOONSHOTAI_INGEST_SOURCES);
  const current = factsFromDocuments(documents);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'moonshotai',
    documents,
    current: toMoonshotIR(documents, current),
    modelCount: current.current_models.length,
    renderReview: renderIRReview,
  });
}

export function parseMoonshotModelCatalog(body: string): { current: string[]; retired: string[] } {
  const fakeSource: IngestSource = MOONSHOTAI_INGEST_SOURCES[0]!;
  const document: CapturedDocument = {
    source: fakeSource,
    metadata: { source_id: fakeSource.id, source_name: fakeSource.name, request_url: fakeSource.url, retrieved_at: '', http_status: 200, content_type: 'text/markdown', etag: null, last_modified: null, content_hash: '', byte_length: 0, collector_version: 'test', body_file: '' },
    body,
  };
  const rows = markdownTables(document).filter((row) => row.headers.some((header) => /模型名称/.test(header)) && row.cells.length > 1);
  const boundary = body.indexOf('## 已下线模型');
  if (boundary < 0) throw new Error('缺少已下线模型分界');
  return {
    current: uniqueModels(rows.filter((row) => body.indexOf(row.text) < boundary), fakeSource.id, 'listed_current').map(({ model_id }) => model_id),
    retired: uniqueModels(rows.filter((row) => body.indexOf(row.text) >= boundary), fakeSource.id, 'listed_retired').map(({ model_id }) => model_id),
  };
}

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectMoonshotai({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
