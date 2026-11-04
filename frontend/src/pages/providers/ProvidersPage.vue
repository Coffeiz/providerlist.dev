<script setup lang="ts">
/**
 * Provider 目录页。
 *
 * 结构沿用「内容优先」：页头 → 搜索 → 筛选条 → 卡片网格 → 免责声明。
 * 不做 Hero 大块——这一页的价值是快速扫读，标题不该占掉一屏。
 */
import { computed, ref, watch } from 'vue';
import { trackSearch } from '../../composables/analytics';
import { useRoute, useRouter } from 'vue-router';
import DataUnavailable from '../../components/DataUnavailable.vue';
import DataLoading from '../../components/DataLoading.vue';
import FilterSearchInput from '../../components/FilterSearchInput.vue';
import WindowedGrid from '../../components/WindowedGrid.vue';
import ProviderCard from '../../components/ProviderCard.vue';
import SelectPopup from '../../components/SelectPopup.vue';
import { getProviders, getState } from '../../composables/catalog';
import { sortModelTypes } from '../../composables/model-type-order';
import { accountMarketLabel, isCurrentSupply, modelTypeLabel, providerDisplayName } from '../../composables/format';
import type { ModelType, ProviderSummary } from '../../types';
import { t } from '../../i18n';

const state = getState();
const route = useRoute();
const router = useRouter();
const search = ref(typeof route.query.q === 'string' ? route.query.q : '');
const market = ref<string>('all');
const type = ref<string>('all');
const source = ref<string>('all');
const sort = ref<string>('name');

watch(() => route.query.q, (value) => {
  const q = typeof value === 'string' ? value : '';
  if (q !== search.value.trim()) search.value = q;
});
const recordSearch = trackSearch('providers', () => filtered.value.length);
watch(search, recordSearch);
watch(search, (value) => {
  const q = value.trim();
  if (q === (typeof route.query.q === 'string' ? route.query.q : '')) return;
  void router.replace({ query: { ...route.query, q: q || undefined } });
});

const allProviders = computed(() => getProviders());

const marketOptions = computed(() => {
  const set = new Set<string>();
  for (const provider of allProviders.value) {
    for (const m of provider.account_markets) set.add(m);
  }
  return [...set].sort();
});

const typeOptions = computed(() => {
  const set = new Set<string>();
  for (const provider of allProviders.value) {
    for (const t of provider.model_types) set.add(t);
  }
  return sortModelTypes(set, (value) => modelTypeLabel(value as ModelType));
});

/** 筛选条上四个选择器的选项。 */
const typeSelectOptions = computed(() => [
  { value: 'all', label: t('全部') },
  ...typeOptions.value.map((value) => ({ value, label: modelTypeLabel(value as ModelType) })),
]);

const marketSelectOptions = computed(() => [
  { value: 'all', label: t('全部') },
  ...marketOptions.value.map((value) => ({ value, label: accountMarketLabel(value) })),
]);

const sourceSelectOptions = computed(() => [
  { value: 'all', label: t('全部') },
  { value: 'official', label: t('官方接入') },
  { value: 'curated', label: t('社区整理') },
]);

const sortSelectOptions = computed(() => [
  { value: 'name', label: t('按名称') },
  { value: 'count', label: t('按供应数') },
  { value: 'recent', label: t('最近发布') },
]);

const isOfficial = (provider: ProviderSummary): boolean =>
  provider.official_integration?.state === 'connected';

function latestModelReleaseAt(provider: ProviderSummary): number | undefined {
  const offerings = state.catalog?.offerings;
  if (!offerings) return undefined;

  let latest: number | undefined;
  for (const offering of offerings) {
    if (offering.provider_id !== provider.id) continue;
    if (!isCurrentSupply(offering.status)) continue;

    const releaseDate = offering.model_ref ? state.models[offering.model_ref]?.release_date : undefined;
    if (!releaseDate) continue;
    const timestamp = Date.parse(releaseDate);
    if (Number.isFinite(timestamp) && (latest === undefined || timestamp > latest)) latest = timestamp;
  }
  return latest;
}

const filtered = computed(() => {
  const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const matched = allProviders.value.filter((provider) => {
    const searchableText = [
      provider.id,
      provider.name,
      provider.kind,
      providerDisplayName(provider),
      ...provider.aliases,
      ...provider.account_markets.map(accountMarketLabel),
      ...provider.model_types.map((modelType) => modelTypeLabel(modelType as ModelType)),
    ].join(' ').toLocaleLowerCase();
    if (terms.length > 0 && !terms.every((term) => searchableText.includes(term))) return false;
    if (
      market.value !== 'all' &&
      !provider.account_markets.includes(
        market.value as ProviderSummary['account_markets'][number],
      )
    ) {
      return false;
    }
    if (type.value !== 'all' && !provider.model_types.includes(type.value)) {
      return false;
    }
    if (source.value === 'official' && !isOfficial(provider)) return false;
    if (source.value === 'curated' && isOfficial(provider)) return false;
    return true;
  });

  const recentTimes = sort.value === 'recent'
    ? new Map(matched.map((provider) => [provider.id, latestModelReleaseAt(provider)]))
    : undefined;

  return matched.sort((a, b) => {
    if (sort.value === 'name') return providerDisplayName(a).localeCompare(providerDisplayName(b));
    if (sort.value === 'recent') {
      const aRecent = recentTimes?.get(a.id);
      const bRecent = recentTimes?.get(b.id);
      if (aRecent !== undefined && bRecent !== undefined && aRecent !== bRecent) {
        return bRecent - aRecent;
      }
      if (aRecent !== undefined) return -1;
      if (bRecent !== undefined) return 1;
      return providerDisplayName(a).localeCompare(providerDisplayName(b));
    }
    return (
      b.active_offering_count - a.active_offering_count ||
      providerDisplayName(a).localeCompare(providerDisplayName(b))
    );
  });
});

const hasFilter = computed(
  () => search.value.trim() !== '' || market.value !== 'all' || type.value !== 'all' || source.value !== 'all',
);

function resetFilters(): void {
  search.value = '';
  market.value = 'all';
  type.value = 'all';
  source.value = 'all';
}
</script>

<template>
  <div class="pl-container pl-page providers">
    <div class="pl-content-head">
      <div class="pl-content-title">
        <h1>{{ t('服务商') }}</h1>
        <span v-if="state.loaded" class="pl-result-count">{{ filtered.length }} {{ t('个匹配结果') }}</span>
        <span v-else class="pl-result-count">{{ t('正在加载页面…') }}</span>
      </div>
      <span class="pl-demo-mark">{{ t('静态目录 · 按来源更新 · 非实时调用检测') }}</span>
    </div>

    <DataLoading v-if="!state.loaded" />
    <DataUnavailable v-else-if="state.loadError || state.pageLoadError" />

    <template v-else>
      <div class="pl-filterbar providers-filterbar">
        <FilterSearchInput
          v-model="search"
          :placeholder="t('搜索服务商、别名或模型类型…')"
          :label="t('搜索 Provider')"
        />

        <SelectPopup
          v-model="type"
          variant="compact"
          :label="t('模型类型')"
          :options="typeSelectOptions"
          :aria-label="t('按模型类型筛选')"
        />

        <SelectPopup
          v-model="market"
          variant="compact"
          :label="t('账号市场')"
          :options="marketSelectOptions"
          :aria-label="t('按账号市场筛选')"
        />

        <SelectPopup
          v-model="source"
          variant="compact"
          :label="t('数据来源')"
          :options="sourceSelectOptions"
          :aria-label="t('按数据来源筛选')"
        />

        <SelectPopup
          v-model="sort"
          variant="compact"
          :label="t('排序')"
          :options="sortSelectOptions"
          :aria-label="t('排序方式')"
        />

        <button v-if="hasFilter" type="button" class="pl-reset-text" @click="resetFilters">
          {{ t('清除筛选') }}
        </button>
      </div>

      <div v-if="filtered.length === 0" class="pl-card providers-empty">
        <div>
          <h3>{{ t('没有找到匹配的 Provider') }}</h3>
          <p class="pl-text-sm pl-text-tertiary">
            {{ t('试试其他关键词，或者清除筛选条件。') }}
          </p>
        </div>
        <button type="button" class="pl-button" @click="resetFilters">
          {{ t('清除筛选') }}
        </button>
      </div>

      <WindowedGrid v-else :items="filtered" :item-key="(provider) => provider.id" class="providers-grid">
        <template #default="{ item: provider }"><ProviderCard :provider="provider" /></template>
      </WindowedGrid>

    </template>
  </div>
</template>

<style scoped>
.providers {
  display: flex;
  flex-direction: column;
}

.providers-grid {
  display: block;
}

.providers-filterbar :deep(.pl-select-trigger) { height: 40px; }

.providers-empty {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--pl-space-lg);
}

@media (max-width: 768px) {
  .providers-filterbar {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
  .providers-filterbar > :deep(.filter-search-input) { grid-column: 1 / -1; max-width: none; }
  .providers-filterbar :deep(.pl-select) { width: 100%; }
  .providers-filterbar :deep(.pl-select-trigger) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
    width: 100%;
    justify-content: initial;
  }
  .providers-filterbar :deep(.pl-select-label),
  .providers-filterbar :deep(.pl-select-value) {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .providers-filterbar :deep(.pl-select-value) { max-width: none; }
  .providers-filterbar .pl-reset-text {
    grid-column: 1 / -1;
    justify-self: start;
  }
  .providers-empty { flex-direction: column; align-items: flex-start; }
}
</style>
