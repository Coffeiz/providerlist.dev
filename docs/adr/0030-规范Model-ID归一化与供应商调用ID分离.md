# ADR 0030：规范 Model ID 归一化与供应商调用 ID 分离

- 状态：已接受；Model `aliases` 字段决策由 [ADR 0051](0051-Canonical-Models-Do-Not-Store-Aliases.md) 取代
- 日期：2026-10-25
- 决策人：用户
- 关联：[ADR 0023](0023-模型发布事实与Provider供应事实分离.md)、[ADR 0028](0028-Model源数据按开发商与型号拆分.md)、[PRD-DATA-3](../_archived/prds/【已完成】PRD-DATA-3-规范模型注册表与Provider供应映射_cn.md)

## 背景

同一开发商的一个模型可能通过多个 Provider 供应，各 Provider 使用的调用 ID 不一定相同。例如底层模型是 Kimi K3，某个供应商使用 `kimi-k3`，另一个供应商使用 `kimi/kimi-k3`。若把这些供应 ID 当成全局模型身份，会造成重复 Model；若直接把供应 ID 改成统一写法，又会改变真实 API 调用参数。

当前 Model ID 还存在版本点号写法与文件 slug 不一致的问题，例如源文件名是 `kimi-k2-5.json`，Model ID 却是 `moonshotai/kimi-k2.5`。需要固定注册表身份格式，并保留 Provider 的原始调用标识。

## 决策

1. 全局规范 `Model.id` 固定为 `<developer_id>/<model_slug>`。
2. `model_slug` 只允许小写 ASCII 字母、数字和单个连字符分隔段；点号、下划线等分隔符归一成连字符，连续分隔符折叠，首尾分隔符移除。例如 `kimi-k2.5` → `moonshotai/kimi-k2-5`，`GLM-5.2-Fast-Preview` → `zhipu/glm-5-2-fast-preview`。
3. `Model.name` 保留官方发布资料中的展示名和标点；文件名使用规范 slug。归一化只改规范身份，不改开发商原始型号名称或 Provider API 调用 ID。
4. 迁移规范 ID 时必须同步更新 `data/models/` 内容、`data/sources/models/` 的 `subject_ref` 与 Model JSON Pointer、所有 Offering 的 `model_ref`，以及 `data/sources/providers/` 中对规范引用的证据。`provider_model_id`、`request_model_id`、Offering ID、价格与供应事实保持原样。
5. 多个不同 Provider 调用 ID 只有在证据确认是同一开发商的同一发布型号后，才能引用同一个 `model_ref`。仅仅尾段相同、格式归一后相同或名称相似都不构成归并依据；冲突时人工裁决，无法确认时保留 `model_ref: null`。
6. 规范 ID 改名发生在首次发布前，不为旧规范 ID 增加别名兼容；`aliases` 仅记录真实的模型别名，不记录内部 ID 迁移值或 Provider 专属调用 ID。
7. Model JSON Schema 和语义校验共同拒绝不符合规范格式或开发商前缀不匹配的 Model ID。

## 备选方案

- **继续用官方型号原文直接作为 Model ID 后缀：** 不采纳。展示名称已经单独存储；ID 标点差异会造成文件名、引用和工具链不一致。
- **把 Provider 的调用 ID 统一改为规范 Model ID：** 不采纳。`provider_model_id` 和 Route 请求中的 `request_model_id` 必须保留供应方实际接受的值。
- **按去前缀或相似度自动关联：** 不采纳。聚合平台也可能托管蒸馏版、别名或同名的不同模型，错误合并会污染共享规格。

## 后果

- Model 文件路径和 `Model.id` 可由同一规范 slug 推导；开发商名和正式展示名仍保留原文。
- 同一模型可被多个 Offering 共用一份规格；Provider 的价格、状态和调用 ID 仍各自独立。
- ID 归一化是身份键格式，不改变发布规格，不自动替未知 Offering 做身份裁定。
- 对点号等分隔符导致的旧规范 ID，迁移必须原子更新来源台账和全部正式引用，避免悬空 `model_ref`。
