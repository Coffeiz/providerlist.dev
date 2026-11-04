本 PR 由 ProviderList Sync 自动生成，是所有有变化 Provider 的聚合评审入口。IR 采集转换成功且通过 Schema / 语义校验的 Provider 字段建议会随 PR 提交。新发现的模型只以 ID-only 候选记录随 PR 合并；正式 Model 规格仍由维护者手动补录。

## 本次运行概览

{{run_overview}}
{{run_failures}}
{{run_stale}}

## Provider 差异报告

{{provider_viewer_links}}

每个 Provider 的 viewer 独立列出相对来源基线实际新增、修改和待核实字段，并包含候选指纹、来源 URL、内容哈希与观察时间。无变化字段不重复展示，不同 Provider 的字段差异不混合成一个表格。

## IR 正式字段投影

{{ir_projection_summary}}

投影产生的 `data/providers/` 差异是待审提案；采集来源 URL 与最近采集时间写入 `data/collector/providers.json`，字段证据保留在候选和评审报告中。只有 PR 获批并合并后，Provider 事实才进入正式目录。新发现模型的 ID-only 候选写入 `data/candidates/<provider>/model-ids.json`，不包含模型规格，也不会自动创建规范 Model。`needs_review` 候选的可校验投影也会展示在 PR 中，但需当前 head 的人工批准才可合并；无效或无法生成文档的投影会跳过。

完整候选 JSON 与原始响应快照作为 Workflow Artifact 保留 90 天，不提交到 PR 分支。完整运行状态（包括无变化 Provider）见 Workflow Summary。

## 校验与状态

{{validation_summary}}

`needs_review` 和 `invalid_data` 会在上表和对应 Provider viewer 中标注，并由 CI 评审门禁阻止合并。采集失败只进入运行摘要与本概览，不会伪装为无变化或供应清空。

## 人工审核

- [ ] 核对 Provider 的市场、价格、API/Route、能力或 Plan 变化及其来源；核对 ID-only 新模型候选，不要求自动生成 Model 规格
- [ ] 检查跨市场事实没有混并；金额保留原币种和条件
- [ ] 对来源列表缺席保持待核实；单次缺席不作为退役依据
- [ ] 核对 Provider 字段差异、来源链接和市场范围
- [ ] 处理与人工维护事实的冲突，再批准合并

此 PR 不触发正式 Provider 数据发布；合并后仍需正常构建 / 发布流程。
