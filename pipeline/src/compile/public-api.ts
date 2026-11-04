import type {
  Model, ProviderDocument, PublicModelList,
  PublicOfferingList, PublicProviderResource, PublicResourceEnvelope, PricingGroup,
  SiteOfferingDataset, PublicPricingGroup,
} from '@providerlist/schema/types';
import { serviceMarketForId } from '@providerlist/schema/types';

type PublicEnvelope = PublicResourceEnvelope;

const clean = <T>(value: T): T => {
  if (Array.isArray(value)) return value.map(clean) as T;
  if (!value || typeof value !== 'object') return value;
  const out: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (['evidence_refs', 'field_origin_refs', 'source_refs', 'sources', 'evidence', 'data_source_kinds', 'source_bindings', 'official_integration'].includes(key)) continue;
    out[key] = clean(item);
  }
  return out as T;
};

function pricingView(pricing: readonly PricingGroup[]) {
  const groups: PublicPricingGroup[] = pricing.map((group) => ({
    currency: group.currency,
    rates: group.rates.map((rate) => ({
      metric: rate.metric,
      ...(rate.context ? { context: rate.context } : {}),
      ...(rate.ttl ? { ttl: rate.ttl } : {}),
      unit: rate.unit,
      value: rate.value,
      ...(rate.list_value ? { list_value: rate.list_value } : {}),
      ...(rate.quantity !== undefined ? { quantity: rate.quantity } : {}),
    })),
    ...(group.deployment ? { deployment: group.deployment } : {}),
    ...(group.region ? { region: group.region } : {}),
    ...(group.conditions?.length ? { conditions: group.conditions.map(publicPriceCondition) } : {}),
    ...(group.applies_to?.length ? { applies_to: group.applies_to } : {}),
    ...(group.unsupported_metrics?.length ? { unsupported_metrics: group.unsupported_metrics } : {}),
    ...(group.effective_from ? { effective_from: group.effective_from } : {}),
    ...(group.effective_until ? { effective_until: group.effective_until } : {}),
  }));
  return groups;
}

function publicPriceCondition(condition: import('@providerlist/schema/types').PriceCondition): import('@providerlist/schema/types').PriceCondition {
  if ('field' in condition) {
    const { operator, ...rest } = condition;
    return operator === undefined || operator === 'eq' ? rest : condition;
  }
  if ('not' in condition) return { not: publicPriceCondition(condition.not) };
  if ('all' in condition) return { all: condition.all.map(publicPriceCondition) };
  return { any: condition.any.map(publicPriceCondition) };
}

export function projectProvider(
  document: ProviderDocument,
  envelope: PublicEnvelope,
): PublicProviderResource {
  const services = document.services.map(({ id: _id, provider_id: _providerId, name: _name, plan_ids: _planIds, offerings, ...service }) => ({
    ...clean(service),
    ...(offerings ? {
      offerings: offerings.map(({ service_id: _serviceId, model_ref: _modelRef, ...offering }) => clean(offering)),
    } : {}),
  }));
  const plans = document.plans?.map(({ service_ref: _serviceRef, ...plan }) => clean(plan));
  return clean({
    ...envelope,
    provider: document.provider,
    services,
    ...(plans?.length ? { plans } : {}),
  }) as PublicProviderResource;
}

export function buildPublicResources(
  documents: readonly ProviderDocument[], models: readonly Model[],
  envelope: PublicEnvelope,
) {
  const modelsById = new Map(models.map((model) => [model.id, model]));
  const providerDocs = documents.map((document) => projectProvider(document, envelope));
  const stableItems: Record<string, unknown>[] = [];
  const referencedModels = new Map<string, Model>();
  const siteItems: Record<string, unknown>[] = [];
  for (const document of documents) for (const service of document.services) for (const offering of service.offerings ?? []) {
    const status = offering.status ?? 'unknown';
    const model = offering.model_ref ? modelsById.get(offering.model_ref) : undefined;
    const item = {
      provider_id: document.provider.id, service_id: service.id,
      market: serviceMarketForId(service.id)!, id: offering.id,
      type: model?.type ?? 'unknown',
      status,
      ...(model?.limits ? { limits: clean(model.limits) } : {}),
      ...(offering.pricing?.length ? { pricing: pricingView(offering.pricing) } : {}),
    };
    siteItems.push({ ...item, model_ref: offering.model_ref });
    if (['active', 'restricted', 'deprecated'].includes(status)) {
      stableItems.push(item);
      if (model) referencedModels.set(model.id, model);
    }
  }
  const offeringList: PublicOfferingList = { ...envelope, total: stableItems.length, items: stableItems as unknown as PublicOfferingList['items'] };
  const modelLists = new Map<string, PublicModelList>();
  const types = new Set([...models.map((model) => model.type ?? 'unknown')]);
  for (const type of types) {
    const items = [...referencedModels.values()].filter((model) => (model.type ?? 'unknown') === type).map((model) => ({
      id: model.id, name: model.name, type: model.type ?? 'unknown', developer_name: model.developer_name,
      ...(model.release_date ? { release_date: model.release_date } : {}),
      ...(model.modalities ? { modalities: clean(model.modalities) } : {}),
      ...(model.capabilities ? { capabilities: clean(model.capabilities) } : {}),
      ...(model.limits ? { limits: clean(model.limits) } : {}),
    }));
    modelLists.set(type, { ...envelope, type, total: items.length, items });
  }
  const allModelItems = [...referencedModels.values()].map((model) => ({
    id: model.id, name: model.name, type: model.type ?? 'unknown', developer_name: model.developer_name,
    ...(model.release_date ? { release_date: model.release_date } : {}),
    ...(model.modalities ? { modalities: clean(model.modalities) } : {}),
    ...(model.capabilities ? { capabilities: clean(model.capabilities) } : {}),
    ...(model.limits ? { limits: clean(model.limits) } : {}),
  }));
  const allModelList: PublicModelList = {
    ...envelope, type: 'all', total: allModelItems.length, items: allModelItems,
  };
  const offeringDataset: SiteOfferingDataset = { ...envelope, total: siteItems.length, items: siteItems as unknown as SiteOfferingDataset['items'] };
  return { providerDocs, offeringList, modelLists, allModelList, offeringDataset };
}
