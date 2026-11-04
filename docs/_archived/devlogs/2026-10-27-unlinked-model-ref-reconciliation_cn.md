# Model reference reconciliation — 2026-10-27

## Scope

Reconciled current non-retired Provider Offerings in Alibaba Bailian, OpenAI, Meta, Volcengine, and Tencent TokenHub that had a null `model_ref`.

## Decisions

- Linked 71 of 78 current/unknown-stage offerings to canonical Models.
- Reused existing canonical Model records whenever exact IDs, normalized version spellings, or official aliases matched. This includes Xiaomi MiMo, DeepSeek, MiniMax, Qwen, ByteDance Seedance, and Tencent TokenHub Qwen models.
- Added 57 identity-only Model records with matching source ledgers where the canonical registry had no record. Only documented name/identity and exact provider ID evidence were added; type, modalities, limits, and capabilities remain absent unless already sourced elsewhere.
- Added field-level Provider evidence for each new `model_ref` association. Exact upstream/provider model IDs are retained in their original Offering fields.
- Kept seven null references: Alibaba `speech-biasing`; Tencent TokenHub `minimax-voice-clone`, `minimax-voice-design`, `tripo-3d-rigging-check`, `tripo-3d-rigging`, `tripo-3d-animation`, and `tripo-3d-format`. These identify standalone voice/3D API functions, not canonical foundation models.
- No Models.dev fallback was needed for this batch: the official Provider/API catalogues and documented migration tables were sufficient to establish the exact names and IDs. Where a source only documented model identity, no unsupported technical specs were inferred.

## Primary sources checked

- OpenAI API model directory: https://developers.openai.com/api/docs/models/all
- Meta Model API model directory: https://dev.meta.ai/docs/models
- Alibaba Model Studio model/pricing documentation: https://docs.bailian.console.aliyun.com/en/model-studio/model-pricing
- Xiaomi MiMo official model updates: https://mimo.mi.com/docs/zh-CN/updates/model
- Tencent TokenHub model list and legacy migration table: https://cloud.tencent.com/document/product/1823/130051 and https://cloud.tencent.com/document/product/1823/135600
- Volcano Engine / BytePlus ModelArk: https://docs.volcengine.com/docs/ark/seedance-1-0-pro-pro-fast?lang=zh and https://docs.byteplus.com/en/docs/ModelArk/recommended-models-seedance-1-0-pro?redirect=1

## Verification

- `pnpm validate:data`: 0 errors, 1 pre-existing `unknown_model_type` warning for `computer_use`.
- `pnpm build:catalog`: completed successfully.
