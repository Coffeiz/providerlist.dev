import type { IngestSource } from '../../types.ts';

/** 小米 MiMo 官方公开资料。市场价从原文读取，不与 Token Plan Credits 混算。 */
const doc = (
  id: string,
  name: string,
  url: string,
  scope: NonNullable<IngestSource['scope']>,
  market?: NonNullable<IngestSource['market']>,
): IngestSource => ({
  id,
  provider_id: 'xiaomi',
  ...(market ? { market } : {}),
  name,
  url,
  enabled: true,
  accept: 'text/html, application/xhtml+xml;q=0.9',
  max_bytes: 5 * 1024 * 1024,
  timeout_ms: 60_000,
  adapter_id: 'xiaomi',
  scope,
  access_scope: 'public',
  extraction: 'html',
});

export const XIAOMI_INGEST_SOURCES: readonly IngestSource[] = [
  {
    id: 'xiaomi-api-models',
    provider_id: 'xiaomi',
    name: '小米 MiMo API 模型目录响应',
    url: 'https://platform.xiaomimimo.com/api/v1/models',
    enabled: true,
    accept: 'application/json',
    max_bytes: 2 * 1024 * 1024,
    timeout_ms: 60_000,
    adapter_id: 'xiaomi',
    scope: 'model_catalog',
    access_scope: 'public',
    extraction: 'json',
  },
  doc('xiaomi-model-list-doc', '小米 MiMo 官方模型目录说明', 'https://mimo.mi.com/docs/zh-CN/api/model/list-models', 'model_catalog'),
  doc('xiaomi-api-pricing', '小米 MiMo 官方按量 API 定价（国内与海外）', 'https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go', 'pricing'),
  doc('xiaomi-token-plan', '小米 MiMo Token Plan 套餐、Credits 与额度规则', 'https://mimo.mi.com/docs/zh-CN/price/token-plan', 'plan'),
  doc('xiaomi-deep-thinking', '小米 MiMo 深度思考能力说明', 'https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/deep-thinking', 'capability'),
  doc('xiaomi-structured-output', '小米 MiMo 结构化输出能力说明', 'https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/structured-output', 'capability'),
  doc('xiaomi-batch-api', '小米 MiMo Batch API 接口与批量计费', 'https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/batch-api', 'api'),
  doc('xiaomi-openai-chat', '小米 MiMo OpenAI Chat Completions API', 'https://mimo.mi.com/docs/zh-CN/api/chat/openai-api', 'api'),
  doc('xiaomi-openai-responses', '小米 MiMo OpenAI Responses API', 'https://mimo.mi.com/docs/zh-CN/api/chat/responses', 'api'),
  doc('xiaomi-anthropic-messages', '小米 MiMo Anthropic Messages API', 'https://mimo.mi.com/docs/zh-CN/api/chat/anthropic-api', 'api'),
  doc('xiaomi-web-search', '小米 MiMo 联网搜索能力说明', 'https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/text-generation/tool-calling/web-search', 'capability'),
  doc('xiaomi-asr-api', '小米 MiMo ASR API', 'https://mimo.mi.com/docs/zh-CN/api/audio/Speech-Recognition', 'api'),
  doc('xiaomi-tts-api', '小米 MiMo TTS API', 'https://mimo.mi.com/docs/zh-CN/api/audio/tts', 'api'),
  doc('xiaomi-platform-updates', '小米 MiMo API 平台功能更新', 'https://mimo.mi.com/docs/en-US/updates/feature/platform', 'documentation'),
];
