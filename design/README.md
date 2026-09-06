# Editing the Stamp Atlas page

The public page is **authored as plain HTML** in [`page.src.html`](./page.src.html) and
**generated into** [`../src/page.ts`](../src/page.ts), which the Worker imports and serves.
`src/page.ts` is a build artifact — do not hand-edit it.

## Why a generator

The Worker serves the page as one string (`export const PAGE = \`…\``). Embedding a full
HTML document that itself contains backticks and `${…}` inside a JS template literal needs
escaping. [`../scripts/to-page-ts.py`](../scripts/to-page-ts.py) does that deterministically
(escapes `\`, then `` ` ``, then `${`), so you never hand-escape and can't introduce a syntax
error.

## The loop

```bash
# 1. edit the readable source
$EDITOR design/page.src.html

# 2. regenerate src/page.ts
npm run build:page

# 3. deploy (uploads the Worker + the plate assets in public/assets)
npx wrangler deploy
```

## How the page works

- It is a **single self-contained document**: inline CSS/JS, Google Fonts only, no framework.
- On load it does `fetch('/api/public.json')` and renders **only** that projection —
  honest confirmed/candidate/unknown tiles, `pending` shown as promises, `withheld` shown as
  deliberately-private. **Never** put fabricated philatelic data in the page; if a number
  isn't in the projection, the page says "awaiting the archive".
- Chapters are grouped into five **Parts** with a grouped Contents and a searchable **Index**
  (the gazetteer) built from the projection, so it scales as data arrives.
- The scroll-reveal animation is deliberately gated to top-level pages
  (`:root.anim` + `window.self===window.top`) so the page stays fully visible inside preview
  iframes. Keep that gating.

## Plate artwork

The engraved plates in `public/assets/plate-*.jpg` are original AI art (no real stamp
imagery, ever), generated via Cloudflare Workers AI (Flux) through the `coin-artgen` worker.
Regenerate with a `POST {"prompt":"…"}` to that endpoint; keep prompts free of text/lettering
and never depict a real stamp.
