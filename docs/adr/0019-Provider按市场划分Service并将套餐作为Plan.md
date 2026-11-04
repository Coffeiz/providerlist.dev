# ADR 0019：Provider 按市场划分 Service 并将套餐作为 Plan

- 状态：已接受；独立能力归属由 ADR 0045 更新
- 日期：2026-10-24
- 取代：[ADR 0018](0018-按量计费统一使用usage标识.md)

## 背景

ProviderList 的首要用途是让开发者快速找到模型、接入地址与调用参数。将按量计费和订阅套餐拆成不同 Service，会把同一市场的模型目录拆散，也让套餐误看成另一套 API 产品线。独立服务能力同样是 Provider 提供的能力，不应因是否需要订阅而变成另一个 Service。

## 决策

- Service 按账号市场及实际 API 接入面划分；不同市场使用稳定短 ID，例如 `cn` 与 `global`。
- 按量价格继续留在 Offering RateCard；套餐名称、周期、费用及官方用量倍率放在顶层 `plans[]`，Plan 通过 `service_ref` 关联市场 Service。
- 独立服务能力统一存放在 `provider.capabilities[]`。能力可声明 `account_market` 与 `required_plan_ids`；后者列出可满足该能力要求的套餐。
- Provider 能力详情继续保留独立 Operation、输入输出、Route 与官方文档依据；能力不绑定 Canonical Model。
- 既有 Offering / RateCard 等稳定 ID 暂不跟随 Service ID 改名，减少外部引用变化；仅迁移它们的 Service 外键和证据路径。
- 旧 Service 查询参数 `cn-usage`、`global-usage`、`cn-m-plan`、`global-m-plan` 映射到相应市场页，避免已有分享链接失效。

## 后果

- 用户在市场页可同时查看该市场的 API 接入、模型、按量价格、套餐和独立能力。
- 套餐倍率和价格按市场分别记录，不得跨市场推断。
- Service-level `capabilities[]` 为历史兼容字段，新数据统一写在 Provider 上。
- 自动采集仍只产生可评审候选。人工更改检测与 PR 提醒继续生效，不能静默覆盖正式目录。
