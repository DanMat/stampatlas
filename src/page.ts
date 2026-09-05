/** Stamp Atlas — the public story page. Self-contained; fetches /api/public.json and renders it. */
export const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Stamp Atlas</title>
<meta name="description" content="A lifetime's stamp collection, told as an atlas — every stamp a small window onto a place, a person, a year the world thought worth remembering. Being charted, one page at a time." />
<meta property="og:title" content="Stamp Atlas" />
<meta property="og:description" content="Every stamp is a small window — onto a place, a person, a year. One lifetime's collection, being charted into an atlas." />
<meta property="og:image" content="https://stampatlas.danmat.dev/assets/hero.jpg" />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#efe6d3" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#110f0b" media="(prefers-color-scheme: dark)" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400..600,0..100,0..1;1,9..144,400..600,0..100,0..1&family=Inter:opsz,wght@14..32,400..600&display=swap" rel="stylesheet" />
<style>
  /* ============================================================
     Tokens. Parchment by day, a lamplit reading room by night.
     ============================================================ */
  :root {
    --paper:#efe6d3; --paper-deep:#e3d6ba; --panel:#f9f4e8; --mat:#fdfaf3;
    --ink:#231e15; --ink-2:#4a4133; --muted:#74684f; --line:#d8caa9; --hair:#c6b78f;
    --crimson:#962b20; --sea:#2b5859; --gold:#9a7727; --uncharted:#a4967a;
    --lamp:rgba(255,252,240,.7);
    --grid:color-mix(in srgb, var(--line) 62%, transparent);
    --shadow:0 1px 2px rgba(36,31,22,.06), 0 10px 32px rgba(36,31,22,.09);
    --shadow-lift:0 2px 4px rgba(36,31,22,.08), 0 18px 44px rgba(36,31,22,.14);
    --ease:cubic-bezier(.2,.7,.2,1);
    --gutter:clamp(1.1rem,4vw,2.4rem);
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --paper:#110f0b; --paper-deep:#0b0907; --panel:#1a1712; --mat:#efe6d3;
      --ink:#ede5d3; --ink-2:#cfc3a9; --muted:#a0927a; --line:#2e2820; --hair:#443a2a;
      --crimson:#d97f62; --sea:#86b6b4; --gold:#d0ab58; --uncharted:#7a6e57;
      --lamp:rgba(214,160,80,.13);
      --grid:color-mix(in srgb, var(--line) 55%, transparent);
      --shadow:0 1px 2px rgba(0,0,0,.35), 0 12px 36px rgba(0,0,0,.5);
      --shadow-lift:0 2px 4px rgba(0,0,0,.4), 0 22px 54px rgba(0,0,0,.6);
      color-scheme: dark;
    }
  }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; -webkit-text-size-adjust:100%; }
  body {
    margin:0; background-color:var(--paper); color:var(--ink); overflow-x:clip;
    font:400 17px/1.65 "Inter", ui-sans-serif, system-ui, sans-serif;
    font-feature-settings:"cv11","ss01";
    /* paper grain, a lamp at the top of the page, and a cartographic graticule fading toward the horizon */
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feColorMatrix values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 .55'/></filter><rect width='180' height='180' filter='url(%23g)'/></svg>"),
      radial-gradient(90% 46% at 50% -8%, var(--lamp), transparent 70%),
      radial-gradient(120% 70% at 50% 0%, transparent 35%, var(--paper) 100%),
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 180px 180px, 100% 100%, 100% 100%, 64px 64px, 64px 64px;
    background-position: 0 0, 0 0, 0 0, -1px -1px, -1px -1px;
    background-attachment: scroll, fixed, fixed, scroll, scroll;
    background-blend-mode: soft-light, normal, normal, normal, normal;
  }
  .wrap { max-width:1040px; margin:0 auto; padding:var(--gutter); }
  a { color:var(--crimson); text-decoration:none; }
  a:hover { text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:1px; }
  h1,h2,h3 { font-family:"Fraunces", Georgia, serif; font-weight:600; line-height:1.06; letter-spacing:-.018em; margin:0; text-wrap:balance; }
  h1 { font-variation-settings:"opsz" 144, "SOFT" 20; }
  em { font-variation-settings:"WONK" 1; }
  .serif { font-family:"Fraunces", Georgia, serif; }
  .caps { font-family:"Inter",sans-serif; font-size:.72rem; letter-spacing:.18em; text-transform:uppercase; font-weight:600; }
  ::selection { background:color-mix(in srgb, var(--gold) 35%, transparent); }
  :focus-visible { outline:2px solid var(--crimson); outline-offset:3px; border-radius:3px; }

  /* the perforation mask (the stamp edge) — used on the logo mark */
  :root { --perf: radial-gradient(circle closest-side at 50% 50%, #0000 97%, #000) 0 0 / 10px 10px; }

  /* ============================================================
     Top bar
     ============================================================ */
  nav.bar { display:flex; align-items:center; justify-content:space-between; gap:1rem;
    padding:.8rem var(--gutter); border-bottom:1px solid var(--line);
    position:sticky; top:0; z-index:10; background:color-mix(in srgb, var(--paper) 84%, transparent);
    backdrop-filter:blur(12px) saturate(1.15); -webkit-backdrop-filter:blur(12px) saturate(1.15); }
  .logo { font-family:"Fraunces",serif; font-weight:600; font-size:1.15rem; color:var(--ink); display:flex; align-items:center; gap:.6rem; white-space:nowrap; flex:none; }
  .logo:hover { text-decoration:none; }
  .logo .mark { width:22px; height:26px; border-radius:3px; background:var(--crimson);
    -webkit-mask:var(--perf); mask:var(--perf); flex:none; }
  .crumbs { flex:1; display:flex; align-items:center; gap:.55rem; min-width:0; overflow:hidden;
    font-family:"Inter",sans-serif; font-size:.72rem; letter-spacing:.06em; color:var(--muted); white-space:nowrap; }
  .crumbs:empty { display:none; }
  .crumbs .rn { font-family:"Fraunces",serif; font-style:italic; font-weight:500; letter-spacing:0; color:var(--gold); font-size:.9rem; }
  .crumbs .sep { color:var(--hair); }
  .crumbs b { color:var(--ink-2); font-weight:500; overflow:hidden; text-overflow:ellipsis; }
  @media (max-width:900px){ .crumbs { display:none; } }
  .navlinks { display:flex; gap:clamp(.8rem,2.2vw,1.4rem); margin-left:auto; font-family:"Inter",sans-serif; font-size:.76rem; letter-spacing:.1em; text-transform:uppercase; font-weight:500; }
  .navlinks a { color:var(--muted); padding-bottom:3px; border-bottom:2px solid transparent; white-space:nowrap; flex:none;
    transition:color .2s var(--ease), border-color .2s var(--ease); }
  .navlinks a:hover { color:var(--ink); text-decoration:none; }
  .navlinks a.on { color:var(--ink); border-bottom-color:var(--crimson); }
  @media (max-width:560px){ .navlinks { gap:.8rem; font-size:.66rem; letter-spacing:.08em; } .logo span.word { display:none; } }

  /* view transitions: walking deeper slides in from the right; walking back, from the left */
  #view > * { animation:rise .55s var(--ease) both; }
  #view[data-dir="deeper"] > * { animation-name:rise-deeper; }
  #view[data-dir="back"] > * { animation-name:rise-back; }
  @keyframes rise { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
  @keyframes rise-deeper { from { opacity:0; transform:translate(22px,6px); } to { opacity:1; transform:none; } }
  @keyframes rise-back { from { opacity:0; transform:translate(-22px,6px); } to { opacity:1; transform:none; } }
  @media (prefers-reduced-motion: reduce) { #view > * { animation:none !important; } html { scroll-behavior:auto; } }

  /* ============================================================
     The mat — a mounted stamp, perforated on all four sides.
     ============================================================ */
  .mat { background:var(--mat); padding:14px 14px 30px; box-shadow:var(--shadow); position:relative; }
  .mat img { outline:1px solid rgba(36,31,22,.14); outline-offset:-1px; }
  .mat::before, .mat::after, .mat > .pl, .mat > .pr { content:""; position:absolute; pointer-events:none; }
  .mat::before, .mat::after { left:0; right:0; height:12px;
    background:radial-gradient(circle closest-side, var(--paper) 74%, #0000 76%) 0 0 / 16px 12px repeat-x; }
  .mat::before { top:-6px; } .mat::after { bottom:-6px; }
  .mat > .pl, .mat > .pr { top:0; bottom:0; width:12px;
    background:radial-gradient(circle closest-side, var(--paper) 74%, #0000 76%) 0 0 / 12px 16px repeat-y; }
  .mat > .pl { left:-6px; } .mat > .pr { right:-6px; }
  .mat .cap { position:absolute; left:14px; right:14px; bottom:9px; text-align:center; font-family:"Fraunces",serif; font-style:italic;
    font-size:.78rem; color:#6f634c; letter-spacing:.02em; }

  /* ============================================================
     Hero
     ============================================================ */
  .hero { display:grid; grid-template-columns:1.05fr .95fr; gap:clamp(1.6rem,5vw,3.6rem); align-items:center; margin:clamp(1.6rem,5vw,3.4rem) 0 clamp(2.4rem,6vw,4rem); }
  @media (max-width:760px){ .hero { grid-template-columns:1fr; } .hero .heroimg { order:-1; max-width:420px; margin:1.4rem auto 0; } }
  .kicker { font-family:"Inter",sans-serif; font-size:.74rem; letter-spacing:.24em; text-transform:uppercase; color:var(--crimson); font-weight:600; display:flex; align-items:center; gap:.7rem; }
  .kicker::before { content:""; width:1.6rem; height:1px; background:var(--crimson); flex:none; }
  .hero h1 { font-size:clamp(2.7rem,7.6vw,4.9rem); margin:.7rem 0 .5rem; font-weight:500; }
  .hero h1 em { font-style:italic; font-weight:400; color:var(--sea); font-variation-settings:"opsz" 144, "SOFT" 20, "WONK" 1; }
  .hero .lede { font-family:"Fraunces",serif; font-size:clamp(1.15rem,2.2vw,1.35rem); line-height:1.5; color:var(--ink-2); max-width:44ch; margin:.6rem 0 1.7rem; text-wrap:pretty; }
  .ctas { display:flex; flex-wrap:wrap; gap:.7rem; align-items:center; }
  .heroimg { position:relative; }
  .heroimg img { width:100%; aspect-ratio:1/1; object-fit:cover; display:block; background:var(--panel); }
  /* the postmark: a circular date stamp with its wavy killer lines, struck across the corner */
  .postmark { position:absolute; width:clamp(150px,34%,210px); right:-8%; top:-7%; color:var(--crimson); transform:rotate(-8deg); pointer-events:none;
    filter:drop-shadow(0 1px 0 rgba(255,255,255,.25)); opacity:.94; mix-blend-mode:multiply; }
  @media (prefers-color-scheme: dark) { .postmark { mix-blend-mode:normal; opacity:.92; } }
  .postmark circle, .postmark path { fill:none; stroke:currentColor; stroke-linecap:round; }
  .postmark .ring { font-family:"Inter",sans-serif; font-size:9.5px; font-weight:600; letter-spacing:2.2px; fill:currentColor; }
  .postmark .date { font-family:"Fraunces",serif; font-size:11.5px; font-weight:600; letter-spacing:.4px; fill:currentColor; }
  .cta { display:inline-flex; gap:.6rem; align-items:center; background:var(--crimson); color:#fff;
    padding:.8rem 1.25rem; border-radius:8px; font-family:"Inter",sans-serif; font-weight:600; font-size:.93rem;
    box-shadow:0 1px 0 rgba(0,0,0,.08); transition:transform .2s var(--ease), filter .2s var(--ease); }
  .cta:hover { text-decoration:none; filter:brightness(1.07); transform:translateY(-1px); }
  .cta.ghost { background:transparent; color:var(--ink); border:1px solid var(--hair); box-shadow:none; }
  .cta.ghost:hover { border-color:var(--ink); }
  .asof-inline { margin:1.3rem 0 0; font-family:"Inter",sans-serif; font-size:.78rem; color:var(--muted); letter-spacing:.02em; }

  /* ============================================================
     Section furniture
     ============================================================ */
  .sec-label { font-family:"Inter",sans-serif; font-size:.72rem; letter-spacing:.2em; text-transform:uppercase;
    color:var(--muted); margin:3.4rem 0 1.1rem; display:flex; align-items:center; gap:.9rem; font-weight:600; }
  .sec-label::after { content:""; flex:1; height:1px; background:var(--line); }
  .sec-label .rn { font-family:"Fraunces",serif; font-style:italic; font-weight:500; letter-spacing:0; text-transform:none; font-size:1rem; color:var(--gold); }
  .prose { max-width:64ch; text-wrap:pretty; }
  .prose p { margin:0 0 1rem; }
  .big { font-family:"Fraunces",serif; font-size:clamp(1.4rem,3.2vw,1.95rem); line-height:1.34; color:var(--ink); font-weight:400; letter-spacing:-.005em; }
  .big strong { font-weight:600; }
  .room { font-family:"Inter",sans-serif; font-size:.72rem; letter-spacing:.2em; text-transform:uppercase; color:var(--muted); font-weight:600; margin-top:1.8rem; display:flex; gap:.7rem; align-items:baseline; flex-wrap:wrap; }
  .room .rn { font-family:"Fraunces",serif; font-style:italic; font-weight:500; letter-spacing:0; text-transform:none; font-size:1.1rem; color:var(--gold); }
  .title { font-size:clamp(2.1rem,6vw,3.4rem); margin:.35rem 0 .7rem; font-weight:500; }
  .backlink { font-family:"Inter",sans-serif; font-size:.8rem; letter-spacing:.06em; color:var(--muted); }
  .backlink:hover { color:var(--crimson); }
  .muted { color:var(--muted); } .empty-note { color:var(--muted); font-style:italic; font-family:"Fraunces",serif; }
  .ledger-line { font-family:"Inter",sans-serif; font-size:.78rem; letter-spacing:.04em; color:var(--muted); margin:1.4rem 0 1rem; }

  /* the trail — where you are on the route through the exhibit */
  .trail { list-style:none; margin:1.7rem 0 0; padding:0; display:flex; flex-wrap:wrap; align-items:center; row-gap:.55rem;
    font-family:"Inter",sans-serif; font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; font-weight:600; color:var(--muted); }
  .trail li { display:flex; align-items:center; }
  .trail li + li::before { content:""; width:clamp(.9rem,3.5vw,2.4rem); height:1px; background:var(--hair); margin:0 .65rem; }
  .trail .stop { display:inline-flex; align-items:center; gap:.5rem; color:inherit; }
  .trail a.stop:hover { text-decoration:none; color:var(--ink); }
  .trail .stop::before { content:""; width:7px; height:7px; border-radius:50%; border:1.5px solid currentColor; flex:none; }
  .trail i { font-style:italic; font-family:"Fraunces",serif; font-size:.95rem; letter-spacing:0; text-transform:none; font-weight:500; color:var(--gold); }
  .trail .done { color:var(--ink-2); }
  .trail .done .stop::before { background:currentColor; opacity:.55; }
  .trail .here { color:var(--crimson); }
  .trail .here i { color:var(--crimson); }
  .trail .here .stop::before { background:currentColor; box-shadow:0 0 0 3px color-mix(in srgb, var(--crimson) 22%, transparent); }
  .trail .ahead { color:var(--uncharted); }

  /* ============================================================
     The three windows — why a stranger should care
     ============================================================ */
  .windows { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:1.4rem; }
  @media (max-width:760px){ .windows { grid-template-columns:1fr; } }
  .window { background:var(--panel); border:1px solid var(--line); border-radius:12px; padding:1.5rem 1.4rem 1.6rem; box-shadow:var(--shadow); position:relative; overflow:hidden; }
  .window::before { content:attr(data-n); position:absolute; right:.9rem; top:.3rem; font-family:"Fraunces",serif; font-style:italic; font-size:3.6rem; line-height:1; color:color-mix(in srgb, var(--gold) 24%, transparent); font-weight:400; }
  .window h3 { font-size:1.5rem; margin:0 0 .55rem; font-weight:500; }
  .window h3 em { font-style:italic; color:var(--sea); }
  .window p { margin:0; font-size:.95rem; color:var(--ink-2); text-wrap:pretty; }

  /* ============================================================
     The survey — one honest number, then the ledger
     ============================================================ */
  .survey { display:grid; grid-template-columns:auto 1fr; gap:clamp(1.2rem,4vw,2.6rem); align-items:center; padding:1.6rem 1.8rem; margin-bottom:1rem;
    border:1px solid var(--line); border-radius:14px; box-shadow:var(--shadow);
    background:linear-gradient(135deg, var(--panel), color-mix(in srgb, var(--panel) 78%, var(--paper-deep))); }
  @media (max-width:620px){ .survey { grid-template-columns:1fr; } }
  .survey .pct { font-family:"Fraunces",serif; font-size:clamp(3.6rem,9vw,5.6rem); font-weight:500; line-height:.9; letter-spacing:-.03em; font-variant-numeric:tabular-nums; color:var(--sea); }
  .survey .pct.zero { color:var(--uncharted); }
  .survey .pct small { font-size:.42em; color:var(--muted); font-weight:400; margin-left:.04em; }
  .survey .pk { font-family:"Inter",sans-serif; font-size:.68rem; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); font-weight:600; margin-top:.6rem; }
  .survey p { margin:0; font-family:"Fraunces",serif; font-size:clamp(1.08rem,2.1vw,1.3rem); line-height:1.45; color:var(--ink-2); text-wrap:pretty; }
  .survey p strong { color:var(--ink); font-weight:600; }
  .survey .bar { height:6px; margin-top:1rem; }

  /* curiosities — playful, honest statistics derived from the projection, each gated to what is known */
  .curios { display:grid; grid-template-columns:repeat(auto-fit,minmax(248px,1fr)); gap:1rem; margin:.2rem 0 1rem; }
  .curio { background:var(--panel); border:1px solid var(--line); border-radius:12px; padding:1.3rem 1.4rem; box-shadow:var(--shadow); }
  .curio .big { font-family:"Fraunces",serif; font-size:clamp(1.9rem,4.6vw,2.6rem); font-weight:500; line-height:1; letter-spacing:-.02em; color:var(--sea); font-variant-numeric:tabular-nums; }
  .curio .big small { font-size:.36em; color:var(--muted); font-weight:400; letter-spacing:.02em; margin-left:.15em; }
  .curio p { margin:.7rem 0 0; font-family:"Fraunces",serif; font-size:1rem; line-height:1.45; color:var(--ink-2); text-wrap:pretty; }
  .curio p b { color:var(--ink); font-weight:600; }
  .curios-empty { font-family:"Fraunces",serif; font-size:1.05rem; line-height:1.5; color:var(--muted); max-width:52ch; margin:.2rem 0 1rem; text-wrap:pretty; }
  .stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1px; background:var(--line);
    border:1px solid var(--line); border-radius:12px; overflow:hidden; box-shadow:var(--shadow); }
  .stat { background:var(--panel); padding:1.15rem 1.25rem 1.2rem; display:flex; flex-direction:column; }
  .stat .n { font-family:"Fraunces",serif; font-size:2.1rem; font-weight:500; line-height:1; font-variant-numeric:tabular-nums; letter-spacing:-.02em; }
  .stat .n small { font-size:1.05rem; color:var(--muted); font-weight:400; margin-left:.15rem; }
  .stat .n.unknown { color:var(--uncharted); }
  .stat .k { font-family:"Inter",sans-serif; font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-2); margin-top:.6rem; font-weight:600; }
  .stat .d { font-family:"Inter",sans-serif; font-size:.78rem; color:var(--muted); margin-top:.3rem; line-height:1.45; flex:1; }
  .bar { display:flex; height:5px; border-radius:3px; overflow:hidden; margin-top:.9rem; background:color-mix(in srgb, var(--line) 60%, transparent); }
  .bar i { display:block; height:100%; }
  .bar .c { background:var(--sea); }
  .bar .a { background:var(--gold); }
  .bar .e { background:color-mix(in srgb, var(--hair) 70%, transparent); }
  .bar .u { background:repeating-linear-gradient(90deg, var(--uncharted) 0 3px, transparent 3px 6px); opacity:.7; }
  .legend { display:flex; flex-wrap:wrap; gap:1.1rem; margin-top:.8rem; font-family:"Inter",sans-serif; font-size:.74rem; color:var(--muted); letter-spacing:.03em; }
  .legend span { display:inline-flex; align-items:center; gap:.45rem; }
  .legend i { width:12px; height:8px; border-radius:2px; display:inline-block; }
  .legend .c { background:var(--sea); } .legend .a { background:var(--gold); }
  .legend .u { background:repeating-linear-gradient(90deg, var(--uncharted) 0 3px, transparent 3px 6px); }

  /* ============================================================
     Territories
     ============================================================ */
  .terr { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:1.1rem; }
  .card { background:var(--panel); border:1px solid var(--line); border-radius:12px; overflow:hidden; box-shadow:var(--shadow);
    display:flex; flex-direction:column; transition:transform .25s var(--ease), box-shadow .25s var(--ease); color:var(--ink); }
  a.card:hover { transform:translateY(-3px); box-shadow:var(--shadow-lift); text-decoration:none; }
  .card .top { height:112px; background:var(--sea); background-size:cover; background-position:center; position:relative; }
  /* a map wash over the plate so a bright survey sheet sits quietly in the case, in either scheme */
  .card .top::after { content:""; position:absolute; inset:0;
    background:linear-gradient(to top, color-mix(in srgb, var(--panel) 70%, transparent), transparent 60%), color-mix(in srgb, var(--sea) 22%, transparent); }
  @media (prefers-color-scheme: dark) { .card .top { filter:brightness(.72) sepia(.25); } }
  .card .body { padding:.95rem 1.05rem 1.15rem; display:flex; flex-direction:column; flex:1; }
  .card h3 { font-size:1.2rem; margin:.3rem 0 .3rem; color:var(--ink); font-weight:500; }
  .card .meta { font-family:"Inter",sans-serif; font-size:.77rem; color:var(--muted); }
  .card .bar { margin-top:.8rem; height:4px; }
  .card .go { margin-top:auto; padding-top:.8rem; font-family:"Inter",sans-serif; font-size:.76rem; color:var(--crimson); letter-spacing:.04em; }
  .card.uncharted { opacity:.78; box-shadow:none; border-style:dashed; background:transparent; }
  .card.uncharted .top { height:72px; background:
      repeating-linear-gradient(45deg, color-mix(in srgb,var(--uncharted) 18%, transparent) 0 6px, transparent 6px 12px); }
  .card.uncharted .top::after { display:none; }
  .card.uncharted h3 { color:var(--ink-2); }
  .tag { display:inline-block; font-family:"Inter",sans-serif; font-size:.62rem; letter-spacing:.12em; text-transform:uppercase;
    padding:.22rem .55rem; border-radius:999px; background:color-mix(in srgb,var(--sea) 14%, transparent); color:var(--sea); font-weight:600; align-self:flex-start; }
  .tag.grey { background:color-mix(in srgb,var(--uncharted) 18%, transparent); color:var(--uncharted); }
  .tag.gold { background:color-mix(in srgb,var(--gold) 20%, transparent); color:color-mix(in srgb, var(--gold) 80%, var(--ink)); }

  /* ============================================================
     The walk — the exhibit route, room by room
     ============================================================ */
  .walk { list-style:none; padding:0; margin:1.2rem 0 0; display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border:1px solid var(--line); border-radius:12px; overflow:hidden; box-shadow:var(--shadow); }
  @media (max-width:700px){ .walk { grid-template-columns:1fr; } }
  .walk a { display:block; background:var(--panel); padding:1.2rem 1.25rem 1.3rem; color:var(--ink); height:100%; position:relative; transition:background .25s var(--ease); }
  .walk a:hover { text-decoration:none; background:color-mix(in srgb, var(--panel) 70%, var(--paper-deep)); }
  .walk .rn { font-family:"Fraunces",serif; font-style:italic; font-size:1.25rem; color:var(--gold); display:block; }
  .walk b { font-family:"Fraunces",serif; font-weight:500; font-size:1.3rem; display:block; margin:.2rem 0 .25rem; }
  .walk span.s { font-family:"Inter",sans-serif; font-size:.82rem; color:var(--muted); display:block; }
  .walk a::after { content:"→"; position:absolute; right:1.1rem; top:1.1rem; color:var(--hair); transition:color .25s var(--ease), transform .25s var(--ease); }
  .walk a:hover::after { color:var(--crimson); transform:translateX(3px); }

  /* the doors at the foot of each room: a slim one back, a wide one on */
  .doors { display:grid; grid-template-columns:minmax(10rem,auto) 1fr; gap:1rem; margin-top:3.6rem; align-items:stretch; }
  @media (max-width:640px){ .doors { grid-template-columns:1fr; } .door.back { order:2; } }
  .door { color:var(--ink); border-radius:14px; transition:transform .25s var(--ease), box-shadow .25s var(--ease), border-color .25s var(--ease); }
  .door:hover { text-decoration:none; }
  .door.back { display:flex; flex-direction:column; justify-content:center; padding:1.2rem 1.3rem; border:1px dashed var(--hair); color:var(--muted); }
  .door.back:hover { border-style:solid; border-color:var(--ink-2); color:var(--ink); }
  .door.back .t { font-family:"Fraunces",serif; font-size:1.1rem; font-weight:500; display:block; margin-top:.2rem; }
  .door.next { display:grid; grid-template-columns:1fr auto; align-items:center; gap:1rem; padding:1.4rem 1.5rem;
    border:1px solid var(--line); background:var(--panel); box-shadow:var(--shadow); }
  .door.next:hover { transform:translateY(-2px); box-shadow:var(--shadow-lift); }
  .door .k { font-family:"Inter",sans-serif; font-size:.68rem; letter-spacing:.2em; text-transform:uppercase; color:var(--muted); font-weight:600; display:block; }
  .door.next .t { font-family:"Fraunces",serif; font-size:clamp(1.3rem,3vw,1.7rem); font-weight:500; display:block; margin-top:.2rem; }
  .door .s { font-family:"Inter",sans-serif; font-size:.85rem; color:var(--muted); display:block; margin-top:.25rem; }
  .door .arrow { font-family:"Fraunces",serif; font-size:2rem; color:var(--crimson); transition:transform .25s var(--ease); }
  .door.next:hover .arrow { transform:translateX(4px); }

  /* ============================================================
     Album — the exhibit case
     ============================================================ */
  .label { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:0; margin:1.4rem 0 1.8rem; border-top:1px solid var(--ink); border-bottom:1px solid var(--line); }
  .label div { padding:.8rem 1rem .85rem 0; border-right:1px solid var(--line); margin-right:1rem; }
  .label div:last-child { border-right:0; }
  .label .ft { font-family:"Inter",sans-serif; font-size:.64rem; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); font-weight:600; }
  .label .fv { font-family:"Fraunces",serif; font-size:1.1rem; margin-top:.2rem; font-weight:500; }
  .label .fv.soft { color:var(--uncharted); font-style:italic; font-weight:400; }
  .label code { font-family:ui-monospace,Menlo,monospace; font-size:.9rem; letter-spacing:.02em; }
  .case { background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:1.4rem 1.5rem 1.5rem; box-shadow:var(--shadow); margin-top:1.4rem;
    background-image:linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px); background-size:32px 32px; }
  .plate { display:grid; grid-template-columns:repeat(auto-fill, 42px); gap:10px; }
  .cell { width:42px; height:54px; border-radius:3px; background:var(--panel); border:1px solid var(--hair); position:relative; cursor:default;
    box-shadow:0 1px 0 rgba(36,31,22,.06); font-family:"Inter",sans-serif; font-size:.58rem; color:var(--muted); display:grid; place-content:end start; padding:3px 4px;
    transition:transform .2s var(--ease), box-shadow .2s var(--ease); }
  .cell:hover, .cell:focus-visible { transform:translateY(-2px); box-shadow:var(--shadow); }
  .cell.filled { background:color-mix(in srgb,var(--sea) 18%, var(--panel)); border-color:var(--sea); color:var(--sea); }
  .cell.empty { background:transparent; border-style:dashed; box-shadow:none; }
  .cell.unknown { background:
      repeating-linear-gradient(45deg, color-mix(in srgb,var(--uncharted) 22%, transparent) 0 4px, transparent 4px 8px), var(--panel); }
  .cell.cover { border-radius:3px 6px 6px 3px; border-left-width:3px; }
  .readout { margin-top:1.1rem; padding:.7rem .9rem; border-radius:8px; background:color-mix(in srgb, var(--paper-deep) 55%, transparent);
    font-family:ui-monospace,Menlo,monospace; font-size:.74rem; color:var(--ink-2); letter-spacing:.01em; min-height:2.4rem; }
  .readout:empty::before { content:"Hover or tap a position to read its record."; color:var(--muted); font-style:italic; font-family:"Fraunces",serif; font-size:.86rem; }
  .plate-legend { display:flex; flex-wrap:wrap; gap:1.2rem; margin-top:1.1rem; font-family:"Inter",sans-serif; font-size:.74rem; color:var(--muted); }
  .plate-legend span { display:inline-flex; align-items:center; gap:.5rem; }
  .plate-legend i { width:14px; height:18px; border-radius:2px; border:1px solid var(--hair); display:inline-block; }
  .plate-legend .filled { background:color-mix(in srgb,var(--sea) 18%, var(--panel)); border-color:var(--sea); }
  .plate-legend .empty { border-style:dashed; }
  .plate-legend .unknown { background:repeating-linear-gradient(45deg, color-mix(in srgb,var(--uncharted) 22%, transparent) 0 3px, transparent 3px 6px); }

  /* ============================================================
     Lists — counting rules, pending promises
     ============================================================ */
  ul.clean { list-style:none; padding:0; margin:0; display:grid; gap:.6rem; }
  ul.clean li { background:var(--panel); border:1px solid var(--line); border-left:3px solid var(--crimson);
    border-radius:8px; padding:.8rem 1rem; font-size:.94rem; text-wrap:pretty; }
  ul.pending li { border-left-color:var(--uncharted); display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; align-items:baseline; }
  ul.pending .m { font-family:"Fraunces",serif; font-weight:500; font-size:1.05rem; }
  ul.pending .b { color:var(--muted); font-size:.8rem; font-family:"Inter",sans-serif; letter-spacing:.02em; }
  ul.pending .b::before { content:"awaiting "; color:var(--uncharted); font-style:italic; }
  .steps { display:grid; grid-template-columns:repeat(3,1fr); gap:1.1rem; margin-top:1.2rem; }
  @media (max-width:700px){ .steps { grid-template-columns:1fr; } }
  .step { padding:1.2rem 0 0; border-top:2px solid var(--ink); }
  .step .rn { font-family:"Fraunces",serif; font-style:italic; color:var(--gold); font-size:1.1rem; }
  .step h3 { font-size:1.35rem; font-weight:500; margin:.2rem 0 .4rem; }
  .step p { margin:0; font-size:.93rem; color:var(--ink-2); }

  /* ============================================================
     A page — the entry format
     ============================================================ */
  .entry { display:grid; grid-template-columns:minmax(240px,320px) 1fr; gap:clamp(1.6rem,4vw,3rem); align-items:start; margin-top:1.8rem; }
  @media (max-width:720px){ .entry { grid-template-columns:1fr; } .entry .specimen-col { max-width:320px; margin:0 auto; } }
  .specimen { position:relative; background:var(--mat); padding:14px; box-shadow:var(--shadow); aspect-ratio:4/5; display:grid; }
  .specimen::before, .specimen::after, .specimen > .pl, .specimen > .pr { content:""; position:absolute; pointer-events:none; }
  .specimen::before, .specimen::after { left:0; right:0; height:12px;
    background:radial-gradient(circle closest-side, var(--paper) 74%, #0000 76%) 0 0 / 16px 12px repeat-x; }
  .specimen::before { top:-6px; } .specimen::after { bottom:-6px; }
  .specimen > .pl, .specimen > .pr { top:0; bottom:0; width:12px;
    background:radial-gradient(circle closest-side, var(--paper) 74%, #0000 76%) 0 0 / 12px 16px repeat-y; }
  .specimen > .pl { left:-6px; } .specimen > .pr { right:-6px; }
  /* a glassine hinge peeking over the top edge — the stamp is mounted, not printed */
  .specimen > .hinge { position:absolute; top:-9px; left:50%; width:28px; height:16px; transform:translateX(-50%) rotate(-1.5deg);
    background:rgba(255,255,255,.55); border:1px solid rgba(36,31,22,.12); border-radius:2px; pointer-events:none; }
  .specimen .inner { border:1px solid rgba(36,31,22,.16); display:grid; place-content:center; text-align:center; padding:1.2rem;
    color:#6b5f4a; font-family:"Inter",sans-serif; font-size:.78rem; line-height:1.55;
    background:repeating-linear-gradient(135deg, rgba(36,31,22,.045) 0 6px, transparent 6px 12px), #f5eedf; }
  .specimen .inner b { display:block; font-family:"Fraunces",serif; font-weight:500; font-size:1.05rem; color:#3e3628; margin-bottom:.4rem; letter-spacing:.01em; }
  .specimen .inner .st { display:inline-block; margin-top:.9rem; font-size:.6rem; letter-spacing:.16em; text-transform:uppercase; border:1px solid #b9ac8f; padding:.25rem .55rem; border-radius:999px; color:#7a6d55; }
  .specimen-col .capline { font-family:"Fraunces",serif; font-style:italic; font-size:.86rem; color:var(--muted); text-align:center; margin:1.1rem 0 0; }
  .entry h2 { font-size:clamp(1.9rem,4.5vw,2.6rem); margin:.5rem 0 .6rem; font-weight:500; }
  .entry .stand { font-family:"Fraunces",serif; font-size:1.12rem; font-style:italic; color:var(--ink-2); line-height:1.5; margin:0 0 1rem; }
  .demo-flag { display:inline-block; font-family:"Inter",sans-serif; font-size:.64rem; letter-spacing:.12em; text-transform:uppercase;
    background:var(--gold); color:#1c1400; padding:.26rem .6rem; border-radius:999px; font-weight:600; vertical-align:middle; }
  .era { margin:1.4rem 0; }
  .era img { width:100%; border-radius:6px; display:block; box-shadow:var(--shadow); outline:1px solid rgba(36,31,22,.1); outline-offset:-1px; }
  @media (prefers-color-scheme: dark) { .era img { filter:brightness(.8) sepia(.15); } }
  .era figcaption { font-family:"Fraunces",serif; font-style:italic; font-size:.84rem; color:var(--muted); margin-top:.5rem; }
  .facts { border-top:1px solid var(--ink); margin-top:1.2rem; }
  .fact { border-bottom:1px solid var(--line); padding:.75rem 0; font-family:"Inter",sans-serif; display:grid; grid-template-columns:9rem 1fr; gap:1rem; font-size:.93rem; }
  @media (max-width:480px){ .fact { grid-template-columns:1fr; gap:.15rem; } }
  .fact .ft { font-size:.66rem; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); font-weight:600; padding-top:.2rem; }
  .fact .fv.soft { color:var(--uncharted); font-style:italic; font-family:"Fraunces",serif; font-size:1rem; }
  .src { font-family:"Inter",sans-serif; font-size:.78rem; color:var(--muted); margin-top:.7rem; }

  /* ============================================================
     Footer
     ============================================================ */
  footer { margin-top:5rem; padding:2.4rem var(--gutter) 2.8rem; border-top:2px solid var(--ink);
    font-family:"Inter",sans-serif; font-size:.82rem; color:var(--muted); background:color-mix(in srgb, var(--paper-deep) 55%, var(--paper)); }
  footer .cols { max-width:1040px; margin:0 auto; display:grid; grid-template-columns:1fr 1.2fr; gap:2rem; }
  @media (max-width:640px){ footer .cols { grid-template-columns:1fr; } }
  footer p { margin:0 0 .6rem; text-wrap:pretty; }
  footer code { font-family:ui-monospace,Menlo,monospace; font-size:.74rem; color:var(--ink-2); background:color-mix(in srgb, var(--line) 45%, transparent); padding:.05rem .3rem; border-radius:3px; }
  footer .colophon { max-width:1040px; margin:1.8rem auto 0; padding-top:1.2rem; border-top:1px solid var(--line); font-size:.76rem; }
</style>
</head>
<body>
<nav class="bar">
  <a class="logo" href="#/"><span class="mark"></span><span class="word">Stamp Atlas</span></a>
  <div class="crumbs" id="crumbs" aria-label="Where you are in the exhibit"></div>
  <div class="navlinks" id="nav">
    <a href="#/" data-v="home">Home</a>
    <a href="#/atlas" data-v="atlas">The Atlas</a>
    <a href="#/entry" data-v="entry">A Page</a>
    <a href="#/about" data-v="about">How it works</a>
  </div>
</nav>

<main id="view" class="wrap"><p class="empty-note">Charting…</p></main>
<noscript><p class="wrap empty-note">Stamp Atlas draws itself from a small file of facts, which needs scripts turned on.</p></noscript>

<footer>
  <div class="cols">
    <div>
      <p class="serif" style="font-size:1.15rem;color:var(--ink);margin:0 0 .4rem">Stamp Atlas</p>
      <p id="asof"></p>
      <p>The world, one stamp at a time — a personal collection, charted as it is digitised. Most of the map is still blank paper. It is meant to be watched filling in.</p>
    </div>
    <div>
      <p><strong style="color:var(--ink-2)">What never leaves the archive.</strong> The album photographs and their fingerprints stay private:
         <span id="withheld"></span></p>
      <p>Machine findings are <em>candidates</em> until a person confirms them. Stamp Atlas states what it knows, marks
         what it doesn't, and never manufactures certainty — or a valuation.</p>
    </div>
  </div>
  <p class="colophon">Every number on this site is read from the collection's own records, not typed in. Era pictures are original art, never copies of a stamp; where a design is still in copyright, the mat stays empty and says so.</p>
</footer>

<script type="application/javascript">
let DATA = null;

const $ = (s, r=document) => r.querySelector(s);
const el = (t,c,h)=>{const e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e;};
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const plural = (n,w,ws) => n+' '+(n===1?w:(ws||w+'s'));
/* a date-only string (capturedOn) is a calendar day, not an instant — parse it as local so it never slips a day */
const toDate = s => /^\\d{4}-\\d{2}-\\d{2}$/.test(String(s)) ? new Date(+s.slice(0,4), +s.slice(5,7)-1, +s.slice(8,10)) : new Date(s);
function niceDate(iso){
  if(!iso) return '';
  const d=toDate(iso); if(isNaN(d)) return String(iso);
  return d.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'});
}
const asOfIso = () => (DATA.facts&&DATA.facts.asOf)||DATA.generatedAt;
const asOfDate = () => niceDate(asOfIso());
/* the postmark's own date, in the terse uppercase a cancellation uses */
function stampDate(){
  const d=new Date(asOfIso()); if(isNaN(d)) return '';
  return d.getDate()+' '+d.toLocaleDateString('en',{month:'short'}).toUpperCase()+' '+d.getFullYear();
}

/* Plain-language names for the projection's metrics. The numbers come from the data; only the words are ours. */
const FRIENDLY = {
  albumCount:{label:'Albums charted', d:'physical albums photographed as evidence'},
  albumPositionCount:{label:'Positions traversed', d:'pages, covers, inserts and dividers walked through'},
  positionOccupancy:{label:'Positions holding stamps', d:'positions actually seen to hold material'},
  albumArchetypeCoverage:{label:'Album structures classified', d:'albums whose layout a person has identified'},
  philatelicItemCount:{label:'Items identified', d:'individual stamps, covers and blocks found on a page — and how many have been named'},
};
const FRIENDLY_PENDING = {
  distinctIssuerCount:'Distinct issuers',
  distinctTerritoryCount:'Distinct territories',
  extinctIssuerCount:'Issuers that no longer exist',
  earliestIssueYear:'Earliest year of issue',
  philatelicItemCount:'Stamps and items counted',
};
function disp(m){
  const v=m.value||{confirmed:0,candidate:0,unknown:0};
  const hasU=(v.candidate+v.unknown)>0;
  const pop=m.eligiblePopulation ?? (v.confirmed+v.candidate+v.unknown);
  const parts=[];
  if(v.confirmed) parts.push(v.confirmed+' confirmed');
  if(v.candidate) parts.push(v.candidate+' candidate');
  if(v.unknown) parts.push(v.unknown+' not yet looked at');
  return {
    n: hasU ? v.confirmed+'<small>/ '+pop+'</small>' : String(v.confirmed),
    d: hasU ? parts.join(' · ') : (pop ? v.confirmed+' of '+pop+' — every one accounted for' : 'nothing to count yet'),
    u: hasU, pop, v
  };
}
/* how many of an album's positions have actually been looked at and seen to hold material */
function seenCount(a){
  const pos=a.positions||[];
  if(pos.some(p=>p.isEmpty!==undefined)) return pos.filter(p=>p.isEmpty===false).length;
  if(a.observedEmpty===undefined||a.observedUnknown===undefined) return 0;
  return Math.max(0,(a.positionCount||0)-a.observedEmpty-a.observedUnknown);
}

const firstAlbumHref = () => (DATA.albums&&DATA.albums[0]) ? '#/album/'+encodeURIComponent(DATA.albums[0].physicalAlbumId) : '#/atlas';

/* ---------- shared furniture: the trail, the doors, the postmark ---------- */
const STOPS = () => [
  ['atlas','I','The Atlas','#/atlas'],
  ['album','II','An album',firstAlbumHref()],
  ['entry','III','A page','#/entry'],
  ['about','Notes','How it is drawn','#/about'],
];
function trail(cur){
  const stops=STOPS(); const i=stops.findIndex(s=>s[0]===cur);
  return '<ol class="trail" aria-label="Your route through the exhibit">'+stops.map((s,j)=>{
    const st=j<i?'done':j===i?'here':'ahead';
    const inner='<i>'+s[1]+'</i>'+esc(s[2]);
    return '<li class="'+st+'">'+(st==='here'
      ? '<span class="stop" aria-current="page">'+inner+'</span>'
      : '<a class="stop" href="'+s[3]+'">'+inner+'</a>')+'</li>';
  }).join('')+'</ol>';
}
function doors(back, next){
  return '<div class="doors">'
    +(back?'<a class="door back" href="'+back.href+'"><span class="k">'+esc(back.k)+'</span><span class="t">'+esc(back.t)+'</span></a>':'')
    +'<a class="door next" href="'+next.href+'"><span><span class="k">'+esc(next.k)+'</span><span class="t">'+esc(next.t)+'</span>'
    +'<span class="s">'+esc(next.s)+'</span></span><span class="arrow">→</span></a></div>';
}
function postmark(){
  return '<svg class="postmark" viewBox="0 0 270 120" aria-hidden="true">'
    +'<defs><path id="pm-top" d="M20,60 A40,40 0 0,1 100,60"/><path id="pm-bot" d="M20,60 A40,40 0 0,0 100,60"/></defs>'
    +'<circle cx="60" cy="60" r="56" stroke-width="2.2"/><circle cx="60" cy="60" r="31" stroke-width="1.4"/>'
    +'<text class="ring"><textPath href="#pm-top" startOffset="50%" text-anchor="middle">STAMP ATLAS</textPath></text>'
    +'<text class="ring"><textPath href="#pm-bot" startOffset="50%" text-anchor="middle">CHARTED</textPath></text>'
    +'<text class="date" x="60" y="64" text-anchor="middle">'+esc(stampDate())+'</text>'
    +'<g stroke-width="2">'+[32,46,60,74,88].map(y=>'<path d="M126,'+y+' q8,-5 16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0 t16,0"/>').join('')+'</g>'
    +'</svg>';
}

/* ---------- views ---------- */
function home(){
  const v = el('div');
  const albums = DATA.albums||[];
  const positions = albums.reduce((n,a)=>n+(a.positionCount||0),0);

  /* one honest headline number: how much of the traversed ground has actually been examined for stamps */
  let survey='';
  const occ=(DATA.facts.metrics||[]).find(m=>m.metric==='positionOccupancy');
  if(occ){
    const o=occ.value||{}; const pop=occ.eligiblePopulation ?? ((o.confirmed||0)+(o.candidate||0)+(o.unknown||0));
    const examined=Math.max(0,pop-(o.unknown||0)); const pct=pop?Math.round(100*examined/pop):0;
    const line = !pop ? 'Nothing has been photographed for the archive yet. The atlas will say so until it has.'
      : pct===0 ? '<strong>'+examined+' of '+plural(pop,'position')+'</strong> have been examined for stamps. The map is, for now, blank paper — which is the honest first page of every atlas.'
      : pct<100 ? '<strong>'+examined+' of '+plural(pop,'position')+'</strong> have been examined for stamps; the rest is hatched, not guessed at.'
      : '<strong>Every one of '+plural(pop,'position')+'</strong> has been examined. Now the identifying begins.';
    survey='<div class="survey"><div><div class="pct'+(pct===0?' zero':'')+'">'+pct+'<small>%</small></div><div class="pk">of positions examined</div></div>'
      +'<div><p>'+line+'</p><div class="bar"><i class="c" style="width:'+(pop?Math.round(100*(o.confirmed||0)/pop):0)+'%"></i><i class="a" style="width:'+(pop?Math.round(100*(o.candidate||0)/pop):0)+'%"></i><i class="u" style="width:'+(pop?Math.round(100*(o.unknown||0)/pop):0)+'%"></i></div></div></div>';
  }

  v.innerHTML = \`
    <section class="hero">
      <div>
        <div class="kicker">A lifetime's collection, told as an atlas</div>
        <h1>Every stamp is a small <em>window.</em></h1>
        <p class="lede">Onto a place, a person, a year the world thought worth remembering. This is one lifetime's
          collection of those windows — being charted, page by page, into an atlas.</p>
        <div class="ctas">
          <a class="cta" href="#/atlas">Walk into the atlas →</a>
          <a class="cta ghost" href="#/about">How it is drawn</a>
        </div>
        <p class="asof-inline">Charted as of \${esc(asOfDate())} · \${plural(albums.length,'album')} · \${plural(positions,'position')}</p>
      </div>
      <div class="heroimg">
        <div class="mat"><i class="pl"></i><i class="pr"></i>
          <img src="/assets/hero.jpg" alt="An antique atlas open on a desk beside a magnifying glass" loading="eager" fetchpriority="high" />
          <span class="cap">The reading room — original art, not a stamp</span>
        </div>
        \${postmark()}
      </div>
    </section>

    <p class="big prose">The atlas is being drawn. <strong>\${plural(albums.length,'album')}</strong> charted so far,
       <strong>\${plural(positions,'position')}</strong> traversed — and most of the world is still blank paper.
       That is the pleasure of the thing: come back and watch it fill in.</p>

    <div class="sec-label"><span class="rn">i.</span> Why a stamp deserves a second look</div>
    <div class="windows">
      <div class="window" data-n="I"><h3>A <em>place</em></h3>
        <p>A stamp is issued by somewhere — a kingdom, a colony, a republic that lasted eleven years. Some of those
           places no longer exist. The stamp does, and it still says where it came from.</p></div>
      <div class="window" data-n="II"><h3>A <em>person</em></h3>
        <p>A face on a stamp is a decision: <em>this is who we are, this year.</em> Monarchs, poets, engineers, a nurse.
           The list of who a country chose to print is a kind of autobiography.</p></div>
      <div class="window" data-n="III"><h3>A <em>year</em></h3>
        <p>Every issue is pinned to a moment — a coronation, a bridge opened, a war ended, a bird nearly lost. Read
           enough of them in a row and you are reading the century.</p></div>
    </div>

    <div class="sec-label"><span class="rn">ii.</span> Where the survey stands</div>
    \${survey}
    <div class="stats" id="stats"></div>
    <div class="legend"><span><i class="c"></i> confirmed by a person</span><span><i class="a"></i> machine candidate</span><span><i class="u"></i> not yet looked at</span></div>

    <div class="sec-label"><span class="rn">iii.</span> Curiosities</div>
    <p class="prose muted">Strange statistics, read straight off the collection — honest today, and gaining new
       ones as more of the archive comes to be known.</p>
    <div class="curios" id="curios"></div>

    <div class="sec-label"><span class="rn">iv.</span> The territories</div>
    <p class="prose muted">As each stamp is identified it takes its place in a territory — a country, an era, a theme.
       Charted ground is drawn solid; the rest is dashed, and waiting.</p>
    <div class="terr" id="terr-preview"></div>
    <p style="margin-top:1.2rem"><a class="backlink" href="#/atlas">See the whole atlas →</a></p>

    <div class="sec-label"><span class="rn">v.</span> Walk the exhibit</div>
    <ol class="walk">
      <li><a href="#/atlas"><span class="rn">Room I</span><b>The Atlas</b><span class="s">The territories — charted, and honestly blank.</span></a></li>
      <li><a href="\${firstAlbumHref()}"><span class="rn">Room II</span><b>An album</b><span class="s">One shelf of the collection, position by position.</span></a></li>
      <li><a href="#/entry"><span class="rn">Room III</span><b>A page</b><span class="s">What a single identified stamp will become.</span></a></li>
    </ol>
  \`;
  return v;
}

function renderStats(root){
  root.innerHTML='';
  for(const m of DATA.facts.metrics){
    const d=disp(m); const f=FRIENDLY[m.metric]||{};
    const s=el('div','stat');
    s.appendChild(el('div','n'+(d.u?' unknown':''), d.n));
    s.appendChild(el('div','k', esc(f.label||m.metric)));
    s.appendChild(el('div','d', esc(d.d)+(f.d?'<br/><span style="opacity:.8">'+esc(f.d)+'</span>':'')));
    if(d.pop>0){
      const pc=x=>Math.round(100*x/d.pop);
      s.appendChild(el('div','bar','<i class="c" style="width:'+pc(d.v.confirmed)+'%"></i><i class="a" style="width:'+pc(d.v.candidate)+'%"></i><i class="u" style="width:'+pc(d.v.unknown)+'%"></i>'));
    }
    root.appendChild(s);
  }
}

/* curiosities: playful facts computed from the projection. Each is gated on the data it needs, so
   count-based ones appear the moment items exist and the date/issuer ones slot in later. Numbers come
   from the projection (traceable); the page only phrases them — it invents no facts. */
function curiosities(){
  const albums = DATA.albums||[];
  const positions = albums.reduce((n,a)=>n+(a.positionCount||0),0);
  const pic = (DATA.facts.metrics||[]).find(m=>m.metric==='philatelicItemCount');
  const items = pic ? (pic.eligiblePopulation||0) : 0;
  const identified = pic ? ((pic.value&&pic.value.confirmed)||0) : 0;
  const num = n => n.toLocaleString();
  const out = [];
  if(items>0){
    const years = items/365;
    out.push({ n:num(items), unit: items===1?'day':'days',
      text:'At <b>one stamp a day</b>, you would need <b>'+num(items)+'</b> '+(items===1?'day':'days')
        + (years>=1 ? ' — about <b>'+(years<10?years.toFixed(1):Math.round(years))+' years</b>' : '')
        + ' — to look through the whole collection, one window at a time.' });
    const waiting = items-identified;
    if(waiting>0) out.push({ n:num(waiting), unit:'still to name',
      text:'<b>'+num(waiting)+'</b> of the '+num(items)+' object'+(items===1?'':'s')+' '+(waiting===1?'is':'are')
        + ' still waiting to be identified. The collection is, quietly, still telling us what it is.' });
  }
  if(positions>0){
    out.push({ n:num(positions), unit: positions===1?'page':'pages',
      text:'<b>'+num(positions)+'</b> position'+(positions===1?'':'s')+' walked through — pages, covers, inserts, '
        + 'dividers — each preserved as a photograph, once, and kept for good.' });
  }
  return out;
}
function renderCurios(root){
  if(!root) return;
  const cs = curiosities();
  if(!cs.length){
    root.innerHTML = '<p class="curios-empty">The curiosities begin once the first pages are in — strange '
      + 'statistics, computed straight from the collection. Come back and watch them appear.</p>';
    return;
  }
  root.innerHTML = '';
  for(const c of cs){
    const d = el('div','curio');
    d.appendChild(el('div','big', c.n+' <small>'+esc(c.unit)+'</small>'));
    d.appendChild(el('p', null, c.text));
    root.appendChild(d);
  }
}

/* territories: the real albums as the first charted ground, then the planned halls drawn dashed */
const UNCHARTED = [
  'The British Empire','Europe between the Wars','The New World','Africa & the Cape',
  'The Commonwealth','Ships, Flight & Exploration','Monarchs & Republics','The Miniature Sheets',
];
function territoryCards(limit){
  const cards=[];
  for(const a of (DATA.albums||[])){
    const n=a.positionCount||0, seen=seenCount(a), emp=a.observedEmpty||0, unk=a.observedUnknown||0;
    const pc=x=>n?Math.round(100*x/n):0;
    const c=el('a','card'); c.href='#/album/'+encodeURIComponent(a.physicalAlbumId);
    c.innerHTML=\`<div class="top" style="background-image:url('/assets/territory.jpg')"></div>
      <div class="body"><span class="tag">Charted</span>
      <h3>\${esc(a.displayName||'Untitled')}</h3>
      <div class="meta">\${plural(n,'position')} · captured \${esc(niceDate(a.capturedOn)||'')}</div>
      <div class="bar" title="\${seen} holding material · \${emp} observed empty · \${unk} not yet looked at"><i class="c" style="width:\${pc(seen)}%"></i><i class="e" style="width:\${pc(emp)}%"></i><i class="u" style="width:\${pc(unk)}%"></i></div>
      <div class="go">Enter the album →</div></div>\`;
    cards.push(c);
  }
  for(const name of UNCHARTED){
    const c=el('div','card uncharted');
    c.innerHTML=\`<div class="top"></div><div class="body"><span class="tag grey">Planned</span>
      <h3>\${esc(name)}</h3><div class="meta">awaiting survey</div></div>\`;
    cards.push(c);
  }
  return limit?cards.slice(0,limit):cards;
}

function atlas(){
  const v=el('div');
  const n=(DATA.albums||[]).length;
  v.innerHTML=\`\${trail('atlas')}
    <div class="room"><span class="rn">Room I</span> The Atlas</div>
    <h1 class="title">The territories</h1>
    <p class="big prose">Each territory is a hall of the exhibit — a country, an era or a theme, with its own stamps and
      its own stories. Today <strong>\${n===0?'no ground is':n===1?'one patch of ground is':n+' patches of ground are'}</strong> charted.
      The rest is drawn dashed: honest blank, waiting for the survey.</p>
    <p class="ledger-line">\${n===1?'1 territory charted':n+' territories charted'} · \${UNCHARTED.length} planned · dashed ground has not been surveyed</p>
    <div class="terr" id="terr"></div>
    \${doors({href:'#/',k:'Back',t:'The entrance'},{href:firstAlbumHref(),k:'Walk on · Room II',
      t:n?'Enter the charted album':'The first album, when it is charted',
      s:n?(DATA.albums[0].displayName||'Untitled')+' — every position, and what has and hasn’t been looked at.':'Nothing photographed yet. The atlas will say so until it has.'})}\`;
  return v;
}

function album(id){
  const a=(DATA.albums||[]).find(x=>x.physicalAlbumId===id);
  const v=el('div');
  if(!a){ v.innerHTML=trail('album')+'<div class="room"><span class="rn">Room II</span> An album</div><p class="empty-note" style="margin-top:1rem">That album is not in the atlas — or not yet.</p><p><a class="backlink" href="#/atlas">← Room I · The Atlas</a></p>'; return v; }
  const pos=a.positions||[];
  const cells=pos.map(p=>{
    const cls = p.isEmpty===true?'empty':(p.isEmpty===undefined?'unknown':'filled');
    const role=String(p.role||'').toLowerCase();
    const rec='Position '+p.sequenceIndex+(p.pageNumber?' · page '+p.pageNumber:'')+' · '+role+' · '+(cls==='empty'?'observed empty':cls==='unknown'?'not yet looked at':'holds material');
    return '<div class="cell '+cls+(role.includes('cover')?' cover':'')+'" tabindex="0" title="'+esc(rec)+'" data-rec="'+esc(rec)+'">'+(p.pageNumber?esc(p.pageNumber):p.sequenceIndex+1)+'</div>';
  }).join('');
  const seen=seenCount(a);
  const pend=(DATA.facts.pending||[]).map(p=>'<li><span class="m">'+esc(FRIENDLY_PENDING[p.metric]||p.metric)+'</span><span class="b">'+esc(p.blockedBy)+'</span></li>').join('');
  v.innerHTML=\`\${trail('album')}
    <div class="room"><span class="rn">Room II</span> An album</div>
    <h1 class="title">\${esc(a.displayName||'Untitled')}</h1>
    <div class="label">
      <div><div class="ft">Accession</div><div class="fv"><code>\${esc(a.physicalAlbumId)}</code></div></div>
      <div><div class="ft">Captured</div><div class="fv">\${esc(niceDate(a.capturedOn)||'—')}</div></div>
      <div><div class="ft">Positions</div><div class="fv">\${a.positionCount}</div></div>
      <div><div class="ft">Structure</div><div class="fv\${a.archetype?'':' soft'}">\${a.archetype?esc(a.archetype):'not yet classified'}</div></div>
    </div>
    <p class="prose">Of \${plural(a.positionCount||0,'position')}: <strong>\${seen}</strong> seen holding material,
       <strong>\${a.observedEmpty??'—'}</strong> observed empty, <strong>\${a.observedUnknown??'—'}</strong> not yet looked at.
       Each cell below is one position in the album — solid where stamps were seen, dashed where the page was empty,
       hatched where nobody has looked yet.</p>
    <div class="case">
      <div class="plate">\${cells}</div>
      <div class="readout" id="readout" aria-live="polite"></div>
      <div class="plate-legend"><span><i class="filled"></i> holds material</span><span><i class="empty"></i> observed empty</span><span><i class="unknown"></i> not yet looked at</span></div>
    </div>
    <div class="sec-label">Still to know about this album</div>
    <p class="prose muted">Which countries, which years, how many distinct stamps — these arrive when identification runs.
       Until then the atlas says so rather than guessing. What will appear here, and what each fact is waiting on:</p>
    <ul class="clean pending">\${pend||'<li class="muted">Nothing outstanding.</li>'}</ul>
    \${doors({href:'#/atlas',k:'Back · Room I',t:'The Atlas'},{href:'#/entry',k:'Walk on · Room III',
      t:'What one of these positions becomes',s:'The page every identified stamp will get — its story, its era, and the honest state of its image.'})}\`;
  return v;
}

/* the rich-entry FORMAT, shown as a labelled demonstration until identification produces real ones */
function entry(){
  const v=el('div');
  v.innerHTML=\`\${trail('entry')}
    <div class="room"><span class="rn">Room III</span> A page from the atlas <span class="demo-flag">Format preview</span></div>
    <h1 class="title">One stamp, told properly</h1>
    <p class="prose muted">This is the shape every identified stamp will take — a story, its era rendered as original art,
      and the honest state of its image. A worked example, not a real catalogue entry, shown so you can see where the atlas is going.</p>
    <div class="entry">
      <div class="specimen-col">
        <div class="specimen"><i class="pl"></i><i class="pr"></i><i class="hinge"></i>
          <div class="inner"><b>Design in copyright</b>The stamp's own photograph stays in the private archive.
            <span class="st">image withheld</span></div>
        </div>
        <p class="capline">Where a design is still in copyright, the mat stays empty and says so.</p>
      </div>
      <div>
        <span class="tag gold">Example entry</span>
        <h2>The era, not the stamp</h2>
        <p class="stand">Where a stamp's design is still in copyright, the atlas shows the <em>world behind it</em> —
          an original illustration of the moment it marks — never a copy of the stamp.</p>
        <p>A commemorative issue is a small national decision about what deserves remembering: a coronation, a bridge,
          a bird, a war's end. The atlas tells that story from recorded facts — who issued it, when, what it marked, how it
          was printed — and lets an original picture of the era stand in for a stamp it may not lawfully reproduce.</p>
        <figure class="era" style="margin-left:0;margin-right:0">
          <img src="/assets/territory.jpg" alt="Original era illustration (demonstration): a blank survey sheet with a compass rose" loading="lazy" />
          <figcaption>An original illustration stands here — the era, drawn fresh. This one is the blank survey sheet, because the stamp is not yet identified.</figcaption>
        </figure>
        <div class="facts">
          <div class="fact"><div class="ft">Issued by</div><div class="fv soft">determined at identification</div></div>
          <div class="fact"><div class="ft">Year</div><div class="fv soft">determined at identification</div></div>
          <div class="fact"><div class="ft">What it marks</div><div class="fv soft">determined at identification</div></div>
          <div class="fact"><div class="ft">Printed</div><div class="fv soft">determined at identification</div></div>
          <div class="fact"><div class="ft">Image</div><div class="fv">A real photograph only when the design is public domain; otherwise original art in its place.</div></div>
          <div class="fact"><div class="ft">Certainty</div><div class="fv">Every fact carries its status — confirmed by a person, or a machine's candidate.</div></div>
        </div>
        <p class="src">Narrative written from recorded facts. Public-domain reference sources are cited on each real entry. No valuations, ever.</p>
      </div>
    </div>
    \${doors({href:firstAlbumHref(),k:'Back · Room II',t:'The album'},{href:'#/about',k:'Behind the glass',
      t:'How the atlas is drawn',s:'Photograph once, preserve forever, reprocess forever — and how we count.'})}\`;
  return v;
}

function about(){
  const v=el('div');
  const rules=(DATA.facts.countingRules||[]).map(r=>'<li>'+esc(r)+'</li>').join('');
  const pend=(DATA.facts.pending||[]).map(p=>'<li><span class="m">'+esc(FRIENDLY_PENDING[p.metric]||p.metric)+'</span><span class="b">'+esc(p.blockedBy)+'</span></li>').join('');
  v.innerHTML=\`\${trail('about')}
    <div class="room"><span class="rn">Notes</span> How the atlas is drawn</div>
    <h1 class="title">Photograph once. Preserve forever. Reprocess forever.</h1>
    <p class="big prose">A stamp is photographed as evidence and never thrown away. Everything you see here is derived
      from that evidence — and improves every time the collection is read again.</p>
    <div class="steps">
      <div class="step"><span class="rn">1</span><h3>Photograph</h3><p>Every album page is captured once, in order, as it is. Empty pages included — an empty page is a fact too.</p></div>
      <div class="step"><span class="rn">2</span><h3>Preserve</h3><p>The originals go into an archive that only grows. Nothing is edited in place; nothing is deleted.</p></div>
      <div class="step"><span class="rn">3</span><h3>Reprocess</h3><p>Detection and identification run over the archive again and again. Better readings replace worse ones; both are kept.</p></div>
    </div>
    <div class="sec-label">How we count</div>
    <ul class="clean">\${rules}</ul>
    <div class="sec-label">Coming as identification runs</div>
    <p class="prose muted">These facts don't exist yet — they need the stamps to be identified. They're listed as promises, not hidden as zeroes.</p>
    <ul class="clean pending">\${pend}</ul>
    <div class="sec-label">On truth</div>
    <p class="prose">Stamp Atlas produces <strong>assertions, never truth</strong>. A machine's reading is a candidate; a person
      confirms it or doesn't; both are kept. Where the atlas cannot say something honestly, it says nothing — and shows you the gap.</p>
    \${doors({href:'#/entry',k:'Back · Room III',t:'A page'},{href:'#/atlas',k:'Back to the rooms',
      t:'Return to the atlas',s:'Charted as of '+asOfDate()+'. Come back — it fills in.'})}\`;
  return v;
}

/* ---------- router ---------- */
const ROOMS = {
  home:  { crumbs:[], title:'Stamp Atlas' },
  atlas: { crumbs:[['I','The Atlas']], title:'The Atlas — Stamp Atlas' },
  album: { crumbs:[['I','The Atlas'],['II','']], title:'An album — Stamp Atlas' },
  entry: { crumbs:[['III','A page']], title:'A page — Stamp Atlas' },
  about: { crumbs:[['Notes','How it works']], title:'How it works — Stamp Atlas' },
};
const DEPTH = { home:0, atlas:1, album:2, entry:3, about:4 };
let lastDepth = 0;
function setCrumbs(key, leaf){
  const r=ROOMS[key]||ROOMS.home;
  const c=$('#crumbs'); c.innerHTML='';
  r.crumbs.forEach(([rn,label],i)=>{
    if(i) c.appendChild(el('span','sep','›'));
    c.appendChild(el('span','rn',esc(rn)));
    c.appendChild(el('b',null,esc(label||leaf||'')));
  });
  document.title = leaf ? esc(leaf)+' — Stamp Atlas' : r.title;
}

function route(){
  if(!DATA){ return; }
  const hash=location.hash.replace(/^#/,'')||'/';
  const view=$('#view'); view.innerHTML='';
  let name='home', node, room='home', leaf='';
  if(hash==='/'){ node=home(); }
  else if(hash==='/atlas'){ node=atlas(); name='atlas'; room='atlas'; }
  else if(hash.startsWith('/album/')){
    const id=decodeURIComponent(hash.slice(7));
    node=album(id); name='atlas'; room='album';
    const a=(DATA.albums||[]).find(x=>x.physicalAlbumId===id); leaf=a?(a.displayName||'Untitled'):'Not in the atlas';
  }
  else if(hash==='/entry'){ node=entry(); name='entry'; room='entry'; }
  else if(hash==='/about'){ node=about(); name='about'; room='about'; }
  else { node=home(); }
  /* walking deeper into the exhibit slides the room in from the right; walking back, from the left */
  const depth=DEPTH[room]??0;
  view.dataset.dir = depth>lastDepth?'deeper':depth<lastDepth?'back':'same';
  lastDepth=depth;
  view.appendChild(node);
  if(hash==='/') renderStats($('#stats'));
  if(hash==='/') renderCurios($('#curios'));
  if(hash==='/') { const p=$('#terr-preview'); if(p) territoryCards(4).forEach(c=>p.appendChild(c)); }
  if(name==='atlas' && $('#terr')) territoryCards().forEach(c=>$('#terr').appendChild(c));
  if(room==='album'){
    const plate=$('.plate'), out=$('#readout');
    if(plate&&out){
      const show=e=>{ const c=e.target.closest('.cell'); if(c) out.textContent=c.dataset.rec; };
      plate.addEventListener('mouseover',show); plate.addEventListener('click',show); plate.addEventListener('focusin',show);
    }
  }
  for(const a of document.querySelectorAll('#nav a')) a.classList.toggle('on', a.dataset.v===name);
  setCrumbs(room, leaf);
  window.scrollTo(0,0);
}

fetch('/api/public.json').then(r=>r.json()).then(d=>{
  DATA=d;
  $('#asof').textContent = 'Charted as of '+asOfDate()+'.';
  if(d.withheld&&d.withheld.length) $('#withheld').innerHTML = d.withheld.map(w=>'<code>'+esc(w)+'</code>').join(', ')+'.';
  route();
}).catch(()=>{ $('#view').innerHTML='<p class="empty-note">The atlas could not be loaded just now. Try again in a moment.</p>'; });
window.addEventListener('hashchange', route);
</script>
</body>
</html>`;
