import assert from 'node:assert/strict';
import test from 'node:test';
import { openAIPriceFactForModel } from './pricing.ts';

test('OpenAI price parsing keeps exact model identity, decimal strings, service tiers, and evidence', () => {
  // Synthetic Markdown fixture: protects parser semantics without treating it as source pricing.
  const body = [
    '## Standard pricing',
    '| Model | Input | Cached input | Output |',
    '|---|---:|---:|---:|',
    '| gpt-6 | $1.00 | $0.10 | $4.00 |',
    '| gpt-6-astra | $9.00 | $0.90 | $36.00 |',
    '',
    '## Batch pricing',
    '| Model | Input | Cached input | Output |',
    '|---|---:|---:|---:|',
    '| gpt-6 | $0.50 | $0.05 | $2.00 |',
  ].join('\n');

  const price = openAIPriceFactForModel(body, 'gpt-6', 'openai-pricing');
  assert.ok(price);
  assert.equal(price.provider_model_id?.value, 'gpt-6');
  assert.deepEqual(price.rules.value.map(({ conditions, rate_items }) => ({
    tier: conditions?.[0] && 'field' in conditions[0] ? conditions[0].value : undefined,
    rates: rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]),
  })), [
    {
      tier: 'standard',
      rates: [['input', '1.00'], ['cache_read', '0.10'], ['output', '4.00']],
    },
    {
      tier: 'batch',
      rates: [['input', '0.50'], ['cache_read', '0.05'], ['output', '2.00']],
    },
  ]);
  assert.ok(price.rules.value.every(({ evidence }) => evidence[0]?.source_ref === 'openai-pricing'));
  assert.ok(price.rules.value.every(({ evidence }) => /row:\d+$/u.test(evidence[0]?.locator ?? '')));
});

test('OpenAI price parsing does not attach a longer model ID row to its prefix', () => {
  const body = [
    '## Standard pricing',
    '| Model | Input | Output |',
    '|---|---:|---:|',
    '| gpt-6-astra | $9.00 | $36.00 |',
  ].join('\n');

  assert.equal(openAIPriceFactForModel(body, 'gpt-6', 'openai-pricing'), undefined);
});
