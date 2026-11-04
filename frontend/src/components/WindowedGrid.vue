<script setup lang="ts" generic="T">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useWindowRows } from '../composables/useWindowRows';
const props = defineProps<{ items: readonly T[]; itemKey: (item: T) => string | number }>();
const columns = ref(3);
function resize(): void {
  columns.value = window.matchMedia('(max-width: 768px)').matches ? 1
    : window.matchMedia('(max-width: 1000px)').matches ? 2 : 3;
}
const groups = computed(() => {
  const result: T[][] = [];
  for (let index = 0; index < props.items.length; index += columns.value) {
    result.push(props.items.slice(index, index + columns.value));
  }
  return result;
});
const { root, rows, paddingTop, paddingBottom, measure, enabled } = useWindowRows({
  count: () => groups.value.length,
  key: (index) => {
    const item = groups.value[index]?.[0];
    return item === undefined ? index : props.itemKey(item);
  },
  estimate: 240,
  threshold: 20,
});
onMounted(() => { resize(); window.addEventListener('resize', resize, { passive: true }); });
onBeforeUnmount(() => window.removeEventListener('resize', resize));
</script>

<template>
  <div ref="root" class="pl-window-grid" :data-virtualized="enabled || undefined">
    <div v-if="paddingTop > 0" aria-hidden="true" :style="{ height: `${paddingTop}px` }"></div>
    <div v-for="row in rows" :key="row.key" :ref="measure" :data-index="row.index" class="pl-window-grid-row" :style="{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }">
      <template v-for="item in groups[row.index]" :key="itemKey(item)">
        <slot :item="item" />
      </template>
    </div>
    <div v-if="paddingBottom > 0" aria-hidden="true" :style="{ height: `${paddingBottom}px` }"></div>
  </div>
</template>
