# ADR-0035 · Well-known Feed URL 候选发现与 Scope 边界

> 状态：已被 ADR-0053 取代 · 日期：2026-10-28

## 背景

Provider 官方 Feed 尚未接入。已维护的 Provider 官网 URL 可以减少厂商接入时重复填写 Feed 地址的工作，但官网链接不等于已验证的授权域名，Feed 声明也不能自行授予其声称的 Provider 或 Service 权限。

RFC 8615 定义了 `/.well-known/` 路径前缀，并要求新建的 Well-Known URI 后缀按程序注册；当前 IANA 注册表中尚无 ProviderList Feed 后缀。

## 决策

1. 默认 Feed 地址使用 `https://<exact-provider-website-origin>/.well-known/providerlist.json`。不移除 `www`、不自动折叠子域、不根据品牌名拼接主机名、不跟随重定向。
2. `pnpm ingest:feed-discovery` 只从 `kind=first_party` 的正式 Provider 记录推导候选 URL，并输出该 Provider 已有的 Service ID 候选。该命令离线运行，不探测域名，不读取 Feed 正文，也不生成授权记录。
3. 地址候选的状态为待认领。域名挑战与品牌关联审核完成后，才可创建精确 URL 的 `FeedSubscription`；获准 Scope 仍需逐项确定。
4. 一个 Feed 可以在 `scope.service_ids` 中覆盖 `cn`、`global` 或两者。候选中的所有 Service ID 只是待选项；Feed 不得借此自动扩大权限。不同市场 origin 可分别订阅和授权。
5. `providerlist.json` 在 IANA 注册前只称 ProviderList 应用约定，不宣称是通用标准。正式推广前需提交 URI 后缀和 Feed 格式规范的注册申请。

## 备选方案

### 直接请求官网推导出的 URL 并自动登记

不选。官网记录不是域名控制证明，候选 Feed 也不是授权声明；将两者自动采纳会越过域名挑战、品牌关系审核与 Scope 审批。

### 将所有域名统一归一化到 apex domain

不选。`www`、国家站点和产品子域可能由不同团队或主体控制。主机名必须按官网记录精确处理，不能通过字符串规则推断域名控制关系。

### 使用通用后缀 `provider.json`

不选。应用专属名称可减少 Well-Known URI 命名冲突；`provider.json` 也尚未注册。

## 后果

- 当前即可自动生成认领表单或人工接入所需的候选地址，不需重复手录 Feed URL。
- URL 候选生成与 Feed 网络探测、域名认证、授权 Registry、定期 Pull、Refresh、Push 仍是分离阶段；后续实现不得把候选当作已授权来源。
- 当前仅 Provider 主档有一个 `website` URL。若官方确认的 Feed origin 与该 URL origin 不同，应先显式更新/补充受证据支持的官网资料；不得由自动重定向决定归属。
