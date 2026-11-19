# deepseek 采集评审

## 采集摘要

| 项目 | 内容 |
|---|---|
| Provider | `deepseek` |
| 候选类型 | `provider-collection-ir-v1` |
| 市场 | global / cn |
| 观察时间（UTC） | 2026-11-19T05:00:09.258Z |
| 前一候选指纹 | `sha256:07b6444bd6bae9506a35997b0e916cd0d8a16331107d67cebed0577465ca10ef` |
| 本次候选指纹 | `sha256:05b315be8049d52abc107a2751d042ec96a0b47e97f413ec32e7fd139a31c0e4` |
| 来源快照 | 12 份 |

## 变更摘要

与上一份成功观察的候选事实逐路径比较；来源列表缺席只标记待核实，不构成退役结论。

变更统计：新增 12 项，更新 1 项，缺席待核实 64 项。

## 字段变化

### 来源覆盖

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| 完整记录 | 更新 | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>source ref：deepseek-pricing<br>scope：model_catalog<br>市场（market）：global<br>状态（status）：complete<br>record count：2<br>record unit：unique model IDs</li><li>source ref：deepseek-pricing<br>scope：pricing<br>市场（market）：global<br>状态（status）：complete<br>record count：2<br>record unit：models with mapped price facts</li><li>source ref：deepseek-search-pricing<br>scope：pricing<br>市场（market）：global<br>状态（status）：complete<br>record count：2<br>record unit：independent tool price facts<br>note：独立 Search/Fetch 按成功请求计价。</li><li>source ref：deepseek-models-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-search-pricing<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：3<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-chat-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-responses-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-anthropic-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：1<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-search-pricing<br>scope：capability<br>市场（market）：global<br>状态（status）：partial<br>record count：2<br>record unit：independent Capability records<br>note：Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。</li><li>source ref：deepseek-cn-pricing<br>scope：model_catalog<br>市场（market）：cn<br>状态（status）：complete<br>record count：2<br>record unit：unique model IDs</li><li>source ref：deepseek-cn-pricing<br>scope：pricing<br>市场（market）：cn<br>状态（status）：complete<br>record count：2<br>record unit：models with mapped price facts</li><li>source ref：deepseek-cn-search-guide<br>scope：pricing<br>市场（market）：cn<br>状态（status）：complete<br>record count：2<br>record unit：independent tool price facts<br>note：独立 Search/Fetch 按成功请求计价。</li><li>source ref：deepseek-cn-models-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-search-guide<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：3<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-chat-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-responses-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-anthropic-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：1<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-search-guide<br>scope：capability<br>市场（market）：cn<br>状态（status）：partial<br>record count：2<br>record unit：independent Capability records<br>note：Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。</li></ul></details> | 列表（18 项）<details><summary>展开完整内容</summary><ul><li>source ref：deepseek-pricing<br>scope：model_catalog<br>市场（market）：global<br>状态（status）：complete<br>record count：2<br>record unit：unique model IDs</li><li>source ref：deepseek-pricing<br>scope：pricing<br>市场（market）：global<br>状态（status）：complete<br>record count：2<br>record unit：models with mapped price facts</li><li>source ref：deepseek-search-pricing<br>scope：pricing<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：independent tool price facts<br>note：独立 Search/Fetch 按成功请求计价。</li><li>source ref：deepseek-models-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-search-pricing<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：3<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-chat-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-responses-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-anthropic-api<br>scope：api<br>市场（market）：global<br>状态（status）：partial<br>record count：1<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-search-pricing<br>scope：capability<br>市场（market）：global<br>状态（status）：partial<br>record count：2<br>record unit：independent Capability records<br>note：Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。</li><li>source ref：deepseek-cn-pricing<br>scope：model_catalog<br>市场（market）：cn<br>状态（status）：complete<br>record count：2<br>record unit：unique model IDs</li><li>source ref：deepseek-cn-pricing<br>scope：pricing<br>市场（market）：cn<br>状态（status）：complete<br>record count：2<br>record unit：models with mapped price facts</li><li>source ref：deepseek-cn-search-guide<br>scope：pricing<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：independent tool price facts<br>note：独立 Search/Fetch 按成功请求计价。</li><li>source ref：deepseek-cn-models-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-search-guide<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：3<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-chat-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-responses-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：0<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-anthropic-api<br>scope：api<br>市场（market）：cn<br>状态（status）：partial<br>record count：1<br>record unit：recognized API source records<br>note：只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。</li><li>source ref：deepseek-cn-search-guide<br>scope：capability<br>市场（market）：cn<br>状态（status）：partial<br>record count：2<br>record unit：independent Capability records<br>note：Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。</li></ul></details> |

### 市场 / cn

#### Capability / cn-web-fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices | 新增 | 未记录 | 空列表 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档明确列出每 1,000 次成功请求价格。 | 未记录 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › capability ref | 缺席待核实 | cn-web-fetch | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档列出 Fetch 每 1,000 次成功请求收费 5 CNY。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 币种由对应市场的官方计价文档明示。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | CNY | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档列出 Fetch 每 1,000 次成功请求收费 5 CNY。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档列出 Fetch 每 1,000 次成功请求收费 5 CNY。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 缺席待核实 | successful_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 缺席待核实 | 1,000 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 缺席待核实 | per_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 缺席待核实 | 5 | 未记录 |

#### Capability / cn-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices | 新增 | 未记录 | 空列表 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档明确列出每 1,000 次成功请求价格。 | 未记录 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › capability ref | 缺席待核实 | cn-web-search | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 币种由对应市场的官方计价文档明示。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | CNY | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › assertion | 缺席待核实 | 官方文档列出 Search 每 1,000 次成功请求收费 5 CNY。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-cn-search-guide › source ref | 缺席待核实 | deepseek-cn-search-guide | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 缺席待核实 | successful_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 缺席待核实 | 1,000 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 缺席待核实 | per_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 缺席待核实 | 5 | 未记录 |

#### Model / deepseek-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 deepseek-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-flash › operation ref | 新增 | 未记录 | 未记录 |

#### Model / deepseek-v4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 deepseek-v4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-v4-pro › operation ref | 新增 | 未记录 | 未记录 |

### 市场 / global

#### Capability / global-web-fetch

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices | 新增 | 未记录 | 空列表 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档明确列出每 1,000 次成功请求价格。 | 未记录 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › capability ref | 缺席待核实 | global-web-fetch | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档列出 Fetch 每 1,000 次成功请求收费 0.75 USD。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 币种由对应市场的官方计价文档明示。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档列出 Fetch 每 1,000 次成功请求收费 0.75 USD。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档列出 Fetch 每 1,000 次成功请求收费 0.75 USD。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 缺席待核实 | successful_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 缺席待核实 | 1,000 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 缺席待核实 | per_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 缺席待核实 | 0.75 | 未记录 |

#### Capability / global-web-search

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices | 新增 | 未记录 | 空列表 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档明确列出每 1,000 次成功请求价格。 | 未记录 |
| prices › 记录 0 › capability ref › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › capability ref | 缺席待核实 | global-web-search | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档列出 Search 每 1,000 次成功请求收费 0.75 USD。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 币种由对应市场的官方计价文档明示。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › 币种（currency） | 缺席待核实 | USD | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档列出 Search 每 1,000 次成功请求收费 0.75 USD。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › assertion | 缺席待核实 | 官方文档列出 Search 每 1,000 次成功请求收费 0.75 USD。 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › evidence › 记录 deepseek-search-pricing › source ref | 缺席待核实 | deepseek-search-pricing | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计费指标（metric） | 缺席待核实 | successful_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › quantity | 缺席待核实 | 1,000 | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request › 计量单位（unit） | 缺席待核实 | per_request | 未记录 |
| prices › 记录 0 › 价格信息（pricing） › 记录 0 › rates › 记录 successful_request | 缺席待核实 | 0.75 | 未记录 |

#### Model / deepseek-flash

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 deepseek-flash › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-flash › operation ref | 新增 | 未记录 | 未记录 |

#### Model / deepseek-v4-pro

| 字段 | 变化 | 原值 | 新值 |
|---|---|---|---|
| prices › 记录 deepseek-v4-pro › capability ref | 新增 | 未记录 | 未记录 |
| prices › 记录 deepseek-v4-pro › operation ref | 新增 | 未记录 | 未记录 |


> 新旧值按字段横向对照；长值可在单元格内展开完整内容。缺席只表示待核实，不构成退役结论。候选仅表示来源观察，不代表已核验、已接受或已发布。

## 来源快照

| 市场 | 来源 ID / 名称 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |
|---|---|---|---:|---:|---|
| global | `deepseek-pricing` · DeepSeek 模型能力与价格 | https://api-docs.deepseek.com/quick_start/pricing/ | 2026-11-19T05:00:07.192Z | 200 | `sha256:1cfdcd452dbb2b59f32d220190237d4a839fcd807ff4a14887b43c23186c9cfc` |
| global | `deepseek-models-api` · DeepSeek 当前模型列表 API | https://api-docs.deepseek.com/api/list-models/ | 2026-11-19T05:00:07.193Z | 200 | `sha256:b01d2dc0e147982d5f689c47754e3abbe9188234550c6215d6f460050ecab0e6` |
| global | `deepseek-chat-api` · DeepSeek Chat Completions API | https://api-docs.deepseek.com/api/create-chat-completion/ | 2026-11-19T05:00:08.314Z | 200 | `sha256:67e776249cf03fa31d7468b4cc46efa4e0a75366f68e2593d9750efeef49da50` |
| global | `deepseek-responses-api` · DeepSeek Responses API | https://api-docs.deepseek.com/api/create-response/ | 2026-11-19T05:00:07.249Z | 200 | `sha256:a123a7594c436d93dca63e6c171cb04a94991c6d36a5e200e5aa2fe160bfc3bb` |
| global | `deepseek-anthropic-api` · DeepSeek Anthropic API | https://api-docs.deepseek.com/guides/anthropic_api/ | 2026-11-19T05:00:08.718Z | 200 | `sha256:07c78b5bcba4753844a921b5c337bfa72df4d978cdfdea173312b0d91b2ce34d` |
| global | `deepseek-search-pricing` · DeepSeek Search 与 Fetch 价格及接口 | https://api-docs.deepseek.com/guides/search/ | 2026-11-19T05:00:08.365Z | 200 | `sha256:8b9cdd259d8af2188f256878669d8f49ffc095b63bb71ef64bb0e21673b3dc33` |
| cn | `deepseek-cn-pricing` · DeepSeek 国内模型能力与人民币价格 | https://api-docs.deepseek.com/zh-cn/quick_start/pricing/ | 2026-11-19T05:00:08.769Z | 200 | `sha256:fe0be468b32a0328ce112929b28ba756d26e38eba55cef1020db40e0e15ce087` |
| cn | `deepseek-cn-models-api` · DeepSeek 国内当前模型列表 API | https://api-docs.deepseek.com/zh-cn/api/list-models/ | 2026-11-19T05:00:09.148Z | 200 | `sha256:048641bb20d7a5c30515571ed97fc3404420caf3c067286f9f101e1ee2a5ce90` |
| cn | `deepseek-cn-chat-api` · DeepSeek 国内 Chat Completions API | https://api-docs.deepseek.com/zh-cn/api/create-chat-completion/ | 2026-11-19T05:00:09.205Z | 200 | `sha256:0b69141309e0b8f12a6e6115a3321e87e5e062523a469ba799c398e896de636f` |
| cn | `deepseek-cn-responses-api` · DeepSeek 国内 Responses API | https://api-docs.deepseek.com/zh-cn/api/create-response/ | 2026-11-19T05:00:09.201Z | 200 | `sha256:b6dc17f2d4aef20bd4b00f732d15d7463d8b538f37e82c8dd6941abd77eb0f39` |
| cn | `deepseek-cn-anthropic-api` · DeepSeek 国内 Anthropic API | https://api-docs.deepseek.com/zh-cn/guides/anthropic_api/ | 2026-11-19T05:00:09.258Z | 200 | `sha256:4f5e4a0c9101150a579185d135696b3765d726e6d56780ae7d75fe5d4fcd9602` |
| cn | `deepseek-cn-search-guide` · DeepSeek 国内 Search 与 Fetch 接口 | https://api-docs.deepseek.com/zh-cn/guides/search/ | 2026-11-19T05:00:09.255Z | 200 | `sha256:75a3fce987afe3f10812763aa4646130af7e92ec7300ffc3a49bb0a84cac5699` |

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
| deepseek-search-pricing | global | pricing | partial | 0 independent tool price facts 独立 Search/Fetch 按成功请求计价。|
| deepseek-models-api | global | api | partial | 0 recognized API source records 仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。|
| deepseek-search-pricing | global | api | partial | 3 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-chat-api | global | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-responses-api | global | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-anthropic-api | global | api | partial | 1 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-search-pricing | global | capability | partial | 2 independent Capability records Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。|
| deepseek-cn-pricing | cn | model_catalog | complete | 2 unique model IDs |
| deepseek-cn-pricing | cn | pricing | complete | 2 models with mapped price facts |
| deepseek-cn-search-guide | cn | pricing | partial | 0 independent tool price facts 独立 Search/Fetch 按成功请求计价。|
| deepseek-cn-models-api | cn | api | partial | 0 recognized API source records 仅将 API 模型清单中的 ID/名称用于身份匹配；逐模型规格由维护者手工维护。|
| deepseek-cn-search-guide | cn | api | partial | 3 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-chat-api | cn | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-responses-api | cn | api | partial | 0 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-anthropic-api | cn | api | partial | 1 recognized API source records 只记录 Provider API 地址、Route 与独立服务；逐模型规格由维护者手工维护。|
| deepseek-cn-search-guide | cn | capability | partial | 2 independent Capability records Search / Fetch 能力及 Route 已映射；参数 Schema 与限流字段仍未完整迁移。|

#### 未迁移数据域

- IR 映射模型目录、模型级 API 限额/能力、文本生成 Route、Search/Fetch 独立能力与按成功请求计价；Operation 参数 Schema、限流细节及 Anthropic Route 仍待迁移。

价格规则保留来源市场、原币种、百万 Token 单位和高峰/空闲时段；此 IR 仍是候选，不会写入正式 Provider 数据。
