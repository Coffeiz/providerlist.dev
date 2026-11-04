# PRD-DATA-4：Model 与 Provider 源数据 TOML 化

> 状态：已完成
> 范围：Model、Provider、Service、Offering 和 Plan 的仓库源文件改为 TOML；公开 API 继续使用 JSON。

## 1. 目标

- 用小型 TOML 文件维护 Model 与 Provider 数据，便于社区阅读、修改和审阅。
- 按开发商、Provider、市场和记录类型组织文件；身份信息由目录或文件名补齐时，不在数据中重复保存。
- 保持事实归属清晰：模型规格属于 Model，市场接入和独立服务能力属于 Service，具体供应与价格属于 Offering，订阅规则属于 Plan。
- 继续通过现有流水线校验和编译；公开 JSON 的资源路径与 `schema_version: 1.0.0` 保持不变。

TOML 不支持 `null`，未知值统一省略；未知价格、限制或能力不得用 `0` 或 `false` 代替。唯一默认例外是 `integrations.ai_sdk`：未填写时按 `false` 处理。

## 2. 目标目录

```text
data/
├── models/
│   └── <developer_id>/
│       ├── developer.toml
│       └── <model_slug>.toml
└── providers/
    └── <provider_id>/
        ├── provider.toml
        └── <market_id>/
            ├── service.toml
            ├── offerings/
            │   └── <url_encoded_model_id>.toml
            └── plans.toml
```

| 文件 | 内容 | 身份从哪里来 |
|---|---|---|
| `developer.toml` | 开发商名称 | `<developer_id>` 目录 |
| `<model_slug>.toml` | 单个规范 Model 的事实 | `<developer_id>` 目录和 `<model_slug>` 文件名 |
| `provider.toml` | Provider 全局信息 | `<provider_id>` 目录 |
| `<market_id>/service.toml` | 一个市场的接入信息、Endpoint、独立能力 | 父目录 `<provider_id>/<market_id>` |
| `offerings/<url_encoded_model_id>.toml` | 单个 Offering 的供应事实和价格 | Provider 与市场父目录；`service_id` 由市场目录生成 |
| `plans.toml` | 当前市场的所有 Plan | 每条 Plan 内的 `id`；所属市场由父目录确定 |

`market_id` 目前使用 `cn`、`global`、`other` 或 `unknown`，映射为公开 API 的 `CN`、`GLOBAL`、`OTHER` 或 `UNKNOWN`。市场字典由 ProviderList 管理，不要求数据贡献者填写市场展示名称。Offering 文件名将模型 ID 中的 `/` 替换为 `·`，例如 `kimi/kimi-k3` 写为 `kimi·kimi-k3.toml`；TOML 正文仍保留原始调用 ID。

## 3. 文件模板与字段

以下模板展示每个文件可使用的字段位置。示例数据均为虚构，仅用于说明格式；不适用或未知的可选字段应删除。字段未列在对应表中的 TOML 键不接受。

### 3.1 `developer.toml`

```toml
id = "google"
name = "Google"
```

| 字段 | 必需 | 说明 |
|---|---:|---|
| `id` | 是 | 开发商稳定 ID，必须与父目录名相同 |
| `name` | 是 | 展示名称 |

### 3.2 Model：`<model_slug>.toml`

```toml
name = "Example Reasoning Model"
family = "example"
type = "chat"
release_date = "2025-08-07"

[modalities]
input = ["text", "image/jpeg", "image/png"]
output = ["text"]

[limits]
context = 128000
input = 120000
output = 8192

[capabilities]
reasoning = ["low", "medium", "high"]
tool_calling = true
structured_output = true
temperature = { min = 0, max = 2 }
top_p = { min = 0, max = 1 }
top_k = false

[specifications]
image_output_resolutions = ["1024x1024"]
video_output_resolutions = ["720p"]
video_duration_seconds = { min = 1, max = 30 }
audio_duration_seconds = { min = 1, max = 60 }

```

Model 文件不写 `id` 或 `developer_id`：完整 ID 由 `<developer_id>/<model_slug>` 生成。开发商展示名称默认从 `developer.toml` 读取；若同一目录下的历史记录确有不同名称，可在单个 Model 文件中填写 `developer_name` 覆盖默认值，以保持公开数据原样。

| 字段 | 必需 | 说明 |
|---|---:|---|
| `name` | 是 | 模型展示名称 |
| `family` | 否 | 模型系列 |
| `type` | 否 | 主模型类型；保留未知类型值，不自动归为 `chat` |
| `release_date` | 否 | 发布日期，格式为 `YYYY`、`YYYY-MM` 或 `YYYY-MM-DD` |
| `[modalities]` | 否 | 输入、输出模态；`input`、`output` 均可选，值为字符串数组 |
| `[limits]` | 否 | 模型限制；`context`、`input`、`output` 均可选，值为非负数 |
| `capabilities.reasoning` | 否 | `true` 表示支持但未列出档位，`false` 表示确认不支持；字符串数组表示官方公布的档位；未知时省略。数组不保证每条 Route 都支持全部档位 |
| `capabilities.tool_calling`、`structured_output` | 否 | 模型能力开关，值为布尔值；未知时省略 |
| `capabilities.temperature`、`top_p`、`top_k` | 否 | `true` / `false` 表示是否支持；已知范围用 `{ min, max }` 表示；未知时省略 |
| `[output_dimensions]` | 否 | 向量输出维度；下方字段均可选 |
| `output_dimensions.supported` | 否 | 离散支持维度，整数数组 |
| `output_dimensions.min`、`max` | 成对填写 | 自定义维度范围；提供其中一个时必须提供另一个 |
| `output_dimensions.default` | 否 | 官方公布的默认维度 |
| `[specifications]` | 否 | 模型公布的生成规格；以下键均可选 |
| `specifications.image_output_resolutions` | 否 | 图像输出分辨率字符串数组 |
| `specifications.video_output_resolutions` | 否 | 视频输出分辨率字符串数组 |
| `specifications.video_duration_seconds` | 否 | 行内表；`min`、`max` 均可选，单位为秒 |
| `specifications.audio_duration_seconds` | 否 | 行内表；`min`、`max` 均可选，单位为秒 |

`output_dimensions` 允许只填写 `supported` 或 `default`，也允许同时提供范围；`min` 与 `max` 必须成对。`specifications` 的时长行内表至少填写 `min` 或 `max`，单位为秒。TOML 不支持空值；未知内容省略。

Model 记录开发厂商公布的型号规格、发布事实、推理能力与档位、工具调用、结构化输出和采样参数范围。API 地址、路由和请求字段映射由市场的 `service.toml` 管理；独立服务能力也记录在对应市场。缓存价格和 TTL 属于 Offering 的 `pricing`，不写入规范 Model。

#### Endpoint 与 Route 字段

模型推理支持和已公布的档位记录在 Model 的 `capabilities.reasoning`。Endpoint Route 记录市场 API 的协议、方法、路径和异步接入信息。

Service Endpoint 和 Capability 中的 Route 使用相同字段：

| 表 / 字段 | 必需 | 可选字段与说明 |
|---|---:|---|
| `[[endpoints.routes]]` / `[[capabilities.routes]]` | `protocol`、`method`、`path` | `headers`、`compatibility`、`callability`、`task_id_pointer`、`status_path_template`、`result_path_template`、`cancel_path_template`、`documentation` 均可选。 |
| `[...routes.headers]`、`[...routes.compatibility]` | — | 分别是字符串头字段和兼容性键值；所有键均可选。 |

`callability` 可取 `documented_only`、`declarative_ready`、`adapter_required` 或 `api_probed`。Route 的异步路径字段仅在来源明确时填写。

### 3.3 Provider：`provider.toml`

```toml
id = "example-ai"
name = "Example AI"
aliases = ["Example"]
kind = "cloud_platform"
logo = "/logos/providers/example-ai.svg"

[integrations]
ai_sdk = true
```

| 字段 | 必需 | 说明 |
|---|---:|---|
| `id` | 是 | Provider 稳定 ID，必须与目录名一致 |
| `name` | 是 | 展示名称 |
| `aliases` | 是 | 别名数组；没有别名时写 `[]` |
| `kind` | 是 | `first_party`、`aggregator`、`cloud_platform` 或 `other` |
| `logo` | 否 | Logo 路径或 HTTPS URL |
| `[integrations]` | 否 | 集成支持声明；`ai_sdk` 可选，省略时编译为 `false` |

Provider 文件只放厂商身份、Logo 和全局集成信息，不放网站、文档或市场接入资料。

### 3.4 市场 Service：`<market_id>/service.toml`

```toml
website = "https://example.com/global"
account_requirements = ["Example API account"]
supply_status = "active"

[docs]
overview = "https://example.com/docs"
pricing = "https://example.com/pricing"

[[endpoints]]
id = "standard-api"
base_url = "https://api.example.com/v1"
api_region = "Global"
documentation = "https://example.com/docs/api"

[[endpoints.routes]]
protocol = "responses"
method = "POST"
path = "/responses"

[[capabilities]]
kind = "web_search"
required_plan_ids = ["pro"]

[[capabilities.input]]
name = "query"
kind = "text"
required = true

[[capabilities.output]]
kind = "structured"
fields = ["results", "title", "url", "snippet"]

[[capabilities.parameters]]
name = "max_results"
type = "integer"
required = false
min = 1
max = 20
route_mappings = ["/max_results"]

[[capabilities.routes]]
protocol = "responses"
method = "POST"
path = "/search"

[capabilities.links]
documentation = "https://example.com/docs/search"
```

| 字段 / 表 | 必需 | 可选字段与说明 |
|---|---:|---|
| `website` | 否 | 该市场的平台入口；不适用或未知时省略，不回退到 Provider 层 |
| `[docs]` | 否 | 该市场的官方文档 URL 字典；概览、价格、模型和接入文档都放在此处 |
| `account_requirements` | 否 | 账号或使用资格要求字符串数组 |
| `plan_ids` | 自动生成 | 从同市场 `plans.toml` 汇总；Service 文件不重复填写 |
| `supply_status` | 否 | `active`、`deprecated`、`retired` 或 `unknown` |
| `[[endpoints]]` | 否 | Endpoint 项必填 `id`、`base_url`、`api_region`；`documentation`、`default_headers`、`routes` 可选 |
| `[[endpoints.routes]]` | `protocol`、`method`、`path` | `headers`、`compatibility`、`callability`、`task_id_pointer`、`status_path_template`、`result_path_template`、`cancel_path_template`、`documentation` 可选 |
| `[[capabilities]]` | `kind` | 每个市场中每种 `kind` 只写一条；`routes`、`input`、`output`、`parameters`、`constraints`、`execution`、`pricing`、`links`、`required_plan_ids` 可选；API 地址来自同市场 Endpoint，Plan 引用对照同市场 `plans.toml` 校验 |
| `capabilities.routes` | `protocol`、`method`、`path` | 可选字段与 Endpoint Route 相同 |
| `capabilities.input` | `name`、`kind`、`required` | `cardinality`、`media`、`description` 可选；可重复，表示多个输入项 |
| `capabilities.output` | `kind` | `media`、`artifact`、`streaming`、`fields` 可选；可重复，表示多个输出项 |
| `capabilities.parameters` | `name`、`type`、`required` | `nullable`、`enum`、`min`、`max`、`step`、`default`、`description`、`route_mappings` 可选，结构见本节对应字段表 |
| `capabilities.constraints` | `id`、`if`、`then` | `description` 可选，表达式使用有限条件结构 |
| `capabilities.execution` | `mode` | `polling`、`status_mapping`、`supports_cancel`、`documentation` 可选，结构见本节对应字段表 |
| `capabilities.pricing` | `currency`、`rates` | `deployment`、`region`、`conditions`、`unsupported_metrics`、`applies_to`、`effective_from`、`effective_until` 可选，结构见 Offering 表 |
| `[capabilities.links]` | — | URL 字典，条目均可选 |

TOML 用 `kind` 标识能力，并用 `input`、`output`、`parameters` 和 `routes` 描述它提供什么以及如何接入。相同能力的多条 Route 和输入输出合并到同一条记录，不再填写独立 ID 或逐模型支持清单。编译时 `input`、`output` 分别映射为公开 JSON 的 `input_slots`、`output_specs`。

编译器根据 Provider 和市场目录生成完整 Service 的 `provider_id` 与 `id`，并从市场字典生成展示名称 `name`。这些字段不属于 `service.toml`，无需重复填写；公开 JSON 仍会包含它们。

Service 源文件不填写币种汇总。编译时从该市场的 Offering、独立能力和套餐价格自动生成页面及 API 的币种摘要；每条价格仍保留自身的币种。

Endpoint 与 Capability 均嵌套在 Service 下，因此不重复写 `service_id` 或市场字段。`api_region` 是 API 地址的区域标签，不等同于账号市场。Capability 不拆成逐模型记录；同类能力的多个动作放进同一条记录。`required_plan_ids` 只能引用当前市场 Service 下的 Plan。

### 3.5 Offering：`offerings/<url_encoded_model_id>.toml`

```toml
id = "example-chat"
model_ref = "example-ai/example-chat"
status = "active"

[links]
documentation = "https://example.com/docs/chat"
pricing = "https://example.com/pricing"

[[pricing]]
currency = "USD"
deployment = "international"
region = "新加坡"

[[pricing.rates]]
metric = "input"
context = "short"
unit = "per_1m_tokens"
value = "3.00"

[[pricing.rates]]
metric = "output"
unit = "per_1m_tokens"
value = "15.00"

[[pricing.rates]]
metric = "cache_write"
ttl = "5min"
unit = "per_1m_tokens"
value = "3.75"

```

| 字段 / 表 | 必需 | 可选字段与说明 |
|---|---:|---|
| `id` | 是 | Provider API 实际接受的原始模型调用 ID；同一市场唯一，也是文件名来源 |
| `model_ref` | 是 | 规范 Model ID；暂时无法对应时写 `"unknown"`，编译公开 JSON 时转换为 `null`，不得猜测引用 |
| `status` | 否 | `active`、`restricted`、`deprecated`、`retired` 或 `unknown`；统一表示供应和使用限制 |
| `[links]` | 否 | Offering 相关 URL 字典，所有条目均可省略 |
| `[[pricing]]` | 否 | 每组必填 `currency` 和 `rates`；`deployment`、`region`、`conditions`、`unsupported_metrics`、`applies_to`、`effective_from`、`effective_until` 可选 |
| `[[pricing.rates]]` | `metric`、`unit`、`value` | `ttl`、`context`、`quantity`、`list_value` 可选；金额使用十进制字符串 |
| `[[pricing.conditions]]` | `field`、`value` | 仅用于其他价格条件；`operator` 可选，省略表示 `eq`。也可用 `all`、`any`、`not` 组合条件 |

`deployment` 记录 Provider 标注的部署范围，例如 `international`；`region` 记录具体部署地点，例如新加坡。两者可以同时出现，未限定时省略。`conditions` 只表达其他价格条件。费率中的 `context` 可记录 `short`、`long` 或明确的 Token 门槛，`ttl` 记录缓存价格的时长，例如 `5min`。不同币种、部署范围、区域或其他条件的价格分别记录；Plan 订阅价放在 Plan 文件，不放入 Offering。

`status = "restricted"` 表示 Offering 仍在供应，但有账号资格或区域限制；`retired` 表示有官方依据确认已停止供应。Offering 不再分别填写 `supply_status` 与 `availability`。

Offering 不单独填写展示名或调用别名；页面和公开目录始终展示 `id` 中的 Provider API 调用 ID。

每个 Offering 文件只写一条记录，不写 `service_id`、Route、Model 限制或 Model 能力。Service 由父目录确定；模型规格只在 Model 文件维护。来源、证据和构建版本等内部信息不写入社区维护的事实文件。

### 3.6 Plan：`plans.toml`

```toml
[[plans]]
id = "go"
name = "Go"
currency = "CNY"
description = "入门使用套餐"
credits = 20000

[[plans.billing_options]]
billing_period = "month"
price = "49"
sale_price = "24.5"
sale_type = "first_month"

[[plans]]
id = "pro"
name = "Pro"
currency = "CNY"
credits = 50000

[[plans.billing_options]]
billing_period = "year"
price = "588"
sale_price = "490"

[plans.allowance]
requests_per_day = 1000

[plans.links]
official = "https://example.com/plans"
```

`plans.toml` 使用 `[[plans]]` 表示一条 Plan，可以重复添加。Plan ID 在同一市场内唯一；文件中的顺序只用于展示，不代表优先级。若市场没有套餐，可不创建此文件。

| 字段 / 表 | 必需 | 可选字段与说明 |
|---|---:|---|
| `plans.id` | 是 | 当前市场内唯一的 Plan ID；Service 引用和公开 JSON 均使用此 ID |
| `plans.name` | 是 | 套餐名称 |
| `plans.currency` | 否 | 所有计费选项共用币种；无已知价格时省略，有价格时必须提供 |
| `plans.ratio` | 否 | 相对同市场基准套餐的额度倍数，使用十进制字符串 |
| `plans.credits` | 否 | 精确额度用非负整数；估算额度用带 `~` 前缀的字符串 |
| `plans.description` | 否 | 套餐说明 |
| `[plans.allowance]` | 否 | 其他配额的数字字典；具体键按来源事实记录 |
| `[plans.links]` | 否 | 官方套餐页等 URL 字典，所有条目均可省略 |
| `[[plans.billing_options]]` | 是 | 每条 Plan 可有多项计费方式；每项必填 `billing_period`，其余字段可选 |
| `plans.billing_options.billing_period` | 是 | `month`、`quarter`、`year`、`custom` 或 `one_time` |
| `plans.billing_options.price` | 否 | 标准价，十进制字符串 |
| `plans.billing_options.sale_price` | 否 | 优惠价，十进制字符串；保留标准价字段 |
| `plans.billing_options.sale_type` | 否 | 当前仅支持 `first_month`，表示优惠仅适用于首个计费月 |

`ratio` 与 `credits` 二选一。所属 Service 由市场目录确定，不在 TOML 中重复填写。Plan 不记录 `promotion_note`、`promotion_valid_until`、`eligible_offerings`、`offer_type` 或估算标记；优惠说明由价格与 `sale_type` 表达，Credits 估算由 `~` 前缀表达。

## 4. 读取与公开 JSON

- 构建器按目录读取 TOML，补齐 Model ID、Provider ID、Service 市场、`service_id`、Plan ID 和 Service 引用，再执行现有 Schema 与语义校验。Service 的 `plan_ids` 从 `plans.toml` 生成。
- TOML 是仓库维护格式；网站和公开 API 仍读取构建生成的数据，公开 API 继续输出 JSON。
- 公共资源路径、Model 与 Provider 的身份字段以及 `schema_version: 1.0.0` 保持不变。字段归属按本 PRD 更新。
- 市场与能力的公开结构不变。Service 独立能力仍投影到对应市场的 `capabilities`。
- `integrations.ai_sdk` 在源 TOML 中可省略，公开 Provider JSON 始终输出布尔值，省略时为 `false`。
- 价格的 `deployment` 和 `region` 作为价格组字段输出；其他价格条件保留在 `conditions`。价格数组顺序只用于展示，不用于判定价格优先级。

## 5. 迁移与验收

1. 通过现有 JSON 源文件生成 TOML，不保留同一对象的 JSON/TOML 双重权威版本。
2. 比较迁移前后的公开编译结果，确认 Model、Provider、Service、Offering、Plan、能力和价格没有意外增删或改值。
3. Model 身份清单必须保持一致。模型规格只有在开发商资料支持时才能迁入 Model；不同 Provider 的冲突值不自动合并。
4. Provider Offering 仅保留供应事实和价格；模型规格归 Model，市场 API Route 归 Endpoint，独立服务 Route 归 Capability。
5. 每个有套餐的市场使用一个 `plans.toml` 保存全部 Plan；Plan ID 不重复，Service 和 Capability 的 Plan 引用均可解析。
6. Service 市场由受支持的目录 ID 映射；未知目录 ID、重复身份、无效 TOML、非法字段或悬空引用均导致校验失败，并指出文件路径。
7. 转换价格时保留币种、单位、部署范围、部署区域、其他条件、缓存 TTL、上下文档位和原始十进制金额。不得用地区或邻近记录推断价格。
8. `integrations.ai_sdk` 按现有明确登记值迁移；没有登记值的公开输出为 `false`。
9. TOML 不支持 `null`。现有显式 `null` 逐项确认表达方式，不得用默认值静默替代。
10. 更新后的公开资源通过 JSON Schema 与语义校验；API 路径、响应格式和 `schema_version` 不变。

## 6. 影响与风险

| 范围 | 变化 |
|---|---|
| Model 源数据 | 从每模型 JSON 改为开发商目录、`developer.toml` 和每模型 TOML |
| Provider 源数据 | Provider、市场 Service、单条 Offering 分文件保存；每个市场的 Plan 集中在 `plans.toml` |
| 公开契约 | 仍为 JSON；Model / Offering 字段归属和 `output_dimensions` 范围字段按本 PRD 更新 |
| 采集器 | IR 与本 PRD 使用相同的 `input` / `output` 字段；投影后按公开契约输出 `input_slots` / `output_specs` |
| 构建与校验 | 增加 TOML 读取、目录身份补齐、字段校验和迁移对照 |

- **路径身份错误：** 文件重命名可能改变 Model 或 Offering ID；迁移必须比较完整 ID 清单。
- **事实丢失或归属错误：** 必须对照编译前后的公开记录；不能把 Provider API 限制误写成 Model 限制，也不能把独立能力挂到模型上。
- **未知值语义改变：** TOML 无 `null`；迁移不得把未知值改成零、否或无限制。
- **回滚：** 出现问题时，使用同一提交恢复旧源文件与读取逻辑。发布前无需新增 API 路径或兼容版本。

## 7. 同步文档

实施时更新 `docs/data/schema.md`、Model 与 Provider 数据说明、贡献指南、采集规范和数据目录说明。公开 JSON Schema、资源路径及版本号保持同步。

## 8. 完成记录

Model、Provider、市场 Service、Offering 和 Plan 源文件已迁移为 TOML。采集 IR 和 TOML 使用 `input` / `output`；生成公开 Provider JSON 时再投影为契约字段 `input_slots` / `output_specs`。自动采集来源、候选和快照仍使用原有格式。公开 `/v1/*.json` 路径与 Schema 不变。
