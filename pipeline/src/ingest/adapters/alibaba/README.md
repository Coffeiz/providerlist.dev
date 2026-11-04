# 阿里云百炼采集器

运行 `pnpm --filter @providerlist/pipeline ingest:alibaba`，从本目录登记的官方公开来源生成候选。

中国区与国际站只从官方模型目录和价格来源采集模型 ID、官方名称/状态及价格。采集器不请求单模型详情页，也不把模型类型、模态、上下文、限制、能力或逐模型 API 细节写入候选；这些 Model 规格由维护者手动维护在 `data/models/`。目录分类页仍用于确认市场供应模型列表，价格表保留原币种、计量项、地域、阈值和促销条件。单独的 API/协议接入、独立 Service Capability、Coding Plan 与 Token Plan 文档仍按各自产品范围采集，不关联逐模型支持矩阵。官方模型列表 API 文档只说明账号凭证与 Workspace ID 前提，不会调用该 API。候选不覆盖正式 Provider 数据。

API IR 按来源证据映射 CN 与 GLOBAL 的 Coding Plan Pro 标准月费，不从 Coding Plan 页面抽取首月促销价。Token Plan 两市场的个人档、团队席位和共享用量包现映射为带原币月价、优惠价及明确 Credits 数量的 PlanFact；未归一的购买资格、促销期限、额度适用限制和席位变更规则仍进入 Review，相关 coverage 保持 `partial`。计划候选映射不代表套餐域已完整迁移，也不表示账号购买资格或套餐可用性。

个人版各档套餐 `description` 从已登记的官方 Token Plan 控制台前端资源中按档位分别提取中英文原文，CN 写中文、GLOBAL 写英文；采集器不翻译、摘要、拼接或手写描述。版本化资源中的中英文案键或页面结构变化时，解析失败会中止本轮采集，不会把错误文本写入候选。官网文案变化进入候选字段差异供审阅，不自动覆盖正式 Provider 数据。团队计划与其它 Provider 计划仍只在其已登记来源含有可定位原文时生成 `description`。

## IR 投影预览

运行 `pnpm ingest:alibaba:merge` 对最新 IR 候选生成只读字段预览；批量入口为 `pnpm ingest:global-merges`。CN / GLOBAL 目录、各币种价格及部署地域、部署范围和输入长度条件分别映射到 IR。账号可用性和 API 实测仍未知；coverage 不足的字段保留 Review。该命令不会写正式 Provider 数据。
