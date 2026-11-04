<script setup lang="ts">
import AppIcon from '../../../components/AppIcon.vue';
import { serviceMarketForId } from '@providerlist/schema/types';
import CopyButton from '../../../components/CopyButton.vue';
import { accountMarketLabel } from '../../../composables/format';
import type { Service } from '../../../types';
import { t } from '../../../i18n';

const props = defineProps<{
  service: Service;
  endpointTypeLabel: (endpointId: string, apiRegion?: string) => string;
}>();

function usesMarketLabel(region: string): boolean {
  const market = serviceMarketForId(props.service.id);
  return ['未标注', '未披露', '未知', 'unknown'].includes(region.trim().toLowerCase())
    && (market === 'CN' || market === 'GLOBAL');
}

function endpointRegionLabel(region: string): string {
  if (usesMarketLabel(region)) {
    const market = serviceMarketForId(props.service.id)!;
    return market === 'GLOBAL' ? t('全球') : accountMarketLabel(market);
  }
  const normalized = region.trim();
  const aliases: Record<string, string> = {
    cn: '中国',
    global: '全球',
    'united states': '美国',
    'stepfun international': 'StepFun 国际',
    'step plan international': 'Step Plan 国际',
  };
  return t(aliases[normalized.toLowerCase()] ?? normalized);
}
</script>

<template>
  <section class="pl-stack detail-section" aria-labelledby="detail-endpoints">
    <h2 id="detail-endpoints" class="pl-text-lg detail-section-heading">{{ t('API 接入') }}</h2>
    <div class="pl-stack endpoint-list">
      <div v-for="endpoint in service.endpoints ?? []" :key="endpoint.id" class="pl-card endpoint-card">
        <div class="endpoint-main">
          <div class="pl-row endpoint-heading">
            <span class="pl-text-sm pl-text-secondary">{{ endpointTypeLabel(endpoint.id, endpoint.api_region) }}</span>
            <span class="pl-badge pl-badge-neutral">{{ endpointRegionLabel(endpoint.api_region) }}</span>
          </div>
          <div class="pl-endpoint-value endpoint-url">{{ endpoint.base_url }}</div>
        </div>
        <div class="pl-row endpoint-actions">
          <a
            v-if="endpoint.documentation"
            :href="endpoint.documentation"
            class="pl-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="doc" />
            {{ t('协议文档') }}
            <AppIcon name="external" />
          </a>
          <CopyButton :value="endpoint.base_url" analytics-kind="base_url" :label="t('复制 Base URL')" icon="copy" variant="primary" />
        </div>
      </div>
    </div>
  </section>
</template>
