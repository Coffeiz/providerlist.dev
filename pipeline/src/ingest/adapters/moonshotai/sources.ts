import type { IngestSource } from '../../types.ts';

/** Kimi 开放平台当前目录、定价和 API 通用文档；不调用需要账户密钥的列表 API。 */
const marketSources = [
  {
    market: 'cn' as const,
    host: 'https://platform.kimi.com',
    entries: [
      ['model-catalog', '模型列表', '/docs/models.md'],
      ['api-list-models', '列出模型 API 文档', '/docs/api/list-models.md'],
      ['api-overview', 'API 概述', '/docs/api/overview.md'],
      ['chat-api', 'Chat Completions API', '/docs/api/chat.md'],
      ['responses-api', 'Responses API', '/docs/api/responses.md'],
      ['messages-api', 'Anthropic Messages API', '/docs/api/messages.md'],
      ['chat-pricing', '模型推理价格说明', '/docs/pricing/chat'],
      ['batch-pricing', '批量推理定价', '/docs/pricing/batch'],
      ['websearch-pricing', '联网搜索定价', '/docs/pricing/websearch'],
      ['batch-api', 'Batch API 指南', '/docs/guide/use-batch-api.md'],
      ['websearch-api', '联网搜索 API', '/docs/api/tools-search.md'],
      ['webfetch-api', '网页抓取 API', '/docs/api/tools-fetch.md'],
      ['file-upload-api', '文件上传 API', '/docs/api/files-upload.md'],
      ['batch-create-api', '创建批处理任务 API', '/docs/api/batch-create.md'],
    ],
  },
  {
    market: 'global' as const,
    host: 'https://platform.kimi.ai',
    entries: [
      ['model-catalog', '模型列表', '/docs/models.md'],
      ['api-list-models', '列出模型 API 文档', '/docs/api/list-models.md'],
      ['api-overview', 'API 概述', '/docs/api/overview.md'],
      ['chat-api', 'Chat Completions API', '/docs/api/chat.md'],
      ['responses-api', 'Responses API', '/docs/api/responses.md'],
      ['messages-api', 'Anthropic Messages API', '/docs/api/messages.md'],
      ['chat-pricing', '模型推理价格说明', '/docs/pricing/chat'],
      ['batch-pricing', '批量推理定价', '/docs/pricing/batch'],
      ['websearch-pricing', '联网搜索定价', '/docs/pricing/websearch'],
      ['batch-api', 'Batch API 指南', '/docs/guide/use-batch-api.md'],
      ['websearch-api', '联网搜索 API', '/docs/api/tools-search.md'],
      ['webfetch-api', '网页抓取 API', '/docs/api/tools-fetch.md'],
      ['file-upload-api', '文件上传 API', '/docs/api/files-upload.md'],
      ['batch-create-api', '创建批处理任务 API', '/docs/api/batch-create.md'],
    ],
  },
] as const;

export const MOONSHOTAI_INGEST_SOURCES: readonly IngestSource[] = marketSources.flatMap(({ market, host, entries }) =>
  entries.map(([suffix, name, pathname]) => ({
    id: `moonshotai-${market === 'cn' ? suffix : `global-${suffix}`}`,
    provider_id: 'moonshotai',
    market,
    name: `Kimi ${market === 'cn' ? '中国' : '国际'}开放平台${name}`,
    url: `${host}${pathname}`,
    enabled: true,
    scope: suffix === 'model-catalog' || suffix === 'api-list-models' ? 'model_catalog' as const
      : suffix.endsWith('-pricing') ? 'pricing' as const
        : suffix.endsWith('-api') || suffix === 'api-overview' ? 'api' as const
          : 'documentation' as const,
    access_scope: 'public' as const,
    accept: /pricing/.test(suffix) ? 'text/html' : 'text/markdown, text/plain;q=0.9',
    max_bytes: 2 * 1024 * 1024,
    adapter_id: 'moonshotai',
  })),
);
