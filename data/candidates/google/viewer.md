# google 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `google` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global |
| 观察时间（UTC） | 2026-11-27T05:50:15.249Z |
| 前一候选指纹 | `sha256:cfec69c80a82c3e3f039b76d28769093cfcd7cb6221781aa926809ac8f6dabb0` |
| 本次候选指纹 | `sha256:6ad727a809cb6265c27cbb807a4e7d45c53351307f51302e13ea4423aaf9afcd` |
| 来源快照 | 17 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 9 项，更新 1 项，缺席待核实 0 项。

## 字段变化

### 文档观察

#### 来源 / google-billing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › headers | 新增 | 未记录 | • Scenario<br>• Input tokens<br>• Output and thinking tokens |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › heading | 新增 | 未记录 | Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 Canceled stream after one or more chunks | 新增 | 未记录 | • Canceled stream after one or more chunks<br>• May be billed<br>• May be billed up to the last delivered chunk |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 Canceled stream before the first chunk | 新增 | 未记录 | • Canceled stream before the first chunk<br>• Not billed<br>• Not billed |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 HTTP 200 with `finishReason: SAFETY` | 新增 | 未记录 | • HTTP 200 with `finishReason: SAFETY`<br>• Billed (cached tokens use the cached rate)<br>• Not billed (or only earlier streamed chunks) |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 HTTP 200 with another non-standard `finishReason` (after earlier streamed chunks) | 新增 | 未记录 | • HTTP 200 with another non-standard `finishReason` (after earlier streamed chunks)<br>• Billed (cached tokens use the cached rate)<br>• Only tokens from earlier streamed chunks |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 HTTP 200 with another non-standard `finishReason` (unary or first streamed chunk) | 新增 | 未记录 | • HTTP 200 with another non-standard `finishReason` (unary or first streamed chunk)<br>• Not billed<br>• Not billed |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 HTTP 200 with prompt blocked (`promptFeedback.blockReason`, no candidates) | 新增 | 未记录 | • HTTP 200 with prompt blocked (`promptFeedback.blockReason`, no candidates)<br>• Not billed<br>• Not billed |
| tables › 记录 Am I charged for failed, blocked, or canceled requests?  {% class="hide-from-toc" id="am-i-charged-for-failed-requests" %} › rows › 记录 HTTP 4xx or 5xx error (request still counts against quota) | 新增 | 未记录 | • HTTP 4xx or 5xx error (request still counts against quota)<br>• Not billed<br>• Not billed |

#### 来源 / google-google-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| capability mentions | 更新 | 差异项（删除；相同内容已省略）：debugging and understanding the model's reasoning process. | 差异项（新增；相同内容已省略）：billed queries. Extra queries the model runs during reasoning do not appear<br>During multi-step reasoning, the model can run intermediate queries to explore |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `google-models` · Google Gemini API 模型指南 | https://aistudio.google.com/docs/models?hl=en | 2026-11-27T05:50:06.619Z | 200 | `sha256:4383dbcef15ffa7c1179acbc9d20a486854bc10e0ab073d84997e096450bc48c` |
| global | `google-pricing` · Google Gemini Developer API 定价 | https://aistudio.google.com/docs/pricing?hl=en | 2026-11-27T05:50:08.569Z | 200 | `sha256:25c38f04bee177640f35fa4dc8b88bdd5c140574bd500fd91110d18b476160db` |
| global | `google-models-api` · Google models.list / models.get API 参考（实际清单需 API Key） | https://aistudio.google.com/api-reference/models?hl=en | 2026-11-27T05:50:08.688Z | 200 | `sha256:5b73d2f248d6277f4878c3f1de9911075626131da7f330bf326af7126b92f604` |
| global | `google-api-overview` · Google Gemini API 通用端点与能力概览 | https://aistudio.google.com/api-reference?hl=en | 2026-11-27T05:50:08.691Z | 200 | `sha256:a434927096f4c091448c9dfd21d6019a35ea3c91e925a804d218e06a4118cccf` |
| global | `google-generate-content-api` · Google Gemini GenerateContent 工具配置与 API Schema | https://aistudio.google.com/api-reference/generate-content?hl=en | 2026-11-27T05:50:08.787Z | 200 | `sha256:829dabb8cb4b90bcbff71c53197ba8d834fc5dfb136294eaa9a1364a1b39a215` |
| global | `google-batch` · Google Gemini API Batch 模式与计费说明 | https://aistudio.google.com/docs/batch-api | 2026-11-27T05:50:08.874Z | 200 | `sha256:eb44b7b33dd07def08e7c6063bc4edbf53681dc394a5386982990dfd2e8db473` |
| global | `google-batch-api-schema` · Google Gemini API Batch 请求与响应 Schema | https://aistudio.google.com/api-reference/batch-api?hl=en | 2026-11-27T05:50:09.061Z | 200 | `sha256:22fe8141b85f08a8487987bcd2ee4f65834d5f201046860eddf30f0656c109a7` |
| global | `google-tools` · Google Gemini API 内置工具与能力说明 | https://aistudio.google.com/docs/tools?hl=en | 2026-11-27T05:50:09.154Z | 200 | `sha256:5efd5e7118223af91f946598f650bd825859087f301b761d074d2aec93578d70` |
| global | `google-code-execution` · Google Gemini API Code execution 输入与结果格式 | https://aistudio.google.com/docs/code-execution | 2026-11-27T05:50:10.217Z | 200 | `sha256:030ae6a1da68d6001fb5fd49f9da231670058f67f8ee3d3c683cdbf946b77834` |
| global | `google-google-search` · Google Gemini API Grounding with Google Search 输入与响应 | https://aistudio.google.com/docs/google-search?generate-content=true&amp;hl=en | 2026-11-27T05:50:09.535Z | 200 | `sha256:f6246acc13798ba76ec9b6d613b29fc968c5dd88f63f611452ae3ce4e4e45d3d` |
| global | `google-google-maps` · Google Gemini API Grounding with Google Maps 输入与响应 | https://aistudio.google.com/docs/maps-grounding?generate-content=true&amp;hl=en | 2026-11-27T05:50:10.355Z | 200 | `sha256:2e5d6aae90262251db56a778aa42e46b28cfb9034523df6f51f92e55858391d3` |
| global | `google-url-context` · Google Gemini API URL Context 输入与响应 | https://aistudio.google.com/docs/url-context?generate-content=true&amp;hl=en | 2026-11-27T05:50:10.349Z | 200 | `sha256:4223e563fc46e65f55b3fb91f1887c81731df213d0999f63bd6f357f91458797` |
| global | `google-openai-compatibility` · Google Gemini API OpenAI 兼容接口 | https://aistudio.google.com/docs/openai?hl=en | 2026-11-27T05:50:10.458Z | 200 | `sha256:6774d2033076538f31341f73098f7ad163db9442ddc2775224f534f4005dea08` |
| global | `google-live-api` · Google Gemini API Live WebSocket 接口参考 | https://aistudio.google.com/api-reference/live | 2026-11-27T05:50:14.776Z | 200 | `sha256:9064b020b88a8aca0e435761ece7ab740bc9a12191570a8033949e62bcce7689` |
| global | `google-billing` · Google Gemini API Free/Paid 层级与付款方式 | https://aistudio.google.com/docs/billing?hl=en | 2026-11-27T05:50:14.910Z | 200 | `sha256:c94522208758856e25e62e5d09c2f8ec4c730b58cd07bf2ce0e17a3eaaa61a47` |
| global | `google-consumer-plans-us` · Google Google One 美国 Google AI 订阅计划 | https://one.google.com/about/plans?hl=en_US | 2026-11-27T05:50:15.098Z | 200 | `sha256:f980b1aa585e94ffad02ba7e1d005660572d84026daccf5b2d55c62f7c554c67` |
| global | `google-files-api` · Google Gemini API Files 与 File Search API | https://aistudio.google.com/docs/file-search?hl=en | 2026-11-27T05:50:15.249Z | 200 | `sha256:6259d07354238fe6a660ea4f3c07c9b2fa32740cb2519faa631a92e678bfd81b` |

## google 专属证据与核对说明

### Google Gemini API 官方通用资料采集候选

- 来源快照：17 份
- 文档观察：17 份；模型 ID 提及：211 条
- 已生成 Offering：0 个

#### 适配器核对边界

- 页面线索留在文档观察区；目录提及不等于当前供应，价格线索不等于已解析的计费规则。
- 每个来源的覆盖状态为「尚未解析」，需由 Provider 专属解析逻辑形成字段事实后才能进入通用投影。
- 不调用需 API Key、Cookie 或登录会话的接口，不执行推理请求，也不采集单模型专属页面。

#### 已知边界

- models.list 需要 API Key 且按项目/API 权限列出账号可见模型；不使用凭证调用。
- Gemini Developer API 与 Vertex AI Model Garden 是不同服务与授权面；只采集已登记的 Gemini Developer API 来源。
- 模型指南、定价页与模型清单接口覆盖范围不同；价格页提及不能证明当前供应，API 行为示例不能证明逐模型能力。
- Batch 是请求处理模式与折扣，不是订阅 Plan，也不单独构成模型 Offering。
