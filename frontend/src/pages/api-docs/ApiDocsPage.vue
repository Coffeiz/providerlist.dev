<script setup lang="ts">
import { computed } from 'vue';
import CopyButton from '../../components/CopyButton.vue';
import JsonBuilder from '../../components/api/JsonBuilder.vue';
import { API_ENDPOINTS, API_SCHEMAS } from '../../composables/api';
import { getState } from '../../composables/catalog';
import { t } from '../../i18n';

const state = getState();
const origin = computed(() => typeof window === 'undefined' ? '' : window.location.origin);
const endpoints = computed(() => API_ENDPOINTS.filter((endpoint) => !endpoint.requiresFx || state.fx !== null));
const sample = JSON.stringify({
  schema_version: '1.0.0',
  data_version: 'mock-example',
  generated_at: '2026-11-03T00:00:00Z',
  provider: {
    id: 'example-ai',
    name: 'Example AI',
    legal_name: null,
    aliases: ['Example'],
    kind: 'first_party',
    integrations: { ai_sdk: true },
    logo: '/logos/providers/example-ai.svg',
  },
  services: [{
    website: 'https://example.ai',
    docs: { api: 'https://docs.example.ai/api' },
    account_requirements: ['API key'],
    supply_status: 'active',
    endpoints: [{
      id: 'example-global',
      base_url: 'https://api.example.ai/v1',
      api_region: 'Global',
      documentation: 'https://docs.example.ai/api',
      default_headers: { 'Content-Type': 'application/json' },
      routes: [{
        protocol: 'chat-completions',
        method: 'POST',
        path: '/chat/completions',
        callability: 'documented_only',
        documentation: 'https://docs.example.ai/api/chat',
      }],
    }],
    offerings: [{
      id: 'example-chat-1',
      status: 'active',
      api_limits: { context: 128000, input: 120000, output: 8000 },
      links: { documentation: 'https://docs.example.ai/models/example-chat-1' },
      pricing: [{
        currency: 'USD',
        rates: [
          { metric: 'input', unit: 'per_1m_tokens', value: '1.25' },
          { metric: 'output', unit: 'per_1m_tokens', value: '5' },
        ],
        conditions: [{ field: 'service_tier', value: 'standard' }],
      }],
    }],
    capabilities: [{
      kind: 'web_search',
      links: { documentation: 'https://docs.example.ai/tools/web-search' },
      input: [{ name: 'query', kind: 'text', required: true }],
      output: [{ kind: 'structured', fields: ['results'] }],
      parameters: [{
        name: 'tools[].type',
        type: 'string',
        required: true,
        enum: ['web_search'],
        route_mappings: ['body.tools[].type'],
      }],
      routes: [{
        protocol: 'responses',
        method: 'POST',
        path: '/responses',
        callability: 'documented_only',
        documentation: 'https://docs.example.ai/tools/web-search',
      }],
    }],
  }],
  plans: [{
    id: 'example-pro',
    name: 'Pro',
    currency: 'USD',
    billing_options: [{ billing_period: 'month', price: '20' }],
    credits: 10000,
    description: 'Fictional example subscription plan.',
    links: { details: 'https://example.ai/pricing' },
  }],
}, null, 2);

const commands = computed(() => [
  `curl "${origin.value}/v1/manifest.json"`,
  `curl "${origin.value}/v1/providers/{provider_id}.json"`,
  `curl "${origin.value}/v1/models.json"`,
  `curl "${origin.value}/v1/models/type/chat.json"`,
  `curl "${origin.value}/v1/models/type/all.json"`,
  `curl "${origin.value}/v1/models/openai/gpt-5.json"`,
  `curl "${origin.value}/v1/offerings.json"`,
].join('\n'));
</script>

<template>
  <div class="pl-container pl-page api-page">
    <p v-if="state.loadError || state.pageLoadError" class="api-error" role="alert">{{ t('站点数据加载失败：{message}', { message: state.loadError ?? state.pageLoadError ?? '' }) }}</p>
    <header class="api-page-header">
      <div class="pl-content-head">
        <div class="pl-content-title">
          <h1>{{ t('公开数据，直接使用。') }}</h1>
        </div>
      </div>
    </header>

    <section class="api-panel">
      <header class="api-guide-header">
        <h2>{{ t('稳定公开 API') }}</h2>
        <p>{{ t('提供只读静态 JSON，无需鉴权。包含 Provider、Model、Offering、参考汇率和发布清单。') }}</p>
      </header>
      <div class="api-list" :aria-label="t('公开端点')">
        <article v-for="endpoint in endpoints" :key="endpoint.path" class="api-card">
          <span class="api-card-body"><span class="pl-heading-eyebrow">{{ t(endpoint.title) }}</span><code class="api-card-path">GET {{ endpoint.path }}</code></span>
          <CopyButton variant="icon" :value="`${origin}${endpoint.path}`" analytics-kind="api_url" :label="t('复制路径')" :title="t('复制路径')" />
        </article>
      </div>
      <div class="api-note">
        <strong>{{ t('所有类型模型列表') }}</strong>
        <p>{{ t('GET /v1/models/type/all.json 返回所有类型中被至少一个已审核供应中 Offering 引用的规范模型，条目保留各自的 type。GET /v1/models.json 则返回完整规范模型注册表，不表示当前供应状态。') }}</p>
      </div>
      <div class="api-section-label"><h2>{{ t('请求示例') }}</h2></div>
      <pre class="api-codebox api-guide-code"><code>{{ commands }}</code></pre>
      <div class="api-section-label">
        <h2>{{ t('Provider 完整响应示例（虚构数据）') }}</h2>
        <code>GET /v1/providers/example-ai.json</code>
      </div>
      <pre class="api-codebox"><code>{{ sample }}</code></pre>
      <div class="api-note"><strong>{{ t('契约与版本') }}</strong>
        <p>{{ t('manifest 的 files 列表覆盖当前公开 v1 文件。没有审核通过的供应状态记录时，Offering 不会被伪装成供应中，也不会进入稳定公开列表。') }}</p>
        <p class="api-schema-links"><a v-for="schema in API_SCHEMAS" :key="schema.path" :href="schema.path" class="api-schema-link">{{ t(schema.title) }}</a></p>
      </div>
      <section class="api-faq" aria-labelledby="api-faq-title">
        <h2 id="api-faq-title">{{ t('常见问题') }}</h2>
        <article>
          <h3>{{ t('调用公开 API 需要鉴权吗？') }}</h3>
          <p>{{ t('不需要。公开 API 提供只读 JSON，不接受写入。') }}</p>
        </article>
        <article>
          <h3>{{ t('Model 列表和 Offering 列表有什么区别？') }}</h3>
          <p>{{ t('Model 列表记录规范模型信息；Offering 列表记录经过审核的 Provider 供应事实。Model 出现在目录中不代表当前有供应。') }}</p>
        </article>
        <article>
          <h3>{{ t('显示为供应中代表 API 已实测可用吗？') }}</h3>
          <p>{{ t('不代表。供应状态根据公开来源维护，不表示实时账号资格或 API 调用结果。') }}</p>
        </article>
      </section>
    </section>

    <JsonBuilder />
  </div>
</template>

<style scoped>
.api-page-header { margin-bottom: var(--pl-space-lg); }
.api-page-header .pl-content-head { margin-bottom: 0; }
.api-panel + #json-builder { margin-top: var(--pl-space-xl); }
.api-guide-header { margin-bottom: var(--pl-space-md); }
.api-guide-header h2 { font-size: var(--pl-text-md); font-weight: var(--pl-weight-semibold); }
.api-guide-header p { margin-top: var(--pl-space-xs); color: var(--pl-text-secondary); font-size: var(--pl-text-sm); line-height: var(--pl-leading-relaxed); }
.api-faq { display: grid; gap: var(--pl-space-md); margin-top: var(--pl-space-xl); }
.api-faq h2 { font-size: var(--pl-text-md); font-weight: var(--pl-weight-semibold); }
.api-faq article { display: grid; gap: var(--pl-space-xs); }
.api-faq h3 { font-size: var(--pl-text-sm); font-weight: var(--pl-weight-semibold); }
.api-faq p { color: var(--pl-text-secondary); font-size: var(--pl-text-sm); line-height: var(--pl-leading-relaxed); }
.api-guide-code { margin-top: var(--pl-space-md); max-height: none; white-space: pre-wrap; }
.api-page .api-list { margin-top: 0; margin-bottom: 0; }
.api-page .api-list + .api-note { margin-top: var(--pl-api-card-gap); }
.api-error { margin-bottom: var(--pl-space-md); color: var(--pl-danger); }
@media (max-width: 768px) {
  .api-page { display: grid; gap: var(--pl-space-md); }
  .api-page-header { margin-bottom: 0; }
}
</style>
