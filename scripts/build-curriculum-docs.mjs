import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputPath = path.join(rootDir, "data", "curriculum_docs.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");

const sourceFiles = [
  {
    period: "2020-2022",
    file: "Kurikulum 2020-2022.pdf",
    titleId: "Kurikulum 2020-2022",
    titleEn: "Curriculum 2020-2022",
    descriptionId: "Dokumen kurikulum periode 2020-2022 sebagai arsip akademik dan rujukan historis program studi.",
    descriptionEn: "Curriculum document for the 2020-2022 period, provided as an academic archive and historical program reference."
  },
  {
    period: "2023-2024",
    file: "Kurikulum 2023-2024.pdf",
    titleId: "Kurikulum 2023-2024",
    titleEn: "Curriculum 2023-2024",
    descriptionId: "Dokumen kurikulum periode 2023-2024 untuk melihat struktur akademik dan perkembangan kurikulum sebelum pembaruan berikutnya.",
    descriptionEn: "Curriculum document for the 2023-2024 period, useful for reviewing academic structure and curriculum development before later updates."
  },
  {
    period: "2025",
    file: "Kurikulum 2025.pdf",
    titleId: "Kurikulum 2025",
    titleEn: "Curriculum 2025",
    descriptionId: "Dokumen kurikulum 2025 sebagai transisi menuju penguatan kurikulum berbasis capaian pembelajaran.",
    descriptionEn: "The 2025 curriculum document, representing the transition toward stronger outcome-based curriculum design."
  },
  {
    period: "2025 Revisi",
    file: "Kurikulum 2026.pdf",
    htmlFile: "kurikulum_obe_2025_edisi_revisi_web/index.html",
    titleId: "Kurikulum OBE 2025 Edisi Revisi",
    titleEn: "2025 OBE Curriculum, Revised Edition",
    descriptionId: "Dokumen Kurikulum OBE 2025 Edisi Revisi yang menjadi rujukan utama struktur studi, mata kuliah, CPL, bahan kajian, RPL, dan skema penyelesaian.",
    descriptionEn: "The 2025 OBE Curriculum Revised Edition, the main reference for study structure, courses, learning outcomes, knowledge areas, RPL, and completion schemes."
  }
];

function encodeHref(filePath) {
  return filePath.split(path.sep).map(encodeURIComponent).join("/");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const documents = sourceFiles.map((item) => {
  const fullPath = path.join(rootDir, item.file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File kurikulum tidak ditemukan: ${fullPath}`);
  }
  const stat = fs.statSync(fullPath);
  const href = encodeHref(path.relative(rootDir, fullPath));
  const document = {
    id: `kurikulum-${slugify(item.period)}`,
    period: item.period,
    title: item.titleId,
    titleId: item.titleId,
    titleEn: item.titleEn,
    description: item.descriptionId,
    descriptionId: item.descriptionId,
    descriptionEn: item.descriptionEn,
    file: item.file,
    href,
    sizeKb: Math.round(stat.size / 1024),
    source: "Dokumen Kurikulum"
  };
  if (item.htmlFile) {
    const htmlPath = path.join(rootDir, item.htmlFile);
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`File HTML kurikulum tidak ditemukan: ${htmlPath}`);
    }
    document.htmlHref = encodeHref(path.relative(rootDir, htmlPath));
  }
  return document;
});

const manifest = {
  source: "Dokumen Kurikulum",
  generatedAt: new Date().toISOString(),
  total: documents.length,
  documents
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("curriculum-doc-"));
  const curriculumChunks = documents.map((doc) => ({
    id: `curriculum-doc-${doc.id}`,
    title: doc.title,
    sourceTitle: doc.title,
    sourceUrl: doc.href,
    text: `${doc.title} atau ${doc.titleEn} tersedia sebagai dokumen PDF${doc.htmlHref ? " dan versi web HTML" : ""}. Periode: ${doc.period}. Link PDF: ${doc.href}.${doc.htmlHref ? ` Link web: ${doc.htmlHref}.` : ""} File: ${doc.file}. Ukuran: ${doc.sizeKb} KB. ${doc.descriptionId} ${doc.descriptionEn}`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...curriculumChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${documents.length} dokumen kurikulum.`);
