# 文档导航

ProviderList 将当前系统文档与历史决策、已归档项目记录分开维护。项目概览见根目录 [`README.md`](../README.md)（英文默认版）与 [`README_cn.md`](../README_cn.md)（中文版）。

## 系统概览

- [架构](architecture_cn.md)：系统边界、数据流、构建阶段与部署方式。
- [公开 API](api/api_cn.md)：静态资源、ProviderList 订阅端点与 JSON Builder。

## 数据契约与政策

- [API Schema](api/schema_cn.md)：公开 JSON 响应结构。
- [源数据结构](data/schema_cn.md)：仓库 TOML 布局和编译规则。
- [模型类型](data/model-types_cn.md)：主模型类别与输入输出模态。
- [独立服务能力](data/media-operations_cn.md)：能力参数、媒体约束与异步任务。
- [价格](data/pricing_cn.md)：计费指标、单位、条件与十进制精度。
- [数据政策](data/data-policy_cn.md)：供应生命周期、退役与目录统计。
- [信任政策与 Provider Logo](data/trust-policy_cn.md)：来源身份、授权、公开信任标记与 Logo 使用规则。
- [Provider 分类](data/provider-classes_cn.md)：采集资格与 Provider 分组。

## Feed 规范

- [官方 Provider Feed](feeds/provider-feed-spec_cn.md)：发现与提交边界；Feed 运行时接入仍为草案。

## 指南

- [贡献指南](guides/contributing_cn.md)：仓库贡献流程。
- [采集指南](guides/ingestion_cn.md)：采集器范围、候选审核与来源管理。
- [运维](guides/operations_cn.md)：CI、Sync、发布与回滚。
- [许可](development/licenses_cn.md)：代码与第三方数据许可。

## 决策历史

[架构决策记录（ADR）](adr/README.md)解释重要设计选择的原因。ADR 是历史记录；决策变更应新增 ADR，而不是改写旧记录。

## 已归档项目记录

历史 PRD 和调查日志归档于 [`_archived/`](_archived/README_cn.md)。它们描述过去的目标与工作；当前行为以当前文档和实现为准。

## 语言版本

当前文档默认使用英文；已有中文版使用 `_cn` 后缀。归档的中文 PRD 和调查日志也使用 `_cn` 后缀。
