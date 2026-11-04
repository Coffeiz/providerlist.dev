import assert from 'node:assert/strict';
import { test } from 'node:test';
import { renderCandidateReview } from './candidate-review.ts';
import type { CandidateEnvelope } from './types.ts';

function candidate(previous: unknown, current: unknown): CandidateEnvelope<unknown> {
  return {
    provider_id: 'openai',
    candidate_kind: 'official-public-doc-observation',
    observed_at: '2026-10-25T00:00:00.000Z',
    previous_candidate_hash: 'sha256:previous',
    candidate_hash: 'sha256:current',
    sources: [],
    previous,
    current,
  };
}

test('candidate report places old and new values side by side for every changed path', () => {
  const report = renderCandidateReview(candidate(
    {
      models: [{ model_id: 'gpt-example', price: '1.00', context_window: 1000000, unchanged: true }],
      coverage_gaps: [{ area: 'api', status: 'not_structured', note: 'old limitation' }],
      retired_note: 'present before',
      unchanged: 'same',
    },
    {
      models: [{ model_id: 'gpt-example', price: '2.00', context_window: 1048576, unchanged: true }],
      coverage_gaps: [{ area: 'api', status: 'not_structured', note: 'new limitation' }],
      new_note: 'present now',
      unchanged: 'same',
    },
  ), '# 来源范围说明\n\n## 来源限制。');

  assert.match(report, /变更统计：新增 1 项，更新 3 项，缺席待核实 1 项/);
  assert.match(report, /### Provider \/ openai[\s\S]*#### Model \/ gpt-example/);
  assert.match(report, /\| 字段 \| 变化 \| 原值 \| 新值 \|/);
  assert.match(report, /\| 价格（price） \| 更新 \| 1\.00 \| 2\.00 \|/);
  assert.match(report, /\| 上下文长度（context_window） \| 更新 \| 1,000,000 tokens \| 1,048,576 tokens \|/);
  assert.match(report, /old limitation \| new limitation/);
  assert.match(report, /未记录 \| present now/);
  assert.match(report, /present before \| 未记录/);
  assert.doesNotMatch(report, /<code>/);
  assert.doesNotMatch(report, /完整列表见 JSON|\*\*旧值\*\*|\*\*新值\*\*|<details>/);
  assert.doesNotMatch(report, /原始路径[^\n]*unchanged/);
  assert.match(report, /### 覆盖缺口（coverage_gaps）[\s\S]*#### Record \/ api/);
  assert.match(report, /### 来源范围说明[\s\S]*#### 来源限制/);
});

test('candidate report keeps long values available and escapes HTML', () => {
  const values = Array.from({ length: 24 }, (_, index) => `model-${index + 1}`);
  const untrustedValue = '<tag> & "quoted" | </pre>';
  const report = renderCandidateReview(candidate(null, {
    model_ids: values,
    documentation: 'example ``` code',
    source_text: untrustedValue,
  }), '');

  assert.match(report, /\| 字段 \| 变化 \| 原值 \| 新值 \|/);
  assert.match(report, /<details><summary>展开完整内容/);
  assert.match(report, /model-1[\s\S]*model-24/);
  assert.match(report, /example ``` code/);
  assert.ok(report.includes('&lt;tag&gt; &amp; "quoted" &#124; &lt;/pre&gt;'));
  assert.doesNotMatch(report, /完整列表见 JSON/);
  assert.doesNotMatch(report, /<code>/);
});

test('candidate report diffs source observations by source_ref instead of repeating unchanged siblings', () => {
  const report = renderCandidateReview(candidate(
    { document_observations: [
      { source_ref: 'model-list', excerpt: 'unchanged source material' },
      { source_ref: 'plan-page', title: 'Token Plan', excerpt: 'old excerpt', plan_or_price_mentions: ['unchanged mention', 'old menu label'] },
    ] },
    { document_observations: [
      { source_ref: 'model-list', excerpt: 'unchanged source material' },
      { source_ref: 'plan-page', title: 'Token Plan', excerpt: 'new excerpt', plan_or_price_mentions: ['new menu label', 'unchanged mention'] },
    ] },
  ), '');

  assert.match(report, /### 文档观察[\s\S]*#### 来源 \/ plan-page[\s\S]*excerpt/);
  assert.match(report, /old excerpt \| new excerpt/);
  assert.match(report, /差异项（删除；相同内容已省略）：old menu label/);
  assert.match(report, /差异项（新增；相同内容已省略）：new menu label/);
  assert.doesNotMatch(report, /unchanged source material/);
  assert.doesNotMatch(report, /unchanged mention/);
  assert.doesNotMatch(report, /\[\s*&lt;br&gt;\s*\{/);
});

test('candidate report shows only changed lines for long text fields', () => {
  const common = `shared paragraph ${'x'.repeat(180)}`;
  const oldText = [common, 'old wording', common, common].join('\n');
  const newText = [common, 'new wording', common, common].join('\n');
  const report = renderCandidateReview(candidate({ excerpt: oldText }, { excerpt: newText }), '');

  assert.match(report, /差异片段（删除；相同内容已省略）：old wording/);
  assert.match(report, /差异片段（新增；相同内容已省略）：new wording/);
  assert.doesNotMatch(report, /shared paragraph/);
});

test('candidate report groups Service Capabilities by market, Capability, and Operation', () => {
  const report = renderCandidateReview(candidate(null, {
    services: [{
      id: 'global',
      capabilities: [{
        id: 'web_search',
        operations: [{
          id: 'search',
          parameters: [{
            name: 'tools[].max_results', type: 'integer', required: false,
            min: 1, max: 25, enum: [5, 10, 20],
          }],
        }],
      }],
    }],
  }), '');

  assert.match(report, /### 市场 \/ global[\s\S]*#### Capability \/ web_search › Operation \/ search/);
  assert.match(report, /最大值（max）[\s\S]*25/);
  assert.match(report, /可选值（enum）[\s\S]*5[\s\S]*10[\s\S]*20/);
  assert.doesNotMatch(report, /<code>/);
});

test('candidate report collapses long text collections while preserving every diff item', () => {
  const previous = Array.from({ length: 15 }, (_, index) => `old source detail ${index + 1}`);
  const current = Array.from({ length: 15 }, (_, index) => `new source detail ${index + 1}`);
  const report = renderCandidateReview(candidate(
    { document_observations: [{ source_ref: 'guide', capability_mentions: previous }] },
    { document_observations: [{ source_ref: 'guide', capability_mentions: current }] },
  ), '');

  assert.match(report, /差异项（删除 15 项）<details><summary>展开完整差异/);
  assert.match(report, /差异项（新增 15 项）<details><summary>展开完整差异/);
  assert.match(report, /<li>old source detail 1<\/li>[\s\S]*<li>old source detail 15<\/li>/);
  assert.match(report, /<li>new source detail 1<\/li>[\s\S]*<li>new source detail 15<\/li>/);
});

test('candidate report folds large structured values into expandable field lists', () => {
  const tables = Array.from({ length: 13 }, (_, index) => ({ title: `Section ${index + 1}`, content: `Value ${index + 1}` }));
  const report = renderCandidateReview(candidate(
    { document_observations: [{ source_ref: 'guide', tables: [] }] },
    { document_observations: [{ source_ref: 'guide', tables }] },
  ), '');

  assert.match(report, /列表（13 项）<details><summary>展开完整内容/);
  assert.match(report, /Section 1[\s\S]*Section 13/);
});
