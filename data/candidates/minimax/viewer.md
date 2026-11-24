# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `regional_current_supply_observation` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-24T07:35:30.529Z |
| 前一候选指纹 | `sha256:f8d5ff24d90af9c59378bf1481fe6805c222ce05767ef91d9357191834f3a1ce` |
| 本次候选指纹 | `sha256:e275a0d54016197a3c080f1c776871aedf804771ba247c511316dc815fa2255a` |
| 来源快照 | 28 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 289 项，更新 1 项，缺席待核实 0 项。

## 字段变化

### 记录 global

#### Record / global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| models › 记录 MiniMax-H3-MG › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-MG |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.10 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.10 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | — |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-MG\<br>      Provider: MachGen<br>• 2K<br>• t2v / i2v<br>• $0.10<br>• —<br>• Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.12 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.12 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.12 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.12 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-MG\<br>      Provider: MachGen<br>• 2K<br>• reference<br>• $0.12<br>• $0.12<br>• Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | — |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-MG\<br>      Provider: MachGen<br>• 768P<br>• t2v / i2v<br>• $0.04<br>• —<br>• Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.06 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.06 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.06 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 金额（amount_decimal） | 新增 | 未记录 | 0 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • MiniMax-H3-MG\<br>      Provider: MachGen<br>• 768P<br>• reference<br>• $0.06<br>• $0.06<br>• Free |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 5 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 5 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 5 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 5 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 5 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-MG › 价格记录（pricing_rows） › 第 5 项 › values | 新增 | 未记录 | • MiniMax-H3-MG<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-MG › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-MG › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Max-Turbo › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-Max-Turbo |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | — |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 768P<br>• t2v / i2v<br>• $0.04<br>• —<br>• $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.08 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.08 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.12 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.12 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 768P<br>• reference<br>• $0.08<br>• $0.12<br>• $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.025 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.025 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | — |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 480P<br>• t2v / i2v<br>• $0.025<br>• —<br>• $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.05 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.05 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.04 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.04 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 4 项 › values | 新增 | 未记录 | • MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 480P<br>• reference<br>• $0.05<br>• $0.04<br>• $0.06\<br>      first 2 free |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 5 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 5 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 5 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 5 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 5 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-Max-Turbo › 价格记录（pricing_rows） › 第 5 项 › values | 新增 | 未记录 | • MiniMax-H3-Max-Turbo<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-Max-Turbo › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-Max-Turbo › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-Max › 价格记录（pricing_rows） | 更新 | 列表（3 项）<details><summary>展开完整内容</summary><ul><li>section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 768P<br>• $0.08<br>• $0.143<br>• $0.074<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.143<br>source header：Input Video\<br>      per second<br>source value：$0.143<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.074<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.074</li><li>section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 480P<br>• $0.05<br>• $0.0553<br>• $0.074<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video\<br>      per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.0553<br>source header：Input Video\<br>      per second<br>source value：$0.0553<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.074<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.074</li><li>section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Max<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li></ul></details> | 列表（3 项）<details><summary>展开完整内容</summary><ul><li>section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max\<br>      Provider: fal<br>• 768P<br>• All<br>• $0.08<br>• $0.143<br>• $0.074\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.143<br>source header：Input Video\<br>      per second<br>source value：$0.143<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.074\<br>      first 2 free</li><li>section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max\<br>      Provider: fal<br>• 480P<br>• All<br>• $0.05<br>• $0.0553<br>• $0.074\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video\<br>      per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.0553<br>source header：Input Video\<br>      per second<br>source value：$0.0553<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.074\<br>      first 2 free</li><li>section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Max<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li></ul></details> |
| models › 记录 MiniMax-H3-NC › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-NC |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.03 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.03 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.03 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.03 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.015\<br>      first 5 free |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-NC\<br>      Provider: Nunchux AI<br>• 768P<br>• All<br>• $0.03<br>• $0.03<br>• $0.015\<br>      first 5 free |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.022 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.022 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.022 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.022 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.011\<br>      first 5 free |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-NC\<br>      Provider: Nunchux AI<br>• 480P<br>• All<br>• $0.022<br>• $0.022<br>• $0.011\<br>      first 5 free |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 3 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 3 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 3 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 3 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-NC › 价格记录（pricing_rows） › 第 3 项 › values | 新增 | 未记录 | • MiniMax-H3-NC<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-NC › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-NC › source listing | 新增 | 未记录 | price_listed |
| models › 记录 MiniMax-H3-RH › 模型 ID（model_id） | 新增 | 未记录 | MiniMax-H3-RH |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › currency symbol | 新增 | 未记录 | $ |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.038 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | generated_video |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source header | 新增 | 未记录 | Output Video\<br>      per second |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › source value | 新增 | 未记录 | $0.038 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 金额（amount_decimal） | 新增 | 未记录 | 0.038 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | input_video |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source header | 新增 | 未记录 | Input Video\<br>      per second |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › source value | 新增 | 未记录 | $0.038 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_second |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | input_image |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › quantity | 新增 | 未记录 | 1 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source header | 新增 | 未记录 | Input Image\<br>      per image |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › source value | 新增 | 未记录 | $0.04\<br>      first 5 free |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › normalized rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_image |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 1 项 › values | 新增 | 未记录 | • MiniMax-H3-RH\<br>      Provider: RunningHub<br>• 480P<br>• All<br>• $0.038<br>• $0.038<br>• $0.04\<br>      first 5 free |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 2 项 › currency code | 新增 | 未记录 | USD |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 2 项 › currency evidence | 新增 | 未记录 | All prices are in USD. |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 2 项 › normalized rates | 新增 | 未记录 | 空列表 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 2 项 › section | 新增 | 未记录 | 空字符串 |
| models › 记录 MiniMax-H3-RH › 价格记录（pricing_rows） › 第 2 项 › values | 新增 | 未记录 | • MiniMax-H3-RH<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio |
| models › 记录 MiniMax-H3-RH › source category | 新增 | 未记录 | 官方价格表列示 |
| models › 记录 MiniMax-H3-RH › source listing | 新增 | 未记录 | price_listed |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-24T07:35:26.575Z | 200 | `sha256:ad27a06064bd5ea1130bc38ed6c95383a363e1e9485174c96310dde2c664d3dc` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-24T07:35:24.749Z | 200 | `sha256:27173a027ea69cf5b1e73a2bf530be892ed269282a8d5e7f80436406572d2b6c` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-24T07:35:26.358Z | 200 | `sha256:685b347f6fbf1fdda56c350275fe52c68de05e78e9d2d63d0a8d54cf8c2ed8ac` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-24T07:35:29.741Z | 200 | `sha256:1d928087e3c926cf6e747608c3819c693d69705656ecaa6936cc3c42238b4615` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-24T07:35:26.739Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-24T07:35:26.654Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-24T07:35:26.988Z | 200 | `sha256:538777042aff36e24ed741aad44684a8915b4717b62fbe216ccbdc33093d4c89` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-24T07:35:27.369Z | 200 | `sha256:53ce46f2a70e47bcbc4e5682f142ab34679c883af86aff8a6fe69f7baf2c555f` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-24T07:35:26.687Z | 200 | `sha256:11a5c466ef46e13669889e664274c3f9eb65baf9ff40984a205b81813ae2d268` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-24T07:35:26.737Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-24T07:35:29.227Z | 200 | `sha256:a5ff9b3a2e27abad1c253a53a554f416a7b9d13c42e1709ecf09bb61987c397b` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-24T07:35:26.941Z | 200 | `sha256:11b6a9b800ded4ce14deed175239816d5149053f3ad839cd282506deab7e20c1` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-24T07:35:30.529Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-24T07:35:27.972Z | 200 | `sha256:fca22091669b76dbb73ca889757e9c722643fd371b917a5520c2218c6885a3d0` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-24T07:35:27.216Z | 200 | `sha256:95b089500d8fa4854e03ee2621548845f7552c03104e46bcf9a96ca79cb846c8` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-24T07:35:26.585Z | 200 | `sha256:0183792f121a53fe2ad6bb724a4fc464b20543959175d85a707025884f37a96d` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-24T07:35:26.632Z | 200 | `sha256:52f32aa591e77cf6ae81ce4007cd01c5e53ca46264eecc0dbfc5214b5be44c39` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-24T07:35:26.612Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-24T07:35:26.597Z | 200 | `sha256:d740427ec5835371c08b27b7a340721df61f67fceaff0221b0d8d3ca0ee486c0` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-24T07:35:26.542Z | 200 | `sha256:90cd6051d407dc84ff953240d12397ad284fc5de04472765ef1246fe56cdb5eb` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-24T07:35:26.620Z | 200 | `sha256:7f177084da0f2bf8b3711fc8669fb4e6c0f400cc307dad3d1f1736ad6c122cb9` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-24T07:35:26.621Z | 200 | `sha256:e032377205c22f839667b23c8ee96e46d80d5c37c95352e0ca9b4fab6970b411` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-24T07:35:26.802Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-24T07:35:26.663Z | 200 | `sha256:ea7daead1dacc0dd3702ff481a97260627d1ef3dea45e9f4c3a0000d9364c65d` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-24T07:35:26.855Z | 200 | `sha256:e1e4261e9ea13303d8e334f6b19b6d2ca7b1c7e44bda56658b95ce5124257485` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-24T07:35:26.738Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-24T07:35:26.818Z | 200 | `sha256:6b0f2ce19b483990dbb33e10a0e55ac4a338dd3fa3d1a0c8059b2cd3d475ed0c` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-24T07:35:26.675Z | 200 | `sha256:5066155c189b75927fd7cf910a7c7044398cb5441468797f0cdd71fb6c602484` |

## minimax 专属证据与核对说明

### MiniMax 数据变更评审表

- Provider：`minimax`
- 候选类型：`regional_current_supply_observation`
- 观察时间（UTC）：2026-11-24T07:35:30.529Z
- 候选指纹：`sha256:e275a0d54016197a3c080f1c776871aedf804771ba247c511316dc815fa2255a`
- 前一候选指纹：`sha256:f8d5ff24d90af9c59378bf1481fe6805c222ce05767ef91d9357191834f3a1ce`
- 新增字段：435 项；更新字段：18 项；缺席待核实：2 项

#### 本次变化

仅列出相对上一份已观察数据新增或变化的字段，共 455 项。新模型或此前未取得的字段会完整列出本次取得的内容；未变化的数据不重复展开。列表缺席只表示待核实，不构成退役结论。

| 变化 | 市场 | 模型 ID | 字段 | 旧值 | 新值 |
|---|---|---|---|---|---|
| 新增 | global | MiniMax-H3-MG | model.model&#95;id | 未记录 | MiniMax-H3-MG |
| 新增 | global | MiniMax-H3-MG | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-MG | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-MG\<br>      Provider: MachGen |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 2K |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | t2v / i2v |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.10 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | — |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.values&#91;5&#93; | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.10 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.10 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | — |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-MG\<br>      Provider: MachGen |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 2K |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | reference |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.12 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.12 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.values&#91;5&#93; | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.12 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.12 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.12 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.12 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-MG\<br>      Provider: MachGen |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | t2v / i2v |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | — |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.values&#91;5&#93; | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | — |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-MG\<br>      Provider: MachGen |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | reference |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.values&#91;3&#93; | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.values&#91;4&#93; | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.values&#91;5&#93; | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.06 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.06 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.06 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 未记录 | 0 |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | Free |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-MG |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-MG | model.pricing&#95;rows&#91;4&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | Output Video\<br>      per second | Task Type |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | Input Video\<br>      per second | Output Video\<br>      per second |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | Input Image\<br>      per image\<br>      beyond free quota | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 消失（待核实） | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 0.074 | 未记录 |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | Input Image\<br>      per image\<br>      beyond free quota | Input Image\<br>      per image |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | &#36;0.074 | &#36;0.074\<br>      first 2 free |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation. | MiniMax-H3-Max\<br>      Provider: fal |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | &#36;0.08 | All |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | &#36;0.143 | &#36;0.08 |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | &#36;0.074 | &#36;0.143 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;0&#93;.values&#91;5&#93; | 未记录 | &#36;0.074\<br>      first 2 free |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | Output Video\<br>      per second | Task Type |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | Input Video\<br>      per second | Output Video\<br>      per second |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | Input Image\<br>      per image\<br>      beyond free quota | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 消失（待核实） | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.amount&#95;decimal | 0.074 | 未记录 |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | Input Image\<br>      per image\<br>      beyond free quota | Input Image\<br>      per image |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | &#36;0.074 | &#36;0.074\<br>      first 2 free |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation. | MiniMax-H3-Max\<br>      Provider: fal |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | &#36;0.05 | All |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | &#36;0.0553 | &#36;0.05 |
| 更新 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | &#36;0.074 | &#36;0.0553 |
| 新增 | global | MiniMax-H3-Max | model.pricing&#95;rows&#91;1&#93;.values&#91;5&#93; | 未记录 | &#36;0.074\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.model&#95;id | 未记录 | MiniMax-H3-Max-Turbo |
| 新增 | global | MiniMax-H3-Max-Turbo | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max-Turbo\<br>      Provider: fal |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | t2v / i2v |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | — |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.values&#91;5&#93; | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | — |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max-Turbo\<br>      Provider: fal |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | reference |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.12 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.values&#91;5&#93; | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.08 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.08 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.12 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.12 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max-Turbo\<br>      Provider: fal |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | t2v / i2v |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | — |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.values&#91;5&#93; | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.025 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.025 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | — |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max-Turbo\<br>      Provider: fal |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.values&#91;2&#93; | 未记录 | reference |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.values&#91;3&#93; | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.values&#91;4&#93; | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.values&#91;5&#93; | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.05 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.05 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.04 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.04 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;3&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.06\<br>      first 2 free |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-Max-Turbo |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-Max-Turbo | model.pricing&#95;rows&#91;4&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3-NC | model.model&#95;id | 未记录 | MiniMax-H3-NC |
| 新增 | global | MiniMax-H3-NC | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-NC | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-NC\<br>      Provider: Nunchux AI |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 768P |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | All |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.values&#91;5&#93; | 未记录 | &#36;0.015\<br>      first 5 free |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.03 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.03 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.03 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.015\<br>      first 5 free |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-NC\<br>      Provider: Nunchux AI |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | All |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | &#36;0.022 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | &#36;0.022 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.values&#91;5&#93; | 未记录 | &#36;0.011\<br>      first 5 free |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.022 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.022 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.022 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.022 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.011\<br>      first 5 free |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-NC |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-NC | model.pricing&#95;rows&#91;2&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |
| 新增 | global | MiniMax-H3-RH | model.model&#95;id | 未记录 | MiniMax-H3-RH |
| 新增 | global | MiniMax-H3-RH | model.source&#95;category | 未记录 | 官方价格表列示 |
| 新增 | global | MiniMax-H3-RH | model.source&#95;listing | 未记录 | price&#95;listed |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.headers&#91;1&#93; | 未记录 | Output Resolution |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.headers&#91;2&#93; | 未记录 | Task Type |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.headers&#91;3&#93; | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.headers&#91;4&#93; | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.headers&#91;5&#93; | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-RH\<br>      Provider: RunningHub |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.values&#91;1&#93; | 未记录 | 480P |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.values&#91;2&#93; | 未记录 | All |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.values&#91;3&#93; | 未记录 | &#36;0.038 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.values&#91;4&#93; | 未记录 | &#36;0.038 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.values&#91;5&#93; | 未记录 | &#36;0.04\<br>      first 5 free |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.currency&#95;symbol | 未记录 | &#36; |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.metric | 未记录 | generated&#95;video |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.amount&#95;decimal | 未记录 | 0.038 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;header | 未记录 | Output Video\<br>      per second |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;0&#93;.source&#95;value | 未记录 | &#36;0.038 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.metric | 未记录 | input&#95;video |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.unit | 未记录 | per&#95;second |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.amount&#95;decimal | 未记录 | 0.038 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;header | 未记录 | Input Video\<br>      per second |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;1&#93;.source&#95;value | 未记录 | &#36;0.038 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.metric | 未记录 | input&#95;image |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.unit | 未记录 | per&#95;image |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.quantity | 未记录 | 1 |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;header | 未记录 | Input Image\<br>      per image |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;0&#93;.normalized&#95;rates&#91;2&#93;.source&#95;value | 未记录 | &#36;0.04\<br>      first 5 free |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.section | 未记录 |  |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.headers&#91;0&#93; | 未记录 | Model |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.headers&#91;1&#93; | 未记录 | Text-to-video t2v |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.headers&#91;2&#93; | 未记录 | Image-to-video i2v |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.headers&#91;3&#93; | 未记录 | First &amp; last frame fl2v |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.headers&#91;4&#93; | 未记录 | Reference ref |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.values&#91;0&#93; | 未记录 | MiniMax-H3-RH |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.values&#91;1&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.values&#91;2&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.values&#91;3&#93; | 未记录 | Supported |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.values&#91;4&#93; | 未记录 | Image, video, audio |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.currency&#95;code | 未记录 | USD |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.currency&#95;evidence | 未记录 | All prices are in USD. |
| 新增 | global | MiniMax-H3-RH | model.pricing&#95;rows&#91;1&#93;.normalized&#95;rates | 未记录 | &#91;&#93; |

#### 来源快照

| 市场 | 来源 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---|---:|---|
| cn | MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-24T07:35:26.575Z | 200 | `sha256:ad27a06064bd5ea1130bc38ed6c95383a363e1e9485174c96310dde2c664d3dc` |
| cn | MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-24T07:35:24.749Z | 200 | `sha256:27173a027ea69cf5b1e73a2bf530be892ed269282a8d5e7f80436406572d2b6c` |
| cn | MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-24T07:35:26.358Z | 200 | `sha256:685b347f6fbf1fdda56c350275fe52c68de05e78e9d2d63d0a8d54cf8c2ed8ac` |
| cn | MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-24T07:35:29.741Z | 200 | `sha256:1d928087e3c926cf6e747608c3819c693d69705656ecaa6936cc3c42238b4615` |
| cn | MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-24T07:35:26.739Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-24T07:35:26.654Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-24T07:35:26.988Z | 200 | `sha256:538777042aff36e24ed741aad44684a8915b4717b62fbe216ccbdc33093d4c89` |
| cn | MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-24T07:35:27.369Z | 200 | `sha256:53ce46f2a70e47bcbc4e5682f142ab34679c883af86aff8a6fe69f7baf2c555f` |
| cn | MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-24T07:35:26.687Z | 200 | `sha256:11a5c466ef46e13669889e664274c3f9eb65baf9ff40984a205b81813ae2d268` |
| cn | MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-24T07:35:26.737Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-24T07:35:29.227Z | 200 | `sha256:a5ff9b3a2e27abad1c253a53a554f416a7b9d13c42e1709ecf09bb61987c397b` |
| cn | MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-24T07:35:26.941Z | 200 | `sha256:11b6a9b800ded4ce14deed175239816d5149053f3ad839cd282506deab7e20c1` |
| cn | MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-24T07:35:30.529Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-24T07:35:27.972Z | 200 | `sha256:fca22091669b76dbb73ca889757e9c722643fd371b917a5520c2218c6885a3d0` |
| cn | MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-24T07:35:27.216Z | 200 | `sha256:95b089500d8fa4854e03ee2621548845f7552c03104e46bcf9a96ca79cb846c8` |
| global | MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-24T07:35:26.585Z | 200 | `sha256:0183792f121a53fe2ad6bb724a4fc464b20543959175d85a707025884f37a96d` |
| global | MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-24T07:35:26.632Z | 200 | `sha256:52f32aa591e77cf6ae81ce4007cd01c5e53ca46264eecc0dbfc5214b5be44c39` |
| global | MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-24T07:35:26.612Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-24T07:35:26.597Z | 200 | `sha256:d740427ec5835371c08b27b7a340721df61f67fceaff0221b0d8d3ca0ee486c0` |
| global | MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-24T07:35:26.542Z | 200 | `sha256:90cd6051d407dc84ff953240d12397ad284fc5de04472765ef1246fe56cdb5eb` |
| global | MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-24T07:35:26.620Z | 200 | `sha256:7f177084da0f2bf8b3711fc8669fb4e6c0f400cc307dad3d1f1736ad6c122cb9` |
| global | MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-24T07:35:26.621Z | 200 | `sha256:e032377205c22f839667b23c8ee96e46d80d5c37c95352e0ca9b4fab6970b411` |
| global | MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-24T07:35:26.802Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-24T07:35:26.663Z | 200 | `sha256:ea7daead1dacc0dd3702ff481a97260627d1ef3dea45e9f4c3a0000d9364c65d` |
| global | MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-24T07:35:26.855Z | 200 | `sha256:e1e4261e9ea13303d8e334f6b19b6d2ca7b1c7e44bda56658b95ce5124257485` |
| global | MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-24T07:35:26.738Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-24T07:35:26.818Z | 200 | `sha256:6b0f2ce19b483990dbb33e10a0e55ac4a338dd3fa3d1a0c8059b2cd3d475ed0c` |
| global | MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-24T07:35:26.675Z | 200 | `sha256:5066155c189b75927fd7cf910a7c7044398cb5441468797f0cdd71fb6c602484` |

> 本文件供人工评审；候选 JSON 保留完整机器可读结构。自动采集不等于核验或发布。

---

# minimax 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `minimax` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-24T07:35:30.529Z |
| 前一候选指纹 | `sha256:022bc0ebdb9f18dce10e282bcabe6f0a6fb8726951e7dbaca6ee5991d4cf5473` |
| 本次候选指纹 | `sha256:f243374f285a3bfe213d3195032c2afa1b54cb2c7e24485cb2f8fcd99ff48b32` |
| 来源快照 | 28 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 56 项，更新 24 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / minimax-cn-anthropic-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：对 `MiniMax-M3.1-Flash` 和 `MiniMax-M3`，URL 或 base64 视频最大 50 MB，图片最大 10 MB，请求体最大 64 MB。更大的视频请通过 Files API 上传后传入 `mm_file://{file_id}`，Files API 视频最大 512 MB。 | 差异项（新增；相同内容已省略）：图片和视频块可在 `source` 中传入 `detail`（`low`、`default`、`high`，默认 `default`）和 `max_long_side_pixel` 控制缩放；视频块还可在 `source` 中传入 `fps`，默认值为 2，支持 0.2 到 5。<br>&#124; 格式 &#124; 图片支持 JPEG、PNG、GIF、WEBP；视频支持 MP4、AVI、MOV、MKV &#124;<br>&#124; 文件大小 &#124; URL 或 base64 输入时，图片最大 10 MB，视频最大 50 MB。更大的视频请通过 Files API 上传后传入 `mm_file://{file_id}`，最大 512 MB &#124;<br>&#124; 数量 &#124; 单次请求的 `messages`（含历史轮次）累计最多 200 张图片、20 个视频 &#124;<br>&#124; 宽高 &#124; 图片和视频的宽、高须大于 0，宽高比不超过 200:1 &#124;<br>&#124; 视频轨 &#124; 视频必须包含视频轨，纯音频文件不支持 &#124;<br>&#124; 视频时长 &#124; 大于 0，且不超过 30 分钟 &#124;<br>&#124; 抽帧帧数 &#124; 抽帧数按 `round(时长 × fps / 2) × 2` 计算，须不少于 2 且不超过视频实际总帧数。`时长 × fps` 小于 1 时一定无法满足；`fps` 高于视频本身的帧率时通常也无法满足 &#124;<br>&#124; 视频像素总量 &#124; `缩放后单帧宽 × 缩放后单帧高 × 抽帧数 / 2` 不超过 301,056,000。单帧按 `detail` 或 `max_long_side_pixel` 缩放，长边上限：`low` 504、`default` 672、`high` 1288。例如 16:9 视频在 `fps` 为 2 时，`default` 约支持 19 分钟，`high` 约支持 5 分钟 &#124; |
| extraction | 新增 | 未记录 | 未记录 |
| tables | 更新 | 列表（5 项）<details><summary>展开完整内容</summary><ul><li>heading：支持的模型<br>headers：• 模型名称<br>• 上下文窗口<br>• 模型介绍<br>rows：• • MiniMax-M3.1-Flash<br>• 1,000,000<br>• **原生多模态、1M 上下文的 Frontier Coding 模型，思考深度可调**<br>• • MiniMax-M3<br>• 1,000,000<br>• **原生多模态、1M 上下文的 Frontier Coding 模型**</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：支持的参数</li><li>headers：• 参数<br>• 支持状态<br>• 说明</li><li>rows：列表（18 项）<details><summary>展开完整内容</summary><ul><li>• `model`<br>• 完全支持<br>• 支持 `MiniMax-M3.1-Flash` `MiniMax-M3` 模型</li><li>• `messages`<br>• 部分支持<br>• `MiniMax-M3.1-Flash` 和 `MiniMax-M3` 支持文本、图片、视频、工具调用、工具结果和 thinking 内容块</li><li>• `max_tokens`<br>• 完全支持<br>• 最大生成 token 数。思考 token 也计入此上限，设置过小会导致 `stop_reason` 为 `max_tokens` 且无文本输出</li><li>• `stream`<br>• 完全支持<br>• 流式响应</li><li>• `system`<br>• 完全支持<br>• 系统提示词</li><li>• `tool_choice`<br>• 部分支持<br>• 工具选择策略，仅支持 `auto`</li><li>• `tools`<br>• 完全支持<br>• 工具定义</li><li>• `thinking`<br>• 完全支持<br>• `MiniMax-M3.1-Flash` 强制开启 thinking，传入 `disabled` 会返回 `400`。`MiniMax-M3` 默认关闭 thinking，可通过 `adaptive` 开启。</li><li>• `output_config.effort`<br>• 完全支持<br>• 调节 `MiniMax-M3.1-Flash` 的思考深度，可取 `low`、`medium`、`high`、`xhigh`、`max`；省略时默认为 `max`。</li><li>• `metadata`<br>• 完全支持<br>• 元信息</li><li>• `service_tier`<br>• 完全支持<br>• 请求准入服务层级。支持的取值为 `standard` 和 `priority`；省略时默认使用 `standard`。`priority` 的[价格](https://platform.minimaxi.com/docs/pricing/overview.md#models/text)为 `standard` 的 1.5 倍，并会确保请求获得优先准入，使其排在其他请求之前处理，从而带来更快响应并减少失败。`MiniMax-M3.1-Flash` 不支持该字段。</li><li>• `temperature`<br>• 忽略<br>• 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 1</li><li>• `top_p`<br>• 忽略<br>• 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 0.95。若传入，取值需在 (0, 1] 范围内</li><li>• `top_k`<br>• 忽略<br>• 该参数会被忽略</li><li>• `stop_sequences`<br>• 忽略<br>• 该参数会被忽略</li><li>• `mcp_servers`<br>• 忽略<br>• 该参数会被忽略</li><li>• `context_management`<br>• 忽略<br>• 该参数会被忽略</li><li>• `container`<br>• 忽略<br>• 该参数会被忽略</li></ul></details></li></ul></details></li><li>heading：Thinking 控制<br>headers：• 模型<br>• 省略 `thinking`<br>• `{"type": "adaptive"}`<br>• `{"type": "disabled"}`<br>rows：• • `MiniMax-M3.1-Flash`<br>• 开启 thinking<br>• 开启 thinking<br>• **返回 `400`**，thinking 无法关闭<br>• • `MiniMax-M3`<br>• 关闭 thinking<br>• 开启 thinking<br>• 保持 thinking 关闭</li><li>heading：Messages 字段支持<br>headers：• 字段类型<br>• 支持状态<br>• 说明<br>rows：• • `type="text"`<br>• 完全支持<br>• 文本消息<br>• • `type="image"`<br>• 仅 M3.1-Flash / M3<br>• 通过 URL 或 base64 输入图片，支持 JPEG、PNG、GIF、WEBP<br>• • `type="video"`<br>• 仅 M3.1-Flash / M3<br>• 通过 URL、base64 或 `mm_file://{file_id}` 输入视频，支持 MP4、AVI、MOV、MKV<br>• • `type="tool_use"`<br>• 完全支持<br>• 工具调用<br>• • `type="tool_result"`<br>• 完全支持<br>• 工具调用结果<br>• • `type="thinking"`<br>• 完全支持<br>• 推理内容。多轮 thinking 对话中需要原样回带</li><li>heading：Messages 字段支持<br>headers：• `detail`<br>• 单张图片粗略 token 用量<br>rows：• • `low`<br>• 通常为几百 token，最高约 600<br>• • `default`<br>• 通常约 1k-3k token，最高约 5k<br>• • `high`<br>• 通常为数千 token，最高约 15k+</li></ul></details> | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>heading：支持的模型<br>headers：• 模型名称<br>• 上下文窗口<br>• 模型介绍<br>rows：• • MiniMax-M3.1-Flash<br>• 1,000,000<br>• **原生多模态、1M 上下文的 Frontier Coding 模型，思考深度可调**<br>• • MiniMax-M3<br>• 1,000,000<br>• **原生多模态、1M 上下文的 Frontier Coding 模型**</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：支持的参数</li><li>headers：• 参数<br>• 支持状态<br>• 说明</li><li>rows：列表（18 项）<details><summary>展开完整内容</summary><ul><li>• `model`<br>• 完全支持<br>• 支持 `MiniMax-M3.1-Flash` `MiniMax-M3` 模型</li><li>• `messages`<br>• 部分支持<br>• `MiniMax-M3.1-Flash` 和 `MiniMax-M3` 支持文本、图片、视频、工具调用、工具结果和 thinking 内容块</li><li>• `max_tokens`<br>• 完全支持<br>• 最大生成 token 数。思考 token 也计入此上限，设置过小会导致 `stop_reason` 为 `max_tokens` 且无文本输出</li><li>• `stream`<br>• 完全支持<br>• 流式响应</li><li>• `system`<br>• 完全支持<br>• 系统提示词</li><li>• `tool_choice`<br>• 部分支持<br>• 工具选择策略，仅支持 `auto`</li><li>• `tools`<br>• 完全支持<br>• 工具定义</li><li>• `thinking`<br>• 完全支持<br>• `MiniMax-M3.1-Flash` 强制开启 thinking，传入 `disabled` 会返回 `400`。`MiniMax-M3` 默认关闭 thinking，可通过 `adaptive` 开启。</li><li>• `output_config.effort`<br>• 完全支持<br>• 调节 `MiniMax-M3.1-Flash` 的思考深度，可取 `low`、`medium`、`high`、`xhigh`、`max`；省略时默认为 `max`。</li><li>• `metadata`<br>• 完全支持<br>• 元信息</li><li>• `service_tier`<br>• 完全支持<br>• 请求准入服务层级。支持的取值为 `standard` 和 `priority`；省略时默认使用 `standard`。`priority` 的[价格](https://platform.minimaxi.com/docs/pricing/overview.md#models/text)为 `standard` 的 1.5 倍，并会确保请求获得优先准入，使其排在其他请求之前处理，从而带来更快响应并减少失败。`MiniMax-M3.1-Flash` 不支持该字段。</li><li>• `temperature`<br>• 忽略<br>• 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 1</li><li>• `top_p`<br>• 忽略<br>• 暂不支持指定，传入的值不会生效。`MiniMax-M3.1-Flash` 和 `MiniMax-M3` 固定使用 0.95。若传入，取值需在 (0, 1] 范围内</li><li>• `top_k`<br>• 忽略<br>• 该参数会被忽略</li><li>• `stop_sequences`<br>• 忽略<br>• 该参数会被忽略</li><li>• `mcp_servers`<br>• 忽略<br>• 该参数会被忽略</li><li>• `context_management`<br>• 忽略<br>• 该参数会被忽略</li><li>• `container`<br>• 忽略<br>• 该参数会被忽略</li></ul></details></li></ul></details></li><li>heading：Thinking 控制<br>headers：• 模型<br>• 省略 `thinking`<br>• `{"type": "adaptive"}`<br>• `{"type": "disabled"}`<br>rows：• • `MiniMax-M3.1-Flash`<br>• 开启 thinking<br>• 开启 thinking<br>• **返回 `400`**，thinking 无法关闭<br>• • `MiniMax-M3`<br>• 关闭 thinking<br>• 开启 thinking<br>• 保持 thinking 关闭</li><li>heading：Messages 字段支持<br>headers：• 字段类型<br>• 支持状态<br>• 说明<br>rows：• • `type="text"`<br>• 完全支持<br>• 文本消息<br>• • `type="image"`<br>• 仅 M3.1-Flash / M3<br>• 通过 URL 或 base64 输入图片，支持 JPEG、PNG、GIF、WEBP<br>• • `type="video"`<br>• 仅 M3.1-Flash / M3<br>• 通过 URL、base64 或 `mm_file://{file_id}` 输入视频，支持 MP4、AVI、MOV、MKV<br>• • `type="tool_use"`<br>• 完全支持<br>• 工具调用<br>• • `type="tool_result"`<br>• 完全支持<br>• 工具调用结果<br>• • `type="thinking"`<br>• 完全支持<br>• 推理内容。多轮 thinking 对话中需要原样回带</li><li>heading：输入限制<br>headers：• 维度<br>• 限制<br>rows：• • 格式<br>• 图片支持 JPEG、PNG、GIF、WEBP；视频支持 MP4、AVI、MOV、MKV<br>• • 文件大小<br>• URL 或 base64 输入时，图片最大 10 MB，视频最大 50 MB。更大的视频请通过 Files API 上传后传入 `mm_file://{file_id}`，最大 512 MB<br>• • 请求体<br>• 最大 64 MB<br>• • 数量<br>• 单次请求的 `messages`（含历史轮次）累计最多 200 张图片、20 个视频<br>• • 宽高<br>• 图片和视频的宽、高须大于 0，宽高比不超过 200:1<br>• • 视频轨<br>• 视频必须包含视频轨，纯音频文件不支持<br>• • 视频时长<br>• 大于 0，且不超过 30 分钟<br>• • 抽帧帧数<br>• 抽帧数按 `round(时长 × fps / 2) × 2` 计算，须不少于 2 且不超过视频实际总帧数。`时长 × fps` 小于 1 时一定无法满足；`fps` 高于视频本身的帧率时通常也无法满足<br>• • 视频像素总量<br>• `缩放后单帧宽 × 缩放后单帧高 × 抽帧数 / 2` 不超过 301,056,000。单帧按 `detail` 或 `max_long_side_pixel` 缩放，长边上限：`low` 504、`default` 672、`high` 1288。例如 16:9 视频在 `fps` 为 2 时，`default` 约支持 19 分钟，`high` 约支持 5 分钟</li><li>heading：输入限制<br>headers：• `detail`<br>• 单张图片粗略 token 用量<br>rows：• • `low`<br>• 通常为几百 token，最高约 600<br>• • `default`<br>• 通常约 1k-3k token，最高约 5k<br>• • `high`<br>• 通常为数千 token，最高约 15k+</li></ul></details> |

#### 来源 / minimax-cn-asr-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-audio-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-function-call-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-image-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：&gt; { "aspect_ratio": "16:9", "area": "2K" } | 差异片段（新增；相同内容已省略）：&gt; { "aspect_ratio": "16:9", "area": "4K" } |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-m-plan-intro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-m-plan-page

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：MiniMax H3 Image<br>MiniMax Speech 2.8<br>MiniMax 语音 |
| excerpt | 更新 | M Plan - MiniMax API 平台 模型<br>语言模型<br>MiniMax M3.1 Flash MiniMax M3<br>视频&amp;图片<br>MiniMax H3 MiniMax H3 Image<br>语音&amp;音乐<br>MiniMax Speech 2.8 MiniMax Music 3.0<br>API M Plan MiniMax Code 研究 关于我们<br>公司介绍 新闻 投资者关系 加入我们<br>登录<br>MiniMax Code API 开放平台<br>登录<br>MiniMax Code API 开放平台<br>模型<br>语言模型<br>MiniMax M3.1 Flash NEW<br>MiniMax M3 NEW<br>视频&amp;图片<br>MiniMax H3 NEW<br>MiniMax H3 Image NEW<br>语音&amp;音乐<br>MiniMax Speech 2.8 NEW<br>MiniMax Music 3.0 NEW<br>API<br>M Plan<br>MiniMax Code<br>研究<br>关于我们<br>公司介绍<br>新闻<br>投资者关系<br>加入我们 | M Plan - MiniMax API 平台 模型<br>语言模型<br>MiniMax M3.1 Flash MiniMax M3<br>视频&amp;图片<br>MiniMax H3 MiniMax H3 Image<br>语音&amp;音乐<br>MiniMax Speech 2.8 MiniMax Music 3.0<br>API M Plan MiniMax Code 研究 关于我们<br>公司介绍 新闻 投资者关系 加入我们<br>登录<br>MiniMax Code API 开放平台<br>登录<br>MiniMax Code API 开放平台<br>模型<br>语言模型<br>MiniMax M3.1 Flash NEW<br>MiniMax M3 NEW<br>视频&amp;图片<br>MiniMax H3 NEW<br>MiniMax H3 Image NEW<br>语音&amp;音乐<br>MiniMax Speech 2.8 NEW<br>MiniMax Music 3.0 NEW<br>API<br>M Plan<br>MiniMax Code<br>研究<br>关于我们<br>公司介绍<br>新闻<br>投资者关系<br>加入我们<br>MiniMax 公众号<br>开放平台公众号<br>客服系统<br>飞书交流群<br>模型<br>MiniMax M3.1 Flash<br>MiniMax M3<br>MiniMax H3<br>MiniMax H3 Image<br>MiniMax Speech 2.8<br>MiniMax Music 3.0<br>产品<br>MiniMax Code<br>MiniMax Design<br>MiniMax 语音<br>API 开放平台<br>文档中心<br>M Plan 订阅<br>API 价格<br>平台登录<br>服务状态<br>关于我们<br>公司介绍<br>新闻<br>投资者关系<br>加入我们<br>安全中心<br>©上海稀宇科技有限公司 2026 版权所有 隐私条款 用户协议 涉企侵权举报专用邮箱<br>沪公网安备 31010402337149 号 沪 ICP 备2023003282 号-48 |
| extraction | 新增 | 未记录 | 未记录 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：M Plan 订阅 |

#### 来源 / minimax-cn-mcp-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：&gt; **4K 生图限时 5 折：** **即日起至 2026 年 11 月 18 日 00:00**（北京时间，结束时刻不含），MiniMax-H3-Image 和 MiniMax-H3-Image-Highspeed 最终交付图片的宽 × 高 ≥ 1660 万像素，即享整次请求费用 5 折。 | 差异项（新增；相同内容已省略）：&gt; **4K 生图限时 5 折：** MiniMax-H3-Image 和 MiniMax-H3-Image-Highspeed 最终交付图片的宽 × 高 ≥ 1660 万像素，即享整次请求费用 5 折。 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：description: 视频链接或 Base64 编码，大文件建议使用 File API 上传 | 差异项（新增；相同内容已省略）：- URL / Base64 方式传入：视频文件 ≤ 50 MB，图片文件 ≤ 10 MB，请求体 ≤ 64 MB。<br>- 使用 Files API 上传：以 `mm_file://{file_id}` 形式引用，单个视频最大 512 MB。<br>- 单次请求的 `input`（含历史轮次）累计最多 200 张图片、20 个视频。<br>- 图片和视频的宽、高须大于 0，宽高比不超过 200:1。<br>- 视频必须包含视频轨（纯音频文件不支持），时长大于 0 且不超过 30 分钟。<br>- 抽帧数按 `round(时长 × fps / 2) × 2` 计算，须不少于 2 且不超过视频实际总帧数；`时长 × fps` 小于<br>1 时一定无法满足，`fps` 高于视频本身的帧率时通常也无法满足。<br>- 视频像素总量 `缩放后单帧宽 × 缩放后单帧高 × 抽帧数 / 2` 不超过 301,056,000。单帧按 `detail` 或<br>视频 URL、Base64 data URL，或形如 `mm_file://{file_id}` 的 Files API<br>需先通过[文件上传](/api-reference/file-management-upload)接口上传视频后获取。<br>description: 视频抽帧频率，默认值为 2，范围 [0.2, 5]。 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-video-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：可通过可选参数 `generate_audio` 控制视频是否包含音频：默认 `true`，输出有声视频；设置为 `false`，输出无声视频。<br>无声视频（generate_audio=false）:<br>summary: 生成无声视频<br>generate_audio: false<br>generate_audio:<br>控制生成的视频是否包含音频。可选，默认 `true`。<br>- `true`：输出有声视频。<br>- `false`：输出无声视频。 |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：required: true<br>responses:<br>'200':<br>description: &gt;-<br>创建成功后返回 `task_id`。使用该 `task_id`<br>调用[查询任务](/api-reference/video-generation-v2-query)接口获取任务状态与结果。<br>**查询任务成功响应示例**<br>```json | 差异片段（新增；相同内容已省略）：可通过可选参数 `generate_audio` 控制视频是否包含音频：默认 `true`，输出有声视频；设置为 `false`，输出无声视频。<br>无声视频（generate_audio=false）:<br>summary: 生成无声视频<br>value:<br>model: MiniMax-H3<br>content:<br>- type: text<br>text: 一艘小纸船缓缓漂过平静的池塘。 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-cn-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>如果已有符合 MiniMax-H3 768P 输出规格的成片，可以调用[创建视频再生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-regeneration.md)接口输出 2K 视频。请求时需原样提交生成 768P 视频时使用的全部 `content`，并额外加入且仅加入一个 `type=video_url`、`role=base_video` 的源视频项。 | 差异项（新增 15 项）<details><summary>展开完整差异</summary><ul><li>## 控制视频声音</li><li>创建视频任务时，可通过可选布尔参数 `generate_audio` 控制视频是否包含音频，默认值为 `true`。</li><li>* `true`：输出有声视频。</li><li>* `false`：输出无声视频。</li><li>文生视频、图生视频和多模态参考生视频均可在请求体中设置该参数。</li><li>下方示例默认输出有声视频；调用 `invoke_text_to_video(generate_audio=False)` 可生成无声视频。</li><li>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:</li><li>"generate_audio": generate_audio,</li><li># task_id = invoke_text_to_video(generate_audio=False)  # 文生视频，无声视频</li><li>如果已有符合 MiniMax-H3 768P 输出规格的视频，可以调用[创建视频再生成任务](https://platform.minimaxi.com/docs/api-reference/video-generation-v2-regeneration.md)接口输出 2K 视频，选择以下一种方式：</li><li>* **按源视频**：原样提交生成 768P 视频时实际送入模型的全部 `content`（包括 H3-Context-IR 处理后的最终 prompt），再加入且仅加入一个 `type=video_url`、`role=base_video` 的源视频项。`base_video` 必须包含音轨。</li><li>再生成时也可设置 `generate_audio`：</li><li>* **按源视频**：默认 `true`，输出有声视频；设置为 `false`，输出无声视频。</li><li>* **按任务 ID**：不传时沿用源任务设置。若源任务设置了 `generate_audio=false`，结果始终为无声视频；否则，传 `true` 输出有声视频，传 `false` 输出无声视频。</li><li>无音轨的 `base_video` 会在异步媒体校验阶段被拒绝。返回 `task_id` 不代表媒体校验通过，请查询任务终态。</li></ul></details> |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>"content": [<br>{"type": "text", "text": "A little girl grows up."},<br># role=first_frame 指定起始画面<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},<br># role=last_frame 指定结束画面<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/97b7cd08-764e-4b8b-a7bf-87a0bd898575.jpeg"}, "role": "last_frame"},<br>], | 差异片段（新增；相同内容已省略）：## 控制视频声音<br>创建视频任务时，可通过可选布尔参数 `generate_audio` 控制视频是否包含音频，默认值为 `true`。<br>* `true`：输出有声视频。<br>* `false`：输出无声视频。<br>文生视频、图生视频和多模态参考生视频均可在请求体中设置该参数。<br>下方示例默认输出有声视频；调用 `invoke_text_to_video(generate_audio=False)` 可生成无声视频。<br>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:<br>"generate_audio": generate_audio, |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-anthropic-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：For `MiniMax-M3.1-Flash` and `MiniMax-M3`, URL or base64 videos can be up to 50 MB, images can be up to 10 MB, and the request body can be up to 64 MB. For larger videos, upload through the Files API and pass `mm_file://{file_id}`; Files API videos can be up to 512 MB. | 差异项（新增 9 项）<details><summary>展开完整差异</summary><ul><li>Image and video blocks accept `detail` (`low`, `default`, or `high`; defaults to `default`) and `max_long_side_pixel` in `source` to control scaling. Video blocks also accept `fps` in `source`; it defaults to 2 and accepts values from 0.2 to 5.</li><li>&#124; Format &#124; Images: JPEG, PNG, GIF, WEBP. Videos: MP4, AVI, MOV, MKV &#124;</li><li>&#124; File size &#124; With URL or base64 input, images can be up to 10 MB and videos up to 50 MB. For larger videos, upload through the Files API and pass `mm_file://{file_id}`; Files API videos can be up to 512 MB &#124;</li><li>&#124; Count &#124; Up to 200 images and 20 videos across all `messages` in one request, including previous turns &#124;</li><li>&#124; Dimensions &#124; Image and video width and height must be greater than 0, and the aspect ratio must not exceed 200:1 &#124;</li><li>&#124; Video stream &#124; Videos must contain a video stream; audio-only files are not supported &#124;</li><li>&#124; Video duration &#124; Greater than 0 and no longer than 30 minutes &#124;</li><li>&#124; Sampled frames &#124; The number of sampled frames is `round(duration × fps / 2) × 2`. It must be at least 2 and no more than the video's actual total frame count. It always fails when `duration × fps` is less than 1, and usually fails when `fps` exceeds the video's own frame rate &#124;</li><li>&#124; Total video pixels &#124; `scaled frame width × scaled frame height × sampled frames / 2` must not exceed 301,056,000. Frames are scaled by `detail` or `max_long_side_pixel`, with a longest-side limit of 504 for `low`, 672 for `default`, and 1288 for `high`. For example, a 16:9 video at `fps` 2 supports about 19 minutes with `default` and about 5 minutes with `high` &#124;</li></ul></details> |
| extraction | 新增 | 未记录 | 未记录 |
| tables | 更新 | 列表（5 项）<details><summary>展开完整内容</summary><ul><li>heading：Supported Models<br>headers：• Model Name<br>• Context Window<br>• Description<br>rows：• • MiniMax-M3.1-Flash<br>• 1,000,000<br>• **Frontier multimodal coding model with 1M context window and tunable thinking depth**<br>• • MiniMax-M3<br>• 1,000,000<br>• **Frontier multimodal coding model with 1M context window**</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Supported Parameters</li><li>headers：• Parameter<br>• Support Status<br>• Description</li><li>rows：列表（18 项）<details><summary>展开完整内容</summary><ul><li>• `model`<br>• Fully supported<br>• supports `MiniMax-M3.1-Flash` `MiniMax-M3` models</li><li>• `messages`<br>• Partial support<br>• `MiniMax-M3.1-Flash` and `MiniMax-M3` support text, image, video, tool use, tool result, and thinking blocks</li><li>• `max_tokens`<br>• Fully supported<br>• Maximum number of tokens to generate. Thinking tokens count toward it too, so a value that is too small yields `stop_reason: "max_tokens"` with no text output</li><li>• `stream`<br>• Fully supported<br>• Streaming response</li><li>• `system`<br>• Fully supported<br>• System prompt</li><li>• `tool_choice`<br>• Partial support<br>• Tool selection strategy; only `auto` is supported</li><li>• `tools`<br>• Fully supported<br>• Tool definitions</li><li>• `metadata`<br>• Fully Supported<br>• Metadata</li><li>• `thinking`<br>• Fully Supported<br>• `MiniMax-M3.1-Flash` always thinks and returns `400` if `disabled` is sent. Thinking is off by default for `MiniMax-M3` and can be enabled with `adaptive`.</li><li>• `output_config.effort`<br>• Fully Supported<br>• Tunes thinking depth for `MiniMax-M3.1-Flash`. Accepts `low`, `medium`, `high`, `xhigh`, and `max`; defaults to `max` when omitted.</li><li>• `service_tier`<br>• Fully Supported<br>• Request admission tier. Supported values are `standard` and `priority`; if omitted, requests use `standard`. The `priority` [price](https://platform.minimax.io/docs/pricing/overview.md#models/text) is 1.5 times the `standard` price and ensures priority admission so the request is processed ahead of other requests, leading to faster responses and fewer failures. `MiniMax-M3.1-Flash` does not support this field.</li><li>• `temperature`<br>• Ignored<br>• Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 1</li><li>• `top_p`<br>• Ignored<br>• Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 0.95. If passed, the value must be within (0, 1]</li><li>• `top_k`<br>• Ignored<br>• This parameter will be ignored</li><li>• `stop_sequences`<br>• Ignored<br>• This parameter will be ignored</li><li>• `mcp_servers`<br>• Ignored<br>• This parameter will be ignored</li><li>• `context_management`<br>• Ignored<br>• This parameter will be ignored</li><li>• `container`<br>• Ignored<br>• This parameter will be ignored</li></ul></details></li></ul></details></li><li>heading：Thinking Control<br>headers：• Model<br>• `thinking` omitted<br>• `{"type": "adaptive"}`<br>• `{"type": "disabled"}`<br>rows：• • `MiniMax-M3.1-Flash`<br>• Thinking on<br>• Thinking on<br>• **Returns `400`** — thinking cannot be disabled<br>• • `MiniMax-M3`<br>• Thinking off<br>• Thinking on<br>• Thinking stays off</li><li>heading：Messages Field Support<br>headers：• Field Type<br>• Support Status<br>• Description<br>rows：• • `type="text"`<br>• Fully supported<br>• Text messages<br>• • `type="image"`<br>• M3.1-Flash / M3 only<br>• Image input via URL or base64. Supports JPEG, PNG, GIF, WEBP<br>• • `type="video"`<br>• M3.1-Flash / M3 only<br>• Video input via URL, base64, or `mm_file://{file_id}`. Supports MP4, AVI, MOV, MKV<br>• • `type="tool_use"`<br>• Fully supported<br>• Tool calls<br>• • `type="tool_result"`<br>• Fully supported<br>• Tool call results<br>• • `type="thinking"`<br>• Fully supported<br>• Reasoning content. Return the block unchanged in multi-turn thinking conversations</li><li>heading：Messages Field Support<br>headers：• `detail`<br>• Rough single-image token usage<br>rows：• • `low`<br>• Usually a few hundred tokens, up to \~600<br>• • `default`<br>• Often \~1k-3k tokens, up to \~5k<br>• • `high`<br>• Often several thousand tokens, up to \~15k+</li></ul></details> | 列表（6 项）<details><summary>展开完整内容</summary><ul><li>heading：Supported Models<br>headers：• Model Name<br>• Context Window<br>• Description<br>rows：• • MiniMax-M3.1-Flash<br>• 1,000,000<br>• **Frontier multimodal coding model with 1M context window and tunable thinking depth**<br>• • MiniMax-M3<br>• 1,000,000<br>• **Frontier multimodal coding model with 1M context window**</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Supported Parameters</li><li>headers：• Parameter<br>• Support Status<br>• Description</li><li>rows：列表（18 项）<details><summary>展开完整内容</summary><ul><li>• `model`<br>• Fully supported<br>• supports `MiniMax-M3.1-Flash` `MiniMax-M3` models</li><li>• `messages`<br>• Partial support<br>• `MiniMax-M3.1-Flash` and `MiniMax-M3` support text, image, video, tool use, tool result, and thinking blocks</li><li>• `max_tokens`<br>• Fully supported<br>• Maximum number of tokens to generate. Thinking tokens count toward it too, so a value that is too small yields `stop_reason: "max_tokens"` with no text output</li><li>• `stream`<br>• Fully supported<br>• Streaming response</li><li>• `system`<br>• Fully supported<br>• System prompt</li><li>• `tool_choice`<br>• Partial support<br>• Tool selection strategy; only `auto` is supported</li><li>• `tools`<br>• Fully supported<br>• Tool definitions</li><li>• `metadata`<br>• Fully Supported<br>• Metadata</li><li>• `thinking`<br>• Fully Supported<br>• `MiniMax-M3.1-Flash` always thinks and returns `400` if `disabled` is sent. Thinking is off by default for `MiniMax-M3` and can be enabled with `adaptive`.</li><li>• `output_config.effort`<br>• Fully Supported<br>• Tunes thinking depth for `MiniMax-M3.1-Flash`. Accepts `low`, `medium`, `high`, `xhigh`, and `max`; defaults to `max` when omitted.</li><li>• `service_tier`<br>• Fully Supported<br>• Request admission tier. Supported values are `standard` and `priority`; if omitted, requests use `standard`. The `priority` [price](https://platform.minimax.io/docs/pricing/overview.md#models/text) is 1.5 times the `standard` price and ensures priority admission so the request is processed ahead of other requests, leading to faster responses and fewer failures. `MiniMax-M3.1-Flash` does not support this field.</li><li>• `temperature`<br>• Ignored<br>• Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 1</li><li>• `top_p`<br>• Ignored<br>• Not supported yet; any value passed has no effect. `MiniMax-M3.1-Flash` and `MiniMax-M3` always use 0.95. If passed, the value must be within (0, 1]</li><li>• `top_k`<br>• Ignored<br>• This parameter will be ignored</li><li>• `stop_sequences`<br>• Ignored<br>• This parameter will be ignored</li><li>• `mcp_servers`<br>• Ignored<br>• This parameter will be ignored</li><li>• `context_management`<br>• Ignored<br>• This parameter will be ignored</li><li>• `container`<br>• Ignored<br>• This parameter will be ignored</li></ul></details></li></ul></details></li><li>heading：Thinking Control<br>headers：• Model<br>• `thinking` omitted<br>• `{"type": "adaptive"}`<br>• `{"type": "disabled"}`<br>rows：• • `MiniMax-M3.1-Flash`<br>• Thinking on<br>• Thinking on<br>• **Returns `400`** — thinking cannot be disabled<br>• • `MiniMax-M3`<br>• Thinking off<br>• Thinking on<br>• Thinking stays off</li><li>heading：Messages Field Support<br>headers：• Field Type<br>• Support Status<br>• Description<br>rows：• • `type="text"`<br>• Fully supported<br>• Text messages<br>• • `type="image"`<br>• M3.1-Flash / M3 only<br>• Image input via URL or base64. Supports JPEG, PNG, GIF, WEBP<br>• • `type="video"`<br>• M3.1-Flash / M3 only<br>• Video input via URL, base64, or `mm_file://{file_id}`. Supports MP4, AVI, MOV, MKV<br>• • `type="tool_use"`<br>• Fully supported<br>• Tool calls<br>• • `type="tool_result"`<br>• Fully supported<br>• Tool call results<br>• • `type="thinking"`<br>• Fully supported<br>• Reasoning content. Return the block unchanged in multi-turn thinking conversations</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Input Limits</li><li>headers：• Item<br>• Limit</li><li>rows：列表（9 项）<details><summary>展开完整内容</summary><ul><li>• Format<br>• Images: JPEG, PNG, GIF, WEBP. Videos: MP4, AVI, MOV, MKV</li><li>• File size<br>• With URL or base64 input, images can be up to 10 MB and videos up to 50 MB. For larger videos, upload through the Files API and pass `mm_file://{file_id}`; Files API videos can be up to 512 MB</li><li>• Request body<br>• Up to 64 MB</li><li>• Count<br>• Up to 200 images and 20 videos across all `messages` in one request, including previous turns</li><li>• Dimensions<br>• Image and video width and height must be greater than 0, and the aspect ratio must not exceed 200:1</li><li>• Video stream<br>• Videos must contain a video stream; audio-only files are not supported</li><li>• Video duration<br>• Greater than 0 and no longer than 30 minutes</li><li>• Sampled frames<br>• The number of sampled frames is `round(duration × fps / 2) × 2`. It must be at least 2 and no more than the video's actual total frame count. It always fails when `duration × fps` is less than 1, and usually fails when `fps` exceeds the video's own frame rate</li><li>• Total video pixels<br>• `scaled frame width × scaled frame height × sampled frames / 2` must not exceed 301,056,000. Frames are scaled by `detail` or `max_long_side_pixel`, with a longest-side limit of 504 for `low`, 672 for `default`, and 1288 for `high`. For example, a 16:9 video at `fps` 2 supports about 19 minutes with `default` and about 5 minutes with `high`</li></ul></details></li></ul></details></li><li>heading：Input Limits<br>headers：• `detail`<br>• Rough single-image token usage<br>rows：• • `low`<br>• Usually a few hundred tokens, up to \~600<br>• • `default`<br>• Often \~1k-3k tokens, up to \~5k<br>• • `high`<br>• Often several thousand tokens, up to \~15k+</li></ul></details> |

#### 来源 / minimax-global-audio-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-function-call-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-image-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：&gt; { "aspect_ratio": "16:9", "area": "2K" } | 差异片段（新增；相同内容已省略）：&gt; { "aspect_ratio": "16:9", "area": "4K" } |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-m-plan-intro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-m-plan-page

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：MiniMax H3 Image<br>MiniMax Speech 2.8<br>MiniMax Audio |
| excerpt | 更新 | M Plan - MiniMax API Platform Models<br>LLM<br>MiniMax M3.1 Flash MiniMax M3<br>Video &amp; Image<br>MiniMax H3 MiniMax H3 Image<br>SPEECH &amp; MUSIC<br>MiniMax Speech 2.8 MiniMax Music 3.0<br>API M Plan MiniMax Code Research Company<br>About News Investor Relations<br>Contact Us Log in<br>MiniMax Code API Platform<br>Log in<br>MiniMax Code API Platform<br>Models<br>LLM<br>MiniMax M3.1 Flash NEW<br>MiniMax M3 NEW<br>Video &amp; Image<br>MiniMax H3 NEW<br>MiniMax H3 Image NEW<br>SPEECH &amp; MUSIC<br>MiniMax Speech 2.8 NEW<br>MiniMax Music 3.0 NEW<br>API<br>M Plan<br>MiniMax Code<br>Research<br>Company<br>About<br>News<br>Investor Relations | M Plan - MiniMax API Platform Models<br>LLM<br>MiniMax M3.1 Flash MiniMax M3<br>Video &amp; Image<br>MiniMax H3 MiniMax H3 Image<br>SPEECH &amp; MUSIC<br>MiniMax Speech 2.8 MiniMax Music 3.0<br>API M Plan MiniMax Code Research Company<br>About News Investor Relations<br>Contact Us Log in<br>MiniMax Code API Platform<br>Log in<br>MiniMax Code API Platform<br>Models<br>LLM<br>MiniMax M3.1 Flash NEW<br>MiniMax M3 NEW<br>Video &amp; Image<br>MiniMax H3 NEW<br>MiniMax H3 Image NEW<br>SPEECH &amp; MUSIC<br>MiniMax Speech 2.8 NEW<br>MiniMax Music 3.0 NEW<br>API<br>M Plan<br>MiniMax Code<br>Research<br>Company<br>About<br>News<br>Investor Relations<br>Model<br>MiniMax M3.1 Flash<br>MiniMax M3<br>MiniMax H3<br>MiniMax H3 Image<br>MiniMax Speech 2.8<br>MiniMax Music 3.0<br>Product<br>MiniMax Code<br>MiniMax Design<br>MiniMax Audio<br>API Platform<br>Developer Docs<br>M Plan Subscription<br>Pricing<br>Console Login<br>Status<br>Company<br>About Us<br>News<br>Investor Relations<br>Careers<br>© 2026 MiniMax © MAX CIPHER PTE. LTD. |
| extraction | 新增 | 未记录 | 未记录 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：M Plan Subscription |

#### 来源 / minimax-global-mcp-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-model-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：Supports image, video, and audio references, for multi-asset video creation.<br>* **MiniMax-H3-Max**: The first **2 images** per task are free; additional images are billed per image. Input video is billed by duration at the output resolution. Audio input is free.<br>&gt; **Limited-Time Offer: 50% Off 4K Image Generation:** **From now until November 17, 2026, at 16:00 UTC** (exclusive), enjoy 50% off the total request cost for MiniMax-H3-Image and MiniMax-H3-Image-Highspeed when the final delivered image has at least 16,600,000 pixels (width × height). | 差异项（新增；相同内容已省略）：per image<br>* **Image input**: The free quota applies per task; additional images are billed per image.<br>* **Video input**: Applies to reference tasks only. Billed by input duration at the output resolution of the selected model.<br>* **Audio input**: Free for all extended models.<br>&gt; **Limited-Time Offer: 50% Off 4K Image Generation:** Enjoy 50% off the total request cost for MiniMax-H3-Image and MiniMax-H3-Image-Highspeed when the final delivered image has at least 16,600,000 pixels (width × height). |
| extraction | 新增 | 未记录 | 未记录 |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：\$0.074 | 差异项（新增；相同内容已省略）：\$0.074\<br>\$0.06\<br>\$0.12<br>\$0.10<br>\$0.015\<br>\$0.022<br>\$0.011\<br>\$0.038<br>\$0.04\ |
| structured records | 更新 | 列表（47 项）<details><summary>展开完整内容</summary><ul><li>模型 ID（model_id）：image-01<br>pricing row：section：H3-Image-Context-IR (Prompt Enhancement)<br>headers：• Model<br>• Price<br>values：• image-01 image-01-live<br>• $0.0035 per image<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.0035<br>source header：Price<br>source value：$0.0035 per image</li><li>模型 ID（model_id）：image-01-live<br>pricing row：section：H3-Image-Context-IR (Prompt Enhancement)<br>headers：• Model<br>• Price<br>values：• image-01 image-01-live<br>• $0.0035 per image<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.0035<br>source header：Price<br>source value：$0.0035 per image</li><li>模型 ID（model_id）：MiniMax-H3<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 2K<br>• $0.13<br>• $0.13<br>• $0.04<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.13<br>source header：Output Video\<br>      per second<br>source value：$0.13<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.13<br>source header：Input Video\<br>      per second<br>source value：$0.13<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.04</li><li>模型 ID（model_id）：MiniMax-H3<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 768P<br>• $0.08<br>• $0.08<br>• $0.04<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Input Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.04</li><li>模型 ID（model_id）：MiniMax-H3<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Context-IR<br>pricing row：section：Context-IR<br>headers：• Model / API<br>• Input Price per M tokens<br>• Output Price per M tokens<br>values：• MiniMax-H3-Context-IR<br>• $0.90<br>• $3.60<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.90<br>source header：Input Price per M tokens<br>source value：$0.90<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.60<br>source header：Output Price per M tokens<br>source value：$3.60</li><li>模型 ID（model_id）：MiniMax-H3-Highspeed<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 768P<br>• $0.06<br>• $0.06<br>• $0.03<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.06<br>source header：Output Video\<br>      per second<br>source value：$0.06<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.06<br>source header：Input Video\<br>      per second<br>source value：$0.06<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.03<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.03</li><li>模型 ID（model_id）：MiniMax-H3-Highspeed<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 480P<br>• $0.04<br>• $0.04<br>• $0.03<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Output Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.03<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.03</li><li>模型 ID（model_id）：MiniMax-H3-Highspeed<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Highspeed<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Image<br>pricing row：section：Image Generation<br>headers：• Model<br>• Input Text $ / M tokens<br>• Input Image $ / M tokens<br>• Output Image $ / M tokens<br>values：• MiniMax-H3-Image Standard<br>• $2.30<br>• $1.50<br>• $3.80<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：2.30<br>source header：Input Text $ / M tokens<br>source value：$2.30<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：1.50<br>source header：Input Image $ / M tokens<br>source value：$1.50<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.80<br>source header：Output Image $ / M tokens<br>source value：$3.80</li><li>模型 ID（model_id）：MiniMax-H3-Image-Highspeed<br>pricing row：section：Image Generation<br>headers：• Model<br>• Input Text $ / M tokens<br>• Input Image $ / M tokens<br>• Output Image $ / M tokens<br>values：• MiniMax-H3-Image-Highspeed Highspeed<br>• $2.30<br>• $3.00<br>• $7.60<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：2.30<br>source header：Input Text $ / M tokens<br>source value：$2.30<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.00<br>source header：Input Image $ / M tokens<br>source value：$3.00<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：7.60<br>source header：Output Image $ / M tokens<br>source value：$7.60</li><li>模型 ID（model_id）：MiniMax-H3-Lite<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 768P<br>• $0.04<br>• $0.04<br>• $0.02<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Output Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.02<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.02</li><li>模型 ID（model_id）：MiniMax-H3-Lite<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 480P<br>• $0.025<br>• $0.025<br>• $0.02<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Output Video\<br>      per second<br>source value：$0.025<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Input Video\<br>      per second<br>source value：$0.025<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.02<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.02</li><li>模型 ID（model_id）：MiniMax-H3-Lite<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Lite<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Max<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 768P<br>• $0.08<br>• $0.143<br>• $0.074<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.143<br>source header：Input Video\<br>      per second<br>source value：$0.143<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.074<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.074</li><li>模型 ID（model_id）：MiniMax-H3-Max<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Max\<br>      Supports image, video, and audio references, for multi-asset video creation.<br>• 480P<br>• $0.05<br>• $0.0553<br>• $0.074<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video\<br>      per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.0553<br>source header：Input Video\<br>      per second<br>source value：$0.0553<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.074<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.074</li><li>模型 ID（model_id）：MiniMax-H3-Max<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Max<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Regeneration<br>pricing row：section：Video Regeneration<br>headers：• Model / API<br>• Spec<br>• Output Video per second<br>• Input Video per second<br>• Input Image per image beyond free quota<br>values：• MiniMax-H3-Regeneration<br>• 768P → 2K<br>• $0.05<br>• $0.05<br>• $0.025<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Input Video per second<br>source value：$0.05<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Input Image per image beyond free quota<br>source value：$0.025</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.28 per 768P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.56 per 768P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.49 per 1080P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.10 per 512P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.15 per 512P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3<br>• $0.28 per 768P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3<br>• $0.56 per 768P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3<br>• $0.49 per 1080P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3-Fast<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3-Fast<br>• $0.19 per 768P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3-Fast<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3-Fast<br>• $0.32 per 768P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3-Fast<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3-Fast<br>• $0.33 per 1080P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.60~~ $0.30<br>• ~~$2.40~~ $1.20<br>• ~~$0.12~~ $0.06<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.30<br>list amount decimal：0.60<br>source header：Input $ / M tokens<br>source value：~~$0.60~~ $0.30<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：1.20<br>list amount decimal：2.40<br>source header：Output $ / M tokens<br>source value：~~$2.40~~ $1.20<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.06<br>list amount decimal：0.12<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.12~~ $0.06</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 &gt; 512k input tokens\* Permanent 50% off<br>• ~~$1.20~~ $0.60<br>• ~~$4.80~~ $2.40<br>• ~~$0.24~~ $0.12<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.60<br>list amount decimal：1.20<br>source header：Input $ / M tokens<br>source value：~~$1.20~~ $0.60<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：2.40<br>list amount decimal：4.80<br>source header：Output $ / M tokens<br>source value：~~$4.80~~ $2.40<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.12<br>list amount decimal：0.24<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.24~~ $0.12</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.90~~ $0.45<br>• ~~$3.60~~ $1.80<br>• ~~$0.18~~ $0.09<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.45<br>list amount decimal：0.90<br>source header：Input $ / M tokens<br>source value：~~$0.90~~ $0.45<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：1.80<br>list amount decimal：3.60<br>source header：Output $ / M tokens<br>source value：~~$3.60~~ $1.80<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.09<br>list amount decimal：0.18<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.18~~ $0.09</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 &gt; 512k input tokens Permanent 50% off<br>• ~~$1.80~~ $0.90<br>• ~~$7.20~~ $3.60<br>• ~~$0.36~~ $0.18<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.90<br>list amount decimal：1.80<br>source header：Input $ / M tokens<br>source value：~~$1.80~~ $0.90<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.60<br>list amount decimal：7.20<br>source header：Output $ / M tokens<br>source value：~~$7.20~~ $3.60<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.18<br>list amount decimal：0.36<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.36~~ $0.18</li><li>模型 ID（model_id）：MiniMax-M3.1-Flash<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3.1-Flash<br>• $0.15<br>• $0.60<br>• $0.015<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.15<br>source header：Input $ / M tokens<br>source value：$0.15<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.60<br>source header：Output $ / M tokens<br>source value：$0.60<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.015<br>source header：Prompt caching Read $ / M tokens<br>source value：$0.015</li><li>模型 ID（model_id）：Music-2.0<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.0<br>• $0.03 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：Music-2.5<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.5<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：Music-2.5+<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.5+<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：music-2.6<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.6<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：music-3.0<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-3.0<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：speech-02-hd<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100/M characters</li><li>模型 ID（model_id）：speech-02-turbo<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60/M characters</li><li>模型 ID（model_id）：speech-2.6-hd<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100/M characters</li><li>模型 ID（model_id）：speech-2.6-turbo<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60/M characters</li><li>模型 ID（model_id）：speech-2.8-hd<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A (Sync)<br>• speech-2.8-hd<br>• Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio.<br>• $100 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100 / M characters</li><li>模型 ID（model_id）：speech-2.8-hd<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A Async<br>• speech-2.8-hd<br>• Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously.<br>• $100 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100 / M characters</li><li>模型 ID（model_id）：speech-2.8-turbo<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A (Sync)<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60 / M characters</li><li>模型 ID（model_id）：speech-2.8-turbo<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A Async<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60 / M characters</li></ul></details> | 列表（62 项）<details><summary>展开完整内容</summary><ul><li>模型 ID（model_id）：image-01<br>pricing row：section：H3-Image-Context-IR (Prompt Enhancement)<br>headers：• Model<br>• Price<br>values：• image-01 image-01-live<br>• $0.0035 per image<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.0035<br>source header：Price<br>source value：$0.0035 per image</li><li>模型 ID（model_id）：image-01-live<br>pricing row：section：H3-Image-Context-IR (Prompt Enhancement)<br>headers：• Model<br>• Price<br>values：• image-01 image-01-live<br>• $0.0035 per image<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.0035<br>source header：Price<br>source value：$0.0035 per image</li><li>模型 ID（model_id）：MiniMax-H3<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 2K<br>• $0.13<br>• $0.13<br>• $0.04<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.13<br>source header：Output Video\<br>      per second<br>source value：$0.13<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.13<br>source header：Input Video\<br>      per second<br>source value：$0.13<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.04</li><li>模型 ID（model_id）：MiniMax-H3<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3\<br>      Quality first, for high-quality video creation.<br>• 768P<br>• $0.08<br>• $0.08<br>• $0.04<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Input Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.04</li><li>模型 ID（model_id）：MiniMax-H3<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Context-IR<br>pricing row：section：Context-IR<br>headers：• Model / API<br>• Input Price per M tokens<br>• Output Price per M tokens<br>values：• MiniMax-H3-Context-IR<br>• $0.90<br>• $3.60<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.90<br>source header：Input Price per M tokens<br>source value：$0.90<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.60<br>source header：Output Price per M tokens<br>source value：$3.60</li><li>模型 ID（model_id）：MiniMax-H3-Highspeed<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 768P<br>• $0.06<br>• $0.06<br>• $0.03<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.06<br>source header：Output Video\<br>      per second<br>source value：$0.06<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.06<br>source header：Input Video\<br>      per second<br>source value：$0.06<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.03<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.03</li><li>模型 ID（model_id）：MiniMax-H3-Highspeed<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Highspeed\<br>      Balances quality and speed, for everyday content creation.<br>• 480P<br>• $0.04<br>• $0.04<br>• $0.03<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Output Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.03<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.03</li><li>模型 ID（model_id）：MiniMax-H3-Highspeed<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Highspeed<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Image<br>pricing row：section：Image Generation<br>headers：• Model<br>• Input Text $ / M tokens<br>• Input Image $ / M tokens<br>• Output Image $ / M tokens<br>values：• MiniMax-H3-Image Standard<br>• $2.30<br>• $1.50<br>• $3.80<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：2.30<br>source header：Input Text $ / M tokens<br>source value：$2.30<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：1.50<br>source header：Input Image $ / M tokens<br>source value：$1.50<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.80<br>source header：Output Image $ / M tokens<br>source value：$3.80</li><li>模型 ID（model_id）：MiniMax-H3-Image-Highspeed<br>pricing row：section：Image Generation<br>headers：• Model<br>• Input Text $ / M tokens<br>• Input Image $ / M tokens<br>• Output Image $ / M tokens<br>values：• MiniMax-H3-Image-Highspeed Highspeed<br>• $2.30<br>• $3.00<br>• $7.60<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：2.30<br>source header：Input Text $ / M tokens<br>source value：$2.30<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.00<br>source header：Input Image $ / M tokens<br>source value：$3.00<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：7.60<br>source header：Output Image $ / M tokens<br>source value：$7.60</li><li>模型 ID（model_id）：MiniMax-H3-Lite<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 768P<br>• $0.04<br>• $0.04<br>• $0.02<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Output Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.02<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.02</li><li>模型 ID（model_id）：MiniMax-H3-Lite<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image\<br>      beyond free quota<br>values：• MiniMax-H3-Lite\<br>      Lower cost, for creative exploration and batch generation.<br>• 480P<br>• $0.025<br>• $0.025<br>• $0.02<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Output Video\<br>      per second<br>source value：$0.025<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Input Video\<br>      per second<br>source value：$0.025<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.02<br>source header：Input Image\<br>      per image\<br>      beyond free quota<br>source value：$0.02</li><li>模型 ID（model_id）：MiniMax-H3-Lite<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Lite<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Max<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max\<br>      Provider: fal<br>• 768P<br>• All<br>• $0.08<br>• $0.143<br>• $0.074\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.143<br>source header：Input Video\<br>      per second<br>source value：$0.143<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.074\<br>      first 2 free</li><li>模型 ID（model_id）：MiniMax-H3-Max<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max\<br>      Provider: fal<br>• 480P<br>• All<br>• $0.05<br>• $0.0553<br>• $0.074\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video\<br>      per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.0553<br>source header：Input Video\<br>      per second<br>source value：$0.0553<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.074\<br>      first 2 free</li><li>模型 ID（model_id）：MiniMax-H3-Max<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Max<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Max-Turbo<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 768P<br>• t2v / i2v<br>• $0.04<br>• —<br>• $0.06\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Output Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>source header：Input Video\<br>      per second<br>source value：—<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.06\<br>      first 2 free</li><li>模型 ID（model_id）：MiniMax-H3-Max-Turbo<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 768P<br>• reference<br>• $0.08<br>• $0.12<br>• $0.06\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.08<br>source header：Output Video\<br>      per second<br>source value：$0.08<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.12<br>source header：Input Video\<br>      per second<br>source value：$0.12<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.06\<br>      first 2 free</li><li>模型 ID（model_id）：MiniMax-H3-Max-Turbo<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 480P<br>• t2v / i2v<br>• $0.025<br>• —<br>• $0.06\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Output Video\<br>      per second<br>source value：$0.025<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>source header：Input Video\<br>      per second<br>source value：—<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.06\<br>      first 2 free</li><li>模型 ID（model_id）：MiniMax-H3-Max-Turbo<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-Max-Turbo\<br>      Provider: fal<br>• 480P<br>• reference<br>• $0.05<br>• $0.04<br>• $0.06\<br>      first 2 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video\<br>      per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Input Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.06\<br>      first 2 free</li><li>模型 ID（model_id）：MiniMax-H3-Max-Turbo<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-Max-Turbo<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-MG<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-MG\<br>      Provider: MachGen<br>• 2K<br>• t2v / i2v<br>• $0.10<br>• —<br>• Free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.10<br>source header：Output Video\<br>      per second<br>source value：$0.10<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>source header：Input Video\<br>      per second<br>source value：—<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0<br>source header：Input Image\<br>      per image<br>source value：Free</li><li>模型 ID（model_id）：MiniMax-H3-MG<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-MG\<br>      Provider: MachGen<br>• 2K<br>• reference<br>• $0.12<br>• $0.12<br>• Free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.12<br>source header：Output Video\<br>      per second<br>source value：$0.12<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.12<br>source header：Input Video\<br>      per second<br>source value：$0.12<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0<br>source header：Input Image\<br>      per image<br>source value：Free</li><li>模型 ID（model_id）：MiniMax-H3-MG<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-MG\<br>      Provider: MachGen<br>• 768P<br>• t2v / i2v<br>• $0.04<br>• —<br>• Free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.04<br>source header：Output Video\<br>      per second<br>source value：$0.04<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>source header：Input Video\<br>      per second<br>source value：—<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0<br>source header：Input Image\<br>      per image<br>source value：Free</li><li>模型 ID（model_id）：MiniMax-H3-MG<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-MG\<br>      Provider: MachGen<br>• 768P<br>• reference<br>• $0.06<br>• $0.06<br>• Free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.06<br>source header：Output Video\<br>      per second<br>source value：$0.06<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.06<br>source header：Input Video\<br>      per second<br>source value：$0.06<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0<br>source header：Input Image\<br>      per image<br>source value：Free</li><li>模型 ID（model_id）：MiniMax-H3-MG<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-MG<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-NC<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-NC\<br>      Provider: Nunchux AI<br>• 768P<br>• All<br>• $0.03<br>• $0.03<br>• $0.015\<br>      first 5 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.03<br>source header：Output Video\<br>      per second<br>source value：$0.03<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.03<br>source header：Input Video\<br>      per second<br>source value：$0.03<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.015\<br>      first 5 free</li><li>模型 ID（model_id）：MiniMax-H3-NC<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-NC\<br>      Provider: Nunchux AI<br>• 480P<br>• All<br>• $0.022<br>• $0.022<br>• $0.011\<br>      first 5 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.022<br>source header：Output Video\<br>      per second<br>source value：$0.022<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.022<br>source header：Input Video\<br>      per second<br>source value：$0.022<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.011\<br>      first 5 free</li><li>模型 ID（model_id）：MiniMax-H3-NC<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-NC<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-H3-Regeneration<br>pricing row：section：Video Regeneration<br>headers：• Model / API<br>• Spec<br>• Output Video per second<br>• Input Video per second<br>• Input Image per image beyond free quota<br>values：• MiniMax-H3-Regeneration<br>• 768P → 2K<br>• $0.05<br>• $0.05<br>• $0.025<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Output Video per second<br>source value：$0.05<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.05<br>source header：Input Video per second<br>source value：$0.05<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>金额（amount_decimal）：0.025<br>source header：Input Image per image beyond free quota<br>source value：$0.025</li><li>模型 ID（model_id）：MiniMax-H3-RH<br>pricing row：section：空字符串<br>headers：• Model<br>• Output Resolution<br>• Task Type<br>• Output Video\<br>      per second<br>• Input Video\<br>      per second<br>• Input Image\<br>      per image<br>values：• MiniMax-H3-RH\<br>      Provider: RunningHub<br>• 480P<br>• All<br>• $0.038<br>• $0.038<br>• $0.04\<br>      first 5 free<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.038<br>source header：Output Video\<br>      per second<br>source value：$0.038<br>• 计费指标（metric）：input_video<br>计量单位（unit）：per_second<br>quantity：1<br>金额（amount_decimal）：0.038<br>source header：Input Video\<br>      per second<br>source value：$0.038<br>• 计费指标（metric）：input_image<br>计量单位（unit）：per_image<br>quantity：1<br>source header：Input Image\<br>      per image<br>source value：$0.04\<br>      first 5 free</li><li>模型 ID（model_id）：MiniMax-H3-RH<br>pricing row：section：空字符串<br>headers：• Model<br>• Text-to-video t2v<br>• Image-to-video i2v<br>• First &amp; last frame fl2v<br>• Reference ref<br>values：• MiniMax-H3-RH<br>• Supported<br>• Supported<br>• Supported<br>• Image, video, audio<br>currency code：USD<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.28 per 768P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.56 per 768P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.49 per 1080P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.10 per 512P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-02<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-02<br>• $0.15 per 512P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3<br>• $0.28 per 768P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3<br>• $0.56 per 768P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3<br>• $0.49 per 1080P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3-Fast<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3-Fast<br>• $0.19 per 768P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3-Fast<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3-Fast<br>• $0.32 per 768P, 10s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-Hailuo-2.3-Fast<br>pricing row：section：Context-IR<br>headers：• Model<br>• Price<br>values：• MiniMax-Hailuo-2.3-Fast<br>• $0.33 per 1080P, 6s video<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.60~~ $0.30<br>• ~~$2.40~~ $1.20<br>• ~~$0.12~~ $0.06<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.30<br>list amount decimal：0.60<br>source header：Input $ / M tokens<br>source value：~~$0.60~~ $0.30<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：1.20<br>list amount decimal：2.40<br>source header：Output $ / M tokens<br>source value：~~$2.40~~ $1.20<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.06<br>list amount decimal：0.12<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.12~~ $0.06</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 &gt; 512k input tokens\* Permanent 50% off<br>• ~~$1.20~~ $0.60<br>• ~~$4.80~~ $2.40<br>• ~~$0.24~~ $0.12<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.60<br>list amount decimal：1.20<br>source header：Input $ / M tokens<br>source value：~~$1.20~~ $0.60<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：2.40<br>list amount decimal：4.80<br>source header：Output $ / M tokens<br>source value：~~$4.80~~ $2.40<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.12<br>list amount decimal：0.24<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.24~~ $0.12</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 ≤ 512k input tokens Permanent 50% off<br>• ~~$0.90~~ $0.45<br>• ~~$3.60~~ $1.80<br>• ~~$0.18~~ $0.09<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.45<br>list amount decimal：0.90<br>source header：Input $ / M tokens<br>source value：~~$0.90~~ $0.45<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：1.80<br>list amount decimal：3.60<br>source header：Output $ / M tokens<br>source value：~~$3.60~~ $1.80<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.09<br>list amount decimal：0.18<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.18~~ $0.09</li><li>模型 ID（model_id）：MiniMax-M3<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3 &gt; 512k input tokens Permanent 50% off<br>• ~~$1.80~~ $0.90<br>• ~~$7.20~~ $3.60<br>• ~~$0.36~~ $0.18<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.90<br>list amount decimal：1.80<br>source header：Input $ / M tokens<br>source value：~~$1.80~~ $0.90<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：3.60<br>list amount decimal：7.20<br>source header：Output $ / M tokens<br>source value：~~$7.20~~ $3.60<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.18<br>list amount decimal：0.36<br>source header：Prompt caching Read $ / M tokens<br>source value：~~$0.36~~ $0.18</li><li>模型 ID（model_id）：MiniMax-M3.1-Flash<br>pricing row：section：LLM<br>headers：• Model<br>• Input $ / M tokens<br>• Output $ / M tokens<br>• Prompt caching Read $ / M tokens<br>values：• MiniMax-M3.1-Flash<br>• $0.15<br>• $0.60<br>• $0.015<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：input<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.15<br>source header：Input $ / M tokens<br>source value：$0.15<br>• 计费指标（metric）：output<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.60<br>source header：Output $ / M tokens<br>source value：$0.60<br>• 计费指标（metric）：cache_read<br>计量单位（unit）：per_1m_tokens<br>quantity：1<br>金额（amount_decimal）：0.015<br>source header：Prompt caching Read $ / M tokens<br>source value：$0.015</li><li>模型 ID（model_id）：Music-2.0<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.0<br>• $0.03 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：Music-2.5<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.5<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：Music-2.5+<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.5+<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：music-2.6<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-2.6<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：music-3.0<br>pricing row：section：Billing and Usage<br>headers：• Model<br>• Price<br>values：• Music-3.0<br>• $0.15 per track (up to 5 minutes)<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：空列表</li><li>模型 ID（model_id）：speech-02-hd<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100/M characters</li><li>模型 ID（model_id）：speech-02-turbo<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60/M characters</li><li>模型 ID（model_id）：speech-2.6-hd<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-hd / speech-02-hd<br>• $100/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100/M characters</li><li>模型 ID（model_id）：speech-2.6-turbo<br>pricing row：section：Voice Management<br>headers：• API<br>• Model<br>• Price<br>values：• T2A<br>• speech-2.6-turbo / speech-02-turbo<br>• $60/M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60/M characters</li><li>模型 ID（model_id）：speech-2.8-hd<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A (Sync)<br>• speech-2.8-hd<br>• Real-time synthesis with volume/pitch/speed/mixing controls and bitrate/sample-rate options. Best for short-form conversational audio.<br>• $100 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100 / M characters</li><li>模型 ID（model_id）：speech-2.8-hd<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A Async<br>• speech-2.8-hd<br>• Asynchronous long-form synthesis, up to 1M characters per request, retrieved asynchronously.<br>• $100 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：100<br>source header：Price<br>source value：$100 / M characters</li><li>模型 ID（model_id）：speech-2.8-turbo<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A (Sync)<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60 / M characters</li><li>模型 ID（model_id）：speech-2.8-turbo<br>pricing row：section：Text-to-Speech (TTS)<br>headers：• API<br>• Model<br>• Description<br>• Price<br>values：• T2A Async<br>• speech-2.8-turbo<br>• Same capabilities as hd, optimized for speed and cost.<br>• $60 / M characters<br>currency code：USD<br>currency symbol：$<br>currency evidence：All prices are in USD.<br>normalized rates：• 计费指标（metric）：generated_character<br>计量单位（unit）：per_1m_characters<br>quantity：1<br>金额（amount_decimal）：60<br>source header：Price<br>source value：$60 / M characters</li></ul></details> |

#### 来源 / minimax-global-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：Video URL or Base64 encoding. Use the File API to upload | 差异项（新增；相同内容已省略）：- URL or Base64 input: video file ≤ 50 MB, image file ≤ 10 MB,<br>single video up to 512 MB.<br>- Up to 200 images and 20 videos across all `input` in one request,<br>- Image and video width and height must be greater than 0, and the<br>- Videos must contain a video stream (audio-only files are not<br>it must be at least 2 and no more than the video's actual total<br>and usually fails when `fps` exceeds the video's own frame rate.<br>- Total video pixels `scaled frame width × scaled frame height ×<br>Video URL, Base64 data URL, or Files API reference in the<br>upload the video via the [Upload<br>description: Video frame sampling rate. Defaults to 2. Range [0.2, 5]. |
| extraction | 新增 | 未记录 | 未记录 |

#### 来源 / minimax-global-video-guide

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | 未记录 |
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>If you have a video that meets the MiniMax-H3 768P output specifications, use [Create Video Regeneration Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-regeneration.md) to produce a 2K video. The request must reproduce all `content` used to generate the 768P video and add exactly one source-video item with `type=video_url` and `role=base_video`. | 差异项（新增 15 项）<details><summary>展开完整差异</summary><ul><li>## Control Video Audio</li><li>Use the optional boolean `generate_audio` parameter when creating a video task to control whether the video includes audio. The default is `true`.</li><li>* `true`: output a video with audio.</li><li>* `false`: output a silent video.</li><li>Set this parameter in the request body for text-to-video, image-to-video, or reference generation.</li><li>The example below outputs a video with audio by default. Call `invoke_text_to_video(generate_audio=False)` to generate a silent video.</li><li>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:</li><li>"generate_audio": generate_audio,</li><li># task_id = invoke_text_to_video(generate_audio=False)  # Text-to-video, silent video</li><li>To produce a 2K video from a video that meets the MiniMax-H3 768P output specifications, use [Create Video Regeneration Task](https://platform.minimax.io/docs/api-reference/video-generation-v2-regeneration.md) and choose one input mode:</li><li>* **By source video**: reproduce all `content` actually sent to the model for the 768P generation, including the final prompt after H3-Context-IR processing, then add exactly one source-video item with `type=video_url` and `role=base_video`. The `base_video` must contain an audio track.</li><li>Regeneration also supports `generate_audio`:</li><li>* **By source video**: defaults to `true` to output a video with audio; `false` outputs a silent video.</li><li>* **By task ID**: inherits the source task setting when omitted. If the source task was created with `generate_audio=false`, the result is always a silent video. Otherwise, `true` outputs a video with audio and `false` outputs a silent video.</li><li>A `base_video` without an audio track is rejected during asynchronous media validation. Receiving a `task_id` does not mean media validation has passed; query the final task status.</li></ul></details> |
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：def invoke_text_to_video() -&gt; str:<br>payload = {<br>"model": MODEL,<br>"content": [<br>{"type": "text", "text": "A little girl grows up."},<br># role=first_frame specifies the opening frame<br>{"type": "image_url", "image_url": {"url": "https://filecdn.minimax.chat/public/fe9d04da-f60e-444d-a2e0-18ae743add33.jpeg"}, "role": "first_frame"},<br># role=last_frame specifies the ending frame | 差异片段（新增；相同内容已省略）：## Control Video Audio<br>Use the optional boolean `generate_audio` parameter when creating a video task to control whether the video includes audio. The default is `true`.<br>* `true`: output a video with audio.<br>* `false`: output a silent video.<br>Set this parameter in the request body for text-to-video, image-to-video, or reference generation.<br>The example below outputs a video with audio by default. Call `invoke_text_to_video(generate_audio=False)` to generate a silent video.<br>def invoke_text_to_video(generate_audio: bool = True) -&gt; str:<br>"generate_audio": generate_audio, |
| extraction | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `minimax-cn-model-catalog` · MiniMax 中国站模型列表 | https://platform.minimax.cn/docs/faq/models.md | 2026-11-24T07:35:26.575Z | 200 | `sha256:ad27a06064bd5ea1130bc38ed6c95383a363e1e9485174c96310dde2c664d3dc` |
| cn | `minimax-cn-pricing` · MiniMax 中国站定价概览 | https://platform.minimax.cn/docs/pricing/overview.md | 2026-11-24T07:35:24.749Z | 200 | `sha256:27173a027ea69cf5b1e73a2bf530be892ed269282a8d5e7f80436406572d2b6c` |
| cn | `minimax-cn-video-api` · MiniMax 中国站视频生成接口规格 | https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md | 2026-11-24T07:35:26.358Z | 200 | `sha256:685b347f6fbf1fdda56c350275fe52c68de05e78e9d2d63d0a8d54cf8c2ed8ac` |
| cn | `minimax-cn-video-guide` · MiniMax 中国站通用视频模型说明 | https://platform.minimax.cn/docs/guides/video-generation.md | 2026-11-24T07:35:29.741Z | 200 | `sha256:1d928087e3c926cf6e747608c3819c693d69705656ecaa6936cc3c42238b4615` |
| cn | `minimax-cn-asr-api` · MiniMax 中国站语音识别接口规格 | https://platform.minimax.cn/docs/api-reference/speech-to-text.md | 2026-11-24T07:35:26.739Z | 200 | `sha256:8666563dd1915daaf85bef063f9200da9e4740b528ddea2905eefb0c05c2d3c6` |
| cn | `minimax-cn-audio-guide` · MiniMax 中国站语音生成通用指南 | https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md | 2026-11-24T07:35:26.654Z | 200 | `sha256:556a0083477067958feebb3148401ad72c0a928a2af3e2affc5238782a39f289` |
| cn | `minimax-cn-image-guide` · MiniMax 中国站图像生成通用指南 | https://platform.minimax.cn/docs/guides/image-generation.md | 2026-11-24T07:35:26.988Z | 200 | `sha256:538777042aff36e24ed741aad44684a8915b4717b62fbe216ccbdc33093d4c89` |
| cn | `minimax-cn-model-overview` · MiniMax 中国站模型概览（含音乐型号状态与 API 准入说明） | https://platform.minimax.cn/docs/guides/models-intro.md | 2026-11-24T07:35:27.369Z | 200 | `sha256:53ce46f2a70e47bcbc4e5682f142ab34679c883af86aff8a6fe69f7baf2c555f` |
| cn | `minimax-cn-anthropic-api` · MiniMax 中国站 Anthropic API 兼容与推理参数规格 | https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md | 2026-11-24T07:35:26.687Z | 200 | `sha256:11a5c466ef46e13669889e664274c3f9eb65baf9ff40984a205b81813ae2d268` |
| cn | `minimax-cn-function-call-api` · MiniMax 中国站 M3 工具调用与交错思维文档 | https://platform.minimax.cn/docs/guides/text-m3-function-call.md | 2026-11-24T07:35:26.737Z | 200 | `sha256:5df799e4ce5554baf7f2f56ac8779d00ef38bc380cf6fd64136f31a9b790a7ec` |
| cn | `minimax-cn-responses-api` · MiniMax 中国站 Responses API 接口规格 | https://platform.minimax.cn/docs/api-reference/responses-create.md | 2026-11-24T07:35:29.227Z | 200 | `sha256:a5ff9b3a2e27abad1c253a53a554f416a7b9d13c42e1709ecf09bb61987c397b` |
| cn | `minimax-cn-file-upload-api` · MiniMax 中国站文件管理与上传接口规格 | https://platform.minimax.cn/docs/api-reference/file-management-upload.md | 2026-11-24T07:35:26.941Z | 200 | `sha256:11b6a9b800ded4ce14deed175239816d5149053f3ad839cd282506deab7e20c1` |
| cn | `minimax-cn-mcp-guide` · MiniMax 中国站 M Plan MCP 指南 | https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md | 2026-11-24T07:35:30.529Z | 200 | `sha256:cd3fe5499cdee942baca47e8b0de506361fb8ae2b4cb6f2372db8e138bddaadf` |
| cn | `minimax-cn-m-plan-page` · MiniMax 中国站 M Plan 档位与价格 | https://www.minimax.cn/m-plan | 2026-11-24T07:35:27.972Z | 200 | `sha256:fca22091669b76dbb73ca889757e9c722643fd371b917a5520c2218c6885a3d0` |
| cn | `minimax-cn-m-plan-intro` · MiniMax 中国站 M Plan 档位使用参考原文 | https://platform.minimax.cn/docs/m-plan/intro.md | 2026-11-24T07:35:27.216Z | 200 | `sha256:95b089500d8fa4854e03ee2621548845f7552c03104e46bcf9a96ca79cb846c8` |
| global | `minimax-global-model-catalog` · MiniMax 国际站模型列表 | https://platform.minimax.io/docs/faq/models.md | 2026-11-24T07:35:26.585Z | 200 | `sha256:0183792f121a53fe2ad6bb724a4fc464b20543959175d85a707025884f37a96d` |
| global | `minimax-global-video-guide` · MiniMax International General Video Model Guide | https://platform.minimax.io/docs/guides/video-generation.md | 2026-11-24T07:35:26.632Z | 200 | `sha256:52f32aa591e77cf6ae81ce4007cd01c5e53ca46264eecc0dbfc5214b5be44c39` |
| global | `minimax-global-audio-guide` · MiniMax International General Speech Generation Guide | https://platform.minimax.io/docs/guides/speech-t2a-websocket.md | 2026-11-24T07:35:26.612Z | 200 | `sha256:2e6390bac06c72b3c9512b4274aa9804cf8e068580e40f06c2fca4311bc635d9` |
| global | `minimax-global-image-guide` · MiniMax International General Image Generation Guide | https://platform.minimax.io/docs/guides/image-generation.md | 2026-11-24T07:35:26.597Z | 200 | `sha256:d740427ec5835371c08b27b7a340721df61f67fceaff0221b0d8d3ca0ee486c0` |
| global | `minimax-global-model-overview` · MiniMax International Models overview (music models and API eligibility) | https://platform.minimax.io/docs/guides/models-intro.md | 2026-11-24T07:35:26.542Z | 200 | `sha256:90cd6051d407dc84ff953240d12397ad284fc5de04472765ef1246fe56cdb5eb` |
| global | `minimax-global-pricing` · MiniMax 国际站定价概览 | https://platform.minimax.io/docs/pricing/overview.md | 2026-11-24T07:35:26.620Z | 200 | `sha256:7f177084da0f2bf8b3711fc8669fb4e6c0f400cc307dad3d1f1736ad6c122cb9` |
| global | `minimax-global-file-upload-api` · MiniMax International File Management and Upload API | https://platform.minimax.io/docs/api-reference/file-management-upload.md | 2026-11-24T07:35:26.621Z | 200 | `sha256:e032377205c22f839667b23c8ee96e46d80d5c37c95352e0ca9b4fab6970b411` |
| global | `minimax-global-mcp-guide` · MiniMax International M Plan MCP Guide | https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md | 2026-11-24T07:35:26.802Z | 200 | `sha256:cbb4cd5af944a091b262e3df66a236c0d84608c13d3b6d79076fb3474d8ce79e` |
| global | `minimax-global-anthropic-api` · MiniMax 国际站 Anthropic API compatibility and reasoning parameters | https://platform.minimax.io/docs/api-reference/text-anthropic-api.md | 2026-11-24T07:35:26.663Z | 200 | `sha256:ea7daead1dacc0dd3702ff481a97260627d1ef3dea45e9f4c3a0000d9364c65d` |
| global | `minimax-global-responses-api` · MiniMax International Responses API specification | https://platform.minimax.io/docs/api-reference/responses-create.md | 2026-11-24T07:35:26.855Z | 200 | `sha256:e1e4261e9ea13303d8e334f6b19b6d2ca7b1c7e44bda56658b95ce5124257485` |
| global | `minimax-global-function-call-api` · MiniMax International M3 tool calling and interleaved thinking guide | https://platform.minimax.io/docs/guides/text-m3-function-call.md | 2026-11-24T07:35:26.738Z | 200 | `sha256:57b67d51bbb29a206eebae8a016475ee78dad4073977e4a24b98b0f1f038c3e6` |
| global | `minimax-global-m-plan-page` · MiniMax Global M Plan tiers and pricing | https://www.minimax.io/m-plan | 2026-11-24T07:35:26.818Z | 200 | `sha256:6b0f2ce19b483990dbb33e10a0e55ac4a338dd3fa3d1a0c8059b2cd3d475ed0c` |
| global | `minimax-global-m-plan-intro` · MiniMax International M Plan tier usage guide wording | https://platform.minimax.io/docs/m-plan/intro.md | 2026-11-24T07:35:26.675Z | 200 | `sha256:5066155c189b75927fd7cf910a7c7044398cb5441468797f0cdd71fb6c602484` |

## minimax 专属证据与核对说明

### MiniMax IR 观察候选

- IR 指纹：`sha256:f243374f285a3bfe213d3195032c2afa1b54cb2c7e24485cb2f8fcd99ff48b32`
- 来源快照：28 份
- 当前输出保留 CN/Global 目录、价格和 API 文档观察，不投影领域字段。

#### 待人工核对

- 目录状态、Token 价格、视频/语音 API、协议参数和计划权益仍需按市场映射到 IR 领域字段；当前统一候选只保留来源观察。

#### 来源快照

- `minimax-cn-model-catalog`：https://platform.minimax.cn/docs/faq/models.md
- `minimax-cn-pricing`：https://platform.minimax.cn/docs/pricing/overview.md
- `minimax-cn-video-api`：https://platform.minimax.cn/docs/api-reference/video-generation-v2-create.md
- `minimax-cn-video-guide`：https://platform.minimax.cn/docs/guides/video-generation.md
- `minimax-cn-asr-api`：https://platform.minimax.cn/docs/api-reference/speech-to-text.md
- `minimax-cn-audio-guide`：https://platform.minimax.cn/docs/guides/speech-t2a-websocket.md
- `minimax-cn-image-guide`：https://platform.minimax.cn/docs/guides/image-generation.md
- `minimax-cn-model-overview`：https://platform.minimax.cn/docs/guides/models-intro.md
- `minimax-cn-anthropic-api`：https://platform.minimax.cn/docs/api-reference/text-anthropic-api.md
- `minimax-cn-function-call-api`：https://platform.minimax.cn/docs/guides/text-m3-function-call.md
- `minimax-cn-responses-api`：https://platform.minimax.cn/docs/api-reference/responses-create.md
- `minimax-cn-file-upload-api`：https://platform.minimax.cn/docs/api-reference/file-management-upload.md
- `minimax-cn-mcp-guide`：https://platform.minimax.cn/docs/guides/token-plan-mcp-guide.md
- `minimax-cn-m-plan-page`：https://www.minimax.cn/m-plan
- `minimax-cn-m-plan-intro`：https://platform.minimax.cn/docs/m-plan/intro.md
- `minimax-global-model-catalog`：https://platform.minimax.io/docs/faq/models.md
- `minimax-global-video-guide`：https://platform.minimax.io/docs/guides/video-generation.md
- `minimax-global-audio-guide`：https://platform.minimax.io/docs/guides/speech-t2a-websocket.md
- `minimax-global-image-guide`：https://platform.minimax.io/docs/guides/image-generation.md
- `minimax-global-model-overview`：https://platform.minimax.io/docs/guides/models-intro.md
- `minimax-global-pricing`：https://platform.minimax.io/docs/pricing/overview.md
- `minimax-global-file-upload-api`：https://platform.minimax.io/docs/api-reference/file-management-upload.md
- `minimax-global-mcp-guide`：https://platform.minimax.io/docs/guides/token-plan-mcp-guide.md
- `minimax-global-anthropic-api`：https://platform.minimax.io/docs/api-reference/text-anthropic-api.md
- `minimax-global-responses-api`：https://platform.minimax.io/docs/api-reference/responses-create.md
- `minimax-global-function-call-api`：https://platform.minimax.io/docs/guides/text-m3-function-call.md
- `minimax-global-m-plan-page`：https://www.minimax.io/m-plan
- `minimax-global-m-plan-intro`：https://platform.minimax.io/docs/m-plan/intro.md
