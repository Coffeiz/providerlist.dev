# moonshotai 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `moonshotai` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | cn / global |
| 观察时间（UTC） | 2026-11-05T13:35:59.862Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:53a6f292c26bc57fe299f716162c2260ae0b5fe790cfe8435bd4d3266a4cd517` |
| 来源快照 | 28 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 4256 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / moonshotai

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • 中国与国际市场的目录和定价分别保留，不跨市场合并。<br>• 当前模型、历史模型、模型 API 与独立服务能力需要不同的领域映射。 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | moonshotai |
| source refs | 新增 | 未记录 | 列表（28 项）<details><summary>展开完整内容</summary><ul><li>moonshotai-model-catalog</li><li>moonshotai-api-list-models</li><li>moonshotai-api-overview</li><li>moonshotai-chat-api</li><li>moonshotai-responses-api</li><li>moonshotai-messages-api</li><li>moonshotai-chat-pricing</li><li>moonshotai-batch-pricing</li><li>moonshotai-websearch-pricing</li><li>moonshotai-batch-api</li><li>moonshotai-websearch-api</li><li>moonshotai-webfetch-api</li><li>moonshotai-file-upload-api</li><li>moonshotai-batch-create-api</li><li>moonshotai-global-model-catalog</li><li>moonshotai-global-api-list-models</li><li>moonshotai-global-api-overview</li><li>moonshotai-global-chat-api</li><li>moonshotai-global-responses-api</li><li>moonshotai-global-messages-api</li><li>moonshotai-global-chat-pricing</li><li>moonshotai-global-batch-pricing</li><li>moonshotai-global-websearch-pricing</li><li>moonshotai-global-batch-api</li><li>moonshotai-global-websearch-api</li><li>moonshotai-global-webfetch-api</li><li>moonshotai-global-file-upload-api</li><li>moonshotai-global-batch-create-api</li></ul></details> |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 记录 moonshotai-api-list-models › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-api-list-models › note | 新增 | 未记录 | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| 记录 moonshotai-api-list-models › scope | 新增 | 未记录 | model_catalog |
| 记录 moonshotai-api-list-models › source ref | 新增 | 未记录 | moonshotai-api-list-models |
| 记录 moonshotai-api-list-models › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 moonshotai-api-overview › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-api-overview › note | 新增 | 未记录 | 协议 Base URL 已映射为 Endpoint；独立工具 Route 来自 API 概述，普通模型 Route 由各协议文档分别限定模型范围。 |
| 记录 moonshotai-api-overview › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-api-overview › record unit | 新增 | 未记录 | API Endpoint records |
| 记录 moonshotai-api-overview › scope | 新增 | 未记录 | api |
| 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| 记录 moonshotai-api-overview › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-batch-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-batch-api › note | 新增 | 未记录 | Batch 指南用于补充异步处理方式和输入文件要求；其余 Batch 生命周期细节仍需核对。 |
| 记录 moonshotai-batch-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-batch-api › source ref | 新增 | 未记录 | moonshotai-batch-api |
| 记录 moonshotai-batch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-batch-create-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-batch-create-api › note | 新增 | 未记录 | 创建 Batch Operation、Route、请求参数与异步任务返回字段已映射。 |
| 记录 moonshotai-batch-create-api › record count | 新增 | 未记录 | 2 |
| 记录 moonshotai-batch-create-api › record unit | 新增 | 未记录 | Batch Operation records |
| 记录 moonshotai-batch-create-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| 记录 moonshotai-batch-create-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-batch-pricing › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-batch-pricing › note | 新增 | 未记录 | 官方 Batch 支持型号和 60% 定价规则已映射；价格仅对同市场已解析的标准 Token 价格生成。 |
| 记录 moonshotai-batch-pricing › record count | 新增 | 未记录 | 2 |
| 记录 moonshotai-batch-pricing › record unit | 新增 | 未记录 | supported model IDs with Batch PriceFacts |
| 记录 moonshotai-batch-pricing › scope | 新增 | 未记录 | pricing |
| 记录 moonshotai-batch-pricing › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| 记录 moonshotai-batch-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-chat-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-chat-api › note | 新增 | 未记录 | 明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。 |
| 记录 moonshotai-chat-api › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-chat-api › record unit | 新增 | 未记录 | Route records |
| 记录 moonshotai-chat-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| 记录 moonshotai-chat-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-chat-pricing › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-chat-pricing › note | 新增 | 未记录 | 可精确匹配的按量 Token 价格已映射为 PriceFact；未识别行和其他计费类型仍在 Review。 |
| 记录 moonshotai-chat-pricing › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-chat-pricing › record unit | 新增 | 未记录 | recognized Token price rows |
| 记录 moonshotai-chat-pricing › scope | 新增 | 未记录 | pricing |
| 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| 记录 moonshotai-chat-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-file-upload-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-file-upload-api › note | 新增 | 未记录 | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| 记录 moonshotai-file-upload-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-file-upload-api › source ref | 新增 | 未记录 | moonshotai-file-upload-api |
| 记录 moonshotai-file-upload-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 moonshotai-global-api-list-models › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-api-list-models › note | 新增 | 未记录 | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| 记录 moonshotai-global-api-list-models › scope | 新增 | 未记录 | model_catalog |
| 记录 moonshotai-global-api-list-models › source ref | 新增 | 未记录 | moonshotai-global-api-list-models |
| 记录 moonshotai-global-api-list-models › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 moonshotai-global-api-overview › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-api-overview › note | 新增 | 未记录 | 协议 Base URL 已映射为 Endpoint；独立工具 Route 来自 API 概述，普通模型 Route 由各协议文档分别限定模型范围。 |
| 记录 moonshotai-global-api-overview › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-global-api-overview › record unit | 新增 | 未记录 | API Endpoint records |
| 记录 moonshotai-global-api-overview › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| 记录 moonshotai-global-api-overview › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-batch-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-batch-api › note | 新增 | 未记录 | Batch 指南用于补充异步处理方式和输入文件要求；其余 Batch 生命周期细节仍需核对。 |
| 记录 moonshotai-global-batch-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-batch-api › source ref | 新增 | 未记录 | moonshotai-global-batch-api |
| 记录 moonshotai-global-batch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-batch-create-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-batch-create-api › note | 新增 | 未记录 | 创建 Batch Operation、Route、请求参数与异步任务返回字段已映射。 |
| 记录 moonshotai-global-batch-create-api › record count | 新增 | 未记录 | 0 |
| 记录 moonshotai-global-batch-create-api › record unit | 新增 | 未记录 | Batch Operation records |
| 记录 moonshotai-global-batch-create-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-batch-create-api › source ref | 新增 | 未记录 | moonshotai-global-batch-create-api |
| 记录 moonshotai-global-batch-create-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-batch-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-batch-pricing › note | 新增 | 未记录 | 官方 Batch 支持型号和 60% 定价规则已映射；价格仅对同市场已解析的标准 Token 价格生成。 |
| 记录 moonshotai-global-batch-pricing › record count | 新增 | 未记录 | 0 |
| 记录 moonshotai-global-batch-pricing › record unit | 新增 | 未记录 | supported model IDs with Batch PriceFacts |
| 记录 moonshotai-global-batch-pricing › scope | 新增 | 未记录 | pricing |
| 记录 moonshotai-global-batch-pricing › source ref | 新增 | 未记录 | moonshotai-global-batch-pricing |
| 记录 moonshotai-global-batch-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-chat-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-chat-api › note | 新增 | 未记录 | 明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。 |
| 记录 moonshotai-global-chat-api › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-global-chat-api › record unit | 新增 | 未记录 | Route records |
| 记录 moonshotai-global-chat-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| 记录 moonshotai-global-chat-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-chat-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-chat-pricing › note | 新增 | 未记录 | 可精确匹配的按量 Token 价格已映射为 PriceFact；未识别行和其他计费类型仍在 Review。 |
| 记录 moonshotai-global-chat-pricing › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-global-chat-pricing › record unit | 新增 | 未记录 | recognized Token price rows |
| 记录 moonshotai-global-chat-pricing › scope | 新增 | 未记录 | pricing |
| 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| 记录 moonshotai-global-chat-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-file-upload-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-file-upload-api › note | 新增 | 未记录 | 来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。 |
| 记录 moonshotai-global-file-upload-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-file-upload-api › source ref | 新增 | 未记录 | moonshotai-global-file-upload-api |
| 记录 moonshotai-global-file-upload-api › 状态（status） | 新增 | 未记录 | not_parsed |
| 记录 moonshotai-global-messages-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-messages-api › note | 新增 | 未记录 | 明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。 |
| 记录 moonshotai-global-messages-api › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-global-messages-api › record unit | 新增 | 未记录 | Route records |
| 记录 moonshotai-global-messages-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| 记录 moonshotai-global-messages-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-model-catalog › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-model-catalog › note | 新增 | 未记录 | 当前型号目录已完整解析并映射为 Offering；下线型号分区保留在文档观察中，不作为当前供应。 |
| 记录 moonshotai-global-model-catalog › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-global-model-catalog › record unit | 新增 | 未记录 | unique current model IDs |
| 记录 moonshotai-global-model-catalog › scope | 新增 | 未记录 | model_catalog |
| 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 记录 moonshotai-global-model-catalog › 状态（status） | 新增 | 未记录 | complete |
| 记录 moonshotai-global-responses-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-responses-api › note | 新增 | 未记录 | 明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。 |
| 记录 moonshotai-global-responses-api › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-global-responses-api › record unit | 新增 | 未记录 | Route records |
| 记录 moonshotai-global-responses-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| 记录 moonshotai-global-responses-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-webfetch-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-webfetch-api › note | 新增 | 未记录 | 独立工具路由、官方请求参数/输入项和主要响应字段已映射；响应 requiredness、空结果语义与错误响应仍待逐项核对。 |
| 记录 moonshotai-global-webfetch-api › record count | 新增 | 未记录 | 1 |
| 记录 moonshotai-global-webfetch-api › record unit | 新增 | 未记录 | independent Capability Operation records |
| 记录 moonshotai-global-webfetch-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-webfetch-api › source ref | 新增 | 未记录 | moonshotai-global-webfetch-api |
| 记录 moonshotai-global-webfetch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-websearch-api › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-websearch-api › note | 新增 | 未记录 | 独立工具路由、官方请求参数/输入项和主要响应字段已映射；响应 requiredness、空结果语义与错误响应仍待逐项核对。 |
| 记录 moonshotai-global-websearch-api › record count | 新增 | 未记录 | 2 |
| 记录 moonshotai-global-websearch-api › record unit | 新增 | 未记录 | independent Capability Operation records |
| 记录 moonshotai-global-websearch-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 记录 moonshotai-global-websearch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-global-websearch-pricing › 市场（market） | 新增 | 未记录 | global |
| 记录 moonshotai-global-websearch-pricing › note | 新增 | 未记录 | 按次独立工具价格已映射；legacy 内建搜索计费未混入，成功但空响应不计费条件保留在价格规则中。 |
| 记录 moonshotai-global-websearch-pricing › record count | 新增 | 未记录 | 0 |
| 记录 moonshotai-global-websearch-pricing › record unit | 新增 | 未记录 | independent tool price facts |
| 记录 moonshotai-global-websearch-pricing › scope | 新增 | 未记录 | pricing |
| 记录 moonshotai-global-websearch-pricing › source ref | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| 记录 moonshotai-global-websearch-pricing › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-messages-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-messages-api › note | 新增 | 未记录 | 明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。 |
| 记录 moonshotai-messages-api › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-messages-api › record unit | 新增 | 未记录 | Route records |
| 记录 moonshotai-messages-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| 记录 moonshotai-messages-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-model-catalog › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-model-catalog › note | 新增 | 未记录 | 当前型号目录已完整解析并映射为 Offering；下线型号分区保留在文档观察中，不作为当前供应。 |
| 记录 moonshotai-model-catalog › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-model-catalog › record unit | 新增 | 未记录 | unique current model IDs |
| 记录 moonshotai-model-catalog › scope | 新增 | 未记录 | model_catalog |
| 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 记录 moonshotai-model-catalog › 状态（status） | 新增 | 未记录 | complete |
| 记录 moonshotai-responses-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-responses-api › note | 新增 | 未记录 | 明确支持的模型 ID 与对应 POST Route 已映射；Chat / Responses 推理控制保留 Route 级映射。其他请求参数与输入输出约束仍待解析。 |
| 记录 moonshotai-responses-api › record count | 新增 | 未记录 | 3 |
| 记录 moonshotai-responses-api › record unit | 新增 | 未记录 | Route records |
| 记录 moonshotai-responses-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| 记录 moonshotai-responses-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-webfetch-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-webfetch-api › note | 新增 | 未记录 | 独立工具路由、官方请求参数/输入项和主要响应字段已映射；响应 requiredness、空结果语义与错误响应仍待逐项核对。 |
| 记录 moonshotai-webfetch-api › record count | 新增 | 未记录 | 1 |
| 记录 moonshotai-webfetch-api › record unit | 新增 | 未记录 | independent Capability Operation records |
| 记录 moonshotai-webfetch-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-webfetch-api › source ref | 新增 | 未记录 | moonshotai-webfetch-api |
| 记录 moonshotai-webfetch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-websearch-api › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-websearch-api › note | 新增 | 未记录 | 独立工具路由、官方请求参数/输入项和主要响应字段已映射；响应 requiredness、空结果语义与错误响应仍待逐项核对。 |
| 记录 moonshotai-websearch-api › record count | 新增 | 未记录 | 2 |
| 记录 moonshotai-websearch-api › record unit | 新增 | 未记录 | independent Capability Operation records |
| 记录 moonshotai-websearch-api › scope | 新增 | 未记录 | api |
| 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 记录 moonshotai-websearch-api › 状态（status） | 新增 | 未记录 | partial |
| 记录 moonshotai-websearch-pricing › 市场（market） | 新增 | 未记录 | cn |
| 记录 moonshotai-websearch-pricing › note | 新增 | 未记录 | 按次独立工具价格已映射；legacy 内建搜索计费未混入，成功但空响应不计费条件保留在价格规则中。 |
| 记录 moonshotai-websearch-pricing › record count | 新增 | 未记录 | 0 |
| 记录 moonshotai-websearch-pricing › record unit | 新增 | 未记录 | independent tool price facts |
| 记录 moonshotai-websearch-pricing › scope | 新增 | 未记录 | pricing |
| 记录 moonshotai-websearch-pricing › source ref | 新增 | 未记录 | moonshotai-websearch-pricing |
| 记录 moonshotai-websearch-pricing › 状态（status） | 新增 | 未记录 | partial |

### 文档观察

#### 来源 / moonshotai-api-list-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-list-models |
| source ref | 新增 | 未记录 | moonshotai-api-list-models |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-list-models |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-list-models |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-list-models |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-list-models |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 列出模型 |

#### 来源 / moonshotai-api-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &#124; OpenAI Chat Completions &#124; `https://api.moonshot.cn/v1` &#124; [`/chat/completions`](https://platform.kimi.com/docs/api/chat) &#124; OpenAI 官方 SDK（Python / Node.js），以及 LangChain、Dify、Coze 等第三方工具和框架 &#124;<br>• &#124; OpenAI Responses &#124; `https://api.moonshot.cn/v1` &#124; [`/responses`](https://platform.kimi.com/docs/api/responses) &#124; OpenAI 官方 SDK（Python / Node.js） &#124;<br>• base_url="https://api.moonshot.cn/v1",<br>• baseURL: "https://api.moonshot.cn/v1",<br>• base_url="https://api.moonshot.cn/anthropic", |
| capability mentions | 新增 | 未记录 | • &gt; 使用 OpenAI 兼容接口时，部分参数为 Kimi 专有扩展：`thinking` 参数需要通过 SDK 的 `extra_body` 传递；`partial` 是写在 messages 中 assistant 消息上的字段（`"partial": true`），不是顶层请求参数。详见[工具调用](https://platform.kimi.com/docs/api/tool-use)和 [Partial Mode](https://platform.kimi.com/docs/api/partial)。 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># API 概述<br>&gt; 查看 Kimi API 的服务地址、认证方式、请求格式、兼容性和主要接口入口。<br>## 服务地址<br>```<br>https://api.moonshot.cn<br>```<br>不同兼容协议的 `base_url` 不同，见下方「协议兼容性」。<br>## 协议兼容性<br>Kimi API 兼容三种 API 格式，您可以直接复用对应的官方 SDK 和工具：<br>&#124; 兼容 API &#124; base\_url &#124; 接口 &#124; 可用 SDK / 工具 &#124;<br>&#124; - &#124; - &#124; - &#124; - &#124;<br>&#124; OpenAI Chat Completions &#124; `https://api.moonshot.cn/v1` &#124; [`/chat/completions`](https://platform.kimi.com/docs/api/chat) &#124; OpenAI 官方 SDK（Python / Node.js），以及 LangChain、Dify、Coze 等第三方工具和框架 &#124;<br>&#124; OpenAI Responses &#124; `https://api.moonshot.cn/v1` &#124; [`/responses`](https://platform.kimi.com/docs/api/responses) &#124; OpenAI 官方 SDK（Python / Node.js） &#124;<br>&#124; Anthropic Messages &#124; `https://api.moonshot.cn/anthropic` &#124; [`/messages`](https://platform.kimi.com/docs/api/messages) &#124; Anthropic 官方 SDK、Claude Code 等工具 &#124;<br>如果您的项目原本在使用 OpenAI 或 Anthropic 的官方 API，只需将 `base_url` 和 API Key 替换为 Kimi 的配置即可迁移，无需修改其他代码。<br>&gt; [!NOTE]<br>&gt;<br>&gt; 使用 OpenAI 兼容接口时，部分参数为 Kimi 专有扩展：`thinking` 参数需要通过 SDK 的 `extra_body` 传递；`partial` 是写在 messages 中 assistant 消息上的字段（`"partial": true`），不是顶层请求参数。详见[工具调用](https://platform.kimi.com/docs/api/tool-use)和 [Partial Mode](https://platform.kimi.com/docs/api/partial)。<br>## 认证<br>所有 API 请求需要在 HTTP 头中携带 API Key：<br>```<br>Authorization: Bearer $MOONSHOT_API_KEY<br>```<br>API Key 可在 [Kimi 开放平台控制台](https://platform.kimi.com/console/api-keys) 创建和管理。<br>&gt; [!WARNING]<br>&gt;<br>&gt; API Key 是敏感信息，请妥善保管。不要在客户端代码、公开仓库或日志中暴露。建议通过环境变量管理。<br>使用官方 SDK 时，在初始化时传入 API Key 和对应协议的 `base_url`。<br>OpenAI 兼容接口：<br>```python Python theme={null}<br>import os<br>from openai import OpenAI<br>client = OpenAI(<br>api_key=os.environ["MOONSHOT_API_KEY"],<br>base_url="https://api.moonshot.cn/v1",<br>)<br>```<br>```javascript Node.js theme={null}<br>const OpenAI = require("openai");<br>const client = new OpenAI({<br>apiKey: process.env.MOONSHOT_API_KEY,<br>baseURL: "https://api.moonshot.cn/v1",<br>});<br>```<br>Anthropic 兼容接口：<br>```python Python theme={null}<br>import os<br>from anthropic import Anthropic<br>client = Anthropic(<br>api_key=os.environ["MOONSHOT_API_KEY"],<br>base_url="https://api.moonshot.cn/anthropic",<br>)<br>```<br>```javascript Node.js theme={null}<br>const Anthropic = require("@anthropic-ai/sdk");<br>const client = new Anthropic({<br>apiKey: process.env.MOONSHOT_API_KEY,<br>baseURL: "https://api.moonshot.cn/anthropic",<br>});<br>```<br>## 错误处理<br>请求失败时返回包含 `error.type` 和 `error.message` 的 JSON 错误响应，完整的错误类型、错误消息和排障建议请参阅[错误说明](https://platform.kimi.com/docs/api/errors.md)。<br>## API 端点一览<br>&#124; 端点 &#124; 方法 &#124; 协议 &#124; 说明 &#124;<br>&#124; - &#124; - &#124; - &#124; - &#124;<br>&#124; `/v1/chat/completions` &#124; POST &#124; OpenAI &#124; [创建对话补全](https://platform.kimi.com/docs/api/chat.md) &#124;<br>&#124; `/v1/responses` &#124; POST &#124; OpenAI &#124; [Responses API](https://platform.kimi.com/docs/api/responses.md) &#124;<br>&#124; `/anthropic/v1/messages` &#124; POST &#124; Anthropic &#124; [Messages API](https://platform.kimi.com/docs/api/messages.md) &#124;<br>&#124; `/v1/models` &#124; GET &#124; OpenAI &#124; [列出模型](https://platform.kimi.com/docs/api/list-models.md) &#124;<br>&#124; `/v1/tokenizers/estimate-token-count` &#124; POST &#124; OpenAI &#124; [计算 Token](https://platform.kimi.com/docs/api/estimate.md) &#124;<br>&#124; `/v1/users/me/balance` &#124; GET &#124; OpenAI &#124; [查询余额](https://platform.kimi.com/docs/api/balance.md) &#124;<br>&#124; `/v1/tools/search` &#124; POST &#124; Kimi &#124; [联网搜索 Basic](https://platform.kimi.com/docs/api/tools-search.md) &#124;<br>&#124; `/v1/tools/search_pro` &#124; POST &#124; Kimi &#124; [联网搜索 Pro](https://platform.kimi.com/docs/api/tools-search-pro.md) &#124;<br>&#124; `/v1/tools/fetch` &#124; POST &#124; Kimi &#124; [网页抓取](https://platform.kimi.com/docs/api/tools-fetch.md) &#124;<br>&#124; `/v1/files` &#124; POST &#124; OpenAI &#124; [上传文件](https://platform.kimi.com/docs/api/files-upload.md) &#124;<br>&#124; `/v1/files` &#124; GET &#124; OpenAI &#124; [列出文件](https://platform.kimi.com/docs/api/files-list.md) &#124;<br>&#124; `/v1/files/{file_id}` &#124; GET &#124; OpenAI &#124; [获取文件信息](https://platform.kimi.com/docs/api/files-retrieve.md) &#124;<br>&#124; `/v1/files/{file_id}` &#124; DELETE &#124; OpenAI &#124; [删除文件](https://platform.kimi.com/docs/api/files-delete.md) &#124;<br>&#124; `/v1/files/{file_id}/content` &#124; GET &#124; OpenAI &#124; [获取文件内容](https://platform.kimi.com/docs/api/files-content.md) &#124;<br>&#124; `/v1/batches` &#124; POST &#124; OpenAI &#124; [创建批处理任务](https://platform.kimi.com/docs/api/batch-create.md) &#124;<br>&#124; `/v1/batches` &#124; GET &#124; OpenAI &#124; [列出批处理任务](https://platform.kimi.com/docs/api/batch-list.md) &#124;<br>&#124; `/v1/batches/{batch_id}` &#124; GET &#124; OpenAI &#124; [获取批处理任务详情](https://platform.kimi.com/docs/api/batch-retrieve.md) &#124;<br>&#124; `/v1/batches/{batch_id}/cancel` &#124; POST &#124; OpenAI &#124; [取消批处理任务](https://platform.kimi.com/docs/api/batch-cancel.md) &#124;<br>## 下一步<br>&gt; [card] [快速开始](https://platform.kimi.com/docs/api/quickstart)<br>&gt;<br>&gt; 发送第一个 API 请求<br>&gt; [card] [Responses API](https://platform.kimi.com/docs/api/responses.md)<br>&gt;<br>&gt; OpenAI Responses 兼容接口<br>&gt; [card] [Messages API](https://platform.kimi.com/docs/api/messages.md)<br>&gt;<br>&gt; Anthropic Messages 兼容接口<br>&gt; [card] [模型列表](https://platform.kimi.com/docs/api/list-models.md)<br>&gt;<br>&gt; 查看当前可用模型 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • Authorization: Bearer $MOONSHOT_API_KEY |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-overview |
| source ref | 新增 | 未记录 | moonshotai-api-overview |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &#124; OpenAI Chat Completions &#124; `https://api.moonshot.cn/v1` &#124; [`/chat/completions`](https://platform.kimi.com/docs/api/chat) &#124; OpenAI 官方 SDK（Python / Node.js），以及 LangChain、Dify、Coze 等第三方工具和框架 &#124; |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-overview |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &#124; OpenAI Responses &#124; `https://api.moonshot.cn/v1` &#124; [`/responses`](https://platform.kimi.com/docs/api/responses) &#124; OpenAI 官方 SDK（Python / Node.js） &#124; |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-overview |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | base_url="https://api.moonshot.cn/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-overview |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | baseURL: "https://api.moonshot.cn/v1", |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-api-overview |
| tables › 记录 API 端点一览 › headers | 新增 | 未记录 | • 端点<br>• 方法<br>• 协议<br>• 说明 |
| tables › 记录 API 端点一览 › heading | 新增 | 未记录 | API 端点一览 |
| tables › 记录 API 端点一览 › rows › 第 1 项 | 新增 | 未记录 | • `/v1/chat/completions`<br>• POST<br>• OpenAI<br>• [创建对话补全](https://platform.kimi.com/docs/api/chat.md) |
| tables › 记录 API 端点一览 › rows › 第 2 项 | 新增 | 未记录 | • `/v1/responses`<br>• POST<br>• OpenAI<br>• [Responses API](https://platform.kimi.com/docs/api/responses.md) |
| tables › 记录 API 端点一览 › rows › 第 3 项 | 新增 | 未记录 | • `/anthropic/v1/messages`<br>• POST<br>• Anthropic<br>• [Messages API](https://platform.kimi.com/docs/api/messages.md) |
| tables › 记录 API 端点一览 › rows › 第 4 项 | 新增 | 未记录 | • `/v1/models`<br>• GET<br>• OpenAI<br>• [列出模型](https://platform.kimi.com/docs/api/list-models.md) |
| tables › 记录 API 端点一览 › rows › 第 5 项 | 新增 | 未记录 | • `/v1/tokenizers/estimate-token-count`<br>• POST<br>• OpenAI<br>• [计算 Token](https://platform.kimi.com/docs/api/estimate.md) |
| tables › 记录 API 端点一览 › rows › 第 6 项 | 新增 | 未记录 | • `/v1/users/me/balance`<br>• GET<br>• OpenAI<br>• [查询余额](https://platform.kimi.com/docs/api/balance.md) |
| tables › 记录 API 端点一览 › rows › 第 7 项 | 新增 | 未记录 | • `/v1/tools/search`<br>• POST<br>• Kimi<br>• [联网搜索 Basic](https://platform.kimi.com/docs/api/tools-search.md) |
| tables › 记录 API 端点一览 › rows › 第 8 项 | 新增 | 未记录 | • `/v1/tools/search_pro`<br>• POST<br>• Kimi<br>• [联网搜索 Pro](https://platform.kimi.com/docs/api/tools-search-pro.md) |
| tables › 记录 API 端点一览 › rows › 第 9 项 | 新增 | 未记录 | • `/v1/tools/fetch`<br>• POST<br>• Kimi<br>• [网页抓取](https://platform.kimi.com/docs/api/tools-fetch.md) |
| tables › 记录 API 端点一览 › rows › 第 10 项 | 新增 | 未记录 | • `/v1/files`<br>• POST<br>• OpenAI<br>• [上传文件](https://platform.kimi.com/docs/api/files-upload.md) |
| tables › 记录 API 端点一览 › rows › 第 11 项 | 新增 | 未记录 | • `/v1/files`<br>• GET<br>• OpenAI<br>• [列出文件](https://platform.kimi.com/docs/api/files-list.md) |
| tables › 记录 API 端点一览 › rows › 第 12 项 | 新增 | 未记录 | • `/v1/files/{file_id}`<br>• GET<br>• OpenAI<br>• [获取文件信息](https://platform.kimi.com/docs/api/files-retrieve.md) |
| tables › 记录 API 端点一览 › rows › 第 13 项 | 新增 | 未记录 | • `/v1/files/{file_id}`<br>• DELETE<br>• OpenAI<br>• [删除文件](https://platform.kimi.com/docs/api/files-delete.md) |
| tables › 记录 API 端点一览 › rows › 第 14 项 | 新增 | 未记录 | • `/v1/files/{file_id}/content`<br>• GET<br>• OpenAI<br>• [获取文件内容](https://platform.kimi.com/docs/api/files-content.md) |
| tables › 记录 API 端点一览 › rows › 第 15 项 | 新增 | 未记录 | • `/v1/batches`<br>• POST<br>• OpenAI<br>• [创建批处理任务](https://platform.kimi.com/docs/api/batch-create.md) |
| tables › 记录 API 端点一览 › rows › 第 16 项 | 新增 | 未记录 | • `/v1/batches`<br>• GET<br>• OpenAI<br>• [列出批处理任务](https://platform.kimi.com/docs/api/batch-list.md) |
| tables › 记录 API 端点一览 › rows › 第 17 项 | 新增 | 未记录 | • `/v1/batches/{batch_id}`<br>• GET<br>• OpenAI<br>• [获取批处理任务详情](https://platform.kimi.com/docs/api/batch-retrieve.md) |
| tables › 记录 API 端点一览 › rows › 第 18 项 | 新增 | 未记录 | • `/v1/batches/{batch_id}/cancel`<br>• POST<br>• OpenAI<br>• [取消批处理任务](https://platform.kimi.com/docs/api/batch-cancel.md) |
| tables › 记录 协议兼容性 › headers | 新增 | 未记录 | • 兼容 API<br>• base\_url<br>• 接口<br>• 可用 SDK / 工具 |
| tables › 记录 协议兼容性 › heading | 新增 | 未记录 | 协议兼容性 |
| tables › 记录 协议兼容性 › rows › 记录 Anthropic Messages | 新增 | 未记录 | • Anthropic Messages<br>• `https://api.moonshot.cn/anthropic`<br>• [`/messages`](https://platform.kimi.com/docs/api/messages)<br>• Anthropic 官方 SDK、Claude Code 等工具 |
| tables › 记录 协议兼容性 › rows › 记录 OpenAI Chat Completions | 新增 | 未记录 | • OpenAI Chat Completions<br>• `https://api.moonshot.cn/v1`<br>• [`/chat/completions`](https://platform.kimi.com/docs/api/chat)<br>• OpenAI 官方 SDK（Python / Node.js），以及 LangChain、Dify、Coze 等第三方工具和框架 |
| tables › 记录 协议兼容性 › rows › 记录 OpenAI Responses | 新增 | 未记录 | • OpenAI Responses<br>• `https://api.moonshot.cn/v1`<br>• [`/responses`](https://platform.kimi.com/docs/api/responses)<br>• OpenAI 官方 SDK（Python / Node.js） |
| title | 新增 | 未记录 | API 概述 |

#### 来源 / moonshotai-batch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"),<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files \<br>• baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1",<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches \<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches/your_batch_id \<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files/your_output_file_id/content \<br>• curl "${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches?limit=10" \<br>• curl -X POST ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches/your_batch_id/cancel \<br>• &gt;     base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"),<br>• &gt;     baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| capability mentions | 新增 | 未记录 | 列表（73 项）<details><summary>展开完整内容</summary><ul><li>&gt; 通过 Batch API 上传 JSONL 请求、创建和查询批处理任务，并下载大规模异步推理结果。</li><li>当你需要使用大语言模型处理大规模、低实时性要求的任务时，Batch API 是理想选择。它支持通过文件批量提交任务，相比实时 API 调用可以节省 40% 的推理费用。</li><li>JSONL 文件中每行是一个独立的 JSON 对象，代表一个推理请求：</li><li>Batch API 支持在输入文件中包含图片和视频内容。与文本任务的区别主要在于 **构造输入文件** 这一步，其余流程（上传、创建任务、轮询、处理结果）完全一致。</li><li>&gt; * **文件引用**：先通过文件接口上传图片（`purpose="image"`），然后在 JSONL 中通过 `ms://&lt;file_id&gt;` 引用，适合大图片或图片复用场景。</li><li>&gt; def build_request_base64(custom_id: str, image_path: str) -&gt; dict:</li><li>&gt;     with open(image_path, "rb") as f:</li><li>&gt;         image_data: str = base64.b64encode(f.read()).decode("utf-8")</li><li>&gt;                         {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_data}"}},</li><li>&gt; def build_request_upload(custom_id: str, image_path: str) -&gt; dict:</li><li>&gt;         file=open(image_path, "rb"),</li><li>&gt;         purpose="image",</li><li>&gt;     print(f"图片已上传: {image_path} -&gt; {file_object.id}")</li><li>&gt;                         {"type": "image_url", "image_url": {"url": f"ms://{file_object.id}"}},</li><li>&gt; images: list[str] = ["image1.png", "image2.png", "image3.png"]</li><li>&gt; requests: list[dict] = [build_request(f"img-{i}", path) for i, path in enumerate(images)]</li><li>&gt; input_path = Path("image_batch_requests.jsonl")</li><li>&gt; function buildRequestBase64(customId, imagePath) {</li><li>&gt;     const imageData = fs.readFileSync(imagePath).toString("base64");</li><li>&gt;                         { type: "image_url", image_url: { url: `data:image/png;base64,${imageData}` } },</li><li>&gt; async function buildRequestUpload(customId, imagePath) {</li><li>&gt;         file: fs.createReadStream(imagePath),</li><li>&gt;         purpose: "image"</li><li>&gt;     console.log(`图片已上传: ${imagePath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "image_url", image_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;     const images = ["image1.png", "image2.png", "image3.png"];</li><li>&gt;     for (let i = 0; i &lt; images.length; i++) {</li><li>&gt;             ? await buildRequestUpload(`img-${i}`, images[i])</li><li>&gt;             : buildRequestBase64(`img-${i}`, images[i]);</li><li>&gt;     fs.writeFileSync("image_batch_requests.jsonl", requests.join("\n") + "\n");</li><li>&gt;         file: fs.createReadStream("image_batch_requests.jsonl"),</li><li>&gt; [accordion] 视频批处理示例</li><li>&gt; 视频有两种传入方式：</li><li>&gt; * **base64 内嵌**：将视频编码为 base64 直接写入 JSONL，适合小视频。注意 base64 会使体积膨胀约 33%，请关注 100MB 文件大小限制。</li><li>&gt; * **文件引用**：先通过文件接口上传视频（`purpose="video"`），然后在 JSONL 中通过 `ms://&lt;file_id&gt;` 引用，适合大视频或视频复用场景。</li><li>&gt; PROMPT = "请总结这个视频的主要内容"</li><li>&gt; SYSTEM = "你是一个视频内容分析助手"</li><li>&gt; def build_request_base64(custom_id: str, video_path: str) -&gt; dict:</li><li>&gt;     """方式一：将视频编码为 base64 直接内嵌到 JSONL 中。</li><li>&gt;     适合小视频，无需额外上传步骤。"""</li><li>&gt;     with open(video_path, "rb") as f:</li><li>&gt;         video_data: str = base64.b64encode(f.read()).decode("utf-8")</li><li>&gt;                         {"type": "video_url", "video_url": {"url": f"data:video/mp4;base64,{video_data}"}},</li><li>&gt; def build_request_upload(custom_id: str, video_path: str) -&gt; dict:</li><li>&gt;     """方式二：先上传视频获取 file_id，再通过 ms://&lt;file_id&gt; 引用。</li><li>&gt;     适合大视频或同一个视频被多个请求复用的场景。"""</li><li>&gt;         file=open(video_path, "rb"),</li><li>&gt;         purpose="video",</li><li>&gt;     print(f"视频已上传: {video_path} -&gt; {file_object.id}")</li><li>&gt;                         {"type": "video_url", "video_url": {"url": f"ms://{file_object.id}"}},</li><li>&gt; videos: list[str] = ["video1.mp4", "video2.mp4", "video3.mp4"]</li><li>&gt; requests: list[dict] = [build_request(f"video-{i}", path) for i, path in enumerate(videos)]</li><li>&gt; input_path = Path("video_batch_requests.jsonl")</li><li>&gt; const PROMPT = "请总结这个视频的主要内容";</li><li>&gt; const SYSTEM = "你是一个视频内容分析助手";</li><li>&gt; /** 方式一：将视频编码为 base64 直接内嵌到 JSONL 中。</li><li>&gt;  *  适合小视频，无需额外上传步骤。*/</li><li>&gt; function buildRequestBase64(customId, videoPath) {</li><li>&gt;     const videoData = fs.readFileSync(videoPath).toString("base64");</li><li>&gt;                         { type: "video_url", video_url: { url: `data:video/mp4;base64,${videoData}` } },</li><li>&gt; /** 方式二：先上传视频获取 file_id，再通过 ms://&lt;file_id&gt; 引用。</li><li>&gt;  *  适合大视频或同一个视频被多个请求复用的场景。*/</li><li>&gt; async function buildRequestUpload(customId, videoPath) {</li><li>&gt;         file: fs.createReadStream(videoPath),</li><li>&gt;         purpose: "video"</li><li>&gt;     console.log(`视频已上传: ${videoPath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "video_url", video_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;     const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];</li><li>&gt;     for (let i = 0; i &lt; videos.length; i++) {</li><li>&gt;             ? await buildRequestUpload(`video-${i}`, videos[i])</li><li>&gt;             : buildRequestBase64(`video-${i}`, videos[i]);</li><li>&gt;     fs.writeFileSync("video_batch_requests.jsonl", requests.join("\n") + "\n");</li><li>&gt;         file: fs.createReadStream("video_batch_requests.jsonl"),</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 使用 Batch API 批量处理任务<br>&gt; 通过 Batch API 上传 JSONL 请求、创建和查询批处理任务，并下载大规模异步推理结果。<br>当你需要使用大语言模型处理大规模、低实时性要求的任务时，Batch API 是理想选择。它支持通过文件批量提交任务，相比实时 API 调用可以节省 40% 的推理费用。<br>&gt; [!NOTE]<br>&gt;<br>&gt; Batch API 支持 `kimi-k3.1-pro`、`kimi-k3`、`kimi-k2.7-code` 和 `kimi-k2.6` 模型。这些模型的 `temperature`、`top_p` 等参数不可修改，请勿在请求 body 中设置这些参数。<br>&gt; [card] [创建批处理任务](https://platform.kimi.com/docs/api/batch-create.md)<br>&gt;<br>&gt; 上传 JSONL 文件并创建批处理任务<br>&gt; [card] [列出批处理任务](https://platform.kimi.com/docs/api/batch-list.md)<br>&gt;<br>&gt; 获取当前组织的批处理任务列表<br>&gt; [card] [获取任务详情](https://platform.kimi.com/docs/api/batch-retrieve.md)<br>&gt;<br>&gt; 查询指定批处理任务的状态和详细信息<br>&gt; [card] [取消批处理任务](https://platform.kimi.com/docs/api/batch-cancel.md)<br>&gt;<br>&gt; 取消正在进行的批处理任务<br>## 使用流程<br>本指南通过一个文本分类的实例，展示 Batch API 的完整使用流程：<br>### 1. 构造输入文件<br>JSONL 文件中每行是一个独立的 JSON 对象，代表一个推理请求：<br>```json theme={null}<br>{"custom_id": "request-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "kimi-k2.6", "messages": [{"role": "system", "content": "你是一个文本分类助手"}, {"role": "user", "content": "请分类这段文本：人工智能正在改变世界"}]}}<br>```<br>&#124; 字段 &#124; 是否必须 &#124; 说明 &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; `custom_id` &#124; 必须 &#124; 自定义请求标识，用于追踪结果，需在文件内唯一 &#124;<br>&#124; `method` &#124; 必须 &#124; 请求方法，固定为 `POST` &#124;<br>&#124; `url` &#124; 必须 &#124; 请求地址，固定为 `/v1/chat/completions` &#124;<br>&#124; `body` &#124; 必须 &#124; 请求体，与 [Chat Completions API](https://platform.kimi.com/docs/api/chat.md) 参数一致 &#124;<br>&gt; [!WARNING]<br>&gt;<br>&gt; `body` 中的 `model` 必须是 `kimi-k3.1-pro`、`kimi-k3`、`kimi-k2.7-code` 或 `kimi-k2.6`。这些模型的 `temperature`、`top_p`、`n`、`presence_penalty`、`frequency_penalty` 参数均不可修改，请勿在 `body` 中设置这些参数。<br>&gt; [!NOTE]<br>&gt;<br>&gt; **输入文件要求：**<br>&gt;<br>&gt; * 文件必须为 `.jsonl` 格式，大小不能为空且不超过 100MB<br>&gt; * 每行必须是合法的 JSON 对象，且包含 `custom_id`、`method`、`url`、`body` 四个字段<br>&gt; * `custom_id` 在文件内必须唯一<br>&gt; * 所有行的 `model` 必须相同，一个批次只允许一个模型<br>&gt; * `method` 固定为 `POST`，`url` 固定为 `/v1/chat/completions`<br>&gt; * 指定的模型必须存在且用户有访问权限<br>### 2. 上传文件<br>通过[文件上传接口](https://platform.kimi.com/docs/api/files-upload.md)上传 JSONL 文件，`purpose` 必须设置为 `"batch"`。<br>```python Python theme={null}<br>import os<br>from openai import OpenAI<br>from openai.types import FileObject<br>client = OpenAI(<br>api_key=os.environ.get("MOONSHOT_API_KEY"),<br>base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"),<br>)<br>file_object: FileObject = client.files.create(<br>file=open("batch_requests.jsonl", "rb"),<br>purpose="batch",<br>)<br>print(file_object.id)  # 保存 file_id，下一步使用<br>```<br>```bash cURL theme={null}<br>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files \<br>-H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>-F purpose="batch" \<br>-F file="@batch_requests.jsonl"<br>```<br>```javascript Node.js theme={null}<br>const OpenAI = require("openai");<br>const fs = require("fs");<br>const client = new OpenAI({<br>apiKey: process.env.MOONSHOT_API_KEY,<br>baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1",<br>});<br>async function main() {<br>const fileObject = await client.files.create({<br>file: fs.createReadStream("batch_requests.jsonl"),<br>purpose: "batch"<br>});<br>console.log(fileObject.id);  // 保存 file_id，下一步使用<br>}<br>main();<br>```<br>### 3. 创建任务<br>调用[创建批处理任务](https://platform.kimi.com/docs/api/batch-create.md)接口，传入 `input_file_id` 和 `completion_window`。`completion_window` 建议根据数据量合理设置，较长的时间窗口可以提高任务完成率。<br>```python Python theme={null}<br>import os<br>from openai import OpenAI<br>from openai.types import Batch<br>client = OpenAI(<br>api_key=os.environ.get("MOONSHOT_API_KEY"),<br>base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"),<br>)<br>batch: Batch = client.batches.create(<br>input_file_id="your_file_id",<br>endpoint="/v1/chat/completions",<br>completion_window="24h",<br>) |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files \</li><li>-H "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches \</li><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches/your_batch_id \</li><li>-H "Authorization: Bearer $MOONSHOT_API_KEY"</li><li>console.log(`状态: ${batch.status} (${batch.request_counts.completed}/${batch.request_counts.total})`);</li><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files/your_output_file_id/content \</li><li>console.log(`${data.custom_id}: ${data.response.body.choices[0].message.content}`);</li><li>custom_id: `text_${i}`,</li><li>{ role: "user", content: `请对以下文本进行分类：${text}` }</li><li>console.log(`文件已上传: ${fileObject.id}`);</li><li>console.log(`任务已创建: ${batch.id}`);</li><li>console.log(`状态: ${current.status} (${current.request_counts.completed}/${current.request_counts.total})`);</li><li>console.error(`任务异常终止: ${current.status}`);</li><li>curl "${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches?limit=10" \</li><li>console.log(`${batch.id} - ${batch.status} (${batch.request_counts.completed}/${batch.request_counts.total})`);</li><li>curl -X POST ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches/your_batch_id/cancel \</li><li>console.log(`状态: ${batch.status}`);  // cancelling</li><li>&gt;                         { type: "image_url", image_url: { url: `data:image/png;base64,${imageData}` } },</li><li>&gt;     console.log(`图片已上传: ${imagePath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "image_url", image_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;             ? await buildRequestUpload(`img-${i}`, images[i])</li><li>&gt;             : buildRequestBase64(`img-${i}`, images[i]);</li><li>&gt;     console.log(`任务已创建: ${batch.id}`);</li><li>&gt;         console.log(`状态: ${current.status} (${current.request_counts.completed}/${current.request_counts.total})`);</li><li>&gt;         console.error(`任务异常终止: ${current.status}`);</li><li>&gt;         console.log(`${data.custom_id}: ${data.response.body.choices[0].message.content}`);</li><li>&gt;                         { type: "video_url", video_url: { url: `data:video/mp4;base64,${videoData}` } },</li><li>&gt;     console.log(`视频已上传: ${videoPath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "video_url", video_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;             ? await buildRequestUpload(`video-${i}`, videos[i])</li><li>&gt;             : buildRequestBase64(`video-${i}`, videos[i]);</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| source ref | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches \ |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 6 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 6 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 7 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 7 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 8 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches/your_batch_id \ |
| structured records › 第 8 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 9 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 9 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 10 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 10 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 11 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/files/your_output_file_id/content \ |
| structured records › 第 11 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 12 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 12 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 13 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 13 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 14 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 14 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 15 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 15 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 16 项 › evidence | 新增 | 未记录 | curl "${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches?limit=10" \ |
| structured records › 第 16 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 17 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 17 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 18 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 18 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 19 项 › evidence | 新增 | 未记录 | curl -X POST ${MOONSHOT_BASE_URL:-https://api.moonshot.cn/v1}/batches/your_batch_id/cancel \ |
| structured records › 第 19 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 20 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 20 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 21 项 › evidence | 新增 | 未记录 | &gt;     base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 21 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 22 项 › evidence | 新增 | 未记录 | &gt;     baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 22 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 23 项 › evidence | 新增 | 未记录 | &gt;     base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.cn/v1"), |
| structured records › 第 23 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| structured records › 第 24 项 › evidence | 新增 | 未记录 | &gt;     baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.cn/v1", |
| structured records › 第 24 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-api |
| tables › 记录 1. 构造输入文件 › headers | 新增 | 未记录 | • 字段<br>• 是否必须<br>• 说明 |
| tables › 记录 1. 构造输入文件 › heading | 新增 | 未记录 | 1. 构造输入文件 |
| tables › 记录 1. 构造输入文件 › rows › 记录 `body` | 新增 | 未记录 | • `body`<br>• 必须<br>• 请求体，与 [Chat Completions API](https://platform.kimi.com/docs/api/chat.md) 参数一致 |
| tables › 记录 1. 构造输入文件 › rows › 记录 `custom_id` | 新增 | 未记录 | • `custom_id`<br>• 必须<br>• 自定义请求标识，用于追踪结果，需在文件内唯一 |
| tables › 记录 1. 构造输入文件 › rows › 记录 `method` | 新增 | 未记录 | • `method`<br>• 必须<br>• 请求方法，固定为 `POST` |
| tables › 记录 1. 构造输入文件 › rows › 记录 `url` | 新增 | 未记录 | • `url`<br>• 必须<br>• 请求地址，固定为 `/v1/chat/completions` |
| tables › 记录 Batch 状态说明 › headers | 新增 | 未记录 | • 状态<br>• 说明 |
| tables › 记录 Batch 状态说明 › heading | 新增 | 未记录 | Batch 状态说明 |
| tables › 记录 Batch 状态说明 › rows › 记录 `cancelled` | 新增 | 未记录 | • `cancelled`<br>• 取消完成，任务终止 |
| tables › 记录 Batch 状态说明 › rows › 记录 `cancelling` | 新增 | 未记录 | • `cancelling`<br>• 已发起取消，等待实际取消 |
| tables › 记录 Batch 状态说明 › rows › 记录 `completed` | 新增 | 未记录 | • `completed`<br>• 结果准备完毕，任务完成 |
| tables › 记录 Batch 状态说明 › rows › 记录 `expired` | 新增 | 未记录 | • `expired`<br>• 未在 completion\_window 内完成 |
| tables › 记录 Batch 状态说明 › rows › 记录 `failed` | 新增 | 未记录 | • `failed`<br>• 数据校验失败，任务终止 |
| tables › 记录 Batch 状态说明 › rows › 记录 `finalizing` | 新增 | 未记录 | • `finalizing`<br>• 执行完毕，正在准备结果 |
| tables › 记录 Batch 状态说明 › rows › 记录 `in_progress` | 新增 | 未记录 | • `in_progress`<br>• 数据校验通过，正在执行 |
| tables › 记录 Batch 状态说明 › rows › 记录 `validating` | 新增 | 未记录 | • `validating`<br>• 已创建，正在校验输入数据 |
| title | 新增 | 未记录 | 使用 Batch API 批量处理任务 |

#### 来源 / moonshotai-batch-create-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • ````yaml POST /v1/batches<br>• POST /v1/batches |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 创建批处理任务<br>&gt; 创建批处理任务，以更低价格异步批量处理请求。<br>&gt; [!NOTE]<br>&gt;<br>&gt; **限制：**<br>&gt;<br>&gt; &#124; 限制项 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; 文件格式 &#124; 必须为 `.jsonl` 扩展名 &#124;<br>&gt; &#124; 文件大小 &#124; 不能为空，最大 100MB &#124;<br>&gt; &#124; 组织文件配额 &#124; 每个组织最多 1000 个 batch 类型文件 &#124;<br>&gt; &#124; 模型一致性 &#124; 同一批次内所有请求必须使用相同模型 &#124;<br>&gt; &#124; `custom_id` &#124; 文件内必须唯一 &#124;<br>&gt; &#124; 模型权限 &#124; 指定的模型必须存在且用户有访问权限 &#124;<br>完整的调用示例请参考 [Batch API 指南](https://platform.kimi.com/docs/guide/use-batch-api.md)。<br>## OpenAPI<br>````yaml POST /v1/batches<br>openapi: 3.1.0<br>info:<br>title: Moonshot AI API<br>version: 1.0.0<br>description: Moonshot AI / Kimi 大语言模型服务 API<br>servers:<br>- url: https://api.moonshot.cn<br>description: 生产环境<br>security: []<br>paths:<br>/v1/batches:<br>post:<br>tags:<br>- Batch<br>summary: 创建批处理任务<br>description: 创建一个批处理任务。需要先通过文件接口上传一个 purpose="batch" 的 JSONL 文件，然后使用返回的 file_id 创建任务。<br>requestBody:<br>required: true<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/BatchCreateRequest'<br>responses:<br>'200':<br>description: 已创建的批处理任务<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/BatchObject'<br>'400':<br>description: 请求错误 - 参数无效<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/ErrorResponse'<br>'401':<br>description: 未授权 - API 密钥无效或缺失<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/ErrorResponse'<br>'500':<br>description: 服务器错误<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/ErrorResponse'<br>security:<br>- bearerAuth: []<br>components:<br>schemas:<br>BatchCreateRequest:<br>type: object<br>properties:<br>input_file_id:<br>type: string<br>description: 输入文件的 ID，必须是通过 purpose="batch" 上传的 .jsonl 文件<br>endpoint:<br>type: string<br>description: 请求端点，目前仅支持 /v1/chat/completions<br>enum:<br>- /v1/chat/completions<br>completion_window:<br>type: string<br>description: 任务处理的时间窗口，支持语义化格式如 12h、1d、3d，最小 12h，最大 7d<br>metadata:<br>type: object<br>description: 自定义元数据，最多 16 个键值对，key 最长 64 字符，value 最长 512 字符<br>additionalProperties:<br>type: string<br>maxLength: 512<br>required:<br>- input_file_id<br>- endpoint<br>- completion_window<br>BatchObject:<br>type: object<br>properties:<br>id:<br>type: string |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/BatchCreateRequest'<br>• $ref: '#/components/schemas/BatchObject'<br>• $ref: '#/components/schemas/ErrorResponse'<br>• $ref: '#/components/schemas/BatchRequestCounts' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-create-api |
| source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| structured records › 记录 moonshotai-batch-create-api › evidence | 新增 | 未记录 | ````yaml POST /v1/batches |
| structured records › 记录 moonshotai-batch-create-api › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-create-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 创建批处理任务 |

#### 来源 / moonshotai-batch-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 批量推理定价 - Kimi API 开放平台<br>• 模型推理<br>• 批量推理定价<br>• 模型推理定价<br>• 查看 Kimi BatchJob 批量推理的输入、输出和缓存命中 token 价格及计费说明。<br>• Batch API 即批量推理 API，批量推理 API 费用为标准模型价格的 60% ，适合大规模、低实时性要求的任务场景。<br>• Batch API 不受实时并发限制，适合大批量任务<br>• 模型推理价格说明 |
| excerpt | 新增 | 未记录 | 批量推理定价 - Kimi API 开放平台<br>Documentation Index<br>Fetch the complete documentation index at: /docs/llms.txt<br>Use this file to discover all available pages before exploring further.<br>Skip to main content<br>🎉 Kimi K3.1 Pro 已正式发布， 快来体验吧！<br>Kimi API 开放平台 home page 简体中文<br>模型推理<br>托管智能体<br>API 参考<br>模型与定价<br>资源<br>搜索...<br>⌘ K<br>企业订阅<br>联系销售<br>用户中心<br>Kimi API 开放平台 home page 搜索或提问...<br>Navigation<br>功能定价<br>批量推理定价<br>模型推理定价<br>计费说明<br>功能定价<br>批量推理定价<br>联网搜索定价<br>托管智能体定价<br>充值与限速<br>充值与限速<br>模型<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>模型列表<br>功能定价<br>批量推理定价<br>复制页面 复制页面<br>查看 Kimi BatchJob 批量推理的输入、输出和缓存命中 token 价格及计费说明。<br>复制页面 复制页面<br>​<br>产品定价<br>Batch API 即批量推理 API，批量推理 API 费用为标准模型价格的 60% ，适合大规模、低实时性要求的任务场景。<br>其中 kimi-k3.1-pro 、 kimi-k3 的上下文窗口为 1,048,576 tokens， kimi-k2.7-code 、 kimi-k2.6 为 262,144 tokens。<br>此处 1 MTok = 1,000,000 tokens，表格中的价格代表每消耗 1 MTok 的价格。<br>​<br>说明<br>Batch API 支持 kimi-k3.1-pro 、 kimi-k3 、 kimi-k2.7-code 和 kimi-k2.6 模型<br>kimi-k3.1-pro 、 kimi-k3 的批量任务同样收取缓存写入（Cache Write）费用； kimi-k2.7-code 、 kimi-k2.6 不支持缓存写入<br>由于批处理请求是异步并发处理的，缓存命中为尽力而为（best-effort），不保证命中<br>Batch API 不受实时并发限制，适合大批量任务<br>任务需在指定的 completion_window 内完成，超时将变为 expired 状态<br>详细使用方法请参阅 Batch API 指南<br>此页面对您有帮助吗？<br>是<br>否<br>模型推理价格说明<br>上一页<br>联网搜索定价<br>下一页<br>⌘ I<br>github website<br>在此页面<br>返回顶部 产品定价<br>说明 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-pricing |
| source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| structured records › 第 1 项 › cells | 新增 | 未记录 | • kimi-k3.1-pro<br>• ¥7.80 / MTok<br>• ¥40.80 / MTok<br>• ¥0.78 / MTok<br>• ¥7.80 / MTok<br>• ¥15.60 / MTok |
| structured records › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 1 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-pricing |
| structured records › 第 1 项 › text | 新增 | 未记录 | kimi-k3.1-pro &#124; ¥7.80 / MTok &#124; ¥40.80 / MTok &#124; ¥0.78 / MTok &#124; ¥7.80 / MTok &#124; ¥15.60 / MTok |
| structured records › 第 2 项 › cells | 新增 | 未记录 | • kimi-k3<br>• ¥12.00 / MTok<br>• ¥60.00 / MTok<br>• ¥1.20 / MTok<br>• ¥12.00 / MTok<br>• ¥24.00 / MTok |
| structured records › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 2 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-pricing |
| structured records › 第 2 项 › text | 新增 | 未记录 | kimi-k3 &#124; ¥12.00 / MTok &#124; ¥60.00 / MTok &#124; ¥1.20 / MTok &#124; ¥12.00 / MTok &#124; ¥24.00 / MTok |
| structured records › 第 3 项 › cells | 新增 | 未记录 | • kimi-k2.7-code<br>• ¥3.90 / MTok<br>• ¥16.20 / MTok<br>• ¥0.78 / MTok<br>• —<br>• — |
| structured records › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 3 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-pricing |
| structured records › 第 3 项 › text | 新增 | 未记录 | kimi-k2.7-code &#124; ¥3.90 / MTok &#124; ¥16.20 / MTok &#124; ¥0.78 / MTok &#124; — &#124; — |
| structured records › 第 4 项 › cells | 新增 | 未记录 | • kimi-k2.6<br>• ¥3.90 / MTok<br>• ¥16.20 / MTok<br>• ¥0.66 / MTok<br>• —<br>• — |
| structured records › 第 4 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 4 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-pricing |
| structured records › 第 4 项 › text | 新增 | 未记录 | kimi-k2.6 &#124; ¥3.90 / MTok &#124; ¥16.20 / MTok &#124; ¥0.66 / MTok &#124; — &#124; — |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | Batch API 即批量推理 API，批量推理 API 费用为标准模型价格的 60% ，适合大规模、低实时性要求的任务场景。 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-batch-pricing |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 批量推理定价 - Kimi API 开放平台 |

#### 来源 / moonshotai-chat-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt;     base_url="https://api.moonshot.cn/v1",<br>• &gt; curl https://api.moonshot.cn/v1/chat/completions \<br>• &gt;     baseURL: "https://api.moonshot.cn/v1",<br>• ````yaml POST /v1/chat/completions<br>• `model` 签发，可通过 `POST /v1/signatures/verify` 校验。仅当请求携带合法的<br>• POST /v1/chat/completions |
| capability mentions | 新增 | 未记录 | 列表（79 项）<details><summary>展开完整内容</summary><ul><li>&gt; 创建对话补全：向 Kimi 模型发送消息并获取回复，支持流式输出、工具调用与视觉输入。</li><li>&gt;         { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } },</li><li>&gt;         { "type": "video_url", "video_url": { "url": "data:video/mp4;base64,..." } }</li><li>&gt; 其中 `image_url` 和 `video_url` 也支持直接传入字符串，效果等同于对象形式中的 `url` 字段：</li><li>&gt; { "type": "image_url", "image_url": "data:image/png;base64,..." }</li><li>&gt; &#124; `type` &#124; required &#124; 内容类型 &#124; `"text"` \&#124; `"image_url"` \&#124; `"video_url"` &#124;</li><li>&gt; &#124; `image_url` &#124; 当 `type=image_url` 时必填 &#124; 用于传输图片，支持对象形式 `{"url": "..."}` 或直接传入 URL 字符串 &#124; object \&#124; string &#124;</li><li>&gt; &#124; `video_url` &#124; 当 `type=video_url` 时必填 &#124; 用于传输视频，支持对象形式 `{"url": "..."}` 或直接传入 URL 字符串 &#124; object \&#124; string &#124;</li><li>&gt; 当 `image_url` 传入对象时，其字段说明如下：</li><li>&gt; 当 `video_url` 传入对象时，其字段说明如下：</li><li>&gt; &#124; `url` &#124; required &#124; 使用 base64 编码或通过 file id 指定的视频内容，例如 `data:video/mp4;base64,...` &#124; string &#124;</li><li>&gt; &gt; * base64 编码：`data:image/png;base64,...` 或 `data:video/mp4;base64,...`</li><li>&gt; &gt; 详见[使用 Kimi 视觉模型](https://platform.kimi.com/docs/guide/use-kimi-vision-model.md)。</li><li>&gt;                     "type": "image_url",</li><li>&gt;                     "image_url": {</li><li>&gt;                         "url": f"data:image/jpeg;base64,{img_base}",</li><li>&gt;                         "type": "image_url",</li><li>&gt;                         "image_url": {</li><li>&gt;                             "url": "data:image/jpeg;base64,/9j/4AAQ..."</li><li>&gt;                         type: "image_url",</li><li>&gt;                         image_url: {</li><li>&gt;                             url: `data:image/jpeg;base64,${imgBase}`,</li><li>&gt;                 "reasoning_content": "The user is asking a simple math question in Chinese: \"1+1 等于多少？\" (What is 1+1?)\n\nThis is a trivial arithmetic question. The answer is 2. I should respond in Chinese since the conversation is in Chinese. Keep it simple and direct."</li><li>&gt;             "reasoning_tokens": 60</li><li>&gt; 设置 `stream=true` 和 `stream_options.include_usage=true`；先返回 `reasoning_content`，再返回 `content`，最后的统计块为 `choices: []`，总用量位于顶层 `usage`。</li><li>&gt; data: {"id":"chatcmpl-6adb0ef5ba679679914a2719","object":"chat.completion.chunk","created":1792741109,"model":"kimi-k3.1-pro","choices":[{"index":0,"delta":{"reasoning_content":"The"},"finish_reason":null}],"system_fingerprint":"fpv0_dd3f7976"}</li><li>&gt; data: {"id":"chatcmpl-6adb0ef5ba679679914a2719","object":"chat.completion.chunk","created":1792741109,"model":"kimi-k3.1-pro","choices":[],"usage":{"prompt_tokens":309,"completion_tokens":101,"total_tokens":410,"completion_tokens_details":{"reasoning_tokens":71},"prompt_tokens_details":{"cache_write_tokens":256}}}</li><li>&gt; 上方非流式响应中，输入为 309 Token，其中缓存写入 256 Token；输出为 82 Token，总计 309 + 82 = 391 Token。缓存读写已包含在 `prompt_tokens` 中，输出包含推理与正文，不应重复累加。</li><li>&gt; # 原样保留完整 assistant 回复，包括 reasoning_content 和可能的 tool_calls</li><li>&gt; * `{"type": "json_schema", "json_schema": {...}}`：按给定 JSON Schema 输出结构化数据（Structured Output）</li><li>&gt; [accordion] 工具调用 Tool Use</li><li>&gt; **响应中的 `tool_calls`**</li><li>&gt; 当 `finish_reason` 为 `"tool_calls"` 时，模型返回 `tool_calls` 数组，包含 `id`、`function.name` 和 `function.arguments`：</li><li>&gt;       "reasoning_content": "用户问北京今天天气。需要调用天气工具。工具只需 city。调用 get_weather 城市北京。然后基于结果回答。注意当前日期系统提供2026-04-25，但天气工具会返回指定城市天气（可能实时）。调用。",</li><li>&gt;       "tool_calls": [</li><li>&gt;     "finish_reason": "tool_calls"</li><li>&gt; 在本地执行工具后，先将响应中的完整 assistant message（包括 `reasoning_content` 和 `tool_calls`）原样追加到原请求的 `messages`，再追加以下工具结果；`tool_call_id` 必须与 assistant 消息中的工具调用 `id` 对应：</li><li>&gt; {"role": "tool", "tool_call_id": "get_weather_0_995b2511", "content": "晴，25°C"}</li><li>&gt; &gt; 详见 [使用 Kimi API 完成工具调用](https://platform.kimi.com/docs/guide/use-kimi-api-to-complete-tool-calls.md)。</li><li>&gt; Kimi K3 系列始终开启思考与 Preserved Thinking，使用顶层 `reasoning_effort`（支持 `"low"`、`"high"`、`"max"`，默认 `"max"`），不使用下方 K2.x 的 `thinking` 参数。`kimi-k2.6` 和 `kimi-k2.7-code` 支持思考模式，模型在输出最终答案前会先输出推理过程（`reasoning_content`）。</li><li>&gt; &#124; `thinking.keep` &#124; `null` \&#124; `"all"` &#124; Preserved Thinking：是否将历史轮次的 `reasoning_content` 保留在上下文。`kimi-k2.6` 默认 `null`（不保留），可选 `"all"`；`kimi-k2.7-code` 固定为 `"all"`（保留），传入其他值报错 &#124;</li><li>&gt; &#124; `reasoning_content` &#124; 推理过程（仅在思考模式启用时返回） &#124;</li><li>&gt;       "reasoning_content": "The user is asking a simple math question in Chinese: \"1+1 等于多少？\" (What is 1+1?)\n\nThis is a trivial arithmetic question. The answer is 2. I should respond in Chinese since the conversation is in Chinese. Keep it simple and direct."</li><li>&gt; &gt; 多轮对话中若使用思考模式，请务必将每一轮 assistant 消息的 `reasoning_content` 原样保留在 `messages` 中，否则模型可能丢失推理上下文。</li><li>&gt; 设置 `stream: true` 可启用流式输出，模型会以 Server-Sent Events (SSE) 格式逐段返回生成的内容。推荐在聊天、代码生成、长文本输出等实时性要求高的场景中使用。</li><li>&gt;     reasoning: str = getattr(delta, "reasoning_content", None) or ""</li><li>&gt;     if reasoning:</li><li>&gt;         print(reasoning, end="")</li><li>&gt; 每一行以 `data:` 开头，内容为 JSON 对象。先接收 `delta.reasoning_content`，再接收 `delta.content`；`finish_reason="stop"` 表示生成结束，其后的统计块 `choices` 为空，需从顶层 `usage` 读取用量：</li><li>&gt; data: {"id":"chatcmpl-6adb0efa76cd871ffe47cb4d","object":"chat.completion.chunk","created":1792741114,"model":"kimi-k3.1-pro","choices":[{"index":0,"delta":{"reasoning_content":"The"},"finish_reason":null}],"system_fingerprint":"fpv0_6e24f0d2"}</li><li>&gt; data: {"id":"chatcmpl-6adb0efa76cd871ffe47cb4d","object":"chat.completion.chunk","created":1792741114,"model":"kimi-k3.1-pro","choices":[],"usage":{"prompt_tokens":90,"completion_tokens":1139,"total_tokens":1229,"completion_tokens_details":{"reasoning_tokens":620},"prompt_tokens_details":{"cache_write_tokens":0}}}</li><li>&gt; * 在 `finish_reason="length"` 且已有正文时，将已生成的正文作为前缀，并回传原 `reasoning_content` 继续生成</li><li>&gt; &gt; 请勿将 Partial Mode 与 `response_format={"type": "json_object"}` 混用，否则可能获得预期外的模型回复。如需引导 JSON 输出，建议直接使用 [Structured Output](https://platform.kimi.com/docs/guide/response_format.md) 或单独设置 `partial: true` 并预填 `{`。</li><li>reasoning_content。可选参数，默认值为 {"type": "enabled", "keep": "all"}。</li><li>控制是否保留历史对话轮次（previous turns）的 reasoning_content，从而启用</li><li>reasoning_content；传入其他非法值会报错。这与 kimi-k2.6 不同，k2.6 默认为</li><li>reasoning_content 原样保留在 messages 中。</li><li>- 注意：该参数只影响历史轮次的 reasoning_content；不改变模型在当前 turn</li><li>reasoning_content。可选参数，默认值为 {"type": "enabled"}。</li><li>- `null`（默认）或不传：服务端会忽略历史 turns 的 reasoning_content。</li><li>- `"all"`：保留历史 turns 的 reasoning_content 并随上下文一同提供给模型，启用</li><li>reasoning_content 原样保留在 messages 中。推荐与 `type: "enabled"`</li><li>tool_calls:</li><li>description: 模型发起的工具调用</li><li>reasoning_content:</li><li>description: 推理过程（仅在思考模式启用时返回）</li><li>- tool_calls</li><li>reasoning_effort:</li><li>Kimi K3 系列始终启用思考，并开启 Preserved Thinking。推理强度支持 low、high 和</li><li>{"type": "json_schema"} 可启用 Structured Output，按指定的 JSON Schema</li><li>description: 模型发起的工具调用片段</li><li>- title: image_url</li><li>- image_url</li><li>image_url:</li><li>- title: video_url</li><li>- video_url</li><li>video_url:</li><li>description: 消息内容。可以是纯文本字符串，也可以是包含 text/image_url/video_url 类型的对象数组（用于多模态输入）</li><li>是否严格按 parameters schema 约束工具调用参数的输出。默认为 true。设为 false 时仅保证输出为合法</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Chat Completions API<br>&gt; 创建对话补全：向 Kimi 模型发送消息并获取回复，支持流式输出、工具调用与视觉输入。<br>创建一个对话补全请求，模型将根据输入的消息列表生成回复。<br>&gt; [accordion] Content 字段说明<br>&gt;<br>&gt; `content` 字段支持以下两种形式：<br>&gt;<br>&gt; **纯文本字符串**<br>&gt;<br>&gt; ```json theme={null}<br>&gt; { "content": "你好" }<br>&gt; ```<br>&gt;<br>&gt; **对象数组**（用于多模态输入）<br>&gt;<br>&gt; 数组中每个元素通过 `type` 字段区分类型：<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "content": [<br>&gt;         { "type": "text", "text": "描述这张图片" },<br>&gt;         { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } },<br>&gt;         { "type": "video_url", "video_url": { "url": "data:video/mp4;base64,..." } }<br>&gt;     ]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; 其中 `image_url` 和 `video_url` 也支持直接传入字符串，效果等同于对象形式中的 `url` 字段：<br>&gt;<br>&gt; ```json theme={null}<br>&gt; { "type": "image_url", "image_url": "data:image/png;base64,..." }<br>&gt; ```<br>&gt;<br>&gt; #### 参数说明<br>&gt;<br>&gt; 数组中每个元素的字段说明如下：<br>&gt;<br>&gt; &#124; 参数名称 &#124; 是否必须 &#124; 说明 &#124; 类型 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `type` &#124; required &#124; 内容类型 &#124; `"text"` \&#124; `"image_url"` \&#124; `"video_url"` &#124;<br>&gt; &#124; `text` &#124; 当 `type=text` 时必填 &#124; 文本内容 &#124; string &#124;<br>&gt; &#124; `image_url` &#124; 当 `type=image_url` 时必填 &#124; 用于传输图片，支持对象形式 `{"url": "..."}` 或直接传入 URL 字符串 &#124; object \&#124; string &#124;<br>&gt; &#124; `video_url` &#124; 当 `type=video_url` 时必填 &#124; 用于传输视频，支持对象形式 `{"url": "..."}` 或直接传入 URL 字符串 &#124; object \&#124; string &#124;<br>&gt;<br>&gt; 当 `image_url` 传入对象时，其字段说明如下：<br>&gt;<br>&gt; &#124; 参数名称 &#124; 是否必须 &#124; 说明 &#124; 类型 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `url` &#124; required &#124; 使用 base64 编码或通过 file id 指定的图片内容 &#124; string &#124;<br>&gt;<br>&gt; 当 `video_url` 传入对象时，其字段说明如下：<br>&gt;<br>&gt; &#124; 参数名称 &#124; 是否必须 &#124; 说明 &#124; 类型 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `url` &#124; required &#124; 使用 base64 编码或通过 file id 指定的视频内容，例如 `data:video/mp4;base64,...` &#124; string &#124;<br>&gt;<br>&gt; &gt; [!NOTE]<br>&gt; &gt;<br>&gt; &gt; 无论使用对象形式（`url` 字段）还是字符串简写，均支持以下两种格式：<br>&gt; &gt;<br>&gt; &gt; * base64 编码：`data:image/png;base64,...` 或 `data:video/mp4;base64,...`<br>&gt; &gt; * 文件引用：`ms://&lt;file_id&gt;`<br>&gt; &gt;<br>&gt; &gt; 详见[使用 Kimi 视觉模型](https://platform.kimi.com/docs/guide/use-kimi-vision-model.md)。<br>&gt;<br>&gt; #### 调用示例<br>&gt;<br>&gt; ```python python expandable theme={null}<br>&gt; import os<br>&gt; import base64<br>&gt;<br>&gt; from openai import OpenAI<br>&gt; from openai.types.chat import ChatCompletion<br>&gt;<br>&gt; client: OpenAI = OpenAI(<br>&gt;     api_key=os.environ.get("MOONSHOT_API_KEY"),<br>&gt;     base_url="https://api.moonshot.cn/v1",<br>&gt; )<br>&gt;<br>&gt; # 对图片进行 base64 编码<br>&gt; with open("您的图片地址", "rb") as f:<br>&gt;     img_base: str = base64.b64encode(f.read()).decode("utf-8")<br>&gt;<br>&gt; response: ChatCompletion = client.chat.completions.create(<br>&gt;     model="kimi-k3.1-pro",<br>&gt;     messages=[<br>&gt;         {<br>&gt;             "role": "user",<br>&gt;             "content": [<br>&gt;                 {<br>&gt;                     "type": "image_url",<br>&gt;                     "image_url": {<br>&gt;                         "url": f"data:image/jpeg;base64,{img_base}",<br>&gt;                     },<br>&gt;                 },<br>&gt;                 {<br>&gt;                     "type": "text", |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（22 项）<details><summary>展开完整内容</summary><ul><li>&gt;     -H "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>&gt;                             url: `data:image/jpeg;base64,${imgBase}`,</li><li>- $ref: '#/components/schemas/KimiK31ProChatRequest'</li><li>- $ref: '#/components/schemas/KimiK3ChatRequest'</li><li>- $ref: '#/components/schemas/KimiK27CodeChatRequest'</li><li>- $ref: '#/components/schemas/KimiK26ChatRequest'</li><li>$ref: '#/components/schemas/ChatCompletionResponse'</li><li>$ref: '#/components/schemas/ChatCompletionChunk'</li><li>$ref: '#/components/schemas/ErrorResponse'</li><li>- $ref: '#/components/schemas/KimiK3ChatRequestBase'</li><li>- $ref: '#/components/schemas/ChatRequestBase'</li><li>$ref: '#/components/schemas/ChoiceDelta'</li><li>- $ref: '#/components/schemas/ChatRequestCommon'</li><li>$ref: '#/components/schemas/KimiK3Message'</li><li>$ref: '#/components/schemas/Message'</li><li>$ref: '#/components/schemas/ToolDefinition'</li><li>id；退出并恢复会话时应保持不变。对于 Kimi Code Plan，此字段为必填以提高缓存命中率。对于其他多轮对话</li><li>- $ref: '#/components/schemas/Message'</li><li>- $ref: '#/components/schemas/KimiK3DynamicToolMessage'</li><li>description: 消息内容。可以是纯文本字符串，也可以是包含 text/image_url/video_url 类型的对象数组（用于多模态输入）</li><li>description: 函数名称。必须符合正则表达式：^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li><li>pattern: ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-api |
| source ref | 新增 | 未记录 | moonshotai-chat-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt;     base_url="https://api.moonshot.cn/v1", |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.cn/v1/chat/completions \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt;     baseURL: "https://api.moonshot.cn/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/chat/completions |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | `model` 签发，可通过 `POST /v1/signatures/verify` 校验。仅当请求携带合法的 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Chat Completions API |

#### 来源 / moonshotai-chat-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | • 模型推理价格说明 - Kimi API 开放平台<br>• 模型推理<br>• 模型推理定价<br>• 模型推理价格说明<br>• 批量推理定价<br>• 了解 Kimi 模型推理的 token 计费单位、输入输出计费方式、缓存优惠和各模型价格入口。<br>• 批量推理（Batch API） ： kimi-k3.1-pro 与 kimi-k3 支持批量推理，适合大规模、低实时性要求的任务，各项费用为标准价格的 60%。<br>• Kimi API 开放平台提供的模型推理服务是「按量计费」模式，不提供订阅制方案，请注意与 Kimi 会员、Kimi Code 等产品区分， 查看产品差异 。<br>• 模型推理接口对 Input 和 Output 均实行按量计费。对于 K3 系列模型，缓存写入按 TTL（5min / 1h）单独计费；缓存命中的输入仅按缓存命中价格计费，不再重复收取缓存写入费用。如果您上传并抽取文档内容，并将抽取的文档内容作为 Input 传输给模型，那么文档内容也将按量计费。文件相关接口（文件内容抽取/文件存储） 限时免费 ，即您只上传并抽取文档时，文件接口本身不产生费用。关于如何提高缓存命中率、选择合适的 TTL 档位，详见 上下文缓存最佳实践 。 |
| excerpt | 新增 | 未记录 | 模型推理价格说明 - Kimi API 开放平台<br>Documentation Index<br>Fetch the complete documentation index at: /docs/llms.txt<br>Use this file to discover all available pages before exploring further.<br>Skip to main content<br>🎉 Kimi K3.1 Pro 已正式发布， 快来体验吧！<br>Kimi API 开放平台 home page 简体中文<br>模型推理<br>托管智能体<br>API 参考<br>模型与定价<br>资源<br>搜索...<br>⌘ K<br>企业订阅<br>联系销售<br>用户中心<br>Kimi API 开放平台 home page 搜索或提问...<br>Navigation<br>模型推理定价<br>模型推理价格说明<br>模型推理定价<br>计费说明<br>功能定价<br>批量推理定价<br>联网搜索定价<br>托管智能体定价<br>充值与限速<br>充值与限速<br>模型<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>模型列表<br>模型推理定价<br>模型推理价格说明<br>复制页面 复制页面<br>了解 Kimi 模型推理的 token 计费单位、输入输出计费方式、缓存优惠和各模型价格入口。<br>复制页面 复制页面<br>​<br>模型定价<br>​<br>K3 系列模型<br>K3 系列模型均支持 1,048,576 tokens 上下文窗口。<br>注：Kimi API 对重复的请求前缀 自动启用 上下文缓存计费，缓存有效期（time-to-live，TTL）默认为 5min。TTL 设置及成本优化建议详见 上下文缓存最佳实践 。<br>批量推理（Batch API） ： kimi-k3.1-pro 与 kimi-k3 支持批量推理，适合大规模、低实时性要求的任务，各项费用为标准价格的 60%。<br>​<br>K2 系列模型<br>K2 系列模型均支持 262,144 tokens 上下文窗口。<br>尊敬的 Kimi 用户，K2 系列模型将于 2026 年 10 月 31 日起停止向新注册用户开放，已注册用户不受影响；我们计划在 12 月底下线所有 K2 系列模型，请提前做好 迁移准备 。<br>此处 1 MTok = 1,000,000 tokens，表格中的价格代表每消耗 1 MTok 的价格。<br>​<br>计费基本概念<br>Kimi API 开放平台提供的模型推理服务是「按量计费」模式，不提供订阅制方案，请注意与 Kimi 会员、Kimi Code 等产品区分， 查看产品差异 。<br>​<br>计费单元<br>Token：代表常见的字符序列，每个汉字使用的 Token 数目可能是不同的。例如，单个汉字”夔”可能会被分解为若干 Token 的组合，而像”中国”这样短且常见的短语则可能会使用单个 Token。大致来说，对于一段通常的中文文本，1 个 Token 大约相当于 1.5-2 个汉字。具体每次调用实际产生的 Tokens 数量可以通过调用 计算 Token API 来获得。<br>​<br>计费逻辑<br>模型推理接口对 Input 和 Output 均实行按量计费。对于 K3 系列模型，缓存写入按 TTL（5min / 1h）单独计费；缓存命中的输入仅按缓存命中价格计费，不再重复收取缓存写入费用。如果您上传并抽取文档内容，并将抽取的文档内容作为 Input 传输给模型，那么文档内容也将按量计费。文件相关接口（文件内容抽取/文件存储） 限时免费 ，即您只上传并抽取文档时，文件接口本身不产生费用。关于如何提高缓存命中率、选择合适的 TTL 档位，详见 上下文缓存最佳实践 。<br>​<br>模型说明<br>各模型的能力介绍与适用场景见对应的模型指南：<br>Kimi K3.1 Pro 模型介绍<br>Kimi K3 模型介绍<br>Kimi K2.7 Code 模型介绍<br>Kimi K2.6 模型介绍<br>此页面对您有帮助吗？<br>是<br>否<br>批量推理定价<br>下一页<br>⌘ I<br>github website<br>在此页面<br>返回顶部 模型定价 K3 系列模型<br>K2 系列模型<br>计费基本概念 计费单元<br>计费逻辑<br>模型说明 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 1 项 › cells | 新增 | 未记录 | • kimi-k3.1-pro<br>• ¥13.00 / MTok<br>• ¥68.00 / MTok<br>• ¥1.30 / MTok<br>• ¥13.00 / MTok<br>• ¥26.00 / MTok |
| structured records › 第 1 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 1 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 1 项 › text | 新增 | 未记录 | kimi-k3.1-pro &#124; ¥13.00 / MTok &#124; ¥68.00 / MTok &#124; ¥1.30 / MTok &#124; ¥13.00 / MTok &#124; ¥26.00 / MTok |
| structured records › 第 2 项 › cells | 新增 | 未记录 | • kimi-k3.1-pro-highspeed<br>• ¥26.00 / MTok<br>• ¥136.00 / MTok<br>• ¥1.30 / MTok<br>• ¥26.00 / MTok<br>• ¥52.00 / MTok |
| structured records › 第 2 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 2 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 2 项 › text | 新增 | 未记录 | kimi-k3.1-pro-highspeed &#124; ¥26.00 / MTok &#124; ¥136.00 / MTok &#124; ¥1.30 / MTok &#124; ¥26.00 / MTok &#124; ¥52.00 / MTok |
| structured records › 第 3 项 › cells | 新增 | 未记录 | • kimi-k3<br>• ¥20.00 / MTok<br>• ¥100.00 / MTok<br>• ¥2.00 / MTok<br>• ¥20.00 / MTok<br>• ¥40.00 / MTok |
| structured records › 第 3 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中<br>• 缓存写入（5min）<br>• 缓存写入（1h） |
| structured records › 第 3 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 3 项 › text | 新增 | 未记录 | kimi-k3 &#124; ¥20.00 / MTok &#124; ¥100.00 / MTok &#124; ¥2.00 / MTok &#124; ¥20.00 / MTok &#124; ¥40.00 / MTok |
| structured records › 第 4 项 › cells | 新增 | 未记录 | • kimi-k2.7-code<br>• ¥6.50 / MTok<br>• ¥27.00 / MTok<br>• ¥1.30 / MTok |
| structured records › 第 4 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中 |
| structured records › 第 4 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 4 项 › text | 新增 | 未记录 | kimi-k2.7-code &#124; ¥6.50 / MTok &#124; ¥27.00 / MTok &#124; ¥1.30 / MTok |
| structured records › 第 5 项 › cells | 新增 | 未记录 | • kimi-k2.7-code-highspeed<br>• ¥13.00 / MTok<br>• ¥54.00 / MTok<br>• ¥2.60 / MTok |
| structured records › 第 5 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中 |
| structured records › 第 5 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 5 项 › text | 新增 | 未记录 | kimi-k2.7-code-highspeed &#124; ¥13.00 / MTok &#124; ¥54.00 / MTok &#124; ¥2.60 / MTok |
| structured records › 第 6 项 › cells | 新增 | 未记录 | • kimi-k2.6<br>• ¥6.50 / MTok<br>• ¥27.00 / MTok<br>• ¥1.10 / MTok |
| structured records › 第 6 项 › headers | 新增 | 未记录 | • 模型<br>• 输入<br>• 输出<br>• 缓存命中 |
| structured records › 第 6 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 6 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| structured records › 第 6 项 › text | 新增 | 未记录 | kimi-k2.6 &#124; ¥6.50 / MTok &#124; ¥27.00 / MTok &#124; ¥1.10 / MTok |
| structured records › 第 7 项 › evidence | 新增 | 未记录 | 批量推理（Batch API） ： kimi-k3.1-pro 与 kimi-k3 支持批量推理，适合大规模、低实时性要求的任务，各项费用为标准价格的 60%。 |
| structured records › 第 7 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-chat-pricing |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 模型推理价格说明 - Kimi API 开放平台 |

#### 来源 / moonshotai-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>&gt; &gt;     base_url = "https://api.moonshot.cn/v1",</li><li>&gt; &gt; curl https://api.moonshot.cn/v1/files \</li><li>&gt; &gt;     baseURL: "https://api.moonshot.cn/v1",</li><li>&gt;     base_url="https://api.moonshot.cn/v1",</li><li>````yaml POST /v1/files</li><li>API 基础地址为 `https://api.moonshot.cn/v1`。本文操作路径已包含 `/v1`，拼接这些路径时使用服务器地址</li><li>curl https://api.moonshot.cn/v1/agents \</li><li>&#124; `POST /v1/files` &#124; 每个文件 100 MiB &#124;</li><li>&#124; `POST /v1/skills` &#124; 每个技能包 64 MiB &#124;</li><li>- **项目插件**：`POST /v1/plugins` 和 `POST /v1/plugins/{id}/versions` 发布不超过 64</li><li>- **插件版本与归档**：`GET /v1/plugins/{id}/versions` 按语义版本从新到旧列出，`GET</li><li>- **插件选择**：`GET /v1/plugins` 接受 `scope` 为 `official` 或</li><li>/v1/plugins` 和 `GET /v1/skills` 接受 `category` 过滤列表。</li><li>- **契约声明**：OpenAPI 从 3.1.0 升级为 3.2.0；`POST /v1/files` 和 `POST /v1/skills` 的</li><li>- **继续**：`POST /v1/sessions/{id}/continue` 返回</li><li>- **官方环境**：`GET /v1/environments` 新增 `official_only`，默认 false。</li><li>- `GET /v1/agents` 新增 `official_only`，默认 false。</li><li>POST /v1/files</li></ul></details> |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>&gt; 上传文件用于文本内容抽取、图片理解或视频理解，支持 pdf、doc、txt 等文本类格式。</li><li>&gt; 注意：图片文件不再支持内容抽取（`file-extract`）。如需图片理解，请使用 `purpose="image"` 上传图片，详见[使用视觉模型](https://platform.kimi.com/docs/guide/use-kimi-vision-model.md)。</li><li>&gt; [accordion] 用于图片或视频理解</li><li>&gt; 上传文件时，选择 `purpose="image"` 或 `purpose="video"`，上传后的图片或视频可以用于模型的原生理解。</li><li>&gt; 请参阅[使用视觉模型](https://platform.kimi.com/docs/guide/use-kimi-vision-model.md)了解完整示例。</li><li>认领**工作行**（WorkItem），在租约有效期间执行沙箱工具调用。</li><li>1. 打开 `cursor=now` 流，等待控制帧，暂存随后到达的实时事件。</li><li>先建流再回补，可避免历史与实时事件之间留下空档。未写入持久历史的预览无法重建。</li><li>- `default_toolset_20260901` 中的 `search_image_by_text` 与</li><li>`search_image_by_image` 采用同一默认规则，其他内置工具仍为 `eager`。</li><li>- 智能体与会话的 `model.reasoning_effort` 接受 `max`，它仍是所选模型可能忽略的提示。</li><li>- image</li><li>- video</li><li>的 JSON 对象，而非原始上传内容。图片和视频由媒体解析处理，因此其内容端点不可用。</li><li>- `image`/`video`：跳过文档解析。只有检测为图片或视频的文件才会进行媒体处理。图片不做 OCR，内容端点不可用。</li><li>- `ready`：文件可按指定用途使用。图片或视频解析失败不会改变此状态。</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 上传文件<br>&gt; 上传文件用于文本内容抽取、图片理解或视频理解，支持 pdf、doc、txt 等文本类格式。<br>&gt; [!NOTE]<br>&gt;<br>&gt; 单文件大小上限为 100 MiB，超限时返回文件过大错误。文件个数不再受限，改为按组织总存储量限制，默认 10 GiB。文件解析服务限时免费，请求高峰期平台可能会有限流策略。<br>&gt; [accordion] 支持的格式<br>&gt;<br>&gt; 文件接口支持以下格式：`.pdf`、`.txt`、`.csv`、`.doc`、`.docx`、`.xls`、`.xlsx`、`.ppt`、`.pptx`、`.md`、`.dot`、`.epub`、`.html`、`.json`、`.mobi`、`.log`、`.go`、`.h`、`.c`、`.cpp`、`.cxx`、`.cc`、`.cs`、`.java`、`.js`、`.css`、`.jsp`、`.php`、`.py`、`.py3`、`.asp`、`.yaml`、`.yml`、`.ini`、`.conf`、`.ts`、`.tsx` 等。<br>&gt;<br>&gt; 注意：图片文件不再支持内容抽取（`file-extract`）。如需图片理解，请使用 `purpose="image"` 上传图片，详见[使用视觉模型](https://platform.kimi.com/docs/guide/use-kimi-vision-model.md)。<br>&gt; [accordion] 文件内容抽取示例<br>&gt;<br>&gt; 上传文件时选择 `purpose="file-extract"`，随后可以让模型获取文件中的信息作为上下文。抽取结果为 Markdown 格式文本（加粗、标题、列表等以 Markdown 语法呈现），可直接放入 messages，详见[获取文件内容](https://platform.kimi.com/docs/api/files-content.md)。<br>&gt;<br>&gt; &gt; [tab] python<br>&gt; &gt;<br>&gt; &gt; ```python showLineNumbers expandable theme={null}<br>&gt; &gt; from pathlib import Path<br>&gt; &gt; import os<br>&gt; &gt;<br>&gt; &gt; from openai import OpenAI<br>&gt; &gt;<br>&gt; &gt; client = OpenAI(<br>&gt; &gt;     api_key=os.environ["MOONSHOT_API_KEY"],<br>&gt; &gt;     base_url = "https://api.moonshot.cn/v1",<br>&gt; &gt; )<br>&gt; &gt;<br>&gt; &gt; # xlnet.pdf 是一个示例文件, 我们支持 pdf, doc 等文本类格式<br>&gt; &gt; file_object = client.files.create(file=Path("xlnet.pdf"), purpose="file-extract")<br>&gt; &gt;<br>&gt; &gt; # 获取结果<br>&gt; &gt; # 注意，之前 retrieve_content api 在最新版本标记了 warning, 可以用下面这行代替<br>&gt; &gt; # 如果是旧版本，可以用 retrieve_content<br>&gt; &gt; file_content = client.files.content(file_id=file_object.id).text<br>&gt; &gt;<br>&gt; &gt; # 把它放进请求中<br>&gt; &gt; messages = [<br>&gt; &gt;     {<br>&gt; &gt;         "role": "system",<br>&gt; &gt;         "content": "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",<br>&gt; &gt;     },<br>&gt; &gt;     {<br>&gt; &gt;         "role": "system",<br>&gt; &gt;         "content": file_content,<br>&gt; &gt;     },<br>&gt; &gt;     {"role": "user", "content": "请简单介绍 xlnet.pdf 讲了啥"},<br>&gt; &gt; ]<br>&gt; &gt;<br>&gt; &gt; # 然后调用 chat-completion, 获取 Kimi 的回答<br>&gt; &gt; completion = client.chat.completions.create(<br>&gt; &gt;   model="kimi-k3.1-pro",<br>&gt; &gt;   messages=messages,<br>&gt; &gt;   temperature=0.6,<br>&gt; &gt; )<br>&gt; &gt;<br>&gt; &gt; print(completion.choices[0].message)<br>&gt; &gt; ```<br>&gt;<br>&gt; &gt; [tab] curl<br>&gt; &gt;<br>&gt; &gt; ```bash showLineNumbers theme={null}<br>&gt; &gt; # xlnet.pdf 是一个示例文件<br>&gt; &gt;<br>&gt; &gt; curl https://api.moonshot.cn/v1/files \<br>&gt; &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt; &gt;   -F purpose="file-extract" \<br>&gt; &gt;   -F file="@xlnet.pdf"<br>&gt; &gt; ```<br>&gt;<br>&gt; &gt; [tab] node.js<br>&gt; &gt;<br>&gt; &gt; ```js showLineNumbers expandable theme={null}<br>&gt; &gt; const OpenAI = require("openai");<br>&gt; &gt; const fs = require("fs")<br>&gt; &gt;<br>&gt; &gt; const client = new OpenAI({<br>&gt; &gt;     apiKey: process.env.MOONSHOT_API_KEY,<br>&gt; &gt;     baseURL: "https://api.moonshot.cn/v1",<br>&gt; &gt; });<br>&gt; &gt;<br>&gt; &gt; async function main() {<br>&gt; &gt;     // xlnet.pdf 是一个示例文件, 我们支持 pdf, doc 等文本类格式<br>&gt; &gt;     let file_object = await client.files.create({<br>&gt; &gt;         file: fs.createReadStream("xlnet.pdf"),<br>&gt; &gt;         purpose: "file-extract"<br>&gt; &gt;     })<br>&gt; &gt;     // 注意，之前 retrieve_content api 在最新版本标记了 warning, 可以用下面这行代替<br>&gt; &gt;     // 如果是旧版本，可以用 retrieve_content<br>&gt; &gt;     let file_content = await (await client.files.content(file_object.id)).text()<br>&gt; &gt;<br>&gt; &gt;     // 把它放进请求中<br>&gt; &gt;     let messages = [<br>&gt; &gt;         {<br>&gt; &gt;             "role": "system",<br>&gt; &gt;             "content": "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",<br>&gt; &gt;         },<br>&gt; &gt;         { |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>&gt; &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>&gt; 其中 `$MOONSHOT_API_KEY` 部分需要替换为您自己的 API Key。或者在调用前给它设置好环境变量。</li><li>-H "Authorization: Bearer $KIMI_API_KEY" \</li><li>- $ref: '#/components/parameters/APIVersionHeader'</li><li>$ref: '#/components/schemas/UploadFilename'</li><li>- $ref: '#/components/schemas/FilePurpose'</li><li>$ref: '#/components/schemas/FileMetadata'</li><li>$ref: '#/components/schemas/BadRequestErrorResponse'</li><li>$ref: '#/components/schemas/UnauthorizedErrorResponse'</li><li>$ref: '#/components/schemas/TooManyRequestsErrorResponse'</li><li>$ref: '#/components/schemas/APIError'</li><li>$ref: '#/components/schemas/APIVersion'</li><li>$ref: '#/components/schemas/FilePurpose'</li><li>$ref: '#/components/schemas/FileStatus'</li><li>$ref: '#/components/schemas/ErrorObject'</li><li>$ref: '#/components/schemas/ErrorType'</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| source ref | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt; &gt;     base_url = "https://api.moonshot.cn/v1", |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; &gt; curl https://api.moonshot.cn/v1/files \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt; &gt;     baseURL: "https://api.moonshot.cn/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | &gt;     base_url="https://api.moonshot.cn/v1", |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/files |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 6 项 › evidence | 新增 | 未记录 | API 基础地址为 `https://api.moonshot.cn/v1`。本文操作路径已包含 `/v1`，拼接这些路径时使用服务器地址 |
| structured records › 第 6 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 7 项 › evidence | 新增 | 未记录 | curl https://api.moonshot.cn/v1/agents \ |
| structured records › 第 7 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 8 项 › evidence | 新增 | 未记录 | &#124; `POST /v1/files` &#124; 每个文件 100 MiB &#124; |
| structured records › 第 8 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 9 项 › evidence | 新增 | 未记录 | &#124; `POST /v1/skills` &#124; 每个技能包 64 MiB &#124; |
| structured records › 第 9 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 10 项 › evidence | 新增 | 未记录 | - **项目插件**：`POST /v1/plugins` 和 `POST /v1/plugins/{id}/versions` 发布不超过 64 |
| structured records › 第 10 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 11 项 › evidence | 新增 | 未记录 | - **插件版本与归档**：`GET /v1/plugins/{id}/versions` 按语义版本从新到旧列出，`GET |
| structured records › 第 11 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 12 项 › evidence | 新增 | 未记录 | - **插件选择**：`GET /v1/plugins` 接受 `scope` 为 `official` 或 |
| structured records › 第 12 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 13 项 › evidence | 新增 | 未记录 | /v1/plugins` 和 `GET /v1/skills` 接受 `category` 过滤列表。 |
| structured records › 第 13 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 14 项 › evidence | 新增 | 未记录 | - **契约声明**：OpenAPI 从 3.1.0 升级为 3.2.0；`POST /v1/files` 和 `POST /v1/skills` 的 |
| structured records › 第 14 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 15 项 › evidence | 新增 | 未记录 | - **继续**：`POST /v1/sessions/{id}/continue` 返回 |
| structured records › 第 15 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 16 项 › evidence | 新增 | 未记录 | - **官方环境**：`GET /v1/environments` 新增 `official_only`，默认 false。 |
| structured records › 第 16 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| structured records › 第 17 项 › evidence | 新增 | 未记录 | - `GET /v1/agents` 新增 `official_only`，默认 false。 |
| structured records › 第 17 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-file-upload-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 上传文件 |

#### 来源 / moonshotai-global-api-list-models

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-list-models |
| source ref | 新增 | 未记录 | moonshotai-global-api-list-models |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-list-models |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-list-models |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-list-models |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-list-models |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | List Models |

#### 来源 / moonshotai-global-api-overview

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &#124; OpenAI Chat Completions &#124; `https://api.moonshot.ai/v1` &#124; [`/chat/completions`](https://platform.kimi.ai/docs/api/chat) &#124; Official OpenAI SDKs (Python / Node.js), plus third-party tools and frameworks such as LangChain, Dify, and Coze &#124;<br>• &#124; OpenAI Responses &#124; `https://api.moonshot.ai/v1` &#124; [`/responses`](https://platform.kimi.ai/docs/api/responses) &#124; Official OpenAI SDKs (Python / Node.js) &#124;<br>• base_url="https://api.moonshot.ai/v1",<br>• baseURL: "https://api.moonshot.ai/v1",<br>• base_url="https://api.moonshot.ai/anthropic", |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># API Overview<br>&gt; Review Kimi API base URLs, authentication, request conventions, compatibility, and links to the main API endpoints.<br>## Service Address<br>```<br>https://api.moonshot.ai<br>```<br>The `base_url` differs by compatible protocol; see "Protocol Compatibility" below.<br>## Protocol Compatibility<br>The Kimi API is compatible with three API formats, so you can reuse the corresponding official SDKs and tools:<br>&#124; Compatible API &#124; base\_url &#124; Endpoint &#124; SDKs / Tools &#124;<br>&#124; - &#124; - &#124; - &#124; - &#124;<br>&#124; OpenAI Chat Completions &#124; `https://api.moonshot.ai/v1` &#124; [`/chat/completions`](https://platform.kimi.ai/docs/api/chat) &#124; Official OpenAI SDKs (Python / Node.js), plus third-party tools and frameworks such as LangChain, Dify, and Coze &#124;<br>&#124; OpenAI Responses &#124; `https://api.moonshot.ai/v1` &#124; [`/responses`](https://platform.kimi.ai/docs/api/responses) &#124; Official OpenAI SDKs (Python / Node.js) &#124;<br>&#124; Anthropic Messages &#124; `https://api.moonshot.ai/anthropic` &#124; [`/messages`](https://platform.kimi.ai/docs/api/messages) &#124; Official Anthropic SDKs, Claude Code, and similar tools &#124;<br>If your project already uses the official OpenAI or Anthropic APIs, simply replace `base_url` and the API Key with your Kimi configuration to migrate — no other code changes are needed.<br>&gt; [!NOTE]<br>&gt;<br>&gt; When using the OpenAI-compatible endpoints, some parameters are Kimi-specific extensions: the `thinking` parameter needs to be passed via the SDK's `extra_body`; `partial` is a field on assistant messages within the messages array (`"partial": true`), not a top-level request parameter. See [Tool Use](https://platform.kimi.ai/docs/api/tool-use) and [Partial Mode](https://platform.kimi.ai/docs/api/partial) for details.<br>## Authentication<br>All API requests require an API Key in the HTTP header:<br>```<br>Authorization: Bearer $MOONSHOT_API_KEY<br>```<br>API Keys can be created and managed in the [Kimi Open Platform Console](https://platform.kimi.ai/console/api-keys).<br>&gt; [!WARNING]<br>&gt;<br>&gt; Your API Key is sensitive. Do not expose it in client-side code, public repositories, or logs. Use environment variables to manage it.<br>When using an official SDK, pass your API Key and the protocol-specific `base_url` at initialization.<br>OpenAI-compatible endpoints:<br>```python Python theme={null}<br>import os<br>from openai import OpenAI<br>client = OpenAI(<br>api_key=os.environ["MOONSHOT_API_KEY"],<br>base_url="https://api.moonshot.ai/v1",<br>)<br>```<br>```javascript Node.js theme={null}<br>const OpenAI = require("openai");<br>const client = new OpenAI({<br>apiKey: process.env.MOONSHOT_API_KEY,<br>baseURL: "https://api.moonshot.ai/v1",<br>});<br>```<br>Anthropic-compatible endpoints:<br>```python Python theme={null}<br>import os<br>from anthropic import Anthropic<br>client = Anthropic(<br>api_key=os.environ["MOONSHOT_API_KEY"],<br>base_url="https://api.moonshot.ai/anthropic",<br>)<br>```<br>```javascript Node.js theme={null}<br>const Anthropic = require("@anthropic-ai/sdk");<br>const client = new Anthropic({<br>apiKey: process.env.MOONSHOT_API_KEY,<br>baseURL: "https://api.moonshot.ai/anthropic",<br>});<br>```<br>## Error Handling<br>Failed requests return a JSON error response with `error.type` and `error.message` fields. For the full list of error types, messages, and troubleshooting tips, see [Errors](https://platform.kimi.ai/docs/api/errors.md).<br>## API Endpoints<br>&#124; Endpoint &#124; Method &#124; Protocol &#124; Description &#124;<br>&#124; - &#124; - &#124; - &#124; - &#124;<br>&#124; `/v1/chat/completions` &#124; POST &#124; OpenAI &#124; [Create Chat Completion](https://platform.kimi.ai/docs/api/chat.md) &#124;<br>&#124; `/v1/responses` &#124; POST &#124; OpenAI &#124; [Responses API](https://platform.kimi.ai/docs/api/responses.md) &#124;<br>&#124; `/anthropic/v1/messages` &#124; POST &#124; Anthropic &#124; [Messages API](https://platform.kimi.ai/docs/api/messages.md) &#124;<br>&#124; `/v1/models` &#124; GET &#124; OpenAI &#124; [List Models](https://platform.kimi.ai/docs/api/list-models.md) &#124;<br>&#124; `/v1/tokenizers/estimate-token-count` &#124; POST &#124; OpenAI &#124; [Estimate Tokens](https://platform.kimi.ai/docs/api/estimate.md) &#124;<br>&#124; `/v1/users/me/balance` &#124; GET &#124; OpenAI &#124; [Check Balance](https://platform.kimi.ai/docs/api/balance.md) &#124;<br>&#124; `/v1/tools/search` &#124; POST &#124; Kimi &#124; [Web Search Basic](https://platform.kimi.ai/docs/api/tools-search.md) &#124;<br>&#124; `/v1/tools/search_pro` &#124; POST &#124; Kimi &#124; [Web Search Pro](https://platform.kimi.ai/docs/api/tools-search-pro.md) &#124;<br>&#124; `/v1/tools/fetch` &#124; POST &#124; Kimi &#124; [URL Fetch](https://platform.kimi.ai/docs/api/tools-fetch.md) &#124;<br>&#124; `/v1/files` &#124; POST &#124; OpenAI &#124; [Upload File](https://platform.kimi.ai/docs/api/files-upload.md) &#124;<br>&#124; `/v1/files` &#124; GET &#124; OpenAI &#124; [List Files](https://platform.kimi.ai/docs/api/files-list.md) &#124;<br>&#124; `/v1/files/{file_id}` &#124; GET &#124; OpenAI &#124; [Get File Info](https://platform.kimi.ai/docs/api/files-retrieve.md) &#124;<br>&#124; `/v1/files/{file_id}` &#124; DELETE &#124; OpenAI &#124; [Delete File](https://platform.kimi.ai/docs/api/files-delete.md) &#124;<br>&#124; `/v1/files/{file_id}/content` &#124; GET &#124; OpenAI &#124; [Get File Content](https://platform.kimi.ai/docs/api/files-content.md) &#124;<br>&#124; `/v1/batches` &#124; POST &#124; OpenAI &#124; [Create Batch](https://platform.kimi.ai/docs/api/batch-create.md) &#124;<br>&#124; `/v1/batches` &#124; GET &#124; OpenAI &#124; [List Batches](https://platform.kimi.ai/docs/api/batch-list.md) &#124;<br>&#124; `/v1/batches/{batch_id}` &#124; GET &#124; OpenAI &#124; [Get Batch Details](https://platform.kimi.ai/docs/api/batch-retrieve.md) &#124;<br>&#124; `/v1/batches/{batch_id}/cancel` &#124; POST &#124; OpenAI &#124; [Cancel Batch](https://platform.kimi.ai/docs/api/batch-cancel.md) &#124;<br>## Next Steps<br>&gt; [card] [Quickstart](https://platform.kimi.ai/docs/api/quickstart)<br>&gt;<br>&gt; Send your first API request<br>&gt; [card] [Responses API](https://platform.kimi.ai/docs/api/responses.md)<br>&gt;<br>&gt; OpenAI Responses-compatible endpoint<br>&gt; [card] [Messages API](https://platform.kimi.ai/docs/api/messages.md)<br>&gt;<br>&gt; Anthropic Messages-compatible endpoint<br>&gt; [card] [List Models](https://platform.kimi.ai/docs/api/list-models.md)<br>&gt;<br>&gt; See the currently available models |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • Authorization: Bearer $MOONSHOT_API_KEY |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-overview |
| source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &#124; OpenAI Chat Completions &#124; `https://api.moonshot.ai/v1` &#124; [`/chat/completions`](https://platform.kimi.ai/docs/api/chat) &#124; Official OpenAI SDKs (Python / Node.js), plus third-party tools and frameworks such as LangChain, Dify, and Coze &#124; |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-overview |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &#124; OpenAI Responses &#124; `https://api.moonshot.ai/v1` &#124; [`/responses`](https://platform.kimi.ai/docs/api/responses) &#124; Official OpenAI SDKs (Python / Node.js) &#124; |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-overview |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | base_url="https://api.moonshot.ai/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-overview |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | baseURL: "https://api.moonshot.ai/v1", |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-api-overview |
| tables › 记录 API Endpoints › headers | 新增 | 未记录 | • Endpoint<br>• Method<br>• Protocol<br>• Description |
| tables › 记录 API Endpoints › heading | 新增 | 未记录 | API Endpoints |
| tables › 记录 API Endpoints › rows › 第 1 项 | 新增 | 未记录 | • `/v1/chat/completions`<br>• POST<br>• OpenAI<br>• [Create Chat Completion](https://platform.kimi.ai/docs/api/chat.md) |
| tables › 记录 API Endpoints › rows › 第 2 项 | 新增 | 未记录 | • `/v1/responses`<br>• POST<br>• OpenAI<br>• [Responses API](https://platform.kimi.ai/docs/api/responses.md) |
| tables › 记录 API Endpoints › rows › 第 3 项 | 新增 | 未记录 | • `/anthropic/v1/messages`<br>• POST<br>• Anthropic<br>• [Messages API](https://platform.kimi.ai/docs/api/messages.md) |
| tables › 记录 API Endpoints › rows › 第 4 项 | 新增 | 未记录 | • `/v1/models`<br>• GET<br>• OpenAI<br>• [List Models](https://platform.kimi.ai/docs/api/list-models.md) |
| tables › 记录 API Endpoints › rows › 第 5 项 | 新增 | 未记录 | • `/v1/tokenizers/estimate-token-count`<br>• POST<br>• OpenAI<br>• [Estimate Tokens](https://platform.kimi.ai/docs/api/estimate.md) |
| tables › 记录 API Endpoints › rows › 第 6 项 | 新增 | 未记录 | • `/v1/users/me/balance`<br>• GET<br>• OpenAI<br>• [Check Balance](https://platform.kimi.ai/docs/api/balance.md) |
| tables › 记录 API Endpoints › rows › 第 7 项 | 新增 | 未记录 | • `/v1/tools/search`<br>• POST<br>• Kimi<br>• [Web Search Basic](https://platform.kimi.ai/docs/api/tools-search.md) |
| tables › 记录 API Endpoints › rows › 第 8 项 | 新增 | 未记录 | • `/v1/tools/search_pro`<br>• POST<br>• Kimi<br>• [Web Search Pro](https://platform.kimi.ai/docs/api/tools-search-pro.md) |
| tables › 记录 API Endpoints › rows › 第 9 项 | 新增 | 未记录 | • `/v1/tools/fetch`<br>• POST<br>• Kimi<br>• [URL Fetch](https://platform.kimi.ai/docs/api/tools-fetch.md) |
| tables › 记录 API Endpoints › rows › 第 10 项 | 新增 | 未记录 | • `/v1/files`<br>• POST<br>• OpenAI<br>• [Upload File](https://platform.kimi.ai/docs/api/files-upload.md) |
| tables › 记录 API Endpoints › rows › 第 11 项 | 新增 | 未记录 | • `/v1/files`<br>• GET<br>• OpenAI<br>• [List Files](https://platform.kimi.ai/docs/api/files-list.md) |
| tables › 记录 API Endpoints › rows › 第 12 项 | 新增 | 未记录 | • `/v1/files/{file_id}`<br>• GET<br>• OpenAI<br>• [Get File Info](https://platform.kimi.ai/docs/api/files-retrieve.md) |
| tables › 记录 API Endpoints › rows › 第 13 项 | 新增 | 未记录 | • `/v1/files/{file_id}`<br>• DELETE<br>• OpenAI<br>• [Delete File](https://platform.kimi.ai/docs/api/files-delete.md) |
| tables › 记录 API Endpoints › rows › 第 14 项 | 新增 | 未记录 | • `/v1/files/{file_id}/content`<br>• GET<br>• OpenAI<br>• [Get File Content](https://platform.kimi.ai/docs/api/files-content.md) |
| tables › 记录 API Endpoints › rows › 第 15 项 | 新增 | 未记录 | • `/v1/batches`<br>• POST<br>• OpenAI<br>• [Create Batch](https://platform.kimi.ai/docs/api/batch-create.md) |
| tables › 记录 API Endpoints › rows › 第 16 项 | 新增 | 未记录 | • `/v1/batches`<br>• GET<br>• OpenAI<br>• [List Batches](https://platform.kimi.ai/docs/api/batch-list.md) |
| tables › 记录 API Endpoints › rows › 第 17 项 | 新增 | 未记录 | • `/v1/batches/{batch_id}`<br>• GET<br>• OpenAI<br>• [Get Batch Details](https://platform.kimi.ai/docs/api/batch-retrieve.md) |
| tables › 记录 API Endpoints › rows › 第 18 项 | 新增 | 未记录 | • `/v1/batches/{batch_id}/cancel`<br>• POST<br>• OpenAI<br>• [Cancel Batch](https://platform.kimi.ai/docs/api/batch-cancel.md) |
| tables › 记录 Protocol Compatibility › headers | 新增 | 未记录 | • Compatible API<br>• base\_url<br>• Endpoint<br>• SDKs / Tools |
| tables › 记录 Protocol Compatibility › heading | 新增 | 未记录 | Protocol Compatibility |
| tables › 记录 Protocol Compatibility › rows › 记录 Anthropic Messages | 新增 | 未记录 | • Anthropic Messages<br>• `https://api.moonshot.ai/anthropic`<br>• [`/messages`](https://platform.kimi.ai/docs/api/messages)<br>• Official Anthropic SDKs, Claude Code, and similar tools |
| tables › 记录 Protocol Compatibility › rows › 记录 OpenAI Chat Completions | 新增 | 未记录 | • OpenAI Chat Completions<br>• `https://api.moonshot.ai/v1`<br>• [`/chat/completions`](https://platform.kimi.ai/docs/api/chat)<br>• Official OpenAI SDKs (Python / Node.js), plus third-party tools and frameworks such as LangChain, Dify, and Coze |
| tables › 记录 Protocol Compatibility › rows › 记录 OpenAI Responses | 新增 | 未记录 | • OpenAI Responses<br>• `https://api.moonshot.ai/v1`<br>• [`/responses`](https://platform.kimi.ai/docs/api/responses)<br>• Official OpenAI SDKs (Python / Node.js) |
| title | 新增 | 未记录 | API Overview |

#### 来源 / moonshotai-global-batch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"),<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files \<br>• baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1",<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches \<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches/your_batch_id \<br>• curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files/your_output_file_id/content \<br>• curl "${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches?limit=10" \<br>• curl -X POST ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches/your_batch_id/cancel \<br>• &gt;     base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"),<br>• &gt;     baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| capability mentions | 新增 | 未记录 | 列表（85 项）<details><summary>展开完整内容</summary><ul><li>The Batch API supports image and video content in the input file. The key difference from text tasks is in **building the input file** — the rest of the workflow (upload, create task, poll, process results) is identical.</li><li>&gt; [accordion] Image Batch Processing Example</li><li>&gt; There are two ways to include images:</li><li>&gt; * **Base64 inline**: Encode images as base64 directly in the JSONL. Suitable for small images. Note that base64 inflates file size by \~33% — keep the 100MB file size limit in mind.</li><li>&gt; * **File reference**: Upload images first via the Files API (`purpose="image"`), then reference them in the JSONL using `ms://&lt;file_id&gt;`. Better for large images or image reuse.</li><li>&gt; PROMPT = "Classify this image: Landscape/Portrait/Food/Architecture/Other"</li><li>&gt; SYSTEM = "You are an image classification assistant."</li><li>&gt; def build_request_base64(custom_id: str, image_path: str) -&gt; dict:</li><li>&gt;     """Method 1: Encode the image as base64 and embed it directly in the JSONL.</li><li>&gt;     Best for small images — no extra upload step needed."""</li><li>&gt;     with open(image_path, "rb") as f:</li><li>&gt;         image_data: str = base64.b64encode(f.read()).decode("utf-8")</li><li>&gt;                         {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_data}"}},</li><li>&gt; def build_request_upload(custom_id: str, image_path: str) -&gt; dict:</li><li>&gt;     """Method 2: Upload the image first, then reference it via ms://&lt;file_id&gt;.</li><li>&gt;     Best for large images or when the same image is reused across requests."""</li><li>&gt;         file=open(image_path, "rb"),</li><li>&gt;         purpose="image",</li><li>&gt;     print(f"Image uploaded: {image_path} -&gt; {file_object.id}")</li><li>&gt;                         {"type": "image_url", "image_url": {"url": f"ms://{file_object.id}"}},</li><li>&gt; images: list[str] = ["image1.png", "image2.png", "image3.png"]</li><li>&gt; requests: list[dict] = [build_request(f"img-{i}", path) for i, path in enumerate(images)]</li><li>&gt; input_path = Path("image_batch_requests.jsonl")</li><li>&gt; const PROMPT = "Classify this image: Landscape/Portrait/Food/Architecture/Other";</li><li>&gt; const SYSTEM = "You are an image classification assistant.";</li><li>&gt; /** Method 1: Encode the image as base64 and embed it directly in the JSONL.</li><li>&gt;  *  Best for small images — no extra upload step needed. */</li><li>&gt; function buildRequestBase64(customId, imagePath) {</li><li>&gt;     const imageData = fs.readFileSync(imagePath).toString("base64");</li><li>&gt;                         { type: "image_url", image_url: { url: `data:image/png;base64,${imageData}` } },</li><li>&gt; /** Method 2: Upload the image first, then reference it via ms://&lt;file_id&gt;.</li><li>&gt;  *  Best for large images or when the same image is reused across requests. */</li><li>&gt; async function buildRequestUpload(customId, imagePath) {</li><li>&gt;         file: fs.createReadStream(imagePath),</li><li>&gt;         purpose: "image"</li><li>&gt;     console.log(`Image uploaded: ${imagePath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "image_url", image_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;     const images = ["image1.png", "image2.png", "image3.png"];</li><li>&gt;     for (let i = 0; i &lt; images.length; i++) {</li><li>&gt;             ? await buildRequestUpload(`img-${i}`, images[i])</li><li>&gt;             : buildRequestBase64(`img-${i}`, images[i]);</li><li>&gt;     fs.writeFileSync("image_batch_requests.jsonl", requests.join("\n") + "\n");</li><li>&gt;         file: fs.createReadStream("image_batch_requests.jsonl"),</li><li>&gt; [accordion] Video Batch Processing Example</li><li>&gt; There are two ways to include videos:</li><li>&gt; * **Base64 inline**: Encode videos as base64 directly in the JSONL. Suitable for small videos. Note that base64 inflates file size by \~33% — keep the 100MB file size limit in mind.</li><li>&gt; * **File reference**: Upload videos first via the Files API (`purpose="video"`), then reference them in the JSONL using `ms://&lt;file_id&gt;`. Better for large videos or video reuse.</li><li>&gt; PROMPT = "Summarize the main content of this video."</li><li>&gt; SYSTEM = "You are a video content analysis assistant."</li><li>&gt; def build_request_base64(custom_id: str, video_path: str) -&gt; dict:</li><li>&gt;     """Method 1: Encode the video as base64 and embed it directly in the JSONL.</li><li>&gt;     Best for small videos — no extra upload step needed."""</li><li>&gt;     with open(video_path, "rb") as f:</li><li>&gt;         video_data: str = base64.b64encode(f.read()).decode("utf-8")</li><li>&gt;                         {"type": "video_url", "video_url": {"url": f"data:video/mp4;base64,{video_data}"}},</li><li>&gt; def build_request_upload(custom_id: str, video_path: str) -&gt; dict:</li><li>&gt;     """Method 2: Upload the video first, then reference it via ms://&lt;file_id&gt;.</li><li>&gt;     Best for large videos or when the same video is reused across requests."""</li><li>&gt;         file=open(video_path, "rb"),</li><li>&gt;         purpose="video",</li><li>&gt;     print(f"Video uploaded: {video_path} -&gt; {file_object.id}")</li><li>&gt;                         {"type": "video_url", "video_url": {"url": f"ms://{file_object.id}"}},</li><li>&gt; videos: list[str] = ["video1.mp4", "video2.mp4", "video3.mp4"]</li><li>&gt; requests: list[dict] = [build_request(f"video-{i}", path) for i, path in enumerate(videos)]</li><li>&gt; input_path = Path("video_batch_requests.jsonl")</li><li>&gt; const PROMPT = "Summarize the main content of this video.";</li><li>&gt; const SYSTEM = "You are a video content analysis assistant.";</li><li>&gt; /** Method 1: Encode the video as base64 and embed it directly in the JSONL.</li><li>&gt;  *  Best for small videos — no extra upload step needed. */</li><li>&gt; function buildRequestBase64(customId, videoPath) {</li><li>&gt;     const videoData = fs.readFileSync(videoPath).toString("base64");</li><li>&gt;                         { type: "video_url", video_url: { url: `data:video/mp4;base64,${videoData}` } },</li><li>&gt; /** Method 2: Upload the video first, then reference it via ms://&lt;file_id&gt;.</li><li>&gt;  *  Best for large videos or when the same video is reused across requests. */</li><li>&gt; async function buildRequestUpload(customId, videoPath) {</li><li>&gt;         file: fs.createReadStream(videoPath),</li><li>&gt;         purpose: "video"</li><li>&gt;     console.log(`Video uploaded: ${videoPath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "video_url", video_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;     const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];</li><li>&gt;     for (let i = 0; i &lt; videos.length; i++) {</li><li>&gt;             ? await buildRequestUpload(`video-${i}`, videos[i])</li><li>&gt;             : buildRequestBase64(`video-${i}`, videos[i]);</li><li>&gt;     fs.writeFileSync("video_batch_requests.jsonl", requests.join("\n") + "\n");</li><li>&gt;         file: fs.createReadStream("video_batch_requests.jsonl"),</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Using Batch API for Bulk Processing<br>&gt; Upload JSONL requests, create and monitor Batch API jobs, and download results for large-scale asynchronous inference.<br>When you need to process large-scale tasks with low real-time requirements, the Batch API is the ideal choice. It supports submitting tasks in bulk via files, saving 40% on inference costs compared to real-time API calls.<br>&gt; [!NOTE]<br>&gt;<br>&gt; Batch API supports the `kimi-k3.1-pro`, `kimi-k3`, `kimi-k2.7-code`, and `kimi-k2.6` models. The `temperature`, `top_p`, and other parameters cannot be modified for these models — do not include them in the request body.<br>&gt; [card] [Create Batch](https://platform.kimi.ai/docs/api/batch-create.md)<br>&gt;<br>&gt; Upload a JSONL file and create a batch task<br>&gt; [card] [List Batches](https://platform.kimi.ai/docs/api/batch-list.md)<br>&gt;<br>&gt; List batch tasks for your organization<br>&gt; [card] [Retrieve Batch](https://platform.kimi.ai/docs/api/batch-retrieve.md)<br>&gt;<br>&gt; Get status and details for a specific batch task<br>&gt; [card] [Cancel Batch](https://platform.kimi.ai/docs/api/batch-cancel.md)<br>&gt;<br>&gt; Cancel an in-progress batch task<br>## Workflow<br>This guide walks through a complete text classification example using the Batch API:<br>### 1. Build the Input File<br>Each line in the JSONL file is an independent JSON object representing a single inference request:<br>```json theme={null}<br>{"custom_id": "request-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "kimi-k2.6", "messages": [{"role": "system", "content": "You are a text classification assistant."}, {"role": "user", "content": "Classify this text: AI is transforming the world"}]}}<br>```<br>&#124; Field &#124; Required &#124; Description &#124;<br>&#124; - &#124; - &#124; - &#124;<br>&#124; `custom_id` &#124; Yes &#124; Custom request identifier for tracking results, must be unique within the file &#124;<br>&#124; `method` &#124; Yes &#124; Request method, must be `POST` &#124;<br>&#124; `url` &#124; Yes &#124; Request endpoint, must be `/v1/chat/completions` &#124;<br>&#124; `body` &#124; Yes &#124; Request body, same parameters as the [Chat Completions API](https://platform.kimi.ai/docs/api/chat.md) &#124;<br>&gt; [!WARNING]<br>&gt;<br>&gt; The `model` in `body` must be `kimi-k3.1-pro`, `kimi-k3`, `kimi-k2.7-code`, or `kimi-k2.6`. The `temperature`, `top_p`, `n`, `presence_penalty`, and `frequency_penalty` parameters cannot be modified for these models. Do not include these parameters in the `body`.<br>&gt; [!NOTE]<br>&gt;<br>&gt; **Input file requirements:**<br>&gt;<br>&gt; * File must be in `.jsonl` format, non-empty, and no larger than 100MB<br>&gt; * Each line must be a valid JSON object containing `custom_id`, `method`, `url`, and `body` fields<br>&gt; * `custom_id` must be unique within the file<br>&gt; * All lines must use the same `model` — only one model per batch is allowed<br>&gt; * `method` must be `POST`, `url` must be `/v1/chat/completions`<br>&gt; * The specified model must exist and the user must have access to it<br>### 2. Upload the File<br>Upload the JSONL file via the [Upload File](https://platform.kimi.ai/docs/api/files-upload.md) endpoint with `purpose` set to `"batch"`.<br>```python Python theme={null}<br>import os<br>from openai import OpenAI<br>from openai.types import FileObject<br>client = OpenAI(<br>api_key=os.environ.get("MOONSHOT_API_KEY"),<br>base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"),<br>)<br>file_object: FileObject = client.files.create(<br>file=open("batch_requests.jsonl", "rb"),<br>purpose="batch",<br>)<br>print(file_object.id)  # Save file_id for the next step<br>```<br>```bash cURL theme={null}<br>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files \<br>-H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>-F purpose="batch" \<br>-F file="@batch_requests.jsonl"<br>```<br>```javascript Node.js theme={null}<br>const OpenAI = require("openai");<br>const fs = require("fs");<br>const client = new OpenAI({<br>apiKey: process.env.MOONSHOT_API_KEY,<br>baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1",<br>});<br>async function main() {<br>const fileObject = await client.files.create({<br>file: fs.createReadStream("batch_requests.jsonl"),<br>purpose: "batch"<br>});<br>console.log(fileObject.id);  // Save file_id for the next step<br>}<br>main();<br>```<br>### 3. Create the Task<br>Call the [Create Batch](https://platform.kimi.ai/docs/api/batch-create.md) endpoint with `input_file_id` and `completion_window`. We recommend setting a generous time window for larger datasets.<br>```python Python theme={null}<br>import os<br>from openai import OpenAI<br>from openai.types import Batch<br>client = OpenAI(<br>api_key=os.environ.get("MOONSHOT_API_KEY"),<br>base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"),<br>)<br>batch: Batch = client.batches.create(<br>input_file_id="your_file_id",<br>endpoint="/v1/chat/completions",<br>completion_window="24h",<br>) |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files \</li><li>-H "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches \</li><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches/your_batch_id \</li><li>-H "Authorization: Bearer $MOONSHOT_API_KEY"</li><li>console.log(`Status: ${batch.status} (${batch.request_counts.completed}/${batch.request_counts.total})`);</li><li>curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files/your_output_file_id/content \</li><li>console.log(`${data.custom_id}: ${data.response.body.choices[0].message.content}`);</li><li>custom_id: `text_${i}`,</li><li>{ role: "user", content: `Please classify the following text: ${text}` }</li><li>console.log(`File uploaded: ${fileObject.id}`);</li><li>console.log(`Batch created: ${batch.id}`);</li><li>console.log(`Status: ${current.status} (${current.request_counts.completed}/${current.request_counts.total})`);</li><li>console.error(`Task terminated: ${current.status}`);</li><li>curl "${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches?limit=10" \</li><li>console.log(`${batch.id} - ${batch.status} (${batch.request_counts.completed}/${batch.request_counts.total})`);</li><li>curl -X POST ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches/your_batch_id/cancel \</li><li>console.log(`Status: ${batch.status}`);  // cancelling</li><li>&gt;                         { type: "image_url", image_url: { url: `data:image/png;base64,${imageData}` } },</li><li>&gt;     console.log(`Image uploaded: ${imagePath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "image_url", image_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;             ? await buildRequestUpload(`img-${i}`, images[i])</li><li>&gt;             : buildRequestBase64(`img-${i}`, images[i]);</li><li>&gt;     console.log(`Batch created: ${batch.id}`);</li><li>&gt;         console.log(`Status: ${current.status} (${current.request_counts.completed}/${current.request_counts.total})`);</li><li>&gt;         console.error(`Task terminated: ${current.status}`);</li><li>&gt;         console.log(`${data.custom_id}: ${data.response.body.choices[0].message.content}`);</li><li>&gt;                         { type: "video_url", video_url: { url: `data:video/mp4;base64,${videoData}` } },</li><li>&gt;     console.log(`Video uploaded: ${videoPath} -&gt; ${fileObject.id}`);</li><li>&gt;                         { type: "video_url", video_url: { url: `ms://${fileObject.id}` } },</li><li>&gt;             ? await buildRequestUpload(`video-${i}`, videos[i])</li><li>&gt;             : buildRequestBase64(`video-${i}`, videos[i]);</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| source ref | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches \ |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 6 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 6 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 7 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 7 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 8 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches/your_batch_id \ |
| structured records › 第 8 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 9 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 9 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 10 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 10 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 11 项 › evidence | 新增 | 未记录 | curl ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/files/your_output_file_id/content \ |
| structured records › 第 11 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 12 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 12 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 13 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 13 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 14 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 14 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 15 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 15 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 16 项 › evidence | 新增 | 未记录 | curl "${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches?limit=10" \ |
| structured records › 第 16 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 17 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 17 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 18 项 › evidence | 新增 | 未记录 | base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 18 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 19 项 › evidence | 新增 | 未记录 | curl -X POST ${MOONSHOT_BASE_URL:-https://api.moonshot.ai/v1}/batches/your_batch_id/cancel \ |
| structured records › 第 19 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 20 项 › evidence | 新增 | 未记录 | baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 20 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 21 项 › evidence | 新增 | 未记录 | &gt;     base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 21 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 22 项 › evidence | 新增 | 未记录 | &gt;     baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 22 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 23 项 › evidence | 新增 | 未记录 | &gt;     base_url=os.environ.get("MOONSHOT_BASE_URL", "https://api.moonshot.ai/v1"), |
| structured records › 第 23 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| structured records › 第 24 项 › evidence | 新增 | 未记录 | &gt;     baseURL: process.env.MOONSHOT_BASE_URL &#124;&#124; "https://api.moonshot.ai/v1", |
| structured records › 第 24 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-api |
| tables › 记录 1. Build the Input File › headers | 新增 | 未记录 | • Field<br>• Required<br>• Description |
| tables › 记录 1. Build the Input File › heading | 新增 | 未记录 | 1. Build the Input File |
| tables › 记录 1. Build the Input File › rows › 记录 `body` | 新增 | 未记录 | • `body`<br>• Yes<br>• Request body, same parameters as the [Chat Completions API](https://platform.kimi.ai/docs/api/chat.md) |
| tables › 记录 1. Build the Input File › rows › 记录 `custom_id` | 新增 | 未记录 | • `custom_id`<br>• Yes<br>• Custom request identifier for tracking results, must be unique within the file |
| tables › 记录 1. Build the Input File › rows › 记录 `method` | 新增 | 未记录 | • `method`<br>• Yes<br>• Request method, must be `POST` |
| tables › 记录 1. Build the Input File › rows › 记录 `url` | 新增 | 未记录 | • `url`<br>• Yes<br>• Request endpoint, must be `/v1/chat/completions` |
| tables › 记录 Batch Status Reference › headers | 新增 | 未记录 | • Status<br>• Description |
| tables › 记录 Batch Status Reference › heading | 新增 | 未记录 | Batch Status Reference |
| tables › 记录 Batch Status Reference › rows › 记录 `cancelled` | 新增 | 未记录 | • `cancelled`<br>• Cancellation complete, batch terminated |
| tables › 记录 Batch Status Reference › rows › 记录 `cancelling` | 新增 | 未记录 | • `cancelling`<br>• Cancellation requested, pending |
| tables › 记录 Batch Status Reference › rows › 记录 `completed` | 新增 | 未记录 | • `completed`<br>• Results ready, batch complete |
| tables › 记录 Batch Status Reference › rows › 记录 `expired` | 新增 | 未记录 | • `expired`<br>• Did not complete within `completion_window` |
| tables › 记录 Batch Status Reference › rows › 记录 `failed` | 新增 | 未记录 | • `failed`<br>• Data validation failed, batch terminated |
| tables › 记录 Batch Status Reference › rows › 记录 `finalizing` | 新增 | 未记录 | • `finalizing`<br>• Execution complete, preparing results |
| tables › 记录 Batch Status Reference › rows › 记录 `in_progress` | 新增 | 未记录 | • `in_progress`<br>• Validation passed, execution in progress |
| tables › 记录 Batch Status Reference › rows › 记录 `validating` | 新增 | 未记录 | • `validating`<br>• Created, input data validation in progress |
| title | 新增 | 未记录 | Using Batch API for Bulk Processing |

#### 来源 / moonshotai-global-batch-create-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • ````yaml POST /v1/batches<br>• POST /v1/batches |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Create Batch<br>&gt; Create a batch job to process requests asynchronously at a lower price.<br>&gt; [!NOTE]<br>&gt;<br>&gt; **Limits:**<br>&gt;<br>&gt; &#124; Limit &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; File format &#124; Must have `.jsonl` extension &#124;<br>&gt; &#124; File size &#124; Must be non-empty, max 100MB &#124;<br>&gt; &#124; Organization quota &#124; Up to 1000 batch-purpose files per organization &#124;<br>&gt; &#124; Model consistency &#124; All requests in a batch must use the same model &#124;<br>&gt; &#124; `custom_id` &#124; Must be unique within the file &#124;<br>&gt; &#124; Model access &#124; The specified model must exist and the user must have access &#124;<br>For complete usage examples, see the [Batch API Guide](https://platform.kimi.ai/docs/guide/use-batch-api.md).<br>## OpenAPI<br>````yaml POST /v1/batches<br>openapi: 3.1.0<br>info:<br>title: Moonshot AI API<br>version: 1.0.0<br>description: API for Moonshot AI / Kimi large language model services<br>servers:<br>- url: https://api.moonshot.ai<br>description: Production<br>security: []<br>paths:<br>/v1/batches:<br>post:<br>tags:<br>- Batch<br>summary: Create Batch<br>description: &gt;-<br>Create a batch task. You need to first upload a JSONL file with<br>purpose="batch" via the Files API, then use the returned file_id to<br>create the task.<br>requestBody:<br>required: true<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/BatchCreateRequest'<br>responses:<br>'200':<br>description: The created batch task<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/BatchObject'<br>'400':<br>description: Bad request - Invalid parameters<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/ErrorResponse'<br>'401':<br>description: Unauthorized - Invalid or missing API key<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/ErrorResponse'<br>'500':<br>description: Server error<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/ErrorResponse'<br>security:<br>- bearerAuth: []<br>components:<br>schemas:<br>BatchCreateRequest:<br>type: object<br>properties:<br>input_file_id:<br>type: string<br>description: &gt;-<br>ID of the input file, must be a .jsonl file uploaded with<br>purpose="batch"<br>endpoint:<br>type: string<br>description: Request endpoint, currently only /v1/chat/completions is supported<br>enum:<br>- /v1/chat/completions<br>completion_window:<br>type: string<br>description: &gt;-<br>Time window for task processing, supports formats like 12h, 1d, 3d,<br>minimum 12h, maximum 7d<br>metadata:<br>type: object<br>description: &gt;-<br>Custom metadata, up to 16 key-value pairs, key max 64 chars, value<br>max 512 chars<br>additionalProperties:<br>type: string<br>maxLength: 512 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/BatchCreateRequest'<br>• $ref: '#/components/schemas/BatchObject'<br>• $ref: '#/components/schemas/ErrorResponse'<br>• $ref: '#/components/schemas/BatchRequestCounts' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-create-api |
| source ref | 新增 | 未记录 | moonshotai-global-batch-create-api |
| structured records › 记录 moonshotai-global-batch-create-api › evidence | 新增 | 未记录 | ````yaml POST /v1/batches |
| structured records › 记录 moonshotai-global-batch-create-api › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-create-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Create Batch |

#### 来源 / moonshotai-global-batch-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | BatchJob Pricing - Kimi API Platform<br>Documentation Index<br>Fetch the complete documentation index at: /docs/llms.txt<br>Use this file to discover all available pages before exploring further.<br>Skip to main content<br>🎉 Kimi K3.1 Pro has launched! Start exploring now!<br>Kimi API Platform home page<br>Guides<br>API Reference<br>Models &amp; Pricing<br>Resources<br>Search...<br>⌘ K<br>Kimi Business<br>Contact Sales<br>User Center<br>Kimi API Platform home page Search or ask...<br>Navigation<br>Other Pricing<br>BatchJob Pricing<br>Model Pricing<br>Overview<br>Other Pricing<br>BatchJob Pricing<br>WebSearch Pricing<br>Top-up &amp; Rate Limits<br>Recharge and Rate Limits<br>Models<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>Model List<br>Other Pricing<br>BatchJob Pricing<br>Copy page Copy page<br>Review Kimi BatchJob pricing for input, output, and cache-hit tokens, along with billing notes.<br>Copy page Copy page<br>​<br>Product Pricing<br>Explanation: Prices exclude applicable taxes. Specific tax obligations are subject to local tax regulations and will be calculated at checkout based on your jurisdiction.<br>Batch API inference costs 60% of the standard model price, making it well suited for large-scale tasks that do not require real-time responses.<br>kimi-k3.1-pro and kimi-k3 support a 1,048,576-token context window; kimi-k2.7-code and kimi-k2.6 support 262,144 tokens.<br>1 MTok = 1,000,000 tokens. All prices above are per MTok consumed.<br>​<br>Notes<br>Batch API supports the kimi-k3.1-pro , kimi-k3 , kimi-k2.7-code , and kimi-k2.6 models<br>Batch jobs on kimi-k3.1-pro and kimi-k3 are also charged Cache Write fees; kimi-k2.7-code and kimi-k2.6 do not support cache writes<br>Because batch requests are processed asynchronously and concurrently, cache hits are provided on a best-effort basis and are not guaranteed<br>Batch API is not subject to real-time concurrency limits, making it suitable for bulk tasks<br>Tasks must complete within the specified completion_window , or they expire<br>See the Batch API Guide for usage details<br>Was this page helpful?<br>Yes<br>No<br>Model Inference Pricing<br>Previous<br>WebSearch Pricing<br>Next<br>⌘ I<br>x github linkedin discord website<br>On this page<br>Back to top Product Pricing<br>Notes |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-pricing |
| source ref | 新增 | 未记录 | moonshotai-global-batch-pricing |
| structured records › 第 1 项 › cells | 新增 | 未记录 | • kimi-k3.1-pro<br>• $1.20 / MTok<br>• $6.00 / MTok<br>• $0.12 / MTok<br>• $1.20 / MTok<br>• $2.40 / MTok |
| structured records › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 1 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-pricing |
| structured records › 第 1 项 › text | 新增 | 未记录 | kimi-k3.1-pro &#124; $1.20 / MTok &#124; $6.00 / MTok &#124; $0.12 / MTok &#124; $1.20 / MTok &#124; $2.40 / MTok |
| structured records › 第 2 项 › cells | 新增 | 未记录 | • kimi-k3<br>• $1.80 / MTok<br>• $9.00 / MTok<br>• $0.18 / MTok<br>• $1.80 / MTok<br>• $3.60 / MTok |
| structured records › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 2 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-pricing |
| structured records › 第 2 项 › text | 新增 | 未记录 | kimi-k3 &#124; $1.80 / MTok &#124; $9.00 / MTok &#124; $0.18 / MTok &#124; $1.80 / MTok &#124; $3.60 / MTok |
| structured records › 第 3 项 › cells | 新增 | 未记录 | • kimi-k2.7-code<br>• $0.57 / MTok<br>• $2.40 / MTok<br>• $0.114 / MTok<br>• —<br>• — |
| structured records › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 3 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-pricing |
| structured records › 第 3 项 › text | 新增 | 未记录 | kimi-k2.7-code &#124; $0.57 / MTok &#124; $2.40 / MTok &#124; $0.114 / MTok &#124; — &#124; — |
| structured records › 第 4 项 › cells | 新增 | 未记录 | • kimi-k2.6<br>• $0.57 / MTok<br>• $2.40 / MTok<br>• $0.10 / MTok<br>• —<br>• — |
| structured records › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 4 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-pricing |
| structured records › 第 4 项 › text | 新增 | 未记录 | kimi-k2.6 &#124; $0.57 / MTok &#124; $2.40 / MTok &#124; $0.10 / MTok &#124; — &#124; — |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | Batch API inference costs 60% of the standard model price, making it well suited for large-scale tasks that do not require real-time responses. |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-batch-pricing |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | BatchJob Pricing - Kimi API Platform |

#### 来源 / moonshotai-global-chat-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt;     base_url="https://api.moonshot.ai/v1",<br>• &gt; curl https://api.moonshot.ai/v1/chat/completions \<br>• &gt;     baseURL: "https://api.moonshot.ai/v1",<br>• ````yaml POST /v1/chat/completions<br>• it with `POST /v1/signatures/verify`. Only returned when the<br>• POST /v1/chat/completions |
| capability mentions | 新增 | 未记录 | 列表（90 项）<details><summary>展开完整内容</summary><ul><li>&gt; Create a chat completion: send messages to Kimi models and get replies, with streaming, tool calling, and vision input.</li><li>&gt;         { "type": "text", "text": "Describe this image" },</li><li>&gt;         { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } },</li><li>&gt;         { "type": "video_url", "video_url": { "url": "data:video/mp4;base64,..." } }</li><li>&gt; `image_url` and `video_url` also support passing a string directly, equivalent to the `url` field in object form:</li><li>&gt; { "type": "image_url", "image_url": "data:image/png;base64,..." }</li><li>&gt; &#124; `type` &#124; required &#124; Content type &#124; `"text"` \&#124; `"image_url"` \&#124; `"video_url"` &#124;</li><li>&gt; &#124; `image_url` &#124; required when `type=image_url` &#124; For transmitting images. Supports object form `{"url": "..."}` or a URL string directly &#124; object \&#124; string &#124;</li><li>&gt; &#124; `video_url` &#124; required when `type=video_url` &#124; For transmitting videos. Supports object form `{"url": "..."}` or a URL string directly &#124; object \&#124; string &#124;</li><li>&gt; When `image_url` is passed as an object, its fields are:</li><li>&gt; &#124; `url` &#124; required &#124; Image content specified via base64 encoding or file id &#124; string &#124;</li><li>&gt; When `video_url` is passed as an object, its fields are:</li><li>&gt; &#124; `url` &#124; required &#124; Video content specified via base64 encoding or file id, for example `data:video/mp4;base64,...` &#124; string &#124;</li><li>&gt; &gt; * Base64 encoding: `data:image/png;base64,...` or `data:video/mp4;base64,...`</li><li>&gt; &gt; See [Use the Kimi Vision Model](https://platform.kimi.ai/docs/guide/use-kimi-vision-model.md).</li><li>&gt; # Encode the image to base64</li><li>&gt; with open("your_image_path", "rb") as f:</li><li>&gt;                     "type": "image_url",</li><li>&gt;                     "image_url": {</li><li>&gt;                         "url": f"data:image/jpeg;base64,{img_base}",</li><li>&gt;                     "text": "Describe this image",</li><li>&gt;                         "type": "image_url",</li><li>&gt;                         "image_url": {</li><li>&gt;                             "url": "data:image/jpeg;base64,/9j/4AAQ..."</li><li>&gt;                         "text": "Describe this image"</li><li>&gt;     // Encode the image to base64</li><li>&gt;     const imgBase = fs.readFileSync("your_image_path").toString("base64");</li><li>&gt;                         type: "image_url",</li><li>&gt;                         image_url: {</li><li>&gt;                             url: `data:image/jpeg;base64,${imgBase}`,</li><li>&gt;                         text: "Describe this image",</li><li>&gt;                 "reasoning_content": "The user is asking a very simple math question: \"What is 1+1?\"\n\nThis is as basic as it gets. The answer is 2. There's no need for any elaborate explanation, headers, bullet points, or lengthy response. A simple, direct answer is appropriate here.\n\nI could just say \"2\" or \"1+1 = 2\" — keeping it brief and conversational since this is a casual chat context."</li><li>&gt;             "reasoning_tokens": 90</li><li>&gt; Set `stream=true` and `stream_options.include_usage=true`. Reasoning arrives in `reasoning_content`, followed by the answer in `content`. The final usage chunk has `choices: []` and reports totals in the top-level `usage`.</li><li>&gt; data: {"id":"chatcmpl-6adb0ef47c3c1358b6a07603","object":"chat.completion.chunk","created":1792741110,"model":"kimi-k3.1-pro","choices":[{"index":0,"delta":{"reasoning_content":"The"},"finish_reason":null}],"system_fingerprint":"fpv0_e7278693"}</li><li>&gt; data: {"id":"chatcmpl-6adb0ef47c3c1358b6a07603","object":"chat.completion.chunk","created":1792741110,"model":"kimi-k3.1-pro","choices":[],"usage":{"prompt_tokens":373,"completion_tokens":93,"total_tokens":466,"completion_tokens_details":{"reasoning_tokens":71},"prompt_tokens_details":{"cache_write_tokens":256}}}</li><li>&gt; In the non-streaming response above, the input is 373 tokens, including 256 cache-write tokens; output is 112 tokens, for a total of 373 + 112 = 485 tokens. Cache reads and writes are already included in `prompt_tokens`; output includes both reasoning and answer tokens. Do not count these tokens twice.</li><li>&gt; # Preserve the full assistant reply, including reasoning_content and any tool_calls</li><li>&gt; * `{"type": "json_schema", "json_schema": {...}}`: outputs structured data according to the given JSON Schema (Structured Output)</li><li>&gt; **`tool_calls` in the response**</li><li>&gt; When `finish_reason` is `"tool_calls"`, the model returns a `tool_calls` array containing `id`, `function.name`, and `function.arguments`:</li><li>&gt;       "reasoning_content": "The user is asking about the weather in Beijing today. I have a tool available called `get_weather` that can get the weather for a given city. Let me use it to find the weather in Beijing.",</li><li>&gt;       "tool_calls": [</li><li>&gt;     "finish_reason": "tool_calls"</li><li>&gt; After executing the tool locally, first append the complete assistant message from the response (including `reasoning_content` and `tool_calls`) unchanged to the original request's `messages`, then append the tool result below. The `tool_call_id` must match the tool-call `id` in the assistant message:</li><li>&gt; {"role": "tool", "tool_call_id": "get_weather_0_4d9e2559", "content": "Sunny, 25°C"}</li><li>&gt; &gt; See [Use the Kimi API to Complete Tool Calls](https://platform.kimi.ai/docs/guide/use-kimi-api-to-complete-tool-calls.md) for details.</li><li>&gt; The Kimi K3 series always enables thinking and Preserved Thinking, and uses the top-level `reasoning_effort` field (`"low"`, `"high"`, or `"max"`; default `"max"`). It does not use the K2.x `thinking` parameters below. `kimi-k2.6` and `kimi-k2.7-code` support thinking mode: the model first outputs its reasoning process (`reasoning_content`) before producing the final answer.</li><li>&gt; &#124; `thinking.keep` &#124; `null` \&#124; `"all"` &#124; Preserved Thinking: whether to retain historical `reasoning_content` in context. `kimi-k2.6` defaults to `null` (not kept) and accepts `"all"`; `kimi-k2.7-code` is fixed at `"all"` (kept), other values return an error &#124;</li><li>&gt; &#124; `reasoning_content` &#124; Reasoning process (returned only when thinking mode is enabled) &#124;</li><li>&gt;       "reasoning_content": "The user is asking a very simple math question: \"What is 1+1?\"\n\nThis is as basic as it gets. The answer is 2. There's no need for any elaborate explanation, headers, bullet points, or lengthy response. A simple, direct answer is appropriate here.\n\nI could just say \"2\" or \"1+1 = 2\" — keeping it brief and conversational since this is a casual chat context."</li><li>&gt; &gt; When using a thinking model in multi-turn conversations, always preserve the `reasoning_content` of each historical assistant message in `messages`, otherwise the model may lose reasoning context.</li><li>&gt;     reasoning: str = getattr(delta, "reasoning_content", None) or ""</li><li>&gt;     if reasoning:</li><li>&gt;         print(reasoning, end="")</li><li>&gt; Each line starts with `data:`, followed by a JSON object. Receive `delta.reasoning_content` before `delta.content`; `finish_reason="stop"` marks the end of generation. The subsequent usage chunk has empty `choices` and reports usage at the top level:</li><li>&gt; data: {"id":"chatcmpl-6adb0efaa6c470a707811b01","object":"chat.completion.chunk","created":1792741114,"model":"kimi-k3.1-pro","choices":[{"index":0,"delta":{"reasoning_content":"The"},"finish_reason":null}],"system_fingerprint":"fpv0_e7278693"}</li><li>&gt; data: {"id":"chatcmpl-6adb0efaa6c470a707811b01","object":"chat.completion.chunk","created":1792741114,"model":"kimi-k3.1-pro","choices":[],"usage":{"prompt_tokens":90,"completion_tokens":1524,"total_tokens":1614,"completion_tokens_details":{"reasoning_tokens":1007},"prompt_tokens_details":{"cache_write_tokens":0}}}</li><li>&gt; * When `finish_reason="length"` and answer content exists, use the generated content as the prefix and pass back the original `reasoning_content` to continue</li><li>&gt; &gt; Do not mix Partial Mode with `response_format={"type": "json_object"}`, as this may lead to unexpected model responses. To guide JSON output, use [Structured Output](https://platform.kimi.ai/docs/guide/response_format.md) directly, or set `partial: true` and prefill `{` separately.</li><li>fully preserve reasoning_content across multi-turn</li><li>Controls whether reasoning_content from previous turns is</li><li>server — reasoning_content from historical turns is always</li><li>reasoning_content from every historical assistant message in</li><li>- Note: This parameter only affects reasoning_content from</li><li>and whether to fully preserve reasoning_content across</li><li>reasoning_content from historical turns.</li><li>- `"all"`: Preserves reasoning_content from historical turns</li><li>tool_calls:</li><li>description: Tool calls made by the model</li><li>reasoning_content:</li><li>Reasoning process (returned only when thinking mode is</li><li>- tool_calls</li><li>reasoning_effort:</li><li>Thinking. Reasoning effort supports low, high, and max, with max</li><li>to enable Structured Output, constraining output to match a</li><li>calls; required: force a tool call</li><li>description: Force a specific tool call</li><li>decides whether to call tools; `none`: no tool calls; `required`:</li><li>force a tool call; or pass an object specifying a particular</li><li>function to force that tool call.</li><li>description: Tool calls initiated by the model</li><li>- title: image_url</li><li>- image_url</li><li>image_url:</li><li>- title: video_url</li><li>- video_url</li><li>video_url:</li><li>of objects with text/image_url/video_url types (for multimodal</li><li>Whether to strictly constrain tool call arguments according to</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Chat Completions API<br>&gt; Create a chat completion: send messages to Kimi models and get replies, with streaming, tool calling, and vision input.<br>Create a chat completion request. The model generates a response based on the provided message list.<br>&gt; [accordion] Content Field Description<br>&gt;<br>&gt; The `content` field supports the following two forms:<br>&gt;<br>&gt; **Plain text string**<br>&gt;<br>&gt; ```json theme={null}<br>&gt; { "content": "Hello" }<br>&gt; ```<br>&gt;<br>&gt; **Array of objects** (for multimodal input)<br>&gt;<br>&gt; Each element in the array is distinguished by the `type` field:<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "content": [<br>&gt;         { "type": "text", "text": "Describe this image" },<br>&gt;         { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } },<br>&gt;         { "type": "video_url", "video_url": { "url": "data:video/mp4;base64,..." } }<br>&gt;     ]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; `image_url` and `video_url` also support passing a string directly, equivalent to the `url` field in object form:<br>&gt;<br>&gt; ```json theme={null}<br>&gt; { "type": "image_url", "image_url": "data:image/png;base64,..." }<br>&gt; ```<br>&gt;<br>&gt; #### Parameter Description<br>&gt;<br>&gt; Each element in the array has the following fields:<br>&gt;<br>&gt; &#124; Parameter &#124; Required &#124; Description &#124; Type &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `type` &#124; required &#124; Content type &#124; `"text"` \&#124; `"image_url"` \&#124; `"video_url"` &#124;<br>&gt; &#124; `text` &#124; required when `type=text` &#124; Text content &#124; string &#124;<br>&gt; &#124; `image_url` &#124; required when `type=image_url` &#124; For transmitting images. Supports object form `{"url": "..."}` or a URL string directly &#124; object \&#124; string &#124;<br>&gt; &#124; `video_url` &#124; required when `type=video_url` &#124; For transmitting videos. Supports object form `{"url": "..."}` or a URL string directly &#124; object \&#124; string &#124;<br>&gt;<br>&gt; When `image_url` is passed as an object, its fields are:<br>&gt;<br>&gt; &#124; Parameter &#124; Required &#124; Description &#124; Type &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `url` &#124; required &#124; Image content specified via base64 encoding or file id &#124; string &#124;<br>&gt;<br>&gt; When `video_url` is passed as an object, its fields are:<br>&gt;<br>&gt; &#124; Parameter &#124; Required &#124; Description &#124; Type &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `url` &#124; required &#124; Video content specified via base64 encoding or file id, for example `data:video/mp4;base64,...` &#124; string &#124;<br>&gt;<br>&gt; &gt; [!NOTE]<br>&gt; &gt;<br>&gt; &gt; Both the object form (`url` field) and the string shorthand support the following formats:<br>&gt; &gt;<br>&gt; &gt; * Base64 encoding: `data:image/png;base64,...` or `data:video/mp4;base64,...`<br>&gt; &gt; * File reference: `ms://&lt;file_id&gt;`<br>&gt; &gt;<br>&gt; &gt; See [Use the Kimi Vision Model](https://platform.kimi.ai/docs/guide/use-kimi-vision-model.md).<br>&gt;<br>&gt; #### Usage Example<br>&gt;<br>&gt; ```python python expandable theme={null}<br>&gt; import os<br>&gt; import base64<br>&gt;<br>&gt; from openai import OpenAI<br>&gt; from openai.types.chat import ChatCompletion<br>&gt;<br>&gt; client: OpenAI = OpenAI(<br>&gt;     api_key=os.environ.get("MOONSHOT_API_KEY"),<br>&gt;     base_url="https://api.moonshot.ai/v1",<br>&gt; )<br>&gt;<br>&gt; # Encode the image to base64<br>&gt; with open("your_image_path", "rb") as f:<br>&gt;     img_base: str = base64.b64encode(f.read()).decode("utf-8")<br>&gt;<br>&gt; response: ChatCompletion = client.chat.completions.create(<br>&gt;     model="kimi-k3.1-pro",<br>&gt;     messages=[<br>&gt;         {<br>&gt;             "role": "user",<br>&gt;             "content": [<br>&gt;                 {<br>&gt;                     "type": "image_url",<br>&gt;                     "image_url": {<br>&gt;                         "url": f"data:image/jpeg;base64,{img_base}",<br>&gt;                     },<br>&gt;                 },<br>&gt;                 {<br>&gt;                     "type": "text", |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（22 项）<details><summary>展开完整内容</summary><ul><li>&gt;     -H "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>&gt;                             url: `data:image/jpeg;base64,${imgBase}`,</li><li>- $ref: '#/components/schemas/KimiK31ProChatRequest'</li><li>- $ref: '#/components/schemas/KimiK3ChatRequest'</li><li>- $ref: '#/components/schemas/KimiK27CodeChatRequest'</li><li>- $ref: '#/components/schemas/KimiK26ChatRequest'</li><li>$ref: '#/components/schemas/ChatCompletionResponse'</li><li>$ref: '#/components/schemas/ChatCompletionChunk'</li><li>$ref: '#/components/schemas/ErrorResponse'</li><li>- $ref: '#/components/schemas/KimiK3ChatRequestBase'</li><li>- $ref: '#/components/schemas/ChatRequestBase'</li><li>$ref: '#/components/schemas/ChoiceDelta'</li><li>- $ref: '#/components/schemas/ChatRequestCommon'</li><li>$ref: '#/components/schemas/KimiK3Message'</li><li>$ref: '#/components/schemas/Message'</li><li>$ref: '#/components/schemas/ToolDefinition'</li><li>resumed, this value should remain the same. For Kimi Code Plan, this</li><li>- $ref: '#/components/schemas/Message'</li><li>- $ref: '#/components/schemas/KimiK3DynamicToolMessage'</li><li>of objects with text/image_url/video_url types (for multimodal</li><li>^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li><li>pattern: ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-api |
| source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt;     base_url="https://api.moonshot.ai/v1", |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.ai/v1/chat/completions \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt;     baseURL: "https://api.moonshot.ai/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/chat/completions |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | it with `POST /v1/signatures/verify`. Only returned when the |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Chat Completions API |

#### 来源 / moonshotai-global-chat-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | Model Inference Pricing - Kimi API Platform<br>Documentation Index<br>Fetch the complete documentation index at: /docs/llms.txt<br>Use this file to discover all available pages before exploring further.<br>Skip to main content<br>🎉 Kimi K3.1 Pro has launched! Start exploring now!<br>Kimi API Platform home page<br>Guides<br>API Reference<br>Models &amp; Pricing<br>Resources<br>Search...<br>⌘ K<br>Kimi Business<br>Contact Sales<br>User Center<br>Kimi API Platform home page Search or ask...<br>Navigation<br>Model Pricing<br>Model Inference Pricing<br>Model Pricing<br>Overview<br>Other Pricing<br>BatchJob Pricing<br>WebSearch Pricing<br>Top-up &amp; Rate Limits<br>Recharge and Rate Limits<br>Models<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>Model List<br>Model Pricing<br>Model Inference Pricing<br>Copy page Copy page<br>Understand token billing, input and output charges, cache discounts, and pricing links for Kimi model inference.<br>Copy page Copy page<br>​<br>Model Pricing<br>​<br>K3 Series Models<br>All K3 series models support a 1,048,576-token context window.<br>Note: The Kimi API automatically enables context caching billing for repeated request prefixes, with a default TTL (time-to-live) of 5m. For TTL settings and cost optimization tips, see Best Practices for Context Caching .<br>Batch API Inference : kimi-k3.1-pro and kimi-k3 support batch inference for large-scale tasks that do not require real-time responses, billed at 60% of the standard price.<br>​<br>K2 Series Models<br>All K2 series models support a 262,144-token context window.<br>Dear Kimi Users, starting October 31, 2026, K2 series models will no longer be available to newly registered users; existing users are not affected. We plan to retire all K2 series models by the end of December 2026, please prepare your migration in advance.<br>1 MTok = 1,000,000 tokens. All prices above are per MTok consumed.<br>Explanation: Prices exclude applicable taxes. Specific tax obligations are subject to local tax regulations and will be calculated at checkout based on your jurisdiction.<br>​<br>Concepts<br>Model inference on the Kimi API platform is billed on a pay-as-you-go basis, with no subscription plan. It differs from products such as the Kimi membership and Kimi Code. See the product comparison .<br>​<br>Billing Unit<br>Token: the basic unit of text processed by the model. A long word like “antidisestablishmentarianism” may be split into several tokens, while a common short word like “word” usually takes just one. For typical English text, 1 token is roughly equivalent to 3-4 characters. Use the Token Calculation API to get the exact token count of each call.<br>​<br>Billing Logic<br>Model inference APIs bill input and output tokens by usage. For K3 series models, cache writes are billed separately by TTL (5min / 1h); cached input is billed at the cache-hit price only, with no additional cache write charge. If you upload a document, extract its content, and pass the extracted content as model input, that content is also billed by usage. File-related APIs (file content extraction and file storage) are temporarily free : uploading and extracting a document alone incurs no file API charges. For tips on improving cache hit rates and choosing a TTL tier, see Best Practices for Context Caching .<br>​<br>Model Notes<br>See each model’s guide for capabilities and recommended use cases:<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>Was this page helpful?<br>Yes<br>No<br>BatchJob Pricing<br>Next<br>⌘ I<br>x github linkedin discord website<br>On this page<br>Back to top Model Pricing K3 Series Models<br>K2 Series Models<br>Concepts Billing Unit<br>Billing Logic<br>Model Notes |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • Dear Kimi Users, starting October 31, 2026, K2 series models will no longer be available to newly registered users; existing users are not affected. We plan to retire all K2 series models by the end of December 2026, please prepare your migration in advance.<br>• Model inference on the Kimi API platform is billed on a pay-as-you-go basis, with no subscription plan. It differs from products such as the Kimi membership and Kimi Code. See the product comparison . |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 1 项 › cells | 新增 | 未记录 | • kimi-k3.1-pro<br>• $2.00 / MTok<br>• $10.00 / MTok<br>• $0.20 / MTok<br>• $2.00 / MTok<br>• $4.00 / MTok |
| structured records › 第 1 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 1 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 1 项 › text | 新增 | 未记录 | kimi-k3.1-pro &#124; $2.00 / MTok &#124; $10.00 / MTok &#124; $0.20 / MTok &#124; $2.00 / MTok &#124; $4.00 / MTok |
| structured records › 第 2 项 › cells | 新增 | 未记录 | • kimi-k3.1-pro-highspeed<br>• $4.00 / MTok<br>• $20.00 / MTok<br>• $0.20 / MTok<br>• $4.00 / MTok<br>• $8.00 / MTok |
| structured records › 第 2 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 2 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 2 项 › text | 新增 | 未记录 | kimi-k3.1-pro-highspeed &#124; $4.00 / MTok &#124; $20.00 / MTok &#124; $0.20 / MTok &#124; $4.00 / MTok &#124; $8.00 / MTok |
| structured records › 第 3 项 › cells | 新增 | 未记录 | • kimi-k3<br>• $3.00 / MTok<br>• $15.00 / MTok<br>• $0.30 / MTok<br>• $3.00 / MTok<br>• $6.00 / MTok |
| structured records › 第 3 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input<br>• 5m writes<br>• 1h writes |
| structured records › 第 3 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 3 项 › text | 新增 | 未记录 | kimi-k3 &#124; $3.00 / MTok &#124; $15.00 / MTok &#124; $0.30 / MTok &#124; $3.00 / MTok &#124; $6.00 / MTok |
| structured records › 第 4 项 › cells | 新增 | 未记录 | • kimi-k2.7-code<br>• $0.95 / MTok<br>• $4.00 / MTok<br>• $0.19 / MTok |
| structured records › 第 4 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input |
| structured records › 第 4 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 4 项 › text | 新增 | 未记录 | kimi-k2.7-code &#124; $0.95 / MTok &#124; $4.00 / MTok &#124; $0.19 / MTok |
| structured records › 第 5 项 › cells | 新增 | 未记录 | • kimi-k2.7-code-highspeed<br>• $1.90 / MTok<br>• $8.00 / MTok<br>• $0.38 / MTok |
| structured records › 第 5 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input |
| structured records › 第 5 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 5 项 › text | 新增 | 未记录 | kimi-k2.7-code-highspeed &#124; $1.90 / MTok &#124; $8.00 / MTok &#124; $0.38 / MTok |
| structured records › 第 6 项 › cells | 新增 | 未记录 | • kimi-k2.6<br>• $0.95 / MTok<br>• $4.00 / MTok<br>• $0.16 / MTok |
| structured records › 第 6 项 › headers | 新增 | 未记录 | • Model<br>• Input<br>• Output<br>• Cached Input |
| structured records › 第 6 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 6 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-chat-pricing |
| structured records › 第 6 项 › text | 新增 | 未记录 | kimi-k2.6 &#124; $0.95 / MTok &#124; $4.00 / MTok &#124; $0.16 / MTok |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Model Inference Pricing - Kimi API Platform |

#### 来源 / moonshotai-global-file-upload-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt; &gt;     base_url = "https://api.moonshot.ai/v1",<br>• &gt; &gt; curl https://api.moonshot.ai/v1/files \<br>• &gt; &gt;     baseURL: "https://api.moonshot.ai/v1",<br>• &gt;     base_url="https://api.moonshot.ai/v1",<br>• ````yaml POST /v1/files<br>• POST /v1/files |
| capability mentions | 新增 | 未记录 | 列表（16 项）<details><summary>展开完整内容</summary><ul><li>&gt; Upload a file for text content extraction, image understanding, or video understanding. Supports text-based formats such as pdf, doc, and txt.</li><li>&gt; Note: Image files no longer support content extraction (`file-extract`). For image understanding, upload images with `purpose="image"`. See [Use Vision Models](https://platform.kimi.ai/docs/guide/use-kimi-vision-model.md).</li><li>&gt; [accordion] Image or Video Understanding</li><li>&gt; When uploading image or video assets for native model understanding, use `purpose="image"` or `purpose="video"`.</li><li>&gt; Please refer to [Using Vision Models](https://platform.kimi.ai/docs/guide/use-kimi-vision-model.md) for end-to-end examples.</li><li>Uploads a file for content extraction, image understanding, or video</li><li>text-based files (such as pdf, doc, txt); for image understanding, use</li><li>purpose=image.</li><li>- image</li><li>- video</li><li>pdf, doc, txt); images are not supported; image: upload</li><li>images for vision understanding; video: upload videos for</li><li>video understanding; batch: upload JSONL files for batch</li><li>from text-based files (such as pdf, doc, txt); images are not</li><li>supported; image: upload images for vision understanding; video:</li><li>upload videos for video understanding; batch: upload JSONL files for</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Upload File<br>&gt; Upload a file for text content extraction, image understanding, or video understanding. Supports text-based formats such as pdf, doc, and txt.<br>&gt; [!NOTE]<br>&gt;<br>&gt; Each file can be up to 100 MiB; larger files return a file-too-large error. The number of files is no longer limited. Instead, total storage is limited per organization, with a default quota of 10 GiB. The file parsing service is currently free, but rate limiting may be applied during peak traffic periods.<br>&gt; [accordion] Supported Formats<br>&gt;<br>&gt; Supported formats include `.pdf`, `.txt`, `.csv`, `.doc`, `.docx`, `.xls`, `.xlsx`, `.ppt`, `.pptx`, `.md`, `.dot`, `.epub`, `.html`, `.json`, `.mobi`, `.log`, `.go`, `.h`, `.c`, `.cpp`, `.cxx`, `.cc`, `.cs`, `.java`, `.js`, `.css`, `.jsp`, `.php`, `.py`, `.py3`, `.asp`, `.yaml`, `.yml`, `.ini`, `.conf`, `.ts`, `.tsx`, and more.<br>&gt;<br>&gt; Note: Image files no longer support content extraction (`file-extract`). For image understanding, upload images with `purpose="image"`. See [Use Vision Models](https://platform.kimi.ai/docs/guide/use-kimi-vision-model.md).<br>&gt; [accordion] File Content Extraction Example<br>&gt;<br>&gt; When uploading a file, use `purpose="file-extract"` if you want the model to use the extracted file contents as context. The extracted content is Markdown-formatted text (bold, headings, lists, etc. are represented with Markdown syntax) and can be placed directly into messages. See [Get File Content](https://platform.kimi.ai/docs/api/files-content.md) for details.<br>&gt;<br>&gt; &gt; [tab] python<br>&gt; &gt;<br>&gt; &gt; ```python showLineNumbers expandable theme={null}<br>&gt; &gt; from pathlib import Path<br>&gt; &gt; import os<br>&gt; &gt;<br>&gt; &gt; from openai import OpenAI<br>&gt; &gt;<br>&gt; &gt; client = OpenAI(<br>&gt; &gt;     api_key=os.environ["MOONSHOT_API_KEY"],<br>&gt; &gt;     base_url = "https://api.moonshot.ai/v1",<br>&gt; &gt; )<br>&gt; &gt;<br>&gt; &gt; # xlnet.pdf is an example file; we support text formats such as pdf and doc.<br>&gt; &gt; file_object = client.files.create(file=Path("xlnet.pdf"), purpose="file-extract")<br>&gt; &gt;<br>&gt; &gt; # Note: retrieve_content is deprecated in the latest version.<br>&gt; &gt; # If you are using the latest SDK, use files.content instead.<br>&gt; &gt; file_content = client.files.content(file_id=file_object.id).text<br>&gt; &gt;<br>&gt; &gt; messages = [<br>&gt; &gt;     {<br>&gt; &gt;         "role": "system",<br>&gt; &gt;         "content": "You are Kimi, an AI assistant provided by Moonshot AI. You are particularly skilled in Chinese and English conversations. You provide users with safe, helpful, and accurate answers. You will refuse to answer any questions involving terrorism, racism, pornography, or violence. Moonshot AI is a proper noun and should not be translated into other languages.",<br>&gt; &gt;     },<br>&gt; &gt;     {<br>&gt; &gt;         "role": "system",<br>&gt; &gt;         "content": file_content,<br>&gt; &gt;     },<br>&gt; &gt;     {"role": "user", "content": "Please give a brief introduction of what xlnet.pdf is about"},<br>&gt; &gt; ]<br>&gt; &gt;<br>&gt; &gt; completion = client.chat.completions.create(<br>&gt; &gt;   model="kimi-k3.1-pro",<br>&gt; &gt;   messages=messages,<br>&gt; &gt;   temperature=0.6,<br>&gt; &gt; )<br>&gt; &gt;<br>&gt; &gt; print(completion.choices[0].message)<br>&gt; &gt; ```<br>&gt;<br>&gt; &gt; [tab] curl<br>&gt; &gt;<br>&gt; &gt; ```bash showLineNumbers theme={null}<br>&gt; &gt; # xlnet.pdf is a sample file<br>&gt; &gt;<br>&gt; &gt; curl https://api.moonshot.ai/v1/files \<br>&gt; &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt; &gt;   -F purpose="file-extract" \<br>&gt; &gt;   -F file="@xlnet.pdf"<br>&gt; &gt; ```<br>&gt;<br>&gt; &gt; [tab] node.js<br>&gt; &gt;<br>&gt; &gt; ```js showLineNumbers expandable theme={null}<br>&gt; &gt; const OpenAI = require("openai");<br>&gt; &gt; const fs = require("fs");<br>&gt; &gt;<br>&gt; &gt; const client = new OpenAI({<br>&gt; &gt;     apiKey: process.env.MOONSHOT_API_KEY,<br>&gt; &gt;     baseURL: "https://api.moonshot.ai/v1",<br>&gt; &gt; });<br>&gt; &gt;<br>&gt; &gt; async function main() {<br>&gt; &gt;     let file_object = await client.files.create({<br>&gt; &gt;         file: fs.createReadStream("xlnet.pdf"),<br>&gt; &gt;         purpose: "file-extract"<br>&gt; &gt;     });<br>&gt; &gt;<br>&gt; &gt;     // retrieve_content is deprecated in the latest version.<br>&gt; &gt;     let file_content = await (await client.files.content(file_object.id)).text();<br>&gt; &gt;<br>&gt; &gt;     let messages = [<br>&gt; &gt;         {<br>&gt; &gt;             "role": "system",<br>&gt; &gt;             "content": "You are Kimi, an AI assistant provided by Moonshot AI. You are more proficient in Chinese and English conversations. You provide users with safe, helpful, and accurate answers. You will refuse to answer any questions related to terrorism, racism, pornography, or violence. Moonshot AI is a proper noun and should not be translated into other languages.",<br>&gt; &gt;         },<br>&gt; &gt;         {<br>&gt; &gt;             "role": "system",<br>&gt; &gt;             "content": file_content,<br>&gt; &gt;         },<br>&gt; &gt;         {"role": "user", "content": "Please give a brief introduction of what xlnet.pdf is about"},<br>&gt; &gt;     ]; |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • &gt; &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>• &gt; Replace `$MOONSHOT_API_KEY` with your own API key, or set it as an environment variable before making the call.<br>• $ref: '#/components/schemas/FileObject'<br>• $ref: '#/components/schemas/ErrorResponse' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-file-upload-api |
| source ref | 新增 | 未记录 | moonshotai-global-file-upload-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt; &gt;     base_url = "https://api.moonshot.ai/v1", |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-file-upload-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; &gt; curl https://api.moonshot.ai/v1/files \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-file-upload-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt; &gt;     baseURL: "https://api.moonshot.ai/v1", |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-file-upload-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | &gt;     base_url="https://api.moonshot.ai/v1", |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-file-upload-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/files |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-file-upload-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Upload File |

#### 来源 / moonshotai-global-messages-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • Call Kimi models using an Anthropic Messages API compatible format. If you already use the Anthropic SDK, Claude Code, or similar tools, simply point the base URL at `https://api.moonshot.ai/anthropic` to call Kimi models directly.<br>• it with `POST /v1/signatures/verify`. Only returned when the |
| capability mentions | 新增 | 未记录 | 列表（31 项）<details><summary>展开完整内容</summary><ul><li>&gt; Call Kimi models with an Anthropic Messages API compatible format, supporting streaming, tool use, image input, thinking, and structured output.</li><li>supporting streaming, tool use, image input, thinking, and structured</li><li>description: 'Output configuration: reasoning effort and structured output'</li><li>Reasoning effort: low, high, or max; default max. Changing the</li><li>Structured output. When set, the model outputs JSON that</li><li>`tool_use`: the model issued a tool call; `refusal`: content safety</li><li>description: Output tokens (including reasoning tokens)</li><li>description: The portion of output tokens used for reasoning</li><li>description: Reasoning fragment for `thinking_delta`</li><li>max_tokens limit; `tool_use`: the model issued a tool call;</li><li>- title: image</li><li>- image</li><li>Image source. When `type` is `base64`, provide both</li><li>- image/jpeg</li><li>- image/png</li><li>- image/gif</li><li>- image/webp</li><li>description: Image MIME type, required only when `type=base64`</li><li>Base64-encoded image content, required only when</li><li>Reference to an uploaded image by file ID in the</li><li>The model's reasoning. In multi-turn conversations, pass</li><li>description: Reasoning content</li><li>Signature of the reasoning content; keep it unchanged</li><li>A tool call issued by the model (appears in assistant</li><li>Tool call ID; must match `tool_use_id` when submitting</li><li>Image source. When `type` is `base64`,</li><li>Image MIME type, required only when</li><li>Base64-encoded image content, required</li><li>Reference to an uploaded image by file</li><li>image blocks</li><li>(text / image / thinking / tool_use / tool_result).</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Messages API<br>&gt; Call Kimi models with an Anthropic Messages API compatible format, supporting streaming, tool use, image input, thinking, and structured output.<br>Call Kimi models using an Anthropic Messages API compatible format. If you already use the Anthropic SDK, Claude Code, or similar tools, simply point the base URL at `https://api.moonshot.ai/anthropic` to call Kimi models directly.<br>&gt; [accordion] Context Caching (Cache Write)<br>&gt;<br>&gt; Control context cache writes with the top-level `cache_control` field (only effective at the top level; `cache_control` markers inside the `messages` array are ignored):<br>&gt;<br>&gt; &#124; Parameter &#124; Type &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `cache_control` &#124; object &#124; Context cache write options, only effective when passed at the top level; when omitted, cache reads and writes use the `5m` TTL by default &#124;<br>&gt; &#124; `cache_control.type` &#124; `"ephemeral"` &#124; Cache type, fixed as `ephemeral` &#124;<br>&gt; &#124; `cache_control.ttl` &#124; `"5m"` \&#124; `"1h"` &#124; Lifetime of the written cache. Only `5m` and `1h` are supported (default `5m`); the two tiers are independent &#124;<br>&gt;<br>&gt; * Pass top-level `cache_control`: write the request prefix to the cache with the given TTL.<br>&gt; * Omit `cache_control`: cache reads and writes use the `5m` TTL by default; any cache writes are billed at the `5m` tier.<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "model": "kimi-k3.1-pro",<br>&gt;     "cache_control": { "type": "ephemeral", "ttl": "1h" },<br>&gt;     "messages": [{"role": "user", "content": "Hello"}]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; **Behavior**<br>&gt;<br>&gt; * The cache is isolated per organization (org); caches are never shared across organizations.<br>&gt; * When a request with the same prefix hits the cache within its lifetime, the cache entry is refreshed with its original TTL. Cache hits are billed only at the cache read price, with no additional cache write charge.<br>&gt; * Cache writes are billed by TTL; see [Pricing](https://platform.kimi.ai/docs/pricing/chat.md) for details.<br>&gt; * Manual cache clearing is not supported; cached prefixes expire automatically after at least 5 minutes of inactivity.<br>&gt;<br>&gt; **Usage fields**<br>&gt;<br>&gt; &#124; Field &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; `usage.input_tokens` &#124; Input tokens neither read from the cache nor used to create a cache entry &#124;<br>&gt; &#124; `usage.cache_read_input_tokens` &#124; Input tokens read from the cache (cache read) &#124;<br>&gt; &#124; `usage.cache_creation_input_tokens` &#124; Input tokens written to the cache when creating a new entry (cache write) &#124;<br>&gt; &#124; `usage.cache_creation.ephemeral_5m_input_tokens` &#124; Input tokens written to the `5m` tier &#124;<br>&gt; &#124; `usage.cache_creation.ephemeral_1h_input_tokens` &#124; Input tokens written to the `1h` tier &#124;<br>&gt;<br>&gt; Total input = `input_tokens` + `cache_read_input_tokens` + `cache_creation_input_tokens`.<br>&gt;<br>&gt; &gt; [!NOTE]<br>&gt; &gt;<br>&gt; &gt; `input_tokens` on this page differs from the Chat Completions / Responses API: in those APIs, `prompt_tokens` / `input_tokens` is always the total input, with cache reads and writes broken out in their respective details fields.<br>&gt;<br>&gt; &gt; [!NOTE]<br>&gt; &gt;<br>&gt; &gt; For the mechanism behind automatic context caching, see the [Context Caching guide](https://platform.kimi.ai/docs/guide/context-caching.md).<br>## OpenAPI<br>````yaml POST /anthropic/v1/messages<br>openapi: 3.1.0<br>info:<br>title: Moonshot AI API<br>version: 1.0.0<br>description: API for Moonshot AI / Kimi large language model services<br>servers:<br>- url: https://api.moonshot.ai<br>description: Production<br>security: []<br>paths:<br>/anthropic/v1/messages:<br>post:<br>tags:<br>- Messages<br>summary: Messages API<br>description: &gt;-<br>Call Kimi models with an Anthropic Messages API compatible format,<br>supporting streaming, tool use, image input, thinking, and structured<br>output.<br>parameters:<br>- name: X-Msh-Request-Nonce<br>in: header<br>required: false<br>description: &gt;-<br>A client-generated random nonce (a UUID v4 is recommended). Sending<br>it enables Request Signature: the Kimi API returns<br>`Msh-Request-Timestamp` and `Msh-Request-Signature` in the response<br>headers, which can later be used to prove that the request was<br>handled by the Kimi API. Exactly one non-empty header value is<br>allowed; if the value is invalid, the request proceeds normally but<br>the headers above are not returned. See [Verify Request<br>Signature](/api/signatures-verify).<br>schema:<br>type: string<br>minLength: 1<br>example: 7d929748-0ae6-41c2-ab5d-a186498ad721<br>requestBody:<br>required: true<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/MessagesRequest'<br>responses:<br>'200':<br>description: Message response |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • $ref: '#/components/schemas/MessagesRequest'<br>• $ref: '#/components/schemas/MessagesResponse'<br>• $ref: '#/components/schemas/MessagesStreamEvent'<br>• $ref: '#/components/schemas/MessagesErrorResponse'<br>• $ref: '#/components/schemas/ErrorResponse'<br>• $ref: '#/components/schemas/MessagesMessageParam'<br>• $ref: '#/components/schemas/MessagesTextBlockParam'<br>• $ref: '#/components/schemas/MessagesTool'<br>• $ref: '#/components/schemas/MessagesToolChoice'<br>• (text / image / thinking / tool_use / tool_result).<br>• ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$<br>• pattern: ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$ |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-messages-api |
| source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| structured records › 记录 moonshotai-global-messages-api › evidence | 新增 | 未记录 | it with `POST /v1/signatures/verify`. Only returned when the |
| structured records › 记录 moonshotai-global-messages-api › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-messages-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Messages API |

#### 来源 / moonshotai-global-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 列表（21 项）<details><summary>展开完整内容</summary><ul><li>kimi-k3.1-pro</li><li>kimi-k3.1-pro-highspeed</li><li>kimi-k3</li><li>kimi-k2.7-code</li><li>kimi-k2.7-code-highspeed</li><li>kimi-k2.6</li><li>kimi-k2.5</li><li>moonshot-v1-8k</li><li>moonshot-v1-32k</li><li>moonshot-v1-128k</li><li>moonshot-v1-auto</li><li>moonshot-v1-8k-vision-preview</li><li>moonshot-v1-32k-vision-preview</li><li>moonshot-v1-128k-vision-preview</li><li>kimi-k2-0905-preview</li><li>kimi-k2-0711-preview</li><li>kimi-k2-turbo-preview</li><li>kimi-k2-thinking</li><li>kimi-k2-thinking-turbo</li><li>kimi-latest</li><li>kimi-thinking-preview</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2-0711-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-0711-preview |
| structured records › 记录 kimi-k2-0711-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2-0711-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-0905-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-0905-preview |
| structured records › 记录 kimi-k2-0905-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2-0905-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-thinking-turbo › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-thinking-turbo |
| structured records › 记录 kimi-k2-thinking-turbo › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2-thinking-turbo › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-thinking › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-thinking |
| structured records › 记录 kimi-k2-thinking › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2-thinking › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-turbo-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-turbo-preview |
| structured records › 记录 kimi-k2-turbo-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2-turbo-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.5 › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.5 |
| structured records › 记录 kimi-k2.5 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2.5 › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.6 › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.6 |
| structured records › 记录 kimi-k2.6 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2.6 › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.7-code-highspeed › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.7-code-highspeed |
| structured records › 记录 kimi-k2.7-code-highspeed › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2.7-code-highspeed › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.7-code › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.7-code |
| structured records › 记录 kimi-k2.7-code › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k2.7-code › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k3.1-pro-highspeed › 模型 ID（model_id） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| structured records › 记录 kimi-k3.1-pro-highspeed › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k3.1-pro-highspeed › 状态（status） | 新增 | 未记录 | listed_current |
| structured records › 记录 kimi-k3.1-pro › 模型 ID（model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| structured records › 记录 kimi-k3.1-pro › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k3.1-pro › 状态（status） | 新增 | 未记录 | listed_current |
| structured records › 记录 kimi-k3 › 模型 ID（model_id） | 新增 | 未记录 | kimi-k3 |
| structured records › 记录 kimi-k3 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-k3 › 状态（status） | 新增 | 未记录 | listed_current |
| structured records › 记录 kimi-latest › 模型 ID（model_id） | 新增 | 未记录 | kimi-latest |
| structured records › 记录 kimi-latest › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-latest › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-thinking-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-thinking-preview |
| structured records › 记录 kimi-thinking-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 kimi-thinking-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-128k-vision-preview › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-128k-vision-preview |
| structured records › 记录 moonshot-v1-128k-vision-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-128k-vision-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-128k › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-128k |
| structured records › 记录 moonshot-v1-128k › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-128k › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-32k-vision-preview › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-32k-vision-preview |
| structured records › 记录 moonshot-v1-32k-vision-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-32k-vision-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-32k › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-32k |
| structured records › 记录 moonshot-v1-32k › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-32k › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-8k-vision-preview › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-8k-vision-preview |
| structured records › 记录 moonshot-v1-8k-vision-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-8k-vision-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-8k › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-8k |
| structured records › 记录 moonshot-v1-8k › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-8k › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-auto › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-auto |
| structured records › 记录 moonshot-v1-auto › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-model-catalog |
| structured records › 记录 moonshot-v1-auto › 状态（status） | 新增 | 未记录 | listed_retired |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Model List |

#### 来源 / moonshotai-global-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt;     base_url="https://api.moonshot.ai/v1",<br>• &gt;     baseURL: "https://api.moonshot.ai/v1",<br>• &gt; curl https://api.moonshot.ai/v1/responses \<br>• ````yaml POST /v1/responses<br>• it with `POST /v1/signatures/verify`. Only returned when the<br>• POST /v1/responses |
| capability mentions | 新增 | 未记录 | 列表（69 项）<details><summary>展开完整内容</summary><ul><li>&gt; Creates a model response. Provide text or image inputs to generate text or JSON outputs. Have the model call the function tools you define, or use server-side web search.</li><li>&gt; Each executed search is billed per call (\$0.005 per call, same price for image search); no charge applies if the model does not trigger a search. See [WebSearch Pricing](https://platform.kimi.ai/docs/pricing/websearch.md) for details.</li><li>Creates a model response. Provide text or image inputs to generate text</li><li>conversation history, tool calls, and tool results.</li><li>reasoning:</li><li>description: Reasoning configuration.</li><li>Reasoning depth. Higher levels reason more thoroughly, which</li><li>usually also increases latency and reasoning token usage.</li><li>the search hit; `web_search_call.results` returns image search</li><li>reasoning, message, tool calls.</li><li>parallel_tool_calls:</li><li>- response.reasoning_summary_part.added</li><li>- response.reasoning_summary_part.done</li><li>- response.reasoning_summary_text.delta</li><li>- response.reasoning_summary_text.done</li><li>- response.custom_tool_call_input.delta</li><li>- response.custom_tool_call_input.done</li><li>- $ref: '#/components/schemas/ResponsesReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallOutputItem'</li><li>Controls tool-calling behavior. With `auto`, the model decides whether</li><li>- $ref: '#/components/schemas/ResponsesOutputReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputCustomToolCallItem'</li><li>reasoning: '#/components/schemas/ResponsesOutputReasoningItem'</li><li>custom_tool_call: '#/components/schemas/ResponsesOutputCustomToolCallItem'</li><li>description: Number of output tokens, including reasoning tokens.</li><li>reasoning_tokens:</li><li>description: Number of tokens spent on reasoning.</li><li>ResponsesReasoningItem:</li><li>title: Reasoning</li><li>Replays reasoning content from a previous turn. `content` takes</li><li>- reasoning</li><li>- reasoning_text</li><li>description: Namespace the tool belongs to, returned for namespace tool calls.</li><li>ResponsesCustomToolCallItem:</li><li>title: Custom tool call</li><li>description: Replays a custom tool call.</li><li>- custom_tool_call</li><li>description: Call ID paired with the matching `custom_tool_call_output`.</li><li>ResponsesCustomToolCallOutputItem:</li><li>title: Custom tool call output</li><li>description: Result of executing a custom tool call.</li><li>- custom_tool_call_output</li><li>description: Same call ID as the matching `custom_tool_call`.</li><li>`lark` format; when the model calls it, a `custom_tool_call` item is</li><li>- image</li><li>`image` additionally runs an image search.</li><li>image_settings:</li><li>Image search settings. Only effective when `search_content_types`</li><li>includes `image`.</li><li>description: Maximum number of images to return.</li><li>description: Whether to generate a caption for each image.</li><li>ResponsesOutputReasoningItem:</li><li>description: Reasoning content produced by the model.</li><li>description: The reasoning content.</li><li>description: Returned for namespace tool calls.</li><li>ResponsesOutputCustomToolCallItem:</li><li>description: A custom tool call initiated by the model.</li><li>Use this value in `custom_tool_call_output` when returning the</li><li>Image search results. Returned only when `include` contains</li><li>`image`.</li><li>- image_result</li><li>image_url:</li><li>Image caption. Returned only when `image_settings.caption` is</li><li>title: Input image</li><li>- image_url</li><li>- input_image</li><li>Data URL of the image, for example</li><li>`data:image/png;base64,&lt;base64&gt;`. Public http(s) URLs are not</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Responses API<br>&gt; Creates a model response. Provide text or image inputs to generate text or JSON outputs. Have the model call the function tools you define, or use server-side web search.<br>&gt; [accordion] Examples<br>&gt;<br>&gt; ```python Python theme={null}<br>&gt; import os<br>&gt;<br>&gt; from openai import OpenAI<br>&gt;<br>&gt; client = OpenAI(<br>&gt;     api_key=os.environ["MOONSHOT_API_KEY"],<br>&gt;     base_url="https://api.moonshot.ai/v1",<br>&gt; )<br>&gt;<br>&gt; response = client.responses.create(<br>&gt;     model="kimi-k3.1-pro",<br>&gt;     instructions="You are Kimi, an AI assistant provided by Moonshot AI.",<br>&gt;     input="Explain context caching in one sentence.",<br>&gt; )<br>&gt;<br>&gt; print(response.output_text)<br>&gt; ```<br>&gt;<br>&gt; ```javascript Node.js theme={null}<br>&gt; import OpenAI from "openai";<br>&gt;<br>&gt; const client = new OpenAI({<br>&gt;     apiKey: process.env.MOONSHOT_API_KEY,<br>&gt;     baseURL: "https://api.moonshot.ai/v1",<br>&gt; });<br>&gt;<br>&gt; const response = await client.responses.create({<br>&gt;     model: "kimi-k3.1-pro",<br>&gt;     instructions: "You are Kimi, an AI assistant provided by Moonshot AI.",<br>&gt;     input: "Explain context caching in one sentence.",<br>&gt; });<br>&gt;<br>&gt; console.log(response.output_text);<br>&gt; ```<br>&gt;<br>&gt; ```bash cURL theme={null}<br>&gt; curl https://api.moonshot.ai/v1/responses \<br>&gt;     --header "Content-Type: application/json" \<br>&gt;     --header "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt;     --data '{<br>&gt;         "model": "kimi-k3.1-pro",<br>&gt;         "instructions": "You are Kimi, an AI assistant provided by Moonshot AI.",<br>&gt;         "input": "Explain context caching in one sentence."<br>&gt;     }'<br>&gt; ```<br>&gt; [accordion] Tool Use<br>&gt;<br>&gt; `tools` supports four tool types: `function`, `namespace`, `custom` (only `apply_patch`), and `web_search`. Other types are not supported. The first three run on your side: the model returns a call request, you execute it and send the result back. `web_search` runs on the server side, with nothing for you to handle.<br>&gt;<br>&gt; **Function calling**<br>&gt;<br>&gt; Pass functions defined with JSON Schema through `tools`, and the model decides when to call them:<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "model": "kimi-k3.1-pro",<br>&gt;   "input": "What is the weather in Beijing today?",<br>&gt;   "tools": [<br>&gt;     {<br>&gt;       "type": "function",<br>&gt;       "name": "get_weather",<br>&gt;       "description": "Get the weather for a city",<br>&gt;       "parameters": {<br>&gt;         "type": "object",<br>&gt;         "properties": {<br>&gt;           "city": {"type": "string", "description": "City name"}<br>&gt;         },<br>&gt;         "required": ["city"]<br>&gt;       }<br>&gt;     }<br>&gt;   ]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; When the model decides to call a function, `output` contains a `function_call` item whose `arguments` is a JSON string:<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "type": "function_call",<br>&gt;   "id": "fc_IrcmDq5JNO0JhWdEpsuZnL9J",<br>&gt;   "status": "completed",<br>&gt;   "call_id": "get_weather_0",<br>&gt;   "name": "get_weather",<br>&gt;   "arguments": "{\"city\":\"Beijing\"}"<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; After running it locally, append the previous `output` to `input` as is, followed by a `function_call_output` item (its `call_id` must match the `function_call`), and send the next request:<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "model": "kimi-k3.1-pro", |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（32 项）<details><summary>展开完整内容</summary><ul><li>&gt;     --header "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>&gt; Each executed search is billed per call (\$0.005 per call, same price for image search); no charge applies if the model does not trigger a search. See [WebSearch Pricing](https://platform.kimi.ai/docs/pricing/websearch.md) for details.</li><li>$ref: '#/components/schemas/ResponsesRequest'</li><li>$ref: '#/components/schemas/ResponsesResponse'</li><li>$ref: '#/components/schemas/ResponsesStreamEvent'</li><li>$ref: '#/components/schemas/ErrorResponse'</li><li>$ref: '#/components/schemas/ResponsesInputItem'</li><li>$ref: '#/components/schemas/ResponsesTool'</li><li>$ref: '#/components/schemas/ResponsesToolChoice'</li><li>$ref: '#/components/schemas/ResponsesOutputItem'</li><li>- $ref: '#/components/schemas/ResponsesUsage'</li><li>- $ref: '#/components/schemas/ResponsesToolChoice'</li><li>- $ref: '#/components/schemas/ResponsesMessageItem'</li><li>- $ref: '#/components/schemas/ResponsesReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesFunctionCallItem'</li><li>- $ref: '#/components/schemas/ResponsesFunctionCallOutputItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallOutputItem'</li><li>- $ref: '#/components/schemas/ResponsesWebSearchCallItem'</li><li>- $ref: '#/components/schemas/ResponsesAdditionalToolsItem'</li><li>- $ref: '#/components/schemas/ResponsesFunctionTool'</li><li>- $ref: '#/components/schemas/ResponsesCustomTool'</li><li>- $ref: '#/components/schemas/ResponsesNamespaceTool'</li><li>- $ref: '#/components/schemas/ResponsesWebSearchTool'</li><li>- $ref: '#/components/schemas/ResponsesOutputReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputMessageItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputFunctionCallItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputCustomToolCallItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputWebSearchCallItem'</li><li>$ref: '#/components/schemas/ResponsesInputContentPart'</li><li>^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li><li>pattern: ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-responses-api |
| source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt;     base_url="https://api.moonshot.ai/v1", |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-responses-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt;     baseURL: "https://api.moonshot.ai/v1", |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-responses-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.ai/v1/responses \ |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-responses-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/responses |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-responses-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | it with `POST /v1/signatures/verify`. Only returned when the |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-responses-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Responses API |

#### 来源 / moonshotai-global-webfetch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt; url = "https://api.moonshot.ai/v1/tools/fetch"<br>• &gt; curl https://api.moonshot.ai/v1/tools/fetch \<br>• &gt;     const response = await fetch("https://api.moonshot.ai/v1/tools/fetch", {<br>• ````yaml POST /v1/tools/fetch<br>• POST /v1/tools/fetch |
| capability mentions | 新增 | 未记录 | • &gt; &#124; `markdown` &#124; string &#124; Fetched content in Markdown. Text and images appear in page order; images are embedded as placeholders (see the example below), and blocks are separated by blank lines &#124;<br>• &gt; ![image1](https://platform.kimi.ai/assets/logo/dark.svg)<br>• Markdown (text and images concatenated in order). Only http and https<br>• Fetched content in Markdown. Text and images are concatenated in<br>• page order, with images rendered as `![imageN](url)` placeholders. |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># URL Fetch<br>&gt; Fetch the content of a URL via the /v1/tools/fetch endpoint and get the page title and body text in Markdown.<br>Fetch the content of a URL and get the page title and body text in Markdown. Ideal for content extraction scenarios such as web reading and data curation.<br>&gt; [!WARNING]<br>&gt;<br>&gt; Only `http` and `https` URLs are supported. URLs blocked by security risk control return a 403 `security_risk` error; pages with no extractable content return a 404 `markdown_not_found` error.<br>&gt; [accordion] Usage Example<br>&gt;<br>&gt; ```python python expandable theme={null}<br>&gt; import os<br>&gt; import requests<br>&gt;<br>&gt; api_key = os.environ.get("MOONSHOT_API_KEY")<br>&gt; url = "https://api.moonshot.ai/v1/tools/fetch"<br>&gt;<br>&gt; response = requests.post(<br>&gt;     url,<br>&gt;     headers={"Authorization": f"Bearer {api_key}"},<br>&gt;     json={"url": "https://platform.kimi.ai/docs/api/overview"},<br>&gt; )<br>&gt; print(response.json())<br>&gt; ```<br>&gt;<br>&gt; ```bash curl expandable theme={null}<br>&gt; curl https://api.moonshot.ai/v1/tools/fetch \<br>&gt;   -H "Content-Type: application/json" \<br>&gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt;   -d '{"url": "https://platform.kimi.ai/docs/api/overview"}'<br>&gt; ```<br>&gt;<br>&gt; ```javascript node.js expandable theme={null}<br>&gt; const apiKey = process.env.MOONSHOT_API_KEY;<br>&gt;<br>&gt; async function main() {<br>&gt;     const response = await fetch("https://api.moonshot.ai/v1/tools/fetch", {<br>&gt;         method: "POST",<br>&gt;         headers: {<br>&gt;             "Content-Type": "application/json",<br>&gt;             Authorization: `Bearer ${apiKey}`,<br>&gt;         },<br>&gt;         body: JSON.stringify({<br>&gt;             url: "https://platform.kimi.ai/docs/api/overview",<br>&gt;         }),<br>&gt;     });<br>&gt;     const data = await response.json();<br>&gt;     console.log(data);<br>&gt; }<br>&gt;<br>&gt; main();<br>&gt; ```<br>&gt; [accordion] Response Fields<br>&gt;<br>&gt; &#124; Field &#124; Type &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `url` &#124; string &#124; The fetched URL &#124;<br>&gt; &#124; `markdown` &#124; string &#124; Fetched content in Markdown. Text and images appear in page order; images are embedded as placeholders (see the example below), and blocks are separated by blank lines &#124;<br>&gt; &#124; `title` &#124; string &#124; Page title &#124;<br>&gt;<br>&gt; **Response Example**<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "url": "https://platform.kimi.ai/docs/api/overview",<br>&gt;     "markdown": "# API Overview\n\nDocumentation entry of the Kimi API open platform.",<br>&gt;     "title": "API Overview - Kimi API Open Platform"<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; **Markdown content example**<br>&gt;<br>&gt; ```text theme={null}<br>&gt; # API Overview<br>&gt;<br>&gt; Documentation entry of the Kimi API open platform.<br>&gt;<br>&gt; ![image1](https://platform.kimi.ai/assets/logo/dark.svg)<br>&gt;<br>&gt; More content...<br>&gt; ```<br>&gt;<br>&gt; **Common Response Headers**<br>&gt;<br>&gt; &#124; Header &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; `X-Msh-Track-Id` &#124; Request ID. If the client sends this header, its value is reused; otherwise the server generates one. Provide this ID when troubleshooting &#124;<br>&gt; &#124; `X-Msh-Chat-Id` &#124; Session ID, always `toolgw-{X-Msh-Track-Id}`; provide both IDs when troubleshooting &#124;<br>&gt;<br>&gt; All responses, including error responses, carry these two headers.<br>&gt; [accordion] Error Codes<br>&gt;<br>&gt; &#124; HTTP Status &#124; error.type &#124; Typical message &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; 400 &#124; `invalid_request` &#124; `invalid request body` &#124; The request body is not valid JSON &#124;<br>&gt; &#124; 400 &#124; `invalid_url` &#124; `The provided URL is invalid: only http and https are supported` &#124; The URL is empty or uses a scheme other than http/https &#124;<br>&gt; &#124; 400 &#124; `invalid_url` &#124; `The provided URL is invalid: missing host` &#124; The URL has no host &#124;<br>&gt; &#124; 401 &#124; - &#124; No error body &#124; Missing or invalid API key &#124;<br>&gt; &#124; 403 &#124; - &#124; No error body &#124; Account inactive or suspended &#124; |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>• &gt;             Authorization: `Bearer ${apiKey}`,<br>• $ref: '#/components/schemas/ToolsFetchRequest'<br>• $ref: '#/components/schemas/ToolsFetchResponse'<br>• $ref: '#/components/schemas/ErrorResponse' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-webfetch-api |
| source ref | 新增 | 未记录 | moonshotai-global-webfetch-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt; url = "https://api.moonshot.ai/v1/tools/fetch" |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-webfetch-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.ai/v1/tools/fetch \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-webfetch-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt;     const response = await fetch("https://api.moonshot.ai/v1/tools/fetch", { |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-webfetch-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/tools/fetch |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-webfetch-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | URL Fetch |

#### 来源 / moonshotai-global-websearch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt; url = "https://api.moonshot.ai/v1/tools/search"<br>• &gt; curl https://api.moonshot.ai/v1/tools/search \<br>• &gt;     const response = await fetch("https://api.moonshot.ai/v1/tools/search", {<br>• ````yaml POST /v1/tools/search<br>• POST /v1/tools/search |
| capability mentions | 新增 | 未记录 | • &gt; Run a web search via the /v1/tools/search endpoint and get structured search results.<br>• Run a web search and get a list of structured results with title, snippet, site, and URL. Ideal for agent applications that orchestrate their own search logic.<br>• Run a web search and get structured results with title, snippet, site, |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.ai/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Web Search Basic<br>&gt; Run a web search via the /v1/tools/search endpoint and get structured search results.<br>Run a web search and get a list of structured results with title, snippet, site, and URL. Ideal for agent applications that orchestrate their own search logic.<br>&gt; [accordion] Usage Example<br>&gt;<br>&gt; ```python python expandable theme={null}<br>&gt; import os<br>&gt; import requests<br>&gt;<br>&gt; api_key = os.environ.get("MOONSHOT_API_KEY")<br>&gt; url = "https://api.moonshot.ai/v1/tools/search"<br>&gt;<br>&gt; response = requests.post(<br>&gt;     url,<br>&gt;     headers={"Authorization": f"Bearer {api_key}"},<br>&gt;     json={<br>&gt;         "text_query": "Kimi K2 model release",<br>&gt;         "limit": 5,<br>&gt;         "timeout_seconds": 10,<br>&gt;     },<br>&gt; )<br>&gt; print(response.json())<br>&gt; ```<br>&gt;<br>&gt; ```bash curl expandable theme={null}<br>&gt; curl https://api.moonshot.ai/v1/tools/search \<br>&gt;   -H "Content-Type: application/json" \<br>&gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt;   -d '{"text_query": "Kimi K2 model release", "limit": 5, "timeout_seconds": 10}'<br>&gt; ```<br>&gt;<br>&gt; ```javascript node.js expandable theme={null}<br>&gt; const apiKey = process.env.MOONSHOT_API_KEY;<br>&gt;<br>&gt; async function main() {<br>&gt;     const response = await fetch("https://api.moonshot.ai/v1/tools/search", {<br>&gt;         method: "POST",<br>&gt;         headers: {<br>&gt;             "Content-Type": "application/json",<br>&gt;             Authorization: `Bearer ${apiKey}`,<br>&gt;         },<br>&gt;         body: JSON.stringify({<br>&gt;             text_query: "Kimi K2 model release",<br>&gt;             limit: 5,<br>&gt;             timeout_seconds: 10,<br>&gt;         }),<br>&gt;     });<br>&gt;     const data = await response.json();<br>&gt;     console.log(data);<br>&gt; }<br>&gt;<br>&gt; main();<br>&gt; ```<br>&gt; [accordion] Response Fields<br>&gt;<br>&gt; &#124; Field &#124; Type &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `search_results` &#124; array\[object] &#124; List of search results; an empty array when nothing matches &#124;<br>&gt; &#124; `search_results[].authority` &#124; string &#124; Authority level of the source &#124;<br>&gt; &#124; `search_results[].date` &#124; string &#124; Date of the search result &#124;<br>&gt; &#124; `search_results[].icon` &#124; string &#124; Site icon URL &#124;<br>&gt; &#124; `search_results[].mime` &#124; string &#124; MIME type of the content &#124;<br>&gt; &#124; `search_results[].site_name` &#124; string &#124; Site name &#124;<br>&gt; &#124; `search_results[].snippet` &#124; string &#124; Snippet of the search result &#124;<br>&gt; &#124; `search_results[].text` &#124; string &#124; Full page content; returned when `include_content=true`, otherwise an empty string &#124;<br>&gt; &#124; `search_results[].title` &#124; string &#124; Title of the search result &#124;<br>&gt; &#124; `search_results[].url` &#124; string &#124; URL of the search result &#124;<br>&gt;<br>&gt; The string fields above are returned as empty strings when no data is available.<br>&gt;<br>&gt; **Response Example**<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "search_results": [<br>&gt;         {<br>&gt;             "authority": "S",<br>&gt;             "date": "2026-06-01",<br>&gt;             "icon": "https://platform.kimi.ai/favicon.ico",<br>&gt;             "mime": "text/html",<br>&gt;             "site_name": "Kimi API Open Platform",<br>&gt;             "snippet": "Documentation entry of the Kimi API open platform.",<br>&gt;             "text": "",<br>&gt;             "title": "API Overview - Kimi API Open Platform",<br>&gt;             "url": "https://platform.kimi.ai/docs/api/overview"<br>&gt;         }<br>&gt;     ]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; **Common Response Headers**<br>&gt;<br>&gt; &#124; Header &#124; Description &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; `X-Msh-Track-Id` &#124; Request ID. If the client sends this header, its value is reused; otherwise the server generates one. Provide this ID when troubleshooting &#124;<br>&gt; &#124; `X-Msh-Chat-Id` &#124; Session ID, always `toolgw-{X-Msh-Track-Id}`; provide both IDs when troubleshooting &#124;<br>&gt; |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>• &gt;             Authorization: `Bearer ${apiKey}`,<br>• $ref: '#/components/schemas/ToolsSearchRequest'<br>• $ref: '#/components/schemas/ToolsSearchResponse'<br>• $ref: '#/components/schemas/ErrorResponse'<br>• $ref: '#/components/schemas/ToolsSearchResult' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-api |
| source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt; url = "https://api.moonshot.ai/v1/tools/search" |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.ai/v1/tools/search \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt;     const response = await fetch("https://api.moonshot.ai/v1/tools/search", { |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/tools/search |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Web Search Basic |

#### 来源 / moonshotai-global-websearch-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • Add {"type": "web_search"} to the tools array of POST /v1/responses :<br>• On kimi-k3 , each execution of the official web-search tool through the Formula API ( POST /v1/formulas/{uri}/fibers ) incurs one call charge. See How to Use Official Tools in Kimi API . |
| capability mentions | 新增 | 未记录 | • Web Search Pro additionally supports restricting results to specific sites via sites , constraining the result time range via time_window , and returns structured content snippets ( chunks ) for each result.<br>• Including image in search_content_types (image search) does not incur an additional charge. |
| excerpt | 新增 | 未记录 | WebSearch Pricing - Kimi API Platform<br>Documentation Index<br>Fetch the complete documentation index at: /docs/llms.txt<br>Use this file to discover all available pages before exploring further.<br>Skip to main content<br>🎉 Kimi K3.1 Pro has launched! Start exploring now!<br>Kimi API Platform home page<br>Guides<br>API Reference<br>Models &amp; Pricing<br>Resources<br>Search...<br>⌘ K<br>Kimi Business<br>Contact Sales<br>User Center<br>Kimi API Platform home page Search or ask...<br>Navigation<br>Other Pricing<br>WebSearch Pricing<br>Model Pricing<br>Overview<br>Other Pricing<br>BatchJob Pricing<br>WebSearch Pricing<br>Top-up &amp; Rate Limits<br>Recharge and Rate Limits<br>Models<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>Model List<br>Other Pricing<br>WebSearch Pricing<br>Copy page Copy page<br>Review pricing, billing units, and usage notes for the Kimi web-search and fetch tools.<br>Copy page Copy page<br>​<br>Product Pricing<br>Explanation: Prices exclude applicable taxes. Specific tax obligations are subject to local tax regulations and will be calculated at checkout based on your jurisdiction.<br>Web search and fetch capabilities are billed per call; each channel is independent and billed separately:<br>Failed requests, searches not triggered by the model, or empty results/content are not billed. When using web search via the Responses API or the Formula API, model input/output Tokens are still billed at the corresponding model pricing .<br>​<br>Billing Details<br>​<br>Web Search Basic / Web Search Pro<br>Calls to /v1/tools/search or /v1/tools/search_pro :<br>One call charge applies when the request succeeds (HTTP 200) and the search_results field in the response is non-empty (at least one search result is returned).<br>Requests that fail (invalid parameters, rate limiting, server errors, timeouts, etc.) or return no search results are not billed.<br>Web Search Pro additionally supports restricting results to specific sites via sites , constraining the result time range via time_window , and returns structured content snippets ( chunks ) for each result.<br>For endpoint parameters and usage examples, see Best Practices for Web Search .<br>​<br>URL Fetch<br>Calls to /v1/tools/fetch :<br>One call charge applies when the request succeeds (HTTP 200) and the markdown field in the response is non-blank (page content was successfully extracted).<br>Requests that fail (invalid URL, security risk control, rate limiting, server errors, timeouts, etc.), pages with no extractable content (404 markdown_not_found ), or empty fetched content are not billed.<br>For endpoint parameters and usage examples, see Best Practices for Web Search .<br>​<br>Responses API web_search<br>Add {"type": "web_search"} to the tools array of POST /v1/responses :<br>The server evaluates the input to determine whether a search is required; if so, it executes the search and injects the results into the model context.<br>One call charge applies when the server executes a search (a web_search_call item is present in output ); no charge applies if the model does not trigger a search.<br>Including image in search_content_types (image search) does not incur an additional charge.<br>See Responses API .<br>​<br>Formula API web-search<br>On kimi-k3 , each execution of the official web-search tool through the Formula API ( POST /v1/formulas/{uri}/fibers ) incurs one call charge. See How to Use Official Tools in Kimi API .<br>Was this page helpful?<br>Yes<br>No<br>BatchJob Pricing<br>Previous<br>Recharge and Rate Limiting<br>Next<br>⌘ I<br>x github linkedin discord website<br>On this page<br>Back to top Product Pricing<br>Billing Details Web Search Basic / Web Search Pro<br>URL Fetch<br>Responses API web_search<br>Formula API web-search |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| source ref | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| structured records › 第 1 项 › cells | 新增 | 未记录 | • Web Search Basic<br>• POST /v1/tools/search<br>• $<br>• 0.002 / call<br>• Request succeeds (HTTP 200) and <br>• search_results<br>•  is non-empty |
| structured records › 第 1 项 › headers | 新增 | 未记录 | • Tool<br>• Endpoint<br>• Price<br>• Billing condition |
| structured records › 第 1 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| structured records › 第 1 项 › text | 新增 | 未记录 | Web Search Basic &#124; POST /v1/tools/search &#124; $ &#124; 0.002 / call &#124; Request succeeds (HTTP 200) and  &#124; search_results &#124;  is non-empty |
| structured records › 第 2 项 › cells | 新增 | 未记录 | • Web Search Pro<br>• POST /v1/tools/search_pro<br>• $<br>• 0.003 / call<br>• Request succeeds (HTTP 200) and <br>• search_results<br>•  is non-empty |
| structured records › 第 2 项 › headers | 新增 | 未记录 | • Tool<br>• Endpoint<br>• Price<br>• Billing condition |
| structured records › 第 2 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| structured records › 第 2 项 › text | 新增 | 未记录 | Web Search Pro &#124; POST /v1/tools/search_pro &#124; $ &#124; 0.003 / call &#124; Request succeeds (HTTP 200) and  &#124; search_results &#124;  is non-empty |
| structured records › 第 3 项 › cells | 新增 | 未记录 | • URL Fetch<br>• POST /v1/tools/fetch<br>• $<br>• 0.002 / call<br>• Request succeeds (HTTP 200) and the returned <br>• markdown<br>•  is non-blank |
| structured records › 第 3 项 › headers | 新增 | 未记录 | • Tool<br>• Endpoint<br>• Price<br>• Billing condition |
| structured records › 第 3 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| structured records › 第 3 项 › text | 新增 | 未记录 | URL Fetch &#124; POST /v1/tools/fetch &#124; $ &#124; 0.002 / call &#124; Request succeeds (HTTP 200) and the returned  &#124; markdown &#124;  is non-blank |
| structured records › 第 4 项 › cells | 新增 | 未记录 | 列表（15 项）<details><summary>展开完整内容</summary><ul><li>Responses API (web_search tool)</li><li>Declare </li><li>web_search</li><li> in the </li><li>tools</li><li> array of </li><li>POST /v1/responses</li><li>; executed server-side</li><li>$</li><li>0.005 / call</li><li>Charged when a search is executed (a </li><li>web_search_call</li><li> item is present in </li><li>output</li><li>); same price for image search</li></ul></details> |
| structured records › 第 4 项 › headers | 新增 | 未记录 | • Tool<br>• Endpoint<br>• Price<br>• Billing condition |
| structured records › 第 4 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| structured records › 第 4 项 › text | 新增 | 未记录 | Responses API (web_search tool) &#124; Declare  &#124; web_search &#124;  in the  &#124; tools &#124;  array of  &#124; POST /v1/responses &#124; ; executed server-side &#124; $ &#124; 0.005 / call &#124; Charged when a search is executed (a  &#124; web_search_call &#124;  item is present in  &#124; output &#124; ); same price for image search |
| structured records › 第 5 项 › cells | 新增 | 未记录 | • Formula API (web-search tool)<br>• Execute <br>• moonshot/web-search:latest<br>• $<br>• 0.005 / call<br>• Charged per execution (<br>• POST /v1/formulas/<br>• {uri}<br>• /fibers<br>• ) |
| structured records › 第 5 项 › headers | 新增 | 未记录 | • Tool<br>• Endpoint<br>• Price<br>• Billing condition |
| structured records › 第 5 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-global-websearch-pricing |
| structured records › 第 5 项 › text | 新增 | 未记录 | Formula API (web-search tool) &#124; Execute  &#124; moonshot/web-search:latest &#124; $ &#124; 0.005 / call &#124; Charged per execution ( &#124; POST /v1/formulas/ &#124; {uri} &#124; /fibers &#124; ) |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | WebSearch Pricing - Kimi API Platform |

#### 来源 / moonshotai-messages-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • 以 Anthropic Messages API 兼容的格式调用 Kimi 模型。已经在使用 Anthropic SDK、Claude Code 等工具的开发者，只需把 base URL 指向 `https://api.moonshot.cn/anthropic`，即可直接调用 Kimi 模型。<br>• `model` 签发，可通过 `POST /v1/signatures/verify` 校验。仅当请求携带合法的 |
| capability mentions | 新增 | 未记录 | 列表（22 项）<details><summary>展开完整内容</summary><ul><li>&gt; 以 Anthropic Messages API 兼容的格式调用 Kimi 模型，支持流式输出、工具调用、图片输入、思考与结构化输出。</li><li>description: 以 Anthropic Messages API 兼容的格式调用 Kimi 模型，支持流式输出、工具调用、图片输入、思考与结构化输出。</li><li>description: 输出配置：推理强度与结构化输出</li><li>description: 推理强度，支持 low、high、max，默认 max。切换档位会破坏前缀缓存命中，建议在会话开始前确定。</li><li>description: 结构化输出。设置后模型输出严格遵循给定 JSON Schema 的 JSON。</li><li>max_tokens 上限；`tool_use`：模型发起工具调用；`refusal`：触发内容安全审查。</li><li>description: 输出 Token 数（含推理 Token）</li><li>description: 输出 Token 中用于推理的部分</li><li>description: '`thinking_delta` 的推理片段'</li><li>- title: image</li><li>- image</li><li>- image/jpeg</li><li>- image/png</li><li>- image/gif</li><li>- image/webp</li><li>模型的推理过程。多轮对话时请把响应中的 thinking 块（含 `signature`）原样放回</li><li>description: 推理内容</li><li>description: 推理内容的签名，回传时需原样保留</li><li>description: 模型发起的工具调用（出现在 assistant 消息中）</li><li>description: 工具调用 ID，提交结果时需与 `tool_use_id` 对应</li><li>description: 工具返回内容，可为字符串或 text / image 块数组</li><li>消息内容。可以是纯文本字符串，也可以是内容块数组（text / image / thinking / tool_use /</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Messages API<br>&gt; 以 Anthropic Messages API 兼容的格式调用 Kimi 模型，支持流式输出、工具调用、图片输入、思考与结构化输出。<br>以 Anthropic Messages API 兼容的格式调用 Kimi 模型。已经在使用 Anthropic SDK、Claude Code 等工具的开发者，只需把 base URL 指向 `https://api.moonshot.cn/anthropic`，即可直接调用 Kimi 模型。<br>&gt; [accordion] 上下文缓存（Cache Write）<br>&gt;<br>&gt; 通过顶层 `cache_control` 控制上下文缓存的写入行为（仅顶层传入时生效，`messages` 消息体内的 `cache_control` 标记会被忽略）：<br>&gt;<br>&gt; &#124; 参数 &#124; 类型 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `cache_control` &#124; object &#124; 上下文缓存写入选项，仅顶层传入时生效；不传时默认按 `5m` TTL 读写缓存 &#124;<br>&gt; &#124; `cache_control.type` &#124; `"ephemeral"` &#124; 缓存类型，固定为 `ephemeral` &#124;<br>&gt; &#124; `cache_control.ttl` &#124; `"5m"` \&#124; `"1h"` &#124; 缓存写入的有效期，仅支持 `5m`、`1h` 两档（默认 `5m`），两档缓存相互独立 &#124;<br>&gt;<br>&gt; * 传入顶层 `cache_control`：将请求前缀按指定 TTL 写入缓存。<br>&gt; * 不传 `cache_control`：默认按 `5m` TTL 读写缓存；发生缓存写入时，按 `5m` 档计费。<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "model": "kimi-k3.1-pro",<br>&gt;     "cache_control": { "type": "ephemeral", "ttl": "1h" },<br>&gt;     "messages": [{"role": "user", "content": "你好"}]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; **行为说明**<br>&gt;<br>&gt; * 缓存以组织（org）为粒度隔离，组织之间不共享缓存。<br>&gt; * 相同前缀的请求在缓存有效期内命中后，缓存的有效期会按原 TTL 刷新；命中部分只收取缓存读取费用，不再收取缓存写入费用。<br>&gt; * 缓存写入按 TTL 分别计费，价格详见[产品定价](https://platform.kimi.com/docs/pricing/chat.md)。<br>&gt; * 不支持手动清除缓存，已缓存的前缀在至少 5 分钟不活动后自动过期。<br>&gt;<br>&gt; **用量字段**<br>&gt;<br>&gt; &#124; 字段 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; `usage.input_tokens` &#124; 既未命中缓存、也未用于创建缓存条目的输入 Token 数 &#124;<br>&gt; &#124; `usage.cache_read_input_tokens` &#124; 命中缓存的输入 Token 数（缓存读取） &#124;<br>&gt; &#124; `usage.cache_creation_input_tokens` &#124; 创建新缓存条目时写入缓存的输入 Token 数（缓存写入） &#124;<br>&gt; &#124; `usage.cache_creation.ephemeral_5m_input_tokens` &#124; 写入 `5m` 档缓存的输入 Token 数 &#124;<br>&gt; &#124; `usage.cache_creation.ephemeral_1h_input_tokens` &#124; 写入 `1h` 档缓存的输入 Token 数 &#124;<br>&gt;<br>&gt; 总输入 = `input_tokens` + `cache_read_input_tokens` + `cache_creation_input_tokens`。<br>&gt;<br>&gt; &gt; [!NOTE]<br>&gt; &gt;<br>&gt; &gt; 本页 `input_tokens` 的口径与 Chat Completions / Responses API 不同：这两个 API 的 `prompt_tokens` / `input_tokens` 始终为总输入，缓存读写部分在各自的 details 字段中拆分。<br>&gt;<br>&gt; &gt; [!NOTE]<br>&gt; &gt;<br>&gt; &gt; Context Caching 的机制背景详见[上下文缓存指南](https://platform.kimi.com/docs/guide/context-caching.md)。<br>## OpenAPI<br>````yaml POST /anthropic/v1/messages<br>openapi: 3.1.0<br>info:<br>title: Moonshot AI API<br>version: 1.0.0<br>description: Moonshot AI / Kimi 大语言模型服务 API<br>servers:<br>- url: https://api.moonshot.cn<br>description: 生产环境<br>security: []<br>paths:<br>/anthropic/v1/messages:<br>post:<br>tags:<br>- Messages<br>summary: Messages API<br>description: 以 Anthropic Messages API 兼容的格式调用 Kimi 模型，支持流式输出、工具调用、图片输入、思考与结构化输出。<br>parameters:<br>- name: X-Msh-Request-Nonce<br>in: header<br>required: false<br>description: &gt;-<br>客户端生成的随机 nonce（推荐使用 UUID v4），携带后即开启请求签名：Kimi API 会在响应头中返回<br>`Msh-Request-Timestamp` 与 `Msh-Request-Signature`，用于事后证明该请求确实由 Kimi<br>API 处理。只允许一个非空的 Header<br>值；值不合法时请求照常执行，但不返回上述响应头。详见[校验请求签名](/api/signatures-verify)。<br>schema:<br>type: string<br>minLength: 1<br>example: 7d929748-0ae6-41c2-ab5d-a186498ad721<br>requestBody:<br>required: true<br>content:<br>application/json:<br>schema:<br>$ref: '#/components/schemas/MessagesRequest'<br>responses:<br>'200':<br>description: 消息响应<br>headers:<br>Msh-Request-Timestamp:<br>description: &gt;-<br>Kimi API 接受本次请求时的 Unix 毫秒时间戳。仅当请求携带合法的 `X-Msh-Request-Nonce`<br>时返回。<br>schema:<br>type: integer |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（13 项）<details><summary>展开完整内容</summary><ul><li>$ref: '#/components/schemas/MessagesRequest'</li><li>$ref: '#/components/schemas/MessagesResponse'</li><li>$ref: '#/components/schemas/MessagesStreamEvent'</li><li>$ref: '#/components/schemas/MessagesErrorResponse'</li><li>$ref: '#/components/schemas/ErrorResponse'</li><li>$ref: '#/components/schemas/MessagesMessageParam'</li><li>$ref: '#/components/schemas/MessagesTextBlockParam'</li><li>$ref: '#/components/schemas/MessagesTool'</li><li>$ref: '#/components/schemas/MessagesToolChoice'</li><li>description: 工具返回内容，可为字符串或 text / image 块数组</li><li>消息内容。可以是纯文本字符串，也可以是内容块数组（text / image / thinking / tool_use /</li><li>description: 工具名称。必须符合正则表达式：^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li><li>pattern: ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-messages-api |
| source ref | 新增 | 未记录 | moonshotai-messages-api |
| structured records › 记录 moonshotai-messages-api › evidence | 新增 | 未记录 | `model` 签发，可通过 `POST /v1/signatures/verify` 校验。仅当请求携带合法的 |
| structured records › 记录 moonshotai-messages-api › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-messages-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Messages API |

#### 来源 / moonshotai-model-catalog

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | 空列表 |
| capability mentions | 新增 | 未记录 | 空列表 |
| excerpt | 新增 | 未记录 | 空字符串 |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 列表（21 项）<details><summary>展开完整内容</summary><ul><li>kimi-k3.1-pro</li><li>kimi-k3.1-pro-highspeed</li><li>kimi-k3</li><li>kimi-k2.7-code</li><li>kimi-k2.7-code-highspeed</li><li>kimi-k2.6</li><li>kimi-k2.5</li><li>moonshot-v1-8k</li><li>moonshot-v1-32k</li><li>moonshot-v1-128k</li><li>moonshot-v1-auto</li><li>moonshot-v1-8k-vision-preview</li><li>moonshot-v1-32k-vision-preview</li><li>moonshot-v1-128k-vision-preview</li><li>kimi-k2-0905-preview</li><li>kimi-k2-0711-preview</li><li>kimi-k2-turbo-preview</li><li>kimi-k2-thinking</li><li>kimi-k2-thinking-turbo</li><li>kimi-latest</li><li>kimi-thinking-preview</li></ul></details> |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | model_catalog |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| source ref | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2-0711-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-0711-preview |
| structured records › 记录 kimi-k2-0711-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2-0711-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-0905-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-0905-preview |
| structured records › 记录 kimi-k2-0905-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2-0905-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-thinking-turbo › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-thinking-turbo |
| structured records › 记录 kimi-k2-thinking-turbo › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2-thinking-turbo › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-thinking › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-thinking |
| structured records › 记录 kimi-k2-thinking › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2-thinking › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2-turbo-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2-turbo-preview |
| structured records › 记录 kimi-k2-turbo-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2-turbo-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.5 › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.5 |
| structured records › 记录 kimi-k2.5 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2.5 › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.6 › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.6 |
| structured records › 记录 kimi-k2.6 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2.6 › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.7-code-highspeed › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.7-code-highspeed |
| structured records › 记录 kimi-k2.7-code-highspeed › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2.7-code-highspeed › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k2.7-code › 模型 ID（model_id） | 新增 | 未记录 | kimi-k2.7-code |
| structured records › 记录 kimi-k2.7-code › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k2.7-code › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-k3.1-pro-highspeed › 模型 ID（model_id） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| structured records › 记录 kimi-k3.1-pro-highspeed › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k3.1-pro-highspeed › 状态（status） | 新增 | 未记录 | listed_current |
| structured records › 记录 kimi-k3.1-pro › 模型 ID（model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| structured records › 记录 kimi-k3.1-pro › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k3.1-pro › 状态（status） | 新增 | 未记录 | listed_current |
| structured records › 记录 kimi-k3 › 模型 ID（model_id） | 新增 | 未记录 | kimi-k3 |
| structured records › 记录 kimi-k3 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-k3 › 状态（status） | 新增 | 未记录 | listed_current |
| structured records › 记录 kimi-latest › 模型 ID（model_id） | 新增 | 未记录 | kimi-latest |
| structured records › 记录 kimi-latest › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-latest › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 kimi-thinking-preview › 模型 ID（model_id） | 新增 | 未记录 | kimi-thinking-preview |
| structured records › 记录 kimi-thinking-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 kimi-thinking-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-128k-vision-preview › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-128k-vision-preview |
| structured records › 记录 moonshot-v1-128k-vision-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-128k-vision-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-128k › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-128k |
| structured records › 记录 moonshot-v1-128k › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-128k › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-32k-vision-preview › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-32k-vision-preview |
| structured records › 记录 moonshot-v1-32k-vision-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-32k-vision-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-32k › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-32k |
| structured records › 记录 moonshot-v1-32k › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-32k › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-8k-vision-preview › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-8k-vision-preview |
| structured records › 记录 moonshot-v1-8k-vision-preview › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-8k-vision-preview › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-8k › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-8k |
| structured records › 记录 moonshot-v1-8k › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-8k › 状态（status） | 新增 | 未记录 | listed_retired |
| structured records › 记录 moonshot-v1-auto › 模型 ID（model_id） | 新增 | 未记录 | moonshot-v1-auto |
| structured records › 记录 moonshot-v1-auto › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-model-catalog |
| structured records › 记录 moonshot-v1-auto › 状态（status） | 新增 | 未记录 | listed_retired |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 模型列表 |

#### 来源 / moonshotai-responses-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt;     base_url="https://api.moonshot.cn/v1",<br>• &gt;     baseURL: "https://api.moonshot.cn/v1",<br>• &gt; curl https://api.moonshot.cn/v1/responses \<br>• ````yaml POST /v1/responses<br>• `model` 签发，可通过 `POST /v1/signatures/verify` 校验。仅当请求携带合法的<br>• POST /v1/responses |
| capability mentions | 新增 | 未记录 | 列表（57 项）<details><summary>展开完整内容</summary><ul><li>&gt; [accordion] 工具调用 Tool Use</li><li>description: 本次请求的输入。传字符串等价于一条 user 消息；传数组时按顺序给出带类型的 item，可包含历史对话、工具调用与工具结果。</li><li>reasoning:</li><li>description: 推理相关配置。</li><li>description: 推理强度。档位越高，模型推理越充分，通常也会带来更高的延迟与推理 Token 消耗。</li><li>description: 输出 item 数组，顺序为 web_search_call（如有）、reasoning、message、工具调用。</li><li>parallel_tool_calls:</li><li>- response.reasoning_summary_part.added</li><li>- response.reasoning_summary_part.done</li><li>- response.reasoning_summary_text.delta</li><li>- response.reasoning_summary_text.done</li><li>- response.custom_tool_call_input.delta</li><li>- response.custom_tool_call_input.done</li><li>- $ref: '#/components/schemas/ResponsesReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallOutputItem'</li><li>description: 控制工具调用行为。取 `auto` 时由模型自行决定是否调用工具。</li><li>- $ref: '#/components/schemas/ResponsesOutputReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputCustomToolCallItem'</li><li>reasoning: '#/components/schemas/ResponsesOutputReasoningItem'</li><li>custom_tool_call: '#/components/schemas/ResponsesOutputCustomToolCallItem'</li><li>description: 输出 Token 数量，含推理 Token。</li><li>reasoning_tokens:</li><li>description: 推理消耗的 Token 数量。</li><li>ResponsesReasoningItem:</li><li>title: 推理</li><li>description: 回放上一轮的推理内容。`content` 优先于 `summary`。</li><li>- reasoning</li><li>- reasoning_text</li><li>ResponsesCustomToolCallItem:</li><li>title: 自定义工具调用</li><li>description: 回放一次自定义工具调用。</li><li>- custom_tool_call</li><li>description: 与对应 `custom_tool_call_output` 配对的调用 ID。</li><li>ResponsesCustomToolCallOutputItem:</li><li>title: 自定义工具调用结果</li><li>description: 自定义工具调用的执行结果。</li><li>- custom_tool_call_output</li><li>description: 与对应 `custom_tool_call` 相同的调用 ID。</li><li>格式定义；模型调用时在 output 中返回 `custom_tool_call` item。</li><li>- image</li><li>description: 搜索结果类型，默认仅 `text`。包含 `image` 时会额外执行图片搜索。</li><li>image_settings:</li><li>description: 图片搜索设置，仅在 `search_content_types` 包含 `image` 时生效。</li><li>ResponsesOutputReasoningItem:</li><li>description: 模型的推理内容。</li><li>description: 推理内容。</li><li>ResponsesOutputCustomToolCallItem:</li><li>description: 模型发起的自定义工具调用。</li><li>description: 回传结果时在 `custom_tool_call_output` 中使用该值。</li><li>`search_content_types` 包含 `image` 时返回。</li><li>- image_result</li><li>image_url:</li><li>description: 图片说明文字，仅在开启 `image_settings.caption` 时返回。</li><li>- image_url</li><li>- input_image</li><li>图片的 data URL，例如 `data:image/png;base64,&lt;base64&gt;`。不支持公网 http(s)</li></ul></details> |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># Responses API<br>&gt; 创建一次模型响应。传入文本或图片，生成文本或 JSON 输出；也可以让模型调用你定义的函数工具，或使用服务端执行的联网搜索。<br>&gt; [accordion] 调用示例<br>&gt;<br>&gt; ```python Python theme={null}<br>&gt; import os<br>&gt;<br>&gt; from openai import OpenAI<br>&gt;<br>&gt; client = OpenAI(<br>&gt;     api_key=os.environ["MOONSHOT_API_KEY"],<br>&gt;     base_url="https://api.moonshot.cn/v1",<br>&gt; )<br>&gt;<br>&gt; response = client.responses.create(<br>&gt;     model="kimi-k3.1-pro",<br>&gt;     instructions="你是 Kimi，一个由 Moonshot AI 提供的人工智能助手。",<br>&gt;     input="用一句话解释什么是上下文缓存。",<br>&gt; )<br>&gt;<br>&gt; print(response.output_text)<br>&gt; ```<br>&gt;<br>&gt; ```javascript Node.js theme={null}<br>&gt; import OpenAI from "openai";<br>&gt;<br>&gt; const client = new OpenAI({<br>&gt;     apiKey: process.env.MOONSHOT_API_KEY,<br>&gt;     baseURL: "https://api.moonshot.cn/v1",<br>&gt; });<br>&gt;<br>&gt; const response = await client.responses.create({<br>&gt;     model: "kimi-k3.1-pro",<br>&gt;     instructions: "你是 Kimi，一个由 Moonshot AI 提供的人工智能助手。",<br>&gt;     input: "用一句话解释什么是上下文缓存。",<br>&gt; });<br>&gt;<br>&gt; console.log(response.output_text);<br>&gt; ```<br>&gt;<br>&gt; ```bash cURL theme={null}<br>&gt; curl https://api.moonshot.cn/v1/responses \<br>&gt;     --header "Content-Type: application/json" \<br>&gt;     --header "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt;     --data '{<br>&gt;         "model": "kimi-k3.1-pro",<br>&gt;         "instructions": "你是 Kimi，一个由 Moonshot AI 提供的人工智能助手。",<br>&gt;         "input": "用一句话解释什么是上下文缓存。"<br>&gt;     }'<br>&gt; ```<br>&gt; [accordion] 工具调用 Tool Use<br>&gt;<br>&gt; `tools` 支持四种工具类型：`function`、`namespace`、`custom`（仅 `apply_patch`）与 `web_search`，其他类型不支持。前三种由你在本地执行：模型返回调用请求，你执行后把结果回传；`web_search` 由服务端执行，无需你处理。<br>&gt;<br>&gt; **函数调用**<br>&gt;<br>&gt; 通过 `tools` 传入 JSON Schema 定义的函数，模型可决定在适当时机调用它们：<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "model": "kimi-k3.1-pro",<br>&gt;   "input": "北京今天天气怎么样？",<br>&gt;   "tools": [<br>&gt;     {<br>&gt;       "type": "function",<br>&gt;       "name": "get_weather",<br>&gt;       "description": "获取指定城市的天气",<br>&gt;       "parameters": {<br>&gt;         "type": "object",<br>&gt;         "properties": {<br>&gt;           "city": {"type": "string", "description": "城市名称"}<br>&gt;         },<br>&gt;         "required": ["city"]<br>&gt;       }<br>&gt;     }<br>&gt;   ]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; 模型决定调用时，`output` 中会包含 `function_call` item，`arguments` 是参数的 JSON 字符串：<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "type": "function_call",<br>&gt;   "id": "fc_IrcmDq5JNO0JhWdEpsuZnL9J",<br>&gt;   "status": "completed",<br>&gt;   "call_id": "get_weather_0",<br>&gt;   "name": "get_weather",<br>&gt;   "arguments": "{\"city\":\"北京\"}"<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; 在本地执行后，把上一轮的 `output` 原样追加到 `input`，再追加一条 `function_call_output`（`call_id` 必须与 `function_call` 中的一致），发起下一次请求：<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;   "model": "kimi-k3.1-pro", |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 列表（31 项）<details><summary>展开完整内容</summary><ul><li>&gt;     --header "Authorization: Bearer $MOONSHOT_API_KEY" \</li><li>$ref: '#/components/schemas/ResponsesRequest'</li><li>$ref: '#/components/schemas/ResponsesResponse'</li><li>$ref: '#/components/schemas/ResponsesStreamEvent'</li><li>$ref: '#/components/schemas/ErrorResponse'</li><li>$ref: '#/components/schemas/ResponsesInputItem'</li><li>$ref: '#/components/schemas/ResponsesTool'</li><li>$ref: '#/components/schemas/ResponsesToolChoice'</li><li>$ref: '#/components/schemas/ResponsesOutputItem'</li><li>- $ref: '#/components/schemas/ResponsesUsage'</li><li>- $ref: '#/components/schemas/ResponsesToolChoice'</li><li>- $ref: '#/components/schemas/ResponsesMessageItem'</li><li>- $ref: '#/components/schemas/ResponsesReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesFunctionCallItem'</li><li>- $ref: '#/components/schemas/ResponsesFunctionCallOutputItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallItem'</li><li>- $ref: '#/components/schemas/ResponsesCustomToolCallOutputItem'</li><li>- $ref: '#/components/schemas/ResponsesWebSearchCallItem'</li><li>- $ref: '#/components/schemas/ResponsesAdditionalToolsItem'</li><li>- $ref: '#/components/schemas/ResponsesFunctionTool'</li><li>- $ref: '#/components/schemas/ResponsesCustomTool'</li><li>- $ref: '#/components/schemas/ResponsesNamespaceTool'</li><li>- $ref: '#/components/schemas/ResponsesWebSearchTool'</li><li>- $ref: '#/components/schemas/ResponsesOutputReasoningItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputMessageItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputFunctionCallItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputCustomToolCallItem'</li><li>- $ref: '#/components/schemas/ResponsesOutputWebSearchCallItem'</li><li>$ref: '#/components/schemas/ResponsesInputContentPart'</li><li>description: 函数名称。必须符合正则表达式：^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li><li>pattern: ^[a-zA-Z_][a-zA-Z0-9-_]{0,127}$</li></ul></details> |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-responses-api |
| source ref | 新增 | 未记录 | moonshotai-responses-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt;     base_url="https://api.moonshot.cn/v1", |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-responses-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt;     baseURL: "https://api.moonshot.cn/v1", |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-responses-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.cn/v1/responses \ |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-responses-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/responses |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-responses-api |
| structured records › 第 5 项 › evidence | 新增 | 未记录 | `model` 签发，可通过 `POST /v1/signatures/verify` 校验。仅当请求携带合法的 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-responses-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | Responses API |

#### 来源 / moonshotai-webfetch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt; url = "https://api.moonshot.cn/v1/tools/fetch"<br>• &gt; curl https://api.moonshot.cn/v1/tools/fetch \<br>• &gt;     const response = await fetch("https://api.moonshot.cn/v1/tools/fetch", {<br>• ````yaml POST /v1/tools/fetch<br>• POST /v1/tools/fetch |
| capability mentions | 新增 | 未记录 | • &gt; ![image1](https://platform.kimi.com/assets/logo/dark.svg)<br>• description: 抓取结果的 Markdown 内容；文本与图片按在页面中出现的顺序拼接，图片以 `![imageN](url)` 形式占位。 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 网页抓取<br>&gt; 通过 /v1/tools/fetch 接口抓取指定 URL 的网页内容，返回页面标题与 Markdown 格式正文。<br>抓取指定 URL 的网页内容，返回页面标题与 Markdown 格式正文，适用于网页阅读、资料整理等内容提取场景。<br>&gt; [!WARNING]<br>&gt;<br>&gt; 仅支持 `http` 和 `https` 协议的 URL。触发安全风控的 URL 会返回 403 `security_risk` 错误；页面无可提取正文时返回 404 `markdown_not_found` 错误。<br>&gt; [accordion] 调用示例<br>&gt;<br>&gt; ```python python expandable theme={null}<br>&gt; import os<br>&gt; import requests<br>&gt;<br>&gt; api_key = os.environ.get("MOONSHOT_API_KEY")<br>&gt; url = "https://api.moonshot.cn/v1/tools/fetch"<br>&gt;<br>&gt; response = requests.post(<br>&gt;     url,<br>&gt;     headers={"Authorization": f"Bearer {api_key}"},<br>&gt;     json={"url": "https://platform.kimi.com/docs/api/overview"},<br>&gt; )<br>&gt; print(response.json())<br>&gt; ```<br>&gt;<br>&gt; ```bash curl expandable theme={null}<br>&gt; curl https://api.moonshot.cn/v1/tools/fetch \<br>&gt;   -H "Content-Type: application/json" \<br>&gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt;   -d '{"url": "https://platform.kimi.com/docs/api/overview"}'<br>&gt; ```<br>&gt;<br>&gt; ```javascript node.js expandable theme={null}<br>&gt; const apiKey = process.env.MOONSHOT_API_KEY;<br>&gt;<br>&gt; async function main() {<br>&gt;     const response = await fetch("https://api.moonshot.cn/v1/tools/fetch", {<br>&gt;         method: "POST",<br>&gt;         headers: {<br>&gt;             "Content-Type": "application/json",<br>&gt;             Authorization: `Bearer ${apiKey}`,<br>&gt;         },<br>&gt;         body: JSON.stringify({<br>&gt;             url: "https://platform.kimi.com/docs/api/overview",<br>&gt;         }),<br>&gt;     });<br>&gt;     const data = await response.json();<br>&gt;     console.log(data);<br>&gt; }<br>&gt;<br>&gt; main();<br>&gt; ```<br>&gt; [accordion] 响应字段说明<br>&gt;<br>&gt; &#124; 字段 &#124; 类型 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `url` &#124; string &#124; 抓取 URL &#124;<br>&gt; &#124; `markdown` &#124; string &#124; 抓取结果的 Markdown 内容；文本与图片按在页面中出现的顺序拼接，图片以占位符形式嵌入（格式见下方示例），各段之间以空行分隔 &#124;<br>&gt; &#124; `title` &#124; string &#124; 页面标题 &#124;<br>&gt;<br>&gt; **响应示例**<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "url": "https://platform.kimi.com/docs/api/overview",<br>&gt;     "markdown": "# API 概述\n\nKimi API 开放平台文档入口。",<br>&gt;     "title": "API 概述 - Kimi API 开放平台"<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; **markdown 内容形态示例**<br>&gt;<br>&gt; ```text theme={null}<br>&gt; # API 概述<br>&gt;<br>&gt; Kimi API 开放平台文档入口。<br>&gt;<br>&gt; ![image1](https://platform.kimi.com/assets/logo/dark.svg)<br>&gt;<br>&gt; 更多正文内容……<br>&gt; ```<br>&gt;<br>&gt; **通用响应头**<br>&gt;<br>&gt; &#124; 响应头 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; `X-Msh-Track-Id` &#124; 请求 ID；请求携带同名头时沿用，否则由服务端生成。排查问题时请提供该 ID &#124;<br>&gt; &#124; `X-Msh-Chat-Id` &#124; 会话 ID，固定为 `toolgw-{X-Msh-Track-Id}`；排查问题时请一并提供 &#124;<br>&gt;<br>&gt; 以上两个响应头在所有响应（包括错误响应）中均会携带。<br>&gt; [accordion] 错误码说明<br>&gt;<br>&gt; &#124; HTTP 状态码 &#124; error.type &#124; 典型 message &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; 400 &#124; `invalid_request` &#124; `invalid request body` &#124; 请求体不是合法 JSON &#124;<br>&gt; &#124; 400 &#124; `invalid_url` &#124; `The provided URL is invalid: only http and https are supported` &#124; URL 为空或协议非 http/https &#124;<br>&gt; &#124; 400 &#124; `invalid_url` &#124; `The provided URL is invalid: missing host` &#124; URL 缺少主机名 &#124;<br>&gt; &#124; 401 &#124; - &#124; 无错误响应体 &#124; API Key 缺失或无效 &#124;<br>&gt; &#124; 403 &#124; - &#124; 无错误响应体 &#124; 账号未激活或已停用 &#124; |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>• &gt;             Authorization: `Bearer ${apiKey}`,<br>• $ref: '#/components/schemas/ToolsFetchRequest'<br>• $ref: '#/components/schemas/ToolsFetchResponse'<br>• $ref: '#/components/schemas/ErrorResponse' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-webfetch-api |
| source ref | 新增 | 未记录 | moonshotai-webfetch-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt; url = "https://api.moonshot.cn/v1/tools/fetch" |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-webfetch-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.cn/v1/tools/fetch \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-webfetch-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt;     const response = await fetch("https://api.moonshot.cn/v1/tools/fetch", { |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-webfetch-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/tools/fetch |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-webfetch-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 网页抓取 |

#### 来源 / moonshotai-websearch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • &gt; url = "https://api.moonshot.cn/v1/tools/search"<br>• &gt; curl https://api.moonshot.cn/v1/tools/search \<br>• &gt;     const response = await fetch("https://api.moonshot.cn/v1/tools/search", {<br>• ````yaml POST /v1/tools/search<br>• POST /v1/tools/search |
| capability mentions | 新增 | 未记录 | • &gt; 通过 /v1/tools/search 接口发起网页搜索，返回结构化搜索结果。<br>• 发起一次网页搜索，返回标题、摘要、站点、链接等结构化搜索结果列表，适用于需要自行编排搜索逻辑的 Agent 应用。<br>• 发起一次网页搜索，返回标题、摘要、站点、链接等结构化搜索结果。请求成功且返回结果数大于 0 |
| excerpt | 新增 | 未记录 | &gt; ## Documentation Index<br>&gt; Fetch the complete documentation index at: https://platform.kimi.com/docs/llms.txt<br>&gt; Use this file to discover all available pages before exploring further.<br># 联网搜索 Basic<br>&gt; 通过 /v1/tools/search 接口发起网页搜索，返回结构化搜索结果。<br>发起一次网页搜索，返回标题、摘要、站点、链接等结构化搜索结果列表，适用于需要自行编排搜索逻辑的 Agent 应用。<br>&gt; [accordion] 调用示例<br>&gt;<br>&gt; ```python python expandable theme={null}<br>&gt; import os<br>&gt; import requests<br>&gt;<br>&gt; api_key = os.environ.get("MOONSHOT_API_KEY")<br>&gt; url = "https://api.moonshot.cn/v1/tools/search"<br>&gt;<br>&gt; response = requests.post(<br>&gt;     url,<br>&gt;     headers={"Authorization": f"Bearer {api_key}"},<br>&gt;     json={<br>&gt;         "text_query": "Kimi K2 模型 发布",<br>&gt;         "limit": 5,<br>&gt;         "timeout_seconds": 10,<br>&gt;     },<br>&gt; )<br>&gt; print(response.json())<br>&gt; ```<br>&gt;<br>&gt; ```bash curl expandable theme={null}<br>&gt; curl https://api.moonshot.cn/v1/tools/search \<br>&gt;   -H "Content-Type: application/json" \<br>&gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>&gt;   -d '{"text_query": "Kimi K2 模型 发布", "limit": 5, "timeout_seconds": 10}'<br>&gt; ```<br>&gt;<br>&gt; ```javascript node.js expandable theme={null}<br>&gt; const apiKey = process.env.MOONSHOT_API_KEY;<br>&gt;<br>&gt; async function main() {<br>&gt;     const response = await fetch("https://api.moonshot.cn/v1/tools/search", {<br>&gt;         method: "POST",<br>&gt;         headers: {<br>&gt;             "Content-Type": "application/json",<br>&gt;             Authorization: `Bearer ${apiKey}`,<br>&gt;         },<br>&gt;         body: JSON.stringify({<br>&gt;             text_query: "Kimi K2 模型 发布",<br>&gt;             limit: 5,<br>&gt;             timeout_seconds: 10,<br>&gt;         }),<br>&gt;     });<br>&gt;     const data = await response.json();<br>&gt;     console.log(data);<br>&gt; }<br>&gt;<br>&gt; main();<br>&gt; ```<br>&gt; [accordion] 响应字段说明<br>&gt;<br>&gt; &#124; 字段 &#124; 类型 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124; - &#124;<br>&gt; &#124; `search_results` &#124; array\[object] &#124; 搜索结果列表；无结果时为空数组 &#124;<br>&gt; &#124; `search_results[].authority` &#124; string &#124; 来源权威性等级 &#124;<br>&gt; &#124; `search_results[].date` &#124; string &#124; 搜索结果日期 &#124;<br>&gt; &#124; `search_results[].icon` &#124; string &#124; 站点图标 URL &#124;<br>&gt; &#124; `search_results[].mime` &#124; string &#124; 内容 MIME 类型 &#124;<br>&gt; &#124; `search_results[].site_name` &#124; string &#124; 站点名称 &#124;<br>&gt; &#124; `search_results[].snippet` &#124; string &#124; 搜索结果摘要 &#124;<br>&gt; &#124; `search_results[].text` &#124; string &#124; 网页正文内容；`include_content=true` 时返回，为 false 时为空字符串 &#124;<br>&gt; &#124; `search_results[].title` &#124; string &#124; 搜索结果标题 &#124;<br>&gt; &#124; `search_results[].url` &#124; string &#124; 搜索结果链接 &#124;<br>&gt;<br>&gt; 以上字符串字段在无数据时返回空字符串。<br>&gt;<br>&gt; **响应示例**<br>&gt;<br>&gt; ```json theme={null}<br>&gt; {<br>&gt;     "search_results": [<br>&gt;         {<br>&gt;             "authority": "S",<br>&gt;             "date": "2026-06-01",<br>&gt;             "icon": "https://platform.kimi.com/favicon.ico",<br>&gt;             "mime": "text/html",<br>&gt;             "site_name": "Kimi API 开放平台",<br>&gt;             "snippet": "Kimi API 开放平台文档入口。",<br>&gt;             "text": "",<br>&gt;             "title": "API 概述 - Kimi API 开放平台",<br>&gt;             "url": "https://platform.kimi.com/docs/api/overview"<br>&gt;         }<br>&gt;     ]<br>&gt; }<br>&gt; ```<br>&gt;<br>&gt; **通用响应头**<br>&gt;<br>&gt; &#124; 响应头 &#124; 说明 &#124;<br>&gt; &#124; - &#124; - &#124;<br>&gt; &#124; `X-Msh-Track-Id` &#124; 请求 ID；请求携带同名头时沿用，否则由服务端生成。排查问题时请提供该 ID &#124;<br>&gt; &#124; `X-Msh-Chat-Id` &#124; 会话 ID，固定为 `toolgw-{X-Msh-Track-Id}`；排查问题时请一并提供 &#124;<br>&gt; |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | • &gt;   -H "Authorization: Bearer $MOONSHOT_API_KEY" \<br>• &gt;             Authorization: `Bearer ${apiKey}`,<br>• $ref: '#/components/schemas/ToolsSearchRequest'<br>• $ref: '#/components/schemas/ToolsSearchResponse'<br>• $ref: '#/components/schemas/ErrorResponse'<br>• $ref: '#/components/schemas/ToolsSearchResult' |
| scope | 新增 | 未记录 | api |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-api |
| source ref | 新增 | 未记录 | moonshotai-websearch-api |
| structured records › 第 1 项 › evidence | 新增 | 未记录 | &gt; url = "https://api.moonshot.cn/v1/tools/search" |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-api |
| structured records › 第 2 项 › evidence | 新增 | 未记录 | &gt; curl https://api.moonshot.cn/v1/tools/search \ |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-api |
| structured records › 第 3 项 › evidence | 新增 | 未记录 | &gt;     const response = await fetch("https://api.moonshot.cn/v1/tools/search", { |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-api |
| structured records › 第 4 项 › evidence | 新增 | 未记录 | ````yaml POST /v1/tools/search |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-api |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 联网搜索 Basic |

#### 来源 / moonshotai-websearch-pricing

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| access scope | 新增 | 未记录 | public |
| api mentions | 新增 | 未记录 | • 在 POST /v1/responses 的 tools 中加入 {"type": "web_search"} ：<br>• 在 kimi-k3 上通过 Formula API 执行官方 web-search 工具（ POST /v1/formulas/{uri}/fibers ），每次执行计一次费用。详见 如何在 Kimi API 中使用官方工具 。 |
| capability mentions | 新增 | 未记录 | • 模型推理<br>• 模型推理定价<br>• 批量推理定价<br>• 联网搜索 Pro 额外支持通过 sites 将结果约束在指定站点内、通过 time_window 约束结果时间范围，并为每个结果返回结构化正文片段（ chunks ）。<br>• search_content_types 包含 image （图片搜索）时不额外收费。 |
| excerpt | 新增 | 未记录 | 联网搜索定价 - Kimi API 开放平台<br>Documentation Index<br>Fetch the complete documentation index at: /docs/llms.txt<br>Use this file to discover all available pages before exploring further.<br>Skip to main content<br>🎉 Kimi K3.1 Pro 已正式发布， 快来体验吧！<br>Kimi API 开放平台 home page 简体中文<br>模型推理<br>托管智能体<br>API 参考<br>模型与定价<br>资源<br>搜索...<br>⌘ K<br>企业订阅<br>联系销售<br>用户中心<br>Kimi API 开放平台 home page 搜索或提问...<br>Navigation<br>功能定价<br>联网搜索定价<br>模型推理定价<br>计费说明<br>功能定价<br>批量推理定价<br>联网搜索定价<br>托管智能体定价<br>充值与限速<br>充值与限速<br>模型<br>Kimi K3.1 Pro<br>Kimi K3<br>Kimi K2.7 Code<br>Kimi K2.6<br>模型列表<br>功能定价<br>联网搜索定价<br>复制页面 复制页面<br>查看 Kimi 联网搜索与网页抓取工具的调用价格、计费单位和使用说明。<br>复制页面 复制页面<br>​<br>产品定价<br>联网搜索与网页抓取能力按次计费，各方式相互独立、分别计费：<br>请求失败、模型未触发搜索或未返回结果/内容时均不计费。通过 Responses API 或 Formula API 使用联网搜索时，模型输入输出 Tokens 仍按对应 模型价格 正常计费。<br>​<br>计费说明<br>​<br>联网搜索 Basic / 联网搜索 Pro<br>调用 /v1/tools/search 或 /v1/tools/search_pro ：<br>请求成功（HTTP 200）且响应中的 search_results 非空（至少返回一条搜索结果）时，计一次费用；<br>请求失败（如参数错误、频率限制、服务错误、超时等）或未返回任何搜索结果时，不计费；<br>联网搜索 Pro 额外支持通过 sites 将结果约束在指定站点内、通过 time_window 约束结果时间范围，并为每个结果返回结构化正文片段（ chunks ）。<br>接口参数与调用示例详见 联网搜索最佳实践 。<br>​<br>网页抓取<br>调用 /v1/tools/fetch ：<br>请求成功（HTTP 200）且响应中的 markdown 非空白（成功抓取到页面正文内容）时，计一次费用；<br>请求失败（如 URL 非法、触发安全风控、频率限制、服务错误、超时等）、页面无可提取正文（404 markdown_not_found ）或抓取内容为空时，不计费。<br>接口参数与调用示例详见 联网搜索最佳实践 。<br>​<br>Responses API web_search<br>在 POST /v1/responses 的 tools 中加入 {"type": "web_search"} ：<br>服务端会先判断是否需要搜索，需要时执行搜索并把结果注入模型上下文；<br>服务端实际执行搜索（ output 中出现 web_search_call ）时计一次费用；模型未触发搜索时不计费；<br>search_content_types 包含 image （图片搜索）时不额外收费。<br>详见 Responses API 。<br>​<br>Formula API web-search<br>在 kimi-k3 上通过 Formula API 执行官方 web-search 工具（ POST /v1/formulas/{uri}/fibers ），每次执行计一次费用。详见 如何在 Kimi API 中使用官方工具 。<br>此页面对您有帮助吗？<br>是<br>否<br>批量推理定价<br>上一页<br>托管智能体定价<br>下一页<br>⌘ I<br>github website<br>在此页面<br>返回顶部 产品定价<br>计费说明 联网搜索 Basic / 联网搜索 Pro<br>网页抓取<br>Responses API web_search<br>Formula API web-search |
| extraction | 新增 | 未记录 | 未记录 |
| model id mentions | 新增 | 未记录 | 空列表 |
| plan or price mentions | 新增 | 未记录 | 空列表 |
| scope | 新增 | 未记录 | pricing |
| 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-pricing |
| source ref | 新增 | 未记录 | moonshotai-websearch-pricing |
| structured records › 第 1 项 › cells | 新增 | 未记录 | • 联网搜索 Basic<br>• POST /v1/tools/search<br>• ￥0.01 / 次<br>• 请求成功（HTTP 200）且 <br>• search_results<br>•  非空 |
| structured records › 第 1 项 › headers | 新增 | 未记录 | • 工具名称<br>• 调用方式<br>• 价格<br>• 计费条件 |
| structured records › 第 1 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 1 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-pricing |
| structured records › 第 1 项 › text | 新增 | 未记录 | 联网搜索 Basic &#124; POST /v1/tools/search &#124; ￥0.01 / 次 &#124; 请求成功（HTTP 200）且  &#124; search_results &#124;  非空 |
| structured records › 第 2 项 › cells | 新增 | 未记录 | • 联网搜索 Pro<br>• POST /v1/tools/search_pro<br>• ￥0.015 / 次<br>• 请求成功（HTTP 200）且 <br>• search_results<br>•  非空 |
| structured records › 第 2 项 › headers | 新增 | 未记录 | • 工具名称<br>• 调用方式<br>• 价格<br>• 计费条件 |
| structured records › 第 2 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 2 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-pricing |
| structured records › 第 2 项 › text | 新增 | 未记录 | 联网搜索 Pro &#124; POST /v1/tools/search_pro &#124; ￥0.015 / 次 &#124; 请求成功（HTTP 200）且  &#124; search_results &#124;  非空 |
| structured records › 第 3 项 › cells | 新增 | 未记录 | • 网页抓取<br>• POST /v1/tools/fetch<br>• ￥0.01 / 次<br>• 请求成功（HTTP 200）且返回的 <br>• markdown<br>•  非空白 |
| structured records › 第 3 项 › headers | 新增 | 未记录 | • 工具名称<br>• 调用方式<br>• 价格<br>• 计费条件 |
| structured records › 第 3 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 3 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-pricing |
| structured records › 第 3 项 › text | 新增 | 未记录 | 网页抓取 &#124; POST /v1/tools/fetch &#124; ￥0.01 / 次 &#124; 请求成功（HTTP 200）且返回的  &#124; markdown &#124;  非空白 |
| structured records › 第 4 项 › cells | 新增 | 未记录 | 列表（14 项）<details><summary>展开完整内容</summary><ul><li>Responses API（web_search 工具）</li><li>在 </li><li>POST /v1/responses</li><li> 的 </li><li>tools</li><li> 中声明 </li><li>web_search</li><li>，由服务端执行</li><li>￥0.03 / 次</li><li>实际执行搜索（</li><li>output</li><li> 中出现 </li><li>web_search_call</li><li>）时计费；图片搜索同价</li></ul></details> |
| structured records › 第 4 项 › headers | 新增 | 未记录 | • 工具名称<br>• 调用方式<br>• 价格<br>• 计费条件 |
| structured records › 第 4 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 4 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-pricing |
| structured records › 第 4 项 › text | 新增 | 未记录 | Responses API（web_search 工具） &#124; 在  &#124; POST /v1/responses &#124;  的  &#124; tools &#124;  中声明  &#124; web_search &#124; ，由服务端执行 &#124; ￥0.03 / 次 &#124; 实际执行搜索（ &#124; output &#124;  中出现  &#124; web_search_call &#124; ）时计费；图片搜索同价 |
| structured records › 第 5 项 › cells | 新增 | 未记录 | • Formula API（web-search 工具）<br>• 执行 <br>• moonshot/web-search:latest<br>• ￥0.03 / 次<br>• 每次执行（<br>• POST /v1/formulas/<br>• {uri}<br>• /fibers<br>• ）计费 |
| structured records › 第 5 项 › headers | 新增 | 未记录 | • 工具名称<br>• 调用方式<br>• 价格<br>• 计费条件 |
| structured records › 第 5 项 › section | 新增 | 未记录 | 官方 HTML 定价表 |
| structured records › 第 5 项 › 来源 ID（source_id） | 新增 | 未记录 | moonshotai-websearch-pricing |
| structured records › 第 5 项 › text | 新增 | 未记录 | Formula API（web-search 工具） &#124; 执行  &#124; moonshot/web-search:latest &#124; ￥0.03 / 次 &#124; 每次执行（ &#124; POST /v1/formulas/ &#124; {uri} &#124; /fibers &#124; ）计费 |
| tables | 新增 | 未记录 | 空列表 |
| title | 新增 | 未记录 | 联网搜索定价 - Kimi API 开放平台 |

### 待核对项目

#### 项目 / moonshot-catalog-and-prices-not-mapped-to-service-facts

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。 |
| evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。 |
| evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。 |
| evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 市场=global 的官方当前目录支持 Offering 供应范围。 |
| evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。 |
| evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。 |
| evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 市场=cn 的官方当前目录支持 Offering 供应范围。 |
| evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 该协议的模型列表、请求参数和响应结构用于映射 Route Operation；未映射的联合类型与完整嵌套约束保留 Review。 |
| evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| ID（id） | 新增 | 未记录 | moonshot-catalog-and-prices-not-mapped-to-service-facts |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 当前目录已按市场映射为 listed_current Offering；协议文档中明确声明的模型级 Route 已按协议分别生成 Operation，直接类型请求参数、messages/input 输入项和结构化响应外层字段已提取。oneOf 联合类型、复杂嵌套消息/媒体结构、完整输出约束、工具响应必需性及错误边界仍在 Review。 |

#### 项目 / moonshot-membership-plan-pricing-not-mapped

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| evidence › 记录 moonshotai-batch-pricing › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| evidence › 记录 moonshotai-global-batch-create-api › source ref | 新增 | 未记录 | moonshotai-global-batch-create-api |
| evidence › 记录 moonshotai-global-batch-pricing › source ref | 新增 | 未记录 | moonshotai-global-batch-pricing |
| ID（id） | 新增 | 未记录 | moonshot-membership-plan-pricing-not-mapped |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | Batch 按官方支持型号、异步创建 API 和标准模型价格 60% 映射为独立批处理 Operation 定价；会员订阅计划仍需与 API 按量价格分别核对。 |

#### 项目 / moonshot-token-price-unparsed-1

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | kimi-k2.7-code &#124; ¥6.50 / MTok &#124; ¥27.00 / MTok &#124; ¥1.30 / MTok |
| evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| ID（id） | 新增 | 未记录 | moonshot-token-price-unparsed-1 |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方 Token 价格行「kimi-k2.7-code」未能可靠归一；保留在来源观察中，不生成 PriceFact。 |

#### 项目 / moonshot-token-price-unparsed-2

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | kimi-k2.7-code-highspeed &#124; ¥13.00 / MTok &#124; ¥54.00 / MTok &#124; ¥2.60 / MTok |
| evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| ID（id） | 新增 | 未记录 | moonshot-token-price-unparsed-2 |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方 Token 价格行「kimi-k2.7-code-highspeed」未能可靠归一；保留在来源观察中，不生成 PriceFact。 |

#### 项目 / moonshot-token-price-unparsed-3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | kimi-k2.6 &#124; ¥6.50 / MTok &#124; ¥27.00 / MTok &#124; ¥1.10 / MTok |
| evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| ID（id） | 新增 | 未记录 | moonshot-token-price-unparsed-3 |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方 Token 价格行「kimi-k2.6」未能可靠归一；保留在来源观察中，不生成 PriceFact。 |

#### 项目 / moonshot-token-price-unparsed-4

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | kimi-k2.7-code &#124; $0.95 / MTok &#124; $4.00 / MTok &#124; $0.19 / MTok |
| evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| ID（id） | 新增 | 未记录 | moonshot-token-price-unparsed-4 |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方 Token 价格行「kimi-k2.7-code」未能可靠归一；保留在来源观察中，不生成 PriceFact。 |

#### 项目 / moonshot-token-price-unparsed-5

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | kimi-k2.7-code-highspeed &#124; $1.90 / MTok &#124; $8.00 / MTok &#124; $0.38 / MTok |
| evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| ID（id） | 新增 | 未记录 | moonshot-token-price-unparsed-5 |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方 Token 价格行「kimi-k2.7-code-highspeed」未能可靠归一；保留在来源观察中，不生成 PriceFact。 |

#### 项目 / moonshot-token-price-unparsed-6

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | kimi-k2.6 &#124; $0.95 / MTok &#124; $4.00 / MTok &#124; $0.16 / MTok |
| evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| ID（id） | 新增 | 未记录 | moonshot-token-price-unparsed-6 |
| 类别（kind） | 新增 | 未记录 | unparsed_fact |
| message | 新增 | 未记录 | 官方 Token 价格行「kimi-k2.6」未能可靠归一；保留在来源观察中，不生成 PriceFact。 |

#### 项目 / moonshot-tool-response-contract-moonshotai-global-webfetch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-global-webfetch-api › assertion | 新增 | 未记录 | 响应必填字段：url, markdown, title；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 404, 408, 429, 500, 502, 504 |
| evidence › 记录 moonshotai-global-webfetch-api › source ref | 新增 | 未记录 | moonshotai-global-webfetch-api |
| ID（id） | 新增 | 未记录 | moonshot-tool-response-contract-moonshotai-global-webfetch-api |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 响应必填字段：url, markdown, title；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 404, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。 |
| subject ref | 新增 | 未记录 | moonshotai-global-webfetch-api |

#### 项目 / moonshot-tool-response-contract-moonshotai-global-websearch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | search_results 语义：List of search results; an empty array when nothing matches.；响应必填字段：search_results；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 408, 429, 500, 502, 504 |
| evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| ID（id） | 新增 | 未记录 | moonshot-tool-response-contract-moonshotai-global-websearch-api |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | search_results 语义：List of search results; an empty array when nothing matches.；响应必填字段：search_results；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。 |
| subject ref | 新增 | 未记录 | moonshotai-global-websearch-api |

#### 项目 / moonshot-tool-response-contract-moonshotai-webfetch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-webfetch-api › assertion | 新增 | 未记录 | 响应必填字段：url, markdown, title；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 404, 408, 429, 500, 502, 504 |
| evidence › 记录 moonshotai-webfetch-api › source ref | 新增 | 未记录 | moonshotai-webfetch-api |
| ID（id） | 新增 | 未记录 | moonshot-tool-response-contract-moonshotai-webfetch-api |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | 响应必填字段：url, markdown, title；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 404, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。 |
| subject ref | 新增 | 未记录 | moonshotai-webfetch-api |

#### 项目 / moonshot-tool-response-contract-moonshotai-websearch-api

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | search_results 语义：搜索结果列表；无结果时为空数组。；响应必填字段：search_results；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 408, 429, 500, 502, 504 |
| evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| ID（id） | 新增 | 未记录 | moonshot-tool-response-contract-moonshotai-websearch-api |
| 类别（kind） | 新增 | 未记录 | unsupported_mapping |
| message | 新增 | 未记录 | search_results 语义：搜索结果列表；无结果时为空数组。；响应必填字段：search_results；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。 |
| subject ref | 新增 | 未记录 | moonshotai-websearch-api |

### 市场 / cn

#### Capability / web-fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述列出该独立工具端点。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | web-fetch |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 该工具有独立 REST 端点，不绑定 Canonical Model。 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| prices | 新增 | 未记录 | 空列表 |

#### Capability / web-fetch › Operation / web_fetch-cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | web_fetch-cn |
| 输入（input） › evidence › 记录 moonshotai-webfetch-api › assertion | 新增 | 未记录 | 文本输入项及原文说明从官方 OpenAPI Request Schema 提取。 |
| 输入（input） › evidence › 记录 moonshotai-webfetch-api › source ref | 新增 | 未记录 | moonshotai-webfetch-api |
| 输入（input） › 记录 url › 说明（description） | 新增 | 未记录 | 要抓取的网页 URL，仅支持 http 和 https 协议。 |
| 输入（input） › 记录 url › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 输入（input） › 记录 url › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| 输出（output） › evidence › 记录 moonshotai-webfetch-api › assertion | 新增 | 未记录 | 输出字段从官方 OpenAPI 响应对象 Schema 提取。 |
| 输出（output） › evidence › 记录 moonshotai-webfetch-api › source ref | 新增 | 未记录 | moonshotai-webfetch-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • url<br>• markdown<br>• title |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 moonshotai-webfetch-api › assertion | 新增 | 未记录 | 请求参数从官方 OpenAPI 对象 Schema 逐字段提取。 |
| 参数（parameters） › evidence › 记录 moonshotai-webfetch-api › source ref | 新增 | 未记录 | moonshotai-webfetch-api |
| 参数（parameters） › 记录 url › 说明（description） | 新增 | 未记录 | 要抓取的网页 URL，仅支持 http 和 https 协议。 |
| 参数（parameters） › 记录 url › evidence refs | 新增 | 未记录 | • moonshotai-webfetch-api |
| 参数（parameters） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 参数（parameters） › 记录 url › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 url › 参数路径（route_mappings） | 新增 | 未记录 | • /request/url |
| 参数（parameters） › 记录 url › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 web_fetch-cn › documentation › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述链接到该端点的专用文档。 |
| routes › 记录 web_fetch-cn › documentation › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/tools-fetch |
| routes › 记录 web_fetch-cn › endpoint ref › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 该端点使用官方 API 服务根地址。 |
| routes › 记录 web_fetch-cn › endpoint ref › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › endpoint ref | 新增 | 未记录 | moonshot-tools-api-cn |
| routes › 记录 web_fetch-cn › ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-cn › ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › ID（id） | 新增 | 未记录 | web_fetch-cn |
| routes › 记录 web_fetch-cn › HTTP 方法（method） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-cn › HTTP 方法（method） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web_fetch-cn › operation kind › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-cn › operation kind › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › operation kind | 新增 | 未记录 | web_fetch |
| routes › 记录 web_fetch-cn › API 路径（path_template） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-cn › API 路径（path_template） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › API 路径（path_template） | 新增 | 未记录 | /v1/tools/fetch |
| routes › 记录 web_fetch-cn › protocol › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-cn › protocol › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_fetch-cn › protocol | 新增 | 未记录 | kimi-tools |

#### Capability / web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述列出该独立工具端点。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | web-search |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 该工具有独立 REST 端点，不绑定 Canonical Model。 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| 类别（kind） | 新增 | 未记录 | web_search |
| prices | 新增 | 未记录 | 空列表 |

#### Capability / web-search › Operation / web_search_basic-cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | web_search_basic-cn |
| 输入（input） › evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | 文本输入项及原文说明从官方 OpenAPI Request Schema 提取。 |
| 输入（input） › evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 输入（input） › 记录 text_query › 说明（description） | 新增 | 未记录 | 搜索查询文本，不能为空。 |
| 输入（input） › 记录 text_query › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 输入（input） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| 类别（kind） | 新增 | 未记录 | web_search_basic |
| 输出（output） › evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | 输出字段从官方 OpenAPI 响应对象 Schema 提取。 |
| 输出（output） › evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • search_results |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | 请求参数从官方 OpenAPI 对象 Schema 逐字段提取。 |
| 参数（parameters） › evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 参数（parameters） › 记录 include_content › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › 说明（description） | 新增 | 未记录 | 是否在结果项 text 中返回网页正文，默认 false。 |
| 参数（parameters） › 记录 include_content › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 include_content › 名称（name） | 新增 | 未记录 | include_content |
| 参数（parameters） › 记录 include_content › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › 参数路径（route_mappings） | 新增 | 未记录 | • /request/include_content |
| 参数（parameters） › 记录 include_content › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 limit › 默认值（default） | 新增 | 未记录 | 5 |
| 参数（parameters） › 记录 limit › 说明（description） | 新增 | 未记录 | 最多返回结果数，默认 5，取值范围 1-20。 |
| 参数（parameters） › 记录 limit › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 limit › 最大值（max） | 新增 | 未记录 | 20 |
| 参数（parameters） › 记录 limit › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • /request/limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 text_query › 说明（description） | 新增 | 未记录 | 搜索查询文本，不能为空。 |
| 参数（parameters） › 记录 text_query › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 参数（parameters） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 text_query › 参数路径（route_mappings） | 新增 | 未记录 | • /request/text_query |
| 参数（parameters） › 记录 text_query › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 timeout_seconds › 说明（description） | 新增 | 未记录 | 搜索超时时间，单位秒，取值范围 1-60。不传则不设置单独超时。 |
| 参数（parameters） › 记录 timeout_seconds › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 timeout_seconds › 最大值（max） | 新增 | 未记录 | 60 |
| 参数（parameters） › 记录 timeout_seconds › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 timeout_seconds › 名称（name） | 新增 | 未记录 | timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 timeout_seconds › 参数路径（route_mappings） | 新增 | 未记录 | • /request/timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 类型（type） | 新增 | 未记录 | integer |
| routes › 记录 web_search_basic-cn › documentation › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述链接到该端点的专用文档。 |
| routes › 记录 web_search_basic-cn › documentation › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/tools-search |
| routes › 记录 web_search_basic-cn › endpoint ref › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 该端点使用官方 API 服务根地址。 |
| routes › 记录 web_search_basic-cn › endpoint ref › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › endpoint ref | 新增 | 未记录 | moonshot-tools-api-cn |
| routes › 记录 web_search_basic-cn › ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-cn › ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › ID（id） | 新增 | 未记录 | web_search_basic-cn |
| routes › 记录 web_search_basic-cn › HTTP 方法（method） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-cn › HTTP 方法（method） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web_search_basic-cn › operation kind › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-cn › operation kind › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › operation kind | 新增 | 未记录 | web_search_basic |
| routes › 记录 web_search_basic-cn › API 路径（path_template） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-cn › API 路径（path_template） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › API 路径（path_template） | 新增 | 未记录 | /v1/tools/search |
| routes › 记录 web_search_basic-cn › protocol › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-cn › protocol › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_basic-cn › protocol | 新增 | 未记录 | kimi-tools |

#### Capability / web-search › Operation / web_search_pro-cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | web_search_pro-cn |
| 输入（input） › evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | 文本输入项及原文说明从官方 OpenAPI Request Schema 提取。 |
| 输入（input） › evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 输入（input） › 记录 text_query › 说明（description） | 新增 | 未记录 | 搜索查询文本，不能为空。 |
| 输入（input） › 记录 text_query › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 输入（input） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| 类别（kind） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| 类别（kind） | 新增 | 未记录 | web_search_pro |
| 输出（output） › evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | 输出字段从官方 OpenAPI 响应对象 Schema 提取。 |
| 输出（output） › evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • search_results |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 moonshotai-websearch-api › assertion | 新增 | 未记录 | 请求参数从官方 OpenAPI 对象 Schema 逐字段提取。 |
| 参数（parameters） › evidence › 记录 moonshotai-websearch-api › source ref | 新增 | 未记录 | moonshotai-websearch-api |
| 参数（parameters） › 记录 include_content › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › 说明（description） | 新增 | 未记录 | 是否在结果项 text 中返回网页正文，默认 false。 |
| 参数（parameters） › 记录 include_content › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 include_content › 名称（name） | 新增 | 未记录 | include_content |
| 参数（parameters） › 记录 include_content › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › 参数路径（route_mappings） | 新增 | 未记录 | • /request/include_content |
| 参数（parameters） › 记录 include_content › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 limit › 默认值（default） | 新增 | 未记录 | 5 |
| 参数（parameters） › 记录 limit › 说明（description） | 新增 | 未记录 | 最多返回结果数，默认 5，取值范围 1-20。 |
| 参数（parameters） › 记录 limit › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 limit › 最大值（max） | 新增 | 未记录 | 20 |
| 参数（parameters） › 记录 limit › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • /request/limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 text_query › 说明（description） | 新增 | 未记录 | 搜索查询文本，不能为空。 |
| 参数（parameters） › 记录 text_query › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 参数（parameters） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 text_query › 参数路径（route_mappings） | 新增 | 未记录 | • /request/text_query |
| 参数（parameters） › 记录 text_query › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 timeout_seconds › 说明（description） | 新增 | 未记录 | 搜索超时时间，单位秒，取值范围 1-60。不传则不设置单独超时。 |
| 参数（parameters） › 记录 timeout_seconds › evidence refs | 新增 | 未记录 | • moonshotai-websearch-api |
| 参数（parameters） › 记录 timeout_seconds › 最大值（max） | 新增 | 未记录 | 60 |
| 参数（parameters） › 记录 timeout_seconds › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 timeout_seconds › 名称（name） | 新增 | 未记录 | timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 timeout_seconds › 参数路径（route_mappings） | 新增 | 未记录 | • /request/timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 类型（type） | 新增 | 未记录 | integer |
| routes › 记录 web_search_pro-cn › documentation › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述链接到该端点的专用文档。 |
| routes › 记录 web_search_pro-cn › documentation › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/tools-search-pro |
| routes › 记录 web_search_pro-cn › endpoint ref › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 该端点使用官方 API 服务根地址。 |
| routes › 记录 web_search_pro-cn › endpoint ref › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › endpoint ref | 新增 | 未记录 | moonshot-tools-api-cn |
| routes › 记录 web_search_pro-cn › ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-cn › ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › ID（id） | 新增 | 未记录 | web_search_pro-cn |
| routes › 记录 web_search_pro-cn › HTTP 方法（method） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-cn › HTTP 方法（method） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web_search_pro-cn › operation kind › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-cn › operation kind › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › operation kind | 新增 | 未记录 | web_search_pro |
| routes › 记录 web_search_pro-cn › API 路径（path_template） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-cn › API 路径（path_template） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › API 路径（path_template） | 新增 | 未记录 | /v1/tools/search_pro |
| routes › 记录 web_search_pro-cn › protocol › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-cn › protocol › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| routes › 记录 web_search_pro-cn › protocol | 新增 | 未记录 | kimi-tools |

#### API endpoint / anthropic-compatible-cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述在「Anthropic Messages」协议行列出该 Base URL。 |
| api region › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| api region | 新增 | 未记录 | 中国 |
| API 地址（base_url） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述在「Anthropic Messages」协议行列出该 Base URL。 |
| API 地址（base_url） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| API 地址（base_url） | 新增 | 未记录 | https://api.moonshot.cn/anthropic |
| documentation › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方协议概述链接到该接口文档：Anthropic Messages。 |
| documentation › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/messages |
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述在「Anthropic Messages」协议行列出该 Base URL。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | anthropic-compatible-cn |

#### API endpoint / moonshot-tools-api-cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述。 |
| api region › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| api region | 新增 | 未记录 | 中国 |
| API 地址（base_url） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 联网搜索与网页抓取 REST 路由使用官方服务根地址。 |
| API 地址（base_url） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| API 地址（base_url） | 新增 | 未记录 | https://api.moonshot.cn |
| documentation › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述说明服务地址并链接该市场的工具接口文档。 |
| documentation › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/overview |
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方 API 概述将 https://api.moonshot.cn 列为服务地址。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | moonshot-tools-api-cn |

#### API endpoint / openai-compatible-cn

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述在「OpenAI Chat Completions」协议行列出该 Base URL。 |
| api region › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| api region | 新增 | 未记录 | 中国 |
| API 地址（base_url） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述在「OpenAI Chat Completions」协议行列出该 Base URL。 |
| API 地址（base_url） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| API 地址（base_url） | 新增 | 未记录 | https://api.moonshot.cn/v1 |
| documentation › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方协议概述链接到该接口文档：OpenAI Chat Completions。 |
| documentation › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/chat |
| ID（id） › evidence › 记录 moonshotai-api-overview › assertion | 新增 | 未记录 | 官方中国 API 概述在「OpenAI Chat Completions」协议行列出该 Base URL。 |
| ID（id） › evidence › 记录 moonshotai-api-overview › source ref | 新增 | 未记录 | moonshotai-api-overview |
| ID（id） | 新增 | 未记录 | openai-compatible-cn |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 型号目录来自中国开放平台。 |
| ID（id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| ID（id） | 新增 | 未记录 | cn |
| 名称（name） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 按官方中国市场模型目录的市场范围登记 Service 名称。 |
| 名称（name） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 名称（name） | 新增 | 未记录 | 中国市场 |
| plans | 新增 | 未记录 | 空列表 |

#### Model / kimi-k3.1-pro-highspeed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 官方模型目录的「模型名称」列以该型号 ID 作为名称。 |
| 展示名称（display_name） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 展示名称（display_name） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。 |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created<br>• model<br>• choices<br>• usage |
| operations › 记录 text_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 名称（name） | 新增 | 未记录 | logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 名称（name） | 新增 | 未记录 | max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | 已弃用，请使用 max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | 模型 ID |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 说明（description） | 新增 | 未记录 | Predicted Output 配置。当模型响应的大部分内容可以提前预知时（例如重新生成仅有少量修改的文件），可显著降低响应延迟 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 名称（name） | 新增 | 未记录 | prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 参数路径（route_mappings） | 新增 | 未记录 | • /prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 说明（description） | 新增 | 未记录 | 上下文缓存写入选项。不传时默认开启缓存写入（5m 档）：系统自动将请求前缀写入 5m 档缓存 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 可选值（enum） | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 名称（name） | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 说明（description） | 新增 | 未记录 | 用于检测可能违反使用政策的用户的稳定标识符。应为唯一标识每个用户的字符串。建议对用户名或邮箱进行哈希处理以避免发送可识别信息 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 是否以流式方式返回响应，默认 false |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 说明（description） | 新增 | 未记录 | 流式响应选项 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 名称（name） | 新增 | 未记录 | stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 参数路径（route_mappings） | 新增 | 未记录 | • /stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最大值（max） | 新增 | 未记录 | 20 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最小值（min） | 新增 | 未记录 | 0 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 名称（name） | 新增 | 未记录 | top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/chat |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） | 新增 | 未记录 | chat-completions-cn |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › supported | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › ID（id） | 新增 | 未记录 | text_generation_messages |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• type<br>• role<br>• model<br>• content<br>• usage |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 名称（name） | 新增 | 未记录 | cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 参数路径（route_mappings） | 新增 | 未记录 | • /cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | 本次生成的最大 Token 数，必填。达到上限而未结束时 `stop_reason` 为 `max_tokens`。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。若最后一条为 assistant 消息，模型会从该消息内容之后继续生成（Partial Mode）。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 说明（description） | 新增 | 未记录 | 输出配置：推理强度与结构化输出 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 名称（name） | 新增 | 未记录 | output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 参数路径（route_mappings） | 新增 | 未记录 | • /output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 说明（description） | 新增 | 未记录 | 停用词，完全匹配时停止输出，匹配到的词本身不会被输出。最多 5 个，每个不超过 32 字节。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 名称（name） | 新增 | 未记录 | stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 参数路径（route_mappings） | 新增 | 未记录 | • /stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 是否以 Server-Sent Events 流式返回，默认 false |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref | 新增 | 未记录 | anthropic-compatible-cn |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） | 新增 | 未记录 | messages-cn |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › ID（id） | 新增 | 未记录 | text_generation_responses |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created_at<br>• status<br>• model<br>• output<br>• parallel_tool_calls<br>• store<br>• prompt_cache_options |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 名称（name） | 新增 | 未记录 | include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 参数路径（route_mappings） | 新增 | 未记录 | • /include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 说明（description） | 新增 | 未记录 | 顶层系统指令，作为最靠前的指令生效。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 名称（name） | 新增 | 未记录 | max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 说明（description） | 新增 | 未记录 | 上下文缓存标识，同一会话使用相同取值可提升缓存命中率。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 说明（description） | 新增 | 未记录 | 上下文缓存写入选项。不传时默认开启缓存写入（5m 档）：系统自动将请求前缀写入 5m 档缓存 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 说明（description） | 新增 | 未记录 | 推理相关配置。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 名称（name） | 新增 | 未记录 | reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 说明（description） | 新增 | 未记录 | 用于检测可能违反使用政策的用户的稳定标识符。应为唯一标识每个用户的字符串。建议对用户名或邮箱进行哈希处理以避免发送可识别信息 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 为 true 时以 SSE 事件流返回响应。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 说明（description） | 新增 | 未记录 | 输出文本配置。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 参数路径（route_mappings） | 新增 | 未记录 | • /text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） | 新增 | 未记录 | responses-cn |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning.effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning<br>• effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › supported | 新增 | 未记录 | 是 |
| prices › 记录 kimi-k3.1-pro-highspeed › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3.1-pro-highspeed › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › ttl | 新增 | 未记录 | 1h |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] | 新增 | 未记录 | 52.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › ttl | 新增 | 未记录 | 5min |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] | 新增 | 未记录 | 26.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 1.30 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 26.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 136.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-chat-pricing › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro-highspeed` &#124; Kimi K3.1 Pro 的高速版模型，约为 K3.1 Pro 的 2～3 倍速度。 &#124; |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 官方中国区当前模型目录列出该型号。 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro-highspeed` &#124; Kimi K3.1 Pro 的高速版模型，约为 K3.1 Pro 的 2～3 倍速度。 &#124; |
| supply observations › 记录 0 › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / kimi-k3.1-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 官方模型目录的「模型名称」列以该型号 ID 作为名称。 |
| 展示名称（display_name） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 展示名称（display_name） | 新增 | 未记录 | kimi-k3.1-pro |
| operations › 记录 batch_inference › ID（id） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch API 明确支持 kimi-k3.1-pro，并列出创建批处理任务的请求 Schema。 |
| operations › 记录 batch_inference › ID（id） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › ID（id） | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › 类别（kind） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 对 JSONL 输入文件异步执行批量 Chat Completions。 |
| operations › 记录 batch_inference › 类别（kind） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › 类别（kind） | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › 输出（output） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 创建接口返回含任务 ID、状态和结果文件 ID 的 BatchObject。 |
| operations › 记录 batch_inference › 输出（output） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• status<br>• output_file_id<br>• error_file_id |
| operations › 记录 batch_inference › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 batch_inference › 参数（parameters） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 参数从官方 OpenAPI 请求体 Schema 读取；未将示例或默认值扩展为额外约束。 |
| operations › 记录 batch_inference › 参数（parameters） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 名称（name） | 新增 | 未记录 | completion_window |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 参数路径（route_mappings） | 新增 | 未记录 | • /completion_window |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 可选值（enum） | 新增 | 未记录 | • /v1/chat/completions |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 名称（name） | 新增 | 未记录 | endpoint |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 参数路径（route_mappings） | 新增 | 未记录 | • /endpoint |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 名称（name） | 新增 | 未记录 | input_file_id |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 参数路径（route_mappings） | 新增 | 未记录 | • /input_file_id |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › documentation › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch 创建 API 文档。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › documentation › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/batch-create |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › endpoint ref › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 批处理创建路由与同市场 OpenAI 兼容 API 共用服务 Base URL。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › endpoint ref › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › ID（id） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch API 明确支持 kimi-k3.1-pro，并列出创建批处理任务的请求 Schema。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › ID（id） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › ID（id） | 新增 | 未记录 | batch-inference-cn |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › HTTP 方法（method） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 OpenAPI 声明 POST /v1/batches。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › HTTP 方法（method） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › operation kind › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch API 明确支持 kimi-k3.1-pro，并列出创建批处理任务的请求 Schema。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › operation kind › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › operation kind | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › API 路径（path_template） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | API Base URL 已包含 /v1 前缀，因此 Route 路径为 /batches。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › API 路径（path_template） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › API 路径（path_template） | 新增 | 未记录 | /batches |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › protocol › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 API 文档将此接口定义为批处理任务创建。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › protocol › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › protocol | 新增 | 未记录 | batch |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › provider model ids › evidence › 记录 moonshotai-batch-pricing › assertion | 新增 | 未记录 | 官方 Batch 定价页将 kimi-k3.1-pro 列入支持型号。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › provider model ids › evidence › 记录 moonshotai-batch-pricing › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 batch_inference › schema operation › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 BatchObject 包含异步任务 ID 与状态。 |
| operations › 记录 batch_inference › schema operation › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › schema operation › execution › documentation | 新增 | 未记录 | 批处理任务以状态字段跟踪执行进度。 |
| operations › 记录 batch_inference › schema operation › execution › mode | 新增 | 未记录 | async_job |
| operations › 记录 batch_inference › schema operation › ID（id） | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › schema operation › 类别（kind） | 新增 | 未记录 | batch_inference |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。 |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created<br>• model<br>• choices<br>• usage |
| operations › 记录 text_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 名称（name） | 新增 | 未记录 | logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 名称（name） | 新增 | 未记录 | max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | 已弃用，请使用 max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | 模型 ID |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 说明（description） | 新增 | 未记录 | Predicted Output 配置。当模型响应的大部分内容可以提前预知时（例如重新生成仅有少量修改的文件），可显著降低响应延迟 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 名称（name） | 新增 | 未记录 | prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 参数路径（route_mappings） | 新增 | 未记录 | • /prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 说明（description） | 新增 | 未记录 | 上下文缓存写入选项。不传时默认开启缓存写入（5m 档）：系统自动将请求前缀写入 5m 档缓存 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 可选值（enum） | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 名称（name） | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 说明（description） | 新增 | 未记录 | 用于检测可能违反使用政策的用户的稳定标识符。应为唯一标识每个用户的字符串。建议对用户名或邮箱进行哈希处理以避免发送可识别信息 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 是否以流式方式返回响应，默认 false |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 说明（description） | 新增 | 未记录 | 流式响应选项 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 名称（name） | 新增 | 未记录 | stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 参数路径（route_mappings） | 新增 | 未记录 | • /stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最大值（max） | 新增 | 未记录 | 20 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最小值（min） | 新增 | 未记录 | 0 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 名称（name） | 新增 | 未记录 | top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/chat |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） | 新增 | 未记录 | chat-completions-cn |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › supported | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › ID（id） | 新增 | 未记录 | text_generation_messages |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• type<br>• role<br>• model<br>• content<br>• usage |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 名称（name） | 新增 | 未记录 | cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 参数路径（route_mappings） | 新增 | 未记录 | • /cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | 本次生成的最大 Token 数，必填。达到上限而未结束时 `stop_reason` 为 `max_tokens`。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。若最后一条为 assistant 消息，模型会从该消息内容之后继续生成（Partial Mode）。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 说明（description） | 新增 | 未记录 | 输出配置：推理强度与结构化输出 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 名称（name） | 新增 | 未记录 | output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 参数路径（route_mappings） | 新增 | 未记录 | • /output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 说明（description） | 新增 | 未记录 | 停用词，完全匹配时停止输出，匹配到的词本身不会被输出。最多 5 个，每个不超过 32 字节。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 名称（name） | 新增 | 未记录 | stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 参数路径（route_mappings） | 新增 | 未记录 | • /stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 是否以 Server-Sent Events 流式返回，默认 false |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref | 新增 | 未记录 | anthropic-compatible-cn |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） | 新增 | 未记录 | messages-cn |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › ID（id） | 新增 | 未记录 | text_generation_responses |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created_at<br>• status<br>• model<br>• output<br>• parallel_tool_calls<br>• store<br>• prompt_cache_options |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 名称（name） | 新增 | 未记录 | include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 参数路径（route_mappings） | 新增 | 未记录 | • /include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 说明（description） | 新增 | 未记录 | 顶层系统指令，作为最靠前的指令生效。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 名称（name） | 新增 | 未记录 | max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 说明（description） | 新增 | 未记录 | 上下文缓存标识，同一会话使用相同取值可提升缓存命中率。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 说明（description） | 新增 | 未记录 | 上下文缓存写入选项。不传时默认开启缓存写入（5m 档）：系统自动将请求前缀写入 5m 档缓存 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 说明（description） | 新增 | 未记录 | 推理相关配置。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 名称（name） | 新增 | 未记录 | reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 说明（description） | 新增 | 未记录 | 用于检测可能违反使用政策的用户的稳定标识符。应为唯一标识每个用户的字符串。建议对用户名或邮箱进行哈希处理以避免发送可识别信息 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 为 true 时以 SSE 事件流返回响应。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 说明（description） | 新增 | 未记录 | 输出文本配置。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 参数路径（route_mappings） | 新增 | 未记录 | • /text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） | 新增 | 未记录 | responses-cn |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning.effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning<br>• effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › supported | 新增 | 未记录 | 是 |
| prices › 第 1 项 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 第 1 项 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 13.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 68.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 1.30 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 5min |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 13.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 1h |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 26.00 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| prices › 第 2 项 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 第 2 项 › operation ref › evidence › 第 1 项 › assertion | 新增 | 未记录 | Batch 价格属于对应模型的异步批处理 Operation。 |
| prices › 第 2 项 › operation ref › evidence › 第 1 项 › locator | 新增 | 未记录 | batch-discount |
| prices › 第 2 项 › operation ref › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › operation ref | 新增 | 未记录 | batch_inference |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Batch 价格按标准模型价格的 60% 计算。 |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | batch-pricing/60-percent |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 Batch 定价声明按标准模型价格的 60% 收費。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 2 项 › locator | 新增 | 未记录 | batch-pricing/60-percent |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 2 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 Batch 定价声明按标准模型价格的 60% 收費。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 2 项 › locator | 新增 | 未记录 | batch-pricing/60-percent |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 2 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 7.8 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 40.8 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.78 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 5min |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 7.8 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 1h |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 15.6 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3.1-pro |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro` &#124; Kimi K3.1 系列的首个模型，也是 Kimi 迄今能力最强的旗舰模型：3 万亿级参数，原生支持视觉理解，100 万 token 上下文窗口，代码、3D 创作、金融研究与建模等能力显著提升。 &#124; |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 官方中国区当前模型目录列出该型号。 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro` &#124; Kimi K3.1 系列的首个模型，也是 Kimi 迄今能力最强的旗舰模型：3 万亿级参数，原生支持视觉理解，100 万 token 上下文窗口，代码、3D 创作、金融研究与建模等能力显著提升。 &#124; |
| supply observations › 记录 0 › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / kimi-k3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 官方模型目录的「模型名称」列以该型号 ID 作为名称。 |
| 展示名称（display_name） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 展示名称（display_name） | 新增 | 未记录 | kimi-k3 |
| operations › 记录 batch_inference › ID（id） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch API 明确支持 kimi-k3，并列出创建批处理任务的请求 Schema。 |
| operations › 记录 batch_inference › ID（id） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › ID（id） | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › 类别（kind） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 对 JSONL 输入文件异步执行批量 Chat Completions。 |
| operations › 记录 batch_inference › 类别（kind） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › 类别（kind） | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › 输出（output） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 创建接口返回含任务 ID、状态和结果文件 ID 的 BatchObject。 |
| operations › 记录 batch_inference › 输出（output） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• status<br>• output_file_id<br>• error_file_id |
| operations › 记录 batch_inference › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 batch_inference › 参数（parameters） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 参数从官方 OpenAPI 请求体 Schema 读取；未将示例或默认值扩展为额外约束。 |
| operations › 记录 batch_inference › 参数（parameters） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 名称（name） | 新增 | 未记录 | completion_window |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 参数路径（route_mappings） | 新增 | 未记录 | • /completion_window |
| operations › 记录 batch_inference › 参数（parameters） › 记录 completion_window › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 可选值（enum） | 新增 | 未记录 | • /v1/chat/completions |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 名称（name） | 新增 | 未记录 | endpoint |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 参数路径（route_mappings） | 新增 | 未记录 | • /endpoint |
| operations › 记录 batch_inference › 参数（parameters） › 记录 endpoint › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 名称（name） | 新增 | 未记录 | input_file_id |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 参数路径（route_mappings） | 新增 | 未记录 | • /input_file_id |
| operations › 记录 batch_inference › 参数（parameters） › 记录 input_file_id › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-batch-create-api |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 batch_inference › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › documentation › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch 创建 API 文档。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › documentation › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/batch-create |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › endpoint ref › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 批处理创建路由与同市场 OpenAI 兼容 API 共用服务 Base URL。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › endpoint ref › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › ID（id） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch API 明确支持 kimi-k3，并列出创建批处理任务的请求 Schema。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › ID（id） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › ID（id） | 新增 | 未记录 | batch-inference-cn |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › HTTP 方法（method） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 OpenAPI 声明 POST /v1/batches。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › HTTP 方法（method） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › operation kind › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 Batch API 明确支持 kimi-k3，并列出创建批处理任务的请求 Schema。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › operation kind › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › operation kind | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › API 路径（path_template） › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | API Base URL 已包含 /v1 前缀，因此 Route 路径为 /batches。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › API 路径（path_template） › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › API 路径（path_template） | 新增 | 未记录 | /batches |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › protocol › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 API 文档将此接口定义为批处理任务创建。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › protocol › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › protocol | 新增 | 未记录 | batch |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › provider model ids › evidence › 记录 moonshotai-batch-pricing › assertion | 新增 | 未记录 | 官方 Batch 定价页将 kimi-k3 列入支持型号。 |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › provider model ids › evidence › 记录 moonshotai-batch-pricing › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| operations › 记录 batch_inference › routes › 记录 batch-inference-cn › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 batch_inference › schema operation › evidence › 记录 moonshotai-batch-create-api › assertion | 新增 | 未记录 | 官方 BatchObject 包含异步任务 ID 与状态。 |
| operations › 记录 batch_inference › schema operation › evidence › 记录 moonshotai-batch-create-api › source ref | 新增 | 未记录 | moonshotai-batch-create-api |
| operations › 记录 batch_inference › schema operation › execution › documentation | 新增 | 未记录 | 批处理任务以状态字段跟踪执行进度。 |
| operations › 记录 batch_inference › schema operation › execution › mode | 新增 | 未记录 | async_job |
| operations › 记录 batch_inference › schema operation › ID（id） | 新增 | 未记录 | batch_inference |
| operations › 记录 batch_inference › schema operation › 类别（kind） | 新增 | 未记录 | batch_inference |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。 |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created<br>• model<br>• choices<br>• usage |
| operations › 记录 text_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 名称（name） | 新增 | 未记录 | logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 名称（name） | 新增 | 未记录 | max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | 已弃用，请使用 max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | 模型 ID |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 说明（description） | 新增 | 未记录 | Predicted Output 配置。当模型响应的大部分内容可以提前预知时（例如重新生成仅有少量修改的文件），可显著降低响应延迟 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 名称（name） | 新增 | 未记录 | prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 参数路径（route_mappings） | 新增 | 未记录 | • /prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 说明（description） | 新增 | 未记录 | 上下文缓存写入选项。不传时默认开启缓存写入（5m 档）：系统自动将请求前缀写入 5m 档缓存 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 可选值（enum） | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 名称（name） | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 说明（description） | 新增 | 未记录 | 用于检测可能违反使用政策的用户的稳定标识符。应为唯一标识每个用户的字符串。建议对用户名或邮箱进行哈希处理以避免发送可识别信息 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 是否以流式方式返回响应，默认 false |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 说明（description） | 新增 | 未记录 | 流式响应选项 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 名称（name） | 新增 | 未记录 | stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 参数路径（route_mappings） | 新增 | 未记录 | • /stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › evidence refs | 新增 | 未记录 | • moonshotai-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最大值（max） | 新增 | 未记录 | 20 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最小值（min） | 新增 | 未记录 | 0 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 名称（name） | 新增 | 未记录 | top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/chat |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › ID（id） | 新增 | 未记录 | chat-completions-cn |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › evidence › 记录 moonshotai-chat-api › assertion | 新增 | 未记录 | 官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › evidence › 记录 moonshotai-chat-api › source ref | 新增 | 未记录 | moonshotai-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-cn › reasoning › supported | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › ID（id） | 新增 | 未记录 | text_generation_messages |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• type<br>• role<br>• model<br>• content<br>• usage |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 名称（name） | 新增 | 未记录 | cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 参数路径（route_mappings） | 新增 | 未记录 | • /cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | 本次生成的最大 Token 数，必填。达到上限而未结束时 `stop_reason` 为 `max_tokens`。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | 对话消息列表。若最后一条为 assistant 消息，模型会从该消息内容之后继续生成（Partial Mode）。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 说明（description） | 新增 | 未记录 | 输出配置：推理强度与结构化输出 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 名称（name） | 新增 | 未记录 | output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 参数路径（route_mappings） | 新增 | 未记录 | • /output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 说明（description） | 新增 | 未记录 | 停用词，完全匹配时停止输出，匹配到的词本身不会被输出。最多 5 个，每个不超过 32 字节。 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 名称（name） | 新增 | 未记录 | stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 参数路径（route_mappings） | 新增 | 未记录 | • /stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 是否以 Server-Sent Events 流式返回，默认 false |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › endpoint ref | 新增 | 未记录 | anthropic-compatible-cn |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › ID（id） | 新增 | 未记录 | messages-cn |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › protocol | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids › evidence › 记录 moonshotai-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids › evidence › 记录 moonshotai-messages-api › source ref | 新增 | 未记录 | moonshotai-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-cn › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › ID（id） | 新增 | 未记录 | text_generation_responses |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created_at<br>• status<br>• model<br>• output<br>• parallel_tool_calls<br>• store<br>• prompt_cache_options |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 名称（name） | 新增 | 未记录 | include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 参数路径（route_mappings） | 新增 | 未记录 | • /include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 说明（description） | 新增 | 未记录 | 顶层系统指令，作为最靠前的指令生效。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 名称（name） | 新增 | 未记录 | max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 说明（description） | 新增 | 未记录 | 上下文缓存标识，同一会话使用相同取值可提升缓存命中率。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 说明（description） | 新增 | 未记录 | 上下文缓存写入选项。不传时默认开启缓存写入（5m 档）：系统自动将请求前缀写入 5m 档缓存 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 说明（description） | 新增 | 未记录 | 推理相关配置。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 名称（name） | 新增 | 未记录 | reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 说明（description） | 新增 | 未记录 | 用于检测可能违反使用政策的用户的稳定标识符。应为唯一标识每个用户的字符串。建议对用户名或邮箱进行哈希处理以避免发送可识别信息 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | 为 true 时以 SSE 事件流返回响应。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 说明（description） | 新增 | 未记录 | 输出文本配置。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 参数路径（route_mappings） | 新增 | 未记录 | • /text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | 模型可调用的工具列表。 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › documentation | 新增 | 未记录 | https://platform.kimi.com/docs/api/responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › endpoint ref | 新增 | 未记录 | openai-compatible-cn |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › ID（id） | 新增 | 未记录 | responses-cn |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › evidence › 记录 moonshotai-responses-api › assertion | 新增 | 未记录 | 官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › evidence › 记录 moonshotai-responses-api › source ref | 新增 | 未记录 | moonshotai-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning.effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning<br>• effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-cn › reasoning › supported | 新增 | 未记录 | 是 |
| prices › 第 1 项 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 第 1 项 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 1 项 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 20.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 100.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 2.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 5min |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 20.00 |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 1h |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 1 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 40.00 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 1 项 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3 |
| prices › 第 2 项 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 第 2 项 › operation ref › evidence › 第 1 项 › assertion | 新增 | 未记录 | Batch 价格属于对应模型的异步批处理 Operation。 |
| prices › 第 2 项 › operation ref › evidence › 第 1 项 › locator | 新增 | 未记录 | batch-discount |
| prices › 第 2 项 › operation ref › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › operation ref | 新增 | 未记录 | batch_inference |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | Batch 价格按标准模型价格的 60% 计算。 |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | batch-pricing/60-percent |
| prices › 第 2 项 › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 Batch 定价声明按标准模型价格的 60% 收費。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 2 项 › locator | 新增 | 未记录 | batch-pricing/60-percent |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › evidence › 第 2 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 2 项 › assertion | 新增 | 未记录 | 官方 Batch 定价声明按标准模型价格的 60% 收費。 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 2 项 › locator | 新增 | 未记录 | batch-pricing/60-percent |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 2 项 › source ref | 新增 | 未记录 | moonshotai-batch-pricing |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 12 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 60 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 1.2 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › ttl | 新增 | 未记录 | 5min |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 4 项 | 新增 | 未记录 | 12 |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › ttl | 新增 | 未记录 | 1h |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 第 2 项 › 价格信息（pricing） › 第 1 项 › rates › 第 5 项 | 新增 | 未记录 | 24 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/kimi-k3 |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） › evidence › 第 1 项 › source ref | 新增 | 未记录 | moonshotai-chat-pricing |
| prices › 第 2 项 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3` &#124; 上一代旗舰模型，全球首个开源的 3 万亿级模型（2.8 万亿参数）；原生支持视觉理解，100 万 token 上下文窗口，面向长程编程、知识工作和深度推理等前沿智能场景而设计。 &#124; |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | 官方中国区当前模型目录列出该型号。 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 moonshotai-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3` &#124; 上一代旗舰模型，全球首个开源的 3 万亿级模型（2.8 万亿参数）；原生支持视觉理解，100 万 token 上下文窗口，面向长程编程、知识工作和深度推理等前沿智能场景而设计。 &#124; |
| supply observations › 记录 0 › evidence › 记录 moonshotai-model-catalog › source ref | 新增 | 未记录 | moonshotai-model-catalog |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

### 市场 / global

#### Capability / web-fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方国际 API 概述列出该独立工具端点。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | web-fetch |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 该工具有独立 REST 端点，不绑定 Canonical Model。 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| prices | 新增 | 未记录 | 空列表 |

#### Capability / web-fetch › Operation / web_fetch-global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | web_fetch-global |
| 输入（input） › evidence › 记录 moonshotai-global-webfetch-api › assertion | 新增 | 未记录 | 文本输入项及原文说明从官方 OpenAPI Request Schema 提取。 |
| 输入（input） › evidence › 记录 moonshotai-global-webfetch-api › source ref | 新增 | 未记录 | moonshotai-global-webfetch-api |
| 输入（input） › 记录 url › 说明（description） | 新增 | 未记录 | URL of the page to fetch. Only http and https are supported. |
| 输入（input） › 记录 url › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 输入（input） › 记录 url › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| 输出（output） › evidence › 记录 moonshotai-global-webfetch-api › assertion | 新增 | 未记录 | 输出字段从官方 OpenAPI 响应对象 Schema 提取。 |
| 输出（output） › evidence › 记录 moonshotai-global-webfetch-api › source ref | 新增 | 未记录 | moonshotai-global-webfetch-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • url<br>• markdown<br>• title |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 moonshotai-global-webfetch-api › assertion | 新增 | 未记录 | 请求参数从官方 OpenAPI 对象 Schema 逐字段提取。 |
| 参数（parameters） › evidence › 记录 moonshotai-global-webfetch-api › source ref | 新增 | 未记录 | moonshotai-global-webfetch-api |
| 参数（parameters） › 记录 url › 说明（description） | 新增 | 未记录 | URL of the page to fetch. Only http and https are supported. |
| 参数（parameters） › 记录 url › evidence refs | 新增 | 未记录 | • moonshotai-global-webfetch-api |
| 参数（parameters） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 参数（parameters） › 记录 url › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 url › 参数路径（route_mappings） | 新增 | 未记录 | • /request/url |
| 参数（parameters） › 记录 url › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 web_fetch-global › documentation › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述链接到该端点的专用文档。 |
| routes › 记录 web_fetch-global › documentation › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/tools-fetch |
| routes › 记录 web_fetch-global › endpoint ref › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 该端点使用官方 API 服务根地址。 |
| routes › 记录 web_fetch-global › endpoint ref › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › endpoint ref | 新增 | 未记录 | moonshot-tools-api-global |
| routes › 记录 web_fetch-global › ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-global › ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › ID（id） | 新增 | 未记录 | web_fetch-global |
| routes › 记录 web_fetch-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web_fetch-global › operation kind › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-global › operation kind › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › operation kind | 新增 | 未记录 | web_fetch |
| routes › 记录 web_fetch-global › API 路径（path_template） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-global › API 路径（path_template） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › API 路径（path_template） | 新增 | 未记录 | /v1/tools/fetch |
| routes › 记录 web_fetch-global › protocol › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/fetch。 |
| routes › 记录 web_fetch-global › protocol › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_fetch-global › protocol | 新增 | 未记录 | kimi-tools |

#### Capability / web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方国际 API 概述列出该独立工具端点。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | web-search |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 该工具有独立 REST 端点，不绑定 Canonical Model。 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| 类别（kind） | 新增 | 未记录 | web_search |
| prices | 新增 | 未记录 | 空列表 |

#### Capability / web-search › Operation / web_search_basic-global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | web_search_basic-global |
| 输入（input） › evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | 文本输入项及原文说明从官方 OpenAPI Request Schema 提取。 |
| 输入（input） › evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 输入（input） › 记录 text_query › 说明（description） | 新增 | 未记录 | Search query text. Must not be empty. |
| 输入（input） › 记录 text_query › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 输入（input） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| 类别（kind） | 新增 | 未记录 | web_search_basic |
| 输出（output） › evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | 输出字段从官方 OpenAPI 响应对象 Schema 提取。 |
| 输出（output） › evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • search_results |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | 请求参数从官方 OpenAPI 对象 Schema 逐字段提取。 |
| 参数（parameters） › evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 参数（parameters） › 记录 include_content › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 include_content › 名称（name） | 新增 | 未记录 | include_content |
| 参数（parameters） › 记录 include_content › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › 参数路径（route_mappings） | 新增 | 未记录 | • /request/include_content |
| 参数（parameters） › 记录 include_content › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 limit › 默认值（default） | 新增 | 未记录 | 5 |
| 参数（parameters） › 记录 limit › 说明（description） | 新增 | 未记录 | Maximum number of results to return, from 1 to 20. Defaults to 5. |
| 参数（parameters） › 记录 limit › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 limit › 最大值（max） | 新增 | 未记录 | 20 |
| 参数（parameters） › 记录 limit › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • /request/limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 text_query › 说明（description） | 新增 | 未记录 | Search query text. Must not be empty. |
| 参数（parameters） › 记录 text_query › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 参数（parameters） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 text_query › 参数路径（route_mappings） | 新增 | 未记录 | • /request/text_query |
| 参数（parameters） › 记录 text_query › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 timeout_seconds › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 timeout_seconds › 最大值（max） | 新增 | 未记录 | 60 |
| 参数（parameters） › 记录 timeout_seconds › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 timeout_seconds › 名称（name） | 新增 | 未记录 | timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 timeout_seconds › 参数路径（route_mappings） | 新增 | 未记录 | • /request/timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 类型（type） | 新增 | 未记录 | integer |
| routes › 记录 web_search_basic-global › documentation › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述链接到该端点的专用文档。 |
| routes › 记录 web_search_basic-global › documentation › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/tools-search |
| routes › 记录 web_search_basic-global › endpoint ref › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 该端点使用官方 API 服务根地址。 |
| routes › 记录 web_search_basic-global › endpoint ref › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › endpoint ref | 新增 | 未记录 | moonshot-tools-api-global |
| routes › 记录 web_search_basic-global › ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-global › ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › ID（id） | 新增 | 未记录 | web_search_basic-global |
| routes › 记录 web_search_basic-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web_search_basic-global › operation kind › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-global › operation kind › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › operation kind | 新增 | 未记录 | web_search_basic |
| routes › 记录 web_search_basic-global › API 路径（path_template） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-global › API 路径（path_template） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › API 路径（path_template） | 新增 | 未记录 | /v1/tools/search |
| routes › 记录 web_search_basic-global › protocol › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search。 |
| routes › 记录 web_search_basic-global › protocol › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_basic-global › protocol | 新增 | 未记录 | kimi-tools |

#### Capability / web-search › Operation / web_search_pro-global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | web_search_pro-global |
| 输入（input） › evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | 文本输入项及原文说明从官方 OpenAPI Request Schema 提取。 |
| 输入（input） › evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 输入（input） › 记录 text_query › 说明（description） | 新增 | 未记录 | Search query text. Must not be empty. |
| 输入（input） › 记录 text_query › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 输入（input） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| 类别（kind） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| 类别（kind） | 新增 | 未记录 | web_search_pro |
| 输出（output） › evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | 输出字段从官方 OpenAPI 响应对象 Schema 提取。 |
| 输出（output） › evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • search_results |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 moonshotai-global-websearch-api › assertion | 新增 | 未记录 | 请求参数从官方 OpenAPI 对象 Schema 逐字段提取。 |
| 参数（parameters） › evidence › 记录 moonshotai-global-websearch-api › source ref | 新增 | 未记录 | moonshotai-global-websearch-api |
| 参数（parameters） › 记录 include_content › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 include_content › 名称（name） | 新增 | 未记录 | include_content |
| 参数（parameters） › 记录 include_content › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 include_content › 参数路径（route_mappings） | 新增 | 未记录 | • /request/include_content |
| 参数（parameters） › 记录 include_content › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 limit › 默认值（default） | 新增 | 未记录 | 5 |
| 参数（parameters） › 记录 limit › 说明（description） | 新增 | 未记录 | Maximum number of results to return, from 1 to 20. Defaults to 5. |
| 参数（parameters） › 记录 limit › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 limit › 最大值（max） | 新增 | 未记录 | 20 |
| 参数（parameters） › 记录 limit › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 limit › 名称（name） | 新增 | 未记录 | limit |
| 参数（parameters） › 记录 limit › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 limit › 参数路径（route_mappings） | 新增 | 未记录 | • /request/limit |
| 参数（parameters） › 记录 limit › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 text_query › 说明（description） | 新增 | 未记录 | Search query text. Must not be empty. |
| 参数（parameters） › 记录 text_query › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 text_query › 名称（name） | 新增 | 未记录 | text_query |
| 参数（parameters） › 记录 text_query › 是否必填（required） | 新增 | 未记录 | 是 |
| 参数（parameters） › 记录 text_query › 参数路径（route_mappings） | 新增 | 未记录 | • /request/text_query |
| 参数（parameters） › 记录 text_query › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 timeout_seconds › evidence refs | 新增 | 未记录 | • moonshotai-global-websearch-api |
| 参数（parameters） › 记录 timeout_seconds › 最大值（max） | 新增 | 未记录 | 60 |
| 参数（parameters） › 记录 timeout_seconds › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 timeout_seconds › 名称（name） | 新增 | 未记录 | timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 timeout_seconds › 参数路径（route_mappings） | 新增 | 未记录 | • /request/timeout_seconds |
| 参数（parameters） › 记录 timeout_seconds › 类型（type） | 新增 | 未记录 | integer |
| routes › 记录 web_search_pro-global › documentation › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述链接到该端点的专用文档。 |
| routes › 记录 web_search_pro-global › documentation › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/tools-search-pro |
| routes › 记录 web_search_pro-global › endpoint ref › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 该端点使用官方 API 服务根地址。 |
| routes › 记录 web_search_pro-global › endpoint ref › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › endpoint ref | 新增 | 未记录 | moonshot-tools-api-global |
| routes › 记录 web_search_pro-global › ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-global › ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › ID（id） | 新增 | 未记录 | web_search_pro-global |
| routes › 记录 web_search_pro-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 web_search_pro-global › operation kind › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-global › operation kind › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › operation kind | 新增 | 未记录 | web_search_pro |
| routes › 记录 web_search_pro-global › API 路径（path_template） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-global › API 路径（path_template） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › API 路径（path_template） | 新增 | 未记录 | /v1/tools/search_pro |
| routes › 记录 web_search_pro-global › protocol › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述在端点列表中列出 POST /v1/tools/search_pro。 |
| routes › 记录 web_search_pro-global › protocol › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| routes › 记录 web_search_pro-global › protocol | 新增 | 未记录 | kimi-tools |

#### API endpoint / anthropic-compatible-global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述在「Anthropic Messages」协议行列出该 Base URL。 |
| api region › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| api region | 新增 | 未记录 | 全球 |
| API 地址（base_url） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述在「Anthropic Messages」协议行列出该 Base URL。 |
| API 地址（base_url） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| API 地址（base_url） | 新增 | 未记录 | https://api.moonshot.ai/anthropic |
| documentation › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方协议概述链接到该接口文档：Anthropic Messages。 |
| documentation › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/messages |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述在「Anthropic Messages」协议行列出该 Base URL。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | anthropic-compatible-global |

#### API endpoint / moonshot-tools-api-global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述。 |
| api region › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| api region | 新增 | 未记录 | 全球 |
| API 地址（base_url） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 联网搜索与网页抓取 REST 路由使用官方服务根地址。 |
| API 地址（base_url） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| API 地址（base_url） | 新增 | 未记录 | https://api.moonshot.ai |
| documentation › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述说明服务地址并链接该市场的工具接口文档。 |
| documentation › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/overview |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方 API 概述将 https://api.moonshot.ai 列为服务地址。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | moonshot-tools-api-global |

#### API endpoint / openai-compatible-global

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述在「OpenAI Chat Completions」协议行列出该 Base URL。 |
| api region › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| api region | 新增 | 未记录 | 全球 |
| API 地址（base_url） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述在「OpenAI Chat Completions」协议行列出该 Base URL。 |
| API 地址（base_url） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| API 地址（base_url） | 新增 | 未记录 | https://api.moonshot.ai/v1 |
| documentation › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方协议概述链接到该接口文档：OpenAI Chat Completions。 |
| documentation › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/chat |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › assertion | 新增 | 未记录 | 官方全球 API 概述在「OpenAI Chat Completions」协议行列出该 Base URL。 |
| ID（id） › evidence › 记录 moonshotai-global-api-overview › source ref | 新增 | 未记录 | moonshotai-global-api-overview |
| ID（id） | 新增 | 未记录 | openai-compatible-global |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 型号目录来自国际开放平台。 |
| ID（id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| ID（id） | 新增 | 未记录 | global |
| 名称（name） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 按官方国际市场模型目录的市场范围登记 Service 名称。 |
| 名称（name） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 名称（name） | 新增 | 未记录 | 国际市场 |
| plans | 新增 | 未记录 | 空列表 |

#### Model / kimi-k3.1-pro-highspeed

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 官方模型目录的「模型名称」列以该型号 ID 作为名称。 |
| 展示名称（display_name） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 展示名称（display_name） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 说明（description） | 新增 | 未记录 | A list of conversation messages. |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created<br>• model<br>• choices<br>• usage |
| operations › 记录 text_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 名称（name） | 新增 | 未记录 | logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 名称（name） | 新增 | 未记录 | max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | Deprecated, please refer to max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | A list of conversation messages. |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | Model ID |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 名称（name） | 新增 | 未记录 | prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 参数路径（route_mappings） | 新增 | 未记录 | • /prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 可选值（enum） | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 名称（name） | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 说明（description） | 新增 | 未记录 | Options for streaming responses |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 名称（name） | 新增 | 未记录 | stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 参数路径（route_mappings） | 新增 | 未记录 | • /stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | A list of tools the model may call |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最大值（max） | 新增 | 未记录 | 20 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最小值（min） | 新增 | 未记录 | 0 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 名称（name） | 新增 | 未记录 | top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/chat |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref | 新增 | 未记录 | openai-compatible-global |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） | 新增 | 未记录 | chat-completions-global |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › supported | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › ID（id） | 新增 | 未记录 | text_generation_messages |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• type<br>• role<br>• model<br>• content<br>• usage |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 名称（name） | 新增 | 未记录 | cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 参数路径（route_mappings） | 新增 | 未记录 | • /cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 说明（description） | 新增 | 未记录 | Output configuration: reasoning effort and structured output |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 名称（name） | 新增 | 未记录 | output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 参数路径（route_mappings） | 新增 | 未记录 | • /output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 名称（name） | 新增 | 未记录 | stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 参数路径（route_mappings） | 新增 | 未记录 | • /stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | Whether to stream the response as Server-Sent Events, default false |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | List of tools the model may call |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref | 新增 | 未记录 | anthropic-compatible-global |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） | 新增 | 未记录 | messages-global |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › ID（id） | 新增 | 未记录 | text_generation_responses |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created_at<br>• status<br>• model<br>• output<br>• parallel_tool_calls<br>• store<br>• prompt_cache_options |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 名称（name） | 新增 | 未记录 | include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 参数路径（route_mappings） | 新增 | 未记录 | • /include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 说明（description） | 新增 | 未记录 | Top-level system instructions, applied ahead of every input item. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 名称（name） | 新增 | 未记录 | max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 说明（description） | 新增 | 未记录 | Reasoning configuration. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 名称（name） | 新增 | 未记录 | reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | When true, the response is delivered as a stream of SSE events. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 说明（description） | 新增 | 未记录 | Output text configuration. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 参数路径（route_mappings） | 新增 | 未记录 | • /text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | List of tools the model may call. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref | 新增 | 未记录 | openai-compatible-global |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） | 新增 | 未记录 | responses-global |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro-highspeed」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro-highspeed |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning.effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning<br>• effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › supported | 新增 | 未记录 | 是 |
| prices › 记录 kimi-k3.1-pro-highspeed › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3.1-pro-highspeed › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › ttl | 新增 | 未记录 | 1h |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] | 新增 | 未记录 | 8.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › ttl | 新增 | 未记录 | 5min |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] | 新增 | 未记录 | 4.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.20 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 4.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro-highspeed › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 20.00 |
| prices › 记录 kimi-k3.1-pro-highspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro-highspeed › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro-highspeed › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro-highspeed` &#124; The high-speed variant of Kimi K3.1 Pro — same intelligence, about 2-3× the speed. &#124; |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro-highspeed |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 官方国际区当前模型目录列出该型号。 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro-highspeed` &#124; The high-speed variant of Kimi K3.1 Pro — same intelligence, about 2-3× the speed. &#124; |
| supply observations › 记录 0 › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / kimi-k3.1-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 官方模型目录的「模型名称」列以该型号 ID 作为名称。 |
| 展示名称（display_name） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 展示名称（display_name） | 新增 | 未记录 | kimi-k3.1-pro |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 说明（description） | 新增 | 未记录 | A list of conversation messages. |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created<br>• model<br>• choices<br>• usage |
| operations › 记录 text_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 名称（name） | 新增 | 未记录 | logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 名称（name） | 新增 | 未记录 | max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | Deprecated, please refer to max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | A list of conversation messages. |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | Model ID |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 名称（name） | 新增 | 未记录 | prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 参数路径（route_mappings） | 新增 | 未记录 | • /prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 可选值（enum） | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 名称（name） | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 说明（description） | 新增 | 未记录 | Options for streaming responses |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 名称（name） | 新增 | 未记录 | stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 参数路径（route_mappings） | 新增 | 未记录 | • /stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | A list of tools the model may call |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最大值（max） | 新增 | 未记录 | 20 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最小值（min） | 新增 | 未记录 | 0 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 名称（name） | 新增 | 未记录 | top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/chat |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref | 新增 | 未记录 | openai-compatible-global |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） | 新增 | 未记录 | chat-completions-global |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › supported | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › ID（id） | 新增 | 未记录 | text_generation_messages |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• type<br>• role<br>• model<br>• content<br>• usage |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 名称（name） | 新增 | 未记录 | cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 参数路径（route_mappings） | 新增 | 未记录 | • /cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 说明（description） | 新增 | 未记录 | Output configuration: reasoning effort and structured output |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 名称（name） | 新增 | 未记录 | output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 参数路径（route_mappings） | 新增 | 未记录 | • /output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 名称（name） | 新增 | 未记录 | stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 参数路径（route_mappings） | 新增 | 未记录 | • /stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | Whether to stream the response as Server-Sent Events, default false |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | List of tools the model may call |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref | 新增 | 未记录 | anthropic-compatible-global |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） | 新增 | 未记录 | messages-global |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › ID（id） | 新增 | 未记录 | text_generation_responses |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created_at<br>• status<br>• model<br>• output<br>• parallel_tool_calls<br>• store<br>• prompt_cache_options |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 名称（name） | 新增 | 未记录 | include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 参数路径（route_mappings） | 新增 | 未记录 | • /include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 说明（description） | 新增 | 未记录 | Top-level system instructions, applied ahead of every input item. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 名称（name） | 新增 | 未记录 | max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 说明（description） | 新增 | 未记录 | Reasoning configuration. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 名称（name） | 新增 | 未记录 | reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | When true, the response is delivered as a stream of SSE events. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 说明（description） | 新增 | 未记录 | Output text configuration. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 参数路径（route_mappings） | 新增 | 未记录 | • /text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | List of tools the model may call. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref | 新增 | 未记录 | openai-compatible-global |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） | 新增 | 未记录 | responses-global |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3.1-pro」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids | 新增 | 未记录 | • kimi-k3.1-pro |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning.effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning<br>• effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › supported | 新增 | 未记录 | 是 |
| prices › 记录 kimi-k3.1-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3.1-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › ttl | 新增 | 未记录 | 1h |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] | 新增 | 未记录 | 4.00 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › ttl | 新增 | 未记录 | 5min |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] | 新增 | 未记录 | 2.00 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.20 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 2.00 |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3.1-pro › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 10.00 |
| prices › 记录 kimi-k3.1-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3.1-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3.1-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro` &#124; The first model of the new K3.1 series and Kimi's most capable flagship to date: a 3T-class model with native visual understanding and a 1M-token context window, delivering substantial improvements in coding, 3D creation, and financial research and modeling. &#124; |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3.1-pro |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 官方国际区当前模型目录列出该型号。 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3.1-pro` &#124; The first model of the new K3.1 series and Kimi's most capable flagship to date: a 3T-class model with native visual understanding and a 1M-token context window, delivering substantial improvements in coding, 3D creation, and financial research and modeling. &#124; |
| supply observations › 记录 0 › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |

#### Model / kimi-k3

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 官方模型目录的「模型名称」列以该型号 ID 作为名称。 |
| 展示名称（display_name） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 展示名称（display_name） | 新增 | 未记录 | kimi-k3 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation › ID（id） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › ID（id） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation › 输入（input） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 说明（description） | 新增 | 未记录 | A list of conversation messages. |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation › 类别（kind） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation › 输出（output） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created<br>• model<br>• choices<br>• usage |
| operations › 记录 text_generation › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation › 参数（parameters） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 名称（name） | 新增 | 未记录 | logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 logprobs › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 名称（name） | 新增 | 未记录 | max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_completion_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 说明（description） | 新增 | 未记录 | Deprecated, please refer to max_completion_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 说明（description） | 新增 | 未记录 | A list of conversation messages. |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 说明（description） | 新增 | 未记录 | Model ID |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 名称（name） | 新增 | 未记录 | prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 参数路径（route_mappings） | 新增 | 未记录 | • /prediction |
| operations › 记录 text_generation › 参数（parameters） › 记录 prediction › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 可选值（enum） | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 名称（name） | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning_effort |
| operations › 记录 text_generation › 参数（parameters） › 记录 reasoning_effort › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 名称（name） | 新增 | 未记录 | response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 参数路径（route_mappings） | 新增 | 未记录 | • /response_format |
| operations › 记录 text_generation › 参数（parameters） › 记录 response_format › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 说明（description） | 新增 | 未记录 | Options for streaming responses |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 名称（name） | 新增 | 未记录 | stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 参数路径（route_mappings） | 新增 | 未记录 | • /stream_options |
| operations › 记录 text_generation › 参数（parameters） › 记录 stream_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | A list of tools the model may call |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › evidence refs | 新增 | 未记录 | • moonshotai-global-chat-api |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最大值（max） | 新增 | 未记录 | 20 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 最小值（min） | 新增 | 未记录 | 0 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 名称（name） | 新增 | 未记录 | top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 参数路径（route_mappings） | 新增 | 未记录 | • /top_logprobs |
| operations › 记录 text_generation › 参数（parameters） › 记录 top_logprobs › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/chat |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › endpoint ref | 新增 | 未记录 | openai-compatible-global |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › ID（id） | 新增 | 未记录 | chat-completions-global |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › API 路径（path_template） | 新增 | 未记录 | /chat/completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › protocol | 新增 | 未记录 | chat-completions |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 chat-completions 路由的 model 值。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › evidence › 记录 moonshotai-global-chat-api › assertion | 新增 | 未记录 | 官方 Chat API 文档列出 Kimi K3 系列的 reasoning_effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › evidence › 记录 moonshotai-global-chat-api › source ref | 新增 | 未记录 | moonshotai-global-chat-api |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning_effort |
| operations › 记录 text_generation › routes › 记录 chat-completions-global › reasoning › supported | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_messages › ID（id） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › ID（id） | 新增 | 未记录 | text_generation_messages |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_messages › 输入（input） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 输入（input） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_messages › 类别（kind） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_messages › 输出（output） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• type<br>• role<br>• model<br>• content<br>• usage |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_messages › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_messages › 参数（parameters） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 名称（name） | 新增 | 未记录 | cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 参数路径（route_mappings） | 新增 | 未记录 | • /cache_control |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 cache_control › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 最小值（min） | 新增 | 未记录 | 1 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 名称（name） | 新增 | 未记录 | max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_tokens |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 max_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 名称（name） | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 参数路径（route_mappings） | 新增 | 未记录 | • /messages |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 messages › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 名称（name） | 新增 | 未记录 | metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 参数路径（route_mappings） | 新增 | 未记录 | • /metadata |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 metadata › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 说明（description） | 新增 | 未记录 | Output configuration: reasoning effort and structured output |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 名称（name） | 新增 | 未记录 | output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 参数路径（route_mappings） | 新增 | 未记录 | • /output_config |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 output_config › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 名称（name） | 新增 | 未记录 | stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 参数路径（route_mappings） | 新增 | 未记录 | • /stop_sequences |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stop_sequences › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | Whether to stream the response as Server-Sent Events, default false |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | List of tools the model may call |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_messages › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › endpoint ref | 新增 | 未记录 | anthropic-compatible-global |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › ID（id） | 新增 | 未记录 | messages-global |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › API 路径（path_template） | 新增 | 未记录 | /v1/messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › protocol | 新增 | 未记录 | messages |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids › evidence › 记录 moonshotai-global-messages-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 messages 路由的 model 值。 |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids › evidence › 记录 moonshotai-global-messages-api › source ref | 新增 | 未记录 | moonshotai-global-messages-api |
| operations › 记录 text_generation_messages › routes › 记录 messages-global › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 按官方协议 Route 单独记录 Operation，使每条 Route 的请求参数与响应结构保持对应。 |
| operations › 记录 text_generation_responses › ID（id） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › ID（id） | 新增 | 未记录 | text_generation_responses |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 输入项依据官方请求 Schema 中的 messages/input 字段登记；未从结构复杂的联合类型推断额外模态。 |
| operations › 记录 text_generation_responses › 输入（input） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 类别（kind） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 名称（name） | 新增 | 未记录 | input |
| operations › 记录 text_generation_responses › 输入（input） › 记录 input › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方协议操作用于生成文本响应。 |
| operations › 记录 text_generation_responses › 类别（kind） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 类别（kind） | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 响应结构来自官方 Schema；对应请求 Schema 将 stream 声明为 boolean，确认支持流式输出。 |
| operations › 记录 text_generation_responses › 输出（output） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › fields | 新增 | 未记录 | • id<br>• object<br>• created_at<br>• status<br>• model<br>• output<br>• parallel_tool_calls<br>• store<br>• prompt_cache_options |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| operations › 记录 text_generation_responses › 输出（output） › 记录 0 › streaming | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 请求参数从当前协议的官方 OpenAPI Request Schema 提取；仅保留 IR 可表示的字段类型与约束。 |
| operations › 记录 text_generation_responses › 参数（parameters） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 名称（name） | 新增 | 未记录 | include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 参数路径（route_mappings） | 新增 | 未记录 | • /include |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 include › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 说明（description） | 新增 | 未记录 | Top-level system instructions, applied ahead of every input item. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 名称（name） | 新增 | 未记录 | instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 参数路径（route_mappings） | 新增 | 未记录 | • /instructions |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 instructions › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 名称（name） | 新增 | 未记录 | max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 参数路径（route_mappings） | 新增 | 未记录 | • /max_output_tokens |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 max_output_tokens › 类型（type） | 新增 | 未记录 | integer |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 可选值（enum） | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 名称（name） | 新增 | 未记录 | model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 是否必填（required） | 新增 | 未记录 | 是 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 参数路径（route_mappings） | 新增 | 未记录 | • /model |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 model › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 名称（name） | 新增 | 未记录 | prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_key |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_key › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 名称（name） | 新增 | 未记录 | prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 参数路径（route_mappings） | 新增 | 未记录 | • /prompt_cache_options |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 prompt_cache_options › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 说明（description） | 新增 | 未记录 | Reasoning configuration. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 名称（name） | 新增 | 未记录 | reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 参数路径（route_mappings） | 新增 | 未记录 | • /reasoning |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 reasoning › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 名称（name） | 新增 | 未记录 | safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 参数路径（route_mappings） | 新增 | 未记录 | • /safety_identifier |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 safety_identifier › 类型（type） | 新增 | 未记录 | string |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 默认值（default） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 说明（description） | 新增 | 未记录 | When true, the response is delivered as a stream of SSE events. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 名称（name） | 新增 | 未记录 | stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 参数路径（route_mappings） | 新增 | 未记录 | • /stream |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 stream › 类型（type） | 新增 | 未记录 | boolean |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 说明（description） | 新增 | 未记录 | Output text configuration. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 名称（name） | 新增 | 未记录 | text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 参数路径（route_mappings） | 新增 | 未记录 | • /text |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 text › 类型（type） | 新增 | 未记录 | object |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 说明（description） | 新增 | 未记录 | List of tools the model may call. |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › evidence refs | 新增 | 未记录 | • moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 名称（name） | 新增 | 未记录 | tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 是否必填（required） | 新增 | 未记录 | 否 |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 参数路径（route_mappings） | 新增 | 未记录 | • /tools |
| operations › 记录 text_generation_responses › 参数（parameters） › 记录 tools › 类型（type） | 新增 | 未记录 | array |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 来源为该 Route 的官方 API 文档。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › documentation | 新增 | 未记录 | https://platform.kimi.ai/docs/api/responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | Route 关联同市场 API 概述中列出的兼容协议 Base URL。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › endpoint ref | 新增 | 未记录 | openai-compatible-global |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › ID（id） | 新增 | 未记录 | responses-global |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 OpenAPI 将该操作声明为 POST。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › HTTP 方法（method） | 新增 | 未记录 | POST |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 该模型 API Route 用于生成文本响应。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › operation kind | 新增 | 未记录 | text_generation |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 完整路径依据 API 概述与 OpenAPI 路径拆分为 Base URL 后缀。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › API 路径（path_template） | 新增 | 未记录 | /responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 协议类型按官方 API 文档定义。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › protocol | 新增 | 未记录 | responses |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 API 请求 Schema 将「kimi-k3」列为 responses 路由的 model 值。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › provider model ids | 新增 | 未记录 | • kimi-k3 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › evidence › 记录 moonshotai-global-responses-api › assertion | 新增 | 未记录 | 官方 Responses API 文档列出 Kimi K3 系列及 reasoning.effort 档位 low/high/max，默认 max。 |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › evidence › 记录 moonshotai-global-responses-api › source ref | 新增 | 未记录 | moonshotai-global-responses-api |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › 默认值（default） | 新增 | 未记录 | max |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › 类别（kind） | 新增 | 未记录 | effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › source | 新增 | 未记录 | reasoning.effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › values | 新增 | 未记录 | • low<br>• high<br>• max |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › controls › 记录 0 › wire path | 新增 | 未记录 | • reasoning<br>• effort |
| operations › 记录 text_generation_responses › routes › 记录 responses-global › reasoning › supported | 新增 | 未记录 | 是 |
| prices › 记录 kimi-k3 › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › ttl | 新增 | 未记录 | 1h |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","1h",null] | 新增 | 未记录 | 6.00 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计费指标（metric） | 新增 | 未记录 | cache_write |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › ttl | 新增 | 未记录 | 5min |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 ["cache_write","5min",null] | 新增 | 未记录 | 3.00 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 cache_read | 新增 | 未记录 | 0.30 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 input › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 input | 新增 | 未记录 | 3.00 |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 output › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 kimi-k3 › 价格信息（pricing） › 记录 0 › rates › 记录 output | 新增 | 未记录 | 15.00 |
| prices › 记录 kimi-k3 › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-chat-pricing › assertion | 新增 | 未记录 | 官方按量定价表按型号列出此 Token 单价；MTok 表示百万 Token。 |
| prices › 记录 kimi-k3 › 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-chat-pricing › source ref | 新增 | 未记录 | moonshotai-global-chat-pricing |
| prices › 记录 kimi-k3 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3 |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3` &#124; Kimi's previous-generation flagship and the world's first open-source 3T-class model (2.8 trillion parameters); with native visual understanding and a 1M-token context window, designed for frontier intelligence scenarios such as long-horizon coding, knowledge work, and deep reasoning. &#124; |
| 服务商模型 ID（provider_model_id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | kimi-k3 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | 官方国际区当前模型目录列出该型号。 |
| 服务线 ID（service_id） › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 moonshotai-global-model-catalog › assertion | 新增 | 未记录 | &#124; `kimi-k3` &#124; Kimi's previous-generation flagship and the world's first open-source 3T-class model (2.8 trillion parameters); with native visual understanding and a 1M-token context window, designed for frontier intelligence scenarios such as long-horizon coding, knowledge work, and deep reasoning. &#124; |
| supply observations › 记录 0 › evidence › 记录 moonshotai-global-model-catalog › source ref | 新增 | 未记录 | moonshotai-global-model-catalog |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | listed_current |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| cn | `moonshotai-model-catalog` · Kimi 中国开放平台模型列表 | https://platform.kimi.com/docs/models.md | 2026-11-05T13:35:52.725Z | 200 | `sha256:63bbddf1de5b3511b9d06ddc940053b29890c43efcd88d6e6424d1f4156ec39c` |
| cn | `moonshotai-api-list-models` · Kimi 中国开放平台列出模型 API 文档 | https://platform.kimi.com/docs/api/list-models.md | 2026-11-05T13:35:52.806Z | 200 | `sha256:b49d081a19e685108a56c3e801f4c0319e40e90282cb0d0af2beb9bcf835b573` |
| cn | `moonshotai-api-overview` · Kimi 中国开放平台API 概述 | https://platform.kimi.com/docs/api/overview.md | 2026-11-05T13:35:53.200Z | 200 | `sha256:55d473a7ff7e4474ad962fead479995e3da898f324316385f17d5cd94e2a8f61` |
| cn | `moonshotai-chat-api` · Kimi 中国开放平台Chat Completions API | https://platform.kimi.com/docs/api/chat.md | 2026-11-05T13:35:53.467Z | 200 | `sha256:db19cb0b1047af8a9b534f0e67d0cedb529265527986ed31c873d09697558409` |
| cn | `moonshotai-responses-api` · Kimi 中国开放平台Responses API | https://platform.kimi.com/docs/api/responses.md | 2026-11-05T13:35:53.931Z | 200 | `sha256:5fa408939f3f5d2c887a9485dd32e0f2b7d11274ce33ac8c96ea7adfc3592fdc` |
| cn | `moonshotai-messages-api` · Kimi 中国开放平台Anthropic Messages API | https://platform.kimi.com/docs/api/messages.md | 2026-11-05T13:35:54.321Z | 200 | `sha256:68bfd7c4792bd1ad5408ec02fba83d0482869aed4a0c68acb21c77be22fbc5a6` |
| cn | `moonshotai-chat-pricing` · Kimi 中国开放平台模型推理价格说明 | https://platform.kimi.com/docs/pricing/chat | 2026-11-05T12:30:21.206Z | 200 | `sha256:0ccdc6cfacd497e0faeb465da64db362d68e0ec17d7234c9eb3c17dfc34ea602` |
| cn | `moonshotai-batch-pricing` · Kimi 中国开放平台批量推理定价 | https://platform.kimi.com/docs/pricing/batch | 2026-11-05T12:30:21.337Z | 200 | `sha256:d6b026ca84c0e24e531fb680927da97603ad1e8e9f65824523421e975e1c4c08` |
| cn | `moonshotai-websearch-pricing` · Kimi 中国开放平台联网搜索定价 | https://platform.kimi.com/docs/pricing/websearch | 2026-11-05T12:30:22.703Z | 200 | `sha256:e4666814c226c0181c918a8062bff08b159d50072289f70a6d8df764b57adb7c` |
| cn | `moonshotai-batch-api` · Kimi 中国开放平台Batch API 指南 | https://platform.kimi.com/docs/guide/use-batch-api.md | 2026-11-05T13:35:55.946Z | 200 | `sha256:b3ab8aecf8d5d763f36001f288f02a6350682ad42dfde959ed7825c5d176b4b6` |
| cn | `moonshotai-websearch-api` · Kimi 中国开放平台联网搜索 API | https://platform.kimi.com/docs/api/tools-search.md | 2026-11-05T13:35:56.337Z | 200 | `sha256:3477f541789421be6bccfc933da34e194c6cebdac21e61f8d0a21a9deee0578c` |
| cn | `moonshotai-webfetch-api` · Kimi 中国开放平台网页抓取 API | https://platform.kimi.com/docs/api/tools-fetch.md | 2026-11-05T13:35:56.354Z | 200 | `sha256:a04c6f9f03d1d48dcefeddfd3d27cc69b81523fe33eb28a36cd9414e6d3e023d` |
| cn | `moonshotai-file-upload-api` · Kimi 中国开放平台文件上传 API | https://platform.kimi.com/docs/api/files-upload.md | 2026-11-05T13:35:57.569Z | 200 | `sha256:4d9be39fc42ac58f8da17c12e8b668de9624075e307e929b754aeba62ec183d3` |
| cn | `moonshotai-batch-create-api` · Kimi 中国开放平台创建批处理任务 API | https://platform.kimi.com/docs/api/batch-create.md | 2026-11-05T13:35:56.844Z | 200 | `sha256:a09237d412e9ed4ef18dfa74ee0af3126655fbe99bcf87f05c88f2a7cd5a8c0d` |
| global | `moonshotai-global-model-catalog` · Kimi 国际开放平台模型列表 | https://platform.kimi.ai/docs/models.md | 2026-11-05T13:35:57.977Z | 200 | `sha256:a685577fe3edbe8d29f1dbe3c076292c8a94eafc89b3742340a056f068085235` |
| global | `moonshotai-global-api-list-models` · Kimi 国际开放平台列出模型 API 文档 | https://platform.kimi.ai/docs/api/list-models.md | 2026-11-05T13:35:58.015Z | 200 | `sha256:919610ca5e301c460fb18c979e34f3276a4220e9cef26dd8b1866e278c88779d` |
| global | `moonshotai-global-api-overview` · Kimi 国际开放平台API 概述 | https://platform.kimi.ai/docs/api/overview.md | 2026-11-05T13:35:58.264Z | 200 | `sha256:04b073d0707cf04d4fafc1d203815062bead323320fa9f1b8f9d686de59afcba` |
| global | `moonshotai-global-chat-api` · Kimi 国际开放平台Chat Completions API | https://platform.kimi.ai/docs/api/chat.md | 2026-11-05T13:35:58.306Z | 200 | `sha256:67b8b5fdef219fdd3f818a3bf9b3a78d03637a903ce23ee4fb6adc5411f40127` |
| global | `moonshotai-global-responses-api` · Kimi 国际开放平台Responses API | https://platform.kimi.ai/docs/api/responses.md | 2026-11-05T13:35:58.561Z | 200 | `sha256:861dbffafb6fd6eabc9e63d3a42b9ea6b9d651b2b22ec51634a19210ff302723` |
| global | `moonshotai-global-messages-api` · Kimi 国际开放平台Anthropic Messages API | https://platform.kimi.ai/docs/api/messages.md | 2026-11-05T13:35:58.571Z | 200 | `sha256:e47e85af6fe7bf3bf6820714a4194a8411721f4e47ad1aadc2079d2eaf02e574` |
| global | `moonshotai-global-chat-pricing` · Kimi 国际开放平台模型推理价格说明 | https://platform.kimi.ai/docs/pricing/chat | 2026-11-05T13:35:59.000Z | 200 | `sha256:b5a2417698e40e3f9328b8cff03eec7cd9424854bdb8bf6ee48744f542eab643` |
| global | `moonshotai-global-batch-pricing` · Kimi 国际开放平台批量推理定价 | https://platform.kimi.ai/docs/pricing/batch | 2026-11-05T13:35:58.860Z | 200 | `sha256:88fe9b4f4eb6d9a3b1baf883048770a01f870507e922fdab602cf7e05aba1ff3` |
| global | `moonshotai-global-websearch-pricing` · Kimi 国际开放平台联网搜索定价 | https://platform.kimi.ai/docs/pricing/websearch | 2026-11-05T13:35:59.309Z | 200 | `sha256:0d689d4befea004b0beef4230bd0a1f1f8a6701aea2a0fa094b34258d5e36fce` |
| global | `moonshotai-global-batch-api` · Kimi 国际开放平台Batch API 指南 | https://platform.kimi.ai/docs/guide/use-batch-api.md | 2026-11-05T13:35:59.284Z | 200 | `sha256:b2d8af88e1a94e217e28bce55a6f65a482ce190f16e745dc813c4771e20728fb` |
| global | `moonshotai-global-websearch-api` · Kimi 国际开放平台联网搜索 API | https://platform.kimi.ai/docs/api/tools-search.md | 2026-11-05T13:35:59.601Z | 200 | `sha256:0c1f79e78a80fa7c86cf6b509ab2aba71531fcfa5ff4f5cf13ccee8a0e8eed2a` |
| global | `moonshotai-global-webfetch-api` · Kimi 国际开放平台网页抓取 API | https://platform.kimi.ai/docs/api/tools-fetch.md | 2026-11-05T13:35:59.558Z | 200 | `sha256:045de2d391cb5c11e5d80aff8df0078a06a13af0ce253e9afd91efc2ef25da25` |
| global | `moonshotai-global-file-upload-api` · Kimi 国际开放平台文件上传 API | https://platform.kimi.ai/docs/api/files-upload.md | 2026-11-05T13:35:59.862Z | 200 | `sha256:60b4a8aa21df55335073f01cc5d7ce5b06ce19731c388a544c68fdebd20d03aa` |
| global | `moonshotai-global-batch-create-api` · Kimi 国际开放平台创建批处理任务 API | https://platform.kimi.ai/docs/api/batch-create.md | 2026-11-05T13:35:59.849Z | 200 | `sha256:911014c96ff5518f1f6d41b58f3519e7873dccfa5020d7cfa7550172ff860a89` |

## moonshotai 专属证据与核对说明

### Kimi 官方资料 IR 观察候选

- IR 指纹：`sha256:53a6f292c26bc57fe299f716162c2260ae0b5fe790cfe8435bd4d3266a4cd517`
- 来源快照：28 份
- 中国目录 ID：21 个
- 国际目录 ID：21 个
- 两市场当前目录已投影为 Offering；模型级 Chat Completions、Responses 与 Anthropic Messages Route 按官方支持范围映射。Batch 支持型号、创建 Route、请求参数、异步输出与 60% 价格已映射。联网搜索和网页抓取已映射为独立 Capability；普通模型请求参数与输入输出 Schema、工具响应语义/错误边界及会员计划仍需 Review。

#### 待人工核对

- search_results 语义：搜索结果列表；无结果时为空数组。；响应必填字段：search_results；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。
- 响应必填字段：url, markdown, title；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 404, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。
- search_results 语义：List of search results; an empty array when nothing matches.；响应必填字段：search_results；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。
- 响应必填字段：url, markdown, title；ErrorResponse 必填字段：error；文档错误 HTTP 状态码：400, 401, 403, 404, 408, 429, 500, 502, 504。 当前公共 CapabilityOutput 仅能保存响应字段名，不能表达必填字段、空结果约束或错误响应状态/结构；这些响应语义保留 Review，不视为已完整映射。
- 当前目录已按市场映射为 listed_current Offering；协议文档中明确声明的模型级 Route 已按协议分别生成 Operation，直接类型请求参数、messages/input 输入项和结构化响应外层字段已提取。oneOf 联合类型、复杂嵌套消息/媒体结构、完整输出约束、工具响应必需性及错误边界仍在 Review。
- Batch 按官方支持型号、异步创建 API 和标准模型价格 60% 映射为独立批处理 Operation 定价；会员订阅计划仍需与 API 按量价格分别核对。
- 官方 Token 价格行「kimi-k2.7-code」未能可靠归一；保留在来源观察中，不生成 PriceFact。
- 官方 Token 价格行「kimi-k2.7-code-highspeed」未能可靠归一；保留在来源观察中，不生成 PriceFact。
- 官方 Token 价格行「kimi-k2.6」未能可靠归一；保留在来源观察中，不生成 PriceFact。
- 官方 Token 价格行「kimi-k2.7-code」未能可靠归一；保留在来源观察中，不生成 PriceFact。
- 官方 Token 价格行「kimi-k2.7-code-highspeed」未能可靠归一；保留在来源观察中，不生成 PriceFact。
- 官方 Token 价格行「kimi-k2.6」未能可靠归一；保留在来源观察中，不生成 PriceFact。

#### 来源快照

- `moonshotai-model-catalog`：https://platform.kimi.com/docs/models.md
- `moonshotai-api-list-models`：https://platform.kimi.com/docs/api/list-models.md
- `moonshotai-api-overview`：https://platform.kimi.com/docs/api/overview.md
- `moonshotai-chat-api`：https://platform.kimi.com/docs/api/chat.md
- `moonshotai-responses-api`：https://platform.kimi.com/docs/api/responses.md
- `moonshotai-messages-api`：https://platform.kimi.com/docs/api/messages.md
- `moonshotai-chat-pricing`：https://platform.kimi.com/docs/pricing/chat
- `moonshotai-batch-pricing`：https://platform.kimi.com/docs/pricing/batch
- `moonshotai-websearch-pricing`：https://platform.kimi.com/docs/pricing/websearch
- `moonshotai-batch-api`：https://platform.kimi.com/docs/guide/use-batch-api.md
- `moonshotai-websearch-api`：https://platform.kimi.com/docs/api/tools-search.md
- `moonshotai-webfetch-api`：https://platform.kimi.com/docs/api/tools-fetch.md
- `moonshotai-file-upload-api`：https://platform.kimi.com/docs/api/files-upload.md
- `moonshotai-batch-create-api`：https://platform.kimi.com/docs/api/batch-create.md
- `moonshotai-global-model-catalog`：https://platform.kimi.ai/docs/models.md
- `moonshotai-global-api-list-models`：https://platform.kimi.ai/docs/api/list-models.md
- `moonshotai-global-api-overview`：https://platform.kimi.ai/docs/api/overview.md
- `moonshotai-global-chat-api`：https://platform.kimi.ai/docs/api/chat.md
- `moonshotai-global-responses-api`：https://platform.kimi.ai/docs/api/responses.md
- `moonshotai-global-messages-api`：https://platform.kimi.ai/docs/api/messages.md
- `moonshotai-global-chat-pricing`：https://platform.kimi.ai/docs/pricing/chat
- `moonshotai-global-batch-pricing`：https://platform.kimi.ai/docs/pricing/batch
- `moonshotai-global-websearch-pricing`：https://platform.kimi.ai/docs/pricing/websearch
- `moonshotai-global-batch-api`：https://platform.kimi.ai/docs/guide/use-batch-api.md
- `moonshotai-global-websearch-api`：https://platform.kimi.ai/docs/api/tools-search.md
- `moonshotai-global-webfetch-api`：https://platform.kimi.ai/docs/api/tools-fetch.md
- `moonshotai-global-file-upload-api`：https://platform.kimi.ai/docs/api/files-upload.md
- `moonshotai-global-batch-create-api`：https://platform.kimi.ai/docs/api/batch-create.md
