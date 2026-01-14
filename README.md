![npm](https://img.shields.io/npm/v/@goodmanlabs/react-swipe-row)
![CI](https://github.com/gpgoodman/react-swipe-row/actions/workflows/ci.yml/badge.svg)
![license](https://img.shields.io/npm/l/@goodmanlabs/react-swipe-row)

# react-swipe-row

A native-feeling horizontal “card rail” for React — momentum scrolling + scroll-snap alignment, with optional desktop paging controls.

This was built to solve a common UI problem: you want a horizontally scrollable row of arbitrary content (cards, tiles, chips, etc.) where the number and size of items is unknown, and you don’t want a “slide-based carousel” that feels artificial or forces layout math.

`react-swipe-row` is intentionally **unopinionated**:
- You provide the content (any React nodes)
- The row scrolls naturally (trackpad, mousewheel, touch)
- Scroll-snap keeps items aligned
- Optional left/right controls appear automatically on “desktop-like” pointers
- Control styling (buttons) and item spacing are exposed via props (no need to target internal DOM or CSS)

> *Written in TypeScript and ships with types; works in both TypeScript and plain JavaScript projects.*

---

## Install

```bash
npm install @goodmanlabs/react-swipe-row
# or
pnpm add @goodmanlabs/react-swipe-row
# or
yarn add @goodmanlabs/react-swipe-row
```

## Usage

```tsx
import SwipeRow from '@goodmanlabs/react-swipe-row';
import '@goodmanlabs/react-swipe-row/style.css';

export default function Example() {
  return (
    <SwipeRow>
      <div className="card">One</div>
      <div className="card">Two</div>
      <div className="card">Three</div>
    </SwipeRow>
  );
}
```
> Note: *You must import the provided CSS for base layout, snapping behavior, and default control styling.
For Next.js users, (App Router): import this CSS in app/layout.(js|tsx) (or your global stylesheet) per Next’s global CSS rules.*

## Framework notes

This component uses React hooks. In Next.js App Router, it’s treated as a client component automatically—no extra "use client" wrapper is needed to consume it. In non-Next React apps (Vite, CRA, Remix, etc.), this has no special impact; it behaves like a normal React component.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `React.ReactNode[]` | — | Optional array of React nodes to render. If provided, it takes precedence over `children`. |
| `children` | `React.ReactNode` | — | Content to render if `items` is not provided. |
| `ariaLabel` | `string` | `"Scrollable content"` | Accessible label for the scroll region (`role="region"`). |
| `snap` | `boolean` | `true` | Enables/disables scroll-snap behavior (applies `rsr-snap` + `rsr-snap-item`). |
| `pageFactor` | `number` | `0.9` | How far the controls and keyboard paging move, as a fraction of the scroller’s `clientWidth`. |
| `showControls` | `"auto" \| "always" \| "never"` | `"auto"` | `auto` shows controls only on “desktop-like” pointers (`(hover: hover) and (pointer: fine)`), `always` forces them on, `never` hides them. |
| `id` | `string` | auto-generated | Optional stable id used for `aria-controls`. If omitted, a React `useId()` value is used. |
| `className` | `string` | — | Extra class(es) applied to the outer wrapper (`rsr-root`). |
| `gapClassName` | `string` | — | Optional spacing hook applied to the scroller (e.g. Tailwind `gap-*`, or any consumer-defined class). |
| `classNames` | `SwipeRowClassNames` | — | Optional granular class hooks for styling without targeting internals. |
| `scrollerStyle` | `React.CSSProperties` | — | Inline style passthrough for the scroller. Merged after defaults (so it can override). |

### `SwipeRowClassNames`

```ts
type SwipeRowClassNames = {
  root?: string;          // outer wrapper
  scroller?: string;      // the horizontal scroller element
  item?: string;          // wrapper around each item (snap target)
  controlButton?: string; // shared class for both buttons
  prevButton?: string;    // prev button
  nextButton?: string;    // next button
};
```
### `Styling controls (buttons)`

SwipeRow ships with neutral default button styles.

- If you provide any of classNames.controlButton, classNames.prevButton, or classNames.nextButton, the default button styling is automatically disabled so your classes take full control (no !important needed).
- Use prevButton / nextButton for positioning (e.g. left-2, right-2) and controlButton for shared button styling.

## Accessibility & Behavior

- The scroll container is keyboard-focusable and supports left/right arrow key paging.
- Paging controls use semantic `<button>` elements with accessible labels.
- Scroll behavior relies on native browser momentum scrolling and `scroll-snap`, not JavaScript-driven carousels.
- On touch-first devices, paging controls are hidden by default to avoid interfering with native gestures.

## License

MIT © Glenn Goodman



