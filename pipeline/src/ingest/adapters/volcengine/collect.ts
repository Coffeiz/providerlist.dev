import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { buildDocumentObservationIR } from '../document-observation.ts';
import type { CapabilityInput, CapabilityOutput } from '@providerlist/schema/types';
import type { CapabilityFact, EvidenceRef, OperationFact, PriceFact, PriceRuleFact, ProviderCollectionIR, ReviewItem, ServiceFacts } from '../../ir/provider-collection.ts';
import { observed } from '../../ir/observed.ts';
import { VOLCENGINE_INGEST_SOURCES } from './sources.ts';

interface EvidenceLine {
  readonly section: string;
  readonly raw: string;
  readonly model_ids: readonly string[];
  readonly pricing_model?: string;
  readonly pricing_alias?: string;
  readonly columns?: readonly string[];
}

export interface VolcengineCandidateFacts {
  readonly model_catalog_evidence: readonly EvidenceLine[];
  readonly pricing_evidence: readonly EvidenceLine[];
  readonly api_evidence: readonly { readonly source_id: string; readonly lines: readonly string[] }[];
  readonly coding_plan_evidence: readonly { readonly source_id: string; readonly lines: readonly string[] }[];
  readonly current_model_api: 'not_called';
  readonly models_dev_entries: readonly string[];
}

const MODEL_ID = /\b(?:doubao[-/][A-Za-z0-9_.-]+|deepseek[-/][A-Za-z0-9_.-]+|kimi[-/][A-Za-z0-9_.-]+|glm[-/][A-Za-z0-9_.-]+|MiniMax[-/][A-Za-z0-9_.-]+|Qwen[-/][A-Za-z0-9_.-]+|seed(?:ance|ream|3d)[-_][A-Za-z0-9_.-]+|wan[0-9.]*[-/][A-Za-z0-9_.-]+|Hyper3d-[A-Za-z0-9_.-]+|Hitem3d-[A-Za-z0-9_.-]+|豆包[A-Za-z0-9_.-]*)\b/gi;

function parseEvidence(body: string): EvidenceLine[] {
  let section = '未识别章节';
  let currentPricingModel: string | undefined;
  let columns: string[] = [];
  let pricingModelColumn = -1;
  const rows: EvidenceLine[] = [];
  for (const raw of body.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').split(/\r?\n/)) {
    const line = raw.replace(/[\t ]+/g, ' ').trim();
    if (!line) continue;
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    if (heading) {
      section = heading[1]!.trim();
      currentPricingModel = undefined;
      columns = [];
      pricingModelColumn = -1;
    }
    if (line.includes('|')) {
      const cells = line.split('|').map((cell) => cell.trim().replace(/\\$/, '').trim());
      const headerModelColumn = cells.findIndex((cell) => /模型名称|模型 ID/.test(cell));
      if (headerModelColumn >= 0) {
        columns = cells;
        pricingModelColumn = headerModelColumn;
      }
      const pricingTable = columns.length > 0 && /模型名称|模型 ID/.test(columns.join(' '));
      if (pricingTable && !/^\|?\s*:?-{2,}/.test(line)) {
        const first = (cells[pricingModelColumn] ?? '').replace(/`/g, '').trim();
        const cellModelIds = [...new Set(first.match(MODEL_ID) ?? [])];
        if (cellModelIds.length) currentPricingModel = first;
        const continuation = /^(?:\^\^)?$/i.test(first);
        const rawModel = cellModelIds.length ? first : continuation ? currentPricingModel : undefined;
        const values = cells.some((cell, index) => index > 1 && /^(?:\\-|-|\d+(?:\.\d+)?)$/.test(cell));
        if (rawModel && values) {
          rows.push({
            section,
            raw: line,
            model_ids: cellModelIds.length ? cellModelIds : [...new Set(rawModel.match(MODEL_ID) ?? [])],
            pricing_model: rawModel,
            columns,
          });
          continue;
        }
      }
    }
    const modelIds = [...new Set(line.match(MODEL_ID) ?? [])];
    if (modelIds.length && (line.includes('|') || /价格|单价|token|模型|套餐/i.test(line))) {
      rows.push({ section, raw: line, model_ids: modelIds });
    }
  }
  return rows;
}

function readJsonString(body: string, keyIndex: number): string | undefined {
  const startQuote = body.indexOf('"', keyIndex);
  if (startQuote < 0) return undefined;
  let escaped = false;
  for (let end = startQuote + 1; end < body.length; end++) {
    const character = body[end];
    if (escaped) { escaped = false; continue; }
    if (character === '\\') { escaped = true; continue; }
    if (character === '"') {
      try { return JSON.parse(body.slice(startQuote, end + 1)) as string; } catch { return undefined; }
    }
  }
  return undefined;
}

function parseModelCatalog(document: CapturedDocument): EvidenceLine[] {
  // 方舟模型列表提供面向 AI 助手的 Markdown 正文。只把模型表格中
  // 明确链接到模型目录的链接文本作为 ID，避免把描述中的别名重复算成模型。
  let section = '未识别章节';
  const markdownRows: EvidenceLine[] = [];
  for (const raw of document.body.split(/\r?\n/)) {
    const line = raw.replace(/[\t ]+/g, ' ').trim();
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    if (heading) section = heading[1]!.trim();
    if (!line.includes('|')) continue;
    const modelLink = line.match(/\[([a-z0-9][a-z0-9._/-]*)\]\((https?:\/\/[^\s)]*\/model\/detail(?:\?[^\s)]*)?)\)/i);
    if (!modelLink) continue;
    const modelId = modelLink[1]!.trim();
    let pricingAlias: string | undefined;
    try {
      const url = new URL(modelLink[2]!);
      const queryAlias = url.searchParams.get('name') ?? url.searchParams.get('Id');
      if (queryAlias) pricingAlias = queryAlias;
    } catch { /* Invalid links are ignored for alias mapping; the visible model ID remains usable. */ }
    markdownRows.push({ section, raw: line, model_ids: [modelId], ...(pricingAlias ? { pricing_alias: pricingAlias } : {}) });
  }
  if (markdownRows.length > 0) return markdownRows;

  const docMarker = '"DocumentCode":"model-list"';
  const docIndex = document.body.indexOf(docMarker);
  if (docIndex < 0) return [];
  const contentKey = document.body.indexOf('"Content":', docIndex);
  if (contentKey < 0) return [];
  const serialized = readJsonString(document.body, contentKey + '"Content":'.length);
  if (!serialized) return [];
  let content: { data?: Record<string, { ops?: { insert?: unknown; attributes?: Record<string, string> }[] }> };
  try { content = JSON.parse(serialized) as typeof content; } catch { return []; }
  const entries: EvidenceLine[] = [];
  for (const zone of Object.values(content.data ?? {})) {
    for (const op of zone.ops ?? []) {
      if (typeof op.insert !== 'string' || !op.attributes?.hyperlink) continue;
      let href: string;
      try { href = (JSON.parse(op.attributes.hyperlink) as { href?: string }).href ?? ''; } catch { continue; }
      if (!/\/model\/detail(?:\?|$)/.test(href)) continue;
      const modelId = op.insert.trim();
      if (!modelId || !/[a-z0-9]/i.test(modelId)) continue;
      entries.push({ section: '官方模型列表', raw: modelId, model_ids: [modelId] });
    }
  }
  return [...new Map(entries.map((entry) => [entry.raw.toLowerCase(), entry])).values()];
}

function sectionBetween(body: string, start: string, end: string): string {
  const startIndex = body.indexOf(start);
  if (startIndex < 0) return '';
  const endIndex = body.indexOf(end, startIndex + start.length);
  return body.slice(startIndex + start.length, endIndex < 0 ? undefined : endIndex);
}

function jsonExampleAfter(body: string, heading: string): unknown {
  const startIndex = body.indexOf(heading);
  if (startIndex < 0) return undefined;
  const endIndex = body.indexOf('**选项：', startIndex + heading.length);
  const section = body.slice(startIndex + heading.length, endIndex < 0 ? undefined : endIndex);
  const match = section.match(/```(?:json)?\s*\n([\s\S]*?)```/i);
  if (!match) return undefined;
  try { return JSON.parse(match[1]!.trim()) as unknown; } catch { return undefined; }
}

function responseFieldPaths(value: unknown, path = ''): string[] {
  if (Array.isArray(value)) return value.flatMap((entry) => responseFieldPaths(entry, `${path}[]`));
  if (!value || typeof value !== 'object') return path ? [path] : [];
  return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) => {
    const childPath = path ? `${path}.${key}` : key;
    if (key === 'type' && typeof child === 'string' && /web_search_call|url_citation|output_text/.test(child)) {
      return [`${path}.type=${child}`];
    }
    return responseFieldPaths(child, childPath);
  });
}

function webSearchCapability(document: CapturedDocument | undefined): CapabilityFact | undefined {
  if (!document) return undefined;
  const body = document.body;
  const customSection = sectionBetween(body, '### 豆包搜索 Custom 版', '### 联网内容插件');
  const requestSamples = sectionBetween(customSection, '请求示例：', '返回示例：');
  const responseSamples = sectionBetween(customSection, '返回示例：', '**选项：联网内容插件**');
  if (!customSection || !requestSamples || !responseSamples) return undefined;

  const protocols = [
    { id: 'responses', heading: '**选项：Responses API（OpenAI Responses 协议）**', requestName: 'input', inputKind: 'structured' as const, outputHeading: '**选项：Responses API**' },
    { id: 'chat_completions', heading: '**选项：Chat API（OpenAI Chat Completions 协议）**', requestName: 'messages', inputKind: 'structured' as const, outputHeading: '**选项：Chat API**' },
    { id: 'messages', heading: '**选项：Messages API（Anthropic Messages 协议）**', requestName: 'messages', inputKind: 'structured' as const, outputHeading: '**选项：Messages API**' },
  ];
  const operations: OperationFact[] = protocols.flatMap((protocol) => {
    const requestSection = sectionBetween(requestSamples, protocol.heading, '**选项：');
    if (!requestSection || !new RegExp(`\\"${protocol.requestName}\\"\\s*:`).test(requestSection)) return [];
    const sample = jsonExampleAfter(responseSamples, protocol.outputHeading);
    const fields = [...new Set(responseFieldPaths(sample).filter((field) =>
      /web_search|action|query|queries|annotations|url_citation|url|title|content|page_age|tool_usage/.test(field),
    ))];
    const sourceRef = document.source.id;
    const locator = `#examples/${protocol.id}`;
    const inputs: CapabilityInput[] = [{ name: protocol.requestName, kind: protocol.inputKind, required: true }];
    const outputs: CapabilityOutput[] = fields.length ? [{ kind: 'structured', fields }] : [];
    const operation: OperationFact = {
      id: observed(protocol.id, sourceRef, locator, '接口协议由官方联网搜索工具请求示例中的标题确认。'),
      kind: observed('web_search', sourceRef, locator, '该请求示例将联网搜索作为 Provider 提供的 API 工具使用。'),
      routes: [],
      input: observed(inputs, sourceRef, `${locator}/request`, '输入项从对应官方 API 请求示例中的必需用户消息字段提取。'),
      ...(outputs.length ? { output: observed(outputs, sourceRef, `${locator}/response`, '输出字段从对应官方返回示例中的搜索调用与引用结构提取。') } : {}),
    };
    return [operation];
  });
  if (!operations.length) return undefined;
  return {
    id: observed('web_search', document.source.id, '#supported-tools', '官方文档将该能力登记为联网搜索工具。'),
    kind: observed('web_search', document.source.id, '#supported-tools', '官方文档将该能力登记为联网搜索工具。'),
    operations,
    links: observed({ documentation: document.source.url.replace(/\.md$/, '') }, document.source.id, '#supported-tools', '火山方舟联网搜索官方说明。'),
  };
}

function facts(documents: readonly CapturedDocument[]): VolcengineCandidateFacts {
  const catalog = documents.find(({ source }) => source.id === 'volcengine-model-list');
  const pricing = documents.find(({ source }) => source.id === 'volcengine-model-pricing');
  const webSearch = documents.find(({ source }) => source.id === 'volcengine-web-search');
  const apiDocs = documents.filter(({ source }) => [
    'volcengine-chat-api',
    'volcengine-create-model-responses-api',
    'volcengine-messages-api',
    'volcengine-web-search',
    'volcengine-responses-api-migration',
    'volcengine-integrate-third-party-tools',
  ].includes(source.id));
  const coding = documents.filter(({ source }) => source.scope === 'plan' || /volcengine-(coding|agent)-plan-faq/.test(source.id) || source.id === 'volcengine-model-pricing');
  if (!catalog || !pricing || coding.length !== 5 || apiDocs.length !== 6) throw new Error('火山方舟模型目录、价格、API 协议、Coding Plan 与 Agent Plan 官方来源必须完整采集');
  const catalogRows = parseModelCatalog(catalog);
  if (catalogRows.length === 0) throw new Error('火山方舟模型列表官方目录未解析到模型 ID');
  const rows = parseEvidence(pricing.body);
  if (rows.length < 10) throw new Error(`火山方舟价格页解析行数异常：${rows.length}`);
  if (!webSearch || !webSearchCapability(webSearch)) throw new Error('火山方舟联网搜索官方文档未解析到请求输入和响应示例');
  return {
    model_catalog_evidence: catalogRows,
    pricing_evidence: rows,
    api_evidence: apiDocs.map(({ source, body }) => ({
      source_id: source.id,
      lines: body.split(/\r?\n/).map((line) => line.replace(/[\t ]+/g, ' ').trim())
        .filter((line) => /https:\/\/ark\.cn-beijing\.volces\.com\/api|POST |兼容 (OpenAI|Anthropic)|Responses API|Messages API|web_search|支持的模型|支持的 API/i.test(line))
        .slice(0, 100),
    })),
    coding_plan_evidence: coding.map(({ source, body }) => ({
      source_id: source.id,
      lines: body.replace(/<[^>]+>/g, ' ').split(/\r?\n/).map((line) => line.replace(/[\t ]+/g, ' ').trim())
        .filter((line) => /套餐|模型|价格|额度|用量|倍率|Credits?|Base URL|不能用于 API 调用|不能以 API 调用/.test(line)).slice(0, 240),
    })),
    current_model_api: 'not_called',
    models_dev_entries: ['volcengine', 'volcengine-coding-plan'],
  };
}

function threeDPriceFacts(modelId: string, rows: readonly EvidenceLine[], sourceId: string): PriceFact[] {
  const aliases: Readonly<Record<string, string>> = {
    'doubao-seed3d-2-0-260328': 'doubao-seed3d-2.0',
    'hyper3d-gen2-260112': 'Hyper3d-Gen2',
    'hitem3d-2-0-251223': 'Hitem3d-2.0',
  };
  const alias = aliases[modelId.toLowerCase()];
  if (!alias) return [];
  const matches = rows.filter((row) => row.section === '3D 生成模型'
    && row.model_ids.some((id) => id.toLowerCase() === alias.toLowerCase()));
  const evidence = (row: EvidenceLine): EvidenceRef => ({
    source_ref: sourceId,
    locator: `pricing/3d/${alias}`,
    assertion: `火山方舟官方 3D 生成价格表列出 ${alias}：${row.raw}`,
  });
  const rules: PriceRuleFact[] = [];
  for (const row of matches) {
    const cells = row.raw.split('|').map((cell) => cell.trim());
    const amountCell = cells.find((cell, index) => index > 1 && /^\d+(?:\.\d+)?$/.test(cell));
    if (!amountCell) continue;
    const modelCell = cells.find((cell) => cell.toLowerCase() === alias.toLowerCase());
    const modeLabel = cells.find((cell) => /标准白模|标准纹理模型|高精白模|高精纹理模型|白模|带纹理模型/.test(cell));
    if (!modelCell && !modeLabel) continue;
    const mode = modeLabel && ({
      '标准白模': 'standard_white',
      '标准纹理模型': 'standard_textured',
      '高精白模': 'high_detail_white',
      '高精纹理模型': 'high_detail_textured',
      '白模': 'standard_white',
      '带纹理模型': 'textured',
    } as const)[modeLabel];
    rules.push({
      rate_items: [{ metric: 'generated_3d_asset', unit: 'per_request', quantity: 1, amount_decimal: amountCell }],
      ...(mode ? { conditions: [{ field: 'output_mode', value: mode }] } : {}),
      evidence: [evidence(row)],
    });
  }
  if (!rules.length) return [];
  return [{
    provider_model_id: { value: modelId, evidence: matches.map(evidence) },
    currency: { value: 'CNY', evidence: matches.map(evidence) },
    unit: { value: 'per_request', evidence: matches.map(evidence) },
    rules: { value: rules, evidence: matches.map(evidence) },
  }];
}

function tokenPriceFacts(modelId: string, aliases: readonly string[], rows: readonly EvidenceLine[], sourceId: string): PriceFact[] {
  const normalizedAliases = new Set(aliases.map((alias) => alias.trim().toLowerCase()));
  if (!normalizedAliases.size) return [];
  const matchingRows = rows.filter((row) => row.pricing_model && normalizedAliases.has(row.pricing_model.toLowerCase())
    && /在线推理|批量推理/i.test(row.section));
  const rules: PriceRuleFact[] = [];
  for (const row of matchingRows) {
    const cells = row.raw.split('|').map((cell) => cell.trim().replace(/\\$/, '').trim());
    const columns = row.columns ?? [];
    const rateItems: PriceRuleFact['rate_items'][number][] = [];
    for (let index = 1; index < columns.length; index += 1) {
      const header = columns[index]!.replace(/[\s（）()]/g, '').toLowerCase();
      const value = cells[index];
      if (value === undefined) continue;
      const audioInput = /输入.*(?<!非)音频/.test(header);
      const audioCache = /缓存命中.*(?<!非)音频/.test(header);
      const metric = audioInput ? 'input_audio' : audioCache ? 'cache_read_audio' : /缓存存储/.test(header) ? 'cache_storage'
        : /缓存命中/.test(header) ? 'cache_read'
          : /输入/.test(header) ? 'input'
            : /输出/.test(header) ? 'output' : undefined;
      if (!metric) continue;
      if (/^(?:\\-|-)$/i.test(value)) continue;
      const amount = value.replace(/[¥￥元,\s]/g, '');
      if (!/^\d+(?:\.\d+)?$/.test(amount)) continue;
      rateItems.push({
        metric,
        unit: metric === 'cache_storage' ? 'per_1m_tokens_per_hour' : 'per_1m_tokens',
        quantity: 1,
        amount_decimal: amount,
      });
    }
    if (!rateItems.length) continue;
    const conditionColumn = columns.findIndex((column) => /条件/.test(column));
    const periodLabel = conditionColumn >= 0 ? cells[conditionColumn] ?? '' : '';
    const conditions: NonNullable<PriceRuleFact['conditions']>[number][] = [];
    if (/空闲时段/.test(periodLabel)) conditions.push({ field: 'time_period', operator: 'eq', value: 'off_peak' });
    if (/高峰时段/.test(periodLabel)) conditions.push({ field: 'time_period', operator: 'eq', value: 'peak' });
    if (/低优/.test(row.section)) conditions.push({ field: 'service_tier', operator: 'eq', value: 'low_priority' });
    if (/低延迟/.test(row.section)) conditions.push({ field: 'service_tier', operator: 'eq', value: 'low_latency' });
    if (/批量推理/.test(row.section)) conditions.push({ field: 'request.mode', operator: 'eq', value: 'batch_inference' });
    rules.push({
      rate_items: rateItems,
      ...(conditions.length ? { conditions } : {}),
      evidence: [{
        source_ref: sourceId,
        locator: `pricing/${row.section}/${row.pricing_model}`,
        assertion: `火山方舟官方价格表“${row.section}”列出 ${row.pricing_model}：${row.raw}`,
      }],
    });
  }
  if (!rules.length) return [];
  const evidence = rules.flatMap(({ evidence: refs }) => refs);
  return [{
    provider_model_id: { value: modelId, evidence },
    currency: { value: 'CNY', evidence },
    unit: { value: 'per_1m_tokens', evidence },
    rules: { value: rules, evidence },
  }];
}

export function toVolcengineIR(documents: readonly CapturedDocument[], current: VolcengineCandidateFacts) {
  const catalog = documents.find(({ source }) => source.id === 'volcengine-model-list');
  const pricing = documents.find(({ source }) => source.id === 'volcengine-model-pricing');
  if (!catalog || !pricing) throw new Error('火山方舟 IR 缺少目录或价格来源');
  const ids = [...new Set(current.model_catalog_evidence.flatMap(({ model_ids }) => model_ids))];
  const reviewItems: ReviewItem[] = [
    {
      id: 'ark-catalog-needs-market-and-service-mapping',
      kind: 'unsupported_mapping',
      message: '火山方舟目录 ID、区域价格、其余 API 文档与套餐尚未完成逐 Service 的市场、Offering、Route 和计费规则映射；联网搜索输入输出已单独映射。',
      evidence: [
        { source_ref: catalog.source.id, assertion: `${ids.length} 个目录 Model ID 已由官方模型列表解析。` },
        { source_ref: pricing.source.id, assertion: `${current.pricing_evidence.length} 条官方价格行已按目录链接关联模型；已识别在线常规、低优先级和批量价格及峰谷时段。` },
      ],
    },
    {
      id: 'plans-not-payg-pricing',
      kind: 'unsupported_mapping',
      message: 'Coding Plan 与 Agent Plan 套餐和按量价格属于不同计费事实；当前仅保留套餐来源原文，不合并或折算为按量价格。',
      evidence: current.coding_plan_evidence.map(({ source_id }): EvidenceRef => ({ source_ref: source_id }))
        .concat(current.coding_plan_evidence.length ? [] : [{ source_ref: pricing.source.id, assertion: '本次定价来源中的套餐与按量价格边界仍需分别归一。' }]),
    },
  ];
  const ir = buildDocumentObservationIR({
    providerId: 'volcengine',
    documents,
    modelIdsBySource: { [catalog.source.id]: ids },
    recordsBySource: {
      [catalog.source.id]: current.model_catalog_evidence,
      [pricing.source.id]: current.pricing_evidence,
      ...Object.fromEntries(current.api_evidence.map(({ source_id, lines }) => [source_id, lines.map((line) => ({ api_evidence: line }))])),
      ...Object.fromEntries(current.coding_plan_evidence.map(({ source_id, lines }) => [source_id, lines.map((line) => ({ coding_plan_evidence: line }))])),
    },
    coverageBySource: {
      [catalog.source.id]: { status: 'partial', note: '模型目录 ID 已解析；Service 市场、当前账号可用性和 Offering 关联仍需核验。' },
      [pricing.source.id]: { status: 'partial', note: '价格相关行保留为文档观察，尚未归一币种、模型关联、计量单位和适用条件。' },
      ['volcengine-web-search']: { status: 'partial', note: '联网搜索官方示例中的请求输入与返回字段已映射；该来源不代表中国市场其他 Provider 能力的完整目录。' },
    },
    collectionNotes: ['方舟各市场、地域和 Coding Plan 作为不同服务/计费范围处理；不跨市场推断。'],
    reviewItems,
  });
  const modelSource = catalog.source.id;
  const priceSource = pricing.source.id;
  const offeringsById = new Map<string, ServiceFacts['offerings'][number]>();
  const pricingAliasesByModel = new Map<string, Set<string>>();
  for (const row of current.model_catalog_evidence) {
    for (const modelId of row.model_ids) {
      const aliases = pricingAliasesByModel.get(modelId) ?? new Set<string>();
      if (row.pricing_alias) aliases.add(row.pricing_alias);
      pricingAliasesByModel.set(modelId, aliases);
      const item = offeringsById.get(modelId);
      const evidence = { source_ref: modelSource, locator: '#model-list', assertion: `火山方舟官方当前模型目录列出精确模型 ID ${modelId}。` };
      if (item) {
        offeringsById.set(modelId, {
          ...item,
          supply_observations: [{ kind: 'listed_current', evidence: [...item.supply_observations[0]!.evidence, evidence] }],
        });
      } else {
        offeringsById.set(modelId, {
          provider_model_id: { value: modelId, evidence: [evidence] },
          display_name: { value: modelId, evidence: [evidence] },
          service_id: { value: 'cn', evidence: [{ source_ref: modelSource, locator: '#model-list', assertion: '该模型来自中国区火山方舟目录。' }] },
          supply_observations: [{ kind: 'listed_current', evidence: [evidence] }],
          operations: [],
          prices: threeDPriceFacts(modelId, current.pricing_evidence, pricing.source.id),
        });
      }
    }
  }
  for (const [modelId, offering] of offeringsById) {
    const tokenPrices = tokenPriceFacts(modelId, [...(pricingAliasesByModel.get(modelId) ?? [])], current.pricing_evidence, priceSource);
    if (tokenPrices.length) {
      offeringsById.set(modelId, { ...offering, prices: [...offering.prices, ...tokenPrices] });
    }
  }
  const offerings = [...offeringsById.values()];
  const priceFactCount = offerings.reduce((count, offering) => count + offering.prices.length, 0);
  const service: ServiceFacts = {
    id: { value: 'cn', evidence: [{ source_ref: modelSource, locator: '#model-list', assertion: '中国区模型目录属于火山方舟中国市场服务。' }] },
    name: { value: '中国区', evidence: [{ source_ref: modelSource, locator: '#model-list', assertion: '中国区模型目录归属火山方舟中国市场。' }] },
    endpoints: [],
    offerings,
    capabilities: [webSearchCapability(documents.find(({ source }) => source.id === 'volcengine-web-search')!)].filter((item): item is CapabilityFact => Boolean(item)),
    plans: [],
  };
  const coverage = ir.coverage.flatMap((record) => record.source_ref === modelSource
    ? { ...record, scope: 'model_catalog' as const, market: 'cn' as const, status: 'complete' as const, record_count: offerings.length, record_unit: 'unique current model IDs', note: '官方模型目录明确列出的模型 ID 已映射为中国区 listed_current Offering；这不表示账号已开通或 API 调用成功。' }
      : record.source_ref === priceSource
      ? { ...record, scope: 'pricing' as const, market: 'cn' as const, status: 'partial' as const, record_count: priceFactCount, record_unit: 'mapped PriceFact records', note: 'Token 在线常规、低优先级与批量价格已按官方价格表行映射，并保留峰谷时段、服务档位和计费模式；其他价格章节仍需映射或 Review。' }
      : record.source_ref === 'volcengine-web-search'
        ? [
            { ...record, status: 'partial' as const, note: '官方联网搜索文档已解析并映射输入、输出；该来源仍按文档范围记录。' },
            { ...record, scope: 'capability' as const, market: 'cn' as const, status: 'partial' as const, record_count: service.capabilities.length, record_unit: 'independent Capability records', note: '联网搜索请求输入项和响应字段从官方示例解析；保留同一市场其他未覆盖能力。' },
          ]
        : record);
  const mappedIR: ProviderCollectionIR = {
    ...ir,
    coverage,
    services: [service],
    review_items: [
      {
        id: 'ark-domain-mapping-incomplete',
        kind: 'incomplete_coverage',
        message: '中国区目录、Token 在线与批量价格、3D 价格及联网搜索输入输出已映射；其他价格、API Route、其余能力与套餐仍有待领域映射。',
        evidence: [
          { source_ref: modelSource, locator: '#model-list', assertion: `${offerings.length} 个精确模型 ID 已映射到中国市场 Service。` },
          { source_ref: priceSource, assertion: `${priceFactCount} 条 Token 与 3D PriceFact 已结构化；其他计价章节仍需逐类归一。` },
        ],
      },
      ...ir.review_items.filter(({ id }) => id !== 'ark-catalog-needs-market-and-service-mapping'),
    ],
  };
  return {
    ...mappedIR,
    profile: {
      name: { value: '火山方舟', evidence: [{ source_ref: catalog.source.id, locator: 'document header / SeoConfig.Title', assertion: '火山引擎官方模型列表页面以火山方舟标识产品。' }] },
      kind: { value: 'cloud_platform' as const, evidence: [{ source_ref: catalog.source.id, locator: 'volcengine.com documentation navigation', assertion: '官方文档站点与标题均标识火山引擎，产品由其云平台提供。' }] },
    },
  };
}

function renderIRReview(candidate: CandidateEnvelope<import('../../ir/provider-collection.ts').ProviderCollectionIR>): string {
  return [
    '# 火山方舟 IR 观察候选', '',
    `- IR 指纹：\`${candidate.candidate_hash}\``,
    `- 文档观察：${candidate.current.document_observations.length} 份；目录 Model ID 提及：${candidate.current.document_observations.find(({ source_ref }) => source_ref === 'volcengine-model-list')?.model_id_mentions.length ?? 0} 个`,
    '- 中国区目录供应、Token 在线常规/低优先级/批量价格（含峰谷时段）、3D PriceFact 和联网搜索请求输入/响应字段已映射；图片/向量价格、API Route、其他独立能力和 PlanFact 尚有待映射事实。',
    '', '## 待人工核对', '', ...candidate.current.review_items.map(({ message }) => `- ${message}`),
    '', '## 来源快照', '', ...candidate.sources.map(({ source_id, request_url }) => `- \`${source_id}\`：${request_url}`), '',
  ].join('\n');
}

export async function collectVolcengine(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, VOLCENGINE_INGEST_SOURCES);
  const current = facts(documents);
  const modelCount = new Set(current.model_catalog_evidence.flatMap(({ model_ids }) => model_ids)).size;
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'volcengine',
    documents,
    current: toVolcengineIR(documents, current),
    modelCount,
    renderReview: renderIRReview,
  });
}

export const volcengineParser = { facts, parseEvidence, parseModelCatalog, readJsonString, tokenPriceFacts, toVolcengineIR };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectVolcengine({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
