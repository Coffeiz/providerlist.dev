# PRD-DATA-3 · 规范模型注册表与 Provider 供应映射

> 状态：✅ 已完成（v1 契约、数据迁移与展示；自动采集工作流由 INGEST-1 承接）
> 决策依据：[ADR 0023](../../adr/0023-模型发布事实与Provider供应事实分离.md)、[ADR 0024](../../adr/0024-模型规格人工维护与定价页采集边界.md)、[ADR 0026](../../adr/0026-采集快照与人工最终数据分离.md)、[ADR 0030](../../adr/0030-规范Model-ID归一化与供应商调用ID分离.md)、[ADR 0031](../../adr/0031-Provider模型ID自动关联规范Model.md)、[ADR 0039](../../adr/0039-来源追溯使用PR记录而非Verification字段.md)

## 1. 背景

同一开发厂商的模型可能通过厂商直营 API、云平台或聚合商重复供应。例如 DeepSeek 发布的一个型号，可能同时由 DeepSeek、阿里云等 Provider 按各自的模型 ID、市场和价格提供。当前 v1 将规格事实放在 Provider 的 Offering 上，导致同一模型的发布规格容易多份拷贝；一份更新后，其他副本会过期，跨 Provider 查询也难以判断它们是否指向同一模型。

需要把“开发厂商发布了什么模型”与“某 Provider 当前怎样供应它”分成两个事实层，并用有证据的身份引用连接。目标是去重开发厂商的发布事实，而不是把不同 Provider 的接入行为、价格或供应状态归并成一个值。

## 2. 目标

1. 建立全局规范 Model 身份，以开发厂商和精确发布型号/变体为边界；每个型号的开发厂商发布事实只维护一份。
2. 每个 Provider 的 Offering 通过 `model_ref` 指向规范 Model，同时保留本地 `provider_model_id` 和现有 Service/市场、价格、可用性、生命周期等供应事实。
3. 按字段保存 Model 发布事实的来源与证据；每个已知值可以追溯到开发厂商明确发布的资料及对应型号。
4. 允许多个 Provider 的 Offering 引用同一 Model；保留明确不同的版本、变体、蒸馏模型或不同开发主体为独立 Model。
5. 对无法证实的映射保留未知状态。名称只有完整精确命中且唯一指向一个规范 Model 时才可自动关联；不得用相似名称、ID 子串或规格相近度自动合并。
6. 保持公开目录静态化，并维持“规范 Model 数量”与“当前 Provider Offering 数量”各自独立的统计含义。
7. 将开发厂商发布规格与 Provider API/供应事实分开：Model 类型和输入/输出模态只写入规范 Model。已有 Provider API 模态观察可在迁移时补入规范 Model，但必须保留 Provider 来源并标记 `unverified`，作为待复核资料；后续采集器不得将观察自动写成正式 Model 事实。Offering 不保存这些字段。
8. 为后续供应价格采集定义与 Model 维护的边界；自动采集、运行状态、Issue、快照基线和 PR 流程由 PRD-INGEST-1 实施。
10. 模型类型页面在供应项旁显示其规范 Model 的开发厂商，帮助区分模型开发者与实际提供该模型的 Provider。
11. 本次改造只改变模型详细信息及模型当前供应/价格的采集来源；Provider API、Route、Provider/Service 能力与 Plan 套餐采集保持现有范围和行为。
12. Model 源文件按开发厂商和型号拆分为 `data/models/<developer_id>/<model>.json`；来源与字段证据独立存放在 `data/sources/models/`，Provider 对应台账位于 `data/sources/providers/`。公开 Provider/Model JSON 不含内部来源及证据记录。
13. Model 的规范 ID 使用 `<developer_id>/<model_slug>`；slug 统一为小写字母、数字和连字符。Provider 的 `provider_model_id` 原样保留；多个已证实的本地 ID 可映射到同一个 `model_ref`。

## 3. 非目标

- 不建立收录所有历史模型的百科；范围是与 Provider 当前或历史供应记录相关、且身份可说明的规范型号。
- 不自动判断两个近似名称或别名是否为同一 Model；完整名称唯一命中可生成引用，名称重名或模糊匹配只能进入人工评审。
- 不由采集器抓取、抽取、推断或自动填充 Model 规格字段；定价页解析不得顺带更新 `model_type`、上下文、模态、能力或参数。
- 不把 Provider 的价格、市场、账户资格、可用性、生命周期或 API Route 参数放到共享 Model 上。
- 不声称开发厂商公布的能力一定能通过每一个托管渠道、协议或账号使用。
- 不实施模型推理、API 调用或 Provider 兼容性探测。
- 不在本 PRD 实施定时/手动采集、Issue 自动维护、采集快照基线、状态报告或聚合 PR；这些属于 PRD-INGEST-1。
- 不在本 PRD 中批准抓取任意单模型页面；来源采集仍须遵守现有固定来源白名单与 Provider 采集规则。
- 不改造或停用现有 Provider API、Route、Provider/Service 能力、Plan 套餐及其价格采集器；除 PR 评审流程统一接入外，其来源、解析范围和数据语义不属于本次变更。

## 4. 领域边界

| 概念 | 表达内容 | 示例字段/关系 |
|---|---|---|
| Model | 开发厂商发布的精确型号及有证据的发布事实 | 稳定规范 ID、开发厂商、正式名称/别名、型号版本、`model_type`、发布规格、字段证据 |
| Provider Offering | 某 Provider 在某 Service/市场实际提供的供应项 | `provider_model_id`、`model_ref`、价格引用、`availability`、`lifecycle` |
| Route | 某 Offering 的具体 API 协议、端点和参数映射 | 协议、请求字段、`reasoning` 参数映射、Route 级限制 |

开发厂商官方资料明确描述的型号事实可由维护者人工录入 Model，例如正式发布日期、`model_type`、发布规格、输入/输出模态或厂商明确声明的能力。录入值须保留原始官方来源和字段证据；采集器不抓取或抽取这些详情。该声明只代表发布资料所述的型号事实，不代表任一 Provider 已实现相同 API 行为。未由开发厂商披露的分类或能力不从 Provider 的命名、相邻型号或接入行为推断。

请求参数和协议限制须按语义归属：只有开发厂商明确将其作为该型号的通用发布事实时才可进 Model；如 `temperature` 的可设范围、参数名、默认值因 API/Route 而异，则归对应 Route/Offering。不得因参数在常见 API 中存在就补成全局 Model 属性。

## 5. 需求

### 5.1 Model 身份与记录

- 每个 Model 必须有稳定且全局唯一的规范 ID，并明确所属开发厂商。
- 每个型号的人工事实独立保存在 `data/models/<developer_id>/<model>.json`；文件名由精确 Model ID 尾段确定，内容只保存 Model。来源与字段证据单独保存在同路径结构的 `data/sources/models/<developer_id>/<model>.json` 台账中。构建产物汇总为 `/v1/models.json`。
- 一个记录对应一个可区分的发布型号/变体，不以产品家族代替精确型号。家族关系可以显式表达，但不能因此共享未经证实的规格。
- Model 名称、开发厂商官方 ID、经核实别名和版本/变体身份需要彼此区分。别名记录须可追溯来源；未知别名不进入正式身份表。
- 每个非空发布事实字段应能追溯其来源；贡献者通过 Provider / Model PR 模板提供来源 URL，GitHub Review / Merge 记录审查时间。`retrieved_at`、`observed_at`、`published_at` 按各自语义记录。结构化 `verification` 字段要求由 ADR-0039 取代。
- 模型详细规格的采集器、LLM 抽取器或自动转换器不得写入规范 Model 数据，也不得因定价变化而改动 Model 事实。
- 官方来源没有披露的事实必须保持未知，不得用其他 Provider 的规格或社区猜测补齐开发厂商事实。

### 5.2 Offering 映射

- Offering 可引用一个规范 Model；未知、存在冲突或证据不足时引用保持 `null`，并能进入人工复核清单。
- `provider_model_id` 必须原样保留 Provider 实际要求调用的 ID；它不是规范 Model ID，也不因 Model 合并而改写。
- 同一个 Model 可以被多个 Provider、Service 和 Offering 引用。每条供应记录各自保留其市场、价格、当前可用性和生命周期。
- 第三方托管或聚合渠道映射到开发厂商 Model 时，可由唯一完整名称命中建立候选关联；若同名规范 Model 来自不同开发商、命中不唯一，或渠道只宣称“兼容”但无法确认底层具体型号，保持未关联并进入 PR review。
- 发布事实与 Provider API 行为冲突时，不覆盖 Model 发布事实或 Provider 事实；记录冲突及证据，并按所属事实层复核。不得默默选择一侧覆盖另一侧。

#### 5.2.1 采集与评审自动化的责任边界

DATA-3 只交付 Model 注册表、Offering 的规范身份引用、迁移清单、字段证据、冲突处理、静态产物与站点展示。Model 规格由维护者根据可追溯的官方资料维护；Offering 的 API、Route、服务能力、市场、价格、状态和 Plan 仍属于 Provider 供应事实。

定价页面的手动/定时采集、未映射 ID Issue、来源快照基线、差异报告、采集结果状态机、聚合评审 PR、人工最终数据所有权及失败保护均转由 PRD-INGEST-1 实施。INGEST-1 不得因此写入 Model 规格，也不得修改 DATA-3 已定义的数据边界。

#### 5.2.2 错误供应观测更正

已发布的误标 `observed_available` 可通过带有证据的 `retracted` 生命周期事件更正。该事件以 `corrects_event_id` 精确指向同一 Offering 的原观测；状态机保留原始事件历史、忽略已撤回观测，并在不存在其他有效供应证据时将生命周期恢复为 `unknown`。不得直接删改原事件或编译产物。

### 5.3 查询、统计与展示

- 使用方可从 Offering 读取本地供应事实，并按 `model_ref` 查询共用的 Model 发布事实。
- 未关联 Offering 仍可正常展示和计入相应供应统计；未知关联不得阻断 Provider 目录加载。
- 模型类型页面的每条 Offering 在已解析 `model_ref` 时，展示所关联规范 Model 的开发厂商名称；开发厂商信息置于模型 ID 附近作为辅助标识，不改变该行仍代表 Provider Offering 的语义。
- `model_ref` 为空、身份待确认或引用无效时，显示明确的“开发商未确认”状态；不得从 Provider 名称、模型 ID 相似度或其他 Offering 推断开发厂商。开发厂商展示不得合并或隐藏不同 Provider 的供应行。
- `canonical_model_count` 只统计至少被目录引用的不同规范 Model ID；不因同一 Model 被多个 Provider 提供而重复计数，也不因未被任何供应引用的注册记录而虚增当前目录数。
- `active_offering_count` 继续按照现有生命周期/可用性规则统计实际供应 Offering；Model 去重不得改变供应数量。
- Model 不存在或关联无法解析时，构建/校验给出可定位的错误或待复核状态，前端不得凭展示名构造虚假关联。

## 6. 迁移要求

1. 盘点所有正式 Provider Offering、现有 `data/model-specs/` 记录、已有 `model_ref` 与生产/测试夹具，生成完整的模型身份清单及“源字段 → 目标事实层 → 证据 → 处理结论”迁移报告。每个现存 Provider 模型 ID 都须出现于清单中，并标为已关联、待确认或非模型/排除；不得因无法判定而漏项。
2. 将可证实为开发厂商发布事实的字段迁到唯一 Model 记录，并完整保留字段证据及其来源语义。迁入的规格需人工核对/录入，不得以旧采集器自动猜测归属。
3. Provider 专属事实留在原供应层；不得把 Provider 价格、供应状态、区域限制或 Route 特有参数迁入共享 Model。对于 `model_type` 及规格/能力等可共享字段，只有能追溯开发厂商发布证据时才迁至 Model；无法证明的值保持未知或按现有契约保留并列入复核，不能错误地升格为共享发布事实。
4. 多个 Provider 的规格冲突不得由自动 last-write-wins 决定。判断为不同型号/变体时拆成不同 Model；无法判定时保留未关联并记录待复核原因。
5. 迁移不能改变 `provider_model_id`、Offering ID、Service ID、价格、生命周期和供应统计，除非另有独立、经评审的证据更正。
6. 本站和公开数据 API 尚未上线；本次迁移直接定义首次正式发布的 v1 契约，路径保持 `/v1/`、`schema_version` 保持 `1.0.0`。Offering 上的模型规格字段直接迁入 `/v1/models.json`，Offering `model_ref` 改为必填的 `string | null`。不发布 `/v2/`，不保留旧字段兼容投影，也不建立运行时迁移分支。
7. 回滚时能从迁移前的 Git 源文件与保留的来源证据恢复 Provider 供应资料；不可把迁移建立在不可逆的数据删除上。
8. 所有规范 Model ID 采用 `<developer_id>/<model_slug>` 格式；slug 只含小写 ASCII 字母、数字和连字符。迁移 ID 时同步更新 Model 文件、来源台账与正式 `model_ref`，绝不改写 `provider_model_id` 或 Route 的 `request_model_id`。
9. 清理模型重复时依据开发商身份和精确发布型号，而不是 Provider ID 的格式或名称相似度。确认是同一型号的不同供应商调用别名时，共用一个 Model；无法确认的 Offering 仍为 `model_ref: null` 并保留复核项。

## 7. 验收标准

- [x] 每个规范 Model ID 唯一，且有明确开发厂商身份；同一精确型号可由多个 Offering 引用。
- [x] 同名但开发者不同、版本/变体不同或底层型号未证实的记录不会被自动合并；证据不足的映射为 `null`。
- [x] Offering 的 `provider_model_id`、市场、价格、可用性和生命周期保持供应层原值；Model 发布规格按字段保存证据。
- [x] Model 的非空类型和输入模态位于 Model 规格，并能追溯至官方来源；未披露事实保持未知。
- [x] 迁移清单完整覆盖所有 Offering 与 124 条旧规格记录；每项标记已关联、待确认或带冲突迁移，冲突另有明细报告。
- [x] `model_ref: string | null`、跨文件引用校验、`/v1/models.json`、目录计数及开发者名称展示已接入 v1 静态目录和站点。
- [x] 多个 Provider Offering 共享一个 Model 时只计一次规范 Model，供应数量仍按 Offering 逐项统计。
- [x] 已发布的误标供应观测可用带证据的 `retracted` 事件更正；保留原事件，且没有其他有效供应证据时不再保持 `active`。
- [x] 数据校验、类型检查、Model 注册表构建和前端生产构建通过。
- [x] 本站尚未上线，直接采用首次 v1 契约：`/v1/models.json`、`model_ref: string | null`，不采用 `/v2/`、不保留旧字段兼容投影。
- [x] 人工维护 Model 事实按 `data/models/<developer_id>/<model>.json` 一型号一文件；字段证据在 `data/sources/models/` 台账中单独维护，编译器汇总并校验成不含内部台账的公开 `/v1/models.json`。
- [x] Provider 与 Model 的 Source/Evidence 及来源引用迁入 `data/sources/`；公开 Provider、Model、摘要及目录 JSON 不输出这些字段，官方文档导航链接继续保留。
- [x] 规范 Model ID 统一为 `<developer_id>/<小写连字符型号 slug>`；Model 展示名保留官方拼写，Provider 调用 ID 不改写，Model ID 与开发商目录、来源台账及全部正式引用一致。

### 转交 PRD-INGEST-1

- [ ] 定价页手动/定时采集、24 小时 UTC 00:00 调度、候选状态机、未映射 ID Issue、来源快照基线及聚合 PR 流程。（PRD-INGEST-1 已交付手动/定时采集、UTC 00:00 调度、候选状态机、来源快照基线与聚合 PR 流程；**未映射 ID 自动创建/更新 Issue 尚未实施**，当前未关联的 Provider 模型 ID 只列在候选 review 报告里。）
- [x] 采集器只产生来源候选和差异报告，不自动覆写最终 Provider/Model 文件；API、Route、Provider/Service 能力及 Plan 采集保持既有行为。（实跑采集与端到端用例均确认：机器侧只写 `data/candidates/**` 与 `data/ingestion-lifecycle/**`，正式目录 `data/providers/**`、`data/models/**` 未被自动改写；现有适配器的解析规则与字段归属未变。）

## 8. 影响的契约

实施结果是新增 Model 实体及其 JSON Schema/TypeScript 类型和语义校验规则；正式 Model 源数据按 `data/models/<developer_id>/<model>.json` 一型号一文件维护，Provider Offering 的 `model_ref` 是必填 nullable 跨文件引用。编译器汇总为公开静态 `/v1/models.json`，并在目录索引/manifest 中登记。

现有 `data/providers/*.json`、`data/models/<developer_id>/<model>.json` 与 `/v1/` 静态产物均受影响；已完成迁移的旧 `data/model-specs/` 不再保留。Schema、TS 类型、语义校验、证据、编译器、统计和站点展示已同步。`retracted` 生命周期事件支持审计更正错误供应观测。定价采集、Issue、快照基线和 PR 自动化由 PRD-INGEST-1 实施。本站未发布，因此首次 v1 输出直接采用新结构，无旧消费者弃用或并行迁移期。

## 9. 风险与缓解

| 风险 | 缓解 |
|---|---|
| 同名型号被错误合并 | 要求开发者身份、精确型号和来源证据；不明时留空 |
| 聚合商将兼容型号宣传为原厂型号 | 需要精确 ID 对应证据；仅有兼容性宣称时不做身份映射 |
| 各 Provider 的规格数值不同 | 将开发者发布事实与 Provider Route/Offering 事实分开，冲突显式评审 |
| 迁移时丢失人工核验及来源信息 | 按字段迁移证据，保留旧数据快照与可回滚提交 |
| 首次公开契约定义错误 | 上线前通过 Schema、语义校验、编译产物和页面使用核对；首次上线前不维护兼容投影 |
| 中心表成为不可信的“全知模型库” | 只收有发布证据的字段，未知保持未知；不从别家 Provider 补全 |
| 定价页面结构变化导致误开大量 Issue | 解析失败时停止差异判定；只对成功解析的语义新增行创建 Issue，并按 Provider/Service/ID 去重 |
| 手工录入造成规格过期 | 保留来源链接与来源快照时间；用缺口清单显示未知事实，不由抓取器暗中覆盖 |
| 采集候选与人工最终数据不同，被误作覆盖冲突 | 变化检测只针对采集器自身快照基线；采集器只写候选差异和证据，正式目录由人工评审者编辑 |
| 采集不完整导致错误推进快照基线 | 仅完整成功的观察可推进基线；失败时保留上次成功观察并显式报告 |

## 10. 回滚

保留迁移前的 Git 源文件与来源证据，确保错误合并或公开契约回归时可以恢复 Provider 供应资料。身份判断修正后重新生成迁移结果；不得通过删除来源证据或直接改公开编译产物修复。
