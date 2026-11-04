<script setup lang="ts">
import type { SortDirection } from '../composables/table-sort';

defineProps<{
  label: string;
  sortKey: string;
  activeSortKey: string | null;
  direction: SortDirection;
}>();

const emit = defineEmits<{ activate: [key: string] }>();
</script>

<template>
  <th scope="col" :aria-sort="activeSortKey === sortKey ? (direction === 'asc' ? 'ascending' : 'descending') : 'none'">
    <button type="button" class="pl-table-sort-button" @click="emit('activate', sortKey)">
      {{ label }}
      <span v-if="activeSortKey === sortKey" class="pl-table-sort-indicator" aria-hidden="true">
        {{ direction === 'asc' ? '↑' : '↓' }}
      </span>
    </button>
  </th>
</template>
