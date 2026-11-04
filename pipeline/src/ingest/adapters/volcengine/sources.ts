import type { IngestSource } from '../../types.ts';

/** 火山方舟官方公开价格与 Coding Plan 文档。 */
export const VOLCENGINE_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['model-list', '模型列表与能力/长度规格', 'https://ark.volcengine.com/region:cn-beijing/docs/model-list.md', 'model_catalog'],
    ['model-pricing', '模型服务价格', 'https://ark.volcengine.com/region:cn-beijing/docs/model-pricing.md', 'pricing'],
    ['model-billing', '模型服务计费说明', 'https://ark.volcengine.com/region:cn-beijing/docs/model-service-pricing.md', 'pricing'],
    ['chat-api', 'Chat API', 'https://ark.volcengine.com/region:cn-beijing/docs/chat-api.md', 'documentation'],
    ['create-model-responses-api', '创建 Response API', 'https://ark.volcengine.com/region:cn-beijing/docs/create-model-responses-api.md', 'documentation'],
    ['messages-api', 'Messages API', 'https://ark.volcengine.com/region:cn-beijing/docs/messages-api.md', 'documentation'],
    ['web-search', '联网搜索工具', 'https://ark.volcengine.com/region:cn-beijing/docs/web-search.md', 'documentation'],
    ['responses-api-migration', 'Responses API 支持范围与兼容说明', 'https://ark.volcengine.com/region:cn-beijing/docs/responses-api-migration.md', 'documentation'],
    ['integrate-third-party-tools', 'OpenAI / Anthropic 兼容接入', 'https://docs.volcengine.com/docs/ark/integrate-third-party-tools?lang=zh', 'documentation'],
    ['coding-plan-overview', 'Coding Plan 个人版套餐概览', 'https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-plan-overview.md', 'plan'],
    ['coding-plan-faq', 'Coding Plan 个人版常见问题', 'https://ark.volcengine.com/region:cn-beijing/docs/coding-plan-personal-faq.md', 'documentation'],
    ['agent-plan-overview', 'Agent Plan 个人版套餐概览', 'https://ark.volcengine.com/region:cn-beijing/docs/agent-plan-personal-plan-overview.md', 'plan'],
    ['agent-plan-faq', 'Agent Plan 个人版常见问题', 'https://ark.volcengine.com/region:cn-beijing/docs/agent-plan-personal-faq.md', 'documentation'],
  ] as const).map(([suffix, name, url, scope]) => ({
    id: `volcengine-${suffix}`,
    provider_id: 'volcengine',
    market: 'cn' as const,
    name: `火山方舟 ${name}`,
    url,
    enabled: true,
    accept: 'text/markdown, text/plain;q=0.9',
    max_bytes: 6 * 1024 * 1024,
    timeout_ms: 60_000,
    adapter_id: 'volcengine',
    scope,
    access_scope: 'public' as const,
    extraction: 'docs' as const,
  })),
];
