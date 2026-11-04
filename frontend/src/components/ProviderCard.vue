<script setup lang="ts">
/**
 * Provider 卡片。
 *
 * 卡片是**导航入口**——不承载完整信息，详情在 Provider 详情页。
 *
 * 卡片分为身份、供应能力和统计信息三段，先帮助用户识别 Provider
 * 和它提供的内容，再查看供应与独立能力数量。
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import AppIcon from './AppIcon.vue';
import CopyButton from './CopyButton.vue';
import { useRoute } from 'vue-router';
import { trackAnalyticsEvent } from '../composables/analytics';
import ProviderLogo from './ProviderLogo.vue';
import type { ProviderSummary } from '../types';
import {
  accountMarketLabel,
  describeOfficial,
  modelTypeLabel,
  providerDisplayName,
  providerKindLabel,
} from '../composables/format';
import { sortModelTypes } from '../composables/model-type-order';
import { t } from '../i18n';

const props = defineProps<{ provider: ProviderSummary }>();

const official = computed(() => describeOfficial(props.provider.official_integration));
const route = useRoute();
function trackSearchOpen(): void {
  if (typeof route.query.q === 'string' && route.query.q.trim()) trackAnalyticsEvent({ type: 'search_result_open', result_type: 'provider', provider_id: props.provider.id });
}

const displayName = computed(() => providerDisplayName(props.provider));
const capabilityRow = ref<HTMLElement | null>(null);
const measuredTypePills = ref<HTMLElement[]>([]);
const measuredOverflowPills = ref<HTMLElement[]>([]);
const visibleTypeCount = ref(3);
let capabilityResizeObserver: ResizeObserver | undefined;
const isOfficial = computed(
  () => props.provider.official_integration?.state === 'connected',
);

const markets = computed(() =>
  props.provider.account_markets
    .filter((m) => m !== 'UNKNOWN')
    .map(accountMarketLabel)
    .join(' / '),
);

const subtitle = computed(() => {
  const kind = providerKindLabel(props.provider.kind);
  return markets.value ? `${kind} · ${markets.value}` : kind;
});

/** 根据卡片中标签行的实际宽度显示标签，多余类型汇总为 +N。 */
const orderedTypes = computed(() => sortModelTypes(props.provider.model_types, modelTypeLabel));
const visibleTypes = computed(() => orderedTypes.value.slice(0, visibleTypeCount.value));
const hiddenTypeCount = computed(() => orderedTypes.value.length - visibleTypeCount.value);

function updateVisibleTypeCount(): void {
  const row = capabilityRow.value;
  if (!row) return;

  const availableWidth = row.clientWidth;
  const gap = Number.parseFloat(getComputedStyle(row).columnGap) || 0;
  const widths = measuredTypePills.value.map((pill) => pill.getBoundingClientRect().width);
  const types = orderedTypes.value;
  const typeCount = types.length;

  for (let count = typeCount; count >= 0; count--) {
    const overflowCount = typeCount - count;
    const tagsWidth = widths.slice(0, count).reduce((total, width) => total + width, 0);
    const gapsWidth = Math.max(0, count - 1) * gap;
    const overflowPill = overflowCount > 0 ? measuredOverflowPills.value[overflowCount - 1] : undefined;
    const overflowWidth = overflowPill
      ? (count > 0 ? gap : 0) + overflowPill.getBoundingClientRect().width
      : 0;

    if (tagsWidth + gapsWidth + overflowWidth <= availableWidth) {
      visibleTypeCount.value = count;
      return;
    }
  }

  visibleTypeCount.value = 0;
}

watch(orderedTypes, updateVisibleTypeCount);

onMounted(() => {
  updateVisibleTypeCount();
  if (capabilityRow.value) {
    capabilityResizeObserver = new ResizeObserver(updateVisibleTypeCount);
    capabilityResizeObserver.observe(capabilityRow.value);
  }
  void document.fonts?.ready.then(updateVisibleTypeCount);
});

onBeforeUnmount(() => capabilityResizeObserver?.disconnect());
</script>

<template>
  <article class="pl-card pl-card-interactive provider-card">
    <RouterLink
      :to="`/providers/${provider.id}`"
      class="provider-card-link"
      @click="trackSearchOpen"
      :aria-label="displayName"
    />
    <div class="provider-card-content">
      <div class="card-head">
        <div class="provider-identity">
          <ProviderLogo :name="displayName" :src="provider.logo" />
          <span class="provider-identity-text">
            <span class="provider-name pl-truncate">{{ displayName }}</span>
            <span class="provider-sub pl-truncate">{{ subtitle }}</span>
          </span>
        </div>
      </div>

      <div class="provider-id-row">
        <code class="pl-mono">{{ provider.id }}</code>
        <CopyButton
          class="provider-id-copy"
          variant="icon"
          :value="provider.id" analytics-kind="provider_id"
          :label="t('复制服务商 ID')"
          :title="t('复制服务商 ID')"
        />
      </div>

      <div ref="capabilityRow" class="card-capabilities">
        <span v-for="type in visibleTypes" :key="type" class="kind-pill">
          {{ modelTypeLabel(type) }}
        </span>
        <span v-if="hiddenTypeCount > 0" class="kind-pill kind-more">
          +{{ hiddenTypeCount }}
        </span>
        <span v-if="provider.model_types.length === 0" class="kind-pill kind-more">
          {{ t('暂无模型类型') }}
        </span>
      </div>
      <div class="card-capabilities card-capabilities-measure" aria-hidden="true">
        <span
          v-for="type in orderedTypes"
          :key="type"
          ref="measuredTypePills"
          class="kind-pill"
        >
          {{ modelTypeLabel(type) }}
        </span>
        <span
          v-for="count in orderedTypes.length"
          :key="count"
          ref="measuredOverflowPills"
          class="kind-pill kind-more"
        >
          +{{ count }}
        </span>
      </div>

      <div class="card-meta">
        <span
          class="pl-badge source-status"
          :class="isOfficial ? 'pl-badge-inverse' : 'pl-badge-neutral'"
          :title="official.detail"
        >
          <AppIcon v-if="isOfficial" name="check" />
          {{ official.label }}
        </span>
        <span class="meta-separator" aria-hidden="true"></span>
        <span class="card-protocol">
          {{ t('独立能力 {count}', { count: provider.service_capability_count }) }}
        </span>
        <span class="offer-counter">
          {{ provider.active_offering_count }}<span>{{ t('项供应') }}</span>
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.provider-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  min-height: 178px;
  padding: 19px 20px 16px;
  color: inherit;
}

.provider-card:hover { text-decoration: none; }

.provider-card-link {
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
}

.provider-card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  pointer-events: none;
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--pl-space-md);
  min-width: 0;
}

.provider-identity {
  display: flex;
  align-items: center;
  gap: var(--pl-space-md);
  min-width: 0;
}

.provider-identity-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.provider-name {
  font-size: var(--pl-text-md);
  font-weight: var(--pl-weight-strong);
  letter-spacing: var(--pl-tracking-snug);
  line-height: 1.3;
  color: var(--pl-text-primary);
}

.provider-sub {
  margin-top: 4px;
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
}

.provider-id-row {
  display: flex;
  align-items: center;
  gap: var(--pl-space-xs);
  min-height: 24px;
  margin-top: var(--pl-space-xs);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
}

.provider-id-copy {
  position: relative;
  z-index: 2;
  pointer-events: auto;
}

.card-capabilities {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 5px;
  min-width: 0;
  min-height: 24px;
  margin-top: var(--pl-space-sm);
  margin-bottom: 17px;
  overflow: hidden;
}

.card-capabilities-measure {
  position: absolute;
  width: 0;
  height: 0;
  flex-wrap: nowrap;
  visibility: hidden;
  pointer-events: none;
}

.card-capabilities-measure > .kind-pill { flex: 0 0 auto; }

.kind-pill {
  font-size: var(--pl-text-xs);
  line-height: 1.35;
  font-weight: var(--pl-weight-medium);
  white-space: nowrap;
  padding: 5px 7px;
  border: 1px solid var(--pl-glass-border);
  border-radius: var(--pl-radius-xs);
  background: rgb(130 131 139 / 5%);
  color: var(--pl-text-primary);
}

.kind-more {
  color: var(--pl-text-tertiary);
  background: transparent;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--pl-space-sm);
  min-width: 0;
  margin-top: auto;
  padding-top: 13px;
  border-top: 1px solid var(--pl-glass-border);
}

.meta-separator {
  width: 1px;
  height: 12px;
  flex: 0 0 auto;
  background: var(--pl-glass-border-strong);
}

.card-protocol {
  font-size: var(--pl-text-xs);
  color: var(--pl-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.offer-counter {
  margin-left: auto;
  font-size: var(--pl-text-sm);
  font-weight: var(--pl-weight-bold);
  color: var(--pl-text-primary);
  white-space: nowrap;
}

.offer-counter span {
  margin-left: 3px;
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-regular);
  color: var(--pl-text-tertiary);
}

@media (max-width: 768px) {
  .provider-card { min-height: 158px; padding: 16px; }
  .card-capabilities { margin-top: 17px; margin-bottom: 13px; }
  .card-meta { padding-top: 11px; }
}
</style>
