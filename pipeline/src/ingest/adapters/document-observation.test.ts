import test from 'node:test';
import assert from 'node:assert/strict';
import type { IngestSource } from '../types.ts';
import { extractDocumentObservation } from './document-observation.ts';

const source: IngestSource = {
  id: 'html-sections',
  provider_id: 'fixture',
  market: 'global',
  name: 'HTML sections fixture',
  url: 'https://docs.example.test/pricing',
  enabled: true,
  accept: 'text/html',
  max_bytes: 1024,
  extraction: 'html',
  scope: 'pricing',
};

test('HTML 表格观察保留最近的章节标题，供领域解析器关联事实和证据', () => {
  const body = [
    '<h1>Pricing</h1>',
    '<h2>Muse Wonder</h2>',
    '<table><tr><th>Usage</th><th>Price</th></tr><tr><td>Input</td><td>$4.00</td></tr></table>',
    '<h2>Muse Spark</h2>',
    '<table><tr><th>Usage</th><th>Price</th></tr><tr><td>Input</td><td>$1.25</td></tr></table>',
  ].join('');
  const observation = extractDocumentObservation({ source, body });

  assert.deepEqual(observation.tables.map(({ heading, rows }) => [heading, rows[0]?.[1]]), [
    ['Muse Wonder', '$4.00'],
    ['Muse Spark', '$1.25'],
  ]);
});

test('API 文档观察捕获 WebSocket Host 与 Route 线索', () => {
  const observation = extractDocumentObservation({
    source: { ...source, scope: 'api' },
    body: 'Connect to `wss://api.meta.ai/v1/asr/realtime`.\nWS /asr/realtime',
  });

  assert.deepEqual(observation.api_mentions, [
    'Connect to `wss://api.meta.ai/v1/asr/realtime`.',
  ]);
});
