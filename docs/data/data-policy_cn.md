# 数据政策

本文说明 ProviderList 如何记录供应状态、处理采集结果并发布数据。

- [自动采集流程](../guides/ingestion_cn.md)
- [数据字段定义](schema_cn.md)

## 1. 供应状态

Service 用 `supply_status` 表示市场供应情况：

| 值 | 含义 | 默认展示 |
|---|---|---|
| `active` | 当前供应 | 是 |
| `deprecated` | 官方已弃用或宣布停止支持，但可能仍可用 | 是，标注弃用 |
| `retired` | 有官方依据确认已停止供应 | 否，可筛选查看 |
| `unknown` | 供应情况无法确认 | 不计入已确认供应 |

Offering 用单个 `status` 表示该模型在对应市场的状态：

| 值 | 含义 | 默认展示 |
|---|---|---|
| `active` | 当前供应 | 是 |
| `restricted` | 当前供应，但有账号资格或区域限制 | 是 |
| `deprecated` | 官方已弃用或宣布停止支持，但可能仍可用 | 否，可筛选查看 |
| `retired` | 有官方依据确认已停止供应，或达到下述连续完整目录缺席阈值并经 PR 审核 | 否，可筛选查看 |
| `unknown` | 状态无法确认 | 不计入已确认供应 |

Service 的 `account_requirements` 记录适用于整个市场的要求；Offering 的 `restricted` 只标记该模型供应项受到限制。Service 与 Offering 不重复记录两个状态字段。Route 的调用状态用 `callability` 表达；独立 Service Capability 是当前目录记录，不设置状态字段。
当前官方价格表中为具体模型采集到有效价格时，默认将 Offering 标记为 `active`；明确的历史/退役信息优先。价格记录不代表账号资格已确认，也不代表 API 调用成功。没有当前价格或当前目录依据时，状态保持 `unknown`。

独立服务能力不设置状态字段；出现在 Service 的 `capabilities` 中即表示当前目录收录该能力。市场由所属 Service 确定，套餐限制使用 `required_plan_ids` 引用同一 Service 的 Plan。

## 2. 缺席与退役

> **目录里暂时没有记录，不等于已经退役。**

抓取失败、限流、分页遗漏或单次暂时缺少记录，都不能作为退役依据。采集器只有在同一市场的官方模型目录连续两次报告完整、两次观察至少相隔 24 小时，并且旧 Offering 在两次 IR 中都缺席时，才会在自动 PR 中提议把该 Offering 的 `status` 改为 `retired`。

该规则只生成待审源文件变更，不会自动合并或发布。评审者必须核对市场、服务线、分页与目录覆盖范围以及 PR 中列出的官方来源；发现来源不完整或模型仍在供应时，应阻止或修正该变更。模型重新出现会清除缺席计数。模型未被模型目录采集覆盖时，不适用此自动提案。

另外：

- 单条价格记录不能证明账号资格或 API 可调用。
- Offering 退役只影响该 Provider 的这条供应记录，不影响其他 Provider，也不删除规范 Model。
- 规范 Model 记录开发商公布的型号事实，与单个 Provider 的供应状态分开维护。

## 3. 更新时间与来源

### 更新时间

Provider 和 Model 源文件不手填 `updated_at`。编译器根据文件最近一次 Git 提交生成站点内部更新时间；缺少 Git 历史时使用构建时间。该字段不属于公开 API。

### 正式数据与采集材料

| 内容 | 用途 |
|---|---|
| Provider、Model TOML 源文件 | 维护正式目录数据 |
| `data/collector/providers.json` | 记录官方来源和采集时间 |
| 采集快照、IR 候选、评审材料 | 对照来源变化，不直接作为公开目录数据 |

正式数据新增或修正时，应在 PR 中提供可核对的来源。

模型目录事实由维护者录入。采集器可以发现模型 ID 并生成候选，但不会自动新增或修改规范 Model 记录。

## 4. 采集、审阅与发布

当前 Provider 流程：

```text
官方来源 → 采集快照与来源观察 → 解析为 IR → 校验并生成差异
         → Sync 创建待审 PR → 人工审阅并合并 → 构建站点与公开 JSON
```

**采集器不直接发布数据。** Sync PR 是正式源文件的变更提案；变更合并后才进入构建和发布。

采集和评审规则：

- 抓取失败或观察不完整时，不得当作“没有变化”，也不得清空字段或推断退役。连续两次完整目录缺席（间隔至少 24 小时）只会生成 `retired` 提案 PR，仍须人工审核并合并。
- 每个来源都与自己的上次成功观察比较；不以正式目录作为来源快照的比较基线。
- 排版、空白或抓取时间变化不会单独形成业务差异；来源事实变化才形成候选差异。
- 人工修改正式数据不会推进或重置来源观察基线。

详细决策见 [ADR 0026](../adr/0026-采集快照与人工最终数据分离.md)。

> **官方 Feed 尚未接入。** 域名验证、授权登记、定期 Pull、Push 和发布闭环均未实现。因此，Feed 规范中的 Scope 和冲突规则目前不是 Sync 的权限门禁。

## 5. 来源优先级与冲突

下表用于评审时比较证据，**不是采集器自动覆盖正式数据的规则**：

| 优先级 | 来源 | 使用方式 |
|---|---|---|
| 1 | 官方 API 实测或官方文档 | 主要依据 |
| 2 | 已授权官方 Feed 的厂商声明 | Feed 接入后适用；声明不等于本站实测 |
| 3 | 有来源和核对状态的社区补充 | 可补充官方未披露字段 |
| 4 | 第三方数据（含历史 `upstream`） | 辅助补值 |

来源冲突时，在评审材料中保留来源和差异，由维护者决定正式值；不得仅按抓取时间覆盖。社区和第三方数据不能静默替换冲突的官方数据。页面上的来源标记也不代表本站已实测。

`pipeline/src/normalize/merge.ts` 中的 `mergeField()`、`checkScope()` 和 `classifyChangeRisk()` 尚未接入采集、Sync 或发布主流程。`mergeField()` 会排除过期的 `manual_locked` 候选；普通冲突返回最高优先级值并标记冲突，高风险冲突保留上一个值。这些函数不会自动创建 review、阻止合并或修改正式 Provider 文件。

## 6. 目录统计

统计由 `pipeline/src/normalize/stats.ts` 生成，字段定义见 `CatalogStats`：

| 字段 | 统计含义 |
|---|---|
| `provider_count` | 已加载的 Provider 数 |
| `service_count` | Service 数 |
| `canonical_model_count` | 至少被一个 Offering 引用的规范 Model 数，同一 Model 只计一次 |
| `active_offering_count` | `status=active` 或 `status=restricted` 的 Offering 数 |
| `active_offering_count_by_type` | 按规范 Model 主类型统计有效 Offering；未关联或未知类型计入 `unknown` |
| `service_capability_count` | 当前供应的独立服务能力数，不计入 Offering 数 |
| `first_party_direct_offering_count` | `provider.kind=first_party` 的有效 Offering 数 |
| `official_feed_coverage` | 已连接官方集成的 Provider 数和申报 Offering 数 |

> 这些是目录计数，不是质量评分。当前统计不提供价格可信率、Route 核验率、过期记录数或来源冲突数；不能从现有计数推导这些结论。

## 7. 当前状态与复核

| 状态 | 页面处理 |
|---|---|
| `active`、`restricted` | 默认显示在当前列表中 |
| `deprecated`、`retired`、`unknown` | 默认隐藏，可通过“其他状态”筛选查看 |

独立服务能力单独展示，不计入模型 Offering 数。

仓库没有按字段自动计算的新鲜度阈值，也未配置本政策所定义的每日告警、48 小时发布门禁或自动回滚。发现发布错误时，修正并合并源文件，再按正常流程发布。
