interface AnalyticsDataset {
  writeDataPoint(point: { indexes: string[]; blobs: string[]; doubles: number[] }): void;
}

const pages = ['providers', 'provider', 'models', 'capability', 'capabilities', 'api-docs', 'not-found', 'design', 'unknown'];
const idPattern = /^[a-zA-Z0-9._/+-]{1,160}$/;

/** Accept only the event dimensions published in the privacy policy. */
export async function handleAnalytics(request: Request, dataset?: AnalyticsDataset): Promise<Response> {
  const bot = (request as Request & { cf?: { botManagement?: { score?: number; verifiedBot?: boolean } } }).cf?.botManagement;
  if (bot?.verifiedBot || (typeof bot?.score === 'number' && bot.score >= 1 && bot.score < 30)) {
    return new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });
  }
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  if (!(request.headers.get('content-type') ?? '').toLowerCase().startsWith('application/json')) return new Response(null, { status: 415 });
  if (Number(request.headers.get('content-length') ?? 0) > 2048) return new Response(null, { status: 413 });
  const text = await request.text();
  if (new TextEncoder().encode(text).length > 2048) return new Response(null, { status: 413 });
  let event: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return new Response(null, { status: 400 });
    event = parsed as Record<string, unknown>;
  } catch { return new Response(null, { status: 400 }); }
  const oneOf = (key: string, values: readonly string[]) => typeof event[key] === 'string' && values.includes(event[key] as string);
  const id = (key: string) => typeof event[key] === 'string' && idPattern.test(event[key] as string);
  let keys: string[] = [];
  switch (event.type) {
    case 'page_view': keys = ['type', 'page', 'language', 'market']; if (!oneOf('page', pages) || !oneOf('language', ['zh', 'en']) || !oneOf('market', ['CN', 'GLOBAL', 'UNKNOWN'])) keys = []; break;
    case 'provider_open': keys = ['type', 'provider_id', 'source']; if (!id('provider_id') || !oneOf('source', pages)) keys = []; break;
    case 'id_copy': keys = ['type', 'object_type', 'object_id', 'page']; if (!oneOf('object_type', ['provider', 'model']) || !id('object_id') || !oneOf('page', pages)) keys = []; break;
    case 'url_copy': keys = ['type', 'url_type', 'page']; if (!oneOf('url_type', ['base_url', 'api_url', 'share_link']) || !oneOf('page', pages)) keys = []; break;
    case 'search': keys = ['type', 'category', 'result_count']; if (!oneOf('category', ['global', 'providers', 'models']) || !Number.isInteger(event.result_count) || (event.result_count as number) < 0 || (event.result_count as number) > 100000) keys = []; break;
    case 'search_result_open': keys = ['type', 'result_type', 'provider_id', ...(event.model_id === undefined ? [] : ['model_id'])]; if (!oneOf('result_type', ['provider', 'model']) || !id('provider_id') || (event.result_type === 'model' && !id('model_id')) || (event.result_type === 'provider' && event.model_id !== undefined)) keys = []; break;
  }
  if (!keys.length || Object.keys(event).some((key) => !keys.includes(key))) return new Response(null, { status: 400 });
  if (!dataset) return new Response(null, { status: 503 });
  try {
    dataset.writeDataPoint({ indexes: [event.type as string], blobs: keys.filter((key) => key !== 'type' && key !== 'result_count').map((key) => String(event[key])), doubles: event.type === 'search' ? [event.result_count as number] : [] });
    return new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });
  } catch { return new Response(null, { status: 503 }); }
}
