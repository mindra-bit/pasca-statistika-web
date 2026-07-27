#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import importlib.util
import json
import re
from pathlib import Path

from docx import Document


ROOT = Path(__file__).resolve().parents[1]
MATERIALS_ROOT = ROOT / "@Materi Kuliah"
BASE_SCRIPT = ROOT / "scripts/revise-materials-ai-2026.py"
STYLE_BEGIN = "<!-- BEGIN AI-INLINE-STYLE-2026 -->"
STYLE_END = "<!-- END AI-INLINE-STYLE-2026 -->"
BLOCK_BEGIN = "<!-- BEGIN AI-INLINE:"
BLOCK_END = "<!-- END AI-INLINE -->"

spec = importlib.util.spec_from_file_location("base_revision", BASE_SCRIPT)
base = importlib.util.module_from_spec(spec)
assert spec.loader
spec.loader.exec_module(base)


STYLE = f"""
{STYLE_BEGIN}
<style>
.ai-inline {{
  margin: 1rem 0 1.35rem;
  padding: 1rem 1.1rem;
  border: 1px solid #bfd9d5;
  border-left: 7px solid #0f766e;
  border-radius: 8px;
  background: linear-gradient(135deg, #eff9f7, #fffaf0);
}}
.ai-inline--agentic {{ border-left-color: #17395c; background: linear-gradient(135deg, #eef5fb, #f5faf8); }}
.ai-inline--assessment {{ border-left-color: #a35d00; background: #fff8e8; }}
.ai-inline h3, .ai-inline h4 {{ margin-top: 0; color: #17395c; }}
.ai-inline p:last-child, .ai-inline ul:last-child {{ margin-bottom: 0; }}
.ai-inline__label {{
  display: inline-block; margin-bottom: .45rem; padding: .2rem .55rem;
  border-radius: 999px; background: #17395c; color: white;
  font-size: .78rem; font-weight: 800;
}}
.ai-inline table {{ width: 100%; margin: .6rem 0; background: white; }}
</style>
{STYLE_END}
""".strip()


def clean_generated(text: str) -> str:
    text = re.sub(
        re.escape(STYLE_BEGIN) + r".*?" + re.escape(STYLE_END) + r"\s*",
        "",
        text,
        flags=re.S,
    )
    text = re.sub(
        re.escape(BLOCK_BEGIN) + r".*?" + re.escape(BLOCK_END) + r"\s*",
        "",
        text,
        flags=re.S,
    )
    return re.sub(r"\n{3,}", "\n\n", text)


def norm(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def extract_weekly_alignment(rps_path: Path):
    doc = Document(rps_path)
    weeks = {}
    for table in doc.tables:
        rows = [[norm(c.text) for c in row.cells] for row in table.rows]
        if not rows or "Integrasi AI kontekstual" not in rows[0]:
            continue
        header = rows[0]
        week_i = header.index("Mgg.") if "Mgg." in header else 0
        focus_i = header.index("Fokus materi")
        ai_i = header.index("Integrasi AI kontekstual")
        cpmk_i = header.index("CPMK") if "CPMK" in header else None
        for row in rows[1:]:
            if len(row) <= max(week_i, focus_i, ai_i):
                continue
            match = re.search(r"\d+", row[week_i])
            if not match:
                continue
            week = int(match.group())
            weeks[week] = {
                "focus": row[focus_i],
                "ai": row[ai_i],
                "cpmk": row[cpmk_i] if cpmk_i is not None and len(row) > cpmk_i else "",
            }
    return weeks


def artifact_list():
    return (
        "prompt log ringkas, keluaran awal, perubahan yang dilakukan mahasiswa, "
        "sumber pembanding, kode/notebook yang dapat dijalankan ulang, hasil validasi, "
        "dan keputusan akhir manusia"
    )


def topic_actions(topic: str):
    t = topic.lower()
    generative = "merumuskan alternatif penjelasan, contoh, dan hipotesis awal"
    agentic = "menjalankan rangkaian pemeriksaan data–model–diagnostik secara bertahap"
    checkpoint = "ketepatan konsep, asumsi metode, hasil numerik, dan interpretasi substantif"
    if any(k in t for k in ("data", "basis data", "sampling", "survei", "korpus", "image", "citra")):
        generative = "menyusun data dictionary, mendeteksi potensi masalah kualitas data, dan mengusulkan aturan pemeriksaan"
        agentic = "memprofilkan data, menjalankan validasi skema, menandai missing value/outlier/duplikasi, lalu berhenti sebelum perubahan data"
        checkpoint = "asal-usul data, unit observasi, coverage, kebocoran data, privasi, dan keputusan pembersihan"
    if any(k in t for k in ("rumus", "matematis", "teorema", "likelihood", "estimasi", "inferensi", "stokastik", "aktuaria", "risiko")):
        generative = "mengurai notasi dan menawarkan langkah derivasi alternatif tanpa menggantikan pembuktian mahasiswa"
        agentic = "menguji kasus batas, simulasi numerik, dan konsistensi hasil pada beberapa parameter"
        checkpoint = "setiap langkah aljabar, syarat regularitas, satuan, kasus batas, dan makna parameter"
    if any(k in t for k in ("model", "regresi", "arima", "arfima", "forest", "xgboost", "neural", "lstm", "sem", "glm", "multilevel", "survival")):
        generative = "membandingkan kandidat model, menuliskan alasan pemilihan, dan mengusulkan diagnostik"
        agentic = "memasang kandidat model, menjalankan diagnostik, membandingkan metrik, dan menghentikan proses pada kegagalan asumsi atau konvergensi"
        checkpoint = "spesifikasi model, data leakage, konvergensi, residual, kalibrasi, ketidakpastian, dan overfitting"
    if any(k in t for k in ("aplikasi", "kasus", "proyek", "presentasi", "laporan", "komunikasi")):
        generative = "menghasilkan beberapa skenario pemangku kepentingan dan draf narasi yang kemudian diperiksa terhadap hasil analisis"
        agentic = "merakit tabel, grafik, pemeriksaan konsistensi, dan daftar klaim–bukti sebelum laporan disetujui manusia"
        checkpoint = "kesesuaian klaim dengan bukti, ketidakpastian, keterbatasan, fairness, dan dampak keputusan"
    return generative, agentic, checkpoint


def meeting_block(
    course: str,
    meeting: int,
    title: str,
    alignment: dict,
    unit_label: str = "Pertemuan",
    display_number: int | None = None,
):
    focus = alignment.get("focus") or title
    ai = alignment.get("ai") or f"AI digunakan secara terbatas untuk mendukung pembelajaran {title}."
    cpmk = alignment.get("cpmk") or "CPMK terkait"
    if re.fullmatch(r"\d+(?:[–-]\d+)?", cpmk):
        cpmk = f"CPMK{cpmk}"
    gen, agent, checkpoint = topic_actions(f"{title} {focus}")
    return f"""
<div class="ai-inline ai-inline--agentic">
<span class="ai-inline__label">Integrasi AI pada {unit_label} {display_number or meeting}</span>
<h3>Generative dan Agentic AI untuk {title}</h3>

**Arah RPS.** {ai}

| Komponen | Implementasi pada bab ini |
|---|---|
| Target pembelajaran | Mendukung {cpmk} melalui fokus: {focus}. |
| Generative AI | Digunakan untuk {gen}. |
| Agentic AI | Dapat {agent}; agen wajib berhenti pada checkpoint dosen/mahasiswa. |
| Human checkpoint | Mahasiswa memeriksa {checkpoint}; keluaran AI tidak diterima sebagai bukti kebenaran. |
| Artefak wajib | {artifact_list()}. |

**Batas penggunaan.** AI tidak boleh mengerjakan asesmen tertutup, menetapkan
kesimpulan akhir, atau menerima/mengirim data sensitif ke layanan yang tidak
disetujui. Mahasiswa wajib mampu mengulang dan menjelaskan analisis tanpa
bergantung pada percakapan AI.
</div>
""".strip()


def subsection_block(course: str, meeting: int | None, meeting_title: str, subheading: str, alignment: dict):
    key = subheading.lower()
    combined = f"{meeting_title} {subheading}"
    gen, agent, checkpoint = topic_actions(combined)
    ai = alignment.get("ai") or f"AI mendukung proses belajar {combined} secara terkontrol."
    label = "Generative AI"
    css = ""
    content = (
        f"Gunakan Generative AI untuk {gen}. Ajukan minimal dua alternatif dan "
        f"bandingkan dengan buku/rujukan primer. **Verifikasi manusia:** {checkpoint}. "
        f"Catat {artifact_list()}."
    )
    if any(k in key for k in ("alur", "workflow", "praktikum", "implementasi", "komputasi", "kode", "diagnostik")):
        label = "Agentic AI dengan checkpoint"
        css = " ai-inline--agentic"
        content = (
            f"Agen dapat {agent}. Tetapkan checkpoint sebelum perubahan data, "
            f"pemilihan model, dan penerbitan hasil. **Mahasiswa wajib memeriksa:** "
            f"{checkpoint}. Simpan {artifact_list()}."
        )
    elif any(k in key for k in ("quiz", "kuis", "tugas", "diskusi", "asesmen", "ujian")):
        label = "Aturan AI untuk latihan dan asesmen"
        css = " ai-inline--assessment"
        content = (
            "Ikuti status asesmen yang ditetapkan dosen: tanpa AI, AI terbatas, atau AI terbuka. "
            "Jika diizinkan, AI hanya memberi kritik, pertanyaan tandingan, atau pemeriksaan awal; "
            "jawaban, keputusan metode, dan pembelaan lisan tetap karya mahasiswa. "
            f"Bukti yang diserahkan: {artifact_list()}."
        )
    elif any(k in key for k in ("aplikasi", "kasus", "proyek", "laporan", "presentasi")):
        label = "AI untuk aplikasi dan komunikasi"
        css = " ai-inline--agentic"
        content = (
            f"Terapkan arahan RPS berikut pada kasus bab ini: {ai} "
            f"Generative AI dapat {gen}; Agentic AI dapat {agent}. "
            f"Checkpoint manusia mencakup {checkpoint}. Semua klaim harus ditautkan "
            "ke output, ketidakpastian, dan sumber yang dapat diperiksa."
        )
    elif any(k in key for k in ("rumus", "matematis", "teori", "konsep", "narasi")):
        label = "AI sebagai tutor kritis"
        if any(k in key for k in ("rumus", "matematis")):
            content = (
                f"Gunakan AI untuk mengurai notasi dan menawarkan alternatif derivasi pada "
                f"**{meeting_title}**, lalu periksa setiap langkah secara manual, uji kasus batas, "
                "dan cocokkan dengan rujukan primer. AI tidak boleh menjadi satu-satunya sumber "
                "rumus atau pembuktian; kesetaraan simbolik wajib dibuktikan mahasiswa."
            )
        else:
            content = (
                f"Minta AI menjelaskan **{meeting_title}** melalui definisi, analogi, contoh, dan "
                "contoh tandingan. Mahasiswa kemudian membandingkan penjelasan itu dengan rujukan "
                "primer, menandai simplifikasi yang keliru, dan menulis kembali konsep dengan "
                "bahasanya sendiri. AI tidak boleh menjadi satu-satunya sumber konsep."
            )
    else:
        return ""
    context = f"Pertemuan {meeting}: {meeting_title}" if meeting else course
    return f"""
<div class="ai-inline{css}">
<span class="ai-inline__label">{label}</span>
<h4>Penerapan pada {subheading}</h4>
<p><strong>Konteks:</strong> {context}.</p>
<p>{content}</p>
</div>
""".strip()


def block_wrap(content: str, identity: str):
    digest = hashlib.sha1(identity.encode("utf-8")).hexdigest()[:12]
    return f"{BLOCK_BEGIN}{digest} -->\n{content}\n{BLOCK_END}"


def relevant_h2(title: str):
    t = title.lower()
    return any(
        key in t
        for key in (
            "narasi", "konsep", "teori", "rumus", "matematis", "alur", "workflow",
            "praktikum", "implementasi", "komputasi", "kode", "diagnostik", "aplikasi",
            "kasus", "proyek", "laporan", "presentasi", "diskusi", "quiz", "kuis",
            "tugas", "asesmen", "evaluasi", "interpretasi", "simulasi",
            "algoritma", "kesalahan", "reflektif", "pendalaman", "validitas",
            "efisiensi", "pelaporan", "etika", "akuntabilitas", "data", "model",
            "estimator", "asumsi", "visualisasi", "studi kasus",
        )
    )


def revise_rmd(path: Path, course: str, weekly: dict):
    text = clean_generated(path.read_text(encoding="utf-8"))
    lines = text.splitlines()
    out = []
    in_code = False
    meeting = None
    meeting_title = ""
    alignment = {}
    style_inserted = False
    substantive_counter = 0
    excluded_h1 = (
        "prakata", "orientasi mata kuliah", "identitas mata kuliah", "panduan",
        "referensi", "daftar pustaka", "glosarium", "penutup", "appendix",
        "lampiran", "bank soal", "struktur folder", "checklist", "kode",
    )
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code = not in_code
            out.append(line)
            continue
        if not style_inserted and not in_code and stripped and not stripped.startswith("---"):
            # Put CSS after the YAML header/setup area, before the first visible heading.
            if re.match(r"^#\s+", stripped):
                out.extend(["", STYLE, ""])
                style_inserted = True
        out.append(line)
        if in_code:
            continue
        h1 = re.match(r"^#\s+(?:Pertemuan|Minggu)\s*(\d+)[\.:]?\s*(.*)$", stripped, flags=re.I)
        if h1:
            meeting = int(h1.group(1))
            meeting_title = norm(h1.group(2)) or weekly.get(meeting, {}).get("focus", f"Pertemuan {meeting}")
            alignment = weekly.get(meeting, {})
            out.extend(
                [
                    "",
                    block_wrap(
                        meeting_block(course, meeting, meeting_title, alignment),
                        f"{path}:{meeting}:meeting",
                    ),
                    "",
                ]
            )
            continue
        chapter = re.match(r"^#\s+Bab\s*(\d+)[\.:]?\s*(.*)$", stripped, flags=re.I)
        if chapter:
            chapter_no = int(chapter.group(1))
            meeting = min(max(chapter_no, 1), 16)
            substantive_counter = max(substantive_counter, meeting)
            meeting_title = norm(chapter.group(2)) or weekly.get(meeting, {}).get("focus", f"Bab {chapter_no}")
            alignment = weekly.get(meeting, {})
            out.extend(
                [
                    "",
                    block_wrap(
                        meeting_block(
                            course, meeting, meeting_title, alignment,
                            unit_label="Bab", display_number=chapter_no,
                        ),
                        f"{path}:bab:{chapter_no}",
                    ),
                    "",
                ]
            )
            continue
        generic_h1 = re.match(r"^#\s+(.+)$", stripped)
        if generic_h1:
            title = norm(re.sub(r"\s*\{.*\}\s*$", "", generic_h1.group(1)))
            if title and not any(title.lower().startswith(x) for x in excluded_h1):
                substantive_counter += 1
                meeting = min(substantive_counter, 16)
                meeting_title = title
                alignment = weekly.get(meeting, {})
                out.extend(
                    [
                        "",
                        block_wrap(
                            meeting_block(
                                course, meeting, meeting_title, alignment,
                                unit_label="Bab", display_number=substantive_counter,
                            ),
                            f"{path}:section:{substantive_counter}:{title}",
                        ),
                        "",
                    ]
                )
            continue
        h2 = re.match(r"^#{2,3}\s+(.+)$", stripped)
        if h2 and relevant_h2(h2.group(1)):
            subheading = norm(re.sub(r"\s*\{{.*\}}\s*$", "", h2.group(1)))
            content = subsection_block(course, meeting, meeting_title or course, subheading, alignment)
            if content:
                out.extend(
                    [
                        "",
                        block_wrap(
                            content,
                            f"{path}:{meeting}:{subheading}",
                        ),
                        "",
                    ]
                )
    if not style_inserted:
        out.extend(["", STYLE])
    path.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")


def main():
    catalog = json.loads((ROOT / "data/materials.json").read_text(encoding="utf-8"))
    report = []
    for material in catalog["materials"]:
        folder = material["folder"]
        rps_path = base.RPS_ROOT / base.RPS_BY_FOLDER[folder]
        course, _, _ = base.extract_alignment(rps_path)
        weekly = extract_weekly_alignment(rps_path)
        for rmd in sorted((MATERIALS_ROOT / folder).glob("*.Rmd")):
            revise_rmd(rmd, course, weekly)
            text = rmd.read_text(encoding="utf-8")
            report.append(
                {
                    "folder": folder,
                    "file": rmd.name,
                    "meetings": len(re.findall(r"Integrasi AI pada Pertemuan", text)),
                    "inlineBlocks": text.count(BLOCK_BEGIN),
                    "rpsWeeks": len(weekly),
                }
            )
    output = ROOT / "data/materials-ai-inline-report.json"
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        f"Integrated AI across {len(report)} Rmd files; "
        f"{sum(x['meetings'] for x in report)} meeting blocks and "
        f"{sum(x['inlineBlocks'] for x in report)} total contextual blocks."
    )


if __name__ == "__main__":
    main()
