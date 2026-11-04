<script setup lang="ts">
/**
 * 独立能力索引。
 *
 * 仅展示 Provider 按市场提供的独立 Service Capability。
 *
 * 版式：**按能力类型分组**，每种类型一张卡——
 * 左边是能力图���，右边是类型名、服务商数量和提供该能力的服务商入口。
 * 这一页**不提供搜索**：能力类型是有限集合，按类型扫读比搜索更快，
 * 搜索能力放在服务商目录与模型目录里就够了。
 */
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import AppIcon from '../../components/AppIcon.vue';
import DataUnavailable from '../../components/DataUnavailable.vue';
import DataLoading from '../../components/DataLoading.vue';
import WindowedGrid from '../../components/WindowedGrid.vue';
import ProviderLogo from '../../components/ProviderLogo.vue';
import { accountMarketLabel } from '../../composables/format.ts';
import { capabilityIcon, getCapabilityGroups } from '../../composables/capabilities.ts';
import { getState } from '../../composables/catalog';
import { t } from '../../i18n';

const state = getState();

const capabilityData = computed(() => getCapabilityGroups());
const groups = computed(() => capabilityData.value.groups);
</script>

<template>
  <div class="pl-container pl-page capabilities">
    <div class="pl-content-head">
      <div class="pl-content-title">
        <h1>{{ t('独立服务能力') }}</h1>
        <span v-if="state.loaded" class="pl-result-count">
          {{
            t('{rows} 项 · {kinds} 种能力类型', {
              rows: capabilityData.entryCount,
              kinds: groups.length,
            })
          }}
        </span>
        <span v-else class="pl-result-count">{{ t('正在加载页面…') }}</span>
      </div>
      <span class="pl-demo-mark">{{ t('不绑定模型 · 不计入模型供应计数') }}</span>
    </div>

    <DataLoading v-if="!state.loaded" />
    <DataUnavailable v-else-if="state.loadError || state.pageLoadError" />

    <div v-else-if="groups.length === 0" class="pl-card">
      <p class="pl-text-secondary">{{ t('当前目录没有独立服务能力。') }}</p>
    </div>

    <div v-else class="cap-list">
      <article v-for="group in groups" :key="group.kind" class="cap-tile">
        <div class="cap-heading">
          <span class="cap-symbol">
            <AppIcon :name="capabilityIcon(group.kind)" />
          </span>
          <div class="cap-body">
          <h3 class="cap-title">{{ group.label }}</h3>
          <p class="cap-count">{{ t('{count} 个服务商', { count: group.providerCount }) }}</p>
          </div>
        </div>
        <WindowedGrid :items="group.providers" :item-key="(provider) => `${provider.providerId}:${provider.serviceId}:${provider.capabilityKind}`" class="cap-providers">
          <template #default="{ item: provider }">
          <RouterLink
            :to="{
              name: 'capability',
              params: { providerId: provider.providerId, kind: provider.capabilityKind },
              query: { from: 'capabilities', service: provider.serviceId },
            }"
            class="cap-provider"
          >
            <ProviderLogo :name="provider.providerName" :src="provider.providerLogo" />
            <span class="cap-provider-name">{{ provider.providerName }}</span>
            <span v-if="provider.accountMarket" class="cap-market">{{ accountMarketLabel(provider.accountMarket) }}</span>
            <AppIcon name="arrowRight" class="cap-arrow" />
          </RouterLink>
          </template>
        </WindowedGrid>
      </article>
    </div>
  </div>
</template>

<style scoped>
.capabilities {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-xl);
}

.capabilities > .pl-content-head {
  margin-bottom: 0;
}

.cap-list {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-md);
}

/* 能力卡片是**普通玻璃、不带投影**——
   它是列表里的条目，不是浮在最上层的实体卡片（那是 Provider 卡片与 API 面板）。 */
.cap-tile {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--pl-space-md);
  padding: var(--pl-space-lg);
  border-radius: var(--pl-radius-lg);
  background: var(--pl-glass-bg);
  border: 1px solid var(--pl-glass-border);
  backdrop-filter: var(--pl-glass-blur);
  -webkit-backdrop-filter: var(--pl-glass-blur);
}

.cap-heading {
  display: flex;
  align-items: center;
  gap: var(--pl-space-md);
  min-width: 0;
}

/* 图标方块：软底 + 弱化前景，不抢卡片的文字层级。 */
.cap-symbol {
  flex: 0 0 37px;
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  border-radius: var(--pl-radius-md);
  background: var(--pl-bg-subtle);
  color: var(--pl-text-secondary);
  font-size: var(--pl-text-md);
}

.cap-body {
  min-width: 0;
}

.cap-title {
  font-size: var(--pl-text-md);
  font-weight: var(--pl-weight-semibold);
}

.cap-count {
  margin-top: 4px;
  font-size: var(--pl-text-xs);
  color: var(--pl-text-secondary);
}

/* 服务商入口：细边框的小按钮，点进去是该能力详情。 */
.cap-providers {
  display: block;
  min-width: 0;
}

.cap-provider {
  display: flex;
  align-items: center;
  gap: var(--pl-space-md);
  min-width: 0;
  min-height: 72px;
  padding: var(--pl-space-md);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  background: var(--pl-glass-bg);
  color: var(--pl-text-primary);
  font-size: var(--pl-text-sm);
  transition:
    background var(--pl-duration-fast) var(--pl-ease-standard),
    border-color var(--pl-duration-fast) var(--pl-ease-standard);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .cap-provider:hover {
  background: var(--pl-bg-subtle);
  border-color: var(--pl-border-strong);
  text-decoration: none;
}
}

.cap-provider-name {
  min-width: 0;
  overflow: hidden;
  font-weight: var(--pl-weight-medium);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cap-market {
  flex: 0 0 auto;
  padding: 2px var(--pl-space-xs);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-sm);
  color: var(--pl-text-secondary);
  font-size: var(--pl-text-xs);
}

.cap-arrow {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  margin-left: auto;
  color: var(--pl-text-tertiary);
}

</style>
