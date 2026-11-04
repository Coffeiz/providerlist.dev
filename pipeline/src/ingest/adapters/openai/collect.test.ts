import test from 'node:test';
import assert from 'node:assert/strict';
import type { CapturedDocument } from '../document-set.ts';
import { officialDocsParser } from '../official-provider-docs.ts';
import { mapOpenAIProviderFacts, openaiCollectorConfig } from './collect.ts';

test('OpenAI 采集来源不含逐模型详情页', () => {
  assert.equal(openaiCollectorConfig.sources.some(({ id }) => id === 'openai-gpt-6-astra'), false);
});

test('OpenAI Code Interpreter 候选包含提示词、容器文件输入和执行结果字段', () => {
  const captured = (id: string, body: string): CapturedDocument => {
    const source = openaiCollectorConfig.sources.find(({ id: sourceId }) => sourceId === id)!;
    return {
      source, body,
      metadata: {
        source_id: source.id, source_name: source.name, request_url: source.url,
        retrieved_at: '2026-11-04T00:00:00.000Z', http_status: 200,
        content_type: 'text/markdown', etag: null, last_modified: null,
        content_hash: `sha256:${'a'.repeat(64)}`, byte_length: body.length,
        collector_version: 'test', body_file: `${source.id}.body`,
      },
    };
  };
  const docs = [
    captured('openai-models-all', '## GPT-6 Astra'),
    captured('openai-models-list-api', 'https://api.openai.com/v1/models'),
    captured('openai-pricing', '# API pricing'),
    captured('openai-code-interpreter', [
      '"type": "code_interpreter"', '"input": "prompt"', '"file_ids": ["file-1"]',
      '"memory_limit": "1g"', '"memory_limit": "4g"', '"memory_limit": "16g"', '"memory_limit": "64g"',
      '"network_policy": {"type":"disabled"}', '"type":"allowlist"', '"allowed_domains":["example.com"]',
      '"allowed_callers": ["direct", "programmatic"]',
      'code_interpreter_call', 'container_id', '"outputs": []', 'output_text',
    ].join('\n')),
  ];
  const facts = officialDocsParser.sourceGapFacts(docs, openaiCollectorConfig);
  const baseIR = officialDocsParser.toCollectionIR('openai', docs, facts);
  const ir = mapOpenAIProviderFacts(docs, facts, baseIR);
  const operation = ir.services[0]?.capabilities.find(({ kind }) => kind.value === 'code_execution')?.operations[0];

  assert.deepEqual(operation?.input?.value.map(({ name, kind }) => [name, kind]), [['input', 'text']]);
  assert.ok(operation?.parameters?.value.some(({ name }) => name === 'tools[].container.file_ids[]'));
  assert.deepEqual(operation?.parameters?.value.find(({ name }) => name === 'tools[].container.memory_limit')?.enum, ['1g', '4g', '16g', '64g']);
  assert.deepEqual(operation?.parameters?.value.find(({ name }) => name === 'tools[].container.network_policy.type')?.enum, ['disabled', 'allowlist']);
  assert.deepEqual(operation?.parameters?.value.find(({ name }) => name === 'tools[].allowed_callers[]')?.enum, ['direct', 'programmatic']);
  assert.ok(operation?.output?.value[0]?.fields?.includes('output[].outputs[]'));
  assert.ok(operation?.output?.value[0]?.fields?.includes('container_file_citation.file_id'));
  assert.ok(operation?.input?.evidence.every(({ source_ref }) => source_ref === 'openai-code-interpreter'));
  assert.ok(operation?.output?.evidence.every(({ source_ref }) => source_ref === 'openai-code-interpreter'));
});
