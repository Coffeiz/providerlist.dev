import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Model } from '@providerlist/schema/types';
import { resolveModelRefPreservingExisting } from './model-reference.ts';

const registry: readonly Model[] = [
  { id: 'developer/previous-model', developer_id: 'developer', developer_name: 'Developer', name: 'Previous model' },
  { id: 'current-model', developer_id: 'other', developer_name: 'Other', name: 'Current exact match' },
];

describe('转换器的既有 Model 关联保护', () => {
  it('新 ID 规则命中另一个 Model 时仍保留此前已登记且有效的 model_ref', () => {
    const result = resolveModelRefPreservingExisting('current-model', registry, 'developer/previous-model');

    assert.equal(result.model_ref, 'developer/previous-model');
    assert.equal(result.preserved, true);
    assert.match(result.assertion, /沿用上一版 Provider 数据/);
    assert.match(result.assertion, /未覆盖既有关联/);
  });

  it('旧关联目标已不在注册表时重新执行确定性 ID 匹配', () => {
    const result = resolveModelRefPreservingExisting('current-model', registry, 'removed-model');

    assert.equal(result.model_ref, 'current-model');
    assert.equal(result.rule, 'exact_id');
    assert.equal(result.preserved, false);
    assert.match(result.assertion, /完全一致/);
  });

  it('斜杠后的完整型号段唯一命中规范 Model ID 时关联，并在 review 说明命中规则', () => {
    const namespacedRegistry: readonly Model[] = [
      { id: 'openai/gpt-4o', developer_id: 'openai', developer_name: 'OpenAI', name: 'GPT-4o' },
    ];
    const result = resolveModelRefPreservingExisting('gateway/openai/gpt-4o', namespacedRegistry);

    assert.equal(result.model_ref, 'openai/gpt-4o');
    assert.equal(result.rule, 'model_id_after_slash');
    assert.equal(result.preserved, false);
    assert.match(result.assertion, /斜杠后的型号段/u);
    assert.match(result.assertion, /唯一后缀命中/u);
  });

  it('斜杠后的型号段匹配多个规范 Model 时保持未关联并报告候选', () => {
    const namespacedRegistry: readonly Model[] = [
      { id: 'openai/gpt-4o', developer_id: 'openai', developer_name: 'OpenAI', name: 'GPT-4o' },
      { id: 'third-party/gpt-4o', developer_id: 'third-party', developer_name: 'Third Party', name: 'Hosted GPT-4o' },
    ];
    const result = resolveModelRefPreservingExisting('gateway/gpt-4o', namespacedRegistry);

    assert.equal(result.model_ref, null);
    assert.equal(result.rule, 'ambiguous');
    assert.deepEqual(result.candidates, ['openai/gpt-4o', 'third-party/gpt-4o']);
    assert.match(result.assertion, /多个规范 Model/u);
  });

});
