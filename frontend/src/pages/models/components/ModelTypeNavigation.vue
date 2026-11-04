<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import SelectPopup from '../../../components/SelectPopup.vue';
import { modelTypeLabel } from '../../../composables/format';
import { t } from '../../../i18n';
import type { ModelType } from '../../../types';

const props = defineProps<{
  types: readonly string[];
  modelType: string;
}>();

const route = useRoute();
const router = useRouter();
const navRef = ref<HTMLElement | null>(null);
const measureRef = ref<HTMLElement | null>(null);
const visibleCount = ref(props.types.length);
let resizeObserver: ResizeObserver | undefined;

function typesForCount(count: number): string[] {
  const selected = props.types.slice(0, count);
  if (!selected.includes(props.modelType) && count > 0 && props.types.includes(props.modelType)) {
    selected[count - 1] = props.modelType;
  }
  const selectedSet = new Set(selected);
  return props.types.filter((type) => selectedSet.has(type));
}

const visibleTypes = computed(() => typesForCount(visibleCount.value));

const visibleSet = computed(() => new Set(visibleTypes.value));
const hiddenTypes = computed(() => props.types.filter((type) => !visibleSet.value.has(type)));
const hiddenOptions = computed(() => hiddenTypes.value.map((type) => ({
  value: type,
  label: modelTypeLabel(type as ModelType),
})));

function updateVisibleCount(): void {
  const nav = navRef.value;
  const measure = measureRef.value;
  if (!nav || !measure) return;

  const availableWidth = nav.clientWidth;
  const links = nav.querySelector<HTMLElement>('.model-type-links');
  if (!links) return;
  const gap = Number.parseFloat(getComputedStyle(links).columnGap) || 0;
  const measuredTypes = [...measure.querySelectorAll<HTMLElement>('[data-type-index]')];
  const widths = measuredTypes.map((item) => item.getBoundingClientRect().width);
  const moreWidth = measure.querySelector<HTMLElement>('.pl-select-trigger')?.getBoundingClientRect().width ?? 0;

  for (let count = props.types.length; count >= 1; count -= 1) {
    const visible = typesForCount(count);
    const tagsWidth = visible.reduce((total, type) => {
      const index = props.types.indexOf(type);
      return total + (widths[index] ?? 0);
    }, 0);
    const hiddenCount = props.types.length - visible.length;
    const neededWidth = tagsWidth + Math.max(0, visible.length - 1) * gap +
      (hiddenCount > 0 ? gap + moreWidth : 0);

    if (neededWidth <= availableWidth) {
      visibleCount.value = count;
      return;
    }
  }

  visibleCount.value = 1;
}

function selectType(type: string): void {
  void router.push({ name: 'type-index', params: { modelType: type }, query: route.query });
}

watch(() => [props.types, props.modelType], async () => {
  await nextTick();
  updateVisibleCount();
}, { deep: true });

onMounted(() => {
  updateVisibleCount();
  if (navRef.value) {
    resizeObserver = new ResizeObserver(updateVisibleCount);
    resizeObserver.observe(navRef.value);
  }
  void document.fonts?.ready.then(updateVisibleCount);
});

onBeforeUnmount(() => resizeObserver?.disconnect());
</script>

<template>
  <div ref="navRef" class="model-type-navigation">
    <nav class="model-type-links" :aria-label="t('模型类型')">
      <RouterLink
        v-for="type in visibleTypes"
        :key="type"
        :to="{ name: 'type-index', params: { modelType: type }, query: route.query }"
        class="type-chip"
        :class="{ 'is-active': type === modelType }"
        :aria-current="type === modelType ? 'page' : undefined"
      >
        {{ modelTypeLabel(type as ModelType) }}
      </RouterLink>

      <SelectPopup
        v-if="hiddenTypes.length > 0"
        :model-value="''"
        :options="hiddenOptions"
        :label="`+${hiddenTypes.length}`"
        variant="compact"
        :aria-label="t('更多模型类型')"
        @update:model-value="selectType"
      />
    </nav>

    <div ref="measureRef" class="model-type-measure" aria-hidden="true" inert>
      <span
        v-for="(type, index) in types"
        :key="type"
        class="type-chip"
      :class="{ 'is-active': type === modelType }"
        :data-type-index="index"
      >
        {{ modelTypeLabel(type as ModelType) }}
      </span>
      <SelectPopup
        :model-value="''"
        :options="[]"
        :label="`+${types.length}`"
        variant="compact"
        :aria-label="t('更多模型类型')"
      />
    </div>
  </div>
</template>

<style scoped>
.model-type-navigation {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
}

.model-type-links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--pl-space-sm);
  min-width: 0;
  white-space: nowrap;
}

.type-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-height: 40px;
  padding: 0 var(--pl-space-md);
  border: 1px solid var(--pl-glass-border);
  border-radius: var(--pl-radius-full);
  background: var(--pl-glass-bg);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
  white-space: nowrap;
  transition: background var(--pl-duration-fast) var(--pl-ease-standard), border-color var(--pl-duration-fast) var(--pl-ease-standard), color var(--pl-duration-fast) var(--pl-ease-standard);
}

@media (hover: hover) and (pointer: fine) and (min-width: 769px) {
  .type-chip:hover:not(.is-active) {
    border-color: var(--pl-glass-border-strong);
    color: var(--pl-text-primary);
    text-decoration: none;
  }
}

.type-chip.is-active {
  background: var(--pl-bg-inverse);
  border-color: var(--pl-bg-inverse);
  color: var(--pl-text-inverse);
  font-weight: var(--pl-weight-semibold);
}

.model-type-navigation :deep(.pl-select--compact .pl-select-trigger) {
  height: 40px;
  justify-content: center;
  min-width: 48px;
  padding: 0 var(--pl-space-md);
  border-radius: var(--pl-radius-full);
  color: var(--pl-text-secondary);
}

.model-type-navigation :deep(.pl-select--compact .pl-select-label) {
  flex: 1;
  text-align: center;
  color: var(--pl-text-secondary);
  font-weight: var(--pl-weight-medium);
}

.model-type-navigation :deep(.pl-select--compact .pl-select-value) { display: none; }
.model-type-navigation :deep(.pl-select-chevron) { display: none; }

.model-type-measure {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: var(--pl-space-sm);
  width: max-content;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;
}
</style>
