/**
 * 字段级合并与授权 Scope 的测试。
 *
 * 保护的核心不变量：
 * - 高风险冲突不静默取其一，保留上一个可靠值；
 * - 人工锁定值过期后不再压制上游；
 * - Scope 越权被拒绝。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  checkScope,
  classifyChangeRisk,
  mergeField,
  type MergeCandidate,
} from './merge.ts';

function candidate(partial: Partial<MergeCandidate> & { layer: MergeCandidate['layer']; value: unknown }): MergeCandidate {
  return { ...partial };
}

describe('mergeField', () => {
  it('无候选时保留上一个可靠值', () => {
    const result = mergeField([], 'prev');
    assert.equal(result.value, 'prev');
    assert.equal(result.stale, true);
  });

  it('唯一候选直接采用', () => {
    const result = mergeField([candidate({ layer: 'upstream', value: 'v' })]);
    assert.equal(result.value, 'v');
    assert.equal(result.winner_layer, 'upstream');
    assert.equal(result.conflict, false);
  });

  it('人工锁定值优先于上游', () => {
    const result = mergeField([
      candidate({ layer: 'upstream', value: 'upstream-value' }),
      candidate({ layer: 'manual_locked', value: 'manual-value' }),
    ]);
    assert.equal(result.value, 'manual-value');
    assert.equal(result.winner_layer, 'manual_locked');
  });

  it('人工锁定值过期后不再压制上游', () => {
    const result = mergeField([
      candidate({ layer: 'upstream', value: 'upstream-value' }),
      candidate({
        layer: 'manual_locked',
        value: 'manual-value',
        expires_at: '2020-01-01T00:00:00Z',
      }),
    ]);
    assert.equal(result.value, 'upstream-value');
    assert.equal(result.winner_layer, 'upstream');
  });

  it('官方与人工冲突时保留上一个可靠值并标 stale', () => {
    const result = mergeField(
      [
        candidate({ layer: 'manual_locked', value: 'manual-value' }),
        candidate({ layer: 'official_declared', value: 'official-value' }),
      ],
      'previous-reliable',
    );
    assert.equal(result.value, 'previous-reliable');
    assert.equal(result.conflict, true);
    assert.equal(result.stale, true);
  });

  it('社区候选与上游冲突时不触发高风险回退', () => {
    const result = mergeField([
      candidate({ layer: 'upstream', value: 'upstream-value' }),
      candidate({ layer: 'community_candidate', value: 'community-value' }),
    ]);
    assert.equal(result.value, 'community-value');
    assert.equal(result.conflict, true);
    assert.equal(result.stale, undefined);
  });

  it('官方声明优先于上游', () => {
    const result = mergeField([
      candidate({ layer: 'upstream', value: 'upstream-value' }),
      candidate({ layer: 'official_declared', value: 'official-value' }),
    ]);
    assert.equal(result.value, 'official-value');
    assert.equal(result.winner_layer, 'official_declared');
  });
});

describe('checkScope', () => {
  it('无授权记录时拒绝', () => {
    const result = checkScope(undefined, { service_id: 'cn' });
    assert.equal(result.allowed, false);
    assert.match(result.reason ?? '', /Scope/);
  });

  it('Service 在范围内时允许', () => {
    const result = checkScope({ service_ids: ['cn'] }, { service_id: 'cn' });
    assert.equal(result.allowed, true);
  });

  it('Service 越权被拒绝', () => {
    const result = checkScope({ service_ids: ['cn'] }, { service_id: 'global' });
    assert.equal(result.allowed, false);
    assert.match(result.reason ?? '', /global/);
  });

  it('Offering 越权被拒绝', () => {
    const result = checkScope(
      { service_ids: ['cn'], offering_ids: ['offering-a'] },
      { service_id: 'cn', offering_id: 'offering-b' },
    );
    assert.equal(result.allowed, false);
  });

  it('字段路径越权被拒绝', () => {
    const result = checkScope(
      { field_paths: ['/rate_cards'] },
      { field_path: '/services/0/endpoints' },
    );
    assert.equal(result.allowed, false);
  });

  it('字段路径前缀匹配视为允许', () => {
    const result = checkScope(
      { field_paths: ['/rate_cards'] },
      { field_path: '/rate_cards/0/rules' },
    );
    assert.equal(result.allowed, true);
  });
});

describe('classifyChangeRisk', () => {
  it('价格归零是 P0', () => {
    assert.equal(
      classifyChangeRisk({ kind: 'price', previous: '3.00', next: '0' }),
      'P0',
    );
  });

  it('币种变化是 P0', () => {
    assert.equal(
      classifyChangeRisk({ kind: 'price', previous: '3.00', next: '3.00', currencyChanged: true }),
      'P0',
    );
  });

  it('普通调价是 P1', () => {
    assert.equal(
      classifyChangeRisk({ kind: 'price', previous: '3.00', next: '3.30' }),
      'P1',
    );
  });

  it('URL 与 Auth 变更是 P1', () => {
    assert.equal(classifyChangeRisk({ kind: 'url' }), 'P1');
    assert.equal(classifyChangeRisk({ kind: 'auth' }), 'P1');
  });

  it('退役是 P1', () => {
    assert.equal(
      classifyChangeRisk({ kind: 'retirement', previous: 'active', next: 'retired' }),
      'P1',
    );
  });

  it('文案与时间戳变更是 P3', () => {
    assert.equal(classifyChangeRisk({ kind: 'text' }), 'P3');
    assert.equal(classifyChangeRisk({ kind: 'timestamp' }), 'P3');
  });
});
