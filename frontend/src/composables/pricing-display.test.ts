import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { groupPriceEntriesByTier, otherPricePresentation } from './pricing-display.ts';

describe('其他价格列的币种展示', () => {
  it('优先显示所选币种参考价，并保留原币作为次要金额', () => {
    assert.deepEqual(otherPricePresentation({
      converted: '¥66.74',
      amount: '$10.00',
    }), {
      primary: '¥66.74',
      native: '$10.00',
    });
  });

  it('没有参考换算时继续显示原币，不编造替代金额', () => {
    assert.deepEqual(otherPricePresentation({ amount: '$10.00' }), {
      primary: '$10.00',
    });
  });

  it('仅将完整价格向量相同的服务等级合并，避免重复列出相同价格', () => {
    const groups = groupPriceEntriesByTier([
      { id: 'batch-input', ruleId: 'batch', tierLabel: '批量服务', tierSignature: 'same-rates', amount: '$5', detail: '输入' },
      { id: 'batch-output', ruleId: 'batch', tierLabel: '批量服务', tierSignature: 'same-rates', amount: '$25', detail: '输出' },
      { id: 'flex-input', ruleId: 'flex', tierLabel: '灵活服务', tierSignature: 'same-rates', amount: '$5', detail: '输入' },
      { id: 'flex-output', ruleId: 'flex', tierLabel: '灵活服务', tierSignature: 'same-rates', amount: '$25', detail: '输出' },
    ]);

    assert.equal(groups.length, 1);
    assert.equal(groups[0]?.tierLabel, '批量服务 · 灵活服务');
    assert.equal(groups[0]?.rules.length, 1);
    assert.deepEqual(groups[0]?.rules[0]?.entries.map(({ id }) => id), ['batch-input', 'batch-output']);
  });
});
