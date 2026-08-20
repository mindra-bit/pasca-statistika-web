import fs from "node:fs";

const registryPath = process.argv[2];
const verificationHtml = process.argv[3] || "verifikasi-portofolio/index.html";
const manifestPath = process.argv[4] || "portofolio-mahasiswa/manifest.json";
if (!registryPath) throw new Error("Usage: node scripts/validate-portfolio-data.mjs REGISTRY [HTML] [MANIFEST]");

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

const registry = parseCsv(fs.readFileSync(registryPath, "utf8"));
const html = fs.readFileSync(verificationHtml, "utf8");
const embeddedMatch = html.match(/const records = (\[.*?\]);\s*const signature/s);
if (!embeddedMatch) throw new Error("Embedded verification records not found.");
const embedded = JSON.parse(embeddedMatch[1]);
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const required = ["cert","npm","name","cohort","curriculum","graduation_year","validation_date","data_status","outcomes"];
const assert = (condition, message) => { if (!condition) throw new Error(message); };

assert(registry.length === embedded.length, `Registry ${registry.length} != embedded ${embedded.length}`);
assert(registry.length === manifest.records.length, `Registry ${registry.length} != manifest ${manifest.records.length}`);
assert(new Set(registry.map((row) => row.cert)).size === registry.length, "Duplicate certificate found.");
assert(new Set(registry.map((row) => row.npm)).size === registry.length, "Duplicate NPM found.");
for (const row of registry) for (const field of required) assert(String(row[field] || "").trim(), `Empty ${field} for ${row.cert || "unknown record"}`);

const embeddedByCert = new Map(embedded.map((row) => [row.cert, row]));
for (const row of registry) {
  const match = embeddedByCert.get(row.cert);
  assert(match, `Certificate missing from HTML: ${row.cert}`);
  for (const field of required) assert(String(match[field]) === String(row[field]), `Mismatch ${field} for ${row.cert}`);
  assert(String(match.note || "") === String(row.note || ""), `Mismatch note for ${row.cert}`);
}
assert([2022,2023,2024,2025].every((cohort) => registry.some((row) => Number(row.cohort) === cohort)), "A required cohort is missing.");

const syahla = embeddedByCert.get("001/S2-Statistika-FMIPA-UNPAD/2026");
const nabila = embeddedByCert.get("001/S2-Statistika-FMIPA-UNPAD/2024");
assert(syahla?.name === "Syahla Anisah" && syahla.npm === "140720240001" && Number(syahla.cohort) === 2024, "Syahla test failed.");
assert(nabila?.name === "Nabila Dhia Alifa Rahmah" && nabila.npm === "140720220001" && Number(nabila.cohort) === 2022, "Nabila test failed.");
assert(html.includes('const cert = (params.get("cert") || "").trim();'), "Required cert parsing logic missing.");
assert(html.includes("Certificate not found or not registered."), "Invalid-certificate message missing.");
assert(html.includes("certificateSearchForm"), "Search form missing.");

console.log(JSON.stringify({
  status: "PASS",
  records: registry.length,
  uniqueCertificates: new Set(registry.map((row) => row.cert)).size,
  uniqueNpm: new Set(registry.map((row) => row.npm)).size,
  cohorts: Object.fromEntries([2022,2023,2024,2025].map((cohort) => [cohort, registry.filter((row) => Number(row.cohort) === cohort).length])),
  syahla: {name: syahla.name, npm: syahla.npm, cohort: syahla.cohort},
  nabila: {name: nabila.name, npm: nabila.npm, cohort: nabila.cohort}
}, null, 2));
