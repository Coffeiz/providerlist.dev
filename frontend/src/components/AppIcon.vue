<script setup lang="ts">
/**
 * 站点图标。
 *
 * 使用 Remix Icon 的 Vue 组件，全站图标由同一映射管理。
 */
import { ICONS, type IconName } from './icons.ts';

const props = defineProps<{
  name: IconName;
}>();
</script>

<template>
  <component :is="ICONS[props.name]" class="pl-icon" aria-hidden="true" focusable="false" />
</template>
