import assert from 'node:assert/strict';
import test from 'node:test';
import { stripTransientEvidence } from './provenance.ts';

const provider = {
  provider: {
    id: 'example',
    name: 'Example',
    kind: 'first_party',
    sources: ['catalog'],
    evidence: [{ id: 'provider-evidence' }],
  },
  sources: [{ id: 'catalog' }],
  services: [{
    id: 'global',
    website: 'https://example.test',
    docs: { overview: 'https://example.test/docs' },
    offerings: [{
      id: 'example-chat',
      evidence_refs: ['offer-evidence'],
      operations: [{ id: 'chat', parameters: [{ name: 'model', source_refs: ['api-doc'] }] }],
    }],
  }],
} as never;

test('persisted facts remove transient collector evidence and retain market-level user-facing docs', () => {
  const result = stripTransientEvidence(provider) as unknown as Record<string, any>;

  assert.deepEqual(result.services[0].docs, { overview: 'https://example.test/docs' });
  assert.equal('sources' in result, false);
  assert.equal('sources' in result.provider, false);
  assert.equal('evidence' in result.provider, false);
  assert.equal('evidence_refs' in result.services[0].offerings[0], false);
  assert.equal('source_refs' in result.services[0].offerings[0].operations[0].parameters[0], false);
});
