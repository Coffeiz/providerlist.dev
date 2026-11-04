import { isDecimalString, mulDecimal, normalizeDecimal } from './pricing/decimal.ts';
import { buildFxIndex, convertWithFx, type FxReference } from './pricing/fx.ts';

type JsonRecord = Record<string, unknown>;

export const CHAT_CATALOG_FIELDS = ['input', 'limits', 'pricing', 'apis'] as const;
export type ChatCatalogField = (typeof CHAT_CATALOG_FIELDS)[number];

interface ChatOffering extends JsonRecord {
  provider_id: string;
  service_id: string;
  market: string;
  id: string;
  model_ref?: string | null;
  type: string;
  limits?: JsonRecord;
}

interface ChatModel extends JsonRecord {
  id: string;
  modalities?: JsonRecord;
}

interface ChatProviderDocument extends JsonRecord {
  provider?: JsonRecord;
  services?: Array<JsonRecord & {
    id: string;
    endpoints?: Array<JsonRecord & { id: string; base_url?: string }>;
    offerings?: Array<JsonRecord & { id: string }>;
  }>;
}

interface ApiRecord extends JsonRecord {
  id: string;
  name?: string;
  channel?: string;
  url?: string;
  interface: string;
}

interface ChatModelRecord extends JsonRecord {
  id: string;
  pricing?: JsonRecord[];
}

interface MarketRecord {
  apis?: ApiRecord[];
  models: Record<string, ChatModelRecord[]>;
}

function records(value: unknown): JsonRecord[] {
  return Array.isArray(value) ? value.filter((item): item is JsonRecord => Boolean(item) && typeof item === 'object' && !Array.isArray(item)) : [];
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.length ? value : undefined;
}

function normalizedTokenAmount(rate: JsonRecord): string | undefined {
  const amount = rate.value;
  if (!isDecimalString(amount)) return undefined;
  const quantity = rate.quantity ?? 1;
  if (typeof quantity !== 'number' || !Number.isFinite(quantity) || quantity < 0) return undefined;
  const unit = rate.unit;
  const factor = unit === 'per_1m_tokens' ? '1'
    : unit === 'per_1k_tokens' ? '1000'
      : unit === 'per_token' ? '1000000' : undefined;
  if (!factor) return undefined;
  return normalizeDecimal(mulDecimal(mulDecimal(amount, String(quantity)), factor));
}

function pricingSchedules(groups: JsonRecord[]): JsonRecord[] | undefined {
  const schedules = new Map<string, JsonRecord>();
  for (const group of groups) {
    const currency = text(group.currency);
    if (!currency) continue;
    {
      const rates: JsonRecord[] = [];
      for (const rate of records(group.rates)) {
        const metric = text(rate.metric);
        if (!metric) continue;
        const amount = normalizedTokenAmount(rate);
        if (amount === undefined) continue;
        const item: JsonRecord = {
          metric,
          ...(text(rate.ttl) ? { ttl: text(rate.ttl) } : {}),
          ...(text(rate.context) ? { context: text(rate.context) } : {}),
          unit: 'per_1m_tokens',
          value: amount,
        };
        if (isDecimalString(rate.list_value)) {
          const listAmount = normalizedTokenAmount({ ...rate, value: rate.list_value });
          if (listAmount !== undefined) item.list_value = listAmount;
        }
        rates.push(item);
      }
      if (!rates.length) continue;

      rates.sort((left, right) => JSON.stringify([left.metric, left.ttl, left.context]).localeCompare(JSON.stringify([right.metric, right.ttl, right.context])));
      const schedule: JsonRecord = {
        currency,
        rates,
      };
      if (typeof group.region === 'string') schedule.region = group.region;
      const conditions = pricingConditions(group.conditions);
      if (group.conditions !== undefined && !conditions) continue;
      if (conditions) schedule.conditions = conditions;
      schedules.set(JSON.stringify(schedule), schedule);
    }
  }
  return schedules.size ? [...schedules.values()].sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right))) : undefined;
}

function normalizePricingCurrency(
  schedules: JsonRecord[] | undefined,
  targetCurrency: string | undefined,
  fxReference: FxReference | undefined,
): JsonRecord[] | undefined {
  if (!schedules || !targetCurrency || !fxReference) return schedules;
  const index = buildFxIndex(fxReference);
  return schedules.map((schedule) => {
    const sourceCurrency = text(schedule.currency);
    if (!sourceCurrency || sourceCurrency === targetCurrency) return schedule;
    const rates = schedule.rates;
    if (!Array.isArray(rates)) return schedule;
    const convertedRates: JsonRecord[] = [];
    for (const rate of rates) {
      if (!rate || typeof rate !== 'object' || Array.isArray(rate)) return schedule;
      const amount = (rate as JsonRecord).value;
      if (!isDecimalString(amount)) return schedule;
      const conversion = convertWithFx(amount, sourceCurrency, targetCurrency, index, { scale: 10 });
      if (!conversion.ok) return schedule;
      const converted: JsonRecord = { ...(rate as JsonRecord), value: conversion.conversion.amount };
      const listValue = (rate as JsonRecord).list_value;
      if (listValue !== undefined) {
        if (!isDecimalString(listValue)) return schedule;
        const listConversion = convertWithFx(listValue, sourceCurrency, targetCurrency, index, { scale: 10 });
        if (!listConversion.ok) return schedule;
        converted.list_value = listConversion.conversion.amount;
      }
      convertedRates.push(converted);
    }
    // If any schedule amount lacks a trustworthy conversion, keep the entire rule in its source currency.
    return { ...schedule, currency: targetCurrency, rates: convertedRates };
  });
}

function modelInput(model: ChatModel | undefined): string[] | undefined {
  const modalities = model?.modalities;
  const input = modalities && Array.isArray(modalities.input) ? modalities.input.filter((value): value is string => typeof value === 'string') : [];
  return input.length ? [...new Set(input)] : undefined;
}

function pricingConditionNode(value: unknown): JsonRecord | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const condition = value as JsonRecord;
  if (typeof condition.field === 'string' && 'value' in condition) {
    return { field: condition.field, ...(condition.operator && condition.operator !== 'eq' ? { operator: condition.operator } : {}), value: condition.value };
  }
  if (Array.isArray(condition.all)) {
    const all = condition.all.map(pricingConditionNode).filter((item): item is JsonRecord => Boolean(item));
    return all.length ? { all } : undefined;
  }
  if (Array.isArray(condition.any)) {
    const any = condition.any.map(pricingConditionNode).filter((item): item is JsonRecord => Boolean(item));
    return any.length ? { any } : undefined;
  }
  if (condition.not) {
    const not = pricingConditionNode(condition.not);
    return not ? { not } : undefined;
  }
  return undefined;
}

function pricingConditions(value: unknown): JsonRecord[] | undefined {
  if (!Array.isArray(value)) return undefined;
  // The rule's condition list is an implicit AND; nested alternatives keep their grouping.
  const conditions = value.map(pricingConditionNode).filter((item): item is JsonRecord => Boolean(item));
  if (conditions.length !== value.length) return undefined;
  return conditions.length ? conditions : undefined;
}

function addApi(market: MarketRecord, endpoint: JsonRecord, protocol: string): void {
  const endpointId = text(endpoint.id);
  const url = text(endpoint.base_url);
  if (!endpointId || !url) return;
  const id = `${endpointId}/${protocol}`;
  market.apis ??= [];
  if (!market.apis.some((api) => api.id === id)) {
    const api: ApiRecord = { id, interface: protocol, url };
    const name = text(endpoint.name) ?? text(endpoint.display_name);
    const channel = text(endpoint.channel);
    if (name) api.name = name;
    if (channel) api.channel = channel;
    market.apis.push(api);
  }
}

function addApisForOffering(
  market: MarketRecord,
  endpoints: JsonRecord[],
): void {
  for (const endpoint of endpoints) {
    for (const route of records(endpoint.routes)) {
      const protocol = text(route.protocol);
      if (protocol) addApi(market, endpoint, protocol);
    }
  }
}

export function projectChatCatalog(
  offerings: readonly ChatOffering[],
  providerDocuments: ReadonlyMap<string, JsonRecord>,
  canonicalModels: ReadonlyMap<string, JsonRecord>,
  fields: readonly ChatCatalogField[],
  options: { currency?: string; fxReference?: FxReference } = {},
): { providers: Array<{ id: string; markets: Record<string, MarketRecord> }> } {
  const providers = new Map<string, Map<string, MarketRecord>>();
  const modelByRef = (item: ChatOffering) => item.model_ref ? canonicalModels.get(item.model_ref) as ChatModel | undefined : undefined;

  for (const item of offerings) {
    if (item.type !== 'chat') continue;
    const doc = providerDocuments.get(item.provider_id) as ChatProviderDocument | undefined;
    const service = doc?.services?.find((candidate) => candidate.id === item.service_id);
    const offering = service?.offerings?.find((candidate) => candidate.id === item.id);
    let markets = providers.get(item.provider_id);
    if (!markets) { markets = new Map(); providers.set(item.provider_id, markets); }
    let market = markets.get(item.market);
    if (!market) { market = { apis: [], models: { chat: [] } }; markets.set(item.market, market); }

    const model: ChatModelRecord = { id: item.id };
    if (fields.includes('input')) {
      const input = modelInput(modelByRef(item));
      if (input) model.input = input;
    }
    if (fields.includes('limits') && item.limits) model.limits = item.limits;
    if (fields.includes('pricing')) {
      const pricing = normalizePricingCurrency(
        pricingSchedules(records(offering?.pricing)),
        options.currency,
        options.fxReference,
      );
      if (pricing) model.pricing = pricing;
    }
    if (fields.includes('apis')) {
      addApisForOffering(market, service?.endpoints ?? []);
    }
    const chatModels = market.models.chat ?? (market.models.chat = []);
    const existing = chatModels.find((candidate) => candidate.id === model.id);
    if (!existing) chatModels.push(model);
    else {
      // A Provider/market can publish the same model through multiple offerings.
      // Never pick one of conflicting model facts arbitrarily.
      if (Array.isArray(existing.pricing) || Array.isArray(model.pricing)) {
        const schedules = new Map([...(existing.pricing ?? []), ...(model.pricing ?? [])].map((schedule) => [JSON.stringify(schedule), schedule]));
        existing.pricing = [...schedules.values()].sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
      }
      for (const field of ['input', 'limits'] as const) {
        if (JSON.stringify(existing[field]) !== JSON.stringify(model[field])) delete existing[field];
      }
    }
  }

  return {
    providers: [...providers.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([id, markets]) => ({
      id,
      markets: Object.fromEntries([...markets.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([marketId, market]) => [marketId, {
        ...(fields.includes('apis') ? { apis: (market.apis ?? []).sort((left, right) => left.id.localeCompare(right.id)) } : {}),
        models: { chat: (market.models.chat ?? []).sort((left, right) => left.id.localeCompare(right.id)) },
      }])),
    })),
  };
}
