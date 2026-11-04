<script setup lang="ts">
import { t } from '../../../i18n';
defineProps<{ cssPayload: string; copy: (text: string) => Promise<void> }>();
</script>

<template>
<section id="design-handoff" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">07</span> {{ t('开发交付') }}</h2>
            <span class="section-note">{{ t('语义层 CSS 变量 · 随主题切换') }}</span>
          </div>

          <div class="card design-card">
            <div class="card-head">
              <h3>CSS Custom Properties</h3>
              <button type="button" class="design-btn" @click="copy(cssPayload)">
                {{ t('复制') }}
              </button>
            </div>
            <pre class="design-code mono">{{ cssPayload }}</pre>
            <p class="preview-foot">
              {{ t('原始层色板与刻度见 01 与 04 节；组件只消费语义层，不硬编码颜色。') }}
            </p>
          </div>
        </section>
</template>
