import assert from 'node:assert/strict';
import test from 'node:test';
import type { CapturedDocument } from '../document-set.ts';
import { OPENAI_INGEST_SOURCES } from './sources.ts';
import { extractChatGPTPlanFacts } from './collect.ts';

const sourcesById = new Map(OPENAI_INGEST_SOURCES.map((source) => [source.id, source]));

function document(sourceId: string, body: string): CapturedDocument {
  const source = sourcesById.get(sourceId);
  assert.ok(source, `expected registered source ${sourceId}`);
  return {
    source,
    body,
    metadata: {
      source_id: source.id,
      market: source.market,
      source_name: source.name,
      request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z',
      http_status: 200,
      content_type: 'text/markdown',
      etag: null,
      last_modified: null,
      content_hash: `sha256:${'a'.repeat(64)}`,
      byte_length: body.length,
      collector_version: 'test',
      body_file: `${source.id}.body`,
    },
  };
}

test('ChatGPT Learn pricing source is the accessible Markdown page', () => {
  const source = sourcesById.get('openai-chatgpt-pricing');
  assert.equal(source?.url, 'https://learn.chatgpt.com/docs/pricing.md?site_locale=en');
  assert.equal(source?.extraction, 'markdown');
  assert.ok(!OPENAI_INGEST_SOURCES.some(({ id }) => id.startsWith('openai-chatgpt-') && id !== 'openai-chatgpt-pricing'));
});

test('ChatGPT Learn pricing cards map plan prices and seat billing with exact annual arithmetic', () => {
  const result = extractChatGPTPlanFacts([document('openai-chatgpt-pricing', `
<PricingCard name="Free" price="$0" interval="/month">Free tier</PricingCard>
<PricingCard name="Go" price="$8" interval="/month">Go tier</PricingCard>
<PricingCard name="Plus" price="$20" interval="/month">Plus tier</PricingCard>
<PricingCard name="Pro" price="$100" interval="/month">- Plans at $100, $200, or $500 USD per month</PricingCard>
<PricingCard name="Business" price="$20" interval="/ user / month*" footnoteLabel="*2+ users, billed annually. $25 per user per month when billed monthly.">Business tier</PricingCard>
<PricingCard name="Enterprise &amp; Edu" interval="" ctaLabel="Contact sales">Contact sales</PricingCard>
`)]);
  const plans = new Map(result.plans.map((plan) => [plan.id.value, plan]));

  assert.equal(plans.size, 8);
  assert.equal(plans.get('chatgpt-go')?.billing_options.value[0]?.subscription_fee?.amount, '8');
  assert.equal(plans.get('chatgpt-plus')?.billing_options.value[0]?.subscription_fee?.amount, '20');
  assert.deepEqual(['100', '200', '500'].map((tier) => plans.get(`chatgpt-pro-${tier}`)?.billing_options.value[0]?.subscription_fee?.amount), ['100', '200', '500']);
  assert.deepEqual(plans.get('chatgpt-business-standard')?.billing_options.value.map(({ billing_period, subscription_fee }) => [billing_period, subscription_fee?.amount]), [
    ['month', '25'],
    ['year', '240'],
  ]);
  assert.deepEqual(plans.get('chatgpt-enterprise')?.billing_options.value, [{ billing_period: 'custom' }]);
  assert.equal(plans.get('chatgpt-plus')?.links?.value.official, 'https://learn.chatgpt.com/docs/pricing?site_locale=en');
  assert.ok([...plans.values()].every(({ links }) => links?.value.official?.includes('.md') !== true));
  assert.ok(plans.get('chatgpt-plus')?.billing_options.evidence.every(({ source_ref }) => source_ref === 'openai-chatgpt-pricing'));
  assert.ok(result.review_items.some(({ id, kind }) => id === 'openai-chatgpt-plan-scope-limited' && kind === 'incomplete_coverage'));
});

test('unparsed prices remain unknown and produce review evidence without promoting incomplete coverage', () => {
  const result = extractChatGPTPlanFacts([document('openai-chatgpt-pricing', '<PricingCard name="Plus" interval="/month">Plus tier</PricingCard>')]);
  const plus = result.plans.find(({ id }) => id.value === 'chatgpt-plus');

  assert.deepEqual(plus?.billing_options.value, [{ billing_period: 'month' }]);
  assert.ok(result.review_items.some(({ id, evidence }) => id === 'openai-chatgpt-price-missing-chatgpt-plus'
    && evidence[0]?.source_ref === 'openai-chatgpt-pricing'));
  assert.ok(result.review_items.some(({ id }) => id === 'openai-chatgpt-plan-scope-limited'));
});
