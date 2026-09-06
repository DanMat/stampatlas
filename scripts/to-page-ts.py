#!/usr/bin/env python3
"""Deterministically wrap a self-contained HTML file as the page.ts template literal.

The live worker imports `PAGE` (a string) and serves it verbatim. Embedding HTML that
itself contains backticks and ${...} inside a JS template literal requires escaping, in
this exact order so no backslash is doubled wrongly:
    1. backslash  \\  -> \\\\      (a lone \\d in source must survive as \\d at runtime)
    2. backtick   `   -> \\`
    3. dollar-brace ${ -> \\${
The runtime string is then byte-for-byte the original HTML.

Usage: to-page-ts.py <input.html> <output page.ts>
"""
import sys

def main() -> int:
    if len(sys.argv) != 3:
        print("usage: to-page-ts.py <input.html> <output.ts>", file=sys.stderr)
        return 2
    src = open(sys.argv[1], "r", encoding="utf-8").read()
    esc = src.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    out = (
        "/** Stamp Atlas — the public story page. "
        "Self-contained; fetches /api/public.json and renders it.\n"
        " *  GENERATED from scratchpad/live-index.html by to-page-ts.py — edit the HTML, then regenerate. */\n"
        "export const PAGE = `" + esc + "`;\n"
    )
    open(sys.argv[2], "w", encoding="utf-8").write(out)
    # Report a couple of sanity numbers.
    print(f"wrote {sys.argv[2]}: {len(out)} bytes (from {len(src)} bytes html)")
    if "PhilatelyOS" in src:
        print("!! WARNING: private name present in source HTML", file=sys.stderr)
        return 1
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
