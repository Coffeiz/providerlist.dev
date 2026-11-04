import type { CapturedDocument } from '../document-set.ts';
import type { AlibabaCandidateFacts } from './collect.ts';
import type { PriceCondition } from '@providerlist/schema/types';
import type { CollectorRateFact, Observed, PlanFact, PriceRuleFact, ProviderCollectionIR, ServiceFacts } from '../../ir/provider-collection.ts';
import { readableDocumentationUrl } from '../../documentation-url.ts';
import { extractDocumentObservation } from '../document-observation.ts';

function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}

function tokenCount(value: string, suffix: string): string | undefined {
  const match = value.match(/^(\d+)(?:\.(\d+))?$/);
  if (!match) return undefined;
  const fraction = match[2] ?? '';
  const denominator = 10n ** BigInt(fraction.length);
  const numerator = BigInt(match[1]!) * denominator + BigInt(fraction || '0');
  const multiplier = suffix.toUpperCase() === 'M' ? 1_000_000n : suffix.toUpperCase() === 'K' ? 1_000n : 1n;
  const scaled = numerator * multiplier;
  if (scaled % denominator !== 0n) return undefined;
  return (scaled / denominator).toString();
}

function parseInputRange(inputRange: string): PriceCondition | null | undefined {
  if (!inputRange || /无阶梯计价/.test(inputRange)) return null;
  const match = inputRange.replaceAll('\\<', '<').replaceAll(',', '')
    .match(/(\d+(?:\.\d+)?)\s*([KM]?)\s*<\s*Token\s*≤\s*(\d+(?:\.\d+)?)\s*([KM]?)/i);
  if (!match) return undefined;
  const lower = tokenCount(match[1]!, match[2]!);
  const upper = tokenCount(match[3]!, match[4]!);
  if (lower === undefined || upper === undefined) return undefined;
  return { all: [
    { field: 'usage.input_tokens', operator: 'gt', value: lower },
    { field: 'usage.input_tokens', operator: 'lte', value: upper },
  ] };
}

function priceFactsForModel(
  modelId: string,
  market: 'cn' | 'global',
  rows: AlibabaCandidateFacts['token_pricing_rows'],
): ProviderCollectionIR['services'][number]['offerings'][number]['prices'] {
  const sourceRef = market === 'cn' ? 'alibaba-model-pricing' : 'alibaba-global-model-pricing';
  const currency = market === 'cn' ? 'CNY' : 'USD';
  const modelRows = rows.filter((row) => row.model_id === modelId && row.source_id === sourceRef && row.currency === currency);
  if (!modelRows.length) return [];
  const units = [...new Set(modelRows.map(({ unit }) => unit))];
  return units.flatMap((unit) => {
    const unitRows = modelRows.filter((row) => row.unit === unit && !row.is_limited_time_free && parseInputRange(row.input_range) !== undefined);
    const first = unitRows.find(({ input_price }) => input_price);
    if (!first) return [];
    const rules: PriceRuleFact[] = unitRows.flatMap((row) => {
      const range = parseInputRange(row.input_range);
      if (range === undefined) return [];
      const conditions: PriceCondition[] = [
        ...(row.input_modality ? [{ field: 'usage.input_modality', value: row.input_modality }] : []),
      ];
      if (range && 'all' in range) conditions.push(...range.all);
      else if (range) conditions.push(range);
      const rateItems: CollectorRateFact[] = [
        ...(row.input_price ? [{ metric: 'input', unit: row.unit, quantity: 1, amount_decimal: row.input_price }] : []),
        ...(row.cache_read_price ? [{ metric: 'cache_read', unit: row.unit, quantity: 1, amount_decimal: row.cache_read_price }] : []),
        ...(row.output_price ? [{ metric: 'output', unit: row.unit, quantity: 1, amount_decimal: row.output_price }] : []),
      ];
      if (!rateItems.length) return [];
      return [{
        rate_items: rateItems,
        region: row.api_region,
        ...(row.deployment_scope ? { deployment: row.deployment_scope } : {}),
        ...(conditions.length ? { conditions } : {}),
        evidence: [{ source_ref: row.source_id, locator: row.locator, assertion: `官方价格表列出 ${modelId} 在${row.api_region}${row.deployment_scope ? `（${row.deployment_scope}部署范围）` : ''}的 ${row.section} 费率；保留原币种、计量单位和输入条件。` }],
      }];
    });
    if (!rules.length) return [];
    return [{
      currency: observed(currency, sourceRef, first.locator, '官方价格表明确标注结算币种。'),
      unit: observed(unit, sourceRef, first.locator, '官方价格表明确标注 Token 计费单位。'),
      rules: { value: rules, evidence: rules.flatMap(({ evidence }) => evidence) },
    }];
  });
}

function codingPlanFactsForMarket(
  market: 'cn' | 'global',
  planEvidence: AlibabaCandidateFacts['plan_evidence'],
  documents: readonly CapturedDocument[],
): PlanFact[] {
  const sourceRef = market === 'cn' ? 'alibaba-coding-plan' : 'alibaba-global-coding-plan';
  const source = documents.find(({ source: candidate }) => candidate.id === sourceRef)?.source;
  const evidence = planEvidence.find(({ source_id }) => source_id === sourceRef);
  if (!source || !evidence) return [];

  const text = evidence.relevant_lines.join('\n');
  const standardPattern = market === 'cn' ? /¥\s*([\d,]+)\s*\/\s*月/i : /\$\s*([\d,]+)\s*\/\s*month/i;
  const standardAmount = standardPattern.exec(text)?.[1]?.replaceAll(',', '');
  if (!standardAmount) return [];
  const currency = market === 'cn' ? 'CNY' : 'USD';
  const id = `${market}-coding-plan-pro`;
  const locator = '#plan-details';
  const assertion = market === 'cn'
    ? '百炼官方 Coding Plan 页面列出 Pro 高级套餐月费。'
    : 'Alibaba Cloud Model Studio 官方 Coding Plan 页面列出 Pro 月费。';
  const descriptionLine = evidence.relevant_lines.find((line) => market === 'cn'
    ? line.startsWith('>') && line.includes('Coding Plan') && line.length > 60
    : line.includes('Coding Plan') && line.length > 100);
  const billingOption = {
    billing_period: 'month' as const,
    subscription_fee: { currency, amount: standardAmount },
  };
  return [{
    id: observed(id, sourceRef, locator, '来源为对应市场的官方 Coding Plan 套餐页面。'),
    name: observed('Coding Plan Pro', sourceRef, locator, '官方套餐表将该档位命名为 Pro。'),
    billing_options: observed([billingOption], sourceRef, locator, assertion),
    ...(descriptionLine ? {
      description: observed(
        descriptionLine.replace(/^>\s*/, ''),
        sourceRef,
        '#coding-plan-overview',
        '套餐描述逐字取自对应市场官方 Coding Plan 概述，不翻译或摘要。',
      ),
    } : {}),
    links: observed({ official: readableDocumentationUrl(source.url) }, sourceRef, locator, '套餐链接指向登记的官方可读页面。'),
  }];
}

function tokenPlanFacts(
  market: 'cn' | 'global',
  planEvidence: AlibabaCandidateFacts['plan_evidence'],
  documents: readonly CapturedDocument[],
): PlanFact[] {
  const findLines = (sourceRef: string) => planEvidence.find(({ source_id }) => source_id === sourceRef)?.relevant_lines ?? [];
  const officialDescription = (sourceRef: string, predicate: (line: string) => boolean) => {
    const line = findLines(sourceRef).find(predicate);
    return line ? {
      value: line.replace(/^>\s*/, '').replace(/^-\s*/, ''),
      sourceRef,
    } : undefined;
  };
  const makePlan = (args: {
    id: string;
    name: string;
    priceSource: string;
    priceLine: string;
    standard: string;
    promotional?: string;
    creditsSource?: string;
    credits?: number;
    allowance?: Readonly<Record<string, number>>;
    description?: { readonly value: string; readonly sourceRef: string };
  }): PlanFact => {
    const priceDocument = documents.find(({ source }) => source.id === args.priceSource);
    const currency = market === 'cn' ? 'CNY' : 'USD';
    const locator = '#plan-pricing';
    const billingOptions = [{
      billing_period: 'month' as const,
      subscription_fee: { currency, amount: args.standard },
      ...(args.promotional ? {
        promotional_fee: { currency, amount: args.promotional },
      } : {}),
    }];
    const creditsSource = args.creditsSource ?? args.priceSource;
    const values = findLines(args.creditsSource ?? args.priceSource);
    const evidenceLine = values.find((line) => line.includes(`${args.credits?.toLocaleString('en-US')} Credits`)) ?? args.priceLine;
    return {
      id: observed(args.id, args.priceSource, locator, `官方套餐表列出 ${args.name} 档位。`),
      name: observed(args.name, args.priceSource, locator, '套餐名称来自官方分档表。'),
      billing_options: observed(billingOptions, args.priceSource, locator, args.priceLine),
      ...(args.credits !== undefined ? {
        credits: observed(args.credits, creditsSource, locator, evidenceLine),
      } : {}),
      ...(args.allowance ? {
        allowance: observed(args.allowance, args.priceSource, locator, args.priceLine),
      } : {}),
      ...(args.description ? {
        description: observed(
          args.description.value,
          args.description.sourceRef,
          '#plan-overview',
          '套餐描述逐字取自对应市场官方套餐介绍，不翻译或摘要。',
        ),
      } : {}),
      ...(priceDocument ? { links: observed({ official: readableDocumentationUrl(priceDocument.source.url) }, args.priceSource, locator, '套餐链接指向登记的官方可读页面。') } : {}),
    };
  };

  const plans: PlanFact[] = [];
  const personalSource = market === 'cn' ? 'alibaba-token-plan' : 'alibaba-global-token-plan';
  const personalLines = findLines(personalSource);
  const personalPriceRow = personalLines.find((line) => /^(?:定价|Pricing)\s*\|/.test(line));
  const personalQuotaSource = market === 'cn' ? 'alibaba-token-plan-personal' : personalSource;
  const personalQuotaRow = findLines(personalQuotaSource).find((line) => /^(?:每月限额|Monthly quota)\s*\|/.test(line));
  const personalTiers = market === 'cn'
    ? [
      { suffix: 'lite', name: 'Lite', standard: '60', promo: '39', credits: 11500 },
      { suffix: 'essential', name: 'Essential', standard: '120', promo: '79', credits: 25500 },
      { suffix: 'standard', name: 'Standard', standard: '180', promo: '139', credits: 45000 },
      { suffix: 'pro', name: 'Pro', standard: '600', promo: '499', credits: 180000 },
    ]
    : [
      { suffix: 'lite', name: 'Lite', standard: '8', promo: '6', credits: 11500 },
      { suffix: 'essential', name: 'Essential', standard: '16', promo: '10', credits: 25500 },
      { suffix: 'standard', name: 'Standard', standard: '25', promo: '18', credits: 45000 },
      { suffix: 'pro', name: 'Pro', standard: '80', promo: '68', credits: 180000 },
    ];
  if (personalPriceRow && personalQuotaRow) {
    for (const [index, tier] of personalTiers.entries()) {
      const cell = personalPriceRow.split('|').map((part) => part.trim())[index + 1];
      const quotaCell = personalQuotaRow.split('|').map((part) => part.trim())[index + 1];
      if (!cell || !quotaCell || !/Original price|原价/.test(cell)) continue;
      const match = market === 'cn'
        ? cell.match(/原价\s*[¥￥]?\s*([\d,]+(?:\.\d+)?)\s*元?\s*\/\s*月\s*限时\s*[¥￥]?\s*([\d,]+(?:\.\d+)?)/)
        : cell.match(/Original price\s*\$\s*([\d,]+(?:\.\d+)?)\s*\/month\s*Limited-time\s*\$\s*([\d,]+(?:\.\d+)?)/i);
      const credits = Number((market === 'cn' ? /([\d,]+)\s*Credits/.exec(quotaCell) : /([\d,]+)\s*Credits/.exec(quotaCell))?.[1]?.replaceAll(',', ''));
      if (!match || !Number.isFinite(credits)) continue;
      const descriptionPrefix = `token_plan_description:${market}:${tier.suffix}:`;
      const descriptionLine = findLines('alibaba-token-plan-ui-copy').find((line) => line.startsWith(descriptionPrefix));
      const personalDescription = descriptionLine ? {
        value: descriptionLine.slice(descriptionPrefix.length),
        sourceRef: 'alibaba-token-plan-ui-copy',
      } : undefined;
      plans.push(makePlan({
        id: `${market}-token-plan-personal-${tier.suffix}`,
        name: tier.name,
        priceSource: personalSource,
        priceLine: cell,
        standard: match[1]!.replaceAll(',', ''),
        promotional: match[2]!.replaceAll(',', ''),
        creditsSource: personalQuotaSource,
        credits,
        ...(personalDescription ? { description: personalDescription } : {}),
      }));
    }
  }

  const teamSource = market === 'cn' ? 'alibaba-token-plan-team' : 'alibaba-global-token-plan';
  const teamLines = findLines(teamSource);
  const teamPriceRow = teamLines.find((line) => /^(?:定价|Pricing)\s*\|/.test(line) && /seat|坐席/i.test(line));
  const teamQuotaRow = teamLines.find((line) => /^(?:每月总额度|Monthly quota)\s*\|/.test(line) && /seat|坐席/i.test(line));
  const teamTiers = market === 'cn'
    ? [
      { suffix: 'standard-seat', name: '标准坐席', standard: '198', promo: '150', credits: 25000 },
      { suffix: 'pro-seat', name: '高级坐席', standard: '698', promo: '550', credits: 100000 },
      { suffix: 'max-seat', name: '尊享坐席', standard: '1398', credits: 250000 },
    ]
    : [
      { suffix: 'standard-seat', name: 'Standard seat', standard: '30', promo: '20', credits: 25000 },
      { suffix: 'pro-seat', name: 'Pro seat', standard: '100', promo: '75', credits: 100000 },
      { suffix: 'max-seat', name: 'Max seat', standard: '200', credits: 250000 },
    ];
  if (market === 'global' && teamPriceRow && teamQuotaRow) {
    const teamDescription = officialDescription('alibaba-global-token-plan', (line) => /Team Edition/i.test(line) && line.length > 60);
    const priceCells = teamPriceRow.split('|').map((part) => part.trim());
    const quotaCells = teamQuotaRow.split('|').map((part) => part.trim());
    for (const [index, tier] of teamTiers.entries()) {
      const cell = priceCells[index + 1];
      const quotaCell = quotaCells[index + 1];
      const amountPattern = /(?:Original price\s*\$\s*([\d,]+)\/seat\/month\s*Limited-time\s*\$\s*([\d,]+)|\$\s*([\d,]+)\/seat\/month)/i;
      const match = cell?.match(amountPattern);
      const credits = Number((quotaCell ? /([\d,]+)\s*Credits/.exec(quotaCell) : null)?.[1]?.replaceAll(',', ''));
      if (!cell || !match || !Number.isFinite(credits)) continue;
      plans.push(makePlan({
        id: `${market}-token-plan-team-${tier.suffix}`,
        name: tier.name,
        priceSource: teamSource,
        priceLine: cell,
        standard: (match[1] ?? match[3])!.replaceAll(',', ''),
        ...(match[2] ? { promotional: match[2].replaceAll(',', '') } : {}),
        credits,
        ...(teamDescription ? { description: teamDescription } : {}),
      }));
    }
  } else if (market === 'cn') {
    const teamDescription = officialDescription('alibaba-token-plan-team', (line) => line.includes('Token Plan 团队版') && line.length > 80);
    const cnTeamTiers = [
      { suffix: 'standard-seat', name: '标准座席' },
      { suffix: 'pro-seat', name: '高级座席' },
      { suffix: 'max-seat', name: '尊享座席' },
    ];
    for (const tier of cnTeamTiers) {
      const line = teamLines.find((candidate) => candidate.startsWith(`${tier.name} |`));
      const match = line?.match(/(?:原价\s*[¥￥]\s*([\d,]+)\/坐席\/月\s*限时\s*[¥￥]\s*([\d,]+)(?:\/坐席\/月)?|[¥￥]\s*([\d,]+)\/坐席\/月)\s*\|\s*([\d,]+)\s*Credits\/坐席\/月/);
      if (!line || !match) continue;
      plans.push(makePlan({
        id: `${market}-token-plan-team-${tier.suffix}`,
        name: tier.name,
        priceSource: teamSource,
        priceLine: line,
        standard: (match[1] ?? match[3])!.replaceAll(',', ''),
        ...(match[2] ? { promotional: match[2].replaceAll(',', '') } : {}),
        credits: Number(match[4]!.replaceAll(',', '')),
        ...(teamDescription ? { description: teamDescription } : {}),
      }));
    }
  }

  const packSource = market === 'cn' ? 'alibaba-token-plan' : 'alibaba-global-token-plan';
  const packLines = findLines(packSource);
  const personalPackRow = packLines.find((line) => /^(?:定价|Pricing)\s*\|/.test(line)
    && /Credits\/(?:个|bundle).*?(?:最多同时持有|Up to 5 at a time)/i.test(line));
  if (personalPackRow) {
    const packDescription = market === 'cn'
      ? officialDescription('alibaba-token-plan-personal', (line) => line.includes('用量包') && line.includes('20,000 Credits') && line.length > 60)
      : officialDescription('alibaba-global-token-plan', (line) => /Extra Bundles/i.test(line) && line.length > 80);
    const cell = personalPackRow.split('|').map((part) => part.trim()).at(-1) ?? '';
    const match = market === 'cn'
      ? cell.match(/([\d,]+)\s*元\/个\/月\s*([\d,]+)\s*Credits\/个/)
      : cell.match(/\$\s*([\d,]+)\/bundle\/month\s*([\d,]+)\s*Credits\/bundle/i);
    if (match) plans.push(makePlan({
      id: `${market}-token-plan-personal-extra-bundle`,
      name: '个人共享用量包',
      priceSource: packSource,
      priceLine: cell,
      standard: match[1]!.replaceAll(',', ''),
      credits: Number(match[2]!.replaceAll(',', '')),
      allowance: /最多同时持有\s*5|Up to 5 at a time/i.test(cell) ? { max_concurrent_bundles: 5 } : undefined,
      ...(packDescription ? { description: packDescription } : {}),
    }));
  }

  const teamPackRow = market === 'cn'
    ? teamLines.find((line) => line.startsWith('Token Plan 团队版 - 共享用量包 |'))
    : teamPriceRow;
  const teamPackQuota = market === 'cn' ? teamPackRow : teamQuotaRow;
  if (teamPackRow && teamPackQuota) {
    const packDescription = market === 'cn'
      ? officialDescription('alibaba-token-plan-team', (line) => /共享的弹性用量包/.test(line) && line.length > 80)
      : officialDescription('alibaba-global-token-plan', (line) => /Extra Bundles/i.test(line) && line.length > 80);
    const cells = teamPackRow.split('|').map((part) => part.trim());
    const priceCell = market === 'cn' ? cells[1] ?? '' : cells.at(-1) ?? '';
    const quotaCell = market === 'cn' ? cells[2] ?? '' : teamPackQuota.split('|').map((part) => part.trim()).at(-1) ?? '';
    const price = market === 'cn' ? /[¥￥]\s*([\d,]+)\/个/ : /\$\s*([\d,]+)\/pack\/month/i;
    const priceMatch = priceCell.match(price);
    const creditsMatch = /([\d,]+)\s*Credits/.exec(quotaCell);
    if (priceMatch && creditsMatch) plans.push(makePlan({
      id: `${market}-token-plan-team-shared-pack`,
      name: '团队共享用量包',
      priceSource: teamSource,
      priceLine: priceCell,
      standard: priceMatch[1]!.replaceAll(',', ''),
      credits: Number(creditsMatch[1]!.replaceAll(',', '')),
      ...(packDescription ? { description: packDescription } : {}),
    }));
  }
  return plans;
}

/** 把百炼官方 API 入口与明确示例型号映射到局部 API IR。 */
export function mapAlibabaApiIR(
  documents: readonly CapturedDocument[],
  candidateFacts: Pick<AlibabaCandidateFacts, 'api_endpoints' | 'api_routes' | 'api_review_items' | 'gallery_models' | 'full_model_catalog' | 'global_gallery_models' | 'token_pricing_rows' | 'plan_evidence'>,
): ProviderCollectionIR {
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const apiFacts = {
    endpoints: candidateFacts.api_endpoints,
    routes: candidateFacts.api_routes,
    review_items: candidateFacts.api_review_items,
  };
  const sourceIds = new Set<string>([
    ...apiFacts.endpoints.map(({ source_id }) => source_id),
    ...apiFacts.routes.map(({ source_id }) => source_id),
    ...candidateFacts.full_model_catalog.map(({ source_id }) => source_id),
    'alibaba-service-model-catalog',
    'alibaba-web-search', 'alibaba-global-web-search', 'alibaba-web-extractor',
    'alibaba-openai-responses-api',
    'alibaba-model-pricing', 'alibaba-global-model-pricing', 'alibaba-models-gallery',
    'alibaba-global-model-catalog',
    'alibaba-coding-plan', 'alibaba-global-coding-plan', 'alibaba-token-plan-personal',
    'alibaba-token-plan', 'alibaba-token-plan-team', 'alibaba-global-token-plan', 'alibaba-token-plan-ui-copy',
  ]);
  const sources = [...sourceIds].filter((sourceId) => byId.has(sourceId));
  const latestObservedAt = documents.map(({ metadata }) => metadata.retrieved_at).sort().at(-1);
  if (!latestObservedAt) throw new Error('百炼 API IR 缺少快照，无法确定观察时间');
  const catalogModelIdsByMarket = {
    cn: new Set([
      ...candidateFacts.gallery_models.flatMap(({ model_ids }) => model_ids),
      ...candidateFacts.full_model_catalog.flatMap(({ model_ids }) => model_ids),
    ]),
    global: new Set(candidateFacts.global_gallery_models.flatMap(({ model_ids }) => model_ids)),
  };
  const catalogEvidenceByMarket = {
    cn: new Map<string, string[]>([
      ...[...catalogModelIdsByMarket.cn].map((modelId) => [modelId, []] as [string, string[]]),
    ]),
    global: new Map<string, string[]>([
      ...[...catalogModelIdsByMarket.global].map((modelId) => [modelId, []] as [string, string[]]),
    ]),
  };
  for (const { model_ids } of candidateFacts.gallery_models) {
    for (const modelId of model_ids) catalogEvidenceByMarket.cn.get(modelId)?.push('alibaba-models-gallery');
  }
  for (const { source_id, model_ids } of candidateFacts.full_model_catalog) {
    for (const modelId of model_ids) catalogEvidenceByMarket.cn.get(modelId)?.push(source_id);
  }
  for (const { model_ids } of candidateFacts.global_gallery_models) {
    for (const modelId of model_ids) catalogEvidenceByMarket.global.get(modelId)?.push('alibaba-global-model-catalog');
  }
  const nameEvidence = 'alibaba-model-pricing';
  const currencySource = (market: 'cn' | 'global') => market === 'cn' ? 'alibaba-model-pricing' : 'alibaba-global-model-pricing';
  const currencyForMarket = (market: 'cn' | 'global') => market === 'cn' ? 'CNY' : 'USD';
  const currentPricedIdsByMarket = (market: 'cn' | 'global') => new Set(candidateFacts.token_pricing_rows
    .filter((row) => row.source_id === currencySource(market) && row.currency === currencyForMarket(market) && !row.is_limited_time_free && Boolean(row.input_price))
    .map(({ model_id }) => model_id));
  const services: ServiceFacts[] = (['cn', 'global'] as const).map((market) => {
    const serviceEndpoints = apiFacts.endpoints.filter(({ service_id }) => service_id === market);
    const catalogEvidence = market === 'cn' ? 'alibaba-models-gallery' : 'alibaba-global-model-catalog';
    const currentPricedIds = currentPricedIdsByMarket(market);
    const modelIds = new Set([...catalogModelIdsByMarket[market], ...currentPricedIds]);
    const offerings = [...modelIds].map((modelId) => {
      const catalogSources = [...new Set(catalogEvidenceByMarket[market].get(modelId) ?? [])];
      const modelSource = catalogSources[0] ?? currencySource(market);
      const listedInCatalog = catalogSources.length > 0;
      const currentPriceRows = candidateFacts.token_pricing_rows.filter((row) => row.model_id === modelId
        && row.source_id === currencySource(market) && row.currency === currencyForMarket(market)
        && !row.is_limited_time_free && Boolean(row.input_price));
      return {
        provider_model_id: observed(modelId, modelSource, '#model', '官方市场目录、价格表或 API 示例中明确列出的精确模型 ID。'),
        display_name: observed(modelId, modelSource, '#model', '以官方目录、价格表或 API 示例中明确列出的模型 ID 作为展示名。'),
        service_id: observed(market, catalogEvidence, '#model', 'API 市场由对应市场的官方目录来源确定。'),
        supply_observations: [
          ...(listedInCatalog ? [{ kind: 'listed_current' as const, evidence: catalogSources.map((source_ref) => ({ source_ref, locator: `#${modelId}`, assertion: '对应市场官方模型目录或分类页列出该模型 ID。' })) }] : []),
          ...(currentPriceRows.length ? [{ kind: 'priced_current' as const, evidence: currentPriceRows.map((row) => ({ source_ref: row.source_id, locator: row.locator, assertion: `对应市场当前官方价格表列出 ${modelId} 的结构化费率；不据此推断账号权限或 API 已实测。` })) }] : []),
        ],
        operations: [],
        prices: [
          ...priceFactsForModel(modelId, market, candidateFacts.token_pricing_rows),
        ],
      };
    });
    const regionSource = market === 'cn' ? 'alibaba-api-compatibility' : 'alibaba-global-api-base-url';
    return {
      id: observed(market, regionSource, '#region', '账号市场由该市场专属官方 API / 目录来源限定。'),
      name: observed(market === 'cn' ? '中国市场' : '国际市场', nameEvidence, '#market', '对应市场的官方 Model Studio 目录与价格来源。'),
      account_requirements: observed(['API Key', 'Workspace ID'], regionSource, '#mt-payg-h', '官方接入文档要求 API Key，并要求将 WorkspaceId 替换为账号实际工作空间。'),
      endpoints: serviceEndpoints.map((endpoint) => ({
        id: observed(endpoint.id, endpoint.source_id, endpoint.locator, '官方按量 API Base URL 表列出此 Workspace Endpoint。'),
        base_url: observed(endpoint.base_url, endpoint.source_id, endpoint.locator, '保留官方 Workspace URL 模板；不替换为账号值。'),
        api_region: observed(endpoint.api_region, endpoint.source_id, endpoint.locator, '保留官方区域标签的中文归一值。'),
        region_code: observed(endpoint.region_code, endpoint.source_id, endpoint.locator, '从官方 Endpoint 主机名解析区域代码。'),
        documentation: observed(readableDocumentationUrl(byId.get(endpoint.source_id)?.source.url) ?? byId.get(endpoint.source_id)?.source.url ?? endpoint.source_id, endpoint.source_id, endpoint.locator, 'Endpoint 来源为官方 API 接入文档。'),
      })),
      offerings,
      capabilities: [],
      plans: [
        ...codingPlanFactsForMarket(market, candidateFacts.plan_evidence, documents),
        ...tokenPlanFacts(market, candidateFacts.plan_evidence, documents),
      ],
    };
  });

  const coverage = sources.flatMap((sourceRef) => {
    const source = byId.get(sourceRef)!.source;
    const parsedEndpoints = apiFacts.endpoints.filter((endpoint) => endpoint.source_id === sourceRef).length;
    const parsedRoutes = apiFacts.routes.filter((route) => route.source_id === sourceRef).length;
    const catalogIds = sourceRef === 'alibaba-models-gallery'
      ? [...new Set(candidateFacts.gallery_models.flatMap(({ model_ids }) => model_ids))]
      : sourceRef === 'alibaba-global-model-catalog'
        ? [...new Set(candidateFacts.global_gallery_models.flatMap(({ model_ids }) => model_ids))]
        : [...new Set(candidateFacts.full_model_catalog.filter((record) => record.source_id === sourceRef).flatMap(({ model_ids }) => model_ids))];
    const unresolvedMappings = apiFacts.review_items.some((item) => item.source_id === sourceRef);
    const sourceMarket = source.market === 'cn' ? 'cn' : source.market === 'global' ? 'global' : undefined;
    const mappedModelIds = new Set(services.find(({ id }) => id.value === sourceMarket)?.offerings.map(({ provider_model_id }) => provider_model_id.value) ?? []);
    const parsedPrices = candidateFacts.token_pricing_rows.filter((row) => row.source_id === sourceRef && mappedModelIds.has(row.model_id) && !row.is_limited_time_free).length;
    const isPricing = source.scope === 'pricing';
    const isPlan = source.scope === 'plan';
    const planCount = services.find(({ id }) => id.value === sourceMarket)?.plans.filter((plan) => [
      plan.id, plan.name, plan.billing_options, plan.description, plan.links, plan.allowance, plan.credits,
    ].some((field) => field?.evidence.some(({ source_ref: planSource }) => planSource === sourceRef))).length ?? 0;
    const sourceCoverage = {
      source_ref: sourceRef,
      scope: source.scope ?? 'api' as const,
      ...(source.market ? { market: source.market } : {}),
      status: isPlan ? planCount ? 'partial' as const : 'not_parsed' as const
        : isPricing || source.scope === 'model_catalog' && !catalogIds.length
        || !(parsedEndpoints || parsedRoutes || catalogIds.length) || unresolvedMappings
        ? 'partial' as const
        : 'complete' as const,
      record_count: isPlan ? planCount : isPricing ? parsedPrices : source.scope === 'model_catalog' ? catalogIds.length
        : source.scope === 'capability' ? 0 : parsedEndpoints + parsedRoutes,
      record_unit: isPlan ? 'PlanFact records' : isPricing ? 'recognized Token price rows' : source.scope === 'model_catalog'
        ? 'recognized model IDs'
        : source.scope === 'capability' ? 'independent Capability records' : 'recognized API source records',
      note: isPlan ? planCount
        ? '按官方档位映射可辨认的月费、促销价和 Credits；购买资格、促销有效期、额度适用限制及席位变更规则仍留待 Review。'
        : '该 Token Plan 来源尚未提供可结构化映射的套餐行，保留为来源观察。'
        : isPricing
        ? `仅映射与同市场 API 示例模型精确匹配的结构化 Token 价格；其它模型、非 Token 价格及促销行仍待核对（本次映射 ${parsedPrices} 条）。`
        : source.scope === 'capability'
          ? '保留官方文档描述的服务能力；不采集或关联逐模型支持范围。'
        : source.scope === 'api'
        ? '仅表示 API Endpoint / Route 与可明确关联模型解析覆盖，不代表账号权限或全模型 API 可用性。'
        : '仅记录此来源解析出的模型目录 ID；完整目录范围以对应来源的 coverage 状态为准。',
    };
    return [sourceCoverage];
  });
  const profileSource = 'alibaba-service-model-catalog';
  const profileEvidence = (locator: string, assertion: string) => observed('阿里云百炼', profileSource, locator, assertion);
  const routeSourceRefs = new Set(apiFacts.routes.map(({ source_id }) => source_id));
  const documentObservations = documents.filter(({ source }) => routeSourceRefs.has(source.id)).map((document) => {
    const observation = extractDocumentObservation(document);
    const routeObservations = apiFacts.routes.filter(({ source_id }) => source_id === document.source.id).map((route) => ({
      record_type: 'api_route_observation',
      service_id: route.service_id,
      endpoint_id: route.endpoint_id,
      protocol: route.protocol,
      method: route.method,
      path: route.path,
      provider_model_ids: route.provider_model_ids,
      source_ref: route.source_id,
      locator: route.locator,
    }));
    return {
      source_ref: observation.source_id,
      scope: observation.scope,
      extraction: observation.extraction,
      access_scope: observation.access_scope,
      title: observation.title,
      tables: observation.tables,
      structured_records: [...observation.structured_records, ...routeObservations],
      api_mentions: observation.api_mentions,
      plan_or_price_mentions: observation.plan_or_price_mentions,
      capability_mentions: observation.capability_mentions,
      model_id_mentions: [...new Set(apiFacts.routes
        .filter(({ source_id }) => source_id === document.source.id)
        .flatMap(({ provider_model_ids }) => provider_model_ids))],
      excerpt: observation.excerpt,
    };
  });
  const docs = Object.fromEntries(sources.filter((sourceRef) => sourceRef.includes('api')).map((sourceRef) => [
    sourceRef,
    readableDocumentationUrl(byId.get(sourceRef)!.source.url) ?? byId.get(sourceRef)!.source.url,
  ]));
  const priceCoverageReviewItems = (['cn', 'global'] as const).flatMap((market) => {
    const sourceRef = market === 'cn' ? 'alibaba-model-pricing' : 'alibaba-global-model-pricing';
    const mappedIds = new Set(services.find(({ id }) => id.value === market)?.offerings.map(({ provider_model_id }) => provider_model_id.value) ?? []);
    const rows = candidateFacts.token_pricing_rows.filter((row) => row.source_id === sourceRef);
    const withheld = rows.filter((row) => !mappedIds.has(row.model_id) || row.is_limited_time_free || parseInputRange(row.input_range) === undefined);
    return withheld.length ? [{
      id: `pricing-partial-${market}`,
      kind: 'incomplete_coverage' as const,
      message: `价格来源有 ${withheld.length} 条 Token 价格行未迁入领域 IR。未迁入原因是型号尚未进入当前 Offering、属于限时促销，或输入 Token 范围无法解析；这是采集/转换覆盖缺口，不表示缺少区域价格，也不要求补 Route。`,
      evidence: [{ source_ref: sourceRef, locator: '#pricing-tables', assertion: '来源价格行包含模型、区域及部署范围；该 ReviewItem 提醒仍有行未迁入领域 IR。' }],
    }] : [];
  });
  const tokenPlanReviewItems = candidateFacts.plan_evidence.flatMap(({ source_id }) => {
    if (!['alibaba-token-plan-personal', 'alibaba-token-plan', 'alibaba-token-plan-team', 'alibaba-global-token-plan', 'alibaba-token-plan-ui-copy'].includes(source_id)) return [];
    const source = byId.get(source_id);
    return source ? [{
      id: `plan-partial-${source_id}`,
      kind: 'incomplete_coverage' as const,
      message: '套餐价格与 Credits 已按明确档位写入 PlanFact；购买资格、促销期限、额度使用限制及团队席位变更规则仍需核对。',
      evidence: [{ source_ref: source_id, locator: '#plan-pricing', assertion: '该来源的主要套餐档位已解析，仍有订购与额度规则未结构化。' }],
    }] : [];
  });
  return {
    ir_version: '1.0.0',
    provider_id: 'alibaba',
    observed_at: latestObservedAt,
    source_refs: sources,
    coverage,
    document_observations: documentObservations,
    collection_notes: [
      '此 IR 迁移 API Endpoint、存在精确区域示例的 Route、官方目录中的当前型号供应观察，以及与同市场模型精确关联的结构化 Token 价格；其余数据域仍由现行候选链路维护。',
      'API 文档对模型系列的概括支持声明未被展开为精确 Offering；目录记录或当前有效结构化价格行可支撑供应观察，只有区域代码示例中的精确 model ID 才参与 Route 关联。',
    ],
    profile: {
      name: profileEvidence('#overview', '官方文档索引属于阿里云百炼 Model Studio。'),
      aliases: observed(['Alibaba Cloud Bailian', 'Model Studio'], profileSource, '#overview', '官方文档索引标题及产品名。'),
      kind: observed('cloud_platform', profileSource, '#overview', '官方文档指向阿里云百炼云平台。'),
      docs: observed(docs, profileSource, '#overview', '只记录本次 API IR 使用的官方文档链接。'),
    },
    services,
    review_items: [
      ...apiFacts.review_items.map((item, index) => ({
        id: `api-unparsed-${String(index + 1).padStart(3, '0')}`,
        kind: /精确 model ID|模型.*区域/.test(item.message) ? 'unsupported_mapping' as const : 'unparsed_fact' as const,
        message: item.message,
        evidence: [{ source_ref: item.source_id, locator: item.locator }],
      })),
      ...priceCoverageReviewItems,
      ...tokenPlanReviewItems,
    ],
  };
}
