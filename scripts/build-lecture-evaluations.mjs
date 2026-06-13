import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDirName = "@Evaluasi Pelksanaan Perkuliahan";
const sourceDir = path.join(rootDir, sourceDirName);
const outputPath = path.join(rootDir, "data", "lecture_evaluations.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");
const monitoringUrl = "https://bit.ly/EvaluasiGanjilMStat";

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

function semesterEn(semester) {
  return /^ganjil$/i.test(semester) ? "Odd" : "Even";
}

function normalizeAcademicYear(start, end) {
  return `${start}/${end}`;
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Folder Evaluasi Pelaksanaan Perkuliahan tidak ditemukan: ${sourceDir}`);
}

const documents = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
  .map((entry) => {
    const match = entry.name.match(/semester\s+(ganjil|genap)\s+(\d{4})[-:](\d{4})\.html$/i);
    if (!match) return null;

    const semester = match[1][0].toUpperCase() + match[1].slice(1).toLowerCase();
    const academicYear = normalizeAcademicYear(match[2], match[3]);
    const period = `${semester} ${academicYear}`;
    const fullPath = path.join(sourceDir, entry.name);
    const stat = fs.statSync(fullPath);
    const relativePath = path.relative(rootDir, fullPath);
    const href = encodeHref(relativePath);
    const id = `evaluasi-perkuliahan-${slugify(period)}`;

    return {
      id,
      period,
      semester,
      semesterEn: semesterEn(semester),
      academicYear,
      title: `Evaluasi Pelaksanaan Perkuliahan Semester ${period}`,
      titleId: `Evaluasi Pelaksanaan Perkuliahan Semester ${period}`,
      titleEn: `Course Delivery Evaluation ${semesterEn(semester)} Semester ${academicYear}`,
      description: `Laporan evaluasi pelaksanaan perkuliahan per sesi/pertemuan untuk memantau proses perkuliahan sesi 1 sampai 16 pada semester ${period}.`,
      descriptionId: `Laporan evaluasi pelaksanaan perkuliahan per sesi/pertemuan untuk memantau proses perkuliahan sesi 1 sampai 16 pada semester ${period}.`,
      descriptionEn: `Course delivery evaluation report for session-by-session monitoring from session 1 to 16 in the ${semesterEn(semester).toLowerCase()} semester ${academicYear}.`,
      file: entry.name,
      href,
      sizeKb: Math.round(stat.size / 1024),
      format: "HTML",
      sessions: "1-16",
      monitoringUrl,
      source: sourceDirName
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    const yearDiff = Number(a.academicYear.slice(0, 4)) - Number(b.academicYear.slice(0, 4));
    if (yearDiff !== 0) return yearDiff;
    return a.semester === "Ganjil" ? -1 : 1;
  });

const manifest = {
  source: sourceDirName,
  generatedAt: new Date().toISOString(),
  monitoringUrl,
  total: documents.length,
  documents
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("lecture-evaluation-"));
  const evaluationChunks = documents.map((doc) => ({
    id: `lecture-evaluation-${doc.id}`,
    title: doc.title,
    sourceTitle: doc.title,
    sourceUrl: doc.href,
    text: `${doc.title} atau ${doc.titleEn} tersedia sebagai laporan HTML Evaluasi Pelaksanaan Perkuliahan. Ini berbeda dengan Evaluasi PBM akhir semester. Evaluasi Pelaksanaan Perkuliahan dipakai untuk monitoring perkuliahan per sesi atau pertemuan, sesi ${doc.sessions}, semester ${doc.semester}, tahun akademik ${doc.academicYear}. Link laporan HTML: ${doc.href}. Link monitoring mahasiswa: ${doc.monitoringUrl}. ${doc.descriptionId} ${doc.descriptionEn}`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...evaluationChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${documents.length} laporan Evaluasi Pelaksanaan Perkuliahan.`);
