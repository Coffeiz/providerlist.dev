<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ProviderSummary } from '../../../types';
import ProviderCard from '../../../components/ProviderCard.vue';
import StatusBadge from '../../../components/StatusBadge.vue';
import SelectPopup from '../../../components/SelectPopup.vue';
import AppIcon from '../../../components/AppIcon.vue';
import CopyButton from '../../../components/CopyButton.vue';
import { t } from '../../../i18n';
defineProps<{ previewProvider: ProviderSummary | null }>();
const demoMarket = ref('all');
const demoMarketOptions = computed(() => [
  { value: 'all', label: t('全部') },
  { value: 'cn', label: t('中国') },
  { value: 'global', label: t('国际') },
]);
</script>

<template>
<section id="design-components" class="design-section">
          <div class="section-title">
            <h2><span class="section-index">05</span> {{ t('组件预览') }}</h2>
            <span class="section-note">{{ t('这里用的就是站点在跑的真实组件，不是重画一遍') }}</span>
          </div>

          <div class="cards cards-2">
            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('Provider 卡片') }}</h3>
                <span class="caption mono">components/ProviderCard.vue</span>
              </div>
              <ProviderCard v-if="previewProvider" :provider="previewProvider" />
              <p class="preview-foot">
                {{ t('卡片是导航入口：顶段认得出是谁，中段看清供应什么，底段给出数据从哪来、有多少。') }}
              </p>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('状态与来源') }}</h3>
                <span class="caption mono">components/StatusBadge.vue</span>
              </div>
              <div class="state-list">
                <div class="state-row">
                  <span>
                    <span class="state-label">{{ t('供应中') }}</span>
                    <span class="state-sub">{{ t('截至最近一次可信证据有效') }}</span>
                  </span>
                  <StatusBadge :label="t('供应中')" tone="success" />
                </div>
                <div class="state-row">
                  <span>
                    <span class="state-label">{{ t('即将退役') }}</span>
                    <span class="state-sub">{{ t('官方已公告弃用') }}</span>
                  </span>
                  <StatusBadge :label="t('即将退役')" tone="warning" />
                </div>
                <div class="state-row">
                  <span>
                    <span class="state-label">{{ t('已退役') }}</span>
                    <span class="state-sub">{{ t('默认目录不再显示') }}</span>
                  </span>
                  <StatusBadge :label="t('已退役')" tone="danger" />
                </div>
                <div class="state-row">
                  <span>
                    <span class="state-label">{{ t('状态待核实') }}</span>
                    <span class="state-sub">{{ t('未知就是未知') }}</span>
                  </span>
                  <StatusBadge :label="t('状态待核实')" tone="neutral" />
                </div>
                <div class="state-row">
                  <span>
                    <span class="state-label">{{ t('官方接入') }}</span>
                    <span class="state-sub">{{ t('来源身份 ≠ 内容正确') }}</span>
                  </span>
                  <StatusBadge :label="t('官方接入')" tone="inverse" />
                </div>
              </div>
            </div>
          </div>

          <div class="cards cards-2">
            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('输入与筛选') }}</h3>
                <span class="caption mono">focus / hover / selected</span>
              </div>
              <div class="field">
                <span class="field-label">{{ t('搜索 Provider') }}</span>
                <input class="design-input" type="search" :placeholder="t('搜索名称、模型 ID、协议…')" />
              </div>
              <div class="field">
                <span class="field-label">{{ t('账号市场') }}</span>
                <SelectPopup
                  v-model="demoMarket"
                  :options="demoMarketOptions"
                  :aria-label="t('账号市场')"
                />
              </div>
              <label class="pl-row pl-text-sm">
                <input class="pl-checkbox" type="checkbox" checked />
                {{ t('显示已退役') }}
              </label>
              <div class="checkbox-token-preview">
                <label><input class="pl-checkbox" type="checkbox" checked /> {{ t('已选中') }}</label>
                <label><input class="pl-checkbox" type="checkbox" /> {{ t('未选中') }}</label>
                <span class="caption mono">--pl-checkbox-*</span>
              </div>
              <div class="checkbox-token-preview">
                <label><input class="pl-radio" type="radio" name="design-radio-preview" checked /> {{ t('已选中') }}</label>
                <label><input class="pl-radio" type="radio" name="design-radio-preview" /> {{ t('未选中') }}</label>
                <span class="caption mono">--pl-radio-*</span>
              </div>
              <div class="design-chips">
                <span class="design-chip">chat</span>
                <span class="design-chip">video</span>
                <span class="design-chip">speech</span>
                <span class="design-chip">embedding</span>
              </div>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('价格展示') }}</h3>
                <span class="caption mono">{{ t('原币种 + 条件') }}</span>
              </div>
              <div class="money">¥1.000</div>
              <p class="money-note">{{ t('每百万 Token 输入 · 条件：usage.input_tokens &lt; 32000') }}</p>
              <div class="money-row">
                <span class="mono">{{ t('输出 ¥4.000 / 1M') }}</span>
                <span class="money-tag">{{ t('条件价') }}</span>
              </div>
              <div class="money-row">
                <span class="mono">{{ t('输入 ¥1.000') }}</span>
                <span class="money-native mono">$0.15 · --pl-price-native</span>
              </div>
              <div class="money-row">
                <span class="mono">{{ t('缓存读取 ¥0.067') }}</span>
                <span class="money-native money-native-cache mono">$0.01 · --pl-price-cache-native</span>
              </div>
              <p class="preview-foot">
                {{ t('未知限制显示「未知」，不显示「无限制」。条件价格显示条件，不伪装成固定单价。') }}
              </p>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('等宽文本') }}</h3>
                <span class="caption mono">pl-mono / pl-endpoint-value / pl-code</span>
              </div>
              <div class="mono-list">
                <div class="mono-row">
                  <span class="mono-label">{{ t('端点值') }}</span>
                  <code class="pl-endpoint-value">https://api.example.com</code>
                </div>
                <div class="mono-row">
                  <span class="mono-label">{{ t('标识符') }}</span>
                  <code class="pl-mono">example-chat-1</code>
                </div>
                <div class="mono-row">
                  <span class="mono-label">{{ t('代码片段') }}</span>
                  <code class="pl-code">"3.00"</code>
                </div>
              </div>
              <p class="mono-preview-foot">
                {{ t('标识符不套框，端点值是卡片里的主值；只有真正的代码字面量才带框。') }}
              </p>
            </div>

            <div class="card design-card">
              <div class="card-head">
                <h3>{{ t('按钮') }}</h3>
                <span class="caption mono">pl-button</span>
              </div>
              <div class="button-preview">
                <button type="button" class="pl-button pl-button-primary">
                  <AppIcon name="doc" />
                  {{ t('主要操作') }}
                </button>
                <button type="button" class="pl-button">
                  <AppIcon name="download" />
                  {{ t('次要操作') }}
                </button>
                <button type="button" class="pl-button pl-button-ghost">
                  {{ t('幽灵操作') }}
                </button>
                <CopyButton
                  variant="icon"
                  value="/v1/offerings.json"
                  :label="t('复制路径')"
                  :title="t('复制路径')"
                />
              </div>
              <p class="preview-foot">
                {{ t('一组动作里只允许一个主要按钮；文字按钮带前置图标，外链使用站外跳转图标。') }}
              </p>
            </div>
          </div>
        </section>
</template>

<style scoped>
.checkbox-token-preview {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--pl-space-sm) var(--pl-space-md);
  margin-top: var(--pl-space-md);
  padding-top: var(--pl-space-md);
  border-top: 1px solid var(--pl-border-subtle);
}
.checkbox-token-preview label {
  display: inline-flex;
  align-items: center;
  gap: var(--pl-space-xs);
  color: var(--pl-text-secondary);
  font-size: var(--pl-text-xs);
}
.checkbox-token-preview .caption { color: var(--pl-text-tertiary); }
.mono-preview-foot {
  margin-top: 0;
  padding-top: var(--pl-space-md);
  border-top: 1px solid var(--pl-border-subtle);
  color: var(--pl-text-tertiary);
  font-size: var(--pl-text-xs);
  line-height: var(--pl-leading-relaxed);
}
</style>
