import test from 'node:test';
import assert from 'node:assert/strict';
import { alibabaParser } from './collect.ts';
test('阿里百炼采集器不再暴露逐模型详情页解析器', () => {
  assert.equal('parseModelDetailPrices' in alibabaParser, false);
});

test('阿里百炼价格解析保留阶梯行及来源章节，不折叠同模型的地域/价格行', () => {
  const rows = alibabaParser.extractPricingRows([
    '# 文本生成-千问',
    'qwen3.8-max | 全球 | 0<Token≤1M | 12元 | 36元',
    'qwen3.8-max | 欧盟 | 0<Token≤1M | 18元 | 54元',
    '32K<Token≤128K | 20元 | 80元',
  ].join('\n'));
  assert.deepEqual(rows.map(({ section, model_ids }) => ({ section, model_ids })), [
    { section: '文本生成-千问', model_ids: ['qwen3.8-max'] },
    { section: '文本生成-千问', model_ids: ['qwen3.8-max'] },
  ]);
  assert.match(rows[0]!.raw, /0<Token≤1M/);
});

test('阿里百炼按量价格表能识别旧版 qwen- 型号并抽取对应单价', () => {
  const rows = alibabaParser.extractTokenPricingRows([
    '<Tab title="华北2（北京）">',
    '## 千问Max',
    '<table><thead><tr><th>模型 ID（Model ID）</th><th>单次请求的输入Token数</th><th>输入单价（每百万Token）</th><th>输出单价（每百万Token）</th></tr></thead><tbody>',
    '<tr><td>qwen-max</td><td>无阶梯计价</td><td>2.4元</td><td>9.6元</td></tr>',
    '</tbody></table>',
    '## 千问Plus',
    '<table><thead><tr><th>模型 ID（Model ID）</th><th>单次请求的输入Token范围</th><th>输入单价（每百万Token）</th><th>输出单价（每百万Token）</th></tr></thead><tbody>',
    '<tr><td>qwen-plus</td><td>0<Token≤128K</td><td>0.8元</td><td>2元</td></tr>',
    '</tbody></table>',
    '</Tab>',
    '<Tab title="新加坡">',
    '## 角色扮演',
    '<table><thead><tr><th>模型 ID（Model ID）</th><th>服务部署范围</th><th>输入单价（每百万Token）</th><th>输出单价（每百万Token）</th></tr></thead><tbody>',
    '<tr><td>qwen-plus-character-ja</td><td>国际</td><td>3.67元</td><td>10.275元</td></tr>',
    '<tr><td>qwen-flash-character</td><td>全球</td><td>0.25元</td><td>1.5元</td></tr>',
    '</tbody></table>',
    '</Tab>',
  ].join('\n'), 'alibaba-model-pricing');

  assert.deepEqual(rows.map(({ model_id, api_region, deployment_scope, input_price, output_price }) => ({
    model_id, api_region, deployment_scope, input_price, output_price,
  })), [
    { model_id: 'qwen-max', api_region: '华北2（北京）', deployment_scope: '', input_price: '2.4', output_price: '9.6' },
    { model_id: 'qwen-plus', api_region: '华北2（北京）', deployment_scope: '', input_price: '0.8', output_price: '2' },
    { model_id: 'qwen-plus-character-ja', api_region: '新加坡', deployment_scope: '国际', input_price: '3.67', output_price: '10.275' },
    { model_id: 'qwen-flash-character', api_region: '新加坡', deployment_scope: '全球', input_price: '0.25', output_price: '1.5' },
  ]);
  assert.equal(rows[0]!.locator, '#千问Max/table/1/row/2');
  assert.equal(rows.every(({ is_limited_time_free }) => !is_limited_time_free), true);
});

test('阿里国际价格中的美元不会误识别为人民币', () => {
  const rows = alibabaParser.extractTokenPricingRows([
    '<Tab title="新加坡">',
    '<table><tr><th>模型 ID</th><th>输入单价（每百万 Token）</th><th>输出单价（每百万 Token）</th></tr>',
    '<tr><td>qwen-audio-3.1-tts-flash</td><td>0.23美元</td><td>1.87美元</td></tr></table>',
    '</Tab>',
  ].join('\n'), 'alibaba-global-model-pricing');
  assert.equal(rows[0]?.currency, 'USD');
  assert.equal(rows[0]?.input_price, '0.23');
  assert.equal(rows[0]?.output_price, '1.87');
});

test('阿里百炼模型大全按官方分类保留显式模型 ID', () => {
  // 真实页面是 Markdown 小标题 + HTML 表格混排，型号挂在表格单元格的锚点文字上。
  const models = alibabaParser.extractGallery([
    '# 文本生成',
    '<table><tr><td><a href="https://example.invalid">qwen3.8-max</a></td><td><a href="https://example.invalid">kimi/kimi-k3</a></td></tr></table>',
    '# 图像与视频',
    '<table><tr><td><a href="https://example.invalid">wan2.7-image-pro</a></td></tr></table>',
  ].join('\n'));
  assert.deepEqual(models, [
    { section: '文本生成', model_ids: ['qwen3.8-max', 'kimi/kimi-k3'] },
    { section: '图像与视频', model_ids: ['wan2.7-image-pro'] },
  ]);
});

test('阿里百炼 ID 抽取不把非模型字段当成模型', () => {
  assert.deepEqual(alibabaParser.ids('Token Plan qwen3.8-max 每百万 tokens'), ['qwen3.8-max']);
});

test('阿里百炼缺少登记来源时拒绝构建采集事实，避免把缺来源当作空目录', () => {
  assert.throws(() => alibabaParser.facts([]), /目录、价格、缓存、计划与 API 文档来源必须完整采集/);
});
