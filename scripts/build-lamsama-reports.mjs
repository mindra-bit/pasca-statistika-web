import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "@Laporan Tahunan Lamsama");
const outputPath = path.join(rootDir, "data", "lamsama_reports.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");
const pageCounts = new Map([[2023, 13], [2024, 13], [2025, 15]]);

function encodeHref(filePath) {
  return filePath.split(path.sep).map(encodeURIComponent).join("/");
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Folder laporan LAMSAMA tidak ditemukan: ${sourceDir}`);
}

const reports = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /^Tahun \d{4}\.pdf$/i.test(entry.name))
  .map((entry) => {
    const year = Number(entry.name.match(/\d{4}/)?.[0]);
    const sequence = Math.max(1, year - 2022);
    const fullPath = path.join(sourceDir, entry.name);
    const stat = fs.statSync(fullPath);
    return {
      id: `lamsama-${year}`,
      year,
      sequence,
      title: `Laporan Tahunan Akreditasi LAMSAMA ${year}`,
      titleId: `Laporan Tahunan Akreditasi LAMSAMA ${year}`,
      titleEn: `LAMSAMA Annual Accreditation Report ${year}`,
      descriptionId: `Laporan tahun ke-${sequence} pemantauan mutu dan tindak lanjut akreditasi Program S2 Statistika Terapan FMIPA Universitas Padjadjaran.`,
      descriptionEn: `Year ${sequence} quality monitoring and accreditation follow-up report for the Applied Statistics Master's Program, FMIPA Universitas Padjadjaran.`,
      file: entry.name,
      href: encodeHref(path.relative(rootDir, fullPath)),
      format: "PDF",
      pages: pageCounts.get(year) || null,
      sizeKb: Math.round(stat.size / 1024)
    };
  })
  .sort((a, b) => b.year - a.year);

const manifest = {
  source: "LAMSAMA",
  organization: "Lembaga Akreditasi Mandiri Sains Alam dan Ilmu Formal",
  assessmentDate: "25-26 November 2022",
  generatedAt: new Date().toISOString(),
  total: reports.length,
  years: reports.map((report) => report.year).sort((a, b) => a - b),
  reports
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("lamsama-report-"));
  const reportChunks = reports.map((report) => ({
    id: `lamsama-report-${report.year}`,
    title: report.titleId,
    sourceTitle: report.titleId,
    sourceUrl: report.href,
    text: `${report.titleId}. Tahun ke-${report.sequence} setelah menerima sertifikat akreditasi. Program S2 Statistika Terapan FMIPA Universitas Padjadjaran. Tanggal asesmen lapangan: ${manifest.assessmentDate}. ${report.descriptionId} Dokumen PDF ${report.pages || ""} halaman, ukuran ${report.sizeKb} KB. Link: ${report.href}`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...reportChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${reports.length} laporan tahunan LAMSAMA.`);
