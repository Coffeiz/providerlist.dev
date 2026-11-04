<script setup lang="ts">
import { t } from '../../../i18n';
defineProps<{ typeScale: readonly { name: string; token: string; px: number; sample: string }[]; weightScale: readonly { name: string; token: string; label: string }[]; readToken: (token: string) => string }>();
</script>

<template>
<section id="design-type" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">03</span> {{ t('字体排版') }}</h2>
            <span class="section-note">{{ t('样例用真实中文文案——token 名证明不了读感') }}</span>
          </div>

          <div class="cards cards-2">
            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('字号体系') }}</h3>
                <span class="caption mono">{{ t('5 档') }}</span>
              </div>
              <div class="type-list">
                <div
                  v-for="item in typeScale"
                  :key="item.token"
                  class="type-spec"
                >
                  <span class="type-meta">{{ item.name }}</span>
                  <span class="type-visual" :style="{ fontSize: `var(${item.token})` }">
                    {{ t(item.sample) }}
                  </span>
                  <span class="type-value mono">{{ item.px }}px</span>
                </div>
              </div>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('字重与可读性') }}</h3>
                <span class="caption mono">{{ t('5 档') }}</span>
              </div>
              <div class="type-list">
                <div
                  v-for="item in weightScale"
                  :key="item.token"
                  class="type-spec"
                >
                  <span class="type-meta">{{ item.name }}</span>
                  <span class="type-visual" :style="{ fontWeight: `var(${item.token})` }">
                    {{ t(item.label) }}
                  </span>
                  <span class="type-value mono">{{ readToken(item.token) }}</span>
                </div>
              </div>
              <div class="rules">
                <p><strong>{{ t('正文对比度 ≥ 4.5:1') }}</strong>{{ t('，次要文字与边框 ≥ 3:1。') }}</p>
                <p>{{ t('状态不能仅靠颜色表达，必须配文案或图标。') }}</p>
                <p>{{ t('玻璃层在「降低透明度」系统设置下退化为实底。') }}</p>
              </div>
            </div>
          </div>
        </section>
</template>
