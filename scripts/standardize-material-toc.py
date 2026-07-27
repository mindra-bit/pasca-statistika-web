#!/usr/bin/env python3
"""Apply one responsive TOC treatment to every R Markdown course material."""

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
MATERIALS = ROOT / "@Materi Kuliah"
START = "<!-- BEGIN STANDARD MATERIAL TOC 2026 -->"
END = "<!-- END STANDARD MATERIAL TOC 2026 -->"

BLOCK = f"""\
{START}
<style>
/* Canonical material TOC: follows Analisis Deret Waktu Tingkat Lanjut. */
html body {{
  padding-left: 0 !important;
}}
body > .main-container,
body > .container-fluid {{
  margin-left: auto !important;
  margin-right: auto !important;
}}
.main-container .row-fluid > [class*="col-"] {{
  box-sizing: border-box;
}}
#TOC.tocify,
nav#TOC.tocify,
.tocify {{
  position: sticky !important;
  left: auto !important;
  right: auto !important;
  top: 20px !important;
  bottom: auto !important;
  width: 100% !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: calc(100vh - 40px) !important;
  margin: 0 0 22px !important;
  padding: 12px !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  z-index: 10 !important;
  color: #2b1608 !important;
  background: #fff5e6 !important;
  border: 1px solid #c58a3a !important;
  border-radius: 18px !important;
  box-shadow: 0 10px 30px rgba(92,48,10,.17) !important;
  font-size: 14px !important;
  box-sizing: border-box !important;
}}
#TOC.tocify::before,
nav#TOC.tocify::before {{
  content: none !important;
  display: none !important;
}}
#TOC.tocify ul,
nav#TOC.tocify ul,
.tocify ul {{
  display: block;
  width: 100%;
  margin: 0 !important;
  padding-left: 0 !important;
  list-style: none !important;
}}
#TOC.tocify li,
nav#TOC.tocify li,
.tocify li {{
  display: block;
  width: 100%;
  margin: 2px 0 !important;
}}
#TOC.tocify a,
nav#TOC.tocify a,
.tocify .list-group-item,
.tocify .tocify-item a,
.tocify .tocify-subheader a {{
  display: block !important;
  width: 100% !important;
  height: auto !important;
  min-height: 30px;
  padding: 6px 10px !important;
  overflow: visible !important;
  color: #4b2308 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 9px !important;
  white-space: normal !important;
  overflow-wrap: anywhere;
  text-decoration: none !important;
  line-height: 1.35 !important;
  box-sizing: border-box !important;
}}
.tocify .tocify-subheader a {{
  padding-left: 22px !important;
}}
.tocify .tocify-subheader .tocify-subheader a {{
  padding-left: 34px !important;
}}
#TOC.tocify a:hover,
nav#TOC.tocify a:hover,
.tocify .list-group-item:hover {{
  color: #351704 !important;
  background: #f5dfbf !important;
}}
#TOC.tocify .active,
nav#TOC.tocify .active,
.tocify .active,
.tocify .list-group-item.active {{
  color: #fff !important;
  background: linear-gradient(90deg,#9b5f1d,#c88945) !important;
  border-radius: 10px !important;
}}
#TOC.tocify .active a,
nav#TOC.tocify .active a,
.tocify .active a {{
  color: #fff !important;
  background: transparent !important;
}}
.toc-content {{
  margin-left: 0 !important;
  min-width: 0;
}}
@media (max-width: 767px) {{
  #TOC.tocify,
  nav#TOC.tocify,
  .tocify {{
    position: relative !important;
    top: auto !important;
    max-height: 360px !important;
    margin: 0 0 22px !important;
  }}
  .main-container .row-fluid > [class*="col-"],
  .toc-content {{
    float: none !important;
    width: 100% !important;
  }}
}}
@media print {{
  #TOC.tocify,
  nav#TOC.tocify,
  .tocify {{
    position: relative !important;
    top: auto !important;
    max-height: none !important;
    box-shadow: none !important;
  }}
}}
</style>
{END}
"""


def has_float_toc(text: str) -> bool:
    return bool(re.search(r"(?m)^\s*toc_float\s*:", text))


def update(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if not has_float_toc(text):
        return False

    pattern = re.compile(
        rf"\n?{re.escape(START)}.*?{re.escape(END)}\n?", re.DOTALL
    )
    text = pattern.sub("\n", text)
    in_fence = False
    insert_at = None
    offset = 0
    for line in text.splitlines(keepends=True):
        if re.match(r"^\s*```", line):
            in_fence = not in_fence
        elif not in_fence and re.match(r"^#{1,6}\s+\S", line):
            insert_at = offset
            break
        offset += len(line)
    if insert_at is None:
        raise RuntimeError(f"No Markdown heading found in {path}")
    revised = text[:insert_at] + BLOCK + "\n" + text[insert_at:]
    path.write_text(revised, encoding="utf-8")
    return True


def main() -> None:
    paths = sorted(MATERIALS.rglob("*.Rmd"))
    changed = [path for path in paths if update(path)]
    print(f"Standardized TOC in {len(changed)} Rmd files.")
    for path in changed:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
