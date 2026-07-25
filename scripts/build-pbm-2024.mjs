import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceRoot = process.argv[2];
const outputFile = process.argv[3] || "dokumen-pbm-2024.html";

if (!sourceRoot) {
  throw new Error("Gunakan: node scripts/build-pbm-2024.mjs <folder-sumber> [output]");
}

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const slugify = (value) =>
  value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
};

async function walk(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, "id"))) {
    if (entry.name === ".DS_Store") continue;
    const absolute = path.join(dir, entry.name);
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute, relative));
    else if (entry.isFile()) {
      const info = await stat(absolute);
      files.push({ name: entry.name, relative, bytes: info.size, ext: path.extname(entry.name).slice(1).toUpperCase() || "FILE" });
    }
  }
  return files;
}

const semesters = [];
for (const semesterName of (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^Semester \d+$/i.test(entry.name))
  .sort((a, b) => a.name.localeCompare(b.name, "id"))) {
  const semesterPath = path.join(sourceRoot, semesterName.name);
  const courses = [];
  for (const course of (await readdir(semesterPath, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, "id"))) {
    const files = await walk(path.join(semesterPath, course.name));
    courses.push({
      name: course.name,
      slug: `${slugify(semesterName.name)}-${slugify(course.name)}`,
      files,
      bytes: files.reduce((sum, file) => sum + file.bytes, 0),
    });
  }
  semesters.push({ name: semesterName.name, courses });
}

const totalFiles = semesters.flatMap((semester) => semester.courses).reduce((sum, course) => sum + course.files.length, 0);
const totalBytes = semesters.flatMap((semester) => semester.courses).reduce((sum, course) => sum + course.bytes, 0);
const releaseBase = "https://github.com/mindra-bit/pasca-statistika-web/releases/download/pbm-2024";

const courseMarkup = semesters.map((semester, semesterIndex) => `
  <section class="semester-panel" id="${slugify(semester.name)}" data-semester-panel ${semesterIndex ? "hidden" : ""}>
    <div class="semester-heading">
      <div><p class="eyebrow">Arsip akademik</p><h2>${escapeHtml(semester.name)}</h2></div>
      <p>${semester.courses.length} mata kuliah · ${semester.courses.reduce((sum, course) => sum + course.files.length, 0)} dokumen</p>
    </div>
    <div class="course-grid">
      ${semester.courses.map((course) => `
        <details class="course-card" data-course>
          <summary>
            <span><strong>${escapeHtml(course.name)}</strong><small>${course.files.length} dokumen · ${formatSize(course.bytes)}</small></span>
            <span class="chevron" aria-hidden="true">⌄</span>
          </summary>
          <div class="course-actions">
            <a href="${releaseBase}/${course.slug}.zip">Unduh paket mata kuliah (.zip)</a>
          </div>
          <ol class="document-list">
            ${course.files.map((file) => `
              <li data-document data-search="${escapeHtml(`${course.name} ${file.relative} ${file.ext}`.toLowerCase())}">
                <span class="file-type">${escapeHtml(file.ext)}</span>
                <span class="file-copy"><strong>${escapeHtml(file.name)}</strong><small>${escapeHtml(file.relative)} · ${formatSize(file.bytes)}</small></span>
              </li>`).join("")}
          </ol>
        </details>`).join("")}
    </div>
  </section>`).join("");

const html = `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Arsip Dokumen PBM 2024 S2 Statistika Terapan Unpad per semester dan mata kuliah.">
  <title>Dokumen PBM 2024 · S2 Statistika Terapan Unpad</title>
  <style>
    :root{--ink:#173042;--muted:#60717d;--green:#0e6b58;--green-dark:#084c3f;--gold:#f2a900;--paper:#f5f1e8;--line:#ded6c9;--white:#fff}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:var(--paper);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    a{color:inherit}.topbar{background:var(--green-dark);color:#fff}.topbar-inner{max-width:1180px;margin:auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{font-weight:900;text-decoration:none}.back{font-size:14px;font-weight:750;text-decoration:none}
    .hero{background:linear-gradient(135deg,#093f35,#0e6b58 68%,#1b7d68);color:#fff}.hero-inner{max-width:1180px;margin:auto;padding:64px 24px 54px}.eyebrow{margin:0 0 10px;color:var(--gold);font-size:12px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.hero h1{max-width:760px;margin:0;font-size:clamp(36px,6vw,68px);line-height:.98;letter-spacing:-.045em}.hero-copy{max-width:710px;margin:22px 0 0;color:#d8eee8;font-size:17px;line-height:1.65}.stats{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.stat{padding:10px 14px;border:1px solid #ffffff35;border-radius:999px;background:#ffffff12;font-size:13px;font-weight:800}
    main{max-width:1180px;margin:auto;padding:34px 24px 64px}.toolbar{position:sticky;top:0;z-index:5;display:grid;grid-template-columns:minmax(240px,1fr) auto;gap:14px;padding:14px 0;background:linear-gradient(var(--paper) 82%,transparent)}.search{width:100%;border:1px solid var(--line);border-radius:12px;padding:14px 16px;background:#fff;color:var(--ink);font:inherit;box-shadow:0 8px 24px #1730420b}.tabs{display:flex;gap:8px}.tab{border:1px solid var(--line);border-radius:12px;padding:11px 16px;background:#fff;color:var(--ink);font:inherit;font-weight:850;cursor:pointer}.tab[aria-selected="true"]{border-color:var(--green);background:var(--green);color:#fff}
    .semester-heading{display:flex;align-items:end;justify-content:space-between;gap:20px;margin:24px 0 18px}.semester-heading h2{margin:0;font-size:32px;letter-spacing:-.03em}.semester-heading>p{margin:0;color:var(--muted);font-size:14px;font-weight:700}.course-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.course-card{border:1px solid var(--line);border-radius:14px;background:var(--white);box-shadow:0 10px 30px #1730420a;overflow:hidden}.course-card summary{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:19px;cursor:pointer;list-style:none}.course-card summary::-webkit-details-marker{display:none}.course-card summary strong,.course-card summary small{display:block}.course-card summary strong{font-size:17px}.course-card summary small{margin-top:5px;color:var(--muted);font-size:12px}.chevron{font-size:22px;transition:transform .18s}.course-card[open] .chevron{transform:rotate(180deg)}.course-actions{padding:0 19px 15px}.course-actions a{display:inline-block;border-radius:8px;padding:9px 12px;background:#eaf4f1;color:var(--green-dark);font-size:12px;font-weight:900;text-decoration:none}.document-list{max-height:460px;overflow:auto;margin:0;padding:0 19px 14px;list-style:none}.document-list li{display:grid;grid-template-columns:52px 1fr;gap:12px;padding:12px 0;border-top:1px solid #eee8de}.file-type{align-self:start;border-radius:6px;padding:5px 4px;background:#f1ede5;color:var(--green-dark);font-size:10px;font-weight:950;text-align:center}.file-copy{min-width:0}.file-copy strong,.file-copy small{display:block;overflow-wrap:anywhere}.file-copy strong{font-size:13px;line-height:1.4}.file-copy small{margin-top:4px;color:var(--muted);font-size:10px;line-height:1.45}.empty{display:none;margin:28px 0;padding:24px;border:1px dashed var(--line);border-radius:14px;text-align:center;color:var(--muted)}footer{padding:28px 24px;background:#082f28;color:#cce2dc;text-align:center;font-size:12px}
    @media(max-width:760px){.topbar-inner{padding:12px 18px}.hero-inner{padding:48px 18px 42px}main{padding:24px 18px 50px}.toolbar{grid-template-columns:1fr}.tabs{display:grid;grid-template-columns:1fr 1fr}.course-grid{grid-template-columns:1fr}.semester-heading{align-items:start;flex-direction:column}.semester-heading h2{font-size:28px}}
  </style>
</head>
<body>
  <header class="topbar"><div class="topbar-inner"><a class="brand" href="index.html#kurikulum">S2 Statistika Terapan · Unpad</a><a class="back" href="index.html#kurikulum">← Kembali ke Kurikulum</a></div></header>
  <section class="hero"><div class="hero-inner"><p class="eyebrow">Kurikulum · Arsip pembelajaran</p><h1>Dokumen PBM 2024</h1><p class="hero-copy">Indeks lengkap dokumen perkuliahan angkatan 2024, disusun per semester dan mata kuliah. Buka mata kuliah untuk melihat seluruh isi atau unduh paketnya.</p><div class="stats"><span class="stat">${totalFiles} dokumen</span><span class="stat">${semesters.length} semester</span><span class="stat">${semesters.flatMap((s) => s.courses).length} mata kuliah</span><span class="stat">${formatSize(totalBytes)} total arsip</span></div></div></section>
  <main>
    <div class="toolbar"><label><span style="position:absolute;clip:rect(0 0 0 0)">Cari dokumen</span><input class="search" id="search" type="search" placeholder="Cari nama dokumen, mata kuliah, atau tipe file…" autocomplete="off"></label><div class="tabs" role="tablist">${semesters.map((semester, index) => `<button class="tab" role="tab" aria-selected="${index === 0}" data-tab="${slugify(semester.name)}">${escapeHtml(semester.name)}</button>`).join("")}</div></div>
    ${courseMarkup}
    <p class="empty" id="empty">Dokumen yang dicari tidak ditemukan pada semester ini.</p>
  </main>
  <footer>Program Studi Magister Statistika Terapan · FMIPA Universitas Padjadjaran</footer>
  <script>
    const tabs=[...document.querySelectorAll('[data-tab]')],panels=[...document.querySelectorAll('[data-semester-panel]')],search=document.querySelector('#search'),empty=document.querySelector('#empty');
    let active=tabs[0]?.dataset.tab;
    function select(id){active=id;tabs.forEach(t=>t.setAttribute('aria-selected',String(t.dataset.tab===id)));panels.forEach(p=>p.hidden=p.id!==id);filter()}
    function filter(){const q=search.value.trim().toLowerCase(),panel=document.getElementById(active);let found=0;if(!panel)return;panel.querySelectorAll('[data-course]').forEach(course=>{let count=0;course.querySelectorAll('[data-document]').forEach(doc=>{const hit=!q||doc.dataset.search.includes(q);doc.hidden=!hit;if(hit)count++});course.hidden=count===0;if(q&&count)course.open=true;found+=count});empty.style.display=found?'none':'block'}
    tabs.forEach(tab=>tab.addEventListener('click',()=>select(tab.dataset.tab)));search.addEventListener('input',filter);
  </script>
</body>
</html>`;

await writeFile(outputFile, html);
console.log(`Dibuat ${outputFile}: ${totalFiles} dokumen dalam ${semesters.length} semester.`);
