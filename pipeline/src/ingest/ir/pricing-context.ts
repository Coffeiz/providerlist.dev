import type { PriceCondition } from '@providerlist/schema/types';
import type { CollectorRateFact, PriceFact, PricingGroupFact, ProviderCollectionIR } from './provider-collection.ts';

const INPUT_CONTEXT_FIELDS = new Set([
  'usage.input_tokens',
  'request.input_tokens',
  'input_tokens',
  'prompt_tokens',
]);

interface ConditionExtraction {
  readonly safe: boolean;
  readonly predicates: readonly Extract<PriceCondition, { field: string }>[];
  readonly remaining?: PriceCondition;
}

function isContextField(field: string): boolean {
  return INPUT_CONTEXT_FIELDS.has(field);
}

function hasContextField(condition: PriceCondition): boolean {
  if ('field' in condition) return isContextField(condition.field);
  if ('not' in condition) return hasContextField(condition.not);
  return ('all' in condition ? condition.all : condition.any).some(hasContextField);
}

function tokenCount(value: unknown): string | undefined {
  if (typeof value === 'number' && Number.isSafeInteger(value) && value >= 0) return String(value);
  if (typeof value === 'string' && /^\d+$/u.test(value)) return value;
  return undefined;
}

function comparisonLabel(condition: Extract<PriceCondition, { field: string }>): string | undefined {
  const value = tokenCount(condition.value);
  if (value === undefined) return undefined;
  switch (condition.operator ?? 'eq') {
    case 'eq': return `=${value}`;
    case 'lt': return `<${value}`;
    case 'lte': return `<=${value}`;
    case 'gt': return `>${value}`;
    case 'gte': return `>=${value}`;
    case 'between': return undefined;
  }
}

function combineAll(conditions: readonly PriceCondition[]): PriceCondition | undefined {
  const flattened = conditions.flatMap((condition) =>
    'all' in condition ? [...condition.all] : [condition],
  );
  if (flattened.length === 0) return undefined;
  if (flattened.length === 1) return flattened[0];
  return { all: flattened };
}

function moveSimplePriceLabel<T extends {
  readonly conditions?: readonly PriceCondition[];
  readonly deployment?: string;
  readonly region?: string;
}>(rule: T, sourceField: string, targetField: 'deployment' | 'region'): T {
  const conditions = rule.conditions;
  if (!conditions?.length) return rule;
  const matched = conditions.filter((condition) =>
    'field' in condition && condition.field === sourceField && (condition.operator === undefined || condition.operator === 'eq') && typeof condition.value === 'string',
  );
  const values = [...new Set(matched.flatMap((condition) => 'field' in condition ? [condition.value as string] : []))];
  if (values.length !== 1 || (rule[targetField] && rule[targetField] !== values[0])) return rule;
  const remaining = conditions.filter((condition) => !matched.includes(condition));
  const normalized: Record<string, unknown> = {
    ...rule,
    [targetField]: values[0],
    ...(remaining.length ? { conditions: remaining } : {}),
  };
  if (!remaining.length) delete normalized.conditions;
  return normalized as T;
}

function extractContextConditions(condition: PriceCondition): ConditionExtraction {
  if ('field' in condition) {
    if (!isContextField(condition.field)) return { safe: true, predicates: [], remaining: condition };
    if (comparisonLabel(condition) === undefined) return { safe: false, predicates: [] };
    return { safe: true, predicates: [condition] };
  }

  if ('all' in condition) {
    const children = condition.all.map(extractContextConditions);
    if (children.some((child) => !child.safe)) return { safe: false, predicates: [] };
    const predicates = children.flatMap((child) => child.predicates);
    if (new Set(predicates.map(({ field }) => field)).size > 1) return { safe: false, predicates: [] };
    const remaining = combineAll(children.flatMap((child) => child.remaining ? [child.remaining] : []));
    return { safe: true, predicates, ...(remaining ? { remaining } : {}) };
  }

  if (hasContextField(condition)) return { safe: false, predicates: [] };
  return { safe: true, predicates: [], remaining: condition };
}

/** Move exact input-token comparisons from a PriceRule into each affected normalized rate. */
export function normalizePriceRuleContext<T extends { readonly conditions?: readonly PriceCondition[]; readonly rate_items?: readonly CollectorRateFact[]; readonly deployment?: string; readonly region?: string }>(rule: T): T {
  let normalizedRule = moveSimplePriceLabel(rule, 'deployment.scope', 'deployment');
  normalizedRule = moveSimplePriceLabel(normalizedRule, 'deployment.region', 'region');
  if (!normalizedRule.conditions?.length || !normalizedRule.rate_items?.length) return normalizedRule;
  const extraction = extractContextConditions({ all: normalizedRule.conditions });
  if (!extraction.safe || extraction.predicates.length === 0) return normalizedRule;

  const context = [...new Set(extraction.predicates.map(comparisonLabel))].join(' & ');
  if (!context) return normalizedRule;
  const existingContexts = normalizedRule.rate_items.map(({ context: itemContext }) => itemContext).filter((itemContext) => itemContext !== undefined);
  if (existingContexts.some((itemContext) => itemContext !== context)) return normalizedRule;

  const rateItems = normalizedRule.rate_items.map((item) => item.context === context ? item : { ...item, context });
  const normalized: Record<string, unknown> = { ...normalizedRule, rate_items: rateItems };
  const remainingConditions = extraction.remaining
    ? ('all' in extraction.remaining ? extraction.remaining.all : [extraction.remaining])
    : [];
  if (remainingConditions.length) normalized.conditions = remainingConditions;
  else delete normalized.conditions;
  return normalized as T;
}

function normalizePriceFactContext(price: PriceFact): PriceFact {
  if (price.pricing) return price;
  const groups: PricingGroupFact[] = (price.rules?.value ?? []).map((sourceRule) => {
    const rawRule = sourceRule as typeof sourceRule & { readonly applies_to?: readonly string[] };
    const rule = normalizePriceRuleContext({
      ...rawRule,
      ...(rawRule.conditions?.length ? {} : rawRule.when ? { conditions: [rawRule.when] } : {}),
    });
    const rates = rule.rate_items.map(({ metric, ttl, context, unit, quantity, amount_decimal, list_amount_decimal }) => ({
      metric,
      ...(ttl ? { ttl } : {}),
      ...(context ? { context } : {}),
      unit,
      ...(quantity !== 1 ? { quantity } : {}),
      value: amount_decimal,
      ...(list_amount_decimal ? { list_value: list_amount_decimal } : {}),
    }));
    const currency = price.currency;
    if (!currency) throw new Error('Legacy PriceFact missing currency during normalization');
    return {
      currency,
      rates: { value: rates, evidence: sourceRule.evidence },
      ...(rule.deployment ? { deployment: { value: rule.deployment, evidence: sourceRule.evidence } } : {}),
      ...(rule.region ? { region: { value: rule.region, evidence: sourceRule.evidence } } : {}),
      ...(rule.conditions?.length ? { conditions: rule.conditions } : {}),
      ...(rule.unsupported_metrics?.length ? { unsupported_metrics: rule.unsupported_metrics } : {}),
      ...(rawRule.applies_to?.length ? { applies_to: rawRule.applies_to } : {}),
      ...(rule.effective_from ? { effective_from: rule.effective_from } : {}),
      ...(rule.effective_until ? { effective_until: rule.effective_until } : {}),
      evidence: sourceRule.evidence,
    };
  });
  return {
    provider_model_id: price.provider_model_id,
    operation_ref: price.operation_ref,
    capability_ref: price.capability_ref,
    pricing: { value: groups, evidence: price.rules.evidence },
  } as unknown as PriceFact;
}

/** Normalize context thresholds once for every Provider collector at the shared IR boundary. */
export function normalizeProviderCollectionPricingContexts(ir: ProviderCollectionIR): ProviderCollectionIR {
  return {
    ...ir,
    services: ir.services.map((service) => ({
      ...service,
      offerings: service.offerings.map((offering) => ({
        ...offering,
        prices: offering.prices.map((price) => normalizePriceFactContext(price)),
      })),
      capabilities: service.capabilities.map((capability) => capability.prices
        ? { ...capability, prices: capability.prices.map((price) => normalizePriceFactContext(price)) }
        : capability),
    })),
  };
}

