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

const STOPWORDS = new Set("yang dan untuk dengan pada dalam sebagai dari ke di ini itu adalah atau serta oleh agar akan dapat karena maka jika sudah telah juga yaitu bagi antara menjadi memiliki secara program studi magister statistika terapan unpad fmipa universitas padjadjaran kurikulum dokumen tahun prodi pertanyaan jawaban jawab chatbot chatboot luar s2 apa saja berapa".split(" "));
const GENERIC_QUERY_TERMS = new Set("silabus sylabus rps materi referensi deskripsi bahan kajian topik perkuliahan mata kuliah matakuliah course".split(" "));

let knowledge = FALLBACK_KNOWLEDGE;
let syllabus = [];
let alumniData = null;
let materialsData = null;
let thesisGuidesData = null;
let tracerStudiesData = null;
let curriculumDocsData = null;
let pbmEvaluationsData = null;
let activeFilter = "Semua";
let serverChatAvailable = false;
let serverApiReady = false;

const COMMENT_INTEGRATION = {
  giscus: {
    repo: "mindra-bit/s2-statistika-terapan-web",
    repoId: "R_kgDOS0LQzg",
    category: "General",
    categoryId: "DIC_kwDOS0LQzs4C_B4p"
  }
};

const ANALYTICS_INTEGRATION = {
  goatCounterEndpoint: "https://s2statistika.goatcounter.com/count",
  cloudflareToken: ""
};

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
const materialSearch = document.getElementById("materialSearch");
const materialRows = document.getElementById("materialRows");
const materialCount = document.getElementById("materialCount");
const thesisGuideRows = document.getElementById("thesisGuideRows");
const thesisGuideCount = document.getElementById("thesisGuideCount");
const tracerStudyRows = document.getElementById("tracerStudyRows");
const tracerStudyCount = document.getElementById("tracerStudyCount");
const curriculumDocRows = document.getElementById("curriculumDocRows");
const curriculumDocCount = document.getElementById("curriculumDocCount");
const pbmEvaluationRows = document.getElementById("pbmEvaluationRows");
const pbmEvaluationCount = document.getElementById("pbmEvaluationCount");
const modeLabel = document.getElementById("modeLabel");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const questionInput = document.getElementById("questionInput");
const knowledgeCount = document.getElementById("knowledgeCount");
const goatTotalCount = document.getElementById("goatTotalCount");
const goatDashboardLink = document.getElementById("goatDashboardLink");

const I18N = {
  id: {
    topbarCampus: "FMIPA Universitas Padjadjaran",
    topbarCurriculum: "Kurikulum OBE 2026",
    navProfile: "Profil",
    navCurriculum: "Kurikulum",
    navDocs: "Dokumen",
    navPbmEvaluations: "Evaluasi",
    navGuide: "Panduan",
    navCourses: "Mata Kuliah",
    navMaterials: "Materi",
    navGraduates: "Lulusan",
    navTracer: "Tracer",
    navSyllabus: "Silabus",
    navComments: "Komentar",
    navChatbot: "Chatbot",
    navAsk: "Tanya Prodi",
    heroKicker: "Program Magister",
    heroLead: "Pendidikan magister 42 SKS berbasis statistika terapan, riset, komputasi, dan sains data untuk menjawab kebutuhan industri, pemerintahan, kesehatan, aktuaria, dan akademik.",
    heroAsk: "Tanya Chatbot",
    heroCurriculum: "Lihat Kurikulum",
    statSks: "SKS kurikulum OBE",
    statSchemes: "skema studi",
    statAreas: "bahan kajian",
    statCurriculum: "kurikulum OBE",
    profileKicker: "Profil Program",
    profileTitle: "Pusat pendidikan magister statistika yang unggul dalam pendidikan dan riset.",
    profileText: "Program ini menyiapkan lulusan yang mampu mengembangkan metode statistika, mengelola riset, dan menerapkan analisis data pada masalah nyata melalui pendekatan interdisipliner.",
    pillBusiness: "Bisnis dan Industri",
    pillSocial: "Sosial",
    pillActuarial: "Aktuaria",
    pillBiostat: "Biostatistik",
    pillDataScience: "Sains Data",
    curriculumKicker: "Struktur Kurikulum",
    curriculumTitle: "Struktur 42 SKS dengan jalur kuliah, riset, dan RPL.",
    curriculumText: "Kurikulum OBE 2026 dirancang untuk memperkuat penguasaan teori, kemampuan analitik, kompetensi riset, rekognisi pembelajaran, dan publikasi ilmiah.",
    navAcademicCalendar: "Kalender",
    academicKicker: "Kalender Akademik",
    academicTitle: "Semester Gasal 2026/2027 dalam satu infografis.",
    academicText: "Ringkasan kegiatan akademik Universitas Padjadjaran untuk masa penerimaan mahasiswa baru, perkuliahan, administrasi, ujian, nilai, wisuda, dan akhir semester.",
    academicSemesterLabel: "Semester Gasal",
    academicSummaryClasses: "Perkuliahan",
    academicSummaryMidterm: "Ujian Tengah Semester",
    academicSummaryFinal: "Ujian Akhir Semester",
    academicSummaryGraduation: "Wisuda",
    academicAugOrientation: "Orientasi mahasiswa baru",
    academicAugPmb: "Prosesi penerimaan mahasiswa baru",
    academicAugKrs: "Pengisian KRS mahasiswa baru",
    academicAugClassStart: "Perkuliahan tahap pertama dimulai",
    academicAugMonev: "Monev data semester untuk pelaporan PDDIKTI",
    academicAugPkrs: "Masa perubahan KRS",
    academicSepDies: "Dies Natalis Universitas Padjadjaran",
    academicSepLeaveSk: "Batas akhir SK Dekan tentang cuti",
    academicSepStatus: "Batas akhir penetapan status mahasiswa",
    academicOctMidterm: "Ujian Tengah Semester",
    academicOctPddikti: "Pelaporan PDDIKTI semester genap sebelumnya",
    academicOctGradDeadline: "Batas akhir pendaftaran Wisuda Gelombang I",
    academicOctClassResume: "Perkuliahan tahap kedua",
    academicNovGraduation: "Prosesi Wisuda Gelombang I",
    academicDecFinal: "Ujian Akhir Semester",
    academicDecGrades: "Pengumuman hasil ujian akhir semester",
    academicJanPayment: "Pembayaran uang kuliah semester genap",
    academicJanSchedule: "Unggah jadwal perkuliahan semester genap",
    academicJanGradeProgram: "Perubahan Nilai T tingkat program studi",
    academicJanGradDeadline: "Batas akhir pendaftaran Wisuda Gelombang II",
    academicJanLeaveRequest: "Batas akhir permohonan cuti/penghentian studi sementara",
    academicJanGradeFaculty: "Perubahan Nilai T tingkat fakultas",
    academicJanAdvising: "Masa bimbingan akademik",
    academicFebGraduation: "Prosesi Wisuda Gelombang II",
    academicFebEnd: "Batas akhir Semester Gasal",
    academicSourceTitle: "Sumber kalender",
    academicSourceText: "Disarikan dari Kalender Kegiatan Akademik Universitas Padjadjaran Tahun 2026/2027.",
    courseworkTitle: "Magister Berbasis Kuliah",
    coursework1: "21 SKS mata kuliah wajib.",
    coursework2: "9 SKS mata kuliah pilihan.",
    coursework3: "12 SKS tesis: SUR 2 SKS, SKR 4 SKS, Sidang Akhir Magister 6 SKS.",
    researchTitle: "Magister Berbasis Riset",
    research1: "12 SKS mata kuliah wajib.",
    research2: "9 SKS keterampilan dan 9 SKS publikasi.",
    research3: "12 SKS tesis dengan fokus penelitian inovatif dan diseminasi ilmiah.",
    rplTitle: "Rekognisi Pembelajaran Lampau",
    rpl1: "Rekognisi capaian pembelajaran formal, nonformal, informal, atau pengalaman kerja.",
    rpl2: "Mata kuliah yang dapat direkognisi mengikuti tabel RPL Kurikulum 2026.",
    rpl3: "Mata kuliah tesis dan fondasi tertentu tetap ditempuh di prodi.",
    curriculumDocsKicker: "Dokumen Kurikulum",
    curriculumDocsTitle: "Arsip dokumen kurikulum 2020-2026",
    curriculumDocsText: "Empat PDF kurikulum ditempatkan sebagai rujukan resmi dan arsip akademik yang dapat dibuka langsung dari website.",
    curriculumDocsCountLabel: "dokumen kurikulum",
    curriculumDocsAsk: "Tanyakan dokumen ke chatbot",
    curriculumDocPeriod: "Periode",
    curriculumDocArchive: "Arsip PDF",
    pbmEvalKicker: "Evaluasi PBM",
    pbmEvalTitle: "Arsip evaluasi pembelajaran per semester.",
    pbmEvalText: "Dokumen Evaluasi PBM disusun sebagai blok akses cepat untuk meninjau arsip mutu akademik, proses belajar mengajar, dan bahan pemantauan setiap semester.",
    pbmEvalCountLabel: "dokumen evaluasi",
    pbmEvalAsk: "Tanyakan Evaluasi PBM ke chatbot",
    pbmEvalArchive: "Arsip Evaluasi",
    pbmEvalSemester: "Semester",
    pbmEvalAcademicYear: "Tahun akademik",
    thesisGuideKicker: "Panduan Tesis",
    thesisGuideTitle: "Dokumen panduan penulisan dan pelaksanaan tesis.",
    thesisGuideText: "Rujukan resmi untuk penyusunan naskah tesis, Seminar Usulan Riset, Seminar Kemajuan Riset, dan Sidang Akhir Magister.",
    thesisGuideCountLabel: "dokumen panduan",
    thesisGuideAsk: "Tanyakan panduan ke chatbot",
    graduateCompetencyKicker: "Kompetensi Lulusan",
    graduateCompetencyTitle: "Profil karier yang fleksibel untuk akademik, riset, konsultansi, dan industri.",
    academicianTitle: "Akademisi",
    academicianText: "Siap berkarier sebagai dosen, instruktur, dan pembina akademik melalui Tri Dharma Perguruan Tinggi.",
    researcherTitle: "Peneliti",
    researcherText: "Mampu melakukan riset inovatif dalam statistika teoritis dan terapan serta menghasilkan karya ilmiah bermutu.",
    consultantTitle: "Konsultan",
    consultantText: "Memberikan layanan analisis data dan pemecahan masalah berbasis statistika untuk lembaga dan organisasi.",
    practitionerTitle: "Praktisi",
    practitionerText: "Bekerja sebagai profesional analitik di perusahaan, pemerintahan, industri, lembaga riset, dan jasa konsultansi.",
    alumniKicker: "Lulusan & Tesis",
    alumniTitle: "Jejak riset lulusan 2022-2026",
    alumniText: "Ringkasan judul tesis, pembimbing, tema riset, dan tahun lulus berdasarkan data lulusan program magister.",
    alumniSearchLabel: "Cari lulusan atau tesis",
    alumniSearchPlaceholder: "Nama, topik, pembimbing, tahun...",
    alumniDisplayed: "tesis tampil",
    alumniYearDistribution: "Distribusi Tahun Lulus",
    alumniResearchThemes: "Tema Riset Dominan",
    tracerKicker: "Tracer Studi",
    tracerTitle: "Tracer Studi lulusan 2022-2025",
    tracerText: "Laporan tahunan tracer study diringkas sebagai blok akses cepat untuk melihat waktu tunggu kerja pertama, respons lulusan, dan indikator awal serapan lulusan.",
    tracerCtaBadge: "Form Resmi Unpad",
    tracerCtaTitle: "Isi Tracer Study Universitas Padjadjaran",
    tracerCtaText: "Alumni dapat meninggalkan jejak karier dan pengalaman studi melalui form tracer study resmi Unpad.",
    tracerCtaButton: "Buka Form Tracer Study",
    tracerCountLabel: "laporan tracer study",
    tracerAsk: "Tanyakan tracer study ke chatbot",
    coursesKicker: "Mata Kuliah",
    coursesTitle: "Daftar mata kuliah Kurikulum 2026",
    coursesSearchLabel: "Cari mata kuliah",
    coursesSearchPlaceholder: "Machine learning, spasial, survival...",
    filterAll: "Semua",
    filterRequired: "Wajib",
    filterElective: "Pilihan",
    filterResearch: "Riset",
    filterSkills: "Keterampilan",
    filterPublication: "Publikasi",
    tableCourseId: "Mata Kuliah",
    tableCourseEn: "Course",
    tableCredits: "SKS",
    tableGroup: "Kelompok",
    materialsKicker: "Materi Kuliah",
    materialsTitle: "Katalog materi HTML per mata kuliah",
    materialsText: "Materi dari folder @Materi Kuliah disusun sebagai katalog digital agar mahasiswa dapat mencari dan membuka bahan ajar dengan cepat.",
    materialsSearchLabel: "Cari materi",
    materialsSearchPlaceholder: "Spasial, aktuaria, regresi, epidemiologi...",
    materialsShown: "materi tampil",
    materialsAsk: "Tanyakan materi ke chatbot",
    syllabusKicker: "Silabus",
    syllabusTitle: "Silabus mata kuliah dari Kurikulum 2026",
    syllabusText: "Setiap entri memuat deskripsi, bahan kajian, dan referensi yang diekstrak dari dokumen kurikulum resmi.",
    syllabusSearchLabel: "Cari silabus",
    syllabusSearchPlaceholder: "Pembelajaran Mesin, Basis Data, SUR...",
    syllabusShown: "silabus tampil",
    syllabusAsk: "Tanyakan ke chatbot",
    commentsKicker: "Komentar & Jejak Pengunjung",
    commentsTitle: "Ruang komentar dan ringkasan kunjungan website.",
    commentsText: "Section ini disiapkan untuk komentar publik dan analytics pengunjung berbasis layanan eksternal yang aman untuk website statis.",
    commentsPublicTitle: "Komentar pengunjung",
    commentsConfigNeeded: "Komentar siap diaktifkan setelah konfigurasi Giscus diisi.",
    visitorTitle: "Statistik pengunjung",
    visitorTotal: "Total kunjungan",
    visitorOrigin: "Negara/kota",
    openAnalyticsDashboard: "Lihat dashboard",
    analyticsActiveTitle: "Negara/kota pengunjung tersedia di dashboard.",
    loadingMetric: "Memuat",
    metricUnavailable: "Lihat dashboard",
    chatKicker: "Chatbot Akademik",
    chatTitle: "Tanya Kurikulum S2 Statistika Terapan",
    chatText: "Jawaban chatbot ditambatkan pada ekstraksi dokumen Kurikulum OBE 2026, dokumen kurikulum 2020-2026, Evaluasi PBM, panduan tesis, silabus mata kuliah, katalog materi HTML, data lulusan, tracer study, dan ringkasan administratif dari SMUP Program Magister.",
    knowledgePieces: "potongan pengetahuan terindeks",
    assistantName: "Asisten Prodi",
    loadingKnowledge: "Memuat knowledge base",
    promptSks: "Berapa SKS?",
    promptPath: "Jalur studi",
    promptVision: "Visi misi",
    promptProfile: "Profil lulusan",
    promptDataScience: "Sains data",
    promptSyllabus: "Silabus ML",
    promptMaterials: "Materi HTML",
    promptGuide: "Panduan tesis",
    promptThesisFlow: "SUR SKR SAM",
    promptAlumni: "Tesis lulusan",
    promptTracer: "Tracer 2025",
    promptCurriculumDocs: "Dokumen 2026",
    promptPbmEvaluation: "Evaluasi PBM",
    welcomeText: "Silakan ajukan pertanyaan tentang kurikulum 2026, dokumen kurikulum 2020-2026, Evaluasi PBM, jalur studi, SKS, CPL, panduan tesis, SUR, SKR, SAM, silabus, materi kuliah HTML, tracer study, tesis lulusan, biaya, pendaftaran, dan profil lulusan S2 Statistika Terapan.",
    welcomeSources: "Sumber utama: Kurikulum OBE 2026, dokumen kurikulum, Evaluasi PBM, panduan tesis, data lulusan, tracer study, dan katalog materi kuliah",
    questionLabel: "Pertanyaan",
    questionPlaceholder: "Tulis pertanyaan...",
    send: "Kirim",
    footerText: "Website profesional dengan chatbot berbasis knowledge base kurikulum.",
    backTop: "Kembali ke atas",
    openPdf: "Buka PDF",
    openReport: "Buka laporan",
    openMaterial: "Buka materi",
    askChatbot: "Tanya chatbot",
    pages: "halaman",
    folder: "Folder",
    fileHtml: "File HTML",
    noThesisGuides: "Panduan tesis belum tersedia.",
    noCurriculumDocs: "Dokumen kurikulum belum tersedia.",
    noPbmEvaluations: "Dokumen Evaluasi PBM belum tersedia.",
    noCourses: "Tidak ada mata kuliah yang cocok.",
    noSyllabus: "Silabus yang dicari belum ditemukan.",
    noMaterials: "Materi yang dicari belum ditemukan.",
    noTracer: "Laporan tracer study belum tersedia.",
    noAlumni: "Data lulusan yang dicari belum ditemukan.",
    studyMaterials: "Bahan kajian dan referensi",
    topics: "Bahan Kajian",
    references: "Referensi",
    noTopics: "Bahan kajian belum tersedia.",
    noReferences: "Referensi belum tersedia.",
    responses: "Respons",
    medianWait: "Median tunggu",
    under3Months: "<= 3 bulan",
    beforeGraduation: "Sebelum lulus",
    graduationYear: "Tahun lulus",
    appliedStatistics: "Statistika Terapan",
    npmUnavailable: "NPM tidak tersedia",
    advisors: "Pembimbing",
    notAvailable: "Belum tersedia",
    and: "dan",
    you: "Anda",
    searchingKnowledge: "Sedang mencari jawaban pada knowledge base kurikulum...",
    source: "Sumber",
    pageShort: "Hal.",
    modePrefix: "Mode",
    modeServer: "Knowledge base server",
    modeServerApi: "API + knowledge base",
    modeLocal: "Knowledge base lokal",
    modeLocalStatic: "Knowledge base lokal statis",
    modeLocalFallback: "Knowledge base cadangan",
    modeFallbackLocal: "Fallback lokal"
  },
  en: {
    topbarCampus: "Faculty of Mathematics and Natural Sciences, Universitas Padjadjaran",
    topbarCurriculum: "2026 OBE Curriculum",
    navProfile: "Profile",
    navCurriculum: "Curriculum",
    navDocs: "Documents",
    navPbmEvaluations: "Evaluation",
    navGuide: "Guides",
    navCourses: "Courses",
    navMaterials: "Materials",
    navGraduates: "Graduates",
    navTracer: "Tracer",
    navSyllabus: "Syllabus",
    navComments: "Comments",
    navChatbot: "Chatbot",
    navAsk: "Ask Program",
    heroKicker: "Master's Program",
    heroLead: "A 42-credit master's program in applied statistics, research, computing, and data science for industry, government, health, actuarial, and academic needs.",
    heroAsk: "Ask Chatbot",
    heroCurriculum: "View Curriculum",
    statSks: "OBE curriculum credits",
    statSchemes: "study schemes",
    statAreas: "knowledge areas",
    statCurriculum: "OBE curriculum",
    profileKicker: "Program Profile",
    profileTitle: "A master's education center in statistics with strength in teaching and research.",
    profileText: "The program prepares graduates to develop statistical methods, manage research, and apply data analysis to real problems through interdisciplinary approaches.",
    pillBusiness: "Business and Industry",
    pillSocial: "Social Statistics",
    pillActuarial: "Actuarial",
    pillBiostat: "Biostatistics",
    pillDataScience: "Data Science",
    curriculumKicker: "Curriculum Structure",
    curriculumTitle: "A 42-credit structure with coursework, research, and RPL pathways.",
    curriculumText: "The 2026 OBE curriculum strengthens theoretical mastery, analytical ability, research competence, learning recognition, and scientific publication.",
    navAcademicCalendar: "Calendar",
    academicKicker: "Academic Calendar",
    academicTitle: "Odd Semester 2026/2027 in one infographic.",
    academicText: "A visual summary of Universitas Padjadjaran academic activities for new student admission, classes, administration, exams, grades, graduation, and semester closing.",
    academicSemesterLabel: "Odd Semester",
    academicSummaryClasses: "Classes",
    academicSummaryMidterm: "Midterm Exams",
    academicSummaryFinal: "Final Exams",
    academicSummaryGraduation: "Graduation",
    academicAugOrientation: "New student orientation",
    academicAugPmb: "New student admission ceremony",
    academicAugKrs: "Course registration for new students",
    academicAugClassStart: "First class period begins",
    academicAugMonev: "Semester data monitoring for PDDIKTI reporting",
    academicAugPkrs: "Course registration revision period",
    academicSepDies: "Universitas Padjadjaran anniversary",
    academicSepLeaveSk: "Dean decree deadline for academic leave",
    academicSepStatus: "Student status determination deadline",
    academicOctMidterm: "Midterm exams",
    academicOctPddikti: "PDDIKTI reporting for previous even semester",
    academicOctGradDeadline: "Graduation Wave I registration deadline",
    academicOctClassResume: "Second class period",
    academicNovGraduation: "Graduation Ceremony Wave I",
    academicDecFinal: "Final exams",
    academicDecGrades: "Final exam result announcement",
    academicJanPayment: "Even semester tuition payment",
    academicJanSchedule: "Even semester class schedule upload",
    academicJanGradeProgram: "Grade T revision at program level",
    academicJanGradDeadline: "Graduation Wave II registration deadline",
    academicJanLeaveRequest: "Academic leave/temporary study suspension request deadline",
    academicJanGradeFaculty: "Grade T revision at faculty level",
    academicJanAdvising: "Academic advising period",
    academicFebGraduation: "Graduation Ceremony Wave II",
    academicFebEnd: "Odd Semester closing date",
    academicSourceTitle: "Calendar source",
    academicSourceText: "Summarized from Universitas Padjadjaran Academic Activity Calendar 2026/2027.",
    courseworkTitle: "Coursework-Based Master's",
    coursework1: "21 credits of required courses.",
    coursework2: "9 credits of elective courses.",
    coursework3: "12 thesis credits: SUR 2 credits, SKR 4 credits, and Master's Final Defense 6 credits.",
    researchTitle: "Research-Based Master's",
    research1: "12 credits of required courses.",
    research2: "9 credits of research skills and 9 credits of publication.",
    research3: "12 thesis credits focused on innovative research and scientific dissemination.",
    rplTitle: "Recognition of Prior Learning",
    rpl1: "Recognition of formal, non-formal, informal learning outcomes, or work experience.",
    rpl2: "Courses eligible for recognition follow the RPL table in the 2026 curriculum.",
    rpl3: "Thesis courses and selected foundation courses are still taken in the program.",
    curriculumDocsKicker: "Curriculum Documents",
    curriculumDocsTitle: "Curriculum document archive 2020-2026",
    curriculumDocsText: "Four curriculum PDFs are provided as official references and academic archives that can be opened directly from the website.",
    curriculumDocsCountLabel: "curriculum documents",
    curriculumDocsAsk: "Ask the chatbot about documents",
    curriculumDocPeriod: "Period",
    curriculumDocArchive: "PDF Archive",
    pbmEvalKicker: "Learning Evaluation",
    pbmEvalTitle: "Teaching and learning evaluation archive by semester.",
    pbmEvalText: "PBM evaluation documents are organized as quick-access blocks for academic quality archives, teaching-learning process review, and semester monitoring.",
    pbmEvalCountLabel: "evaluation documents",
    pbmEvalAsk: "Ask the chatbot about PBM evaluation",
    pbmEvalArchive: "Evaluation Archive",
    pbmEvalSemester: "Semester",
    pbmEvalAcademicYear: "Academic year",
    thesisGuideKicker: "Thesis Guides",
    thesisGuideTitle: "Thesis writing and implementation guide documents.",
    thesisGuideText: "Official references for thesis writing, Research Proposal Seminar, Research Progress Seminar, and Master's Final Defense.",
    thesisGuideCountLabel: "guide documents",
    thesisGuideAsk: "Ask the chatbot about guides",
    graduateCompetencyKicker: "Graduate Competencies",
    graduateCompetencyTitle: "Flexible career profiles for academia, research, consulting, and industry.",
    academicianTitle: "Academician",
    academicianText: "Prepared for careers as lecturers, instructors, and academic mentors through higher education's three missions.",
    researcherTitle: "Researcher",
    researcherText: "Able to conduct innovative research in theoretical and applied statistics and produce quality scientific work.",
    consultantTitle: "Consultant",
    consultantText: "Provides statistical data analysis and problem-solving services for institutions and organizations.",
    practitionerTitle: "Practitioner",
    practitionerText: "Works as an analytics professional in companies, government, industry, research institutions, and consulting services.",
    alumniKicker: "Graduates & Theses",
    alumniTitle: "Graduate research record 2022-2026",
    alumniText: "A summary of thesis titles, supervisors, research themes, and graduation years based on master's program graduate data.",
    alumniSearchLabel: "Search graduates or theses",
    alumniSearchPlaceholder: "Name, topic, supervisor, year...",
    alumniDisplayed: "theses shown",
    alumniYearDistribution: "Graduation Year Distribution",
    alumniResearchThemes: "Dominant Research Themes",
    tracerKicker: "Tracer Study",
    tracerTitle: "Graduate tracer studies 2022-2025",
    tracerText: "Annual tracer study reports are summarized as quick-access blocks for first-job waiting time, graduate responses, and early employment indicators.",
    tracerCtaBadge: "Official Unpad Form",
    tracerCtaTitle: "Fill Out Universitas Padjadjaran Tracer Study",
    tracerCtaText: "Graduates can leave their career and study-experience record through Unpad's official tracer study form.",
    tracerCtaButton: "Open Tracer Study Form",
    tracerCountLabel: "tracer study reports",
    tracerAsk: "Ask the chatbot about tracer studies",
    coursesKicker: "Courses",
    coursesTitle: "Course list in the 2026 Curriculum",
    coursesSearchLabel: "Search courses",
    coursesSearchPlaceholder: "Machine learning, spatial, survival...",
    filterAll: "All",
    filterRequired: "Required",
    filterElective: "Elective",
    filterResearch: "Research",
    filterSkills: "Skills",
    filterPublication: "Publication",
    tableCourseId: "Course",
    tableCourseEn: "Indonesian Name",
    tableCredits: "Credits",
    tableGroup: "Group",
    materialsKicker: "Learning Materials",
    materialsTitle: "HTML learning material catalog by course",
    materialsText: "Materials from the @Materi Kuliah folder are organized as a digital catalog so students can search and open learning resources quickly.",
    materialsSearchLabel: "Search materials",
    materialsSearchPlaceholder: "Spatial, actuarial, regression, epidemiology...",
    materialsShown: "materials shown",
    materialsAsk: "Ask the chatbot about materials",
    syllabusKicker: "Syllabus",
    syllabusTitle: "Course syllabi from the 2026 Curriculum",
    syllabusText: "Each entry contains descriptions, topics, and references extracted from the official curriculum document.",
    syllabusSearchLabel: "Search syllabus",
    syllabusSearchPlaceholder: "Machine Learning, Database, SUR...",
    syllabusShown: "syllabi shown",
    syllabusAsk: "Ask the chatbot",
    commentsKicker: "Comments & Visitor Trace",
    commentsTitle: "Comment space and website visit summary.",
    commentsText: "This section is prepared for public comments and visitor analytics using external services that work safely with static websites.",
    commentsPublicTitle: "Visitor comments",
    commentsConfigNeeded: "Comments are ready to activate after the Giscus configuration is added.",
    visitorTitle: "Visitor statistics",
    visitorTotal: "Total visits",
    visitorOrigin: "Country/city",
    openAnalyticsDashboard: "Open dashboard",
    analyticsActiveTitle: "Visitor country/city details are available in the dashboard.",
    loadingMetric: "Loading",
    metricUnavailable: "View dashboard",
    chatKicker: "Academic Chatbot",
    chatTitle: "Ask About the Applied Statistics Master's Curriculum",
    chatText: "The chatbot answers are grounded in the 2026 OBE curriculum extraction, 2020-2026 curriculum documents, PBM evaluations, thesis guides, course syllabi, HTML learning material catalog, graduate data, tracer studies, and administrative summaries from SMUP.",
    knowledgePieces: "indexed knowledge chunks",
    assistantName: "Program Assistant",
    loadingKnowledge: "Loading knowledge base",
    promptSks: "Credits?",
    promptPath: "Study paths",
    promptVision: "Vision mission",
    promptProfile: "Graduate profile",
    promptDataScience: "Data science",
    promptSyllabus: "ML syllabus",
    promptMaterials: "HTML material",
    promptGuide: "Thesis guide",
    promptThesisFlow: "SUR SKR SAM",
    promptAlumni: "Graduate theses",
    promptTracer: "Tracer 2025",
    promptCurriculumDocs: "2026 Document",
    promptPbmEvaluation: "PBM Evaluation",
    welcomeText: "Ask about the 2026 curriculum, 2020-2026 curriculum documents, PBM evaluations, study pathways, credits, learning outcomes, thesis guides, SUR, SKR, SAM, syllabi, HTML learning materials, tracer studies, graduate theses, fees, admissions, and graduate profiles.",
    welcomeSources: "Main sources: 2026 OBE Curriculum, curriculum documents, PBM evaluations, thesis guides, graduate data, tracer studies, and learning material catalog",
    questionLabel: "Question",
    questionPlaceholder: "Type a question...",
    send: "Send",
    footerText: "A professional website with a curriculum knowledge-base chatbot.",
    backTop: "Back to top",
    openPdf: "Open PDF",
    openReport: "Open report",
    openMaterial: "Open material",
    askChatbot: "Ask chatbot",
    pages: "pages",
    folder: "Folder",
    fileHtml: "HTML file",
    noThesisGuides: "Thesis guides are not available yet.",
    noCurriculumDocs: "Curriculum documents are not available yet.",
    noPbmEvaluations: "PBM evaluation documents are not available yet.",
    noCourses: "No matching courses found.",
    noSyllabus: "No matching syllabus found.",
    noMaterials: "No matching materials found.",
    noTracer: "Tracer study reports are not available yet.",
    noAlumni: "No matching graduate data found.",
    studyMaterials: "Topics and references",
    topics: "Topics",
    references: "References",
    noTopics: "Topics are not available yet.",
    noReferences: "References are not available yet.",
    responses: "Responses",
    medianWait: "Median wait",
    under3Months: "<= 3 months",
    beforeGraduation: "Before graduation",
    graduationYear: "Graduation year",
    appliedStatistics: "Applied Statistics",
    npmUnavailable: "Student ID unavailable",
    advisors: "Supervisors",
    notAvailable: "Not available",
    and: "and",
    you: "You",
    searchingKnowledge: "Searching the curriculum knowledge base...",
    source: "Source",
    pageShort: "p.",
    modePrefix: "Mode",
    modeServer: "Knowledge base server",
    modeServerApi: "API + knowledge base",
    modeLocal: "Local knowledge base",
    modeLocalStatic: "Static local knowledge base",
    modeLocalFallback: "Fallback knowledge base",
    modeFallbackLocal: "Local fallback"
  }
};

const GROUP_LABELS = {
  id: {
    Semua: "Semua",
    Wajib: "Wajib",
    Pilihan: "Pilihan",
    Riset: "Riset",
    "Keterampilan Riset": "Keterampilan Riset",
    Publikasi: "Publikasi",
    "Mata Kuliah": "Mata Kuliah",
    "Materi Kuliah": "Materi Kuliah"
  },
  en: {
    Semua: "All",
    Wajib: "Required",
    Pilihan: "Elective",
    Riset: "Research",
    "Keterampilan Riset": "Research Skills",
    Publikasi: "Publication",
    "Mata Kuliah": "Course",
    "Materi Kuliah": "Learning Material"
  }
};

const LANGUAGE_KEY = "s2-statistika-language";
let currentLang = "id";
try {
  currentLang = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "id";
} catch (error) {
  currentLang = "id";
}

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

function t(key) {
  return I18N[currentLang]?.[key] || I18N.id[key] || key;
}

function groupLabel(value) {
  return GROUP_LABELS[currentLang]?.[value] || GROUP_LABELS.id[value] || value || "";
}

function setMode(key) {
  if (!modeLabel) return;
  modeLabel.dataset.i18n = key;
  modeLabel.textContent = t(key);
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key) element.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key) element.setAttribute("placeholder", t(key));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderCourses();
  renderCurriculumDocs();
  renderThesisGuides();
  renderSyllabus();
  renderMaterials();
  renderTracerStudies();
  renderPbmEvaluations();
  renderAlumni();
  renderAnalyticsPanel();
}

function goatCounterSiteUrl() {
  return ANALYTICS_INTEGRATION.goatCounterEndpoint.replace(/\/count\/?$/, "");
}

function renderAnalyticsPanel() {
  const siteUrl = goatCounterSiteUrl();
  if (goatDashboardLink && siteUrl) {
    goatDashboardLink.href = siteUrl;
  }
  if (goatTotalCount && !goatTotalCount.dataset.loaded) {
    goatTotalCount.textContent = t("loadingMetric");
  }
}

async function updateGoatCounterTotal() {
  if (!goatTotalCount || !ANALYTICS_INTEGRATION.goatCounterEndpoint) return;
  const siteUrl = goatCounterSiteUrl();
  goatTotalCount.textContent = t("loadingMetric");
  try {
    const response = await fetch(`${siteUrl}/counter/TOTAL.json`, { cache: "no-store" });
    if (!response.ok) throw new Error("GoatCounter total is not publicly available.");
    const data = await response.json();
    goatTotalCount.textContent = data.count || t("metricUnavailable");
    goatTotalCount.dataset.loaded = "true";
  } catch (error) {
    goatTotalCount.textContent = t("metricUnavailable");
    goatTotalCount.dataset.loaded = "false";
  }
}

function mountCommentIntegration() {
  const mount = document.getElementById("commentsMount");
  const config = COMMENT_INTEGRATION.giscus;
  if (!mount || !config.repo || !config.repoId || !config.category || !config.categoryId) return;

  mount.innerHTML = "";
  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.dataset.repo = config.repo;
  script.dataset.repoId = config.repoId;
  script.dataset.category = config.category;
  script.dataset.categoryId = config.categoryId;
  script.dataset.mapping = "pathname";
  script.dataset.strict = "0";
  script.dataset.reactionsEnabled = "1";
  script.dataset.emitMetadata = "0";
  script.dataset.inputPosition = "bottom";
  script.dataset.theme = "light";
  script.dataset.lang = currentLang === "en" ? "en" : "id";
  script.crossOrigin = "anonymous";
  script.async = true;
  mount.appendChild(script);
}

function mountAnalyticsIntegration() {
  if (ANALYTICS_INTEGRATION.goatCounterEndpoint) {
    const script = document.createElement("script");
    script.dataset.goatcounter = ANALYTICS_INTEGRATION.goatCounterEndpoint;
    script.src = "https://gc.zgo.at/count.js";
    script.async = true;
    document.head.appendChild(script);
    updateGoatCounterTotal();
  }

  if (ANALYTICS_INTEGRATION.cloudflareToken) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.dataset.cfBeacon = JSON.stringify({ token: ANALYTICS_INTEGRATION.cloudflareToken });
    document.head.appendChild(script);
  }
}

function promptQuestion(button) {
  return currentLang === "en"
    ? button.dataset.qEn || button.dataset.qId || button.dataset.q
    : button.dataset.qId || button.dataset.q || button.dataset.qEn;
}

function tokenize(value) {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));
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
  if (/(riset|tesis|sur|skr|sam|publikasi|sidang akhir|seminar usulan|seminar kemajuan)/.test(normalized)) {
    synonyms.push("seminar usulan riset seminar kemajuan riset sidang akhir magister publikasi tesis SUR SKR SAM");
  }
  if (/(panduan|penulisan tesis|format tesis|pelaksanaan tesis|proposal tesis|naskah tesis|bimbingan|penguji|sur|skr|sam)/.test(normalized)) {
    synonyms.push("panduan tesis penulisan tesis format tesis pelaksanaan tesis seminar usulan riset seminar kemajuan riset sidang akhir magister pembimbing penguji penilaian administrasi");
  }
  if (/(silabus|sylabus|rps|materi|referensi|bahan kajian)/.test(normalized)) {
    synonyms.push("silabus rps deskripsi mata kuliah bahan kajian topik perkuliahan referensi");
  }
  if (/(materi|bahan ajar|modul|html|katalog|slide|pertemuan)/.test(normalized)) {
    synonyms.push("materi html bahan ajar modul pembelajaran katalog kuliah file html");
  }
  if (/(alumni|lulusan|judul tesis|tesis lulusan|pembimbing)/.test(normalized)) {
    synonyms.push("alumni lulusan tesis judul tesis pembimbing tahun lulus riset lulusan");
  }
  if (/(tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus)/.test(normalized)) {
    synonyms.push("tracer study tracer studi waktu tunggu pekerjaan pertama serapan lulusan respons lulusan bekerja sebelum lulus");
  }
  if (/(dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|kurikulum 2020|kurikulum 2021|kurikulum 2022|kurikulum 2023|kurikulum 2024|kurikulum 2025|kurikulum 2026|curriculum document|curriculum pdf)/.test(normalized)) {
    synonyms.push("dokumen kurikulum file kurikulum pdf kurikulum arsip kurikulum curriculum document curriculum pdf 2020 2021 2022 2023 2024 2025 2026");
  }
  if (/(evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation)/.test(normalized)) {
    synonyms.push("evaluasi pbm evaluasi pembelajaran proses belajar mengajar mutu akademik dokumen evaluasi semester ganjil genap learning evaluation teaching learning evaluation");
  }

  return [question, ...synonyms].join(" ");
}

function scoreChunk(question, chunk) {
  const normalizedQuestion = normalize(question);
  const query = expandQuestion(question);
  const tokens = [...new Set(tokenize(query))];
  const originalTokens = tokenize(question).filter((token) => !GENERIC_QUERY_TERMS.has(token));
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
      const titleTokens = courseTitle.split(" ").filter((token) => token.length > 2 && !GENERIC_QUERY_TERMS.has(token));
      if (titleTokens.length && titleTokens.every((token) => originalTokens.includes(token))) score += 120;
    }
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 20;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 55;
  }

  if (chunk.id?.startsWith("material-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 22;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 60;
  }

  if (chunk.id?.startsWith("thesis-guide-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
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
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 20;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 60;
  }

  if (chunk.id?.startsWith("curriculum-doc-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 22;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 70;
  }

  if (chunk.id?.startsWith("pbm-evaluation-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 23;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 72;
  }

  return score > 0 && chunk.id?.startsWith("manual") ? score + 2 : score;
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

function buildCapabilityAnswer(question) {
  const text = normalize(question);
  const asksCapability = /chatbot|chatboot|bisa apa|bisa jawab|pertanyaan apa|contoh pertanyaan|bantuan|help|what can|can you|examples/.test(text);
  if (!asksCapability) return null;

  const answer = currentLang === "en"
    ? [
      "I can answer questions using the website knowledge base, including:",
      "1. 2026 curriculum, credits, study pathways, RPL, CPL, and graduate profiles.",
      "2. Course syllabi, topics, references, and HTML learning materials.",
      "3. Thesis guides, SUR, SKR, and Master's Final Defense.",
      "4. Graduate thesis data, tracer study reports, curriculum PDF archives, PBM evaluation documents, fees, and SMUP admissions.",
      "",
      serverApiReady
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
      serverApiReady
        ? "Mode API generatif sedang aktif, tetapi jawaban tetap ditambatkan pada knowledge base prodi."
        : "Untuk jawaban bebas di luar knowledge base prodi, API AI generatif perlu diaktifkan pada server."
    ].join("\n");

  return {
    answer,
    sources: [{ title: currentLang === "en" ? "Website knowledge base" : "Knowledge base website" }],
    mode: "Local knowledge base"
  };
}

function buildSyllabusAnswer(question, hits) {
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

function formatFileSize(kb) {
  const value = Number(kb || 0);
  if (!value) return "HTML";
  if (value >= 1024) return `${(value / 1024).toFixed(value >= 10240 ? 0 : 1).replace(/\.0$/, "")} MB`;
  return `${value} KB`;
}

function renderThesisGuides() {
  if (!thesisGuideRows) return;
  const guides = thesisGuidesData?.guides || [];

  if (thesisGuideCount) thesisGuideCount.textContent = String(guides.length);

  if (!guides.length) {
    thesisGuideRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noThesisGuides"))}</p>`;
    return;
  }

  thesisGuideRows.innerHTML = guides
    .map((guide) => `
      <article class="guide-card">
        <div class="guide-card-head">
          <span class="badge">PDF</span>
          <span>${escapeHTML(guide.pages || "-")} ${escapeHTML(t("pages"))} · ${escapeHTML(formatFileSize(guide.sizeKb))}</span>
        </div>
        <h3>${escapeHTML(guide.title)}</h3>
        <p>${escapeHTML(guide.description)}</p>
        <ul class="guide-topic-list">
          ${(guide.topics || []).map((topic) => `<li>${escapeHTML(topic)}</li>`).join("")}
        </ul>
        <div class="guide-actions">
          <a href="${escapeHTML(guide.href)}" target="_blank" rel="noopener">${escapeHTML(t("openPdf"))}</a>
          <button type="button" data-guide-q="${currentLang === "en" ? `What is in ${escapeHTML(guide.title)}?` : `Apa isi ${escapeHTML(guide.title)}?`}">${escapeHTML(t("askChatbot"))}</button>
        </div>
      </article>
    `)
    .join("");
}

function materialFromHit(hit) {
  const href = hit.sourceUrl || "";
  const title = String(hit.title || hit.sourceTitle || "Materi HTML").replace(/^Materi HTML\s*/i, "").trim();
  const known = materialsData?.materials?.find((item) => item.viewerHref === href || item.href === href || item.title === title);
  return known || {
    title,
    href,
    category: "Materi Kuliah",
    file: href.split("/").pop() || "",
    sizeKb: 0
  };
}

function materialScore(question, material) {
  const queryTokens = tokenize(question).filter((token) => !GENERIC_QUERY_TERMS.has(token));
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
  const fromData = (materialsData?.materials || [])
    .map((material) => ({ ...material, score: materialScore(question, material) }))
    .filter((material) => material.score > 0)
    .sort((a, b) => b.score - a.score);

  for (const material of fromData) byHref.set(material.href, material);

  for (const hit of hits) {
    if (!String(hit.id || "").startsWith("material-")) continue;
    const material = materialFromHit(hit);
    if (material.href && !byHref.has(material.href)) byHref.set(material.href, material);
  }

  if (!byHref.size && materialsData?.materials?.length) {
    for (const material of materialsData.materials.slice(0, limit)) byHref.set(material.href, material);
  }

  return [...byHref.values()].slice(0, limit);
}

function buildMaterialAnswer(question, hits) {
  const text = normalize(question);
  const asksMaterial = /materi|bahan ajar|modul|html|katalog|slide|pertemuan|file kuliah/.test(text)
    && !/silabus|sylabus|rps/.test(text);
  if (!asksMaterial) return null;

  const suggestions = materialSuggestions(question, hits, 8);
  if (!suggestions.length) return null;

  const total = materialsData?.total || materialsData?.materials?.length || suggestions.length;

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
      mode: "Local knowledge base"
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
    mode: "Local knowledge base"
  };
}

function findThesisGuide(question) {
  const guides = thesisGuidesData?.guides || [];
  const text = normalize(question);
  if (/penulisan|format|naskah|sitasi|daftar pustaka/.test(text)) {
    return guides.find((guide) => guide.id === "panduan-penulisan-tesis") || null;
  }
  if (/pelaksanaan|sur|skr|sam|sidang|seminar usulan|seminar kemajuan/.test(text)) {
    return guides.find((guide) => guide.id === "panduan-pelaksanaan-tesis") || null;
  }
  return null;
}

function buildThesisGuideAnswer(question) {
  const text = normalize(question);
  const asksThesisContext = /tesis|panduan|penulisan|pelaksanaan|sur|skr|sam|sidang|seminar usulan|seminar kemajuan|format naskah|bimbingan|penguji/.test(text);
  const asksOverview = asksThesisContext && /apa panduan|apa isi|dokumen panduan|daftar panduan|link panduan|buka panduan|download panduan|unduh panduan|panduan penulisan|panduan pelaksanaan/.test(text);
  if (!asksOverview) return null;

  const selected = findThesisGuide(question);
  const guides = selected ? [selected] : (thesisGuidesData?.guides || []);
  if (!guides.length) return null;

  const answer = guides
    .map((guide) => [
      `${guide.title}: ${guide.description}`,
      "Topik utama:",
      numberedText(guide.topics || [], 8),
      `Dokumen: ${guide.href}`
    ].join("\n"))
    .join("\n\n");

  return {
    answer,
    sources: guides.map((guide) => ({ title: guide.title, url: guide.href })),
    mode: "Local knowledge base"
  };
}

function findTracerReport(question) {
  const reports = tracerStudiesData?.reports || [];
  const year = normalize(question).match(/\b(2022|2023|2024|2025)\b/)?.[1];
  return year ? reports.find((report) => String(report.year) === year) || null : null;
}

function buildTracerStudyAnswer(question, hits = []) {
  const text = normalize(question);
  const asksTracer = /tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("tracer-study-"));
  if (!asksTracer) return null;

  const selected = findTracerReport(question);
  const reports = selected ? [selected] : (tracerStudiesData?.reports || []);
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
    mode: "Local knowledge base"
  };
}

function curriculumDocTitle(doc) {
  return currentLang === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function curriculumDocDescription(doc) {
  return currentLang === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function pbmEvaluationTitle(doc) {
  return currentLang === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function pbmEvaluationDescription(doc) {
  return currentLang === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function findCurriculumDoc(question, hits = []) {
  const docs = curriculumDocsData?.documents || [];
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
  const docs = pbmEvaluationsData?.documents || [];
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

function buildCurriculumDocAnswer(question, hits = []) {
  const text = normalize(question);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(text);
  if (!asksCurriculumDoc) return null;

  const selected = findCurriculumDoc(question, hits);
  const docs = selected ? [selected] : (curriculumDocsData?.documents || []);
  if (!docs.length) return null;

  const answer = docs
    .map((doc) => {
      if (currentLang === "en") {
        return [
          `${curriculumDocTitle(doc)}: ${curriculumDocDescription(doc)}`,
          `Period: ${doc.period}.`,
          `File size: ${formatFileSize(doc.sizeKb)}.`,
          `PDF: ${doc.href}`
        ].join("\n");
      }
      return [
        `${curriculumDocTitle(doc)}: ${curriculumDocDescription(doc)}`,
        `Periode: ${doc.period}.`,
        `Ukuran file: ${formatFileSize(doc.sizeKb)}.`,
        `PDF: ${doc.href}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: docs.map((doc) => ({ title: curriculumDocTitle(doc), url: doc.href })),
    mode: "Local knowledge base"
  };
}

function buildPbmEvaluationAnswer(question, hits = []) {
  const text = normalize(question);
  const asksPbmEvaluation = /evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
  if (!asksPbmEvaluation) return null;

  const asksSpecific = /\b20\d{2}\b|ganjil|genap|odd|even/.test(text);
  const selected = asksSpecific ? findPbmEvaluation(question, hits) : null;
  const docs = selected ? [selected] : (pbmEvaluationsData?.documents || []);
  if (!docs.length) return null;

  const answer = docs
    .map((doc) => {
      if (currentLang === "en") {
        return [
          `${pbmEvaluationTitle(doc)}: ${pbmEvaluationDescription(doc)}`,
          `Semester: ${doc.semesterEn || doc.semester}.`,
          `Academic year: ${doc.academicYear}.`,
          `File size: ${formatFileSize(doc.sizeKb)}.`,
          `PDF: ${doc.href}`
        ].join("\n");
      }
      return [
        `${pbmEvaluationTitle(doc)}: ${pbmEvaluationDescription(doc)}`,
        `Semester: ${doc.semester}.`,
        `Tahun akademik: ${doc.academicYear}.`,
        `Ukuran file: ${formatFileSize(doc.sizeKb)}.`,
        `PDF: ${doc.href}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: docs.map((doc) => ({ title: pbmEvaluationTitle(doc), url: doc.href })),
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
  if (asksDayaTampung) return FACTS.dayaTampungSmup;
  if (asksBiaya && asksPendaftaran) return FACTS.smupAdministrasi;
  if (asksBiaya) return FACTS.biayaSmup;
  if (asksJadwal) return FACTS.jadwalSmup;
  if (asksPendaftaran) return FACTS.pendaftaranSmup;
  if (asksSyarat) return FACTS.persyaratanSmup;
  if (asksSyllabus) return null;
  if (asksMaterial) return null;
  if (asksTracer) return null;
  if (asksCurriculumDoc) return null;
  if (asksPbmEvaluation) return null;
  if (asksThesisGuide) return null;
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
  const capabilityAnswer = buildCapabilityAnswer(question);
  if (capabilityAnswer) return capabilityAnswer;

  const fact = matchFact(question);
  const hits = retrieve(question, 4);
  const structuredSyllabus = buildSyllabusAnswer(question, hits);
  const structuredMaterial = buildMaterialAnswer(question, hits);
  const structuredTracerStudy = buildTracerStudyAnswer(question, hits);
  const structuredCurriculumDoc = buildCurriculumDocAnswer(question, hits);
  const structuredPbmEvaluation = buildPbmEvaluationAnswer(question, hits);
  const structuredThesisGuide = buildThesisGuideAnswer(question);

  if (structuredSyllabus) return structuredSyllabus;
  if (structuredMaterial) return structuredMaterial;
  if (structuredTracerStudy) return structuredTracerStudy;
  if (structuredCurriculumDoc) return structuredCurriculumDoc;
  if (structuredPbmEvaluation) return structuredPbmEvaluation;
  if (structuredThesisGuide) return structuredThesisGuide;

  if (fact) {
    const sources = fact.sources.length || fact === FACTS.administrasi
      ? fact.sources
      : hits.map(sourceFromHit);
    return { answer: fact.answer, sources, mode: "Local knowledge base" };
  }

  if (!hits.length) {
    return {
      answer: currentLang === "en"
        ? "I have not found that information in the program knowledge base. I can answer the curriculum, syllabi, HTML learning materials, thesis guides, graduate data, tracer studies, curriculum documents, PBM evaluations, fees, and admissions that have been indexed. Free-form answers outside this knowledge base require enabling a generative AI API on the server."
        : "Saya belum menemukan informasi tersebut dalam knowledge base prodi. Saat ini saya bisa menjawab kurikulum, silabus, materi HTML, panduan tesis, data lulusan, tracer study, dokumen kurikulum, Evaluasi PBM, biaya, dan pendaftaran yang sudah terindeks. Jawaban bebas di luar knowledge base memerlukan API AI generatif yang aktif di server.",
      sources: [],
      mode: "Local knowledge base"
    };
  }

  const excerpts = hits
    .slice(0, 3)
    .map((hit) => hitExcerpt(hit))
    .join("\n\n");

  const intro = hits[0]?.id?.startsWith("alumni-")
    ? (currentLang === "en" ? "I found relevant graduate data:" : "Saya menemukan data lulusan yang relevan:")
    : hits[0]?.id?.startsWith("material-")
      ? (currentLang === "en" ? "I found relevant HTML learning materials:" : "Saya menemukan materi HTML yang relevan:")
      : hits[0]?.id?.startsWith("thesis-guide-")
        ? (currentLang === "en" ? "I found relevant thesis guides:" : "Saya menemukan panduan tesis yang relevan:")
        : hits[0]?.id?.startsWith("tracer-study-")
          ? (currentLang === "en" ? "I found relevant tracer study reports:" : "Saya menemukan laporan tracer study yang relevan:")
          : hits[0]?.id?.startsWith("curriculum-doc-")
            ? (currentLang === "en" ? "I found relevant curriculum documents:" : "Saya menemukan dokumen kurikulum yang relevan:")
            : hits[0]?.id?.startsWith("pbm-evaluation-")
              ? (currentLang === "en" ? "I found relevant PBM evaluation documents:" : "Saya menemukan dokumen Evaluasi PBM yang relevan:")
              : currentLang === "en"
                ? "I found relevant knowledge base excerpts:"
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
        ? `${escapeHTML(t("pageShort"))} ${escapeHTML(source.page)}${source.title ? ` · ${escapeHTML(source.title)}` : ""}`
        : `${escapeHTML(source.title || source.source || t("source"))}${source.updated ? ` · ${escapeHTML(source.updated)}` : ""}`;
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
  const label = role === "user" ? t("you") : t("assistantName");
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
  const pending = addMessage("bot", t("searchingKnowledge"));

  if (serverChatAvailable) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, language: currentLang })
      });
      if (response.ok) {
        const data = await response.json();
        const modeKey = data.mode?.includes("API") ? "modeServerApi" : "modeServer";
        pending.innerHTML = `
          <strong>${escapeHTML(t("assistantName"))}</strong>
          <p>${escapeHTML(data.answer).replace(/\n/g, "<br>")}</p>
          ${sourceHTML(data.sources || [])}
          <small>${escapeHTML(t("modePrefix"))}: ${escapeHTML(t(modeKey))}</small>
        `;
        setMode(modeKey);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return;
      }
    } catch (error) {
      setMode("modeFallbackLocal");
    }
  }

  const local = buildLocalAnswer(question);
  pending.innerHTML = `
    <strong>${escapeHTML(t("assistantName"))}</strong>
    <p>${escapeHTML(local.answer).replace(/\n/g, "<br>")}</p>
    ${sourceHTML(local.sources)}
    <small>${escapeHTML(t("modePrefix"))}: ${escapeHTML(t("modeLocal"))}</small>
  `;
  setMode("modeLocal");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderCourses() {
  const query = normalize(courseSearch.value);
  const rows = COURSES.filter((course) => {
    const matchesFilter = activeFilter === "Semua" || course[3] === activeFilter;
    const matchesQuery = !query || normalize([...course, groupLabel(course[3])].join(" ")).includes(query);
    return matchesFilter && matchesQuery;
  });

  if (!rows.length) {
    courseRows.innerHTML = `<tr class="empty-row"><td colspan="4">${escapeHTML(t("noCourses"))}</td></tr>`;
    return;
  }

  courseRows.innerHTML = rows
    .map((course) => {
      const mainTitle = currentLang === "en" ? course[1] : course[0];
      const secondaryTitle = currentLang === "en" ? course[0] : course[1];
      return `
        <tr>
          <td><strong>${escapeHTML(mainTitle)}</strong></td>
          <td>${escapeHTML(secondaryTitle)}</td>
          <td><strong>${escapeHTML(course[2])}</strong></td>
          <td><span class="badge">${escapeHTML(groupLabel(course[3]))}</span></td>
        </tr>
      `;
    })
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
    syllabusRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noSyllabus"))}</p>`;
    return;
  }

  syllabusRows.innerHTML = rows
    .map((entry) => {
      const course = COURSES.find((item) => normalize(item[0]) === normalize(entry.title));
      const title = currentLang === "en" && course ? course[1] : entry.title;
      const subtitle = currentLang === "en" && course ? `${entry.code} · ${entry.title}` : entry.code;
      return `
        <article class="syllabus-card">
          <div class="syllabus-card-head">
            <span class="badge">${escapeHTML(groupLabel(entry.group || "Mata Kuliah"))}</span>
            <span>${escapeHTML(entry.credits || "-")} ${escapeHTML(currentLang === "en" ? "credits" : "SKS")}</span>
          </div>
          <h3>${escapeHTML(title)}</h3>
          <p class="syllabus-code">${escapeHTML(subtitle)}</p>
          <p>${escapeHTML(entry.description)}</p>
          <details>
            <summary>${escapeHTML(t("studyMaterials"))}</summary>
            <div class="syllabus-detail">
              <h4>${escapeHTML(t("topics"))}</h4>
              ${renderList(entry.topics, t("noTopics"))}
              <h4>${escapeHTML(t("references"))}</h4>
              ${renderList(entry.references, t("noReferences"))}
            </div>
          </details>
        </article>
      `;
    })
    .join("");
}

function renderMaterials() {
  if (!materialRows) return;
  const rows = materialsData?.materials || [];
  const query = normalize(materialSearch?.value || "");
  const filtered = rows.filter((material) => {
    const haystack = [
      material.title,
      material.category,
      material.folder,
      material.file,
      material.source
    ].join(" ");
    return !query || normalize(haystack).includes(query);
  });

  if (materialCount) materialCount.textContent = String(filtered.length);

  if (!filtered.length) {
    materialRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noMaterials"))}</p>`;
    return;
  }

  materialRows.innerHTML = filtered
    .map((material) => `
      <article class="material-card">
        <div class="material-card-head">
          <span class="badge">${escapeHTML(groupLabel(material.category || "Materi Kuliah"))}</span>
          <span>${escapeHTML(formatFileSize(material.sizeKb))}</span>
        </div>
        <h3>${escapeHTML(material.title)}</h3>
        <p class="syllabus-code">${escapeHTML(material.file || t("fileHtml"))}</p>
        <p>${escapeHTML(t("folder"))}: ${escapeHTML(material.folder || material.source || "@Materi Kuliah")}</p>
        <div class="material-actions">
          <a href="${escapeHTML(material.viewerHref || material.href)}" target="_blank" rel="noopener">${escapeHTML(t("openMaterial"))}</a>
          <button type="button" data-material-q="${currentLang === "en" ? `Is there HTML learning material for ${escapeHTML(material.title)}?` : `Ada materi kuliah ${escapeHTML(material.title)}?`}">${escapeHTML(t("askChatbot"))}</button>
        </div>
      </article>
    `)
    .join("");
}

function renderTracerStudies() {
  if (!tracerStudyRows) return;
  const reports = tracerStudiesData?.reports || [];

  if (tracerStudyCount) tracerStudyCount.textContent = String(reports.length);

  if (!reports.length) {
    tracerStudyRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noTracer"))}</p>`;
    return;
  }

  tracerStudyRows.innerHTML = reports
    .map((report) => {
      const title = currentLang === "en" ? `Tracer Study ${report.year}` : report.title;
      return `
        <article class="tracer-card">
          <span class="badge">${escapeHTML(currentLang === "en" ? "Tracer Study Report" : (report.reportTitle || report.title))}</span>
          <div class="tracer-year">${escapeHTML(report.year)}</div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(report.summary)}</p>
          <dl class="tracer-metrics">
            <div>
              <dt>${escapeHTML(t("responses"))}</dt>
              <dd>${escapeHTML(report.metrics?.responses || "-")}</dd>
            </div>
            <div>
              <dt>${escapeHTML(t("medianWait"))}</dt>
              <dd>${escapeHTML(report.metrics?.medianWait || "-")}</dd>
            </div>
            <div>
              <dt>${escapeHTML(t("under3Months"))}</dt>
              <dd>${escapeHTML(report.metrics?.firstJobUnder3Months || "-")}</dd>
            </div>
            <div>
              <dt>${escapeHTML(t("beforeGraduation"))}</dt>
              <dd>${escapeHTML(report.metrics?.workingBeforeGraduation || "-")}</dd>
            </div>
          </dl>
          <div class="tracer-actions">
            <a href="${escapeHTML(report.href)}" target="_blank" rel="noopener">${escapeHTML(t("openReport"))}</a>
            <button type="button" data-tracer-q="${currentLang === "en" ? `What is in the ${escapeHTML(title)}?` : `Apa isi ${escapeHTML(report.title)}?`}">${escapeHTML(t("askChatbot"))}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCurriculumDocs() {
  if (!curriculumDocRows) return;
  const docs = curriculumDocsData?.documents || [];

  if (curriculumDocCount) curriculumDocCount.textContent = String(docs.length);

  if (!docs.length) {
    curriculumDocRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noCurriculumDocs"))}</p>`;
    return;
  }

  curriculumDocRows.innerHTML = docs
    .map((doc) => {
      const title = curriculumDocTitle(doc);
      return `
        <article class="curriculum-doc-card">
          <span class="badge">${escapeHTML(t("curriculumDocArchive"))}</span>
          <div class="curriculum-doc-period">${escapeHTML(doc.period)}</div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(curriculumDocDescription(doc))}</p>
          <div class="curriculum-doc-meta">
            <span>${escapeHTML(t("curriculumDocPeriod"))}: ${escapeHTML(doc.period)}</span>
            <span>${escapeHTML(formatFileSize(doc.sizeKb))}</span>
          </div>
          <div class="curriculum-doc-actions">
            <a href="${escapeHTML(doc.href)}" target="_blank" rel="noopener">${escapeHTML(t("openPdf"))}</a>
            <button type="button" data-curriculum-doc-q="${currentLang === "en" ? `Open ${escapeHTML(title)}` : `Buka dokumen ${escapeHTML(title)}`}">${escapeHTML(t("askChatbot"))}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPbmEvaluations() {
  if (!pbmEvaluationRows) return;
  const docs = pbmEvaluationsData?.documents || [];

  if (pbmEvaluationCount) pbmEvaluationCount.textContent = String(docs.length);

  if (!docs.length) {
    pbmEvaluationRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noPbmEvaluations"))}</p>`;
    return;
  }

  pbmEvaluationRows.innerHTML = docs
    .map((doc) => {
      const title = pbmEvaluationTitle(doc);
      return `
        <article class="pbm-evaluation-card">
          <span class="badge">${escapeHTML(t("pbmEvalArchive"))}</span>
          <div class="pbm-evaluation-period">
            <span>${escapeHTML(currentLang === "en" ? doc.semesterEn || doc.semester : doc.semester)}</span>
            <strong>${escapeHTML(doc.academicYear)}</strong>
          </div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(pbmEvaluationDescription(doc))}</p>
          <div class="pbm-evaluation-meta">
            <span>${escapeHTML(t("pbmEvalSemester"))}: ${escapeHTML(currentLang === "en" ? doc.semesterEn || doc.semester : doc.semester)}</span>
            <span>${escapeHTML(t("pbmEvalAcademicYear"))}: ${escapeHTML(doc.academicYear)}</span>
            <span>${escapeHTML(formatFileSize(doc.sizeKb))}</span>
          </div>
          <div class="pbm-evaluation-actions">
            <a href="${escapeHTML(doc.href)}" target="_blank" rel="noopener">${escapeHTML(t("openPdf"))}</a>
            <button type="button" data-pbm-evaluation-q="${currentLang === "en" ? `Open ${escapeHTML(title)}` : `Buka dokumen ${escapeHTML(title)}`}">${escapeHTML(t("askChatbot"))}</button>
          </div>
        </article>
      `;
    })
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
    alumniRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noAlumni"))}</p>`;
    return;
  }

  alumniRows.innerHTML = filtered
    .map((record) => `
      <article class="alumni-card">
        <div class="alumni-card-head">
          <span class="badge">${escapeHTML(record.tahun_lulus || t("graduationYear"))}</span>
          <span>${escapeHTML(record.tema || t("appliedStatistics"))}</span>
        </div>
        <h3>${escapeHTML(record.nama)}</h3>
        <p class="syllabus-code">${escapeHTML(record.npm || t("npmUnavailable"))}</p>
        <p>${escapeHTML(record.judul)}</p>
        <small>${escapeHTML(t("advisors"))}: ${escapeHTML([record.pembimbing1, record.pembimbing2].filter(Boolean).join(` ${t("and")} `) || t("notAvailable"))}</small>
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

async function loadMaterials() {
  try {
    const response = await fetch("data/materials.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Katalog materi tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.materials?.length) throw new Error("Katalog materi kosong.");
    materialsData = data;
  } catch (error) {
    materialsData = { total: 0, materials: [], categories: [] };
  }
  renderMaterials();
}

async function loadThesisGuides() {
  try {
    const response = await fetch("data/thesis_guides.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Panduan tesis tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.guides?.length) throw new Error("Panduan tesis kosong.");
    thesisGuidesData = data;
  } catch (error) {
    thesisGuidesData = { total: 0, guides: [] };
  }
  renderThesisGuides();
}

async function loadTracerStudies() {
  try {
    const response = await fetch("data/tracer_studies.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Tracer study tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.reports?.length) throw new Error("Tracer study kosong.");
    tracerStudiesData = data;
  } catch (error) {
    tracerStudiesData = { total: 0, reports: [], years: [] };
  }
  renderTracerStudies();
}

async function loadCurriculumDocs() {
  try {
    const response = await fetch("data/curriculum_docs.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Dokumen kurikulum tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.documents?.length) throw new Error("Dokumen kurikulum kosong.");
    curriculumDocsData = data;
  } catch (error) {
    curriculumDocsData = { total: 0, documents: [] };
  }
  renderCurriculumDocs();
}

async function loadPbmEvaluations() {
  try {
    const response = await fetch("data/pbm_evaluations.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Dokumen Evaluasi PBM tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.documents?.length) throw new Error("Dokumen Evaluasi PBM kosong.");
    pbmEvaluationsData = data;
  } catch (error) {
    pbmEvaluationsData = { total: 0, documents: [] };
  }
  renderPbmEvaluations();
}

async function loadKnowledge() {
  try {
    const response = await fetch("data/knowledge_chunks.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Knowledge base tidak dapat dimuat.");
    const chunks = await response.json();
    if (!Array.isArray(chunks) || !chunks.length) throw new Error("Knowledge base kosong.");
    knowledge = chunks;
    if (knowledgeCount) knowledgeCount.textContent = String(chunks.length);
    if (location.protocol.startsWith("http")) {
      try {
        const healthResponse = await fetch("/api/health", { cache: "no-store" });
        if (healthResponse.ok) {
          const health = await healthResponse.json();
          serverChatAvailable = true;
          serverApiReady = Boolean(health.apiReady);
        } else {
          serverChatAvailable = false;
          serverApiReady = false;
        }
      } catch (error) {
        serverChatAvailable = false;
        serverApiReady = false;
      }
    }
    setMode(serverChatAvailable ? (serverApiReady ? "modeServerApi" : "modeServer") : "modeLocalStatic");
  } catch (error) {
    knowledge = FALLBACK_KNOWLEDGE;
    serverChatAvailable = false;
    serverApiReady = false;
    if (knowledgeCount) knowledgeCount.textContent = String(FALLBACK_KNOWLEDGE.length);
    setMode("modeLocalFallback");
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

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang === "en" ? "en" : "id";
    try {
      localStorage.setItem(LANGUAGE_KEY, currentLang);
    } catch (error) {
      // Ignore storage errors; the current page still updates.
    }
    applyLanguage();
  });
});

document.querySelectorAll("[data-q-id], [data-q]").forEach((button) => {
  button.addEventListener("click", () => ask(promptQuestion(button)));
});

courseSearch.addEventListener("input", renderCourses);
syllabusSearch?.addEventListener("input", renderSyllabus);
alumniSearch?.addEventListener("input", renderAlumni);
materialSearch?.addEventListener("input", renderMaterials);
materialRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-material-q]");
  if (!button) return;
  ask(button.dataset.materialQ);
});
thesisGuideRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-guide-q]");
  if (!button) return;
  ask(button.dataset.guideQ);
});
tracerStudyRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tracer-q]");
  if (!button) return;
  ask(button.dataset.tracerQ);
});
curriculumDocRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-curriculum-doc-q]");
  if (!button) return;
  ask(button.dataset.curriculumDocQ);
});
pbmEvaluationRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pbm-evaluation-q]");
  if (!button) return;
  ask(button.dataset.pbmEvaluationQ);
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;
  questionInput.value = "";
  ask(question);
});

applyLanguage();
mountCommentIntegration();
mountAnalyticsIntegration();
loadKnowledge();
loadSyllabus();
loadMaterials();
loadThesisGuides();
loadTracerStudies();
loadCurriculumDocs();
loadPbmEvaluations();
loadAlumni();
