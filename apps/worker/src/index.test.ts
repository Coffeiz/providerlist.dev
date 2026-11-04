/**
 * Worker 行为测试。
 *
 * 重点保护一件事：**SPA fallback 不得破坏 JSON 契约**。
 * 静态托管会把找不到的路径返回 `index.html`（200 text/html），
 * Worker 必须把它识别出来，改成标准 JSON 404。
 *
 * 这些测试用假的 ASSETS 绑定模拟静态托管的两种行为：
 * - 命中资源 → 原样返回
 * - 未命中 → 返回 index.html（200 text/html），即 SPA fallback
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import worker, { type Env } from './index.ts';

/** 模拟静态托管：命中返回资源，未命中返回 index.html（SPA fallback）。 */
function fakeAssets(files: Record<string, string>): Env['ASSETS'] {
  return {
    async fetch(request: Request): Promise<Response> {
      const path = new URL(request.url).pathname;
      const body = files[path];
      if (body === undefined) {
        // SPA fallback：找不到就返回 index.html，200 text/html
        return new Response('<!doctype html><html></html>', {
          status: 200,
          headers: { 'content-type': 'text/html; charset=utf-8' },
        });
      }
      return new Response(body, {
        status: 200,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    },
  };
}

const URL_BASE = 'https://providerlist.dev';

test('存在的 /v1 JSON 原样返回', async () => {
  const env: Env = {
    ASSETS: fakeAssets({ '/v1/manifest.json': '{"data_version":"20261023.abc"}' }),
  };
  const response = await worker.fetch(new Request(`${URL_BASE}/v1/manifest.json`), env);

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /application\/json/);
  assert.equal(await response.text(), '{"data_version":"20261023.abc"}');
});

test('不存在的 /v1 JSON 返回标准 JSON 404，而不是 index.html', async () => {
  const env: Env = { ASSETS: fakeAssets({}) };
  const response = await worker.fetch(new Request(`${URL_BASE}/v1/nope.json`), env);

  assert.equal(response.status, 404, '缺失的契约文件必须是 404');
  assert.match(
    response.headers.get('content-type') ?? '',
    /application\/json/,
    '必须是 JSON 响应',
  );

  const body = (await response.json()) as { error: { code: string } };
  assert.equal(body.error.code, 'not_found');
});

test('SPA fallback 返回的 HTML 被识别并改判为 404', async () => {
  // ASSETS 永远返回 index.html（模拟 fallback 发生的情形）
  const env: Env = {
    ASSETS: {
      async fetch(): Promise<Response> {
        return new Response('<!doctype html><html></html>', {
          status: 200,
          headers: { 'content-type': 'text/html; charset=utf-8' },
        });
      },
    },
  };
  const response = await worker.fetch(new Request(`${URL_BASE}/v1/manifest.json`), env);

  assert.equal(response.status, 404, 'HTML 冒充 JSON 必须被判为 404');
  assert.match(response.headers.get('content-type') ?? '', /application\/json/);
});

test('/api/* 返回 501 并说明尚未启用', async () => {
  const env: Env = { ASSETS: fakeAssets({}) };
  const response = await worker.fetch(
    new Request(`${URL_BASE}/api/v1/providers/example-ai/refresh`, { method: 'POST' }),
    env,
  );

  assert.equal(response.status, 501);
  const body = (await response.json()) as { error: { code: string } };
  assert.equal(body.error.code, 'not_implemented');
});

test('站点路由交给静态资源（SPA fallback 正常）', async () => {
  const env: Env = { ASSETS: fakeAssets({}) };
  const response = await worker.fetch(new Request(`${URL_BASE}/providers`), env);

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /text\/html/);
});
