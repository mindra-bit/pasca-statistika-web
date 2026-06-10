import { execFileSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const pdfFileName = "KURIKULUM S2 STATISTIKA 2026.pdf";
const pdfPath = path.join(rootDir, pdfFileName);
const tempTextPath = path.join(os.tmpdir(), "s2-statistika-kurikulum-2026.txt");
const syllabusPath = path.join(rootDir, "data", "syllabus.json");
const alumniPath = path.join(rootDir, "data", "alumni.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");

const courseMeta = new Map([
  [1, { credits: 3, group: "Wajib" }],
  [2, { credits: 3, group: "Wajib" }],
  [3, { credits: 3, group: "Wajib" }],
  [4, { credits: 3, group: "Wajib" }],
  [5, { credits: 3, group: "Wajib" }],
  [6, { credits: 3, group: "Wajib" }],
  [7, { credits: 6, group: "Keterampilan Riset" }],
  [8, { credits: 3, group: "Keterampilan Riset" }],
  [9, { credits: 3, group: "Pilihan" }],
  [10, { credits: 3, group: "Wajib" }],
  [11, { credits: 3, group: "Pilihan" }],
  [12, { credits: 3, group: "Pilihan" }],
  [13, { credits: 3, group: "Pilihan" }],
  [14, { credits: 3, group: "Pilihan" }],
  [15, { credits: 3, group: "Pilihan" }],
  [16, { credits: 3, group: "Pilihan" }],
  [17, { credits: 3, group: "Pilihan" }],
  [18, { credits: 3, group: "Pilihan" }],
  [19, { credits: 3, group: "Pilihan" }],
  [20, { credits: 3, group: "Pilihan" }],
  [21, { credits: 3, group: "Pilihan" }],
  [22, { credits: 3, group: "Pilihan" }],
  [23, { credits: 3, group: "Pilihan" }],
  [24, { credits: 3, group: "Pilihan" }],
  [25, { credits: 3, group: "Pilihan" }],
  [26, { credits: 3, group: "Pilihan" }],
  [27, { credits: 3, group: "Pilihan" }],
  [28, { credits: 3, group: "Keterampilan Riset" }],
  [29, { credits: 2, group: "Riset" }],
  [30, { credits: 2, group: "Riset" }],
  [31, { credits: 4, group: "Riset" }],
  [32, { credits: 9, group: "Publikasi" }],
  [33, { credits: 6, group: "Riset" }]
]);

const manualChunks = [
  {
    id: "manual-2026-sks",
    page: 6,
    sourceTitle: "Kurikulum OBE 2026 - Struktur SKS",
    text: "Kurikulum OBE 2026 Program Magister Statistika Terapan menetapkan beban belajar 42 SKS. Jalur berbasis kuliah terdiri atas 21 SKS mata kuliah wajib, 9 SKS mata kuliah pilihan, dan 12 SKS tesis: Seminar Usulan Riset 2 SKS, Seminar Kemajuan Riset 4 SKS, dan Sidang Akhir Magister 6 SKS."
  },
  {
    id: "manual-2026-by-research",
    page: 6,
    sourceTitle: "Kurikulum OBE 2026 - Jalur Berbasis Riset",
    text: "Jalur Magister by Research pada Kurikulum OBE 2026 menempuh 42 SKS yang terdiri atas 12 SKS mata kuliah wajib, 9 SKS mata kuliah keterampilan, 9 SKS publikasi, dan 12 SKS tesis. Jalur ini menekankan penelitian inovatif, publikasi ilmiah, dan dampak riset."
  },
  {
    id: "manual-2026-rpl",
    page: 23,
    sourceTitle: "Kurikulum OBE 2026 - RPL",
    text: "Kurikulum OBE 2026 memuat jalur Rekognisi Pembelajaran Lampau (RPL). Calon mahasiswa melalui jalur RPL dapat mengajukan rekognisi atas capaian pembelajaran dari pendidikan formal sebelumnya, pembelajaran nonformal dan informal, atau pengalaman kerja untuk mata kuliah yang diberi tanda Ya pada tabel RPL."
  },
  {
    id: "manual-2026-visi",
    page: 2,
    sourceTitle: "Kurikulum OBE 2026 - Visi",
    text: "Visi Program Studi Magister Statistika Terapan adalah menjadi pusat pendidikan Magister Statistika yang unggul dalam pendidikan dan riset, diakui secara internasional, serta memberikan dampak nyata bagi masyarakat, khususnya dalam bidang statistika bisnis dan industri, statistika sosial, aktuaria, biostatistika, dan sains data."
  },
  {
    id: "manual-2026-profil-lulusan",
    page: 6,
    sourceTitle: "Kurikulum OBE 2026 - Profil Lulusan",
    text: "Profil lulusan S2 Statistika Terapan dikelompokkan ke dalam pengajar atau staf universitas atau peneliti, perekayasa atau profesional di industri dan perusahaan, serta lulusan yang melanjutkan studi doktoral. Lulusan diharapkan berperan sebagai akademisi, peneliti, konsultan, dan praktisi."
  },
  {
    id: "manual-2026-cpl",
    page: 8,
    sourceTitle: "Kurikulum OBE 2026 - CPL",
    text: "CPL Kurikulum OBE 2026 mencakup penguasaan dan pengembangan konsep statistika, perancangan metode pengumpulan data, pengelolaan dan analisis data nyata, pengembangan algoritma komputasi, pengelolaan riset secara logis dan inovatif, pengembangan jejaring kerja sama, serta sikap etis, integritas, kepedulian sosial-lingkungan, dan kepemimpinan."
  },
  {
    id: "manual-2026-bahan-kajian",
    page: 12,
    sourceTitle: "Kurikulum OBE 2026 - Bahan Kajian",
    text: "Bahan kajian Kurikulum OBE 2026 meliputi BK1 Statistika Teoritis dan Parametrik, BK2 Statistika Komputasi dan Nonparametrik, BK3 Statistika Terapan Bisnis dan Industri, BK4 Statistika Terapan Sosial, BK5 Statistika Terapan Aktuaria, BK6 Statistika Terapan Biostatistika, BK7 Statistika Terapan Sains Data, dan BK8 Penelitian dan Publikasi."
  },
  {
    id: "manual-2026-mata-kuliah",
    page: 14,
    sourceTitle: "Kurikulum OBE 2026 - Daftar Mata Kuliah",
    text: "Daftar mata kuliah Kurikulum 2026 mencakup Statistika Inferensial, Komputasi Statistik dan Optimasi, Analisis Multivariat Tingkat Lanjut, Analisis Regresi Tingkat Lanjut, Proses Stokastik Tingkat Lanjut, Analisis Deret Waktu Tingkat Lanjut, Tinjauan Literatur Sistematis, Asistensi Perkuliahan, Statistika Nonparametrik dan Pemodelan Fleksibel, Penambangan Data dan Kecerdasan Buatan, Pemodelan Persamaan Struktural, Analisis Spasial, Analisis Multilevel dan Longitudinal, Model Linear Generalisasi, Matematika Keuangan, Desain Eksperimen, Teori Antrian, Matematika Aktuaria 1 dan 2, Analisis Survival, Teori Risiko, Epidemiologi, Pembelajaran Mesin, Analisis Citra, Analisis Teks, Basis Data, Sampling Survey, Pembicara Seminar Nasional/Internasional, SUR, SKR, Publikasi, dan Sidang Akhir Magister."
  }
];

function normalizeText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, " ")
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

function cleanupLines(raw) {
  return raw
    .replace(/\f/g, "\n")
    .split("\n")
    .map((line) => line.replace(/\u00a0/g, " "))
    .filter((line) => !/^\s*S2 Statistika Terapan\b/.test(line))
    .filter((line) => !/^\s*Kurikulum O-B-E\s*$/.test(line))
    .filter((line) => !/^\s*\|\s*$/.test(line))
    .filter((line) => !/^\s*\d+\s*$/.test(line));
}

function parseNumberedItems(lines) {
  const items = [];
  let current = null;

  const pushCurrent = () => {
    if (!current) return;
    const subitems = current.subitems.length ? ` (${current.subitems.join("; ")})` : "";
    items.push(normalizeText(`${current.text}${subitems}`));
  };

  for (const line of lines) {
    const trimmed = normalizeText(line);
    if (!trimmed) continue;

    const numbered = trimmed.match(/^(\d+)\.\s*(.+)$/);
    const bullet = trimmed.match(/^(?:o|-)\s+(.+)$/);

    if (numbered) {
      pushCurrent();
      current = { text: numbered[2], subitems: [] };
    } else if (bullet && current) {
      current.subitems.push(bullet[1]);
    } else if (current) {
      current.text = normalizeText(`${current.text} ${trimmed}`);
    } else {
      current = { text: trimmed, subitems: [] };
    }
  }

  pushCurrent();
  return items;
}

function findSection(text, startMarker, endMarker) {
  const start = text.lastIndexOf(startMarker);
  if (start < 0) throw new Error(`Marker awal tidak ditemukan: ${startMarker}`);
  const end = text.indexOf(endMarker, start);
  if (end < 0) throw new Error(`Marker akhir tidak ditemukan: ${endMarker}`);
  return text.slice(start + startMarker.length, end);
}

function parseSyllabus(text) {
  const section = findSection(text, "2.8 Silabus Mata Kuliah", "2.9 Modul Handbook");
  const blocks = section
    .replace(/\f/g, "\n")
    .split(/(?=^\s*\d+\.\s+140720-)/m)
    .filter((block) => /^\s*\d+\.\s+140720-/m.test(block));

  return blocks.map((block) => {
    const lines = cleanupLines(block);
    const header = lines.find((line) => /^\s*\d+\.\s+140720-/.test(line));
    const headerMatch = header?.match(/^\s*(\d+)\.\s+(140720-[A-Z0-9]+)\s*(?:-| )\s*(.+)$/i);
    if (!headerMatch) {
      throw new Error(`Header silabus tidak dapat dibaca: ${header || block.slice(0, 80)}`);
    }

    const order = Number(headerMatch[1]);
    const code = headerMatch[2].trim();
    const title = normalizeText(headerMatch[3]);
    const bodyLines = lines.slice(lines.indexOf(header) + 1);
    const topicsIndex = bodyLines.findIndex((line) => /^Bahan Kajian\s*$/i.test(line.trim()));
    const referencesIndex = bodyLines.findIndex((line) => /^Referensi\s*$/i.test(line.trim()));
    const descriptionLines = bodyLines.slice(0, topicsIndex >= 0 ? topicsIndex : referencesIndex);
    const topicLines = topicsIndex >= 0
      ? bodyLines.slice(topicsIndex + 1, referencesIndex >= 0 ? referencesIndex : undefined)
      : [];
    const referenceLines = referencesIndex >= 0 ? bodyLines.slice(referencesIndex + 1) : [];
    const meta = courseMeta.get(order) || { credits: null, group: "Lainnya" };

    return {
      id: `${code}-${slugify(title)}`,
      order,
      code,
      title,
      credits: meta.credits,
      group: meta.group,
      description: normalizeText(descriptionLines.join(" ")),
      topics: parseNumberedItems(topicLines),
      references: parseNumberedItems(referenceLines),
      source: pdfFileName,
      section: "2.8 Silabus Mata Kuliah"
    };
  });
}

function buildSyllabusChunk(entry) {
  const topics = entry.topics.map((topic, index) => `${index + 1}. ${topic}`).join(" ");
  const references = entry.references.map((reference, index) => `${index + 1}. ${reference}`).join(" ");
  return {
    id: `syllabus-${String(entry.order).padStart(2, "0")}-${slugify(entry.title)}`,
    sourceTitle: `Silabus ${entry.title} (Kurikulum 2026, Bagian 2.8)`,
    text: normalizeText([
      `Silabus mata kuliah ${entry.title}.`,
      `Kode mata kuliah ${entry.code}.`,
      entry.credits ? `${entry.credits} SKS.` : "",
      `Kelompok ${entry.group}.`,
      `Deskripsi: ${entry.description}`,
      entry.topics.length ? `Bahan Kajian: ${topics}` : "",
      entry.references.length ? `Referensi: ${references}` : ""
    ].join(" "))
  };
}

function buildPageChunks(text) {
  const pages = text.split("\f");
  const chunks = [];

  pages.forEach((pageText, pageIndex) => {
    const page = pageIndex + 1;
    const clean = cleanupLines(pageText)
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
    const paragraphs = clean
      .split(/\n\s*\n/)
      .map(normalizeText)
      .filter((paragraph) => paragraph.length > 90 && !/^Daftar Isi\b/i.test(paragraph));

    let part = 1;
    for (const paragraph of paragraphs) {
      const words = paragraph.split(" ");
      let buffer = "";
      for (const word of words) {
        if (`${buffer} ${word}`.trim().length > 950 && buffer.length > 120) {
          chunks.push({
            id: `p2026-${page}-${part}`,
            page,
            sourceTitle: `Kurikulum OBE 2026 - Halaman ${page}`,
            text: buffer
          });
          part += 1;
          buffer = word;
        } else {
          buffer = `${buffer} ${word}`.trim();
        }
      }
      if (buffer.length > 120) {
        chunks.push({
          id: `p2026-${page}-${part}`,
          page,
          sourceTitle: `Kurikulum OBE 2026 - Halaman ${page}`,
          text: buffer
        });
        part += 1;
      }
    }
  });

  return chunks;
}

function buildAlumniChunks() {
  if (!fs.existsSync(alumniPath)) return [];
  const alumni = JSON.parse(fs.readFileSync(alumniPath, "utf8"));
  const chunks = [
    {
      id: "alumni-summary-2022-2026",
      sourceTitle: "Lulusan.xlsx - Ringkasan Tesis 2022-2026",
      text: normalizeText([
        `Data lulusan Program Magister Statistika Terapan periode ${alumni.period} memuat ${alumni.summary.total} tesis.`,
        `Distribusi tahun lulus: ${Object.entries(alumni.summary.byYear).map(([year, count]) => `${year}: ${count}`).join(", ")}.`,
        `Tema tesis dominan: ${alumni.summary.themes.map((theme) => `${theme.name} (${theme.count})`).join(", ")}.`
      ].join(" "))
    }
  ];

  const records = alumni.records || [];
  for (let index = 0; index < records.length; index += 6) {
    const group = records.slice(index, index + 6);
    chunks.push({
      id: `alumni-thesis-${String(index / 6 + 1).padStart(2, "0")}`,
      sourceTitle: "Lulusan.xlsx - Judul Tesis Lulusan",
      text: normalizeText(group.map((record) => [
        `${record.nama} (${record.npm || "NPM tidak tersedia"})`,
        `lulus ${record.tahun_lulus || "tahun tidak tersedia"}`,
        `tesis: ${record.judul}`,
        `pembimbing: ${[record.pembimbing1, record.pembimbing2].filter(Boolean).join(" dan ")}`,
        `tema: ${record.tema}`
      ].join("; ")).join(" | "))
    });
  }

  return chunks;
}

if (!fs.existsSync(pdfPath)) {
  throw new Error(`PDF kurikulum tidak ditemukan: ${pdfPath}`);
}

execFileSync("pdftotext", ["-layout", pdfPath, tempTextPath], { stdio: "inherit" });
const text = fs.readFileSync(tempTextPath, "utf8");
const syllabus = parseSyllabus(text);
if (syllabus.length !== 33) {
  throw new Error(`Jumlah silabus terdeteksi ${syllabus.length}, seharusnya 33.`);
}

fs.writeFileSync(syllabusPath, `${JSON.stringify(syllabus, null, 2)}\n`);

const existingChunks = fs.existsSync(chunksPath)
  ? JSON.parse(fs.readFileSync(chunksPath, "utf8"))
  : [];
const retainedSmupChunks = existingChunks.filter((chunk) => String(chunk.id || "").startsWith("smup-"));
const pageChunks = buildPageChunks(text);
const alumniChunks = buildAlumniChunks();
const syllabusChunks = syllabus.map(buildSyllabusChunk);
const rebuiltChunks = [
  ...manualChunks,
  ...pageChunks,
  ...retainedSmupChunks,
  ...alumniChunks,
  ...syllabusChunks
];

fs.writeFileSync(chunksPath, `${JSON.stringify(rebuiltChunks, null, 2)}\n`);

console.log(`Berhasil membangun ${syllabus.length} silabus, ${pageChunks.length} chunk PDF 2026, ${alumniChunks.length} chunk alumni, dan ${retainedSmupChunks.length} chunk SMUP.`);
