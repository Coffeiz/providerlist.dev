# 贡献指南

ProviderList 通过 GitHub Pull Request 接受社区贡献。提交 Provider 或 Model 数据时，请使用对应的 [Provider 模板](../../.github/PULL_REQUEST_TEMPLATE/provider-data_cn.md)或 [Model 模板](../../.github/PULL_REQUEST_TEMPLATE/model-data_cn.md)，并参考 [TOML 数据模板](templates/README_cn.md)。提交时附上支持改动的来源链接。外部 GitHub 仓库可以作为来源，但不会因此被自动采集或视为已授权 Feed；PR 审核也不代表 API 已实测可用。官方 Provider Feed 是独立机制，目前运行时尚未实现，详见[官方 Feed 规范](../feeds/provider-feed-spec_cn.md)。

## 1. 可以贡献什么

| 贡献内容 | 提交位置 |
|---|---|
| 新增 Provider 或补充供应项 | `data/providers/<provider_id>/provider.toml` 及对应市场目录 |
| 更新价格、API 或其他 Provider 信息 | 对应 Service 文件；Offering 价格保留在 Offering 内 |
| 补充或修正 Model 规格 | `data/models/<developer_id>/<model_slug>.toml` |
| 更新供应状态 | `data/providers/<provider_id>/...`，并在 PR 中提供官方来源 URL |
| 修正文档 | `docs/` 下对应文档 |
| 报告数据或网站问题 | GitHub Issue |

不接受无来源的价格、没有请求与响应证据的实测结论、匿名直接写入，以及自动生成的批量数据。

## 2. 贡献流程

1. **Fork 并建分支**：在 GitHub 上 Fork 本仓库，然后克隆自己的 Fork：

   ```bash
   git clone <your-fork-url>
   cd providerlist
   git switch -c <change-name>
   ```

2. **修改内容**：Provider 数据位于 `data/providers/<provider_id>/`：`provider.toml` 保存 Provider 信息；每个市场目录包含 `service.toml`、`offerings/`（每条 Offering 一个 TOML 文件）和 `plans.toml`。市场 ID 来自目录，Service 的身份字段由加载器补齐。Offering 的 `id` 填 Provider API 实际接受的模型调用 ID，价格放在该 Offering 的 `pricing` 字段。Model 数据位于 `data/models/<developer_id>/`，每个 Model 单独一个 TOML 文件，开发商信息放在同目录的 `developer.toml`。
3. **本地校验**：按“环境与校验”安装依赖并运行检查。
4. **提交 PR**：将分支推送到自己的 Fork，向本仓库提交 PR，并选择 Provider 或 Model 模板。说明改动范围，附上来源 URL。
5. **等待审核**：审核通过并合并后，改动才会进入发布流程。

## 3. 环境与校验

要求 Node.js ≥ 20.11、pnpm ≥ 9。安装依赖并校验数据：

```bash
pnpm install
pnpm validate:data
pnpm build:catalog
```

本地预览网站：

```bash
pnpm dev:frontend
```

修改数据后重新运行 `pnpm build:catalog`，否则开发服务器仍会读取旧的 `/v1` 数据。完整构建使用 `pnpm build`。

## 4. 数据修改要点

- **提供来源：** 在 PR 中附上支持改动的链接和页面位置；无需维护内部证据台账。
- **保留未知：** 未知值按契约省略或填 `null`；只有确认免费时才填 `"0"`。未知限制不代表无限制。
- **保留原价：** 记录官方币种和计价单位，不推测币种或用猜测汇率换算。
- **区分 Provider 与 Model：** Provider 记录供应与调用信息；Model 记录开发厂商公布的规格。采集器只提交新模型 ID 候选，规格由维护者录入。
- **谨慎标记退役：** 目录中暂时找不到模型，不足以证明它已退役；需要官方依据。
- **按市场记录接入：** API 地址和协议路径放在市场 `service.toml`；不要复制到单个 Offering 或 Model。

字段定义及完整规则见[数据契约](../data/schema_cn.md)、[价格规则](../data/pricing_cn.md)、[模型类型](../data/model-types_cn.md)和[数据政策](../data/data-policy_cn.md)。

## 5. PR 审核

CI 会检查 Schema、数据引用、类型、测试和构建。Reviewer 会根据 PR 中的来源链接核对改动。一般数据 PR 不要求 API 实测；若声称已实测，请附上方法、请求与响应信息及环境。

来源链接不代表 Provider 授权，也不代表 API 已实测可用。PR 合并与生产发布是两个独立步骤。

### Provider 数据 PR 模板

完整模板：[provider-data_cn.md](../../.github/PULL_REQUEST_TEMPLATE/provider-data_cn.md)。

```markdown
## Provider 数据变更

### Provider
- Provider ID：
- 文件路径：`data/providers/<provider_id>/...`

### 改动范围
- 新增或修改的对象（Service / Offering / API / Route / 价格 / 套餐 / 生命周期）：
- 对象 ID 或 JSON Pointer：
- 变更说明：

### 来源
- URL：
- 页面中的依据：

### 说明
- [ ] 本地运行 `pnpm validate:data` 通过
```

### Model 数据 PR 模板

完整模板：[model-data_cn.md](../../.github/PULL_REQUEST_TEMPLATE/model-data_cn.md)。

```markdown
## 规范 Model 数据变更

### Model
- Developer ID：
- 规范 Model ID（`developer_id/model_slug`）：
- 文件路径：`data/models/<developer_id>/<model_slug>.toml`

### 改动范围
- 新增或修改的字段（名称 / 类型 / 模态 / 限制 / 能力 / 发布日期等）：
- JSON Pointer 或字段路径：
- 变更说明（确认适用于规范 Model，而非某个 Provider Offering / Route）：

### 来源
- URL：
- 页面中的依据：

### 说明
- [ ] 本地运行 `pnpm validate:data` 通过
```
