# iOS Safari Provider directory overflow and unstable columns

**Date**: 2026-10-30
**Scope**: Provider directory, Provider card label measurement, and windowed grid layout

## Symptoms

On iOS Safari, pinching the Provider directory exposed a large empty area on the right. Further gestures could switch the cards into two or irregular columns. The model listing behaved normally.

Expected behavior was a directory that fits the device viewport and maintains the appropriate responsive column count during pinch gestures.

## Hypotheses and elimination

| Hypothesis | Investigation or attempted change | Result |
|---|---|---|
| Viewport zoom configuration caused the blank area | Added `maximum-scale=1.0` and `user-scalable=no` | Did not resolve the issue. Safari ignores these viewport zoom restrictions; the final implementation retains the original viewport configuration. |
| The application content needed explicit width constraints | Added `width: 100%` and `min-width: 0` to `.app-main` | Retained as layout bounds, but this change alone did not resolve the reported behavior. |
| Blocking gestures would prevent the failure | Applied `touch-action: pan-y` to the mobile Provider directory shell | The user reported that zooming out and column changes remained possible. Removed this restriction. |
| Provider-specific measurement and breakpoint logic affected document width | Inspected the hidden label measurement row and the windowed grid's column selection | Identified an unconstrained measurement box and a JavaScript breakpoint source that could diverge from CSS during Safari viewport changes. |

## Root causes

`ProviderCard.vue` rendered all model type labels and overflow counters in an absolutely positioned, invisible measurement row with `width: max-content`. Although invisible, its wide box could contribute to horizontal document overflow.

`WindowedGrid.vue` selected its column count using `window.innerWidth`. Safari viewport changes during zoom could change that value independently of the CSS responsive layout, causing the items to be regrouped into unexpected columns.

## Fix

- Bound the hidden label measurement row to zero width and height. Its existing overflow clipping prevents its contents from extending the page's scrollable area.
- Give the measurement pills `flex: 0 0 auto`, preserving their intrinsic widths for measurement inside the zero-width container.
- Select windowed grid columns with `matchMedia('(max-width: 768px)')` and `matchMedia('(max-width: 1000px)')`, keeping JavaScript grouping aligned with CSS layout breakpoints.
- Remove the Provider directory gesture restriction and restore ordinary browser gesture handling.
- Retain the application main element's explicit width and minimum-width bounds.

Changed files: `frontend/src/components/ProviderCard.vue`, `frontend/src/components/WindowedGrid.vue`, and `frontend/src/App.vue`.

## Verification and regression protection

`pnpm build:frontend` passed, including `vue-tsc --noEmit` and the Vite production build. The user subsequently confirmed that the issue was fixed on iOS Safari.

No automated browser regression was added. Future changes to hidden measurement elements should check that they do not increase document scroll width. Responsive JavaScript grouping should use the same media-query breakpoints as CSS. For manual verification, open the Provider directory on an iPhone, pinch in both directions, and confirm that no right-side blank area or unexpected column regrouping appears; compare with the model listing.

Reference: [WebKit: New Interaction Behaviors in iOS 10](https://webkit.org/blog/7367/new-interaction-behaviors-in-ios-10/).
