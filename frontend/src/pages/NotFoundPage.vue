<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AppIcon from '../components/AppIcon.vue';
import { t } from '../i18n';
</script>

<template>
  <main id="main" class="pl-container pl-page not-found-page">
    <section class="not-found-panel pl-card" aria-labelledby="not-found-title">
      <p class="not-found-code pl-mono" aria-hidden="true">404</p>
      <div class="not-found-copy">
        <p class="not-found-label">{{ t('页面未找到') }}</p>
        <h1 id="not-found-title">{{ t('这个页面不存在') }}</h1>
        <p class="not-found-description">
          {{ t('链接可能已失效，或地址输入有误。') }}
        </p>
        <nav class="not-found-actions" :aria-label="t('可前往的页面')">
          <RouterLink class="pl-button pl-button-primary" to="/providers">
            <AppIcon name="apps" />
            {{ t('返回服务商目录') }}
          </RouterLink>
          <RouterLink class="pl-button" to="/models">
            <AppIcon name="arrowRight" />
            {{ t('浏览模型') }}
          </RouterLink>
          <a
            class="pl-button"
            href="https://github.com/Coffeiz/providerlist.dev"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('GitHub')"
            :title="t('GitHub')"
          >
            <AppIcon name="github" />
            {{ t('GitHub') }}
          </a>
        </nav>
      </div>
    </section>
  </main>
</template>
