# ProviderList 官方 Feed 规范

> 版本：Draft `0.1.0`（应用提案，非 IETF 标准）
> 状态：Feed 运行时尚未实现；目前仅支持离线生成发现地址候选。

本文说明 Provider 提交官方数据的 Feed 格式和接入流程。Feed 地址或正文都不能证明域名归属及提交权限。

## 1. 发现与接入

`pnpm ingest:feed-discovery` 会从各市场 Service 读取 first-party HTTPS 网站，并据此生成 Feed 地址候选和现有 Service、Offering、Capability kind、Plan 清单。它只生成候选，不访问候选地址，也不验证域名或授权。

候选地址按官网的精确 origin 生成。例如，官网 `https://www.example.com/docs/` 对应 `https://www.example.com/.well-known/providerlist.json`。系统不会去掉 `www`、猜测根域或扩展市场范围。

| 方式 | 说明 | 状态 |
|---|---|---|
| 定期 Pull | 从已审核的 HTTPS 地址读取 Feed | 提议 |
| Refresh | Provider 请求重新读取已登记的 Feed | 提议 |
| Push | Provider 使用限权凭证提交 Feed | 可选提议 |
| 社区 GitHub PR | 贡献者提交 Provider 或 Model 数据及来源链接 | 当前使用；流程见[贡献指南](../guides/contributing_cn.md) |

Provider 可以逐个 Service 接入 Feed。生成地址候选不代表 Feed 已存在、域名已验证或权限已授予。ProviderList 的接入记录决定 Feed 可以更新哪些 Service 和字段；Feed 正文不能自行声明权限。

## 2. Feed 数据

Feed 按 Provider、Service、Offering 和 Plan 组织，使用与正式数据相同的 ID。ProviderList 的接入记录控制可提交的 Service 和字段，因此 Feed 不需要 `publisher`、`scope` 或 `mode`。省略记录不会删除或退役已有数据。以下是虚构示例。

```json
{
  "feed_schema_version": "0.1.0",
  "provider": {
    "id": "example-ai",
    "name": "Example AI",
    "aliases": [],
    "kind": "first_party"
  },
  "services": [
    {
      "id": "cn",
      "provider_id": "example-ai",
      "website": "https://cn.example.com",
      "docs": {
        "api": "https://cn.example.com/docs/api"
      },
      "endpoints": [
        {
          "id": "cn-openai-compatible",
          "base_url": "https://api.example.com/v1",
          "api_region": "中国大陆",
          "routes": [
            {
              "protocol": "chat-completions",
              "method": "POST",
              "path": "/chat/completions"
            }
          ]
        }
      ],
      "offerings": [
        {
          "id": "example-chat",
          "model_ref": "example-ai/example-chat",
          "status": "active",
          "pricing": [
            {
              "currency": "CNY",
              "rates": [
                { "metric": "input", "unit": "per_1m_tokens", "value": "1.00" },
                { "metric": "input", "context": ">=500000", "unit": "per_1m_tokens", "value": "2.00" },
                { "metric": "output", "unit": "per_1m_tokens", "value": "4.00" },
                { "metric": "cache_write", "ttl": "5min", "unit": "per_1m_tokens", "value": "3.75" }
              ],
              "deployment": "国际",
              "region": "新加坡"
            }
          ]
        }
      ],
      "capabilities": [
        {
          "kind": "web_search"
        }
      ]
    }
  ],
  "plans": [
    {
      "id": "cn-pro-plan",
      "service_ref": "cn",
      "name": "Pro",
      "currency": "CNY",
      "billing_options": [
        {
          "billing_period": "month",
          "price": "200.00"
        }
      ]
    }
  ],
  "source_links": ["https://registry.example.com/pricing"]
}
```

Offering 和独立 Capability 价格均使用公开 API 的实体级 `pricing` 结构；价格组可分别用 `deployment` 表示部署范围、`region` 表示具体部署区域，其他条件放在 `conditions`。套餐价格放在独立的 `plans` 中，不混入模型按量价格。转换器保留价格在所属实体上的位置，不生成独立费率卡或价格引用。实体使用稳定 `id`；`pricing` 组和费率按内容表达，不要求额外 ID。

Feed 把仓库中分开的文件合并为一个提交文档，字段仍对应同一组领域对象：

| Feed 内容 | 仓库文件 |
|---|---|
| `provider` | `data/providers/<provider_id>/provider.toml` |
| `services[]` | `data/providers/<provider_id>/<market_id>/service.toml` |
| `services[].offerings[]` | `offerings/<转义后的 id>.toml`，一个文件一条 Offering；文件名中的 `/` 写作 `·` |
| `plans[]` | 对应市场目录的 `plans.toml` |
| `services[].offerings[].pricing[]` | 保存在对应 Offering 的 `pricing` |

### 字段约定

#### 数据内容

- **版本号：** Feed 使用自己的 `feed_schema_version`，与公开 `/v1` Schema 版本分开管理。Feed 格式变化时，由对应版本的转换器处理。
- **Provider 身份与权限：** `provider.id` 用来找到对应的 Provider，不是登录凭证或授权证明。Provider 能更新哪些 Service 和字段，以 ProviderList 保存的权限记录为准。
- **局部更新：** Feed 只更新它明确提交的对象和字段。Feed 中缺少某条记录或字段时，保留现有值；这不代表删除或退役。
- **市场：** Service ID 使用 `cn`、`global`、`other` 或 `unknown`，由 ProviderList 映射为市场代码。Feed 不提交重复的 `account_market`。
- **对象归属：** Provider、Service、Endpoint、Offering 和 Plan 使用稳定 ID；Capability 以 `kind` 标识，同一市场每种 kind 只提交一条。Route 不设独立 ID；市场 API 路由记录在 Endpoint，Capability Route 随能力记录。
- **Service 显示名：** Feed 不提交 `services[].name`。ProviderList 根据市场 ID 从内部字典生成名称；源文件也不保存该字段。
- **能力和套餐：** Endpoint 保存市场 API 地址和路由目录；Capability 不重复保存 `base_url`，其 Route 使用所属 Service 的 Endpoint。每条 Capability 汇总同类能力的 Route、输入、输出和参数，放在所属 Service 的 `capabilities` 中；套餐放在顶层 `plans` 中。
- **状态变更：** Offering 使用 `status`。只有授权范围内的 Offering 明确提交状态变更并附上来源时，才能更新状态；不能因为 Feed 中没有某条记录就推断它已退役。
- **信任字段：** Feed 不能通过提交 `official: true`、`verified: true`、`quality_score` 或 `domain_status` 来声明自身可信。

#### 采集时间与变更检测

Feed 正文不需要 `revision` 或 `generated_at`。成功取回后，ProviderList 自行记录取回时间，并对规范化后的 Feed 内容计算指纹：

- 内容没有变化：不创建候选更新。
- 内容发生变化：生成差异，供校验和审阅。

采集器可以使用响应头 `ETag` 或 `Last-Modified` 发起条件请求。若服务器返回 `304`，则复用已有内容并更新检查时间。这些响应头只是可选的抓取优化，不属于 Feed 正文。Provider 自报的时间既不用于判断版本先后，也不用于生成站点更新时间。

## 3. Refresh

以下接口为提议，尚未实现：

```http
POST /api/v1/providers/{provider_id}/refresh
```

请求只接受已登记的 Provider ID，不接受 URL、主机名或回调地址。服务端从已审核的订阅记录读取 Feed 地址。

响应 `202 Accepted` 表示任务已可靠入队，不表示已同步或发布。入队失败必须返回错误。任务状态拟通过以下接口查询：

```http
GET /api/v1/refresh-jobs/{job_id}
```

状态可包括 `queued`、`fetching`、`validating`、`review_required`、`published`、`rejected` 和 `failed`。公开状态不得包含内部审核备注；Job ID 必须不可枚举，或只返回汇总信息。

### 抓取保护

Refresh 必须限制每个 Provider 的请求频率，并提供全局配额、去重、冷却和失败熔断。抓取只允许 HTTPS 和精确授权主机；每次跳转和 DNS 解析都须检查，阻止内网、回环、链路本地地址及 DNS rebinding。设置响应大小、压缩比、超时和重试上限；建议禁止跨主机跳转。

## 4. 直接 Push

Push 是可选提议，尚未实现：

```http
PUT /api/v1/providers/{provider_id}/feed
Authorization: Bearer <PROVIDERLIST_PUSH_TOKEN>
Content-Type: application/vnd.providerlist.feed+json
Idempotency-Key: <unique-key>
```

Push 凭证限定 Provider、可更新的 Service 和字段，并设有效期。完成域名及经营主体审查后签发；凭证只显示一次，服务端保存其校验哈希，并支持轮换、吊销和审计。域名验证不能代替请求鉴权。

幂等键和内容相同时返回原结果；同一幂等键提交不同内容时返回 `409 Conflict`。内容与已接收 Feed 相同则不重复创建候选。新提交进入隔离区，校验和审查通过后才能合并，不能直接覆盖正式数据或静态文件。拒绝超限负载及疑似密钥、用户资料或推理凭证。`202` 只表示已接收，不表示已发布。

## 5. 错误与发布

统一错误格式：

```json
{ "error": { "code": "permission_denied", "message": "...", "request_id": "..." } }
```

| 操作 | 成功 | 常见错误 |
|---|---|---|
| 认领 | `202` | `400`、`409`、`429` |
| 校验挑战 | `200` | `403`、`404`、`410`、`429` |
| Refresh | `202` | `404`、`409`、`429`、`503` |
| Push | `202` | `401`、`403`、`409`、`413`、`422`、`429` |
| 查询状态 | `200` | `404`、`429` |

错误响应应明确区分域名未验证、权限不足、Feed 无效或过期、字段冲突等情况。不得泄露凭证、Token 或内部审核备注，也不能用 `pushed_successfully` 表示已发布。

官方 Feed 和社区 PR 经过相同门禁：校验 Schema、权限、字段归属和冲突。高风险或冲突内容须人工审核；价格归零、批量退役、币种变化和跨域端点变化也须审核，官方来源不例外。

```text
提交 → 身份与权限校验 → Schema 与冲突检查 → 人工审核（如需）→ 合并 → 构建并发布
```

## 6. 后续扩展

签名、Webhook、增量通知、SDK 元数据和自动注册等能力不属于当前 Feed 格式；有明确接入需求后再单独设计。Feed 不得上传或执行代码。

## 7. 参考

- [RFC 8615：Well-Known URIs](https://www.rfc-editor.org/rfc/rfc8615.html)
- [IANA Well-Known URI Registry](https://www.iana.org/assignments/well-known-uris)
- [信任政策](../data/trust-policy_cn.md)
- [数据策略](../data/data-policy_cn.md)
