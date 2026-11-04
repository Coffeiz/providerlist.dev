# Provider Collection Classes

Classes set collection and review priority. They do not indicate trust or change a Provider's supply, market, API, or pricing facts.

## Class A

Class A Providers have maintained collectors and registered sources:

| Provider | ID |
|---|---|
| Alibaba Cloud Model Studio | `alibaba` |
| Volcano Engine | `volcengine` |
| Ant Ling | `bailing` |
| StepFun | `stepfun` |
| DeepSeek | `deepseek` |
| Tencent TokenHub | `tencent-tokenhub` |
| Xiaomi MiMo | `xiaomi` |
| Moonshot AI / Kimi | `moonshotai` |
| Zhipu AI | `zhipu` |
| MiniMax | `minimax` |
| OpenAI | `openai` |
| Google | `google` |
| xAI | `xai` |
| Meta | `meta` |

## Class B

Providers not listed in Class A are not scheduled and have no active manual collection entry point. They may retain parked collector code, source definitions, or historical candidates; those are not used by CI.

To collect a Class B Provider, first add it to the Class A list in this document, then build or re-enable its dedicated collector. Changing class affects collection scheduling only.

## Paused collectors

| Provider | ID | Reason |
|---|---|---|
| Anthropic | `anthropic` | Official documentation endpoints are unavailable from the domestic network; automatic and manual collection are disabled until a reachable source path is available. |
