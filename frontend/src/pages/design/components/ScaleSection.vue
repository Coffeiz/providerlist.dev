<script setup lang="ts">
import { t } from '../../../i18n';
defineProps<{ spacingScale: readonly { name: string; token: string; px: number }[]; radiusScale: readonly { name: string; token: string; px: number }[]; readToken: (token: string) => string; copy: (text: string) => Promise<void> }>();
</script>

<template>
<section id="design-scale" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">04</span> {{ t('间距与圆角') }}</h2>
            <span class="section-note mono">{{ t('4px 基准 · 5 档') }}</span>
          </div>

          <div class="cards cards-2">
            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('间距卡尺') }}</h3>
                <span class="caption mono">--pl-space-*</span>
              </div>
              <div class="space-list">
                <div
                  v-for="item in spacingScale"
                  :key="item.token"
                  class="space-line"
                >
                  <span class="space-code">{{ item.name }}</span>
                  <span class="space-bar" :style="{ width: `${item.px * 2}px` }" />
                  <span class="space-px mono">{{ item.px }}px</span>
                </div>
              </div>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('圆角卡尺') }}</h3>
                <span class="caption mono">--pl-radius-*</span>
              </div>
              <div class="radii-row">
                <button
                  v-for="item in radiusScale"
                  :key="item.token"
                  type="button"
                  class="radius-tile"
                  :title="t('复制 {token}', { token: item.token })"
                  @click="copy(`${item.token}: ${readToken(item.token)};`)"
                >
                  <span
                    class="radius-shape"
                    :style="{ borderRadius: `var(${item.token})` }"
                  />
                  <span class="radius-label">{{ item.name }}</span>
                  <span class="radius-px mono">{{ item.px }}px</span>
                </button>
              </div>
              <div class="rules">
                <p><strong>{{ t('细边框') }}</strong> {{ t('· 1px，低对比。') }}</p>
                <p><strong>{{ t('低对比投影') }}</strong> {{ t('· 2 层，不做彩色阴影。') }}</p>
                <p><strong>{{ t('动效时间') }}</strong> · 80–280ms。</p>
              </div>
            </div>
          </div>
        </section>
</template>
