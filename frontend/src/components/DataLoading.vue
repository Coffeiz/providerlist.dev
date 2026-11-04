<script setup lang="ts">
import { t } from '../i18n';
</script>

<template>
  <div class="pl-card" role="status" aria-live="polite">
    <p class="pl-text-secondary">{{ t('正在加载页面…') }}</p>
  </div>
</template>
