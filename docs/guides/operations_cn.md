# 运维与发布

本文说明 CI、Sync 和 Publish 的操作方式、发布检查与故障恢复。系统结构见[架构文档](../architecture_cn.md)，采集细节见[自动采集指南](ingestion_cn.md)。

[English version](operations.md) is also available.

仓库使用三条独立工作流：

| 工作流 | 触发方式 | 用途 |
|---|---|---|
| CI | PR、`main` 更新或手动运行 | 校验与构建 |
| Sync | 每日或手动运行 | 采集并生成候选 PR |
| Publish | `main` 更新或手动运行 | 构建并部署 |

## 运行 Sync

1. 打开 **Actions → Provider 数据采集 → Run workflow**。
2. 选择全部 A 类 Provider，或选择单个 Provider；单独运行时填写 Provider ID。
3. 查看各 Provider 采集任务和汇总任务的结果。生成的 PR 需要审阅后再合并。

Sync 会分别报告每家 Provider 的结果，并采集 ECB 参考汇率。Provider 和汇率变化都会进入审阅 PR；汇率抓取失败时保留已有快照。候选审阅规则见[自动采集指南](ingestion_cn.md)。
Sync 仅接受 A 类名单中的 Provider。Anthropic 目前已暂停，不会被定时或手动采集；待官方文档来源恢复可访问后再评估启用。

## 发布

合并到 `main` 会触发 CI 和 Publish。Publish 构建通过后，需经 `production` 环境审批才会部署；也可手动运行。

部署后会检查 Manifest、Provider JSON、Offerings、站点数据、首页、JSON 响应类型和 `www` 跳转。构建还会生成 Provider、Model、模型类型静态页面，以及 `sitemap.xml` 和 `robots.txt`。
发布构建会将生成的 draft Manifest 提升为 `published`；本地目录构建仍保持 `draft`。

`www.providerlist.dev/*` 跳转路由配置在 `wrangler.www-redirect.jsonc`。部署前，Cloudflare 需要已有 `providerlist.dev` Zone，并为 `www` 配置代理 DNS 记录。

## 故障恢复

- **Sync 失败：** 查看失败任务和汇总报告；修复后重新运行。失败不代表供应结束。
- **Publish 构建失败：** 修复错误并合并，部署不会启动。
- **部署检查失败：** 查看运行记录；需要恢复时回退问题改动，再由 Publish 部署。

## 仓库设置

配置 `main` 分支必需检查 `verify`、`production` 环境审核人，并将 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID` 保存为 GitHub Actions Secrets。

贡献步骤和本地校验命令见[贡献指南](contributing_cn.md)。
