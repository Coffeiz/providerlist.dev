# ADR 0018：按量计费统一使用 usage 标识

- 状态：已接受
- 日期：2026-10-24
- 取代：[ADR 0017](0017-MiniMax-Service-ID使用usage命名.md)

## 背景

ADR 0017 将 MiniMax Service ID 改为 `cn-usage` 与 `global-usage`，但仍保留 `payg` 前缀的 Offering ID，也只规定了 MiniMax。这样同一条按量计费产品线的标识仍不一致，未来其他 Provider 也无法直接沿用统一规则。

## 决策

- `usage` 是全目录按量计费标识的标准词根。新 Provider 的按量 Service 和其从属稳定 ID 使用 `usage`，不得引入 `payg` 命名。
- MiniMax Service ID、Offering ID、RateCard ID、生命周期事件 ID、证据 ID 及证据字段路径统一从旧前缀迁移到 `cn-usage` / `global-usage`。
- 采集器由 Service ID 生成 Offering ID，避免 Service 与 Offering 前缀分叉。
- 不保留旧 Service URL 参数兼容别名；所有页面链接和目录示例只使用新的 `usage` 标识。
- 本规则约束按量计费标识；订阅、预付费等其他计费方式按其自身语义命名。

## 备选方案

- 仅重命名 Service ID，保留其他旧前缀：拒绝。会继续产生同一业务线不同标识词根并列的情况。
- 仅在 MiniMax 使用 `usage`：拒绝。新 Provider 仍会各自选择缩写，目录无法形成一致规则。
- 保留旧查询参数别名：拒绝。用户要求不再保留旧命名，且旧别名会继续出现在站点逻辑中。

## 后果

- 所有按量计费 Service、模型 Offering 和关联证据都使用 `usage` 标识。
- 旧 `payg` URL 不再选择对应 Service；分享链接应更新为新的 Service ID。
- 目录中的稳定 ID 本次统一迁移，已有外部引用需要同步更新。
- 后续新增 Provider 时按此约定命名，并保持人工数据和自动采集结果一致。
