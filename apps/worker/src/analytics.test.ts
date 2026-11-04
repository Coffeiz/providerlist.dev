import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { handleAnalytics } from './analytics.ts';

function request(body: unknown): Request {
  return new Request('https://example.com/api/events', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
}

test('accepts anonymous search counts and rejects search text', async () => {
  const points: unknown[] = [];
  const dataset = { writeDataPoint: (point: unknown) => { points.push(point); } };
  assert.equal((await handleAnalytics(request({ type: 'search', category: 'global', result_count: 3 }), dataset)).status, 204);
  assert.equal((await handleAnalytics(request({ type: 'search', category: 'global', result_count: 3, query: 'private' }), dataset)).status, 400);
  assert.equal(points.length, 1);
});

test('rejects copied URL content and does not write invalid events', async () => {
  const points: unknown[] = [];
  const dataset = { writeDataPoint: (point: unknown) => { points.push(point); } };
  assert.equal((await handleAnalytics(request({ type: 'url_copy', url_type: 'base_url', page: 'provider', url: 'https://secret.example' }), dataset)).status, 400);
  assert.equal(points.length, 0);
  assert.equal((await handleAnalytics(request({ type: 'url_copy', url_type: 'base_url', page: 'provider' }), dataset)).status, 204);
});

test('excludes detected bots without discarding unscored requests', async () => {
  const points: unknown[] = [];
  const dataset = { writeDataPoint: (point: unknown) => { points.push(point); } };
  for (const botManagement of [{ verifiedBot: true }, { score: 12 }, { score: 0 }, undefined]) {
    const req = request({ type: 'search', category: 'global', result_count: 1 });
    Object.defineProperty(req, 'cf', { value: { botManagement } });
    assert.equal((await handleAnalytics(req, dataset)).status, 204);
  }
  assert.equal(points.length, 2);
});
