import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, latestSnapshotRetrievedAt, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { extractDocumentObservation } from '../document-observation.ts';
import type { Observed, PriceFact, PriceRuleFact, ProviderCollectionIR, ReviewItem, ServiceFacts } from '../../ir/provider-collection.ts';
import { XIAOMI_INGEST_SOURCES } from './sources.ts';

interface MiMoModel {
  readonly id: string;
  readonly name?: string;
}

export interface XiaomiCandidateFacts {
  /** API JSON directory response; a returned ID is not proof of active supply. */
  readonly api_catalog_models: readonly MiMoModel[];
  readonly source_id: string;
  readonly price_currency_and_unit: 'not_declared_in_catalog_payload';
  readonly market_scope: 'api_host_scope_requires_review';
  readonly models_dev_entries: readonly string[];
  readonly official_observations: readonly ReturnType<typeof extractDocumentObservation>[];
}

function parseModels(document: CapturedDocument): MiMoModel[] {
  const payload = JSON.parse(document.body) as { data?: unknown };
  if (!Array.isArray(payload.data)) throw new Error('小米 MiMo 模型 API 未返回 data 数组');
  const models = payload.data.map((item: unknown) => {
    if (!item || typeof item !== 'object' || !('id' in item) || typeof item.id !== 'string' || !item.id.trim()) {
      throw new Error('小米 MiMo API 目录响应含无效模型项');
    }
    const value = item as Record<string, unknown>;
    return {
      id: value.id as string,
      ...(typeof value.name === 'string' ? { name: value.name } : {}),
    };
  });
  if (!models.length) throw new Error('小米 MiMo API 目录响应为空，拒绝产出空候选');
  return models;
}

function facts(documents: readonly CapturedDocument[]): XiaomiCandidateFacts {
  const catalog = documents.find(({ source }) => source.id === 'xiaomi-api-models');
  if (!catalog) throw new Error('小米 MiMo API 目录响应未被采集');
  const apiCatalogModels = parseModels(catalog);
  return {
    api_catalog_models: apiCatalogModels,
    source_id: catalog.source.id,
    price_currency_and_unit: 'not_declared_in_catalog_payload',
    market_scope: 'api_host_scope_requires_review',
    models_dev_entries: ['xiaomi', 'xiaomi-token-plan-cn', 'xiaomi-token-plan-sgp', 'xiaomi-token-plan-ams'],
    official_observations: documents
      .filter((document) => document.source.id !== catalog.source.id)
      .map(extractDocumentObservation),
  };
}

function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}

function decimalPrice(value: string | undefined): { currency: 'CNY' | 'USD'; amount: string } | undefined {
  if (!value) return undefined;
  const currency = value.includes('¥') || value.includes('￥') ? 'CNY' : value.includes('$') ? 'USD' : undefined;
  const amount = value.replace(/[¥￥$\s,]/g, '');
  return currency && /^\d+(?:\.\d+)?$/.test(amount) ? { currency, amount } : undefined;
}

function pricingServices(documents: readonly CapturedDocument[], current: XiaomiCandidateFacts) {
  const source = documents.find(({ source }) => source.id === 'xiaomi-api-pricing');
  if (!source) return { services: [] as ServiceFacts[], mappedRows: 0, reviewItems: [] as ReviewItem[] };
  const observation = extractDocumentObservation(source);
  const catalogIds = new Set(current.api_catalog_models.map(({ id }) => id.split('/').at(-1) ?? id));
  const catalogModels = new Map(current.api_catalog_models.map((model) => [model.id.split('/').at(-1) ?? model.id, model]));
  const marketFacts = [
    { market: 'cn' as const, currency: 'CNY' as const, name: '中国区' },
    { market: 'global' as const, currency: 'USD' as const, name: '国际区' },
  ];
  let mappedRows = 0;
  const reviewItems: ReviewItem[] = [];
  const services = marketFacts.map(({ market, currency, name }): ServiceFacts => {
    const pricesByModel = new Map<string, PriceRuleFact[]>();
    const locators = new Map<string, string[]>();
    for (const [tableIndex, table] of observation.tables.entries()) {
      const modelColumn = table.headers.findIndex((header) => /模型名称/.test(header));
      const audioColumn = table.headers.findIndex((header) => /输入音频时长/.test(header));
      if (modelColumn < 0) continue;
      let mode: 'realtime' | 'batch' = 'realtime';
      for (const [rowIndex, row] of table.rows.entries()) {
        // The official HTML uses rowspans for inference type and model headings.
        // The generic table extractor cannot expand rowspans, so detect exact IDs
        // in the row and read the following cells instead of trusting column offsets.
        const actualModelColumn = row.findIndex((cell) => /^mimo-[a-z0-9.-]+$/i.test(cell.trim()));
        const modelId = actualModelColumn >= 0 ? row[actualModelColumn]?.trim() : undefined;
        if (!modelId) continue;
        const amounts = [row[actualModelColumn + 1], row[actualModelColumn + 2], row[actualModelColumn + 3]].map(decimalPrice);
        if (audioColumn >= 0) {
          const match = row[actualModelColumn + 1]?.match(/([¥￥$])\s*(\d+(?:\.\d+)?)\s*\/\s*小时/);
          const amount = match ? decimalPrice(`${match[1]}${match[2]}`) : undefined;
          if (amount?.currency !== currency) continue;
          if (!catalogIds.has(modelId)) {
            reviewItems.push({ id: `pricing-model-not-in-catalog-${market}-${modelId}`, kind: 'ambiguous_identity', subject_ref: `${market}/${modelId}`, message: `官方價格表列出 ${modelId}，但 API 目录未包含该精确 ID；保留观察，不创建 Offering。`, evidence: [{ source_ref: source.source.id, locator: `table[${tableIndex + 1}]/row[${rowIndex + 1}]`, assertion: 'ASR 价格表列出模型 ID 和按小时价格。' }, { source_ref: current.source_id, locator: `/data[id=${modelId}]`, assertion: '当前 API 目录未找到该精确 ID。' }] });
            continue;
          }
          const rules = pricesByModel.get(modelId) ?? [];
          rules.push({ rate_items: [{ metric: 'input_audio_duration', unit: 'per_hour', quantity: 1, amount_decimal: amount.amount }], evidence: [{ source_ref: source.source.id, locator: `table[${tableIndex + 1}]/row[${rowIndex + 1}]`, assertion: `官方 ${name} ASR 价格按输入音频时长计费，金额为 ${amount.amount} ${currency}/小时。` }] });
          pricesByModel.set(modelId, rules);
          locators.set(modelId, [...(locators.get(modelId) ?? []), `table[${tableIndex + 1}]/row[${rowIndex + 1}]`]);
          mappedRows++;
          continue;
        }
        const [cache, input, output] = amounts;
        const rowCurrency = cache?.currency ?? input?.currency ?? output?.currency;
        if (rowCurrency !== currency) continue;
        if (!catalogIds.has(modelId)) {
          reviewItems.push({ id: `pricing-model-not-in-catalog-${market}-${modelId}`, kind: 'ambiguous_identity', subject_ref: `${market}/${modelId}`, message: `官方价格表列出 ${modelId}，但 API 目录未包含该精确 ID；保留观察，不创建 Offering。`, evidence: [{ source_ref: source.source.id, locator: `table[${tableIndex + 1}]/row[${rowIndex + 1}]`, assertion: '价格表列出模型 ID 和当前价格。' }, { source_ref: current.source_id, locator: `/data[id=${modelId}]`, assertion: '当前 API 目录未找到该精确 ID。' }] });
          continue;
        }
        const modeLabel = row[0] ?? '';
        if (/批量/.test(modeLabel)) mode = 'batch';
        else if (/实时/.test(modeLabel)) mode = 'realtime';
        if (amounts.some((amount) => !amount || amount.currency !== currency)) {
          reviewItems.push({ id: `pricing-row-incomplete-${market}-${tableIndex}-${rowIndex}`, kind: 'unparsed_fact', subject_ref: `${market}/${modelId}`, message: `官方价格行 ${modelId} 未能完整解析缓存输入、普通输入和输出费率；该行未映射。`, evidence: [{ source_ref: source.source.id, locator: `table[${tableIndex + 1}]/row[${rowIndex + 1}]`, assertion: '模型 ID 已识别，但价格列结构或金额格式不完整。' }] });
          continue;
        }
        const rules = pricesByModel.get(modelId) ?? [];
        rules.push({
          conditions: [{ field: 'inference_type', operator: 'eq', value: mode }],
          rate_items: [
            { metric: 'cache_read', unit: 'per_1m_tokens', quantity: 1, amount_decimal: cache!.amount },
            { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: input!.amount },
            { metric: 'output', unit: 'per_1m_tokens', quantity: 1, amount_decimal: output!.amount },
          ],
          evidence: [{ source_ref: source.source.id, locator: `table[${tableIndex + 1}]/row[${rowIndex + 1}]`, assertion: `官方 ${name} 价格表列出 ${mode === 'batch' ? '批量' : '实时'}推理的 Token 单价。` }],
        });
        pricesByModel.set(modelId, rules);
        locators.set(modelId, [...(locators.get(modelId) ?? []), `table[${tableIndex + 1}]/row[${rowIndex + 1}]`]);
        mappedRows++;
      }
    }
    const offerings = [...pricesByModel.entries()].map(([modelId, rules]) => ({
      provider_model_id: { value: modelId, evidence: [
        { source_ref: source.source.id, locator: (locators.get(modelId) ?? []).join(', '), assertion: '当前官方价格表按精确模型 ID 列出该型号；同一市场的官方价格证明其按量供应。' },
      ] },
      ...(catalogModels.get(modelId)?.name
        ? { display_name: observed(catalogModels.get(modelId)!.name!, current.source_id, `/data[id=${modelId}]/name`, 'API 目录对精确匹配的当前报价模型声明该展示名称。') }
        : {}),
      service_id: observed(market, source.source.id, 'excerpt / 模型国内定价、模型海外定价', `官方价格文档明确标注${name}计价区域。`),
      supply_observations: [{ kind: 'priced_current' as const, evidence: rules.flatMap(({ evidence }) => evidence) }],
      operations: [],
      prices: [{
        provider_model_id: { value: modelId, evidence: [
          { source_ref: source.source.id, locator: (locators.get(modelId) ?? []).join(', '), assertion: '价格表中的精确模型 ID 对应该 PriceFact。' },
        ] },
        currency: observed(currency, source.source.id, `excerpt / ${name}计费单位`, `官方价格文档声明${name}使用 ${currency} 计价。`),
        unit: observed(rules.some(({ rate_items }) => rate_items.some(({ unit }) => unit === 'per_hour')) ? 'per_hour' : 'per_1m_tokens', source.source.id, `excerpt / ${name}计费单位`, rules.some(({ rate_items }) => rate_items.some(({ unit }) => unit === 'per_hour')) ? '官方 ASR 价格以小时计费。' : '官方价格文档声明按百万 Token 计价。'),
        rules: observed(rules, source.source.id, (locators.get(modelId) ?? []).join(', '), '价格规则按官方模型、计价市场及实时/批量推理类型逐行提取。'),
      } satisfies PriceFact],
    }));
    return {
      id: observed(market, source.source.id, `excerpt / ${name}定价`, `官方价格页单列${name}市场价格。`),
      name: observed(name, source.source.id, `excerpt / ${name}定价`, `官方价格页使用${name}定价标题。`),
      endpoints: [], offerings, capabilities: [], plans: [],
    };
  });
  return { services, mappedRows, reviewItems };
}

/** 小米的模型身份仅来自模型目录；价格表只补充同 ID 的价格事实。 */
export function toXiaomiIR(documents: readonly CapturedDocument[], current: XiaomiCandidateFacts): ProviderCollectionIR {
  const catalog = documents.find(({ source }) => source.id === current.source_id);
  if (!catalog) throw new Error('小米 MiMo API 目录来源缺失，不能生成 IR');
  const profileDocument = documents.find(({ source }) => source.id === 'xiaomi-model-list-doc');
  const modelIds = current.api_catalog_models.map(({ id }) => id);
  const observations = documents.map((document) => {
    const observation = extractDocumentObservation(document);
    const isCatalog = document.source.id === catalog.source.id;
    return {
      source_ref: observation.source_id,
      ...(observation.scope ? { scope: observation.scope } : {}),
      ...(observation.extraction ? { extraction: observation.extraction } : {}),
      ...(observation.access_scope ? { access_scope: observation.access_scope } : {}),
      title: observation.title,
      tables: observation.tables,
      structured_records: isCatalog ? current.api_catalog_models : observation.structured_records,
      api_mentions: isCatalog ? [] : observation.api_mentions,
      plan_or_price_mentions: isCatalog ? [] : observation.plan_or_price_mentions,
      capability_mentions: isCatalog ? [] : observation.capability_mentions,
      model_id_mentions: isCatalog ? modelIds : [],
      excerpt: isCatalog ? '' : observation.excerpt ?? '',
    };
  });
  const pricing = pricingServices(documents, current);
  const batchDocument = documents.find(({ source }) => source.id === 'xiaomi-batch-api');
  const tokenPlanDocument = documents.find(({ source }) => source.id === 'xiaomi-token-plan');
  const evidence = (sourceRef: string, locator: string, assertion: string) => [{ source_ref: sourceRef, locator, assertion }];
  const reviewItems: ReviewItem[] = [
    {
      id: 'api-catalog-market-and-supply-unresolved',
      kind: 'incomplete_coverage',
      message: 'API 目录没有说明账号市场或 Token Plan 归属；仅将按量价格文档精确列出的模型映射至 CN/GLOBAL，目录中其他 ID 继续保留观察。',
      evidence: evidence(catalog.source.id, '/data', `${modelIds.length} 个模型 ID 来自公开 API 模型目录响应。`),
    },
    ...(tokenPlanDocument ? [{
      id: 'token-plan-market-and-entitlement-unresolved',
      kind: 'unsupported_mapping' as const,
      message: 'Token Plan 的 CN、SGP、AMS 账号归属、额度及 API 使用资格尚未映射；套餐事实保留在来源观察中。',
      evidence: evidence(tokenPlanDocument.source.id, 'document body', 'Token Plan 来源未建立套餐资格、服务市场与目录模型之间的可验证映射。'),
    }] : []),
    ...pricing.reviewItems,
    {
      id: 'limited-free-tts-duration-unknown',
      kind: 'unsupported_mapping' as const,
      message: '官方定价页列出三个 TTS 型号限时免费，但没有给出结束时间；保留为价格观察，不将其转换为长期零价。',
      evidence: evidence('xiaomi-api-pricing', 'excerpt / TTS 系列', '官方注明“限时免费”，但没有明确活动截止时间。'),
    },
    {
      id: 'web-search-bundled-pricing-and-api-unresolved',
      kind: 'unsupported_mapping' as const,
      message: '联网服务按千次计价，说明包含网页搜索和解析；调用计量与独立能力 API 的准确边界尚未形成 IR 事实。',
      evidence: evidence('xiaomi-api-pricing', 'table[5]', '国内/海外联网服务按调用次数计价，并将搜索和网页解析作为一个服务包描述。'),
    },
    ...(batchDocument ? [{
      id: 'batch-endpoint-region-placeholder-unresolved',
      kind: 'unsupported_mapping' as const,
      message: 'Batch 文档的 Base URL 含 ${region} 变量，尚无证据将该变量映射到具体市场和地域；批量能力与接口线索保留观察，不生成 Endpoint/Route。',
      evidence: evidence(batchDocument.source.id, 'excerpt / Base URL', '官方地址为 batch-api-${region}.xiaomimimo.com，region 取值与账号市场映射未明确。'),
    }] : []),
  ];
  return {
    ir_version: '1.0.0',
    provider_id: 'xiaomi',
    observed_at: latestSnapshotRetrievedAt(documents.map(({ metadata }) => metadata)),
    source_refs: documents.map(({ source }) => source.id),
    coverage: documents.map(({ source }): ProviderCollectionIR['coverage'][number] => {
      const recordCount = source.id === catalog.source.id ? modelIds.length
        : source.id === 'xiaomi-api-pricing' ? pricing.mappedRows : undefined;
      const note = source.id === catalog.source.id
        ? '目录响应结构已解析；仅价格文档有精确报价的型号映射为市场 Offering，未建立目录整体的账号市场与 Token Plan 关系。'
        : source.id === 'xiaomi-api-pricing'
          ? '国内/海外 Token 与 ASR 价格按原币种、计量单位和实时/批量条件映射；TTS 限时免费与联网服务计费仍待核验。'
          : '来源正文保留为 DocumentObservation，尚未归一为对应领域事实。';
      const base = {
        source_ref: source.id,
        scope: source.scope ?? 'documentation' as const,
        ...(source.market ? { market: source.market } : {}),
        status: source.id === catalog.source.id || source.id === 'xiaomi-api-pricing' ? 'partial' as const : 'not_parsed' as const,
      };
      return recordCount === undefined
        ? { ...base, note }
        : { ...base, record_count: recordCount, record_unit: source.id === catalog.source.id ? 'recognized model IDs' : 'recognized price rows', note };
    }),
    document_observations: observations,
    ...(profileDocument ? {
      profile: {
        name: { value: 'Xiaomi MiMo', evidence: [{ source_ref: profileDocument.source.id, locator: 'head > title', assertion: '官方模型目录页标题标识为 Xiaomi MiMo。' }] },
        aliases: { value: ['MiMo'], evidence: [{ source_ref: profileDocument.source.id, locator: 'head > title', assertion: '官方页面标题以 Xiaomi MiMo 标识该产品；MiMo 是其中的产品名。' }] },
        kind: { value: 'first_party' as const, evidence: [{ source_ref: profileDocument.source.id, locator: 'footer / copyright', assertion: '官方平台页面版权声明归属于 Xiaomi。' }] },
        docs: { value: {
          overview: 'https://mimo.mi.com/docs/zh-CN/api/model/list-models',
          pricing: 'https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go',
          plans: 'https://mimo.mi.com/docs/zh-CN/price/token-plan',
        }, evidence: [
          { source_ref: 'xiaomi-model-list-doc', locator: 'registered source URL', assertion: '官方模型目录文档入口。' },
          { source_ref: 'xiaomi-api-pricing', locator: 'registered source URL', assertion: '官方按量定价文档入口。' },
          { source_ref: 'xiaomi-token-plan', locator: 'registered source URL', assertion: '官方 Token Plan 文档入口。' },
        ] },
      },
    } : {}),
    collection_notes: [
      'API Host 与模型目录列表不证明服务市场、账号授权或当前可调用性。',
      'Model 规格由维护者手动维护；价格仅匹配目录中的精确模型 ID。',
    ],
    services: pricing.services,
    review_items: reviewItems,
  };
}

function renderIRReview(candidate: CandidateEnvelope<ProviderCollectionIR>): string {
  const modelMentions = candidate.current.document_observations.find(({ source_ref }) => source_ref === 'xiaomi-api-models')?.model_id_mentions ?? [];
  return [
    '# 小米 MiMo 官方资料 IR 观察候选', '',
    `- IR 指纹：\`${candidate.candidate_hash}\``,
    `- API 目录模型 ID 观察：${modelMentions.length} 项；正式 Offering：${candidate.current.services.reduce((sum, service) => sum + service.offerings.length, 0)} 项`,
    '- API 市场、供应状态、价格单位与 Token Plan 关系未被目录响应证明。',
    '', '## 覆盖缺口与冲突', '',
    ...candidate.current.review_items.map(({ message }) => `- ${message}`),
    '', '## 来源快照', '',
    ...candidate.sources.map(({ source_id, request_url }) => `- \`${source_id}\`：${request_url}`), '',
  ].join('\n');
}

export async function collectXiaomi(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents: CapturedDocument[] = [];
  for (let index = 0; index < XIAOMI_INGEST_SOURCES.length; index += 2) {
    documents.push(...await captureDocumentSet(options.repoRoot, XIAOMI_INGEST_SOURCES.slice(index, index + 2)));
  }
  const current = facts(documents);
  const result = await writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'xiaomi',
    documents,
    current: toXiaomiIR(documents, current),
    modelCount: current.api_catalog_models.length,
    renderReview: renderIRReview,
  });
  return {
    ...result,
    status: 'needs_review',
    message: '小米公开 API 目录无法确认 CN、SGP、AMS 各市场与 Token Plan 的供应归属；需人工核实。',
  };
}

export const xiaomiParser = { parseModels, toXiaomiIR };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectXiaomi({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
