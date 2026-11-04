# 源数据结构

本文说明仓库中 Provider 和 Model 的 TOML 文件如何组织，以及编译时补充哪些信息。公开 JSON 结构见[API Schema](../api/schema_cn.md)；价格规则见[`pricing_cn.md`](pricing_cn.md)。

## 文件布局

```text
data/
├── providers/<provider_id>/
│   ├── provider.toml
│   └── <market_id>/
│       ├── service.toml
│       ├── offerings/<encoded_id>.toml
│       └── plans.toml
└── models/<developer_id>/
    ├── developer.toml
    └── <model_slug>.toml
```

- `provider.toml` 保存 Provider 信息；`service.toml` 保存该市场的 API、链接和能力。
- `offerings/` 每个文件保存一条模型供应记录。文件名用 `·` 代替调用 ID 中的 `/`，文件里的 `id` 保留原值。
- `plans.toml` 保存该市场的套餐。
- Model 文件保存模型规格；同目录的 `developer.toml` 保存开发商信息。

## 编译规则

- 市场 ID、Model ID 和 `developer_id` 从目录或文件名读取；加载器会补齐关联字段和市场名称。
- 未知的可选值直接省略。TOML 不支持 `null`；`model_ref = "unknown"` 会在内部编译为 `null`，用于模型关联，不出现在公开 Provider 和 Offering JSON 中。
- 公开 Provider JSON 保留 `provider` / `services` / `plans` 层级及 TOML 字段名；Service、Offering、Plan 的路径关联字段不会公开，文档根部仅增加发布元数据。来源溯源信息和生成的集成状态不会公开。

## 数据边界

- Provider 记录各市场的供应、接入和价格；Model 记录开发商公布的规格。Offering 的 `id` 是 Provider 实际接受的调用 ID。
- Service Capability 的请求和响应结构统一用 `input`、`output`，与 TOML 和公开 JSON 同名。两个字段分别是 `CapabilityInput`、`CapabilityOutput` 数组，每项用 `kind` 表示类型。
- 未知 `model_type` 按原值保留。Provider 能力记录在市场 Service；推理、工具调用和结构化输出等模型能力记录在 Model。
- 未知值不代表 `false` 或 `0`；金额用十进制字符串，`"0"` 只表示确认免费。
- Service 的 `supply_status` 和 Offering 的 `status` 分别记录市场和模型供应状态。单次抓取失败或目录缺项不能作为退役依据。
- 公开 Model 注册表保留模型自身能力；Offering 列表的 pricing 是价格组数组。
- 手动数据在 PR 中提供来源链接；采集来源和时间由流程维护在 `data/collector/providers.json`。

字段级定义以 [`packages/schema/schema/`](../../packages/schema/schema/) 的 JSON Schema、[`types.ts`](../../packages/schema/src/types.ts) 和 [`validation.ts`](../../packages/schema/src/validation.ts) 为准。
