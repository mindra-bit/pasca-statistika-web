import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDirName = "@Evaluasi PBM";
const sourceDir = path.join(rootDir, sourceDirName);
const outputPath = path.join(rootDir, "data", "pbm_evaluations.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");

function encodeHref(filePath) {
  return filePath.split(path.sep).map(encodeURIComponent).join("/");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function semesterOrder(semester) {
  return /^ganjil$/i.test(semester) ? 1 : 2;
}

function semesterEn(semester) {
  return /^ganjil$/i.test(semester) ? "Odd" : "Even";
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Folder Evaluasi PBM tidak ditemukan: ${sourceDir}`);
}

const documents = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".pdf"))
  .map((entry) => {
    const match = entry.name.match(/^(Ganjil|Genap)\s+(\d{4}):(\d{4})\.pdf$/i);
    if (!match) return null;

    const semester = match[1][0].toUpperCase() + match[1].slice(1).toLowerCase();
    const academicYear = `${match[2]}/${match[3]}`;
    const period = `${semester} ${academicYear}`;
    const fullPath = path.join(sourceDir, entry.name);
    const stat = fs.statSync(fullPath);
    const relativePath = path.relative(rootDir, fullPath);
    const href = encodeHref(relativePath);

    return {
      id: `evaluasi-pbm-${slugify(period)}`,
      period,
      semester,
      semesterEn: semesterEn(semester),
      academicYear,
      title: `Evaluasi PBM Semester ${period}`,
      titleId: `Evaluasi PBM Semester ${period}`,
      titleEn: `Learning Evaluation ${semesterEn(semester)} Semester ${academicYear}`,
      description: `Dokumen evaluasi pembelajaran semester ${period} sebagai arsip mutu akademik dan bahan pemantauan proses belajar mengajar.`,
      descriptionId: `Dokumen evaluasi pembelajaran semester ${period} sebagai arsip mutu akademik dan bahan pemantauan proses belajar mengajar.`,
      descriptionEn: `Learning evaluation document for the ${semesterEn(semester).toLowerCase()} semester ${academicYear}, provided as an academic quality archive and teaching-learning monitoring reference.`,
      file: entry.name,
      href,
      sizeKb: Math.round(stat.size / 1024),
      source: sourceDirName
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    const yearDiff = Number(a.academicYear.slice(0, 4)) - Number(b.academicYear.slice(0, 4));
    if (yearDiff !== 0) return yearDiff;
    return semesterOrder(a.semester) - semesterOrder(b.semester);
  });

const manifest = {
  source: sourceDirName,
  generatedAt: new Date().toISOString(),
  total: documents.length,
  documents
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("pbm-evaluation-"));
  const evaluationChunks = documents.map((doc) => ({
    id: `pbm-evaluation-${doc.id}`,
    title: doc.title,
    sourceTitle: doc.title,
    sourceUrl: doc.href,
    text: `${doc.title} atau ${doc.titleEn} tersedia sebagai dokumen PDF Evaluasi PBM. Semester: ${doc.semester}. Tahun akademik: ${doc.academicYear}. Periode: ${doc.period}. Link: ${doc.href}. File: ${doc.file}. Ukuran: ${doc.sizeKb} KB. ${doc.descriptionId} ${doc.descriptionEn}`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...evaluationChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${documents.length} dokumen Evaluasi PBM.`);
