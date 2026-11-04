<script setup lang="ts" generic="T">
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useWindowRows } from '../composables/useWindowRows';

const props = withDefaults(defineProps<{
  items: readonly T[];
  itemKey: (item: T) => string | number;
  estimate?: number;
}>(), { estimate: 120 });
const { root, rows, paddingTop, paddingBottom, measure, enabled } = useWindowRows({
  count: () => props.items.length,
  key: (index) => props.items[index] === undefined ? index : props.itemKey(props.items[index]!),
  estimate: props.estimate,
  threshold: 40,
});
const columns = ref(1);
const visible = computed(() => rows.value.flatMap((row) => {
  const item = props.items[row.index];
  return item === undefined ? [] : [{ ...row, item }];
}));
function syncColumns(): void {
  columns.value = root.value?.closest('table')?.tHead?.rows[0]?.cells.length ?? 1;
}
onMounted(syncColumns);
onUpdated(syncColumns);
</script>

<template>
  <tbody ref="root" :data-virtualized="enabled || undefined">
    <tr v-if="paddingTop > 0" aria-hidden="true" class="pl-virtual-spacer">
      <td :colspan="columns" :style="{ height: `${paddingTop}px` }"></td>
    </tr>
    <tr v-for="row in visible" :key="row.key" :ref="measure" :data-index="row.index" :aria-rowindex="row.index + 2">
      <slot :item="row.item" :index="row.index" />
    </tr>
    <tr v-if="paddingBottom > 0" aria-hidden="true" class="pl-virtual-spacer">
      <td :colspan="columns" :style="{ height: `${paddingBottom}px` }"></td>
    </tr>
  </tbody>
</template>
