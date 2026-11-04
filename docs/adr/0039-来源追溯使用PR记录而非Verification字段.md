# 来源追溯使用 PR 记录而非结构化 Verification 字段

- 状态：已接受
- 日期：2026-10-31
- 取代：ADR-0007 中的独立核验层设计；ADR-0024 中要求逐字段保存 `verified_at` 的部分；PRD-DATA-3 中要求 `verification`、核验人和核验时间作为数据字段的部分

## 背景

`Evidence.verification` 把核验状态、方法、时间和操作者写入每条字段证据，`RateCard.verification_ref` 再引用核验记录。`OfficialIntegration.independent_verification` 也试图编码字段独立核验等级。当前这些字段不进入公开 JSON 的 Provider / Model 数据、不在站点展示，也不参与发布门禁。社区贡献者通过 GitHub PR 提交数据时，逐条填写这些内部分类会增加贡献成本；`checker` 还容易把工具名称与责任主体混为一谈。

仓库仍需要保留事实来源，且“来源身份不等于内容正确”。来源链接用于支持审查；来源链接本身不证明真实账号下的 API 调用成功。

## 决策

1. 从 Schema、TypeScript 类型、来源台账和流水线中删除 `Verification`、`Evidence.verification`、`RateCard.verification_ref`、`OfficialIntegration.independent_verification` 及其相关状态、方法和操作者字段。
2. 保留 `Source`、`Evidence` 和字段来源绑定，用于记录事实来自哪个 URL、Evidence 对应哪个字段。
3. 社区 Provider / Model 变更通过 GitHub PR 提交。PR 模板要求列出改动范围与来源 URL；审核者、Review 时间和合并时间由 GitHub 记录。
4. 贡献者无需提交 `state`、`method`、`checker` 或 `verified_at`。若贡献者声称 API 已实测，则在 PR 描述中附请求 / 响应依据与测试环境。
5. 社区 GitHub PR 与官方 Provider Feed 保持独立。PR 来源链接不建立官方授权，也不会触发对任意外部 GitHub 仓库的自动拉取。

## 考虑过的方案

- 保留内部 `Verification` 并要求贡献者填写：拒绝。当前没有消费者或发布门禁使用它，填写成本却落在每个贡献者身上。
- 只保留一个 `verified: boolean`：拒绝。布尔值抹去核验方式差异，还容易造成超出实际证据的信任暗示。
- 将来源链接与证据一起删除：拒绝。来源可追溯仍是数据审查与维护的基础。

## 后果

- Provider 和 Model 数据不再承载逐字段的核验工作流元数据；GitHub PR 成为人工审查审计记录。
- `Source` / `Evidence` 仍需维护，以保留来源和字段的长期关联。
- 已有内部台账中的 Verification 记录被清理。公开数据契约的业务字段不变，因为这些信息此前不会编译到 `/v1/**`。
- 未来若需要站点展示实时 API 可用性，必须设计独立的探测记录和时间语义，不得恢复一个含混的通用 `Verification` 字段。

