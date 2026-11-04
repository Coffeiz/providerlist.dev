<script setup lang="ts">
/** 模型目录按主类别浏览；每行仍指向 Provider 的当前供应项。 */
import { computed, ref, watch } from 'vue';
import { trackSearch } from '../../composables/analytics';
import { useRoute, useRouter } from 'vue-router';
import { isTokenUnit } from '@providerlist/shared/pricing';
import { serviceMarketForId } from '@providerlist/schema/types';
import ModelOfferingTable from './components/ModelOfferingTable.vue';
import DataUnavailable from '../../components/DataUnavailable.vue';
import DataLoading from '../../components/DataLoading.vue';
import FilterSearchInput from '../../components/FilterSearchInput.vue';
import ModelTypeNavigation from './components/ModelTypeNavigation.vue';
import { getModel, getProviderDocument, getProviders, getState } from '../../composables/catalog';
import { sortModelTypes } from '../../composables/model-type-order';
import { amountPerMillionTokens, priceTierLabel, videoResolutionCondition } from '../../composables/pricing-display';
import {
  accountMarketLabel,
  formatCurrencyAmount,
  describeCondition,
  formatRule,
  isUnconditional,
  metricLabel,
  modelTypeLabel,
  priceMetricGroup,
  pricingGroupConditions,
  providerDisplayName,
} from '../../composables/format';
import type { ModelTableRow } from './types';
import type { ModelType, PricingGroup } from '../../types';
import { t } from '../../i18n';

const state = getState();
const route = useRoute();
const router = useRouter();
const modelType = computed(() => String(route.name === 'type-index'
  ? route.params.modelType
  : route.query.type ?? 'chat'));
const search = ref(typeof route.query.q === 'string' ? route.query.q : '');

watch(() => route.query.q, (value) => {
  const q = typeof value === 'string' ? value : '';
  if (q !== search.value.trim()) search.value = q;
});
const recordSearch = trackSearch('models', () => filteredRows.value.length);
watch(search, recordSearch);
watch(search, (value) => {
  const q = value.trim();
  if (q === (typeof route.query.q === 'string' ? route.query.q : '')) return;
  void router.replace({ query: { ...route.query, q: q || undefined } });
});

function priceEntriesFor(
  pricingGroups: readonly PricingGroup[],
  currentType: string,
  group: 'input' | 'output' | 'other',
): ModelTableRow['inputPrices'][number][] {
  const entries: ModelTableRow['inputPrices'][number][] = [];
  for (const [ruleIndex, rule] of pricingGroups.entries()) {
      const items = rule.rates;
      const conditions = pricingGroupConditions(rule);
      const resolutionTier = currentType === 'video' ? videoResolutionCondition(conditions) : undefined;
      const inputIndexes = items.flatMap((item, index) => priceMetricGroup(currentType, item) === 'input' ? [index] : []);
      const outputIndexes = items.flatMap((item, index) => priceMetricGroup(currentType, item) === 'output' ? [index] : []);
      const otherIndex = items.findIndex((item) => priceMetricGroup(currentType, item) === 'other');
      const conditionOwner = group === 'input'
        ? inputIndexes.at(-1) ?? -1
        : group === 'output'
          ? outputIndexes.at(-1) ?? -1
          : otherIndex;

      for (const [itemIndex, item] of items.entries()) {
        const tokenPrice = isTokenUnit(item.unit);
        const cacheMetric = item.metric.startsWith('cache_') ? item.metric : undefined;
        if (priceMetricGroup(currentType, item) !== group) continue;

        const displayUnit = tokenPrice ? 'per_1m_tokens' : item.unit;
        const amount = tokenPrice
          ? amountPerMillionTokens(item.value, item.unit)
          : item.value;
        const displayAmount = formatCurrencyAmount(amount, rule.currency);
        const displayItem = currentType === 'video' && item.metric === 'image'
          ? { ...item, metric: 'input_image' }
          : item;
        const display = formatRule(rule.currency, displayUnit, {
          conditions: conditions,
          rates: [{ ...displayItem, value: amount, unit: displayUnit }],
        });
        const ownsCondition = itemIndex === conditionOwner && conditions && !isUnconditional(conditions);
        const condition = ownsCondition
          ? resolutionTier?.condition
            ? describeCondition(resolutionTier.condition, { omitFields: group === 'other' ? [] : ['service_tier'] })
            : resolutionTier
              ? ''
              : describeCondition(conditions, { omitFields: group === 'other' ? [] : ['service_tier'] })
          : undefined;
        const tierLabel = ownsCondition
          ? resolutionTier?.label ?? (group !== 'other' ? priceTierLabel(conditions) : undefined)
          : undefined;
        const serviceTier = Boolean(priceTierLabel(conditions));
        entries.push({
          id: `pricing:${ruleIndex}:${itemIndex}`,
          ruleId: `pricing:${ruleIndex}`,
          ...(item.context ? { context: item.context } : {}),
          amount: tokenPrice && group !== 'other' ? displayAmount : '',
          ...(cacheMetric ? { cacheMetric } : {}),
          ...(item.ttl ? { cacheTtl: item.ttl } : {}),
          ...(item.context ? { cacheContext: item.context } : {}),
          ...(item.ttl || item.context ? { metricLabel: metricLabel(item.metric) } : {}),
          ...(tokenPrice && display.reference ? { converted: display.reference.split(' / ')[0] } : {}),
          ...((group === 'other' || !tokenPrice) ? { detail: display.label } : {}),
          ...((group === 'other' || !tokenPrice) && display.reference ? { convertedDetail: display.reference } : {}),
          ...(condition ? { condition } : {}),
          ...(tierLabel ? { tierLabel } : {}),
          ...(serviceTier ? { serviceTier } : {}),
        });
      }
      for (const metric of rule.unsupported_metrics ?? []) {
        const unit = metric === 'cache_storage' ? 'per_1m_tokens_per_hour' : 'per_1m_tokens';
        if (priceMetricGroup(currentType, { metric, unit }) !== group) continue;
        const condition = conditions && !isUnconditional(conditions)
          ? resolutionTier?.condition
            ? describeCondition(resolutionTier.condition, { omitFields: group === 'other' ? [] : ['service_tier'] })
            : resolutionTier
              ? ''
              : describeCondition(conditions, { omitFields: group === 'other' ? [] : ['service_tier'] })
          : undefined;
        const tierLabel = resolutionTier?.label ?? (condition ? priceTierLabel(conditions) : undefined);
        const serviceTier = Boolean(priceTierLabel(conditions));
        entries.push({
          id: `pricing:${ruleIndex}:unsupported:${metric}`,
          ruleId: `pricing:${ruleIndex}`,
          amount: '',
          cacheMetric: metric.startsWith('cache_') ? metric : undefined,
          detail: t('不支持'),
          unsupported: true,
          ...(condition ? { condition } : {}),
          ...(tierLabel ? { tierLabel } : {}),
          ...(serviceTier ? { serviceTier } : {}),
        });
      }
  }
  return entries;
}

const rows = computed<ModelTableRow[]>(() => {
  const result: ModelTableRow[] = [];
  for (const provider of getProviders()) {
    const doc = getProviderDocument(provider.id);
    if (!doc) continue;
    for (const service of doc.services) {
      for (const offering of service.offerings ?? []) {
        const model = getModel(offering.model_ref);
        const type = model?.type ?? 'unknown';
        if (type !== modelType.value) continue;
        if (offering.status === 'retired') continue;
        const pricing = offering.pricing ?? [];
        result.push({
          providerId: provider.id,
          providerName: providerDisplayName(provider),
          ...(provider.logo ? { providerLogo: provider.logo } : {}),
          accountMarket: serviceMarketForId(service.id)!,
          serviceId: service.id,
          offering,
          ...(model ? { model } : {}),
          ...(typeof model?.release_date === 'string' && model.release_date
            ? { releaseDate: model.release_date }
            : {}),
          inputPrices: priceEntriesFor(pricing, type, 'input'),
          outputPrices: priceEntriesFor(pricing, type, 'output'),
          otherPrices: priceEntriesFor(pricing, type, 'other'),
        });
      }
    }
  }

  return result.sort((left, right) => {
    if (typeof left.releaseDate === 'string' && typeof right.releaseDate === 'string') {
      const dateOrder = right.releaseDate.localeCompare(left.releaseDate);
      if (dateOrder !== 0) return dateOrder;
    } else if (left.releaseDate) return -1;
    else if (right.releaseDate) return 1;
    return left.providerName.localeCompare(right.providerName) ||
      left.offering.id.localeCompare(right.offering.id);
  });
});

const allTypes = computed(() => {
  const set = new Set<string>();
  for (const provider of getProviders()) {
    for (const type of provider.model_types) set.add(type);
  }
  return sortModelTypes(set, (type) => modelTypeLabel(type as ModelType));
});

const filteredRows = computed(() => {
  const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return rows.value;
  return rows.value.filter((row) => {
    const searchableText = [
      row.providerId,
      row.providerName,
      accountMarketLabel(row.accountMarket),
      row.offering.id,
      row.model?.id,
      row.model?.name,
      row.model?.developer_id,
      row.model?.developer_name,
      row.model?.family,
    ].filter(Boolean).join(' ').toLocaleLowerCase();
    return terms.every((term) => searchableText.includes(term));
  });
});

</script>

<template>
  <div class="pl-container pl-page type-index type-index-scope">
    <div class="pl-content-head">
      <div class="pl-content-title">
        <h1>{{ modelTypeLabel(modelType) }}</h1>
        <span v-if="state.loaded" class="pl-result-count">{{ filteredRows.length }} {{ t('项当前供应') }}</span>
        <span v-else class="pl-result-count">{{ t('正在加载页面…') }}</span>
      </div>
      <span class="pl-demo-mark">
        <code class="pl-mono">{{ modelType }}</code> {{ t('· 模型主类别') }}
      </span>
    </div>

    <div class="model-browse-controls">
      <FilterSearchInput
        v-model="search"
        wide
        :placeholder="t('搜索模型名称、ID 或服务商…')"
        :label="t('在当前类型内搜索模型或 Provider')"
      />
      <ModelTypeNavigation :types="allTypes" :model-type="modelType" />
    </div>

    <DataLoading v-if="!state.loaded" />
    <DataUnavailable v-else-if="state.loadError || state.pageLoadError" />

    <div v-else-if="filteredRows.length === 0" class="pl-card">
      <p class="pl-text-secondary">{{ search.trim() ? t('没有找到匹配的模型。') : t('当前类型下没有匹配的供应项。') }}</p>
    </div>

    <ModelOfferingTable v-else :model-type="modelType" :rows="filteredRows" />
  </div>
</template>

<style>
.type-index-scope {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-lg);
}
.type-index-scope > .pl-content-head { margin-bottom: 0; }
.type-index-scope .model-browse-controls {
  display: flex;
  align-items: center;
  gap: var(--pl-space-sm);
  min-width: 0;
}
.type-index-scope .model-browse-controls > .filter-search-input { top: -1px; }
@media (max-width: 768px) {
  .type-index-scope .model-browse-controls {
    align-items: stretch;
    flex-direction: column;
  }
}
.type-index-scope .model-list-panel { min-width: 0; }
.type-index-scope .model-list-table { min-width: 1380px; table-layout: fixed; }
.type-index-scope .model-list-table .model-input-limit-header .pl-table-sort-button {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  white-space: normal;
}
.type-index-scope .col-provider { width: 196px; }
.type-index-scope .col-model { width: 168px; }
.type-index-scope .col-developer { width: 128px; }
.type-index-scope .col-limit { width: 84px; }
.type-index-scope .col-input-limit { width: 128px; }
.type-index-scope .col-limit-small { width: 72px; }
.type-index-scope .col-input-price { width: 184px; }
.type-index-scope .col-output-price { width: 200px; }
.type-index-scope .col-other-price { width: 164px; }
.type-index-scope .col-capability { width: 96px; }
.type-index-scope .col-structured { width: 128px; }
.type-index-scope .col-temperature { width: 108px; }
.type-index-scope .col-status { width: 124px; }
.type-index-scope .col-date { width: 108px; }
.type-index-scope .model-provider-link {
  font-size: var(--pl-text-xs);
  line-height: 1.6;
  white-space: nowrap;
}
.type-index-scope .model-provider-link a {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  max-width: 100%;
  color: var(--pl-text-secondary);
}
.type-index-scope .model-provider-identity {
  display: inline-flex;
  align-items: center;
  gap: var(--pl-space-xs);
  flex: 0 1 auto;
  min-width: 0;
  min-height: 22px;
}
.type-index-scope .model-provider-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.type-index-scope .model-provider-market { flex: 0 0 auto; white-space: nowrap; }
@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .type-index-scope .model-provider-link a:hover { color: var(--pl-text-primary); }
}
.type-index-scope .detail-model-id-row { display: block; }
.type-index-scope .model-mobile-status { display: none; }
.type-index-scope .model-mobile-developer { display: none; }
.type-index-scope .model-mobile-release-date { display: none; }
.type-index-scope .detail-model-id-row .copy-button {
  vertical-align: middle;
  font-size: var(--pl-text-sm);
}
.type-index-scope .detail-model-id { min-width: 0; overflow-wrap: anywhere; }
.type-index-scope .detail-input-modalities {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  margin-top: var(--pl-space-xs);
  color: var(--pl-text-secondary);
}
.type-index-scope .detail-input-modality { display: inline-flex; align-items: center; }
.type-index-scope .detail-input-modality .pl-icon { width: 14px; height: 14px; }
.type-index-scope .detail-capability-cell { white-space: nowrap; }
.type-index-scope .detail-price-cell { min-width: 0; overflow-wrap: anywhere; }
.type-index-scope .detail-price-cell .pl-price-entry-list {
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: var(--pl-space-xs);
}
.type-index-scope .detail-price-cell .pl-price-entry-item + .pl-price-entry-item {
  padding-inline-start: 0;
  border-inline-start: 0;
}
.type-index-scope .detail-price-pair { display: flex; flex-wrap: wrap; align-items: baseline; gap: var(--pl-space-xs); }
.type-index-scope .detail-price-pair-item { overflow-wrap: anywhere; }
.type-index-scope .detail-price-pair-item + .detail-price-pair-item {
  padding-left: var(--pl-space-xs);
  border-left: 1px solid var(--pl-border-strong);
}
.type-index-scope .model-list-note { padding: var(--pl-space-sm) var(--pl-space-md); }
@media (max-width: 768px) {
  .type-index-scope .model-list-panel .pl-table-wrap { overflow-x: visible; }
  .type-index-scope .model-list-table {
    display: block;
    width: 100%;
    min-width: 0;
    border-collapse: separate;
    border-spacing: 0;
  }
  .type-index-scope .model-list-table thead {
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
  .type-index-scope .model-list-table tbody {
    display: grid;
    gap: var(--pl-space-sm);
    padding: var(--pl-space-sm);
  }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--pl-space-sm) var(--pl-space-md);
    padding: var(--pl-space-md);
    border: 1px solid var(--pl-border-subtle);
    border-radius: var(--pl-radius-md);
    background: var(--pl-bg-surface);
  }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: var(--pl-space-xs);
    padding: 0;
    border: 0;
    white-space: normal !important;
  }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td::before {
    content: attr(data-label);
    color: var(--pl-text-tertiary);
    font-size: var(--pl-text-xs);
  }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td:nth-child(2) {
    grid-column: 1 / -1;
    grid-row: 1;
    padding-bottom: var(--pl-space-sm);
    border-bottom: 1px solid var(--pl-border-subtle);
  }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td:first-child {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td:nth-child(1)::before,
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td:nth-child(2)::before { content: none; }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td.model-mobile-status-cell { display: none; }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td.model-release-date-cell { display: none; }
  .type-index-scope .model-list-table tbody tr:not(.pl-virtual-spacer) > td.model-developer-cell { display: none; }
  .type-index-scope .model-provider-link { font-size: var(--pl-text-xs); }
  .type-index-scope .detail-model-id-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(var(--pl-space-xs) / 2);
  }
  .type-index-scope .detail-model-id {
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
  .type-index-scope .detail-model-id-row .copy-button { flex: 0 0 auto; }
  .type-index-scope .model-mobile-status {
    display: inline-flex;
    flex: 0 0 auto;
    margin-inline-start: auto;
  }
  .type-index-scope .model-mobile-developer {
    display: inline-flex;
    min-width: 0;
    flex: 0 1 auto;
    align-items: center;
    gap: calc(var(--pl-space-xs) / 2);
    font-size: var(--pl-text-xs);
    white-space: nowrap;
  }
  .type-index-scope .model-mobile-developer-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .type-index-scope .model-mobile-developer .copy-button { flex: 0 0 auto; }
  .type-index-scope .detail-input-modalities { margin-top: 0; }
  .type-index-scope .model-mobile-release-date { display: block; }
  .type-index-scope .detail-price-cell .pl-price-tier-group + .pl-price-tier-group {
    margin-top: var(--pl-space-sm);
  }
  .type-index-scope .model-list-table tbody tr.pl-virtual-spacer {
    display: block;
    grid-column: 1 / -1;
  }
  .type-index-scope .model-list-table tbody tr.pl-virtual-spacer td {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
  }
}
</style>
