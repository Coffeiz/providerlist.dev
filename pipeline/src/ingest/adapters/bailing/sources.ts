import type { IngestSource } from '../../types.ts';

/** 蚂蚁百灵官方通用模型/API/价格文档。 */
export const BAILING_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['models', '模型家族与选型目录', 'https://developer.ant-ling.com/zh-CN/docs/models/', 'model_catalog'],
    ['api-overview', 'API 概述与 API 模型说明', 'https://developer.ant-ling.com/zh-CN/docs/api-reference/', 'api'],
    ['api-openai', 'OpenAI 兼容接口与 Chat Completions Route', 'https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/openai', 'api'],
    ['api-anthropic', 'Anthropic 兼容接口与 Messages Route', 'https://developer.ant-ling.com/zh-CN/docs/api-reference/chat/anthropic/', 'api'],
    ['api-asr', '语音识别 API Route', 'https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/asr', 'api'],
    ['api-tts', '语音合成 API Route', 'https://developer.ant-ling.com/zh-CN/docs/api-reference/audio/tts/', 'api'],
    ['current-models', '当前可用模型与下架说明', 'https://developer.ant-ling.com/zh-CN/docs/models/deprecation/', 'model_catalog'],
    ['pricing', '官方按量定价', 'https://developer.ant-ling.com/zh-CN/docs/models/price/', 'pricing'],
    ['faq', 'API 支持模型与计费 FAQ', 'https://developer.ant-ling.com/zh-CN/docs/faq/', 'documentation'],
    ['structured-output', '结构化输出 API 能力', 'https://developer.ant-ling.com/zh-CN/docs/tutorials/structured-outputs/', 'capability'],
    ['multimodal-api', '多模态 API 接入能力', 'https://developer.ant-ling.com/zh-CN/docs/tutorials/multimodal-understanding/', 'capability'],
    ['billing-upgrade', '计量计费服务升级与额度说明', 'https://developer.ant-ling.com/zh-CN/docs/getting-started/changelog/billing-upgrade/', 'pricing'],
  ] as const).map(([suffix, name, url, scope]) => ({
    id: `bailing-${suffix}`, provider_id: 'bailing', market: 'cn' as const, name: `蚂蚁百灵 ${name}`, url,
    enabled: true, accept: 'text/html, text/markdown;q=0.9', max_bytes: 5 * 1024 * 1024, timeout_ms: 60_000,
    adapter_id: 'bailing', scope, access_scope: 'public' as const, extraction: 'docs' as const,
  })),
];
