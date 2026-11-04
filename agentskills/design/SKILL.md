---
name: design
description: Visual and interaction conventions covering the three design-token layers, light/dark themes, component contracts, data presentation, and maintenance of the `/design` page. Read before changing the UI.
---

# Visual and interaction conventions

See the full specification in [references/design-system.md](references/design-system.md).
The `/design` page (the in-site demo) is the **visual output for design tokens**. Whenever tokens change, verify that the page renders them correctly.

## Stack and visual style

- Frontend: Vue 3 + TypeScript + Vite (demo site), global CSS + CSS variables, **no** UI framework.
- Style: **neutral interface + restrained glass**. Do not use vendor brand colors in application UI; establish hierarchy with inverse ink. Glass has only two levels and is reserved for **interactive surfaces**. This is not Gugu-web's Glassmorphism: that ToC product uses heavy decoration, while this developer catalog uses a restrained treatment.
- Avoid: decorative gradients, illustration-style Heroes, marketing copy, spreading vendor brand colors to interface controls, and stacks of oversized rounded cards.
- Provider Logos retain brand-identifying colors: monochrome marks may use the brand's public logo color; official multicolor marks retain their colors. This exception applies only to the Logo itself, not to badges, buttons, or statuses.
- Support dark mode through `html[data-theme='dark']`.

## Three token layers

```
primitive layer  →  semantic layer  →  component layer
```

1. **Primitive layer** (`--pl-surface-*`, `--pl-ink-*`, `--pl-success-*`, etc.): raw colors and scales without semantic meaning.
2. **Semantic layer** (`--pl-bg-*`, `--pl-text-*`, `--pl-border-*`, `--pl-status-*`, `--pl-glass-*`): expresses usage. Light and dark values are both defined in `frontend/src/styles/tokens.css`.
3. **Component layer**: concrete components consume the semantic layer.

**Hard rule: components must not hardcode colors.** Always use `var(--pl-xxx)`. Define both light and dark values for every new semantic token.

## Scale limits (strict)

- **At most 3 steps per color scale**, named with semantic terms (`-soft`, `-medium`, `-hard`), **never numeric levels**.
- **At most 5 values per measurement scale** (spacing, radius, font size, font weight), likewise named semantically (`-xs`, `-sm`, `-md`, `-lg`, `-xl`).
- Semantic tokens are **roles**, not scales: one value per role.

Numeric scales encourage endless additions. Too many steps make it hard to distinguish shades. If the limit is insufficient, add a **semantic role**, not another color-scale value.

Current size: 5 color scales × 3 steps = **15 primitive color tokens** (down from 46 before the redesign).

## Key tokens

| Category | Representative tokens |
|---|---|
| Surface | `--pl-bg-canvas` `--pl-bg-surface` `--pl-bg-subtle` `--pl-bg-muted` `--pl-bg-inverse` |
| Text | `--pl-text-primary` `--pl-text-secondary` `--pl-text-tertiary` `--pl-text-disabled` `--pl-text-inverse` |
| Border | `--pl-border-subtle` `--pl-border-strong` `--pl-border-focus` |
| Status | `--pl-status-{success,warning,danger,neutral}` + matching `-bg` / `-border` |
| Price | `--pl-price-cache` (cache billing item), `--pl-price-native` (muted original currency), `--pl-price-cache-native` (muted green original currency for cache prices) |
| Glass | `--pl-glass-bg` `--pl-glass-bg-strong` `--pl-glass-border` `--pl-glass-blur` |
| Atmosphere | `--pl-atmosphere` (a single soft glow at the top; not used to convey information) |
| Controls | `--pl-control-bg` `--pl-control-border` `--pl-control-focus-shadow` |
| Spacing | `--pl-space-xs` … `--pl-space-xl` (5 steps, 4px base) |
| Font size | `--pl-text-xs` … `--pl-text-xl` (5 steps) |
| Radius | `--pl-radius-xs` … `--pl-radius-full` (5 steps) |
| Font weight | `--pl-weight-regular` … `--pl-weight-bold` (5 steps) |
| Motion | `--pl-duration-{instant,fast,base,slow}` + `--pl-ease-{standard,out,in}` |
| Layout | `--pl-layout-max` `--pl-layout-content` `--pl-header-height` |

**Component tokens:** `--pl-api-*` for the API area, `--pl-checkbox-*` for custom checkboxes, and `--pl-radio-*` for custom radio controls. They cover panels, endpoint cards, paths, example responses, notes, and control states. Component tokens consume the semantic layer and define no new colors; the same definitions serve both themes. See `references/design-system.md` §§2.5–2.7.

## Component contracts

- **Buttons:** use `--pl-radius-md`; variants are primary, secondary, ghost, small, and disabled. Primary buttons use **inverse ink** (`--pl-bg-inverse`), not color; the site's only solid action surface must remain neutral. In a group of actions, allow **only one primary button**. Text buttons have a leading icon (`AppIcon`); external links use `AppIcon name="external"`; tool actions use ghost and do not participate in primary/secondary hierarchy.
- **Badges:** exactly 5 variants: `neutral`, `success`, `warning`, `danger`, `inverse`. `neutral` is for ordinary categories; reserve `inverse` for trust signals such as “Official integration.”
- **Cards:** use `--pl-glass-bg-strong` + `--pl-glass-border` + `--pl-radius-lg`. Only navigation cards linking to a detail or secondary page rise by 2px and deepen their glass shadow on hover; mark them `.pl-card-interactive`. Static information cards must not rise. Do not nest another glass surface **inside** a card.
- **Inputs:** use `--pl-control-bg` and `--pl-control-border`; on focus, use `--pl-border-focus` plus `--pl-control-focus-shadow`. The glow **must** use `--pl-control-focus-shadow`; do not write `0 0 0 3px <surface-color>`, which becomes invisible when a dark surface blends into the background. Focus changes must transition with `--pl-duration-fast`.
- **Segmented controls:** use for mutually exclusive choices such as theme selection. Inner and outer radii must be concentric; use pill radii (`--pl-radius-full`) for both so sizing does not depend on numeric values. The selected state uses a solid fill and very subtle shadow, not an outline.
- **Selects:** **Do not use native `<select>`** controls because their system styling is uncontrollable. Always use `components/SelectPopup.vue` (`form`, `compact`, and `header` variants). Anchor the popup to its trigger, align left edges, make it at least as wide as the trigger, and flip upward when there is not enough room below. Use `components/FlipChevron.vue` (right when closed, down when open) for the chevron.
- **Tables:** use `--pl-table` classes, `--pl-text-tertiary` for headers, `--pl-border-subtle` for row separators, and `.pl-table-wrap` for horizontal scrolling.
- **Code:** use `--pl-font-mono`. Three variants: `.pl-code` (code literals, subtle fill and border), `.pl-mono` (identifiers such as model IDs and field names, **no border**), and `.pl-endpoint-value` (primary card values such as Base URLs and call signatures, no border). **Cards provide the frame; values are content inside them.** Boxing every identifier would make the whole screen look like a collection of boxes.

## Data presentation rules (product rules, not just visual rules)

1. **Always make units clear.** Price columns show currency and unit price; repeated units may be stated in headers or notes. For example, a header may say “Input price,” a group note may say “Token prices per million,” and a cell may show `¥1.00`; **do not** show `¥1.0`.
2. **Show conditions with conditional prices** rather than presenting them as fixed prices. Render conditions in readable form, such as `usage.input_tokens < 32000`.
3. **Show unknown as “Undisclosed.”** Do not display “unlimited” or substitute `0`.
4. **Do not use color alone for status.** Every status badge includes text; tone changes only its colors.
5. **Display model counts separately from independent Capability counts.** Do not combine them into “N models.”
6. **Preserve original currencies.** Do not convert CNY and USD and display the converted values side by side as if both were original prices.

## Accessibility baseline

- Body contrast ≥ 4.5:1; secondary text and borders ≥ 3:1.
- Visible focus: `:focus-visible` outline of 2px with a 3px offset (3px consistently site-wide).
- Focus feedback has two forms: outline feedback (buttons and links) may appear instantly; glow feedback (inputs and search fields) must fade in/out using `--pl-duration-fast`. Transition only colors (`outline-color`, `border-color`, `box-shadow`). Do not transition the `outline` shorthand: its interpolation can begin at near-black `currentColor` and flash black.
- Every interactive element must be keyboard-accessible. Provide a “skip to main content” link.
- Respect `prefers-reduced-motion`; reduce motion duration to 0.01ms.
- **Respect `prefers-reduced-transparency`:** glass surfaces become opaque, otherwise text becomes blurry under the operating system's reduced-transparency setting.
- External links must use `rel="noopener noreferrer"` and `AppIcon name="external"` to mark off-site navigation.
- Tables scroll horizontally on narrow screens; do not squeeze columns until they are unreadable.
- On mobile, cards are single-column; Provider details use a bottom drawer or full-screen layout.

## Maintaining the `/design` page

`frontend/src/pages/design/DesignPage.vue` uses `getComputedStyle` to render **actual CSS variable values**, so token changes appear immediately and do not drift from implementation.

`/design` is a **development reference page**, excluded from production builds (the route is registered under `import.meta.env.DEV`; see `docs/guides/operations.md` §10.0.1). In development, open `http://127.0.0.1:5178/design` as usual.

The page has a sticky navigation column on the left and numbered sections on the right (palette / surfaces and glass / typography / spacing and radii / component previews / API area / developer handoff). Typography samples must use **real Chinese copy**, not token names; component previews must use the site's actual components rather than redraws.

When changing tokens, check:
1. Values exist for both light and dark themes.
2. All `/design` sections render correctly.
3. No hardcoded colors remain in component-level styles.
4. Contrast remains sufficient, especially secondary text and borders in dark mode.
5. **Scale limits remain satisfied:** color scales still have at most 3 steps and measurement scales at most 5.
6. Run the token-reference consistency check; undefined tokens silently fail in CSS.

## Prohibited practices

- Do not hardcode colors, font sizes, or spacing in components; use tokens.
- Do not communicate status or risk through color alone.
- Do not sacrifice data readability (contrast, units, precision) for appearance.
- Do not render “Undisclosed” as “Unsupported” or “Unlimited.”
- Do not add numeric color-scale levels or exceed 5 steps in a measurement scale.
- Do not copy Gugu-web's Glassmorphism style into this project.
