/** Stamp Atlas — the public story page. Self-contained; fetches /api/public.json and renders it.
 *  GENERATED from scratchpad/live-index.html by to-page-ts.py — edit the HTML, then regenerate. */
export const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Stamp Atlas</title>
<meta name="description" content="Stamp Atlas — one person's stamp collection, twenty-five years in the making, read as a history of the world's post.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,0..100;1,9..144,300..900,0..100&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
/* ————————————————————————————————————————————————
   STAMP ATLAS · tokens
   A warm, aged-cartography world: parchment, iron-gall ink,
   terracotta, ochre, umber. Dark mode is lamplit leather.
   (Unchanged from the shipped page; new surfaces below extend it.)
———————————————————————————————————————————————— */
:root{
  --paper:#f4ead8; --paper-2:#ecdfc4; --paper-3:#e0cfab; --paper-4:#d2bd92;
  --ink:#2a1c12; --ink-2:#5a4632; --ink-3:#8a7458; --ink-4:#b39c78;
  --rule:#cbb48d; --rule-soft:#dfd0b0;
  --terra:#b8522d; --terra-2:#d9764f; --ochre:#c9932b; --ochre-2:#e2b45a;
  --sienna:#8e4a22; --umber:#5b3b22; --olive:#6f6d3b; --rose:#b56b5c; --moss:#576b45;
  --sea:#e9dcbd; --land:#d9c8a1; --land-line:#7c6446;
  --shadow: 0 1px 0 rgba(90,60,30,.12), 0 12px 30px -18px rgba(70,40,10,.45);
  --glow: rgba(201,147,43,.22);
  --hole: var(--paper);
  --ff-display:"Fraunces", "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  --ff-body:"Newsreader", "Iowan Old Style", Georgia, "Times New Roman", serif;
  --ff-mono:"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, monospace;
  --radius:6px;
  color-scheme: light;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --paper:#1f1611; --paper-2:#281d15; --paper-3:#33261b; --paper-4:#443323;
    --ink:#f6ead1; --ink-2:#e6d3ab; --ink-3:#c6b088; --ink-4:#8a7658;
    --rule:#4e3b28; --rule-soft:#3a2b1d;
    --terra:#d8764c; --terra-2:#e89a76; --ochre:#dfae48; --ochre-2:#f0c977;
    --sienna:#cf8a5a; --umber:#b89168; --olive:#a9a56c; --rose:#d3907f; --moss:#8fa374;
    --sea:#221912; --land:#3a2b1d; --land-line:#9c7f5a;
    --shadow: 0 1px 0 rgba(0,0,0,.4), 0 14px 34px -18px rgba(0,0,0,.8);
    --glow: rgba(223,174,72,.18);
    color-scheme: dark;
  }
}
:root[data-theme="dark"]{
  --paper:#1f1611; --paper-2:#281d15; --paper-3:#33261b; --paper-4:#443323;
  --ink:#f6ead1; --ink-2:#e6d3ab; --ink-3:#c6b088; --ink-4:#8a7658;
  --rule:#4e3b28; --rule-soft:#3a2b1d;
  --terra:#d8764c; --terra-2:#e89a76; --ochre:#dfae48; --ochre-2:#f0c977;
  --sienna:#cf8a5a; --umber:#b89168; --olive:#a9a56c; --rose:#d3907f; --moss:#8fa374;
  --sea:#221912; --land:#3a2b1d; --land-line:#9c7f5a;
  --shadow: 0 1px 0 rgba(0,0,0,.4), 0 14px 34px -18px rgba(0,0,0,.8);
  --glow: rgba(223,174,72,.18);
  color-scheme: dark;
}

/* ———— base ———— */
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion: reduce){ html{scroll-behavior:auto} *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important} }
body{
  margin:0; background:var(--paper); color:var(--ink);
  font-family:var(--ff-body); font-size:clamp(17px,1.05vw + 12px,19px); line-height:1.55;
  font-variation-settings:"opsz" 18;
  overflow-x:hidden;
  position:relative;
}
/* parchment grain — engraved graticule + stipple, painted as a mask of the ink colour */
body::before{
  content:""; position:fixed; inset:0; pointer-events:none; z-index:0;
  --grain:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M15 0v120M45 0v120M75 0v120M105 0v120M0 15h120M0 45h120M0 75h120M0 105h120' stroke='currentColor' stroke-width='.5' opacity='.05'/><path d='M79.6 39.7q4.8 1.8 9.6-.5M67.2 41.4q6.3 1.9 12.6.2M27.3 77.3q6.1 1.5 12.2.5M77.1 84.9q6.5 1.8 13-.5M96.1 17.8q5.8 1.1 11.5 0M34.8 67.6q5.4.5 10.7.7M30.5 108.1q7.7 2 15.3.9M92 10.7q7.2-.2 14.4-.2M75.5 69.3q4.8 1 9.5.9M24 57.9q6.2-2.3 12.3-.4M22.9 70.9q5.9 2.2 11.7-.1' fill='none' stroke='currentColor' stroke-width='.45' stroke-linecap='round' opacity='.09'/><path d='M47.4 97.4v.1M10 17.9v.1M78 50v.1M7.8 54.2v.1M105.6 100.7v.1M79.9 41.6v.1M62.1 60v.1M92.8 57.1v.1M38.1 51.3v.1M6.9 5.3v.1M43.9 2.1v.1M99.4 51.9v.1M66.4 85.4v.1M82.3 6.1v.1M87.8 96.9v.1M51.7 78.6v.1M96.5 10.3v.1M116.6 9.9v.1M90.2 81.9v.1M109.8 115.1v.1M76.5 22v.1M32.3 17.1v.1M116.6 28.9v.1M115.4 58.9v.1M112.4 93.8v.1M8.6 66.1v.1M85.1 53.7v.1M105.5 40.4v.1M42.5 35.3v.1M68.2 27.1v.1M108.1 54.3v.1M19.5 35.6v.1M56.8 65.1v.1M84.4 24.9v.1' stroke='currentColor' stroke-width='1.1' stroke-linecap='round' opacity='.07'/><path d='M84.3 18.3v.1M40.7 104.9v.1M28.8 46.3v.1M66.3 19.2v.1M67 42.2v.1M61.1 39.3v.1M56.9 59.8v.1M39 38.9v.1M9.8 31.9v.1M37.3 2.2v.1M53.9 99.3v.1M18.4 3.8v.1M23.8 84.2v.1M97 16.6v.1M100.3 79.9v.1M109.8 80.1v.1M49.5 88.5v.1M21.7 88.8v.1M103 6.4v.1M12.8 13.2v.1M64.4 73.5v.1M25.4 96.1v.1M103 107.5v.1M39.3 81v.1M60.5 10.5v.1M19.7 15.4v.1M114.7 43.5v.1M78 64.7v.1M71.4 99.1v.1M106.9 94.3v.1M83.8 12.9v.1M57.6 22.6v.1M66 98.9v.1M101.3 26.1v.1M82.5 99.3v.1M45 48.4v.1M71.9 56.2v.1M100.9 112.8v.1M97.2 105.7v.1M31.7 30.9v.1M3.4 14.8v.1M67.1 7v.1M27 36.7v.1M55.2 82.9v.1M8 27.2v.1M14.3 76.7v.1M88.8 27.5v.1M6.2 84.3v.1M46.4 40v.1M5.5 40.8v.1M96.3 27.4v.1M36 57.9v.1M63.5 24.9v.1M107.8 27.3v.1M51.7 14.5v.1M87.5 115.2v.1M22.5 101.5v.1M16.6 22.8v.1M84.8 93.4v.1M8.6 77v.1M34.5 9.2v.1M93.7 38.8v.1M3.5 74.9v.1M76 8.6v.1M55.4 27.5v.1M27.8 9.6v.1M41.5 87.9v.1M41.7 19.5v.1M69.8 35.6v.1M104.9 65.2v.1' stroke='currentColor' stroke-width='.65' stroke-linecap='round' opacity='.09'/></svg>");
  background:var(--ink);
  -webkit-mask:var(--grain) 0 0/120px 120px repeat; mask:var(--grain) 0 0/120px 120px repeat;
  opacity:.85;
}
a{color:var(--sienna);text-decoration-thickness:1px;text-underline-offset:3px}
a:hover{color:var(--terra)}
:focus-visible{outline:2px solid var(--ochre);outline-offset:3px;border-radius:2px}
button{font:inherit;color:inherit}
img,svg{max-width:100%}
.wrap{max-width:1180px;margin:0 auto;padding:0 clamp(16px,4vw,40px);position:relative;z-index:1}
.sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.mono{font-family:var(--ff-mono);font-size:.78em;letter-spacing:.02em}
.small{font-size:.85em;color:var(--ink-2)}
.muted{color:var(--ink-3)}
.italic{font-style:italic}
h1,h2,h3,h4{font-family:var(--ff-display);font-weight:500;line-height:1.08;margin:0;font-variation-settings:"opsz" 72,"SOFT" 40}
h2{font-size:clamp(30px,3.4vw,46px);letter-spacing:-.01em}
h3{font-size:clamp(20px,1.6vw,25px);font-variation-settings:"opsz" 36,"SOFT" 30}
h4{font-size:1.05rem;font-variation-settings:"opsz" 18,"SOFT" 20}
p{margin:.5em 0 1em}
.deck{font-family:var(--ff-body);font-style:italic;font-size:1.12em;color:var(--ink-2);max-width:62ch;font-variation-settings:"opsz" 24}
.eyebrow{font-family:var(--ff-mono);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:var(--terra)}
hr.rule{border:0;height:1px;background:linear-gradient(90deg,transparent,var(--rule),transparent);margin:2rem 0}
[tabindex="-1"]:focus{outline:none}

/* ———— perforation frame: the signature motif ———— */
.perf{
  --hole-r:3px; --hole-gap:11px;
  padding:7px; background:var(--paper-2);
  -webkit-mask:
    radial-gradient(circle var(--hole-r) at 50% 50%, transparent 98%, #000 100%) calc(var(--hole-gap)/-2) calc(var(--hole-gap)/-2)/var(--hole-gap) var(--hole-gap),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask-composite: source-over;
          mask:
    radial-gradient(circle var(--hole-r) at 50% 50%, transparent 98%, #000 100%) calc(var(--hole-gap)/-2) calc(var(--hole-gap)/-2)/var(--hole-gap) var(--hole-gap),
    linear-gradient(#000 0 0) content-box;
          mask-composite: add;
}
.perf > .inner{background:var(--paper-2);border:1px solid var(--rule-soft);padding:clamp(14px,2vw,22px);height:100%}
a.perf{display:block;text-decoration:none;color:inherit}
.card{background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--radius);padding:clamp(14px,2vw,22px);box-shadow:var(--shadow)}
.card.flat{box-shadow:none}
.grid{display:grid;gap:clamp(12px,1.6vw,20px)}
.g2{grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))}
@media (min-width:761px){.g2.split{grid-template-columns:var(--split)}}
.g3{grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.g4{grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}
.g5{grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))}

/* ———— masthead ———— */
.masthead{position:relative;z-index:2;padding:18px 0 8px;border-bottom:1px solid var(--rule)}
.masthead .wrap{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.brand{display:flex;align-items:center;gap:14px;text-decoration:none;color:var(--ink)}
.brand .rose{width:44px;height:44px;flex:none}
.brand .name{font-family:var(--ff-display);font-size:1.7rem;font-weight:600;letter-spacing:.01em;font-variation-settings:"opsz" 60,"SOFT" 60;line-height:1}
.brand .name small{display:block;font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:var(--ink-3);margin-top:5px;font-weight:400}
.mast-right{margin-left:auto;display:flex;gap:10px;align-items:center}
.btn{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--rule);background:var(--paper-2);color:var(--ink);padding:8px 14px;border-radius:999px;font-family:var(--ff-mono);font-size:.74rem;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:transform .15s,background .15s,border-color .15s;text-decoration:none}
.btn:hover{background:var(--paper-3);border-color:var(--ink-4);transform:translateY(-1px);color:var(--ink)}
.btn.primary{background:var(--terra);border-color:var(--terra);color:#fff7ea}
.btn.primary:hover{background:var(--sienna);border-color:var(--sienna);color:#fff7ea}
.btn.ghost{background:transparent}
.btn svg{width:14px;height:14px}

/* ———— contents nav: album tab dividers, one per PART ————
   Now each tab is a LINK to that Part's page. The Contents button holds the
   whole map of the atlas; the running head says where you are. */
.nav{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--paper) 88%,transparent);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--rule)}
.nav-row{display:flex;align-items:stretch;gap:4px;min-height:46px}
.parts{list-style:none;margin:0;padding:0;display:flex;gap:2px;min-width:0}
.parts li{flex:none}
.part-btn,.contents-btn{display:flex;flex-direction:column;justify-content:center;gap:2px;height:100%;padding:6px 11px 5px;background:none;border:0;border-bottom:3px solid transparent;border-radius:0;font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-2);cursor:pointer;white-space:nowrap;text-align:left;text-decoration:none}
.part-btn small,.contents-btn small{font-size:.58rem;letter-spacing:.14em;color:var(--ink-4)}
.part-btn:hover,.contents-btn:hover,.contents-btn[aria-expanded="true"]{color:var(--ink);background:var(--paper-2)}
.part-btn[aria-current="page"]{color:var(--terra);border-bottom-color:var(--terra)}
.part-btn[aria-current="page"] small{color:var(--terra);opacity:.75}
.part-btn{flex-direction:row;align-items:center;gap:9px}
.part-btn .pcol{display:flex;flex-direction:column;gap:2px;min-width:0}
.emblem{display:inline-flex;flex:none;color:var(--ink-3)}
.emblem svg{width:1.15em;height:1.15em;display:block}
.part-btn[aria-current="page"] .emblem,.part-btn:hover .emblem{color:var(--terra)}
.contents-part .cp-head{display:flex;align-items:center;gap:11px;margin-bottom:6px}
.contents-part .cp-head .emblem{color:var(--ochre)}
.contents-part .cp-head .emblem svg{width:23px;height:23px}
.contents-part .cp-head .eyebrow{margin-bottom:0}
.ch-divider{color:color-mix(in oklab,var(--ink) 32%,transparent);margin:4px auto clamp(12px,2.6vw,26px);max-width:1180px;padding:0 clamp(16px,4vw,40px)}
.ch-divider svg{display:block;width:100%;height:34px}
.chapter:first-of-type .ch-divider{display:none}
.footseal{color:var(--sienna);--seal-accent:var(--terra);width:58px;height:58px;flex:none;opacity:.92;align-self:center}
.footseal svg{width:100%;height:100%;display:block}
.contents-btn{flex-direction:row;align-items:center;align-self:center;height:auto;gap:8px;padding:7px 10px;border:1px solid transparent;border-radius:999px}
.contents-btn svg{width:16px;height:16px;flex:none}
.contents-btn .lbl b{color:var(--terra);font-weight:500;margin-right:4px}
.contents-btn .lbl .here{display:none}
.nav-here{margin-left:auto;display:flex;align-items:center;justify-content:flex-end;gap:8px;font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3);padding:0 10px;min-width:0;flex:1 1 0}
.nav-here b{color:var(--terra);font-weight:500;flex:none}
.nav-here span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:30ch;min-width:0}
.index-btn{align-self:center;flex:none;padding:5px 11px;margin-left:auto}
.nav-here + .index-btn{margin-left:0}
.index-btn kbd,.contents-foot kbd,.gaz kbd{font-family:var(--ff-mono);font-size:.6rem;border:1px solid var(--rule);border-radius:3px;padding:0 5px;color:var(--ink-3);line-height:1.5}
/* desktop: the Contents button is icon-only (the tabs carry the words); the running head needs real room */
@media (min-width:1041px){.contents-btn .lbl{display:none}.contents-btn{padding:7px 9px}}
@media (max-width:1320px){.nav-here{display:none}}
@media (max-width:1040px){.parts{display:none}.contents-btn .lbl .here{display:inline}.contents-btn .lbl .word{display:none}.nav-here + .index-btn{margin-left:auto}}
@media (max-width:640px){.index-btn kbd{display:none}}
/* the contents page itself: drops from the tab strip */
.contents{position:absolute;left:0;right:0;top:100%;background:var(--paper);border-bottom:1px solid var(--rule);box-shadow:var(--shadow);max-height:calc(100vh - 56px);overflow:auto}
.contents[hidden]{display:none}
.contents > .wrap{padding-top:20px;padding-bottom:18px}
.contents-top{display:flex;flex-wrap:wrap;gap:6px 18px;align-items:center;padding-bottom:12px;margin-bottom:14px;border-bottom:1px solid var(--rule-soft)}
.contents-top a{font-family:var(--ff-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--ink-2);padding:4px 8px;border-radius:4px}
.contents-top a:hover{background:var(--paper-2);color:var(--terra)}
.contents-top a[aria-current="page"]{color:var(--terra);background:var(--paper-2)}
.contents-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:18px 26px}
.contents-part{transition:opacity .2s}
.contents-part .eyebrow{display:block;margin-bottom:2px}
.contents-part h4{font-size:1.15rem;margin:0 0 4px}
.contents-part h4 a{text-decoration:none;color:inherit}
.contents-part h4 a:hover{color:var(--terra)}
.contents-part ol{list-style:none;margin:0;padding:8px 0 0;display:grid;gap:2px;border-top:1px solid var(--rule-soft)}
.contents-part a.ch{display:grid;grid-template-columns:2.8ch 1fr;gap:2px 8px;text-decoration:none;color:var(--ink);padding:5px 6px;border-radius:4px;font-size:.95em;line-height:1.3}
.contents-part a.ch b{font-family:var(--ff-mono);font-size:.7rem;color:var(--ochre);font-weight:500;padding-top:3px;text-align:right}
.contents-part a.ch:hover{background:var(--paper-2);color:var(--terra)}
.contents-part a.ch[aria-current="page"]{color:var(--terra);background:var(--paper-2)}
.contents-part a.ch[aria-current="page"]::after{content:"you are here";grid-column:2;font-family:var(--ff-mono);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.contents-part a.ch .st{grid-column:2;font-family:var(--ff-mono);font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4)}
.contents-foot{display:flex;flex-wrap:wrap;gap:10px 20px;justify-content:space-between;align-items:center;margin-top:18px;padding-top:12px;border-top:1px solid var(--rule-soft);font-size:.86em;color:var(--ink-3);font-style:italic}
.contents-foot .btn{font-style:normal}

/* ———— FRONTISPIECE (home) ———— */
.front{position:relative;padding:clamp(34px,6vw,76px) 0 clamp(18px,3vw,30px);overflow:hidden}
.front .wrap{display:grid;grid-template-columns:1.25fr .85fr;gap:clamp(24px,4vw,56px);align-items:center}
@media (max-width:860px){.front .wrap{grid-template-columns:1fr}}
.front h1{font-size:clamp(40px,6vw,80px);font-weight:400;letter-spacing:-.02em;line-height:.98;font-variation-settings:"opsz" 144,"SOFT" 70;max-width:11em;text-wrap:balance}
.front h1 em{font-style:italic;font-weight:300;color:var(--terra)}
.front .lede{font-size:clamp(18px,1.4vw,22px);color:var(--ink-2);max-width:56ch;font-variation-settings:"opsz" 24}
.front .lede strong{color:var(--ink);font-weight:500}
.front .actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
.hero-plate{position:relative}
.hero-graticule{position:absolute;inset:-40% -30% -40% -20%;pointer-events:none;opacity:.35;z-index:0}
.bigfacts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:22px}
@media (max-width:520px){.bigfacts{grid-template-columns:1fr 1fr}}
.bigfacts .bf{border-top:2px solid var(--rule);padding-top:8px}
.bigfacts .n{font-family:var(--ff-display);font-size:clamp(28px,3vw,42px);font-weight:600;line-height:1;font-variation-settings:"opsz" 144,"SOFT" 30;color:var(--ink);letter-spacing:-.02em}
.bigfacts .n small{font-size:.5em;font-weight:400;color:var(--ink-3)}
.bigfacts .l{font-family:var(--ff-mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);margin-top:6px}

/* the dashboard bands under the frontispiece */
.band{padding:clamp(22px,3.5vw,44px) 0;border-top:1px solid var(--rule)}
.band-head{display:flex;justify-content:space-between;align-items:baseline;gap:10px 18px;flex-wrap:wrap;margin-bottom:clamp(12px,2vw,20px)}
.band-head h2{font-size:clamp(24px,2.6vw,34px);font-weight:400;font-variation-settings:"opsz" 96,"SOFT" 40}
.band-head .eyebrow{display:block;margin-bottom:4px}
.band-head .more{font-family:var(--ff-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none}
.tile{display:flex;flex-direction:column;gap:6px;min-height:118px}
.tile .n{font-family:var(--ff-display);font-size:clamp(30px,3.2vw,44px);font-weight:600;letter-spacing:-.02em;line-height:1;font-variation-settings:"opsz" 144,"SOFT" 30}
.tile .n small{font-size:.5em;font-weight:400;color:var(--ink-3);letter-spacing:0}
.tile .n .rng{font-size:.72em;font-weight:500}
.tile .l{font-family:var(--ff-mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.tile .s{font-size:.86em;color:var(--ink-2);font-style:italic;margin-top:auto}
.tile.accent .n{color:var(--terra)}
.tile.gold .n{color:var(--ochre)}
.tile .s .tag{font-style:normal;margin-right:3px}
.survey-line{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;margin-top:16px;font-size:.92em;color:var(--ink-2)}
.survey-line .meterbar{flex:1 1 220px;height:10px;border-radius:3px;overflow:hidden;display:flex;background:var(--paper-3)}
.survey-line .meterbar i{display:block;height:100%}

/* stamp of the day + hooks */
.today-grid{display:grid;grid-template-columns:1.25fr .85fr;gap:clamp(14px,2vw,24px);align-items:stretch}
@media (max-width:900px){.today-grid{grid-template-columns:1fr}}
.sotd{display:grid;grid-template-columns:minmax(150px,210px) 1fr;gap:clamp(14px,2vw,26px);align-items:start;height:100%}
@media (max-width:560px){.sotd{grid-template-columns:1fr}.sotd .plate{max-width:220px}}
.sotd h3{font-size:clamp(24px,2.6vw,34px);font-weight:400;font-variation-settings:"opsz" 96,"SOFT" 40;margin:6px 0 4px;line-height:1.1}
.sotd h3 a{text-decoration:none;color:inherit}
.sotd h3 a:hover{color:var(--terra)}
.sotd .taste{font-size:1.05em;color:var(--ink-2)}
.sotd .idline{display:flex;flex-wrap:wrap;gap:4px 12px;font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin-top:8px}
.sotd .foot{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin-top:14px}
.sotd .rot{font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-4)}
.hooks{display:grid;gap:clamp(12px,1.6vw,20px);align-content:start}
.hook .q{font-family:var(--ff-display);font-size:clamp(19px,1.8vw,24px);font-weight:400;line-height:1.25;font-variation-settings:"opsz" 72,"SOFT" 50;margin-top:6px}
.hook .a{margin-top:8px;color:var(--ink-2);font-size:.95em}
.hook .grounded{display:flex;flex-wrap:wrap;gap:4px 12px;font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3);margin-top:10px;border-top:1px dashed var(--rule);padding-top:8px}
.hook .grounded a{text-decoration:none}
.surprise{border-left:4px solid var(--terra)}

/* doorways into the five Parts */
.doors{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,205px),1fr));gap:clamp(12px,1.6vw,20px)}
.door{display:flex;flex-direction:column;gap:8px;text-decoration:none;color:var(--ink);position:relative;transition:transform .2s;height:100%}
.door:hover{transform:translateY(-2px);color:var(--ink)}
.door .top{display:flex;align-items:center;justify-content:space-between;gap:8px}
.door .emblem{color:var(--ochre)}
.door .emblem svg{width:30px;height:30px}
.door .num{font-family:var(--ff-display);font-size:1.9rem;font-weight:300;color:var(--ochre);line-height:1}
.door h3{margin-top:2px;font-size:clamp(19px,1.5vw,23px)}
.door .blurb{font-size:.9em;font-style:italic;color:var(--ink-2);margin:0}
.door .chs{display:flex;flex-wrap:wrap;gap:4px 8px;font-family:var(--ff-mono);font-size:.64rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3);margin-top:auto;padding-top:8px;border-top:1px solid var(--rule-soft)}
.door .chs .dim{color:var(--ink-4)}
.door .status{font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--terra)}
.door:hover .status{text-decoration:underline;text-underline-offset:3px}

/* recently named */
.recent{list-style:none;margin:0;padding:0;display:grid;gap:0}
.recent li{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:9px 0;border-top:1px solid var(--rule-soft)}
.recent li:first-child{border-top:0}
.recent .plate.sm{width:44px;padding:3px}
.recent .ttl{font-weight:500}
.recent .ttl a{text-decoration:none;color:inherit}
.recent .ttl a:hover{color:var(--terra)}
.recent .meta{font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.06em;color:var(--ink-3);margin-top:2px}
.recent .when{font-family:var(--ff-mono);font-size:.64rem;letter-spacing:.06em;color:var(--ink-4);white-space:nowrap}

/* ———— PART page ———— */
.part-hero{padding:clamp(30px,5vw,64px) 0 clamp(10px,2vw,22px)}
.part-hero .wrap{display:grid;grid-template-columns:auto 1fr;gap:12px clamp(18px,3vw,36px);align-items:start}
@media (max-width:640px){.part-hero .wrap{grid-template-columns:1fr}}
.part-hero .big{font-family:var(--ff-display);font-size:clamp(64px,9vw,120px);font-weight:300;line-height:.85;color:var(--ochre);font-variation-settings:"opsz" 144,"SOFT" 60;letter-spacing:-.02em;padding-top:8px}
.part-hero h1{font-size:clamp(34px,4.6vw,60px);font-weight:400;letter-spacing:-.015em;font-variation-settings:"opsz" 144,"SOFT" 60;line-height:1.02}
.part-hero .eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.part-hero .eyebrow .emblem{color:var(--ochre)}
.part-hero .eyebrow .emblem svg{width:22px;height:22px}
.part-hero .deck{margin-top:.5em}
.jump{display:flex;flex-wrap:wrap;gap:6px;margin-top:16px}
.jump a{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--rule);border-radius:999px;padding:4px 12px;font-size:.84em;background:var(--paper-2);text-decoration:none;color:var(--ink)}
.jump a b{font-family:var(--ff-mono);font-size:.66rem;color:var(--ochre);font-weight:500}
.jump a:hover{background:var(--paper-3);border-color:var(--ink-4);color:var(--terra)}
.jump a .st{font-family:var(--ff-mono);font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-4)}
.part-foot{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:26px 0 44px;border-top:1px solid var(--rule)}
.part-foot a{display:grid;gap:2px;text-decoration:none;color:var(--ink);max-width:46%}
.part-foot a small{font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.part-foot a span{font-family:var(--ff-display);font-size:1.25rem;font-variation-settings:"opsz" 36,"SOFT" 40}
.part-foot a:hover span{color:var(--terra)}
.part-foot a.next{text-align:right;margin-left:auto}

/* ———— chapter frame ———— */
.chapter{padding:clamp(44px,6vw,84px) 0;border-top:1px solid var(--rule);scroll-margin-top:52px}
.chapter-head{display:grid;grid-template-columns:auto 1fr;gap:16px 26px;align-items:start;margin-bottom:clamp(20px,3vw,36px)}
.chapter-head .numeral{font-family:var(--ff-display);font-size:clamp(34px,4vw,52px);font-weight:300;color:var(--ochre);line-height:1;font-variation-settings:"opsz" 144;padding-top:6px;min-width:2.2ch;text-align:right}
.chapter-head .deck{margin:.4em 0 0}
.chapter-head .eyebrow{margin-bottom:6px;display:block}
.chapter-head .eyebrow a{color:inherit;text-decoration:none}
.chapter-head .eyebrow a:hover{text-decoration:underline}

/* ———— data lists / bars ———— */
.bars{display:grid;gap:8px}
.bar{display:grid;grid-template-columns:minmax(120px,190px) 1fr auto;gap:12px;align-items:center;font-size:.92em}
.bar .lbl{line-height:1.2}
.bar .trk{display:block;height:12px;background:var(--paper-3);border-radius:2px;overflow:hidden;position:relative}
.bar .fil{display:block;height:100%;background:linear-gradient(90deg,var(--sienna),var(--terra));transform-origin:left;animation:grow .9s cubic-bezier(.2,.8,.2,1) both}
.bar .fil.g{background:linear-gradient(90deg,var(--umber),var(--ochre))}
.bar .fil.o{background:linear-gradient(90deg,var(--moss),var(--olive))}
.bar .val{font-family:var(--ff-mono);font-size:.76rem;color:var(--ink-2);min-width:4ch;text-align:right}
@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
table.tbl{width:100%;border-collapse:collapse;font-size:.92em}
table.tbl th{font-family:var(--ff-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);text-align:left;font-weight:500;padding:8px 10px 8px 0;border-bottom:1px solid var(--rule)}
table.tbl td{padding:8px 10px 8px 0;border-bottom:1px solid var(--rule-soft);vertical-align:top}
table.tbl td.num{font-family:var(--ff-mono);font-size:.8rem;text-align:right;white-space:nowrap}
table.tbl a{text-decoration:none;color:var(--ink);font-weight:500}
table.tbl a:hover{color:var(--terra)}
.scroll-x{overflow-x:auto}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--rule);border-radius:999px;padding:4px 11px;font-size:.84em;background:var(--paper-2);cursor:pointer;transition:background .15s,border-color .15s;text-decoration:none;color:var(--ink)}
.chip:hover,.chip[aria-pressed="true"]{background:var(--paper-3);border-color:var(--ink-4)}
.chip[aria-pressed="true"]{background:var(--terra);color:#fff7ea;border-color:var(--terra)}
.chip .k{font-family:var(--ff-mono);font-size:.7rem;color:var(--ink-3)}
.chip[aria-pressed="true"] .k{color:#fff7ea;opacity:.8}
.tag{display:inline-block;font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;padding:2px 8px;border-radius:3px;background:var(--paper-3);color:var(--ink-2)}
.tag.defunct{background:color-mix(in srgb,var(--terra) 16%,transparent);color:var(--terra)}
.tag.current{background:color-mix(in srgb,var(--moss) 18%,transparent);color:var(--moss)}
.tag.unknown{background:color-mix(in srgb,var(--ochre) 20%,transparent);color:var(--sienna)}
.tag.confirmed{background:color-mix(in srgb,var(--moss) 18%,transparent);color:var(--moss)}
.tag.candidate{background:color-mix(in srgb,var(--ochre) 24%,transparent);color:var(--sienna)}
.tag.nm{background:repeating-linear-gradient(45deg,var(--paper-3) 0 3px,var(--paper-2) 3px 6px);color:var(--ink-3)}
.tag.sample{background:color-mix(in srgb,var(--ochre) 30%,transparent);color:var(--umber)}

/* ———— charts (inline SVG) ———— */
.chart{width:100%;height:auto;display:block;font-family:var(--ff-mono)}
.chart text{fill:var(--ink-2);font-size:11px}
.chart .axis{stroke:var(--rule);stroke-width:1}
.chart .grid{stroke:var(--rule-soft);stroke-width:1;stroke-dasharray:2 4}
.chart .bar-rect{fill:var(--sienna);transition:fill .15s}
.chart .bar-rect.max{fill:var(--terra)}
.chart .cand{fill:url(#candhatch)}
.legend{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:.84em;color:var(--ink-2)}
.legend i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:6px;vertical-align:-1px}
.hatch-i{background:repeating-linear-gradient(45deg,var(--ink-4) 0 2px,transparent 2px 5px)!important}

/* ———— time machine / kv / timeline ———— */
.kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px 18px;margin:14px 0}
.kv > div{border-top:1px solid var(--rule);padding-top:6px}
.kv .k{font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.kv .v{font-size:1em;color:var(--ink)}
.timeline{position:relative;padding-left:22px;border-left:2px solid var(--rule);display:grid;gap:14px}
.timeline .ev{position:relative}
.timeline .ev::before{content:"";position:absolute;left:-28px;top:.45em;width:10px;height:10px;border-radius:50%;background:var(--ochre);border:2px solid var(--paper)}
.timeline .ev.cand::before{background:transparent;border:2px dashed var(--ochre)}
.timeline .ev .y{font-family:var(--ff-mono);font-size:.74rem;color:var(--terra);letter-spacing:.06em}
.timeline .ev .t{font-weight:500}
.timeline .ev .t a{text-decoration:none;color:inherit}
.timeline .ev .t a:hover{color:var(--terra)}
.timeline .ev .o{font-size:.88em;color:var(--ink-2)}

/* ———— map (survey chart) ———— */
.map-wrap{display:grid;grid-template-columns:1.6fr .9fr;gap:clamp(14px,2vw,24px);align-items:start}
@media (max-width:900px){.map-wrap{grid-template-columns:1fr}}
.map-frame{background:var(--sea);border:1px solid var(--rule);border-radius:var(--radius);position:relative;overflow:hidden;box-shadow:var(--shadow)}
.map-frame svg{display:block;width:100%;height:auto}
.map-frame .grat{stroke:var(--land-line);stroke-opacity:.28;stroke-width:.6;fill:none}
.map-frame .grat.major{stroke-opacity:.5;stroke-width:.9}
.map-frame .hatchband{fill:url(#maphatch);opacity:.5}
.map-frame .pin{cursor:pointer}
.map-frame .pin circle.c{fill:var(--terra);fill-opacity:.7;stroke:var(--paper);stroke-width:1.2;transition:fill-opacity .15s}
.map-frame .pin.defunct circle.c{fill:var(--ochre)}
.map-frame .pin.cand circle.c{fill:transparent;stroke:var(--terra);stroke-dasharray:2 1.5;stroke-width:1.2}
.map-frame .pin:hover circle.c,.map-frame .pin:focus-visible circle.c{fill-opacity:1}
.map-frame .pin text{font-family:var(--ff-mono);font-size:9px;fill:var(--ink);paint-order:stroke;stroke:var(--sea);stroke-width:3px;stroke-linejoin:round;pointer-events:none}
.map-frame .lat-l{font-family:var(--ff-mono);font-size:7.5px;fill:var(--land-line);opacity:.8;letter-spacing:.1em}
.map-frame .compass{opacity:.75}
.map-note{font-size:.84em;font-style:italic;color:var(--ink-3);margin-top:8px}
.mini-legend{display:flex;flex-wrap:wrap;gap:6px 14px;font-family:var(--ff-mono);font-size:.68rem;color:var(--ink-3);letter-spacing:.08em;text-transform:uppercase;align-items:center}
.mini-legend i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px;vertical-align:-1px}
.mini-legend i.hollow{background:transparent;border:1px dashed var(--terra)}
.place{min-height:200px}
.place .eyebrow{margin-bottom:6px;display:block}
.place h3{font-size:clamp(26px,2.6vw,34px);font-weight:400;font-variation-settings:"opsz" 96,"SOFT" 40;margin-bottom:6px}
.place .row{display:flex;gap:16px;flex-wrap:wrap;margin:10px 0}
.place .row > div{border-top:1px solid var(--rule);padding-top:5px;min-width:90px}
.place .row .k{font-family:var(--ff-mono);font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.place .row .v{font-weight:500}

/* ———— bubbles (themes) ———— */
.bubbles{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;padding:10px 0}
.bubble{--s:60px;width:var(--s);height:var(--s);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:var(--paper-3);border:1px solid var(--rule);cursor:pointer;line-height:1.05;padding:4px;transition:transform .2s,background .2s;font-family:var(--ff-display);font-variation-settings:"opsz" 24,"SOFT" 60;text-decoration:none;color:var(--ink)}
.bubble:hover{transform:scale(1.06);background:var(--ochre-2);border-color:var(--ochre);color:var(--ink)}
.bubble .t{font-size:clamp(.6rem,calc(var(--s) * .16),1.05rem)}
.bubble .c{font-family:var(--ff-mono);font-size:.62rem;color:var(--ink-3);margin-top:2px}

/* ———— connections ———— */
.pair{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:stretch}
@media (max-width:640px){.pair{grid-template-columns:1fr}.pair .link{transform:rotate(90deg)}}
.pair .link{display:flex;align-items:center;justify-content:center;color:var(--ochre)}
.obj{display:flex;gap:12px;align-items:flex-start;border-radius:4px;text-decoration:none;color:inherit}
.obj > div{min-width:0}
.obj:hover .ttl{color:var(--terra)}
.obj .ph{flex:none}
.obj .ttl{font-weight:500}
.obj .meta{font-family:var(--ff-mono);font-size:.7rem;color:var(--ink-3);letter-spacing:.04em;margin-top:3px}
.connect-note{margin-top:12px;font-style:italic;color:var(--ink-2);border-top:1px dashed var(--rule);padding-top:10px}

/* ———— placeholder plates (no real stamp imagery, ever) ———— */
.plate{position:relative;background:var(--paper-3);border:1px solid var(--rule);aspect-ratio:4/5;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:12px;overflow:hidden;color:var(--ink-2);border-radius:3px}
.plate.wide{aspect-ratio:16/9}
.plate:not(.sm):not(.full){max-width:340px;margin-inline:auto}
.plate.sm{width:78px;aspect-ratio:4/5;padding:6px;font-size:.6rem}
.plate::before{content:"";position:absolute;inset:6px;border:1px dashed var(--ink-4);border-radius:2px;pointer-events:none;opacity:.7;z-index:2}
.plate .ico{width:34%;max-width:64px;opacity:.75;margin-bottom:6px}
.plate.sm .ico{width:50%;margin-bottom:2px}
.plate .cap{font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;line-height:1.3}
.plate.sm .cap{font-size:.5rem;letter-spacing:.06em}
.plate.withheld{background:repeating-linear-gradient(135deg,var(--paper-3) 0 8px,var(--paper-2) 8px 16px)}
.plate.art{background:radial-gradient(ellipse at 50% 30%,color-mix(in srgb,var(--ochre) 28%,var(--paper-3)),var(--paper-3) 70%)}
.plate .prompt{font-size:.78em;font-style:italic;color:var(--ink-2);margin-top:8px;max-width:34ch;line-height:1.35}
.plate.sm .prompt{display:none}
/* an ORIGINAL engraved plate drawn as inline SVG for the atlas — never the stamp itself */
.plate.svgart{padding:0;background:var(--paper-3);color:var(--ink)}
.plate.svgart svg.art{position:absolute;inset:0;width:100%;height:100%;display:block}
.plate.svgart .cap{position:absolute;left:0;right:0;bottom:0;margin:0;padding:18px 10px 8px;background:linear-gradient(transparent,color-mix(in srgb,var(--umber) 72%,transparent));color:#f4ead8;text-align:left;z-index:1}
.plate.svgart.sm .cap{display:none}
.plate.svgart::before{border-color:color-mix(in srgb,var(--ink) 40%,transparent)}
/* a commissioned plate photograph served by the site (assets/plate-*.jpg) — original art, never a real stamp */
.plate.has-art{padding:0;color:#f4ead8}
.plate .plate-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.94)}
.plate.has-art .cap{position:absolute;left:0;right:0;bottom:0;margin:0;padding:20px 12px 9px;background:linear-gradient(transparent,rgba(30,18,10,.68));color:#f4ead8;text-align:left;text-transform:uppercase;letter-spacing:.1em;z-index:1}
:root[data-theme="dark"] .plate .plate-img{filter:saturate(.9) brightness(.8)}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]) .plate .plate-img{filter:saturate(.9) brightness(.8)}}
.plate-note{font-size:.8em;font-style:italic;color:var(--ink-3);margin-top:8px;line-height:1.35}

/* ———— STAMP page: room to ramble ———— */
.st-crumbs{font-family:var(--ff-mono);font-size:.64rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding-top:22px}
.st-crumbs a{color:var(--sienna);text-decoration:none}
.st-crumbs a:hover{color:var(--terra);text-decoration:underline}
.st-head{padding:clamp(14px,2.4vw,28px) 0 clamp(14px,2vw,24px)}
.st-head h1{font-size:clamp(34px,4.8vw,64px);font-weight:400;letter-spacing:-.015em;line-height:1.02;font-variation-settings:"opsz" 144,"SOFT" 60;max-width:20ch;text-wrap:balance}
.st-head h1 em{font-style:italic;font-weight:300;color:var(--terra)}
.st-idline{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;font-family:var(--ff-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin-top:12px}
.st-idline b{color:var(--ink-2);font-weight:500}
.stamp{display:grid;grid-template-columns:minmax(250px,330px) 1fr;gap:clamp(18px,3vw,48px);align-items:start;padding-bottom:clamp(30px,5vw,60px)}
@media (max-width:860px){.stamp{grid-template-columns:1fr}}
.st-side{position:sticky;top:60px;display:grid;gap:16px}
@media (max-width:860px){.st-side{position:static}}
.facts{display:grid}
.fact{display:grid;grid-template-columns:1fr auto;gap:1px 10px;padding:8px 0;border-top:1px solid var(--rule-soft);align-items:center}
.fact .k{font-family:var(--ff-mono);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.fact .v{font-size:.95em;grid-column:1;line-height:1.3}
.fact .v small{display:block;font-size:.8em;color:var(--ink-3);font-style:italic}
.fact .dot{grid-column:2;grid-row:1/3;align-self:center}
.dot{display:inline-flex;align-items:center;gap:5px;font-family:var(--ff-mono);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);white-space:nowrap}
.dot::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--ink-4);flex:none}
.dot.confirmed::before{background:var(--moss)}
.dot.candidate::before{background:var(--ochre)}
.dot.unknown::before{background:transparent;border:1px dashed var(--ink-4)}
.dot.nm::before{background:repeating-linear-gradient(45deg,var(--ink-4) 0 1px,transparent 1px 3px)}
.dot-key{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:10px;padding-top:8px;border-top:1px dashed var(--rule)}
.ramble{max-width:66ch;font-size:clamp(18px,1.05vw + 11px,20.5px);line-height:1.62}
.ramble h2{font-size:clamp(24px,2.4vw,32px);margin:1.5em 0 .45em;font-variation-settings:"opsz" 72,"SOFT" 40;font-weight:400;letter-spacing:-.005em}
.ramble h2:first-child{margin-top:0}
.ramble p{margin:0 0 1em}
.ramble .lede{font-size:1.14em;font-style:italic;color:var(--ink-2);font-variation-settings:"opsz" 24;margin-bottom:1.4em}
.ramble .cap::first-letter{font-family:var(--ff-display);font-size:3.6em;float:left;line-height:.78;padding:.08em .1em 0 0;color:var(--terra);font-weight:300;font-variation-settings:"opsz" 144,"SOFT" 70}
.ramble a.g{font-family:var(--ff-mono);font-size:.6em;color:var(--ochre);text-decoration:none;vertical-align:super;margin-left:1px;line-height:0}
.ramble a.g:hover{color:var(--terra)}
.ramble .pull{border-left:3px solid var(--ochre);padding:6px 0 6px 18px;margin:1.6em 0}
.sentence{font-family:var(--ff-display);font-size:clamp(22px,2.4vw,32px);font-weight:300;font-style:italic;line-height:1.25;font-variation-settings:"opsz" 96,"SOFT" 60;color:var(--ink)}
.sentence strong{font-weight:500;font-style:normal;color:var(--terra)}
.ramble .stub{border:1px dashed var(--rule);border-radius:var(--radius);padding:clamp(16px,2.4vw,28px);background:var(--paper-2)}
.ground{margin-top:32px;border-top:1px solid var(--rule);padding-top:12px;max-width:66ch}
.ground ol{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:7px;font-size:.88em;color:var(--ink-2)}
.ground li{display:grid;grid-template-columns:2.6ch 1fr;gap:2px 10px;align-items:baseline;scroll-margin-top:70px}
.ground li b{font-family:var(--ff-mono);color:var(--ochre);font-weight:500;font-size:.72rem;text-align:right}
.ground li .src{grid-column:2;display:flex;gap:6px;flex-wrap:wrap;align-items:center;font-family:var(--ff-mono);font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}
.ground li.hit{box-shadow:none;background:color-mix(in srgb,var(--ochre) 22%,transparent);border-radius:4px;animation:none}
.conns{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,215px),1fr));gap:12px;margin-top:12px}
.conn h4{display:flex;align-items:center;gap:8px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--rule-soft)}
.conn h4 .k{font-family:var(--ff-mono);font-size:.6rem;letter-spacing:.12em;color:var(--ink-4);font-weight:400;margin-left:auto}
.conn ul{list-style:none;margin:0;padding:0;display:grid;gap:7px}
.conn li{display:grid;gap:1px;font-size:.95em}
.conn li .why{font-size:.84em;color:var(--ink-3);font-style:italic;line-height:1.3}
.conn a{text-decoration:none;color:var(--ink);font-weight:500}
.conn a:hover{color:var(--terra)}
.conn .none{font-style:italic;color:var(--ink-4);font-size:.9em}
.st-section{margin-top:clamp(28px,4vw,44px)}
.st-section > .eyebrow{display:block;margin-bottom:8px}
.st-section h2{font-size:clamp(22px,2.2vw,30px);font-weight:400;font-variation-settings:"opsz" 72,"SOFT" 40}
.unk-list{list-style:none;margin:8px 0 0;padding:0;display:grid;gap:6px}
.unk-list li{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:baseline;font-size:.95em;color:var(--ink-2)}
.unk-list li::before{content:"";width:8px;height:8px;border:1px dashed var(--ink-4);border-radius:50%;transform:translateY(-1px)}
.st-nav{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px dashed var(--rule);padding-top:12px;margin-top:28px;font-family:var(--ff-mono);font-size:.64rem;letter-spacing:.1em;text-transform:uppercase}
.st-nav a{text-decoration:none;color:var(--sienna)}
.st-nav a:hover{color:var(--terra)}
.where{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center}
.where .pg{width:54px;height:66px;border:1px solid var(--rule);background:var(--paper);position:relative;border-radius:2px;flex:none}
.where .pg i{position:absolute;width:7px;height:9px;background:var(--paper-3);border:1px solid var(--rule)}
.where .pg i.me{background:var(--terra);border-color:var(--terra)}
.where .txt{font-size:.9em;color:var(--ink-2)}
.where .txt b{font-weight:500;color:var(--ink)}

/* ———— register ———— */
.reg-row .plate.sm{width:40px;padding:3px}
.reg-row td{vertical-align:middle}

/* ———— questions ———— */
.qa{display:grid;gap:0}
.qa details{border-top:1px solid var(--rule);padding:12px 0}
.qa details:last-child{border-bottom:1px solid var(--rule)}
.qa summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:baseline;gap:16px;font-family:var(--ff-display);font-size:1.15em;font-variation-settings:"opsz" 24,"SOFT" 40}
.qa summary::-webkit-details-marker{display:none}
.qa summary::after{content:"+";font-family:var(--ff-mono);color:var(--ochre);flex:none}
.qa details[open] summary::after{content:"−"}
.qa .ans{padding:8px 0 4px;color:var(--ink-2)}
.qa .ans .big{font-family:var(--ff-display);font-size:2em;color:var(--terra);font-weight:500;line-height:1;font-variation-settings:"opsz" 144;display:block;margin:6px 0}

/* ———— unknowns ———— */
.unk{display:grid;grid-template-columns:1fr 1.2fr;gap:clamp(14px,2vw,24px);align-items:start}
@media (max-width:820px){.unk{grid-template-columns:1fr}}
.unk .n{font-family:var(--ff-display);font-size:clamp(64px,9vw,120px);font-weight:300;line-height:.9;font-variation-settings:"opsz" 144,"SOFT" 60;color:var(--ochre);letter-spacing:-.03em}

/* ———— empty / off the edge ———— */
.empty{text-align:center;padding:clamp(60px,12vw,140px) 0}
.empty h1{font-size:clamp(34px,5vw,64px);font-weight:300;font-variation-settings:"opsz" 144,"SOFT" 70}
.empty p{max-width:52ch;margin:1em auto;color:var(--ink-2);font-style:italic}

.linkish{background:none;border:0;padding:0;margin:0;color:var(--sienna);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px;cursor:pointer;font:inherit;letter-spacing:inherit;text-transform:inherit}
.linkish:hover{color:var(--terra)}
/* running foot of every chapter: where you are, what's next */
.ch-foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px 16px;margin-top:clamp(28px,4vw,44px);padding-top:10px;border-top:1px dashed var(--rule);font-family:var(--ff-mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}
.ch-foot a{text-decoration:none;color:var(--sienna)}
.ch-foot a:hover{color:var(--terra)}
/* the thing the Index jumped to, briefly lit */
.hit:not(tr){animation:hit 2.2s ease-out both}
tr.hit>td{animation:hit 2.2s ease-out both}
@keyframes hit{0%{box-shadow:inset 0 0 0 200px color-mix(in srgb,var(--ochre) 28%,transparent),0 0 0 3px var(--ochre)}100%{box-shadow:inset 0 0 0 200px transparent,0 0 0 3px transparent}}
@media (prefers-reduced-motion: reduce){.hit:not(tr){outline:2px solid var(--ochre);outline-offset:3px}tr.hit>td{background:color-mix(in srgb,var(--ochre) 22%,transparent)}}

/* ———— the Index (gazetteer) ———— */
.gaz[hidden]{display:none}
.gaz{position:fixed;inset:0;z-index:60;display:flex;align-items:flex-start;justify-content:center;padding:min(10vh,80px) 16px 16px;background:rgba(30,18,10,.55);backdrop-filter:blur(3px)}
.gaz-box{width:100%;max-width:720px;max-height:min(80vh,720px);display:flex;flex-direction:column;background:var(--paper);color:var(--ink);border:1px solid var(--rule);border-radius:8px;box-shadow:0 30px 80px -20px rgba(0,0,0,.6);overflow:hidden}
.gaz-head{display:flex;align-items:center;flex-wrap:wrap;gap:6px 12px;padding:14px 16px 0}
.gaz-find{display:flex;align-items:center;gap:10px;margin:8px 16px 0;border-bottom:2px solid var(--rule);padding:6px 2px 8px}
.gaz-find:focus-within{border-bottom-color:var(--ochre)}
.gaz-find svg{width:18px;height:18px;color:var(--ink-3);flex:none}
.gaz-find input{flex:1;border:0;background:transparent;font-family:var(--ff-display);font-size:clamp(20px,2.4vw,26px);font-variation-settings:"opsz" 36,"SOFT" 40;color:var(--ink);outline:none;min-width:0;padding:0}
.gaz-find input::placeholder{color:var(--ink-4);font-style:italic;font-weight:300}
.gaz-kinds{display:flex;flex:none;gap:6px;overflow-x:auto;padding:10px 16px 8px;scrollbar-width:none}
.gaz-kinds::-webkit-scrollbar{display:none}
.gaz-kinds .chip{flex:none;font-size:.8em;line-height:1.5}
.gaz-list{overflow:auto;padding:4px 8px 8px;flex:1 1 auto;min-height:140px}
.gaz-group{font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-3);padding:12px 10px 4px}
.gaz-opt{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 10px;padding:7px 10px;border-radius:5px;cursor:pointer}
.gaz-opt .kind{font-family:var(--ff-mono);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);min-width:8ch}
.gaz-opt .lbl{flex:1 1 auto;line-height:1.3}
.gaz-opt .lbl mark{background:color-mix(in srgb,var(--ochre) 35%,transparent);color:inherit;border-radius:2px;padding:0 1px}
.gaz-opt .to{margin-left:auto;font-family:var(--ff-mono);font-size:.64rem;letter-spacing:.06em;color:var(--ink-3);white-space:nowrap}
.gaz-opt .to b{color:var(--ochre);font-weight:500}
.gaz-opt .hint{flex-basis:100%;font-size:.84em;color:var(--ink-2);font-style:italic;padding-left:calc(8ch + 10px)}
.gaz-opt[aria-selected="true"]{background:var(--paper-2);box-shadow:inset 0 0 0 1px var(--rule)}
.gaz-opt[aria-selected="true"] .lbl{color:var(--terra)}
.gaz-empty{padding:24px 12px;text-align:center;font-style:italic;color:var(--ink-3)}
.gaz-foot{display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 16px;padding:8px 16px 12px;border-top:1px solid var(--rule-soft);font-family:var(--ff-mono);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}
@media (max-width:560px){.gaz{padding:8px}.gaz-box{max-height:calc(100vh - 16px)}.gaz-opt .hint{padding-left:0}.gaz-opt .kind{min-width:0}.gaz-head .sub{display:none}}

/* ———— footer ———— */
footer{border-top:1px solid var(--rule);padding:32px 0 48px;color:var(--ink-3);font-size:.86em}
footer .wrap{display:flex;flex-wrap:wrap;gap:16px 40px;justify-content:space-between;align-items:flex-start}
footer .wrap > div{flex:1 1 320px;max-width:56ch}
.reveal{transition:opacity .6s ease,transform .6s ease}
:root.anim .reveal{opacity:0;transform:translateY(10px)}
:root.anim .reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion: reduce){:root.anim .reveal{opacity:1;transform:none}}
@media print{.nav,.mast-right,.gaz{display:none!important}.st-side{position:static}}
</style>
</head>
<body>
<a class="sr" href="#main">Skip to content</a>

<header class="masthead">
  <div class="wrap">
    <a class="brand" href="#/" aria-label="Stamp Atlas — frontispiece">
      <svg class="rose" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" stroke-width="1"/>
        <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" stroke-width=".6" stroke-dasharray="1 2"/>
        <path d="M24 3 L27 21 L24 24 L21 21Z M24 45 L21 27 L24 24 L27 27Z" fill="var(--terra)"/>
        <path d="M3 24 L21 21 L24 24 L21 27Z M45 24 L27 27 L24 24 L27 21Z" fill="currentColor"/>
        <path d="M9 9 L22 20 L24 24 L20 22Z M39 39 L26 28 L24 24 L28 26Z M39 9 L28 22 L24 24 L26 20Z M9 39 L20 26 L24 24 L22 28Z" fill="var(--ochre)" opacity=".9"/>
        <circle cx="24" cy="24" r="2.2" fill="var(--paper)" stroke="currentColor" stroke-width="1"/>
      </svg>
      <span class="name">Stamp Atlas<small>a collection, read as a map of time</small></span>
    </a>
    <div class="mast-right">
      <button class="btn" id="themeToggle" type="button" aria-pressed="false" title="Toggle lamplight (dark mode)">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5a6.5 6.5 0 1 0 6.3 8.1A5 5 0 0 1 8 1.5z" fill="currentColor"/></svg>
        <span class="lbl">Lamplight</span>
      </button>
    </div>
  </div>
</header>

<nav class="nav" aria-label="Contents">
  <div class="wrap nav-row">
    <button type="button" class="contents-btn" id="contentsBtn" aria-expanded="false" aria-controls="contentsPanel" aria-label="Contents" title="Contents">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <span class="lbl"><span class="word">Contents</span><span class="here">Contents</span></span>
    </button>
    <ul class="parts" id="partsList"></ul>
    <div class="nav-here" id="navHere"></div>
    <button type="button" class="btn index-btn" id="indexBtn" aria-haspopup="dialog" aria-controls="gaz" title="Search the index (press /)">
      <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5 14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      Index <kbd aria-hidden="true">/</kbd>
    </button>
  </div>
  <div class="contents" id="contentsPanel" hidden>
    <div class="wrap">
      <div class="contents-top" id="contentsTop"></div>
      <div class="contents-grid" id="contentsGrid"></div>
      <div class="contents-foot"><span id="contentsNote"></span><button type="button" class="btn" data-open-index="">Search the Index <kbd aria-hidden="true">/</kbd></button></div>
    </div>
  </div>
</nav>

<main id="main" style="position:relative;z-index:1">
  <div id="app"><p class="wrap muted italic" style="padding:40px 0">Charting…</p></div>
</main>
<noscript><p class="wrap muted italic" style="padding:40px 0">Stamp Atlas draws itself from a small file of facts, which needs scripts turned on. Every page of the atlas is reachable from this one address; the addresses after the <code>#</code> are the atlas's own page numbers.</p></noscript>

<footer>
  <div class="wrap">
    <div class="footseal" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true"><circle cx="32" cy="32" r="29" stroke-width="1.9" stroke-dasharray="0 3.65"/><circle cx="32" cy="32" r="25.5" stroke-width=".8"/><circle cx="32" cy="32" r="23.6" stroke-width=".4"/><circle cx="32" cy="32" r="21.6" stroke-width="2.6" stroke-dasharray=".45 1.45" opacity=".8"/><circle cx="32" cy="32" r="18.6" stroke-width=".5"/><g fill="var(--seal-accent,currentColor)" stroke="none"><path d="M32 15.5c3.1 5 3.1 11.6 0 17.2-3.1-5.6-3.1-12.2 0-17.2z"/><path d="M32 15.5c3.1 5 3.1 11.6 0 17.2-3.1-5.6-3.1-12.2 0-17.2z" transform="rotate(90 32 32)"/><path d="M32 15.5c3.1 5 3.1 11.6 0 17.2-3.1-5.6-3.1-12.2 0-17.2z" transform="rotate(180 32 32)"/><path d="M32 15.5c3.1 5 3.1 11.6 0 17.2-3.1-5.6-3.1-12.2 0-17.2z" transform="rotate(270 32 32)"/></g><g stroke-width=".55"><path d="M32 17.5c2.6 4.4 2.6 10.2 0 15-2.6-4.8-2.6-10.6 0-15z" transform="rotate(45 32 32)"/><path d="M32 17.5c2.6 4.4 2.6 10.2 0 15-2.6-4.8-2.6-10.6 0-15z" transform="rotate(135 32 32)"/><path d="M32 17.5c2.6 4.4 2.6 10.2 0 15-2.6-4.8-2.6-10.6 0-15z" transform="rotate(225 32 32)"/><path d="M32 17.5c2.6 4.4 2.6 10.2 0 15-2.6-4.8-2.6-10.6 0-15z" transform="rotate(315 32 32)"/><path d="M32 19.5v11" transform="rotate(45 32 32)"/><path d="M32 19.5v11" transform="rotate(135 32 32)"/><path d="M32 19.5v11" transform="rotate(225 32 32)"/><path d="M32 19.5v11" transform="rotate(315 32 32)"/></g><circle cx="32" cy="32" r="4.2" stroke-width=".5"/><circle cx="32" cy="32" r="2" fill="currentColor" stroke="none"/></svg></div>
    <div class="colophon">
      <div class="eyebrow">Stamp Atlas</div>
      <p><em>Every number in this atlas is an aggregate, computed from the photographed albums. No prices, no locations, no scans of modern designs — and no picture of any real stamp, ever. Where something is not yet known, it says so.</em></p>
      <p id="footStamp" class="mono"></p>
    </div>
    <div>
      <div class="eyebrow">Method</div>
      <p class="small">Photograph once, preserve forever, reprocess forever. A machine's reading is a candidate until a person confirms it; both are kept. A stamp is counted under the issuer whose name is printed on it, in the year it was issued — <em>Ceylon</em> stays Ceylon. Every story on a stamp's page is built from listed facts and nothing else; guesses are marked as guesses, and where the atlas cannot say something honestly, it says nothing and shows you the gap.</p>
    </div>
  </div>
</footer>

<!-- The Index: the atlas's back-of-book gazetteer. Built from the page registry and every real
     entity the projection carries. Open with the Index button, "/" or Ctrl/Cmd+K. -->
<div class="gaz" id="gaz" hidden role="dialog" aria-modal="true" aria-labelledby="gazTitle">
  <div class="gaz-box">
    <div class="gaz-head">
      <span class="eyebrow" id="gazTitle">Index · Gazetteer</span>
      <span class="small italic sub" style="color:var(--ink-3)">pages, chapters, stamps, issuers, people, themes and years — everything the atlas holds</span>
      <button class="btn ghost" type="button" id="gazClose" aria-label="Close the index" style="margin-left:auto">Close</button>
    </div>
    <label class="gaz-find">
      <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5 14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <span class="sr">Search the index</span>
      <input id="gazInput" type="text" role="combobox" aria-expanded="true" aria-controls="gazList" aria-autocomplete="list" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="a chapter · a stamp · an issuer · a person · a year">
    </label>
    <div class="gaz-kinds" id="gazKinds" role="group" aria-label="Filter the index by kind"></div>
    <div class="gaz-list" id="gazList" role="listbox" aria-label="Index entries"></div>
    <div class="gaz-foot"><span id="gazCount"></span><span><kbd>↑</kbd><kbd>↓</kbd> move · <kbd>↵</kbd> go · <kbd>esc</kbd> close</span></div>
  </div>
</div>

<script>
/* =====================================================================
   STAMP ATLAS — the public story page.
   Self-contained. On load it fetches /api/public.json and renders ONLY
   what that projection carries. Nothing philatelic is invented here: where
   the data has a number it shows; where it does not, the page says plainly
   that the ground is not yet charted. The atlas is a routed multi-page
   world — a frontispiece dashboard, one page per Part, a Register of named
   stamps and a page per stamp — but every surface renders honestly, and
   today's projection is nearly empty, so most of the map is blank paper.
   Everything on a stamp's page is built from its listed facts and nothing
   else; the projection shape those pages need is documented at the end.
   ===================================================================== */
(function(){
"use strict";
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const fmt = n => (n==null ? "—" : Number(n).toLocaleString("en-GB"));
const esc = s => String(s==null?"":s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\\"":"&quot;"}[c]));
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"];
const state = { route:null, chapter:null, dayOffset:0 };
let DATA = null;

/* ——— dates (a calendar day is parsed locally so it never slips) ——— */
const toDate = s => /^\\d{4}-\\d{2}-\\d{2}$/.test(String(s)) ? new Date(+s.slice(0,4), +s.slice(5,7)-1, +s.slice(8,10)) : new Date(s);
function niceDate(iso){ if(!iso) return ""; const d=toDate(iso); if(isNaN(d)) return String(iso); return d.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}); }
const asOfIso  = () => (DATA&&DATA.facts&&DATA.facts.asOf) || (DATA&&DATA.generatedAt) || null;
const asOfDate = () => niceDate(asOfIso()) || "an unrecorded day";
/* the seed day: the visitor's calendar day (plus the mock's offset) */
function seedDate(){ const d=new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()+state.dayOffset); return d; }
const seedIso = () => { const d=seedDate(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); };
/* deterministic day hash (FNV-1a over "salt:YYYY-MM-DD") → the same pick for everyone, all day */
function dayHash(salt){ const s=salt+":"+seedIso(); let h=0x811c9dc5; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,0x01000193)>>>0; } return h>>>0; }
const dayPick = (arr,salt) => arr.length ? arr[dayHash(salt)%arr.length] : null;

/* =====================================================================
   REGISTRY · the bounded axis. Five PARTS, each a page holding 2–5 chapters.
   Routes:  #/                    frontispiece (home dashboard)
            #/part/:part          a Part page (its chapters in sequence)
            #/part/:part/:chapter the same page, scrolled to a chapter
            #/chapter/:chapter    resolves to its Part page (stable deep link)
            #/stamps              the Register of identified stamps
            #/stamp/:id           one stamp — room to ramble
            #/stamp/today         resolves to the day's featured stamp
            #glance (legacy)      the old single-page anchors still work
   ===================================================================== */
const PARTS=[
  { id:"in-time",  title:"The World in Time",      blurb:"Headline counts, then the decades one by one.",           chapters:[["glance","Glance"],["time","Time"]] },
  { id:"places",   title:"Peoples & Places",       blurb:"Who issued, where they stood, whose faces they printed.", chapters:[["issuers","Issuers"],["map","Map"],["people","People"]] },
  { id:"subjects", title:"Subjects & Patterns",    blurb:"What recurs, what the whole looks like, what connects.",  chapters:[["themes","Themes"],["dna","DNA"],["connections","Connections"]] },
  { id:"object",   title:"The Physical Object",    blurb:"Money, paper, perforations, series and binders.",         chapters:[["language","Money"],["physical","Physical"],["sets","Sets"],["albums","Albums"],["colour","Colour"]] },
  { id:"reading",  title:"Reading the Collection", blurb:"Play, questions of scale, and the blank quarters.",       chapters:[["play","Play"],["questions","Questions"],["unknown","Unknowns"]] }
];
const CHAPTERS=PARTS.flatMap(p=>p.chapters);
const CH={};                                   // chapter meta, filled as chapters are built
const partOf=id=>PARTS.find(p=>p.chapters.some(c=>c[0]===id));
const partById=id=>PARTS.find(p=>p.id===id);
const shortOf=id=>(CHAPTERS.find(c=>c[0]===id)||[id,id])[1];
const idxOf=id=>CHAPTERS.findIndex(c=>c[0]===id);
const partHref=(p,ch)=>\`#/part/\${p.id}\${ch?"/"+ch:""}\`;
const chHref=id=>{ const p=partOf(id); return p?partHref(p,id):"#/"; };
const stampHref=id=>\`#/stamp/\${id}\`;
/* chapter titles are static so the Contents and Index can be built before a Part renders */
const CHAPTER_TITLES={glance:"The collection at a glance",time:"The world in time",issuers:"The issuers",map:"The map",people:"The people",themes:"The themes",dna:"The collection's DNA",connections:"Connections",language:"Money & language",physical:"The physical object",sets:"Sets & series",albums:"The albums",colour:"Colour",play:"Play & discovery",questions:"Questions of scale",unknown:"The unknowns"};
CHAPTERS.forEach((c,i)=>{ CH[c[0]]={i,title:CHAPTER_TITLES[c[0]]||c[1]}; });

/* ——— honesty layer (ported from the live page) ——— */
const metric   = id => ((DATA.facts&&DATA.facts.metrics)||[]).find(m=>m.metric===id);
const pendingOf= id => ((DATA.facts&&DATA.facts.pending)||[]).find(p=>p.metric===id);
const FRIENDLY = {
  albumCount:            {label:"Albums charted",             d:"physical albums photographed as evidence"},
  albumPositionCount:    {label:"Positions traversed",        d:"pages, covers, inserts and dividers walked through"},
  positionOccupancy:     {label:"Positions holding material", d:"positions actually seen to hold a stamp"},
  albumArchetypeCoverage:{label:"Album structures classified",d:"albums whose layout a person has identified"},
  countedStampCount:     {label:"Stamps counted",            d:"individual stamps a person has counted on the photographed pages — confirmed by hand, not a machine"},
  philatelicItemCount:   {label:"Stamps & items counted",    d:"individual stamps, covers and blocks found on a page — and how many are named"},
  distinctIssuerCount:   {label:"Distinct issuers",           d:"places whose name is printed on a stamp here"},
  extinctIssuerCount:    {label:"Issuers that no longer exist",d:"counted under the name printed, in the year issued"},
  distinctTerritoryCount:{label:"Distinct territories",       d:"places on the chart"},
};
const FRIENDLY_PENDING = {
  philatelicItemCount: "Stamps & items counted", distinctIssuerCount: "Distinct issuers", distinctTerritoryCount: "Distinct territories",
  extinctIssuerCount: "Issuers that no longer exist", earliestIssueYear: "Earliest year of issue",
  denominationCoverage:"Face values read", colourProfile:"Colour profile", perforationGauge:"Perforation gauge",
};
function disp(m){
  const v=m.value||{confirmed:0,candidate:0,unknown:0};
  const hasU=((v.candidate||0)+(v.unknown||0))>0;
  const pop=(m.eligiblePopulation!=null)?m.eligiblePopulation:((v.confirmed||0)+(v.candidate||0)+(v.unknown||0));
  const parts=[];
  if(v.confirmed) parts.push(v.confirmed+" confirmed");
  if(v.candidate) parts.push(v.candidate+" candidate");
  if(v.unknown)   parts.push(v.unknown+" not yet looked at");
  return { n: hasU ? (v.confirmed||0)+"<small>/ "+pop+"</small>" : String(v.confirmed||0),
           d: hasU ? parts.join(" · ") : (pop ? (v.confirmed||0)+" of "+pop+" — every one accounted for" : "nothing to count yet"),
           u: hasU, pop, v };
}
/* status vocabulary for a single fact on a stamp page */
const STATUS={confirmed:"confirmed",candidate:"*",unknown:"not known",nm:"not measurable"};
/* One reusable legend for the asterisk. A candidate carries a bare "*" mark rather than the
   word repeated on every card; this line, shown once per view, is what the mark means. */
const CANDLEGEND=\`<p class="small candlegend" style="color:var(--ink-3);margin-top:10px"><span class="dot candidate" style="vertical-align:baseline"></span> <strong>*</strong> the machine's reading — not yet confirmed by a person.</p>\`;
const SOURCE={printed:"printed on the stamp",reference:"reference",album:"album record",machine:"machine reading","machine+person":"machine, confirmed by a person",curator:"collector's note"};
const dot=(st,label)=>\`<span class="dot \${esc(st||"unknown")}">\${esc(label||STATUS[st]||st||"")}</span>\`;

/* ——— lookups over the projection ——— */
const stamps   = () => DATA.stamps||[];
const stampById= id => stamps().find(s=>s.id===id);
const storied  = () => stamps().filter(s=>s.story);
const issuerById=id=>(DATA.issuers||[]).find(i=>i.id===id);
const personById=id=>(DATA.people||[]).find(p=>p.id===id);
const themeById =id=>(DATA.themes||[]).find(t=>t.id===id);
const setById   =id=>(DATA.sets||[]).find(t=>t.id===id);
const albumById =id=>(DATA.albums||[]).find(a=>a.physicalAlbumId===id);
const yearOf    = s => s.identity.year&&s.identity.year.value;
const denomOf   = s => s.identity.denomination&&s.identity.denomination.value;
const issuerName= s => { const i=issuerById(s.identity.issuerId); return i?i.name:(s.identity.issuerAsPrinted&&s.identity.issuerAsPrinted.value)||"—"; };
/* the day's featured stamp: storied first, then any identified; null when none */
function stampOfTheDay(){ const pool=storied().length?storied():stamps(); return dayPick(pool,"stamp-of-the-day"); }

/* ——— ORIGINAL ART · engraved plates drawn as inline SVG for the atlas ———
   These are illustrations of a subject, never renderings of a stamp. */
const ART={
  tea(){ const rows=[]; for(let y=126;y<=196;y+=14){ const a=(y/14)%2?6:-6; rows.push(\`<path d="M-4 \${y} Q40 \${y+a} 80 \${y} T164 \${y}" fill="none" stroke="currentColor" stroke-width=".7" opacity=".8"/>\`);
      let scal=""; for(let x=-2;x<166;x+=9){ scal+=\`M\${x} \${y+7} q4.5 -5 9 0 \`; } rows.push(\`<path d="\${scal}" fill="none" stroke="var(--moss)" stroke-width="1.1" opacity=".9"/>\`); }
    let sky=""; for(let y=14;y<96;y+=5) sky+=\`M6 \${y}H154 \`;
    let rays=""; for(let a=0;a<360;a+=20){ rays+=\`<line x1="118" y1="58" x2="\${118+30*Math.cos(a*Math.PI/180)}" y2="\${58+30*Math.sin(a*Math.PI/180)}" stroke="var(--ochre)" stroke-width=".6" opacity=".55"/>\`; }
    return \`<svg class="art" viewBox="0 0 160 200" aria-hidden="true"><rect width="160" height="200" fill="var(--paper-3)"/>
      <path d="\${sky}" stroke="currentColor" stroke-width=".35" opacity=".28"/>
      \${rays}<circle cx="118" cy="58" r="15" fill="var(--ochre)" opacity=".9"/><circle cx="118" cy="58" r="15" fill="none" stroke="currentColor" stroke-width=".5"/>
      <path d="M-4 124 L46 62 L70 84 L96 48 L166 124Z" fill="var(--paper-2)" stroke="currentColor" stroke-width=".9" stroke-linejoin="round"/>
      <path d="M96 48 L104 64 L98 70 L112 88 L104 96 L122 118 M46 62 L52 76 L46 82 L58 100 L52 110 L64 122 M70 84 L78 98 L72 104 L84 120" fill="none" stroke="currentColor" stroke-width=".55" opacity=".7"/>
      <path d="M-4 124 Q40 112 80 124 T164 124 V200 H-4Z" fill="var(--moss)" opacity=".22"/>
      \${rows.join("")}
      <path d="M30 150 c0 -6 3 -9 6 -9 s6 3 6 9 M33 150 v14 M39 150 v14 M28 158 h16" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <path d="M92 164 c0 -6 3 -9 6 -9 s6 3 6 9 M95 164 v14 M101 164 v14 M90 172 h16" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <rect x="4" y="4" width="152" height="192" fill="none" stroke="currentColor" stroke-width=".9"/></svg>\`; },
  numeral(){ let rings=""; [[74,26],[60,20],[46,15],[32,10]].forEach(([r,n],k)=>{ for(let i=0;i<n;i++){ const a=(i/n)*Math.PI*2+k*.3; rings+=\`<text x="\${(80+r*Math.cos(a)).toFixed(1)}" y="\${(104+r*Math.sin(a)).toFixed(1)}" font-size="\${(6+k*1.2).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(\${(a*180/Math.PI+90).toFixed(0)} \${(80+r*Math.cos(a)).toFixed(1)} \${(104+r*Math.sin(a)).toFixed(1)})" fill="currentColor" opacity="\${(.22+k*.14).toFixed(2)}" font-family="var(--ff-mono)">0</text>\`; } });
    let hatch=""; for(let y=10;y<196;y+=4) hatch+=\`M6 \${y}H154 \`;
    return \`<svg class="art" viewBox="0 0 160 200" aria-hidden="true"><rect width="160" height="200" fill="var(--paper-3)"/>
      <path d="\${hatch}" stroke="currentColor" stroke-width=".3" opacity=".22"/>
      <path d="M12 40 C40 46 60 70 78 118 S128 176 150 184" fill="none" stroke="var(--terra)" stroke-width="1.6" stroke-dasharray="3 2" opacity=".85"/>
      \${rings}
      <text x="80" y="112" text-anchor="middle" font-family="var(--ff-display)" font-weight="600" font-size="58" fill="var(--terra)" letter-spacing="-2">50</text>
      <text x="80" y="134" text-anchor="middle" font-family="var(--ff-mono)" font-size="7.5" fill="currentColor" letter-spacing="3">MILLIARDEN</text>
      <text x="80" y="24" text-anchor="middle" font-family="var(--ff-mono)" font-size="6" fill="currentColor" opacity=".7" letter-spacing="2">NOVEMBER · 1923</text>
      <rect x="4" y="4" width="152" height="192" fill="none" stroke="currentColor" stroke-width=".9"/></svg>\`; },
};

/* ——— small builders (plate / chapter frame / perforated tile) ——— */
const icoFrame = \`<svg class="ico" viewBox="0 0 64 80" aria-hidden="true"><rect x="6" y="6" width="52" height="68" rx="2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M14 58 L26 40 L34 50 L42 34 L50 58Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><circle cx="22" cy="24" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>\`;
const icoLock  = \`<svg class="ico" viewBox="0 0 64 80" aria-hidden="true"><rect x="6" y="6" width="52" height="68" rx="2" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="20" y="36" width="24" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M25 36v-6a7 7 0 0 1 14 0v6" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>\`;
const icoQuill = \`<svg class="ico" viewBox="0 0 64 80" aria-hidden="true"><rect x="6" y="6" width="52" height="68" rx="2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M18 62 C22 40, 34 26, 48 18 C44 34, 36 48, 22 58Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M18 62 L30 44" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>\`;
function plate(kind, opts={}){
  const size = opts.size||"";
  if(kind==="svgart" && opts.art && ART[opts.art]){
    return \`<figure class="plate svgart \${size}" role="img" aria-label="\${esc(opts.alt||opts.cap||"Original engraved plate")}">\${ART[opts.art]()}\${opts.cap&&size!=="sm"?\`<figcaption class="cap">\${esc(opts.cap)}</figcaption>\`:""}</figure>\`;
  }
  // A commissioned, original engraved plate served by the site (never a real stamp) — show the art itself.
  // \`withheld\` can never take art: it stands for a real in-copyright stamp we must not show.
  if(opts.src && kind!=="withheld"){
    const label = opts.alt || (opts.cap ? String(opts.cap).replace(/<br>/g," — ") : "Original engraved plate");
    return \`<figure class="plate art has-art \${size}" role="img" aria-label="\${esc(label)}">\`
      + \`<img class="plate-img" src="\${esc(opts.src)}" alt="" loading="\${opts.eager?"eager":"lazy"}"\${opts.eager?' fetchpriority="high"':''} decoding="async" aria-hidden="true">\`
      + (opts.cap ? \`<figcaption class="cap">\${opts.cap}</figcaption>\` : "")
      + \`</figure>\`;
  }
  const cls = kind==="withheld"?"withheld":kind==="art"?"art":"";
  const cap = kind==="withheld" ? "In copyright<br>image withheld"
            : kind==="art"      ? (opts.cap||"Commissioned plate<br>pending")
            :                     (opts.cap||"Era illustration<br>pending");
  const ico = kind==="withheld"?icoLock:kind==="art"?icoQuill:icoFrame;
  const alt = opts.alt || cap.replace(/<br>/g," — ");
  return \`<div class="plate \${cls} \${size}" role="img" aria-label="\${esc(alt)}">\${ico}<div class="cap">\${cap}</div>\${opts.prompt?\`<div class="prompt">\${esc(opts.prompt)}</div>\`:""}</div>\`;
}
/* a stamp's image, by policy: original art · withheld (in copyright) · pending. Never the stamp. */
function stampPlate(s, size){
  const im=s.image||{kind:"pending"};
  if(im.kind==="art" && ART[im.artId]) return plate("svgart",{art:im.artId,size,cap:im.caption,alt:im.alt});
  if(im.kind==="withheld") return plate("withheld",{size,alt:"In copyright — image withheld",prompt:size==="sm"?"":im.reason});
  return plate("art",{size,cap:im.caption||"Commissioned plate<br>pending",prompt:size==="sm"?"":(im.prompt||"An original plate will stand here — never the stamp itself.")});
}
function chapter(id, i, title, deck, body){
  CH[id]={i,title,deck}; const p=partOf(id); const pn=PARTS.indexOf(p);
  return \`<section class="chapter reveal" id="\${id}" aria-labelledby="\${id}-h">
    <div class="ch-divider" aria-hidden="true">\${DIVIDER}</div>
    <div class="wrap">
      <div class="chapter-head"><div class="numeral" aria-hidden="true">\${ROMAN[i]}</div>
        <div><span class="eyebrow">\${p?\`<a href="\${partHref(p)}">Part \${ROMAN[pn]} · \${esc(p.title)}</a> &nbsp;·&nbsp; \`:""}Chapter \${i+1}</span><h2 id="\${id}-h" tabindex="-1">\${title}</h2><p class="deck">\${deck}</p></div></div>
      \${body}
      <div class="ch-foot" data-ch-foot="\${id}"></div>
    </div></section>\`;
}
function tile(n, l, s, cls="", key, href){ const open=href?\`<a class="perf" href="\${esc(href)}"\`:\`<div class="perf"\`; const close=href?"</a>":"</div>";
  return \`\${open}\${key?\` data-key="\${esc(key)}"\`:""}><div class="inner tile \${cls}"><div class="n">\${n}</div><div class="l">\${l}</div>\${s?\`<div class="s">\${s}</div>\`:""}</div>\${close}\`; }
function metricTile(id, cls, href){ const m=metric(id); if(!m) return ""; const d=disp(m); const f=FRIENDLY[id]||{};
  return tile(d.n, esc(f.label||id), esc(d.d)+(f.d?\`<br><span class="muted">\${esc(f.d)}</span>\`:""), cls, id, href); }
function pendingTile(id){ const p=pendingOf(id); const label=FRIENDLY_PENDING[id]||id;
  return \`<div class="perf" data-key="\${esc(label)}"><div class="inner tile"><div class="n" style="font-weight:300;color:var(--ink-4)">—</div><div class="l">\${esc(label)}</div><div class="s"><span class="tag unknown">awaiting</span> \${p?esc(p.blockedBy):"not yet available"}</div></div></div>\`; }
function smartTile(id, cls, href){ return metric(id) ? metricTile(id, cls, href) : pendingTile(id); }
/* the span of years: confirmed headline, candidate stretch named honestly */
function yearsTile(which){
  const y=DATA.facts&&DATA.facts.years; const key=which==="earliest"?"earliestIssueYear":"latestIssueYear";
  if(!y||!y[which]||y[which].confirmed==null) return which==="earliest"?pendingTile("earliestIssueYear"):\`<div class="perf"><div class="inner tile"><div class="n" style="font-weight:300;color:var(--ink-4)">—</div><div class="l">Latest year of issue</div><div class="s"><span class="tag unknown">awaiting</span> identification</div></div></div>\`;
  const e=y[which]; const st=stampById(e.confirmedStampId);
  /* no anchor inside the tile — the tile itself is the link (nested <a> would split the markup) */
  const s=\`<span class="tag confirmed">confirmed</span>\${st?\` \${esc(st.short)} →\`:""}\${e.candidate!=null&&e.candidate!==e.confirmed?\`<br><span class="tag candidate">candidate</span> \${esc(String(e.candidate))} — the machine's reading, unchecked\`:""}\`;
  return tile(esc(String(e.confirmed)), which==="earliest"?"Earliest year of issue":"Latest year of issue", s, "gold", key, st?stampHref(st.id):chHref("time"));
}
function pendItems(ids){ return ids.map(id=>{ const p=pendingOf(id); if(!p) return ""; const label=FRIENDLY_PENDING[id]||id;
  return \`<li data-key="\${esc(label)}" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid var(--rule-soft);padding:9px 0"><span>\${esc(label)}</span><span class="mono" style="color:var(--ink-3)">awaiting \${esc(p.blockedBy)}</span></li>\`; }).filter(Boolean).join(""); }

/* ——— engraved ornaments: inline SVG, currentColor, decorative ——— */
const EMBLEMS=[
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 3h13M5.5 21h13"/><path d="M7.5 3.5c0 4.6 3.4 6.4 4.5 8.5-1.1 2.1-4.5 3.9-4.5 8.5M16.5 3.5c0 4.6-3.4 6.4-4.5 8.5 1.1 2.1 4.5 3.9 4.5 8.5"/><path d="M9.6 19.3h4.8M10.2 18h3.6" stroke-width=".7"/><path d="M12 12.5v3" stroke-width=".7" stroke-dasharray=".6 1.2"/><path d="M9.6 6.2h4.8" stroke-width=".7"/></svg>\`,
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.6" stroke-width=".6" stroke-dasharray="1.2 1.5"/><path d="M12 2.5l-1.8 7.7L2.5 12l7.7 1.8 1.8 7.7 1.8-7.7 7.7-1.8-7.7-1.8z" stroke-width=".8"/><path d="M12 2.5l1.8 7.7L12 12zM21.5 12l-7.7 1.8L12 12zM12 21.5l-1.8-7.7L12 12zM2.5 12l7.7-1.8L12 12z" fill="currentColor" stroke="none"/></svg>\`,
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" stroke-width=".8"/><path d="M6.5 17.5c0-7.3 4-11 11-11 0 7-3.7 11-11 11z"/><path d="M6.5 17.5l8.5-8.5" stroke-width=".7"/><path d="M9.2 14.8c1.5.3 2.8.1 4-.8M10.9 13.1c1.2.2 2.3-.1 3.2-.9M9.2 14.8c-.4-1.5-.2-2.8.7-4M10.9 13.1c-.3-1.2 0-2.3.8-3.2" stroke-width=".5"/></svg>\`,
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 15.5h19" stroke-width=".8"/><path d="M4.5 15.5h.01M8.5 15.5h.01M12.5 15.5h.01M16.5 15.5h.01M20.5 15.5h.01" stroke-width="2.1"/><path d="M4 17.5h4M9.5 17.5h4M15 17.5h4M4 19.5h4M9.5 19.5h4M15 19.5h4" stroke-width=".45"/><circle cx="10" cy="9" r="5.5" fill="var(--paper,#efe3cb)" fill-opacity=".85"/><circle cx="10" cy="9" r="5.5" stroke-width="1.1"/><path d="M14.3 13.3l5.2 5.2" stroke-width="1.6"/><path d="M6.6 6.6a4 4 0 0 1 2.6-1.6" stroke-width=".5"/></svg>\`,
  \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.2c-2.4-1.9-5.4-2.2-9-1.6v14.2c3.6-.6 6.6-.3 9 1.6 2.4-1.9 5.4-2.2 9-1.6V4.6c-3.6-.6-6.6-.3-9 1.6z"/><path d="M12 6.2v14.2"/><path d="M5 8.2c1.8-.3 3.3-.2 4.6.3M5 10.7c1.8-.3 3.3-.2 4.6.3M5 13.2c1.8-.3 3.3-.2 4.6.3M14.4 8.5c1.3-.5 2.8-.6 4.6-.3M14.4 11c1.3-.5 2.8-.6 4.6-.3M14.4 13.5c1.3-.5 2.8-.6 4.6-.3" stroke-width=".55"/><path d="M4 20.3c3-.5 5.6-.2 8 1.4 2.4-1.6 5-1.9 8-1.4" stroke-width=".55"/></svg>\`
];
const emblem=i=>\`<span class="emblem" aria-hidden="true">\${EMBLEMS[i]||""}</span>\`;
const DIVIDER=\`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="36" fill="currentColor" stroke="currentColor" stroke-width=".5" stroke-linejoin="round" aria-hidden="true"><svg x="50%" width="100%" overflow="visible"><g stroke="none"><rect x="-100%" y="17.6" width="100%" height=".8" transform="translate(-40 0)"/><rect y="17.6" width="100%" height=".8" transform="translate(40 0)"/><circle cx="-41" cy="18" r="1.1"/><circle cx="41" cy="18" r="1.1"/><circle cx="-36.5" cy="18" r=".5"/><circle cx="36.5" cy="18" r=".5"/></g><g transform="translate(0 18)scale(1.12)"><circle r="10.5" fill="none" stroke-dasharray="1 1.06"/><circle r="8.6" fill="none" stroke-width=".35"/><path d="M5.3-5.3L-1.27-1.27 0 0zM5.3 5.3L1.27-1.27 0 0zM-5.3 5.3L1.27 1.27 0 0zM-5.3-5.3L-1.27 1.27 0 0z" fill="none"/><path d="M5.3-5.3L1.27 1.27 0 0zM5.3 5.3L-1.27 1.27 0 0zM-5.3 5.3L-1.27-1.27 0 0zM-5.3-5.3L1.27-1.27 0 0z" stroke="none"/><path d="M0-13L-2.4 0 0 0zM13 0L0-2.4 0 0zM0 13L2.4 0 0 0zM-13 0L0 2.4 0 0z" fill="none"/><path d="M0-13L2.4 0 0 0zM13 0L0 2.4 0 0zM0 13L-2.4 0 0 0zM-13 0L0-2.4 0 0z" stroke="none"/><circle r="1.5" fill="none" stroke-width=".6"/></g></svg></svg>\`;
/* =====================================================================
   CHARTS · the survey chart (map) and the cabinet of decades
   ===================================================================== */
function surveyChart(opts={}){
  const W=720,H=360; const X=lon=>((+lon+180)/360*W).toFixed(1), Y=lat=>((90-(+lat))/180*H).toFixed(1);
  const iss=(DATA.issuers||[]).filter(i=>i.lat!=null);
  let grat="";
  for(let lon=-180;lon<=180;lon+=30) grat+=\`<line class="grat \${lon===0?"major":""}" x1="\${X(lon)}" y1="0" x2="\${X(lon)}" y2="\${H}"/>\`;
  for(let lat=-90;lat<=90;lat+=30) grat+=\`<line class="grat \${lat===0?"major":""}" x1="0" y1="\${Y(lat)}" x2="\${W}" y2="\${Y(lat)}"/>\`;
  const trop=[[23.44,"Tropic of Cancer"],[-23.44,"Tropic of Capricorn"],[0,"Equator"]].map(([la,t])=>\`<line class="grat" x1="0" y1="\${Y(la)}" x2="\${W}" y2="\${Y(la)}" stroke-dasharray="3 3"/><text class="lat-l" x="6" y="\${(+Y(la)-3).toFixed(1)}">\${t.toUpperCase()}</text>\`).join("");
  const pins=iss.map(i=>{ const st=(DATA.stamps||[]).find(s=>s.identity.issuerId===i.id); const href=st?stampHref(st.id):chHref("issuers"); const cls=i.status==="candidate"?"cand":(i.state==="defunct"?"defunct":"");
    const label=opts.compact&&i.status==="candidate"?"":i.name;
    return \`<a class="pin \${cls}" href="\${href}" data-issuer="\${esc(i.id)}"><title>\${esc(i.name)} · \${i.status==="candidate"?"machine candidate":"confirmed"} · \${i.items||0} item\${(i.items||0)===1?"":"s"}</title><circle class="c" cx="\${X(i.lon)}" cy="\${Y(i.lat)}" r="\${i.status==="candidate"?4:5.5}"/>\${label?\`<text x="\${(+X(i.lon)+8).toFixed(1)}" y="\${(+Y(i.lat)+3.5).toFixed(1)}">\${esc(label)}</text>\`:""}</a>\`; }).join("");
  const compass=\`<g class="compass" transform="translate(\${W-46} 46)" fill="none" stroke="var(--land-line)" stroke-width=".8"><circle r="22"/><circle r="16" stroke-dasharray="1 2"/><path d="M0-22 L4 0 L0 22 L-4 0Z" fill="var(--terra)" stroke="none"/><path d="M-22 0 L0 4 L22 0 L0-4Z" fill="var(--land-line)" stroke="none"/><text y="-27" text-anchor="middle" font-size="8" fill="var(--ink)" stroke="none" font-family="var(--ff-mono)">N</text></g>\`;
  return \`<div class="map-frame"><svg viewBox="0 0 \${W} \${H}" role="img" aria-label="Survey chart: a graticule with a pin for every issuer identified so far; coastlines are not drawn">
    <defs><pattern id="maphatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v6" stroke="var(--land-line)" stroke-width=".6"/></pattern></defs>
    <rect width="\${W}" height="\${H}" fill="var(--sea)"/><rect class="hatchband" x="0" y="0" width="\${W}" height="\${Y(66.5)}" opacity=".12"/><rect class="hatchband" x="0" y="\${Y(-66.5)}" width="\${W}" height="\${(H-Y(-66.5)).toFixed(1)}" opacity=".12"/>
    \${grat}\${trop}\${pins}\${compass}
    <text class="lat-l" x="\${W-8}" y="\${H-8}" text-anchor="end">SURVEY CHART · COASTLINES DRAWN AS TERRITORIES RESOLVE</text>
  </svg></div>\`;
}
function decadeChart(){
  const rows=(DATA.facts&&DATA.facts.years&&DATA.facts.years.byDecade)||[]; if(!rows.length) return "";
  const W=720,H=220,L=36,B=30,T=14; const bw=(W-L-10)/rows.length; const max=Math.max(1,...rows.map(r=>r[1]+r[2]));
  const sy=v=>T+(H-T-B)*(1-v/max);
  let g=""; for(let k=0;k<=4;k++){ const v=Math.round(max*k/4); g+=\`<line class="grid" x1="\${L}" x2="\${W-10}" y1="\${sy(v)}" y2="\${sy(v)}"/><text x="\${L-6}" y="\${sy(v)+4}" text-anchor="end">\${v}</text>\`; }
  const bars=rows.map((r,i)=>{ const x=L+i*bw+bw*.18, w=bw*.64; const c=r[1], k=r[2];
    return \`<g><title>\${r[0]} · \${c} confirmed · \${k} candidate</title><rect class="bar-rect cand" x="\${x}" y="\${sy(c+k)}" width="\${w}" height="\${(sy(c)-sy(c+k)).toFixed(1)}"/><rect class="bar-rect \${c&&c===Math.max(...rows.map(q=>q[1]))?"max":""}" x="\${x}" y="\${sy(c)}" width="\${w}" height="\${(sy(0)-sy(c)).toFixed(1)}"/><text x="\${x+w/2}" y="\${H-10}" text-anchor="middle">\${r[0]}</text></g>\`; }).join("");
  return \`<svg class="chart" viewBox="0 0 \${W} \${H}" role="img" aria-label="Stamps by decade of issue: confirmed as solid bars, machine candidates hatched above them"><defs><pattern id="candhatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v5" stroke="var(--ink-4)" stroke-width="1.4"/></pattern></defs>\${g}<line class="axis" x1="\${L}" x2="\${W-10}" y1="\${sy(0)}" y2="\${sy(0)}"/>\${bars}</svg>
  <div class="legend" style="margin-top:8px"><span><i style="background:var(--sienna)"></i> confirmed by a person</span><span><i class="hatch-i"></i> machine candidate, unchecked</span><span><i style="background:var(--terra)"></i> the fullest confirmed decade</span></div>\`;
}

/* =====================================================================
   HOME · the frontispiece and the living dashboard
   ===================================================================== */
function frontispiece(){
  const albums=DATA.albums||[]; const positions=albums.reduce((n,a)=>n+(a.positionCount||0),0);
  const items=metric("philatelicItemCount"); const named=items?(items.value.confirmed||0):0;
  const counted=metric("countedStampCount"); const countedN=counted?(counted.value.confirmed||0):0;
  return \`<section class="front" id="top"><div class="wrap">
    <div>
      <span class="eyebrow">Frontispiece · a collection, being charted · as of \${esc(asOfDate())}</span>
      <h1 style="margin-top:10px" tabindex="-1" id="pageTitle">Every stamp is a small <em>window</em> onto a place and a year.</h1>
      <p class="lede" style="margin-top:20px">One lifetime's collection of those windows, being charted page by page into an atlas of five Parts. \${countedN?\`<strong>\${fmt(countedN)} stamps counted by hand so far</strong>\${named?\`, \${fmt(named)} of them named\`:\`, none named yet\`} — the count is confirmed, the names come slowly, and the page says which is which.\`:\`<strong>Nothing has been counted yet.</strong> That is the honest first page of every atlas: come back and watch it fill in.\`}</p>
      <div class="actions">
        <a class="btn primary" href="\${partHref(PARTS[0])}">Open Part I</a>
        <a class="btn" href="#/stamps">The Register</a>
        <a class="btn ghost" href="\${chHref("unknown")}">What isn't known yet</a>
      </div>
      <div class="bigfacts">
        <div class="bf"><div class="n">\${fmt(albums.length)}</div><div class="l">albums charted</div></div>
        <div class="bf"><div class="n">\${fmt(positions)}</div><div class="l">positions traversed</div></div>
        <div class="bf"><div class="n">\${countedN?fmt(countedN):"—"}</div><div class="l">\${countedN?"stamps counted":"stamps · awaiting the count"}</div></div>
      </div>
    </div>
    <div class="hero-plate">
      <svg class="hero-graticule" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" stroke="var(--ochre)" stroke-width=".7">\${[40,80,120,160,190].map(r=>\`<circle cx="200" cy="200" r="\${r}"/>\`).join("")}\${[0,30,60,90,120,150].map(a=>\`<line x1="200" y1="10" x2="200" y2="390" transform="rotate(\${a} 200 200)"/>\`).join("")}</g></svg>
      <div class="perf"><div class="inner" style="padding:10px">\${plate("art",{size:"full",eager:true,src:"assets/plate-frontispiece.jpg",cap:"Plate I · Frontispiece",alt:"An engraved compass-rose frontispiece on aged parchment"})}</div></div>
    </div>
  </div></section>\`;
}
function glanceBand(){
  const occ=metric("positionOccupancy"); let survey="";
  if(occ){ const o=occ.value||{}; const pop=(occ.eligiblePopulation!=null)?occ.eligiblePopulation:((o.confirmed||0)+(o.candidate||0)+(o.unknown||0)); const examined=Math.max(0,pop-(o.unknown||0)); const p=pop?Math.round(100*examined/pop):0; const seg=x=>pop?Math.round(100*(x||0)/pop):0; const hatch="repeating-linear-gradient(90deg,var(--ink-4) 0 3px,transparent 3px 6px)";
    survey=\`<div class="survey-line"><span><strong style="font-family:var(--ff-display);font-size:1.5em;color:\${p===0?"var(--ink-4)":"var(--terra)"}">\${p}%</strong> of positions examined</span><span class="meterbar" role="img" aria-label="\${p}% of positions examined"><i style="width:\${seg(o.confirmed)}%;background:var(--terra)"></i><i style="width:\${seg(o.candidate)}%;background:var(--ochre)"></i><i style="width:\${seg(o.unknown)}%;background:\${hatch}"></i></span><span class="small">\${fmt(o.unknown||0)} not yet looked at — hatched, not guessed</span></div>\`; }
  return \`<section class="band reveal" aria-labelledby="glance-h"><div class="wrap">
    <div class="band-head"><div><span class="eyebrow">At a glance</span><h2 id="glance-h">The collection in eight honest numbers</h2></div><a class="more" href="\${chHref("glance")}">Full glance chapter →</a></div>
    <div class="grid g4">
      \${metricTile("albumCount","accent",chHref("albums"))}
      \${metricTile("albumPositionCount","",chHref("glance"))}
      \${metric("countedStampCount")?metricTile("countedStampCount","gold","#/stamps"):smartTile("philatelicItemCount","","#/stamps")}
      \${yearsTile("earliest")}
      \${yearsTile("latest")}
      \${smartTile("distinctIssuerCount","",chHref("issuers"))}
      \${smartTile("extinctIssuerCount","accent",chHref("issuers"))}
      \${metricTile("positionOccupancy","gold",chHref("glance"))}
    </div>
    \${survey}
  </div></section>\`;
}
function todayBand(){
  const s=stampOfTheDay(); const disc=dayPick(DATA.discoveries||[],"discovery"); const dyk=dayPick(DATA.didYouKnow||[],"did-you-know");
  const seedTxt=niceDate(seedIso());
  let sotd;
  if(s){ const iss=issuerName(s); const taste=s.story?s.story.lede:\`Named, but its story has not been written yet. The atlas shows what a person has confirmed and nothing more.\`;
    sotd=\`<div class="sotd">
      <a href="\${stampHref(s.id)}" aria-label="Open the page for \${esc(s.title)}">\${stampPlate(s,"full")}</a>
      <div>
        <span class="eyebrow">Stamp of the day · \${esc(seedTxt)}</span>
        <h3><a href="\${stampHref(s.id)}">\${esc(s.title)}</a></h3>
        <div class="idline"><span>\${esc(iss)}</span><span>\${esc(String(yearOf(s)||"year unknown"))}\${s.identity.year&&s.identity.year.status==="candidate"?" · candidate":""}</span><span>\${esc(denomOf(s)||"value unread")}</span></div>
        <p class="taste" style="margin-top:12px">\${esc(taste)}</p>
        <div class="foot"><a class="btn primary" href="\${stampHref(s.id)}">Read its page →</a><span class="rot">chosen by the date · the same for everyone today · \${storied().length||stamps().length} eligible</span></div>
      </div></div>\`;
  } else {
    sotd=\`<div class="sotd">
      \${plate("era",{size:"full",cap:"Stamp of the day<br>none yet",prompt:"The first featured stamp appears the day the first one is named."})}
      <div><span class="eyebrow">Stamp of the day · \${esc(seedTxt)}</span>
        <h3>No stamp to show you yet — and no pretending otherwise.</h3>
        <p class="taste" style="margin-top:12px">This corner rotates through the stamps a person has identified, one a day, chosen by the date. Nothing has been identified yet, so it waits. An empty frame is more honest than an invented stamp.</p>
        <div class="foot"><a class="btn" href="\${chHref("unknown")}">See what it is waiting on →</a></div></div></div>\`;
  }
  const hook=(o,kind,salt)=>{ if(!o) return \`<div class="card hook"><span class="eyebrow">\${kind}</span><p class="q">Nothing to tell you yet.</p><p class="a">Every one of these is computed from the collection's own records. Until a page has been read, there is nothing to compute — so the atlas offers nothing.</p></div>\`;
    const links=(o.stamps||[]).map(id=>stampById(id)).filter(Boolean).map(x=>\`<a href="\${stampHref(x.id)}">\${esc(x.short)}</a>\`).join("");
    return \`<div class="card hook \${salt==="discovery"?"surprise":""}"><span class="eyebrow">\${kind} · \${esc(seedTxt)}</span><p class="q">\${esc(o.q||o.text)}</p>\${o.a?\`<p class="a">\${esc(o.a)}</p>\`:""}<div class="grounded"><span>rests on</span>\${links||"<span>the survey counts</span>"}</div></div>\`; };
  return \`<section class="band reveal" aria-labelledby="today-h"><div class="wrap">
    <div class="band-head"><div><span class="eyebrow">Today</span><h2 id="today-h">A door for wandering</h2></div><a class="more" href="\${chHref("play")}">All discoveries →</a></div>
    <div class="today-grid">
      <div class="perf"><div class="inner">\${sotd}</div></div>
      <div class="hooks">\${hook(disc,"Discovery of the day","discovery")}\${hook(dyk,"Did you know","did-you-know")}</div>
    </div>
  </div></section>\`;
}
function mapBand(){
  const conf=(DATA.issuers||[]).filter(i=>i.status==="confirmed"), cand=(DATA.issuers||[]).filter(i=>i.status==="candidate");
  const body=conf.length?\`<div class="map-wrap"><div>\${surveyChart({compact:true})}<p class="map-note">\${conf.length} issuer\${conf.length===1?"":"s"} pinned by a person; \${cand.length} hollow pin\${cand.length===1?"":"s"} where the machine has a guess and nobody has checked. No coastlines are drawn until territories resolve — a pin on blank paper is still a fact.</p></div>
    <div class="card"><span class="eyebrow">Pinned so far</span><ul style="list-style:none;margin:10px 0 0;padding:0;display:grid;gap:6px">\${conf.map(i=>\`<li style="display:flex;justify-content:space-between;gap:10px;border-top:1px solid var(--rule-soft);padding:7px 0"><span><a href="\${chHref("map")}" style="text-decoration:none;color:var(--ink);font-weight:500">\${esc(i.name)}</a> <span class="small muted">→ \${esc(i.today||"")}</span></span><span class="tag \${i.state==="defunct"?"defunct":"current"}">\${i.state==="defunct"?"no longer issues":"current"}</span></li>\`).join("")}</ul><p class="small muted" style="margin:12px 0 0"><a href="\${chHref("map")}">Open the full chart →</a></p></div></div>\`
  : \`<div class="grid g2 split" style="--split:1fr 320px;align-items:start"><div><span class="tag unknown">Blank chart</span><p class="deck" style="margin:12px 0 0;font-style:normal;color:var(--ink)">Once territories are resolved, the collection is drawn onto a survey chart: a pin for every place that issued a stamp, the vanished ones marked apart. Until then, graticule only.</p></div>\${surveyChart({compact:true})}</div>\`;
  return \`<section class="band reveal" aria-labelledby="map-h"><div class="wrap"><div class="band-head"><div><span class="eyebrow">Part II · The map</span><h2 id="map-h">Where the post came from</h2></div><a class="more" href="\${chHref("map")}">Chapter IV →</a></div>\${body}</div></section>\`;
}
/* what each chapter can honestly show today — drives the doorway status lines and the Contents */
function chapterStatus(id){
  const has={ glance:true, time:!!(DATA.facts&&DATA.facts.years), issuers:(DATA.issuers||[]).some(i=>i.status==="confirmed"), map:(DATA.issuers||[]).length>0, people:(DATA.people||[]).length>0,
    themes:(DATA.themes||[]).length>0, dna:storied().length>0, connections:stamps().some(s=>(s.connections&&s.connections.stamps||[]).length), language:stamps().length>0, physical:stamps().length>0, sets:(DATA.sets||[]).length>0, albums:(DATA.albums||[]).length>0, colour:false, play:(DATA.discoveries||[]).length>0, questions:true, unknown:true };
  return has[id]?"charted":"awaiting";
}
function doorsBand(){
  return \`<section class="band reveal" aria-labelledby="doors-h"><div class="wrap">
    <div class="band-head"><div><span class="eyebrow">Contents</span><h2 id="doors-h">Five Parts, sixteen chapters</h2></div><span class="small muted italic">each Part is a page of its own; the chapters sit inside it</span></div>
    <div class="doors">\${PARTS.map((p,i)=>{ const charted=p.chapters.filter(c=>chapterStatus(c[0])==="charted").length;
      return \`<a class="perf door" href="\${partHref(p)}"><div class="inner door"><div class="top">\${emblem(i)}<span class="num">\${ROMAN[i]}</span></div><h3>\${esc(p.title)}</h3><p class="blurb">\${esc(p.blurb)}</p>
        <div class="chs">\${p.chapters.map(c=>\`<span class="\${chapterStatus(c[0])==="charted"?"":"dim"}">\${ROMAN[CH[c[0]].i]} \${esc(c[1])}</span>\`).join("")}</div>
        <span class="status">\${charted} of \${p.chapters.length} chapter\${p.chapters.length===1?"":"s"} charted →</span></div></a>\`; }).join("")}</div>
  </div></section>\`;
}
function recentBand(){
  const recent=stamps().slice().sort((a,b)=>String(b.provenance.identifiedAt).localeCompare(String(a.provenance.identifiedAt))).slice(0,4);
  const albums=DATA.albums||[];
  const left=recent.length?\`<div class="card"><span class="eyebrow">Recently named</span><ul class="recent" style="margin-top:8px">\${recent.map(s=>\`<li>\${stampPlate(s,"sm")}<div><div class="ttl"><a href="\${stampHref(s.id)}">\${esc(s.title)}</a></div><div class="meta">\${esc(issuerName(s))} · \${esc(String(yearOf(s)||"—"))} · \${s.story?"story written":"identity only"}</div></div><span class="when">\${esc(niceDate(s.provenance.identifiedAt))}</span></li>\`).join("")}</ul><p class="small" style="margin:12px 0 0"><a href="#/stamps">The whole Register →</a></p></div>\`
    : \`<div class="card"><span class="eyebrow">Recently named</span><p class="small" style="margin-top:8px">Nothing has been named yet. When a person confirms the first identification, it appears here with a page of its own.</p></div>\`;
  const right=\`<div class="card"><span class="eyebrow">The shelves</span><ul class="recent" style="margin-top:8px">\${albums.map(a=>\`<li style="grid-template-columns:1fr auto"><div><div class="ttl"><a href="\${chHref("albums")}">\${esc(a.displayName||a.physicalAlbumId)}</a></div><div class="meta">\${fmt(a.positionCount||0)} positions\${a.itemCount&&a.itemCount.total!=null?\` · \${fmt(a.itemCount.total)} items found\`:" · items not yet counted"}</div></div><span class="when">\${esc(niceDate(a.capturedOn))}</span></li>\`).join("")||\`<li class="small muted">No album charted yet.</li>\`}</ul></div>\`;
  return \`<section class="band reveal"><div class="wrap"><div class="grid g2">\${left}\${right}</div></div></section>\`;
}
function candidatesBand(){
  const cands=DATA.candidates||[];
  const np=(DATA.facts&&DATA.facts.namingProgress)||{namedByMachine:cands.length,verifiedByPerson:0};
  if(!cands.length) return "";
  const sample=cands.slice(0,12);
  return \`<section class="band reveal" aria-labelledby="cand-h"><div class="wrap">
    <div class="band-head"><div><span class="eyebrow">The machine's reading</span><h2 id="cand-h">What the atlas thinks it sees</h2></div><a class="more" href="#/candidates">All candidate readings →</a></div>
    <p class="lede" style="max-width:64ch;margin-top:6px">Each card is the machine's <strong>candidate</strong> reading of one stamp — drawn from the photograph, cited to what it saw, <em>and not yet confirmed by a person</em>. <strong>\${fmt(np.namedByMachine)}</strong> named by the atlas · <strong>\${fmt(np.verifiedByPerson)}</strong> verified by a person. The gap is honest guesswork, and the page never hides it.</p>
    <div class="grid g3" style="margin-top:18px">\${sample.map(c=>\`<div class="card"><div class="meta">\${dot("candidate","*")} \${esc(c.album)} · p\${esc(String(c.page))} · \${c.ordinal}/\${c.stampsOnPage}</div><p class="small" style="margin-top:8px">\${esc(c.reading||"Nothing legible yet — a closer photograph would help.")}</p></div>\`).join("")}</div>
    \${cands.length>sample.length?\`<p class="small" style="margin-top:14px"><a href="#/candidates">…and \${fmt(cands.length-sample.length)} more candidate readings →</a></p>\`:""}
    \${CANDLEGEND}
  </div></section>\`;
}
function candidatesPage(){
  const cands=DATA.candidates||[];
  const np=(DATA.facts&&DATA.facts.namingProgress)||{namedByMachine:cands.length,verifiedByPerson:0};
  const byAlbum={}; cands.forEach(c=>{ (byAlbum[c.album]=byAlbum[c.album]||[]).push(c); });
  const groups=Object.keys(byAlbum).sort().map(al=>{
    const rows=byAlbum[al].map(c=>\`<li><span class="meta">\${dot("candidate")} p\${esc(String(c.page))} · \${c.ordinal}/\${c.stampsOnPage}</span> <span class="small">\${esc(c.reading||"nothing legible yet")}</span></li>\`).join("");
    return \`<div class="card"><h3>\${esc(al)}</h3><ul class="recent" style="margin-top:8px">\${rows}</ul></div>\`;
  }).join("");
  return \`<section class="band"><div class="wrap"><span class="eyebrow">The machine's reading · candidates</span>
    <h1 style="margin-top:8px">Candidate readings</h1>
    <p class="lede" style="max-width:64ch">\${fmt(np.namedByMachine)} stamps the atlas has read and named as <strong>candidates</strong>, \${fmt(np.verifiedByPerson)} confirmed by a person. A candidate is the machine's honest guess from the photograph, cited to what it saw; a person turns it from a guess into a fact over time. Nothing here is verified, and it says so.</p>
    <div class="grid g2" style="margin-top:18px">\${groups||"<p class=small>No candidate readings yet.</p>"}</div>
    \${CANDLEGEND}
  </div></section>\`;
}
function issuersBand(){
  const iss=(DATA.facts&&DATA.facts.issuers)||[];
  if(!iss.length) return "";
  const top=iss.slice(0,15);
  return \`<section class="band reveal" aria-labelledby="iss-h"><div class="wrap">
    <div class="band-head"><div><span class="eyebrow">By issuer</span><h2 id="iss-h">Where the stamps come from</h2></div><a class="more" href="#/countries">All \${fmt(iss.length)} issuers →</a></div>
    <p class="small" style="max-width:66ch;margin-top:4px">Counted by the issuer name printed on each stamp, <em>as the machine read it</em> — not yet resolved to entities, so "Nippon", "NIPPON" and "Japan Post" stay separate rows until a person maps them to Japan. Every count is a candidate until confirmed.</p>
    <div class="grid g3" style="margin-top:16px">\${top.map(i=>\`<div class="card" style="display:flex;justify-content:space-between;align-items:baseline;gap:12px"><span>\${dot(i.confirmed>0?"confirmed":"candidate","")} \${esc(i.name)}</span><strong style="font-family:var(--ff-display);font-size:1.5em">\${fmt(i.candidate+i.confirmed)}</strong></div>\`).join("")}</div>
    \${CANDLEGEND}
  </div></section>\`;
}
function countriesPage(){
  const iss=(DATA.facts&&DATA.facts.issuers)||[];
  const rows=iss.map(i=>\`<li style="display:flex;justify-content:space-between;gap:14px;padding:6px 0;border-bottom:1px solid var(--ink-4)"><span>\${dot(i.confirmed>0?"confirmed":"candidate","")} \${esc(i.name)}</span><span class="small">\${i.confirmed?\`\${fmt(i.confirmed)} confirmed\${i.candidate?" · ":""}\`:""}\${i.candidate?\`\${fmt(i.candidate)}*\`:""}</span></li>\`).join("");
  return \`<section class="band"><div class="wrap"><span class="eyebrow">By issuer</span>
    <h1 id="pageTitle" tabindex="-1" style="margin-top:8px">Issuers</h1>
    <p class="lede" style="max-width:66ch">\${fmt(iss.length)} distinct issuer names the atlas has read across the collection, counted by how many stamps carry each. <strong>As read, not yet resolved to entities</strong> — "Nippon", "NIPPON" and "Japan Post" stay separate until a person maps them to Japan, and the succession graph (which issuers no longer exist) is a later phase. Every count is a candidate until a person confirms it.</p>
    <ul style="list-style:none;padding:0;margin:20px 0 0;columns:2;column-gap:40px">\${rows||"<li class=small>No issuers read yet.</li>"}</ul>
    \${CANDLEGEND}
  </div></section>\`;
}
function themesBand(){
  const th=(DATA.facts&&DATA.facts.themes)||[];
  if(!th.length) return "";
  const total=th.reduce((n,t)=>n+t.candidate+t.confirmed,0);
  const top=th.slice(0,15);
  return \`<section class="band reveal" aria-labelledby="th-h"><div class="wrap">
    <div class="band-head"><div><span class="eyebrow">By theme</span><h2 id="th-h">What the collection is about</h2></div><a class="more" href="#/themes">All \${fmt(th.length)} themes →</a></div>
    <p class="small" style="max-width:66ch;margin-top:4px">The machine grouped each stamp it read by <em>subject</em> — a bird, a footballer, a saint — into a coarse theme. A candidate view of the collection's shape, drawn from \${fmt(total)} read subjects; a person confirms a theme over time.</p>
    <div class="grid g3" style="margin-top:16px">\${top.map(t=>\`<div class="card" style="display:flex;justify-content:space-between;align-items:baseline;gap:12px"><span>\${dot(t.confirmed>0?"confirmed":"candidate","")} \${esc(t.name)}</span><strong style="font-family:var(--ff-display);font-size:1.5em">\${fmt(t.candidate+t.confirmed)}</strong></div>\`).join("")}</div>
    \${CANDLEGEND}
  </div></section>\`;
}
function themesPage(){
  const th=(DATA.facts&&DATA.facts.themes)||[];
  const total=th.reduce((n,t)=>n+t.candidate+t.confirmed,0);
  const rows=th.map(t=>\`<li style="display:flex;justify-content:space-between;gap:14px;padding:6px 0;border-bottom:1px solid var(--ink-4)"><span>\${dot(t.confirmed>0?"confirmed":"candidate","")} \${esc(t.name)}</span><span class="small">\${t.confirmed?\`\${fmt(t.confirmed)} confirmed\${t.candidate?" · ":""}\`:""}\${t.candidate?\`\${fmt(t.candidate)}*\`:""}</span></li>\`).join("");
  return \`<section class="band"><div class="wrap"><span class="eyebrow">By theme</span>
    <h1 id="pageTitle" tabindex="-1" style="margin-top:8px">Themes</h1>
    <p class="lede" style="max-width:66ch">\${fmt(th.length)} themes the atlas has grouped the collection under, from \${fmt(total)} subjects the machine read across the pages. <strong>A candidate grouping</strong> — each is only as good as the subject the machine read, and a person confirms a theme over time. Nothing here is verified, and it says so.</p>
    <ul style="list-style:none;padding:0;margin:20px 0 0;columns:2;column-gap:40px">\${rows||"<li class=small>No themes read yet.</li>"}</ul>
    \${CANDLEGEND}
  </div></section>\`;
}
function homePage(){ return frontispiece()+glanceBand()+candidatesBand()+issuersBand()+themesBand()+todayBand()+mapBand()+doorsBand()+recentBand(); }

/* =====================================================================
   CHAPTERS · populated where the projection allows, awaiting where not
   ===================================================================== */
function awaiting(id,i,title,deck,vision,opts={}){
  const pend = opts.pending ? pendItems(opts.pending) : "";
  const body=\`<div class="grid g2 split" style="--split:1fr 320px;align-items:start">
    <div><span class="tag unknown">Awaiting the archive</span>
      <p class="deck" style="margin:12px 0 0;font-style:normal;color:var(--ink)">\${vision}</p>
      <p class="small muted" style="margin-top:14px">This chapter fills in as albums are photographed and their pages read. Until the atlas has looked, it shows the shape of what is coming — and counts nothing it has not seen.</p>
      \${pend?\`<div style="margin-top:18px"><div class="eyebrow" style="margin-bottom:6px">Waiting on</div><ul style="list-style:none;margin:0;padding:0">\${pend}</ul></div>\`:""}</div>
    <div class="perf"><div class="inner" style="padding:10px">\${plate(opts.plate||"art",{size:"full",src:opts.src,cap:opts.cap||"Plate · pending",prompt:opts.prompt||"An original illustration will stand here — the era, drawn fresh. Never a copy of a stamp."})}</div></div>
  </div>\`;
  return chapter(id,i,title,deck,body);
}
const stampLink=id=>{ const s=stampById(id); return s?\`<a href="\${stampHref(s.id)}">\${esc(s.short||s.title||s.id)}</a>\`:""; };

function glanceCh(){
  const albums=DATA.albums||[]; const positions=albums.reduce((n,a)=>n+(a.positionCount||0),0);
  let survey=""; const occ=metric("positionOccupancy");
  if(occ){ const o=occ.value||{}; const pop=(occ.eligiblePopulation!=null)?occ.eligiblePopulation:((o.confirmed||0)+(o.candidate||0)+(o.unknown||0)); const examined=Math.max(0,pop-(o.unknown||0)); const p=pop?Math.round(100*examined/pop):0;
    const line = !pop ? "Nothing has been photographed for the archive yet. The atlas will say so until it has." : p===0 ? \`<strong>\${examined} of \${fmt(pop)} position\${pop===1?"":"s"}</strong> have been examined for stamps. The map is, for now, blank paper — the honest first page of every atlas.\` : p<100 ? \`<strong>\${examined} of \${fmt(pop)} position\${pop===1?"":"s"}</strong> have been examined for stamps; the rest is hatched, not guessed at.\` : \`<strong>Every one of \${fmt(pop)} position\${pop===1?"":"s"}</strong> has been examined. Now the identifying begins.\`;
    const seg=x=>pop?Math.round(100*(x||0)/pop):0; const hatch="repeating-linear-gradient(90deg,var(--ink-4) 0 3px,transparent 3px 6px)";
    survey=\`<div class="card" style="margin-bottom:22px"><div class="grid g2 split" style="--split:auto 1fr;align-items:center;gap:clamp(16px,3vw,34px)">
      <div><div style="font-family:var(--ff-display);font-weight:600;font-size:clamp(52px,9vw,92px);line-height:.9;letter-spacing:-.03em;color:\${p===0?"var(--ink-4)":"var(--terra)"}">\${p}<small style="font-size:.4em;color:var(--ink-3)">%</small></div><div class="eyebrow" style="margin-top:6px">of positions examined</div></div>
      <div><p class="deck" style="font-style:normal;color:var(--ink-2);margin:0 0 12px">\${line}</p>
        <div style="height:10px;border-radius:3px;overflow:hidden;display:flex;background:var(--paper-3)"><i style="width:\${seg(o.confirmed)}%;background:var(--terra)"></i><i style="width:\${seg(o.candidate)}%;background:var(--ochre)"></i><i style="width:\${seg(o.unknown)}%;background:\${hatch}"></i></div>
        <div class="legend" style="margin-top:8px"><span><i style="background:var(--terra)"></i> examined, holds material</span><span><i style="background:var(--ochre)"></i> machine candidate</span><span><i style="background:\${hatch}"></i> not yet looked at</span></div></div></div></div>\`; }
  const tiles=\`<div class="grid g4">\${metricTile("albumCount","accent")}\${metricTile("albumPositionCount","")}\${metricTile("positionOccupancy","gold")}\${metricTile("albumArchetypeCoverage","")}\${smartTile("philatelicItemCount","")}\${yearsTile("earliest")}\${smartTile("distinctIssuerCount","")}\${smartTile("extinctIssuerCount","accent")}</div>\`;
  const m=metric("philatelicItemCount");
  const notes=\`<div class="grid g2" style="margin-top:22px"><div class="card"><h3>Identified &amp; unresolved</h3>\${m?(function(){ const d=disp(m); return \`<p class="small"><strong>\${fmt(d.v.confirmed||0)}</strong> item\${(d.v.confirmed||0)===1?"":"s"} named\${d.v.candidate?\`, <strong>\${fmt(d.v.candidate)}</strong> still a machine's candidate\`:""}\${d.v.unknown?\`, <strong>\${fmt(d.v.unknown)}</strong> not yet looked at\`:""} — of \${fmt(d.pop)} found so far. The named ones have pages in <a href="#/stamps">the Register</a>; the unnamed wait in <a href="\${chHref("unknown")}">the Unknowns</a>.</p>\`; })():\`<p class="small">How many stamps the collection holds — and how many have been named — cannot be counted until the pages are read. Rather than show a zero that reads as emptiness, the atlas shows the promise: <em>awaiting \${esc((pendingOf("philatelicItemCount")||{}).blockedBy||"identification")}</em>.</p>\`}</div>
    <div class="card"><h3>Growth of the collection</h3><p class="small">\${positions===0?"Nothing has been photographed yet.":\`So far \${fmt(positions)} position\${positions===1?"":"s"} across \${fmt(albums.length)} album\${albums.length===1?"":"s"} \${albums.length===1?"has":"have"} been captured\${albums.length?\`, the latest on \${esc(niceDate(albums.map(a=>a.capturedOn).sort().pop()))}\`:""}.\`}</p></div></div>\`;
  return chapter("glance",0,"The collection at a glance","The honest headline first: what has been photographed, walked through and looked at. The stories come as the pages are read.",survey+tiles+notes);
}
function timeCh(){
  const y=DATA.facts&&DATA.facts.years;
  if(!y) return awaiting("time",1,"The world in time","Read in order, the collection becomes a timeline of the last two centuries.","Once each stamp's year of issue is read, this chapter lays the collection across the calendar: the crowded decades, the thin years, and the earliest issue the atlas holds.",{pending:["earliestIssueYear"],src:"assets/plate-time.jpg",cap:"Plate · The cabinet of decades"});
  const conf=stamps().filter(s=>s.identity.year&&s.identity.year.status==="confirmed").sort((a,b)=>yearOf(a)-yearOf(b));
  const cand=stamps().filter(s=>s.identity.year&&s.identity.year.status==="candidate");
  const body=\`<div class="card" style="margin-bottom:20px"><h3>The cabinet of decades</h3><p class="small">Every named stamp by its decade of issue. Solid is what a person has confirmed; hatched is what the machine suggests and nobody has checked.</p>\${decadeChart()}</div>
  <div class="grid g2 split" style="--split:1fr 1fr;align-items:start"><div class="card"><h3>The confirmed years, in order</h3><div class="timeline" style="margin-top:12px">\${conf.map(s=>\`<div class="ev" data-key="\${esc(s.id)}"><div class="y">\${esc(String(yearOf(s)))}</div><div class="t"><a href="\${stampHref(s.id)}">\${esc(s.title)}</a></div><div class="o">\${esc(issuerName(s))} · \${esc(denomOf(s)||"")}</div></div>\`).join("")}\${cand.map(s=>\`<div class="ev cand" data-key="\${esc(s.id)}"><div class="y">\${esc(String(yearOf(s)))} · candidate</div><div class="t"><a href="\${stampHref(s.id)}">\${esc(s.title)}</a></div><div class="o">\${esc(issuerName(s))} — the machine's dating, awaiting a person</div></div>\`).join("")}</div></div>
  <div class="grid" style="gap:12px">\${yearsTile("earliest")}\${yearsTile("latest")}<div class="card flat"><span class="eyebrow">Span</span><p class="small" style="margin:6px 0 0">Confirmed: <strong>\${y.earliest.confirmed}–\${y.latest.confirmed}</strong>, \${y.latest.confirmed-y.earliest.confirmed} years. If every candidate were right: \${y.earliest.candidate}–\${y.latest.candidate}. The atlas prints the first and names the second.</p></div></div></div>\`;
  return chapter("time",1,"The world in time","Read in order, the collection becomes a timeline of the last two centuries.",body);
}
function issuersCh(){
  const conf=(DATA.issuers||[]).filter(i=>i.status==="confirmed"); const cand=(DATA.issuers||[]).filter(i=>i.status==="candidate");
  if(!conf.length) return awaiting("issuers",2,"The issuers","Who printed the post — kingdoms, colonies, republics that lasted a decade, and the states that outlived them.","Every stamp is issued by somewhere. Once identification runs, this chapter counts the distinct issuers, and how many of them are places that no longer exist.",{pending:["distinctIssuerCount","extinctIssuerCount"],src:"assets/plate-issuers.jpg",cap:"Plate · Lost postal worlds"});
  const rows=conf.map(i=>{ const its=stamps().filter(s=>s.identity.issuerId===i.id); return \`<tr data-key="\${esc(i.id)}"><td><strong>\${esc(i.name)}</strong><br><span class="mono muted">as printed: \${esc(i.asPrinted||"")}</span></td><td>\${esc(i.today||"")}\${i.note?\`<br><span class="small muted">\${esc(i.note)}</span>\`:""}</td><td><span class="tag \${i.state==="defunct"?"defunct":"current"}">\${i.state==="defunct"?"no longer issues":"current"}</span></td><td class="num">\${its.length}</td><td>\${its.map(s=>stampLink(s.id)).join(", ")}</td></tr>\`; }).join("");
  const body=\`<div class="grid g3" style="margin-bottom:20px">\${smartTile("distinctIssuerCount","")}\${smartTile("extinctIssuerCount","accent")}\${smartTile("distinctTerritoryCount","gold")}</div>
  <div class="card"><h3>Counted under the name printed</h3><p class="small">An issuer is the name on the stamp, in the year it was issued. Where that place has since been renamed, divided or absorbed, its successor is listed beside it — as a door, not a relabelling.</p>
  <div class="scroll-x"><table class="tbl"><thead><tr><th>Issuer</th><th>Today</th><th>Status</th><th style="text-align:right">Items</th><th>Stamps</th></tr></thead><tbody>\${rows}</tbody></table></div>
  \${cand.length?\`<p class="small muted" style="margin:14px 0 0">\${cand.length} more issuer\${cand.length===1?"":"s"} are the machine's candidates — \${cand.map(c=>esc(c.name)).join(", ")} — holding \${cand.reduce((n,c)=>n+(c.items||0),0)} items between them. None is counted until a person confirms it.</p>\`:""}</div>\`;
  return chapter("issuers",2,"The issuers","Who printed the post — kingdoms, colonies, republics that lasted a decade, and the states that outlived them.",body);
}
function mapCh(){
  const iss=DATA.issuers||[];
  if(!iss.length) return awaiting("map",3,"The map","Every issuer pinned on an aged chart — where the post came from, and how the borders moved.","Once territories are resolved, the collection is drawn onto a world chart: a pin for every place that issued a stamp, the vanished ones marked apart.",{pending:["distinctTerritoryCount"],plate:"era",cap:"Survey chart · pending",prompt:"A blank survey chart — pins appear as territories are resolved."});
  const conf=iss.filter(i=>i.status==="confirmed");
  const body=\`<div class="map-wrap"><div>\${surveyChart()}<div class="mini-legend" style="margin-top:10px"><span><i style="background:var(--terra)"></i> current issuer</span><span><i style="background:var(--ochre)"></i> no longer issues</span><span><i class="hollow"></i> machine candidate</span></div><p class="map-note">Coastlines are deliberately absent: the atlas draws land only where a territory has been resolved, and none has been drawn yet. Pins are placed at the issuer's seat, not the stamp's subject.</p></div>
    <div class="card place"><span class="eyebrow">Gazetteer of issuers</span><ul style="list-style:none;margin:8px 0 0;padding:0">\${conf.map(i=>\`<li style="border-top:1px solid var(--rule-soft);padding:9px 0"><div style="display:flex;justify-content:space-between;gap:8px"><strong>\${esc(i.name)}</strong><span class="tag \${i.state==="defunct"?"defunct":"current"}">\${i.state==="defunct"?"vanished":"current"}</span></div><div class="small muted">→ \${esc(i.today||"")}\${i.note?\` · \${esc(i.note)}\`:""}</div></li>\`).join("")}</ul></div></div>\`;
  return chapter("map",3,"The map","Every issuer pinned on an aged chart — where the post came from, and how the borders moved.",body);
}
function peopleCh(){
  const ppl=DATA.people||[];
  if(!ppl.length) return awaiting("people",4,"The people","The faces a nation chose to print — monarchs, poets, engineers, a nurse. A kind of national autobiography.","Once the designs are read, this chapter gathers the people who appear on the stamps, and how often each recurs.",{src:"assets/plate-people.jpg",cap:"Plate · The gallery of faces"});
  const printed=ppl.filter(p=>!p.notPrinted), behind=ppl.filter(p=>p.notPrinted);
  const card=p=>\`<div class="card" data-key="\${esc(p.id)}"><span class="eyebrow">\${esc(p.role)}</span><h3 style="margin-top:6px">\${esc(p.name)}</h3><div class="mono muted" style="margin-top:4px">\${esc(p.lived||"")}</div><p class="small" style="margin-top:10px">\${p.stamps.length} stamp\${p.stamps.length===1?"":"s"}: \${p.stamps.map(stampLink).join(", ")}</p></div>\`;
  const body=\`<p class="small muted">\${printed.length} people appear on the named stamps\${behind.length?\`; \${behind.length} more stand behind them without being printed\`:""}.</p><div class="grid g3">\${printed.map(card).join("")}</div>\${behind.length?\`<h3 style="margin:22px 0 10px">Behind the stamp, not on it</h3><div class="grid g3">\${behind.map(card).join("")}</div>\`:""}\`;
  return chapter("people",4,"The people","The faces a nation chose to print — monarchs, poets, engineers, a nurse. A kind of national autobiography.",body);
}
function themesCh(){
  const th=(DATA.themes||[]).slice().sort((a,b)=>b.stamps.length-a.stamps.length);
  if(!th.length) return awaiting("themes",5,"The themes","What the collection keeps returning to — birds, ships, flight, the ends of wars.","Once subjects are identified, the recurring themes surface here — and the honest absences, the subjects the collection never touches.",{src:"assets/plate-themes.jpg",cap:"Plate · A cabinet of subjects"});
  const max=Math.max(...th.map(t=>t.stamps.length));
  const body=\`<div class="card"><div class="bubbles">\${th.map(t=>\`<a class="bubble" href="\${stampHref(t.stamps[0])}" data-key="\${esc(t.id)}" style="--s:\${(56+70*(t.stamps.length/max)).toFixed(0)}px" title="\${esc(t.name)} · \${t.stamps.length}"><span class="t">\${esc(t.name)}</span><span class="c">\${t.stamps.length}</span></a>\`).join("")}</div><p class="small muted" style="text-align:center;margin:8px 0 0">Sized by how many named stamps carry the theme. With \${stamps().length} named, this is a sketch of a pattern, not a pattern.</p></div>\`;
  return chapter("themes",5,"The themes","What the collection keeps returning to — birds, ships, flight, the ends of wars.",body);
}
function dnaCh(){
  const st=stamps(); if(!storied().length) return awaiting("dna",6,"The collection's DNA","The shape of the whole, distilled to a handful of honest sentences.","When there is enough read to summarise, this chapter states what the collection is — in plain, checkable lines drawn straight from the counts.",{cap:"Profile · pending",prompt:"The collection, distilled — once there is enough to distil."});
  const iss=(DATA.issuers||[]).filter(i=>i.status==="confirmed"); const gone=iss.filter(i=>i.state==="defunct"); const y=DATA.facts.years; const m=disp(metric("philatelicItemCount"));
  const lines=[
    \`<strong>\${fmt(m.pop)}</strong> stamps found, <strong>\${fmt(m.v.confirmed)}</strong> named — the atlas speaks for the named ones only.\`,
    \`Of \${iss.length} issuers a person has confirmed, <strong>\${gone.length}</strong> no longer exist under the name they printed.\`,
    \`The confirmed years run <strong>\${y.earliest.confirmed} to \${y.latest.confirmed}</strong>; the candidates would stretch that to \${y.earliest.candidate}–\${y.latest.candidate}.\`,
    \`\${st.filter(s=>s.identity.monarch&&s.identity.monarch.value).length} of the named stamps carry a monarch's head; \${st.filter(s=>s.identity.monarch&&!s.identity.monarch.value).length} carry none at all.\`,
  ];
  const body=\`<div class="card"><span class="tag candidate">a sketch, from \${st.length} named stamps</span><div style="display:grid;gap:14px;margin-top:14px">\${lines.map(l=>\`<p class="sentence" style="margin:0">\${l}</p>\`).join("")}</div><p class="small muted" style="margin:16px 0 0">Every sentence above is computed, not written. As more is named the sentences change; none of them is a summary of anything unseen.</p></div>\`;
  return chapter("dna",6,"The collection's DNA","The shape of the whole, distilled to a handful of honest sentences.",body);
}
function connectionsCh(){
  const pairs=[]; const seen=new Set();
  stamps().forEach(s=>(s.connections&&s.connections.stamps||[]).forEach(c=>{ const k=[s.id,c.id].sort().join("|"); if(seen.has(k)||!stampById(c.id)) return; seen.add(k); pairs.push([s,stampById(c.id),c.why]); }));
  if(!pairs.length) return awaiting("connections",7,"Connections","Two stamps, one thread — the same event seen from two countries, decades apart.","Once objects are identified, the atlas draws the links between them: shared events, shared designs, successor states.",{cap:"Connection plate · pending",prompt:"Two stamps, one connection — drawn once both are read."});
  const obj=s=>\`<a class="obj" href="\${stampHref(s.id)}"><span class="ph">\${stampPlate(s,"sm")}</span><div><div class="ttl">\${esc(s.title)}</div><div class="meta">\${esc(issuerName(s))} · \${esc(String(yearOf(s)||"—"))}</div></div></a>\`;
  const body=\`<div class="grid g2">\${pairs.map(([a,b,why])=>\`<div class="card"><div class="pair">\${obj(a)}<span class="link" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 28 28"><path d="M4 14h20M18 8l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></span>\${obj(b)}</div><p class="connect-note">\${esc(why)}</p></div>\`).join("")}</div>\`;
  return chapter("connections",7,"Connections","Two stamps, one thread — the same event seen from two countries, decades apart.",body);
}
function languageCh(){
  const st=stamps(); if(!st.length) return awaiting("language",8,"Money &amp; language","Denominations and scripts — the day a currency went decimal, the alphabets the post was printed in.","Once the face values and inscriptions are read, this chapter charts the money and the writing systems across the collection.",{cap:"Denomination plate · pending"});
  const rows=st.map(s=>{ const d=s.identity.denomination||{}; return \`<tr data-key="\${esc(s.id)}"><td>\${stampLink(s.id)}</td><td>\${esc(d.value||"—")} \${dot(d.status)}</td><td>\${esc(d.currency||"—")}</td><td>\${esc((s.identity.script||{}).value||"—")}</td></tr>\`; }).join("");
  const body=\`<div class="grid g2 split" style="--split:1fr 300px;align-items:start"><div class="card"><h3>Face values read so far</h3><div class="scroll-x"><table class="tbl"><thead><tr><th>Stamp</th><th>Value</th><th>Currency</th><th>Script</th></tr></thead><tbody>\${rows}</tbody></table></div></div><div class="grid" style="gap:12px">\${pendingTile("denominationCoverage")}<div class="card flat"><p class="small">The chart of currencies — decimal days, annas and cents, marks by the thousand million — draws itself once face values are read across the collection, not just the named few.</p></div></div></div>\`;
  return chapter("language",8,"Money &amp; language","Denominations and scripts — the day a currency went decimal, the alphabets the post was printed in.",body);
}
function physicalCh(){
  const st=stamps(); if(!st.length) return awaiting("physical",9,"The physical object","Paper, perforation, watermark, postmark — the stamp as a thing you can hold.","Much of this can only be read from the photograph with care, and some of it not at all. The atlas will record what it can measure, and mark what it cannot.",{plate:"era",cap:"Detail plate · pending"});
  const keys=[["colour","Colour"],["condition","Condition"],["postmark","Postmark"],["perforation","Perforation"],["watermark","Watermark"]];
  const rows=st.map(s=>\`<tr data-key="\${esc(s.id)}"><td>\${stampLink(s.id)}</td>\${keys.map(([k])=>{ const f=(s.physical||{})[k]||{status:"unknown"}; return \`<td>\${f.value?esc(f.value)+"<br>":""}\${dot(f.status)}\${f.note&&!f.value?\`<br><span class="small muted">\${esc(f.note)}</span>\`:""}</td>\`; }).join("")}</tr>\`).join("");
  const body=\`<div class="card"><h3>What a photograph can and cannot say</h3><p class="small">Colour and a postmark can be seen. Perforation gauge and watermark cannot be measured from a photograph of the front, so the atlas marks them <em>not measurable</em> rather than guessing.</p><div class="scroll-x"><table class="tbl"><thead><tr><th>Stamp</th>\${keys.map(k=>\`<th>\${k[1]}</th>\`).join("")}</tr></thead><tbody>\${rows}</tbody></table></div><div class="dot-key">\${dot("confirmed")}\${dot("candidate")}\${dot("unknown")}\${dot("nm")}</div></div><div class="grid g3" style="margin-top:16px">\${pendingTile("perforationGauge")}</div>\`;
  return chapter("physical",9,"The physical object","Paper, perforation, watermark, postmark — the stamp as a thing you can hold.",body);
}
function setsCh(){
  const sets=DATA.sets||[]; if(!sets.length) return awaiting("sets",10,"Sets &amp; series","Series and omnibus issues — one design shared across many issuers in a single year.","Once issues are identified, the atlas reconstructs the sets: the long-running series, and the omnibus designs that crossed borders.",{cap:"Set plate · pending"});
  const body=\`<div class="grid g3">\${sets.map(t=>{ const pct=Math.round(100*t.valuesHeld/t.valuesTotal); return \`<div class="card" data-key="\${esc(t.id)}"><span class="eyebrow">\${esc(String(t.year))}</span><h3 style="margin-top:6px">\${esc(t.name)}</h3><div class="bar" style="grid-template-columns:1fr auto;margin-top:12px"><span class="trk"><span class="fil" style="width:\${pct}%"></span></span><span class="val">\${t.valuesHeld} of \${t.valuesTotal}</span></div><p class="small" style="margin:10px 0 0">\${t.stamps.map(stampLink).join(", ")}\${t.note?\` · <span class="muted">\${esc(t.note)}</span>\`:""}</p></div>\`; }).join("")}</div><p class="small muted" style="margin-top:14px">A set is shown only when the issue itself is confirmed; a stamp whose issue is still unresolved (there is one) belongs to no set yet.</p>\`;
  return chapter("sets",10,"Sets &amp; series","Series and omnibus issues — one design shared across many issuers in a single year.",body);
}
function albumsCh(){
  const albums=DATA.albums||[]; let body;
  if(!albums.length) body=\`<div class="grid g2 split" style="--split:1fr 320px;align-items:start"><div><span class="tag unknown">No album charted yet</span><p class="deck" style="margin:12px 0 0;font-style:normal;color:var(--ink)">The shelves are still empty. When the first album is photographed, it appears here — every position walked through in order, solid where a stamp was seen, dashed where the page was empty, hatched where nobody has looked yet.</p></div><div class="perf"><div class="inner" style="padding:10px">\${plate("era",{size:"full",cap:"First album · pending"})}</div></div></div>\`;
  else body=\`<p class="small mono" style="color:var(--ink-3)">\${fmt(albums.length)} album\${albums.length===1?"":"s"} charted · each captured once and kept for good</p><div class="grid g3">\`+albums.map(a=>{ const n=a.positionCount||0; const named=stamps().filter(s=>s.provenance.albumId===a.physicalAlbumId);
      return \`<div class="card" data-key="\${esc(a.physicalAlbumId)}"><span class="tag current">Charted \${esc(niceDate(a.capturedOn))}</span><h3 style="margin-top:8px">\${esc(a.displayName||a.physicalAlbumId)}</h3><div class="mono small" style="color:var(--ink-3);margin-top:4px">\${esc(a.physicalAlbumId)}\${a.archetype?\` · \${esc(a.archetype)}\`:""}</div><p class="small" style="margin-top:10px">\${fmt(n)} position\${n===1?"":"s"} traversed · \${a.itemCount&&a.itemCount.total!=null?\`\${fmt(a.itemCount.total)} item\${a.itemCount.total===1?"":"s"} found\`:"items not yet counted"}\${named.length?\` · \${named.length} named: \${named.map(s=>stampLink(s.id)).join(", ")}\`:""}</p></div>\`; }).join("")+\`</div>\`;
  return chapter("albums",11,"The albums","The physical albums themselves — each a shelf of the collection, walked position by position.",body);
}
const colourCh = () => awaiting("colour",12,"Colour","The collection by hue — the commonest inks, the most colourful decade.","Once the images are read for colour, this chapter sorts the collection by its dominant inks — honestly, and without a scan of any modern design.",{pending:["colourProfile"],plate:"art",cap:"Colour study · pending",prompt:"A colour study — the collection's palette, drawn fresh."});
function playCh(){
  const disc=DATA.discoveries||[]; const dyk=DATA.didYouKnow||[];
  if(!disc.length&&!dyk.length){ const body=\`<div class="grid g2 split" style="--split:1fr 320px;align-items:start"><div><span class="tag unknown">Nothing to discover yet</span><p class="deck" style="margin:12px 0 0;font-style:normal;color:var(--ink)">A door for wandering — a surprising fact, a question of scale, a giraffe where you didn't expect one. Each one is computed straight from the collection, so none of it can be invented.</p><p class="small muted" style="margin-top:14px">The surprises begin once the first pages are read. Until the data can support a fact, the atlas offers none — that is the whole game.</p></div><div class="perf"><div class="inner" style="padding:10px">\${plate("art",{size:"full",cap:"Discovery · pending",prompt:"A surprising fact will appear here — drawn from the data, never from the imagination."})}</div></div></div>\`; return chapter("play",13,"Play &amp; discovery","A way in for the curious — surprising facts and questions of scale, drawn straight from the data.",body); }
  const links=o=>(o.stamps||[]).map(id=>stampById(id)).filter(Boolean).map(x=>\`<a href="\${stampHref(x.id)}">\${esc(x.short)}</a>\`).join("")||"<span>the survey counts</span>";
  const body=\`<div class="grid g2"><div class="grid" style="gap:12px"><span class="eyebrow">Discoveries · computed</span>\${disc.map(o=>\`<div class="card hook surprise"><p class="q" style="margin-top:0">\${esc(o.q)}</p><p class="a">\${esc(o.a)}</p><div class="grounded"><span>rests on</span>\${links(o)}</div></div>\`).join("")}</div>
  <div class="grid" style="gap:12px"><span class="eyebrow">Did you know · grounded</span>\${dyk.map(o=>\`<div class="card hook"><p class="q" style="margin-top:0">\${esc(o.text)}</p><div class="grounded"><span>from the facts of</span>\${links(o)}</div></div>\`).join("")}</div></div><p class="small muted" style="margin-top:14px">One of each is chosen by the date for the frontispiece. Nothing here is written by hand: a discovery is arithmetic over the projection, and a “did you know” is a fact that already sits on a stamp's page.</p>\`;
  return chapter("play",13,"Play &amp; discovery","A way in for the curious — surprising facts and questions of scale, drawn straight from the data.",body);
}
function answer(id){ const m=metric(id); if(m){ const d=disp(m); const f=FRIENDLY[id]||{}; return \`<span class="big">\${d.n}</span>\${esc(d.d)}\${f.d?\` — <span class="muted">\${esc(f.d)}</span>\`:""}\`; }
  if(id==="earliestIssueYear"&&DATA.facts.years) return \`<span class="big">\${DATA.facts.years.earliest.confirmed}</span>confirmed — \${stampLink(DATA.facts.years.earliest.confirmedStampId)}; the machine's candidate is \${DATA.facts.years.earliest.candidate}, unchecked.\`;
  const p=pendingOf(id); return \`<span class="muted italic">Not yet known — awaiting \${p?esc(p.blockedBy):"more of the collection to be read"}.</span>\`; }
function questionsCh(){
  const qa=[["How many albums have been charted?","albumCount"],["How many positions has the survey walked through?","albumPositionCount"],["How many of those positions actually hold material?","positionOccupancy"],["How many individual stamps does the collection hold?","philatelicItemCount"],["How many different issuers are there?","distinctIssuerCount"],["How many of them no longer exist?","extinctIssuerCount"],["What is the earliest stamp in the collection?","earliestIssueYear"]];
  const body=\`<div class="qa">\${qa.map(q=>\`<details><summary>\${esc(q[0])}</summary><div class="ans">\${answer(q[1])}</div></details>\`).join("")}</div><p class="small muted" style="margin-top:16px">Every answer is read from the collection's own records — never typed in. Where an answer isn't known yet, the atlas says exactly what it is waiting on rather than guess.</p>\`;
  return chapter("questions",14,"Questions of scale","Plain questions, answered from the record — or marked honestly as not yet known.",body);
}
function unknownCh(){
  const pend=(DATA.facts&&DATA.facts.pending)||[]; const withheld=DATA.withheld||[];
  const perStamp=stamps().reduce((n,s)=>n+(s.unknowns||[]).length,0);
  const pendRows=pend.map(p=>{ const label=FRIENDLY_PENDING[p.metric]||p.metric; return \`<li data-key="\${esc(label)}" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid var(--rule-soft);padding:11px 0"><span style="font-weight:500">\${esc(label)}</span><span class="mono" style="color:var(--ink-3)">awaiting \${esc(p.blockedBy)}</span></li>\`; }).join("");
  const body=\`<div class="unk"><div><div class="n">\${pend.length+perStamp}</div><p class="deck" style="font-style:normal;color:var(--ink-2)">things the atlas does not yet know — \${pend.length} across the whole collection\${perStamp?\`, \${perStamp} on the pages of named stamps\`:""} — named plainly, as a feature. An unknown you can see is worth more than a number someone invented.</p><div style="margin-top:18px;max-width:300px">\${plate("art",{size:"full",src:"assets/plate-unknowns.jpg",cap:"Plate · The blank leaf",alt:"An engraved blank, perforated leaf under lamplight"})}</div></div>
    <div><div class="card" data-key="pending"><h3>What the atlas does not yet know</h3><p class="small">These facts don't exist yet — they need the stamps to be identified. They are listed as promises, not hidden as zeroes.</p><ul style="list-style:none;margin:12px 0 0;padding:0">\${pendRows||'<li class="muted" style="padding:11px 0">Nothing outstanding.</li>'}</ul></div>
    \${perStamp?\`<div class="card" style="margin-top:16px"><h3>Unknowns on the named stamps</h3><ul style="list-style:none;margin:12px 0 0;padding:0">\${stamps().map(s=>\`<li style="display:flex;justify-content:space-between;gap:12px;border-top:1px solid var(--rule-soft);padding:9px 0"><span>\${stampLink(s.id)}</span><span class="mono muted">\${(s.unknowns||[]).length} open</span></li>\`).join("")}</ul></div>\`:""}
    <div class="card" data-key="withheld" style="margin-top:16px"><h3>Deliberately not published</h3><p class="small">Some fields exist in the archive but never leave it. The album photographs and their fingerprints stay private; nothing here is ever a price, a location, or a scan of a modern design.</p><p class="mono" style="margin-top:10px;color:var(--ink-2)">\${withheld.map(w=>\`<code>\${esc(w)}</code>\`).join(", ")||"—"}</p></div></div></div>\`;
  return chapter("unknown",15,"The unknowns","What the atlas cannot yet say — and what it will never publish. The blank quarters of the map, kept honest.",body);
}
const CHAPTER_FN={glance:glanceCh,time:timeCh,issuers:issuersCh,map:mapCh,people:peopleCh,themes:themesCh,dna:dnaCh,connections:connectionsCh,language:languageCh,physical:physicalCh,sets:setsCh,albums:albumsCh,colour:colourCh,play:playCh,questions:questionsCh,unknown:unknownCh};

/* ——— a PART page: its hero, its chapters in order, and the way on ——— */
function partPage(p){
  const i=PARTS.indexOf(p); const prev=PARTS[i-1], next=PARTS[i+1];
  const head=\`<section class="part-hero"><div class="wrap"><div class="big" aria-hidden="true">\${ROMAN[i]}</div><div>
      <span class="eyebrow">\${emblem(i)}Part \${ROMAN[i]} of \${PARTS.length} · chapters \${ROMAN[CH[p.chapters[0][0]].i]}–\${ROMAN[CH[p.chapters[p.chapters.length-1][0]].i]}</span>
      <h1 id="pageTitle" tabindex="-1">\${esc(p.title)}</h1><p class="deck">\${esc(p.blurb)}</p>
      <div class="jump" aria-label="Chapters in this Part">\${p.chapters.map(c=>\`<a href="\${partHref(p,c[0])}"><b>\${ROMAN[CH[c[0]].i]}</b>\${esc(CHAPTER_TITLES[c[0]])}<span class="st">\${chapterStatus(c[0])}</span></a>\`).join("")}</div>
    </div></div></section>\`;
  const body=p.chapters.map(c=>CHAPTER_FN[c[0]]()).join("");
  const foot=\`<div class="wrap"><div class="part-foot">\${prev?\`<a href="\${partHref(prev)}"><small>← Part \${ROMAN[i-1]}</small><span>\${esc(prev.title)}</span></a>\`:\`<a href="#/"><small>← Frontispiece</small><span>Back to the beginning</span></a>\`}\${next?\`<a class="next" href="\${partHref(next)}"><small>Part \${ROMAN[i+1]} →</small><span>\${esc(next.title)}</span></a>\`:\`<a class="next" href="#/stamps"><small>Then →</small><span>The Register of stamps</span></a>\`}</div></div>\`;
  return head+body+foot;
}

/* ——— the REGISTER: every identified stamp, the hub for the per-stamp pages ——— */
function registerPage(){
  const st=stamps().slice().sort((a,b)=>(yearOf(a)||9999)-(yearOf(b)||9999));
  const m=metric("philatelicItemCount");
  const head=\`<section class="part-hero"><div class="wrap" style="grid-template-columns:1fr"><div><span class="eyebrow">The Register</span><h1 id="pageTitle" tabindex="-1">Every stamp a person has named</h1><p class="deck">\${m?\`\${fmt(st.length)} of \${fmt(disp(m).pop)} items found have been identified and confirmed. Each has a page; \${storied().length} of them have a story so far.\`:"No stamp has been named yet. The first page appears the day the first one is."}</p></div></div></section>\`;
  const body=st.length?\`<section class="band"><div class="wrap"><div class="card"><div class="scroll-x"><table class="tbl"><thead><tr><th></th><th>Stamp</th><th>Issuer as printed</th><th>Year</th><th>Value</th><th>Page</th></tr></thead><tbody>\${st.map(s=>\`<tr class="reg-row" data-key="\${esc(s.id)}"><td>\${stampPlate(s,"sm")}</td><td><a href="\${stampHref(s.id)}">\${esc(s.title)}</a><br><span class="small muted">\${esc(s.titleNote||"")}</span></td><td>\${esc(s.identity.issuerAsPrinted.value)}</td><td>\${esc(String(yearOf(s)||"—"))} \${dot(s.identity.year.status)}</td><td>\${esc(denomOf(s)||"—")} \${dot(s.identity.denomination.status)}</td><td>\${s.story?\`<span class="tag confirmed">story</span>\`:\`<span class="tag unknown">identity only</span>\`}</td></tr>\`).join("")}</tbody></table></div></div>
    <p class="small muted" style="margin-top:14px">The Register lists only what a person has confirmed to at least the issuer. The \${m&&disp(m).v.candidate?fmt(disp(m).v.candidate):"machine's"} candidates are counted in the glance and waited on in <a href="\${chHref("unknown")}">the Unknowns</a>; they get no page until someone checks them.</p></div></section>\`
  : \`<section class="band"><div class="wrap"><div class="grid g2 split" style="--split:1fr 320px;align-items:start"><div><span class="tag unknown">Empty register</span><p class="deck" style="margin:12px 0 0;font-style:normal;color:var(--ink)">A stamp gets a page when a person confirms what it is. That has not happened yet — so there is no page to show, and the atlas will not draw one from a guess.</p><p class="small muted" style="margin-top:12px">Waiting on: \${esc((pendingOf("philatelicItemCount")||{}).blockedBy||"identification")}.</p></div><div class="perf"><div class="inner" style="padding:10px">\${plate("era",{size:"full",cap:"First page · pending"})}</div></div></div></div></section>\`;
  return head+body;
}
/* =====================================================================
   STAMP · one identified stamp, with room to ramble.
   Left: the plate (original art / withheld / pending), then the facts with
   their status. Right: the story — every paragraph cites the numbered facts
   it rests on — then connections, provenance, and the open unknowns.
   ===================================================================== */
function factRow(label, f, opts={}){
  if(!f) return "";
  const has=f.value!=null&&f.value!=="";
  const v=has?esc(String(f.value)):\`<span class="muted italic">\${esc(f.note||"not known")}</span>\`;
  const sub=[]; if(has&&f.note) sub.push(f.note); if(f.source&&has) sub.push(SOURCE[f.source]||f.source); if(opts.extra) sub.push(opts.extra);
  return \`<div class="fact"><div class="k">\${esc(label)}</div><div class="v">\${v}\${sub.length?\`<small>\${esc(sub.join(" · "))}</small>\`:""}</div>\${dot(f.status)}</div>\`;
}
function groundRefs(s, ids){ return (ids||[]).map(id=>{ const n=s.facts.findIndex(f=>f.id===id)+1; return n?\`<a class="g" href="#" data-fact="\${esc(id)}" title="Rests on fact \${n}" aria-label="rests on fact \${n}">\${n}</a>\`:""; }).join(""); }
function stampPage(s){
  const st=stamps(); const i=st.indexOf(s); const prev=st[i-1], next=st[i+1];
  const id=s.identity, ph=s.physical||{}; const iss=issuerById(id.issuerId); const set=setById(id.setId||(s.connections&&s.connections.setId)); const album=albumById(s.provenance.albumId);
  const year=yearOf(s);
  /* — head — */
  const crumbs=\`<div class="wrap st-crumbs"><a href="#/">Frontispiece</a><span>›</span><a href="#/stamps">Register</a><span>›</span><span>\${esc(s.short||s.title||s.id)}</span></div>\`;
  const head=\`<section class="st-head"><div class="wrap">
    <span class="eyebrow">Stamp · \${esc(s.id)} · \${s.provenance.confirmedBy==="person"?"confirmed by a person":"machine candidate"}\${s.provenance.partial?" · in part":""}</span>
    <h1 id="pageTitle" tabindex="-1" style="margin-top:8px">\${esc(s.title)} <em>\${esc(issuerName(s))}, \${esc(String(year||"year unread"))}</em></h1>
    <div class="st-idline"><span>as printed <b>\${esc(id.issuerAsPrinted.value)}</b></span><span>value <b>\${esc(denomOf(s)||"unread")}</b>\${id.denomination.status==="candidate"?" · candidate":""}</span>\${id.monarch&&id.monarch.value?\`<span>head <b>\${esc(id.monarch.value)}</b></span>\`:""}<span>album <b>\${esc(album&&album.displayName?album.displayName.split(" · ")[0]:s.provenance.albumId)}</b>, page \${s.provenance.page}</span></div>
  </div></section>\`;
  /* — side: plate + facts — */
  const im=s.image||{}; const plateNote= im.kind==="art" ? "An original plate, drawn for the atlas from the subject of the stamp. It is not the stamp, and does not try to be." : im.kind==="withheld" ? (im.reason||"In copyright; image withheld.") : "No plate yet. When one is commissioned it will be an original illustration — never a photograph or copy of the stamp.";
  const side=\`<aside class="st-side">
    <div class="perf"><div class="inner" style="padding:10px">\${stampPlate(s,"full")}<p class="plate-note">\${esc(plateNote)}</p></div></div>
    <div class="card flat"><span class="eyebrow">Identity</span><div class="facts" style="margin-top:8px">
      \${factRow("Issuer, as printed", id.issuerAsPrinted)}
      \${factRow(\`Issuer in \${year||"that year"}\`, id.issuerInYear)}
      \${factRow("Successor today", id.successor)}
      \${factRow("Place", id.place)}
      \${factRow("Year of issue", id.year)}
      \${factRow("Face value", id.denomination, {extra:id.denomination.currency})}
      \${factRow("Design", id.design)}
      \${id.battleName?factRow("Name in the frame", id.battleName):""}
      \${set?\`<div class="fact"><div class="k">Set</div><div class="v"><a href="\${chHref("sets")}">\${esc(set.name)}</a><small>\${set.valuesHeld} of \${set.valuesTotal} values in the collection</small></div>\${dot("confirmed")}</div>\`:\`<div class="fact"><div class="k">Set</div><div class="v"><span class="muted italic">issue not yet resolved</span></div>\${dot("unknown")}</div>\`}
      \${factRow("Head", id.monarch)}
      \${factRow("Designer", id.designer)}
      \${factRow("Printer", id.printer)}
      \${factRow("Inscriptions", id.inscriptions)}
      \${factRow("Script", id.script)}
    </div><div class="dot-key">\${dot("confirmed")}\${dot("candidate")}\${dot("unknown")}\${dot("nm")}</div></div>
    <div class="card flat"><span class="eyebrow">Where the photograph allows</span><div class="facts" style="margin-top:8px">
      \${factRow("Colour, as seen", ph.colour)}\${factRow("Condition, as seen", ph.condition)}\${factRow("Postmark", ph.postmark)}\${factRow("Perforation", ph.perforation)}\${factRow("Watermark", ph.watermark)}
    </div></div>
    <div class="card flat"><span class="eyebrow">Where it lives</span><div class="where" style="margin-top:8px">\${pageGlyph(s.provenance)}<div class="txt"><b>\${esc(album&&album.displayName?album.displayName:s.provenance.albumId)}</b><br>page \${s.provenance.page}, position \${s.provenance.position} of \${s.provenance.positionsOnPage}<br><span class="muted">photographed \${esc(niceDate(s.provenance.capturedAt))} · identified \${esc(niceDate(s.provenance.identifiedAt))}</span></div></div></div>
  </aside>\`;
  /* — the ramble — */
  let ramble;
  if(s.story){ const sec=s.story.sections.map((x,k)=>\`<h2>\${esc(x.h)}</h2>\${x.paras.map((p,j)=>\`<p class="\${k===0&&j===0?"cap":""}">\${esc(p.t)}\${groundRefs(s,p.g)}</p>\`).join("")}\${k===0&&s.story.pull?\`<blockquote class="pull"><p class="sentence" style="margin:0">\${s.story.pull.text}</p><div class="small muted" style="margin-top:6px">rests on \${groundRefs(s,s.story.pull.factIds)}</div></blockquote>\`:""}\`).join("");
    ramble=\`<p class="lede">\${esc(s.story.lede)}</p>\${sec}\`; }
  else ramble=\`<div class="stub"><span class="tag unknown">Identity only</span><h2 style="margin-top:10px">Named, not yet told.</h2><p>A person has confirmed the issuer and the head on this stamp; the year and the value are still the machine's readings. The atlas writes a story only from facts it can list — and there are \${s.facts.length} so far, none of them yet a story. When the knowledge step has more to stand on, this page grows a ramble. Until then, the facts below are the whole of it.</p></div>\`;
  const ground=\`<div class="ground" id="ground"><span class="eyebrow">What this page rests on</span><ol>\${s.facts.map((f,n)=>\`<li id="fact-\${esc(f.id)}"><b>\${n+1}</b><span>\${esc(f.text)}</span><span class="src"><span class="tag \${f.source==="machine"?"candidate":"confirmed"}" style="font-size:.56rem">\${esc(SOURCE[f.source]||f.source)}</span></span></li>\`).join("")}</ol><p class="small muted" style="margin:12px 0 0">Nothing in the story above is written from memory: each paragraph cites the facts it rests on, and a fact the machine read but nobody checked is marked as such.</p></div>\`;
  /* — connections — */
  const c=s.connections||{}; const list=(items,none)=>items.length?\`<ul>\${items.join("")}</ul>\`:\`<p class="none">\${none}</p>\`;
  const people=(c.people||[]).map(x=>{ const p=personById(x.id); return p?\`<li><a href="\${chHref("people")}">\${esc(p.name)}</a><span class="why">\${esc(x.why)}\${p.notPrinted?" · not printed on the stamp":""}</span></li>\`:""; });
  const themes=(c.themes||[]).map(tid=>{ const t=themeById(tid); return t?\`<li><a href="\${chHref("themes")}">\${esc(t.name)}</a><span class="why">\${t.stamps.length} named stamp\${t.stamps.length===1?"":"s"}</span></li>\`:""; });
  const events=(c.events||[]).map(e=>\`<li><span>\${esc(e.name)}</span><span class="why">\${esc(e.when)}</span></li>\`);
  const succ=(c.successors||[]).map(e=>\`<li><a href="\${chHref("issuers")}">\${esc(e.name)}</a><span class="why">since \${e.since}\${e.until?\` until \${e.until}\`:""} · \${e.itemsInCollection?\`\${e.itemsInCollection} in the collection\`:"nothing from it in the collection yet"}</span></li>\`);
  const others=(c.stamps||[]).map(x=>{ const o=stampById(x.id); return o?\`<li><a href="\${stampHref(o.id)}">\${esc(o.title)} — \${esc(issuerName(o))}, \${esc(String(yearOf(o)||"—"))}</a><span class="why">\${esc(x.why)}</span></li>\`:""; });
  const conns=\`<div class="st-section"><span class="eyebrow">Connections</span><h2>What this stamp is tied to</h2><div class="conns">
    <div class="card flat conn"><h4>People <span class="k">\${people.length}</span></h4>\${list(people,"No person is printed on it, and none is named behind it yet.")}</div>
    <div class="card flat conn"><h4>Themes <span class="k">\${themes.length}</span></h4>\${list(themes,"No theme yet.")}</div>
    <div class="card flat conn"><h4>Events <span class="k">\${events.length}</span></h4>\${list(events,"No event is tied to it yet.")}</div>
    <div class="card flat conn"><h4>Successor states <span class="k">\${succ.length}</span></h4>\${list(succ,"The same state today.")}</div>
    <div class="card flat conn"><h4>Other stamps here <span class="k">\${others.length}</span></h4>\${list(others,"No thread to another named stamp yet.")}</div>
    <div class="card flat conn"><h4>Set <span class="k">\${set?\`\${set.valuesHeld}/\${set.valuesTotal}\`:"—"}</span></h4>\${set?\`<ul><li><a href="\${chHref("sets")}">\${esc(set.name)}</a><span class="why">\${set.valuesHeld} of \${set.valuesTotal} values held</span></li></ul>\`:\`<p class="none">The issue is not yet resolved, so no set is claimed.</p>\`}</div>
  </div></div>\`;
  const unk=\`<div class="st-section"><span class="eyebrow">Still open</span><h2>What is not known about this copy</h2><ul class="unk-list">\${(s.unknowns||[]).map(u=>\`<li>\${esc(u)}</li>\`).join("")||"<li>Nothing outstanding.</li>"}</ul></div>\`;
  const nav=\`<div class="st-nav">\${prev?\`<a href="\${stampHref(prev.id)}">← \${esc(prev.short)}</a>\`:\`<a href="#/stamps">← The Register</a>\`}<a href="#/stamp/today">Stamp of the day</a>\${next?\`<a href="\${stampHref(next.id)}">\${esc(next.short)} →</a>\`:\`<a href="#/stamps">The Register →</a>\`}</div>\`;
  const main=\`<article class="ramble">\${ramble}</article>\${ground}\${conns}\${unk}\${nav}\`;
  return crumbs+head+\`<div class="wrap stamp">\${side}<div>\${main}</div></div>\`;
}
/* a tiny abstract of the album page: the copy's position lit, nothing else drawn */
function pageGlyph(pv){ const n=Math.min(pv.positionsOnPage||20,48); const cols=n>30?6:n>20?5:4; const rows=Math.ceil(n/cols); let cells="";
  for(let k=0;k<n;k++){ const r=Math.floor(k/cols), c=k%cols; cells+=\`<i class="\${k+1===pv.position?"me":""}" style="left:\${(4+c*(46/cols)).toFixed(1)}px;top:\${(4+r*(58/rows)).toFixed(1)}px"></i>\`; }
  return \`<div class="pg" role="img" aria-label="Position \${pv.position} of \${pv.positionsOnPage} on the page">\${cells}</div>\`; }

/* ——— off the edge of the map ——— */
function notFoundPage(hash){
  return \`<section class="empty wrap"><span class="eyebrow">Stamp Atlas</span><h1 id="pageTitle" tabindex="-1" style="margin-top:12px">Off the edge of the map.</h1><p>There is no page at <code class="mono">\${esc(hash)}</code>. It may have been renamed as the atlas grew, or it may be a stamp that has not been named yet — the atlas draws no page for a guess.</p><div class="actions" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:20px"><a class="btn primary" href="#/">The frontispiece</a><a class="btn" href="#/stamps">The Register</a><button type="button" class="btn" data-open-index="">Search the Index</button></div></section>\`;
}
/* =====================================================================
   WAYFINDING · 1 CONTENTS (tab strip → Part pages; the Contents panel is
   the whole map of the atlas; the running head says where you are)
   ===================================================================== */
function nav(){
  $("#partsList").innerHTML=PARTS.map((p,i)=>{ const a=CH[p.chapters[0][0]].i, b=CH[p.chapters[p.chapters.length-1][0]].i;
    return \`<li><a class="part-btn" href="\${partHref(p)}" data-part="\${p.id}">\${emblem(i)}<span class="pcol"><small>Part \${ROMAN[i]} · \${ROMAN[a]}–\${ROMAN[b]}</small><span>\${esc(p.title)}</span></span></a></li>\`; }).join("");
  $("#contentsTop").innerHTML=\`<a href="#/" data-page="home">Frontispiece</a><a href="#/stamps" data-page="register">The Register · \${stamps().length} stamp\${stamps().length===1?"":"s"}</a><a href="#/stamp/today" data-page="today">Stamp of the day</a>\`;
  $("#contentsGrid").innerHTML=PARTS.map((p,i)=>\`<div class="contents-part" data-part="\${p.id}"><div class="cp-head">\${emblem(i)}<div><span class="eyebrow">Part \${ROMAN[i]}</span><h4><a href="\${partHref(p)}">\${esc(p.title)}</a></h4></div></div><p class="small italic" style="margin:0 0 8px">\${esc(p.blurb)}</p><ol>\${p.chapters.map(c=>\`<li><a class="ch" href="\${partHref(p,c[0])}" data-ch="\${c[0]}"><b>\${ROMAN[CH[c[0]].i]}</b><span>\${esc(CHAPTER_TITLES[c[0]])}</span><span class="st">\${chapterStatus(c[0])}</span></a></li>\`).join("")}</ol></div>\`).join("");
  $("#contentsNote").textContent=\`\${CHAPTERS.length} chapters in \${PARTS.length} parts, one page per part. Stamps, issuers, people and years are not chapters — they live inside chapters and in the Index.\`;
}
let lastNavBtn=null;
function openContents(focus){ $("#contentsPanel").hidden=false; $("#contentsBtn").setAttribute("aria-expanded","true"); if(focus){ const first=$("#contentsTop a"); if(first) first.focus(); } }
function closeContents(refocus){ const panel=$("#contentsPanel"); if(panel.hidden) return; panel.hidden=true; $("#contentsBtn").setAttribute("aria-expanded","false"); if(refocus&&lastNavBtn&&lastNavBtn.focus) lastNavBtn.focus(); lastNavBtn=null; }
function toggleContents(btn,viaKeyboard){ if(!$("#contentsPanel").hidden){ closeContents(true); return; } lastNavBtn=btn; openContents(viaKeyboard); }
/* "you are here": the tab, the Contents, the running head and the mobile button all agree */
function setHere(chapterId){
  const r=state.route||{kind:"home"}; state.chapter=chapterId||null;
  const partId=r.kind==="part"?r.part.id:(chapterId&&partOf(chapterId)?partOf(chapterId).id:null);
  $$(".part-btn").forEach(b=>{ if(b.dataset.part===partId) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current"); });
  $$("#contentsGrid a[data-ch]").forEach(a=>{ if(a.dataset.ch===chapterId) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  $$("#contentsTop a").forEach(a=>{ const on=(a.dataset.page==="home"&&r.kind==="home")||(a.dataset.page==="register"&&r.kind==="register")||(a.dataset.page==="today"&&r.kind==="stamp"&&stampOfTheDay()&&r.stamp.id===stampOfTheDay().id); if(on) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  const m=chapterId?CH[chapterId]:null;
  const here = m ? \`<b>\${ROMAN[m.i]}</b><span>\${esc(m.title)}</span>\` : r.kind==="stamp" ? \`<b>Register</b><span>\${esc(r.stamp.short)}</span>\` : r.kind==="register" ? \`<b>Register</b><span>\${stamps().length} named</span>\` : r.kind==="part" ? \`<b>\${ROMAN[PARTS.indexOf(r.part)]}</b><span>\${esc(r.part.title)}</span>\` : r.kind==="home" ? \`<b>Atlas</b><span>Frontispiece</span>\` : \`\`;
  $("#navHere").innerHTML=here;
  $("#contentsBtn .lbl .here").innerHTML= m ? \`<b>\${ROMAN[m.i]}</b> \${esc(shortOf(chapterId))}\` : r.kind==="stamp" ? \`<b>Register</b> \${esc(r.stamp.short)}\` : r.kind==="register" ? \`<b>Register</b>\` : r.kind==="part" ? \`<b>\${ROMAN[PARTS.indexOf(r.part)]}</b> \${esc(r.part.title)}\` : \`Contents\`;
}
function chapterFeet(){
  $$("[data-ch-foot]").forEach(el=>{ const id=el.dataset.chFoot; const p=partOf(id); const pi=PARTS.indexOf(p); const k=p.chapters.findIndex(c=>c[0]===id); const nextCh=p.chapters[k+1]; const nextPart=PARTS[pi+1];
    const onward = nextCh ? \`<a href="\${partHref(p,nextCh[0])}">Next · \${ROMAN[CH[nextCh[0]].i]} \${esc(CHAPTER_TITLES[nextCh[0]])} →</a>\` : nextPart ? \`<a href="\${partHref(nextPart)}">Next · Part \${ROMAN[pi+1]} \${esc(nextPart.title)} →</a>\` : \`<a href="#/stamps">Then · The Register →</a>\`;
    el.innerHTML=\`<span>Part \${ROMAN[pi]} · \${esc(p.title)} · <a href="\${partHref(p)}">top of part ↑</a></span><span>\${onward}</span>\`; });
}

/* =====================================================================
   WAYFINDING · 3 INDEX (gazetteer) — every entry carries a route
   ===================================================================== */
let GAZ=[]; const gaz={q:"",kind:null,active:-1,rows:[],last:null};
const GROUPS=["Pages","Chapters","Stamps","Issuers","People","Themes","Years","Sets","Albums","Measures","Awaiting","Withheld"];
const RANK={Page:.7,Part:.6,Chapter:.6,Stamp:.7,Issuer:.5,Person:.5,Theme:.4,Year:.5,Set:.4,Measure:.4,Album:.4,"Not yet known":.3,"Not published":.2};
const norm=s=>String(s==null?"":s).toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").replace(/[^\\p{L}\\p{N}\\s]/gu," ").replace(/\\s+/g," ").trim();
const strip=s=>String(s==null?"":s).replace(/<[^>]+>/g," ");
function buildIndex(){
  GAZ=[];
  const add=(group,kind,label,hint,href,keys,o={})=>GAZ.push(Object.assign({group,kind,label:String(label),hint:hint||"",href,l:norm(label),k:norm([label,hint].concat(keys||[]).join(" ")),a:(o.alias||[]).map(norm)},o));
  add("Pages","Page","Frontispiece","the home page — the collection at a glance","#/",["home dashboard start"]);
  add("Pages","Page","The Register","every stamp a person has named","#/stamps",["stamps list identified"]);
  if((DATA.candidates||[]).length) add("Pages","Page","Candidate readings","what the machine read, not yet confirmed","#/candidates",["candidates machine reading unconfirmed"]);
  if(DATA.facts&&(DATA.facts.issuers||[]).length) add("Pages","Page","Issuers","the collection by issuer name, as read","#/countries",["issuers countries where from"]);
  if(DATA.facts&&(DATA.facts.themes||[]).length) add("Pages","Page","Themes","the collection by subject theme, as read","#/themes",["themes subjects what about"]);
  if(stampOfTheDay()) add("Pages","Page","Stamp of the day",stampOfTheDay().title,"#/stamp/today",["today featured rotate"]);
  PARTS.forEach((p,i)=>add("Pages","Part",\`Part \${ROMAN[i]} · \${p.title}\`,p.blurb,partHref(p),[p.chapters.map(c=>c[1]).join(" "),"contents"]));
  CHAPTERS.forEach(c=>{ const m=CH[c[0]]; add("Chapters","Chapter",m.title,\`\${ROMAN[m.i]} · \${c[1]} · \${chapterStatus(c[0])}\`,chHref(c[0]),[c[1],strip(m.deck||"")],{alias:[c[1]],to:c[0]}); });
  stamps().forEach(s=>add("Stamps","Stamp",\`\${s.title} — \${issuerName(s)}, \${yearOf(s)||"year unread"}\`,\`\${s.identity.issuerAsPrinted.value} · \${denomOf(s)||""} · \${s.story?"story written":"identity only"}\`,stampHref(s.id),[s.id,s.slug||"",s.short||"",(s.facts||[]).map(f=>f.text).join(" ")]));
  (DATA.issuers||[]).forEach(i=>add("Issuers","Issuer",i.name,\`\${i.status==="candidate"?"machine candidate":(i.state==="defunct"?"no longer issues":"current")}\${i.today?\` · today \${i.today}\`:""} · \${i.items||0} item\${(i.items||0)===1?"":"s"}\`,chHref("issuers"),[i.asPrinted,i.today,i.note],{key:i.id,sec:"issuers"}));
  (DATA.people||[]).forEach(p=>add("People","Person",p.name,\`\${p.role} · \${p.lived||""}\`,chHref("people"),[p.role],{key:p.id,sec:"people"}));
  (DATA.themes||[]).forEach(t=>add("Themes","Theme",t.name,\`\${t.stamps.length} named stamp\${t.stamps.length===1?"":"s"}\`,chHref("themes"),[],{key:t.id,sec:"themes"}));
  const yrs=new Map(); stamps().forEach(s=>{ const y=yearOf(s); if(y) yrs.set(y,(yrs.get(y)||[]).concat(s)); });
  Array.from(yrs.keys()).sort().forEach(y=>{ const ss=yrs.get(y); add("Years","Year",String(y),ss.map(s=>s.short||s.title||s.id).join(", "),ss.length===1?stampHref(ss[0].id):chHref("time"),[String(Math.floor(y/10))+"0s decade"],ss.length===1?{}:{key:ss[0].id,sec:"time"}); });
  (DATA.sets||[]).forEach(t=>add("Sets","Set",t.name,\`\${t.valuesHeld} of \${t.valuesTotal} values\`,chHref("sets"),[String(t.year)],{key:t.id,sec:"sets"}));
  (DATA.albums||[]).forEach(a=>{ const label=a.displayName||a.physicalAlbumId; add("Albums","Album",label,\`\${a.positionCount||0} position\${(a.positionCount||0)===1?"":"s"}\`,chHref("albums"),[a.physicalAlbumId,"binder"],{key:a.physicalAlbumId,sec:"albums"}); });
  ((DATA.facts&&DATA.facts.metrics)||[]).forEach(m=>{ const f=FRIENDLY[m.metric]||{}; const d=disp(m); add("Measures","Measure",f.label||m.metric,strip(d.d),chHref("glance"),[m.metric,f.d],{key:m.metric,sec:"glance"}); });
  ((DATA.facts&&DATA.facts.pending)||[]).forEach(p=>{ const label=FRIENDLY_PENDING[p.metric]||p.metric; add("Awaiting","Not yet known",label,\`awaiting \${p.blockedBy}\`,chHref("unknown"),[p.metric,"pending unknown not yet"],{key:label,sec:"unknown"}); });
  (DATA.withheld||[]).forEach(w=>add("Withheld","Not published",w,"kept private — never leaves the archive",chHref("unknown"),["withheld private not published"],{key:"withheld",sec:"unknown"}));
}
function search(q,kind){
  const tokens=norm(q).split(" ").filter(Boolean); let pool=kind?GAZ.filter(e=>e.group===kind):GAZ;
  if(!tokens.length) return pool.map(e=>({e,s:0}));
  const score=e=>{ let s=0; for(const t of tokens){ let m=0; if(e.a.includes(t)||e.l===t) m=6; else if(e.l.startsWith(t)) m=4; else if(e.l.includes(" "+t)) m=3.2; else if(e.l.includes(t)) m=2.4; else if(e.k.startsWith(t)||e.k.includes(" "+t)) m=1.4; else if(e.k.includes(t)) m=1; if(!m) return 0; s+=m; } return s+(RANK[e.kind]||0); };
  const out=[]; for(const e of pool){ const s=score(e); if(s) out.push({e,s}); } out.sort((a,b)=>b.s-a.s||a.e.label.localeCompare(b.e.label)); return out;
}
function hl(label,tokens){ if(!tokens.length) return esc(label); const low=label.toLowerCase(); const marks=[]; tokens.forEach(t=>{ const i=low.indexOf(t); if(i>=0) marks.push([i,i+t.length]); }); if(!marks.length) return esc(label); marks.sort((a,b)=>a[0]-b[0]); let out="",pos=0; marks.forEach(([a,b])=>{ if(a<pos) return; out+=esc(label.slice(pos,a))+"<mark>"+esc(label.slice(a,b))+"</mark>"; pos=b; }); return out+esc(label.slice(pos)); }
function gazRender(){
  const tokens=norm(gaz.q).split(" ").filter(Boolean); const browsing=!tokens.length; let rows=search(gaz.q,gaz.kind);
  if(browsing&&!gaz.kind) rows=rows.filter(r=>["Page","Part","Chapter","Stamp"].includes(r.e.kind));
  const cap=browsing?400:50; const more=Math.max(0,rows.length-cap); gaz.rows=rows.slice(0,cap); const list=$("#gazList");
  if(!gaz.rows.length){ list.innerHTML=\`<div class="gaz-empty">Nothing in the index matches “\${esc(gaz.q)}”\${gaz.kind?\` under \${esc(gaz.kind)}\`:""}.<br><span class="small">The index holds only what the atlas has actually read: pages, chapters, the named stamps, their issuers, people, themes and years — and the honest unknowns. Clear the box to browse.</span></div>\`; gaz.active=-1; gazActive(); return; }
  let html="", last=null;
  gaz.rows.forEach((r,i)=>{ const e=r.e; if(browsing){ const g=gaz.kind?e.kind:(e.group==="Chapters"?\`Part \${ROMAN[PARTS.indexOf(partOf(e.to))]} · \${partOf(e.to).title}\`:e.group); if(g!==last){ html+=\`<div class="gaz-group" role="presentation">\${esc(g)}</div>\`; last=g; } }
    const dest=(e.kind==="Stamp"||e.href.startsWith("#/stamp/"))?\`→ <b>stamp page</b>\`:e.sec&&CH[e.sec]?\`→ <b>\${ROMAN[CH[e.sec].i]}</b> \${esc(shortOf(e.sec))}\`:e.to?\`→ <b>\${ROMAN[CH[e.to].i]}</b>\`:\`→ <b>page</b>\`;
    html+=\`<div class="gaz-opt" role="option" id="gaz-opt-\${i}" data-i="\${i}" aria-selected="false"><span class="kind">\${esc(e.kind)}</span><span class="lbl">\${hl(e.label,tokens)}</span><span class="to">\${dest}</span>\${e.hint?\`<span class="hint">\${esc(e.hint)}</span>\`:""}</div>\`; });
  if(!browsing) html=\`<div class="gaz-group" role="presentation">\${rows.length} match\${rows.length===1?"":"es"}</div>\`+html;
  if(more) html+=\`<div class="gaz-group" role="presentation">\${more} more — keep typing to narrow</div>\`;
  list.innerHTML=html; list.scrollTop=0; gaz.active=browsing?-1:0; gazActive();
}
function gazActive(scroll=true){ $$(".gaz-opt").forEach((o,i)=>o.setAttribute("aria-selected",String(i===gaz.active))); const inp=$("#gazInput"); if(gaz.active>=0){ inp.setAttribute("aria-activedescendant","gaz-opt-"+gaz.active); const o=$("#gaz-opt-"+gaz.active); if(o&&scroll) o.scrollIntoView({block:"nearest"}); } else inp.removeAttribute("aria-activedescendant"); }
function gazKinds(){ const counts={}; GAZ.forEach(e=>counts[e.group]=(counts[e.group]||0)+1); $("#gazKinds").innerHTML=\`<button type="button" class="chip" data-gkind="" aria-pressed="\${String(!gaz.kind)}">Everything <span class="k">\${GAZ.length}</span></button>\`+GROUPS.filter(g=>counts[g]).map(g=>\`<button type="button" class="chip" data-gkind="\${esc(g)}" aria-pressed="\${String(gaz.kind===g)}">\${esc(g)} <span class="k">\${counts[g]}</span></button>\`).join(""); }
function openGaz(q){ const g=$("#gaz"); if(!g.hidden){ $("#gazInput").focus(); return; } gaz.last=document.activeElement; closeContents(false); g.hidden=false; document.body.style.overflow="hidden"; gaz.q=q||""; gaz.kind=null; const inp=$("#gazInput"); inp.value=gaz.q; $("#gazCount").textContent=\`\${GAZ.length} entries · \${stamps().length} stamps · rebuilt from the data on every load\`; gazKinds(); gazRender(); inp.focus(); if(gaz.q) inp.select(); }
function closeGaz(){ const g=$("#gaz"); if(g.hidden) return; g.hidden=true; document.body.style.overflow=""; if(gaz.last&&gaz.last.focus) gaz.last.focus(); gaz.last=null; }
function byKey(sec,key){ const k=String(key).replace(/["\\\\]/g,"\\\\$&"); return $(\`\${sec?"#"+sec+" ":""}[data-key="\${k}"]\`); }
function flash(el){ el.classList.remove("hit"); void el.offsetWidth; el.classList.add("hit"); setTimeout(()=>el.classList.remove("hit"),2300); }
/* an Index jump: route first, then (once the page exists) scroll to the entry and light it */
function go(e){ closeGaz(); state.pendingKey=e.key?{key:e.key,sec:e.sec}:null; if(location.hash===e.href){ afterRender(); } else location.hash=e.href; }
function landOnKey(){ const pk=state.pendingKey; if(!pk) return false; state.pendingKey=null; const el=byKey(pk.sec,pk.key); if(!el) return false; const sec=pk.sec&&$("#"+pk.sec); if(sec) sec.classList.add("in"); el.scrollIntoView({behavior:reduced?"auto":"smooth",block:"center"}); flash(el); return true; }

/* =====================================================================
   ROUTER · hash routes, no framework. Legacy #anchor links still resolve.
   ===================================================================== */
function parseRoute(){
  const h=location.hash||"#/";
  if(!h.startsWith("#/")){ const id=h.slice(1); if(CH[id]&&partOf(id)) return {kind:"part",part:partOf(id),chapter:id,redirect:chHref(id)}; if(!id||id==="top"||id==="main") return {kind:"home"}; return {kind:"404",hash:h}; }
  const seg=h.slice(2).split("/").filter(Boolean).map(x=>{ try{ return decodeURIComponent(x); }catch(e){ return x; } });
  if(!seg.length) return {kind:"home"};
  if(seg[0]==="part"){ const p=partById(seg[1]); if(!p) return {kind:"404",hash:h}; if(seg[2]&&partOf(seg[2])!==p) return {kind:"404",hash:h}; return {kind:"part",part:p,chapter:seg[2]||null}; }
  if(seg[0]==="chapter"){ const p=partOf(seg[1]); return p?{kind:"part",part:p,chapter:seg[1],redirect:partHref(p,seg[1])}:{kind:"404",hash:h}; }
  if(seg[0]==="stamps") return {kind:"register"};
  if(seg[0]==="candidates") return {kind:"candidates"};
  if(seg[0]==="countries"||seg[0]==="issuers") return {kind:"countries"};
  if(seg[0]==="themes") return {kind:"themes"};
  if(seg[0]==="stamp"){ if(seg[1]==="today"){ const s=stampOfTheDay(); return s?{kind:"stamp",stamp:s,redirect:stampHref(s.id)}:{kind:"register",redirect:"#/stamps",noToday:true}; } const s=stampById(seg[1]); return s?{kind:"stamp",stamp:s}:{kind:"404",hash:h}; }
  return {kind:"404",hash:h};
}
let revealIO=null, spyIO=null;
function armReveal(){ if(revealIO) revealIO.disconnect(); if(!document.documentElement.classList.contains("anim")){ $$(".reveal").forEach(e=>e.classList.add("in")); return; } revealIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); revealIO.unobserve(e.target); } }),{rootMargin:"0px 0px -8% 0px"}); $$(".reveal").forEach(e=>revealIO.observe(e)); }
function armSpy(){ if(spyIO) spyIO.disconnect(); if(!("IntersectionObserver" in window)) return; const secs=$$(".chapter"); if(!secs.length) return; spyIO=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting) setHere(e.target.id); }); },{rootMargin:"-40% 0px -55% 0px"}); secs.forEach(s=>spyIO.observe(s)); }
function afterRender(){
  const r=state.route;
  if(r.kind==="part"&&r.chapter){ const el=$("#"+r.chapter); if(el){ el.classList.add("in"); el.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"}); const h=$("#"+r.chapter+"-h"); if(h) h.focus({preventScroll:true}); setHere(r.chapter); } }
  else if(!landOnKey()){ window.scrollTo({top:0,behavior:"auto"}); const t=$("#pageTitle"); if(t) t.focus({preventScroll:true}); }
  landOnKey();
}
function navigate(){
  if(!DATA) return; /* the projection has not arrived yet; the fetch will call navigate() when it does */
  const r=parseRoute(); if(r.redirect){ try{ history.replaceState(null,"",r.redirect); }catch(e){} }
  const prev=state.route; closeContents(false); closeGaz();
  /* a chapter jump inside the Part already on screen: scroll, don't rebuild */
  if(prev&&prev.kind==="part"&&r.kind==="part"&&prev.part===r.part&&!state.pendingKey){ state.route=r; if(r.chapter) afterRender(); else { window.scrollTo({top:0,behavior:reduced?"auto":"smooth"}); setHere(null); } return; }
  state.route=r; let html="", title="Stamp Atlas";
  switch(r.kind){
    case "home":     html=homePage(); break;
    case "part":     html=partPage(r.part); title=\`Part \${ROMAN[PARTS.indexOf(r.part)]} · \${r.part.title} — Stamp Atlas\`; break;
    case "register": html=registerPage(); title="The Register — Stamp Atlas"; break;
    case "candidates": html=candidatesPage(); title="Candidate readings — Stamp Atlas"; break;
    case "countries": html=countriesPage(); title="Issuers — Stamp Atlas"; break;
    case "themes":   html=themesPage(); title="Themes — Stamp Atlas"; break;
    case "stamp":    html=stampPage(r.stamp); title=\`\${r.stamp.title} · \${issuerName(r.stamp)} \${yearOf(r.stamp)||""} — Stamp Atlas\`; break;
    default:         html=notFoundPage(r.hash); title="Off the edge of the map — Stamp Atlas";
  }
  $("#app").innerHTML=html; document.title=title;
  chapterFeet(); armReveal(); armSpy(); setHere(r.kind==="part"&&r.chapter?r.chapter:null);
  afterRender();
}

/* ——— THEME ——— */
function initTheme(){
  let saved=null; try{ saved=localStorage.getItem("sa-theme"); }catch(e){}
  if(saved) document.documentElement.setAttribute("data-theme",saved);
  const btn=$("#themeToggle"); const sync=()=>{ const dark=document.documentElement.getAttribute("data-theme")==="dark"||(!document.documentElement.getAttribute("data-theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches); btn.setAttribute("aria-pressed",String(dark)); btn.querySelector(".lbl").textContent=dark?"Daylight":"Lamplight"; };
  btn.addEventListener("click",()=>{ const dark=btn.getAttribute("aria-pressed")==="true"; const next=dark?"light":"dark"; document.documentElement.setAttribute("data-theme",next); try{ localStorage.setItem("sa-theme",next); }catch(e){} sync(); });
  sync();
}

/* ——— data plumbing: the wayfinding, the index and the foot stamp, all rebuilt
   from whatever the projection carries — nothing philatelic is invented here ——— */
function loadData(){
  DATA.facts=DATA.facts||{};
  nav(); buildIndex(); const albums=DATA.albums||[]; const positions=albums.reduce((n,a)=>n+(a.positionCount||0),0);
  $("#footStamp").textContent=\`Charted as of \${asOfDate()} · \${fmt(albums.length)} album\${albums.length===1?"":"s"} · \${fmt(positions)} position\${positions===1?"":"s"} · \${fmt(stamps().length)} stamp\${stamps().length===1?"":"s"} named · \${GAZ.length} index entries · projection generated \${niceDate(DATA.generatedAt)||"—"}\`;
}
/* on fetch failure: the graceful "the atlas could not be loaded just now" state */
function bootError(){
  document.documentElement.classList.remove("anim");
  document.title="The atlas could not be loaded — Stamp Atlas";
  $("#app").innerHTML=\`<section class="empty wrap"><span class="eyebrow">Stamp Atlas</span><h1 id="pageTitle" tabindex="-1" style="margin-top:12px">The atlas could not be loaded just now.</h1><p>It draws itself from a small file of facts that did not arrive. Nothing is broken — try again in a moment.</p><div style="max-width:220px;margin:24px auto 0">\${plate("art",{src:"assets/plate-frontispiece.jpg",cap:"Plate I · Frontispiece",alt:"An engraved compass-rose frontispiece"})}</div></section>\`;
  $("#partsList").innerHTML=""; $("#contentsTop").innerHTML=""; $("#contentsGrid").innerHTML=""; $("#navHere").innerHTML="";
  const ib=$("#indexBtn"), cb=$("#contentsBtn"); if(ib) ib.hidden=true; if(cb) cb.hidden=true;
  $("#footStamp").textContent="";
}

/* ——— delegated interactions ——— */
document.addEventListener("click",e=>{
  if(!$("#contentsPanel").hidden&&!e.target.closest(".nav")) closeContents(false);
  const oi=e.target.closest("[data-open-index]"); if(oi){ e.preventDefault(); openGaz(oi.dataset.openIndex||""); return; }
  const oc=e.target.closest("[data-open-contents]"); if(oc){ lastNavBtn=oc; openContents(true); return; }
  const g=e.target.closest("a.g[data-fact]"); if(g){ e.preventDefault(); const li=$("#fact-"+CSS.escape(g.dataset.fact)); if(li){ li.scrollIntoView({behavior:reduced?"auto":"smooth",block:"center"}); flash(li); } return; }
});
document.addEventListener("keydown",e=>{
  const isEl=e.target instanceof Element; const typing=isEl&&e.target.matches("input,textarea,select,[contenteditable]");
  if(e.key==="Escape"){ if(!$("#gaz").hidden){ closeGaz(); return; } if(!$("#contentsPanel").hidden){ closeContents(true); return; } return; }
  if(((e.key==="k"||e.key==="K")&&(e.metaKey||e.ctrlKey))||(e.key==="/"&&!typing&&!e.metaKey&&!e.ctrlKey&&!e.altKey)){ e.preventDefault(); openGaz(); return; }
});
$("#contentsBtn").addEventListener("click",e=>toggleContents($("#contentsBtn"),e.detail===0));
$("#contentsPanel").addEventListener("click",e=>{ if(e.target.closest("a")) closeContents(false); });
$("#indexBtn").addEventListener("click",()=>openGaz());
$("#gazInput").addEventListener("input",e=>{ gaz.q=e.target.value; gazRender(); });
$("#gazInput").addEventListener("keydown",e=>{ const n=gaz.rows.length;
  if(e.key==="ArrowDown"){ e.preventDefault(); if(n){ gaz.active=(gaz.active+1)%n; gazActive(); } }
  else if(e.key==="ArrowUp"){ e.preventDefault(); if(n){ gaz.active=(gaz.active-1+n)%n; gazActive(); } }
  else if(e.key==="Enter"){ e.preventDefault(); if(gaz.active>=0&&gaz.rows[gaz.active]) go(gaz.rows[gaz.active].e); else if(n===1) go(gaz.rows[0].e); } });
$("#gazList").addEventListener("click",e=>{ const o=e.target.closest(".gaz-opt"); if(o) go(gaz.rows[+o.dataset.i].e); });
$("#gazList").addEventListener("mousemove",e=>{ const o=e.target.closest(".gaz-opt"); if(o&&+o.dataset.i!==gaz.active){ gaz.active=+o.dataset.i; gazActive(false); } });
$("#gazKinds").addEventListener("click",e=>{ const b=e.target.closest("[data-gkind]"); if(!b) return; gaz.kind=b.dataset.gkind||null; gazKinds(); gazRender(); $("#gazInput").focus(); });
$("#gaz").addEventListener("click",e=>{ if(e.target===$("#gaz")||e.target.closest("#gazClose")) closeGaz(); });
$("#gaz").addEventListener("keydown",e=>{ if(e.key!=="Tab") return; const f=$$("#gaz button,#gaz input").filter(x=>x.offsetParent!==null); if(!f.length) return; const first=f[0], last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){ e.preventDefault(); last.focus(); } else if(!e.shiftKey&&document.activeElement===last){ e.preventDefault(); first.focus(); } });
window.addEventListener("hashchange",navigate);

/* ——— BOOT ——— */
initTheme();
/* Arm scroll-reveal ONLY when this page owns its own scroll — a top-level document, not a
   preview/snapshot iframe (where the observer never fires). Unarmed, everything is simply visible. */
if(!reduced && ("IntersectionObserver" in window) && window.self===window.top) document.documentElement.classList.add("anim");
/* the page draws itself from a small file of facts, and renders ONLY what that file carries */
fetch("/api/public.json").then(r=>{ if(!r.ok) throw new Error("http "+r.status); return r.json(); })
  .then(d=>{ DATA=d||{}; DATA.facts=DATA.facts||{}; loadData(); navigate(); })
  .catch(()=>bootError());

/* =====================================================================
   PROJECTION NOTES · what the per-stamp pages and stamp-of-the-day need
   the projection (and so the ingestion/knowledge step) to emit, per item.
   Nothing on a stamp page may come from anywhere else.

   stamps[] — one entry per item a PERSON has confirmed to at least the issuer
     id, slug, short, title, titleNote
     identity.{issuerAsPrinted, issuerInYear, successor, place{lat,lon},
       year, denomination{currency}, design, monarch{personId}, designer{personId},
       printer, inscriptions, script, battleName/…any inscription field}
       — every one a {value, status: confirmed|candidate|unknown, source:
         printed|reference|album|machine|machine+person|curator, note}
     identity.issuerId → issuers[]; identity.setId → sets[]
     physical.{colour, condition, postmark, perforation, watermark}
       — same shape; status "nm" = not measurable from the photograph
     image.{kind: art|withheld|pending, artId, caption, alt, reason}
       — a policy decision per item; never a photograph or scan of the stamp
     facts[] — {id, text, source} the ONLY material a story may cite
     story — null, or {lede, pull{text,factIds}, sections[{h, paras[{t, g:[factId…]}]}]}
       — every paragraph carries the fact ids it rests on; a story with an
         uncited paragraph must be rejected by the knowledge step
     connections.{people[{id,why}], themes[id], events[{name,when}],
       successors[{name,since,until,itemsInCollection}], stamps[{id,why}], setId}
     provenance.{albumId, page, position, positionsOnPage, capturedAt,
       identifiedAt, confirmedBy: person|machine, partial}
     unknowns[] — plain sentences naming what is still open on this copy
   people[], themes[], sets[], issuers[] — entities with back-references
     (issuers carry asPrinted, state current|defunct, today, note, lat/lon, status)
   facts.years — {earliest{confirmed,candidate,confirmedStampId}, latest{…}, byDecade[[label,confirmed,candidate]]}
   discoveries[] — {q, a, stamps[]} computed from the projection
   didYouKnow[]  — {text, stamps[], factId} lifted from a stamp's own facts
   Stamp of the day = FNV-1a(seed-day) over stamps with a story (else any
   identified stamp); with none, the honest empty state — never a fake.
   ===================================================================== */
})();
</script>
</body>
</html>
`;
