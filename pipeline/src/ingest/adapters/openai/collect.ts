import { collectOfficialProviderDocs } from '../official-provider-docs.ts';
import type { OfficialDocsCandidateFacts } from '../official-provider-docs.ts';
import type { CapturedDocument } from '../document-set.ts';
import { OPENAI_INGEST_SOURCES } from './sources.ts';
import type { CapabilityFact, Observed, PlanFact, ProviderCollectionIR } from '../../ir/provider-collection.ts';
import { readableDocumentationUrl } from '../../documentation-url.ts';
import { openAIPriceFactForModel } from './pricing.ts';
import type { CapabilityInput, CapabilityOutput, ParameterSpec } from '@providerlist/schema/types';

function decodeHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#36;|&#x24;|&dollar;/gi, '$')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractOpenAIModelCatalogRecords(documents: readonly CapturedDocument[]) {
  const document = documents.find(({ source }) => source.id === 'openai-models-all');
  if (!document || document.source.extraction !== 'html') return [];
  const records: { model_id: string; display_name: string; status: 'listed_current' | 'deprecated' | 'shut_down'; source_id: string }[] = [];
  const cardPattern = /<a\s+href="\/api\/docs\/models\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of document.body.matchAll(cardPattern)) {
    const modelId = decodeHtml(match[1] ?? '');
    const card = match[2] ?? '';
    const title = card.match(/<div class="font-semibold">([\s\S]*?)<\/div>/i)?.[1];
    if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(modelId) || !title) continue;
    const statusBadge = card.match(/<div class="rounded-full border border-default[^>]*>(Deprecated|Shut down)<\/div>/i)?.[1]?.toLowerCase();
    records.push({
      model_id: modelId,
      display_name: decodeHtml(title),
      status: statusBadge === 'shut down' ? 'shut_down' : statusBadge === 'deprecated' ? 'deprecated' : 'listed_current',
      source_id: document.source.id,
    });
  }
  return records;
}

function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}

function openAICodeInterpreterFact(document: CapturedDocument): CapabilityFact | undefined {
  if (!['"type": "code_interpreter"', '"input"', 'file_ids', 'code_interpreter_call', 'container_id'].every((token) => document.body.includes(token))) return undefined;
  const sourceRef = document.source.id;
  const locator = '#containers';
  const assertion = '官方 Code Interpreter 文档展示 Responses input、容器文件输入及代码执行结果。';
  const body = document.body;
  const parameters = [
    ...(body.includes('"type": "code_interpreter"') ? [{ name: 'tools[].type', type: 'string' as const, required: true, enum: ['code_interpreter'], route_mappings: ['body.tools[].type'] }] : []),
    ...(body.includes('"type": "auto"') ? [{ name: 'tools[].container.type', type: 'string' as const, required: false, enum: ['auto'], route_mappings: ['body.tools[].container.type'] }] : []),
    ...(body.includes('file_ids') ? [{ name: 'tools[].container.file_ids[]', type: 'array' as const, required: false, route_mappings: ['body.tools[].container.file_ids'] }] : []),
    ...(body.includes('memory_limit') ? [{ name: 'tools[].container.memory_limit', type: 'string' as const, required: false, enum: [...new Set([...body.matchAll(/\b(\d+g)\b/g)].map((match) => match[1]!))], default: '1g', route_mappings: ['body.tools[].container.memory_limit'] }] : []),
    ...(body.includes('network_policy') ? [{ name: 'tools[].container.network_policy', type: 'object' as const, required: false, route_mappings: ['body.tools[].container.network_policy'] }] : []),
    ...(body.includes('"disabled"') && body.includes('"allowlist"') ? [{ name: 'tools[].container.network_policy.type', type: 'string' as const, required: true, enum: [...new Set([...body.matchAll(/"(disabled|allowlist)"/g)].map((match) => match[1]!))], route_mappings: ['body.tools[].container.network_policy.type'] }] : []),
    ...(body.includes('allowed_domains') ? [{ name: 'tools[].container.network_policy.allowed_domains[]', type: 'string' as const, required: false, route_mappings: ['body.tools[].container.network_policy.allowed_domains'] }] : []),
    ...(body.includes('domain_secrets') ? [{ name: 'tools[].container.network_policy.domain_secrets[]', type: 'object' as const, required: false, route_mappings: ['body.tools[].container.network_policy.domain_secrets'] }] : []),
    ...(body.includes('allowed_callers') ? [{ name: 'tools[].allowed_callers[]', type: 'string' as const, required: false, enum: [...new Set([...body.matchAll(/"(direct|programmatic)"/g)].map((match) => match[1]!))], route_mappings: ['body.tools[].allowed_callers'] }] : []),
  ];
  return {
    id: observed('code-interpreter', sourceRef, locator, 'OpenAI Responses API 提供 Code Interpreter。'),
    kind: observed('code_execution', sourceRef, locator, 'Code Interpreter 是 Responses API 内置工具。'),
    links: observed({ documentation: document.source.url }, sourceRef, locator, '链接指向官方 Code Interpreter 文档。'),
    operations: [{
      id: observed('code-interpreter', sourceRef, locator, assertion),
      kind: observed('code_execution', sourceRef, locator, assertion),
      routes: [],
      input: observed([
        { name: 'input', kind: 'text', required: true },
      ], sourceRef, locator, '官方请求示例通过 Responses input 提交提示词。'),
      parameters: observed(parameters, sourceRef, locator, 'Parameter names and enumerated values are extracted from the captured official API guide.'),
      output: observed([{ kind: 'structured', fields: [
        'output[].type=code_interpreter_call', 'output[].container_id', 'output[].code', 'output[].outputs[]',
        'output[].status', 'output_text', 'container_file_citation.container_id', 'container_file_citation.file_id',
        'container_file_citation.filename',
      ] }], sourceRef, locator, '官方文档展示 code_interpreter_call、响应文本及生成文件的 container/file 引用。'),
    }],
  };
}

function openAIResponsesCapabilityFact(
  document: CapturedDocument,
  kind: 'web_search' | 'file_search' | 'image_generation',
  inputs: readonly CapabilityInput[],
  parameters: readonly ParameterSpec[],
  outputs: readonly CapabilityOutput[],
): CapabilityFact {
  const sourceRef = document.source.id;
  const url = readableDocumentationUrl(document.source.url) ?? document.source.url;
  const assertion = `OpenAI 官方 ${kind} 指南展示 Responses API 工具输入、参数和输出。`;
  return {
    id: observed(`${kind}-responses`, sourceRef, '#usage', assertion),
    kind: observed(kind, sourceRef, '#usage', assertion),
    links: observed({ documentation: url }, sourceRef, '#usage', '链接指向 OpenAI 官方工具指南。'),
    operations: [{
      id: observed(`${kind}-responses`, sourceRef, '#usage', assertion),
      kind: observed(kind, sourceRef, '#usage', assertion),
      routes: [{
        id: observed('responses', sourceRef, '#usage', '官方工具示例调用 Responses API。'),
        endpoint_ref: observed('openai-api', sourceRef, '#usage', '工具通过 OpenAI API Responses 端点调用。'),
        protocol: observed('responses', sourceRef, '#usage', '官方工具指南使用 Responses API。'),
        method: observed('POST', sourceRef, '#usage', 'Responses API 工具调用使用 POST。'),
        path_template: observed('/responses', sourceRef, '#usage', '官方示例使用 POST /v1/responses。'),
        operation_kind: observed(kind, sourceRef, '#usage', `Responses 工具类型为 ${kind}。`),
        callability: observed('documented_only', sourceRef, '#usage', '官方文档示例证明已记录调用方式，不代表本项目执行过实时 API 调用。'),
        documentation: observed(url, sourceRef, '#usage', 'Route 文档链接指向对应官方工具指南。'),
      }],
      input: observed(inputs, sourceRef, '#usage', '输入字段从官方 Responses 请求示例映射。'),
      parameters: observed(parameters, sourceRef, '#tool-options', '工具参数和值域从本轮捕获的官方指南中映射；未在来源中出现的字段不生成。'),
      output: observed(outputs, sourceRef, '#output', '输出字段从官方工具调用与 Responses 返回示例映射。'),
    }],
  };
}

function openAIWebSearchFact(document: CapturedDocument): CapabilityFact | undefined {
  const body = document.body;
  if (!body.includes('"type": "web_search"')) return undefined;
  const includeValues = [
    ...(body.includes('web_search_call.action.sources') ? ['web_search_call.action.sources'] : []),
    ...(body.includes('web_search_call.results') ? ['web_search_call.results'] : []),
  ];
  const parameters: ParameterSpec[] = [
    { name: 'tools[].type', type: 'string', required: true, enum: ['web_search'], route_mappings: ['/tools/*/type'] },
    ...(body.includes('search_context_size') ? [{ name: 'tools[].search_context_size', type: 'string' as const, required: false, enum: ['low', 'medium', 'high'], route_mappings: ['/tools/*/search_context_size'] }] : []),
    ...(body.includes('filters') ? [{ name: 'tools[].filters', type: 'object' as const, required: false, route_mappings: ['/tools/*/filters'] }] : []),
    ...(body.includes('allowed_domains') ? [{ name: 'tools[].filters.allowed_domains[]', type: 'string' as const, required: false, route_mappings: ['/tools/*/filters/allowed_domains/*'] }] : []),
    ...(body.includes('blocked_domains') ? [{ name: 'tools[].filters.blocked_domains[]', type: 'string' as const, required: false, route_mappings: ['/tools/*/filters/blocked_domains/*'] }] : []),
    ...(body.includes('user_location') ? [{ name: 'tools[].user_location', type: 'object' as const, required: false, route_mappings: ['/tools/*/user_location'] }] : []),
    ...(body.includes('external_web_access') ? [{ name: 'tools[].external_web_access', type: 'boolean' as const, required: false, route_mappings: ['/tools/*/external_web_access'] }] : []),
    ...(body.includes('search_content_types') ? [{ name: 'tools[].search_content_types[]', type: 'string' as const, required: false, enum: ['text', 'image'], route_mappings: ['/tools/*/search_content_types/*'] }] : []),
    ...(body.includes('image_settings') ? [{ name: 'tools[].image_settings', type: 'object' as const, required: false, route_mappings: ['/tools/*/image_settings'] }] : []),
    ...(body.includes('max_results') ? [{ name: 'tools[].image_settings.max_results', type: 'integer' as const, required: false, route_mappings: ['/tools/*/image_settings/max_results'] }] : []),
    ...(body.includes('caption') ? [{ name: 'tools[].image_settings.caption', type: 'boolean' as const, required: false, route_mappings: ['/tools/*/image_settings/caption'] }] : []),
    ...(includeValues.length ? [{ name: 'include[]', type: 'string' as const, required: false, enum: includeValues, route_mappings: ['/include/*'] }] : []),
  ];
  return openAIResponsesCapabilityFact(document, 'web_search', [
    { name: 'input', kind: 'text', required: true },
  ], parameters, [
    { kind: 'structured', fields: [
      'output[].type=web_search_call', 'output[].id', 'output[].status', 'output[].action.type', 'output[].action.query',
      'output[].action.sources[]', 'output[].results[]', 'output[].type=message', 'output[].content[].type=output_text',
      'output[].content[].text', 'output[].content[].annotations[].type=url_citation', 'output[].content[].annotations[].url',
      'output[].content[].annotations[].title', 'output[].content[].annotations[].start_index', 'output[].content[].annotations[].end_index',
    ] },
  ]);
}

function openAIFileSearchFact(document: CapturedDocument): CapabilityFact | undefined {
  const body = document.body;
  if (!body.includes('"type": "file_search"') || !body.includes('vector_store_ids')) return undefined;
  const parameters: ParameterSpec[] = [
    { name: 'tools[].type', type: 'string', required: true, enum: ['file_search'], route_mappings: ['/tools/*/type'] },
    { name: 'tools[].vector_store_ids[]', type: 'string', required: true, route_mappings: ['/tools/*/vector_store_ids/*'] },
    ...(body.includes('max_num_results') ? [{ name: 'tools[].max_num_results', type: 'integer' as const, required: false, route_mappings: ['/tools/*/max_num_results'] }] : []),
    ...(body.includes('filters') ? [{ name: 'tools[].filters', type: 'object' as const, required: false, route_mappings: ['/tools/*/filters'] }] : []),
    ...(body.includes('file_search_call.results') ? [{ name: 'include[]', type: 'string' as const, required: false, enum: ['file_search_call.results'], route_mappings: ['/include/*'] }] : []),
  ];
  return openAIResponsesCapabilityFact(document, 'file_search', [
    { name: 'input', kind: 'text', required: true },
  ], parameters, [
    { kind: 'structured', fields: [
      'output[].type=file_search_call', 'output[].id', 'output[].status', 'output[].queries[]', 'output[].search_results[]',
      'output[].type=message', 'output[].content[].type=output_text', 'output[].content[].text',
      'output[].content[].annotations[].type=file_citation', 'output[].content[].annotations[].file_id',
      'output[].content[].annotations[].filename', 'output[].content[].annotations[].index',
    ] },
  ]);
}

function openAIImageGenerationFact(document: CapturedDocument): CapabilityFact | undefined {
  const body = document.body;
  if (!body.includes('"type": "image_generation"') || !body.includes('image_generation_call')) return undefined;
  const parameters: ParameterSpec[] = [
    { name: 'tools[].type', type: 'string', required: true, enum: ['image_generation'], route_mappings: ['/tools/*/type'] },
    ...(body.includes('tools[].model') || body.includes('"model": "gpt-image-') ? [{ name: 'tools[].model', type: 'string' as const, required: true, route_mappings: ['/tools/*/model'] }] : []),
    ...(body.includes('action') ? [{ name: 'tools[].action', type: 'string' as const, required: false, enum: ['auto', 'generate', 'edit'], route_mappings: ['/tools/*/action'] }] : []),
    ...(body.includes('`size`') ? [{ name: 'tools[].size', type: 'string' as const, required: false, route_mappings: ['/tools/*/size'] }] : []),
    ...(body.includes('`quality`') ? [{ name: 'tools[].quality', type: 'string' as const, required: false, enum: ['auto', 'low', 'medium', 'high', 'xhigh', 'max'], route_mappings: ['/tools/*/quality'] }] : []),
    ...(body.includes('`background`') ? [{ name: 'tools[].background', type: 'string' as const, required: false, enum: ['auto', 'transparent', 'opaque'], route_mappings: ['/tools/*/background'] }] : []),
    ...(body.includes('output_format') ? [{ name: 'tools[].output_format', type: 'string' as const, required: false, enum: ['png', 'webp', 'jpeg'], route_mappings: ['/tools/*/output_format'] }] : []),
    ...(body.includes('output_compression') ? [{ name: 'tools[].output_compression', type: 'integer' as const, required: false, min: 0, max: 100, route_mappings: ['/tools/*/output_compression'] }] : []),
    ...(body.includes('partial_images') ? [{ name: 'tools[].partial_images', type: 'integer' as const, required: false, min: 0, max: 3, route_mappings: ['/tools/*/partial_images'] }] : []),
  ];
  return openAIResponsesCapabilityFact(document, 'image_generation', [
    { name: 'input', kind: 'text', required: true },
    ...(body.includes('input images') ? [{ name: 'image', kind: 'image' as const, required: false }] : []),
  ], parameters, [
    { kind: 'structured', fields: ['output[].type=image_generation_call', 'output[].id', 'output[].status', 'output[].result', 'output[].revised_prompt'] },
  ]);
}

function indexOpenAICapabilityFacts(
  facts: readonly { readonly sourceId: string | undefined; readonly fact: CapabilityFact | undefined }[],
): Map<string, CapabilityFact> {
  return new Map(facts.flatMap(({ sourceId, fact }) => sourceId && fact ? [[sourceId, fact] as const] : []));
}

function twelveMonthAmount(amount: string): string {
  const [wholePart, fractionPart = ''] = amount.split('.');
  const scale = 10n ** BigInt(fractionPart.length);
  const minorUnits = BigInt(`${wholePart}${fractionPart}`) * 12n;
  const whole = minorUnits / scale;
  const fraction = (minorUnits % scale).toString().padStart(fractionPart.length, '0').replace(/0+$/, '');
  return fraction ? `${whole}.${fraction}` : whole.toString();
}

export function extractChatGPTPlanFacts(documents: readonly CapturedDocument[]) {
  const pricePage = documents.find(({ source }) => source.id === 'openai-chatgpt-pricing');
  const reviewItems = [];
  if (!pricePage) return {
    plans: [],
    review_items: [{ id: 'openai-chatgpt-pricing-missing', kind: 'incomplete_coverage' as const, message: 'ChatGPT 官方定价页缺失，无法核对当前订阅套餐目录。', evidence: [] }],
    documents: [],
  };
  const cards = new Map<string, { attributes: Map<string, string>; content: string }>();
  for (const match of pricePage.body.matchAll(/<PricingCard\b([\s\S]*?)>([\s\S]*?)<\/PricingCard>/gi)) {
    const attributes = new Map([...((match[1] ?? '').matchAll(/([a-zA-Z][\w-]*)="([^"]*)"/g))].map((attribute) => [attribute[1]!, decodeHtml(attribute[2]!)]));
    const name = attributes.get('name');
    if (name) cards.set(name.toLowerCase(), { attributes, content: match[2] ?? '' });
  }
  reviewItems.push({
    id: 'openai-chatgpt-plan-scope-limited',
    kind: 'incomplete_coverage' as const,
    message: 'Learn 定价页说明的是 ChatGPT 与 Codex 方案权益，不承诺覆盖 ChatGPT 全部订阅目录；未出现在此页的已有套餐应保留并人工核对。',
    evidence: [{ source_ref: pricePage.source.id, locator: '#pricing-options', assertion: '页面明确标注 Codex pricing plans，并将 ChatGPT 功能描述为方案权益的一部分。' }],
  });
  const card = (name: string) => cards.get(name.toLowerCase());
  const cardAmount = (name: string) => card(name)?.attributes.get('price')?.match(/\$\s*([\d,.]+)/)?.[1]?.replace(/,/g, '');
  const facts: PlanFact[] = [];
  const handledCards = new Set<string>();
  const unknownPrice = (planId: string, locator: string) => {
    reviewItems.push({
      id: `openai-chatgpt-price-missing-${planId}`,
      kind: 'unparsed_fact' as const,
      subject_ref: `global/${planId}`,
      message: `官方来源列出 ${planId} 套餐，但采集器未能解析价格；价格保持未知。`,
      evidence: [{ source_ref: pricePage.source.id, locator, assertion: '需检查当前官方页面的价格文本结构。' }],
    });
  };
  const addPlan = (id: string, name: string, billingOptions: Observed<PlanFact['billing_options']['value']>, locator: string, description?: string) => {
    const officialPageUrl = pricePage.source.url.replace(/\.md(?=\?|$)/, '');
    facts.push({
      id: observed(id, pricePage.source.id, locator, `OpenAI ChatGPT 定价页列出 ${name} 套餐。`),
      name: observed(name, pricePage.source.id, locator, `官方套餐名称为 ${name}。`),
      billing_options: billingOptions,
      ...(description ? { description: observed(description, pricePage.source.id, locator, '套餐描述逐字采集自官方页面，保留来源语言。') } : {}),
      links: observed({ official: officialPageUrl }, pricePage.source.id, locator, '套餐详情链接指向 OpenAI 官方定价页。'),
    });
  };
  const simple = (id: string, name: string, label: string) => {
    const item = card(label);
    if (!item) return;
    handledCards.add(label.toLowerCase());
    const amount = cardAmount(label);
    const locator = `PricingCard:${label}`;
    if (amount === undefined) unknownPrice(id, locator);
    addPlan(id, name, observed([{ billing_period: 'month', ...(amount !== undefined ? { subscription_fee: { currency: 'USD', amount } } : {}) }], pricePage.source.id, locator, `官方定价页列出 ${name} 的美元月费。`), locator);
  };
  if (card('Free')) {
    handledCards.add('free');
    addPlan('chatgpt-free', 'Free', observed([{ billing_period: 'month', subscription_fee: { currency: 'USD', amount: cardAmount('Free') ?? '0' } }], pricePage.source.id, 'PricingCard:Free', '官方将 Free 列为免费套餐。'), 'PricingCard:Free');
  }
  simple('chatgpt-go', 'Go', 'Go');
  simple('chatgpt-plus', 'Plus', 'Plus');

  const pro = card('Pro');
  if (pro) {
    handledCards.add('pro');
    const tiers = [...decodeHtml(pro.content).matchAll(/\$\s*([\d,.]+)/g)].map((match) => match[1]!.replace(/,/g, ''));
    const amounts = [...new Set([cardAmount('Pro'), ...tiers].filter((amount): amount is string => Boolean(amount)))];
    for (const amount of amounts) addPlan(`chatgpt-pro-${amount}`, `Pro ${amount}`, observed([{ billing_period: 'month', subscription_fee: { currency: 'USD', amount } }], pricePage.source.id, 'PricingCard:Pro', `官方定价页列出 Pro $${amount} 美元月费。`), 'PricingCard:Pro');
    if (!amounts.length) unknownPrice('chatgpt-pro', 'PricingCard:Pro');
  }

  const business = card('Business');
  if (business) {
    handledCards.add('business');
    const annualPerMonth = cardAmount('Business');
    const monthly = business.attributes.get('footnoteLabel')?.match(/\$\s*([\d,.]+)\s+per\s+user\s+per\s+month\s+when\s+billed\s+monthly/i)?.[1]?.replace(/,/g, '');
    const billing = [
      { billing_period: 'month' as const, ...(monthly ? { subscription_fee: { currency: 'USD' as const, amount: monthly } } : {}) },
      { billing_period: 'year' as const, ...(annualPerMonth ? { subscription_fee: { currency: 'USD' as const, amount: twelveMonthAmount(annualPerMonth) } } : {}) },
    ];
    if (!monthly || !annualPerMonth) unknownPrice('chatgpt-business-standard', 'PricingCard:Business');
    addPlan('chatgpt-business-standard', 'Business', observed(billing, pricePage.source.id, 'PricingCard:Business', '官方列出 Business 每席位月付价与年付每月单价；年费按每月价格乘 12。'), 'PricingCard:Business');
  }

  const enterprise = card('Enterprise & Edu');
  if (enterprise) {
    handledCards.add('enterprise & edu');
    addPlan('chatgpt-enterprise', 'Enterprise & Edu', observed([{ billing_period: 'custom' }], pricePage.source.id, 'PricingCard:Enterprise & Edu', '官方列出 Enterprise & Edu 并引导联系销售，未公开固定价格。'), 'PricingCard:Enterprise & Edu');
  }

  const emittedIds = new Set(facts.map(({ id }) => id.value));
  for (const [normalizedName, item] of cards) {
    if (handledCards.has(normalizedName)) continue;
    const name = item.attributes.get('name')?.trim();
    if (!name) continue;
    const slug = name.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const id = `chatgpt-${slug}`;
    const locator = `PricingCard:${name}`;
    if (!slug || emittedIds.has(id)) {
      reviewItems.push({
        id: `openai-chatgpt-plan-row-conflict-${slug || 'unparsed'}`,
        kind: 'source_conflict' as const,
        subject_ref: `global/${id}`,
        message: `官方定价页套餐名称“${name}”与已有套餐标识冲突，未自动合并。`,
        evidence: [{ source_ref: pricePage.source.id, locator, assertion: '请核对该套餐是否与已有套餐为同一计划。' }],
      });
      continue;
    }
    emittedIds.add(id);
    const amount = item.attributes.get('price')?.match(/\$\s*([\d,.]+)/)?.[1]?.replaceAll(',', '');
    const intervalText = item.attributes.get('interval') ?? '';
    const billingPeriod: 'month' | 'year' | undefined = /year|annual/i.test(intervalText) ? 'year'
      : /month/i.test(intervalText) ? 'month' : undefined;
    const contactSales = /contact sales/i.test(item.attributes.get('ctaLabel') ?? '') || /contact sales/i.test(decodeHtml(item.content));
    const billing = billingPeriod && amount
      ? [{ billing_period: billingPeriod, subscription_fee: { currency: 'USD' as const, amount } }]
      : contactSales ? [{ billing_period: 'custom' as const }] : [];
    const description = decodeHtml(item.content).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!billing.length) {
      reviewItems.push({
        id: `openai-chatgpt-plan-row-unparsed-${slug}`,
        kind: 'unparsed_fact' as const,
        subject_ref: `global/${id}`,
        message: `官方定价页列出新套餐“${name}”，但无法从卡片字段确认计费周期或销售方式；暂未生成套餐价格记录。`,
        evidence: [{ source_ref: pricePage.source.id, locator, assertion: '套餐名称来自动态 PricingCard；需核对价格与周期字段。' }],
      });
      continue;
    }
    addPlan(id, name, observed(billing, pricePage.source.id, locator, `官方定价页套餐卡片列出 ${name} 的价格及计费周期。`), locator, description || undefined);
  }
  return { plans: facts, review_items: reviewItems, documents: [pricePage] };
}

/** 把 OpenAI 官方目录、API 入口和明确的 GPT-6 Astra 支持证据映射为 IR。 */
export function mapOpenAIProviderFacts(
  documents: readonly CapturedDocument[],
  facts: OfficialDocsCandidateFacts,
  documentObservationsIR: ProviderCollectionIR,
): ProviderCollectionIR {
  const catalog = documents.find(({ source }) => source.id === 'openai-models-all');
  const apiSource = documents.find(({ source }) => source.id === 'openai-models-list-api');
  const pricing = documents.find(({ source }) => source.id === 'openai-pricing');
  const webSearch = documents.find(({ source }) => source.id === 'openai-web-search');
  const fileSearch = documents.find(({ source }) => source.id === 'openai-file-search');
  const codeInterpreterDocument = documents.find(({ source }) => source.id === 'openai-code-interpreter');
  const codeInterpreterFact = codeInterpreterDocument ? openAICodeInterpreterFact(codeInterpreterDocument) : undefined;
  const webSearchFact = webSearch ? openAIWebSearchFact(webSearch) : undefined;
  const fileSearchFact = fileSearch ? openAIFileSearchFact(fileSearch) : undefined;
  const imageGenerationDocument = documents.find(({ source }) => source.id === 'openai-image-generation');
  const imageGenerationFact = imageGenerationDocument ? openAIImageGenerationFact(imageGenerationDocument) : undefined;
  const chatgptPlans = extractChatGPTPlanFacts(documents);
  if (!catalog || !apiSource || !pricing) {
    return {
      ...documentObservationsIR,
      review_items: [...documentObservationsIR.review_items, {
        id: 'openai-required-sources-missing',
        kind: 'incomplete_coverage',
        message: 'OpenAI 的目录、API 清单或定价来源缺失，不能生成领域事实 IR。',
        evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: '本轮采集缺少必需的 OpenAI 领域来源，以下来源用于定位覆盖缺口。' })),
      }],
    };
  }

  const models = (facts.model_catalog_records ?? []).filter(({ status }) => ['listed_current', 'deprecated', 'shut_down'].includes(status));
  const pricesByModel = new Map(models.map(({ model_id: modelId }) => [modelId, openAIPriceFactForModel(pricing.body, modelId, pricing.source.id)]));
  const pricedModelCount = [...pricesByModel.values()].filter((price) => price !== undefined).length;
  const offerings = models.map(({ model_id: modelId, display_name: displayName, status }) => {
    const statusAssertion = status === 'listed_current'
      ? 'OpenAI 完整模型目录将该模型列在当前目录中。'
      : status === 'shut_down'
        ? 'OpenAI 完整模型目录将该模型标记为 Shut down。'
        : 'OpenAI 完整模型目录将该模型标记为 Deprecated；此状态不自动等于已退役。';
    const price = openAIPriceFactForModel(pricing.body, modelId, pricing.source.id);
    return {
      provider_model_id: observed(modelId, catalog.source.id, '#' + modelId, statusAssertion),
      display_name: observed(displayName, catalog.source.id, '#' + modelId, '官方目录列出此展示名称。'),
      service_id: observed('global', catalog.source.id, '#' + modelId, '该型号来自 OpenAI 全球 API 目录。'),
      supply_observations: [{
        kind: status === 'listed_current' ? 'listed_current' as const : status === 'shut_down' ? 'listed_historical' as const : 'unknown' as const,
        evidence: [{ source_ref: catalog.source.id, locator: '#' + modelId, assertion: statusAssertion }],
      }],
      operations: [],
      prices: price ? [price] : [],
    };
  });

  const capabilityFactsBySource = indexOpenAICapabilityFacts([
    { sourceId: webSearch?.source.id, fact: webSearchFact },
    { sourceId: fileSearch?.source.id, fact: fileSearchFact },
    { sourceId: codeInterpreterDocument?.source.id, fact: codeInterpreterFact },
    { sourceId: imageGenerationDocument?.source.id, fact: imageGenerationFact },
  ]);

  const coverage = documentObservationsIR.coverage.map((record) => {
    if (record.source_ref === catalog.source.id) return { ...record, status: 'complete' as const, record_count: models.length, record_unit: 'unique model IDs', note: '完整目录卡片已解析为精确模型 ID、展示名与官方状态标签。' };
    if (record.scope === 'capability') {
      const capabilityFact = capabilityFactsBySource.get(record.source_ref);
      return capabilityFact
        ? { ...record, status: 'partial' as const, record_count: 1, record_unit: 'independent Capability records', note: '官方工具文档已映射为带输入、参数、输出和 Route 的 Capability 候选；逐模型支持范围不在此 Service Capability 中表达。' }
        : { ...record, status: 'not_parsed' as const, record_count: 0, record_unit: 'independent Capability records', note: '来源已捕获，但当前解析器未能确认并映射完整 Capability 字段。' };
    }
    if (record.source_ref === pricing.source.id && pricedModelCount > 0) return { ...record, status: 'partial' as const, record_count: pricedModelCount, record_unit: 'models with mapped price facts', note: `已从精确目录 ID 匹配并解析 ${pricedModelCount} 个型号的支持价格档位；未匹配型号、非 Token 价格及其他定价范围仍未映射。` };
    const chatgptPlanSource = chatgptPlans.documents.find(({ source }) => source.id === record.source_ref);
    if (chatgptPlanSource) {
      const recordCount = chatgptPlans.plans.filter((plan) => plan.id.evidence.some(({ source_ref }) => source_ref === record.source_ref)).length;
      return {
        ...record,
        status: 'partial' as const,
        record_count: recordCount,
        record_unit: 'PlanFact records',
        note: '来源覆盖 ChatGPT 与 Codex 套餐价格信息，但不保证列出 ChatGPT 全部套餐；未出现的既有套餐保留待核对。',
      };
    }
    return record;
  });
  // ADR 0019：Service 按账号市场划分，订阅套餐归入市场 Service，不另建同市场 Service。
  // ChatGPT 消费者订阅与 OpenAI API 的产品线差异由 Plan 层承载（links、description 与字段级证据），
  // 不通过复制 Service 表达——否则套餐会被误看成另一套 API 产品线。
  const service = {
    id: observed('global', catalog.source.id, '#models', 'OpenAI API 当前采集范围为全球账号市场。'),
    name: observed('国际市场', catalog.source.id, '#models', '适配器按来源登记的 global 市场建立 Service。'),
    endpoints: [{
      id: observed('openai-api', apiSource.source.id, '#base-url', 'OpenAI Models API 参考用于确认 API Host。'),
      base_url: observed('https://api.openai.com/v1', apiSource.source.id, '#base-url', '官方 Models API 示例的 Host 去除资源路径后为 API Base URL。'),
      api_region: observed('全球', apiSource.source.id, '#base-url', 'OpenAI API 使用全球 Host。'),
      documentation: observed(apiSource.source.url, apiSource.source.id, '#base-url', '来源为 OpenAI Models API 官方参考。'),
    }],
    offerings,
    capabilities: [...capabilityFactsBySource.values()],
    plans: chatgptPlans.plans,
  };
  const incompleteCatalogItems = documentObservationsIR.review_items.filter(({ message }) => !message.includes('公开模型目录完整性'));
  return {
    ...documentObservationsIR,
    coverage,
    profile: {
      name: observed('OpenAI', catalog.source.id, '#models', '来源为 OpenAI 官方 API 模型目录。'),
      aliases: observed(['OpenAI API'], catalog.source.id, '#models', '适配器来源登记将 Provider 标识为 OpenAI API。'),
      kind: observed('first_party' as const, catalog.source.id, '#models', '该官方 API 目录由 OpenAI 发布。'),
      docs: observed({ overview: 'https://developers.openai.com/api/docs/models' }, catalog.source.id, '#models', 'OpenAI API 官方模型文档。'),
    },
    services: [service],
    review_items: [
      ...incompleteCatalogItems,
      ...chatgptPlans.review_items,
      ...models.filter(({ status }) => status === 'deprecated').map(({ model_id: modelId }) => ({
        id: `openai-deprecated-${modelId}`,
        kind: 'unsupported_mapping' as const,
        subject_ref: `global/${modelId}`,
        message: '目录标记 Deprecated；保留未知供应观察，需确认是否仍作为当前 Offering 发布。',
        evidence: [{ source_ref: catalog.source.id, locator: `#${modelId}`, assertion: 'Deprecated' }],
      })),
    ],
  };
}

const CONFIG = {
  providerId: 'openai',
  displayName: 'OpenAI',
  sources: OPENAI_INGEST_SOURCES,
  modelIdPattern: /\b(?!gpt-[a-z0-9.-]+\.(?:md|png|webp|jpe?g|svg)\b)(?:gpt-[a-z0-9]+(?:[.-][a-z0-9]+)*|o[1-9](?:-[a-z0-9]+)*|text-embedding-[a-z0-9-]+|whisper-[a-z0-9-]+|dall-e-[a-z0-9-]+|sora-[a-z0-9-]+|omni-moderation(?:-latest)?|computer-use-preview)\b/gi,
  extractModelCatalogRecords: extractOpenAIModelCatalogRecords,
  mapToIR: mapOpenAIProviderFacts,
  knownLimitations: [
    'GET /v1/models 返回认证账号可见范围，不调用需 Key 的真实接口。',
    '公开模型文档混有 API、ChatGPT、预览/弃用与推荐模型范围；候选只记录文档 ID 提及，不能用它充当可调用全集。',
    '模型目录和价格按精确 Provider 模型 ID 记录；规范模型规格由维护者手工维护。',
  ],
} as const;

export function collectOpenAI(options: { readonly repoRoot: string }) {
  return collectOfficialProviderDocs(CONFIG, options);
}

export const openaiCollectorConfig = CONFIG;
