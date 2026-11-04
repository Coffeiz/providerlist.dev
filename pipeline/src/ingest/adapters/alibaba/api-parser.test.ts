import assert from 'node:assert/strict';
import test from 'node:test';
import type { CapturedDocument } from '../document-set.ts';
import type { IngestSource, SnapshotMetadata } from '../../types.ts';
import { extractAlibabaApiFacts } from './api-parser.ts';

function document(id: string, body: string, market?: 'cn' | 'global'): CapturedDocument {
  const source: IngestSource = {
    id, provider_id: 'alibaba', ...(market ? { market } : {}), name: id,
    url: `https://example.com/${id}`, enabled: true, accept: 'text/html', max_bytes: 100_000,
    scope: 'api', access_scope: 'public', extraction: 'html',
  };
  const metadata: SnapshotMetadata = {
    source_id: id, ...(market ? { market } : {}), source_name: id, request_url: source.url,
    retrieved_at: '2026-10-26T00:00:00Z', http_status: 200, content_type: 'text/html',
    etag: null, last_modified: null, content_hash: 'sha256:abc', byte_length: body.length,
    collector_version: 'test', body_file: 'sha256-abc.json',
  };
  return { source, metadata, body };
}

test('百炼 API 解析只选按量与 Workspace 专属端点，排除套餐、试用和中国北京国际端点', () => {
  const cn = document('alibaba-api-compatibility', [
    '### 按量计费 <span id="mt-payg-h" />',
    '<table><tbody>',
    '<tr><td>OpenAI</td><td><p>华北2（北京）：<code>https\\://\\{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1</code></p><p>新加坡：<code>https\\://\\{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1</code></p><p>美国（弗吉尼亚）：<code>https\\://\\{WorkspaceId}.us-east-1.maas.aliyuncs.com/compatible-mode/v1</code></p></td></tr>',
    '<tr><td>Anthropic</td><td><p>华北2（北京）：<code>https\\://\\{WorkspaceId}.cn-beijing.maas.aliyuncs.com/apps/anthropic</code></p><p>新加坡：<code>https\\://\\{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic</code></p></td></tr>',
    '</tbody></table>',
    '<h3>Coding Plan</h3><table><tr><td>OpenAI</td><td>https://coding.dashscope.aliyuncs.com/v1</td></tr></table>',
  ].join(''), 'cn');
  const global = document('alibaba-global-api-base-url', [
    '<h3 id="workspace-dedicated-domain">Workspace-dedicated Domain</h3>',
    '<table><thead><tr><th>Region</th><th>OpenAI-compatible</th><th>Anthropic-compatible</th></tr></thead><tbody>',
    '<tr><td>China (Beijing)</td><td><code>https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1</code></td><td><code>https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/apps/anthropic</code></td></tr>',
    '<tr><td>Singapore</td><td><code>https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1</code></td><td><code>https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic</code></td></tr>',
    '<tr><td>Japan (Tokyo)</td><td><code>https://{WorkspaceId}.ap-northeast-1.maas.aliyuncs.com/compatible-mode/v1</code></td><td><code>https://{WorkspaceId}.ap-northeast-1.maas.aliyuncs.com/apps/anthropic</code></td></tr>',
    '<tr><td>Germany (Frankfurt)</td><td><code>https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1</code></td><td><code>https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic</code></td></tr>',
    '<tr><td>US (Virginia)</td><td><code>https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/compatible-mode/v1</code></td><td><code>https://{WorkspaceId}.us-east-1.maas.aliyuncs.com/apps/anthropic</code></td></tr>',
    '<tr><td>Hong Kong</td><td><code>https://{WorkspaceId}.cn-hongkong.maas.aliyuncs.com/compatible-mode/v1</code></td><td><code>https://{WorkspaceId}.cn-hongkong.maas.aliyuncs.com/apps/anthropic</code></td></tr>',
    '</tbody></table>',
    '<h3 id="trial-domain">Trial Domain</h3><table><tr><td>Singapore</td><td>https://trial.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1</td></tr></table>',
  ].join(''), 'global');
  const openai = document('alibaba-openai-chat-api', [
    'Singapore: POST https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1/chat/completions',
    'China (Beijing): POST https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/chat/completions',
    '<pre>base_url="https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1" model="qwen3.8-max"</pre>',
    '<pre>base_url="https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1" model="qwen3.8-max"</pre>',
  ].join('\n'));
  const anthropic = document('alibaba-anthropic-messages-api', [
    'Singapore: POST https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/apps/anthropic/v1/messages',
    'Germany (Frankfurt): POST https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic/v1/messages',
    '<pre>base_url="https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/apps/anthropic" model="qwen3.8-max"</pre>',
  ].join('\n'));
  const responses = document('alibaba-openai-responses-api', [
    'Singapore: POST https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1/responses',
    'Germany (Frankfurt): POST https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1/responses',
    '<pre>base_url="https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1" model="qwen3.8-max"</pre>',
    '<pre>POST https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1/responses model="qwen3.8-max"</pre>',
  ].join('\n'));

  const result = extractAlibabaApiFacts([cn, global, openai, anthropic, responses]);
  assert.equal(result.endpoints.length, 15);
  assert.deepEqual(result.endpoints.map(({ id }) => id).sort(), [
    'cn-anthropic', 'cn-openai',
    'global-de-anthropic', 'global-de-openai',
    'global-hk-anthropic', 'global-hk-openai',
    'global-jp-anthropic', 'global-jp-openai',
    'global-sg-anthropic', 'global-sg-openai',
    'global-us-anthropic', 'global-us-openai',
    'sg-anthropic', 'sg-openai', 'us-openai',
  ]);
  assert.equal(result.endpoints.some(({ service_id, region_code }) => service_id === 'global' && region_code === 'cn-beijing'), false);
  assert.equal(result.endpoints.some(({ base_url }) => /trial|coding|token-plan/i.test(base_url)), false);
  assert.equal(result.endpoints.find(({ id }) => id === 'cn-openai')?.api_region, '华北2（北京）');
  assert.equal(result.endpoints.find(({ id }) => id === 'global-de-openai')?.base_url, 'https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1');
  assert.equal(result.endpoints.find(({ id }) => id === 'global-de-anthropic')?.api_region, '德国（法兰克福）');
  assert.equal(result.routes.some(({ service_id, protocol, endpoint_id }) => service_id === 'cn' && protocol === 'openai' && endpoint_id === 'sg-openai'), true);
  assert.equal(result.routes.some(({ service_id, protocol, endpoint_id }) => service_id === 'global' && protocol === 'anthropic' && endpoint_id === 'global-de-anthropic'), true);
  assert.equal(result.routes.some(({ service_id, protocol, endpoint_id, path }) => service_id === 'global'
    && protocol === 'responses' && endpoint_id === 'global-de-openai' && path === '/responses'), true);
  assert.equal(result.routes.some(({ service_id, protocol, endpoint_id, provider_model_ids }) => service_id === 'cn'
    && protocol === 'responses' && endpoint_id === 'sg-openai' && provider_model_ids.length === 0), true,
  'A Workspace URL shared by markets must retain both endpoint facts without assigning the route to a market model');
  assert.deepEqual(result.routes.find(({ endpoint_id, protocol }) => endpoint_id === 'global-de-openai' && protocol === 'responses')?.provider_model_ids, ['qwen3.8-max']);
  assert.deepEqual(result.routes.find(({ endpoint_id }) => endpoint_id === 'cn-openai')?.provider_model_ids, ['qwen3.8-max']);
  assert.deepEqual(result.routes.find(({ endpoint_id }) => endpoint_id === 'global-de-anthropic')?.provider_model_ids, ['qwen3.8-max']);
  assert.equal(result.routes.find(({ endpoint_id }) => endpoint_id === 'sg-openai')?.provider_model_ids.length, 0);
  assert.equal(result.routes.find(({ endpoint_id }) => endpoint_id === 'global-sg-anthropic')?.provider_model_ids.length, 0);
  assert.equal(result.review_items.length, 3);
  assert.ok(result.review_items.some(({ message }) => /多个账号市场 Service/.test(message)));
  assert.ok(result.review_items.some(({ message }) => /同一区域的代码示例/.test(message)));
});
