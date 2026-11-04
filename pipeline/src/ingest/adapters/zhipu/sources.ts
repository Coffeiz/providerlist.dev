import type { IngestSource } from '../../types.ts';


const zhipuScope = (suffix: string) => {
  if (suffix === 'model-catalog') return 'model_catalog' as const;
  if (suffix === 'pricing') return 'pricing' as const;
  if (suffix.includes('coding-plan') && !suffix.includes('quick-start') && !suffix.includes('key-management')) return 'plan' as const;
  if (['tool-calling', 'structured-output', 'web-search', 'web-reader', 'file-parser', 'batch-api', 'managed-agents-overview'].includes(suffix)) return 'capability' as const;
  if (suffix === 'coding-plan-key-management') return 'documentation' as const;
  return 'api' as const;
};

/** 智谱中国站与 Z.AI 国际站固定官方来源；计划文档仅作为独立权益证据采集。 */
export const ZHIPU_INGEST_SOURCES: readonly IngestSource[] = [
  ...([
    ['model-catalog', '模型概览', '/cn/guide/start/model-overview.md'],
    ['pricing', 'API 定价', '/cn/guide/start/pricing.md'],
    ['api-overview', 'HTTP API 与区域入口', '/cn/guide/develop/http/introduction.md'],
    ['openai-api', 'OpenAI API 兼容', '/cn/guide/develop/openai/introduction.md'],
    ['claude-api', 'Claude API 兼容', '/cn/guide/develop/claude/introduction.md'],
    ['responses-api', 'Response API 兼容', '/cn/guide/develop/responses/introduction.md'],
    ['chat-api', '对话补全 API', '/api-reference/模型-api/对话补全.md'],
    ['image-api', '图像生成 API', '/api-reference/模型-api/图像生成.md'],
    ['video-api', '视频生成 API', '/api-reference/模型-api/视频生成异步.md'],
    ['speech-api', '语音转文本 API', '/api-reference/模型-api/语音转文本.md'],
    ['tts-api', '文本转语音 API', '/api-reference/模型-api/文本转语音.md'],
    ['embedding-api', '文本嵌入 API', '/api-reference/模型-api/文本嵌入.md'],
    ['rerank-api', '文本重排序 API', '/api-reference/模型-api/文本重排序.md'],
    ['ocr-api', '文档解析 API', '/api-reference/模型-api/文档解析.md'],
    ['tokenizer-api', '文本分词器 API', '/api-reference/模型-api/文本分词器.md'],
    ['web-search-api', '网络搜索 API', '/api-reference/工具-api/网络搜索.md'],
    ['web-reader-api', '网页阅读 API', '/api-reference/工具-api/网页阅读.md'],
    ['content-safety-api', '内容安全 API', '/api-reference/工具-api/内容安全.md'],
    ['file-parser-sync-api', '文件解析同步 API', '/api-reference/工具-api/文件解析同步.md'],
    ['file-parser-result-api', '文件解析结果 API', '/api-reference/工具-api/解析结果.md'],
    ['ocr-service-api', 'OCR 服务 API', '/api-reference/工具-api/ocr-服务.md'],
    ['file-api', '文件上传 API', '/api-reference/文件-api/上传文件.md'],
    ['tool-calling', '工具调用', '/cn/guide/capabilities/function-calling.md'],
    ['structured-output', '结构化输出', '/cn/guide/capabilities/struct-output.md'],
    ['web-search', '联网搜索', '/cn/guide/tools/web-search.md'],
    ['file-parser', '文件解析', '/cn/guide/tools/file-parser.md'],
    ['batch-api', '批量处理 API', '/cn/guide/tools/batch.md'],
    ['managed-agents-overview', '托管 Agent 服务', '/cn/managed-agents/overview.md'],
    ['managed-agents-api', '托管 Agent API 参考', '/cn/managed-agents/api-reference.md'],
    ['coding-plan', 'GLM Coding Plan 套餐', '/cn/coding-plan/overview.md'],
    ['coding-plan-quick-start', 'GLM Coding Plan API 接入端点', '/cn/coding-plan/quick-start.md'],
  ] as const).map(([suffix, name, pathname]) => ({
    id: `zhipu-cn-${suffix}`,
    scope: zhipuScope(suffix),
    provider_id: 'zhipu',
    market: 'cn' as const,
    name: `智谱中国站${name}`,
    url: `https://docs.bigmodel.cn${pathname}`,
    enabled: true,
    accept: 'text/markdown',
    max_bytes: 1024 * 1024,
    adapter_id: 'zhipu',
  })),
  ...([
    ['model-catalog', 'Model Overview', '/guides/overview/overview.md'],
    ['pricing', 'API Pricing', '/guides/overview/pricing.md'],
    ['api-overview', 'HTTP API and regional endpoint', '/guides/develop/http/introduction.md'],
    ['chat-api', 'Chat Completion API reference', '/api-reference/llm/chat-completion.md'],
    ['image-api', 'Image Generation API', '/api-reference/image/generate-image.md'],
    ['image-async-api', 'Asynchronous Image Generation API', '/api-reference/image/generate-image-async.md'],
    ['image-result-api', 'Asynchronous Image Result API', '/api-reference/image/get-image-status.md'],
    ['video-api', 'Video Generation API', '/api-reference/video/generate-video.md'],
    ['video-result-api', 'Asynchronous Video Result API', '/api-reference/video/get-video-status.md'],
    ['speech-api', 'Audio Transcriptions API', '/api-reference/audio/audio-transcriptions.md'],
    ['tokenizer-api', 'Tokenizer API', '/api-reference/tools/tokenizer.md'],
    ['ocr-api', 'Layout Parsing API', '/api-reference/tools/layout-parsing.md'],
    ['tool-calling', 'Function Calling', '/guides/capabilities/function-calling.md'],
    ['structured-output', 'Structured Output', '/guides/capabilities/struct-output.md'],
    ['web-search', 'Web Search', '/api-reference/tools/web-search.md'],
    ['web-reader', 'Web Reader', '/api-reference/tools/web-reader.md'],
    ['file-upload', 'File Upload', '/api-reference/agents/file-upload.md'],
    ['agent-api', 'Agent API', '/api-reference/agents/agent.md'],
    ['agent-result-api', 'Asynchronous Agent Result API', '/api-reference/agents/get-async-result.md'],
    ['agent-conversation-api', 'Agent Conversation History API', '/api-reference/agents/agent-conversation.md'],
    ['coding-plan', 'GLM Coding Plan', '/devpack/overview.md'],
    ['coding-plan-quick-start', 'GLM Coding Plan API Endpoints', '/devpack/quick-start.md'],
    ['coding-plan-key-management', 'Coding Plan and Standard API Key Management', '/devpack/notice/api-key-management.md'],
  ] as const).map(([suffix, name, pathname]) => ({
    id: `zhipu-global-${suffix}`,
    scope: zhipuScope(suffix),
    provider_id: 'zhipu',
    market: 'global' as const,
    name: `Z.AI ${name}`,
    url: `https://docs.z.ai${pathname}`,
    enabled: true,
    accept: 'text/markdown',
    max_bytes: 1024 * 1024,
    adapter_id: 'zhipu',
  })),
];
