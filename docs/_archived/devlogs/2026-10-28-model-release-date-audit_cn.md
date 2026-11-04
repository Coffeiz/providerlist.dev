# Model release-date audit

**Date:** 2026-10-28  
**Scope:** Every canonical model record under `data/models/` (current repository snapshot).  
**Method:** Official developer material first; exact-ID `models.dev` metadata second. Release dates are only entered when a source establishes a publication/release date for that precise model or a clearly shared version. A page update date, API availability, pricing change, deprecation notice, or dated sample is not treated as a model release date.

## Result

| Measure | Count | Result |
|---|---:|---|
| Canonical models reviewed | 726 | Every file in `data/models/` |
| Models with a release date | 634 | 87.3% |
| Models still without a trusted release date | 92 | 12.7%; date remains unknown |
| Existing dates lacking bound release-date evidence | 0 | 18 sidecar evidence bindings were repaired in this audit |
| Invalid date formats | 0 | Values conform to `YYYY`, `YYYY-MM`, or `YYYY-MM-DD` |
| Exact unresolved IDs with a `models.dev` `release_date` in captured snapshot | 0 / 92 | Exact matches found earlier have been confirmed against official release evidence; no remaining exact IDs appear in the capture |

Dates are recorded only when an official source precisely establishes the release of the model or its clearly identified version family. Names, dated IDs, page-update times, and endpoint availability are not treated as release evidence.

## Official sources checked

| Source | What it establishes | Why it did not resolve the remaining exact IDs |
|---|---|---|
| [OpenAI model page for GPT-4o Transcribe Diarize](https://developers.openai.com/api/docs/models/gpt-4o-transcribe-diarize), [OpenAI API changelog](https://developers.openai.com/api/docs/changelog), and [OpenAI Developer Community announcement](https://community.openai.com/t/introducing-gpt-4o-transcribe-diarize-now-available-in-the-audio-api/1362933) | The community announcement dated 2025-10-18 states the exact model is now available; a moderator later identifies its text as copied from OpenAI's official announcement email | Date is recorded against this first-party community announcement; the separate API model page itself has no publication date |
| [StepFun StepAudio 2.5 Realtime launch](https://www.stepfun.com/news/stepaudio-2-5-realtime) and [official StepAudio 2.5 Chat API docs](https://platform.stepfun.com/docs/zh/guides/models/stepaudio-2.5-chat) | The official announcement is dated 2026-05-08 and links the precise `stepaudio-2.5-chat` documentation; recorded that date for the canonical StepAudio 2.5 Chat model | Other StepFun legacy IDs do not have an official, exact release date in the sources checked |
| [Tencent TokenHub model list](https://cloud.tencent.com/document/product/1823/130051), [product updates](https://cloud.tencent.com/document/product/1729/97765), [model pricing](https://cloud.tencent.com/document/product/1823/130055), and [TCHouse-X model update](https://cloud.tencent.com/product/events/102) | Exact invocation IDs, categories, specs, and prices for current TokenHub models; a 2026-07-31 TCHouse-X listing added Kinfra Text Embedding 0.6b and 4b to that product | The TCHouse-X listing dates product integration, not the underlying models’ initial release; TokenHub catalogs/pricing do not provide release dates for the remaining models. Old-model shutdown or migration dates are not release dates |
| [Kuaishou official investor materials](https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-technology-announces-third-quarter-2024-unaudited/) and [official TokenHub legacy model mapping](https://cloud.tencent.com/document/product/1823/135600) | The Q3 2024 results state Kling AI 1.5 was unveiled in September 2024; TokenHub lists the exact legacy ID `kl-video-v1-5` as Kling Video 1.5 | Recorded `2024-09` for the exact matching model with month precision; no day is inferred |
| [Vidu official model map](https://platform.vidu.com/docs/model-map), [official API model catalog](https://platform.vidu.com/models), [ShengShu Technology release announcement](https://www.prnewswire.com/news-releases/vidu-showcases-china-speed-in-advancing-ai-video-into-production-at-global-creativity-week-302675040.html), and [Q3 API documentation notice](https://platform.vidu.com/news/product/product-docs-q3-api-2025) | The developer announcement dated 2026-01-30 launches Vidu Q3; the official model map identifies Q3 series variants | Recorded the shared family launch date for exact canonical Q3, Q3-Pro, and Q3-Turbo records; route-specific Q3 endpoint IDs still lack dates tied to those exact variants |
| [ShengShu Vidu Q2 launch announcement](https://www.prnewswire.com/news-releases/starring-ai-vidu-q2-brings-performances-to-life-302570537.html), [Q2 Reference-to-Video launch](https://www.prnewswire.com/news-releases/vidu-launches-q2-reference-to-video-pioneering-a-new-era-of-high-consistency-and-creative-control-302590002.html), [Q2 Image launch](https://www.prnewswire.com/news-releases/vidu-launches-q2-image-generation-with-unlimited-free-access-challenging-top-global-image-models-302629015.html), and [Q2 Pro Reference-to-Video launch](https://www.prnewswire.com/news-releases/vidu-showcases-china-speed-in-advancing-ai-video-into-production-at-global-creativity-week-302675040.html) | Developer announcements establish Q2 video (2025-09-30), Q2 Reference-to-Video (2025-10-21), Q2 Image (2025-12-01), and Q2 Reference-to-Video Pro (2026-01-30); Vidu API and Model Studio docs map exact model IDs to each capability | Added dates to 11 exact Q2 canonical/API-model records; the remaining Vidu IDs include Q2 Pro Fast and generic image endpoints without an exact developer release assertion |
| [ByteDance Seedance 2.0 announcement](https://seed.bytedance.com/zh/blog/official-launch-of-seedance-2-0) and [Volcengine Seedance model guide](https://docs.volcengine.com/docs/ark/seedance-2-0?lang=en) | Seedance 2.0 family launch on 2026-02-12 and exact variants such as `doubao-seedance-2-0-mini-260615` | The announcement does not date the specific Mini/Fast snapshots; suffixes are not accepted as release evidence |
| [MiniMax H3 announcement](https://www.minimax.io/blog/minimax-h3) and [H3 API pricing](https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise) | MiniMax H3 launch and current component/pricing information | Does not establish dates for MiniMax’s H3 Max, H3 Max Turbo, H3 Lite, or the individual context/regeneration service IDs; fal’s separately developed H3 Max is dated below |
| [fal Research H3 Max launch announcement](https://fal.ai/learn/devs/introducing-h3-max-by-fal) and [MiniMax Design H3 Max product page](https://design.minimax.io/tools/minimax-h3-max) | fal says it released H3 Max on 2026-08-26 and describes it as a post-trained MiniMax H3 derivative; MiniMax Design identifies its same-named product as the fal.ai post-trained version | Exact date recorded for both `fal/minimax-h3-max` and `minimax/minimax-h3-max`; MiniMax’s similarly named H3 Max Turbo and other services remain undated |
| [Volcengine Seedream model list](https://docs.volcengine.com/docs/ark/model-list?lang=en) and [Seedream API guide](https://docs.volcengine.com/docs/lake-ai-service/image-generation-seed-ream-series-models?lang=en) | Exact IDs and support status for Seedream 5.0 versions | These pages list versions but do not supply launch dates for the remaining records |
| [Alibaba Qwen TTS docs](https://help.aliyun.com/zh/model-studio/model-qwen-tts), [pricing](https://help.aliyun.com/zh/model-studio/model-pricing), and [new model updates](https://help.aliyun.com/zh/model-studio/newly-released-models) | Current `qwen-tts-flash` alias and token prices; versioned historical IDs are listed separately | The exact alias has no dated launch assertion; a dated version or current price is not used as its release date |
| [Z.AI GLM-Legal announcement](https://z.ai/blog/glm-legal) and [GLM-4V-Flash announcement](https://developer.volcengine.com/articles/7447412792165924914) | The dated GLM-Legal announcement (2026-10-12) and a Zhipu-authored platform post announcing GLM-4V-Flash availability on 2024-12-10 | Exact release dates were added to the corresponding model records; no date is inferred for the parent FlashX model |
| [Math Magic Hitem3D v2.0 announcement](https://www.prnewswire.com/news-releases/math-magic-launches-hitem3d-v2-0-as-texture-focused-ai-tools-gain-attention-302706810.html) | Math Magic company release dated 2026-03-09 says Hitem3D v2.0 was released and is available worldwide | Exact release date added to `hitem3d/hitem3d-2-0` |
| [Mureka API changelog](https://platform.mureka.ai/docs/en/changelog.html) | The 2026-04-09 entry says an enhanced version of Mureka-9 was released | This dates an enhancement, not the initial model release; `mureka/mureka-9` remains unknown |
| [IndexTTS official repository](https://github.com/index-tts/index-tts) | README News entry dated 2025/09/08 explicitly says “We release IndexTTS-2” | Exact release date added to `indextts/indextts-2` |
| [Deemos Tech Hyper3D Rodin Gen-2 launch release](https://pressadvantage.com/story/83806-deemos-tech-launches-hyper3d-rodin-gen-2-next-generation-3d-model-generator) | Company release dated 2025-10-01 explicitly announces launch and says early access is available; an earlier 2025-08-14 release records a SIGGRAPH debut/demo | Recorded 2025-10-01 as the official launch/early-access date for `hyper3d/hyper3d-gen2` |
| [Moonshot Kimi Latest article](https://platform.kimi.com/blog/posts/kimi-latest) and [Kimi platform changelog](https://platform.kimi.com/blog/posts/changelog) | Records moonshot-v1 series launch on 2024-01-31, moonshot-v1-auto on 2024-08-28, and moonshot-v1-vision-preview on 2025-01-13 | Exact official dates were added to the matching series/alias and context-window variants |

The source for each model already recorded in the registry remains in its sidecar at `data/sources/models/<developer_id>/<model-file>.json`. Existing dated models are inventoried with their release evidence URLs in the attached CSV.

## Unresolved models

The following 92 exact model IDs remain without a trusted publication date. They are not represented as unreleased; the date is unknown.

### `alibaba` — 1

`alibaba/qwen-tts-flash`.

### `bytedance` — 5

`bytedance/doubao-seedance-2-0-fast-260128`, `bytedance/doubao-seedance-2-0-mini-260615`, `bytedance/doubao-seedream-5-0-260128`, `bytedance/seedream-5-0-flash`, `bytedance/skylark-embedding-vision-251215`.

### `deepseek` — 1

`deepseek/deepseek-v4-1-flash-economy`.

### `kling` — 3

`kling/kl-video-v2-master`, `kling/kling-v3-turbo-video-generation`, `kling/video-v3-turbo`.

### `minimax` — 8

`minimax/asr-1-0`, `minimax/minimax-h3-context-ir`, `minimax/minimax-h3-highspeed`, `minimax/minimax-h3-lite`, `minimax/minimax-h3-max-turbo`, `minimax/minimax-h3-regeneration`, `minimax/music-cover`, `minimax/music-cover-free`.

### `mureka` — 1

`mureka/mureka-9`.

### `stepfun` — 5

`stepfun/step-1o-audio`, `stepfun/step-1o-turbo-vision`, `stepfun/step-asr`, `stepfun/step-tts-mini`, `stepfun/stepaudio-2-asr-pro`.

### `tencent` — 24

`tencent/hy-3d-motion`, `tencent/hy-3d-rigging`, `tencent/hy-image-lite`, `tencent/hy-image-v3-5-preview`, `tencent/hy-video-1-5`, `tencent/hy-vision-2-0-instruct`, `tencent/hy-world2-panorama`, `tencent/hy-world2-scene`, `tencent/kinfra-text-embedding-0-6b`, `tencent/kinfra-text-embedding-4b`, `tencent/kinfra-vl-embedding-2b`, `tencent/kinfra-vl-embedding-8b`, `tencent/wand-asr-v1`, `tencent/wand-dubbing-clone-v1`, `tencent/wand-dubbing-clone-v2`, `tencent/wand-dubbing-sts-v1`, `tencent/wand-vega-image-flash`, `tencent/wand-vega-image-lite`, `tencent/wand-vega-image-pro`, `tencent/wand-vega-video-1-0-lite`, `tencent/youtu-vita`, `tencent/yt-video-2-0`, `tencent/yt-video-fx`, `tencent/yt-video-humanactor`.

### `tripo` — 5

`tripo/p1-20260311`, `tripo/tripo-3-1`, `tripo/tripo-h3-1`, `tripo/tripo-p1-0`, `tripo/tripo-p2-20260801`.

### `unisound` — 1

`unisound/unisound-u2`.

### `vidu` — 23

`vidu/vd-video-q2`, `vidu/vd-video-q2-pro`, `vidu/vd-video-q2-pro-fast`, `vidu/vd-video-q2-turbo`, `vidu/vd-video-q3-pro`, `vidu/vd-video-q3-turbo`, `vidu/vidu-image-lite-reference2image`, `vidu/vidu-image-pro-reference2image`, `vidu/vidu-image-reference2image`, `vidu/viduq2-pro-fast-img2video`, `vidu/viduq3-ad-reference2video`, `vidu/viduq3-drama-reference2video`, `vidu/viduq3-fast-reference2image`, `vidu/viduq3-mix-reference2video`, `vidu/viduq3-pro-fast-img2video`, `vidu/viduq3-pro-img2video`, `vidu/viduq3-pro-start-end2video`, `vidu/viduq3-pro-text2video`, `vidu/viduq3-reference2video`, `vidu/viduq3-turbo-img2video`, `vidu/viduq3-turbo-reference2video`, `vidu/viduq3-turbo-start-end2video`, `vidu/viduq3-turbo-text2video`.

### `zhipu` — 15

`zhipu/cogvideox-2`, `zhipu/cogvideox-flash`, `zhipu/embedding-2`, `zhipu/embedding-3`, `zhipu/glm-4-airx`, `zhipu/glm-4-assistant`, `zhipu/glm-4-flashx-250414`, `zhipu/glm-4-long`, `zhipu/glm-4v-plus-0111`, `zhipu/glm-5-2-fast-preview`, `zhipu/glm-realtime`, `zhipu/glm-realtime-air`, `zhipu/glm-realtime-flash`, `zhipu/glm-rerank-pro`, `zhipu/glm-z1-flashx`.
## Data and evidence updates

- Added `2026-05-08` for `stepfun/stepaudio-2-5-chat` from StepFun’s dated StepAudio 2.5 launch announcement, which links to the exact official Chat model documentation; unresolved count is now 92.
- Added `2024-09` for `kling/kl-video-v1-5` from Kuaishou’s Q3 2024 results, which state that Kling AI 1.5 was unveiled in September 2024. Month precision is used because no exact day is stated; the unresolved set was then 95.
- Added `2026-09-01` for `meta/muse-voice-transcribe-1-0` from Meta AI Research’s dated introduction post and exact official model-ID documentation; unresolved set was then 94.
- Added `2024-10-25` for `zhipu/glm-4-voice` from the official zai-org/GLM-4 repository News entry and matched it to the same-named official catalog entry; unresolved set is now 93.

- Added official release dates for 7 Moonshot records: the Moonshot V1 series launch (2024-01-31), `moonshot-v1-auto` (2024-08-28), and three context-window variants of `moonshot-v1-vision-preview` (2025-01-13). Each value is bound to an official dated source entry.
- Repaired 18 existing sidecar `/model/evidence_refs` bindings for release-date evidence already referenced by model records. The repair keeps the evidence ledger and model record consistent; it does not change release-date values.
- Regenerated [the full 726-model audit CSV](model-release-date-audit-2026-10-28.csv). It includes each model ID, current release date, release evidence IDs/URLs, and the model-source URLs recorded in the sidecar.
- Added the exact GPT-4o Transcribe Diarize release announcement evidence, reducing the unresolved exact-ID set from 117 to 116.
- Added the Z.AI official GLM-Legal announcement date (2026-10-12), mapped to the official model-catalog record `zhipu/glm-5-3-flashx-legal`; unresolved exact IDs are now 115.
- Added the Math Magic Hitem3D v2.0 release date (2026-03-09) from its company-issued PR Newswire release; unresolved exact IDs were then 114.
- Added the IndexTTS-2 release date (2025-09-08) from the official repository News entry; unresolved exact IDs were then 113.
- Added the Hyper3D Gen-2 official launch/early-access date (2025-10-01) from a Deemos Tech company release; the earlier SIGGRAPH 2025 debut/demo is recorded in the locator; unresolved exact IDs were then 112.
- Added the official Vidu Q3 launch date (2026-01-30) to the exact Q3, Q3-Pro, and Q3-Turbo records, using the developer launch announcement and the official model map’s family mapping; unresolved IDs were then 110.
- Added the 2026-08-26 launch date for both `fal/minimax-h3-max` and the same-named MiniMax Design listing `minimax/minimax-h3-max`. fal Research’s launch post establishes the date; MiniMax Design confirms its H3 Max product is fal.ai post-trained. The remaining unresolved set was 108.
- Added dates for 11 exact Vidu Q2 API/canonical model records: Q2 video (2025-09-30), Q2 Reference-to-Video (2025-10-21), Q2 Image generation (2025-12-01), and Q2 Reference-to-Video Pro (2026-01-30). Each date is bound to a ShengShu release announcement and the exact model/capability mapping is bound to official Vidu or Model Studio documentation. The remaining unresolved set is now 97.
- Added `2024-12-10` for `zhipu/glm-4v-flash` from a Zhipu-authored platform announcement whose body dates the launch to December 10 (the page itself was posted December 12); the date and source are bound in its model sidecar. The unresolved set is now 95.
- The older `models.dev` capture (`/tmp/providerlist-models-dev-models.json`, 607 records, retrieved 2026-10-27T23:26:29Z) did not include the unresolved exact IDs. A fresh live capture (`/tmp/providerlist-models-dev-latest.json`, 232 providers / 8,939 models, retrieved 2026-10-28T03:13:31Z) matched exact IDs `fal/minimax-h3-max` and `minimax/minimax-h3-max` with `release_date: 2026-08-26`; both were confirmed against fal’s official release post and MiniMax Design’s identity documentation. None of the 93 currently unresolved exact IDs appears in the captured snapshot.

## Validation

`pnpm validate:data` was attempted and is blocked by a pre-existing registry error: duplicate source ID `antgroup-official-model-release-changelog-20261028` has conflicting content in `data/sources/models/antgroup/ling-2-6-1t.json`. Validation did not finish, so this audit cannot claim a passing full-data validation. No tests were run.

## Reproduction

- Model inventory: `data/models/**/*.json`.
- Release-date evidence: corresponding model sidecars in `data/sources/models/`.
- Third-party comparison: captured `models.dev` snapshot described above; exact ID only, with no fuzzy family-name joins.
