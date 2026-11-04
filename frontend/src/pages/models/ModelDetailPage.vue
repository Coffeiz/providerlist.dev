<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { getModel, getProviderDocument, getProviders, getState } from '../../composables/catalog';
import { accountMarketLabel, describeStatus, formatNumber, modelTypeLabel, providerDisplayName } from '../../composables/format';
import StatusBadge from '../../components/StatusBadge.vue';
import ProviderLogo from '../../components/ProviderLogo.vue';
import DataUnavailable from '../../components/DataUnavailable.vue';
import DataLoading from '../../components/DataLoading.vue';
import { t } from '../../i18n';
import type { OfferingStatus } from '../../types';

const route = useRoute();
const state = getState();
const modelRef = computed(() => `${String(route.params.developerId)}/${String(route.params.modelSlug)}`);
const model = computed(() => getModel(modelRef.value));
const supply = computed(() => {
  const rows: Array<{ providerId: string; providerName: string; logo?: string; market: string; modelId: string; status: OfferingStatus | undefined }> = [];
  for (const provider of getProviders()) {
    const doc = getProviderDocument(provider.id);
    if (!doc) continue;
    for (const service of doc.services) {
      for (const offering of service.offerings ?? []) {
        if (offering.model_ref !== modelRef.value) continue;
        rows.push({
          providerId: provider.id,
          providerName: providerDisplayName(provider),
          ...(provider.logo ? { logo: provider.logo } : {}),
          market: service.id,
          modelId: offering.id,
        status: offering.status,
        });
      }
    }
  }
  return rows;
});
</script>

<template>
  <main class="pl-container pl-page model-detail-page">
    <DataLoading v-if="!state.loaded || state.pageLoading" />
    <DataUnavailable v-else-if="state.loadError || state.pageLoadError" />
    <section v-else-if="model" class="pl-stack detail-section">
      <header class="pl-stack model-detail-header">
        <RouterLink class="pl-text-sm pl-text-secondary" :to="`/types/${model.type ?? 'unknown'}/`">← {{ modelTypeLabel(model.type ?? 'unknown') }}</RouterLink>
        <div class="pl-content-head">
          <div class="pl-content-title">
            <h1>{{ model.name }}</h1>
            <span class="pl-result-count">{{ model.developer_name }} · {{ modelTypeLabel(model.type ?? 'unknown') }}</span>
          </div>
          <code class="pl-mono pl-text-secondary">{{ model.id }}</code>
        </div>
        <p v-if="model.family" class="pl-text-sm pl-text-secondary">{{ t('模型系列') }} · {{ model.family }}</p>
      </header>

      <section class="pl-card model-facts-card">
        <h2>{{ t('模型信息') }}</h2>
        <dl class="model-facts-grid">
          <div v-if="model.release_date"><dt>{{ t('发布日期') }}</dt><dd>{{ model.release_date }}</dd></div>
          <div v-if="model.limits?.context != null"><dt>{{ t('上下文') }}</dt><dd>{{ formatNumber(model.limits.context) }}</dd></div>
          <div v-if="model.limits?.input != null"><dt>{{ t('输入上限') }}</dt><dd>{{ formatNumber(model.limits.input) }}</dd></div>
          <div v-if="model.limits?.output != null"><dt>{{ t('输出上限') }}</dt><dd>{{ formatNumber(model.limits.output) }}</dd></div>
          <div v-if="model.modalities?.input?.length"><dt>{{ t('输入模态') }}</dt><dd>{{ model.modalities.input.join(', ') }}</dd></div>
          <div v-if="model.modalities?.output?.length"><dt>{{ t('输出模态') }}</dt><dd>{{ model.modalities.output.join(', ') }}</dd></div>
        </dl>
      </section>

      <section class="pl-card model-supply-card">
        <div class="pl-content-head"><div class="pl-content-title"><h2>{{ t('当前供应') }}</h2><span class="pl-result-count">{{ supply.length }} {{ t('项') }}</span></div></div>
        <div v-if="supply.length" class="model-supply-list">
          <article v-for="(item, index) in supply" :key="`${item.providerId}-${item.market}-${item.modelId}-${index}`" class="model-supply-row">
            <RouterLink :to="`/providers/${item.providerId}?service=${item.market}`" class="model-supply-provider">
              <ProviderLogo :name="item.providerName" :src="item.logo" size="inline" />
              <span>{{ item.providerName }}</span>
              <span class="pl-badge pl-badge-neutral">{{ accountMarketLabel(item.market) }}</span>
            </RouterLink>
            <code class="pl-mono">{{ item.modelId }}</code>
            <StatusBadge :label="describeStatus(item.status).label" :tone="describeStatus(item.status).tone" />
          </article>
        </div>
        <p v-else class="pl-text-sm pl-text-tertiary">{{ t('当前没有已记录的供应项。') }}</p>
      </section>
    </section>
    <section v-else class="pl-card"><h1>{{ t('模型不存在') }}</h1></section>
  </main>
</template>

<style scoped>
.model-detail-page { display: flex; flex-direction: column; gap: var(--pl-space-lg); }
.model-detail-header { gap: var(--pl-space-md); }
.model-detail-header > a { width: fit-content; }
.model-facts-card, .model-supply-card { display: flex; flex-direction: column; gap: var(--pl-space-md); }
.model-facts-card h2, .model-supply-card h2 { margin: 0; font-size: var(--pl-text-md); }
.model-facts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--pl-space-md); margin: 0; }
.model-facts-grid dt { color: var(--pl-text-tertiary); font-size: var(--pl-text-xs); }
.model-facts-grid dd { margin: var(--pl-space-xs) 0 0; overflow-wrap: anywhere; }
.model-supply-list { display: grid; gap: var(--pl-space-sm); }
.model-supply-row { display: grid; grid-template-columns: minmax(180px, 1fr) minmax(180px, 1.5fr) auto; align-items: center; gap: var(--pl-space-md); padding: var(--pl-space-md); border: 1px solid var(--pl-glass-border); border-radius: var(--pl-radius-md); }
.model-supply-provider { display: flex; align-items: center; gap: var(--pl-space-sm); min-width: 0; }
.model-supply-row > code { overflow-wrap: anywhere; }
@media (max-width: 640px) { .model-supply-row { grid-template-columns: 1fr auto; } .model-supply-row > code { grid-column: 1 / -1; grid-row: 2; } }
</style>
