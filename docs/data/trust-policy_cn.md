# 信任政策：徽章语义、域名与品牌绑定

> 核心命题：**来源身份 ≠ 内容正确**

## 0. 四个独立的问题

很多数据平台把下面四件事混为一谈，导致用户过度信任：

| 问题 | 由谁回答 |
|---|---|
| 数据**从谁**来 | 源归属（`origin.kind`） |
| 谁**有权**改 | 授权 Scope（`AuthorizedDomain.scope`） |
| 数据依据什么来源 | 证据链（`Source` / `Evidence`） |
| 数据**何时上线** | `published_at` |

**「官方接入」只回答第一个问题。**
一个 Provider 官方发布了自己的价格，也不代表该来源身份本身能够证明字段正确；字段来源和数据内容仍需在 PR 中审查。

---

## 1. 三级公开标记

| 标记 | 依据 | 含义与限制 |
|---|---|---|
| `社区整理` | PR / 官方页面被第三方采集 | 由站点整理，**不代表厂商参与** |
| `官方接入` | 某授权域名控制权已核实，特定 Scope 的 Feed/Push 已成功发布 | 来源为授权域名，**不保证所有字段正确** |
| `接入异常 / 已撤销` | 源地址异常、授权失效、凭证撤销 | 历史内容保留；**停止展示「当前官方接入」认可** |

### 1.1 徽章触发条件

`官方接入` 徽章的**全部**条件：

1. 域名已验证；
2. 拥有明确授权范围；
3. **至少一个该范围内的有效字段在已发布版本中来源为官方 Feed/Push**；
4. 该授权未撤销。

**仅完成域名挑战但未发布任何数据时**，
显示「域名已绑定（尚未发布）」，**不得**显示官方接入徽章。

### 1.2 覆盖范围必须可见

Provider 顶部是**摘要**。Offering / Pricing / Route 卡片里**仍须单独标明各字段来源**。

顶部徽章必须注明：
- 已授权域名
- 最近成功发布时间
- 官方覆盖的 Service / Offering 数量
- 未覆盖项明确标「社区整理」

**不**以 Provider 单一徽章覆盖不同 Service 的数据身份。

### 1.3 认证覆盖的计算

```
official_feed_coverage = 已发布 且 来自授权源 的字段/Offering 数
```

**不是**「该 Provider 的所有模型天然有认证」。
只有推特国际站提供的源才覆盖那些源。

---

## 2. 域名是授权锚点，不是 Provider 本身

### 2.1 四个 ID 不得复用

| ID | 表示 |
|---|---|
| `provider_id` | 公开主体 |
| `authorized_domain_id` | 可控制的域名 |
| `feed_subscription_id` | 真实数据源 |
| `endpoint_id` | 模型请求域名/接口 |

**四者不得复用为同一 ID。**

官网 `www.example.com` 上发布 Feed，
`api-cn.example.com` 提供模型推理是正常情况——
二者不要求相同域名，但**必须有可核实的授权关联**。

### 2.2 域名控制者不当然有全部权限

- 一个 Provider 可拥有多个域名。
- 域名控制者**并不当然**具备为同集团所有子公司、所有 Service
  或**其他 Provider** 发数据的权限。
- 域名过期、DNS 接管、CDN 配置失误导致控制权变化时，
  **立即暂停官方授权**；可保留带来源的历史快照，
  但不得继续给出有效的官方接入声明。

### 2.3 品牌与委托关系

对**新品牌主体或委托域名**必须人工确认关联关系
（工商信息、官网链接、官方联系方式等可核实证据）。

**不能仅凭任意域名自动占有一个知名品牌。**

厂商发生品牌合并、域名转移、平台主体切换时：
旧授权进入 `suspended` / `revoked`，新授权重新验证；
**历史来源不被抹掉**。

如 Feed 源是 CDN / 对象存储的自定义域名，
绑定时需确认实际域名控制权和委托关系。

---

## 3. 域名挑战

### 3.1 两种方式

优先 **HTTPS 文件挑战**，备选 **DNS TXT**。

```
https://<hostname>/.well-known/providerlist-challenge/<claim_id>
```

- 高熵随机 `claim_id` + 短期有效 `nonce`。
- **服务端只保存 challenge 的哈希**与有效期。
- 挑战**一次性**使用、短时有效。
- ProviderList **主动**验证 HTTPS 证书、主机名、挑战正文 / TTL。
- 挑战标记一次性 `consumed`。
- 成功后明确绑定 `provider_ref` 和 `scope`。

**不能靠未经证明的 webhook callback 替代。**

DNS TXT 与 HTTPS 文件都需从受信任网络读取并记录完整证据，
**不靠客户端声称成功**。

### 3.2 审查流程

1. Provider 选择已有档案或提出新 Provider 候选，
   提交拟授权的**具体主机名**、对应 Service / Offering 范围。
2. 对新品牌主体或委托域名**人工确认**关联关系。
3. 产生 `claim_id` + challenge + 有效期。
4. Provider 部署 challenge。
5. ProviderList 服务端主动读取并校验
   （nonce、时效、host、主体归属、Scope）。
6. 通过 → 写入允许的 Feed URL 与字段 Scope，
   可设置有效期 / 复核周期。

之后日常 Pull **不再需要**每次认证；
直接 Push 才另行签发写入凭证。

### 3.3 安全要求

- 限制每域 claim 频率。
- challenge 过期、重放、主机名同形字防护。
- 人工审查委托域名、品牌冒名、过宽 Scope。
- 绑定期限与凭证轮换策略写入运营规范。

### 3.4 为什么不看请求来源

`Origin` / `Referer` 可缺失，非浏览器请求可伪造；
TLS 客户端通常只验证**服务端**证书，不证明调用者拥有任意域名；
厂商 CDN / 服务器出口 IP 也不是稳定的品牌身份。

**CORS 也不是服务端鉴权。**

只有两条路可落地：
1. **无需平台 Token**：Provider 在验证过的自有域名公开 JSON，ProviderList **主动拉取**。
2. **请求体 Push**：域名挑战绑定身份后，由 Registry 签发短权限凭证
   或接收已登记的签名公钥，并验证每次提交。

---

## 4. 官方 Feed 的权限边界

### 4.1 Feed 不能做的事

官方 Feed **不允许**写入本项目的：
- 徽章
- 验证结论
- 审核结果
- Source Identity
- Git 发布元数据

收到的 `official: true`、`verified: true`、`quality_score`、`domain_status`
等试图自颁认证的字段**一律拒绝或忽略**
（建议 Schema `additionalProperties: false`）。

### 4.2 Feed 不能改的对象

- 官方可通过官网 Feed 发布其**提供服务的模型**，
  **不能越权修改其他 Provider 的 Offering**。
- 模型本体事实只作为候选证据，
  **不能更改别家的价格或认证状态**。

### 4.3 缺失不等于删除

官方 Feed 可按 Scope 声明 `model_offerings` 与 `capabilities` 两个集合。

**省略某个 Service Capability 不等于删除或退役。**
移除要求显式事件与有权操作的授权范围。

`coverage=partial` 绝不构成缺失即删除（见[数据政策 §2](data-policy_cn.md#2-缺席与退役)）。

### 4.4 字段级部分接管

只修改声明的字段，例如币种价格，
**不覆盖**没有发布的 API Route / canonical Model 能力。
对源没有提供的字段**保留上一可信值并标明来源**。

---

## 5. 冲突时的优先级

已被官方认领的数据**仍可保留第三方与人工纠错**。

出现官方数据与可信文档矛盾时：
- **公开冲突**，或
- **回退上次可信值**。

**不允许以「官方接入」压制证据。**

同理，多个授权官方数据源时，
Registry 必须设定**明确的优先级和协调规则**（主/备 Feed、区域独立来源），
**禁止最后写入者赢**。

---

## 6. 撤销与故障

| 事件 | 响应 |
|---|---|
| 官方 Feed 404 / 网络异常 | 上次可信数据**不删**；官方接入信息标 `stale`；重试/通知 |
| 域名挑战失败或主体存在争议 | 暂停授予写权限；继续社区资料处理 |
| 域名过期 / 控制权丧失 / 委托解除 | **立即撤销** AuthorizedDomain、Push 凭证与排队中未发布的提交；保留历史来源 |
| Push Token 泄露 | 立即撤销/旋转并冻结可疑 submission；重新取官方 Feed / 人工复核 |
| 同一 revision 改写内容 | 拒绝 `409` + 审计，需新 revision |
| 全量 Feed 模型减少 | 仅登记 scoped missing event；**不因缺席自动 retired** |
| 恶意/错误价格零元或大批量退役 | 审核队列隔离，保留现网版本，可一键回滚 |
| 长时间无人更新 | 页面清楚显示 stale 的时间；**不能继续宣称最近已更新** |

### 6.1 撤销后必须停止认可

授权被撤销或过期时：
- 新的官方 Push 和 Refresh **停止写候选**；
- Provider 页**移除或标注过期的**「官方接入」徽章。

**已撤销状态不能继续展示认可。**

---

## 7. 政策声明

官网数据是**「官方来源声明」**。
只有指定字段经独立核对才能显示「本站独立验证」。

**不能整体宣传「已认证 = 数据准确」。**

> 域名认证不意味着价格已核实、Push 受理不意味着数据已上线。

---

## 8. 数据来源身份

```json
"field_origin_refs": {
  "/services/0/offerings/0/pricing/0/rates/0/value": "origin:example:1"
}
```

`origin.kind`：
`official_feed` / `official_push` / `official_doc` / `upstream` / `community`

并单独保存 `authorized_domain_ref` 和 `submission_id`。

**源归属（来自谁）、授权范围（有权改什么）、验证程度（本站检验过什么）
和数据发布时间（何时上线）是四个互相独立的字段组。**


## Provider Logo 资源与展示

`frontend/public/logos/providers/` 保存人工审查过的 Provider SVG，随前端静态构建发布。资源清单及逐文件 SHA-256、来源和布局记录在 `frontend/public/logos/manifest.json`。

这批资源来自 `providerlist-logos-v1`：共 232 个 Provider 标识；来源包括 models.dev、官方站点、LobeHub Icons、别名映射及少量自绘标识。5 个 SVG 内嵌位图，其余为矢量图。导入时保留图形内容，仅调整目录和 URL。

Logo 是各自权利人的品牌标识。models.dev 仓库代码的 MIT 许可不应被视为授予这些商标或图形的权利。页面只用 Logo 识别 Provider，不表示背书或合作；不得改变图形比例或另作品牌用途。单色 SVG 在展示层可按登记的品牌识别色着色；官方多色资产保留原色。品牌色只用于 Logo，不扩展为页面控件或状态色。新增、替换资源时保留来源与哈希，并复核其来源和适用条件。

主要 Provider 单色标志的展示色记录在 `frontend/src/data/provider-logo-brand-colors.json`。该文件只登记有来源依据的品牌识别色参考值；有官方品牌手册时优先使用手册颜色，没有公开色值时以官网当前标志主色作近似参考，不将近似值表述为官方色值。腾讯云与火山引擎使用官网当前全彩标志图形，省略小字标并保留原配色。腾讯云标志来源为 [Tencent Cloud 官网](https://www.tencentcloud.com/)（通过 [Wikimedia Commons 文件页](https://commons.wikimedia.org/wiki/File:Tencent_Cloud_Logo.svg)取得）；火山引擎标志来自其官网首页当前引用的 [logo-theme-light.svg](https://lf3-static.bytednsdoc.com/obj/eden-cn/shayvw_lmjsvc/ljhwZthlaukjlkulzlp/logo-theme-light.svg)。

当前目录中的品牌色处理：

| Provider | 展示处理 | 依据 |
|---|---|---|
| Google | 官方全彩 G 标志，保留原配色 | [Google 品牌指南](https://partnermarketinghub.withgoogle.com/brands/google/branding-guidelines/how-to-show-googles-brand/)；[Google G 标志更新说明](https://blog.google/company-news/inside-google/company-announcements/gradient-g-logo-design/) |
| DeepSeek | 蓝色 `#4D6BFE` | 用户指定品牌蓝；[DeepSeek 官网](https://www.deepseek.com/) |
| MiniMax | 红色 `#FF6452` | [MiniMax 官方品牌手册](https://www.minimax.cn/brand-vi)公布的品牌色之一 |
| 阿里云百炼 | 橙色 `#FF6A00` | 用户指定阿里橙；[阿里巴巴官方 Logo 资源页](https://www.alibabagroup.com/en-US/resource-logos) |
| 蚂蚁百灵 | 蓝色参考值 | [蚂蚁集团官网](https://www.antgroup.com/) |
| 火山方舟 | 官网蓝青双色图形标志，省略字标 | [火山引擎官网标志文件](https://lf3-static.bytednsdoc.com/obj/eden-cn/shayvw_lmjsvc/ljhwZthlaukjlkulzlp/logo-theme-light.svg) |
| 小米 MiMo | 橙色参考值 | [小米官网](https://www.mi.com/) |
| 阶跃星辰、月之暗面、智谱 AI / Z.AI | 保留黑白单色，不染色 | 现有标志为黑白单色 |
| 腾讯云 TokenHub | 官方全彩图形标志，省略字标 | [Tencent Cloud 标志来源](https://commons.wikimedia.org/wiki/File:Tencent_Cloud_Logo.svg) |

表中“参考值”只用于单色图形在目录中的辨识展示，不构成品牌手册色值声明。若品牌官方更新 Logo 或手册，应重新核对并更新颜色映射与资源清单。

数据中的 `provider.logo` 只应指向本地 `/logos/providers/{provider_id}.svg` 资源。前端会拒绝非该目录下的路径；资源通过 `<img>` 加载，不以内联 SVG/HTML 注入页面。无有效 Logo 时继续显示名称首字占位。

当前示例数据使用虚构 ID `example-ai`、`demo-cloud`，资源中没有对应 Logo，因此页面仍显示字母占位。加入有对应资源的 Provider 后，在其 Provider 数据中填写 `logo` 即可展示。
