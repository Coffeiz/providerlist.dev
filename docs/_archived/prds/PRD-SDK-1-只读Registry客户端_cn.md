# PRD-SDK-1 · 只读 Registry 客户端

> 状态：⬜ 规划中（M2+） · 对应设计文档 v1.2 §7B
> 依赖：稳定的 `/v1` JSON 契约

## 1. 背景

站点的价值最终要体现在**别人能用它做决策**上。
开发者会想把 ProviderList 的数据接进自己的 Agent 或网关。

但让每个消费者都自己解析 JSON、自己处理版本、
自己写缓存和降级逻辑，是重复劳动。

**但**——SDK 的第一版不能做成「推理代理」。
一旦 SDK 变成代理，它就要处理 API Key、签名、重试、
流式、异步任务轮询……那是完全不同的工程量，
而且会让「数据注册中心」这个核心定位失焦。

## 2. 目标

1. **只读** Registry 客户端：下载、缓存、筛选 Provider / Offering / Operation。
2. 与公开 Schema **严格对齐**——不能有自己的第二套模型。
3. 缓存带 ETag / 文件 SHA 校验；网络失败时**回退到最后可信版本**并暴露数据时间。
4. 用 Schema 校验请求参数与媒体限制（复用 `packages/shared` 的约束逻辑）。
5. 用户的 API Key **只**出现在调用者本地进程，不传到 ProviderList。

## 3. 非目标

- **不做**推理代理。
- **不做**密钥托管。
- **不做**自动路由。
- **不假定**任意 Provider 都支持 `transcribe()` / `web_search()` 等统一方法——
  实际 Route / Operation 缺失时**报明确错误**。
- **不**通过远程 JSON 执行 Python/JS、任意 JSONPath 表达式或 Shell 命令。

## 4. 分层

| 层 | 职责 | 阶段 |
|---|---|---|
| `schema` | 公共 JSON Schema、类型、Operation/媒体/条件规则解析 | M0–M1 ✅ |
| `registry-client` | 下载版本固定 JSON、缓存、筛选 | M2 |
| `validation` | 用 Schema 校验请求参数与媒体限制 | M2–M3 |
| `transport` | HTTP / Multipart / SSE / WebSocket / 任务轮询 | M5 |
| `adapters` | 官方协议映射 / 特殊签名 / 响应转义 | M5+ |
| `provider-authored module` | 厂商自有包的清单与官方链接 | 先登记，执行级集成后置 |

## 5. 模块结构

```
sdk-python/providerlist/
├── registry.py             # manifest、提供商与供应数据查询
├── schema.py               # 数据 Schema 验证和兼容
├── capability.py           # 按 Operation / 服务能力发现
├── media.py                # 媒体输入输出限制、对象描述（不编码视频）
├── pricing.py              # 只读价格规则 / 原币种展示
├── operations/             # 可选执行模块（后置）
├── transport/              # http、stream、multipart、async_job
└── adapters/               # 经代码审计的特殊 Provider 适配

sdk-node/src/
├── registry.ts
├── schema.ts
├── capability.ts
├── media.ts
├── pricing.ts
├── operations/
├── transport/
└── adapters/
```

**关键命名**：`media.py` 只处理媒体约束/类型/产物，
**不是**所有媒体模型的「万能请求入口」；
`video.py`、`asr.py` 等以 Operation 的标准化任务为边界。

独立 Web Search 与 Chat Server Tool 在不同 API 上运行，
**不应**伪装统一的 `web_search.search()` 必然可用。

## 6. 验收标准

- [ ] Python 与 Node 对**同一份 JSON** 的筛选与边界行为**一致**。
- [ ] 版本缓存：ETag / SHA 校验；失败回退到最后可信版本并暴露数据时间。
- [ ] 离线可读：完全断网时仍能用缓存工作。
- [ ] 只读 SDK 与公开 Schema **严格对齐**（契约测试）。
- [ ] 约束校验：`1080p + 5s` 在 SDK 侧**同样被拒绝**。
- [ ] Route / Operation 缺失时**报明确错误**，不静默降级。
- [ ] SDK **不发送**用户 API Key 到 ProviderList。
- [ ] 不执行远程 JSON 中的任何代码。

## 7. 影响的契约

不改变公开 JSON 契约。
但**必须**与 `packages/schema` 保持一致——
建议把契约测试放进 CI，两边跑同一份夹具。

## 8. 风险

| 风险 | 缓解 |
|---|---|
| SDK 变成第二个数据源 | 只读、只消费 `/v1`，不自己维护数据 |
| SDK 变成推理代理 | 明确分层，执行层独立版本化与审计 |
| 官方 Feed 注入可执行代码 | Feed 只允许**声明式**元数据；可执行适配器独立 PR / 审计 / 固定版本 |
| Python 与 Node 行为漂移 | 共用 Schema + 共享契约测试夹具 |
| 轮询无节制打爆 Provider | 退避、可取消、最大次数/时长限制 |
