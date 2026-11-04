<script setup lang="ts">
import type { Swatch } from './types';
import { t } from '../../../i18n';
defineProps<{ neutralSwatches: readonly Swatch[]; statusSwatches: readonly Swatch[]; semanticRoles: readonly Swatch[]; readToken: (token: string) => string; copy: (text: string) => Promise<void> }>();
</script>

<template>
<section id="design-colors" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">01</span> {{ t('色板') }}</h2>
            <span class="section-note">{{ t('点击任意色卡复制其 CSS 声明') }}</span>
          </div>

          <div class="cards cards-2">
            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('中性阶') }}</h3>
                <span class="caption mono">surface ×3 · ink ×3</span>
              </div>
              <div class="swatch-grid">
                <button
                  v-for="item in neutralSwatches"
                  :key="item.token"
                  type="button"
                  class="swatch"
                  :title="t('复制 {token}', { token: item.token })"
                  @click="copy(`${item.token}: ${readToken(item.token)};`)"
                >
                  <span
                    class="swatch-color"
                    :style="{ background: `var(${item.token})` }"
                  />
                  <span class="swatch-num">{{ item.name }}</span>
                  <span class="swatch-hex">{{ readToken(item.token) }}</span>
                </button>
              </div>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('状态阶') }}</h3>
                <span class="caption mono">success · warning · danger</span>
              </div>
              <div class="swatch-grid">
                <button
                  v-for="item in statusSwatches"
                  :key="item.token"
                  type="button"
                  class="swatch"
                  :title="t('复制 {token}', { token: item.token })"
                  @click="copy(`${item.token}: ${readToken(item.token)};`)"
                >
                  <span
                    class="swatch-color"
                    :style="{ background: `var(${item.token})` }"
                  />
                  <span class="swatch-num">{{ item.name }}</span>
                  <span class="swatch-hex">{{ readToken(item.token) }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="card design-card">
            <div class="card-head">
              <h3>{{ t('语义角色') }}</h3>
              <span class="caption mono">{{ t('一个角色一个值，不成组') }}</span>
            </div>
            <div class="semantic-grid">
              <button
                v-for="item in semanticRoles"
                :key="item.token"
                type="button"
                class="semantic"
                :title="t('复制 {token}', { token: item.token })"
                @click="copy(`${item.token}: ${readToken(item.token)};`)"
              >
                <span
                  class="semantic-chip"
                  :style="{ background: `var(${item.token})` }"
                />
                <span class="semantic-text">
                  <span class="semantic-name">{{ item.name }}</span>
                  <span class="semantic-value">{{ item.token }}</span>
                </span>
              </button>
            </div>
          </div>
        </section>
</template>
