import { onScopeDispose } from 'vue';

/** Anonymous product events. Never send search text, URLs or clipboard contents. */
export type AnalyticsEvent =
  | { type: 'page_view'; page: string; language: string; market: string }
  | { type: 'provider_open'; provider_id: string; source: string }
  | { type: 'id_copy'; object_type: 'provider' | 'model'; object_id: string; page: string }
  | { type: 'url_copy'; url_type: 'base_url' | 'api_url' | 'share_link'; page: string }
  | { type: 'search'; category: 'global' | 'providers' | 'models'; result_count: number }
  | { type: 'search_result_open'; result_type: 'provider' | 'model'; provider_id: string; model_id?: string };

export function trackAnalyticsEvent(event: AnalyticsEvent): void {
  if (!import.meta.env.PROD || import.meta.env.VITE_ANALYTICS_DISABLED === 'true' || navigator.webdriver) return;
  const body = JSON.stringify(event);
  try {
    if (navigator.sendBeacon?.('/api/events', new Blob([body], { type: 'application/json' }))) return;
    void fetch('/api/events', { method: 'POST', headers: { 'content-type': 'application/json' }, body, keepalive: true }).catch(() => {});
  } catch {
    // Analytics must never interrupt navigation or copying.
  }
}

export function trackSearch(category: 'global' | 'providers' | 'models', count: () => number): (value: string) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  onScopeDispose(() => clearTimeout(timer));
  return (value) => {
    clearTimeout(timer);
    if (value.trim()) timer = setTimeout(() => trackAnalyticsEvent({ type: 'search', category, result_count: count() }), 500);
  };
}
