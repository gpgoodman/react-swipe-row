# react-swipe-row

A native-feeling horizontal “card rail” for React — momentum scrolling + scroll-snap alignment, with optional desktop paging controls.

This was built to solve a common UI problem: you want a horizontally scrollable row of arbitrary content (cards, tiles, chips, etc.) where the number and size of items is unknown, and you don’t want a “slide-based carousel” that feels artificial or forces layout math.

`react-swipe-row` is intentionally **unopinionated**:
- You provide the content (any React nodes)
- The row scrolls naturally (trackpad, mousewheel, touch)
- Scroll-snap keeps items aligned
- Optional left/right controls appear automatically on “desktop-like” pointers
- Control styling (buttons) and item spacing are exposed via props (no need to target internal DOM or CSS)

---

## Install

```bash
npm install react-swipe-row
# or
pnpm add react-swipe-row
# or
yarn add react-swipe-row
