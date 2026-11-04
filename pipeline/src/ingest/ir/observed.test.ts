import assert from 'node:assert/strict';
import { it } from 'node:test';
import { observed } from './observed.ts';

it('creates a source-linked IR fact without promoting or changing its value', () => {
  const fact = observed(['model-a', 'model-b'], 'official-catalog', '#models', 'The official catalog lists these IDs.');
  assert.deepEqual(fact, {
    value: ['model-a', 'model-b'],
    evidence: [{ source_ref: 'official-catalog', locator: '#models', assertion: 'The official catalog lists these IDs.' }],
  });
});
