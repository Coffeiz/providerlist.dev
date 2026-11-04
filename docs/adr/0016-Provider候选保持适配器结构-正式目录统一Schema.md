# ADR 0016：Provider 候选保持适配器结构，正式目录统一 Schema

- 状态：已接受
- 日期：2026-10-24

## 背景

不同 Provider 的官方来源表达方式差异很大：模型目录、价格表、API 文档和市场拆分各有领域语义。
若在采集阶段强制转成统一的通用事实列表，适配器需要丢弃或扭曲来源结构，之后也难以复核解析和价格映射。
另一方面，网站、目录构建器和第三方消费者需要稳定一致的 ProviderList 数据契约。

## 决策

- Provider 适配器自行定义中间 facts、来源解析、语义差异和评审呈现，不要求不同 Provider 的候选业务结构相同。
- 通用采集层只提供安全抓取、不可变来源快照和最小候选 envelope 元信息：Provider、候选类型、观察时间、前后语义指纹、来源快照引用，以及由适配器定义的 `previous` / `current` facts。
- 每个适配器负责将自己的候选转换为 ProviderList 正式 `ProviderDocument` 与需要的 `LifecycleEventDocument`；转换结果经正式 Schema 和语义校验后，作为 PR 中可审阅的正式数据。
- 自动抓取、候选生成、目录转换、PR 审阅和正式发布是分开的步骤。转换器不自动创建 PR、提交、接受候选或发布。
- 转换器不得静默覆盖人工核实值。当前 MiniMax 转换器采用整份重建；在人工覆盖层落地前，正式文件中的手工值必须在执行重建前迁移或单独处理。

## 备选方案

- 所有 Provider 候选共用统一事实 Schema：拒绝。会迫使来源解析结果适配通用字段，模糊各 Provider 的原始语义，并产生难以解释的空字段或丢失信息。
- 每个采集器直接输出正式 ProviderList Schema：拒绝。采集事实抽取与正式目录裁决耦合，会让来源变化直接成为发布数据，并提高适配器实现成本。
- 仅共用最小追溯元信息，最终由适配器转换：采用。保留采集器独立性，同时让正式目录拥有单一、可校验的契约。

## 后果

- 新 Provider 可以按来源选择适合的候选结构和差异呈现方式。
- 通用候选结构不是公开数据 Schema；正式目录仍只接受统一 ProviderList Schema。
- 适配器必须维护候选解析到正式字段的映射和校验，来源 facts 不会自动变成可信供应事实。
- 当前 MiniMax 整份重建不能保证保留未来手工编辑值；需在人工覆盖层落地前明确提示并审阅源文件差异。
- 自动创建 PR、定时抓取和独立人工覆盖层不由本 ADR 一并授权或实现。

## 实施

`pipeline/src/ingest/types.ts` 提供泛型 `CandidateEnvelope<TFacts>`；MiniMax 在适配器内定义自己的市场事实结构，
并由 `adapters/minimax/merge.ts` 转换为正式目录文件。采集和转换命令、校验边界及当前限制记录于
[`docs/guides/ingestion_cn.md`](../guides/ingestion_cn.md) 和 [`pipeline/src/ingest/README.md`](../../pipeline/src/ingest/README.md)。
