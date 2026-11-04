# PRD-DATA-1 · 数据契约与九类模型类型基线

> 状态：✅ 已实施 · 对应设计文档 v1.2 §4.14 / §4.15
> 实施范围：`packages/schema/`、`packages/shared/src/capabilities/operations.ts`

## 1. 背景

ProviderList 要回答的核心问题是「**这个 Provider 现在向这个市场提供什么，
怎么调用，怎么收费，凭什么相信**」。

初版最容易犯的错是把「模型类型」当成万能分类：
看到 `chat` 就以为支持工具调用，看到 `video` 就以为能文生图。
结果是**把推断当成了事实**——这会直接误导接入方。

同时，国内 Provider 的实际情况比「模型列表」复杂得多：
同一家厂商的国内 / 国际服务线用不同币种、不同 Base URL、不同鉴权；
有的厂商还提供不依赖任何模型的独立服务（网页搜索、文件管理、批处理）。

## 2. 目标

1. 建立**公开数据契约**：Provider → Service → Endpoint；Model → Offering →
   Operation → Route；Service → Capability。
2. 模型类型基线确定为 **Models.dev V2 的 9 类**，保持前向兼容。
3. **Capability 与 Operation 解耦**——独立服务能力不绑定模型，不计入模型供应数。
4. 未知模型类型**保留原值**，网站归入「其他」，**绝不**静默归并为 `chat`。

## 3. 非目标

- 不做全量模型百科——规范 Model 仅收录与 Provider 当前/历史 Offering 有明确身份关系且有发布证据的型号，范围见 [PRD-DATA-3](【已完成】PRD-DATA-3-规范模型注册表与Provider供应映射_cn.md)。
- 不做九套顶层 Schema——不做「按 Operation 类型分文件」的过度设计。
- 不实现调用能力——只描述，不执行。

## 4. 验收标准

- [x] `Provider` / `Service` / `Endpoint` / `Offering` / `Operation` /
      `ServiceCapability` / `Route` / `MediaSpec` / `ParameterSpec` /
      `ConstraintRule` / `ExecutionSpec` / `RateCard` / `Plan` / `Evidence` /
      `Lifecycle` 全部有稳定 TS 类型。
- [x] 9 类模型类型在 Schema、JSON、搜索、GUI、测试中保持一致。
- [x] 未知类型可保留但不被误归为 `chat`（校验器报 warning，保留原值）。
- [x] 独立 Web Search Capability 在夹具中存在，且不计入 `active_offering_count`。
- [x] `capability_id` 与 `offering_id` 命名空间独立。
- [x] Offering 显式声明 `operations[]`；操作不由 `model_type` 自动臆测。
- [x] 统计口径区分 `canonical_model_count` / `active_offering_count` /
      `service_capability_count`。

## 5. 影响的契约

**这是契约的基线本身**——所有后续数据都基于它。

后续的破坏性变更必须走 `/v2/`。

## 6. 风险

| 风险 | 缓解 |
|---|---|
| 上游类型体系变化快 | 开放枚举 + 固定 upstream revision + 兼容 adapter |
| 未知类型导致网站崩溃 | 降级展示为「其他」，原始 ID 保留 |
| 概念混淆（Type vs Operation vs Capability） | 三者独立建模 + 独立统计口径 + 文档明确边界 |
| 音乐类模型无处安放 | 不强行塞进 TTS；可暂归 `speech` 并在 Operation 标明 |

## 7. 验证

```bash
pnpm --filter @providerlist/generator validate
```

当前结果：2 个 Provider，0 个错误。
