import { CHAT_CATALOG_FIELDS, projectChatCatalog, type ChatCatalogField } from '@providerlist/shared/chat-catalog';
import type { FxReference } from '@providerlist/schema/types';

type JsonRecord = Record<string, unknown>;
type OfferingStatus = 'active' | 'restricted' | 'deprecated' | 'unknown' | 'retired';

interface OfferingItem extends JsonRecord {
  provider_id: string; service_id: string; id: string; market: string;
  model_ref?: string | null; type: string; status: OfferingStatus;
}
interface ProviderSummary { id: string }
interface DatasetEnvelope { schema_version: string; data_version: string; generated_at: string }
interface ProviderIndex extends DatasetEnvelope { providers: ProviderSummary[] }
interface OfferingIndex extends DatasetEnvelope { items: OfferingItem[] }
interface ModelsIndex extends DatasetEnvelope { models: Array<JsonRecord & { id: string }> }
interface ProviderDocument extends JsonRecord, DatasetEnvelope { provider: { id: string } }
interface FxDocument extends DatasetEnvelope { fx_reference: FxReference }

interface QueryConfig {
  providers: string[];
  markets: string[];
  statuses: OfferingStatus[];
  fields: ChatCatalogField[];
  currency: string;
}

const FIELDS = new Set<string>(CHAT_CATALOG_FIELDS);
const STATUSES = new Set<OfferingStatus>(['active', 'restricted', 'deprecated', 'unknown', 'retired']);
const MAX_URL_LENGTH = 4096;
const MAX_PROVIDERS = 50;
const MAX_RESULTS = 5000;
const MAX_RESPONSE_BYTES = 5 * 1024 * 1024;

function jsonResponse(body: unknown, status: number, cache = false): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': cache ? 'public, max-age=60, s-maxage=300, stale-while-revalidate=300' : 'no-store',
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'accept',
    },
  });
}

function error(status: number, code: string, message: string): Response {
  return jsonResponse({ error: { code, message } }, status);
}

async function loadJson<T>(assets: { fetch(request: Request): Promise<Response> }, requestUrl: URL, path: string): Promise<T> {
  const url = new URL(path, requestUrl.origin);
  const response = await assets.fetch(new Request(url, { headers: { accept: 'application/json' } }));
  const contentType = response.headers.get('content-type') ?? '';
  if (!response.ok || !contentType.includes('application/json')) throw new Error(`Published dataset unavailable: ${path}`);
  return response.json() as Promise<T>;
}

function readList(url: URL, key: string, allowed: ReadonlySet<string>, fallback: string[]): string[] {
  const values = url.searchParams.getAll(key);
  if (!values.length) return fallback;
  if (values.length !== 1) throw new Error(`Query parameter "${key}" must appear once.`);
  const value = values[0] ?? '';
  if (!value) return [];
  const items = value.split(',');
  if (items.length > allowed.size || items.some((item) => !allowed.has(item)) || new Set(items).size !== items.length) {
    throw new Error(`Query parameter "${key}" contains an unsupported or repeated value.`);
  }
  return items;
}

function parseConfig(url: URL, providerIds: string[], markets: string[], currencies: string[]): QueryConfig {
  const allowedParameters = new Set(['providers', 'markets', 'statuses', 'fields', 'currency']);
  for (const key of url.searchParams.keys()) {
    if (!allowedParameters.has(key)) throw new Error(`Query parameter "${key}" is not supported.`);
  }
  const providers = readList(url, 'providers', new Set(providerIds), providerIds);
  if (providers.length > MAX_PROVIDERS) throw new Error(`Choose at most ${MAX_PROVIDERS} providers per query.`);
  const selectedMarkets = readList(url, 'markets', new Set(markets), markets);
  const statuses = readList(url, 'statuses', STATUSES, ['active']) as OfferingStatus[];
  const fields = readList(url, 'fields', FIELDS, ['input', 'limits', 'pricing', 'apis']) as ChatCatalogField[];
  const currencyValues = url.searchParams.getAll('currency');
  if (currencyValues.length > 1) throw new Error('Query parameter "currency" must appear once.');
  const currency = currencyValues[0] ?? 'original';
  if (currency !== 'original' && !currencies.includes(currency)) throw new Error('Query parameter "currency" contains an unsupported value.');
  return { providers, markets: selectedMarkets, statuses, fields, currency };
}

export async function handleCustomQuery(
  request: Request,
  assets: { fetch(request: Request): Promise<Response> },
): Promise<Response> {
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: {
    'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'accept', 'access-control-max-age': '86400',
  } });
  if (request.method !== 'GET') return error(405, 'method_not_allowed', 'Use GET for this read-only endpoint.');
  const url = new URL(request.url);
  if (url.href.length > MAX_URL_LENGTH) return error(414, 'query_too_long', `Keep the query URL under ${MAX_URL_LENGTH} characters.`);

  try {
    const [index, providerIndex] = await Promise.all([
      loadJson<OfferingIndex>(assets, url, '/assets/datasets/offerings.json'),
      loadJson<ProviderIndex>(assets, url, '/assets/datasets/providers.json'),
    ]);
    if (!sameDatasetVersion(index, providerIndex)) return error(503, 'dataset_version_mismatch', 'Published site datasets do not share schema, data, and generation versions.');
    const requestedCurrency = url.searchParams.get('currency');
    const fx = requestedCurrency && requestedCurrency !== 'original'
      ? await loadJson<FxDocument>(assets, url, '/v1/fx.json')
      : undefined;
    if (fx && !sameDatasetVersion(index, fx)) return error(503, 'dataset_version_mismatch', 'Published FX and site datasets do not share schema, data, and generation versions.');
    const currencies = fx ? [fx.fx_reference.base, ...fx.fx_reference.quotes.map((quote) => quote.currency)] : [];
    const providerIds = providerIndex.providers.map((provider) => provider.id);
    const chatItems = index.items.filter((item) => item.type === 'chat');
    const allMarkets = [...new Set(chatItems.map((item) => item.market))].sort();
    const config = parseConfig(url, providerIds, allMarkets, currencies);
    const selected = chatItems.filter((item) =>
      config.providers.includes(item.provider_id) && config.markets.includes(item.market) && config.statuses.includes(item.status),
    );
    if (selected.length > MAX_RESULTS) return error(413, 'too_many_results', `The query matched ${selected.length} offerings; narrow the selection to at most ${MAX_RESULTS}.`);

    const needsProviderDocs = config.fields.includes('apis') || config.fields.includes('pricing');
    const selectedProviders = needsProviderDocs ? [...new Set(selected.map((item) => item.provider_id))] : [];
    const providerDocs = new Map<string, ProviderDocument>();
    const [docs, models] = await Promise.all([
      Promise.all(selectedProviders.map((id) => loadJson<ProviderDocument>(assets, url, `/assets/datasets/providers/${encodeURIComponent(id)}.json`))),
      config.fields.includes('input') ? loadJson<ModelsIndex>(assets, url, '/assets/datasets/models.json') : Promise.resolve(undefined),
    ]);
    for (const doc of docs) {
      if (!sameDatasetVersion(index, doc)) return error(503, 'dataset_version_mismatch', 'Published site datasets do not share schema, data, and generation versions.');
      providerDocs.set(doc.provider.id, doc);
    }
    if (models && !sameDatasetVersion(index, models)) return error(503, 'dataset_version_mismatch', 'Published site datasets do not share schema, data, and generation versions.');
    const canonicalModels = new Map((models?.models ?? []).map((model) => [model.id, model]));
    const catalog = projectChatCatalog(selected, providerDocs, canonicalModels, config.fields, {
      currency: config.currency === 'original' ? undefined : config.currency,
      fxReference: fx?.fx_reference,
    });
    const body = JSON.stringify({ schema_version: index.schema_version, data_version: index.data_version, generated_at: index.generated_at, ...(config.fields.includes('pricing') ? { pricing_currency: config.currency } : {}), ...catalog });
    if (new TextEncoder().encode(body).byteLength > MAX_RESPONSE_BYTES) return error(413, 'response_too_large', `The projected response exceeds ${MAX_RESPONSE_BYTES} bytes; choose fewer providers or fields.`);
    return new Response(body, {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=300',
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET, OPTIONS',
        'access-control-allow-headers': 'accept',
      },
    });
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : 'Invalid query.';
    if (message.startsWith('Query parameter') || message.startsWith('Choose at most')) return error(400, 'invalid_query', message);
    return error(503, 'dataset_unavailable', message);
  }
}

function sameDatasetVersion(left: DatasetEnvelope, right: DatasetEnvelope): boolean {
  return left.schema_version === right.schema_version && left.data_version === right.data_version && left.generated_at === right.generated_at;
}
