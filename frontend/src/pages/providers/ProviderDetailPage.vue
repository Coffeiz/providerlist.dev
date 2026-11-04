<script setup lang="ts">
/**
 * Provider 详情页。
 *
 * 关键行为：
 * - 手动 Service 切换由 URL 参数显式保存（`?service=cn-usage`）；未指定时进入页面
 *   根据当时界面语言选择默认市场，页面内切换语言不改变当前市场。
 * - 模型数与能力数分开统计；独立 Service Capability 不计入模型总数。
 * - 「中国」筛选与「人民币计费」分离——地区不等于币种。
 * - 默认只显示 `active` / `restricted` Offering；弃用、退役和未知状态可显式展开。
 */
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { serviceMarketForId } from '@providerlist/schema/types';
import LazySection from '../../components/LazySection.vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import AppIcon from '../../components/AppIcon.vue';
import CopyButton from '../../components/CopyButton.vue';
import DataUnavailable from '../../components/DataUnavailable.vue';
import DataLoading from '../../components/DataLoading.vue';
import ProviderLogo from '../../components/ProviderLogo.vue';
import StatusBadge from '../../components/StatusBadge.vue';
import ProviderOfferingSection from './components/ProviderOfferingSection.vue';
import EndpointSection from './components/EndpointSection.vue';
const CapabilitySection = defineAsyncComponent(() => import('./components/CapabilitySection.vue'));
const RouteSection = defineAsyncComponent(() => import('./components/RouteSection.vue'));
const PlanSection = defineAsyncComponent(() => import('./components/PlanSection.vue'));
import { getProviderDocument, getState } from '../../composables/catalog';
import { prefs } from '../../composables/prefs';
import {
  accountMarketLabel,
  describeOfficial,
  providerDisplayName,
} from '../../composables/format';
import type { Service, ServiceCapability } from '../../types';
import { t } from '../../i18n';

const route = useRoute();
const router = useRouter();
const state = getState();
const defaultMarket = ref(prefs.lang === 'zh' ? 'CN' : 'GLOBAL');

const providerId = computed(() => String(route.params.providerId ?? ''));
const focusedOfferingAnchor = computed(() => route.hash.slice(1) || undefined);
const doc = computed(() => getProviderDocument(providerId.value));
const displayProviderName = computed(() => doc.value ? providerDisplayName(doc.value.provider) : '');
// Resolve the language-based default once per Provider navigation. A language
// preference change while viewing this page must not switch its active service.
watch(providerId, () => {
  defaultMarket.value = prefs.lang === 'zh' ? 'CN' : 'GLOBAL';
});
const orderedServices = computed(() => [...(doc.value?.services ?? [])].sort((left, right) => {
  const order = (market: string) => market === 'CN' ? 0 : market === 'GLOBAL' ? 1 : 2;
  return order(serviceMarketForId(left.id) ?? 'UNKNOWN') - order(serviceMarketForId(right.id) ?? 'UNKNOWN');
}));
const providerJsonUrl = computed(() => {
  const pathname = `/v1/providers/${encodeURIComponent(providerId.value)}.json`;
  return typeof window === 'undefined' ? pathname : new URL(pathname, window.location.origin).toString();
});

const activeServiceId = computed(() => {
  const fromQuery = route.query.service;
  const aliases: Readonly<Record<string, string>> = {
    'cn-usage': 'cn', 'cn-m-plan': 'cn', 'global-usage': 'global', 'global-m-plan': 'global',
  };
  if (typeof fromQuery === 'string' && aliases[fromQuery] && doc.value?.services.some((service) => service.id === aliases[fromQuery])) return aliases[fromQuery]!;
  if (typeof fromQuery === 'string' && doc.value?.services.some((service) => service.id === fromQuery)) return fromQuery;
  return orderedServices.value.find((service) => serviceMarketForId(service.id) === defaultMarket.value)?.id
    ?? orderedServices.value[0]?.id
    ?? '';
});

const activeService = computed<Service | undefined>(() =>
  doc.value?.services.find((s) => s.id === activeServiceId.value),
);
const activeWebsite = computed(() => activeService.value?.website ?? '');
const activeOverviewDocs = computed(() => activeService.value?.docs?.overview ?? '');

function setService(id: string): void {
  void router.replace({ query: { ...route.query, service: id } });
}

function serviceTabName(service: Service): string {
  return accountMarketLabel(serviceMarketForId(service.id) ?? 'UNKNOWN');
}

function serviceCurrencySummary(service: Service): string {
  const currencies = new Set<string>();
  const addPricing = (groups: Service['pricing']) => {
    for (const group of groups ?? []) currencies.add(group.currency);
  };
  addPricing(service.pricing);
  for (const offering of service.offerings ?? []) addPricing(offering.pricing);
  for (const capability of service.capabilities ?? []) addPricing(capability.pricing);
  for (const plan of doc.value?.plans ?? []) {
    if (plan.service_ref === service.id && plan.currency) currencies.add(plan.currency);
  }
  return [...currencies].sort().join('/');
}

function endpointTypeLabel(endpointId: string): string {
  const service = activeService.value;
  const routeProtocols = service?.endpoints?.find((endpoint) => endpoint.id === endpointId)?.routes
    ?.map((route) => route.protocol)
    // Endpoint cards name API families, not the generic JSON-over-HTTP
    // transport used by standalone Service Capability routes.
    .filter((protocol) => !['rest-json', 'https', 'http'].includes(protocol));
  const protocolLabels: Readonly<Record<string, string>> = {
    'chat-completions': 'OpenAI Chat Completions',
    'openai-chat-completions': 'OpenAI Chat Completions',
    openai_chat_completions: 'OpenAI Chat Completions',
    responses: 'OpenAI Responses',
    messages: 'Anthropic Messages',
    anthropic_messages: 'Anthropic Messages',
    'generate-content': 'Gemini GenerateContent',
    'openai-images': 'OpenAI Images API',
    openai_images: 'OpenAI Images API',
    'image-generation': 'Image Generation API',
    'video-generation': 'Video Generation API',
    '3d-generation': '3D Generation API',
    websocket: 'WebSocket API',
    'live-api': 'Live API',
    'interactions-api': 'Interactions API',
    'openai-files': 'OpenAI Files API',
    openai_files: 'OpenAI Files API',
    'openai-embeddings': 'OpenAI Embeddings API',
    openai_embeddings: 'OpenAI Embeddings API',
    'multimodal-embedding': 'Multimodal Embedding API',
    batch: 'Batch API',
    'meta-speech-transcription': 'Meta Speech Transcription API',
    native: 'Native API',
  };
  const uniqueProtocols = [...new Set(routeProtocols)];
  const sharesOpenAIEndpoint = uniqueProtocols.includes('chat-completions') && uniqueProtocols.includes('responses');
  const interfaceLabels = [
    ...(sharesOpenAIEndpoint ? ['OpenAI'] : []),
    ...uniqueProtocols
      .filter((protocol) => !sharesOpenAIEndpoint || (protocol !== 'chat-completions' && protocol !== 'responses'))
      .map((protocol) => protocolLabels[protocol] ?? protocol),
  ];

  if (interfaceLabels.length) return [...new Set(interfaceLabels)].join(' / ');

  // Endpoint IDs sometimes carry product names (for example, coding-plan),
  // while the heading should identify the protocol interface.
  const marketPrefix = activeService.value ? serviceMarketForId(activeService.value.id)?.toLowerCase() : undefined;
  const prefix = marketPrefix ? `${marketPrefix}-` : '';
  const label = prefix && endpointId.startsWith(prefix) ? endpointId.slice(prefix.length) : endpointId;
  if (label === 'openai-compatible') return t('OpenAI 兼容接口');
  if (label === 'anthropic-compatible') return t('Anthropic 兼容接口');
  if (/(?:^|-)responses(?:-|$)/i.test(label)) return 'OpenAI Responses';
  if (/(?:^|-)anthropic(?:-|$)/i.test(label)) return 'Anthropic Messages';
  if (/(?:^|-)openai(?:-|$)/i.test(label)) return 'OpenAI Chat Completions';
  return label;
}

const serviceCapabilities = computed<readonly ServiceCapability[]>(() =>
  activeService.value?.capabilities ?? [],
);
const activePlans = computed(() => doc.value?.plans?.filter((plan) => plan.service_ref === activeService.value?.id) ?? []);

const officialBadge = computed(() => describeOfficial(doc.value?.provider.official_integration));


</script>

<template>
  <div v-if="state.loadError || state.pageLoadError" class="pl-container pl-page">
    <DataUnavailable />
  </div>

  <div v-else-if="!state.loaded" class="pl-container pl-page">
    <DataLoading />
  </div>

  <div v-else-if="!doc" class="pl-container pl-page">
    <div class="pl-card">
      <h1>{{ t('未找到该 Provider') }}</h1>
      <p class="pl-text-secondary">{{ t('它可能不在当前目录中，或数据尚未发布。') }}</p>
      <RouterLink to="/providers" class="pl-button">{{ t('返回目录') }}</RouterLink>
    </div>
  </div>

  <div v-else class="pl-container pl-page detail provider-detail-scope">
    <nav class="detail-breadcrumb" :aria-label="t('面包屑')">
      <RouterLink to="/providers" class="pl-text-sm">← {{ t('服务商') }}</RouterLink>
    </nav>

    <header class="pl-stack detail-header">
      <div class="pl-row-between pl-wrap detail-header-top">
        <div class="pl-row detail-identity">
          <ProviderLogo :name="displayProviderName" :src="doc.provider.logo" size="detail" />
          <div>
            <h1>{{ displayProviderName }}</h1>
            <p class="pl-text-sm pl-text-tertiary">
              {{ doc.provider.legal_name ?? doc.provider.aliases.join(' · ') }}
            </p>
            <div class="detail-provider-id">
              <code class="pl-mono">{{ doc.provider.id }}</code>
              <CopyButton
                variant="icon"
                :value="doc.provider.id" analytics-kind="provider_id"
                :label="t('复制服务商 ID')"
                :title="t('复制服务商 ID')"
              />
            </div>
            <div class="detail-trust">
              <StatusBadge
                :label="officialBadge.label"
                :tone="officialBadge.tone"
                :detail="officialBadge.detail"
              />
              <span v-if="officialBadge.detail" class="pl-text-xs pl-text-tertiary">
                {{ officialBadge.detail }}
              </span>
              <span
                v-if="doc.provider.integrations?.ai_sdk === true && activeService?.docs?.ai_sdk"
                class="pl-badge pl-badge-neutral detail-integration-tag"
              >
                {{ t('支持 AI SDK') }}
              </span>
            </div>
          </div>
        </div>

        <div class="pl-row pl-wrap detail-actions">
          <a
            v-if="activeWebsite"
            :href="activeWebsite"
            class="pl-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="globe" />
            {{ t('官网') }}
            <AppIcon name="external" />
          </a>
          <a
            v-if="activeOverviewDocs"
            :href="activeOverviewDocs"
            class="pl-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="doc" />
            {{ t('官方文档') }}
            <AppIcon name="external" />
          </a>
          <CopyButton
            :value="providerJsonUrl" analytics-kind="api_url"
            :label="t('复制 JSON 地址')"
            :title="t('复制该 Provider 公开 JSON 的完整 URL')"
            variant="primary"
            icon="copy"
            class="detail-json-copy"
          />
        </div>
      </div>

      <div class="detail-service-switcher">
        <div class="pl-row-between pl-wrap">
          <h2 class="pl-text-lg">{{ t('服务线 / 账号市场') }}</h2>
        </div>

        <div class="pl-row pl-wrap detail-service-tabs" role="tablist">
          <button
            v-for="service in orderedServices"
            :key="service.id"
            type="button"
            role="tab"
            class="pl-button detail-service-tab"
            :class="{ 'is-active': service.id === activeServiceId }"
            :aria-selected="service.id === activeServiceId"
            @click="setService(service.id)"
          >
            <span class="detail-service-market">{{ serviceTabName(service) }}</span>
            <span class="detail-service-meta">{{ serviceCurrencySummary(service) }}</span>
          </button>
        </div>
      </div>
    </header>

    <template v-if="activeService">
      <EndpointSection :service="activeService" :endpoint-type-label="endpointTypeLabel" />

      <LazySection v-if="activePlans.length"><PlanSection :plans="activePlans" /></LazySection>

      <ProviderOfferingSection
        v-if="activeService && doc"
        :doc="doc"
        :service="activeService"
        :focused-offering-anchor="focusedOfferingAnchor"
      />

      <LazySection>
        <CapabilitySection
          :provider-id="doc.provider.id"
          :service-id="activeService.id"
          :service="activeService"
          :capabilities="serviceCapabilities"
        />
      </LazySection>

      <LazySection><RouteSection :service="activeService" /></LazySection>
    </template>
  </div>
</template>

<style>

.provider-detail-scope {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-xl);
}
.provider-detail-scope .detail-breadcrumb { margin-bottom: calc(var(--pl-space-lg) * -1); }
.provider-detail-scope .detail-header { gap: var(--pl-space-lg); }
.provider-detail-scope .detail-identity { gap: var(--pl-space-lg); }
.provider-detail-scope .detail-provider-id {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  margin-top: var(--pl-space-xs);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
}
.provider-detail-scope .detail-trust {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--pl-space-sm);
  margin-top: var(--pl-space-sm);
}
.provider-detail-scope .detail-integration-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--pl-space-2xs);
}
.provider-detail-scope .detail-actions { gap: var(--pl-space-sm); }
.provider-detail-scope .detail-service-switcher {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-md);
}
.provider-detail-scope .detail-section {
  padding: var(--pl-space-lg);
  border: 1px solid var(--pl-glass-border);
  border-radius: var(--pl-radius-lg);
  background: var(--pl-glass-bg);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
  box-shadow: var(--pl-glass-shadow);
}
.provider-detail-scope .detail-service-tabs { gap: var(--pl-space-sm); }
.provider-detail-scope .detail-service-tab {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  padding: var(--pl-space-sm) var(--pl-space-lg);
  flex: 1 1 224px;
  min-width: 0;
  max-width: 100%;
  min-height: 56px;
  height: 56px;
  white-space: nowrap;
  overflow: hidden;
  transition:
    background var(--pl-duration-fast) var(--pl-ease-standard),
    border-color var(--pl-duration-fast) var(--pl-ease-standard),
    color var(--pl-duration-fast) var(--pl-ease-standard);
}
.provider-detail-scope .detail-service-tab.is-active {
  border-color: var(--pl-control-border);
  background: var(--pl-bg-muted);
  color: var(--pl-text-primary);
}
.provider-detail-scope .detail-service-market {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25;
}
.provider-detail-scope .detail-service-meta {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  font-weight: var(--pl-weight-regular);
}
.provider-detail-scope .endpoint-list { gap: var(--pl-space-sm); }
.provider-detail-scope .endpoint-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--pl-space-lg);
  padding: var(--pl-space-md) var(--pl-space-lg);
}
.provider-detail-scope .endpoint-main {
  display: grid;
  grid-template-columns: minmax(140px, 0.7fr) minmax(0, 1fr);
  align-items: center;
  gap: var(--pl-space-lg);
  flex: 1;
  min-width: 0;
}
.provider-detail-scope .endpoint-heading { display: block; min-width: 0; }
.provider-detail-scope .endpoint-heading .pl-badge { margin-inline-start: var(--pl-space-xs); vertical-align: middle; }
.provider-detail-scope .endpoint-url { display: block; word-break: break-all; }
.provider-detail-scope .endpoint-actions { gap: var(--pl-space-sm); flex-shrink: 0; }
.provider-detail-scope .detail-offerings-toolbar { min-width: 0; }
.provider-detail-scope .detail-section-heading { min-width: 0; }
.provider-detail-scope .detail-filters { gap: var(--pl-space-md); }
.provider-detail-scope .detail-filter-field { min-width: 180px; }
.provider-detail-scope .detail-state-toggle {
  gap: var(--pl-space-sm);
  min-height: 36px;
  padding: 0 var(--pl-space-md);
  border: 1px solid var(--pl-control-border);
  border-radius: var(--pl-radius-md);
  background: var(--pl-control-bg);
  color: var(--pl-text-secondary);
  cursor: pointer;
  transition:
    background var(--pl-duration-fast) var(--pl-ease-standard),
    border-color var(--pl-duration-fast) var(--pl-ease-standard),
    color var(--pl-duration-fast) var(--pl-ease-standard);
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .provider-detail-scope .detail-state-toggle:hover {
    border-color: var(--pl-border-strong);
    background: var(--pl-control-bg-hover);
    color: var(--pl-text-primary);
  }
}
.provider-detail-scope .detail-state-toggle.is-active {
  border-color: var(--pl-border-strong);
  background: var(--pl-bg-subtle);
  color: var(--pl-text-primary);
}
.provider-detail-scope .detail-model-group {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-sm);
}
.provider-detail-scope .detail-model-group-heading { padding: 0 var(--pl-space-xs); }
.provider-detail-scope .detail-model-table { min-width: 1120px; }
.provider-detail-scope .detail-model-group-decision .detail-model-table { min-width: 800px; }
.provider-detail-scope .detail-model-table td:not(:first-child):not(.detail-price-cell) { white-space: nowrap; }
.provider-detail-scope .detail-model-table th:first-child,
.provider-detail-scope .detail-model-table td:first-child { min-width: 240px; }
.provider-detail-scope .detail-model-table th:first-child { min-width: 240px; }
.provider-detail-scope .detail-model-table .detail-status-cell {
  width: 160px;
  min-width: 160px;
}
.provider-detail-scope .detail-mobile-status { display: none; }
.provider-detail-scope .detail-model-id-row {
  display: flex;
  align-items: center;
  gap: calc(var(--pl-space-xs) / 2);
  white-space: nowrap;
}
.provider-detail-scope .detail-model-id {
  flex: 0 0 auto;
  white-space: nowrap;
}
.provider-detail-scope .detail-model-id-row .copy-button {
  flex: 0 0 auto;
  font-size: var(--pl-text-sm);
}
.provider-detail-scope .detail-temperature-cell { min-width: 110px; }
.provider-detail-scope .detail-route-table td { vertical-align: middle; }
.provider-detail-scope .detail-route-table th:nth-child(4),
.provider-detail-scope .detail-route-table td:nth-child(4) { min-width: 112px; }
.provider-detail-scope .detail-route-document-link {
  flex: 0 0 auto;
  flex-wrap: nowrap;
  white-space: nowrap;
}
.provider-detail-scope .detail-offering-name { font-weight: var(--pl-weight-medium); }
.provider-detail-scope .detail-offering-id-row {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  margin-top: 2px;
}
.provider-detail-scope .detail-offering-id { min-width: 0; }
.provider-detail-scope .detail-offering-limits { margin-top: var(--pl-space-xs); }
.provider-detail-scope .detail-input-modalities {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  margin-top: var(--pl-space-xs);
  color: var(--pl-text-secondary);
}
.provider-detail-scope .detail-input-modality { display: inline-flex; align-items: center; }
.provider-detail-scope .detail-input-modality .pl-icon { width: 14px; height: 14px; }
.provider-detail-scope .detail-price-cell { min-width: 220px; }
.provider-detail-scope .detail-price-inline-native { display: inline; margin-inline-start: var(--pl-space-xs); }
.provider-detail-scope .detail-price-metric { margin-inline-start: var(--pl-space-xs); }
.provider-detail-scope .detail-price-pair {
  display: flex;
  align-items: baseline;
  gap: var(--pl-space-sm);
  white-space: nowrap;
}
.provider-detail-scope .detail-price-pair-item { white-space: nowrap; }
.provider-detail-scope .detail-price-pair-item + .detail-price-pair-item {
  padding-left: var(--pl-space-sm);
  border-left: 1px solid var(--pl-border-strong);
}
.provider-detail-scope .detail-model-table .detail-price-pair {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--pl-space-xs);
  white-space: normal;
}
.provider-detail-scope .detail-model-table .detail-price-pair-item {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: var(--pl-space-xs);
  white-space: normal;
}
.provider-detail-scope .detail-model-table .detail-price-pair-item .pl-price-native { flex-basis: 100%; }
.provider-detail-scope .detail-model-table .detail-price-pair-item + .detail-price-pair-item {
  padding-left: 0;
  border-left: 0;
}
.provider-detail-scope .detail-group-meta { gap: var(--pl-space-md); }
.provider-detail-scope .detail-fx-note {
  margin-top: var(--pl-space-sm);
}
.provider-detail-scope .detail-price + .detail-price { margin-top: var(--pl-space-sm); }
.provider-detail-scope .detail-retire-note { margin-top: var(--pl-space-xs); }
.provider-detail-scope .capability-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--pl-space-md);
  color: inherit;
}
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
.provider-detail-scope .capability-card:hover { text-decoration: none; }
}
.provider-detail-scope .capability-ops { grid-column: 1; gap: var(--pl-space-xs); min-width: 0; }
.provider-detail-scope .capability-routes {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--pl-space-xs);
  min-width: 0;
  text-align: left;
}
.provider-detail-scope .capability-route { overflow-wrap: anywhere; }
.provider-detail-scope .capability-arrow {
  grid-column: 3;
  justify-self: end;
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  color: var(--pl-text-tertiary);
  transition:
    transform var(--pl-duration-fast) var(--pl-ease-standard),
    color var(--pl-duration-fast) var(--pl-ease-standard);
}
.provider-detail-scope .capability-card:hover .capability-arrow {
  transform: translateX(2px);
  color: var(--pl-text-primary);
}

@media (max-width: 900px) {
.provider-detail-scope .endpoint-card { align-items: flex-start; flex-direction: column; }
.provider-detail-scope .endpoint-main { width: 100%; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
}

@media (max-width: 768px) {
.provider-detail-scope .detail-model-group .pl-panel { overflow: hidden; }
.provider-detail-scope .detail-model-group .pl-table-wrap { overflow-x: visible; }
.provider-detail-scope .detail-model-table {
  display: block;
  width: 100%;
  min-width: 0;
  border-collapse: separate;
  border-spacing: 0;
}
.provider-detail-scope .detail-model-group-decision .detail-model-table { min-width: 0; }
.provider-detail-scope .detail-model-table thead {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.provider-detail-scope .detail-model-table tbody {
  display: grid;
  gap: var(--pl-space-sm);
  padding: var(--pl-space-sm);
}
.provider-detail-scope .detail-model-table tbody tr {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--pl-space-sm) var(--pl-space-md);
  padding: var(--pl-space-md);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  background: var(--pl-bg-surface);
}
.provider-detail-scope .detail-model-table tbody td {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: var(--pl-space-xs);
  padding: 0;
  border: 0;
  white-space: normal !important;
}
.provider-detail-scope .detail-model-table tbody td::before {
  content: attr(data-label);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
}
.provider-detail-scope .detail-model-table tbody td:first-child,
.provider-detail-scope .detail-model-table tbody td.detail-status-cell {
  grid-column: 1 / -1;
}
.provider-detail-scope .detail-model-table tbody td:first-child::before { content: none; }
.provider-detail-scope .detail-model-table tbody td:first-child {
  gap: calc(var(--pl-space-xs) / 2);
  padding-bottom: var(--pl-space-sm);
  border-bottom: 1px solid var(--pl-border-subtle);
}
.provider-detail-scope .detail-model-table .detail-input-modalities { margin-top: 0; }
.provider-detail-scope .detail-model-table tbody td.detail-price-cell { overflow-wrap: anywhere; }
.provider-detail-scope .detail-model-table tbody td.detail-status-cell {
  display: none;
}
.provider-detail-scope .detail-mobile-status {
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--pl-space-xs);
  max-width: 96px;
  margin-inline-start: auto;
}
.provider-detail-scope .detail-model-table .detail-model-id-row {
  align-items: center;
  flex-wrap: wrap;
  white-space: normal;
}
.provider-detail-scope .detail-model-table .detail-model-id {
  min-width: 0;
  flex: 0 1 auto;
  color: var(--pl-text-primary);
  font-family: inherit;
  font-size: var(--pl-text-sm);
  font-weight: 600;
  line-height: 1.35;
  overflow-wrap: anywhere;
  white-space: normal;
}
.provider-detail-scope .detail-model-table .detail-status-cell { width: auto; min-width: 0; }
.provider-detail-scope .detail-model-table .detail-price-cell .pl-price-tier-group + .pl-price-tier-group {
  margin-top: var(--pl-space-sm);
}
.provider-detail-scope .detail-header-top { align-items: stretch; }
.provider-detail-scope .detail-offerings-toolbar {
  flex-wrap: nowrap;
  gap: var(--pl-space-sm);
}
.provider-detail-scope .detail-section-heading {
  flex-wrap: nowrap;
  white-space: nowrap;
}
.provider-detail-scope .detail-state-toggle {
  flex: 0 0 auto;
  gap: var(--pl-space-xs);
  min-height: 36px;
  padding-inline: var(--pl-space-sm);
  white-space: nowrap;
}
.provider-detail-scope .detail-filters {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.provider-detail-scope .detail-filter-field { min-width: 0; }
.provider-detail-scope .detail-filter-field .pl-select { width: 100%; }
.provider-detail-scope .detail-identity,
.provider-detail-scope .detail-actions { width: 100%; }
.provider-detail-scope .detail-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.provider-detail-scope .detail-actions > * {
  justify-content: center;
  min-width: 0;
  padding-inline: var(--pl-space-xs);
  white-space: nowrap;
}
.provider-detail-scope .detail-actions .detail-json-copy {
  grid-column: 1 / -1;
  width: 100%;
}
.provider-detail-scope .detail-service-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.provider-detail-scope .detail-service-tab { width: 100%; }
.provider-detail-scope .detail-service-tab:only-child { grid-column: 1 / -1; }
.provider-detail-scope .endpoint-main { grid-template-columns: minmax(0, 1fr); }
.provider-detail-scope .endpoint-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
}
.provider-detail-scope .endpoint-actions > * {
  justify-content: center;
  min-width: 0;
  padding-inline: var(--pl-space-xs);
  white-space: nowrap;
}
.provider-detail-scope .capability-card { grid-template-columns: minmax(0, 1fr) auto; }
.provider-detail-scope .capability-ops { grid-column: 1; grid-row: 1; }
.provider-detail-scope .capability-routes {
  grid-column: 1;
  grid-row: 2;
  align-items: flex-start;
  text-align: left;
}
.provider-detail-scope .capability-arrow { grid-column: 2; grid-row: 1 / span 2; }
}

</style>
