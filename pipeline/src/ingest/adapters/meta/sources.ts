import type { IngestSource } from '../../types.ts';

/** Meta Model API 通用目录、定价、订阅和 API 文档；开放权重范围单独排除。 */
export const META_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['models', 'Meta Model API 通用模型目录与规格', 'https://dev.meta.ai/docs/models', 'model_catalog', 'public'],
    ['pricing', 'Meta Model API 按量定价与限额', 'https://dev.meta.ai/docs/pricing-rate-limits', 'pricing', 'public'],
    ['subscriptions', 'Muse Code 订阅计划与权益', 'https://dev.meta.ai/docs/muse-code/subscriptions', 'plan', 'public'],
    ['models-list', 'Meta models.list 账号可用目录 API 参考（实际调用需 Key）', 'https://dev.meta.ai/docs/api-reference/models/list-models', 'api', 'account_scoped'],
    ['api-reference', 'Meta Model API 通用 API 参考', 'https://dev.meta.ai/docs/api-reference', 'api', 'public'],
    ['files-upload-api', 'Files API 上传文件参考', 'https://dev.meta.ai/docs/api-reference/files/upload-file', 'api', 'public'],
    ['files-list-api', 'Files API 列表参考', 'https://dev.meta.ai/docs/api-reference/files/list-files', 'api', 'public'],
    ['files-retrieve-api', 'Files API 读取文件参考', 'https://dev.meta.ai/docs/api-reference/files/retrieve-file', 'api', 'public'],
    ['files-content-api', 'Files API 下载文件内容参考', 'https://dev.meta.ai/docs/api-reference/files/retrieve-file-content', 'api', 'public'],
    ['files-delete-api', 'Files API 删除文件参考', 'https://dev.meta.ai/docs/api-reference/files/delete-file', 'api', 'public'],
    ['files-schemas', 'Files API 请求与响应 Schema', 'https://dev.meta.ai/docs/api-reference/files/schemas', 'api', 'public'],
    ['protocols', 'Responses、Chat Completions 与 Messages 协议', 'https://dev.meta.ai/docs/protocols', 'api', 'public'],
    ['search-grounding', 'Meta Model API 网页搜索工具', 'https://dev.meta.ai/docs/search-grounding', 'capability', 'public'],
    ['image-create-api', 'Muse Image 图片生成 API 参考', 'https://dev.meta.ai/docs/api-reference/images/create-image', 'api', 'public'],
    ['image-edit-api', 'Muse Image 图片编辑 API 参考', 'https://dev.meta.ai/docs/api-reference/images/edit-image', 'api', 'public'],
    ['image-schemas', 'Muse Image 请求与响应 Schema', 'https://dev.meta.ai/docs/api-reference/images/schemas', 'api', 'public'],
    ['voice-transcribe-api', 'Muse Voice Transcribe 文件转录 API 参考', 'https://dev.meta.ai/docs/api-reference/voice/transcribe', 'api', 'public'],
    ['voice-realtime-api', 'Muse Voice Transcribe 实时 WebSocket API 参考', 'https://dev.meta.ai/docs/api-reference/voice/realtime', 'api', 'public'],
  ] as const).map(([suffix, name, url, scope, access_scope]) => ({
    id: `meta-${suffix}`, provider_id: 'meta', market: 'global' as const, name, url,
    enabled: true, accept: 'text/markdown, text/html;q=0.9', max_bytes: 8 * 1024 * 1024, timeout_ms: 60_000,
    adapter_id: 'meta', scope, access_scope, extraction: 'html' as const,
  })),
];
