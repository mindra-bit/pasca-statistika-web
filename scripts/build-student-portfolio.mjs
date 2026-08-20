import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const sourceDir = process.argv[2];
const registryPath = process.argv[3];
const targetDir = process.argv[4] || "portofolio-mahasiswa";
if (!sourceDir || !registryPath) throw new Error("Usage: node scripts/build-student-portfolio.mjs SOURCE_DIR REGISTRY_CSV [TARGET_DIR]");

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
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

const normalizeName = (value) => value.normalize("NFKC").trim().replace(/\s+/g, " ").toLocaleLowerCase("id-ID");
const registry = parseCsv(fs.readFileSync(registryPath, "utf8"));
const byNpm = new Map(registry.map((row) => [row.npm, row]));
const cohorts = ["Angkatan_2022", "Angkatan_2023", "Angkatan_2024", "Angkatan_2025"];
const manifest = { version: 1, iterations: 250000, records: [] };

for (const cohortDir of cohorts) {
  const absolute = path.join(sourceDir, cohortDir);
  const pdfs = fs.readdirSync(absolute).filter((name) => /^Portofolio_(\d+)_.*\.pdf$/i.test(name)).sort();
  const outputDir = path.join(targetDir, cohortDir);
  fs.mkdirSync(outputDir, { recursive: true });
  for (const filename of pdfs) {
    const npm = filename.match(/^Portofolio_(\d+)_/i)[1];
    const registryRow = byNpm.get(npm);
    if (!registryRow) throw new Error(`NPM ${npm} from ${filename} is missing in registry.`);
    const salt = crypto.randomBytes(16);
    const iv = crypto.randomBytes(12);
    const password = `${npm}|${normalizeName(registryRow.name)}`;
    const key = crypto.pbkdf2Sync(password, salt, manifest.iterations, 32, "sha256");
    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
    const encrypted = Buffer.concat([cipher.update(fs.readFileSync(path.join(absolute, filename))), cipher.final()]);
    const tag = cipher.getAuthTag();
    const npmHash = crypto.createHash("sha256").update(npm).digest("hex");
    const outputName = `${npmHash.slice(0, 24)}.portfolio`;
    fs.writeFileSync(path.join(outputDir, outputName), Buffer.concat([encrypted, tag]));
    manifest.records.push({
      npmHash,
      cohort: Number(registryRow.cohort),
      file: `${cohortDir}/${outputName}`,
      salt: salt.toString("base64"),
      iv: iv.toString("base64"),
      size: fs.statSync(path.join(absolute, filename)).size
    });
  }
}

if (manifest.records.length !== registry.length) throw new Error(`PDF count ${manifest.records.length} differs from registry count ${registry.length}.`);
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
fs.copyFileSync(path.join(sourceDir, "Modul_Perhitungan_Portofolio_CPL_S2_Statistika_Terapan_UNPAD.html"), path.join(targetDir, "Modul_Perhitungan_Portofolio_CPL_S2_Statistika_Terapan_UNPAD.html"));
console.log(`Encrypted ${manifest.records.length} PDFs into ${targetDir}.`);
