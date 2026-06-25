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
const graduateUserSatisfactionPath = path.join(__dirname, "data", "graduate_user_satisfaction.json");
const graduateUserSatisfaction = fs.existsSync(graduateUserSatisfactionPath)
  ? JSON.parse(fs.readFileSync(graduateUserSatisfactionPath, "utf8"))
  : { total: 0, reports: [], years: [] };
const specialMomentsPath = path.join(__dirname, "data", "special_moments.json");
const specialMoments = fs.existsSync(specialMomentsPath)
  ? JSON.parse(fs.readFileSync(specialMomentsPath, "utf8"))
  : { totalCohorts: 0, totalPhotos: 0, cohorts: [] };
const curriculumDocsPath = path.join(__dirname, "data", "curriculum_docs.json");
const curriculumDocs = fs.existsSync(curriculumDocsPath)
  ? JSON.parse(fs.readFileSync(curriculumDocsPath, "utf8"))
  : { total: 0, documents: [] };
const lamsamaReportsPath = path.join(__dirname, "data", "lamsama_reports.json");
const lamsamaReports = fs.existsSync(lamsamaReportsPath)
  ? JSON.parse(fs.readFileSync(lamsamaReportsPath, "utf8"))
  : { total: 0, reports: [] };
const scholarshipsPath = path.join(__dirname, "data", "scholarships.json");
const scholarships = fs.existsSync(scholarshipsPath)
  ? JSON.parse(fs.readFileSync(scholarshipsPath, "utf8"))
  : { total: 0, scholarships: [] };
const lectureEvaluationsPath = path.join(__dirname, "data", "lecture_evaluations.json");
const lectureEvaluations = fs.existsSync(lectureEvaluationsPath)
  ? JSON.parse(fs.readFileSync(lectureEvaluationsPath, "utf8"))
  : { total: 0, documents: [], monitoringUrl: "https://bit.ly/EvaluasiGanjilMStat" };
const pbmEvaluationsPath = path.join(__dirname, "data", "pbm_evaluations.json");
const pbmEvaluations = fs.existsSync(pbmEvaluationsPath)
  ? JSON.parse(fs.readFileSync(pbmEvaluationsPath, "utf8"))
  : { total: 0, documents: [] };
const rpsDocsPath = path.join(__dirname, "data", "rps_docs.json");
const rpsDocs = fs.existsSync(rpsDocsPath)
  ? JSON.parse(fs.readFileSync(rpsDocsPath, "utf8"))
  : { total: 0, groups: [], documents: [] };
const s3SitePath = path.join(__dirname, "data", "s3_statistika.json");
const s3Site = fs.existsSync(s3SitePath)
  ? JSON.parse(fs.readFileSync(s3SitePath, "utf8"))
  : { program: {}, vision: "", missions: [], objectives: [], graduateProfiles: [], cpl: [], documents: [], rps: { total: 0, groups: [], documents: [] } };
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
  if (/(rps|rencana pembelajaran semester|course plan|semester learning plan|download rps|unduh rps|buka rps)/.test(text)) {
    expansions.push("rps rencana pembelajaran semester course plan semester learning plan dokumen pdf mata kuliah wajib pilihan");
  }
  if (/(s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional)/.test(text)) {
    expansions.push("s3 doktor program doktor statistika doctoral doctorate disertasi promosi doktor pnd und spd rps s3 visi misi tujuan profil lulusan cpl doctoral learning outcomes");
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
  if (/(kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna)/.test(text)) {
    expansions.push("kepuasan pengguna lulusan survei pengguna lulusan user satisfaction graduate user employer satisfaction mutu lulusan");
  }
  if (/(special moment|momen|foto angkatan|galeri|gallery|dokumentasi)/.test(text)) {
    expansions.push("special moment momen galeri foto angkatan cohort dokumentasi kebersamaan mahasiswa");
  }
  if (/(dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|kurikulum 2020|kurikulum 2021|kurikulum 2022|kurikulum 2023|kurikulum 2024|kurikulum 2025|kurikulum 2026|curriculum document|curriculum pdf)/.test(text)) {
    expansions.push("dokumen kurikulum file kurikulum pdf kurikulum arsip kurikulum curriculum document curriculum pdf 2020 2021 2022 2023 2024 2025 2026");
  }
  if (/(evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation)/.test(text)) {
    expansions.push("evaluasi pbm dosen evaluasi pembelajaran evaluasi dosen proses belajar mengajar mutu akademik dokumen evaluasi semester ganjil genap learning evaluation lecturer evaluation teaching learning evaluation");
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
  const asksGraduateUser = /kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna/.test(normalizedQuestion);
  const asksSpecialMoment = /special moment|momen|foto angkatan|galeri|gallery|dokumentasi/.test(normalizedQuestion);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(normalizedQuestion);
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|course delivery evaluation|course evaluation|student monitoring/.test(normalizedQuestion);
  const asksPbmEvaluation = /evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(normalizedQuestion);
  const asksRpsDoc = /rps|rencana pembelajaran semester|course plan|semester learning plan|buka rps|download rps|unduh rps/.test(normalizedQuestion);
  const asksS3 = /s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional/.test(normalizedQuestion);

  if (asksS3 && chunk.id?.startsWith("s3-")) score += 220;
  if (asksS3 && (chunk.id?.startsWith("manual") || chunk.id?.startsWith("syllabus-") || chunk.id?.startsWith("rps-doc-"))) score -= 70;
  if (asksAlumni && chunk.id?.startsWith("alumni-")) score += 140;
  if (asksAlumni && chunk.id?.startsWith("syllabus-")) score -= 80;
  if (asksThesisGuide && chunk.id?.startsWith("thesis-guide-")) score += 160;
  if (asksThesisGuide && chunk.id?.startsWith("alumni-")) score -= 70;
  if (asksMaterial && chunk.id?.startsWith("material-")) score += 160;
  if (asksMaterial && chunk.id?.startsWith("syllabus-")) score -= 40;
  if (asksTracer && chunk.id?.startsWith("tracer-study-")) score += 170;
  if (asksTracer && chunk.id?.startsWith("syllabus-")) score -= 60;
  if (asksGraduateUser && chunk.id?.startsWith("graduate-user-satisfaction-")) score += 190;
  if (asksGraduateUser && chunk.id?.startsWith("tracer-study-")) score += 35;
  if (asksSpecialMoment && chunk.id?.startsWith("special-moment-")) score += 175;
  if (asksSpecialMoment && chunk.id?.startsWith("syllabus-")) score -= 60;
  if (asksCurriculumDoc && chunk.id?.startsWith("curriculum-doc-")) score += 180;
  if (asksCurriculumDoc && chunk.id?.startsWith("syllabus-")) score -= 50;
  if (asksLectureEvaluation && chunk.id?.startsWith("lecture-evaluation-")) score += 190;
  if (asksLectureEvaluation && chunk.id?.startsWith("pbm-evaluation-")) score -= 45;
  if (asksPbmEvaluation && chunk.id?.startsWith("pbm-evaluation-")) score += 185;
  if (asksPbmEvaluation && chunk.id?.startsWith("syllabus-")) score -= 50;
  if (asksRpsDoc && chunk.id?.startsWith("rps-doc-")) score += 195;
  if (asksRpsDoc && chunk.id?.startsWith("syllabus-")) score -= 55;

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

  if (chunk.id?.startsWith("graduate-user-satisfaction-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 24;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 76;
  }

  if (chunk.id?.startsWith("special-moment-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 22;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 65;
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

  if (chunk.id?.startsWith("lecture-evaluation-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 24;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 74;
  }

  if (chunk.id?.startsWith("rps-doc-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 26;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 78;
  }

  if (chunk.id?.startsWith("s3-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !genericQueryTerms.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 30;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 90;
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
      "2. Course syllabi, RPS/course plan PDFs, topics, references, and HTML learning materials.",
      "3. Academic guides, thesis guides, SUR, SKR, and Master's Final Defense.",
      "4. S3 Statistics information: vision, mission, objectives, graduate profiles, CPL, academic documents, and doctoral RPS files.",
      "5. Graduate thesis data, tracer study reports, graduate user satisfaction reports, LAMSAMA documents, Special Moment gallery, curriculum PDF archives, course delivery evaluation reports, PBM-Lecturer Evaluation documents, fees, and SMUP admissions.",
      "",
      client
        ? "Generative API mode is active, but answers remain grounded in the program knowledge base."
        : "Free-form answers outside the program knowledge base require enabling a generative AI API on the server."
    ].join("\n")
    : [
      "Saya bisa menjawab pertanyaan berdasarkan knowledge base website, terutama:",
      "1. Kurikulum 2026, SKS, jalur studi, RPL, CPL, dan profil lulusan.",
      "2. Silabus mata kuliah, PDF RPS, bahan kajian, referensi, dan materi HTML.",
      "3. Panduan akademik, panduan tesis, SUR, SKR, dan Sidang Akhir Magister.",
      "4. Informasi S3 Statistika: visi, misi, tujuan, profil lulusan, CPL, dokumen akademik, dan RPS doktoral.",
      "5. Data tesis lulusan, tracer study, laporan kepuasan pengguna lulusan, dokumen LAMSAMA, Special Moment, arsip PDF kurikulum, Evaluasi Pelaksanaan Perkuliahan, dokumen Evaluasi PBM-Dosen, biaya, dan pendaftaran SMUP.",
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
  const haystack = normalize([
    material.title,
    material.category,
    material.folder,
    material.file,
    material.summaryFile,
    material.contractFile
  ].join(" "));
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
        `Paket pembelajaran ${material.title} tersedia di katalog materi kuliah.`,
        `Kategori: ${material.category || "Materi Kuliah"}.`,
        `Materi HTML: ${material.viewerHref || material.href}`,
        `Ringkasan PPTX: ${material.summaryHref || "-"}`,
        `Kontrak perkuliahan DOCX: ${material.contractHref || "-"}`
      ].join("\n"),
      sources: [
        { title: `Materi HTML ${material.title}`, url: material.viewerHref || material.href },
        ...(material.summaryHref ? [{ title: `Ringkasan ${material.title}`, url: material.summaryHref }] : []),
        ...(material.contractHref ? [{ title: `Kontrak ${material.title}`, url: material.contractHref }] : [])
      ],
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

function graduateUserReportTitle(report, language = "id") {
  return language === "en" ? report.titleEn || report.title : report.titleId || report.title;
}

function graduateUserReportDescription(report, language = "id") {
  return language === "en"
    ? report.descriptionEn || report.descriptionId
    : report.descriptionId || report.descriptionEn;
}

function graduateUserReportLevel(report, language = "id") {
  return language === "en" ? report.levelEn || report.level : report.level || report.levelEn;
}

function findGraduateUserReport(question) {
  const docs = graduateUserSatisfaction.reports || [];
  const text = normalize(question);
  const requestedYear = text.match(/20\d{2}/)?.[0];
  if (requestedYear) {
    const byYear = docs.find((doc) => String(doc.year) === requestedYear);
    if (byYear) return byYear;
  }

  if (/prodi|program/.test(text)) {
    const byProgram = docs.find((doc) => normalize(doc.level).includes("prodi") || normalize(doc.levelEn).includes("program"));
    if (byProgram) return byProgram;
  }

  if (/fakultas|faculty|fmipa/.test(text)) {
    const byFaculty = docs.find((doc) => normalize(doc.level).includes("fakultas") || normalize(doc.levelEn).includes("faculty"));
    if (byFaculty) return byFaculty;
  }

  return null;
}

function graduateUserSatisfactionAnswer(question, hits = [], language = "id") {
  const text = normalize(question);
  const asksGraduateUser = /kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("graduate-user-satisfaction-"));
  if (!asksGraduateUser) return null;

  const selected = findGraduateUserReport(question);
  const reports = selected ? [selected] : (graduateUserSatisfaction.reports || []);
  if (!reports.length) return null;

  const answer = reports
    .map((report) => {
      if (language === "en") {
        return [
          `${graduateUserReportTitle(report, language)}: ${graduateUserReportDescription(report, language)}`,
          `Level: ${graduateUserReportLevel(report, language)}.`,
          `Year: ${report.year}.`,
          `Format: ${report.format || "PDF"}${report.pages ? `, ${report.pages} pages` : ""}.`,
          `Report: ${report.href}`
        ].join("\n");
      }
      return [
        `${graduateUserReportTitle(report, language)}: ${graduateUserReportDescription(report, language)}`,
        `Level: ${graduateUserReportLevel(report, language)}.`,
        `Tahun: ${report.year}.`,
        `Format: ${report.format || "PDF"}${report.pages ? `, ${report.pages} halaman` : ""}.`,
        `Laporan: ${report.href}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: graduateUserReportTitle(report, language), url: report.href })),
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
  const rawTitle = language === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
  return language === "en"
    ? String(rawTitle).replace(/^Learning Evaluation/i, "PBM-Lecturer Evaluation")
    : String(rawTitle).replace(/^Evaluasi PBM/i, "Evaluasi PBM-Dosen");
}

function pbmEvaluationDescription(doc, language = "id") {
  const rawDescription = language === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
  return language === "en"
    ? String(rawDescription).replace(/^Learning evaluation document/i, "PBM-Lecturer Evaluation document")
    : String(rawDescription).replace(/^Dokumen evaluasi pembelajaran/i, "Dokumen Evaluasi PBM-Dosen");
}

function lectureEvaluationTitle(doc, language = "id") {
  return language === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function lectureEvaluationDescription(doc, language = "id") {
  return language === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function rpsDocTitle(doc, language = "id") {
  return language === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function rpsDocDescription(doc, language = "id") {
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

function findRpsDoc(question, hits = []) {
  const docs = rpsDocs.documents || [];
  const text = normalize(question);

  for (const doc of docs) {
    const titles = [doc.courseTitle, doc.title, doc.courseTitleEn, doc.titleEn].map(normalize).filter(Boolean);
    if (titles.some((title) => title && text.includes(title))) return doc;
  }

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("rps-doc-")) continue;
    const id = String(hit.id).replace(/^rps-doc-/, "");
    const doc = docs.find((item) => item.id === id || normalize(item.title) === normalize(hit.title));
    if (doc) return doc;
  }

  const queryTokens = tokenize(question).filter((token) => !genericQueryTerms.has(token));
  if (!queryTokens.length) return null;

  const scored = docs
    .map((doc) => {
      const metadata = normalize([doc.courseTitle, doc.title, doc.courseTitleEn, doc.code, doc.group].join(" "));
      const score = queryTokens.reduce((sum, token) => sum + (hasWholeToken(metadata, token) ? 1 : 0), 0);
      return { doc, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored[0]?.score >= 2 ? scored[0].doc : null;
}

function findLectureEvaluation(question, hits = []) {
  const docs = lectureEvaluations.documents || [];
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

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("lecture-evaluation-")) continue;
    const id = String(hit.id).replace(/^lecture-evaluation-/, "");
    const doc = docs.find((item) => item.id === id || normalize(item.title) === normalize(hit.title));
    if (doc) return doc;
  }

  return docs[0] || null;
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

function rpsDocAnswer(question, hits = [], language = "id") {
  const text = normalize(question);
  const asksRpsDoc = /rps|rencana pembelajaran semester|course plan|semester learning plan|buka rps|download rps|unduh rps/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("rps-doc-"));
  if (!asksRpsDoc) return null;

  const selected = findRpsDoc(question, hits);
  const group = /pilihan|elective/.test(text) ? "Pilihan" : (/wajib|required/.test(text) ? "Wajib" : "");
  const docs = selected
    ? [selected]
    : (rpsDocs.documents || []).filter((doc) => !group || doc.group === group);
  if (!docs.length) return null;

  if (selected) {
    const answer = language === "en"
      ? [
        `${rpsDocTitle(selected, language)}: ${rpsDocDescription(selected, language)}`,
        `Course group: ${selected.groupEn || selected.group}.`,
        `Credits: ${selected.credits || "-"}.`,
        selected.code ? `Course code: ${selected.code}.` : "",
        `File size: ${formatFileSize(selected.sizeKb)}.`,
        `PDF: ${selected.href}`
      ].filter(Boolean).join("\n")
      : [
        `${rpsDocTitle(selected, language)}: ${rpsDocDescription(selected, language)}`,
        `Kelompok mata kuliah: ${selected.group}.`,
        `SKS: ${selected.credits || "-"}.`,
        selected.code ? `Kode mata kuliah: ${selected.code}.` : "",
        `Ukuran file: ${formatFileSize(selected.sizeKb)}.`,
        `PDF: ${selected.href}`
      ].filter(Boolean).join("\n");

    return {
      answer,
      sources: [{ title: rpsDocTitle(selected, language), url: selected.href }],
      mode: "Knowledge base server"
    };
  }

  const label = group || (language === "en" ? "all groups" : "semua kelompok");
  const list = docs
    .slice(0, 28)
    .map((doc, index) => `${index + 1}. ${language === "en" ? doc.courseTitleEn || doc.courseTitle : doc.courseTitle} (${language === "en" ? doc.groupEn || doc.group : doc.group}, ${doc.credits || "-"} SKS) - ${doc.href}`)
    .join("\n");

  return {
    answer: language === "en"
      ? `There are ${docs.length} RPS 2026 documents for ${label}. They are separated into required and elective courses on the website.\n\n${list}`
      : `Tersedia ${docs.length} dokumen RPS 2026 untuk ${label}. Di website, RPS dipisahkan antara mata kuliah wajib dan pilihan.\n\n${list}`,
    sources: docs.slice(0, 12).map((doc) => ({ title: rpsDocTitle(doc, language), url: doc.href })),
    mode: "Knowledge base server"
  };
}

function isS3Question(question, hits = []) {
  const text = normalize(question);
  return /s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("s3-"));
}

function s3RpsAlias(doc) {
  const title = normalize(doc.courseTitle);
  const aliases = [title, normalize(doc.title), normalize(doc.titleEn), normalize(doc.courseTitleEn)];
  if (/seminar usulan riset/.test(title)) aliases.push("seminar usulan riset", "sur");
  if (/penelaahan naskah disertasi 1/.test(title)) aliases.push("penelaahan naskah disertasi 1", "pnd 1", "pnd1");
  if (/penelaahan naskah disertasi 2/.test(title)) aliases.push("penelaahan naskah disertasi 2", "pnd 2", "pnd2");
  if (/ujian naskah disertasi/.test(title)) aliases.push("ujian naskah disertasi", "und");
  if (/sidang promosi doktor/.test(title)) aliases.push("sidang promosi doktor", "spd");
  if (/diseminasi nasional/.test(title)) aliases.push("diseminasi nasional", "dn");
  if (/diseminasi internasional/.test(title)) aliases.push("diseminasi internasional", "di");
  return aliases.filter(Boolean);
}

function findS3RpsDoc(question, hits = []) {
  const docs = s3Site.rps?.documents || [];
  const text = normalize(question);
  const directMatch = docs.find((doc) => s3RpsAlias(doc).some((alias) => alias && text.includes(alias)));
  if (directMatch) return directMatch;

  const hitDoc = hits.find((hit) => String(hit.id || "").startsWith("s3-rps-doc-"));
  if (hitDoc) {
    const href = hitDoc.sourceUrl || "";
    const title = normalize(hitDoc.title || hitDoc.sourceTitle || "");
    const match = docs.find((doc) => doc.href === href || normalize(doc.title) === title || normalize(doc.courseTitle) === title);
    if (match) return match;
  }
  return null;
}

function s3RpsGroupFromQuestion(question) {
  const text = normalize(question);
  if (/fondasi|metodologi|filsafat|riset dasar|literatur|personal/.test(text)) return "Fondasi & Metodologi";
  if (/disertasi|proposal|sur|pnd|und|spd|promosi/.test(text)) return "Riset & Disertasi";
  if (/diseminasi|rekognisi|publikasi|nasional|internasional|dn|di/.test(text)) return "Diseminasi & Rekognisi";
  return "";
}

function s3Answer(question, hits = [], language = "id") {
  if (!isS3Question(question, hits)) return null;
  const text = normalize(question);
  const docs = s3Site.documents || [];
  const sources = docs.slice(0, 3).map((doc) => ({ title: doc.title, url: doc.href }));
  const asksRps = /rps|rencana pembelajaran semester|course plan|semester learning plan|buka|download|unduh|sur|pnd|und|spd|diseminasi/.test(text);

  if (asksRps) {
    const selected = findS3RpsDoc(question, hits);
    const group = s3RpsGroupFromQuestion(question);
    const rpsDocs = selected
      ? [selected]
      : (s3Site.rps?.documents || []).filter((doc) => !group || doc.group === group);
    if (rpsDocs.length) {
      if (selected) {
        const answer = language === "en"
          ? [
            `${selected.titleEn || selected.title}: ${selected.description}`,
            `Group: ${selected.groupEn || selected.group}.`,
            `Credits: ${selected.credits || "-"}.`,
            `File size: ${formatFileSize(selected.sizeKb)}.`,
            `PDF: ${selected.href}`
          ].join("\n")
          : [
            `${selected.title}: ${selected.description}`,
            `Kelompok: ${selected.group}.`,
            `SKS: ${selected.credits || "-"}.`,
            `Ukuran file: ${formatFileSize(selected.sizeKb)}.`,
            `PDF: ${selected.href}`
          ].join("\n");
        return {
          answer,
          sources: [{ title: selected.title, url: selected.href }],
          mode: "Knowledge base server"
        };
      }

      const list = rpsDocs
        .slice(0, 20)
        .map((doc, index) => `${index + 1}. ${language === "en" ? doc.courseTitleEn || doc.courseTitle : doc.courseTitle} (${doc.group}, ${doc.credits || "-"} SKS) - ${doc.href}`)
        .join("\n");
      return {
        answer: language === "en"
          ? `The S3 Statistics site contains ${rpsDocs.length} doctoral RPS documents${group ? ` in ${group}` : ""}.\n\n${list}`
          : `Web S3 Statistika memuat ${rpsDocs.length} dokumen RPS doktoral${group ? ` pada kelompok ${group}` : ""}.\n\n${list}`,
        sources: rpsDocs.slice(0, 8).map((doc) => ({ title: doc.title, url: doc.href })),
        mode: "Knowledge base server"
      };
    }
  }

  if (/dokumen|kurikulum|akreditasi|urgensi|pdf|docx|file/.test(text)) {
    const list = docs
      .map((doc, index) => `${index + 1}. ${doc.title} - ${doc.href}`)
      .join("\n");
    return {
      answer: language === "en"
        ? `The S3 Statistics academic documents available on the site are:\n\n${list}`
        : `Dokumen akademik S3 Statistika yang tersedia di website:\n\n${list}`,
      sources,
      mode: "Knowledge base server"
    };
  }

  if (/visi/.test(text) && !/misi/.test(text)) {
    return {
      answer: `Visi Program Studi Doktor Statistika:\n\n${s3Site.vision}`,
      sources,
      mode: "Knowledge base server"
    };
  }

  if (/misi/.test(text) && !/visi/.test(text)) {
    return {
      answer: `Misi Program Studi Doktor Statistika:\n\n${numberedList(s3Site.missions || [], 10)}`,
      sources,
      mode: "Knowledge base server"
    };
  }

  if (/visi/.test(text) && /misi/.test(text)) {
    return {
      answer: [
        "Visi Program Studi Doktor Statistika:",
        s3Site.vision,
        "",
        "Misi:",
        numberedList(s3Site.missions || [], 10)
      ].join("\n"),
      sources,
      mode: "Knowledge base server"
    };
  }

  if (/tujuan|objective/.test(text)) {
    return {
      answer: `Tujuan Program Studi Doktor Statistika:\n\n${numberedList(s3Site.objectives || [], 10)}`,
      sources,
      mode: "Knowledge base server"
    };
  }

  if (/profil|lulusan|karir|karier|pekerjaan|graduate profile/.test(text)) {
    const list = (s3Site.graduateProfiles || [])
      .map((profile, index) => `${index + 1}. ${profile.title}: ${profile.description} Kompetensi utama: ${profile.competencies}`)
      .join("\n");
    return {
      answer: `Profil lulusan Program Studi Doktor Statistika:\n\n${list}`,
      sources,
      mode: "Knowledge base server"
    };
  }

  if (/cpl|capaian|learning outcome|outcome/.test(text)) {
    const list = (s3Site.cpl || [])
      .map((item) => `${item.code} - ${item.domain}: ${item.text}`)
      .join("\n");
    return {
      answer: `Capaian Pembelajaran Lulusan Program Studi Doktor Statistika:\n\n${list}`,
      sources,
      mode: "Knowledge base server"
    };
  }

  const structure = (s3Site.program?.structure || [])
    .map((item) => `${item.label}: ${item.credits} SKS`)
    .join("; ");
  return {
    answer: [
      "Web S3 Statistika memuat informasi Program Doktor Statistika FMIPA Unpad.",
      `Beban studi: ${s3Site.program?.studyLoad || "54 SKS"}. Penuh waktu: ${s3Site.program?.fullTime || "6 semester"}. Paruh waktu: ${s3Site.program?.partTime || "8 semester"}.`,
      `Struktur: ${structure}.`,
      `RPS S3 tersedia: ${s3Site.rps?.total || s3Site.rps?.documents?.length || 0} dokumen.`
    ].join("\n"),
    sources,
    mode: "Knowledge base server"
  };
}

function lectureEvaluationAnswer(question, hits = [], language = "id") {
  const text = normalize(question);
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|course delivery evaluation|course evaluation|student monitoring/.test(text);
  if (!asksLectureEvaluation) return null;

  const selected = findLectureEvaluation(question, hits);
  const docs = selected ? [selected] : (lectureEvaluations.documents || []);
  if (!docs.length) return null;

  const answer = docs
    .map((doc) => {
      if (language === "en") {
        return [
          `${lectureEvaluationTitle(doc, language)}: ${lectureEvaluationDescription(doc, language)}`,
          `Purpose: session-by-session monitoring from session ${doc.sessions || "1-16"}.`,
          `This is different from PBM-Lecturer Evaluation conducted at the end of the semester.`,
          `HTML report: ${doc.href}`,
          `Student monitoring form: ${doc.monitoringUrl || lectureEvaluations.monitoringUrl || ""}`
        ].join("\n");
      }
      return [
        `${lectureEvaluationTitle(doc, language)}: ${lectureEvaluationDescription(doc, language)}`,
        `Tujuan: monitoring perkuliahan per sesi/pertemuan, sesi ${doc.sessions || "1-16"}.`,
        `Ini berbeda dari Evaluasi PBM-Dosen yang dilakukan pada akhir semester.`,
        `Laporan HTML: ${doc.href}`,
        `Form monitoring mahasiswa: ${doc.monitoringUrl || lectureEvaluations.monitoringUrl || ""}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: docs.map((doc) => ({ title: lectureEvaluationTitle(doc, language), url: doc.href })),
    mode: "Knowledge base server"
  };
}

function pbmEvaluationAnswer(question, hits = [], language = "id") {
  const text = normalize(question);
  const asksPbmEvaluation = /evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
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
  const asksGraduateUser = /kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna/.test(text);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(text);
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|course delivery evaluation|course evaluation|student monitoring/.test(text);
  const asksPbmEvaluation = /evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
  const asksS3 = /s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional/.test(text);
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
  if (asksGraduateUser) return null;
  if (asksCurriculumDoc) return null;
  if (asksLectureEvaluation) return null;
  if (asksPbmEvaluation) return null;
  if (asksS3) return null;
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

function lamsamaReportTitle(report, language = "id") {
  return language === "en" ? report.titleEn || report.title : report.titleId || report.title;
}

function lamsamaReportSequenceLabel(report, language = "id") {
  if (report.sequenceLabelId || report.sequenceLabelEn) {
    return language === "en"
      ? report.sequenceLabelEn || report.sequenceLabelId
      : report.sequenceLabelId || report.sequenceLabelEn;
  }
  return language === "en" ? `Year ${report.sequence || "-"}` : `tahun ke-${report.sequence || "-"}`;
}

function lamsamaAnswer(question, language = "id") {
  const text = normalize(question);
  if (!/lamsama|akreditasi lamsama|laporan tahunan akreditasi|hasil asesmen|asesmen lamsama|annual accreditation report|assessment result/.test(text)) return null;

  const allReports = lamsamaReports.reports || [];
  const requestedYear = Number(text.match(/20\d{2}/)?.[0]);
  const reports = requestedYear
    ? allReports.filter((report) => Number(report.year) === requestedYear)
    : allReports;
  if (!reports.length) return null;

  const answer = language === "en"
    ? [
        "Available LAMSAMA accreditation documents:",
        "",
        ...reports.map((report) => `${report.year} (${lamsamaReportSequenceLabel(report, language)}): ${lamsamaReportTitle(report, language)}. ${report.pages || "-"} pages, ${formatFileSize(report.sizeKb)}. PDF: ${report.href}`),
        "",
        `Site assessment date: ${lamsamaReports.assessmentDate || "25-26 November 2022"}.`
      ].join("\n")
    : [
        "Dokumen akreditasi LAMSAMA yang tersedia:",
        "",
        ...reports.map((report) => `${report.year} (${lamsamaReportSequenceLabel(report, language)}): ${lamsamaReportTitle(report, language)}. ${report.pages || "-"} halaman, ${formatFileSize(report.sizeKb)}. PDF: ${report.href}`),
        "",
        `Tanggal asesmen lapangan: ${lamsamaReports.assessmentDate || "25-26 November 2022"}.`
      ].join("\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: lamsamaReportTitle(report, language), url: report.href })),
    mode: "Knowledge base server"
  };
}

function scholarshipAnswer(question, language = "id") {
  const text = normalize(question);
  if (!/beasiswa|scholarship|lpdp|knb|brin|unpad glow|visiting grant|asean scholarship|mobility grant/.test(text)) return null;

  const allScholarships = scholarships.scholarships || [];
  const selected = allScholarships.find((item) => {
    const candidates = [item.id, item.title, item.titleId, item.titleEn].map(normalize).filter(Boolean);
    return candidates.some((candidate) => candidate.length >= 3 && text.includes(candidate));
  });
  const available = selected ? [selected] : allScholarships;
  if (!available.length) return null;

  const itemTitle = (item) => language === "en" ? item.titleEn || item.title : item.titleId || item.title;
  const itemCategory = (item) => language === "en" ? item.categoryEn || item.categoryId : item.categoryId || item.categoryEn;
  const itemAudience = (item) => language === "en" ? item.audienceEn || item.audienceId : item.audienceId || item.audienceEn;
  const itemDescription = (item) => language === "en" ? item.descriptionEn || item.descriptionId : item.descriptionId || item.descriptionEn;
  const answer = language === "en"
    ? [
        "Scholarship and mobility opportunities:",
        "",
        ...available.map((item) => `${itemTitle(item)} - ${itemCategory(item)}. Audience: ${itemAudience(item)}. ${itemDescription(item)} Official website: ${item.url}`)
      ].join("\n")
    : [
        "Peluang beasiswa dan mobilitas yang tersedia:",
        "",
        ...available.map((item) => `${itemTitle(item)} - ${itemCategory(item)}. Sasaran: ${itemAudience(item)}. ${itemDescription(item)} Situs resmi: ${item.url}`)
      ].join("\n");

  return {
    answer,
    sources: available.map((item) => ({ title: itemTitle(item), url: item.url })),
    mode: "Knowledge base server"
  };
}

function academicGuideAnswer(question, language = "id") {
  const text = normalize(question);
  if (!/panduan akademik|dokumen akademik|sop akademik|academic guide|academic document|academic sop/.test(text)) return null;

  const href = "%40SOP/DOKUMEN%20AKADEMIK%20S2.pdf";
  const answer = language === "en"
    ? [
        "The S2 Academic Guide is available as a PDF document.",
        "Document: S2 Academic Document.",
        "Pages: 54 pages.",
        "File size: 9.7 MB.",
        `PDF: ${href}`
      ].join("\n")
    : [
        "Panduan Akademik S2 tersedia sebagai dokumen PDF.",
        "Dokumen: Dokumen Akademik S2.",
        "Jumlah halaman: 54 halaman.",
        "Ukuran file: 9.7 MB.",
        `PDF: ${href}`
      ].join("\n");

  return {
    answer,
    sources: [{ title: language === "en" ? "S2 Academic Document" : "Dokumen Akademik S2", url: href }],
    mode: "Knowledge base server"
  };
}

function localAnswer(question, language = "id") {
  const directScholarship = scholarshipAnswer(question, language);
  if (directScholarship) return directScholarship;
  const directLamsama = lamsamaAnswer(question, language);
  if (directLamsama) return directLamsama;
  const directAcademicGuide = academicGuideAnswer(question, language);
  if (directAcademicGuide) return directAcademicGuide;

  const capabilities = capabilityAnswer(question, language);
  if (capabilities) return capabilities;

  const fact = matchFact(question);
  const hits = retrieve(question, 5);
  const structuredLectureEvaluation = lectureEvaluationAnswer(question, hits, language);
  const structuredPbmEvaluation = pbmEvaluationAnswer(question, hits, language);
  const structuredS3 = s3Answer(question, hits, language);
  const structuredRpsDoc = rpsDocAnswer(question, hits, language);
  const structuredSyllabus = syllabusAnswer(question, hits);
  const structuredMaterial = materialAnswer(question, hits);
  const structuredGraduateUser = graduateUserSatisfactionAnswer(question, hits, language);
  const structuredTracerStudy = tracerStudyAnswer(question, hits);
  const structuredCurriculumDoc = curriculumDocAnswer(question, hits, language);
  const structuredThesisGuide = thesisGuideAnswer(question);

  if (structuredLectureEvaluation) return structuredLectureEvaluation;
  if (structuredPbmEvaluation) return structuredPbmEvaluation;
  if (structuredGraduateUser) return structuredGraduateUser;
  if (structuredS3) return structuredS3;
  if (structuredRpsDoc) return structuredRpsDoc;
  if (structuredSyllabus) return structuredSyllabus;
  if (structuredMaterial) return structuredMaterial;
  if (structuredTracerStudy) return structuredTracerStudy;
  if (structuredCurriculumDoc) return structuredCurriculumDoc;
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
        ? "I have not found that information in the program knowledge base. I can answer the curriculum, syllabi, RPS/course plan PDFs, HTML learning materials, academic guides, thesis guides, graduate data, tracer studies, graduate user satisfaction reports, curriculum documents, course delivery evaluations, PBM-Lecturer Evaluation, fees, and admissions that have been indexed. Free-form answers outside this knowledge base require enabling a generative AI API on the server."
        : "Saya belum menemukan informasi tersebut dalam knowledge base prodi. Saat ini saya bisa menjawab kurikulum, silabus, PDF RPS, materi HTML, panduan akademik, panduan tesis, data lulusan, tracer study, laporan kepuasan pengguna lulusan, dokumen kurikulum, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM-Dosen, biaya, dan pendaftaran yang sudah terindeks. Jawaban bebas di luar knowledge base memerlukan API AI generatif yang aktif di server.",
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
        : hits[0]?.id?.startsWith("s3-")
          ? "Saya menemukan informasi Web S3 Statistika yang relevan:"
        : hits[0]?.id?.startsWith("tracer-study-")
          ? "Saya menemukan laporan tracer study yang relevan:"
          : hits[0]?.id?.startsWith("graduate-user-satisfaction-")
            ? "Saya menemukan laporan kepuasan pengguna lulusan yang relevan:"
            : hits[0]?.id?.startsWith("special-moment-")
              ? "Saya menemukan galeri Special Moment yang relevan:"
              : hits[0]?.id?.startsWith("curriculum-doc-")
                ? "Saya menemukan dokumen kurikulum yang relevan:"
                : hits[0]?.id?.startsWith("lecture-evaluation-")
                  ? "Saya menemukan laporan Evaluasi Pelaksanaan Perkuliahan yang relevan:"
                  : hits[0]?.id?.startsWith("pbm-evaluation-")
                    ? "Saya menemukan dokumen Evaluasi PBM-Dosen yang relevan:"
                    : hits[0]?.id?.startsWith("rps-doc-")
                      ? "Saya menemukan dokumen RPS yang relevan:"
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
    graduateUserSatisfaction: graduateUserSatisfaction.total || graduateUserSatisfaction.reports?.length || 0,
    specialMoments: specialMoments.totalPhotos || 0,
    specialMomentCohorts: specialMoments.totalCohorts || specialMoments.cohorts?.length || 0,
    curriculumDocs: curriculumDocs.total || curriculumDocs.documents?.length || 0,
    lamsamaReports: lamsamaReports.total || lamsamaReports.reports?.length || 0,
    scholarships: scholarships.total || scholarships.scholarships?.length || 0,
    lectureEvaluations: lectureEvaluations.total || lectureEvaluations.documents?.length || 0,
    pbmEvaluations: pbmEvaluations.total || pbmEvaluations.documents?.length || 0,
    rpsDocs: rpsDocs.total || rpsDocs.documents?.length || 0,
    s3RpsDocs: s3Site.rps?.total || s3Site.rps?.documents?.length || 0,
    s3Profiles: s3Site.graduateProfiles?.length || 0,
    s3Cpl: s3Site.cpl?.length || 0,
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

app.get("/api/graduate-user-satisfaction", (_req, res) => {
  res.json(graduateUserSatisfaction);
});

app.get("/api/special-moments", (_req, res) => {
  res.json(specialMoments);
});

app.get("/api/curriculum-docs", (_req, res) => {
  res.json(curriculumDocs);
});

app.get("/api/lamsama-reports", (_req, res) => {
  res.json(lamsamaReports);
});

app.get("/api/scholarships", (_req, res) => {
  res.json(scholarships);
});

app.get("/api/lecture-evaluations", (_req, res) => {
  res.json(lectureEvaluations);
});

app.get("/api/pbm-evaluations", (_req, res) => {
  res.json(pbmEvaluations);
});

app.get("/api/rps-docs", (_req, res) => {
  res.json(rpsDocs);
});

app.get("/api/s3", (_req, res) => {
  res.json(s3Site);
});

app.post("/api/chat", async (req, res) => {
  const question = String(req.body?.question || "").trim();
  const language = req.body?.language === "en" ? "en" : "id";
  if (!question) return res.status(400).json({ error: "Pertanyaan tidak boleh kosong." });

  const indexedDirectAnswer = scholarshipAnswer(question, language)
    || lamsamaAnswer(question, language)
    || academicGuideAnswer(question, language);
  if (indexedDirectAnswer) return res.json(indexedDirectAnswer);

  const capabilities = capabilityAnswer(question, language);
  if (capabilities) return res.json(capabilities);

  const fact = matchFact(question);
  const hits = retrieve(question, 8);
  const directAnswer = lectureEvaluationAnswer(question, hits, language)
    || pbmEvaluationAnswer(question, hits, language)
    || graduateUserSatisfactionAnswer(question, hits, language)
    || s3Answer(question, hits, language)
    || rpsDocAnswer(question, hits, language)
    || syllabusAnswer(question, hits)
    || materialAnswer(question, hits)
    || tracerStudyAnswer(question, hits)
    || curriculumDocAnswer(question, hits, language)
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
        "Jika pengguna menanyakan RPS, arahkan ke PDF RPS yang relevan. Jika pengguna menanyakan silabus, susun jawaban dari deskripsi, bahan kajian, dan referensi yang tersedia.",
        "Jika pengguna menanyakan S3 Statistika, Program Doktor, CPL doktoral, profil lulusan doktor, atau RPS S3, jawab berdasarkan konteks Web S3 Statistika.",
        "Jika pengguna menanyakan panduan akademik atau SOP akademik, arahkan ke Dokumen Akademik S2 di folder @SOP. Jika pengguna menanyakan panduan tesis, format penulisan tesis, SUR, SKR, atau SAM, jawab berdasarkan konteks Panduan Penulisan Tesis dan Panduan Pelaksanaan Tesis.",
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
