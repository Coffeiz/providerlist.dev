import type { IngestSource } from '../../types.ts';

/** Google Gemini API 全球公开模型、定价与 API 说明。 */
export const GOOGLE_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['models', 'Gemini API 模型指南', 'https://aistudio.google.com/docs/models?hl=en', 'model_catalog', 'public'],
    ['pricing', 'Gemini Developer API 定价', 'https://aistudio.google.com/docs/pricing?hl=en', 'pricing', 'public'],
    ['models-api', 'models.list / models.get API 参考（实际清单需 API Key）', 'https://aistudio.google.com/api-reference/models?hl=en', 'api', 'account_scoped'],
    ['api-overview', 'Gemini API 通用端点与能力概览', 'https://aistudio.google.com/api-reference?hl=en', 'api', 'public'],
    ['generate-content-api', 'Gemini GenerateContent 工具配置与 API Schema', 'https://aistudio.google.com/api-reference/generate-content?hl=en', 'capability', 'public'],
    ['batch', 'Gemini API Batch 模式与计费说明', 'https://aistudio.google.com/docs/batch-api', 'pricing', 'public'],
    ['batch-api-schema', 'Gemini API Batch 请求与响应 Schema', 'https://aistudio.google.com/api-reference/batch-api?hl=en', 'capability', 'public'],
    ['tools', 'Gemini API 内置工具与能力说明', 'https://aistudio.google.com/docs/tools?hl=en', 'capability', 'public'],
    ['code-execution', 'Gemini API Code execution 输入与结果格式', 'https://aistudio.google.com/docs/code-execution', 'capability', 'public'],
    ['google-search', 'Gemini API Grounding with Google Search 输入与响应', 'https://aistudio.google.com/docs/google-search?generate-content=true&hl=en', 'capability', 'public'],
    ['google-maps', 'Gemini API Grounding with Google Maps 输入与响应', 'https://aistudio.google.com/docs/maps-grounding?generate-content=true&hl=en', 'capability', 'public'],
    ['url-context', 'Gemini API URL Context 输入与响应', 'https://aistudio.google.com/docs/url-context?generate-content=true&hl=en', 'capability', 'public'],
    ['openai-compatibility', 'Gemini API OpenAI 兼容接口', 'https://aistudio.google.com/docs/openai?hl=en', 'api', 'public'],
    ['live-api', 'Gemini API Live WebSocket 接口参考', 'https://aistudio.google.com/api-reference/live', 'api', 'public'],
    ['billing', 'Gemini API Free/Paid 层级与付款方式', 'https://aistudio.google.com/docs/billing?hl=en', 'plan', 'public'],
    ['consumer-plans-us', 'Google One 美国 Google AI 订阅计划', 'https://one.google.com/about/plans?hl=en_US', 'plan', 'public'],
    ['files-api', 'Gemini API Files 与 File Search API', 'https://aistudio.google.com/docs/file-search?hl=en', 'capability', 'public'],
  ] as const).map(([suffix, name, url, scope, access_scope]) => ({
    id: `google-${suffix}`, provider_id: 'google', market: 'global' as const, name: `Google ${name}`, url,
    enabled: true, accept: 'text/markdown, text/html;q=0.9', max_bytes: 8 * 1024 * 1024, timeout_ms: 60_000,
    adapter_id: 'google', scope, access_scope, extraction: 'html' as const,
  })),
];
