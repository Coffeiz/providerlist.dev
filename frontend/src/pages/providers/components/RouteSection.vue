<script setup lang="ts">
import VirtualTableBody from '../../../components/VirtualTableBody.vue';
import { computed } from 'vue';
import AppIcon from '../../../components/AppIcon.vue';
import SortableTableHeader from '../../../components/SortableTableHeader.vue';
import type { Service } from '../../../types';
import { t } from '../../../i18n';
import { useTableSort } from '../../../composables/table-sort';

const props = defineProps<{ service: Service }>();
const callabilityLabels: Record<string, string> = {
  documented_only: '文档记录',
  declarative_ready: '声明式可映射',
  adapter_required: '需专用适配器',
  api_probed: '已实测',
};
function protocolLabel(protocol: string): string {
  const labels: Record<string, string> = {
    messages: 'Anthropic Messages',
    'chat-completions': 'OpenAI Chat Completions',
    responses: 'OpenAI Responses',
    'generate-content': 'Google Generate Content',
  };
  return labels[protocol] ? t(labels[protocol] ?? protocol) : protocol;
}
const rows = computed(() => {
  const grouped = new Map<string, {
    protocol: string;
    method: string;
    path: string;
    baseUrl?: string;
    documentation?: string;
    callability: string;
  }>();
  for (const endpoint of props.service.endpoints ?? []) {
    for (const route of endpoint.routes ?? []) {
      const key = [route.protocol, endpoint.id, route.method, route.path].join('|');
      if (grouped.has(key)) continue;
      grouped.set(key, {
        protocol: route.protocol,
        method: route.method,
        path: route.path,
        baseUrl: endpoint.base_url,
        ...(route.documentation ? { documentation: route.documentation } : {}),
        callability: route.callability ?? 'documented_only',
      });
    }
  }
  return [...grouped.values()].sort((left, right) =>
    left.protocol.localeCompare(right.protocol) || left.path.localeCompare(right.path),
  );
});
const { activeSortKey, direction, sortedItems, toggleSort } = useTableSort(
  () => rows.value,
  (row, key) => key === 'protocol' ? row.protocol
    : key === 'path' ? `${row.method} ${row.path}`
      : key === 'baseUrl' ? row.baseUrl
        : key === 'documentation' ? row.documentation
          : row.callability,
);
</script>

<template>
  <section class="pl-stack detail-section" aria-labelledby="detail-routes">
    <h2 id="detail-routes" class="pl-text-lg detail-section-heading">{{ t('支持的协议') }}</h2>
    <p class="pl-text-sm pl-text-secondary">
      {{ t('按当前市场登记的 API 接入信息展示协议与路径。') }}
      <code class="pl-mono">callability</code> {{ t('表示') }}<strong>{{ t('适配状态') }}</strong>{{ t('，不是真实性级别—— 数据存在不等于能够直接调用。') }}
    </p>
    <div v-if="rows.length > 0" class="pl-panel">
      <div class="pl-table-wrap">
        <table class="pl-table detail-route-table">
          <thead>
            <tr>
              <SortableTableHeader :label="t('协议')" sort-key="protocol" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('方法与路径')" sort-key="path" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('Base URL')" sort-key="baseUrl" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('协议文档')" sort-key="documentation" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
              <SortableTableHeader :label="t('适配状态')" sort-key="callability" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
            </tr>
          </thead>
          <VirtualTableBody :items="sortedItems" :item-key="(row) => `${row.protocol}-${row.method}-${row.path}-${row.baseUrl ?? ''}`">
              <template #default="{ item: row }">
              <td><span class="pl-badge pl-badge-neutral">{{ protocolLabel(row.protocol) }}</span></td>
              <td><code class="pl-endpoint-value">{{ row.method }} {{ row.path }}</code></td>
              <td><code class="pl-text-sm" :class="{ 'pl-text-tertiary': !row.baseUrl }">{{ row.baseUrl ?? t('未知') }}</code></td>
              <td>
                <a
                  v-if="row.documentation"
                  :href="row.documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="pl-row pl-stack-xs pl-text-sm detail-route-document-link"
                >
                  {{ t('官方文档') }}
                  <AppIcon name="external" />
                </a>
                <span v-else class="pl-text-xs pl-text-tertiary">{{ t('未知') }}</span>
              </td>
              <td><span class="pl-badge pl-badge-neutral">{{ t(callabilityLabels[row.callability] ?? 'documented_only') }}</span></td>
            </template>
          </VirtualTableBody>
        </table>
      </div>
    </div>
    <div v-else class="pl-card">
      <p class="pl-text-secondary">{{ t('该服务线没有已登记的协议。') }}</p>
    </div>
  </section>
</template>
