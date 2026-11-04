import type { IngestSource } from '../../types.ts';

/** xAI 全球 API 的模型列表、价格、Route 与多模态能力文档。 */
export const XAI_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['subscription-pricing', 'X Subscription 套餐周期、价格与用量倍率', 'https://docs.x.ai/x-subscription/pricing', 'plan', 'public'],
    ['models', 'Grok 与多模态模型目录', 'https://docs.x.ai/developers/models', 'model_catalog', 'public'],
    ['pricing', 'xAI API 模型与功能定价', 'https://docs.x.ai/developers/pricing', 'pricing', 'public'],
    ['models-api', 'Inference API 模型清单端点（调用需账号 API Key）', 'https://docs.x.ai/developers/rest-api-reference/inference/models', 'api', 'account_scoped'],
    ['chat-completions', 'Chat Completions API 参考', 'https://docs.x.ai/developers/rest-api-reference/inference/chat-completions', 'api', 'public'],
    ['responses', 'Responses API 参考', 'https://docs.x.ai/developers/rest-api-reference/inference/responses', 'api', 'public'],
    ['images-api', 'Images API 参考', 'https://docs.x.ai/developers/rest-api-reference/inference/images', 'api', 'public'],
    ['videos-api', 'Videos API 参考', 'https://docs.x.ai/developers/rest-api-reference/inference/videos', 'api', 'public'],
    ['batch-api', 'Batch API 文档', 'https://docs.x.ai/developers/advanced-api-usage/batch-api', 'capability', 'public'],
    ['batches-api-reference', 'Batches REST API Schema', 'https://docs.x.ai/developers/rest-api-reference/inference/batches', 'api', 'public'],
    ['files-api', 'Files API 管理文档', 'https://docs.x.ai/developers/files/managing-files', 'capability', 'public'],
    ['collections-api', 'Collections 管理 API 参考', 'https://docs.x.ai/developers/rest-api-reference/collections/collection', 'capability', 'public'],
    ['tools-overview', '服务端工具总览', 'https://docs.x.ai/developers/tools/overview', 'capability', 'public'],
    ['web-search', 'Web Search 工具文档', 'https://docs.x.ai/developers/tools/web-search', 'capability', 'public'],
    ['x-search', 'X Search 工具文档', 'https://docs.x.ai/developers/tools/x-search', 'capability', 'public'],
    ['collections-search', 'Collections Search 工具与 Responses API 文件搜索', 'https://docs.x.ai/developers/tools/collections-search', 'capability', 'public'],
    ['code-execution', 'Code Execution 工具输入与处理说明', 'https://docs.x.ai/developers/tools/code-execution', 'capability', 'public'],
    ['tool-streaming-sync', '服务端工具调用输入与结果输出方式', 'https://docs.x.ai/developers/tools/streaming-and-sync', 'capability', 'public'],
    ['voice', 'Voice API 通用能力与价格说明', 'https://docs.x.ai/developers/model-capabilities/audio/voice', 'capability', 'public'],
    ['speech-to-speech', 'Speech-to-Speech WebSocket 协议与参数', 'https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech', 'capability', 'public'],
    ['speech-to-text', 'Speech-to-Text 默认模型与接口', 'https://docs.x.ai/developers/models/speech-to-text', 'model_catalog', 'public'],
    ['speech-to-text-guide', 'Speech-to-Text 请求、响应与参数', 'https://docs.x.ai/developers/model-capabilities/audio/speech-to-text', 'capability', 'public'],
    ['text-to-speech', 'Text-to-Speech 请求、响应与参数', 'https://docs.x.ai/developers/model-capabilities/audio/text-to-speech', 'capability', 'public'],
    ['regions', '区域端点与模型可用范围', 'https://docs.x.ai/developers/advanced-api-usage/regions', 'api', 'public'],
    ['imagine', 'Imagine API 图像与视频能力说明', 'https://docs.x.ai/developers/model-capabilities/imagine', 'capability', 'public'],
  ] as const).map(([suffix, name, url, scope, access_scope]) => ({
    id: `xai-${suffix}`, provider_id: 'xai', market: 'global' as const, name: `xAI ${name}`, url,
    enabled: true, accept: 'text/markdown, text/html;q=0.9', max_bytes: 8 * 1024 * 1024, timeout_ms: 60_000,
    adapter_id: 'xai', scope, access_scope, extraction: suffix === 'subscription-pricing' ? 'markdown' as const : 'html' as const,
  })),
];
