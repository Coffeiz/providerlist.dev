# DATA-3 数据迁移报告

> 本报告前半部分保留 DATA-3 初次迁移时的基线统计；当前注册表和引用归一化后的状态见“2026-10-25 规范身份归一化复核”。

## 迁移结果

- Model 注册表源文件：254 个型号事实文件，按 6 个开发厂商分目录；对应 254 个来源台账，含 217 条去重 Source 和 1,391 条字段 Evidence。
- Alibaba 官方目录迁移：155 个阿里云百炼型号写入独立 Model 文件；其中有明确依据的型号类型和输入模态记在 Model 规格中。
- Provider Offering 清单：838 条。414 条已关联规范 Model；424 条因开发者身份或精确型号映射证据不足而保留 `model_ref: null`，没有通过名称相似度强行归并。
- 旧 `data/model-specs/` 记录：124 条，其中 110 条发布事实已迁入 Model，14 条带字段冲突的记录保留在冲突清单供后续核验；两个 Zhipu ASR Operation 的输入/输出已在 Provider 文档保存并转为转换器规则。旧目录和其运行时依赖已删除。冲突清单包含 17 条字段级冲突观察。
- 规范类型暂缺：65 个 Model 未记录 `type`，49 个 Model 未记录输入模态。这些空缺没有足够的开发厂商逐字段证据，不以 Provider 行为推断或填入猜测值。
- 错误身份修正：阿里云供应的 GLM-5.2 指向智谱 Model；阿里详情页对开发者身份和上下文的佐证进入对应字段证据。先前错误的可用供应观测可由 `retracted` 事件更正，不覆盖历史事件。

迁移逐条处理结果见 [DATA-3-migration-inventory.csv](DATA-3-migration-inventory.csv)，旧规格字段冲突见 [DATA-3-migration-conflicts.csv](DATA-3-migration-conflicts.csv)。

## 源目录迁移

单一 `data/models.json` 已拆分为 `data/models/<developer_id>/<model>.json`，每个事实文件只保存一个 `model`；对应的字段证据台账位于 `data/sources/models/<developer_id>/<model>.json`。按 [ADR 0029](../../adr/0029-来源证据台账与公开数据分离.md)，公开 Provider/Model JSON 不再输出 Source、Evidence 和引用字段；此形状用于首次正式发布前的 v1 契约。目录与 ID 不匹配、台账缺失、Evidence 重复、Source 冲突或空注册表会阻止构建。旧 `data/model-specs/` 及其运行时读取逻辑已清理；API Operation 输入/输出保留在 Provider 事实与适配器中。

## 2026-10-25 规范身份归一化复核

- 注册表当前包含 286 条 Model，755 条 Offering；557 条 Offering 已引用规范 Model，198 条仍为 `model_ref: null`。ID 规范按 [ADR 0030](../../adr/0030-规范Model-ID归一化与供应商调用ID分离.md) 执行：所有 Model ID 与开发商目录一致，型号 slug 为小写连字符形式，原始展示名和 Provider 调用 ID 保持不变。
- 原有点号版本写法的 15 条规范 ID 已归一为连字符 slug，并同步修正 Model 文件内容、来源台账的主题引用/JSON Pointer、正式 Offering `model_ref` 和映射证据。没有变更 `provider_model_id`、`request_model_id`、Offering ID、价格或供应状态。
- TokenHub 的 6 条 MiniMax Speech Offering 根据其官方目录调用 ID/展示名与 MiniMax 注册型号建立引用；调用 ID 仍按 TokenHub 原值保留，并补充对应字段证据。
- 对剩余 198 条未关联 Offering，以规范 ID、Model 展示名和已登记别名进行忽略标点/大小写的精确比对，没有发现可唯一匹配的已注册 Model。它们继续保持未关联，避免把第三方同名/兼容型号误并入开发商模型。
- 该次 ID 归一化校验：10 个 Provider、10 个生命周期事件文件，0 错误、0 警告；后续模态唯一归属改造的当前校验状态见下节。

## 2026-10-25 Model 模态唯一归属复核

- Provider Offering 的 478 个 `api_modalities` 字段已清除；Model 注册表缺少的 169 个输入/输出方向从已关联 Offering 的旧值补入 147 个 Model，新增 188 个模态值。
- 补录值在对应 `data/sources/models/` 台账中新增 180 条 `unverified` Evidence，明确记录旧 Provider API 观察来源；不覆盖原 Model 中已有的方向值。
- 107 条含旧模态但 `model_ref` 为空或目标 Model 不存在的 Offering 未作猜测性关联，模态副本已从正式 Provider 文件删除。此类记录仍需先完成人工身份映射，才能进入规范 Model；Provider 页面对未关联型号不显示共享 Model 模态。
- 当前 Provider 文件含 755 个 Offering，规范 Model 共 353 个，其中 325 个具有至少一个方向的模态规格；Provider Offering 含 `type`、`model_type`、输入/输出模态、Model 限制、能力或发布日期字段会被 Schema/语义校验拒绝。
- `data_version` 构建值：`20261025.c5c3c1`。详情见 [ADR 0032](../../adr/0032-Model模态与类型唯一归属模型注册表.md)。

## 验收

- `pnpm validate:data`：10 个 Provider、10 个事件文件，0 错误、13 个 `3d` 未知类型警告；这些类型位于 Model 注册表，不是 Provider Offering 字段。
- `pnpm typecheck`：通过。
- `pnpm build:catalog`：通过，公开 Model 注册表 353 个型号，`data_version=20261025.c5c3c1`。
- `pnpm build:frontend`、Provider Model 字段边界 Schema/语义测试和 `git diff --check`：通过。
- 全仓 `pnpm test` 仍有与本次改造无关的失败：Pipeline build tests 报 Provider 来源台账缺失；前端 i18n tests 报英文翻译缺失/死词条和 `GitHub` 未翻译。完整测试通过前不得将该迁移报告标记为全仓验收完成。
