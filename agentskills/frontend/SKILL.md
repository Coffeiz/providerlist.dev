---
name: frontend
description: Frontend conventions for Vue 3 script setup, strict TypeScript, state and async flows, routing, design tokens, and HTML security boundaries. Read before changing `frontend/`.
---

# Frontend development conventions

## Stack

- Vue 3 `<script setup>` + strict TypeScript + Vite.
- Routing: `vue-router` 4 with code splitting (`() => import(...)`).
- Styling: global CSS + CSS variables; **no** UI framework and no CSS-in-JS.
- State: Vue `reactive` and `computed`; do not add Pinia (the data volume is small and has a single source of truth).

## Directory layout

```
frontend/src/
├── components/   # Reusable presentation components (+ icons.ts path data)
├── composables/  # catalog.ts loading / format.ts formatting / capabilities.ts grouping
│                 #   / api.ts endpoint registry / prefs.ts preferences
├── i18n/         # dictionary.ts + index.ts translation entry point (t / translate)
├── pages/        # Page entry points
├── router/       # Route table
├── styles/       # tokens.css, base.css, components.css, text.css, pricing.css, utilities.css, api.css, not-found.css
├── types.ts      # Contract type forwarding layer (forward only; do not define types)
└── App.vue       # Application shell
```

## File organization

- `pages/**` handles **layout, component composition, and flow orchestration** only.
- Put UI interactions in `components/`, pure formatting in `composables/format.ts`, and requests/data loading in `composables/catalog.ts`.
- Put **area-level styles in `styles/`**, not page-scoped styles. Scoped styles cannot apply across pages when the same cards are reused. The API area is one example: the `/design` page must display the same endpoint cards.
- **Card hover elevation is only for navigation cards** leading to detail or secondary pages. Only those cards may use `.pl-card-interactive`; information panels, empty states, endpoint cards, and other static cards must not move.
- Do not keep adding features to entry-point files. Gradually split existing large files by responsibility.
- Reuse existing components and tokens; do not reimplement them.

## Route boundaries

- `/design` is a **development reference page** and must not be included in production builds. Register its route only under `import.meta.env.DEV`, so neither its route nor page code exists in published artifacts. Remove its footer link as well; do not leave a dead link. See `docs/guides/operations.md` §10.0.1.
- All other routes are public read paths and must be available in production builds.

## Contract types and dictionaries: one source of truth

**Do not redefine contract types or copy domain dictionaries into `frontend/`.**

- `types.ts` is a **forwarding layer**: use only `export type ... from '@providerlist/schema/types'`; define no types there. Type-only imports are erased at compile time and have zero runtime cost.
- Import domain dictionaries from their owning packages. Do **not** create local tables in `format.ts`:
  - Model type labels → `modelTypeLabel` from `@providerlist/schema/model-types`.
  - Billing units → `describeUnit` from `@providerlist/shared/pricing/units`.
  - Metric labels and currency symbols → `METRIC_LABELS` and `CURRENCY_SYMBOLS` from `@providerlist/shared/pricing/units`.
- Keep only **presentation-specific** conventions in the frontend (such as account-market labels), and do not duplicate a contract dictionary under the same name.

This is not merely aesthetic: copied dictionaries can **drift silently**, with no mechanism to detect it. This has happened before: a frontend copy shortened “Image generation / editing” to “Image generation,” so the site label no longer matched the contract.

## State and asynchronous work

- Store data in `reactive` and read it through `computed`; **do not** build manual subscription or broadcast systems.
- Do not call `await fetch` directly in components. Use loading functions from `composables/catalog.ts`.
- Show load failures (`state.loadError`); do not silently turn them into empty lists.
- Put page-level filter state in URL query parameters to support sharing and browser navigation. For example, Service selection uses `?service=cn-usage`; do **not** infer account eligibility from IP or browser language.

## Design-token usage

- Use `var(--pl-xxx)` for colors, font sizes, spacing, radii, and shadows.
- **Do not hardcode colors**, including transparent `rgba()` values. Derive transparent variants with `color-mix()` from semantic tokens.
- Dark-mode support comes from paired semantic-token values; components should not add `[data-theme='dark']` selectors.
- Use `StatusBadge.vue` for statuses; do not draw separate status dots in pages.
- Use `CopyButton.vue` for copy actions; do not call `navigator.clipboard` directly (failure feedback would be missing).
- Use `AppIcon.vue` for line icons; size follows the font and color follows `currentColor`. Do not draw SVGs in pages. Icon buttons require `aria-label`.
  Icon path data lives in `components/icons.ts`; import the `IconName` type from there when needed elsewhere in the presentation layer.
- Use `.pl-button` for actions. In a group, only one button may use `.pl-button-primary`; others are secondary. Text buttons have a leading icon; external links use `AppIcon name="external"`; copy tools use the ghost form of `CopyButton`. Use only `variant="icon"` for icon buttons.
- **Do not use native `<select>`** controls; their appearance cannot be controlled. Use `components/SelectPopup.vue` with `v-model`, `options` (`{value,label}`), and `aria-label`; choose `variant="form"`, `"compact"`, or `"header"`. Use `compact` for filter chips and pass their labels through the `label` prop inside the trigger. The popup anchors to the trigger, so an external label would misalign it.
- Consume component-level tokens (such as `--pl-api-*`) through area styles; do not use bare values in views.
- Glass surfaces have **two levels**: use `--pl-glass-bg-strong` with a shadow for top-level floating elements, and `--pl-glass-bg` without a shadow for list entries and main page panels. Do not mix them.
- Use three monospace styles: `.pl-code` for code literals with a border, `.pl-mono` for identifiers without a border, and `.pl-endpoint-value` for primary values such as Base URLs and call signatures without a border. Do not add a code box inside an endpoint card; the card provides the frame.

**Do not add numeric token scales.** Use `-soft` / `-medium` / `-hard` for color scales and `-xs` / `-sm` / `-md` / `-lg` / `-xl` for measurement scales. Limit color scales to 3 values and measurement scales to 5; when more meaning is needed, add a semantic **role** (such as `--pl-bg-muted`) rather than a fourth raw palette value. See `agentskills/design/references/design-system.md` §2.0.

When renaming a token, remember that an unresolved `var(--pl-xxx)` silently falls back to an inherited value and does not produce an error. After bulk renames, check that all references resolve (design conventions §8.3).

## Display rules

These are product rules and review blockers:

- Make units explicit. Repeated units may be stated in a column header (for example, “Token price per million”); cells need not repeat them on every row. Preserve amount precision; do not display `¥1`.
- Always show conditions for conditional prices. Do not display noise such as “Condition: unconditional” for unconditional rules.
- Show unknown values as “Undisclosed.”
- Status badges must include text; tone affects color only.
- Handle amounts as decimal strings. Do not use floating-point arithmetic in presentation code.
- Count and display model offerings separately from independent Capabilities.

## TypeScript

- Strict mode is enabled (`strict` + `noUncheckedIndexedAccess`).
- Add explicit generics to `ref` and `computed` where appropriate: `ref<string[]>([])`, `ref<ProviderSummary | null>(null)`.
- Avoid `any`; when escape hatches are necessary, use `unknown` and narrow it explicitly.
- Define component props with `defineProps<{...}>()` and `withDefaults`.
- Do not put complex expressions in templates; extract them to a computed value or function.
- Do not add a separate `<script>` block with `methods` outside `<script setup>`; use functions inside `<script setup>`. In templates, call functions as `fn()` or use a computed value.

## Security boundaries

- Sanitize untrusted HTML; never use raw `v-html`.
- Do not build links, attributes, or error messages by concatenating unescaped HTML strings.
- External links must use `target="_blank" rel="noopener noreferrer"`.
- Do not store API Keys or Tokens in components or catalog data. Users configure authentication credentials in their own runtime environment.

## Responsive behavior

- Below `768px`, switch to a single column and hide secondary information (such as version numbers).
- Add `.pl-table-wrap` to table containers to preserve horizontal scrolling on narrow screens.
- Touch targets must be at least 44px high (search uses the 44px `.home-search-input`).

### iOS Safari viewport edges

**Do not place colored `position: fixed` elements at the bottom edge of the viewport.**

Safari's address bar can cover the viewport bottom. When fixed or sticky viewport-constrained elements occupy that edge, Safari may drop its blur scroll-edge effect and apply a solid `color extension` instead. The browser paints this area, so the page cannot fix the color directly; leave the obscured edge clear.

Detection and implementation live in `composables/viewport.ts` (`supportsFloatingScrollbar` is a pure function). Mount floating bars only when `(hover: hover)` and `(any-pointer: fine)` match. Use `any-pointer`, not `pointer`: an iPad with an external trackpad still has touch as its primary pointer but has a precise pointer available.

iOS Safari has not rendered custom `::-webkit-scrollbar` styles since iOS 14. UI that depends on a custom scrollbar will show only a solid bar on iOS. Use a non-fixed approach for horizontal scroll handles or rely on touch scrolling.

The viewport meta tag in `frontend/index.html` must include `viewport-fit=cover`; otherwise all `env(safe-area-inset-*)` values become 0 and safe-area spacing is ineffective.

## Accessibility

- Icon buttons require `aria-label`.
- Mark decorative elements with `aria-hidden="true"`.
- Use `<th scope="col">` for table headers.
- Form controls need a corresponding `<label for>` or a `.pl-sr-only` label.
- Do not remove focus indication with `outline: none` unless a `:focus-visible` style replaces it.
- Use `--pl-control-focus-shadow` for focus glows. Do **not** write `0 0 0 3px <surface-color>`; on dark themes the surface may blend into the background.
- Use a consistent 3px focus-ring offset across the site.
- Focus feedback has two forms: outline feedback (buttons and links) may appear instantly; glow feedback (inputs and search fields) must fade in and out using `--pl-duration-fast`. Transition colors only; do not transition the `outline` shorthand, which can flash black.
