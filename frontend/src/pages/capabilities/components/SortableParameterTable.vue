<script setup lang="ts">
import { computed } from 'vue';
import VirtualTableBody from '../../../components/VirtualTableBody.vue';
import SortableTableHeader from '../../../components/SortableTableHeader.vue';
import { useTableSort } from '../../../composables/table-sort';
import type { ParameterSpec } from '../../../types';
import { t } from '../../../i18n';

const props = defineProps<{ parameters: readonly ParameterSpec[] }>();
const parameters = computed(() => props.parameters);
const { activeSortKey, direction, sortedItems, toggleSort } = useTableSort(
  () => parameters.value,
  (parameter, key) => key === 'name' ? parameter.name
    : key === 'type' ? parameter.type
      : key === 'values' ? (parameter.enum?.join(',') ?? parameter.min ?? parameter.max)
        : parameter.required,
);
</script>

<template>
  <div class="pl-table-wrap">
    <table class="pl-table">
      <thead>
        <tr>
          <SortableTableHeader :label="t('名称')" sort-key="name" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
          <SortableTableHeader :label="t('类型')" sort-key="type" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
          <SortableTableHeader :label="t('取值')" sort-key="values" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
          <SortableTableHeader :label="t('必填')" sort-key="required" :active-sort-key="activeSortKey" :direction="direction" @activate="toggleSort" />
        </tr>
      </thead>
      <VirtualTableBody :items="sortedItems" :item-key="(parameter) => parameter.name">
        <template #default="{ item: parameter }">
          <td>
            <code class="pl-mono">{{ parameter.name }}</code>
            <div v-if="parameter.description" class="pl-text-xs pl-text-tertiary">{{ parameter.description }}</div>
          </td>
          <td>{{ parameter.type }}</td>
          <td>
            <span v-if="parameter.enum" class="pl-text-xs">{{ parameter.enum.join(' / ') }}</span>
            <span v-else-if="parameter.min !== undefined || parameter.max !== undefined" class="pl-text-xs">
              {{ t('{min} ~ {max}', { min: parameter.min ?? t('不限'), max: parameter.max ?? t('不限') }) }}
            </span>
            <span v-else class="pl-text-xs pl-text-tertiary">{{ t('不限') }}</span>
          </td>
          <td>
            <span v-if="parameter.required" class="pl-badge pl-badge-warning">{{ t('必填') }}</span>
            <span v-else class="pl-text-xs pl-text-tertiary">{{ t('可选') }}</span>
          </td>
        </template>
      </VirtualTableBody>
    </table>
  </div>
</template>
