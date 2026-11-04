import type { ProviderCollectionIR } from './ir/provider-collection.ts';
import type { ProviderDocument } from '@providerlist/schema/types';
import { serviceMarketForId } from '@providerlist/schema/types';

const CATALOG_ABSENCE_REVIEW_THRESHOLD = { min_consecutive_absences: 2, min_span_hours: 24 } as const;

export interface CatalogAbsenceEntry {
  readonly subjectRef: string;
  readonly serviceId: string;
  readonly market: string;
  readonly providerModelId: string;
  readonly observations: readonly { readonly observedAt: string; readonly sourceRefs: readonly string[] }[];
}

export interface CatalogAbsenceState {
  readonly providerId: string;
  readonly entries: readonly CatalogAbsenceEntry[];
}

export interface CatalogAbsenceReview {
  readonly entries: readonly CatalogAbsenceEntry[];
  readonly messages: readonly string[];
}

function marketOf(service: ProviderCollectionIR['services'][number]): string {
  return serviceMarketForId(service.id.value)?.toLowerCase() ?? 'unknown';
}

function listedModels(ir: ProviderCollectionIR): Map<string, { serviceId: string; market: string }> {
  const listed = new Map<string, { serviceId: string; market: string }>();
  for (const service of ir.services) {
    for (const offering of service.offerings) {
      const serviceId = offering.service_id.value;
      const modelId = offering.provider_model_id.value;
      listed.set(`${serviceId}\0${modelId}`, { serviceId, market: marketOf(service) });
    }
  }
  return listed;
}

function completeCatalogMarkets(ir: ProviderCollectionIR): Map<string, string[]> {
  const markets = new Map<string, string[]>();
  const serviceCounts = new Map<string, number>();
  for (const service of ir.services) {
    const market = marketOf(service);
    serviceCounts.set(market, (serviceCounts.get(market) ?? 0) + 1);
  }
  for (const record of ir.coverage) {
    if (record.scope !== 'model_catalog' || record.status !== 'complete') continue;
    const market = record.market?.toLowerCase();
    if (!market) continue;
    // Coverage is market-scoped in IR. Avoid applying it to multiple service
    // lines when the contract cannot say which service the complete list covers.
    if (serviceCounts.get(market) !== 1) continue;
    const refs = markets.get(market) ?? [];
    refs.push(record.source_ref);
    markets.set(market, refs);
  }
  return markets;
}

function isCatalogAbsenceObservation(
  value: unknown,
): value is CatalogAbsenceEntry['observations'][number] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const observation = value as Partial<CatalogAbsenceEntry['observations'][number]>;
  return typeof observation.observedAt === 'string' && Array.isArray(observation.sourceRefs);
}

function isCatalogAbsenceEntry(value: unknown): value is CatalogAbsenceEntry {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const entry = value as Partial<CatalogAbsenceEntry>;
  return typeof entry.subjectRef === 'string' && typeof entry.serviceId === 'string' &&
    typeof entry.market === 'string' && typeof entry.providerModelId === 'string' &&
    Array.isArray(entry.observations) && entry.observations.every(isCatalogAbsenceObservation);
}

function validState(value: unknown, providerId: string): CatalogAbsenceState {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { providerId, entries: [] };
  const candidate = value as Partial<CatalogAbsenceState>;
  if (candidate.providerId !== providerId || !Array.isArray(candidate.entries)) return { providerId, entries: [] };
  return {
    providerId,
    entries: candidate.entries.filter(isCatalogAbsenceEntry),
  };
}

function eligible(entry: CatalogAbsenceEntry): boolean {
  const observations = entry.observations;
  if (observations.length < CATALOG_ABSENCE_REVIEW_THRESHOLD.min_consecutive_absences) return false;
  const first = Date.parse(observations[0]!.observedAt);
  const last = Date.parse(observations.at(-1)!.observedAt);
  return Number.isFinite(first) && Number.isFinite(last) && last - first >= CATALOG_ABSENCE_REVIEW_THRESHOLD.min_span_hours * 3_600_000;
}

/** Propose retired status only for formal Offerings backed by the complete-catalog threshold. */
export function applyCatalogAbsenceRetirementProposals(
  document: ProviderDocument,
  state: unknown,
  providerId: string,
): ProviderDocument {
  const candidates = validState(state, providerId).entries.filter(eligible);
  if (!candidates.length) return document;

  const byServiceAndModel = new Map(candidates.map((entry) => [`${entry.serviceId}\0${entry.providerModelId}`, entry]));
  let changed = false;
  const services = document.services.map((service) => {
    const offerings = service.offerings?.map((offering) => {
      if (!byServiceAndModel.has(`${service.id}\0${offering.id}`) || offering.status === 'retired') return offering;
      changed = true;
      return { ...offering, status: 'retired' as const };
    });
    return offerings ? { ...service, offerings } : service;
  });
  return changed ? { ...document, services } : document;
}

function inlineCode(value: string): string {
  return `\`${value.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\``;
}

/** Track only absences backed by complete model-catalog observations in the same market. */
export function updateCatalogAbsenceState(input: {
  readonly providerId: string;
  readonly previous: ProviderCollectionIR | null;
  readonly current: ProviderCollectionIR;
  readonly observedAt: string;
  readonly state: unknown;
}): { readonly state: CatalogAbsenceState; readonly review: CatalogAbsenceReview } {
  const previousState = validState(input.state, input.providerId);
  const previousListings = input.previous ? listedModels(input.previous) : new Map<string, { serviceId: string; market: string }>();
  const currentListings = listedModels(input.current);
  const currentComplete = completeCatalogMarkets(input.current);
  const previousComplete = input.previous ? completeCatalogMarkets(input.previous) : new Map<string, string[]>();
  const entries = new Map(previousState.entries.map((entry) => [entry.subjectRef, entry]));

  // A complete observation that lists a model clears its absence streak.
  for (const [subjectRef, entry] of entries) {
    if (currentListings.has(`${entry.serviceId}\0${entry.providerModelId}`)) {
      entries.delete(subjectRef);
      continue;
    }
    if (!currentComplete.has(entry.market.toLowerCase())) {
      // An incomplete catalog breaks consecutiveness but does not imply restoration.
      entries.set(subjectRef, { ...entry, observations: [] });
      continue;
    }
    const sourceRefs = currentComplete.get(entry.market.toLowerCase()) ?? [];
    entries.set(subjectRef, {
      ...entry,
      observations: [...entry.observations, { observedAt: input.observedAt, sourceRefs }],
    });
  }

  // Start a streak only when both consecutive snapshots have complete coverage for that market.
  for (const [key, identity] of previousListings) {
    if (currentListings.has(key) || !currentComplete.has(identity.market) || !previousComplete.has(identity.market)) continue;
    const [serviceId, providerModelId] = key.split('\0');
    if (!serviceId || !providerModelId) continue;
    const subjectRef = `${serviceId}/${providerModelId}`;
    if (entries.has(subjectRef)) continue;
    entries.set(subjectRef, {
      subjectRef,
      serviceId,
      market: identity.market,
      providerModelId,
      observations: [{ observedAt: input.observedAt, sourceRefs: currentComplete.get(identity.market) ?? [] }],
    });
  }

  const nextState: CatalogAbsenceState = {
    providerId: input.providerId,
    entries: [...entries.values()].sort((left, right) => left.subjectRef.localeCompare(right.subjectRef)),
  };
  const reviewEntries = nextState.entries.filter(eligible);
  return {
    state: nextState,
    review: {
      entries: reviewEntries,
      messages: reviewEntries.map((entry) => `${inlineCode(entry.providerModelId)}（${inlineCode(entry.market)} / ${inlineCode(entry.serviceId)}）：连续 ${entry.observations.length} 次完整目录缺席，跨度 ${((Date.parse(entry.observations.at(-1)!.observedAt) - Date.parse(entry.observations[0]!.observedAt)) / 3_600_000).toFixed(1)} 小时；PR 提议将该 Offering 的 status 调整为 ${inlineCode('retired')}，仍需人工审核并合并后才生效。来源：${[...new Set(entry.observations.flatMap(({ sourceRefs }) => sourceRefs))].map(inlineCode).join(', ')}；观察：${entry.observations.map(({ observedAt }) => inlineCode(observedAt)).join(', ')}。`),
    },
  };
}

export function renderCatalogAbsenceReview(review: CatalogAbsenceReview): string {
  if (!review.entries.length) return '';
  return [
    '## 连续目录缺席复核',
    '',
    '以下 Offering 在同一市场的完整官方模型目录连续缺席至少两次，且观察跨度不少于 24 小时。PR 会提议将对应正式 Offering 的 `status` 改为 `retired`；这是待审变更，合并前不会生效。请核对目录覆盖范围和来源证据，确认不存在分页、区域或产品线遗漏后再合并。',
    '',
    ...review.messages.map((message) => `- ${message}`),
    '',
  ].join('\n');
}
