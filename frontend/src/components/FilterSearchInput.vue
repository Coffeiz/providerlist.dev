<script setup lang="ts">
import AppIcon from './AppIcon.vue';

const props = withDefaults(defineProps<{ modelValue: string; placeholder: string; label: string; wide?: boolean }>(), {
  wide: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <label class="filter-search-input" :class="{ 'is-wide': props.wide }">
    <AppIcon name="search" aria-hidden="true" />
    <input
      :value="props.modelValue"
      type="search"
      class="pl-input"
      :placeholder="props.placeholder"
      :aria-label="props.label"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style scoped>
.filter-search-input {
  position: relative;
  display: block;
  flex: 1 1 240px;
  align-self: flex-start;
  height: 40px;
  min-width: min(240px, 100%);
  max-width: 360px;
  box-sizing: border-box;
}

.filter-search-input > .pl-icon {
  position: absolute;
  top: 50%;
  left: var(--pl-space-md);
  width: 16px;
  height: 16px;
  color: var(--pl-text-tertiary);
  transform: translateY(-50%);
  pointer-events: none;
}

.filter-search-input > .pl-input {
  min-height: 40px;
  padding-left: calc(var(--pl-space-md) + 16px + var(--pl-space-sm));
}

.filter-search-input.is-wide {
  flex: 0 1 420px;
  max-width: 420px;
}

@media (max-width: 768px) {
  .filter-search-input,
  .filter-search-input.is-wide {
    flex: initial;
    width: 100%;
    height: 40px;
    min-width: 0;
    max-width: none;
  }
}
</style>
