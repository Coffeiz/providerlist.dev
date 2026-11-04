<script setup lang="ts">
/**
 * 数据不可用空态。
 *
 * 区分两件本质不同的事：
 * - 「数据加载失败」——本站不知道目录长什么样，必须明说，不能装作"结果是空的"
 * - 「筛选后没有匹配项」——数据是全的，只是当前条件下没有命中
 *
 * 二者混为一谈会让读者把"没取到数"当成"不存在"，违反「未知就是未知」。
 */
import { getState } from '../composables/catalog';
import { t } from '../i18n';

const state = getState();
</script>

<template>
  <div class="pl-card data-unavailable" role="status">
    <p class="pl-text-secondary">{{ t('未能加载公开数据产物，目录内容暂不可用。') }}</p>
    <p class="pl-text-xs pl-text-tertiary">
      {{ state.loadError ?? state.pageLoadError ?? t('未知错误') }}
    </p>
    <p class="pl-text-xs pl-text-tertiary">
      {{ t('本站不提供替代数据或示例回退，以免把“未取到”误读成“不存在”。') }}
    </p>
  </div>
</template>

<style scoped>
.data-unavailable {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-sm);
}
</style>
