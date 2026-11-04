# PRD-OFFICIAL-1 · 官方域名接入与 Feed 发布

> 状态：🚧 部分实施（Feed 地址离线候选生成） · 对应设计文档 v1.2 §7A
> 依赖：[`provider-feed-spec.md`](../../feeds/provider-feed-spec.md)、
> [`trust-policy.md`](../../data/trust-policy.md)

## 1. 背景

现在所有数据都是站点自己整理的。Provider 看到自己的数据被整理、
可能不准，也没有办法自己更正——只能提 PR。

官方接入让 Provider 能在**自己可控的域名**上托管一份结构化目录，
由 ProviderList 拉取、校验、发布。

**但这引入一个全新的信任问题**：
「你能控制 `example.com`」和「你说的价格是对的」是**两件事**。
如果实现时把这两者混同，整个数据平台的公信力就垮了。

## 2. 目标

1. Provider **无须安装 SDK、无须开设 ProviderList 账号**即可接入。
2. 域名控制权通过**一次性挑战**证明，服务端**主动**读取验证。
3. 授权**最小权限**：精确到 Service / Offering / 字段路径。
4. 接入的权限范围**可撤销**，有审计。
5. **公开数据不变**——官方提交先进候选，经门禁后才发布。
6. 「官方接入」徽章**只**出现在确实有已发布官方数据的 Provider 上。

## 3. 非目标

- 不做多租户厂商控制台（先用 Git + 人工审核的 claim ID）。
- 不做实时生效——高风险字段始终需人工审查。
- 不在 MVP 提供直接 Push（先做 Pull + Refresh）。
- 不做匿名 JSON 写入。

## 4. 里程碑

| 阶段 | 内容 |
|---|---|
| M3-a0 | 从 first-party Provider 官网精确 origin 生成默认 well-known Feed URL 候选（已实施；不探测、不授权） |
| M3-a | Feed 规范 0.1 定稿 + JSON Schema + 参考验证器 |
| M3-b | 域名挑战（DNS TXT / HTTPS 文件）+ 授权 Scope 注册表 |
| M3-c | 固定 URL Pull + Refresh（限流 + 持久队列 + 状态查询） |
| M3-d | 候选审核 + 官方覆盖摘要编译 + 徽章生效 |
| M4 | 直接 Push（限权凭证、轮换撤销、幂等 Key、审计） |

## 5. 验收标准（M3）

- [x] `pnpm ingest:feed-discovery` 为有 HTTPS 官网地址的 first-party Provider 生成 `/.well-known/providerlist.json` 地址候选，并列出可申请的 Service ID；不发起网络请求，不将候选标记为已验证或已授权。
- [ ] 在同一 Feed 的 `scope.service_ids` 中可只授权 `cn`、只授权 `global`，或明确授权两者；不可从候选 Service 列表自动扩大 Scope。

- [ ] 至少 1 个**已验证域名**的测试 Provider 能走通
      Claim → Feed → Refresh → Candidate → CI → Published → Badge 全流程。
- [ ] 模拟**无关域名冒认**、**伪造 Origin**、**越权 Service**、
      **部分 Feed 缺席模型**、**同 revision 不同哈希**、
      **域名/凭证撤销**后，**不会篡改公开数据**。
- [ ] 「官方接入」仅出现在**已发布且有实际官方数据覆盖**的 Provider/Offering；
      **不**把域名通过验证解释为所有数据已核验。
- [ ] 独立测试触发**请求中断 / 队列重复投递 / 持久化失败**：
      **不能**丢提交后仍错误返回 `202`。
- [ ] 撤销授权后，新的 Push 和 Refresh **停止写候选**，
      Provider 页**移除或标注过期的**徽章。
- [ ] Refresh 请求带 `url=https://127.0.0.1/` → **忽略/拒绝**传入 URL，
      只抓取 Registry 中固定授权的地址。
- [ ] 官方 Feed 含其他 Provider 的对象 → Scope 拒绝，**不能**改写他家资料。
- [ ] 官方 Feed 缺模型但无 `retirements[]` → 进入缺席候选，**不自动退役**。

## 6. 影响的契约

新增（公开 JSON 侧）：
- `Provider.official_integration` —— **由授权 Registry 和真实 PublicationEvent
  编译生成**，不由源数据输入。

新增（控制面侧，非公开 JSON）：
- `AuthorizedDomain` / `DomainChallenge` / `FeedSubscription` /
  `OfficialSubmission` / `PublishCredential` / `PublicationEvent`。

`/api/v1/*` 是**独立**的写入控制面，与公开 `/v1/*` 静态读**完全分离**。

## 7. 风险

| 风险 | 缓解 |
|---|---|
| 恶意认领知名品牌 | 域名挑战**之外**增加品牌主体/委托关系人工审核；最小 Scope |
| 官方 Feed 错误被误认为内容正确 | 明确「官方接入」只表示来源授权；字段事实仍按 PR / 发布门禁审查，覆盖范围字段级显示 |
| 匿名 Refresh 滥用与 SSRF | 固定白名单 URL + HTTPS + 私网拦截 + 冷却/配额/异步队列 |
| Push 凭证泄露、过宽授权 | 最小权限、撤销、Token 哈希、幂等/审计、PR 门禁 |
| 官方数据覆盖社区修正 | 字段级所有权、显式删除、保留冲突、全量缺失不自动 retired |
| 数据接入与静态发布耦合 | Worker 候选仓库隔离、发布工作流唯一写 CDN |

## 8. 事实边界

> 支持接入接口**不等于**真实厂商已经参与。

冷启动先展示有证据的数据，再邀请厂商接管，
**不能伪造官方认证覆盖量**。

直接 Push 可以在第二阶段追加，
**不要因 Push 未完成阻塞静态站上线**。
