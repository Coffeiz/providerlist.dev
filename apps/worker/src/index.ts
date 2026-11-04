import { handleAnalytics } from './analytics.ts';
import { handleCustomQuery } from './custom-query.ts';

/**
 * ProviderList 静态托管 Worker。
 *
 * Worker handles read-only data routes, JSON 404 responses and anonymous usage events.
 *
 * ## 为什么需要它
 *
 * Workers 静态资源配置了 `not_found_handling: "single-page-application"` 后，
 * **任何**找不到的路径都会返回 `index.html`（200 HTML）——
 * 包括 `/v1/manifest.json` 这种契约文件。
 *
 * 后果是具体的：
 * - 消费者请求一个不存在的 `/v1/foo.json`，拿到 200 + HTML，
 *   `JSON.parse` 抛出的错误与「接口坏了」无法区分。
 * - 缓存层会把这些 HTML 当成 JSON 缓存起来。
 *
 * ## 边界
 *
 * `/v1/providerlist.json` 是唯一动态公开读取路由：它只读取当前发布的静态站点数据集，
 * 按白名单参数进行无状态筛选和投影，不访问数据库或上游服务。
 *
 * **官方接入（域名挑战 / Refresh / Push）尚未实现。**
 * 本文件不实现其中任何一项——除匿名统计外的 `/api/*` 返回 501，
 * 避免给出「已接入」的错觉。实现它们是 M3 的事，
 * 届时才允许在候选态与公开目录之间流动数据。
 *
 * 设计文档：docs/architecture.md、docs/guides/operations.md。
 */

export interface Env {
  /** 静态资源绑定。 */
  readonly ASSETS: { fetch(request: Request): Promise<Response> };
  readonly ProviderList?: { writeDataPoint(point: { indexes: string[]; blobs: string[]; doubles: number[] }): void };
}

/** 契约与控制面路径：由 Worker 先处理，不允许 SPA fallback。 */
const WORKER_FIRST_PREFIXES = ['/v1/', '/api/'];

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/events') return handleAnalytics(request, env.ProviderList);

    if (url.pathname === '/v1/providerlist.json') {
      return handleCustomQuery(request, env.ASSETS);
    }

    if (!WORKER_FIRST_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) {
      // 站点路由：交给静态资源，缺失时走 SPA fallback
      return env.ASSETS.fetch(request);
    }

    if (url.pathname.startsWith('/api/')) {
      // 官方接入尚未实现——明确返回 501，不伪装成可用
      return jsonResponse(
        {
          error: {
            code: 'not_implemented',
            message: '官方接入接口尚未启用。当前仅开放静态公开资源与只读查询。',
          },
        },
        501,
      );
    }

    // /v1/*：存在则原样返回
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 200) {
      return jsonResponse(
        { error: { code: 'not_found', message: url.pathname } },
        404,
      );
    }

    // SPA fallback 会把不存在的 .json 变成 index.html（200 text/html）。
    // 这里识别出来，改成标准 JSON 404——
    // 契约文件要么是 JSON，要么明确不存在，不存在第三种。
    const contentType = asset.headers.get('content-type') ?? '';
    if (url.pathname.endsWith('.json') && contentType.includes('text/html')) {
      return jsonResponse(
        { error: { code: 'not_found', message: url.pathname } },
        404,
      );
    }

    return asset;
  },
};
