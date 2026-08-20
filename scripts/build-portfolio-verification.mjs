import fs from "node:fs";
import path from "node:path";

const sourceHtml = process.argv[2];
const registryPath = process.argv[3];
const targetDir = process.argv[4] || "verifikasi-portofolio";
if (!sourceHtml || !registryPath) throw new Error("Usage: node scripts/build-portfolio-verification.mjs SOURCE_HTML REGISTRY_CSV [TARGET_DIR]");

function parseCsv(text) {
  const rows = []; let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { field += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(field); field = ""; }
    else if (char === '\n') { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += char;
  }
  if (field || row.length) { row.push(field.replace(/\r$/, "")); rows.push(row); }
  const headers = rows.shift();
  return rows.filter((item) => item.some(Boolean)).map((item) => Object.fromEntries(headers.map((header, index) => [header, item[index] || ""])));
}

const source = fs.readFileSync(sourceHtml, "utf8");
const recordsMatch = source.match(/const records=(\[.*?\]);\s*const signature=/s);
const signatureMatch = source.match(/const signature="(data:image\/png;base64,[^"]+)";/s);
const logoMatch = source.match(/<img class="logo" src="(data:image\/png;base64,[^"]+)"/s);
if (!recordsMatch || !signatureMatch || !logoMatch) throw new Error("Embedded records, signature, or logo not found.");

const baseRecords = JSON.parse(recordsMatch[1]);
const registry = parseCsv(fs.readFileSync(registryPath, "utf8"));
if (baseRecords.length !== registry.length) throw new Error(`HTML records ${baseRecords.length} differ from registry ${registry.length}.`);
const baseByCert = new Map(baseRecords.map((record) => [record.cert, record]));
const compareFields = ["cert","npm","name","cohort","curriculum","graduation_year","validation_date","data_status","outcomes"];
for (const row of registry) {
  const base = baseByCert.get(row.cert);
  if (!base) throw new Error(`Certificate ${row.cert} is missing from source HTML.`);
  for (const field of compareFields) if (String(base[field]) !== String(row[field])) throw new Error(`Mismatch ${field} for ${row.cert}.`);
}
const records = registry.map((row) => ({...baseByCert.get(row.cert), note: row.note || ""}));
fs.mkdirSync(targetDir, { recursive: true });
const html = `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#123e56">
  <title>Verifikasi Portofolio | S2 Statistika Terapan FMIPA UNPAD</title>
  <style>
    :root{--navy:#123e56;--gold:#d29f14;--ink:#233f50;--muted:#6e8390;--line:#dce5e9;--ok:#18794e;--bad:#a33}
    *{box-sizing:border-box}body{margin:0;background:#f5f8fa;color:var(--ink);font-family:Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif;line-height:1.5}
    .top{height:6px;background:var(--navy);border-left:22vw solid var(--gold)}.wrap{max-width:740px;margin:36px auto;padding:0 16px 50px}
    .card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 12px 35px rgba(18,62,86,.08);overflow:hidden}
    .head{padding:24px 28px 20px;display:flex;gap:16px;align-items:center;border-bottom:1px solid var(--line)}.logo{width:62px;height:62px;object-fit:contain;flex:0 0 auto}
    h1{margin:0;color:var(--navy);font-size:1.35rem;line-height:1.2}.sub{color:var(--muted);font-size:.9rem;margin-top:4px}.body{padding:26px 28px 30px}
    .status{display:inline-block;padding:6px 11px;border-radius:999px;background:#eaf7ef;color:var(--ok);font-weight:800;font-size:.83rem;margin-bottom:15px}
    .cert{font-weight:900;color:var(--navy);font-size:1.04rem;margin-bottom:20px;padding-bottom:16px;border-bottom:2px solid #f1d67d;overflow-wrap:anywhere}
    .grid{display:grid;grid-template-columns:175px 1fr;border-top:1px solid var(--line)}.k,.v{padding:9px 6px;border-bottom:1px solid var(--line);font-size:.92rem}.k{font-weight:700;color:var(--muted)}
    .validation{text-align:center;margin-top:26px;padding-top:22px;border-top:1px solid var(--line)}.validation h2{font-size:1rem;color:var(--navy);margin:0 0 6px}.role{font-size:.88rem;color:var(--muted)}
    .sig{display:block;width:150px;max-height:105px;object-fit:contain;margin:14px auto 7px}.nip{font-size:.86rem;color:var(--muted)}.note{margin-top:20px;background:#f6f9fa;border-radius:10px;padding:11px 13px;color:var(--muted);font-size:.83rem}
    .search{max-width:560px;margin:0 auto}.search h2{margin:0 0 8px;color:var(--navy);font-size:1.1rem}.search p{color:var(--muted);font-size:.92rem}.search label{display:block;font-weight:700;margin:18px 0 7px}
    .search-row{display:flex;gap:10px}.search input{min-width:0;flex:1;border:1px solid #aebdc5;border-radius:8px;padding:12px;font:inherit}.search button{border:0;border-radius:8px;background:var(--navy);color:#fff;font-weight:800;padding:12px 18px;cursor:pointer}.example{font-size:.82rem;color:var(--muted);overflow-wrap:anywhere}
    .invalid{color:var(--bad);background:#fff2f2;border:1px solid #f0cccc;padding:14px;border-radius:10px;font-weight:700;margin-bottom:20px}
    @media(max-width:560px){.wrap{margin-top:18px}.head{padding:20px}.body{padding:22px 20px}.grid{grid-template-columns:1fr}.k{padding-bottom:2px;border-bottom:0}.v{padding-top:2px}.search-row{flex-direction:column}.search button{width:100%}}
  </style>
</head>
<body>
  <div class="top"></div>
  <main class="wrap">
    <section class="card">
      <header class="head">
        <img class="logo" src="${logoMatch[1]}" alt="Logo Universitas Padjadjaran">
        <div><h1>Verifikasi Portofolio Akademik</h1><div class="sub">S2 Statistika Terapan · FMIPA Universitas Padjadjaran</div></div>
      </header>
      <div class="body" id="verificationBody"></div>
    </section>
  </main>
  <script>
    const records = ${JSON.stringify(records)};
    const signature = ${JSON.stringify(signatureMatch[1])};
    const params = new URLSearchParams(window.location.search);
    const cert = (params.get("cert") || "").trim();
    const record = records.find((item) => item.cert === cert);
    const body = document.getElementById("verificationBody");
    const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
    const searchForm = (message = "") => \`
      \${message ? \`<div class="invalid" role="alert">\${escapeHtml(message)}</div>\` : ""}
      <form class="search" id="certificateSearchForm">
        <h2>VERIFIKASI PORTOFOLIO AKADEMIK</h2>
        <p>Masukkan Nomor Sertifikat:</p>
        <label for="certificateInput">Nomor Sertifikat</label>
        <div class="search-row">
          <input id="certificateInput" name="certificate" autocomplete="off" required aria-describedby="certificateExample">
          <button type="submit">VERIFIKASI</button>
        </div>
        <p class="example" id="certificateExample">Contoh: 001/S2-Statistika-FMIPA-UNPAD/2026</p>
      </form>\`;
    if (!cert) {
      body.innerHTML = searchForm();
    } else if (!record) {
      body.innerHTML = searchForm("Sertifikat tidak ditemukan atau belum terdaftar / Certificate not found or not registered.");
    } else {
      body.innerHTML = \`
        <div class="status">✓ VALID / TERVERIFIKASI</div>
        <div class="cert">Nomor / No.: \${escapeHtml(record.cert)}</div>
        <div class="grid">
          <div class="k">Nama / Name</div><div class="v">\${escapeHtml(record.name)}</div>
          <div class="k">NPM</div><div class="v">\${escapeHtml(record.npm)}</div>
          <div class="k">Angkatan / Cohort</div><div class="v">\${escapeHtml(record.cohort)}</div>
          <div class="k">Kurikulum / Curriculum</div><div class="v">\${escapeHtml(record.curriculum)}</div>
          <div class="k">Tahun Lulus / Graduation Year</div><div class="v">\${escapeHtml(record.graduation_year)}</div>
          <div class="k">Tanggal Validasi / Validation Date</div><div class="v">\${escapeHtml(record.validation_date)}</div>
          <div class="k">Status Data Akademik</div><div class="v">\${escapeHtml(record.data_status)}</div>
          <div class="k">Outcome Tersedia</div><div class="v">\${escapeHtml(record.outcomes)}</div>
          <div class="k">Catatan Validasi</div><div class="v">\${escapeHtml(record.note || "-")}</div>
        </div>
        <div class="validation">
          <h2>Digitally validated by / Divalidasi secara digital oleh</h2>
          <img class="sig" src="\${signature}" alt="Tanda tangan digital validator">
          <strong>Prof. I Gede Nyoman Mindra Jaya, Ph.D</strong>
          <div class="role">Ketua Program Studi Magister Statistika Terapan<br>FMIPA Universitas Padjadjaran</div>
          <div class="nip">NIP. 198006032003121002</div>
        </div>
        <div class="note">Dokumen ini tercatat dalam sistem verifikasi Portofolio Akademik Program Studi Magister Statistika Terapan FMIPA Universitas Padjadjaran.</div>\`;
    }
    document.getElementById("certificateSearchForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = document.getElementById("certificateInput").value.trim();
      if (value) window.location.href = "./?cert=" + encodeURIComponent(value);
    });
    document.getElementById("certificateInput")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("certificateSearchForm").requestSubmit();
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, "index.html"), html);
console.log(`Created ${path.join(targetDir, "index.html")} with ${records.length} records.`);
