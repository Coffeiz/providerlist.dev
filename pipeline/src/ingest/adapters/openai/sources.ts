import type { IngestSource } from '../../types.ts';

/** OpenAI 全球 API 的公开通用模型、价格与 API 目录说明。 */
export const OPENAI_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['models', 'API 模型指南（含产品范围说明）', 'https://developers.openai.com/api/docs/models.md', 'model_catalog', 'public'],
    ['models-all', '通用完整模型目录与状态标签', 'https://developers.openai.com/api/docs/models/all', 'model_catalog', 'public'],
    ['pricing', 'API 模型与功能定价', 'https://developers.openai.com/api/docs/pricing.md', 'pricing', 'public'],
    ['models-list-api', 'Models API 清单端点说明（调用需账号 API Key）', 'https://developers.openai.com/api/reference/resources/models/methods/list', 'api', 'account_scoped'],
    ['responses-api', 'Responses API 通用端点文档', 'https://developers.openai.com/api/docs/guides/text', 'api', 'public'],
    ['web-search', 'Responses API Web Search 工具文档', 'https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses', 'capability', 'public'],
    ['file-search', 'Responses API File Search 工具文档', 'https://developers.openai.com/api/docs/guides/tools-file-search.md', 'capability', 'public'],
    ['code-interpreter', 'Responses API Code Interpreter 输入与输出', 'https://developers.openai.com/api/docs/guides/tools-code-interpreter', 'capability', 'public'],
    ['image-generation', 'Responses API Image Generation 工具文档', 'https://developers.openai.com/api/docs/guides/image-generation.md?generate-images-api=responses', 'capability', 'public'],
    ['audio-api', 'Audio API 通用能力与端点文档', 'https://developers.openai.com/api/docs/guides/audio', 'capability', 'public'],
    ['chatgpt-pricing', 'ChatGPT 与 Codex 套餐定价', 'https://learn.chatgpt.com/docs/pricing.md?site_locale=en', 'plan', 'public'],
  ] as const).map(([suffix, name, url, scope, access_scope]) => ({
    id: `openai-${suffix}`, provider_id: 'openai', market: 'global' as const, name: `OpenAI ${name}`, url,
    enabled: true, accept: 'text/markdown, text/html;q=0.9', max_bytes: 8 * 1024 * 1024, timeout_ms: 60_000,
    adapter_id: 'openai', scope, access_scope, extraction: suffix === 'chatgpt-pricing' ? 'markdown' as const : 'html' as const,
  })),
];
