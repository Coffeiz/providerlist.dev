<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import AppIcon from '../../../components/AppIcon.vue';
import SelectPopup from '../../../components/SelectPopup.vue';
import type { Service, ServiceCapability } from '../../../types';
import { serviceCapabilityLabel } from '../../../composables/format';
import { t } from '../../../i18n';

const props = defineProps<{
  providerId: string;
  serviceId: string;
  service: Service;
  capabilities: readonly ServiceCapability[];
}>();

const capabilityFilter = ref<string>('all');
const capabilityKinds = computed(() => [...new Set(props.capabilities.map((capability) => capability.kind))].sort());
const capabilityOptions = computed(() => [
  { value: 'all', label: t('全部类型') },
  ...capabilityKinds.value.map((value) => ({ value, label: serviceCapabilityLabel(value) })),
]);
const visibleCapabilities = computed(() => capabilityFilter.value === 'all'
  ? props.capabilities
  : props.capabilities.filter((capability) => capability.kind === capabilityFilter.value));
</script>

<template>
  <section class="pl-stack detail-section" aria-labelledby="detail-capabilities">
    <div class="pl-row-between pl-wrap">
      <h2 id="detail-capabilities" class="pl-text-lg detail-section-heading">
        {{ t('服务能力') }}
        <span class="detail-section-count">
          {{ capabilities.length }} {{ t('项 Provider 能力') }}
        </span>
      </h2>
      <div v-if="capabilityKinds.length > 1" class="detail-filter-field">
        <label class="pl-sr-only" for="detail-cap-kind">{{ t('能力类型') }}</label>
        <SelectPopup
          id="detail-cap-kind"
          v-model="capabilityFilter"
          :options="capabilityOptions"
          :aria-label="t('按能力类型筛选')"
        />
      </div>
    </div>

    <p class="pl-text-sm pl-text-secondary">
      {{ t('以下能力由 Provider 在当前市场提供。') }}
    </p>

    <div v-if="visibleCapabilities.length" class="pl-grid pl-grid-wide">
      <RouterLink
        v-for="capability in visibleCapabilities"
        :key="capability.kind"
        :to="{ path: `/providers/${providerId}/capabilities/${capability.kind}`, query: { service: serviceId } }"
        class="pl-card pl-card-interactive capability-card"
      >
        <div class="pl-row pl-wrap capability-ops">
          <span class="pl-badge pl-badge-neutral">{{ serviceCapabilityLabel(capability.kind) }}</span>
          <span v-if="capability.required_plan_ids?.length" class="pl-badge pl-badge-warning">M Plan</span>
        </div>
        <div class="capability-routes">
          <code
            v-for="(route, index) in (capability.routes ?? [])"
            :key="`${route.protocol}-${route.method}-${route.path}-${index}`"
            class="pl-text-xs pl-mono capability-route"
          >{{ route.method }} {{ route.path }}</code>
        </div>
        <AppIcon name="arrowRight" class="capability-arrow" />
      </RouterLink>
    </div>

    <div v-else class="pl-card">
      <p class="pl-text-secondary">{{ t('该市场没有已登记的 Provider 能力。') }}</p>
    </div>
  </section>
</template>
