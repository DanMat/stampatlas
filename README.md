# Stamp Atlas

The public site for a decades-in-the-making stamp collection — a small, fast, read-only
web app that presents the collection as a **living historical atlas** rather than an
inventory. Every stamp is a small window onto a place, a person, a year the world thought
worth remembering.

It is a single Cloudflare **Worker** serving a **materialised, public-safe projection**
from **R2**: no database a crawler can wake, just a few kilobytes of honest facts behind
the edge.

## Layout

- `src/worker.ts` — two routes: `/api/public.json` (served from R2, with a bundled
  fallback) and `/` (the page).
- `src/page.ts` — the page. Metrics are shown as honest **confirmed / candidate /
  unknown** triples (an unexamined page is never quietly counted as empty); the album
  shelf shows position occupancy; "coming as identification runs" cards name what is not
  known yet; and the fields deliberately withheld are listed rather than hidden.
- `public/public.json` — the projection the page renders. **Public-safe by construction**:
  aggregate facts only — no imagery of the collection, no prices, no locations.

## Develop

```bash
npm install
npm run dev        # wrangler dev, serving the bundled projection locally
```

## Deploy

```bash
npm run upload-projection   # put the current public.json into R2
npm run deploy              # deploy the Worker
```

The custom domain and R2 binding are configured in `wrangler.toml`.

## Design

Fraunces for display, Inter for text, on a warm parchment palette with a perforated stamp
motif and a struck postmark. The page is built to read well from its facts alone —
imagery only ever enriches a composition that already stands, and any illustration is
original, rights-cleared art, never a reproduction of a copyrighted stamp.
