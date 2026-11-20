# openai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `openai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-20T04:51:53.596Z |
| 前一候选指纹 | `sha256:db3dcbb0171ca56c5223ecc79918d0ed5ed0c817df1be7394415d3d74bf8278d` |
| 本次候选指纹 | `sha256:ce67c6885c907df5c992446629b810db7563b69456465f8d09c168d67a9e845b` |
| 来源快照 | 11 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 108 项，更新 7 项，缺席待核实 0 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 openai-models-all › record count | 更新 | 107 | 108 |

### 文档观察

#### 来源 / openai-models-all

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：gpt-6-family | 差异项（新增；相同内容已省略）：gpt-live-1.1<br>GPT-Live-1.1 |

#### 来源 / openai-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：GPT-Live-1.1 |

#### 来源 / openai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：&#124; Model &#124; Price per minute &#124;<br>&#124; --- &#124; --- &#124;<br>&#124; gpt-live-1 &#124; $0.05 &#124;<br>[GPT-Live-1](https://developers.openai.com/api/docs/models/gpt-live-1) voice sessions are billed per second,<br>without rounding up to a whole minute. Backend model and tool usage is charged<br>separately. | 差异片段（新增；相同内容已省略）：&#124; Model &#124; Active rate &#124; Standby rate &#124;<br>&#124; --- &#124; --- &#124; --- &#124;<br>&#124; gpt-live-1.1 &#124; $0.05 / minute &#124; $0.02 / minute &#124;<br>&#124; gpt-live-1 &#124; $0.05 / minute &#124; $0.02 / minute &#124;<br>GPT-Live bills voice sessions per second.<br>&#124; gpt-realtime-2 &#124; Text &#124; $4.00 &#124; $24.00 &#124; $0.40 &#124; |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：GPT-Live-1 | 差异项（新增；相同内容已省略）：gpt-live-1.1 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：&#124; gpt-live-1 &#124; $0.05 &#124; | 差异项（新增；相同内容已省略）：&#124; gpt-live-1.1 &#124; $0.05 / minute &#124; $0.02 / minute &#124;<br>&#124; gpt-live-1 &#124; $0.05 / minute &#124; $0.02 / minute &#124; |
| tables | 更新 | 列表（21 项）<details><summary>展开完整内容</summary><ul><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Standard pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：列表（14 项）<details><summary>展开完整内容</summary><ul><li>• gpt-6.2-astra<br>• $8.00<br>• $40.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $0.80<br>• $20.00<br>• $40.00</li><li>• gpt-6.2-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00</li><li>• gpt-6-astra<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00</li><li>• gpt-6.1-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00</li><li>• gpt-6.1-terra<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00</li><li>• gpt-6-luna<br>• $0.10<br>• $0.50<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.75<br>• $0.02<br>• $0.25<br>• $0.50</li><li>• gpt-6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00</li><li>• gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00</li><li>• gpt-5.6-terra<br>• $2.00<br>• $12.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $18.00<br>• $0.40<br>• $5.00<br>• $10.00</li><li>• gpt-5.6-luna<br>• $0.20<br>• $1.20<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.80<br>• $0.04<br>• $0.50<br>• $1.00</li><li>• gpt-5.5 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• $10.00<br>• $45.00<br>• $1.00<br>• -<br>• -</li><li>• gpt-5.5-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -</li><li>• gpt-5.4 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -</li><li>• gpt-5.4-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Standard pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.75<br>• $4.50<br>• $0.075</li><li>• gpt-5.4-nano<br>• $0.20<br>• $1.25<br>• $0.02</li><li>• gpt-5.2<br>• $1.75<br>• $14.00<br>• $0.175</li><li>• gpt-5.2-pro<br>• $21.00<br>• $168.00<br>• -</li><li>• gpt-5.1<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5-mini<br>• $0.25<br>• $2.00<br>• $0.025</li><li>• gpt-5-nano<br>• $0.05<br>• $0.40<br>• $0.005</li><li>• gpt-5-pro<br>• $15.00<br>• $120.00<br>• -</li><li>• gpt-4.1<br>• $2.00<br>• $8.00<br>• $0.50</li><li>• gpt-4.1-mini<br>• $0.40<br>• $1.60<br>• $0.10</li><li>• gpt-4o<br>• $2.50<br>• $10.00<br>• $1.25</li><li>• gpt-4o-mini<br>• $0.15<br>• $0.60<br>• $0.075</li><li>• o3-pro<br>• $20.00<br>• $80.00<br>• -</li><li>• o3<br>• $2.00<br>• $8.00<br>• $0.50</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Batch pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：列表（14 项）<details><summary>展开完整内容</summary><ul><li>• gpt-6.2-astra<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00</li><li>• gpt-6.2-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00</li><li>• gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00</li><li>• gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00</li><li>• gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50</li><li>• gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25</li><li>• gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00</li><li>• gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00</li><li>• gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00</li><li>• gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50</li><li>• gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -</li><li>• gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -</li><li>• gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Batch pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375</li><li>• gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01</li><li>• gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875</li><li>• gpt-5.2-pro<br>• $10.50<br>• $84.00<br>• -</li><li>• gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125</li><li>• gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025</li><li>• gpt-5-pro<br>• $7.50<br>• $60.00<br>• -</li><li>• gpt-4.1<br>• $1.00<br>• $4.00<br>• -</li><li>• gpt-4.1-mini<br>• $0.20<br>• $0.80<br>• -</li><li>• gpt-4o<br>• $1.25<br>• $5.00<br>• -</li><li>• gpt-4o-mini<br>• $0.075<br>• $0.30<br>• -</li><li>• o3-pro<br>• $10.00<br>• $40.00<br>• -</li><li>• o3<br>• $1.00<br>• $4.00<br>• -</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Flex pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00<br>• • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50<br>• • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25<br>• • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Flex pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375<br>• • gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01<br>• • gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875<br>• • gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125<br>• • gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025<br>• • o3<br>• $1.00<br>• $4.00<br>• $0.25</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Fast pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6.2-astra<br>• $16.00<br>• $80.00<br>• $0.80<br>• $20.00<br>• $40.00<br>• $32.00<br>• $120.00<br>• $1.60<br>• $40.00<br>• $80.00<br>• • gpt-6.2-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• • gpt-6-astra<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• $40.00<br>• $150.00<br>• $4.00<br>• $50.00<br>• $100.00<br>• • gpt-6.1-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• • gpt-6.1-terra<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• • gpt-6-luna<br>• $0.20<br>• $1.00<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.50<br>• $0.04<br>• $0.50<br>• $1.00<br>• • gpt-6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-sol<br>• $8.00<br>• $40.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $1.60<br>• $20.00<br>• $40.00<br>• • gpt-5.6-terra<br>• $4.00<br>• $24.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $36.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-luna<br>• $0.40<br>• $2.40<br>• $0.04<br>• $0.50<br>• $1.00<br>• $0.80<br>• $3.60<br>• $0.08<br>• $1.00<br>• $2.00<br>• • gpt-5.5 (&lt;272K context length)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Fast pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $1.50<br>• $9.00<br>• $0.15<br>• • gpt-5.2<br>• $3.50<br>• $28.00<br>• $0.35<br>• • gpt-5.1<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5-mini<br>• $0.45<br>• $3.60<br>• $0.045<br>• • gpt-4.1<br>• $3.50<br>• $14.00<br>• $0.875<br>• • gpt-4.1-mini<br>• $0.70<br>• $2.80<br>• $0.175<br>• • gpt-4o<br>• $4.25<br>• $17.00<br>• $2.125<br>• • gpt-4o-mini<br>• $0.25<br>• $1.00<br>• $0.125<br>• • o3<br>• $3.50<br>• $14.00<br>• $0.875</li><li>heading：Ultrafast pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-astra<br>• $60.00<br>• $300.00<br>• $6.00<br>• $75.00<br>• $150.00<br>• $120.00<br>• $450.00<br>• $12.00<br>• $150.00<br>• $300.00<br>• • gpt-6.1-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00</li><li>heading：Ultrafast promotion pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6.2-astra<br>• $24.00<br>• $120.00<br>• $1.20<br>• $30.00<br>• $60.00<br>• $48.00<br>• $180.00<br>• $2.40<br>• $60.00<br>• $120.00<br>• • gpt-6.2-sol<br>• $6.00<br>• $30.00<br>• $0.30<br>• $7.50<br>• $15.00<br>• $12.00<br>• $45.00<br>• $0.60<br>• $15.00<br>• $30.00</li><li>heading：Ultrafast list pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6.2-astra<br>• $48.00<br>• $240.00<br>• $2.40<br>• $60.00<br>• $120.00<br>• $96.00<br>• $360.00<br>• $4.80<br>• $120.00<br>• $240.00<br>• • gpt-6.2-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00</li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• gpt-image-2.6-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.6-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-1.5<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• gpt-image-1.5<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li><li>• gpt-image-1-mini<br>• Image<br>• $2.50<br>• $8.00<br>• $0.25</li><li>• gpt-image-1-mini<br>• Text<br>• $2.00<br>• -<br>• $0.20</li><li>• chatgpt-image-latest<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• chatgpt-image-latest<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• gpt-image-2.6-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.6-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2.6-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.6-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2.5-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.5-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2.5-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.5-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-1.5<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00</li><li>• gpt-image-1.5<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63</li><li>• gpt-image-1-mini<br>• Image<br>• $1.25<br>• $4.00<br>• $0.13</li><li>• gpt-image-1-mini<br>• Text<br>• $1.00<br>• -<br>• $0.10</li><li>• chatgpt-image-latest<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00</li><li>• chatgpt-image-latest<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63</li></ul></details></li><li>heading：Pricing Table data<br>headers：• Model<br>• Price per minute<br>rows：• • gpt-live-1<br>• $0.05</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Grouped Pricing Table data</li><li>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input</li><li>rows：列表（28 项）<details><summary>展开完整内容</summary><ul><li>• gpt-realtime-2.1<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-2.1-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-2.1-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-2.1-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime-2<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-audio-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio-1.5<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-audio-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• -</li><li>• gpt-audio-mini<br>• Text<br>• $0.60<br>• $2.40<br>• -</li><li>• gpt-audio<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Audio<br>• -<br>• $12.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Text<br>• $0.60<br>• -<br>• -</li><li>• tts-1<br>• Text<br>• $15.00 / 1M characters<br>• -<br>• -</li><li>• tts-1-hd<br>• Text<br>• $30.00 / 1M characters<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Use case<br>• Input<br>• Output<br>• Estimated cost<br>rows：• • gpt-realtime-translate<br>• Live translation<br>• -<br>• -<br>• $0.034 / minute<br>• • gpt-live-transcribe<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-realtime-whisper<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-transcribe<br>• Transcription<br>• -<br>• -<br>• $0.0045 / minute<br>• • gpt-4o-transcribe<br>• Transcription<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • gpt-4o-mini-transcribe<br>• Transcription<br>• $1.25<br>• $5.00<br>• $0.003 / minute<br>• • gpt-4o-transcribe-diarize<br>• Transcription + diarization<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • Whisper<br>• Transcription<br>• -<br>• -<br>• $0.006 / minute</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Grouped Pricing Table data</li><li>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>• 30m write<br>• 12h write</li><li>rows：列表（23 项）<details><summary>展开完整内容</summary><ul><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-6-cyber (short context)<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-6-cyber (long context)<br>• $40.00<br>• $150.00<br>• $4.00<br>• -<br>• -</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.6-cyber (short context)<br>• $12.50<br>• $75.00<br>• $1.25<br>• $15.625<br>• $31.25</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.6-cyber (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.5-cyber-preview (short context)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.5-cyber-preview (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-6-rosalind (short context)<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-6-rosalind (long context)<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-research (short context)<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-research (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-discovery (short context)<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-discovery (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Legal model configurations<br>• gpt-6.2-astra-law (short context)<br>• $8.00<br>• $40.00<br>• $0.40<br>• $10.00<br>• $20.00</li><li>• Legal model configurations<br>• gpt-6.2-astra-law (long context)<br>• $16.00<br>• $60.00<br>• $0.80<br>• $20.00<br>• $40.00</li><li>• Legal model configurations<br>• gpt-6-astra-law (short context)<br>• $10.00<br>• $50.00<br>• $1.00<br>• -<br>• -</li><li>• Legal model configurations<br>• gpt-6-astra-law (long context)<br>• $20.00<br>• $75.00<br>• $2.00<br>• -<br>• -</li><li>• ChatGPT<br>• chat-latest<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -</li><li>• Codex<br>• gpt-5.3-codex<br>• $1.75<br>• $14.00<br>• $0.175<br>• -<br>• -</li><li>• Search<br>• gpt-5-search-api<br>• $1.25<br>• $10.00<br>• $0.125<br>• -<br>• -</li><li>• Embedding<br>• text-embedding-3-small<br>• $0.02<br>• -<br>• -<br>• -<br>• -</li><li>• Embedding<br>• text-embedding-3-large<br>• $0.13<br>• -<br>• -<br>• -<br>• -</li><li>• Embedding<br>• text-embedding-ada-002<br>• $0.10<br>• -<br>• -<br>• -<br>• -</li><li>• Moderation<br>• omni-moderation-latest<br>• Free<br>• -<br>• -<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • Codex<br>• gpt-5.3-codex<br>• $3.50<br>• $28.00<br>• $0.35</li><li>heading：Grouped Pricing Table data<br>headers：• Tool<br>• Details<br>• Pricing<br>rows：• • Web search<br>• Web search (incl. images)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (reasoning models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (other models)<br>• $25.00 / 1k calls + Search content tokens are free.<br>• • Containers<br>• Hosted Shell and Code Interpreter<br>• 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container<br>• • File search<br>• Storage<br>• $0.10 / GB per day 1 GB free<br>• • File search<br>• Tool call<br>• $2.50 / 1k calls<br>• • Agent Kit<br>• ChatKit file and image upload storage<br>• $0.10 / GB-day 1 GB free</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $3.00<br>• $12.00<br>• $0.75<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.80<br>• $3.20<br>• $0.20<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $3.75<br>• $15.00<br>• $1.875<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.30<br>• $1.20<br>• $0.15</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $1.50<br>• $6.00<br>• $0.50<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.40<br>• $1.60<br>• $0.10<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $2.225<br>• $12.50<br>• $0.90<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.15<br>• $0.60<br>• $0.075</li></ul></details> | 列表（21 项）<details><summary>展开完整内容</summary><ul><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Standard pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：列表（14 项）<details><summary>展开完整内容</summary><ul><li>• gpt-6.2-astra<br>• $8.00<br>• $40.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $0.80<br>• $20.00<br>• $40.00</li><li>• gpt-6.2-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00</li><li>• gpt-6-astra<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00</li><li>• gpt-6.1-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00</li><li>• gpt-6.1-terra<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00</li><li>• gpt-6-luna<br>• $0.10<br>• $0.50<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.75<br>• $0.02<br>• $0.25<br>• $0.50</li><li>• gpt-6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00</li><li>• gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00</li><li>• gpt-5.6-terra<br>• $2.00<br>• $12.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $18.00<br>• $0.40<br>• $5.00<br>• $10.00</li><li>• gpt-5.6-luna<br>• $0.20<br>• $1.20<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.80<br>• $0.04<br>• $0.50<br>• $1.00</li><li>• gpt-5.5 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• $10.00<br>• $45.00<br>• $1.00<br>• -<br>• -</li><li>• gpt-5.5-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -</li><li>• gpt-5.4 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -</li><li>• gpt-5.4-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Standard pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.75<br>• $4.50<br>• $0.075</li><li>• gpt-5.4-nano<br>• $0.20<br>• $1.25<br>• $0.02</li><li>• gpt-5.2<br>• $1.75<br>• $14.00<br>• $0.175</li><li>• gpt-5.2-pro<br>• $21.00<br>• $168.00<br>• -</li><li>• gpt-5.1<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5-mini<br>• $0.25<br>• $2.00<br>• $0.025</li><li>• gpt-5-nano<br>• $0.05<br>• $0.40<br>• $0.005</li><li>• gpt-5-pro<br>• $15.00<br>• $120.00<br>• -</li><li>• gpt-4.1<br>• $2.00<br>• $8.00<br>• $0.50</li><li>• gpt-4.1-mini<br>• $0.40<br>• $1.60<br>• $0.10</li><li>• gpt-4o<br>• $2.50<br>• $10.00<br>• $1.25</li><li>• gpt-4o-mini<br>• $0.15<br>• $0.60<br>• $0.075</li><li>• o3-pro<br>• $20.00<br>• $80.00<br>• -</li><li>• o3<br>• $2.00<br>• $8.00<br>• $0.50</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Batch pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：列表（14 项）<details><summary>展开完整内容</summary><ul><li>• gpt-6.2-astra<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00</li><li>• gpt-6.2-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00</li><li>• gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00</li><li>• gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00</li><li>• gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50</li><li>• gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25</li><li>• gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00</li><li>• gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00</li><li>• gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00</li><li>• gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50</li><li>• gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -</li><li>• gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -</li><li>• gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Batch pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375</li><li>• gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01</li><li>• gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875</li><li>• gpt-5.2-pro<br>• $10.50<br>• $84.00<br>• -</li><li>• gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125</li><li>• gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025</li><li>• gpt-5-pro<br>• $7.50<br>• $60.00<br>• -</li><li>• gpt-4.1<br>• $1.00<br>• $4.00<br>• -</li><li>• gpt-4.1-mini<br>• $0.20<br>• $0.80<br>• -</li><li>• gpt-4o<br>• $1.25<br>• $5.00<br>• -</li><li>• gpt-4o-mini<br>• $0.075<br>• $0.30<br>• -</li><li>• o3-pro<br>• $10.00<br>• $40.00<br>• -</li><li>• o3<br>• $1.00<br>• $4.00<br>• -</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Flex pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00<br>• • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50<br>• • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25<br>• • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Flex pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375<br>• • gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01<br>• • gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875<br>• • gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125<br>• • gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025<br>• • o3<br>• $1.00<br>• $4.00<br>• $0.25</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Fast pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6.2-astra<br>• $16.00<br>• $80.00<br>• $0.80<br>• $20.00<br>• $40.00<br>• $32.00<br>• $120.00<br>• $1.60<br>• $40.00<br>• $80.00<br>• • gpt-6.2-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• • gpt-6-astra<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• $40.00<br>• $150.00<br>• $4.00<br>• $50.00<br>• $100.00<br>• • gpt-6.1-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• • gpt-6.1-terra<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• • gpt-6-luna<br>• $0.20<br>• $1.00<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.50<br>• $0.04<br>• $0.50<br>• $1.00<br>• • gpt-6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-sol<br>• $8.00<br>• $40.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $1.60<br>• $20.00<br>• $40.00<br>• • gpt-5.6-terra<br>• $4.00<br>• $24.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $36.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-luna<br>• $0.40<br>• $2.40<br>• $0.04<br>• $0.50<br>• $1.00<br>• $0.80<br>• $3.60<br>• $0.08<br>• $1.00<br>• $2.00<br>• • gpt-5.5 (&lt;272K context length)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Fast pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $1.50<br>• $9.00<br>• $0.15<br>• • gpt-5.2<br>• $3.50<br>• $28.00<br>• $0.35<br>• • gpt-5.1<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5-mini<br>• $0.45<br>• $3.60<br>• $0.045<br>• • gpt-4.1<br>• $3.50<br>• $14.00<br>• $0.875<br>• • gpt-4.1-mini<br>• $0.70<br>• $2.80<br>• $0.175<br>• • gpt-4o<br>• $4.25<br>• $17.00<br>• $2.125<br>• • gpt-4o-mini<br>• $0.25<br>• $1.00<br>• $0.125<br>• • o3<br>• $3.50<br>• $14.00<br>• $0.875</li><li>heading：Ultrafast pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-astra<br>• $60.00<br>• $300.00<br>• $6.00<br>• $75.00<br>• $150.00<br>• $120.00<br>• $450.00<br>• $12.00<br>• $150.00<br>• $300.00<br>• • gpt-6.1-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00</li><li>heading：Ultrafast promotion pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6.2-astra<br>• $24.00<br>• $120.00<br>• $1.20<br>• $30.00<br>• $60.00<br>• $48.00<br>• $180.00<br>• $2.40<br>• $60.00<br>• $120.00<br>• • gpt-6.2-sol<br>• $6.00<br>• $30.00<br>• $0.30<br>• $7.50<br>• $15.00<br>• $12.00<br>• $45.00<br>• $0.60<br>• $15.00<br>• $30.00</li><li>heading：Ultrafast list pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6.2-astra<br>• $48.00<br>• $240.00<br>• $2.40<br>• $60.00<br>• $120.00<br>• $96.00<br>• $360.00<br>• $4.80<br>• $120.00<br>• $240.00<br>• • gpt-6.2-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00</li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• gpt-image-2.6-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.6-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-1.5<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• gpt-image-1.5<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li><li>• gpt-image-1-mini<br>• Image<br>• $2.50<br>• $8.00<br>• $0.25</li><li>• gpt-image-1-mini<br>• Text<br>• $2.00<br>• -<br>• $0.20</li><li>• chatgpt-image-latest<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• chatgpt-image-latest<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• gpt-image-2.6-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.6-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2.6-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.6-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2.5-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.5-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2.5-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2.5-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-2<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00</li><li>• gpt-image-2<br>• Text<br>• $2.50<br>• -<br>• $0.625</li><li>• gpt-image-1.5<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00</li><li>• gpt-image-1.5<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63</li><li>• gpt-image-1-mini<br>• Image<br>• $1.25<br>• $4.00<br>• $0.13</li><li>• gpt-image-1-mini<br>• Text<br>• $1.00<br>• -<br>• $0.10</li><li>• chatgpt-image-latest<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00</li><li>• chatgpt-image-latest<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63</li></ul></details></li><li>heading：Pricing Table data<br>headers：• Model<br>• Active rate<br>• Standby rate<br>rows：• • gpt-live-1.1<br>• $0.05 / minute<br>• $0.02 / minute<br>• • gpt-live-1<br>• $0.05 / minute<br>• $0.02 / minute</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Grouped Pricing Table data</li><li>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input</li><li>rows：列表（28 项）<details><summary>展开完整内容</summary><ul><li>• gpt-realtime-2.1<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-2.1-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-2.1-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-2.1-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime-2<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-audio-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio-1.5<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-audio-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• -</li><li>• gpt-audio-mini<br>• Text<br>• $0.60<br>• $2.40<br>• -</li><li>• gpt-audio<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Audio<br>• -<br>• $12.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Text<br>• $0.60<br>• -<br>• -</li><li>• tts-1<br>• Text<br>• $15.00 / 1M characters<br>• -<br>• -</li><li>• tts-1-hd<br>• Text<br>• $30.00 / 1M characters<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Use case<br>• Input<br>• Output<br>• Estimated cost<br>rows：• • gpt-realtime-translate<br>• Live translation<br>• -<br>• -<br>• $0.034 / minute<br>• • gpt-live-transcribe<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-realtime-whisper<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-transcribe<br>• Transcription<br>• -<br>• -<br>• $0.0045 / minute<br>• • gpt-4o-transcribe<br>• Transcription<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • gpt-4o-mini-transcribe<br>• Transcription<br>• $1.25<br>• $5.00<br>• $0.003 / minute<br>• • gpt-4o-transcribe-diarize<br>• Transcription + diarization<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • Whisper<br>• Transcription<br>• -<br>• -<br>• $0.006 / minute</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Grouped Pricing Table data</li><li>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>• 30m write<br>• 12h write</li><li>rows：列表（23 项）<details><summary>展开完整内容</summary><ul><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-6-cyber (short context)<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-6-cyber (long context)<br>• $40.00<br>• $150.00<br>• $4.00<br>• -<br>• -</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.6-cyber (short context)<br>• $12.50<br>• $75.00<br>• $1.25<br>• $15.625<br>• $31.25</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.6-cyber (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.5-cyber-preview (short context)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -</li><li>• Cyber — Trusted Access: [Daybreak](https://openai.com/daybreak/)<br>• gpt-5.5-cyber-preview (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-6-rosalind (short context)<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-6-rosalind (long context)<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-research (short context)<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-research (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-discovery (short context)<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -</li><li>• Life Sciences — Trusted Access: [Rosalind](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)<br>• gpt-rosalind-discovery (long context)<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>• Legal model configurations<br>• gpt-6.2-astra-law (short context)<br>• $8.00<br>• $40.00<br>• $0.40<br>• $10.00<br>• $20.00</li><li>• Legal model configurations<br>• gpt-6.2-astra-law (long context)<br>• $16.00<br>• $60.00<br>• $0.80<br>• $20.00<br>• $40.00</li><li>• Legal model configurations<br>• gpt-6-astra-law (short context)<br>• $10.00<br>• $50.00<br>• $1.00<br>• -<br>• -</li><li>• Legal model configurations<br>• gpt-6-astra-law (long context)<br>• $20.00<br>• $75.00<br>• $2.00<br>• -<br>• -</li><li>• ChatGPT<br>• chat-latest<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -</li><li>• Codex<br>• gpt-5.3-codex<br>• $1.75<br>• $14.00<br>• $0.175<br>• -<br>• -</li><li>• Search<br>• gpt-5-search-api<br>• $1.25<br>• $10.00<br>• $0.125<br>• -<br>• -</li><li>• Embedding<br>• text-embedding-3-small<br>• $0.02<br>• -<br>• -<br>• -<br>• -</li><li>• Embedding<br>• text-embedding-3-large<br>• $0.13<br>• -<br>• -<br>• -<br>• -</li><li>• Embedding<br>• text-embedding-ada-002<br>• $0.10<br>• -<br>• -<br>• -<br>• -</li><li>• Moderation<br>• omni-moderation-latest<br>• Free<br>• -<br>• -<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • Codex<br>• gpt-5.3-codex<br>• $3.50<br>• $28.00<br>• $0.35</li><li>heading：Grouped Pricing Table data<br>headers：• Tool<br>• Details<br>• Pricing<br>rows：• • Web search<br>• Web search (incl. images)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (reasoning models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (other models)<br>• $25.00 / 1k calls + Search content tokens are free.<br>• • Containers<br>• Hosted Shell and Code Interpreter<br>• 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container<br>• • File search<br>• Storage<br>• $0.10 / GB per day 1 GB free<br>• • File search<br>• Tool call<br>• $2.50 / 1k calls<br>• • Agent Kit<br>• ChatKit file and image upload storage<br>• $0.10 / GB-day 1 GB free</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $3.00<br>• $12.00<br>• $0.75<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.80<br>• $3.20<br>• $0.20<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $3.75<br>• $15.00<br>• $1.875<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.30<br>• $1.20<br>• $0.15</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $1.50<br>• $6.00<br>• $0.50<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.40<br>• $1.60<br>• $0.10<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $2.225<br>• $12.50<br>• $0.90<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.15<br>• $0.60<br>• $0.075</li></ul></details> |

### 市场 / global

#### Model / chatgpt-image-latest

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 chatgpt-image-latest › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 chatgpt-image-latest › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4.1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4o-mini-tts

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4o-mini-tts › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini-tts › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4o-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4o-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-4o

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-4o › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-4o › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5-nano › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-nano › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.2-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.2-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.2 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4-nano

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4-nano › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-nano › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.4

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.4 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.4 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.5-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.5-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.6-luna

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-luna › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-luna › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.6-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5.6-terra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-terra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-terra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6-astra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6-astra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-astra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6-luna

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6-luna › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-luna › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6.1-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6.1-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6.1-terra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6.1-terra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.1-terra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6.2-astra

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6.2-astra › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.2-astra › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-6.2-sol

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-6.2-sol › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6.2-sol › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-audio-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-audio-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-1.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-audio-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-audio-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-audio

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-audio › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-audio › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-1.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.5-flare

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.5-flare › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-flare › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.5-sunburst

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.5-sunburst › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.5-sunburst › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.6-flare

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.6-flare › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-flare › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2.6-sunburst

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2.6-sunburst › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2.6-sunburst › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-image-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-image-2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-image-2 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-live-1.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-Live-1.1 |
| operations | 新增 | 未记录 | 空列表 |
| prices | 新增 | 未记录 | 空列表 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-live-1.1 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / gpt-realtime-1.5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-1.5 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-1.5 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-2.1-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-2.1-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-2.1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-2.1 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2.1 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-2 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-2 › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime-mini

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime-mini › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime-mini › operation ref | 新增 | 未记录 | 未记录 |

#### Model / gpt-realtime

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-realtime › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-realtime › operation ref | 新增 | 未记录 | 未记录 |

#### Model / o3-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 o3-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3-pro › operation ref | 新增 | 未记录 | 未记录 |

#### Model / o3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 o3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 o3 › operation ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `openai-models` · OpenAI API 模型指南（含产品范围说明） | https://developers.openai.com/api/docs/models.md | 2026-11-20T04:51:53.017Z | 200 | `sha256:17ccdfe4098e838f457e2b6b104dd7ba934382220db78f7e11946d90b1af0687` |
| global | `openai-models-all` · OpenAI 通用完整模型目录与状态标签 | https://developers.openai.com/api/docs/models/all | 2026-11-20T04:51:53.087Z | 200 | `sha256:500fb2f0912d0a27a296bc8768b256a3f9fa742e98879676d544269939cd0863` |
| global | `openai-pricing` · OpenAI API 模型与功能定价 | https://developers.openai.com/api/docs/pricing.md | 2026-11-20T04:51:53.142Z | 200 | `sha256:0adbd22327247628fd7f3e70a0e91617c37c7bff0d456d16dc966a1d71a56a1d` |
| global | `openai-models-list-api` · OpenAI Models API 清单端点说明（调用需账号 API Key） | https://developers.openai.com/api/reference/resources/models/methods/list | 2026-11-19T05:00:29.592Z | 200 | `sha256:b5e088c1c0f01400268144c559f1a985a2fc99b391452e83f6fa0d0899f9c44d` |
| global | `openai-responses-api` · OpenAI Responses API 通用端点文档 | https://developers.openai.com/api/docs/guides/text | 2026-11-18T05:07:05.815Z | 200 | `sha256:c7d30a352fe6357189d27d339e1742c4cbc4061dd94ad5ce918aa1034ab1d3ea` |
| global | `openai-web-search` · OpenAI Responses API Web Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses | 2026-11-18T05:07:05.826Z | 200 | `sha256:45441bb387f7a2b39b2251c8c2e4a3816c15e8f59cca5cfddbe362eba4b9d731` |
| global | `openai-file-search` · OpenAI Responses API File Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-file-search.md | 2026-11-18T05:07:05.862Z | 200 | `sha256:c3058f224cef0b204ce3f7762059344a6a7b4da52dfe22e8ca4132ae56eff608` |
| global | `openai-code-interpreter` · OpenAI Responses API Code Interpreter 输入与输出 | https://developers.openai.com/api/docs/guides/tools-code-interpreter | 2026-11-18T05:07:05.856Z | 200 | `sha256:74e75aa8d907b9f58172510bc0dfc10a53a34ec9ce3e5bc91e7b706c6af34c21` |
| global | `openai-image-generation` · OpenAI Responses API Image Generation 工具文档 | https://developers.openai.com/api/docs/guides/image-generation.md?generate-images-api=responses | 2026-11-18T05:07:05.902Z | 200 | `sha256:8eeb505c3b50ac3bbd17f72b066797971ce4b1b3285cddb3e480426abd8a4de5` |
| global | `openai-audio-api` · OpenAI Audio API 通用能力与端点文档 | https://developers.openai.com/api/docs/guides/audio | 2026-11-05T04:13:48.936Z | 200 | `sha256:306f3d9fb7bab2d692a1ee37d261e531e9ddbd4f5030890921b5080d60b5af30` |
| global | `openai-chatgpt-pricing` · OpenAI ChatGPT 与 Codex 套餐定价 | https://learn.chatgpt.com/docs/pricing.md?site_locale=en | 2026-11-20T04:51:53.596Z | 200 | `sha256:83c9e06d02f40b0974ccefc151a30d11420bad88bb6128e75f948c1956ebc42d` |

## openai 专属证据与核对说明

### OpenAI 官方通用资料采集候选

- 来源快照：11 份
- 文档观察：11 份；模型 ID 提及：293 条
- 已生成 Offering：108 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- GET /v1/models 返回认证账号可见范围，不调用需 Key 的真实接口。
- 公开模型文档混有 API、ChatGPT、预览/弃用与推荐模型范围；候选只记录文档 ID 提及，不能用它充当可调用全集。
- 模型目录和价格按精确 Provider 模型 ID 记录；规范模型规格由维护者手工维护。
