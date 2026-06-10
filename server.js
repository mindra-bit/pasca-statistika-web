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
const stopwords = new Set("yang dan untuk dengan pada dalam sebagai dari ke di ini itu adalah atau serta oleh agar akan dapat karena maka jika sudah telah juga yaitu bagi antara menjadi memiliki secara program studi magister statistika terapan unpad fmipa universitas padjadjaran kurikulum dokumen tahun s2 apa saja berapa".split(" "));
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
  if (/(riset|tesis|sur|skr|publikasi)/.test(text)) {
    expansions.push("seminar usulan riset seminar kemajuan riset publikasi sidang akhir magister tesis");
  }
  if (/(silabus|sylabus|rps|materi|referensi|bahan kajian)/.test(text)) {
    expansions.push("silabus rps deskripsi mata kuliah bahan kajian topik perkuliahan referensi");
  }
  if (/(alumni|lulusan|judul tesis|tesis lulusan|pembimbing)/.test(text)) {
    expansions.push("alumni lulusan tesis judul tesis pembimbing tahun lulus riset lulusan");
  }

  return [question, ...expansions].join(" ");
}

function scoreChunk(question, chunk) {
  const normalizedQuestion = normalize(question);
  const tokens = [...new Set(tokenize(expandQuestion(question)))];
  const originalTokens = tokenize(question).filter((token) => !genericQueryTerms.has(token));
  const text = normalize(chunk.text);
  let score = chunk.id?.startsWith("manual") ? 2 : 0;
  const asksAlumni = /alumni|lulusan|judul tesis|tesis lulusan|data lulusan|pembimbing/.test(normalizedQuestion);

  if (asksAlumni && chunk.id?.startsWith("alumni-")) score += 140;
  if (asksAlumni && chunk.id?.startsWith("syllabus-")) score -= 80;

  for (const token of tokens) {
    if (text.includes(token)) score += 4;
    const matches = text.match(new RegExp(`\\b${token}\\b`, "g"));
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
      if (metadata.includes(token)) score += 20;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 55;
  }

  return score;
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

function syllabusAnswer(question, hits) {
  const text = normalize(question);
  const asksSyllabus = /silabus|sylabus|rps|materi kuliah|materi perkuliahan|referensi mata kuliah|topik kuliah|bahan kajian/.test(text);
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
      mode: "server retrieval"
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
    mode: "server retrieval"
  };
}

function matchFact(question) {
  const text = normalize(question);
  const asksBiaya = /biaya|bpp|ukt|ipi|bayar|tagihan/.test(text);
  const asksPendaftaran = /pendaftaran|daftar|pmb|admission|finalisasi|verifikasi/.test(text);
  const asksJadwal = /jadwal|tanggal|gelombang|ujian|wawancara|pengumuman|kapan/.test(text);
  const asksSyarat = /persyaratan|syarat|tka|tpa|tkbi|toefl|ielts|statement|purpose/.test(text);
  const asksDayaTampung = /daya tampung|kuota|kapasitas/.test(text);
  const asksSyllabus = /silabus|sylabus|rps|materi kuliah|materi perkuliahan|referensi mata kuliah|topik kuliah/.test(text);
  const asksAlumniData = /alumni|judul tesis|tesis lulusan|data lulusan|tahun lulus|pembimbing/.test(text);
  if (asksDayaTampung) return facts.dayaTampungSmup;
  if (asksBiaya && asksPendaftaran) return facts.smupAdministrasi;
  if (asksBiaya) return facts.biayaSmup;
  if (asksJadwal) return facts.jadwalSmup;
  if (asksPendaftaran) return facts.pendaftaranSmup;
  if (asksSyarat) return facts.persyaratanSmup;
  if (asksSyllabus) return null;
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

function localAnswer(question) {
  const fact = matchFact(question);
  const hits = retrieve(question, 5);
  const structuredSyllabus = syllabusAnswer(question, hits);

  if (structuredSyllabus) return structuredSyllabus;

  if (fact) {
    return {
      answer: fact.answer,
      sources: uniqueSources(
        fact.sources.length || fact === facts.administrasi
          ? fact.sources
          : hits.map(sourceFromHit)
      ),
      mode: "server retrieval"
    };
  }

  if (!hits.length) {
    return {
      answer: "Saya belum menemukan informasi tersebut dalam knowledge base kurikulum. Untuk jawaban resmi, tambahkan dokumen terkait ke folder data lalu indeks ulang knowledge base.",
      sources: [],
      mode: "server retrieval"
    };
  }

  const intro = hits[0]?.id?.startsWith("alumni-")
    ? "Saya menemukan data lulusan yang relevan:"
    : "Saya menemukan potongan knowledge base yang relevan:";
  const answer = [
    intro,
    "",
    ...hits.slice(0, 3).map((hit) => hitExcerpt(hit))
  ].join("\n");

  return {
    answer,
    sources: uniqueSources(hits.map(sourceFromHit)),
    mode: "server retrieval"
  };
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    chunks: chunks.length,
    syllabus: syllabus.length,
    alumni: alumni?.summary?.total || 0,
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

app.post("/api/chat", async (req, res) => {
  const question = String(req.body?.question || "").trim();
  if (!question) return res.status(400).json({ error: "Pertanyaan tidak boleh kosong." });

  const fact = matchFact(question);
  const hits = retrieve(question, 8);
  const sources = uniqueSources([
    ...(fact?.sources || []),
    ...hits.map(sourceFromHit)
  ]);

  if (fact === facts.administrasi || !client) {
    return res.json(localAnswer(question));
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
        "Gunakan bahasa Indonesia yang profesional, ringkas, dan sertakan rujukan halaman bila tersedia."
      ].join(" "),
      input: `Pertanyaan pengguna:\n${question}\n\nKonteks knowledge base:\n${contextParts.join("\n\n") || "Tidak ada konteks yang ditemukan."}`
    });

    res.json({
      answer: response.output_text,
      sources,
      mode: "OpenAI API + retrieval"
    });
  } catch (error) {
    const fallback = localAnswer(question);
    res.json({
      ...fallback,
      mode: "fallback server retrieval",
      warning: error.message
    });
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Website berjalan di http://127.0.0.1:${port}`);
});
