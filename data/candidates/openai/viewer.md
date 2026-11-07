# openai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `openai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-07T03:43:39.603Z |
| 前一候选指纹 | `sha256:6fdd0a8ab725f9a74a2e865c88315795f13eebfe2c1a92e43ae02805705af9ed` |
| 本次候选指纹 | `sha256:251b9fb2aee77483a8763a2e7909c0542a7dfbe89bfc82b71a6880c478b6799e` |
| 来源快照 | 11 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 143 项，更新 14 项，缺席待核实 0 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 openai-models-all › record count | 更新 | 104 | 105 |
| 记录 openai-pricing › note | 更新 | 已从精确目录 ID 匹配并解析 46 个型号的支持价格档位；未匹配型号、非 Token 价格及其他定价范围仍未映射。 | 已从精确目录 ID 匹配并解析 47 个型号的支持价格档位；未匹配型号、非 Token 价格及其他定价范围仍未映射。 |
| 记录 openai-pricing › record count | 更新 | 46 | 47 |

### 文档观察

#### 来源 / openai-image-generation

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api mentions | 更新 | 差异项（删除；相同内容已省略）：Set `output_format: "gif"` on `POST /v1/images/generations`. Describe the subject, motion, and desired loop in your prompt. GIF output is for image generation; the image edit endpoint does not support GIF output. | 差异项（新增；相同内容已省略）：Set `output_format: "gif"` on `POST /v1/images/generations` or `POST /v1/images/edits`. Describe the subject, motion, and desired loop in your prompt. To guide the animation with still reference images, send them to the image edit endpoint. |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：Set `output_format: "gif"` on `POST /v1/images/generations`. Describe the subject, motion, and desired loop in your prompt. GIF output is for image generation; the image edit endpoint does not support GIF output. | 差异项（新增；相同内容已省略）：Set `output_format: "gif"` on `POST /v1/images/generations` or `POST /v1/images/edits`. Describe the subject, motion, and desired loop in your prompt. To guide the animation with still reference images, send them to the image edit endpoint. |
| tables | 更新 | 列表（8 项）<details><summary>展开完整内容</summary><ul><li>heading：Result<br>headers：• Partial 1<br>• Partial 2<br>• Final image<br>rows：• • 空字符串<br>• 空字符串<br>• 空字符串</li><li>heading：Save the image to a file<br>headers：• Image<br>• Mask<br>• Output<br>rows：• • 空字符串<br>• 空字符串<br>• 空字符串</li><li>heading：Size and quality options<br>headers：• Setting<br>• Options<br>rows：• • Recommended sizes<br>• `1024x1024` (square), `1536x1024` (landscape), `1024x1536` (portrait)<br>• • Quality<br>• `low`, `medium`, `high`, `xhigh`, `max`, `auto`</li><li>heading：Generate animated GIF output<br>headers：• Field<br>• Values<br>• Default<br>rows：• • `frame_count`<br>• 2–64 frames<br>• 9<br>• • `frame_duration_ms`<br>• 20–2000 milliseconds per frame, rounded to 10 ms<br>• 200<br>• • `size`<br>• `auto`, or `WIDTHxHEIGHT` with positive dimensions that are multiples of 16<br>• `auto`</li><li>heading：Models prior to `gpt-image-2`<br>headers：• Quality<br>• Square (1024×1024)<br>• Portrait (1024×1536)<br>• Landscape (1536×1024)<br>rows：• • Low<br>• 272 tokens<br>• 408 tokens<br>• 400 tokens<br>• • Medium<br>• 1056 tokens<br>• 1584 tokens<br>• 1568 tokens<br>• • High<br>• 4160 tokens<br>• 6240 tokens<br>• 6208 tokens</li><li>heading：空字符串<br>headers：• "Generate an image of gray tabby cat hugging an otter with an orange scarf"<br>• 空字符串<br>rows：• • "Now make it look realistic"<br>• 空字符串</li><li>heading：空字符串<br>headers：• Popular sizes<br>• `1024x1024` (square) `1536x1024` (landscape) `1024x1536` (portrait) `2048x2048` (2K square) `2048x1152` (2K landscape) `3840x2160` (4K landscape) `2160x3840` (4K portrait) `auto` (default)<br>rows：• • Size constraints<br>• Maximum edge length must be less than or equal to `3840px` Both edges must be multiples of `16px` Long edge to short edge ratio must not exceed `3:1` Total pixels must be at least `655,360` and no more than `8,294,400`<br>• • Quality options<br>• `low` `medium` `high` `auto` (default)</li><li>heading：空字符串<br>headers：• Model<br>• Quality<br>• 1024 × 1024<br>• 1024 × 1536<br>• 1536 × 1024<br>rows：• • GPT Image 2 Additional sizes available<br>• Low<br>• $0.006<br>• $0.005<br>• $0.005<br>• • Medium<br>• $0.053<br>• $0.041<br>• $0.041<br>• • High<br>• $0.211<br>• $0.165<br>• $0.165<br>• • GPT Image 1.5<br>• Low<br>• $0.009<br>• $0.013<br>• $0.013<br>• • Medium<br>• $0.034<br>• $0.05<br>• $0.05<br>• • High<br>• $0.133<br>• $0.2<br>• $0.2<br>• • GPT Image 1<br>• Low<br>• $0.011<br>• $0.016<br>• $0.016<br>• • Medium<br>• $0.042<br>• $0.063<br>• $0.063<br>• • High<br>• $0.167<br>• $0.25<br>• $0.25<br>• • GPT Image 1 Mini<br>• Low<br>• $0.005<br>• $0.006<br>• $0.006<br>• • Medium<br>• $0.011<br>• $0.015<br>• $0.015<br>• • High<br>• $0.036<br>• $0.052<br>• $0.052</li></ul></details> | 列表（8 项）<details><summary>展开完整内容</summary><ul><li>heading：Result<br>headers：• Partial 1<br>• Partial 2<br>• Final image<br>rows：• • 空字符串<br>• 空字符串<br>• 空字符串</li><li>heading：Save the image to a file<br>headers：• Image<br>• Mask<br>• Output<br>rows：• • 空字符串<br>• 空字符串<br>• 空字符串</li><li>heading：Size and quality options<br>headers：• Setting<br>• Options<br>rows：• • Recommended sizes<br>• `1024x1024` (square), `1536x1024` (landscape), `1024x1536` (portrait)<br>• • Quality<br>• `low`, `medium`, `high`, `xhigh`, `max`, `auto`</li><li>heading：Generate animated GIF output<br>headers：• Field<br>• Values<br>• Default<br>rows：• • `frame_count`<br>• 2–16 frames<br>• 9<br>• • `frame_duration_ms`<br>• 20–2000 milliseconds per frame, rounded to 10 ms<br>• 200<br>• • `size`<br>• `auto`, or `WIDTHxHEIGHT` with positive dimensions that are multiples of 16<br>• `auto`</li><li>heading：Models prior to `gpt-image-2`<br>headers：• Quality<br>• Square (1024×1024)<br>• Portrait (1024×1536)<br>• Landscape (1536×1024)<br>rows：• • Low<br>• 272 tokens<br>• 408 tokens<br>• 400 tokens<br>• • Medium<br>• 1056 tokens<br>• 1584 tokens<br>• 1568 tokens<br>• • High<br>• 4160 tokens<br>• 6240 tokens<br>• 6208 tokens</li><li>heading：空字符串<br>headers：• "Generate an image of gray tabby cat hugging an otter with an orange scarf"<br>• 空字符串<br>rows：• • "Now make it look realistic"<br>• 空字符串</li><li>heading：空字符串<br>headers：• Popular sizes<br>• `1024x1024` (square) `1536x1024` (landscape) `1024x1536` (portrait) `2048x2048` (2K square) `2048x1152` (2K landscape) `3840x2160` (4K landscape) `2160x3840` (4K portrait) `auto` (default)<br>rows：• • Size constraints<br>• Maximum edge length must be less than or equal to `3840px` Both edges must be multiples of `16px` Long edge to short edge ratio must not exceed `3:1` Total pixels must be at least `655,360` and no more than `8,294,400`<br>• • Quality options<br>• `low` `medium` `high` `auto` (default)</li><li>heading：空字符串<br>headers：• Model<br>• Quality<br>• 1024 × 1024<br>• 1024 × 1536<br>• 1536 × 1024<br>rows：• • GPT Image 2 Additional sizes available<br>• Low<br>• $0.006<br>• $0.005<br>• $0.005<br>• • Medium<br>• $0.053<br>• $0.041<br>• $0.041<br>• • High<br>• $0.211<br>• $0.165<br>• $0.165<br>• • GPT Image 1.5<br>• Low<br>• $0.009<br>• $0.013<br>• $0.013<br>• • Medium<br>• $0.034<br>• $0.05<br>• $0.05<br>• • High<br>• $0.133<br>• $0.2<br>• $0.2<br>• • GPT Image 1<br>• Low<br>• $0.011<br>• $0.016<br>• $0.016<br>• • Medium<br>• $0.042<br>• $0.063<br>• $0.063<br>• • High<br>• $0.167<br>• $0.25<br>• $0.25<br>• • GPT Image 1 Mini<br>• Low<br>• $0.005<br>• $0.006<br>• $0.006<br>• • Medium<br>• $0.011<br>• $0.015<br>• $0.015<br>• • High<br>• $0.036<br>• $0.052<br>• $0.052</li></ul></details> |

#### 来源 / openai-models-all

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gpt-6-cyber<br>GPT-6-Cyber |

#### 来源 / openai-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：GPT-6-Cyber |

#### 来源 / openai-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| excerpt | 更新 | 差异片段（删除；相同内容已省略）：&#124; gpt-image-2.5-sunburst &#124; Image &#124; $8.00 &#124; $30.00 &#124; $2.00 &#124; | 差异片段（新增；相同内容已省略）：&#124; gpt-6-cyber &#124; $20.00 &#124; $100.00 &#124; $2.00 &#124; $25.00 &#124; $50.00 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; |
| model id mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：gpt-6-cyber |
| plan or price mentions | 更新 | 差异项（删除；相同内容已省略）：无 | 差异项（新增；相同内容已省略）：&#124; gpt-6-cyber &#124; $20.00 &#124; $100.00 &#124; $2.00 &#124; $25.00 &#124; $50.00 &#124; - &#124; - &#124; - &#124; - &#124; - &#124; |
| tables | 更新 | 列表（22 项）<details><summary>展开完整内容</summary><ul><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Standard pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• • gpt-6.1-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• • gpt-6.1-terra<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6-luna<br>• $0.10<br>• $0.50<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.75<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-terra<br>• $2.00<br>• $12.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $18.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-luna<br>• $0.20<br>• $1.20<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.80<br>• $0.04<br>• $0.50<br>• $1.00<br>• • gpt-5.5 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• $10.00<br>• $45.00<br>• $1.00<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Standard pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.75<br>• $4.50<br>• $0.075</li><li>• gpt-5.4-nano<br>• $0.20<br>• $1.25<br>• $0.02</li><li>• gpt-5.2<br>• $1.75<br>• $14.00<br>• $0.175</li><li>• gpt-5.2-pro<br>• $21.00<br>• $168.00<br>• -</li><li>• gpt-5.1<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5-mini<br>• $0.25<br>• $2.00<br>• $0.025</li><li>• gpt-5-nano<br>• $0.05<br>• $0.40<br>• $0.005</li><li>• gpt-5-pro<br>• $15.00<br>• $120.00<br>• -</li><li>• gpt-4.1<br>• $2.00<br>• $8.00<br>• $0.50</li><li>• gpt-4.1-mini<br>• $0.40<br>• $1.60<br>• $0.10</li><li>• gpt-4o<br>• $2.50<br>• $10.00<br>• $1.25</li><li>• gpt-4o-mini<br>• $0.15<br>• $0.60<br>• $0.075</li><li>• o3-pro<br>• $20.00<br>• $80.00<br>• -</li><li>• o3<br>• $2.00<br>• $8.00<br>• $0.50</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Batch</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00<br>• • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50<br>• • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25<br>• • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Batch<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375</li><li>• gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01</li><li>• gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875</li><li>• gpt-5.2-pro<br>• $10.50<br>• $84.00<br>• -</li><li>• gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125</li><li>• gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025</li><li>• gpt-5-pro<br>• $7.50<br>• $60.00<br>• -</li><li>• gpt-4.1<br>• $1.00<br>• $4.00<br>• -</li><li>• gpt-4.1-mini<br>• $0.20<br>• $0.80<br>• -</li><li>• gpt-4o<br>• $1.25<br>• $5.00<br>• -</li><li>• gpt-4o-mini<br>• $0.075<br>• $0.30<br>• -</li><li>• o3-pro<br>• $10.00<br>• $40.00<br>• -</li><li>• o3<br>• $1.00<br>• $4.00<br>• -</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Flex</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00<br>• • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50<br>• • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25<br>• • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Flex<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375<br>• • gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01<br>• • gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875<br>• • gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125<br>• • gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025<br>• • o3<br>• $1.00<br>• $4.00<br>• $0.25</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Fast pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• $40.00<br>• $150.00<br>• $4.00<br>• $50.00<br>• $100.00<br>• • gpt-6.1-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• • gpt-6.1-terra<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• • gpt-6-luna<br>• $0.20<br>• $1.00<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.50<br>• $0.04<br>• $0.50<br>• $1.00<br>• • gpt-6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-sol<br>• $8.00<br>• $40.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $1.60<br>• $20.00<br>• $40.00<br>• • gpt-5.6-terra<br>• $4.00<br>• $24.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $36.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-luna<br>• $0.40<br>• $2.40<br>• $0.04<br>• $0.50<br>• $1.00<br>• $0.80<br>• $3.60<br>• $0.08<br>• $1.00<br>• $2.00<br>• • gpt-5.5 (&lt;272K context length)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Fast pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $1.50<br>• $9.00<br>• $0.15<br>• • gpt-5.2<br>• $3.50<br>• $28.00<br>• $0.35<br>• • gpt-5.1<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5-mini<br>• $0.45<br>• $3.60<br>• $0.045<br>• • gpt-4.1<br>• $3.50<br>• $14.00<br>• $0.875<br>• • gpt-4.1-mini<br>• $0.70<br>• $2.80<br>• $0.175<br>• • gpt-4o<br>• $4.25<br>• $17.00<br>• $2.125<br>• • gpt-4o-mini<br>• $0.25<br>• $1.00<br>• $0.125<br>• • o3<br>• $3.50<br>• $14.00<br>• $0.875</li><li>heading：Ultrafast pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-astra<br>• $60.00<br>• $300.00<br>• $6.00<br>• $75.00<br>• $150.00<br>• $120.00<br>• $450.00<br>• $12.00<br>• $150.00<br>• $300.00<br>• • gpt-6.1-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00</li><li>heading：Standard pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-cyber<br>• $12.50<br>• $75.00<br>• $1.25<br>• $15.625<br>• $31.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.5-cyber<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>heading：Standard pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-rosalind<br>• $15.00<br>• $75.00<br>• $1.50<br>• $18.75<br>• $37.50<br>• $30.00<br>• $112.50<br>• $3.00<br>• $37.50<br>• $75.00<br>• • gpt-rosalind-research<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-rosalind-discovery<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>heading：Grouped Pricing Table data<br>headers：• Model configuration<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-6-astra-law<br>• $10.00<br>• $50.00<br>• $1.00</li><li>heading：Pricing Table data<br>headers：• Model<br>• Price per minute<br>rows：• • gpt-live-1<br>• $0.05</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Grouped Pricing Table data</li><li>headers：• Model<br>• Modality<br>• Input<br>• Output / cost<br>• Cached input</li><li>rows：列表（28 项）<details><summary>展开完整内容</summary><ul><li>• gpt-realtime-2.1<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-2.1-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-2.1-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-2.1-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime-2<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-audio-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio-1.5<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-audio-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• -</li><li>• gpt-audio-mini<br>• Text<br>• $0.60<br>• $2.40<br>• -</li><li>• gpt-audio<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Audio<br>• -<br>• $12.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Text<br>• $0.60<br>• -<br>• -</li><li>• tts-1<br>• Text<br>• $15.00 / 1M characters<br>• -<br>• -</li><li>• tts-1-hd<br>• Text<br>• $30.00 / 1M characters<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• gpt-image-2.6-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.6-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-1.5<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• gpt-image-1.5<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li><li>• gpt-image-1-mini<br>• Image<br>• $2.50<br>• $8.00<br>• $0.25</li><li>• gpt-image-1-mini<br>• Text<br>• $2.00<br>• -<br>• $0.20</li><li>• chatgpt-image-latest<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• chatgpt-image-latest<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-image-2<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00<br>• • gpt-image-2<br>• Text<br>• $2.50<br>• -<br>• $0.625<br>• • gpt-image-2.5-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00<br>• • gpt-image-2.5-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625<br>• • gpt-image-2.5-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00<br>• • gpt-image-2.5-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625<br>• • gpt-image-1.5<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00<br>• • gpt-image-1.5<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63<br>• • gpt-image-1-mini<br>• Image<br>• $1.25<br>• $4.00<br>• $0.13<br>• • gpt-image-1-mini<br>• Text<br>• $1.00<br>• -<br>• $0.10<br>• • chatgpt-image-latest<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00<br>• • chatgpt-image-latest<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63</li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Use case<br>• Input<br>• Output<br>• Estimated cost<br>rows：• • gpt-realtime-translate<br>• Live translation<br>• -<br>• -<br>• $0.034 / minute<br>• • gpt-live-transcribe<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-realtime-whisper<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-transcribe<br>• Transcription<br>• -<br>• -<br>• $0.0045 / minute<br>• • gpt-4o-transcribe<br>• Transcription<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • gpt-4o-mini-transcribe<br>• Transcription<br>• $1.25<br>• $5.00<br>• $0.003 / minute<br>• • gpt-4o-transcribe-diarize<br>• Transcription + diarization<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • Whisper<br>• Transcription<br>• -<br>• -<br>• $0.006 / minute</li><li>heading：Grouped Pricing Table data<br>headers：• Tool<br>• Details<br>• Pricing<br>rows：• • Web search<br>• Web search (all models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Image Web search (all models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (reasoning models, including `gpt-5`, `o-series`)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (non-reasoning models)<br>• $25.00 / 1k calls + Search content tokens are free.<br>• • Containers<br>• Hosted Shell and Code Interpreter<br>• 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container.<br>• • File search<br>• Storage<br>• $0.10 / GB per day (1 GB free)<br>• • File search<br>• Tool call<br>• $2.50 / 1k calls<br>• • Agent Kit<br>• ChatKit file and image upload storage<br>• $0.10 / GB-day after 1 GB free per account per month</li><li>heading：Grouped Pricing Table data<br>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • ChatGPT<br>• chat-latest<br>• $5.00<br>• $30.00<br>• $0.50<br>• • Codex<br>• gpt-5.3-codex<br>• $1.75<br>• $14.00<br>• $0.175<br>• • Search<br>• gpt-5-search-api<br>• $1.25<br>• $10.00<br>• $0.125<br>• • Embedding<br>• text-embedding-3-small<br>• $0.02<br>• -<br>• -<br>• • Embedding<br>• text-embedding-3-large<br>• $0.13<br>• -<br>• -<br>• • Embedding<br>• text-embedding-ada-002<br>• $0.10<br>• -<br>• -<br>• • Moderation<br>• omni-moderation-latest<br>• Free<br>• -<br>• -</li><li>heading：Grouped Pricing Table data<br>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • Codex<br>• gpt-5.3-codex<br>• $3.50<br>• $28.00<br>• $0.35</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $3.00<br>• $12.00<br>• $0.75<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.80<br>• $3.20<br>• $0.20<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $3.75<br>• $15.00<br>• $1.875<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.30<br>• $1.20<br>• $0.15</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $1.50<br>• $6.00<br>• $0.50<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.40<br>• $1.60<br>• $0.10<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $2.225<br>• $12.50<br>• $0.90<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.15<br>• $0.60<br>• $0.075</li></ul></details> | 列表（22 项）<details><summary>展开完整内容</summary><ul><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Standard pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $10.00<br>• $50.00<br>• $1.00<br>• $12.50<br>• $25.00<br>• $20.00<br>• $75.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• • gpt-6.1-sol<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• • gpt-6.1-terra<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6-luna<br>• $0.10<br>• $0.50<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.75<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-terra<br>• $2.00<br>• $12.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $18.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-luna<br>• $0.20<br>• $1.20<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.80<br>• $0.04<br>• $0.50<br>• $1.00<br>• • gpt-5.5 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• $10.00<br>• $45.00<br>• $1.00<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $30.00<br>• $180.00<br>• -<br>• -<br>• -<br>• $60.00<br>• $270.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Standard pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.75<br>• $4.50<br>• $0.075</li><li>• gpt-5.4-nano<br>• $0.20<br>• $1.25<br>• $0.02</li><li>• gpt-5.2<br>• $1.75<br>• $14.00<br>• $0.175</li><li>• gpt-5.2-pro<br>• $21.00<br>• $168.00<br>• -</li><li>• gpt-5.1<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5<br>• $1.25<br>• $10.00<br>• $0.125</li><li>• gpt-5-mini<br>• $0.25<br>• $2.00<br>• $0.025</li><li>• gpt-5-nano<br>• $0.05<br>• $0.40<br>• $0.005</li><li>• gpt-5-pro<br>• $15.00<br>• $120.00<br>• -</li><li>• gpt-4.1<br>• $2.00<br>• $8.00<br>• $0.50</li><li>• gpt-4.1-mini<br>• $0.40<br>• $1.60<br>• $0.10</li><li>• gpt-4o<br>• $2.50<br>• $10.00<br>• $1.25</li><li>• gpt-4o-mini<br>• $0.15<br>• $0.60<br>• $0.075</li><li>• o3-pro<br>• $20.00<br>• $80.00<br>• -</li><li>• o3<br>• $2.00<br>• $8.00<br>• $0.50</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Batch</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00<br>• • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50<br>• • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25<br>• • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Batch<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：列表（15 项）<details><summary>展开完整内容</summary><ul><li>• gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375</li><li>• gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01</li><li>• gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875</li><li>• gpt-5.2-pro<br>• $10.50<br>• $84.00<br>• -</li><li>• gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625</li><li>• gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125</li><li>• gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025</li><li>• gpt-5-pro<br>• $7.50<br>• $60.00<br>• -</li><li>• gpt-4.1<br>• $1.00<br>• $4.00<br>• -</li><li>• gpt-4.1-mini<br>• $0.20<br>• $0.80<br>• -</li><li>• gpt-4o<br>• $1.25<br>• $5.00<br>• -</li><li>• gpt-4o-mini<br>• $0.075<br>• $0.30<br>• -</li><li>• o3-pro<br>• $10.00<br>• $40.00<br>• -</li><li>• o3<br>• $1.00<br>• $4.00<br>• -</li></ul></details></li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Flex</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $5.00<br>• $25.00<br>• $0.50<br>• $6.25<br>• $12.50<br>• $10.00<br>• $37.50<br>• $1.00<br>• $12.50<br>• $25.00<br>• • gpt-6.1-sol<br>• $1.00<br>• $5.00<br>• $0.05<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.10<br>• $2.50<br>• $5.00<br>• • gpt-6.1-terra<br>• $0.50<br>• $2.50<br>• $0.025<br>• $0.625<br>• $1.25<br>• $1.00<br>• $3.75<br>• $0.05<br>• $1.25<br>• $2.50<br>• • gpt-6-luna<br>• $0.05<br>• $0.25<br>• $0.005<br>• $0.0625<br>• $0.125<br>• $0.10<br>• $0.375<br>• $0.01<br>• $0.125<br>• $0.25<br>• • gpt-6-sol<br>• $1.00<br>• $5.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $7.50<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-sol<br>• $2.00<br>• $10.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• • gpt-5.6-terra<br>• $1.00<br>• $6.00<br>• $0.10<br>• $1.25<br>• $2.50<br>• $2.00<br>• $9.00<br>• $0.20<br>• $2.50<br>• $5.00<br>• • gpt-5.6-luna<br>• $0.10<br>• $0.60<br>• $0.01<br>• $0.125<br>• $0.25<br>• $0.20<br>• $0.90<br>• $0.02<br>• $0.25<br>• $0.50<br>• • gpt-5.5 (&lt;272K context length)<br>• $2.50<br>• $15.00<br>• $0.25<br>• -<br>• -<br>• $5.00<br>• $22.50<br>• $0.50<br>• -<br>• -<br>• • gpt-5.5-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $1.25<br>• $7.50<br>• $0.13<br>• -<br>• -<br>• $2.50<br>• $11.25<br>• $0.25<br>• -<br>• -<br>• • gpt-5.4-pro (&lt;272K context length)<br>• $15.00<br>• $90.00<br>• -<br>• -<br>• -<br>• $30.00<br>• $135.00<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Flex<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $0.375<br>• $2.25<br>• $0.0375<br>• • gpt-5.4-nano<br>• $0.10<br>• $0.625<br>• $0.01<br>• • gpt-5.2<br>• $0.875<br>• $7.00<br>• $0.0875<br>• • gpt-5.1<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5<br>• $0.625<br>• $5.00<br>• $0.0625<br>• • gpt-5-mini<br>• $0.125<br>• $1.00<br>• $0.0125<br>• • gpt-5-nano<br>• $0.025<br>• $0.20<br>• $0.0025<br>• • o3<br>• $1.00<br>• $4.00<br>• $0.25</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Fast pricing data</li><li>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write</li><li>rows：• • gpt-6-astra<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• $40.00<br>• $150.00<br>• $4.00<br>• $50.00<br>• $100.00<br>• • gpt-6.1-sol<br>• $4.00<br>• $20.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.40<br>• $10.00<br>• $20.00<br>• • gpt-6.1-terra<br>• $2.00<br>• $10.00<br>• $0.10<br>• $2.50<br>• $5.00<br>• $4.00<br>• $15.00<br>• $0.20<br>• $5.00<br>• $10.00<br>• • gpt-6-luna<br>• $0.20<br>• $1.00<br>• $0.02<br>• $0.25<br>• $0.50<br>• $0.40<br>• $1.50<br>• $0.04<br>• $0.50<br>• $1.00<br>• • gpt-6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-sol<br>• $8.00<br>• $40.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• $16.00<br>• $60.00<br>• $1.60<br>• $20.00<br>• $40.00<br>• • gpt-5.6-terra<br>• $4.00<br>• $24.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $36.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-luna<br>• $0.40<br>• $2.40<br>• $0.04<br>• $0.50<br>• $1.00<br>• $0.80<br>• $3.60<br>• $0.08<br>• $1.00<br>• $2.00<br>• • gpt-5.5 (&lt;272K context length)<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.4 (&lt;272K context length)<br>• $5.00<br>• $30.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li></ul></details></li><li>heading：Fast pricing data<br>headers：• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-5.4-mini<br>• $1.50<br>• $9.00<br>• $0.15<br>• • gpt-5.2<br>• $3.50<br>• $28.00<br>• $0.35<br>• • gpt-5.1<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5<br>• $2.50<br>• $20.00<br>• $0.25<br>• • gpt-5-mini<br>• $0.45<br>• $3.60<br>• $0.045<br>• • gpt-4.1<br>• $3.50<br>• $14.00<br>• $0.875<br>• • gpt-4.1-mini<br>• $0.70<br>• $2.80<br>• $0.175<br>• • gpt-4o<br>• $4.25<br>• $17.00<br>• $2.125<br>• • gpt-4o-mini<br>• $0.25<br>• $1.00<br>• $0.125<br>• • o3<br>• $3.50<br>• $14.00<br>• $0.875</li><li>heading：Ultrafast pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-astra<br>• $60.00<br>• $300.00<br>• $6.00<br>• $75.00<br>• $150.00<br>• $120.00<br>• $450.00<br>• $12.00<br>• $150.00<br>• $300.00<br>• • gpt-6.1-sol<br>• $12.00<br>• $60.00<br>• $0.60<br>• $15.00<br>• $30.00<br>• $24.00<br>• $90.00<br>• $1.20<br>• $30.00<br>• $60.00</li><li>heading：Standard pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-cyber<br>• $20.00<br>• $100.00<br>• $2.00<br>• $25.00<br>• $50.00<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.6-sol<br>• $4.00<br>• $20.00<br>• $0.40<br>• $5.00<br>• $10.00<br>• $8.00<br>• $30.00<br>• $0.80<br>• $10.00<br>• $20.00<br>• • gpt-5.6-cyber<br>• $12.50<br>• $75.00<br>• $1.25<br>• $15.625<br>• $31.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-5.5-cyber<br>• $12.50<br>• $75.00<br>• $1.25<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>heading：Standard pricing data<br>headers：• Model<br>• Short context input<br>• Short context output<br>• Short context cached input<br>• Short context 30m write<br>• Short context 12h write<br>• Long context input<br>• Long context output<br>• Long context cached input<br>• Long context 30m write<br>• Long context 12h write<br>rows：• • gpt-6-rosalind<br>• $15.00<br>• $75.00<br>• $1.50<br>• $18.75<br>• $37.50<br>• $30.00<br>• $112.50<br>• $3.00<br>• $37.50<br>• $75.00<br>• • gpt-rosalind-research<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• • gpt-rosalind-discovery<br>• $5.00<br>• $25.00<br>• $0.50<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -<br>• -</li><li>heading：Grouped Pricing Table data<br>headers：• Model configuration<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-6-astra-law<br>• $10.00<br>• $50.00<br>• $1.00</li><li>heading：Pricing Table data<br>headers：• Model<br>• Price per minute<br>rows：• • gpt-live-1<br>• $0.05</li><li>对象（3 个字段）<details><summary>展开完整内容</summary><ul><li>heading：Grouped Pricing Table data</li><li>headers：• Model<br>• Modality<br>• Input<br>• Output / cost<br>• Cached input</li><li>rows：列表（28 项）<details><summary>展开完整内容</summary><ul><li>• gpt-realtime-2.1<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2.1<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-2.1-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-2.1-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-2.1-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime-2<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Text<br>• $4.00<br>• $24.00<br>• $0.40</li><li>• gpt-realtime-2<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime-1.5<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-realtime-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• $0.30</li><li>• gpt-realtime-mini<br>• Text<br>• $0.60<br>• $2.40<br>• $0.06</li><li>• gpt-realtime-mini<br>• Image<br>• $0.80<br>• -<br>• $0.08</li><li>• gpt-realtime<br>• Audio<br>• $32.00<br>• $64.00<br>• $0.40</li><li>• gpt-realtime<br>• Text<br>• $4.00<br>• $16.00<br>• $0.40</li><li>• gpt-realtime<br>• Image<br>• $5.00<br>• -<br>• $0.50</li><li>• gpt-audio-1.5<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio-1.5<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-audio-mini<br>• Audio<br>• $10.00<br>• $20.00<br>• -</li><li>• gpt-audio-mini<br>• Text<br>• $0.60<br>• $2.40<br>• -</li><li>• gpt-audio<br>• Audio<br>• $32.00<br>• $64.00<br>• -</li><li>• gpt-audio<br>• Text<br>• $2.50<br>• $10.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Audio<br>• -<br>• $12.00<br>• -</li><li>• gpt-4o-mini-tts<br>• Text<br>• $0.60<br>• -<br>• -</li><li>• tts-1<br>• Text<br>• $15.00 / 1M characters<br>• -<br>• -</li><li>• tts-1-hd<br>• Text<br>• $30.00 / 1M characters<br>• -<br>• -</li></ul></details></li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：列表（16 项）<details><summary>展开完整内容</summary><ul><li>• gpt-image-2.6-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.6-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.6-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-sunburst<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-sunburst<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2.5-flare<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2.5-flare<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-2<br>• Image<br>• $8.00<br>• $30.00<br>• $2.00</li><li>• gpt-image-2<br>• Text<br>• $5.00<br>• -<br>• $1.25</li><li>• gpt-image-1.5<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• gpt-image-1.5<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li><li>• gpt-image-1-mini<br>• Image<br>• $2.50<br>• $8.00<br>• $0.25</li><li>• gpt-image-1-mini<br>• Text<br>• $2.00<br>• -<br>• $0.20</li><li>• chatgpt-image-latest<br>• Image<br>• $8.00<br>• $32.00<br>• $2.00</li><li>• chatgpt-image-latest<br>• Text<br>• $5.00<br>• $10.00<br>• $1.25</li></ul></details></li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Modality<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-image-2<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00<br>• • gpt-image-2<br>• Text<br>• $2.50<br>• -<br>• $0.625<br>• • gpt-image-2.5-sunburst<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00<br>• • gpt-image-2.5-sunburst<br>• Text<br>• $2.50<br>• -<br>• $0.625<br>• • gpt-image-2.5-flare<br>• Image<br>• $4.00<br>• $15.00<br>• $1.00<br>• • gpt-image-2.5-flare<br>• Text<br>• $2.50<br>• -<br>• $0.625<br>• • gpt-image-1.5<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00<br>• • gpt-image-1.5<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63<br>• • gpt-image-1-mini<br>• Image<br>• $1.25<br>• $4.00<br>• $0.13<br>• • gpt-image-1-mini<br>• Text<br>• $1.00<br>• -<br>• $0.10<br>• • chatgpt-image-latest<br>• Image<br>• $4.00<br>• $16.00<br>• $1.00<br>• • chatgpt-image-latest<br>• Text<br>• $2.50<br>• $5.00<br>• $0.63</li><li>heading：Grouped Pricing Table data<br>headers：• Model<br>• Use case<br>• Input<br>• Output<br>• Estimated cost<br>rows：• • gpt-realtime-translate<br>• Live translation<br>• -<br>• -<br>• $0.034 / minute<br>• • gpt-live-transcribe<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-realtime-whisper<br>• Live transcription<br>• -<br>• -<br>• $0.017 / minute<br>• • gpt-transcribe<br>• Transcription<br>• -<br>• -<br>• $0.0045 / minute<br>• • gpt-4o-transcribe<br>• Transcription<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • gpt-4o-mini-transcribe<br>• Transcription<br>• $1.25<br>• $5.00<br>• $0.003 / minute<br>• • gpt-4o-transcribe-diarize<br>• Transcription + diarization<br>• $2.50<br>• $10.00<br>• $0.006 / minute<br>• • Whisper<br>• Transcription<br>• -<br>• -<br>• $0.006 / minute</li><li>heading：Grouped Pricing Table data<br>headers：• Tool<br>• Details<br>• Pricing<br>rows：• • Web search<br>• Web search (all models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Image Web search (all models)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (reasoning models, including `gpt-5`, `o-series`)<br>• $10.00 / 1k calls + Search content tokens billed at model rates.<br>• • Web search<br>• Web search preview (non-reasoning models)<br>• $25.00 / 1k calls + Search content tokens are free.<br>• • Containers<br>• Hosted Shell and Code Interpreter<br>• 1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container.<br>• • File search<br>• Storage<br>• $0.10 / GB per day (1 GB free)<br>• • File search<br>• Tool call<br>• $2.50 / 1k calls<br>• • Agent Kit<br>• ChatKit file and image upload storage<br>• $0.10 / GB-day after 1 GB free per account per month</li><li>heading：Grouped Pricing Table data<br>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • ChatGPT<br>• chat-latest<br>• $5.00<br>• $30.00<br>• $0.50<br>• • Codex<br>• gpt-5.3-codex<br>• $1.75<br>• $14.00<br>• $0.175<br>• • Search<br>• gpt-5-search-api<br>• $1.25<br>• $10.00<br>• $0.125<br>• • Embedding<br>• text-embedding-3-small<br>• $0.02<br>• -<br>• -<br>• • Embedding<br>• text-embedding-3-large<br>• $0.13<br>• -<br>• -<br>• • Embedding<br>• text-embedding-ada-002<br>• $0.10<br>• -<br>• -<br>• • Moderation<br>• omni-moderation-latest<br>• Free<br>• -<br>• -</li><li>heading：Grouped Pricing Table data<br>headers：• Category<br>• Model<br>• Input<br>• Output<br>• Cached input<br>rows：• • Codex<br>• gpt-5.3-codex<br>• $3.50<br>• $28.00<br>• $0.35</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $3.00<br>• $12.00<br>• $0.75<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.80<br>• $3.20<br>• $0.20<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $3.75<br>• $15.00<br>• $1.875<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.30<br>• $1.20<br>• $0.15</li><li>heading：Pricing Table data<br>headers：• Model<br>• Training<br>• Input<br>• Output<br>• Cached input<br>rows：• • gpt-4.1-2025-04-14<br>• $25.00<br>• $1.50<br>• $6.00<br>• $0.50<br>• • gpt-4.1-mini-2025-04-14<br>• $5.00<br>• $0.40<br>• $1.60<br>• $0.10<br>• • gpt-4o-2024-08-06<br>• $25.00<br>• $2.225<br>• $12.50<br>• $0.90<br>• • gpt-4o-mini-2024-07-18<br>• $3.00<br>• $0.15<br>• $0.60<br>• $0.075</li></ul></details> |

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

#### Model / gpt-5.6-cyber

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 gpt-5.6-cyber › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-5.6-cyber › operation ref | 新增 | 未记录 | 未记录 |

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
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） › evidence | 更新 | • source ref：openai-pricing<br>locator：#standard-pricing-data/table:1/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。<br>• source ref：openai-pricing<br>locator：#batch/table:3/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。<br>• source ref：openai-pricing<br>locator：#flex/table:5/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。<br>• source ref：openai-pricing<br>locator：#fast-pricing-data/table:7/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。<br>• source ref：openai-pricing<br>locator：#standard-pricing-data/table:10/row:1<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 | • source ref：openai-pricing<br>locator：#standard-pricing-data/table:1/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。<br>• source ref：openai-pricing<br>locator：#batch/table:3/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。<br>• source ref：openai-pricing<br>locator：#flex/table:5/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。<br>• source ref：openai-pricing<br>locator：#fast-pricing-data/table:7/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。<br>• source ref：openai-pricing<br>locator：#standard-pricing-data/table:10/row:2<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-5.6-sol › 价格信息（pricing） | 更新 | 列表（5 项）<details><summary>展开完整内容</summary><ul><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：8.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：30.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.80<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:1/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：standard</li><li>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:1/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：15.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>evidence：• source ref：openai-pricing<br>locator：#batch/table:3/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：batch</li><li>evidence：• source ref：openai-pricing<br>locator：#batch/table:3/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：15.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>evidence：• source ref：openai-pricing<br>locator：#flex/table:5/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：flex</li><li>evidence：• source ref：openai-pricing<br>locator：#flex/table:5/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：8.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：40.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.80<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：16.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：60.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：1.60<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：40.00<br>evidence：• source ref：openai-pricing<br>locator：#fast-pricing-data/table:7/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：fast</li><li>evidence：• source ref：openai-pricing<br>locator：#fast-pricing-data/table:7/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：8.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：30.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.80<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:10/row:1<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：standard</li><li>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:10/row:1<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li></ul></details></li></ul></details> | 列表（5 项）<details><summary>展开完整内容</summary><ul><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：8.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：30.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.80<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:1/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：standard</li><li>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:1/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：15.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>evidence：• source ref：openai-pricing<br>locator：#batch/table:3/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：batch</li><li>evidence：• source ref：openai-pricing<br>locator：#batch/table:3/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Batch token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.20<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：2.50<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：15.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>evidence：• source ref：openai-pricing<br>locator：#flex/table:5/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：flex</li><li>evidence：• source ref：openai-pricing<br>locator：#flex/table:5/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Flex token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：8.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：40.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.80<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：16.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：60.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：1.60<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：40.00<br>evidence：• source ref：openai-pricing<br>locator：#fast-pricing-data/table:7/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：fast</li><li>evidence：• source ref：openai-pricing<br>locator：#fast-pricing-data/table:7/row:6<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Fast pricing data token 价格。</li></ul></details></li><li>对象（4 个字段）<details><summary>展开完整内容</summary><ul><li>币种（currency）：value：USD<br>evidence：• source ref：openai-pricing<br>locator：#pricing<br>assertion：OpenAI 定价页以美元符号列示价格。</li><li>rates：value：• 计费指标（metric）：input<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：4.00<br>• 计费指标（metric）：output<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：0.40<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：5.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：short<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：input<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：8.00<br>• 计费指标（metric）：output<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：30.00<br>• 计费指标（metric）：cache_read<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：0.80<br>• 计费指标（metric）：cache_write<br>ttl：30min<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：10.00<br>• 计费指标（metric）：cache_write<br>ttl：12h<br>上下文长度（context）：long<br>计量单位（unit）：per_1m_tokens<br>value：20.00<br>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:10/row:2<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li><li>适用条件（conditions）：• field：service_tier<br>value：standard</li><li>evidence：• source ref：openai-pricing<br>locator：#standard-pricing-data/table:10/row:2<br>assertion：OpenAI 官方定价表为 gpt-5.6-sol 列出 Standard pricing data token 价格。</li></ul></details></li></ul></details> |

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

#### Model / gpt-6-cyber

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 官方目录列出此展示名称。 |
| 展示名称（display_name） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 展示名称（display_name） | 新增 | 未记录 | GPT-6-Cyber |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 gpt-6-cyber › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-cyber › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-cyber 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 › field | 新增 | 未记录 | service_tier |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › 适用条件（conditions） › 记录 0 | 新增 | 未记录 | standard |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 定价页以美元符号列示价格。 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-cyber 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | OpenAI 官方定价表为 gpt-6-cyber 列出 Standard pricing data token 价格。 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › ttl | 新增 | 未记录 | 12h |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","12h","short"] | 新增 | 未记录 | 50.00 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › ttl | 新增 | 未记录 | 30min |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","30min","short"] | 新增 | 未记录 | 25.00 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 2.00 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 20.00 |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output › 上下文长度（context） | 新增 | 未记录 | short |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 gpt-6-cyber › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 100.00 |
| prices › 记录 gpt-6-cyber › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › assertion | 新增 | 未记录 | 价格表按精确模型 ID 关联。 |
| prices › 记录 gpt-6-cyber › 服务商模型 ID（provider_model_id） › evidence › 记录 openai-pricing › source ref | 新增 | 未记录 | openai-pricing |
| prices › 记录 gpt-6-cyber › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-cyber |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | gpt-6-cyber |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | 该型号来自 OpenAI 全球 API 目录。 |
| 服务线 ID（service_id） › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › assertion | 新增 | 未记录 | OpenAI 完整模型目录将该模型列在当前目录中。 |
| supply observations › 记录 0 › evidence › 记录 openai-models-all › source ref | 新增 | 未记录 | openai-models-all |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

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
| global | `openai-models` · OpenAI API 模型指南（含产品范围说明） | https://developers.openai.com/api/docs/models.md | 2026-11-07T03:43:39.143Z | 200 | `sha256:658283021cf6d85f3fcc8da66b551c619b168b5a2a39ac19887189e6dc6583f0` |
| global | `openai-models-all` · OpenAI 通用完整模型目录与状态标签 | https://developers.openai.com/api/docs/models/all | 2026-11-07T03:43:39.327Z | 200 | `sha256:45e8ac1af72548d9495f4483770803441a247904873b5790bc58989445fe4972` |
| global | `openai-pricing` · OpenAI API 模型与功能定价 | https://developers.openai.com/api/docs/pricing.md | 2026-11-07T03:43:39.364Z | 200 | `sha256:f1ade44afc62fd8a12dd6e199bcecaa989a94c9b691aa620a34e1504ff62ff57` |
| global | `openai-models-list-api` · OpenAI Models API 清单端点说明（调用需账号 API Key） | https://developers.openai.com/api/reference/resources/models/methods/list | 2026-11-05T04:13:48.742Z | 200 | `sha256:ba65a9a1ae1f860f8a6e518b818787c7bc40e605523ef02f462965da86c5e698` |
| global | `openai-responses-api` · OpenAI Responses API 通用端点文档 | https://developers.openai.com/api/docs/guides/text | 2026-11-05T04:13:48.818Z | 200 | `sha256:05dc04c0cec1b95dc20f27748c7ecd9f3e2b9e3418cf5b3a4f329ef16aa550d7` |
| global | `openai-web-search` · OpenAI Responses API Web Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-web-search.md?api-mode=responses | 2026-11-05T04:13:48.776Z | 200 | `sha256:70fed9d622dbfc7a9671ecba9fa4b87141abd15d6ea4f8b5b1a2c0f7262ab6f0` |
| global | `openai-file-search` · OpenAI Responses API File Search 工具文档 | https://developers.openai.com/api/docs/guides/tools-file-search.md | 2026-11-05T04:13:48.903Z | 200 | `sha256:10570ded7ae3dfcf104e95e6def3b45648b74ad2442b8c9b25856c20d5047dda` |
| global | `openai-code-interpreter` · OpenAI Responses API Code Interpreter 输入与输出 | https://developers.openai.com/api/docs/guides/tools-code-interpreter | 2026-11-05T04:13:48.868Z | 200 | `sha256:7cc917e3870d5c990a7e720e560fcd9fa91eb7687da67f388859ae89c8194851` |
| global | `openai-image-generation` · OpenAI Responses API Image Generation 工具文档 | https://developers.openai.com/api/docs/guides/image-generation.md?generate-images-api=responses | 2026-11-07T03:43:39.496Z | 200 | `sha256:52c43f91f992d61b2d7b3557c091771a0cc5cd62ff71972fb86de052d5751f4e` |
| global | `openai-audio-api` · OpenAI Audio API 通用能力与端点文档 | https://developers.openai.com/api/docs/guides/audio | 2026-11-05T04:13:48.936Z | 200 | `sha256:306f3d9fb7bab2d692a1ee37d261e531e9ddbd4f5030890921b5080d60b5af30` |
| global | `openai-chatgpt-pricing` · OpenAI ChatGPT 与 Codex 套餐定价 | https://learn.chatgpt.com/docs/pricing.md?site_locale=en | 2026-11-07T03:43:39.603Z | 200 | `sha256:a0c502cccae440c42e790e4fec0a3733d670328dce9eb2d3904d1bce647cb246` |

## openai 专属证据与核对说明

### OpenAI 官方通用资料采集候选

- 来源快照：11 份
- 文档观察：11 份；模型 ID 提及：281 条
- 已生成 Offering：105 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- GET /v1/models 返回认证账号可见范围，不调用需 Key 的真实接口。
- 公开模型文档混有 API、ChatGPT、预览/弃用与推荐模型范围；候选只记录文档 ID 提及，不能用它充当可调用全集。
- 模型目录和价格按精确 Provider 模型 ID 记录；规范模型规格由维护者手工维护。
