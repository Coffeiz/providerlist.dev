import { collectOfficialProviderDocs, type OfficialDocsCandidateFacts } from '../official-provider-docs.ts';
import type { CapturedDocument } from '../document-set.ts';
import { extractDocumentObservation, upsertCoverageRecord } from '../document-observation.ts';
import type { CapabilityFact, EvidenceRef, Observed, PlanFact, PriceFact, PriceRuleFact, ProviderCollectionIR } from '../../ir/provider-collection.ts';
import { ANTHROPIC_INGEST_SOURCES } from './sources.ts';

function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}

function htmlText(value: string): string {
  return value
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#36;|&#x24;|&dollar;/gi, '$').replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function planCopyFromSection(body: string, planName: string, copyClass: string): string | undefined {
  const plan = escapeRegExp(planName);
  const copy = escapeRegExp(copyClass);
  const match = new RegExp(
    `<h3[^>]*class="[^"]*planName[^"]*"[^>]*>\\s*${plan}\\s*</h3>[\\s\\S]{0,8000}?<p[^>]*class="[^"]*${copy}[^"]*"[^>]*>([\\s\\S]*?)<\\/p>`,
    'i',
  ).exec(body);
  return match?.[1] ? htmlText(match[1]) : undefined;
}

function teamSeatCopy(body: string, seatName: string): string | undefined {
  const seat = escapeRegExp(seatName);
  const match = new RegExp(
    `<p[^>]*class="[^"]*seatName[^"]*"[^>]*>\\s*${seat}\\s*</p>[\\s\\S]{0,1000}?<p[^>]*class="[^"]*seatDescription[^"]*"[^>]*>([\\s\\S]*?)<\\/p>`,
    'i',
  ).exec(body);
  return match?.[1] ? htmlText(match[1]) : undefined;
}

function amountNear(text: string, label: string, pattern: RegExp): string | undefined {
  for (const labelMatch of text.matchAll(new RegExp(label, 'gi'))) {
    if (labelMatch.index === undefined) continue;
    const match = pattern.exec(text.slice(labelMatch.index, labelMatch.index + 500));
    if (match?.[1]) return match[1].replaceAll(',', '');
  }
  return undefined;
}

function matchNear(text: string, label: string, pattern: RegExp): RegExpMatchArray | undefined {
  for (const labelMatch of text.matchAll(new RegExp(label, 'gi'))) {
    if (labelMatch.index === undefined) continue;
    const match = pattern.exec(text.slice(labelMatch.index, labelMatch.index + 500));
    if (match) return match;
  }
  return undefined;
}

function anthropicCodeExecutionFact(document: CapturedDocument): CapabilityFact | undefined {
  const versions = [...new Set(document.body.match(/code_execution_\d{8}/g) ?? [])];
  if (!versions.length || !['server_tool_use', 'bash_code_execution_tool_result', 'stdout', 'return_code'].every((token) => document.body.includes(token))) return undefined;
  const sourceRef = document.source.id;
  const locator = '#response-format';
  const assertion = '官方 Code execution 文档展示模型生成的子工具输入及其执行结果块。';
  return {
    id: observed('code-execution', sourceRef, locator, '官方 API 提供 Code execution 服务端工具。'),
    kind: observed('code_execution', sourceRef, locator, 'Anthropic Code execution 在 Messages API 内作为服务端工具调用。'),
    links: observed({ documentation: document.source.url }, sourceRef, locator, '链接指向官方 Code execution 工具说明。'),
    operations: [{
      id: observed('code-execution', sourceRef, locator, assertion),
      kind: observed('code_execution', sourceRef, locator, assertion),
      routes: [],
      parameters: observed([
        { name: 'tools[].type', type: 'string', required: true, enum: versions, route_mappings: ['body.tools[].type'] },
        ...(document.body.includes('allowed_callers') ? [{ name: 'tools[].allowed_callers[]', type: 'string' as const, required: false, enum: ['direct', ...versions], route_mappings: ['body.tools[].allowed_callers'] }] : []),
      ], sourceRef, '#tool-definition', 'Tool versions and optional caller settings are extracted from the captured official guide.'),
      input: observed([{ name: 'server_tool_use.input', kind: 'structured', required: true }], sourceRef, locator, 'Official server_tool_use examples include command, path, and file_text inputs.'),
      output: observed([{ kind: 'structured', fields: [
        'content[].type=server_tool_use', 'content[].name=bash_code_execution', 'content[].name=text_editor_code_execution',
        'content[].input.command', 'content[].input.path', 'content[].input.file_text',
        'content[].type=bash_code_execution_tool_result', 'content[].content.stdout', 'content[].content.stderr',
        'content[].content.return_code', 'content[].content.content[].file_id',
        'content[].type=text_editor_code_execution_tool_result', 'content[].content.content',
      ] }], sourceRef, locator, '官方响应示例列出 Bash 与文件操作结果字段及执行生成文件的 file_id。'),
    }],
  };
}

function anthropicToolSearchFact(document: CapturedDocument): CapabilityFact | undefined {
  const requiredMarkers = ['tool_search_tool_regex_20251119', 'tool_search_tool_bm25_20251119', '"pattern"', '"query"', '"limit"', '200 characters', '500 characters', '10,000', 'tool_search_tool_result', 'tool_references'];
  if (!requiredMarkers.every((marker) => document.body.toLowerCase().includes(marker.toLowerCase()))) return undefined;
  const sourceRef = document.source.id;
  const locator = '#understanding-the-response';
  const assertion = 'Anthropic Tool Search 文档展示 Regex 与 BM25 两种搜索变体及其响应结构。';
  return {
    id: observed('tool-search', sourceRef, locator, assertion),
    kind: observed('tool_search', sourceRef, locator, 'Anthropic Messages API 提供 Tool Search 服务端工具。'),
    links: observed({ documentation: document.source.url }, sourceRef, locator, '链接指向 Anthropic 官方 Tool Search 文档。'),
    operations: [{
      id: observed('tool-search', sourceRef, locator, assertion),
      kind: observed('tool_search', sourceRef, locator, assertion),
      routes: [],
      parameters: observed([
        {
          name: 'tools[].type', type: 'string', required: true,
          enum: ['tool_search_tool_regex_20251119', 'tool_search_tool_bm25_20251119'],
          route_mappings: ['body.tools[].type'],
        },
        {
          name: 'tools[].name', type: 'string', required: true,
          enum: ['tool_search_tool_regex', 'tool_search_tool_bm25'],
          route_mappings: ['body.tools[].name'],
        },
        {
          name: 'tools[].input.pattern', type: 'string', required: false, max: 200,
          route_mappings: ['body.tools[].input.pattern'],
        },
        {
          name: 'tools[].input.query', type: 'string', required: false, max: 500,
          route_mappings: ['body.tools[].input.query'],
        },
        {
          name: 'tools[].input.limit', type: 'integer', required: false, min: 1, max: 10000, default: 5,
          route_mappings: ['body.tools[].input.limit'],
        },
      ], sourceRef, '#tool-definition / #limits', '官方文档定义两个版本化变体、Regex/BM25 输入字段与长度限制，以及 limit 的范围和默认值。'),
      input: observed([{
        name: 'input', kind: 'structured', required: true,
      }], sourceRef, locator, '官方示例与说明分别列出 Regex pattern、BM25 query 和可选 limit。'),
      output: observed([{
        kind: 'structured',
        fields: [
          'content[].type=server_tool_use', 'content[].name=tool_search_tool_regex', 'content[].name=tool_search_tool_bm25',
          'content[].input.pattern', 'content[].input.query', 'content[].input.limit',
          'content[].type=tool_search_tool_result', 'content[].content.type=tool_search_tool_search_result',
          'content[].content.tool_references[].type=tool_reference', 'content[].content.tool_references[].tool_name',
        ],
      }], sourceRef, locator, '官方响应示例列出 server_tool_use 输入、tool_search_tool_result 和 tool_references。'),
    }],
  };
}

function collectAnthropicServiceCapabilities(documents: readonly CapturedDocument[], ir: ProviderCollectionIR) {
  const codeExecutionDocument = documents.find(({ source }) => source.id === 'anthropic-code-execution');
  const toolSearchDocument = documents.find(({ source }) => source.id === 'anthropic-tool-search');
  const codeExecutionFact = codeExecutionDocument ? anthropicCodeExecutionFact(codeExecutionDocument) : undefined;
  const toolSearchFact = toolSearchDocument ? anthropicToolSearchFact(toolSearchDocument) : undefined;
  const capabilities = [codeExecutionFact, toolSearchFact].filter((fact): fact is CapabilityFact => Boolean(fact));
  if (!toolSearchDocument) return { ir, capabilities };
  let result = upsertCoverageRecord(ir, {
    source_ref: toolSearchDocument.source.id, scope: 'capability', market: 'global',
    status: toolSearchFact ? 'complete' : 'not_parsed', record_count: toolSearchFact ? 1 : 0,
    record_unit: 'independent Capability records',
    note: toolSearchFact
      ? '已从 Tool Search 官方文档映射 Regex/BM25 输入和 tool_references 输出。'
      : 'Tool Search 官方文档缺少预期的变体或结果字段标记；不生成不完整 Capability。',
  });
  if (!toolSearchFact) result = {
    ...result,
    review_items: [...result.review_items, {
      id: 'anthropic-tool-search-io-not-parsed', kind: 'incomplete_coverage', subject_ref: 'global/tool_search',
      message: '未能从 Anthropic Tool Search 官方文档完整确认 Regex/BM25 输入和 tool_references 输出结构。',
      evidence: [{ source_ref: toolSearchDocument.source.id, locator: '#understanding-the-response', assertion: '文档未包含所有预期的 Tool Search 字段标记。' }],
    }],
  };
  return { ir: result, capabilities };
}

function twelveMonthAmount(amount: string): string {
  const [whole, fraction = ''] = amount.split('.');
  const scale = 10n ** BigInt(fraction.length);
  const total = BigInt(`${whole}${fraction}`) * 12n;
  const integer = total / scale;
  const decimal = (total % scale).toString().padStart(fraction.length, '0').replace(/0+$/, '');
  return decimal ? `${integer}.${decimal}` : integer.toString();
}

export function extractAnthropicPlans(documents: readonly CapturedDocument[]) {
  const pricing = documents.find(({ source }) => source.id === 'anthropic-consumer-pricing');
  const guide = documents.find(({ source }) => source.id === 'anthropic-consumer-plan-guide');
  const plans: PlanFact[] = [];
  const reviewItems: ProviderCollectionIR['review_items'][number][] = [];
  if (!pricing) return { plans, reviewItems, documents: [] as CapturedDocument[] };
  const text = htmlText(pricing.body);
  const guideText = guide ? htmlText(guide.body) : '';
  const usd = (amount: string) => ({ currency: 'USD' as const, amount });
  const add = (input: {
    id: string; name: string; locator: string; assertion: string; description?: string;
    billing: { billing_period: 'month' | 'year' | 'custom'; subscription_fee?: { currency: 'USD'; amount: string } }[];
    billingSource?: CapturedDocument; descriptionSource?: CapturedDocument;
  }) => {
    const billingSource = input.billingSource ?? pricing;
    const descriptionSource = input.descriptionSource ?? pricing;
    plans.push({
      id: observed(input.id, pricing.source.id, input.locator, input.assertion),
      name: observed(input.name, pricing.source.id, input.locator, `官方定价资料列出 ${input.name} 套餐。`),
      billing_options: observed(input.billing, billingSource.source.id, input.locator, input.assertion),
      ...(input.description ? {
        description: observed(input.description, descriptionSource.source.id, input.locator, '套餐描述逐字采集自官方页面，保留来源语言。'),
      } : {}),
      links: observed({ official: pricing.source.url }, pricing.source.id, input.locator, '套餐详情指向 Anthropic 官方定价页。'),
    });
  };
  const missingPrice = (id: string, locator: string, source: CapturedDocument) => reviewItems.push({
    id: `anthropic-plan-price-missing-${id}`, kind: 'unparsed_fact', subject_ref: `global/${id}`,
    message: `官方来源列出 ${id} 套餐，但采集器未能解析价格；金额保持未知并进入复核。`,
    evidence: [{ source_ref: source.source.id, locator, assertion: '需检查当前官方页面的价格文本结构。' }],
  });

  if (/\bFree\b[\s\S]{0,90}?\$\s*0\b/i.test(text)) {
    add({ id: 'claude-free', name: 'Free', locator: '#free', assertion: 'Claude 官方定价页将 Free 列为免费个人计划。', description: planCopyFromSection(pricing.body, 'Free', 'planSubtitle'), billing: [{ billing_period: 'month', subscription_fee: usd('0') }] });
  }
  const proMonthly = /\$(\d+(?:\.\d{1,2})?)\s*if billed monthly/i.exec(text)?.[1];
  const proAnnual = /\$(\d+(?:\.\d{1,2})?)\s*billed up front/i.exec(text)?.[1];
  if (/\bPro\b/i.test(text)) {
    if (!proMonthly || !proAnnual) missingPrice('claude-pro', '#pro', pricing);
    add({ id: 'claude-pro', name: 'Pro', locator: '#pro', assertion: 'Claude 官方定价页列出 Pro 月付和年付价格。', description: planCopyFromSection(pricing.body, 'Pro', 'planSubtitle'), billing: [
      { billing_period: 'month', ...(proMonthly ? { subscription_fee: usd(proMonthly) } : {}) },
      { billing_period: 'year', ...(proAnnual ? { subscription_fee: usd(proAnnual) } : {}) },
    ] });
  }
  const max5 = amountNear(guideText || text, 'Max\\s*5x', /\$\s*(\d+(?:\.\d{1,2})?)/);
  const max20 = amountNear(guideText || text, 'Max\\s*20x', /\$\s*(\d+(?:\.\d{1,2})?)/);
  for (const tier of [
    { id: 'claude-max-5x', name: 'Max 5x', amount: max5 },
    { id: 'claude-max-20x', name: 'Max 20x', amount: max20 },
  ]) {
    if (!tier.amount) missingPrice(tier.id, '#max-pricing-tiers', guide ?? pricing);
    add({ id: tier.id, name: tier.name, locator: '#max-pricing-tiers', assertion: `Claude 官方帮助中心列出 ${tier.name} 的美元月价。`, description: planCopyFromSection(pricing.body, 'Max', 'planSubtitle'), billing: [{ billing_period: 'month', ...(tier.amount ? { subscription_fee: usd(tier.amount) } : {}) }], billingSource: guide ?? pricing });
  }

  for (const seat of [
    { id: 'standard', name: 'Team Standard seat', label: 'Standard seat' },
    { id: 'premium', name: 'Team Premium seat', label: 'Premium seat' },
  ]) {
    const seatPrices = matchNear(text, seat.label, /\$(\d+(?:\.\d{1,2})?)\s*Per seat\s*\/\s*month if billed annually[\s\S]{0,100}?\$(\d+(?:\.\d{1,2})?)\s*if billed monthly/i);
    const annualPerMonth = seatPrices?.[1];
    const monthly = seatPrices?.[2];
    const annualTotal = annualPerMonth ? twelveMonthAmount(annualPerMonth) : undefined;
    if (!monthly || !annualTotal) missingPrice(`claude-team-${seat.id}`, '#team-seat-pricing', pricing);
    add({ id: `claude-team-${seat.id}`, name: seat.name, locator: '#team-seat-pricing', assertion: `Claude 官方定价页列出 ${seat.label} 月付与年付每席位单价；年付总额按官方月价乘 12。`, description: teamSeatCopy(pricing.body, seat.label), billing: [
      { billing_period: 'month', ...(monthly ? { subscription_fee: usd(monthly) } : {}) },
      { billing_period: 'year', ...(annualTotal ? { subscription_fee: usd(annualTotal) } : {}) },
    ] });
  }
  const enterpriseMonthly = /US\s*\$(\d+(?:\.\d{1,2})?)\s*\/\s*seat\s*\/\s*month,?\s*billed annually/i.exec(text)?.[1];
  if (/\bEnterprise\b/i.test(text)) {
    if (!enterpriseMonthly) missingPrice('claude-enterprise', '#enterprise-seat-pricing', pricing);
    add({ id: 'claude-enterprise', name: 'Enterprise', locator: '#enterprise-seat-pricing', assertion: 'Claude 官方定价页列出 Enterprise 套餐；仅在官方给出金额时记录价格。', description: planCopyFromSection(pricing.body, 'Enterprise', 'planSubtitle'), billing: enterpriseMonthly ? [{ billing_period: 'year', subscription_fee: usd(twelveMonthAmount(enterpriseMonthly)) }] : [] });
  }
  if (/Education plan/i.test(text)) {
    const educationCopy = /<h3[^>]*>\s*Education plan\s*<\/h3>[\s\S]{0,1500}?<p[^>]*class="[^"]*Callout-module[^\"]*body[^\"]*"[^>]*>([\s\S]*?)<\/p>/i.exec(pricing.body)?.[1];
    add({ id: 'claude-education', name: 'Education plan', locator: '#education-plan', assertion: 'Claude 官方定价页列出面向大学的 Education plan。', description: educationCopy ? htmlText(educationCopy) : undefined, billing: [{ billing_period: 'custom' }] });
  }
  if (/Enterprise \(sales-assisted\)/i.test(text)) {
    add({ id: 'claude-enterprise-sales-assisted', name: 'Enterprise (sales-assisted)', locator: '#enterprise-plans', assertion: 'Claude 官方套餐对比列出 Enterprise (sales-assisted) 并注明年付。', description: /<a[^>]*>\s*(Contact sales)\s*<\/a>/i.exec(pricing.body)?.[1], billing: [{ billing_period: 'year' }] });
  }
  return { plans, reviewItems, documents: [pricing, ...(guide ? [guide] : [])] };
}

export function extractAnthropicCurrentModels(documents: readonly CapturedDocument[]) {
  const document = documents.find(({ source }) => source.id === 'anthropic-models');
  if (!document) return [];
  const body = document.body;
  const start = body.indexOf('Compare models');
  const section = start < 0 ? body : body.slice(start, start + 40_000);
  const lines = section.split(/\r?\n/);
  const headerIndex = lines.findIndex((line) => /Claude API ID/.test(line) && /Model name/.test(line));
  if (headerIndex < 0) return [];
  const header = lines[headerIndex]!.split('|').map((value) => value.trim());
  const idIndex = header.findIndex((value) => /Claude API ID/.test(value));
  const nameIndex = header.findIndex((value) => /Model name/.test(value));
  return lines.slice(headerIndex + 2).flatMap((line) => {
    if (!line.trim().startsWith('|')) return [];
    const cells = line.split('|').map((value) => value.trim());
    const modelId = /^[\x60]([a-z0-9-]+)[\x60]$/.exec(cells[idIndex] ?? '')?.[1];
    const displayName = anthropicPriceDisplayName(cells[nameIndex] ?? '');
    if (!modelId || !/^claude-(?:opus|sonnet|haiku|fable|mythos)-\d+(?:-\d+)+(?:-[a-z0-9]+)?$/.test(modelId)) return [];
    return [{ model_id: modelId, display_name: displayName, source_id: document.source.id, locator: 'table[Claude API ID]' }];
  });
}

function anthropicPriceDisplayName(value: string): string {
  return value.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s*\([^)]*\)/g, '').trim();
}

function anthropicPriceModelFacts(
  document: CapturedDocument | undefined,
  models: ReturnType<typeof extractAnthropicCurrentModels>,
): { pricesByModelId: Map<string, PriceFact>; coverage?: ProviderCollectionIR['coverage'][number]; reviewItems: ProviderCollectionIR['review_items'][number][] } {
  if (!document) return { pricesByModelId: new Map(), reviewItems: [] };
  const table = extractDocumentObservation(document).tables.find(({ headers }) =>
    headers.includes('Model') && headers.includes('Base input tokens') && headers.includes('Output tokens'));
  if (!table) return {
    pricesByModelId: new Map(),
    coverage: { source_ref: document.source.id, scope: 'pricing', market: 'global', status: 'not_parsed', note: '未能解析官方模型 Token 定价表。' },
    reviewItems: [{
      id: 'anthropic-model-pricing-table-not-parsed', kind: 'incomplete_coverage',
      message: '官方 API 价格来源未识别出模型输入/输出 Token 定价表；价格保持未知。',
      evidence: [{ source_ref: document.source.id, locator: '#model-pricing', assertion: '需要检查官方价格表结构。' }],
    }],
  };
  const rateByHeader = new Map<string, { metric: string; ttl?: string }>([
    ['Base input tokens', { metric: 'input' }], ['5m cache writes', { metric: 'cache_write', ttl: '5min' }],
    ['1h cache writes', { metric: 'cache_write', ttl: '1h' }], ['Cache hits and refreshes', { metric: 'cache_read' }],
    ['Output tokens', { metric: 'output' }],
  ]);
  type CurrentModel = ReturnType<typeof extractAnthropicCurrentModels>[number];
  const byDisplayName = new Map<string, CurrentModel[]>();
  for (const model of models) byDisplayName.set(model.display_name, [...(byDisplayName.get(model.display_name) ?? []), model]);
  const rowsByModelId = new Map<string, { model: CurrentModel; rules: PriceRuleFact[]; evidence: EvidenceRef[] }>();
  const reviewItems: ProviderCollectionIR['review_items'][number][] = [];
  for (const row of table.rows) {
    const sourceLabel = row[0] ?? '';
    const displayName = anthropicPriceDisplayName(sourceLabel);
    const matches = byDisplayName.get(displayName) ?? [];
    if (matches.length !== 1) continue;
    const model = matches[0]!;
    const locator = `model-pricing/${displayName}`;
    const rates: { metric: string; ttl?: string; unit: 'per_1m_tokens'; quantity: 1; amount_decimal: string }[] = [];
    let malformed = false;
    for (let index = 0; index < table.headers.length; index++) {
      const rate = rateByHeader.get(table.headers[index] ?? '');
      if (!rate) continue;
      const match = /^\$\s*(\d+(?:\.\d+)?)\s*\/\s*MTok(?:\s*\d+)?$/i.exec((row[index] ?? '').trim());
      if (!match?.[1]) { malformed = true; break; }
      rates.push({ ...rate, unit: 'per_1m_tokens', quantity: 1, amount_decimal: match[1] });
    }
    if (malformed || rates.length !== rateByHeader.size) {
      reviewItems.push({
        id: `anthropic-model-price-unparsed-${model.model_id}`, kind: 'unparsed_fact', subject_ref: `global/${model.model_id}`,
        message: `官方价格表列出 ${displayName}，但至少一个 Token 费率无法解析；该模型价格不进入 IR。`,
        evidence: [{ source_ref: document.source.id, locator, assertion: sourceLabel }],
      });
      continue;
    }
    const tier = /prompts\s+(up to|over)\s+([\d,]+)\s+tokens/i.exec(sourceLabel);
    const threshold = tier?.[2]?.replaceAll(',', '');
    const when = tier && threshold ? { field: 'usage.input_tokens', operator: tier[1] === 'up to' ? 'lte' as const : 'gt' as const, value: Number(threshold) } : undefined;
    const evidence = [{ source_ref: document.source.id, locator, assertion: `官方模型定价表按显示名「${displayName}」列出该模型的完整 Token 费率。` }];
    const bucket = rowsByModelId.get(model.model_id) ?? { model, rules: [], evidence: [] };
    bucket.rules.push({ rate_items: rates, ...(when ? { when } : {}), evidence });
    bucket.evidence.push(...evidence);
    rowsByModelId.set(model.model_id, bucket);
  }
  const pricesByModelId = new Map<string, PriceFact>();
  for (const [modelId, bucket] of rowsByModelId) {
    const catalogEvidence = { source_ref: bucket.model.source_id, locator: bucket.model.locator, assertion: `官方当前模型目录将「${bucket.model.display_name}」映射至精确 API ID ${modelId}。` };
    pricesByModelId.set(modelId, {
      provider_model_id: { value: modelId, evidence: [...bucket.evidence, catalogEvidence] },
      currency: observed('USD', document.source.id, '#model-pricing', '官方 API 定价页声明所有价格使用 USD。'),
      unit: observed('per_1m_tokens', document.source.id, '#model-pricing', '官方价格表以每百万 Token（MTok）为单位。'),
      rules: { value: bucket.rules, evidence: bucket.evidence },
    });
  }
  const missingModels = models.filter(({ model_id }) => !pricesByModelId.has(model_id));
  for (const model of missingModels) reviewItems.push({
    id: `anthropic-model-price-missing-${model.model_id}`, kind: 'incomplete_coverage', subject_ref: `global/${model.model_id}`,
    message: `当前模型目录列出 ${model.display_name}，但官方模型价格表没有唯一可匹配的费率行；价格保持未知。`,
    evidence: [
      { source_ref: model.source_id, locator: model.locator, assertion: `官方当前目录列出 API ID ${model.model_id}。` },
      { source_ref: document.source.id, locator: '#model-pricing', assertion: '价格表按官方显示名精确匹配；未唯一匹配的型号不自动关联。' },
    ],
  });
  return {
    pricesByModelId,
    coverage: {
      source_ref: document.source.id, scope: 'pricing', market: 'global',
      status: models.length > 0 && missingModels.length === 0 && reviewItems.length === 0 ? 'complete' : 'partial',
      record_count: pricesByModelId.size,
      record_unit: 'models with mapped price facts',
      note: `按官方显示名精确匹配 ${pricesByModelId.size}/${models.length} 个当前模型；上下文分档作为独立价格条件保留，未匹配的非当前型号价格不挂到当前供应。`,
    },
    reviewItems,
  };
}

function addPlanCoverage(ir: ProviderCollectionIR, planFacts: ReturnType<typeof extractAnthropicPlans>): ProviderCollectionIR {
  return planFacts.documents.reduce((result, document) => {
    const recordCount = planFacts.plans.filter((plan) => plan.id.evidence.some(({ source_ref }) => source_ref === document.source.id)
      || plan.billing_options.evidence.some(({ source_ref }) => source_ref === document.source.id)).length;
    const hasParseIssues = planFacts.reviewItems.some((item) => item.evidence.some(({ source_ref }) => source_ref === document.source.id));
    return upsertCoverageRecord(result, {
      source_ref: document.source.id,
      scope: 'plan',
      market: 'global',
      status: hasParseIssues ? 'partial' : recordCount ? 'complete' : 'not_parsed',
      record_count: recordCount,
      record_unit: 'PlanFact records',
      note: hasParseIssues
        ? '已识别订阅计划，但部分价格字段未解析；未知金额进入复核。'
        : recordCount
          ? '已解析官方订阅计划及页面明确披露的计费信息。'
          : '来源已获取，但没有解析出套餐记录；需检查页面结构。',
    });
  }, ir);
}

function addAnthropicCatalogFacts(ir: ProviderCollectionIR, models: ReturnType<typeof extractAnthropicCurrentModels>): ProviderCollectionIR {
  const sourceId = 'anthropic-models';
  if (!ir.source_refs.includes(sourceId)) return ir;
  return upsertCoverageRecord(ir, {
    source_ref: sourceId,
    scope: 'model_catalog',
    market: 'global',
    status: models.length ? 'complete' : 'not_parsed',
    record_count: models.length,
    record_unit: 'unique current model IDs',
    note: models.length ? '已解析官方当前型号表的 Claude API ID。' : '未能解析当前型号表的 Claude API ID；不得推断当前供应。',
  });
}

function mapAnthropicProfile(documents: readonly CapturedDocument[]) {
  const models = documents.find(({ source }) => source.id === 'anthropic-models');
  const messages = documents.find(({ source }) => source.id === 'anthropic-messages-api');
  const pricing = documents.find(({ source }) => source.id === 'anthropic-pricing');
  if (!models && !messages) return undefined;
  const docs: Record<string, string> = {};
  const docsEvidence: EvidenceRef[] = [];
  if (models) {
    docs.overview = models.source.url;
    docsEvidence.push({ source_ref: models.source.id, locator: '#intro', assertion: '官方模型概览是 Anthropic API 模型文档入口。' });
  }
  if (messages) {
    docs.api = messages.source.url;
    docsEvidence.push({ source_ref: messages.source.id, locator: 'POST /v1/messages', assertion: '来源是 Anthropic 官方 API 文档。' });
  }
  if (pricing) {
    docs.pricing = pricing.source.url;
    docsEvidence.push({ source_ref: pricing.source.id, locator: '#pricing', assertion: '来源是 Anthropic 官方 API 定价文档。' });
  }
  return {
    ...(models ? {
      name: observed('Anthropic', models.source.id, '#intro', '官方模型概览说明 Claude 模型由 Anthropic 开发。'),
      aliases: observed(['Claude API'], models.source.id, 'table[Claude API ID]', '官方模型概览将 Claude 的平台模型标识称为 Claude API ID。'),
    } : {}),
    ...(messages ? {
      kind: observed('first_party' as const, messages.source.id, 'POST /v1/messages', 'Anthropic 官方 API 文档说明 Anthropic Messages API 的请求地址。'),
    } : {}),
    docs: { value: docs, evidence: docsEvidence },
  };
}

function mapAnthropicEndpoint(documents: readonly CapturedDocument[], ir: ProviderCollectionIR): ProviderCollectionIR {
  const document = documents.find(({ source }) => source.id === 'anthropic-messages-api');
  const planFacts = extractAnthropicPlans(documents);
  const catalogModels = extractAnthropicCurrentModels(documents);
  const apiPriceDocument = documents.find(({ source }) => source.id === 'anthropic-pricing');
  const modelPriceFacts = anthropicPriceModelFacts(apiPriceDocument, catalogModels);
  const withCatalogAndPlanCoverage = addAnthropicCatalogFacts(addPlanCoverage(ir, planFacts), catalogModels);
  const withFactsCoverage = modelPriceFacts.coverage
    ? upsertCoverageRecord(withCatalogAndPlanCoverage, modelPriceFacts.coverage)
    : withCatalogAndPlanCoverage;
  const serviceCapabilityResults = collectAnthropicServiceCapabilities(documents, withFactsCoverage);
  const serviceCapabilities = serviceCapabilityResults.capabilities;
  const profile = mapAnthropicProfile(documents);
  const withProfile = profile ? { ...serviceCapabilityResults.ir, profile: { ...serviceCapabilityResults.ir.profile, ...profile } } : serviceCapabilityResults.ir;
  const catalogSourceId = 'anthropic-models';
  const offerings = catalogModels.map((model) => ({
    provider_model_id: observed(model.model_id, catalogSourceId, model.locator, 'Anthropic 当前模型表列出此精确 Claude API ID。'),
    display_name: observed(model.display_name, catalogSourceId, model.locator, 'Anthropic 当前模型表列出此型号名称。'),
    service_id: observed('global', catalogSourceId, model.locator, 'Anthropic 模型文档登记为 Global 来源。'),
    supply_observations: [{ kind: 'listed_current' as const, evidence: [{ source_ref: catalogSourceId, locator: model.locator, assertion: 'Anthropic 当前模型表将此型号列于当前 lineup。' }] }],
    operations: [],
    prices: modelPriceFacts.pricesByModelId.has(model.model_id) ? [modelPriceFacts.pricesByModelId.get(model.model_id)!] : [],
  }));
  const urls = document ? [...document.body.matchAll(/https:\/\/api\.anthropic\.com\/v\d+\/messages\b/gi)].map(([url]) => url) : [];
  const baseUrl = urls.length ? new URL(urls[0]!).origin : undefined;
  const withApiCoverage = document ? upsertCoverageRecord(withProfile, {
    source_ref: document.source.id,
    scope: 'api',
    market: 'global',
    status: baseUrl ? 'partial' : 'not_parsed',
    record_count: baseUrl ? 1 : 0,
    record_unit: 'API Endpoint records',
    note: baseUrl
      ? 'The Messages API endpoint is mapped. Model-specific Route support is not inferred from the generic API reference.'
      : 'The Messages API source did not expose a parseable request URL; no endpoint was emitted.',
  }) : withProfile;
  const sourceRef = document?.source.id ?? catalogSourceId;
  const service = {
    id: observed('global', sourceRef, 'POST /v1/messages', 'Anthropic API 来源登记为 global 市场。'),
    name: observed('国际市场', sourceRef, 'POST /v1/messages', '适配器按来源登记的 global 市场建立 Service。'),
    endpoints: baseUrl && document ? [{
      id: observed('anthropic-api', document.source.id, 'POST /v1/messages', '官方 Messages API 文档给出该 Endpoint。'),
      base_url: observed(baseUrl, document.source.id, 'POST /v1/messages', '从官方 Messages API URL 提取 API Origin。'),
      api_region: observed('Global', document.source.id, 'POST /v1/messages', 'Anthropic API 使用全球 Host。'),
      documentation: observed(document.source.url, document.source.id, 'POST /v1/messages', '来源为 Anthropic 官方 Messages API 文档。'),
    }] : [],
    offerings,
    capabilities: serviceCapabilities,
    plans: planFacts.plans,
  };
  return {
    ...withApiCoverage,
    services: offerings.length || serviceCapabilities.length || planFacts.plans.length ? [service] : withApiCoverage.services,
    review_items: [...withApiCoverage.review_items, ...planFacts.reviewItems, ...modelPriceFacts.reviewItems],
  };
}

const CONFIG = {
  providerId: 'anthropic',
  displayName: 'Anthropic',
  sources: ANTHROPIC_INGEST_SOURCES,
  modelIdPattern: /\bclaude-(?:opus|sonnet|haiku|fable|mythos)-\d+(?:-\d+)+(?:-[a-z0-9]+)?\b/gi,
  knownLimitations: [
    'Models API 的实际返回按认证账号确定；只保存公开文档，不请求该端点。',
    '选型、价格和弃用页面可以覆盖不同模型范围，不据此自动生成当前 Offering 或退役事件。',
    '公开 API 定价页不代表 Claude 消费者订阅价格；订阅价格只从 claude.com/pricing 与 Anthropic 官方帮助中心独立采集。',
  ],
  mapToIR: (documents: readonly CapturedDocument[], _facts: OfficialDocsCandidateFacts, observationIR: ProviderCollectionIR) =>
    mapAnthropicEndpoint(documents, observationIR),
} as const;

export function collectAnthropic(options: { readonly repoRoot: string }) {
  return collectOfficialProviderDocs(CONFIG, options);
}

export const anthropicCollectorConfig = CONFIG;
export const anthropicParser = { mapAnthropicEndpoint };
