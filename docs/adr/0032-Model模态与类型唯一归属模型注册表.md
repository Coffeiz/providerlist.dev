# ADR 0032：Model 模态与类型唯一归属模型注册表

- 状态：已接受
- 日期：2026-10-25
- 决策人：用户
- 取代：ADR 0023 中允许 Offering 保存 `api_modalities` 的边界，以及 ADR 0024 对 Provider API 模态事实的保留约定

## 背景

同一规范模型在不同 Provider Offering 中重复出现输入/输出模态，且部分模型 ID 带有 Provider 前缀，造成页面上同一模型规格不一致。Provider Offering 还曾允许用 `api_modalities` 覆盖 Model 注册表中的模态。模型主类型和模型输入/输出模态表达的是规范 Model 事实，应有唯一数据源。

## 决策

1. 全局 Model 注册表是模型主类型（`type`）和输入/输出模态（`modalities`）的唯一正式数据源。
2. Provider Offering 通过 `model_ref` 读取这些字段，不得包含 `type`、`model_type`、`input`、`output`、`input_modalities`、`output_modalities`、`modalities` 或 `api_modalities`。
3. Model 注册表已存在的模态值保持权威。若某方向缺失，可用有来源的历史 Provider API 观察补入 Model 台账；迁移证据须标为 `unverified`，并说明它来自 Provider API 观察，后续可由模型开发商规格复核。
4. 无法明确关联到规范 `Model.id` 的 Provider 模态观察不得猜测映射；不得为迁移目的创建推测身份的 Model。
5. Provider API 自身的上下文/输入输出额度等调用限制仍可记录在 `api_limits`；API 能力与模型发布能力仍是不同事实。模型限制、发布日期及模型发布能力继续只写在 Model 注册表。
6. JSON Schema 拒绝未知 Offering 字段，语义校验对禁止字段给出明确错误；`pnpm validate:data` 和 CI 测试共同阻止 Provider 数据重新加入这些模型字段。所有 Offering 模态展示只按 `model_ref` 读取 Model。

## 考虑过的方案

- **保留 Provider 模态并让前端择优展示**：会继续造成同一模型规格分叉，拒绝。
- **清空所有 Provider 模态但不迁入 Model**：会丢失已有输入/输出观察，拒绝。
- **把每个 Provider 的不同观察直接并成开发商规格并标为已核验**：Provider API 支持范围不等同开发商发布规格，拒绝；迁移值保留未核验状态。

## 后果

- 同一规范 Model 在所有 Provider 页面显示相同的模型类型和输入/输出模态。
- Provider API 的独有额度和 API 能力仍可独立描述，避免把调用面约束误当成模型规格。
- 不能关联到规范 Model 的历史模态数据不进入正式 Provider 文件；需后续通过明确身份映射与来源复核处理。
- CI 阻止 Provider Offering 再次写入模型级字段。
