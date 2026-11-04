<script setup lang="ts">
import CopyButton from '../../../components/CopyButton.vue';
import { t } from '../../../i18n';
defineProps<{ apiTokens: readonly { name: string; token: string }[]; readToken: (token: string) => string; copy: (text: string) => Promise<void> }>();
</script>

<template>
<section id="design-api" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">06</span> {{ t('API 区域') }}</h2>
            <span class="section-note">{{ t('组件层令牌 · 只消费语义层') }}</span>
          </div>

          <div class="cards cards-2">
            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('端点卡片') }}</h3>
                <span class="caption mono">pages/api-docs/ApiDocsPage.vue</span>
              </div>
              <article class="api-card">
                <span class="api-card-body">
                  <span class="pl-heading-eyebrow">{{ t('完整目录') }}</span>
                  <code class="api-card-path">GET /v1/offerings.json</code>
                </span>
                <CopyButton
                  variant="icon"
                  value="/v1/offerings.json"
                  :label="t('复制路径')"
                  :title="t('复制路径')"
                />
              </article>
              <p class="preview-foot">
                {{ t('一个端点一张卡：左边标题与路径，右边复制图标；卡片都在玻璃面板内部。') }}
              </p>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('API 令牌') }}</h3>
                <span class="caption mono">--pl-api-*</span>
              </div>
              <div class="api-token-list">
                <button
                  v-for="item in apiTokens"
                  :key="item.token"
                  type="button"
                  class="api-token"
                  :title="t('复制 {token}', { token: item.token })"
                  @click="copy(`${item.token}: ${readToken(item.token)};`)"
                >
                  <span class="api-token-name">{{ item.name }}</span>
                  <span class="api-token-value mono">{{ readToken(item.token) }}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
</template>
