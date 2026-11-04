# PRD-API-1 · 公开静态数据 API 与用户 JSON

> 状态：🚧 部分实施 · 静态公开 API 与 JSON Builder 已落地；本 PRD 的部分早期交互、字段和门禁要求与当前实现不一致，不能据此标为已完成。
> 目标契约：/v1/ · Schema 版本由首次发布契约确定
> 关联决策：[ADR 0001](../../adr/0001-静态公开数据与动态官方接入分离.md)、[ADR 0027](../../adr/0027-首次上线前直接定义v1模型注册表契约.md)、[ADR 0029](../../adr/0029-来源证据台账与公开数据分离.md)、[ADR 0037](../../adr/0037-无状态只读自定义查询API.md)、[ADR 0038](../../adr/0038-公开参考汇率与Builder价格币种归一化.md)

## 1. 背景

ProviderList 的数据对开发者有用，前提是他们能直接下载并使用结构稳定的 JSON，按 Provider、市场、模型类型或 Offering 查找当前供应信息，并核对调用协议、Route、能力和价格。网站与 API 尚未正式上线，尚无需要维持的外部 v1 消费者。本项目可以在首次发布前直接确定 /v1/ 的对外 JSON 结构。

标准公开资源采用静态产物；Builder 的唯一动态查询是从同一部署的静态站点数据集进行无状态投影。数据来源、状态审核和目录构建继续由仓库流水线负责。本 PRD 将归一化数据设计作为首次 v1 用户契约：公开路径直接采用用户 JSON，不增加 /normalized/ 子路径，不为尚未发布的结构保留并行兼容版本。

## 2. 目标

1. 为使用者提供静态、可缓存、可通过 Schema 校验的 v1 JSON。
2. 提供 Provider 全量视图、按类型规范模型列表和扁平 Offering 列表，三者都表达当前供应。
3. 明确区分供应状态、厂商生命周期事实、市场/账号限制和接口可调用性。
4. 在证据充分时公开 API 接入地址、接口类型、模型级 Route、Route 参数、独立能力、Plan 和原币价格。
5. 保持发布结果可复现：同一数据版本对应字节完全一致的公开产物。
6. 确保所有供应商相关描述来自官方采集及可追溯证据，不由维护者手写补充。
7. 首次正式发布前建立可信数据门禁；未经确认的 Active 不得进入正式公开 API。

## 3. 非目标

- 不提供数据库查询、实时上游查询、写入、用户账号、API Key 或分页服务；唯一动态查询仅从已发布静态站点数据投影。
- 不实现官方写入 API、用户账号、API Key 管理或推理代理。
- 不保证目录包含 Provider 历史上所有型号，也不把 unknown 或 retired 默认输出到稳定 v1 供应 API。
- 不保证有模型供应记录就意味着当前账号可直接调用；模型可调用性由独立 Route callability 和可用性证据表达。
- 不提供可保存的用户自定义 API、任意表达式或字段映射；API 页 Builder 可把受限筛选与投影编码到只读查询 URL。
- 不从一次采集缺失推断退役，不把 null 或缺字段解释为零价格、无限制或不支持。
- 不在公开 API 中暴露内部来源台账、审阅记录或审阅者身份。
- 不以本 PRD 要求新增 Python/Node SDK；SDK 属于独立产品范围。

## 4. 用户与主要任务

| 用户 | 需要完成的任务 |
|---|---|
| 应用开发者 | 下载单个 Provider JSON，查看市场、模型 ID、Route、接口和可信价格 |
| 网关/目录开发者 | 下载按模型类型划分的规范模型列表，或拉取扁平 Offering 列表做本地筛选 |
| 需要定制数据的开发者 | 在 API 页面选择数据范围、字段与形状，生成可下载 JSON 或可持续读取的查询 API URL |
| 站点访问者 | 通过站点筛选当前及其他状态数据，查看完整 Provider 详情 |
| ProviderList 维护者 | 依据可追溯证据确认状态、更新事实，并通过 CI 获得可审阅的发布结果 |

## 5. 产品与数据要求

### 5.1 v1 资源及路径

稳定 API 资源直接位于 /v1/。路径不得包含 /normalized/。

| 路径 | JSON 资源 | 内容与边界 |
|---|---|---|
| /v1/providers/{provider_id}.json | Provider | Provider 身份及各账号市场的 API、接口、能力、套餐与 Active Offering |
| /v1/models/type/{type}.json | ModelList | 指定模型类型下，至少被一个已审核 Active Offering 引用的规范模型 |
| /v1/models/type/all.json | ModelList | 跨所有类型的一次性列表；只含至少被一个已审核 Active Offering 引用的规范模型，条目保留各自 type |
| /v1/offerings.json | OfferingList | 全 Provider、全市场的 Active Offering 扁平列表 |
| /v1/fx.json | FxReferenceDocument | 可选参考汇率快照；存在有效上游快照时发布并列入 Manifest |
| /v1/manifest.json | Manifest | 当前发布版本、Schema 版本、所有 v1 文件及校验和 |
| /v1/schema/*.json | 公共 Schema | 与发布 JSON 对应的结构契约 |
| /v1/snapshots/{data_version}/... | 不可变快照 | 与 Manifest 所列当前版本内容一致，可用于固定版本下载 |
| /assets/datasets/offerings.json | 站点状态索引 | Active、Unknown、Retired 全量筛选索引；属于站点资产，不承诺稳定 API 兼容 |
| /assets/datasets/providers/{provider_id}.json | 站点 Provider 详情数据 | 页面使用的完整市场与模型详情数据；属于站点资产，不承诺稳定 API 兼容 |

Manifest 与 API 文件同次发布。/assets/datasets/ 不属于 /v1/，不得被 SDK 或外部使用者当作稳定契约依赖。

### 5.2 通用信封与版本

所有版本化 JSON 带有 schema_version、data_version、generated_at 与 resource。列表资源还提供 items 和 total。不同资源的版本字段必须指向同一个数据快照。

- schema_version 标识数据结构契约；解析行为以对应公开 Schema 为准。
- data_version 标识全部影响本次公开输出的数据输入。
- generated_at 是该版本固定的生成时间，不得在相同输入重建时变化。
- Manifest 列出的每个文件都必须存在，校验和必须与文件字节一致。

### 5.3 当前供应与状态准入

供应状态是 Offering 粒度的公开目录准入决定，取 active、unknown、retired。它不是厂商生命周期字段的别名，也不替代市场/账号限制。

| 数据 | 职责 |
|---|---|
| lifecycle | 厂商明确声明的型号生命周期事实，由生命周期事件与既有状态机维护 |
| availability | 地区、账号资格、申请/白名单和使用范围限制 |
| supply_status | Offering 是否进入默认公开供应目录 |
| review | 该供应准入决定是否经过审核 |

准入规则：

1. 默认稳定 API 只包含 supply_status: active 且 review: confirmed 的 Offering；稳定 API 不含 supply_status 字段。
2. 本地开发和测试构建允许 active + pending，以便检查候选 JSON；正式 Publish 必须拒绝任何 active + pending 或未确认的 Active。
3. 缺少状态台账记录的 Offering 按 unknown 纳入站点状态索引，不进入稳定 API；缺失情况进入覆盖报告。
4. availability: restricted 仅是迁移时的保守初始映射，不是持续推断规则，也不自动禁止人工确认 Active。经证据确认可通过注册、付费、申请或白名单向新接入者开放的服务可以设为 Active。
5. 若证据显示仅既有老客户可继续使用，且不接受新接入者，不能因为服务仍在运行就自动设为 Active；证据不足时保持 Unknown，明确确认停供后才设为 Retired。
6. CI 检查台账与事实层的明显冲突并要求复核，但不自行推断或改写 supply_status。
7. active、unknown、retired 的状态依据、观测与复核时间保存在内部数据和来源台账；公开数据不输出审阅身份或内部证据引用。

### 5.4 Provider 与市场视图

Provider JSON 按账号市场分组。每个市场可以包含结算币种、市场官网/文档链接、API 接入地址、独立能力、Plan 和 Active Offering。

- website、documentation、套餐入口等市场相关链接必须落在对应市场视图；不得将多市场 Provider 的单一官网地址错误复制到多个市场。
- 每个事实层 Endpoint 投影为独立 API 项，不因相同 Base URL 而合并。
- base_url 为 HTTPS 官方地址；占位符原样保留，并按文档约定替换。Route 的 `path` 相对 Base URL 拼接，不能丢弃 Base URL 前缀。
- interfaces 描述接口族与规范协议，如 openai.chat、openai.responses、anthropic.messages 或 native。空数组表示接口类型尚未采集，不表示不支持。
- 每个市场的模型条目为 Offering 粒度，保留 Provider 调用 ID、可空的规范模型引用、类型、特征、限制、价格与 Route。
- API 接入地址目录不承诺每个 Endpoint 当前都绑定 Active 模型或可直接调用。模型可调用性由 Route 状态和证据表达。

### 5.5 API 计费通道

channel 描述 Endpoint 的计费/授权通道，可取 payg 或 plan，为可选字段。

- 只有官方证据能确认计费通道时才输出 channel。
- 缺省表示尚未核实，不等于 payg、plan 或“不计费”。
- 投影层不得依据 Base URL、Endpoint ID、路径或接口协议猜测并填入通道。
- plan_ids 仅在官方证据明确套餐资格关联时提供；按量价格不得默认应用到 Plan 通道。
- 批处理、实时长连接和管理面等接口形态由接口、Route、HTTP/WebSocket 方法表达，不据此推断计费通道。

### 5.6 Model、Route 与参数

- ModelList 只包含至少被一个已确认 Active Offering 引用的规范模型；不输出 Provider、市场、Offering、Route 或价格字段。
- 规范模型类型使用仓库开放模型类型词表；未知值保留并可归入 Other 展示，不得静默映射成 chat。
- Provider JSON 中 Route 绑定到具体 Offering 和 API 项。Provider 声明某 Endpoint 支持一种协议，不得推导该 Provider 的所有模型都支持该协议。
- Route 参数只包含该 Offering 经该 Route 使用时有来源证据支持的参数。不得将 Operation 参数不加核实地复制到所有协议/Route。
- features 表示有证据支持的模型层能力事实，不承诺每一条 Route 都以相同方式提供；Route 特有的参数、限制和行为留在 Route。
- 未采集到输入输出、规格或参数描述时保持未知，不补写人工说明。

### 5.7 价格、Plan 与独立能力

- 价格保留原始币种、原计量单位和条件规则；金额使用十进制字符串，不能用 JavaScript Number 做金额转换或校验。
- "0" 只表示官方证据确认免费；未取得可信价格时省略 pricing，不得写成零。
- 条件价、缓存价、Batch/Priority/长上下文价格及适用范围保留各自规则；适用通道不同的价格表不能合成为无条件摘要。
- 独立 Service Capability 不绑定规范 Model、不计入模型供应数量；所需 Plan 通过可校验 ID 关联。
- Plan 仅公开有来源依据的名称、账期、价格、促销和官方链接。缺失价格不写 "0"。

### 5.8 供应商相关描述与来源

任何供应商相关的描述文本（例如输入/输出说明、参数描述、能力说明、Plan 描述和 API 文档说明）必须来自 Provider 或型号所属开发商的官方资料，并能在内部来源台账中定位到采集页面/接口、页面位置或原始断言及采集时间。

- 禁止维护者手动撰写或润色供应商描述后写入正式数据或公开 JSON。
- 采集器可以提取和规范化字段结构，但不得把没有来源支持的解释作为厂商原文发布。
- 缺少官方描述时省略描述字段；字段本身的 ID、类型、必填性等结构化事实也必须有对应官方依据。
- 公开 API 遵守来源证据与公开数据分离；消费者可访问官方文档链接，内部证据台账不作为公开字段输出。

### 5.9 站点数据集

站点筛选索引包含所有 Offering 与 supply_status，可以支持 Active、Unknown、Retired 多选。它只提供筛选所需的身份、类型、状态以及必要摘要，不重复存 Provider 级 API、Route、能力和 Plan。

页面需要 Provider 全量详情时按 provider_id 读取站点 Provider 文档。状态数据集和 Provider 文档必须与同一发布构建、同一 data_version 一起生成。

### 5.10 v1 JSON 完整字段表

本节是本 PRD 的字段级验收基线，覆盖稳定 API、站点数据集和构建期状态报告。字段表按公开 JSON 的实际嵌套路径展开；`required` 表示对象中必须出现，`optional` 表示有可信值时才出现。除明确允许 `null` 的字段外，未知值通过省略可选字段表达；不得用空字符串、`0` 或占位文案代替未知。数组字段即使暂时没有条目也保留空数组，除非本表注明字段本身应省略。

Schema 中的 `$ref` 在此表中展开成其实际类型。对象默认拒绝未定义字段；开放键对象及扩展枚举会单独注明。金额始终是十进制字符串，`quantity` 是非负数值型计量倍率，不是金额。

#### 5.10.1 通用信封与 Manifest

Provider、ModelList、OfferingList、站点 Dataset、内部 Supply Status Report 均带通用信封。`resource` 按资源固定取值。

| 字段 | 类型 | 必填 | 适用资源 | 语义 |
|---|---|---:|---|---|
| `schema_version` | SemVer 字符串 | 是 | 全部文档 | JSON 结构契约版本 |
| `data_version` | 非空字符串 | 是 | 全部文档 | 全部影响产物的输入所确定的内容版本 |
| `generated_at` | ISO 8601 日期时间字符串 | 是 | 全部文档 | 版本固定的生成时间；同一输入重复构建不得变化 |
| `resource` | 字符串常量 | 是 | 全部文档 | `provider` / `model_list` / `offering_list` / `offering_dataset` / `supply_status_report` |
| `item` | ProviderView 对象 | 是（仅 Provider 文档） | Provider | 此 Provider 的身份、市场和供应视图 |

下列字段仅用于列表信封：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `items` | 对象数组 | 是 | 当前资源的记录集合；无记录时为空数组 |
| `total` | 非负整数 | 是 | `items` 的记录数；必须与数组长度相同 |
| `type` | 字符串 | 是（仅 ModelList） | 单类型列表须与每个 `items[].type` 一致；跨类型列表固定为 `all`，条目保留各自模型类型 |

`/v1/manifest.json` 的字段如下。Manifest 自身不计入 `files[]`，避免自哈希循环；清单覆盖同次发布的其余 `/v1/` 文件。

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `schema_version` | SemVer 字符串 | 是 | 文件契约版本 |
| `data_version` | 非空字符串 | 是 | 此次发布版本；须与被列文件一致 |
| `generated_at` | ISO 8601 日期时间字符串 | 是 | 此次构建固定时间 |
| `catalog_status` | `published` | `draft` | 是 | 发布目录状态；正式发布只允许 `published` |
| `files` | FileEntry 数组 | 是 | 当前发布的文件清单，按 `path` 确定性排序 |
| `source_revisions` | string → string 对象 | 否 | 可复现构建所使用的来源版本；键开放 |

FileEntry：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `path` | 绝对站点路径字符串 | 是 | 被清单覆盖的静态文件路径 |
| `sha256` | `sha256:` 加 64 位小写十六进制字符串 | 是 | 文件原始字节的 SHA-256 |
| `bytes` | 非负整数 | 是 | 文件 UTF-8 字节数 |

#### 5.10.2 Provider 及市场对象

ProviderView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | ProviderId 字符串 | 是 | 稳定 Provider 标识 |
| `name` | 非空字符串 | 是 | 品牌名称 |
| `logo` | HTTPS URL 字符串 | 否 | 品牌 Logo 地址 |
| `markets` | AccountMarket → MarketView 对象 | 是 | 按账号市场索引；市场键为 `CN`、`GLOBAL`、`OTHER` 或 `UNKNOWN` |

MarketView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `currencies` | CurrencyCode 数组 | 是 | 市场结算币种；空数组表示未取得可信币种 |
| `website` | HTTPS URL 字符串 | 否 | 该市场官方入口 |
| `links` | string → HTTPS URL 对象 | 否 | 市场官方链接集合；键开放，如 overview、pricing、api、console、signup、models、plans |
| `apis` | ApiView 数组 | 是 | 接入地址目录；无已采集项时为空数组 |
| `capabilities` | IndependentCapabilityView 数组 | 是 | 独立服务能力；不绑定模型 |
| `plans` | PlanView 数组 | 是 | 有官方证据的套餐；被 API 或能力引用的 Plan 必须在此解析 |
| `models` | ModelView 数组 | 是 | 此市场的供应记录；一项对应一个 Offering |

ApiView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | 非空字符串 | 是 | 在 Provider 范围内唯一；格式为 `provider_id/endpoint_slug` |
| `base_url` | HTTPS URL 模板字符串 | 是 | 官方 API 基础地址；允许保留官方占位符 |
| `channel` | `payg` | `plan` | 否 | 计费/授权通道；仅有官方证据时提供，省略表示未知 |
| `interfaces` | ApiInterfaceId 字符串数组 | 是 | 此接入地址确认支持的接口族/协议；空数组表示未采集，不表示不支持 |
| `plan_ids` | 非空字符串数组 | 否 | 已有证据确认适用此接入地址的套餐 |
| `documentation` | HTTPS URL 字符串 | 否 | 此接入地址官方文档 |
| `routes` | RouteView 数组 | 否 | 此 API 地址下的协议、方法和路径定义 |

当 `channel` 缺省时，`plan_ids` 仍仅能在有独立证据确认适用时出现；不得根据 endpoint 名称、Base URL 或路径推断。若出现 `channel: payg`，不得同时声明 `plan_ids`。

#### 5.10.3 模型、Route 与参数对象

ModelView（Provider 市场中的 Offering 投影）：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `type` | ModelType 字符串 | 是 | 规范主类型；开放枚举，未知值不得映射为 `chat` |
| `id` | 非空字符串 | 是 | 当前市场内的 Offering ID |
| `model_id` | 非空字符串 | 是 | Provider 原始调用 ID，保留大小写及标点 |
| `model_ref` | CanonicalModelId 字符串或 `null` | 是 | 规范模型身份；未确认时为 `null`，不得编造 |
| `features` | string → boolean 或 `null` 对象 | 是 | 模型本身能力；键开放，缺键表示未登记，`null` 表示值未知 |
| `limits` | ModelLimits 对象 | 否 | 官方证据明确的模型限制 |
| `pricing` | PricingView 对象 | 否 | 该 Offering 可信价格；无可信价格时整个字段省略 |
| `operations` | OperationView 数组 | 否 | Offering 的任务、参数及各自 Route |

ModelLimits：所有字段均可选，数值为大于等于 0 的整数。

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `context` | 非负整数 | 否 | 上下文容量 |
| `output` | 非负整数 | 否 | 最大输出量 |
| `input` | 非负整数 | 否 | 单次输入上限；不得无依据地从 context 推算 |

RouteView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `interface` | ApiInterfaceId 字符串 | 是 | 此 Route 的具体协议 |
| `method` | 非空字符串 | 是 | HTTP 方法或 `WEBSOCKET` |
| `path` | 以 `/` 开头的非空字符串 | 是 | 相对 Base URL 的请求路径；拼接须保留 Base URL 前缀 |
| `callability` | 枚举字符串 | 否 | `documented_only` / `declarative_ready` / `adapter_required` / `api_probed` |
| `documentation` | HTTPS URL 字符串 | 否 | 此 Route 的官方文档 |

`apis[].routes` 是 API 地址目录；Offering 的 `OperationView.routes` 是该任务使用的路由，两处按职责分别记录，不使用 Route ID 交叉引用。

OperationView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | 非空字符串 | 是 | 同一 Offering 或 Capability 内的任务 ID |
| `kind` | 非空字符串 | 是 | 任务类型 |
| `routes` | RouteView 数组 | 否 | 此任务的协议、方法和路径 |
| `parameters` | string → ParameterView 对象 | 否 | 此任务接受的参数；键开放 |

ParameterView 的全部字段均为可选；范围、默认值、枚举和描述只从官方来源采集：

| 字段 | 类型 | 语义 |
|---|---|---|
| `supported` | boolean 或 `null` | `true` 有证据支持；`false` 官方明确不支持；`null` 无可信值 |
| `type` | 字符串 | 官方参数类型，如 number、integer、string、boolean、array、object |
| `min` / `max` / `step` | number | 官方声明的数值范围/步长 |
| `default` | 任意 JSON 值 | 官方明确声明的默认值 |
| `enum` | 任意 JSON 值数组 | 官方声明的离散可选值 |
| `required` | boolean | 官方声明是否必需 |
| `nullable` | boolean | 官方声明是否允许 null |
| `description` | 字符串 | 官方来源采集的参数描述 |

#### 5.10.4 独立能力与套餐对象

IndependentCapabilityView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | 非空字符串 | 是 | 市场内能力标识 |
| `kind` | 开放枚举字符串 | 是 | 能力种类，如 `web_search`、`file_storage`、`batch`、`tokenizer` |
| `description` | 字符串 | 否 | 官方资料采集的能力说明 |
| `required_plan_ids` | 非空字符串数组 | 是 | 可满足能力门槛的套餐 ID；空数组表示无已知套餐门槛 |
| `base_url` | HTTPS URL 字符串 | 含 Route 时是 | 此能力动作的 API 基础地址 |
| `routes` | RouteView 数组 | 否 | 此能力动作自己的路由；Route 无独立 ID |
| `parameters` | string → ParameterView 对象 | 否 | 此能力动作接受的参数 |
| `pricing` | PricingView 数组 | 否 | 此能力动作的价格 |
| `documentation` | HTTPS URL 字符串 | 否 | 官方能力文档 |

每条 Capability 表示一个动作，不再嵌套 `operations`。一个服务有多个动作时，每个动作使用独立 Capability 记录。

PlanView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | 非空字符串 | 是 | 市场内套餐标识 |
| `name` | 非空字符串 | 是 | 官方套餐名称 |
| `description` | 字符串 | 否 | 官方资料采集的套餐说明 |
| `links` | string → HTTPS URL 对象 | 否 | 官方套餐链接；键开放 |
| `billing_options` | BillingOption 数组 | 是 | 官方套餐账期价格选项 |

BillingOption：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `period` | 非空字符串 | 是 | 账期或计费周期 |
| `price` | PlanPrice 对象 | 是 | 正式价格；不得用缺失值代替为零 |
| `promotional_price` | PlanPrice 对象 | 否 | 官方促销价格 |
| `promotion_note` | 字符串 | 否 | 官方促销说明 |
| `promotion_valid_until` | 日期字符串 | 否 | 促销结束日期 |

PlanPrice：`currency`（CurrencyCode，必填）与 `amount`（DecimalString，必填）。

#### 5.10.5 价格对象

PricingView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `rate_cards` | RateCardView 数组 | 是 | 完整原币价格规则；出现 PricingView 时至少按 Schema 提供该数组 |
| `summaries` | CurrencyCode → PricingSummaryView 对象 | 否 | 可比较的每百万 Token 摘要；键为币种；只允许同一适用范围的 per-1M-token 价格生成 |

RateCardView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | 非空字符串 | 是 | 价格表标识 |
| `currency` | CurrencyCode | 是 | 官方原始价格币种 |
| `unit` | BillingUnit 开放枚举字符串 | 是 | 计价单位；未知单位保留原值，不并入其他单位 |
| `offer_type` | `standard` / `promotion` / `subscription` / `unknown` | 否 | 价格类型 |
| `rules` | PriceRuleView 数组 | 是 | 条件价规则 |
| `effective_from` / `effective_until` | ISO 8601 日期时间字符串 | 否 | 价格生效区间 |
| `applies_to` | 非空字符串数组 | 否 | 有证据时引用同市场 `apis[].id`；缺省不代表适用于所有通道 |

PriceRuleView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | 非空字符串 | 是 | 规则标识 |
| `priority` | 整数 | 是 | 规则优先级 |
| `conditions` | PriceCondition 数组 | 否 | 隐式 AND；包含地区、部署范围与调用条件。叶子字段为 `{ field, operator?, value }`，省略 `operator` 表示 `eq` |
| `rate_items` | RateItemView 数组 | 否 | 此规则下的报价项 |
| `unsupported_metrics` | Metric 字符串数组 | 否 | 官方明确标记不支持的计量项；未列出不代表不支持 |
| `effective_from` / `effective_until` | ISO 8601 日期时间字符串 | 否 | 规则生效区间 |

RateItemView：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `metric` | Metric 开放枚举字符串 | 是 | 计量项，如 input、output、cache_read、generated_image |
| `unit` | BillingUnit 开放枚举字符串 | 是 | 此报价项的计价单位 |
| `quantity` | 非负 number | 是 | 计量倍率 |
| `amount_decimal` | DecimalString | 是 | 实际金额；十进制字符串 |
| `list_amount_decimal` | DecimalString | 否 | 官方同时披露的标价；十进制字符串 |

PricingSummaryView：`input` 与 `output`（DecimalString，必填）；`cache_read` 与 `cache_write`（DecimalString，可选）。它只表达每百万 Token 价格摘要，不替代原始条件规则。

#### 5.10.6 ModelList 与 Offering 列表条目

ModelList Item：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `id` | CanonicalModelId | 是 | 规范模型身份 |
| `name` | 非空字符串 | 是 | 规范模型名称 |
| `type` | ModelType | 是 | 规范主类型；须匹配外层 `type` |
| `developer_name` | 字符串 | 否 | 型号开发厂商名称 |
| `release_date` | 日期字符串 | 否 | 有证据的发布日期 |
| `modalities` | ModalityView 对象 | 否 | 模型输入/输出模态 |
| `features` | ModelFeatures 对象 | 否 | 有证据的模型级能力 |
| `limits` | ModelLimits 对象 | 否 | 有证据的模型限制 |

ModalityView 的 `input` 与 `output` 均为可选字符串数组；省略表示未知，空数组只表示已核实为空。

OfferingList Item（稳定 API 的 Active 项）：

| 字段 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `offering_key` | 字符串 `provider_id/service_id/offering_id` | 是 | 标准 `/v1/offerings.json` 资源中的全局唯一 Offering 身份；不属于 JSON Builder 自定义投影字段 |
| `provider_id` | ProviderId | 是 | Provider 标识 |
| `service_id` | 非空字符串 | 是 | Service 标识；扁平视图保留以供复算 key |
| `market` | AccountMarket | 是 | 账号市场 |
| `offering_id` | 非空字符串 | 是 | Offering 标识 |
| `model_id` | 非空字符串 | 是 | Provider 调用 ID |
| `model_ref` | CanonicalModelId 字符串或 `null` | 是 | 规范模型关联；未确认时为 null |
| `type` | ModelType | 是 | 模型主类型 |
| `features` | ModelFeatures 对象 | 否 | 模型能力 |
| `limits` | ModelLimits 对象 | 否 | 模型限制 |
| `pricing` | PricingView 对象 | 否 | 可信价格；无可信价格时省略 |

OfferingDataset Item 与上述字段完全相同，另有必填 `supply_status`（`active` / `unknown` / `retired`）。该状态字段只允许出现在站点侧数据集，不得出现在稳定 Provider、ModelList 或 OfferingList JSON。

#### 5.10.7 内部状态覆盖报告（不发布）

SupplyStatusReport 只用于构建与 CI，不进入 `/v1/` 或站点公共资产：

| 字段路径 | 类型 | 必填 | 语义 |
|---|---|---:|---|
| `totals.active` / `totals.unknown` / `totals.retired` | 非负整数 | 是 | 站点全量 Offering 的状态计数 |
| `coverage.fact_offerings` | 非负整数 | 是 | 事实层 Offering 数 |
| `coverage.ledger_entries` | 非负整数 | 是 | 状态台账条目数 |
| `coverage.missing_ledger_entries` | 非负整数 | 是 | 有事实、缺台账的条目数；按 Unknown 处理 |
| `coverage.stale_ledger_entries` | 非负整数 | 是 | 台账中已无对应事实的条目数；仅报告，不自动删改 |
| `missing[]` | MissingOffering 对象数组 | 是 | 缺台账记录的 Offering 清单 |
| `by_provider[]` | ProviderStatusSummary 对象数组 | 是 | 按 Provider 汇总状态和缺失数量 |
| `notes[]` | 字符串数组 | 否 | 构建说明 |

MissingOffering 必填字段：`provider_id`、`service_id`、`market`、`offering_id`、`model_id`。ProviderStatusSummary 必填字段：`provider_id`、`active`、`unknown`、`retired`、`missing`；计数均为非负整数。

#### 5.10.8 类型词表和缺省规则

| 类型别名 | 约束 |
|---|---|
| `SemVer` | 语义化版本字符串 |
| `IsoDateTime` | ISO 8601 日期时间 |
| `DecimalString` | 十进制金额字符串；禁止二进制浮点金额 |
| `CurrencyCode` | ISO 4217 三字母代码；Schema 列出已知值，扩展规则以冻结 Schema 为准 |
| `AccountMarket` | `CN` / `GLOBAL` / `OTHER` / `UNKNOWN` |
| `ModelType` | 开放字符串枚举；按仓库标准模型类型词表解释 |
| `Metric` / `BillingUnit` / `ApiInterfaceId` | 开放字符串枚举；保留未知官方值，不静默映射 |
| `Url` | HTTPS URL |
| `ProviderId` / `CanonicalModelId` | 稳定 ID 字符串；具体 pattern 由公开 Schema 定义 |

字段清单应与首次发布的 `/v1/schema/*.json`、TypeScript 类型和语义校验器逐项一致。若三者与本表不一致，属于发布前契约缺口，须先完成同步再冻结 Schema；这张表不授予实现层擅自增加字段的权限。

### 5.11 完整 Provider JSON 参考样例

以下是一个完整的 Provider 文档形状，串联信封、两个市场、API 通道、能力、Plan、模型、Route 参数和条件价格。它只用于说明 JSON 结构，不是事实数据、测试固件或可发布 Provider；示例 Provider 与值均为虚构，示例中的描述文字也不得复制为供应商描述。实际发布值必须通过官方采集并具有内部来源记录。样例中的 `channel` 有值和缺省两种情况，展示缺省表示未确认。Provider Offering 的 `features` 是模型能力布尔映射；`input` 是规范 Model 的输入模态，属于 JSON Builder 投影字段，不复制进 Provider Offering。

```json
{
  "schema_version": "1.0.0",
  "data_version": "sha256:example-only",
  "generated_at": "2026-01-01T00:00:00Z",
  "resource": "provider",
  "item": {
    "id": "sampleai",
    "name": "Sample AI (fictional)",
    "logo": "https://example.invalid/logos/sampleai.svg",
    "markets": {
      "CN": {
        "currencies": ["CNY"],
        "website": "https://example.invalid/cn",
        "links": {
          "overview": "https://example.invalid/cn/overview",
          "pricing": "https://example.invalid/cn/pricing"
        },
        "apis": [
          {
            "id": "sampleai/cn-openai",
            "base_url": "https://api.example.invalid/v1",
            "channel": "payg",
            "interfaces": ["openai.chat", "openai.responses"],
            "routes": [
              {
                "interface": "openai.chat",
                "method": "POST",
                "path": "/chat/completions",
                "callability": "documented_only",
                "documentation": "https://example.invalid/cn/docs/chat-completions"
              },
              {
                "interface": "openai.responses",
                "method": "POST",
                "path": "/responses",
                "callability": "adapter_required",
                "reasoning": {
                  "supported": true,
                  "controls": [
                    {
                      "kind": "effort",
                      "wire_path": ["reasoning_effort"],
                      "values": ["low", "medium", "high"]
                    }
                  ]
                }
              }
            ],
            "documentation": "https://example.invalid/cn/docs/api"
          },
          {
            "id": "sampleai/cn-plan",
            "base_url": "https://plan-api.example.invalid/v1",
            "channel": "plan",
            "interfaces": ["openai.responses"],
            "plan_ids": ["starter-monthly"],
            "documentation": "https://example.invalid/cn/docs/plan-api"
          },
          {
            "id": "sampleai/cn-undetermined",
            "base_url": "https://other-api.example.invalid/v1",
            "interfaces": [],
            "documentation": "https://example.invalid/cn/docs/other-api"
          }
        ],
        "capabilities": [
          {
            "id": "web-search-search",
            "kind": "web_search",
            "description": "Illustrative only; production text must come from official collection.",
            "required_plan_ids": ["starter-monthly"],
            "base_url": "https://api.example.invalid/v1",
            "routes": [
              {
                "interface": "native",
                "method": "POST",
                "path": "/tools/search",
                "callability": "documented_only"
              }
            ],
            "documentation": "https://example.invalid/cn/docs/web-search"
          }
        ],
        "plans": [
          {
            "id": "starter-monthly",
            "name": "Starter Monthly (fictional)",
            "description": "Illustrative only; production text must come from official collection.",
            "links": {
              "details": "https://example.invalid/cn/plans/starter-monthly"
            },
            "billing_options": [
              {
                "period": "month",
                "price": {
                  "currency": "CNY",
                  "amount": "99.00"
                },
                "promotional_price": {
                  "currency": "CNY",
                  "amount": "79.00"
                },
                "promotion_note": "Illustrative promotion; not a real offer.",
                "promotion_valid_until": "2026-12-31"
              }
            ]
          }
        ],
        "models": [
          {
            "type": "chat",
            "id": "cn-chat-1",
            "model_id": "sample-chat-1",
            "model_ref": "sampleai/sample-chat-1",
            "features": {
              "reasoning": true,
              "vision": null,
              "audio": false
            },
            "limits": {
              "context": 128000,
              "output": 8192,
              "input": 120000
            },
            "pricing": {
              "rate_cards": [
                {
                  "id": "cn-standard-token-prices",
                  "currency": "CNY",
                  "unit": "per_1m_tokens",
                  "offer_type": "standard",
                  "rules": [
                    {
                      "id": "short-context-standard-tier",
                      "priority": 100,
                      "conditions": [
                        {
                          "field": "service_tier",
                          "value": "standard"
                        }
                      ],
                      "rate_items": [
                        {
                          "metric": "input",
                          "unit": "per_1m_tokens",
                          "quantity": 1,
                          "amount_decimal": "2.500",
                          "list_amount_decimal": "3.000"
                        },
                        {
                          "metric": "output",
                          "unit": "per_1m_tokens",
                          "quantity": 1,
                          "amount_decimal": "10.000"
                        },
                        {
                          "metric": "cache_read",
                          "unit": "per_1m_tokens",
                          "quantity": 1,
                          "amount_decimal": "0.250"
                        },
                        {
                          "metric": "cache_write",
                          "unit": "per_1m_tokens",
                          "quantity": 1,
                          "amount_decimal": "0.500"
                        }
                      ],
                      "unsupported_metrics": ["cache_storage"],
                      "effective_from": "2026-01-01T00:00:00Z",
                      "effective_until": "2026-12-31T23:59:59Z"
                    }
                  ],
                  "effective_from": "2026-01-01T00:00:00Z",
                  "effective_until": "2026-12-31T23:59:59Z",
                  "applies_to": ["sampleai/cn-openai"]
                }
              ],
              "summaries": {
                "CNY": {
                  "input": "2.500",
                  "output": "10.000",
                  "cache_read": "0.250",
                  "cache_write": "0.500"
                }
              }
            },
            "operations": [
              {
                "id": "text-generation",
                "kind": "text_generation",
                "routes": [
                  { "interface": "openai.chat", "method": "POST", "path": "/chat/completions", "callability": "documented_only" },
                  { "interface": "openai.responses", "method": "POST", "path": "/responses", "callability": "adapter_required" }
                ],
                "parameters": {
                  "temperature": {
                    "supported": true,
                    "type": "number",
                    "min": 0,
                    "max": 2,
                    "step": 0.1,
                    "default": 1,
                    "enum": [0, 1, 2],
                    "required": false,
                    "nullable": false,
                    "description": "Illustrative only; production text must come from official collection."
                  }
                }
              }
            ]
          }
        ]
      },
      "GLOBAL": {
        "currencies": ["USD"],
        "website": "https://example.invalid/global",
        "links": {
          "overview": "https://example.invalid/global/overview"
        },
        "apis": [
          {
            "id": "sampleai/global-openai",
            "base_url": "https://global-api.example.invalid/v1",
            "interfaces": ["openai.chat"],
            "documentation": "https://example.invalid/global/docs/api"
          }
        ],
        "capabilities": [],
        "plans": [],
        "models": []
      }
    }
  }
}
```

同一模型在 5.12 Builder 中会把输入模态和能力特性作为两个独立字段输出。`input` 来源于规范 Model 的 `modalities.input`；`features` 合并规范模型能力与当前 Provider Offering 的明确参数证据。reasoning 有官方档位时输出 `{ supported: true, levels }`；temperature 有官方枚举或数值边界时输出 `{ supported: true, levels }` 或 `{ supported: true, min, max, step }`。只有支持状态而无档位/范围时输出 `true` 或 `false`；没有可信证据时省略字段，不把未知推断成 `false`。

```json
{
  "id": "sample-chat-1",
  "input": ["text", "image"],
  "features": {
    "reasoning": { "supported": true, "levels": ["low", "medium", "high"] },
    "temperature": { "supported": true, "min": 0, "max": 2, "step": 0.1 },
    "tool_calling": true
  }
}
```

### 5.12 API 页面 JSON Builder（Chat 数据构建器）

API 页面提供 Chat JSON Builder。它按 Provider、市场与供应状态筛选当前已发布 Chat Offering，并将底层 Offering 投影为面向 Agent 项目的紧凑配置。页面生成本地预览/下载和可请求的 `GET /v1/providerlist.json` 地址。浏览器预览与 Worker 使用同一个共享投影实现；查询 Worker 只从当前发布的静态数据集读取，不调用上游、不访问数据库、不存储用户配置。标准 `/v1/offerings.json` 及其他完整公开资源不受此 Builder 简化影响。

**数据选择：**

1. 可多选 Provider、市场和供应状态；不同维度之间采用 AND 语义，同一维度多选采用 OR 语义。Builder v1 固定只处理 `type=chat`，不再提供冗余模型类型筛选。
2. 默认仅选 Active。Unknown、Retired 只有用户显式启用后才能进入结果；状态从站点数据集读取。命中数按 Provider ID、市场代码与 Provider `model_id` 组成的模型身份去重计算。
3. 相同 Provider 和市场中的 Offering 若具有相同 `model_id`，会归并为一个模型。若同一模型的可投影事实互相冲突，则省略冲突字段，不任意选一条。不同 Provider 或市场始终分组隔离。
4. 无命中显示真实空结果。任何静态数据加载失败或资源 `data_version` 不一致时停止生成，不输出部分结果。

**输出结构：**

输出固定为 `{ "schema_version": "…", "data_version": "…", "generated_at": "…", "pricing_currency": "original|<ISO 4217>", "providers": [...] }`；未选择 `pricing` 时省略 `pricing_currency`。层级为 Provider → 市场 → API 与按模型类型分组的模型。Builder 预览、复制和下载使用多行、两空格缩进的 JSON；查询 API 返回语义相同的 JSON 结构。三个版本元数据取自同一发布快照，Builder 页面同时展示 Schema 版本和数据生成时间。每个 Provider 为 `{ "id", "markets" }`；`markets` 的键是市场代码（如 `CN`、`GLOBAL`），值包含 `apis` 与 `models` 对象。`models` 的键是标准模型类型，值是该类型模型数组；本版仅含 `chat`，因此可直接通过 `models.chat` 取得 Chat 模型。模型对象至少包含 `id`；可选择 `input`、`features`、`limits`、`pricing`，不再重复携带类型字段。`input` 与 `features` 分开：前者是输入模态，后者描述能力和可用控制项。`apis` 是同一市场下独立的 API 清单，不承诺与模型建立逐项关联。

```json
{
  "schema_version": "1.0.0",
  "data_version": "20261031.example",
  "generated_at": "2026-10-31T00:00:00.000Z",
  "providers": [
    {
      "id": "example-provider",
      "markets": {
        "GLOBAL": {
          "apis": [
            {
              "id": "global/openai-compatible/chat-completions",
              "name": "OpenAI-compatible",
              "channel": "chat-completions",
              "url": "https://api.example.com/v1",
              "interface": "chat-completions"
            }
          ],
          "models": {
            "chat": [
              {
                "id": "example-chat-1",
                "input": ["text"],
                "features": {
                  "reasoning": { "supported": true, "levels": ["low", "medium", "high"] },
                  "temperature": { "supported": true, "min": 0, "max": 2, "step": 0.1 },
                  "tool_calling": true
                },
                "limits": {
                  "context": 128000,
                  "output": 16000
                },
                "pricing": [
                  {
                    "currency": "USD",
                    "region": "美国（弗吉尼亚）",
                    "deployment": "全球",
                    "rates": [
                      { "metric": "input", "unit": "per_1m_tokens", "value": "1" },
                      { "metric": "output", "unit": "per_1m_tokens", "value": "4" },
                      { "metric": "cache_write", "ttl": "5min", "context": "short", "unit": "per_1m_tokens", "value": "3.75", "list_value": "4.50" }
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    }
  ]
}
```

**字段与归一规则：**

- Provider `id` 和市场代码是分组键，始终存在；模型类型是 `models` 下的分组键，模型 `id` 始终存在。可选模型字段为 `input`、`features`、`limits`、`pricing`，模型对象不重复携带 `type`。可选 API 字段为 `name` 和 `channel`；API `id`、`url`、`interface` 仅在对应事实有来源时输出。
- API 的 `id` 是稳定且有命名空间的标识，至少由 Service ID、Endpoint ID 和 Route protocol 组成，避免跨 Service 或不同 interface 冲突。`name`、`channel` 不从 ID 或 URL 推断；来源未提供时省略。
- `input` 来自规范模型的输入模态；`features` 来自规范模型能力及与该 Offering 关联的官方参数/Route 推理规格。推理档位输出为 `{ supported: true, levels }`；temperature 输出 `{ supported: true, levels }` 或 `{ supported: true, min, max, step }`。无细节时只输出有来源支持的布尔值；缺少可信数据时省略字段，不把未知写成 `false`。同一模型的 Route 规格冲突时省略详细规格，不任意选取。`limits` 来自当前市场 Offering。缺少可信数据时省略相应字段。
- `pricing` 是价格规则数组；每条保留一组来源规则，消费者格式为 `{ currency, conditions?, rates }`。地区、部署范围和其他价格条件统一放入 `conditions`；简单条件使用 `{ field, operator?, value }`，缺省操作符为 `eq`，数组中的条件均须满足，`any`、`not` 等关系保留为分组结构。`rates` 是数组，每个价格项为 `{ metric, unit, value, ttl?, context?, list_value? }`：`metric` 只表示基础计量项，金额是十进制字符串；缓存保留时间写入可选 `ttl`（如 `5min`、`1h`），上下文价格档写入可选 `context`（如 `short`、`long`、`<500000`、`>=500000`）。原价存在时在同一价格项用 `list_value` 保留。价格数组允许重复 `metric`，不同 TTL 或上下文档位分别输出，不得折叠为键值对象。旧版 `rates` 输入已迁移，不再作为兼容来源读取。不同地区、部署范围、促销或其他完整规则仍作为独立价格档输出。不得压成单一价格或因存在条件而整项省略。只有没有可信 Token 价格规则时才省略 `pricing`。默认保留原币；Builder 可选择 `/v1/fx.json` 快照中有报价的目标币种，逐个 `rates[]` 价格项换算，缺少来源或目标报价时保留该规则原币，并在响应信封中标出 `pricing_currency`。换算是参考值，不改写权威价格，也不将未知写成零；非 Token 计价项不进入此 Chat Token 定价字段。
- 选择 `apis` 时 Builder 输出市场级 `apis` 数组；关闭时省略。API 列表与模型列表分别提供，不包含模型到 API 的关联字段。
- 不支持任意 JSONPath、表达式、脚本或用户自定义映射；首版不提供字段重命名。Offering key、规范模型引用、独立能力、完整 Route、参数表和供应商源 JSON 不进入此 Builder v1 输出。

**Builder 界面：**标题为“自定义 JSON API”，不提供预设模板按钮。筛选控件和字段选择保持直接可见；查询 URL 区域标题为“API 地址”，不显示额外说明文案，URL 与复制按钮并列，复制按钮在卡片内垂直居中。

**预览、导出、查询与分享：**

1. 预览来自当前发布静态 Offering、Provider 与规范模型数据，不使用硬编码演示记录。所有依赖数据必须属于同一 `schema_version`、`data_version` 与 `generated_at`。输出完整版本信封；页面显示 Schema 版本和数据生成时间。支持复制和下载格式化 JSON，对象按多行缩进展示。
2. 分享 URL 保存 Provider/市场/供应状态/字段配置，不包含数据快照或私有信息；刷新后可恢复配置。
3. 预览与查询 API 使用相同的过滤、分组、去重、字段归一和 `{ schema_version, data_version, generated_at, providers }` 结构；模型按 `models.<type>[]` 分组，类型不再作为模型对象的重复字段。自定义投影不伪装成标准 Provider/ModelList/OfferingList 资源，也不要求为其新增公开 Schema。
4. `GET /v1/providerlist.json` 参数限于 `providers`、`markets`、`statuses`、`fields`、`currency`。`currency` 可选值为 `original` 或当前 `/v1/fx.json` 中出现的币种；省略时按 `original`。字段限于 `input`、`features`、`limits`、`pricing`、`apis`；省略 `fields` 时包含全部字段。模型类型分组和模型 `id` 与 Provider/市场分组键不可移除。服务端拒绝未知参数、非法取值、重复值、超过 4096 字符的 URL、超过 5,000 条匹配 Offering 的结果及超过 5 MiB 的响应。
5. 查询仅在 Worker 内从同版本发布的 Offering、Provider 与（选择 `input` 或 `features` 时）规范 Model 静态数据集投影，不访问数据库或上游服务；响应允许匿名跨域 GET，最多共享缓存 300 秒。查询路由不列入静态 Manifest。
6. 配置分享链接用于恢复 Builder 页面状态；查询 API 地址直接返回当前发布数据，两者用途在界面区分。

JSON Builder 本地预览与查询端点共同使用共享 Chat 投影器，确保同一发布版本和配置得到相同结果。该动态投影不纳入 Manifest，也不改变标准 API 产物。

## 6. 发布与运行要求

1. 静态资源读取由 CDN 提供；唯一动态只读查询只依赖同一部署中的静态站点数据集，不依赖数据库、实时采集或官方 API 在线状态。
2. CI 只读校验和构建，不拥有生产发布写权限；唯一 Publish 流程验证并一次性部署站点、Schema、Manifest、版本化 JSON、站点数据集与快照。
3. 发布前必须校验 Schema、跨文件引用、状态门禁、Manifest 文件集合与哈希、资源版本一致性和供应商描述证据约束。
4. 不存在的 /v1/*.json 必须返回明确 JSON 404，不得被 SPA fallback 返回 index.html。
5. 未知 Provider ID 返回 404。已知 Provider 即使没有 Active Offering，也返回合法 Provider JSON 和空模型列表；不以空列表伪装未知 Provider。
6. 发布失败时不更新当前 Manifest；历史不可变快照不得被重写。部署后冒烟须检查 JSON 内容类型、Manifest 与 JSON 哈希、Provider 文件、列表文件及 404 行为。
7. 同一输入数据、来源证据、状态台账和投影配置连续构建，所有文件字节、data_version 与 generated_at 必须一致；任何影响输出的输入变化必须体现在版本身份中。

## 7. 验收标准

### 7.1 契约和数据

- [ ] /v1/ 直接提供 Provider、按类型及跨类型 ModelList、OfferingList、Manifest 和 Schema；不存在 /v1/normalized/ API 路径。
- [ ] 本 PRD 的完整字段表逐项覆盖 Provider、Market、API、Model、Route、Parameter、Capability、Plan、Pricing、ModelList、OfferingList、Manifest、站点 Dataset 和内部状态报告；发布 Schema、TypeScript 类型、校验器与字段表一致。
- [ ] 完整 Provider 参考 JSON 可被冻结的 Provider Schema 与语义校验器接受；该样例仅供契约说明，不进入生产数据或作为人工描述来源。
- [ ] API 页面 Builder 标题为“自定义 JSON API”，固定输出 Chat，支持 Provider/市场/供应状态筛选、字段勾选和分层 Provider→market→apis/models 结构；不显示预设模板按钮。API 地址区域没有说明段落，URL 与复制按钮并列；`minimax + GLOBAL` 只返回符合条件的 Chat 模型。
- [ ] 同一 Provider/市场按 `model_id` 归并重复模型；事实冲突字段省略，不任意覆盖。
- [ ] API 记录按来源输出 `id/name/channel/url/interface`；模型记录按来源输出 `id/input/features/limits/pricing`，并按 `models.<type>[]` 分组。API 与模型分别输出，不增加模型到 API 的关联字段。输入模态与模型特性分开；reasoning 档位、temperature 枚举/范围有证据时输出细节，无细节时仅输出已证实的布尔支持状态。
- [ ] 可精确归一的 Token 价格规则以 `per_1m_tokens` 十进制费率数组输出，包含 `cache_read` 与来源明确的 `cache_write_*` 指标，并保留区域、Token 阶梯、缓存与促销条件；条件以消费者友好的 `conditions` 表示，复杂条件不被静默丢弃或压成单价。
- [ ] `/v1/providerlist.json` 未指定 `fields` 时默认包含 `pricing`，消费者可直接取得模型单价和缓存价格。
- [ ] 有效参考汇率快照会同时发布为 `/v1/fx.json` 和 `/v1/schema/fx-reference.schema.json`，fx 文件进入 Manifest；没有快照时省略该资源，不使用伪造汇率。
- [ ] Builder 提供“原币种”及快照中可用目标币种选择；分享配置和 `/v1/providerlist.json?currency=...` 一致恢复，换算采用十进制精确算法，未能换算的规则保留原币，响应在含价格时输出 `pricing_currency`。
- [ ] Builder 预览使用同版本的发布静态 Offering、Provider 与 Model 数据，可复制、下载；分享 URL 恢复构建配置，生成的 `/v1/providerlist.json` URL 返回等价筛选与投影结果。
- [ ] 查询端点只允许白名单参数和字段，确保版本一致、限制 URL/结果/响应大小，且资源加载失败或跨数据集版本混用时返回 JSON 错误。
- [ ] 查询不访问数据库或上游、不持久化用户配置、不列入 Manifest；响应是独立的 ProviderList 投影格式，不冒充 Provider、ModelList 或 OfferingList 资源。
- [ ] 模型 ID 置于 Provider/市场分组内；Builder 不输出 Offering key、`model_ref`、完整 Route 或独立能力。
- [ ] /v1/ 只包含 active + confirmed Offering；unknown/retired 状态以及 review 状态字段不出现在稳定 API。
- [ ] 站点状态索引包含事实层全部 Offering；缺台账条目按 Unknown；索引和 Provider 详情属于同一 data_version。
- [ ] 本地构建允许 pending Active，正式 Publish 对任何未确认 Active 失败，并给出 Offering 定位信息。
- [ ] Restricted 初始迁移规则不会成为运行时自动分类；维护者可以依据证据确认受限 Offering 为 Active。
- [ ] CI 对 Active 与明确退休证据的冲突要求人工复核，不自行改状态。
- [ ] channel 可缺省；没有官方通道证据的 Endpoint 输出不含 channel，回归覆盖“URL/ID 看似 Plan 但无证据”的情况。
- [ ] 所有跨资源引用有效：Route→同市场 API、规范 Model ID、Plan 引用、价格适用范围和 Offering 唯一键。
- [ ] ModelList、Provider 和 OfferingList 对同一规范 Model/Offering 的身份、类型和价格语义一致。
- [ ] 价格测试覆盖十进制精度边界（包括 0.1 + 0.2），且不使用 Number 断言金额。
- [ ] 所有发布的供应商描述都可在内部采集来源台账中追溯；无来源的手写描述会被 CI 拦截。
- [ ] 描述采集源缺失时字段省略，不用站点文案或人工解释填补。

### 7.2 可复现构建和发布

- [ ] 状态台账、生命周期事件及其他输出输入变化会改变 data_version。
- [ ] 同输入重复构建产生逐文件相同 SHA-256；generated_at 固定，Manifest 与 JSON 同版本。
- [ ] Manifest 文件清单、文件存在性和哈希校验通过；损坏/缺失产物不能发布。
- [ ] 部署作为单一版本原子完成；Publish 失败或冒烟失败时当前版本保持不变。
- [ ] 未知 Provider、存在但空模型的 Provider、有效 JSON MIME、SPA fallback 404 均有发布级回归。
- [ ] CI 无生产写凭证；只有受保护的 Publish 流程可更新生产静态资源。

### 7.3 产品验收

- [ ] 第三方无需浏览器 DOM、运行时 API 或内部台账即可依据公开 Schema 解析稳定 v1 JSON。
- [ ] 开发者可从单一 Provider 文件获知该 Provider 各市场的模型、接口、Route、可信价格、能力和套餐。
- [ ] 开发者可下载按类型 ModelList 或扁平 OfferingList，并通过字段语义区分规范型号与 Provider 调用 ID。
- [ ] 站点可用非稳定数据集筛选三种供应状态，并在详情展开时读取 Provider 资产。

## 8. 契约影响与首次发布策略

本 PRD 定义首次正式发布的 v1 用户 JSON。仓库当前 /v1/ Schema、路径或负载若与此 PRD 不同，均属于未发布的内部草案/实现，应在首次上线前直接对齐，不保留兼容投影，也不新增 /v2/ 或 /v1/normalized/。

所有改动按三层契约同步：公开 JSON Schema、packages/schema/src/types.ts、packages/schema/src/validation.ts，并更新 docs/data/schema.md。若改变模型类型/Operation、生命周期/退役、价格单位或发布架构，同步更新对应的领域文档及 ADR。正式发布后，向后兼容策略按产品发布治理另行执行；本 PRD 不授权上线后静默破坏契约。

来源台账和状态台账作为构建输入保留在仓库内部。它们不与用户 JSON 混用，不作为可执行配置，也不由构建器写回。

## 9. 风险与缓解

| 风险 | 缓解要求 |
|---|---|
| 迁移状态被误认成已核实的当前供应 | 正式发布门禁要求 Active 全部确认；站点数据集明确展示其他状态 |
| Restricted 被一律隐藏或一律视作在售 | 受限范围与新接入资格保留证据；状态由人工准入确认，不由可用性枚举自动决定 |
| channel 由 URL 启发式推导造成错误计费暗示 | channel 可选；仅接受官方证据；CI 防止适配器补默认值 |
| Plan 通道误继承按量价格 | 价格适用范围关联 API；无证据时不提供 Plan 通道价格摘要 |
| 手写描述与官方资料不符 | 来源追溯和 CI 禁止无采集证据的供应商描述 |
| 同数据版本出现不同 JSON 字节 | 固定生成时间；哈希纳入全部影响输出的输入；重复构建哈希回归 |
| 部分静态文件来自不同发布版本 | 单 Manifest、同次部署、跨资源 data_version 一致性检查 |
| 不存在的 JSON 被 SPA 页面吞掉 | 对 /v1/*.json 明确 404，纳入发布级冒烟 |
| 首次上线后契约变更困难 | 发布前完成客户端消费演练、Schema 校验和真实数据回归；上线后遵循独立兼容策略 |

## 10. 交付阶段

| 阶段 | 交付 | 退出条件 |
|---|---|---|
| A · 契约冻结 | /v1/ 用户 JSON Schema、类型和语义、channel 缺省、状态准入定义 | Schema/TS/validator 对齐；样例和反例验证通过 |
| B · 数据与投影 | Provider、ModelList、OfferingList、状态数据集及来源约束 | 全量数据可从正式源数据构建；所有公开描述可追溯 |
| C · 发布门禁 | Active 审核、确定性版本、Manifest、哈希、原子发布和 404 | 未确认 Active/不一致 Manifest/非确定构建均阻断发布 |
| D · 消费验收 | 站点及外部 JSON 消费演练、文档和 Schema 发布 | 典型 Provider、Plan、条件价格、Route、空列表和未知状态用例通过 |

## 11. 参考

- [数据 Schema](../../data/schema.md)
- [架构](../../architecture.md)
- [数据策略](../../data/data-policy.md)
- [运维与发布治理](../../guides/operations.md)
- ProviderList 归一化公开 API v1.3 设计稿（产品输入；正式字段和路径以本 PRD 首次发布契约为准）

## 12. 实现文件树变更清单

本节界定按本 PRD 实现时预期的仓库文件范围。`新增` 和 `删除` 以代码与生成产物为准；构建生成的 `dist/` 文件不手工编辑。若实现勘察发现路径名称需调整，应保持下列职责和增删改边界，并在实现前同步更新本节。

```text
providerlist/
├── packages/schema/
│   ├── schema/
│   │   ├── public-provider.schema.json       [新增] 对外 Provider JSON 契约
│   │   ├── model-list.schema.json             [新增] 按类型模型列表契约
│   │   ├── offering-list.schema.json          [新增] 扁平 Offering 列表契约
│   │   └── manifest.schema.json               [新增] 发布 Manifest 契约
│   └── src/types.ts                           [修改] 增加对外 JSON 类型
├── data/supply-status/ledger.json             [新增] 人工审核的公开供应准入状态
├── pipeline/src/compile/
│   ├── public-api.ts                           [新增] 由内部事实投影对外资源及站点数据集
│   └── build.ts                                [修改] 写入分离的资源、Schema、Manifest 和快照
├── frontend/src/
│   ├── components/api/JsonBuilder.vue          [新增] API 页面 JSON Builder 界面
│   ├── composables/
│   │   ├── api.ts                              [修改] 列出实际生成的 v1 资源和 Schema
│   │   ├── catalog.ts                          [修改] 站点页面改读内部数据集
│   │   └── json-builder.ts                     [新增] 筛选、投影和分享 URL
│   ├── pages/api-docs/ApiDocsPage.vue           [修改] 加入 Builder 并更新 API 说明
│   ├── i18n/dictionary.ts                      [修改] 增加 Builder 中英文文案
│   └── vite.config.ts                          [修改] 分别挂载、复制站点和对外产物
├── docs/
│   ├── api.md                                  [新增] 对外静态资源路径与语义
│   ├── architecture.md                         [修改] 明确站点数据集与对外 v1 分离
│   └── schema.md                               [修改] 同步对外 Schema 与资源说明
└── docs/_archived/prds/README_cn.md               [修改] 登记本 PRD
```

### 12.1 删除和替换范围

| 对象 | 操作 | 说明 |
|---|---|---|
| 旧 `/v1/catalog-current.json` 产物 | 删除 | 替换为本 PRD 定义的 Provider、ModelList 和 OfferingList 资源；内部 `CatalogCurrent` 类型在确认无调用者后再删除，不因公开路径替换而直接删内部类型 |
| 旧 `/v1/providers.json` 摘要索引产物 | 删除 | 站点 Provider/筛选索引迁移到 `/assets/datasets/`；公开 API 以单 Provider JSON 为准 |
| 旧 `/v1/models.json` 全局模型注册表产物 | 删除 | 替换为 `/v1/models/by-type/{type}.json`；规范模型事实与内部源数据不删除 |
| 旧 `/v1/search-index.json`、`/v1/capabilities.json`、`/v1/model-types.json`、`/v1/operations.json` 站点辅助产物 | 从 `/v1/` 删除 | 仍被站点使用的索引/词表应迁入 `/assets/datasets/`；公开 Schema 中仍有效的领域词表不随文件一起删除 |
| 旧 API 文档中已不生成的端点说明、下载链接和示例 | 删除或替换 | API 页面只列构建产物实际提供的资源，不展示将返回 404 的旧路径 |

删除旧路径仅代表首次发布前收敛公开静态文件集合，不表示清除模型、Provider、能力、来源或生命周期事实。`/v1/providers/{provider_id}.json` 路径保留，但负载按本 PRD 的 Provider 信封与字段表重建。参考汇率现在作为可选稳定资源 `/v1/fx.json` 发布，并由 Manifest 声明；它只支持参考换算，不改变标准 Provider/Offering 的原币价格。

### 12.2 明确不变的边界

- 不改写 `data/providers/`、`data/models/` 中的事实源以迎合投影；数据事实迁移需另列数据变更和来源依据。
- 不手工编辑 `dist/`，不新增运行时数据库；Worker 只实现 ADR 0037 约束的无状态静态数据查询投影。
- 不删除内部来源/状态台账、当前事实 Schema、生命周期事件或已有采集器；公开投影只读消费它们。
- 不因 Builder 增加任意动态资源路由或自定义公开 Schema；唯一 `/v1/providerlist.json` 按 ADR 0037 的固定投影契约和 ADR 0040 的稳定订阅路径执行。
