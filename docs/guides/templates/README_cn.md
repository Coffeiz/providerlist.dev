# TOML 数据模板

复制需要的文件，并将示例内容替换为来源明确的数据。未知或不适用的可选字段应省略。完成后运行 `pnpm validate:data` 校验。

## Provider

- [provider.toml](provider.toml)：Provider 全局信息和集成支持。
- [service.toml](service.toml)：一个市场的链接、API 端点、Route 和能力。
- [offering.toml](offering.toml)：一条 Provider 模型调用 ID 及其价格。
- [plans.toml](plans.toml)：一个市场的套餐。

## Model

- [developer.toml](developer.toml)：开发商信息，供目录内的 Model 共用。
- [model.toml](model.toml)：一条规范 Model 规格。

英文目录见 [README.md](README.md)。
