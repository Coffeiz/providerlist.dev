import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import { trackAnalyticsEvent } from '../composables/analytics';
import { prefs } from '../composables/prefs';
import { getState, loadCatalog, loadPageProviders } from '../composables/catalog';
import { getModel, getProviderDocument } from '../composables/catalog';
import { modelTypeLabel, providerDisplayName } from '../composables/format';
import { translate } from '../i18n';
import type { ModelType } from '../types';

const routeScrollPositions = new Map<string, number>();

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/providers' },
  {
    path: '/providers',
    name: 'providers',
    component: () => import('../pages/providers/ProvidersPage.vue'),
    meta: { title: 'Provider 目录' },
  },
  {
    path: '/providers/:providerId',
    name: 'provider',
    component: () => import('../pages/providers/ProviderDetailPage.vue'),
    meta: { title: 'Provider 详情' },
  },
  {
    path: '/providers/:providerId/capabilities/:kind',
    name: 'capability',
    component: () => import('../pages/capabilities/CapabilityDetailPage.vue'),
    meta: { title: '独立能力详情' },
  },
  {
    path: '/models',
    name: 'models',
    component: () => import('../pages/models/ModelTypeIndexPage.vue'),
    meta: { title: '模型列表' },
  },
  {
    path: '/models/:developerId/:modelSlug',
    name: 'model-detail',
    component: () => import('../pages/models/ModelDetailPage.vue'),
    meta: { title: '模型详情' },
  },
  {
    path: '/models/:modelType',
    redirect: (to) => ({
      name: 'models',
      query: { ...to.query, type: to.params.modelType === 'chat' ? undefined : to.params.modelType },
    }),
  },
  {
    path: '/types/:modelType',
    name: 'type-index',
    component: () => import('../pages/models/ModelTypeIndexPage.vue'),
    meta: { title: '模型类型' },
  },
  {
    path: '/capabilities',
    name: 'capabilities',
    component: () => import('../pages/capabilities/CapabilitiesPage.vue'),
    meta: { title: '能力索引' },
  },
  {
    path: '/docs/api',
    name: 'api-docs',
    component: () => import('../pages/api-docs/ApiDocsPage.vue'),
    meta: { title: '数据 API' },
  },
  // 设计系统页是**开发参考页**：评审视觉、核对令牌时用，不进发布构建。
  // 与 Gugu-web 的 dev 工具页同一套做法——发布构建里 import.meta.env.DEV=false，
  // 整个三元分支（含动态 import）被 tree-shake 掉，产物里既没有这条路由，
  // 也没有 DesignView 的代码。
  ...(import.meta.env.DEV
    ? [
        {
          path: '/design',
          name: 'design',
          component: () => import('../pages/design/DesignPage.vue'),
          meta: { title: '设计系统' },
        },
      ]
    : []),
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFoundPage.vue'),
    meta: { title: '页面不存在' },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 96 };
    const rememberedPosition = routeScrollPositions.get(to.fullPath);
    if (rememberedPosition !== undefined) return { top: rememberedPosition };
    return { top: 0 };
  },
});

router.beforeEach((_to, from) => {
  if (from.fullPath) routeScrollPositions.set(from.fullPath, window.scrollY);
});

router.beforeResolve(async (to) => {
  await loadCatalog();
  const state = getState();
  let ids: string[] = [];
  if (to.name === 'provider' || to.name === 'capability') {
    const id = String(to.params.providerId ?? '');
    if (state.catalog?.providers.some((provider) => provider.id === id)) ids = [id];
  } else if (to.name === 'models') {
    const type = String(to.query.type ?? 'chat');
    ids = [...new Set((state.catalog?.offerings ?? [])
      .filter((offering) => offering.model_type === type)
      .map((offering) => offering.provider_id))];
  } else if (to.name === 'model-detail') {
    const modelRef = `${String(to.params.developerId)}/${String(to.params.modelSlug)}`;
    ids = [...new Set((state.catalog?.offerings ?? [])
      .filter((offering) => offering.model_ref === modelRef)
      .map((offering) => offering.provider_id))];
  } else if (to.name === 'type-index') {
    const type = String(to.params.modelType ?? '');
    ids = [...new Set((state.catalog?.offerings ?? [])
      .filter((offering) => offering.model_type === type)
      .map((offering) => offering.provider_id))];
  } else if (to.name === 'capabilities') {
    ids = (state.catalog?.providers ?? [])
      .filter((provider) => provider.service_capability_count > 0)
      .map((provider) => provider.id);
  }
  await loadPageProviders(ids);
});

router.afterEach((to, from, failure) => {
  applyRouteMetadata(to);
  if (failure || (to.name === from.name && to.params.providerId === from.params.providerId)) return;
  const page = String(to.name ?? 'unknown');
  const service = String(to.query.service ?? '').toLowerCase();
  const market = service === 'cn' ? 'CN' : service === 'global' ? 'GLOBAL' : 'UNKNOWN';
  trackAnalyticsEvent({ type: 'page_view', page, language: prefs.lang, market });
  if (to.name === 'provider' && typeof to.params.providerId === 'string') {
    trackAnalyticsEvent({ type: 'provider_open', provider_id: to.params.providerId, source: String(from.name ?? 'unknown') });
  }
});

function setMeta(name: string, content: string, property = false): void {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    if (property) element.setAttribute('property', name);
    else element.name = name;
    document.head.append(element);
  }
  element.content = content;
}

function setStructuredData(value: unknown): void {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-providerlist-seo]');
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.providerlistSeo = 'true';
    document.head.append(element);
  }
  element.textContent = JSON.stringify(value).replace(/</gu, '\\u003c');
}

/** Keep browser metadata aligned with the equivalent static SEO page. */
export function applyRouteMetadata(route = router.currentRoute.value): void {
  const base = 'https://providerlist.dev';
  const pathname = route.path === '/' ? '/' : `${route.path.replace(/\/+$/u, '')}/`;
  const canonical = `${base}${pathname}`;
  let title = route.meta.title ? `${String(route.meta.title)} — ProviderList` : 'ProviderList';
  let description = 'Browse current AI Provider supply, model specifications, API access, and pricing.';
  const crumbs: Array<{ name: string; url: string }> = [{ name: 'ProviderList', url: `${base}/providers/` }];

  if (route.name === 'provider') {
    const providerId = String(route.params.providerId ?? '');
    const doc = getProviderDocument(providerId);
    const name = doc ? providerDisplayName(doc.provider) : providerId;
    title = `${name} API access, models and pricing — ProviderList`;
    description = `Browse ${name} API access, current model supply, markets, and published pricing on ProviderList.`;
    crumbs.push({ name, url: canonical });
  } else if (route.name === 'model-detail') {
    const ref = `${String(route.params.developerId)}/${String(route.params.modelSlug)}`;
    const model = getModel(ref);
    if (model) {
      title = `${model.name} by ${model.developer_name} — ProviderList`;
      description = `View ${model.name} specifications and current Provider availability, model IDs, and pricing.`;
      crumbs.push({ name: 'Models', url: `${base}/models/` }, { name: model.name, url: canonical });
    }
  } else if (route.name === 'type-index') {
    const type = String(route.params.modelType ?? '');
    const label = modelTypeLabel(type as ModelType);
    title = `${label} models and Providers — ProviderList`;
    description = `Browse currently supplied ${label} models, Provider model IDs, context limits, and pricing.`;
    crumbs.push({ name: 'Models', url: `${base}/models/` }, { name: label, url: canonical });
  } else if (route.name === 'providers') {
    title = 'AI Providers, API access and pricing — ProviderList';
    description = 'Browse AI Providers by market, API access, current model supply, capabilities, and pricing.';
  } else if (route.name === 'models') {
    title = 'AI model directory and pricing — ProviderList';
    description = 'Compare current AI model supply, Provider IDs, context limits, modalities, and pricing.';
    crumbs.push({ name: 'Models', url: canonical });
  }

  document.title = title;
  document.documentElement.lang = prefs.lang === 'zh' ? 'zh-CN' : 'en';
  setMeta('description', description);
  let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalElement) {
    canonicalElement = document.createElement('link');
    canonicalElement.rel = 'canonical';
    document.head.append(canonicalElement);
  }
  canonicalElement.href = canonical;
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:type', 'website', true);
  setMeta('og:url', canonical, true);
  setMeta('twitter:card', 'summary');
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical,
    isPartOf: { '@type': 'WebSite', name: 'ProviderList', url: `${base}/` },
    ...(crumbs.length > 1 ? { breadcrumb: { '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.url })) } } : {}),
  };
  let entity: Record<string, unknown> | undefined;
  if (route.name === 'providers') {
    entity = {
      '@type': 'SoftwareApplication',
      name: 'ProviderList',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      url: canonical,
      description: 'A public directory of AI Providers, current model supply, API access, capabilities, and pricing.',
    };
  } else if (route.name === 'api-docs') {
    const questions: Array<[string, string]> = [
      ['调用公开 API 需要鉴权吗？', '不需要。公开 API 提供只读 JSON，不接受写入。'],
      ['Model 列表和 Offering 列表有什么区别？', 'Model 列表记录规范模型信息；Offering 列表记录经过审核的 Provider 供应事实。Model 出现在目录中不代表当前有供应。'],
      ['显示为供应中代表 API 已实测可用吗？', '不代表。供应状态根据公开来源维护，不表示实时账号资格或 API 调用结果。'],
    ];
    entity = {
      '@type': 'FAQPage',
      mainEntity: questions.map(([question, answer]) => ({
        '@type': 'Question',
        name: translate(prefs.lang, question),
        acceptedAnswer: { '@type': 'Answer', text: translate(prefs.lang, answer) },
      })),
    };
  } else if (route.name === 'model-detail') {
    const ref = `${String(route.params.developerId)}/${String(route.params.modelSlug)}`;
    const model = getModel(ref);
    if (model) entity = {
      '@type': 'Product',
      name: model.name,
      description,
      category: model.type ?? 'AI model',
      brand: { '@type': 'Brand', name: model.developer_name },
      url: canonical,
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Model ID', value: model.id },
        ...(model.limits?.context != null ? [{ '@type': 'PropertyValue', name: 'Context limit', value: model.limits.context }] : []),
      ],
    };
  }
  setStructuredData(entity ? { '@context': 'https://schema.org', '@graph': [webPage, entity] } : webPage);
}
