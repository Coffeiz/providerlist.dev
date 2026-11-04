<script setup lang="ts">
import { t } from '../../../i18n';
</script>

<template>
<section id="design-surfaces" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">02</span> {{ t('表面与玻璃') }}</h2>
            <span class="section-note mono">blur(22px) · 62% / 79%</span>
          </div>

          <div class="cards cards-3">
            <div class="card design-card">
              <div class="surface-stage">
                <div class="surface-demo" style="background: var(--pl-bg-surface)">
                  <strong>{{ t('实体表面') }}</strong>
                  <p>{{ t('密集信息与可读表格') }}</p>
                  <span class="mini-line" />
                </div>
              </div>
              <div class="surface-desc">
                <strong>surface / solid</strong>
                <span class="mono">--pl-bg-surface</span>
              </div>
            </div>

            <div class="card design-card">
              <div class="surface-stage">
                <div
                  class="surface-demo"
                  style="background: var(--pl-glass-bg); backdrop-filter: var(--pl-glass-blur)"
                >
                  <strong>{{ t('玻璃表面') }}</strong>
                  <p>{{ t('Provider 卡片与轻量面板') }}</p>
                  <span class="mini-line" />
                </div>
              </div>
              <div class="surface-desc">
                <strong>glass / default</strong>
                <span class="mono">--pl-glass-bg</span>
              </div>
            </div>

            <div class="card design-card">
              <div class="surface-stage">
                <div
                  class="surface-demo"
                  style="background: var(--pl-glass-bg-strong); backdrop-filter: var(--pl-glass-blur)"
                >
                  <strong>{{ t('实底玻璃') }}</strong>
                  <p>{{ t('浮层与需要压住底色的区域') }}</p>
                  <span class="mini-line" />
                </div>
              </div>
              <div class="surface-desc">
                <strong>glass / strong</strong>
                <span class="mono">--pl-glass-bg-strong</span>
              </div>
            </div>
          </div>
        </section>
</template>
