# Provider 采集分类

本分类用于安排采集与评审优先级，不代表 Provider 的可信等级，也不改变模型供应、市场、API 或价格事实。

## A 类

以下 Provider 归为 A 类：

| Provider | 标识 |
|---|---|
| 阿里巴巴（阿里云百炼） | `alibaba` |
| 火山（火山方舟） | `volcengine` |
| 蚂蚁百灵 | `bailing` |
| Step（阶跃星辰） | `stepfun` |
| DeepSeek | `deepseek` |
| 腾讯（TokenHub） | `tencent-tokenhub` |
| 小米（MiMo） | `xiaomi` |
| 月之暗面（Kimi） | `moonshotai` |
| 智谱 | `zhipu` |
| MiniMax | `minimax` |
| OpenAI | `openai` |
| Google | `google` |
| xAI | `xai` |
| Meta | `meta` |

## B 类

未列入 A 类的 Provider 不会被定时采集，也没有可用的手动采集入口。仓库可以保留已暂停的采集器代码、来源定义或历史候选，但 CI 不会使用它们。

新加入的 Provider 默认不参与采集；需要启用时，先将其加入 A 类名单，再建设或恢复专属采集器。

## 暂停的采集器

| Provider | 标识 | 原因 |
|---|---|---|
| Anthropic | `anthropic` | 国内网络无法访问官方文档端点；自动和手动采集均已停用，待恢复可访问的官方来源后再评估启用。 |
