import { computed, reactive, watch } from 'vue';
import { CHAT_CATALOG_FIELDS, projectChatCatalog, type ChatCatalogField } from '@providerlist/shared/chat-catalog';
import type { FxReference } from '@providerlist/schema/types';
import type { ProviderSummary } from '../types.ts';

type Status = 'active' | 'restricted' | 'deprecated' | 'retired' | 'unknown';
type RecordValue = Record<string, unknown>;
interface IndexItem extends RecordValue {
  provider_id: string; service_id: string; market: string;
  id: string; model_ref?: string | null; type: string; status: Status;
}
interface ProviderSource extends RecordValue {
  schema_version?: string;
  data_version?: string;
  generated_at?: string;
  provider: Pick<ProviderSummary, 'id' | 'name' | 'aliases'>;
  services: Array<RecordValue & { id: string; endpoints?: RecordValue[]; offerings?: RecordValue[] }>;
}
interface DatasetEnvelope { schema_version: string; data_version: string; generated_at: string }
interface ModelsIndex extends DatasetEnvelope { models: Array<RecordValue & { id: string }> }
interface FxDocument extends DatasetEnvelope { fx_reference: FxReference }

export const BUILDER_FIELDS = CHAT_CATALOG_FIELDS;
export type BuilderField = ChatCatalogField;

const PREFERENCES_KEY = 'providerlist:json-builder:v1';
const BUILDER_STATUSES: readonly Status[] = ['active', 'restricted', 'deprecated', 'retired', 'unknown'];

interface BuilderPreferences {
  providerIds?: string[] | null;
  markets?: string[] | null;
  statuses?: Status[];
  fields?: BuilderField[];
  currency?: string;
}

function readPreferences(): BuilderPreferences {
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    if (!raw) return {};
    const value: unknown = JSON.parse(raw);
    return value && typeof value === 'object' ? value as BuilderPreferences : {};
  } catch {
    // Builder preferences are optional; unavailable storage should not block the page.
    return {};
  }
}

function savePreferences(): void {
  try {
    const allMarkets = [...new Set(state.offerings.filter((item) => item.type === 'chat').map((item) => item.market))];
    const preferences: BuilderPreferences = {
      providerIds: state.providerIds.length === state.providers.length ? null : state.providerIds,
      markets: state.markets.length === allMarkets.length && allMarkets.every((market) => state.markets.includes(market))
        ? null
        : state.markets,
      statuses: state.statuses,
      fields: state.fields,
      currency: state.currency,
    };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  } catch {
    // Storage can be disabled or full; the Builder remains usable for this session.
  }
}

const state = reactive({
  loading: false, error: '', schemaVersion: '', dataVersion: '', generatedAt: '', offerings: [] as IndexItem[],
  canonicalModels: [] as ModelsIndex['models'],
  providers: [] as Array<Pick<ProviderSummary, 'id' | 'name' | 'aliases'>>, providerDocs: {} as Record<string, ProviderSource>,
  fxReference: null as FxReference | null, currency: 'original',
  providerIds: [] as string[], markets: [] as string[], statuses: ['active'] as Status[],
  fields: ['input', 'limits', 'pricing', 'apis'] as BuilderField[],
});

let preferencesReady = false;
watch(
  () => [state.providerIds.join(','), state.markets.join(','), state.statuses.join(','), state.fields.join(','), state.currency] as const,
  () => { if (preferencesReady) savePreferences(); },
);

async function json<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json() as Promise<T>;
}

let loadRequest: Promise<void> | undefined;
export function loadJsonBuilder(): Promise<void> {
  if (loadRequest) return loadRequest;
  preferencesReady = false;
  state.loading = true; state.error = '';
  loadRequest = (async () => {
    try {
      const [index, providerIndex, models, fx] = await Promise.all([
        json<DatasetEnvelope & { items: IndexItem[] }>('/assets/datasets/offerings.json'),
        json<DatasetEnvelope & { providers: Array<Pick<ProviderSummary, 'id' | 'name' | 'aliases'>> }>('/assets/datasets/providers.json'),
        json<ModelsIndex>('/assets/datasets/models.json'),
        json<FxDocument>('/v1/fx.json').catch(() => null),
      ]);
      if ([providerIndex, models].some((dataset) => dataset.data_version !== index.data_version || dataset.schema_version !== index.schema_version || dataset.generated_at !== index.generated_at)) throw new Error('Published datasets use different versions or generation times');
      if (fx && (fx.data_version !== index.data_version || fx.schema_version !== index.schema_version || fx.generated_at !== index.generated_at)) throw new Error('Published FX and site datasets use different versions or generation times');
      state.schemaVersion = index.schema_version;
      state.dataVersion = index.data_version;
      state.generatedAt = index.generated_at;
      state.offerings = index.items;
      state.canonicalModels = models.models;
      state.providers = providerIndex.providers;
      state.fxReference = fx?.fx_reference ?? null;
      state.providerIds = providerIndex.providers.map((provider) => provider.id);
      const chatItems = index.items.filter((item) => item.type === 'chat');
      state.markets = [...new Set(chatItems.map((item) => item.market))].sort();
      const availableProviderIds = new Set(state.providers.map((provider) => provider.id));
      const availableMarkets = new Set(chatItems.map((item) => item.market));
      const currencies = fx ? [fx.fx_reference.base, ...fx.fx_reference.quotes.map((quote) => quote.currency)] : [];
      const saved = readPreferences();
      if (saved.providerIds === null) state.providerIds = [...availableProviderIds];
      else if (Array.isArray(saved.providerIds)) state.providerIds = saved.providerIds.filter((id): id is string => typeof id === 'string' && availableProviderIds.has(id));
      if (saved.markets === null) state.markets = [...availableMarkets].sort();
      else if (Array.isArray(saved.markets)) state.markets = saved.markets.filter((market): market is string => typeof market === 'string' && availableMarkets.has(market));
      if (Array.isArray(saved.statuses)) state.statuses = saved.statuses.filter((item): item is Status => BUILDER_STATUSES.includes(item));
      if (Array.isArray(saved.fields)) state.fields = saved.fields.filter((item): item is BuilderField => BUILDER_FIELDS.includes(item));
      if (saved.currency === 'original' || currencies.includes(saved.currency ?? '')) state.currency = saved.currency!;
      const params = new URLSearchParams(location.search);
      if (params.has('providers')) state.providerIds = params.get('providers')!.split(',').filter((id) => state.providers.some((provider) => provider.id === id));
      if (params.has('markets')) {
        state.markets = params.get('markets')!.split(',').filter((market) => availableMarkets.has(market));
      }
      if (params.has('statuses')) state.statuses = params.get('statuses')!.split(',').filter((item): item is Status => BUILDER_STATUSES.includes(item as Status));
      if (params.has('fields')) state.fields = params.get('fields')!.split(',').filter((item): item is BuilderField => BUILDER_FIELDS.includes(item as BuilderField));
      const requestedCurrency = params.get('currency');
      if (params.has('currency')) state.currency = requestedCurrency && currencies.includes(requestedCurrency) ? requestedCurrency : 'original';
      preferencesReady = true;
    } catch (error) { state.error = error instanceof Error ? error.message : String(error); }
    finally { state.loading = false; loadRequest = undefined; }
  })();
  return loadRequest;
}

const selected = computed(() => state.offerings.filter((item) =>
  item.type === 'chat' && state.providerIds.includes(item.provider_id) &&
  state.markets.includes(item.market) && state.statuses.includes(item.status),
));

const preview = computed(() => {
  const docs = new Map(Object.entries(state.providerDocs));
  const models = new Map(state.canonicalModels.map((model) => [model.id, model]));
  return projectChatCatalog(selected.value, docs, models, state.fields, {
    currency: state.currency === 'original' ? undefined : state.currency,
    fxReference: state.fxReference ?? undefined,
  });
});

export function getJsonBuilderState() { return state; }
export function getJsonBuilderSelected() { return selected; }
export function getJsonBuilderPreview() { return computed(() => JSON.stringify({ schema_version: state.schemaVersion, data_version: state.dataVersion, generated_at: state.generatedAt, ...(state.fields.includes('pricing') ? { pricing_currency: state.currency } : {}), ...preview.value }, null, 2)); }
export function getJsonBuilderCount() { return computed(() => new Set(selected.value.map((item) => `${item.provider_id}\u0000${item.market}\u0000${item.id}`)).size); }
export function getJsonBuilderShareUrl(): string {
  const params = new URLSearchParams(location.search);
  for (const key of ['providers', 'markets', 'types', 'statuses', 'fields', 'preset', 'currency']) params.delete(key);
  if (state.providerIds.length !== state.providers.length) params.set('providers', state.providerIds.join(','));
  if (state.markets.length) params.set('markets', state.markets.join(','));
  params.set('statuses', state.statuses.join(',')); params.set('fields', state.fields.join(','));
  if (state.currency !== 'original') params.set('currency', state.currency);
  return `${location.origin}${location.pathname}?${params.toString()}#json-builder`;
}
export function getJsonBuilderApiUrl(): string {
  const params = new URLSearchParams();
  if (state.providerIds.length !== state.providers.length) params.set('providers', state.providerIds.join(','));
  const allMarkets = [...new Set(state.offerings.filter((item) => item.type === 'chat').map((item) => item.market))].sort();
  if (state.markets.length !== allMarkets.length || allMarkets.some((market) => !state.markets.includes(market))) {
    params.set('markets', state.markets.join(','));
  }
  if (state.statuses.length !== 1 || state.statuses[0] !== 'active') params.set('statuses', state.statuses.join(','));
  params.set('fields', state.fields.join(','));
  if (state.currency !== 'original') params.set('currency', state.currency);
  return `${location.origin}/v1/providerlist.json?${params.toString()}`;
}
export async function loadBuilderProviderDocs(ids: readonly string[]): Promise<void> {
  if (!state.fields.some((field) => field === 'apis' || field === 'pricing')) return;
  const missing = [...new Set(ids)].filter((id) => !state.providerDocs[id]);
  try {
    const docs = await Promise.all(missing.map((id) => json<ProviderSource>(`/assets/datasets/providers/${encodeURIComponent(id)}.json`)));
    for (const doc of docs) {
      if (doc.data_version !== state.dataVersion || doc.schema_version !== state.schemaVersion || doc.generated_at !== state.generatedAt) throw new Error('Site datasets use different versions or generation times');
      state.providerDocs[doc.provider.id] = doc;
    }
  } catch (error) {
    state.error = error instanceof Error ? error.message : String(error);
  }
}
export function refreshBuilderPreview(): void { void loadBuilderProviderDocs(state.providerIds); }
