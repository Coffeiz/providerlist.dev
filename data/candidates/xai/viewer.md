# xai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `xai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-24T07:35:58.564Z |
| 前一候选指纹 | `sha256:508c4be1a22f2a1a97219949b1ed3a07002c4ab074347c6b23f3d5d77d4790b2` |
| 本次候选指纹 | `sha256:081e5b6537cfb8f2a2556f014eb8c431bd52c3b2b263ec2e8a2ab71031e2cb82` |
| 来源快照 | 25 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 23 项，更新 6 项，缺席待核实 78 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 xai-models › note | 更新 | 由官方定价精确模型 ID 映射当前价格模型；目前 10 条。目录中的未计价文案不自动升级为供应。 | 由官方定价精确模型 ID 映射当前价格模型；目前 9 条。目录中的未计价文案不自动升级为供应。 |

### 文档观察

#### 来源 / xai-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：grok-build-0.1 | 差异项（新增；相同内容已省略）：无 |

#### 来源 / xai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：grok-build-0.1 | 差异项（新增；相同内容已省略）：无 |
| tables › 记录 Text API Pricing › rows › 记录 grok-build-0.1 (&lt; 200k prompt tokens) | 缺席待核实 | • grok-build-0.1 (&lt; 200k prompt tokens)<br>• 500k<br>• $1.00<br>• $0.20<br>• $2.00 | 未记录 |
| tables › 记录 Text API Pricing › rows › 记录 grok-build-0.1 (≥ 200k prompt tokens) | 缺席待核实 | • grok-build-0.1 (≥ 200k prompt tokens)<br>• 500k<br>• $2.00<br>• $0.40<br>• $4.00 | 未记录 |

### 市场 / global

#### Capability / collection-management

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / file-storage

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / text-to-speech

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-0309-non-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-0309-non-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-non-reasoning › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-0309-reasoning

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-0309-reasoning › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-0309-reasoning › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.20-multi-agent-0309

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.20-multi-agent-0309 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） › evidence | 更新 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |
| prices › 记录 grok-4.20-multi-agent-0309 › 价格信息（pricing） | 更新 | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1.25<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.16<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.32<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：4<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.4<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.8<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：10<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li></ul></details> | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1.25<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.16<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.32<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：4<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>适用条件（conditions）：• field：api_mode<br>operator：eq<br>value：batch<br>evidence：• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.4<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：5<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.8<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：10<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。</li></ul></details> |
| supply observations › 记录 0 › evidence | 更新 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:15<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:16<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-4.20-multi-agent-0309 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#batch-api-pricing/discounts-by-model<br>assertion：官方按模型列出 grok-4.20-multi-agent-0309 Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-4.20-multi-agent-0309 的优先级费率。 |

#### Model / grok-4.3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.3 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.6

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.6 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.6 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-4.7

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-4.7 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-4.7 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-build-0.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 来源没有单独展示名称，使用官方精确模型 ID 展示。 | 未记录 |
| 展示名称（display_name） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 展示名称（display_name） | 缺席待核实 | grok-build-0.1 | 未记录 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方价格表列出 grok-build-0.1，并有通用文本推理 API 参考。 | 未记录 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| operations › 记录 text_generation › ID（id） | 缺席待核实 | text_generation | 未记录 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 官方价格表列出 grok-build-0.1，并有通用文本推理 API 参考。 | 未记录 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| operations › 记录 text_generation › 类别（kind） | 缺席待核实 | text_generation | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | API 参考列出文本与图像 chat prompt 的推理端点。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › ID（id） | 缺席待核实 | chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | Route 按官方用途 text_generation 分类。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › operation kind | 缺席待核实 | text_generation | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | 官方 API 文档列出路径 /chat/completions。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › API 路径（path_template） | 缺席待核实 | /chat/completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | chat-completions API 协议。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › protocol | 缺席待核实 | chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › assertion | 缺席待核实 | 价格表确认模型 ID grok-build-0.1；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids › evidence › 记录 xai-chat-completions › source ref | 缺席待核实 | xai-chat-completions | 未记录 |
| operations › 记录 text_generation › routes › 记录 chat-completions › provider model ids | 缺席待核实 | • grok-build-0.1 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › assertion | 缺席待核实 | 已由官方 API 文档描述，未实测 API 调用。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › callability › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › callability | 缺席待核实 | documented_only | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › assertion | 缺席待核实 | Route 链接指向对应官方可读 API 文档。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › documentation › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › documentation | 缺席待核实 | https://docs.x.ai/developers/rest-api-reference/inference/responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › assertion | 缺席待核实 | 该 Route 使用 global Endpoint。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › endpoint ref | 缺席待核实 | global | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › assertion | 缺席待核实 | API 参考列出 Responses 推理端点。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › ID（id） | 缺席待核实 | responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › assertion | 缺席待核实 | 官方 API 文档列出 POST 方法。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › HTTP 方法（method） | 缺席待核实 | POST | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › assertion | 缺席待核实 | Route 按官方用途 text_generation 分类。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › operation kind | 缺席待核实 | text_generation | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › assertion | 缺席待核实 | 官方 API 文档列出路径 /responses。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › API 路径（path_template） | 缺席待核实 | /responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › assertion | 缺席待核实 | responses API 协议。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › protocol › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › protocol | 缺席待核实 | responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › assertion | 缺席待核实 | 价格表确认模型 ID grok-build-0.1；该 Route 文档说明其所属 API。 | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids › evidence › 记录 xai-responses › source ref | 缺席待核实 | xai-responses | 未记录 |
| operations › 记录 text_generation › routes › 记录 responses › provider model ids | 缺席待核实 | • grok-build-0.1 | 未记录 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） › evidence | 缺席待核实 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 | 未记录 |
| prices › 记录 grok-build-0.1 › 价格信息（pricing） | 缺席待核实 | 列表（4 项）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：1.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2.00<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：2.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>evidence：• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：2<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：0.4<br>• 计费指标（metric）：output<br>上下文长度（context）：&lt;200000<br>计量单位（unit）：per_1m_tokens<br>value：4<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。</li><li>币种（currency）：value：USD<br>evidence：• source ref：xai-pricing<br>locator：#key-information<br>assertion：xAI 官方定价页明确所有价格均为 USD。<br>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：4<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：0.8<br>• 计费指标（metric）：output<br>上下文长度（context）：&gt;=200000<br>计量单位（unit）：per_1m_tokens<br>value：8<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。<br>适用条件（conditions）：• field：service_tier<br>operator：eq<br>value：priority<br>evidence：• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。</li></ul></details> | 未记录 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 价格表以精确的 Provider 模型 ID 列价。 | 未记录 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| prices › 记录 grok-build-0.1 › 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-build-0.1 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | 当前价格表含精确模型行，作为公开按量供应证据。 | 未记录 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务商模型 ID（provider_model_id） | 缺席待核实 | grok-build-0.1 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › assertion | 缺席待核实 | xAI API 定价来源属于 global Service。 | 未记录 |
| 服务线 ID（service_id） › evidence › 记录 xai-pricing › source ref | 缺席待核实 | xai-pricing | 未记录 |
| 服务线 ID（service_id） | 缺席待核实 | global | 未记录 |
| supply observations › 记录 0 › evidence | 缺席待核实 | • source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:13<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#text-api-pricing/table:Text API Pricing/row:14<br>assertion：xAI 当前 API 定价表为精确模型 grok-build-0.1 列出 USD 每百万 Token 输入、缓存输入及输出价格。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。<br>• source ref：xai-pricing<br>locator：#priority-processing-pricing<br>assertion：官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 grok-build-0.1 的优先级费率。 | 未记录 |
| supply observations › 记录 0 › 类别（kind） | 缺席待核实 | priced_current | 未记录 |

#### Model / grok-voice-3.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-voice-3.0 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 grok-voice-3.0 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / grok-voice-transcribe-2.0

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 grok-voice-transcribe-2.0 › capability ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `xai-subscription-pricing` · xAI X Subscription 套餐周期、价格与用量倍率 | https://docs.x.ai/x-subscription/pricing | 2026-11-24T07:35:56.819Z | 200 | `sha256:1c317f26e6820635b393c4ff3bf4da97d066d441dfaeb26c2ad2f4a0f00763d5` |
| global | `xai-models` · xAI Grok 与多模态模型目录 | https://docs.x.ai/developers/models | 2026-11-24T07:35:56.815Z | 200 | `sha256:c3c3a2bd359df5bd275ccaf3908c0d87ab3f5cb572cbcd8516c458e0c8424bb2` |
| global | `xai-pricing` · xAI xAI API 模型与功能定价 | https://docs.x.ai/developers/pricing | 2026-11-24T07:35:56.928Z | 200 | `sha256:0b43e5abe317859bc78937b9dca6093f5ff9ee03832d5fb131955b337e1c42ed` |
| global | `xai-models-api` · xAI Inference API 模型清单端点（调用需账号 API Key） | https://docs.x.ai/developers/rest-api-reference/inference/models | 2026-11-24T07:35:56.911Z | 200 | `sha256:fa8ebbc9bda427b4a9eabd3e3cdf8ede1546b664d2686105a80de1d72ba0513b` |
| global | `xai-chat-completions` · xAI Chat Completions API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/chat-completions | 2026-11-24T07:35:57.049Z | 200 | `sha256:6e0fc6cee129b0511520035eb31b756b94898a3cef46e2fe9873463c5484b4a5` |
| global | `xai-responses` · xAI Responses API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/responses | 2026-11-24T07:35:57.015Z | 200 | `sha256:c3df54cc89e58d274ce0d5bedd348994d96e415654388898b1e1f7765e35087a` |
| global | `xai-images-api` · xAI Images API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/images | 2026-11-24T07:35:57.150Z | 200 | `sha256:e8ff958abc419b52ffc75f6c7b852976f27994ecf099fbc95b79ce2a56bcff2a` |
| global | `xai-videos-api` · xAI Videos API 参考 | https://docs.x.ai/developers/rest-api-reference/inference/videos | 2026-11-24T07:35:57.150Z | 200 | `sha256:43b8c3d4bc01ab3aa4927c2c17b18d85687371364d8d0436437b9dd8d5494587` |
| global | `xai-batch-api` · xAI Batch API 文档 | https://docs.x.ai/developers/advanced-api-usage/batch-api | 2026-11-24T07:35:57.330Z | 200 | `sha256:a876e803b0e657f3295b378d23237855d25010063e40f1d372fc44186774e601` |
| global | `xai-batches-api-reference` · xAI Batches REST API Schema | https://docs.x.ai/developers/rest-api-reference/inference/batches | 2026-11-24T07:35:57.452Z | 200 | `sha256:061f8d496e68551d144d10ef50d07bdfe32f115ef6917da31d6de0154d63bc94` |
| global | `xai-files-api` · xAI Files API 管理文档 | https://docs.x.ai/developers/files/managing-files | 2026-11-24T07:35:57.604Z | 200 | `sha256:a32a2451cb838a3ce7af9f6c9faf5cd51dbf642e1108bd0a74d40e8d432248fb` |
| global | `xai-collections-api` · xAI Collections 管理 API 参考 | https://docs.x.ai/developers/rest-api-reference/collections/collection | 2026-11-24T07:35:57.594Z | 200 | `sha256:f69cd4a1c6083248f482da1f402c0015cf4da0840c1fa03211daee777e8cef5c` |
| global | `xai-tools-overview` · xAI 服务端工具总览 | https://docs.x.ai/developers/tools/overview | 2026-11-24T07:35:57.699Z | 200 | `sha256:4454ac7fb13009472a45550f4cd29bf7800dcf146b6ae85c65645077d13a2da8` |
| global | `xai-web-search` · xAI Web Search 工具文档 | https://docs.x.ai/developers/tools/web-search | 2026-11-24T07:35:57.698Z | 200 | `sha256:112076794096ad8111271025ba1e26dc51408665db316f71259b9b91fcfd6a87` |
| global | `xai-x-search` · xAI X Search 工具文档 | https://docs.x.ai/developers/tools/x-search | 2026-11-24T07:35:57.809Z | 200 | `sha256:f4fe7f828dda626dd9dadc8adf7d2c2b959729cfc7da91c87fb57afd8864688a` |
| global | `xai-collections-search` · xAI Collections Search 工具与 Responses API 文件搜索 | https://docs.x.ai/developers/tools/collections-search | 2026-11-24T07:35:57.799Z | 200 | `sha256:37905942248ba5a42e4d0153034fa623ec0685a2049e2e1e85d27f37ac9db215` |
| global | `xai-code-execution` · xAI Code Execution 工具输入与处理说明 | https://docs.x.ai/developers/tools/code-execution | 2026-11-24T07:35:57.906Z | 200 | `sha256:1750ed48bafa4729c61e97842270322262269603043ef4d6bab6812973d14cfc` |
| global | `xai-tool-streaming-sync` · xAI 服务端工具调用输入与结果输出方式 | https://docs.x.ai/developers/tools/streaming-and-sync | 2026-11-24T07:35:58.047Z | 200 | `sha256:298effb1665326421d6ba2afd47655d7dc87ff3bb778537eca097e41336e3887` |
| global | `xai-voice` · xAI Voice API 通用能力与价格说明 | https://docs.x.ai/developers/model-capabilities/audio/voice | 2026-11-24T07:35:58.158Z | 200 | `sha256:119aa6307beda51e7737c8d448929424befe561acda3af7f28a9bf1f67fd745b` |
| global | `xai-speech-to-speech` · xAI Speech-to-Speech WebSocket 协议与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech | 2026-11-24T07:35:58.139Z | 200 | `sha256:9ede1e7ccb477a8168bf59c01e2f1e18763b50d1534274ca041e5eb124aa2dfc` |
| global | `xai-speech-to-text` · xAI Speech-to-Text 默认模型与接口 | https://docs.x.ai/developers/models/speech-to-text | 2026-11-24T07:35:58.256Z | 200 | `sha256:4ac70847490171af8298df5dc681984ebee2c1f8c8fd684ed44de4ac21fbaf6c` |
| global | `xai-speech-to-text-guide` · xAI Speech-to-Text 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/speech-to-text | 2026-11-24T07:35:58.243Z | 200 | `sha256:0bfa698d0c9c2cb236ce00d1f0a51463605d33b745c2c01c1950933e9812be83` |
| global | `xai-text-to-speech` · xAI Text-to-Speech 请求、响应与参数 | https://docs.x.ai/developers/model-capabilities/audio/text-to-speech | 2026-11-24T07:35:58.432Z | 200 | `sha256:c524ce270c69eace531ebeeb3f32347b714ee00a65eabf5f975ece9f7c1d0410` |
| global | `xai-regions` · xAI 区域端点与模型可用范围 | https://docs.x.ai/developers/advanced-api-usage/regions | 2026-11-24T07:35:58.348Z | 200 | `sha256:c92f04f2c5d0da0282c1372402f97ff0d3fe53db561007495931b1fa15b41130` |
| global | `xai-imagine` · xAI Imagine API 图像与视频能力说明 | https://docs.x.ai/developers/model-capabilities/imagine | 2026-11-24T07:35:58.564Z | 200 | `sha256:11f0ab3edcbd12cede027388a296aab92016f7705e4cc50e7ea40cd066d617e9` |

## xai 专属证据与核对说明

### xAI 官方通用资料采集候选

- 来源快照：25 份
- 文档观察：25 份；模型 ID 提及：94 条
- 已生成 Offering：9 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- Inference API `/v1/models` 返回认证 API Key 可见型号；本适配器不携带凭证请求该接口。
- 当前供应仅由官方当前定价表中的精确模型价格行证明；目录中的别名、旧型号和文案提及不自动等同于可计价供应。
- US regional endpoint 仅适用于官方明确列出的 grok-4.7 / grok-4.6；global 和 US 区域不合并费率。
- X Subscription 产品订阅与按量 API 费率分开；付费订阅中的 API access 不等于包含 API 调用额度。
- X Subscription 是账号产品订阅，并非 API 按量费率；不能把订阅用量倍率当成 API 价格倍率。
- 本轮未检出固定 Enterprise 价格；官方公开文档只列自助订阅及 Teams 席位价格。
- 本候选未请求需 API Key 的 Models API。
