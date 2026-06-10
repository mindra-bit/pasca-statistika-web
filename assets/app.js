const COURSES = [
  ["Statistika Inferensial", "Inferential Statistics", "3", "Wajib"],
  ["Komputasi Statistik dan Optimasi", "Statistical Computing and Optimization", "3", "Wajib"],
  ["Analisis Multivariat Tingkat Lanjut", "Advanced Multivariate Analysis", "3", "Wajib"],
  ["Analisis Regresi Tingkat Lanjut", "Advanced Regression Analysis", "3", "Wajib"],
  ["Proses Stokastik Tingkat Lanjut", "Advanced Stochastic Processes", "3", "Wajib"],
  ["Analisis Deret Waktu Tingkat Lanjut", "Advanced Time Series Analysis", "3", "Wajib"],
  ["Tinjauan Literatur Sistematis", "Systematic Literature Review", "6", "Keterampilan Riset"],
  ["Asistensi Perkuliahan", "Teaching Assistance", "3", "Keterampilan Riset"],
  ["Statistika Nonparametrik dan Pemodelan Fleksibel", "Nonparametric Statistics and Flexible Modeling", "3", "Pilihan"],
  ["Penambangan Data dan Kecerdasan Buatan", "Data Mining and Artificial Intelligence", "3", "Wajib"],
  ["Pemodelan Persamaan Struktural", "Structural Equation Modeling", "3", "Pilihan"],
  ["Analisis Spasial", "Spatial Analysis", "3", "Pilihan"],
  ["Analisis Multilevel dan Longitudinal", "Multilevel and Longitudinal Analysis", "3", "Pilihan"],
  ["Model Linear Generalisasi", "Generalized Linear Models", "3", "Pilihan"],
  ["Matematika Keuangan", "Financial Mathematics", "3", "Pilihan"],
  ["Desain Eksperimen", "Experimental Design", "3", "Pilihan"],
  ["Teori Antrian", "Queueing Theory", "3", "Pilihan"],
  ["Matematika Aktuaria 1", "Actuarial Mathematics I", "3", "Pilihan"],
  ["Matematika Aktuaria 2", "Actuarial Mathematics II", "3", "Pilihan"],
  ["Analisis Survival", "Survival Analysis", "3", "Pilihan"],
  ["Teori Risiko", "Risk Theory", "3", "Pilihan"],
  ["Epidemiologi", "Epidemiology", "3", "Pilihan"],
  ["Pembelajaran Mesin", "Machine Learning", "3", "Pilihan"],
  ["Analisis Citra", "Image Analysis", "3", "Pilihan"],
  ["Analisis Teks", "Text Analytics", "3", "Pilihan"],
  ["Basis Data", "Database", "3", "Pilihan"],
  ["Sampling Survey", "Sampling Survey", "3", "Pilihan"],
  ["Pembicara Seminar Nasional/Internasional", "National/International Seminar Speaker", "3", "Keterampilan Riset"],
  ["Seminar Usulan Riset (SUR)", "Research Proposal Seminar", "2", "Riset"],
  ["Seminar Kemajuan Riset (SKR)", "Research Progress Seminar", "4", "Riset"],
  ["Publikasi", "Publication", "6/9", "Publikasi"],
  ["Sidang Akhir Magister (Tesis)", "Master's Thesis Defense", "6", "Riset"]
];

const FACTS = {
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

const FALLBACK_KNOWLEDGE = [
  { id: "manual-2026-sks", page: 6, text: FACTS.sks.answer },
  { id: "manual-2026-visi", page: 2, text: FACTS.visi.answer },
  { id: "manual-2026-profil", page: 6, text: FACTS.profil.answer },
  { id: "manual-2026-bk", page: 12, text: FACTS.bahanKajian.answer },
  { id: "manual-2026-courses", page: 14, text: FACTS.mataKuliah.answer }
];

const STOPWORDS = new Set("yang dan untuk dengan pada dalam sebagai dari ke di ini itu adalah atau serta oleh agar akan dapat karena maka jika sudah telah juga yaitu bagi antara menjadi memiliki secara program studi magister statistika terapan unpad fmipa universitas padjadjaran kurikulum dokumen tahun s2 apa saja berapa".split(" "));
const GENERIC_QUERY_TERMS = new Set("silabus sylabus rps materi referensi deskripsi bahan kajian topik perkuliahan mata kuliah matakuliah course".split(" "));

let knowledge = FALLBACK_KNOWLEDGE;
let syllabus = [];
let alumniData = null;
let activeFilter = "Semua";
let serverChatAvailable = false;

const courseSearch = document.getElementById("courseSearch");
const courseRows = document.getElementById("courseRows");
const syllabusSearch = document.getElementById("syllabusSearch");
const syllabusRows = document.getElementById("syllabusRows");
const syllabusCount = document.getElementById("syllabusCount");
const alumniSearch = document.getElementById("alumniSearch");
const alumniRows = document.getElementById("alumniRows");
const alumniCount = document.getElementById("alumniCount");
const alumniYearBars = document.getElementById("alumniYearBars");
const alumniThemeList = document.getElementById("alumniThemeList");
const modeLabel = document.getElementById("modeLabel");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const questionInput = document.getElementById("questionInput");
const knowledgeCount = document.getElementById("knowledgeCount");

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));
}

function expandQuestion(question) {
  const normalized = normalize(question);
  const synonyms = [];

  if (/(sains data|data science|machine|pembelajaran mesin|ai|kecerdasan buatan|data mining|penambangan)/.test(normalized)) {
    synonyms.push("sains data machine learning pembelajaran mesin artificial intelligence penambangan data data mining");
  }
  if (/(biostatistik|kesehatan|epidemiologi|survival)/.test(normalized)) {
    synonyms.push("biostatistik epidemiologi analisis survival kesehatan");
  }
  if (/(aktuaria|risiko|keuangan|antrian)/.test(normalized)) {
    synonyms.push("aktuaria teori risiko matematika keuangan teori antrian");
  }
  if (/(riset|tesis|sur|skr|publikasi)/.test(normalized)) {
    synonyms.push("seminar usulan riset seminar kemajuan riset publikasi sidang akhir magister tesis");
  }
  if (/(silabus|sylabus|rps|materi|referensi|bahan kajian)/.test(normalized)) {
    synonyms.push("silabus rps deskripsi mata kuliah bahan kajian topik perkuliahan referensi");
  }
  if (/(alumni|lulusan|judul tesis|tesis lulusan|pembimbing)/.test(normalized)) {
    synonyms.push("alumni lulusan tesis judul tesis pembimbing tahun lulus riset lulusan");
  }

  return [question, ...synonyms].join(" ");
}

function scoreChunk(question, chunk) {
  const normalizedQuestion = normalize(question);
  const query = expandQuestion(question);
  const tokens = [...new Set(tokenize(query))];
  const originalTokens = tokenize(question).filter((token) => !GENERIC_QUERY_TERMS.has(token));
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
      const titleTokens = courseTitle.split(" ").filter((token) => token.length > 2 && !GENERIC_QUERY_TERMS.has(token));
      if (titleTokens.length && titleTokens.every((token) => originalTokens.includes(token))) score += 120;
    }
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (metadata.includes(token)) score += 20;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 55;
  }

  return score;
}

function retrieve(question, limit = 5) {
  return knowledge
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

function hitExcerpt(hit, length = 320) {
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

function numberedText(items = [], limit = 14) {
  return items
    .slice(0, limit)
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n");
}

function buildSyllabusAnswer(question, hits) {
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
        numberedText(entry.references, 10) || "Referensi belum tersedia dalam data silabus."
      ].join("\n\n"),
      sources,
      mode: "Local knowledge base"
    };
  }

  return {
    answer: [
      `Silabus ${entry.title} (${entry.code}, ${entry.credits || "-"} SKS, ${entry.group}).`,
      "",
      `Deskripsi: ${entry.description}`,
      "",
      "Bahan kajian:",
      numberedText(entry.topics),
      "",
      "Referensi:",
      numberedText(entry.references, 10) || "Referensi belum tersedia dalam data silabus."
    ].join("\n"),
    sources,
    mode: "Local knowledge base"
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
  if (asksDayaTampung) return FACTS.dayaTampungSmup;
  if (asksBiaya && asksPendaftaran) return FACTS.smupAdministrasi;
  if (asksBiaya) return FACTS.biayaSmup;
  if (asksJadwal) return FACTS.jadwalSmup;
  if (asksPendaftaran) return FACTS.pendaftaranSmup;
  if (asksSyarat) return FACTS.persyaratanSmup;
  if (asksSyllabus) return null;
  if (asksAlumniData && !/profil lulusan/.test(text)) return null;
  if (/rpl|rekognisi/.test(text)) return FACTS.rpl;
  if (/sks|jumlah kredit|beban studi/.test(text)) return FACTS.sks;
  if (/jalur|coursework|by research|berbasis riset|berbasis kuliah|rekognisi pembelajaran lampau/.test(text)) return FACTS.jalur;
  if (/visi/.test(text) && /misi/.test(text)) return FACTS.visiMisi;
  if (/visi/.test(text)) return FACTS.visi;
  if (/misi/.test(text)) return FACTS.misi;
  if (/profil|lulusan|karir|karier|pekerjaan|akademisi|peneliti|konsultan|praktisi/.test(text)) return FACTS.profil;
  if (/cpl|capaian/.test(text)) return FACTS.cpl;
  if (/bahan kajian|bk1|bk2|bk3|bk4|bk5|bk6|bk7|bk8/.test(text)) return FACTS.bahanKajian;
  if (/mata kuliah|matakuliah|machine|pembelajaran mesin|spasial|survival|sampling|basis data|sains data|data science|ai|artificial|image|teks|regresi|multivariat|epidemiologi|aktuaria|antrian/.test(text)) return FACTS.mataKuliah;
  if (/sejarah|sk dikti|berdiri|dibuka|izin/.test(text)) return FACTS.sejarah;
  return null;
}

function buildLocalAnswer(question) {
  const fact = matchFact(question);
  const hits = retrieve(question, 4);
  const structuredSyllabus = buildSyllabusAnswer(question, hits);

  if (structuredSyllabus) return structuredSyllabus;

  if (fact) {
    const sources = fact.sources.length || fact === FACTS.administrasi
      ? fact.sources
      : hits.map(sourceFromHit);
    return { answer: fact.answer, sources, mode: "Local knowledge base" };
  }

  if (!hits.length) {
    return {
      answer: "Saya belum menemukan informasi tersebut dalam knowledge base kurikulum. Untuk jawaban resmi, tambahkan dokumen terkait ke folder data lalu indeks ulang knowledge base.",
      sources: [],
      mode: "Local knowledge base"
    };
  }

  const excerpts = hits
    .slice(0, 3)
    .map((hit) => hitExcerpt(hit))
    .join("\n\n");

  const intro = hits[0]?.id?.startsWith("alumni-")
    ? "Saya menemukan data lulusan yang relevan:"
    : "Saya menemukan potongan knowledge base yang relevan:";

  return {
    answer: `${intro}\n\n${excerpts}`,
    sources: hits.map(sourceFromHit),
    mode: "Local knowledge base"
  };
}

function sourceHTML(sources = []) {
  if (!sources.length) return "";
  const unique = [];
  const seen = new Set();
  for (const source of sources) {
    const key = `${source.page ?? source.url ?? ""}-${source.title || source.source || ""}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(source);
    }
  }
  return `<div class="source-list">${unique
    .slice(0, 5)
    .map((source) => {
      const label = source.page
        ? `Hal. ${escapeHTML(source.page)}${source.title ? ` · ${escapeHTML(source.title)}` : ""}`
        : `${escapeHTML(source.title || source.source || "Sumber")}${source.updated ? ` · ${escapeHTML(source.updated)}` : ""}`;
      if (source.url) {
        return `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener">${label}</a>`;
      }
      return `<span>${label}</span>`;
    })
    .join("")}</div>`;
}

function addMessage(role, text, sources = [], meta = "") {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  const label = role === "user" ? "Anda" : "Asisten Prodi";
  message.innerHTML = `
    <strong>${label}</strong>
    <p>${escapeHTML(text).replace(/\n/g, "<br>")}</p>
    ${sourceHTML(sources)}
    ${meta ? `<small>${escapeHTML(meta)}</small>` : ""}
  `;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

async function ask(question) {
  addMessage("user", question);
  const pending = addMessage("bot", "Sedang mencari jawaban pada knowledge base kurikulum...");

  if (serverChatAvailable) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      if (response.ok) {
        const data = await response.json();
        pending.innerHTML = `
          <strong>Asisten Prodi</strong>
          <p>${escapeHTML(data.answer).replace(/\n/g, "<br>")}</p>
          ${sourceHTML(data.sources || [])}
          <small>Mode: ${escapeHTML(data.mode || "server")}</small>
        `;
        modeLabel.textContent = data.mode?.includes("API") ? "API + retrieval" : "Server retrieval";
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return;
      }
    } catch (error) {
      modeLabel.textContent = "Fallback lokal";
    }
  }

  const local = buildLocalAnswer(question);
  pending.innerHTML = `
    <strong>Asisten Prodi</strong>
    <p>${escapeHTML(local.answer).replace(/\n/g, "<br>")}</p>
    ${sourceHTML(local.sources)}
    <small>Mode: ${escapeHTML(local.mode)}</small>
  `;
  modeLabel.textContent = "Local retrieval";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderCourses() {
  const query = normalize(courseSearch.value);
  const rows = COURSES.filter((course) => {
    const matchesFilter = activeFilter === "Semua" || course[3] === activeFilter;
    const matchesQuery = !query || normalize(course.join(" ")).includes(query);
    return matchesFilter && matchesQuery;
  });

  if (!rows.length) {
    courseRows.innerHTML = '<tr class="empty-row"><td colspan="4">Tidak ada mata kuliah yang cocok.</td></tr>';
    return;
  }

  courseRows.innerHTML = rows
    .map((course) => `
      <tr>
        <td><strong>${escapeHTML(course[0])}</strong></td>
        <td>${escapeHTML(course[1])}</td>
        <td><strong>${escapeHTML(course[2])}</strong></td>
        <td><span class="badge">${escapeHTML(course[3])}</span></td>
      </tr>
    `)
    .join("");
}

function renderList(items, emptyText) {
  if (!items?.length) return `<p class="empty-note">${escapeHTML(emptyText)}</p>`;
  return `<ol>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol>`;
}

function renderSyllabus() {
  if (!syllabusRows) return;
  const query = normalize(syllabusSearch?.value || "");
  const rows = syllabus.filter((entry) => {
    const haystack = [
      entry.code,
      entry.title,
      entry.group,
      entry.description,
      ...(entry.topics || []),
      ...(entry.references || [])
    ].join(" ");
    return !query || normalize(haystack).includes(query);
  });

  if (syllabusCount) syllabusCount.textContent = String(rows.length);

  if (!rows.length) {
    syllabusRows.innerHTML = '<p class="empty-note">Silabus yang dicari belum ditemukan.</p>';
    return;
  }

  syllabusRows.innerHTML = rows
    .map((entry) => `
      <article class="syllabus-card">
        <div class="syllabus-card-head">
          <span class="badge">${escapeHTML(entry.group || "Mata Kuliah")}</span>
          <span>${escapeHTML(entry.credits || "-")} SKS</span>
        </div>
        <h3>${escapeHTML(entry.title)}</h3>
        <p class="syllabus-code">${escapeHTML(entry.code)}</p>
        <p>${escapeHTML(entry.description)}</p>
        <details>
          <summary>Bahan kajian dan referensi</summary>
          <div class="syllabus-detail">
            <h4>Bahan Kajian</h4>
            ${renderList(entry.topics, "Bahan kajian belum tersedia.")}
            <h4>Referensi</h4>
            ${renderList(entry.references, "Referensi belum tersedia.")}
          </div>
        </details>
      </article>
    `)
    .join("");
}

function renderAlumni() {
  if (!alumniRows || !alumniData) return;
  const records = alumniData.records || [];
  const summary = alumniData.summary || {};
  const query = normalize(alumniSearch?.value || "");
  const filtered = records.filter((record) => {
    const haystack = [
      record.nama,
      record.npm,
      record.judul,
      record.pembimbing1,
      record.pembimbing2,
      record.tahun_masuk,
      record.tahun_lulus,
      record.tema
    ].join(" ");
    return !query || normalize(haystack).includes(query);
  });

  if (alumniCount) alumniCount.textContent = String(filtered.length);

  if (alumniYearBars && summary.byYear) {
    const maxCount = Math.max(...Object.values(summary.byYear), 1);
    alumniYearBars.innerHTML = Object.entries(summary.byYear)
      .map(([year, count]) => `
        <div class="year-bar">
          <span>${escapeHTML(year)}</span>
          <div><i style="width: ${Math.max(8, (Number(count) / maxCount) * 100)}%"></i></div>
          <strong>${escapeHTML(count)}</strong>
        </div>
      `)
      .join("");
  }

  if (alumniThemeList && summary.themes) {
    alumniThemeList.innerHTML = summary.themes
      .slice(0, 6)
      .map((theme) => `
        <li>
          <span>${escapeHTML(theme.name)}</span>
          <strong>${escapeHTML(theme.count)}</strong>
        </li>
      `)
      .join("");
  }

  if (!filtered.length) {
    alumniRows.innerHTML = '<p class="empty-note">Data lulusan yang dicari belum ditemukan.</p>';
    return;
  }

  alumniRows.innerHTML = filtered
    .map((record) => `
      <article class="alumni-card">
        <div class="alumni-card-head">
          <span class="badge">${escapeHTML(record.tahun_lulus || "Tahun lulus")}</span>
          <span>${escapeHTML(record.tema || "Statistika Terapan")}</span>
        </div>
        <h3>${escapeHTML(record.nama)}</h3>
        <p class="syllabus-code">${escapeHTML(record.npm || "NPM tidak tersedia")}</p>
        <p>${escapeHTML(record.judul)}</p>
        <small>Pembimbing: ${escapeHTML([record.pembimbing1, record.pembimbing2].filter(Boolean).join(" dan ") || "Belum tersedia")}</small>
      </article>
    `)
    .join("");
}

async function loadAlumni() {
  try {
    const response = await fetch("data/alumni.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Data alumni tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.records?.length) throw new Error("Data alumni kosong.");
    alumniData = data;
  } catch (error) {
    alumniData = { records: [], summary: { total: 0, byYear: {}, themes: [] } };
  }
  renderAlumni();
}

async function loadSyllabus() {
  try {
    const response = await fetch("data/syllabus.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Silabus tidak dapat dimuat.");
    const entries = await response.json();
    if (!Array.isArray(entries) || !entries.length) throw new Error("Silabus kosong.");
    syllabus = entries;
  } catch (error) {
    syllabus = [];
  }
  renderSyllabus();
}

async function loadKnowledge() {
  try {
    const response = await fetch("data/knowledge_chunks.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Knowledge base tidak dapat dimuat.");
    const chunks = await response.json();
    if (!Array.isArray(chunks) || !chunks.length) throw new Error("Knowledge base kosong.");
    knowledge = chunks;
    knowledgeCount.textContent = String(chunks.length);
    if (location.protocol.startsWith("http")) {
      try {
        const health = await fetch("/api/health", { cache: "no-store" });
        serverChatAvailable = health.ok;
      } catch (error) {
        serverChatAvailable = false;
      }
    }
    modeLabel.textContent = serverChatAvailable ? "Server retrieval" : "Local static retrieval";
  } catch (error) {
    knowledge = FALLBACK_KNOWLEDGE;
    serverChatAvailable = false;
    knowledgeCount.textContent = String(FALLBACK_KNOWLEDGE.length);
    modeLabel.textContent = "Local fallback";
  }
}

document.querySelectorAll(".filter-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderCourses();
  });
});

document.querySelectorAll("[data-q]").forEach((button) => {
  button.addEventListener("click", () => ask(button.dataset.q));
});

courseSearch.addEventListener("input", renderCourses);
syllabusSearch?.addEventListener("input", renderSyllabus);
alumniSearch?.addEventListener("input", renderAlumni);

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;
  questionInput.value = "";
  ask(question);
});

renderCourses();
loadKnowledge();
loadSyllabus();
loadAlumni();
