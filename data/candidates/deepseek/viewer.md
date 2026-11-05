# deepseek 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `deepseek` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global / cn |
| 观察时间（UTC） | 2026-11-05T04:13:27.907Z |
| 前一候选指纹 | 首次观察 |
| 本次候选指纹 | `sha256:07b6444bd6bae9506a35997b0e916cd0d8a16331107d67cebed0577465ca10ef` |
| 来源快照 | 12 份 |

## 变更摘要

首次观察；以下逐项列出本次取得的候选事实。

变更统计：新增 768 项，更新 0 项，缺席待核实 0 项。

## 字段变化

### Provider / deepseek

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| collection notes | 新增 | 未记录 | • IR 映射模型目录、模型级 API 限额/能力、文本生成 Route、Search/Fetch 独立能力与按成功请求计价；Operation 参数 Schema、限流细节及 Anthropic Route 仍待迁移。 |
| document observations | 新增 | 未记录 | 空列表 |
| ir version | 新增 | 未记录 | 1.0.0 |
| 服务商（provider_id） | 新增 | 未记录 | deepseek |
| review items | 新增 | 未记录 | 空列表 |
| source refs | 新增 | 未记录 | • deepseek-pricing<br>• deepseek-models-api<br>• deepseek-chat-api<br>• deepseek-responses-api<br>• deepseek-anthropic-api<br>• deepseek-search-pricing<br>• deepseek-cn-pricing<br>• deepseek-cn-models-api<br>• deepseek-cn-chat-api<br>• deepseek-cn-responses-api<br>• deepseek-cn-anthropic-api<br>• deepseek-cn-search-guide |

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 第 1 项 › 市场（market） | 新增 | 未记录 | global |
| 第 1 项 › record count | 新增 | 未记录 | 2 |
| 第 1 项 › record unit | 新增 | 未记录 | unique model IDs |
| 第 1 项 › scope | 新增 | 未记录 | model_catalog |
| 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| 第 1 项 › 状态（status） | 新增 | 未记录 | complete |
| 第 2 项 › 市场（market） | 新增 | 未记录 | global |
| 第 2 项 › record count | 新增 | 未记录 | 2 |
| 第 2 项 › record unit | 新增 | 未记录 | models with mapped price facts |
| 第 2 项 › scope | 新增 | 未记录 | pricing |
| 第 2 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| 第 2 项 › 状态（status） | 新增 | 未记录 | complete |
| 第 3 项 › 市场（market） | 新增 | 未记录 | global |
| 第 3 项 › note | 新增 | 未记录 | 独立 Search/Fetch 按成功请求计价。 |
| 第 3 项 › record count | 新增 | 未记录 | 2 |
| 第 3 项 › record unit | 新增 | 未记录 | independent tool price facts |
| 第 3 项 › scope | 新增 | 未记录 | pricing |
| 第 3 项 › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 第 3 项 › 状态（status） | 新增 | 未记录 | complete |
| 第 4 项 › 市场（market） | 新增 | 未记录 | global |
| 第 4 项 › note | 新增 | 未记录 | 仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。 |
| 第 4 项 › record count | 新增 | 未记录 | 0 |
| 第 4 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 4 项 › scope | 新增 | 未记录 | api |
| 第 4 项 › source ref | 新增 | 未记录 | deepseek-models-api |
| 第 4 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 5 项 › 市场（market） | 新增 | 未记录 | global |
| 第 5 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 5 项 › record count | 新增 | 未记录 | 3 |
| 第 5 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 5 项 › scope | 新增 | 未记录 | api |
| 第 5 项 › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 第 5 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 6 项 › 市场（market） | 新增 | 未记录 | global |
| 第 6 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 6 项 › record count | 新增 | 未记录 | 0 |
| 第 6 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 6 项 › scope | 新增 | 未记录 | api |
| 第 6 项 › source ref | 新增 | 未记录 | deepseek-chat-api |
| 第 6 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 7 项 › 市场（market） | 新增 | 未记录 | global |
| 第 7 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 7 项 › record count | 新增 | 未记录 | 0 |
| 第 7 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 7 项 › scope | 新增 | 未记录 | api |
| 第 7 项 › source ref | 新增 | 未记录 | deepseek-responses-api |
| 第 7 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 8 项 › 市场（market） | 新增 | 未记录 | global |
| 第 8 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 8 项 › record count | 新增 | 未记录 | 1 |
| 第 8 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 8 项 › scope | 新增 | 未记录 | api |
| 第 8 项 › source ref | 新增 | 未记录 | deepseek-anthropic-api |
| 第 8 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 9 项 › 市场（market） | 新增 | 未记录 | global |
| 第 9 项 › note | 新增 | 未记录 | Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。 |
| 第 9 项 › record count | 新增 | 未记录 | 2 |
| 第 9 项 › record unit | 新增 | 未记录 | independent Capability records |
| 第 9 项 › scope | 新增 | 未记录 | capability |
| 第 9 项 › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 第 9 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 10 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 10 项 › record count | 新增 | 未记录 | 2 |
| 第 10 项 › record unit | 新增 | 未记录 | unique model IDs |
| 第 10 项 › scope | 新增 | 未记录 | model_catalog |
| 第 10 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 第 10 项 › 状态（status） | 新增 | 未记录 | complete |
| 第 11 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 11 项 › record count | 新增 | 未记录 | 2 |
| 第 11 项 › record unit | 新增 | 未记录 | models with mapped price facts |
| 第 11 项 › scope | 新增 | 未记录 | pricing |
| 第 11 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 第 11 项 › 状态（status） | 新增 | 未记录 | complete |
| 第 12 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 12 项 › note | 新增 | 未记录 | 独立 Search/Fetch 按成功请求计价。 |
| 第 12 项 › record count | 新增 | 未记录 | 2 |
| 第 12 项 › record unit | 新增 | 未记录 | independent tool price facts |
| 第 12 项 › scope | 新增 | 未记录 | pricing |
| 第 12 项 › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 第 12 项 › 状态（status） | 新增 | 未记录 | complete |
| 第 13 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 13 项 › note | 新增 | 未记录 | 仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。 |
| 第 13 项 › record count | 新增 | 未记录 | 0 |
| 第 13 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 13 项 › scope | 新增 | 未记录 | api |
| 第 13 项 › source ref | 新增 | 未记录 | deepseek-cn-models-api |
| 第 13 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 14 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 14 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 14 项 › record count | 新增 | 未记录 | 3 |
| 第 14 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 14 项 › scope | 新增 | 未记录 | api |
| 第 14 项 › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 第 14 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 15 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 15 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 15 项 › record count | 新增 | 未记录 | 0 |
| 第 15 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 15 项 › scope | 新增 | 未记录 | api |
| 第 15 项 › source ref | 新增 | 未记录 | deepseek-cn-chat-api |
| 第 15 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 16 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 16 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 16 项 › record count | 新增 | 未记录 | 0 |
| 第 16 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 16 项 › scope | 新增 | 未记录 | api |
| 第 16 项 › source ref | 新增 | 未记录 | deepseek-cn-responses-api |
| 第 16 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 17 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 17 项 › note | 新增 | 未记录 | 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。 |
| 第 17 项 › record count | 新增 | 未记录 | 1 |
| 第 17 项 › record unit | 新增 | 未记录 | recognized API source records |
| 第 17 项 › scope | 新增 | 未记录 | api |
| 第 17 项 › source ref | 新增 | 未记录 | deepseek-cn-anthropic-api |
| 第 17 项 › 状态（status） | 新增 | 未记录 | partial |
| 第 18 项 › 市场（market） | 新增 | 未记录 | cn |
| 第 18 项 › note | 新增 | 未记录 | Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。 |
| 第 18 项 › record count | 新增 | 未记录 | 2 |
| 第 18 项 › record unit | 新增 | 未记录 | independent Capability records |
| 第 18 项 › scope | 新增 | 未记录 | capability |
| 第 18 项 › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 第 18 项 › 状态（status） | 新增 | 未记录 | partial |

### Provider / deepseek

#### 档案

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| profile › aliases › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| profile › aliases | 新增 | 未记录 | • DeepSeek |
| profile › docs › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| profile › docs › overview | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/ |
| profile › 类别（kind） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| profile › 类别（kind） | 新增 | 未记录 | first_party |
| profile › 名称（name） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| profile › 名称（name） | 新增 | 未记录 | DeepSeek |

### 市场 / cn

#### Capability / cn-web-fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | Fetch 是独立 API 服务，不绑定 Canonical Model。 |
| ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| ID（id） | 新增 | 未记录 | cn-web-fetch |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 按官方 API 文档定义的独立服务类型映射。 |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| links › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 能力文档链接来自该市场登记的官方 Search/Fetch 来源。 |
| links › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| links › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/guides/search/ |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档明确列出每 1,000 次成功请求价格。 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › capability ref | 新增 | 未记录 | cn-web-fetch |
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Fetch 每 1,000 次成功请求收费 5 CNY。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 币种由对应市场的官方计价文档明示。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Fetch 每 1,000 次成功请求收费 5 CNY。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Fetch 每 1,000 次成功请求收费 5 CNY。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 新增 | 未记录 | successful_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 新增 | 未记录 | 1,000 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 新增 | 未记录 | per_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 新增 | 未记录 | 5 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / cn-web-fetch › Operation / fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Fetch 独立 API。 |
| ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| ID（id） | 新增 | 未记录 | fetch |
| 输入（input） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 输入字段及必填状态来自官方请求字段表。 |
| 输入（input） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 输入（input） › 记录 url › 说明（description） | 新增 | 未记录 | 要抓取的网页地址，长度不超过 8192，必须为含 host 的 HTTP/HTTPS URL，且不能携带用户名或密码。 |
| 输入（input） › 记录 url › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 输入（input） › 记录 url › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| 输出（output） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 响应字段来自官方响应字段表。 |
| 输出（output） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • title<br>• content |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| routes › 记录 fetch › callability › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出端点与参数；本采集没有执行 API 调用探测。 |
| routes › 记录 fetch › callability › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › callability | 新增 | 未记录 | documented_only |
| routes › 记录 fetch › documentation › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 来源为对应市场官方 Search/Fetch 文档。 |
| routes › 记录 fetch › documentation › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/guides/search/ |
| routes › 记录 fetch › endpoint ref › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | Route 使用同一官方资料列出的 Base URL。 |
| routes › 记录 fetch › endpoint ref › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › endpoint ref | 新增 | 未记录 | cn-openai-compatible |
| routes › 记录 fetch › ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 POST /v1/tools/fetch。 |
| routes › 记录 fetch › ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › ID（id） | 新增 | 未记录 | fetch |
| routes › 记录 fetch › HTTP 方法（method） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 POST 方法。 |
| routes › 记录 fetch › HTTP 方法（method） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 fetch › operation kind › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| routes › 记录 fetch › operation kind › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › operation kind | 新增 | 未记录 | web_fetch |
| routes › 记录 fetch › API 路径（path_template） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 从官方文档端点示例提取。 |
| routes › 记录 fetch › API 路径（path_template） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › API 路径（path_template） | 新增 | 未记录 | /v1/tools/fetch |
| routes › 记录 fetch › protocol › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方示例为 JSON over HTTPS。 |
| routes › 记录 fetch › protocol › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 fetch › protocol | 新增 | 未记录 | rest-json |

#### Capability / cn-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | Search 是独立 API 服务，不绑定 Canonical Model。 |
| ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| ID（id） | 新增 | 未记录 | cn-web-search |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 按官方 API 文档定义的独立服务类型映射。 |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 类别（kind） | 新增 | 未记录 | web_search |
| links › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 能力文档链接来自该市场登记的官方 Search/Fetch 来源。 |
| links › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| links › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/guides/search/ |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档明确列出每 1,000 次成功请求价格。 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › capability ref | 新增 | 未记录 | cn-web-search |
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 币种由对应市场的官方计价文档明示。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 新增 | 未记录 | successful_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 新增 | 未记录 | 1,000 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 新增 | 未记录 | per_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 新增 | 未记录 | 5 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / cn-web-search › Operation / search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 Search 独立 API。 |
| ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| ID（id） | 新增 | 未记录 | search |
| 输入（input） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 输入字段及必填状态来自官方请求字段表。 |
| 输入（input） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 输入（input） › 记录 query › 说明（description） | 新增 | 未记录 | 搜索词，1～128 个 Unicode 字符，不能全为空白，支持下方列出的搜索语法。 |
| 输入（input） › 记录 query › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 query › 名称（name） | 新增 | 未记录 | query |
| 输入（input） › 记录 query › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| 类别（kind） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 类别（kind） | 新增 | 未记录 | web_search |
| 输出（output） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 响应字段来自官方响应字段表。 |
| 输出（output） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • results[].rerank_score<br>• results[].title<br>• results[].url<br>• results[].snippet<br>• results[].summary<br>• results[].content<br>• results[].site_name<br>• results[].site_icon<br>• results[].date<br>• results[].authority |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 可选请求参数、类型、范围和默认值来自官方请求字段表。 |
| 参数（parameters） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| 参数（parameters） › 记录 count › 默认值（default） | 新增 | 未记录 | 10 |
| 参数（parameters） › 记录 count › 说明（description） | 新增 | 未记录 | 返回条数，1～50。 |
| 参数（parameters） › 记录 count › 最大值（max） | 新增 | 未记录 | 50 |
| 参数（parameters） › 记录 count › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 count › 名称（name） | 新增 | 未记录 | count |
| 参数（parameters） › 记录 count › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 count › 参数路径（route_mappings） | 新增 | 未记录 | • count |
| 参数（parameters） › 记录 count › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 localization › 默认值（default） | 新增 | 未记录 | 空字符串 |
| 参数（parameters） › 记录 localization › 说明（description） | 新增 | 未记录 | 用于优先返回本地化搜索结果的 IP 地址。 |
| 参数（parameters） › 记录 localization › 名称（name） | 新增 | 未记录 | localization |
| 参数（parameters） › 记录 localization › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 localization › 参数路径（route_mappings） | 新增 | 未记录 | • localization |
| 参数（parameters） › 记录 localization › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 need_content › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 need_content › 说明（description） | 新增 | 未记录 | 是否在 content 中返回网页正文，为 false 时 content 恒为空字符串。 |
| 参数（parameters） › 记录 need_content › 名称（name） | 新增 | 未记录 | need_content |
| 参数（parameters） › 记录 need_content › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 need_content › 参数路径（route_mappings） | 新增 | 未记录 | • need_content |
| 参数（parameters） › 记录 need_content › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 ori_question › 说明（description） | 新增 | 未记录 | 触发搜索的用户原始问题，1～128 个字符，有助于更好地理解搜索意图，传 null 视为未提供。 |
| 参数（parameters） › 记录 ori_question › 最大值（max） | 新增 | 未记录 | 128 |
| 参数（parameters） › 记录 ori_question › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 ori_question › 名称（name） | 新增 | 未记录 | ori_question |
| 参数（parameters） › 记录 ori_question › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 ori_question › 参数路径（route_mappings） | 新增 | 未记录 | • ori_question |
| 参数（parameters） › 记录 ori_question › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 search › callability › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出端点与参数；本采集没有执行 API 调用探测。 |
| routes › 记录 search › callability › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › callability | 新增 | 未记录 | documented_only |
| routes › 记录 search › documentation › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 来源为对应市场官方 Search/Fetch 文档。 |
| routes › 记录 search › documentation › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/guides/search/ |
| routes › 记录 search › endpoint ref › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | Route 使用同一官方资料列出的 Base URL。 |
| routes › 记录 search › endpoint ref › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › endpoint ref | 新增 | 未记录 | cn-openai-compatible |
| routes › 记录 search › ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 POST /v1/tools/search。 |
| routes › 记录 search › ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › ID（id） | 新增 | 未记录 | search |
| routes › 记录 search › HTTP 方法（method） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档列出 POST 方法。 |
| routes › 记录 search › HTTP 方法（method） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 search › operation kind › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| routes › 记录 search › operation kind › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › operation kind | 新增 | 未记录 | web_search |
| routes › 记录 search › API 路径（path_template） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 从官方文档端点示例提取。 |
| routes › 记录 search › API 路径（path_template） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › API 路径（path_template） | 新增 | 未记录 | /v1/tools/search |
| routes › 记录 search › protocol › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方示例为 JSON over HTTPS。 |
| routes › 记录 search › protocol › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| routes › 记录 search › protocol | 新增 | 未记录 | rest-json |

#### API endpoint / cn-anthropic-compatible

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 deepseek-cn-anthropic-api › assertion | 新增 | 未记录 | 官方文档未声明该 Host 的物理 API Region。 |
| api region › evidence › 记录 deepseek-cn-anthropic-api › source ref | 新增 | 未记录 | deepseek-cn-anthropic-api |
| api region | 新增 | 未记录 | 未标注 |
| API 地址（base_url） › evidence › 记录 deepseek-cn-anthropic-api › assertion | 新增 | 未记录 | 从官方 Anthropic 兼容文档样例读取 Base URL。 |
| API 地址（base_url） › evidence › 记录 deepseek-cn-anthropic-api › source ref | 新增 | 未记录 | deepseek-cn-anthropic-api |
| API 地址（base_url） | 新增 | 未记录 | https://api.deepseek.com/anthropic |
| documentation › evidence › 记录 deepseek-cn-anthropic-api › assertion | 新增 | 未记录 | 来源为对应市场的官方 Anthropic API 文档。 |
| documentation › evidence › 记录 deepseek-cn-anthropic-api › source ref | 新增 | 未记录 | deepseek-cn-anthropic-api |
| documentation | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/guides/anthropic_api/ |
| ID（id） › evidence › 记录 deepseek-cn-anthropic-api › assertion | 新增 | 未记录 | 官方 Anthropic 兼容文档明确给出 Base URL。 |
| ID（id） › evidence › 记录 deepseek-cn-anthropic-api › source ref | 新增 | 未记录 | deepseek-cn-anthropic-api |
| ID（id） | 新增 | 未记录 | cn-anthropic-compatible |

#### API endpoint / cn-openai-compatible

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方文档未声明该 Host 的物理 API Region。 |
| api region › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| api region | 新增 | 未记录 | 未标注 |
| API 地址（base_url） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 从官方资料明示的 Base URL 读取，不拼接服务商域名。 |
| API 地址（base_url） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| API 地址（base_url） | 新增 | 未记录 | https://api.deepseek.com |
| documentation › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 来源为对应市场的官方 Search/Fetch API 指南。 |
| documentation › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| documentation | 新增 | 未记录 | https://api-docs.deepseek.com/zh-cn/guides/search/ |
| ID（id） › evidence › 记录 deepseek-cn-search-guide › assertion | 新增 | 未记录 | 官方 Search/Fetch 指南明确列出 DeepSeek API Base URL。 |
| ID（id） › evidence › 记录 deepseek-cn-search-guide › source ref | 新增 | 未记录 | deepseek-cn-search-guide |
| ID（id） | 新增 | 未记录 | cn-openai-compatible |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| ID（id） | 新增 | 未记录 | cn |
| 名称（name） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 名称（name） | 新增 | 未记录 | 中国区 |
| plans | 新增 | 未记录 | 空列表 |

#### Model / deepseek-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 deepseek-cn-models-api › source ref | 新增 | 未记录 | deepseek-cn-models-api |
| 展示名称（display_name） | 新增 | 未记录 | DeepSeek-V4.1-Flash |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 deepseek-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-flash › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-flash 的 空闲时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-flash 的 高峰时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-flash |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-flash 的 空闲时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-flash 的 空闲时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 1 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.02 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 4 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-flash |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-flash 的 高峰时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-flash 的 高峰时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 2 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.04 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 8 |
| prices › 记录 deepseek-flash › 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-flash › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-flash |
| 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-flash |
| 服务线 ID（service_id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 deepseek-cn-pricing › assertion | 新增 | 未记录 | 官方当前价格表列出模型 ID deepseek-flash。 |
| supply observations › 记录 0 › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / deepseek-v4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 deepseek-cn-models-api › source ref | 新增 | 未记录 | deepseek-cn-models-api |
| 展示名称（display_name） | 新增 | 未记录 | DeepSeek-V4-Pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 deepseek-v4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-v4-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-v4-pro 的 空闲时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-v4-pro 的 高峰时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-v4-pro |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-v4-pro 的 空闲时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-v4-pro 的 空闲时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 4.5 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.15 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 13.5 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-v4-pro |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | CNY |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-v4-pro 的 高峰时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 中国区官方价格表中 deepseek-v4-pro 的 高峰时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 9.0 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.30 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 27.0 |
| prices › 记录 deepseek-v4-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| prices › 记录 deepseek-v4-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-v4-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-v4-pro |
| 服务线 ID（service_id） › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | cn |
| supply observations › 记录 0 › evidence › 记录 deepseek-cn-pricing › assertion | 新增 | 未记录 | 官方当前价格表列出模型 ID deepseek-v4-pro。 |
| supply observations › 记录 0 › evidence › 记录 deepseek-cn-pricing › source ref | 新增 | 未记录 | deepseek-cn-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

### 市场 / global

#### Capability / global-web-fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | Fetch 是独立 API 服务，不绑定 Canonical Model。 |
| ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| ID（id） | 新增 | 未记录 | global-web-fetch |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 按官方 API 文档定义的独立服务类型映射。 |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| links › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 能力文档链接来自该市场登记的官方 Search/Fetch 来源。 |
| links › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| links › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/guides/search/ |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档明确列出每 1,000 次成功请求价格。 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › capability ref | 新增 | 未记录 | global-web-fetch |
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Fetch 每 1,000 次成功请求收费 0.75 USD。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 币种由对应市场的官方计价文档明示。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Fetch 每 1,000 次成功请求收费 0.75 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Fetch 每 1,000 次成功请求收费 0.75 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 新增 | 未记录 | successful_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 新增 | 未记录 | 1,000 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 新增 | 未记录 | per_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 新增 | 未记录 | 0.75 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / global-web-fetch › Operation / fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Fetch 独立 API。 |
| ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| ID（id） | 新增 | 未记录 | fetch |
| 输入（input） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 输入字段及必填状态来自官方请求字段表。 |
| 输入（input） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 输入（input） › 记录 url › 说明（description） | 新增 | 未记录 | The page URL to fetch, which must be at most 8192 characters, an HTTP or HTTPS URL with a host, and must not contain a username or password. |
| 输入（input） › 记录 url › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 url › 名称（name） | 新增 | 未记录 | url |
| 输入（input） › 记录 url › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 类别（kind） | 新增 | 未记录 | web_fetch |
| 输出（output） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 响应字段来自官方响应字段表。 |
| 输出（output） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • title<br>• content |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| routes › 记录 fetch › callability › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出端点与参数；本采集没有执行 API 调用探测。 |
| routes › 记录 fetch › callability › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › callability | 新增 | 未记录 | documented_only |
| routes › 记录 fetch › documentation › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 来源为对应市场官方 Search/Fetch 文档。 |
| routes › 记录 fetch › documentation › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/guides/search/ |
| routes › 记录 fetch › endpoint ref › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | Route 使用同一官方资料列出的 Base URL。 |
| routes › 记录 fetch › endpoint ref › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › endpoint ref | 新增 | 未记录 | openai-compatible |
| routes › 记录 fetch › ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 POST /v1/tools/fetch。 |
| routes › 记录 fetch › ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › ID（id） | 新增 | 未记录 | fetch |
| routes › 记录 fetch › HTTP 方法（method） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 POST 方法。 |
| routes › 记录 fetch › HTTP 方法（method） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 fetch › operation kind › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| routes › 记录 fetch › operation kind › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › operation kind | 新增 | 未记录 | web_fetch |
| routes › 记录 fetch › API 路径（path_template） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 从官方文档端点示例提取。 |
| routes › 记录 fetch › API 路径（path_template） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › API 路径（path_template） | 新增 | 未记录 | /v1/tools/fetch |
| routes › 记录 fetch › protocol › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方示例为 JSON over HTTPS。 |
| routes › 记录 fetch › protocol › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 fetch › protocol | 新增 | 未记录 | rest-json |

#### Capability / global-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | Search 是独立 API 服务，不绑定 Canonical Model。 |
| ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| ID（id） | 新增 | 未记录 | global-web-search |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 按官方 API 文档定义的独立服务类型映射。 |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 类别（kind） | 新增 | 未记录 | web_search |
| links › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 能力文档链接来自该市场登记的官方 Search/Fetch 来源。 |
| links › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| links › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/guides/search/ |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档明确列出每 1,000 次成功请求价格。 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › capability ref | 新增 | 未记录 | global-web-search |
| prices › 记录 0 › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Search 每 1,000 次成功请求收费 0.75 USD。 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 币种由对应市场的官方计价文档明示。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Search 每 1,000 次成功请求收费 0.75 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Search 每 1,000 次成功请求收费 0.75 USD。 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 新增 | 未记录 | successful_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 新增 | 未记录 | 1,000 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 新增 | 未记录 | per_request |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 新增 | 未记录 | 0.75 |
| prices › 记录 0 › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | 未记录 |

#### Capability / global-web-search › Operation / search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 Search 独立 API。 |
| ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| ID（id） | 新增 | 未记录 | search |
| 输入（input） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 输入字段及必填状态来自官方请求字段表。 |
| 输入（input） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 输入（input） › 记录 query › 说明（description） | 新增 | 未记录 | The search query must contain 1 to 128 Unicode characters, cannot be all whitespace, and supports the query operators listed below. |
| 输入（input） › 记录 query › 类别（kind） | 新增 | 未记录 | text |
| 输入（input） › 记录 query › 名称（name） | 新增 | 未记录 | query |
| 输入（input） › 记录 query › 是否必填（required） | 新增 | 未记录 | 是 |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| 类别（kind） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 类别（kind） | 新增 | 未记录 | web_search |
| 输出（output） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 响应字段来自官方响应字段表。 |
| 输出（output） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 输出（output） › 记录 0 › fields | 新增 | 未记录 | • results[].rerank_score<br>• results[].title<br>• results[].url<br>• results[].snippet<br>• results[].summary<br>• results[].content<br>• results[].site_name<br>• results[].site_icon<br>• results[].date<br>• results[].authority |
| 输出（output） › 记录 0 › 类别（kind） | 新增 | 未记录 | structured |
| 参数（parameters） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 可选请求参数、类型、范围和默认值来自官方请求字段表。 |
| 参数（parameters） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| 参数（parameters） › 记录 count › 默认值（default） | 新增 | 未记录 | 10 |
| 参数（parameters） › 记录 count › 说明（description） | 新增 | 未记录 | The number of results to return, between 1 and 50. |
| 参数（parameters） › 记录 count › 最大值（max） | 新增 | 未记录 | 50 |
| 参数（parameters） › 记录 count › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 count › 名称（name） | 新增 | 未记录 | count |
| 参数（parameters） › 记录 count › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 count › 参数路径（route_mappings） | 新增 | 未记录 | • count |
| 参数（parameters） › 记录 count › 类型（type） | 新增 | 未记录 | integer |
| 参数（parameters） › 记录 localization › 默认值（default） | 新增 | 未记录 | 空字符串 |
| 参数（parameters） › 记录 localization › 说明（description） | 新增 | 未记录 | An optional IP address used to localize search results. |
| 参数（parameters） › 记录 localization › 名称（name） | 新增 | 未记录 | localization |
| 参数（parameters） › 记录 localization › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 localization › 参数路径（route_mappings） | 新增 | 未记录 | • localization |
| 参数（parameters） › 记录 localization › 类型（type） | 新增 | 未记录 | string |
| 参数（parameters） › 记录 need_content › 默认值（default） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 need_content › 说明（description） | 新增 | 未记录 | Whether to return page content in content , which is always an empty string when false . |
| 参数（parameters） › 记录 need_content › 名称（name） | 新增 | 未记录 | need_content |
| 参数（parameters） › 记录 need_content › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 need_content › 参数路径（route_mappings） | 新增 | 未记录 | • need_content |
| 参数（parameters） › 记录 need_content › 类型（type） | 新增 | 未记录 | boolean |
| 参数（parameters） › 记录 ori_question › 说明（description） | 新增 | 未记录 | The user's original question that triggered the search, between 1 and 128 characters, to improve query understanding, with null treated as not provided. |
| 参数（parameters） › 记录 ori_question › 最大值（max） | 新增 | 未记录 | 128 |
| 参数（parameters） › 记录 ori_question › 最小值（min） | 新增 | 未记录 | 1 |
| 参数（parameters） › 记录 ori_question › 名称（name） | 新增 | 未记录 | ori_question |
| 参数（parameters） › 记录 ori_question › 是否必填（required） | 新增 | 未记录 | 否 |
| 参数（parameters） › 记录 ori_question › 参数路径（route_mappings） | 新增 | 未记录 | • ori_question |
| 参数（parameters） › 记录 ori_question › 类型（type） | 新增 | 未记录 | string |
| routes › 记录 search › callability › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出端点与参数；本采集没有执行 API 调用探测。 |
| routes › 记录 search › callability › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › callability | 新增 | 未记录 | documented_only |
| routes › 记录 search › documentation › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 来源为对应市场官方 Search/Fetch 文档。 |
| routes › 记录 search › documentation › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › documentation | 新增 | 未记录 | https://api-docs.deepseek.com/guides/search/ |
| routes › 记录 search › endpoint ref › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | Route 使用同一官方资料列出的 Base URL。 |
| routes › 记录 search › endpoint ref › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › endpoint ref | 新增 | 未记录 | openai-compatible |
| routes › 记录 search › ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 POST /v1/tools/search。 |
| routes › 记录 search › ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › ID（id） | 新增 | 未记录 | search |
| routes › 记录 search › HTTP 方法（method） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档列出 POST 方法。 |
| routes › 记录 search › HTTP 方法（method） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › HTTP 方法（method） | 新增 | 未记录 | POST |
| routes › 记录 search › operation kind › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方端点功能映射。 |
| routes › 记录 search › operation kind › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › operation kind | 新增 | 未记录 | web_search |
| routes › 记录 search › API 路径（path_template） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 从官方文档端点示例提取。 |
| routes › 记录 search › API 路径（path_template） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › API 路径（path_template） | 新增 | 未记录 | /v1/tools/search |
| routes › 记录 search › protocol › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方示例为 JSON over HTTPS。 |
| routes › 记录 search › protocol › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| routes › 记录 search › protocol | 新增 | 未记录 | rest-json |

#### API endpoint / anthropic-compatible

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 deepseek-anthropic-api › assertion | 新增 | 未记录 | 官方文档未声明该 Host 的物理 API Region。 |
| api region › evidence › 记录 deepseek-anthropic-api › source ref | 新增 | 未记录 | deepseek-anthropic-api |
| api region | 新增 | 未记录 | 未标注 |
| API 地址（base_url） › evidence › 记录 deepseek-anthropic-api › assertion | 新增 | 未记录 | 从官方 Anthropic 兼容文档样例读取 Base URL。 |
| API 地址（base_url） › evidence › 记录 deepseek-anthropic-api › source ref | 新增 | 未记录 | deepseek-anthropic-api |
| API 地址（base_url） | 新增 | 未记录 | https://api.deepseek.com/anthropic |
| documentation › evidence › 记录 deepseek-anthropic-api › assertion | 新增 | 未记录 | 来源为对应市场的官方 Anthropic API 文档。 |
| documentation › evidence › 记录 deepseek-anthropic-api › source ref | 新增 | 未记录 | deepseek-anthropic-api |
| documentation | 新增 | 未记录 | https://api-docs.deepseek.com/guides/anthropic_api/ |
| ID（id） › evidence › 记录 deepseek-anthropic-api › assertion | 新增 | 未记录 | 官方 Anthropic 兼容文档明确给出 Base URL。 |
| ID（id） › evidence › 记录 deepseek-anthropic-api › source ref | 新增 | 未记录 | deepseek-anthropic-api |
| ID（id） | 新增 | 未记录 | anthropic-compatible |

#### API endpoint / openai-compatible

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| api region › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方文档未声明该 Host 的物理 API Region。 |
| api region › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| api region | 新增 | 未记录 | 未标注 |
| API 地址（base_url） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 从官方资料明示的 Base URL 读取，不拼接服务商域名。 |
| API 地址（base_url） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| API 地址（base_url） | 新增 | 未记录 | https://api.deepseek.com |
| documentation › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 来源为对应市场的官方 Search/Fetch API 指南。 |
| documentation › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| documentation | 新增 | 未记录 | https://api-docs.deepseek.com/guides/search/ |
| ID（id） › evidence › 记录 deepseek-search-pricing › assertion | 新增 | 未记录 | 官方 Search/Fetch 指南明确列出 DeepSeek API Base URL。 |
| ID（id） › evidence › 记录 deepseek-search-pricing › source ref | 新增 | 未记录 | deepseek-search-pricing |
| ID（id） | 新增 | 未记录 | openai-compatible |

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| ID（id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| ID（id） | 新增 | 未记录 | global |
| 名称（name） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| 名称（name） | 新增 | 未记录 | 国际市场 |
| plans | 新增 | 未记录 | 空列表 |

#### Model / deepseek-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 deepseek-models-api › source ref | 新增 | 未记录 | deepseek-models-api |
| 展示名称（display_name） | 新增 | 未记录 | DeepSeek-V4.1-Flash |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 deepseek-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-flash › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-flash 的 空闲时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-flash 的 高峰时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-flash |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-flash 的 空闲时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-flash 的 空闲时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/off_peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.15 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.003 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 0.6 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-flash |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-flash 的 高峰时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-flash 的 高峰时段价格。 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-flash/peak |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 0.3 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.006 |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-flash › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 1.2 |
| prices › 记录 deepseek-flash › 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-flash › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-flash |
| 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-flash |
| 服务线 ID（service_id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 deepseek-pricing › assertion | 新增 | 未记录 | 官方当前价格表列出模型 ID deepseek-flash。 |
| supply observations › 记录 0 › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |

#### Model / deepseek-v4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 展示名称（display_name） › evidence › 记录 deepseek-models-api › source ref | 新增 | 未记录 | deepseek-models-api |
| 展示名称（display_name） | 新增 | 未记录 | DeepSeek-V4-Pro |
| operations | 新增 | 未记录 | 空列表 |
| prices › 记录 deepseek-v4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-v4-pro › operation ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-v4-pro 的 空闲时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 2 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-v4-pro 的 高峰时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 2 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › evidence › 第 2 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-v4-pro |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-v4-pro 的 空闲时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-v4-pro 的 空闲时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/off_peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 1 项 | 新增 | 未记录 | 0.66 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 2 项 | 新增 | 未记录 | 0.022 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 1 项 › rates › 第 3 项 | 新增 | 未记录 | 1.98 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › field | 新增 | 未记录 | time_period |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 › operator | 新增 | 未记录 | eq |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 适用条件（conditions） › 第 1 项 | 新增 | 未记录 | peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/model/deepseek-v4-pro |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › 币种（currency） | 新增 | 未记录 | USD |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-v4-pro 的 高峰时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › assertion | 新增 | 未记录 | 国际官方价格表中 deepseek-v4-pro 的 高峰时段价格。 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › locator | 新增 | 未记录 | pricing/deepseek-v4-pro/peak |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › evidence › 第 1 项 › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计费指标（metric） | 新增 | 未记录 | input |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 1 项 | 新增 | 未记录 | 1.32 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计费指标（metric） | 新增 | 未记录 | cache_read |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 2 项 | 新增 | 未记录 | 0.044 |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计费指标（metric） | 新增 | 未记录 | output |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 › 计量单位（unit） | 新增 | 未记录 | per_1m_tokens |
| prices › 记录 deepseek-v4-pro › 价格信息（pricing） › 第 2 项 › rates › 第 3 项 | 新增 | 未记录 | 3.96 |
| prices › 记录 deepseek-v4-pro › 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| prices › 记录 deepseek-v4-pro › 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-v4-pro |
| 服务商模型 ID（provider_model_id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| 服务商模型 ID（provider_model_id） | 新增 | 未记录 | deepseek-v4-pro |
| 服务线 ID（service_id） › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| 服务线 ID（service_id） | 新增 | 未记录 | global |
| supply observations › 记录 0 › evidence › 记录 deepseek-pricing › assertion | 新增 | 未记录 | 官方当前价格表列出模型 ID deepseek-v4-pro。 |
| supply observations › 记录 0 › evidence › 记录 deepseek-pricing › source ref | 新增 | 未记录 | deepseek-pricing |
| supply observations › 记录 0 › 类别（kind） | 新增 | 未记录 | priced_current |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `deepseek-pricing` · DeepSeek 模型能力与价格 | https://api-docs.deepseek.com/quick_start/pricing/ | 2026-11-05T04:13:24.739Z | 200 | `sha256:50563fd0eefea6d5547241d3f0defb7b7d50d0f17481a453343958b636a1fe51` |
| global | `deepseek-models-api` · DeepSeek 当前模型列表 API | https://api-docs.deepseek.com/api/list-models/ | 2026-11-05T04:13:24.740Z | 200 | `sha256:525f319578f01a83ccba3397e3808ffbd600398f45fb73dc5ffa5b6f37c392d8` |
| global | `deepseek-chat-api` · DeepSeek Chat Completions API | https://api-docs.deepseek.com/api/create-chat-completion/ | 2026-11-05T04:13:24.841Z | 200 | `sha256:3b8f339866eb4bd01952a88c47491cafd12abdde65432914d0ed68f4d94ead5c` |
| global | `deepseek-responses-api` · DeepSeek Responses API | https://api-docs.deepseek.com/api/create-response/ | 2026-11-05T04:13:24.781Z | 200 | `sha256:34cf6feee14379a9aa0b051774df1833fab60e7d6f2d25a4ef7465e4b394ae3f` |
| global | `deepseek-anthropic-api` · DeepSeek Anthropic API | https://api-docs.deepseek.com/guides/anthropic_api/ | 2026-11-05T04:13:25.061Z | 200 | `sha256:9177e110d12081f0ffeff128f72084c91c0ad6e787becbed358767df843a9a10` |
| global | `deepseek-search-pricing` · DeepSeek Search 与 Fetch 价格及接口 | https://api-docs.deepseek.com/guides/search/ | 2026-11-05T04:13:24.878Z | 200 | `sha256:22bf7e7951fe71df3fffe48704779dd91a641410729d33d8e2ade26d8e482238` |
| cn | `deepseek-cn-pricing` · DeepSeek 国内模型能力与人民币价格 | https://api-docs.deepseek.com/zh-cn/quick_start/pricing/ | 2026-11-05T04:13:25.160Z | 200 | `sha256:94934cfe4f1d80210ea1c88d7eec51d371fcda8c8ccd0c38baacca763993c56a` |
| cn | `deepseek-cn-models-api` · DeepSeek 国内当前模型列表 API | https://api-docs.deepseek.com/zh-cn/api/list-models/ | 2026-11-05T04:13:27.491Z | 200 | `sha256:326db5651c7248f69444321d0709371d5f601e9a1856ec2829ddb6eb1646a507` |
| cn | `deepseek-cn-chat-api` · DeepSeek 国内 Chat Completions API | https://api-docs.deepseek.com/zh-cn/api/create-chat-completion/ | 2026-11-05T04:13:27.696Z | 200 | `sha256:03b643aee3e5eec1b9891bbadca5b4e7f4c461a96494672cb29997ee9195ed37` |
| cn | `deepseek-cn-responses-api` · DeepSeek 国内 Responses API | https://api-docs.deepseek.com/zh-cn/api/create-response/ | 2026-11-05T04:13:27.700Z | 200 | `sha256:ba611f6807cd840f965f8cddea6f0e6ea9f8222d92689885495c886a50aa9d12` |
| cn | `deepseek-cn-anthropic-api` · DeepSeek 国内 Anthropic API | https://api-docs.deepseek.com/zh-cn/guides/anthropic_api/ | 2026-11-05T04:13:27.736Z | 200 | `sha256:d898b796fd4ecfbb5ba9fd226135f41405d6b40897c96b7f0f5d621e14041a68` |
| cn | `deepseek-cn-search-guide` · DeepSeek 国内 Search 与 Fetch 接口 | https://api-docs.deepseek.com/zh-cn/guides/search/ | 2026-11-05T04:13:27.907Z | 200 | `sha256:cfc2e20b5a3b0d2f2186ddccd06a82247c61e0d39e33556ee9a74f1d71b8a64a` |

## deepseek 专属证据与核对说明

### DeepSeek Provider 采集 IR 候选

- IR 版本：1.0.0
- 市场：global、cn
- Offering：4 项
- 来源价格规则：0 条

#### 字段覆盖

| 来源 | 市场 | 数据域 | 状态 | 数量/说明 |
|---|---|---|---|---|
| deepseek-pricing | global | model_catalog | complete | 2 unique model IDs |
| deepseek-pricing | global | pricing | complete | 2 models with mapped price facts |
| deepseek-search-pricing | global | pricing | complete | 2 independent tool price facts 独立 Search/Fetch 按成功请求计价。|
| deepseek-models-api | global | api | partial | 0 recognized API source records 仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。|
| deepseek-search-pricing | global | api | partial | 3 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-chat-api | global | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-responses-api | global | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-anthropic-api | global | api | partial | 1 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-search-pricing | global | capability | partial | 2 independent Capability records Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。|
| deepseek-cn-pricing | cn | model_catalog | complete | 2 unique model IDs |
| deepseek-cn-pricing | cn | pricing | complete | 2 models with mapped price facts |
| deepseek-cn-search-guide | cn | pricing | complete | 2 independent tool price facts 独立 Search/Fetch 按成功请求计价。|
| deepseek-cn-models-api | cn | api | partial | 0 recognized API source records 仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。|
| deepseek-cn-search-guide | cn | api | partial | 3 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-chat-api | cn | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-responses-api | cn | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-anthropic-api | cn | api | partial | 1 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-search-guide | cn | capability | partial | 2 independent Capability records Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。|

#### 未迁移数据域

- IR 映射模型目录、模型级 API 限额/能力、文本生成 Route、Search/Fetch 独立能力与按成功请求计价；Operation 参数 Schema、限流细节及 Anthropic Route 仍待迁移。

价格规则保留来源市场、原币种、百万 Token 单位和高峰/空闲时段；此 IR 仍是候选，不会写入正式 Provider 数据。
