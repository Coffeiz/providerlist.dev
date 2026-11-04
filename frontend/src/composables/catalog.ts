/**
 * Demo 数据层。
 *
 * 站点目录读取 `/assets/datasets/**`；稳定对外契约单独位于 `/v1/**`。
 * 开发态由 vite 中间件分别挂载两套产物，构建态由构建脚本复制进站点产物目录。
 *
 * 加载失败时**不**回退到内置假数据——目录站的取值必须可溯源，
 * 编造一份"看起来有数据"的内容比明确报错更危险（见 AGENTS.md「来源身份 ≠ 内容正确」）。
 * 失败时保留 `loadError`，由页面渲染显式的错误空态。
 *
 * 状态用 Vue `reactive` 持有——组件通过 computed 读取时能自动订阅变更，
 * 不需要手工的订阅广播。
 */

import { computed, reactive } from 'vue';
import type {
  CatalogCurrent,
  FxReference,
  FxReferenceDocument,
  Manifest,
  Model,
  ModelRegistryDocument,
  ProviderDocument,
  ProviderIndex,
  ProviderSummary,
  SearchIndexEntry,
} from '../types.ts';

const SITE_DATA = '/assets/datasets';
const PUBLIC_API = '/v1';

export interface CatalogState {
  manifest: Manifest | null;
  catalog: CatalogCurrent | null;
  models: Record<string, Model>;
  providers: Record<string, ProviderDocument>;
  searchIndex: SearchIndexEntry[];
  /** 参考汇率快照；没有快照时为 null——站点只显示原币价。 */
  fx: FxReference | null;
  /** 参考汇率不可用时的原因（仅用于提示，不影响目录加载）。 */
  fxUnavailable: string | null;
  loadError: string | null;
  pageLoadError: string | null;
  pageLoading: boolean;
  searchLoadError: string | null;
  searchLoading: boolean;
  searchLoaded: boolean;
  source: 'network' | 'unavailable';
  loaded: boolean;
}

const state = reactive<CatalogState>({
  manifest: null,
  catalog: null,
  models: {},
  providers: {},
  searchIndex: [],
  fx: null,
  fxUnavailable: null,
  loadError: null,
  pageLoadError: null,
  pageLoading: false,
  searchLoadError: null,
  searchLoading: false,
  searchLoaded: false,
  source: 'unavailable',
  loaded: false,
});

/** 返回响应式状态对象。调用方应通过 computed 读取，不要直接改写。 */
export function getState(): CatalogState {
  return state;
}

export const providers = computed(() =>
  Object.values(state.providers),
);

export function getProviders(): readonly ProviderSummary[] {
  return state.catalog?.providers ?? [];
}

export function getProviderDocument(id: string): ProviderDocument | undefined {
  return state.providers[id];
}

export function getModel(modelRef: string | null | undefined): Model | undefined {
  return modelRef ? state.models[modelRef] : undefined;
}

export function getSearchIndex(): readonly SearchIndexEntry[] {
  return state.searchIndex;
}

export function getManifest(): Manifest | null {
  return state.manifest;
}

export function loadProviderIndex(): Promise<ProviderIndex> {
  return fetchJson<ProviderIndex>(`${SITE_DATA}/providers.json`);
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${url} → HTTP ${response.status}`);
  }
  return (await response.json()) as T;
}

/** A missing static asset can be transient while Cloudflare edges refresh after deployment. */
async function fetchJsonWithRetry<T>(url: string, attempts = 3): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fetchJson<T>(url);
    } catch (error) {
      lastError = error;
      if (attempt + 1 < attempts) {
        await new Promise((resolve) => window.setTimeout(resolve, 250 * 2 ** attempt));
      }
    }
  }
  throw lastError;
}

/**
 * 加载站点专用数据集与公开 Manifest 元数据。
 * 读取构建产物；失败时记录错误，不伪造回退数据。
 */
let catalogRequest: Promise<void> | undefined;
let searchRequest: Promise<void> | undefined;
let pageRequest = 0;
const providerRequests = new Map<string, Promise<void>>();

export function loadCatalog(): Promise<void> {
  if (catalogRequest) return catalogRequest;
  catalogRequest = (async () => {
    try {
      const manifest = await fetchJsonWithRetry<Manifest>(`${PUBLIC_API}/manifest.json`);
      const [catalog, registry] = await Promise.all([
        fetchJson<CatalogCurrent>(`${SITE_DATA}/catalog-current.json`),
        fetchJson<ModelRegistryDocument>(`${SITE_DATA}/models.json`),
      ]);
      state.manifest = manifest;
      state.catalog = catalog;
      state.models = Object.fromEntries(registry.models.map((model) => [model.id, model]));
      state.loadError = null;
      state.source = 'network';
    } catch (error) {
      state.loadError = error instanceof Error ? error.message : String(error);
      state.source = 'unavailable';
    } finally {
      state.loaded = true;
    }
    void loadFx();
  })();
  return catalogRequest;
}

/** 详情按 Provider 缓存，同一时刻的重复请求共享一个 Promise。 */
async function loadProvider(id: string): Promise<void> {
  if (state.providers[id]) return;
  const pending = providerRequests.get(id);
  if (pending) return pending;
  const request = fetchJson<ProviderDocument>(`${SITE_DATA}/providers/${encodeURIComponent(id)}.json`)
    .then((document) => { state.providers[id] = document; })
    .finally(() => { providerRequests.delete(id); });
  providerRequests.set(id, request);
  return request;
}

/** 页面所需详情有界并发加载；失败显式呈现，不能把未取到的详情当作空目录。 */
export async function loadPageProviders(ids: readonly string[]): Promise<void> {
  const request = ++pageRequest;
  state.pageLoading = true;
  state.pageLoadError = null;
  const queue = [...new Set(ids)];
  const failures: unknown[] = [];
  await Promise.all(Array.from({ length: Math.min(4, queue.length) }, async () => {
    while (queue.length) {
      const id = queue.shift();
      if (!id) continue;
      try { await loadProvider(id); } catch (error) { failures.push(error); }
    }
  }));
  if (request === pageRequest) state.pageLoading = false;
  if (request === pageRequest && failures.length) {
    const error = failures[0];
    state.pageLoadError = error instanceof Error ? error.message : String(error);
  }
}

/** 搜索弹窗首次打开时加载；失败后下次打开允许重试。 */
export function loadSearchIndex(): Promise<void> {
  if (state.searchLoaded) return Promise.resolve();
  if (searchRequest) return searchRequest;
  state.searchLoading = true;
  state.searchLoadError = null;
  searchRequest = (async () => {
    try {
      const document = await fetchJson<{ entries: SearchIndexEntry[] }>(`${SITE_DATA}/search-index.json`);
      state.searchIndex = document.entries;
      state.searchLoaded = true;
    } catch (error) {
      state.searchLoadError = error instanceof Error ? error.message : String(error);
    } finally {
      state.searchLoading = false;
      searchRequest = undefined;
    }
  })();
  return searchRequest;
}

/**
 * 加载参考汇率快照。
 *
 * 失败不是错误——只是没有参考换算可用。
 * 这里**不能**回退到任何内置汇率：那等于编一个没有来源的汇率。
 */
async function loadFx(): Promise<void> {
  try {
    const document = await fetchJson<FxReferenceDocument>(`${SITE_DATA}/fx.json`);
    state.fx = document.fx_reference;
    state.fxUnavailable = null;
  } catch (error) {
    state.fx = null;
    state.fxUnavailable = error instanceof Error ? error.message : String(error);
  }
}
