# ProviderList Design System

This is the full specification. `agentskills/design/SKILL.md` is the summary, and the `/design` page is its visual reference implementation.

---

## 1. Positioning and visual style

ProviderList is an **information-dense developer tool**, not a marketing site.

- Keywords: clear, restrained, trustworthy, dense but comfortable to scan.
- Avoid gradients, illustrative hero art, marketing copy, spreading Provider brand colors to controls, and stacks of oversized rounded cards.
- Prioritize content. Use whitespace and borders to establish hierarchy. Keep high data density readable.

Unlike Gugu-web's glassmorphism and cool purple-gray product style, ProviderList uses a **neutral monochrome palette with restrained glass**. Do not copy styles between the products.

### Visual baseline

| Dimension | Choice |
|---|---|
| Canvas | Light `#f7f7f8` / dark `#131417` |
| Surface | Light white / dark `#1b1c20` |
| Accent | Neutral interface; hierarchy uses ink inversion (`--pl-bg-inverse`). Provider logos may retain brand colors. |
| Borders | Low contrast, 1px; hierarchy should come from surface and spacing rather than outlines. |
| Radius | 6 / 8 / 12 / 17px plus pill |
| Shadow | Low-contrast double layer, only on hover and floating surfaces |
| Glass | Translucent with `blur(22px) saturate(100%)`; only two strengths |
| Type | Inter plus system CJK fonts; monospace for code |

Glass is restrained, not neon:

- Use only regular and strong/opaque glass. More levels muddy stacked layers.
- Use glass only for interactive or tangible surfaces such as cards, popovers, and the top bar. Do not use glass on numbers, statistics, or tables.
- Respect `prefers-reduced-transparency`; make glass opaque when the system setting requests reduced transparency.

Status colors are the only chromatic colors in the interface: success, warning, danger, plus neutral. Classification labels such as Operation and model-type chips use neutral colors because they are not statuses.

## 2. Token system

### 2.0 Scale limits

These limits are requirements. Check them before adding tokens.

- Each color scale has at most 3 steps. Use semantic suffixes such as `-soft`, `-medium`, `-hard`, never numeric levels such as `-50` or `-900`.
- Each measurement scale (spacing, radius, font size, weight) has at most 5 steps, named with semantic terms such as `-xs`, `-sm`, `-md`, `-lg`, `-xl`.
- Semantic tokens represent roles, not scales: one value per role, not a family of shades.

Numeric scales encourage endless extra stops and leave teams arguing over what each number means. When a fourth gray is requested, the missing piece is usually a semantic role, not another primitive gray. Current primitives total 5 color scales × 3 steps = 15 raw color tokens; the previous system had 46.

### 2.1 Three layers

```text
primitive → semantic → component
```

Primitives are palettes and scales without usage meaning. Semantic tokens map primitives to roles such as surfaces, text, borders, status, and glass. Components consume semantic tokens.

```text
--pl-surface-soft → --pl-bg-surface → .pl-card
--pl-ink-hard     → --pl-bg-inverse → .pl-button-primary
```

Components must not redefine colors. Add a semantic token first when a new color role is needed.

### 2.2 Naming

```text
--pl-<category>-<meaning>-<variant>
```

Categories include `surface`, `ink`, `success`, `warning`, `danger`, `space`, `radius`, `text`, `font`, `weight`, `leading`, `duration`, `ease`, `z`, `layout`, `shadow`, and `chart`. Use semantic names, not numeric scale levels.

### 2.3 Token inventory

#### Primitive colors (three steps per scale)

| Scale | Soft | Medium | Hard |
|---|---|---|---|
| `--pl-surface-*` | `#ffffff` | `#f7f7f8` | `#ebebee` |
| `--pl-ink-*` | `#9a9aa0` | `#6c6e74` | `#191a1c` |
| `--pl-success-*` | Background tint | Icon/border | Text |
| `--pl-warning-*` | Background tint | Icon/border | Text |
| `--pl-danger-*` | Background tint | Icon/border | Text |

Dark theme reverses the neutral scale. Strong status colors become lighter to maintain text contrast.

#### Measurements (up to five steps per scale)

```text
Spacing  --pl-space-xs 4px   --pl-space-sm 8px   --pl-space-md 12px
         --pl-space-lg 16px  --pl-space-xl 32px
Radius   --pl-radius-xs 6px  --pl-radius-sm 8px  --pl-radius-md 12px
         --pl-radius-lg 17px --pl-radius-full 9999px
Type     --pl-text-xs 11px   --pl-text-sm 13px  --pl-text-md 16px
         --pl-text-lg 23px   --pl-text-xl 34px
Weight   --pl-weight-regular 400  --pl-weight-medium 500
         --pl-weight-semibold 600 --pl-weight-strong 660
         --pl-weight-bold 700
```

#### Semantic surface tokens

| Token | Use |
|---|---|
| `--pl-bg-canvas` | Page background |
| `--pl-bg-surface` | Cards, panels, popovers |
| `--pl-bg-subtle` | Secondary areas, table headers, hover surfaces, chips |
| `--pl-bg-tint` | Very subtle tint inside glass, such as endpoint cards |
| `--pl-bg-muted` | Weaker sections and code blocks |
| `--pl-bg-inverse` | Solid ink surface for primary buttons, brand marks, and official-access badges |
| `--pl-bg-overlay` | Modal overlay |

`--pl-bg-tint` is nearly invisible (3% light / 4% dark) and separates nested content on glass. `--pl-bg-subtle` is a solid gray surface for secondary areas outside glass. Solid gray blocks inside glass look dirty.

#### Semantic text tokens

Text levels are `--pl-text-primary`, `secondary`, `tertiary`, and `disabled`. Also use `--pl-text-inverse` on solid surfaces and `--pl-text-link` for links. Selection uses `--pl-selection-bg` and `--pl-selection-text`, with contrasting values in both themes.

#### Semantic borders and status

Borders progress from `--pl-border-subtle` (separators) to `--pl-border-strong` (emphasis) to `--pl-border-focus` (focus). Each status has a text, `-bg`, and `-border` token. Neutral covers unverified status and ordinary classification chips.

#### Price and glass tokens

`--pl-price-cache` distinguishes cache pricing and maps to the success scale by theme. `--pl-price-native` mutes an original-currency amount shown beside the converted display price. `--pl-price-cache-native` uses a muted green for the original-currency amount of a cache price. These tokens identify price presentation, not supply status.

Glass tokens: `--pl-glass-bg`, `--pl-glass-bg-strong`, `--pl-glass-border`, `--pl-glass-border-strong`, `--pl-glass-blur`, `--pl-glass-shadow`, and `--pl-glass-shadow-hover`.

`--pl-atmosphere` is a single soft light fixed at the bottom of the viewport. It provides a background for glass refraction and must not carry information.

### 2.4 Adding a token

1. Check whether an existing semantic token fits.
2. Check the scale limits. If a scale is full, add a semantic role instead of a fourth primitive color or sixth measurement stop.
3. Define the semantic token in `tokens.css` for both light and dark themes.
4. Consume it from components; do not hardcode its value in component styles.
5. Check the `/design` page and contrast.
6. If the token changes a public contract, update `docs/data/schema.md` too.

### 2.5 API component tokens

`--pl-api-*` is a component-level token group that keeps the API page's visual language consistent and prevents raw values from spreading through the view.

| Group | Tokens | Consumes |
|---|---|---|
| Panel | `--pl-api-panel-bg/-border/-radius/-padding` | Glass layer |
| Endpoint card | `--pl-api-card-bg/-border/-radius/-padding/-gap/-list-margin` | Surface layer |
| Path | `--pl-api-path-color/-size` | Text and type scale |
| Example response | `--pl-api-code-bg/-radius/-padding/-max-height` | Surface layer |
| Note | `--pl-api-note-border/-radius/-padding` | Border layer |

Component tokens consume semantic tokens and define no new colors, so light and dark themes share one component definition. These tokens are scoped to `styles/api.css`, not view-scoped styles, so the `/design` page can reuse the same endpoint cards. The `/design` page is a development reference and is excluded from production builds (see `docs/guides/operations.md`); still use it to verify token changes.

### 2.6 Checkbox component tokens

`.pl-checkbox` is the custom checkbox used by all filter controls; do not use native browser appearance. Size, radius, unchecked and checked states, checkmark color, and focus shadow are controlled by `--pl-checkbox-*` component tokens, which consume semantic colors and existing scales. The “Inputs and filters” sample and token handoff section on `/design` show the same token set.

### 2.7 Radio component tokens

`.pl-radio` is the custom radio control for mutually exclusive choices; do not use native browser appearance. Size, unchecked surface/border, selected dot size/color, selected border, and focus shadow are controlled by `--pl-radio-*`. The dot size depends only on selection and must not change on focus. The circular outline reuses `--pl-radius-full`. These tokens consume semantic colors and existing scales. The `/design` “Inputs and filters” sample and token handoff section show the same token set.

## 3. Component contracts

### 3.1 Buttons

```html
<button class="pl-button">Secondary</button>
<button class="pl-button pl-button-primary">Primary action</button>
<button class="pl-button pl-button-ghost">Ghost</button>
<button class="pl-button" disabled>Disabled</button>
```

Use `--pl-radius-md` and horizontal `--pl-space-lg` padding. Hover uses `--pl-control-bg-hover` and `--pl-border-strong`; active moves down 1px. Disabled uses `--pl-text-disabled`, `.7` opacity, and `not-allowed`. Icon-only buttons require `aria-label`.

Primary buttons use solid ink inversion (`--pl-bg-inverse`), not a color. Only one primary button is allowed per action group and at most one per page. Text buttons have a leading `AppIcon`; mark off-site links with `AppIcon name="external"`. Utility actions such as copying an ID use ghost buttons and do not participate in primary/secondary hierarchy.

### 3.2 Badges

```html
<span class="pl-badge pl-badge-success">Active</span>
```

There are five variants: `neutral`, `success`, `warning`, `danger`, and `inverse`. Neutral is for unverified status and ordinary classifications (model type, Operation). Success/warning/danger are for supply status. Inverse is the solid ink surface reserved for trust signals such as “Official integration”; ordinary labels must not use it.

Every status badge includes text; color is supplementary. `StatusBadge.vue` renders the status dot, label, and detail consistently.

### 3.3 Cards

```html
<div class="pl-card">Static card</div>
<a class="pl-card pl-card-interactive" href="/providers/example-ai">Navigation card</a>
```

Cards use strong glass, glass border, `--pl-radius-lg`, and glass shadow. Only cards that navigate to a Provider detail or secondary page use `.pl-card-interactive`; hover darkens the border, applies the hover shadow, and moves up 2px. Static information cards, panels, empty states, endpoint cards, and other non-navigation cards must not rise on hover. Separate content inside cards with whitespace and borders; do not nest glass surfaces.

### 3.4 Forms

```html
<label class="pl-label" for="x">Label</label>
<input id="x" class="pl-input" />
<SelectPopup id="y" v-model="value" :options="options" :aria-label="Label" />
```

Focus uses `--pl-border-focus` and `--pl-control-focus-shadow` (3px halo). Do not create an ad hoc `0 0 0 3px <surface color>` shadow; it is nearly invisible in dark mode. Transition both border color and shadow using `--pl-duration-fast`. Associate labels and controls using `for`/`id` or wrapping. Search controls are 44px high. Do not use native `<select>`; use `components/SelectPopup.vue` (§3.12).

### 3.5 Tables

Use `.pl-table-wrap` around `.pl-table`, with `<th scope="col">` headers. Headers use secondary text and `--pl-text-sm`; row separators use `--pl-border-subtle`. On narrow screens, scroll horizontally rather than squeezing columns. Reserve minimum width for price columns to prevent broken wrapping.

### 3.6 Code and data

Use three levels of monospace styling:

```html
<code class="pl-code">"3.00"</code> <!-- Literal: framed -->
<code class="pl-mono">example-chat-1</code> <!-- Identifier: unframed -->
<div class="pl-endpoint-value">https://api.example.com</div> <!-- Endpoint value -->
```

| Class | Use | Appearance |
|---|---|---|
| `.pl-code` | Actual literals such as `"3.00"`, `null`, and `"0"` | Monospace, muted surface, thin border |
| `.pl-mono` | Model IDs, field names, environment variables, JSON Pointers | Monospace, secondary text, no frame |
| `.pl-endpoint-value` | Base URLs, call signatures, path templates | Monospace, normal text, slightly larger, no frame |

A frame belongs to the card, not the value inside it. Do not wrap endpoint values in another code box. Identifiers are numerous; framing every one makes the page visually noisy. `.pl-code` uses `--pl-bg-muted` and `--pl-border-subtle`.

### 3.7 Status badge component

Use `components/StatusBadge.vue`:

```html
<StatusBadge label="Active" tone="success" detail="Last checked: 2026-10-23" />
```

`tone` matches `.pl-badge-*`. Do not draw separate status dots in pages.

### 3.8 Copy button

Use `components/CopyButton.vue` and `navigator.clipboard`. Show “Copied” or “Copy failed”; never fail silently. Return to the default state after two seconds.

- Text variant (default): visible label, for actions such as “Copy Base URL”; an optional leading icon can be set with `icon="copy"`.
- Icon variant (`variant="icon"`): for narrow positions such as the top-right of endpoint cards. It requires `aria-label` and a screen-reader-readable live region for status changes.

### 3.9 API area

`pages/api-docs/ApiDocsPage.vue` and `styles/api.css` use this structure: **one glass panel → endpoint cards → actions → examples → conventions**.

- Keep the page inside one `.api-panel` glass surface.
- Give every endpoint its own `.api-card`, with title/path on the left and a copy icon on the right. Do not turn the endpoints into one table.
- Endpoint cards use `--pl-api-card-bg` (`--pl-bg-tint`), not a solid gray surface.
- Primary actions use ink inversion; secondary actions use glass and a border. Both may have icons.
- Example responses use a soft monospace block. Notes use a thin border without a solid fill.

This page is the entry point for making requests, not the full manual. Use `/v1/manifest.json` for the complete inventory.

### 3.10 Capability cards

`pages/capabilities/CapabilitiesPage.vue` and `data/capabilities.ts` group independent service capabilities by capability type: one card per type, listing Providers that offer it. Do not flatten Provider × capability pairs into a ledger; this page is an index. Each card has a 37px rounded icon tile, type name, Provider count, and Provider navigation buttons.

There is no search on this page because the capability set is finite and easier to scan by type. Search belongs on the Provider directory and model-type index. Capability names come from `@providerlist/shared/capabilities`. Preserve unknown type values; type-to-icon mapping is presentation-only and stays in the UI.

### 3.11 Choosing glass strength

| Context | Glass | Shadow |
|---|---|---|
| Provider cards, drawers, and other floating foreground objects | `--pl-glass-bg-strong` | Yes |
| Capability cards, API panels, list items, and main page panels | `--pl-glass-bg` | No |

Both strengths may appear on the same screen to express hierarchy: strong glass is an object; regular glass is a surface. Do not nest glass surfaces.

### 3.12 Selectors and list popovers

Use `components/SelectPopup.vue` and `components/FlipChevron.vue`:

```html
<SelectPopup
  v-model="type"
  variant="compact"
  :label="t('Model type')"
  :options="[{ value: 'all', label: 'All' }]"
  :aria-label="t('Filter by model type')"
/>
```

| Variant | Context | Shape |
|---|---|---|
| `form` | Standalone form selector | Full-row control |
| `compact` | Filter bar chip | Label, value, and arrow in one trigger |
| `header` | Compact top-bar selector | Small glass control |

Anchor the popover to its trigger: align left edges and make it at least as wide as the trigger. Put a `compact` label inside the trigger via the `label` prop so the popover does not align to text inside the chip. Flip upward when there is not enough room below and keep it within the viewport. Teleport the popover to `body` and use `position: fixed` to avoid ancestor overflow clipping. Apply fixed positioning before measuring; otherwise it measures as a full-width block and may be pinned to the viewport edge.

Popovers are floating foreground objects: use strong glass and shadow. `FlipChevron` points right when closed and down when open (`direction="up-down"` reverses this). Its `em` size follows text size and needs no separate token. Keyboard support: Up/Down moves, Home/End goes to first/last, Enter selects, and Escape closes and restores trigger focus. The trigger is a button with `aria-haspopup="listbox"` and `aria-expanded`; the popover uses `role="listbox"`; items use `role="option"` and `aria-selected`.

### 3.13 Segmented controls

Use segmented controls for a few mutually exclusive choices such as theme selection:

```html
<div class="seg">
  <button class="selected">Light</button>
  <button>Dark</button>
</div>
```

Inner and outer radii must be concentric: outer radius equals inner radius plus track padding. This project uses pills (`--pl-radius-full`) for both, so the shape remains concentric at any height. The track has 4px padding and a 1px border; inner buttons split width with `flex: 1`. Selection uses a solid `--pl-bg-surface` and a very light shadow, not an outline. Text buttons have a leading `AppIcon`; use `AppIcon name="external"` for off-site links.

## 4. Data presentation rules

These are product rules and review requirements, not visual preferences.

### 4.1 Always show units

```text
Good: “Input price” header + “Token prices are per million” + cell `¥1.00`
Bad:  cell `¥1.00` without a unit
Bad:  `¥1`
```

Use `formatRule()` for complete formatting. Shared units can live in the table header rather than repeating in every row. A billing unit belongs to an individual rate; do not assume the whole rate table is priced per million tokens.

### 4.2 Show conditions with conditional prices

```text
¥3.00 / million input tokens · ¥14.00 / million output tokens
Conditions: usage.input_tokens < 32000 and usage.output_tokens ≥ 200
```

Do not display noise such as “Conditions: unconditional” for unconditional rules; use `isUnconditional()`.

### 4.3 Unknown means unknown

- Undisclosed limits: “Undisclosed”.
- Undisclosed availability: “Status unverified”.
- Do not display “Unlimited”, “Unsupported”, or “Free” without evidence.

### 4.4 Status is not color alone

| State | Label | Tone |
|---|---|---|
| Active supply | Active | success |
| Restricted Offering status | Restricted | warning |
| Deprecating | Deprecating | warning |
| Retired | Retired | danger |
| Unverified | Status unverified | neutral |

### 4.5 Separate model and capability counts

Say “4 current supply items; model and independent capability counts are separate.” Independent Service Capabilities do not count as model supply.

### 4.6 Preserve original currencies

Do not convert CNY and USD into a single side-by-side value. A comparison view must state the exchange-rate source and date.

## 5. Layout

### 5.1 Page skeleton

```text
Header (sticky floating glass bar, 64px) → Main (flex: 1) → Footer
```

The header floats with whitespace around it: `top: var(--pl-topbar-offset)` (12px), `--pl-radius-xl`, strong glass, and `backdrop-filter: var(--pl-glass-blur)`. A bar flush to the edges crowds content. The container uses `--pl-layout-max` (1480px) and `--pl-layout-gutter` (30px). Keep the page title area under one viewport with `.pl-content-head` (title, count, and right-side scope); do not add a large hero.

### 5.2 Spacing

Use `--pl-space-xl` (32px) between sections, `--pl-space-sm` through `--pl-space-lg` between page elements, and `--pl-space-lg` (16px) for card padding. Use separators rather than glass tiles for small sets of statistics; four numbers do not need four glass surfaces.

### 5.3 Responsive behavior

| Width | Layout |
|---|---|
| > 1000px | Three-column card grid: `repeat(3, minmax(0, 1fr))` |
| ≤ 1000px | Two columns |
| ≤ 650px | One column; container padding becomes `--pl-space-lg`; hide secondary information |

### 5.4 Filter bar

The Provider directory uses a compact filter bar (`.pl-filterbar` and `.pl-compact-select`) rather than full-row controls. Show “Clear filters” when any filter changes.

## 6. Accessibility

### 6.1 Baseline

- Body contrast ≥ 4.5:1; secondary text, large text, and borders ≥ 3:1.
- Visible `:focus-visible`: 2px `--pl-border-focus` outline with 3px offset. Keep the 3px offset consistent site-wide.
- Use two distinct focus treatments: outline for borderless controls (instant appearance is fine); border color plus a halo for bordered controls (fade using `--pl-duration-fast`).
- Transition focus colors only (`outline-color`, `border-color`, `box-shadow`); do not transition the `outline` shorthand. Define a transparent resting outline when transitioning `outline-color`, or interpolation may flash near-black `currentColor`.
- All interactive elements must support keyboard input.
- Provide a skip-to-main-content link (`.skip-link`) that slides into view on focus.
- Respect `prefers-reduced-motion` by reducing motion duration to 0.01ms.
- Give icon-only buttons an `aria-label`; mark decorative elements `aria-hidden="true"`.
- Table headers use `<th scope="col">`; form controls have associated labels.

### 6.2 Information beyond color

Show status as color plus text and an icon/dot. Show risk level as color plus text. Show expiration, unknown, and conflict as color plus text; never rely on color alone.

### 6.3 Motion

| Context | Duration | Easing |
|---|---|---|
| Status change | `--pl-duration-instant` (80ms) | standard |
| Hover / active | `--pl-duration-fast` (140ms) | standard |
| Focus fade | `--pl-duration-fast` (140ms) | standard |
| Panel expansion | `--pl-duration-base` (220ms) | standard |
| Modal / page transition | `--pl-duration-slow` (360ms) | out |

Focus uses the fast duration: instant is abrupt and base is too slow.

### 6.4 External links

Use `target="_blank" rel="noopener noreferrer"` and mark off-site navigation with `AppIcon name="external"`.

## 7. Theme switching

```js
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('pl-theme', 'dark');
```

Store the theme in `localStorage` and apply it from `App.vue` in `onMounted`. Theme switching changes semantic tokens only; primitives stay the same. Components generally do not need `[data-theme='dark']` selectors. The `/design` page has its own light/dark switch for comparison.

## 8. Maintaining the `/design` page

`frontend/src/pages/design/DesignPage.vue` reads live CSS variables:

```js
function readToken(token: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}
```

Read actual variables instead of maintaining a hardcoded copy so the page stays in sync with implementation.

### 8.1 Page structure

The page has a sticky left navigation and six numbered sections:

| # | Section | Contents |
|---|---|---|
| 01 | Palette | Six neutral swatches, nine status swatches, twelve semantic roles; click a swatch to copy its CSS declaration |
| 02 | Surfaces and glass | Three surface stages, each with a demo card to show glass layering |
| 03 | Typography | Five sizes using real Chinese examples (not token names), five weights, and readability rules |
| 04 | Spacing and radius | Five-step spacing and radius rulers, plus border, shadow, and motion guidance |
| 05 | Component previews | Real site components such as `ProviderCard` and `StatusBadge`, not redrawn replicas |
| 06 | Developer handoff | Full semantic CSS variable list with one-click copy |

Use real Chinese copy for typography samples: token names prove only that a size exists, while Chinese copy shows how it reads in context.

### 8.2 Token-change checklist

1. Both light and dark values are defined.
2. All `/design` sections render correctly.
3. No hardcoded component-level colors remain.
4. Contrast passes.
5. Scale limits remain intact: at most three color steps and five measurement steps.

### 8.3 Check token references

After renaming or adding/removing tokens, check for undefined references. A missing CSS variable fails silently and falls back to inherited values, making the issue hard to spot visually:

```bash
# Referenced but undefined / defined but unused
grep -rhoE 'var\(--pl-[a-z0-9-]+' frontend/src | sort -u
```

For more than about 20 replacements, use a script. Replace longer token names first; otherwise `--pl-space-1` can match the prefix of `--pl-space-12`. Replacement must be single-pass so replacement text is not matched again (for example, `--pl-text-xl` → `--pl-text-lg` must not then become `--pl-text-md`).
