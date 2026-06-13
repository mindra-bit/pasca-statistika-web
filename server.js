import "@dotenvx/dotenvx/config";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENAI_API_KEY || "";
const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const client = apiKey.length > 20 ? new OpenAI({ apiKey }) : null;

const chunks = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "knowledge_chunks.json"), "utf8"));
const syllabusPath = path.join(__dirname, "data", "syllabus.json");
const syllabus = fs.existsSync(syllabusPath)
  ? JSON.parse(fs.readFileSync(syllabusPath, "utf8"))
  : [];
const alumniPath = path.join(__dirname, "data", "alumni.json");
const alumni = fs.existsSync(alumniPath)
  ? JSON.parse(fs.readFileSync(alumniPath, "utf8"))
  : null;
const materialsPath = path.join(__dirname, "data", "materials.json");
const materials = fs.existsSync(materialsPath)
  ? JSON.parse(fs.readFileSync(materialsPath, "utf8"))
  : { total: 0, materials: [], categories: [] };
const thesisGuidesPath = path.join(__dirname, "data", "thesis_guides.json");
const thesisGuides = fs.existsSync(thesisGuidesPath)
  ? JSON.parse(fs.readFileSync(thesisGuidesPath, "utf8"))
  : { total: 0, guides: [] };
const tracerStudiesPath = path.join(__dirname, "data", "tracer_studies.json");
const tracerStudies = fs.existsSync(tracerStudiesPath)
  ? JSON.parse(fs.readFileSync(tracerStudiesPath, "utf8"))
  : { total: 0, reports: [], years: [] };
const curriculumDocsPath = path.join(__dirname, "data", "curriculum_docs.json");
const curriculumDocs = fs.existsSync(curriculumDocsPath)
  ? JSON.parse(fs.readFileSync(curriculumDocsPath, "utf8"))
  : { total: 0, documents: [] };
const pbmEvaluationsPath = path.join(__dirname, "data", "pbm_evaluations.json");
const pbmEvaluations = fs.existsSync(pbmEvaluationsPath)
  ? JSON.parse(fs.readFileSync(pbmEvaluationsPath, "utf8"))
  : { total: 0, documents: [] };
const stopwords = new Set("yang dan untuk dengan pada dalam sebagai dari ke di ini itu adalah atau serta oleh agar akan dapat karena maka jika sudah telah juga yaitu bagi antara menjadi memiliki secara program studi magister statistika terapan unpad fmipa universitas padjadjaran kurikulum dokumen tahun prodi pertanyaan jawaban jawab chatbot chatboot luar s2 apa saja berapa".split(" "));
const genericQueryTerms = new Set("silabus sylabus rps materi referensi deskripsi bahan kajian topik perkuliahan mata kuliah matakuliah course".split(" "));

const facts = {
  sks: {
    answer: "Berdasarkan dokumen Kurikulum OBE 2026, beban studi S2 Statistika Terapan adalah 42 SKS. Jalur berbasis kuliah terdiri atas 21 SKS mata kuliah wajib, 9 SKS mata kuliah pilihan, dan 12 SKS tesis: Seminar Usulan Riset 2 SKS, Seminar Kemajuan Riset 4 SKS, dan Sidang Akhir Magister 6 SKS.",
    sources: [{ page: 6, title: "Struktur SKS 2026" }, { page: 19, title: "Struktur berbasis kuliah" }]
  },
  jalur: {
    answer: "Kurikulum OBE 2026 memuat tiga skema penyelesaian: program berbasis kuliah, program berbasis riset, dan jalur Rekognisi Pembelajaran Lampau (RPL). Jalur berbasis kuliah menempuh 42 SKS dengan 21 SKS wajib, 9 SKS pilihan, dan 12 SKS tesis. Jalur berbasis riset menempuh 42 SKS dengan 12 SKS wajib, 9 SKS keterampilan, 9 SKS publikasi, dan 12 SKS tesis. Jalur RPL memungkinkan rekognisi capaian pembelajaran untuk mata kuliah tertentu sesuai tabel RPL.",
    sources: [{ page: 19, title: "Berbasis kuliah" }, { page: 21, title: "Berbasis riset" }, { page: 23, title: "RPL" }]
  },
  rpl: {
    answer: "Kurikulum OBE 2026 memuat jalur Rekognisi Pembelajaran Lampau (RPL). Calon mahasiswa melalui jalur RPL dapat mengajukan rekognisi atas capaian pembelajaran dari pendidikan formal sebelumnya, pembelajaran nonformal dan informal, atau pengalaman kerja. Mata kuliah yang dapat direkognisi mengikuti kolom RPL pada tabel Kurikulum 2026; mata kuliah tesis dan fondasi tertentu tetap ditempuh melalui prodi.",
    sources: [{ page: 23, title: "RPL Kurikulum 2026" }]
  },
  visi: {
    answer: "Visi Prodi Magister Statistika Terapan adalah menjadi pusat pendidikan Magister Statistika yang unggul dalam pendidikan dan riset, diakui secara internasional, serta memberikan dampak nyata bagi masyarakat, khususnya dalam bidang statistika bisnis dan industri, statistika sosial, aktuaria, biostatistika, dan sains data.",
    sources: [{ page: 8, title: "Visi prodi" }]
  },
  misi: {
    answer: "Misi prodi meliputi penyelenggaraan pendidikan dan pembelajaran magister dengan fokus pengembangan dan penerapan statistika di bisnis industri, sosial, aktuaria, biostatistika, dan sains data; pelaksanaan penelitian yang berdampak; kerja sama nasional dan internasional; serta publikasi ilmiah bereputasi.",
    sources: [{ page: 8, title: "Misi prodi" }]
  },
  visiMisi: {
    answer: "Visi Prodi Magister Statistika Terapan adalah menjadi pusat pendidikan Magister Statistika yang unggul dalam pendidikan dan riset, diakui secara internasional, serta memberikan dampak nyata bagi masyarakat, khususnya dalam bidang statistika bisnis dan industri, statistika sosial, aktuaria, biostatistika, dan sains data. Misinya meliputi pendidikan dan pembelajaran magister, penelitian yang berdampak, kerja sama nasional dan internasional, serta publikasi ilmiah bereputasi.",
    sources: [{ page: 8, title: "Visi dan misi prodi" }]
  },
  profil: {
    answer: "Profil lulusan mencakup akademisi, peneliti, konsultan, dan praktisi. Dokumen juga menyebut tiga kelompok pekerjaan utama: pengajar atau staf universitas/peneliti, perekayasa atau profesional di industri/perusahaan, serta lulusan yang melanjutkan studi doktoral S3.",
    sources: [{ page: 6, title: "Profil lulusan 2026" }]
  },
  cpl: {
    answer: "CPL mencakup penguasaan dan pengembangan konsep statistika, perancangan metode pengumpulan data, pengelolaan dan analisis data nyata, pengembangan algoritma komputasi, pengelolaan riset secara logis dan inovatif, pengembangan jejaring kerja sama, serta sikap etis, integritas, kepedulian sosial-lingkungan, dan kepemimpinan.",
    sources: [{ page: 8, title: "CPL 2026" }]
  },
  bahanKajian: {
    answer: "Bahan kajian Kurikulum OBE 2026 meliputi BK1 Statistika Teoritis dan Parametrik, BK2 Statistika Komputasi dan Nonparametrik, BK3 Statistika Terapan Bisnis dan Industri, BK4 Statistika Terapan Sosial, BK5 Statistika Terapan Aktuaria, BK6 Statistika Terapan Biostatistika, BK7 Statistika Terapan Sains Data, dan BK8 Penelitian dan Publikasi.",
    sources: [{ page: 12, title: "Bahan kajian 2026" }]
  },
  mataKuliah: {
    answer: "Daftar mata kuliah Kurikulum 2026 antara lain Statistika Inferensial, Komputasi Statistik dan Optimasi, Analisis Multivariat Tingkat Lanjut, Analisis Regresi Tingkat Lanjut, Proses Stokastik Tingkat Lanjut, Analisis Deret Waktu Tingkat Lanjut, Tinjauan Literatur Sistematis, Asistensi Perkuliahan, Statistika Nonparametrik dan Pemodelan Fleksibel, Penambangan Data dan Kecerdasan Buatan, Analisis Spasial, Pembelajaran Mesin, Analisis Citra, Analisis Teks, Basis Data, Sampling Survey, SUR, SKR, Publikasi, dan Sidang Akhir Magister.",
    sources: [{ page: 14, title: "Daftar mata kuliah 2026" }]
  },
  sejarah: {
    answer: "Program Magister Statistika Terapan FMIPA Unpad dibuka mengacu pada SK Dikti No. 117/D/T/2007 tertanggal 18 Januari 2007 dan perpanjangan izin dengan SK Rektor Universitas Padjadjaran No.6626/D/T/K-N/2011.",
    sources: [{ page: 6, title: "Sejarah prodi" }]
  },
  smupAdministrasi: {
    answer: "Berdasarkan halaman resmi SMUP Program Magister, Magister Statistika Terapan FMIPA Unpad pada Gelombang I Tahun Akademik 2026/2027 tercantum dengan daya tampung 30. Pendaftaran dibuka 27 Maret 2026 sampai 13 Juli 2026 melalui laman admission.unpad.ac.id. Biaya Penyelenggaraan Pendidikan (BPP) untuk Statistika Terapan tercantum Rp13.500.000 per semester pada tabel BPP Program Pascasarjana TA 2025/2026; IPI tidak tercantum pada baris Statistika Terapan. Karena informasi biaya dan jadwal dapat berubah, calon pendaftar tetap perlu memeriksa halaman SMUP sebelum finalisasi.",
    sources: [{ title: "SMUP Program Magister", url: "https://smup.unpad.ac.id/magister/", updated: "Update 2026/2025" }]
  },
  pendaftaranSmup: {
    answer: "Prosedur pendaftaran SMUP Magister: periksa persyaratan umum dan khusus prodi, mendaftar online di admission.unpad.ac.id dengan akun Google, pilih menu Pendaftaran serta jenjang/jalur yang diminati, lengkapi data pendukung seperti data diri, pendidikan, pekerjaan, dan portofolio akademik TKA/TKBI, pilih program studi dan unggah persyaratan khusus jika ada, buat tagihan dan lakukan pembayaran, lalu finalisasi pendaftaran. Setelah finalisasi, peserta memantau dashboard untuk hasil verifikasi; peserta yang eligible dapat mengunduh kartu peserta.",
    sources: [{ title: "SMUP Program Magister - Prosedur Pendaftaran", url: "https://smup.unpad.ac.id/magister/", updated: "Update 2026" }]
  },
  jadwalSmup: {
    answer: "Tanggal penting SMUP Pascasarjana Gelombang I TA 2026/2027: pendaftaran dibuka 27 Maret 2026 sampai 13 Juli 2026. Sesi I: batas finalisasi 9 April 2026, ujian/wawancara 15-17 April 2026, pengumuman 24 April 2026. Sesi II: batas finalisasi 21 Mei 2026, ujian/wawancara 29 Mei-5 Juni 2026, pengumuman 12 Juni 2026. Sesi III: batas finalisasi 13 Juli 2026, ujian/wawancara 22-27 Juli 2026, pengumuman 31 Juli 2026. Ujian/wawancara hanya untuk peserta yang telah melengkapi persyaratan dan dinyatakan eligible.",
    sources: [{ title: "SMUP Program Magister - Tanggal Penting", url: "https://smup.unpad.ac.id/magister/", updated: "Update 30 Maret 2026" }]
  },
  biayaSmup: {
    answer: "Pada halaman SMUP Program Magister, tabel BPP Program Pascasarjana TA 2025/2026 mencantumkan BPP Magister Statistika Terapan FMIPA sebesar Rp13.500.000 per semester. Tabel tersebut mengacu pada Keputusan Rektor Universitas Padjadjaran Nomor 112/UN6.RKT/Kep/HK/2025 dan pada baris Statistika Terapan tidak tercantum IPI. Untuk kepastian tagihan terbaru saat mendaftar, tetap cek halaman SMUP dan dashboard admission.unpad.ac.id.",
    sources: [{ title: "SMUP Program Magister - BPP Magister", url: "https://smup.unpad.ac.id/magister/", updated: "Update 14 April 2025" }]
  },
  persyaratanSmup: {
    answer: "Persyaratan umum SMUP Magister mencakup WNI atau WNA, lulusan S1 dari program studi terakreditasi BAN-PT/LAM-PTKes, memiliki sertifikat TKA/TPA dan TKBI/kemampuan Bahasa Inggris dari lembaga yang diakui Unpad, serta memiliki Statement of Purpose. SMUP menyebut tidak ada ketentuan skor minimal untuk TKA dan TKBI. Peserta dengan publikasi ilmiah sebagai penulis pertama di jurnal internasional bereputasi Q3 tidak wajib mengunggah nilai TKA/TPA dan TKBI. Semua berkas diunggah melalui admission.unpad.ac.id.",
    sources: [{ title: "SMUP Program Magister - Persyaratan", url: "https://smup.unpad.ac.id/magister/", updated: "Update 2026" }]
  },
  dayaTampungSmup: {
    answer: "Pada daftar Program Magister Gelombang I Tahun Akademik 2026/2027 di halaman SMUP, Fakultas MIPA - Magister Statistika Terapan dengan konsentrasi Statistika tercantum memiliki daya tampung 30.",
    sources: [{ title: "SMUP Program Magister - Program Studi", url: "https://smup.unpad.ac.id/magister/", updated: "Update 2 April 2026" }]
  },
  administrasi: {
    answer: "Untuk informasi administratif terbaru, rujukan resmi yang telah dimasukkan ke chatbot adalah halaman SMUP Program Magister. Halaman tersebut memuat persyaratan, prosedur pendaftaran, tanggal penting, BPP Magister, jadwal ujian/wawancara, dan informasi LoA. Jika pertanyaan sangat spesifik di luar halaman tersebut, calon pendaftar perlu memeriksa langsung SMUP atau menghubungi helpdesk SMUP.",
    sources: [{ title: "SMUP Program Magister", url: "https://smup.unpad.ac.id/magister/", updated: "Diakses 8 Juni 2026" }]
  }
};

app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !stopwords.has(token));
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wholeTokenMatches(text, token) {
  return text.match(new RegExp(`\\b${escapeRegExp(token)}\\b`, "g")) || [];
}

function hasWholeToken(text, token) {
  return wholeTokenMatches(text, token).length > 0;
}

function expandQuestion(question) {
  const text = normalize(question);
  const expansions = [];

  if (/(sains data|data science|machine|pembelajaran mesin|ai|kecerdasan buatan|data mining|penambangan)/.test(text)) {
    expansions.push("sains data machine learning pembelajaran mesin artificial intelligence penambangan data data mining");
  }
  if (/(biostatistik|kesehatan|epidemiologi|survival)/.test(text)) {
    expansions.push("biostatistik epidemiologi analisis survival kesehatan");
  }
  if (/(aktuaria|risiko|keuangan|antrian)/.test(text)) {
    expansions.push("aktuaria teori risiko matematika keuangan teori antrian");
  }
  if (/(riset|tesis|sur|skr|sam|publikasi|sidang akhir|seminar usulan|seminar kemajuan)/.test(text)) {
    expansions.push("seminar usulan riset seminar kemajuan riset sidang akhir magister publikasi tesis SUR SKR SAM");
  }
  if (/(panduan|penulisan tesis|format tesis|pelaksanaan tesis|proposal tesis|naskah tesis|bimbingan|penguji|sur|skr|sam)/.test(text)) {
    expansions.push("panduan tesis penulisan tesis format tesis pelaksanaan tesis seminar usulan riset seminar kemajuan riset sidang akhir magister pembimbing penguji penilaian administrasi");
  }
  if (/(silabus|sylabus|rps|materi|referensi|bahan kajian)/.test(text)) {
    expansions.push("silabus rps deskripsi mata kuliah bahan kajian topik perkuliahan referensi");
  }
  if (/(materi|bahan ajar|modul|html|katalog|slide|pertemuan)/.test(text)) {
    expansions.push("materi html bahan ajar modul pembelajaran katalog kuliah file html");
  }
  if (/(alumni|lulusan|judul tesis|tesis lulusan|pembimbing)/.test(text)) {
    expansions.push("alumni lulusan tesis judul tesis pembimbing tahun lulus riset lulusan");
  }
  if (/(tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus)/.test(text)) {
    expansions.push("tracer study tracer studi waktu tunggu pekerjaan pertama serapan lulusan respons lulusan bekerja sebelum lulus");
  }
  if (/(dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|kurikulum 2020|kurikulum 2021|kurikulum 2022|kurikulum 2023|kurikulum 2024|kurikulum 2025|kurikulum 2026|curriculum document|curriculum pdf)/.test(text)) {
    expansions.push("dokumen kurikulum file kurikulum pdf kurikulum arsip kurikulum curriculum document curriculum pdf 2020 2021 2022 2023 2024 2025 2026");
  }
  if (/(evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation)/.test(text)) {
    expansions.push("evaluasi pbm evaluasi pembelajaran proses belajar mengajar mutu akademik dokumen evaluasi semester ganjil genap learning evaluation teaching learning evaluation");
  }

  return [question, ...expansions].join(" ");
}

function scoreChunk(question, chunk) {
  const normalizedQuestion = normalize(question);
  const tokens = [...new Set(tokenize(expandQuestion(question)))];
  const originalTokens = tokenize(question).filter((token) => !genericQueryTerms.has(token));
  const text = normalize(chunk.text);
  let score = 0;
  const asksAlumni = /alumni|lulusan|judul tesis|tesis lulusan|data lulusan|pembimbing/.test(normalizedQuestion);
  const asksThesisGuide = (
    (/tesis/.test(normalizedQuestion) && /panduan|penulisan|format|pelaksanaan|proposal|naskah|bimbingan|penguji|sidang|seminar|sur|skr|sam/.test(normalizedQuestion))
    || /panduan tesis|sur|skr|sam|sidang akhir|seminar usulan|seminar kemajuan/.test(normalizedQuestion)
  ) && !(asksAlumni && !/panduan|format|penulisan|pelaksanaan|sur|skr|sam/.test(normalizedQuestion));
  const asksMaterial = /materi|bahan ajar|modul|html|katalog|slide|pertemuan|file kuliah/.test(normalizedQuestion)
    && !/silabus|sylabus|rps/.test(normalizedQuestion);
  const asksTracer = /tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus/.test(normalizedQuestion);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(normalizedQuestion);
  const asksPbmEvaluation = /evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(normalizedQuestion);

  if (asksAlumni && chunk.id?.startsWith("alumni-")) score += 140;
  if (asksAlumni && chunk.id?.startsWith("syllabus-")) score -= 80;
  if (asksThesisGuide && chunk.id?.startsWith("thesis-guide-")) score += 160;
  if (asksThesisGuide && chunk.id?.startsWith("alumni-")) score -= 70;
  if (asksMaterial && chunk.id?.startsWith("material-")) score += 160;
  if (asksMaterial && chunk.id?.startsWith("syllabus-")) score -= 40;
  if (asksTracer && chunk.id?.startsWith("tracer-study-")) score += 170;
  if (asksTracer && chunk.id?.startsWith("syllabus-")) score -= 60;
  if (asksCurriculumDoc && chunk.id?.startsWith("curriculum-doc-")) score += 180;
  if (asksCurriculumDoc && chunk.id?.startsWith("syllabus-")) score -= 50;
  if (asksPbmEvaluation && chunk.id?.startsWith("pbm-evaluation-")) score += 185;
  if (asksPbmEvaluation && chunk.id?.startsWith("syllabus-")) score -= 50;

  for (const token of tokens) {
    const matches = wholeTokenMatches(text, token);
    if (matches) score += Math.min(matches.length, 6);
  }

  const phrase = normalize(question);
  if (phrase.length > 8 && text.includes(phrase)) score += 18;

  if (chunk.id?.startsWith("syllabus-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title].join(" "));
    const courseTitle = normalize(String(chunk.sourceTitle || "").replace(/^Silabus\s+/i, "").replace(/\s*\(.+$/, ""));
    if (courseTitle) {
      const titleTokens = courseTitle.split(" ").filter((token) => token.length > 2 && !genericQueryTerms.has(token));
      if (titleTokens.length && titleTokens.every((token) => originalTokens.includes(token))) score += 120;
    }
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 20;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 55;
  }

  if (chunk.id?.startsWith("material-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 22;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 60;
  }

  if (chunk.id?.startsWith("thesis-guide-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    const guideTitle = normalize(chunk.sourceTitle || chunk.title || "");
    for (const token of originalTokens) {
      if (hasWholeToken(guideTitle, token)) score += 35;
    }
    const originalPhrase = originalTokens.join(" ");
    if (originalPhrase.length > 4 && metadata.includes(originalPhrase)) score += 90;
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 18;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 50;
  }

  if (chunk.id?.startsWith("tracer-study-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 20;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 60;
  }

  if (chunk.id?.startsWith("curriculum-doc-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 22;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 70;
  }

  if (chunk.id?.startsWith("pbm-evaluation-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 23;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 72;
  }

  return score > 0 && chunk.id?.startsWith("manual") ? score + 2 : score;
}

function retrieve(question, limit = 8) {
  return chunks
    .map((chunk) => ({ ...chunk, score: scoreChunk(question, chunk) }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function sourceFromHit(hit) {
  if (hit.sourceUrl) {
    return {
      title: hit.sourceTitle || hit.title || hit.id,
      url: hit.sourceUrl,
      updated: hit.updated
    };
  }
  return { page: hit.page, title: hit.sourceTitle || hit.title || hit.id };
}

function hitLabel(hit) {
  return hit.page ? `Hal. ${hit.page}` : (hit.sourceTitle || hit.title || hit.id);
}

function hitExcerpt(hit, length = 360) {
  return `${hitLabel(hit)}: ${hit.text.slice(0, length)}${hit.text.length > length ? "..." : ""}`;
}

function syllabusTitleFromHit(hit) {
  const match = String(hit.sourceTitle || "").match(/^Silabus\s+(.+?)\s+\(Kurikulum/i);
  return match ? match[1] : "";
}

function findSyllabusEntry(question, hits) {
  const text = normalize(question);
  const exact = syllabus.find((entry) => text.includes(normalize(entry.title)));
  if (exact) return exact;

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("syllabus-")) continue;
    const title = normalize(syllabusTitleFromHit(hit));
    const entry = syllabus.find((item) => normalize(item.title) === title);
    if (entry) return entry;
  }

  return null;
}

function numberedList(items = [], limit = 14) {
  return items
    .slice(0, limit)
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n");
}

function capabilityAnswer(question, language = "id") {
  const text = normalize(question);
  const asksCapability = /chatbot|chatboot|bisa apa|bisa jawab|pertanyaan apa|contoh pertanyaan|bantuan|help|what can|can you|examples/.test(text);
  if (!asksCapability) return null;

  const answer = language === "en"
    ? [
      "I can answer questions using the website knowledge base, including:",
      "1. 2026 curriculum, credits, study pathways, RPL, CPL, and graduate profiles.",
      "2. Course syllabi, topics, references, and HTML learning materials.",
      "3. Thesis guides, SUR, SKR, and Master's Final Defense.",
      "4. Graduate thesis data, tracer study reports, curriculum PDF archives, PBM evaluation documents, fees, and SMUP admissions.",
      "",
      client
        ? "Generative API mode is active, but answers remain grounded in the program knowledge base."
        : "Free-form answers outside the program knowledge base require enabling a generative AI API on the server."
    ].join("\n")
    : [
      "Saya bisa menjawab pertanyaan berdasarkan knowledge base website, terutama:",
      "1. Kurikulum 2026, SKS, jalur studi, RPL, CPL, dan profil lulusan.",
      "2. Silabus mata kuliah, bahan kajian, referensi, dan materi HTML.",
      "3. Panduan tesis, SUR, SKR, dan Sidang Akhir Magister.",
      "4. Data tesis lulusan, tracer study, arsip PDF kurikulum, dokumen Evaluasi PBM, biaya, dan pendaftaran SMUP.",
      "",
      client
        ? "Mode API generatif sedang aktif, tetapi jawaban tetap ditambatkan pada knowledge base prodi."
        : "Untuk jawaban bebas di luar knowledge base prodi, API AI generatif perlu diaktifkan pada server."
    ].join("\n");

  return {
    answer,
    sources: [{ title: language === "en" ? "Website knowledge base" : "Knowledge base website" }],
    mode: client ? "OpenAI API + retrieval" : "Knowledge base server"
  };
}

function syllabusAnswer(question, hits) {
  const text = normalize(question);
  const asksSyllabus = /silabus|sylabus|rps|referensi mata kuliah|topik kuliah|bahan kajian/.test(text);
  if (!asksSyllabus) return null;

  const entry = findSyllabusEntry(question, hits);
  if (!entry) return null;

  const wantsReferences = /referensi|daftar pustaka/.test(text) && !/silabus|rps|bahan kajian|materi|topik/.test(text);
  const sources = [{ title: `Silabus ${entry.title} (Kurikulum 2026, Bagian 2.8)` }];

  if (wantsReferences) {
    return {
      answer: [
        `Referensi mata kuliah ${entry.title} (${entry.code}):`,
        numberedList(entry.references, 10) || "Referensi belum tersedia dalam data silabus."
      ].join("\n\n"),
      sources,
      mode: "Knowledge base server"
    };
  }

  return {
    answer: [
      `Silabus ${entry.title} (${entry.code}, ${entry.credits || "-"} SKS, ${entry.group}).`,
      "",
      `Deskripsi: ${entry.description}`,
      "",
      "Bahan kajian:",
      numberedList(entry.topics),
      "",
      "Referensi:",
      numberedList(entry.references, 10) || "Referensi belum tersedia dalam data silabus."
    ].join("\n"),
    sources,
    mode: "Knowledge base server"
  };
}

function formatFileSize(kb) {
  const value = Number(kb || 0);
  if (!value) return "HTML";
  if (value >= 1024) return `${(value / 1024).toFixed(value >= 10240 ? 0 : 1).replace(/\.0$/, "")} MB`;
  return `${value} KB`;
}

function materialFromHit(hit) {
  const href = hit.sourceUrl || "";
  const title = String(hit.title || hit.sourceTitle || "Materi HTML").replace(/^Materi HTML\s*/i, "").trim();
  const known = materials.materials?.find((item) => item.viewerHref === href || item.href === href || item.title === title);
  return known || {
    title,
    href,
    category: "Materi Kuliah",
    file: href.split("/").pop() || "",
    sizeKb: 0
  };
}

function materialScore(question, material) {
  const queryTokens = tokenize(question).filter((token) => !genericQueryTerms.has(token));
  const haystack = normalize([material.title, material.category, material.folder, material.file].join(" "));
  let score = 0;
  for (const token of queryTokens) {
    if (hasWholeToken(haystack, token)) score += 1;
  }
  const category = normalize(material.category);
  const title = normalize(material.title);
  const questionText = normalize(question);
  if (category && questionText.includes(category)) score += 8;
  if (title && questionText.includes(title)) score += 12;
  return score;
}

function materialSuggestions(question, hits, limit = 8) {
  const byHref = new Map();
  const fromData = (materials.materials || [])
    .map((material) => ({ ...material, score: materialScore(question, material) }))
    .filter((material) => material.score > 0)
    .sort((a, b) => b.score - a.score);

  for (const material of fromData) byHref.set(material.href, material);

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("material-")) continue;
    const material = materialFromHit(hit);
    if (material.href && !byHref.has(material.href)) byHref.set(material.href, material);
  }

  if (!byHref.size && materials.materials?.length) {
    for (const material of materials.materials.slice(0, limit)) byHref.set(material.href, material);
  }

  return [...byHref.values()].slice(0, limit);
}

function materialAnswer(question, hits) {
  const text = normalize(question);
  const asksMaterial = /materi|bahan ajar|modul|html|katalog|slide|pertemuan|file kuliah/.test(text)
    && !/silabus|sylabus|rps/.test(text);
  if (!asksMaterial) return null;

  const suggestions = materialSuggestions(question, hits, 8);
  if (!suggestions.length) return null;

  const total = materials.total || materials.materials?.length || suggestions.length;

  if (suggestions.length === 1 || materialScore(question, suggestions[0]) >= 2) {
    const material = suggestions[0];
    return {
      answer: [
        `Materi HTML ${material.title} tersedia di katalog materi kuliah.`,
        `Kategori: ${material.category || "Materi Kuliah"}.`,
        `File: ${material.file || material.href}.`,
        `Ukuran: ${formatFileSize(material.sizeKb)}.`,
        `Link: ${material.viewerHref || material.href}`
      ].join("\n"),
      sources: [{ title: `Materi HTML ${material.title}`, url: material.viewerHref || material.href }],
      mode: "Knowledge base server"
    };
  }

  const sources = suggestions.map((material) => ({
    title: `Materi HTML ${material.title}`,
    url: material.viewerHref || material.href
  }));

  const list = suggestions
    .map((material, index) => `${index + 1}. ${material.title} (${material.category || "Materi Kuliah"}) - ${material.viewerHref || material.href}`)
    .join("\n");

  return {
    answer: `Saat ini tersedia ${total} materi HTML di katalog Materi Kuliah. Beberapa materi yang bisa dibuka:\n\n${list}`,
    sources,
    mode: "Knowledge base server"
  };
}

function findThesisGuide(question) {
  const guides = thesisGuides.guides || [];
  const text = normalize(question);
  if (/penulisan|format|naskah|sitasi|daftar pustaka/.test(text)) {
    return guides.find((guide) => guide.id === "panduan-penulisan-tesis") || null;
  }
  if (/pelaksanaan|sur|skr|sam|sidang|seminar usulan|seminar kemajuan/.test(text)) {
    return guides.find((guide) => guide.id === "panduan-pelaksanaan-tesis") || null;
  }
  return null;
}

function thesisGuideAnswer(question) {
  const text = normalize(question);
  const asksThesisContext = /tesis|panduan|penulisan|pelaksanaan|sur|skr|sam|sidang|seminar usulan|seminar kemajuan|format naskah|bimbingan|penguji/.test(text);
  const asksOverview = asksThesisContext && /apa panduan|apa isi|dokumen panduan|daftar panduan|link panduan|buka panduan|download panduan|unduh panduan|panduan penulisan|panduan pelaksanaan/.test(text);
  if (!asksOverview) return null;

  const selected = findThesisGuide(question);
  const guides = selected ? [selected] : (thesisGuides.guides || []);
  if (!guides.length) return null;

  const answer = guides
    .map((guide) => [
      `${guide.title}: ${guide.description}`,
      "Topik utama:",
      numberedList(guide.topics || [], 8),
      `Dokumen: ${guide.href}`
    ].join("\n"))
    .join("\n\n");

  return {
    answer,
    sources: guides.map((guide) => ({ title: guide.title, url: guide.href })),
    mode: "Knowledge base server"
  };
}

function findTracerReport(question) {
  const reports = tracerStudies.reports || [];
  const year = normalize(question).match(/\b(2022|2023|2024|2025)\b/)?.[1];
  return year ? reports.find((report) => String(report.year) === year) || null : null;
}

function tracerStudyAnswer(question, hits = []) {
  const text = normalize(question);
  const asksTracer = /tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("tracer-study-"));
  if (!asksTracer) return null;

  const selected = findTracerReport(question);
  const reports = selected ? [selected] : (tracerStudies.reports || []);
  if (!reports.length) return null;

  const answer = reports
    .map((report) => [
      `${report.title}: ${report.summary}`,
      `Respons dianalisis: ${report.metrics?.responses || "-"}.`,
      `Median waktu tunggu kerja pertama: ${report.metrics?.medianWait || "-"}.`,
      `Pekerjaan pertama <= 3 bulan: ${report.metrics?.firstJobUnder3Months || "-"}.`,
      `Sudah bekerja sebelum lulus: ${report.metrics?.workingBeforeGraduation || "-"}.`,
      `Laporan: ${report.href}`
    ].join("\n"))
    .join("\n\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: report.title, url: report.href })),
    mode: "Knowledge base server"
  };
}

function curriculumDocTitle(doc, language = "id") {
  return language === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function curriculumDocDescription(doc, language = "id") {
  return language === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function pbmEvaluationTitle(doc, language = "id") {
  return language === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function pbmEvaluationDescription(doc, language = "id") {
  return language === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function findCurriculumDoc(question, hits = []) {
  const docs = curriculumDocs.documents || [];
  const text = normalize(question);
  const year = text.match(/\b(2020|2021|2022|2023|2024|2025|2026)\b/)?.[1];
  if (year) {
    if (["2020", "2021", "2022"].includes(year)) {
      return docs.find((doc) => doc.period === "2020-2022") || null;
    }
    if (["2023", "2024"].includes(year)) {
      return docs.find((doc) => doc.period === "2023-2024") || null;
    }
    return docs.find((doc) => doc.period === year) || null;
  }

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("curriculum-doc-")) continue;
    const id = String(hit.id).replace(/^curriculum-doc-/, "");
    const doc = docs.find((item) => item.id === id || normalize(item.title) === normalize(hit.title));
    if (doc) return doc;
  }

  return null;
}

function findPbmEvaluation(question, hits = []) {
  const docs = pbmEvaluations.documents || [];
  const text = normalize(question);
  const yearPair = text.match(/\b(20\d{2})\s*(?:[/:-]|\s)\s*(20\d{2})\b/);
  const academicYear = yearPair ? `${yearPair[1]}/${yearPair[2]}` : "";
  const semester = /ganjil|odd/.test(text) ? "Ganjil" : (/genap|even/.test(text) ? "Genap" : "");

  if (academicYear && semester) {
    return docs.find((doc) => doc.academicYear === academicYear && doc.semester === semester) || null;
  }
  if (academicYear) {
    return docs.find((doc) => doc.academicYear === academicYear) || null;
  }

  const year = text.match(/\b(2023|2024|2025|2026)\b/)?.[1];
  if (year && semester) {
    return docs.find((doc) => doc.academicYear.includes(year) && doc.semester === semester) || null;
  }
  if (year) {
    return docs.find((doc) => doc.academicYear.includes(year)) || null;
  }

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("pbm-evaluation-")) continue;
    const id = String(hit.id).replace(/^pbm-evaluation-/, "");
    const doc = docs.find((item) => item.id === id || normalize(item.title) === normalize(hit.title));
    if (doc) return doc;
  }

  return null;
}

function curriculumDocAnswer(question, hits = [], language = "id") {
  const text = normalize(question);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(text);
  if (!asksCurriculumDoc) return null;

  const selected = findCurriculumDoc(question, hits);
  const docs = selected ? [selected] : (curriculumDocs.documents || []);
  if (!docs.length) return null;

  const answer = docs
    .map((doc) => {
      if (language === "en") {
        return [
          `${curriculumDocTitle(doc, language)}: ${curriculumDocDescription(doc, language)}`,
          `Period: ${doc.period}.`,
          `File size: ${formatFileSize(doc.sizeKb)}.`,
          `PDF: ${doc.href}`
        ].join("\n");
      }
      return [
        `${curriculumDocTitle(doc, language)}: ${curriculumDocDescription(doc, language)}`,
        `Periode: ${doc.period}.`,
        `Ukuran file: ${formatFileSize(doc.sizeKb)}.`,
        `PDF: ${doc.href}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: docs.map((doc) => ({ title: curriculumDocTitle(doc, language), url: doc.href })),
    mode: "Knowledge base server"
  };
}

function pbmEvaluationAnswer(question, hits = [], language = "id") {
  const text = normalize(question);
  const asksPbmEvaluation = /evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
  if (!asksPbmEvaluation) return null;

  const asksSpecific = /\b20\d{2}\b|ganjil|genap|odd|even/.test(text);
  const selected = asksSpecific ? findPbmEvaluation(question, hits) : null;
  const docs = selected ? [selected] : (pbmEvaluations.documents || []);
  if (!docs.length) return null;

  const answer = docs
    .map((doc) => {
      if (language === "en") {
        return [
          `${pbmEvaluationTitle(doc, language)}: ${pbmEvaluationDescription(doc, language)}`,
          `Semester: ${doc.semesterEn || doc.semester}.`,
          `Academic year: ${doc.academicYear}.`,
          `File size: ${formatFileSize(doc.sizeKb)}.`,
          `PDF: ${doc.href}`
        ].join("\n");
      }
      return [
        `${pbmEvaluationTitle(doc, language)}: ${pbmEvaluationDescription(doc, language)}`,
        `Semester: ${doc.semester}.`,
        `Tahun akademik: ${doc.academicYear}.`,
        `Ukuran file: ${formatFileSize(doc.sizeKb)}.`,
        `PDF: ${doc.href}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: docs.map((doc) => ({ title: pbmEvaluationTitle(doc, language), url: doc.href })),
    mode: "Knowledge base server"
  };
}

function matchFact(question) {
  const text = normalize(question);
  const asksBiaya = /biaya|bpp|ukt|ipi|bayar|tagihan/.test(text);
  const asksPendaftaran = /pendaftaran|daftar|pmb|admission|finalisasi|verifikasi/.test(text);
  const asksJadwal = /jadwal|tanggal|gelombang|ujian|wawancara|pengumuman|kapan/.test(text);
  const asksSyarat = /persyaratan|syarat|tka|tpa|tkbi|toefl|ielts|statement|purpose/.test(text);
  const asksDayaTampung = /daya tampung|kuota|kapasitas/.test(text);
  const asksSyllabus = /silabus|sylabus|rps|referensi mata kuliah|topik kuliah|bahan kajian/.test(text);
  const asksMaterial = /materi|bahan ajar|modul|html|katalog|slide|pertemuan|file kuliah/.test(text);
  const asksTracer = /tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus/.test(text);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(text);
  const asksPbmEvaluation = /evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
  const asksThesisGuide = (
    (/tesis/.test(text) && /panduan|penulisan|format|pelaksanaan|proposal|naskah|bimbingan|penguji|sidang|seminar|sur|skr|sam/.test(text))
    || /panduan tesis|sur|skr|sam|sidang akhir|seminar usulan|seminar kemajuan/.test(text)
  );
  const asksAlumniData = /alumni|judul tesis|tesis lulusan|data lulusan|tahun lulus|pembimbing/.test(text);
  if (asksDayaTampung) return facts.dayaTampungSmup;
  if (asksBiaya && asksPendaftaran) return facts.smupAdministrasi;
  if (asksBiaya) return facts.biayaSmup;
  if (asksJadwal) return facts.jadwalSmup;
  if (asksPendaftaran) return facts.pendaftaranSmup;
  if (asksSyarat) return facts.persyaratanSmup;
  if (asksSyllabus) return null;
  if (asksMaterial) return null;
  if (asksTracer) return null;
  if (asksCurriculumDoc) return null;
  if (asksPbmEvaluation) return null;
  if (asksThesisGuide) return null;
  if (asksAlumniData && !/profil lulusan/.test(text)) return null;
  if (/rpl|rekognisi/.test(text)) return facts.rpl;
  if (/sks|jumlah kredit|beban studi/.test(text)) return facts.sks;
  if (/jalur|coursework|by research|berbasis riset|berbasis kuliah|rekognisi pembelajaran lampau/.test(text)) return facts.jalur;
  if (/visi/.test(text) && /misi/.test(text)) return facts.visiMisi;
  if (/visi/.test(text)) return facts.visi;
  if (/misi/.test(text)) return facts.misi;
  if (/profil|lulusan|karir|karier|pekerjaan|akademisi|peneliti|konsultan|praktisi/.test(text)) return facts.profil;
  if (/cpl|capaian/.test(text)) return facts.cpl;
  if (/bahan kajian|bk1|bk2|bk3|bk4|bk5|bk6|bk7|bk8/.test(text)) return facts.bahanKajian;
  if (/mata kuliah|matakuliah|machine|pembelajaran mesin|spasial|survival|sampling|basis data|sains data|data science|ai|artificial|image|teks|regresi|multivariat|epidemiologi|aktuaria|antrian/.test(text)) return facts.mataKuliah;
  if (/sejarah|sk dikti|berdiri|dibuka|izin/.test(text)) return facts.sejarah;
  return null;
}

function uniqueSources(sources) {
  const seen = new Set();
  const unique = [];

  for (const source of sources) {
    const key = `${source.page ?? source.url ?? ""}-${source.title || source.source || ""}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(source);
    }
  }

  return unique.slice(0, 6);
}

function localAnswer(question, language = "id") {
  const capabilities = capabilityAnswer(question, language);
  if (capabilities) return capabilities;

  const fact = matchFact(question);
  const hits = retrieve(question, 5);
  const structuredSyllabus = syllabusAnswer(question, hits);
  const structuredMaterial = materialAnswer(question, hits);
  const structuredTracerStudy = tracerStudyAnswer(question, hits);
  const structuredCurriculumDoc = curriculumDocAnswer(question, hits, language);
  const structuredPbmEvaluation = pbmEvaluationAnswer(question, hits, language);
  const structuredThesisGuide = thesisGuideAnswer(question);

  if (structuredSyllabus) return structuredSyllabus;
  if (structuredMaterial) return structuredMaterial;
  if (structuredTracerStudy) return structuredTracerStudy;
  if (structuredCurriculumDoc) return structuredCurriculumDoc;
  if (structuredPbmEvaluation) return structuredPbmEvaluation;
  if (structuredThesisGuide) return structuredThesisGuide;

  if (fact) {
    return {
      answer: fact.answer,
      sources: uniqueSources(
        fact.sources.length || fact === facts.administrasi
          ? fact.sources
          : hits.map(sourceFromHit)
      ),
      mode: "Knowledge base server"
    };
  }

  if (!hits.length) {
    return {
      answer: language === "en"
        ? "I have not found that information in the program knowledge base. I can answer the curriculum, syllabi, HTML learning materials, thesis guides, graduate data, tracer studies, curriculum documents, PBM evaluations, fees, and admissions that have been indexed. Free-form answers outside this knowledge base require enabling a generative AI API on the server."
        : "Saya belum menemukan informasi tersebut dalam knowledge base prodi. Saat ini saya bisa menjawab kurikulum, silabus, materi HTML, panduan tesis, data lulusan, tracer study, dokumen kurikulum, Evaluasi PBM, biaya, dan pendaftaran yang sudah terindeks. Jawaban bebas di luar knowledge base memerlukan API AI generatif yang aktif di server.",
      sources: [],
      mode: "Knowledge base server"
    };
  }

  const intro = hits[0]?.id?.startsWith("alumni-")
    ? "Saya menemukan data lulusan yang relevan:"
    : hits[0]?.id?.startsWith("material-")
      ? "Saya menemukan materi HTML yang relevan:"
      : hits[0]?.id?.startsWith("thesis-guide-")
        ? "Saya menemukan panduan tesis yang relevan:"
        : hits[0]?.id?.startsWith("tracer-study-")
          ? "Saya menemukan laporan tracer study yang relevan:"
          : hits[0]?.id?.startsWith("curriculum-doc-")
            ? "Saya menemukan dokumen kurikulum yang relevan:"
            : hits[0]?.id?.startsWith("pbm-evaluation-")
              ? "Saya menemukan dokumen Evaluasi PBM yang relevan:"
              : "Saya menemukan potongan knowledge base yang relevan:";
  const answer = [
    intro,
    "",
    ...hits.slice(0, 3).map((hit) => hitExcerpt(hit))
  ].join("\n");

  return {
    answer,
    sources: uniqueSources(hits.map(sourceFromHit)),
    mode: "Knowledge base server"
  };
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    chunks: chunks.length,
    syllabus: syllabus.length,
    alumni: alumni?.summary?.total || 0,
    materials: materials.total || materials.materials?.length || 0,
    thesisGuides: thesisGuides.total || thesisGuides.guides?.length || 0,
    tracerStudies: tracerStudies.total || tracerStudies.reports?.length || 0,
    curriculumDocs: curriculumDocs.total || curriculumDocs.documents?.length || 0,
    pbmEvaluations: pbmEvaluations.total || pbmEvaluations.documents?.length || 0,
    apiReady: Boolean(client),
    model: client ? model : null
  });
});

app.get("/api/syllabus", (_req, res) => {
  res.json(syllabus);
});

app.get("/api/alumni", (_req, res) => {
  res.json(alumni || { records: [], summary: { total: 0 } });
});

app.get("/api/materials", (_req, res) => {
  res.json(materials);
});

app.get("/api/thesis-guides", (_req, res) => {
  res.json(thesisGuides);
});

app.get("/api/tracer-studies", (_req, res) => {
  res.json(tracerStudies);
});

app.get("/api/curriculum-docs", (_req, res) => {
  res.json(curriculumDocs);
});

app.get("/api/pbm-evaluations", (_req, res) => {
  res.json(pbmEvaluations);
});

app.post("/api/chat", async (req, res) => {
  const question = String(req.body?.question || "").trim();
  const language = req.body?.language === "en" ? "en" : "id";
  if (!question) return res.status(400).json({ error: "Pertanyaan tidak boleh kosong." });

  const capabilities = capabilityAnswer(question, language);
  if (capabilities) return res.json(capabilities);

  const fact = matchFact(question);
  const hits = retrieve(question, 8);
  const directAnswer = syllabusAnswer(question, hits)
    || materialAnswer(question, hits)
    || tracerStudyAnswer(question, hits)
    || curriculumDocAnswer(question, hits, language)
    || pbmEvaluationAnswer(question, hits, language)
    || thesisGuideAnswer(question);

  if (directAnswer) {
    return res.json({
      ...directAnswer,
      sources: uniqueSources(directAnswer.sources || [])
    });
  }

  const sources = uniqueSources([
    ...(fact?.sources || []),
    ...hits.map(sourceFromHit)
  ]);

  if (fact === facts.administrasi || !client) {
    return res.json(localAnswer(question, language));
  }

  const contextParts = [];
  if (fact) contextParts.push(`[Ringkasan terkurasi] ${fact.answer}`);
  contextParts.push(...hits.map((hit) => {
    const label = hit.page ? `Halaman ${hit.page}; ${hit.id}` : (hit.sourceTitle || hit.title || hit.id);
    return `[${label}] ${hit.text}`;
  }));

  try {
    const response = await client.responses.create({
      model,
      instructions: [
        "Anda adalah chatbot resmi sementara S2 Statistika Terapan FMIPA Universitas Padjadjaran.",
        "Jawab hanya berdasarkan konteks knowledge base yang diberikan.",
        "Jika konteks tidak memuat informasi yang ditanyakan, katakan belum tersedia dan sarankan menghubungi admin prodi.",
        "Jangan mengarang biaya, jadwal PMB, link pendaftaran, atau RPL.",
        "Jika pengguna menanyakan silabus/RPS mata kuliah, susun jawaban dari deskripsi, bahan kajian, dan referensi yang tersedia.",
        "Jika pengguna menanyakan panduan tesis, format penulisan tesis, SUR, SKR, atau SAM, jawab berdasarkan konteks Panduan Penulisan Tesis dan Panduan Pelaksanaan Tesis.",
        "Jika pengguna menanyakan dokumen kurikulum atau PDF kurikulum, arahkan ke dokumen kurikulum yang relevan dari konteks.",
        language === "en"
          ? "Use professional, concise English and include page or source references when available."
          : "Gunakan bahasa Indonesia yang profesional, ringkas, dan sertakan rujukan halaman bila tersedia."
      ].join(" "),
      input: `Pertanyaan pengguna:\n${question}\n\nKonteks knowledge base:\n${contextParts.join("\n\n") || "Tidak ada konteks yang ditemukan."}`
    });

    res.json({
      answer: response.output_text,
      sources,
      mode: "OpenAI API + retrieval"
    });
  } catch (error) {
    const fallback = localAnswer(question, language);
    res.json({
      ...fallback,
      mode: "Knowledge base server fallback",
      warning: error.message
    });
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Website berjalan di http://127.0.0.1:${port}`);
});
