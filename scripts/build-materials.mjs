import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const materialsDirName = "@Materi Kuliah";
const materialsDir = path.join(rootDir, materialsDirName);
const outputPath = path.join(rootDir, "data", "materials.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");

function normalizeText(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function titleCase(value) {
  return String(value || "")
    .replace(/^Materi_?/i, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bDan\b/g, "dan")
    .replace(/\bD\b/g, "d")
    .trim();
}

function slugify(value) {
  return normalizeText(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return fullPath;
  });
}

function encodeRelativeHref(filePath) {
  return path.relative(rootDir, filePath).split(path.sep).map(encodeURIComponent).join("/");
}

function findCompanionFile(folderPath, extension, preferredPattern, label) {
  const candidates = fs.readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && !entry.name.startsWith("~$") && entry.name.toLowerCase().endsWith(extension))
    .map((entry) => path.join(folderPath, entry.name))
    .sort((a, b) => {
      const aPreferred = preferredPattern.test(path.basename(a)) ? 1 : 0;
      const bPreferred = preferredPattern.test(path.basename(b)) ? 1 : 0;
      return bPreferred - aPreferred || a.localeCompare(b, "id");
    });

  if (!candidates.length) {
    throw new Error(`${label} tidak ditemukan di folder ${path.basename(folderPath)}`);
  }

  return candidates[0];
}

function extractTitle(html, fallback) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const raw = titleMatch?.[1] || h1Match?.[1] || h2Match?.[1] || fallback;
  return normalizeText(raw)
    .replace(/\s*[-|]\s*S2\s+Statistika\s+Terapan.*$/i, "")
    .replace(/\s*\|\s*Universitas.*$/i, "")
    .trim();
}

if (!fs.existsSync(materialsDir)) {
  throw new Error(`Folder materi tidak ditemukan: ${materialsDir}`);
}

const htmlFiles = walk(materialsDir)
  .filter((file) => file.toLowerCase().endsWith(".html"))
  .sort((a, b) => a.localeCompare(b, "id"));

const materials = htmlFiles.map((filePath, index) => {
  const relativePath = path.relative(rootDir, filePath);
  const folderPath = path.dirname(filePath);
  const folder = path.basename(folderPath);
  const html = fs.readFileSync(filePath, "utf8");
  const fallbackTitle = titleCase(folder);
  const title = extractTitle(html, fallbackTitle);
  const stat = fs.statSync(filePath);
  const summaryPath = findCompanionFile(
    folderPath,
    ".pptx",
    /_Profesional_dari_HTML\.pptx$/i,
    "Presentasi ringkasan"
  );
  const contractPath = findCompanionFile(
    folderPath,
    ".docx",
    /^Kontrak_Perkuliahan_.*\.docx$/i,
    "Kontrak perkuliahan"
  );
  const summaryStat = fs.statSync(summaryPath);
  const contractStat = fs.statSync(contractPath);

  const href = encodeRelativeHref(filePath);
  const viewerHref = `materi.html?src=${encodeURIComponent(href)}&title=${encodeURIComponent(title || fallbackTitle)}`;

  return {
    id: `materi-${String(index + 1).padStart(2, "0")}-${slugify(title || folder)}`,
    title: title || fallbackTitle,
    folder,
    category: titleCase(folder),
    file: path.basename(filePath),
    href,
    viewerHref,
    sizeKb: Math.round(stat.size / 1024),
    summaryFile: path.basename(summaryPath),
    summaryHref: encodeRelativeHref(summaryPath),
    summarySizeKb: Math.round(summaryStat.size / 1024),
    contractFile: path.basename(contractPath),
    contractHref: encodeRelativeHref(contractPath),
    contractSizeKb: Math.round(contractStat.size / 1024),
    source: materialsDirName
  };
});

const categories = [...new Set(materials.map((item) => item.category))].sort((a, b) => a.localeCompare(b, "id"));
const manifest = {
  source: materialsDirName,
  generatedAt: new Date().toISOString(),
  total: materials.length,
  categories,
  materials
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("material-"));
  const materialChunks = materials.map((material) => ({
    id: `material-${material.id}`,
    title: material.title,
    sourceTitle: `Materi HTML ${material.title}`,
    sourceUrl: material.viewerHref,
    text: `Materi ${material.title} tersedia pada folder ${material.folder}. Link materi HTML: ${material.viewerHref}. Link file HTML asli: ${material.href}. Link ringkasan PPTX: ${material.summaryHref}. Link kontrak perkuliahan DOCX: ${material.contractHref}. Kategori: ${material.category}. File HTML: ${material.file} (${material.sizeKb} KB). File ringkasan: ${material.summaryFile} (${material.summarySizeKb} KB). File kontrak: ${material.contractFile} (${material.contractSizeKb} KB).`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...materialChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${materials.length} materi HTML.`);
