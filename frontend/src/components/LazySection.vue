<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const root = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | undefined;
function reveal(): void { visible.value = true; observer?.disconnect(); }
onMounted(() => {
  window.addEventListener('beforeprint', reveal);
  observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    visible.value = true;
    observer?.disconnect();
  }, { rootMargin: '800px' });
  if (root.value) observer.observe(root.value);
});
onBeforeUnmount(() => { observer?.disconnect(); window.removeEventListener('beforeprint', reveal); });
</script>

<template>
  <div ref="root" class="pl-lazy-section" :class="{ 'is-pending': !visible }">
    <slot v-if="visible" />
  </div>
</template>
