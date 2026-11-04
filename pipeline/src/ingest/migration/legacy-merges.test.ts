import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { alibabaPriceCardId, alibabaPriceRowsForMarket, GLOBAL_MERGE_PROVIDER_IDS } from './legacy-merges.ts';

describe('Provider IR 转换边界', () => {
  it('OpenAI 不再进入旧 TFacts 全局转换器', () => {
    assert.equal(GLOBAL_MERGE_PROVIDER_IDS.includes('openai'), false);
  });
});
describe('阿里百炼价格市场映射', () => {
  it('按官方价格来源市场与原币种纳入所有部署地域及范围', () => {
    const sourceMarkets = new Map([
      ['alibaba-model-pricing', 'cn'],
      ['alibaba-global-model-pricing', 'global'],
    ]);
    const rows = [
      { source_id: 'alibaba-model-pricing', model_id: 'qwen-plus', api_region: '华北2（北京）', deployment_scope: '', currency: 'CNY' },
      { source_id: 'alibaba-model-pricing', model_id: 'qwen-plus', api_region: '新加坡', deployment_scope: '国际', currency: 'CNY' },
      { source_id: 'alibaba-global-model-pricing', model_id: 'qwen-plus', api_region: '新加坡', deployment_scope: '国际', currency: 'USD' },
      { source_id: 'alibaba-global-model-pricing', model_id: 'qwen-plus', api_region: '美国（弗吉尼亚）', deployment_scope: '全球', currency: 'USD' },
      { source_id: 'alibaba-global-model-pricing', model_id: 'qwen-plus', api_region: '新加坡', deployment_scope: '国际', currency: 'CNY' },
      { source_id: 'alibaba-model-pricing', model_id: 'qwen-max', api_region: '华北2（北京）', deployment_scope: '', currency: 'CNY' },
    ];

    assert.deepEqual(
      alibabaPriceRowsForMarket(rows, sourceMarkets, 'qwen-plus', 'cn').map(({ api_region }) => api_region),
      ['华北2（北京）', '新加坡'],
    );
    assert.deepEqual(
      alibabaPriceRowsForMarket(rows, sourceMarkets, 'qwen-plus', 'global').map(({ api_region }) => api_region),
      ['新加坡', '美国（弗吉尼亚）'],
    );
    assert.notEqual(
      alibabaPriceCardId('qwen-plus', 'cn', '新加坡', '国际', 'CNY'),
      alibabaPriceCardId('qwen-plus', 'global', '新加坡', '国际', 'USD'),
    );
  });
});
