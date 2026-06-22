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
let specialMomentsData = null;
let testimonialsData = null;
let curriculumDocsData = null;
let lectureEvaluationsData = null;
let pbmEvaluationsData = null;
let rpsDocsData = null;
let s3SiteData = null;
let activeFilter = "Semua";
let activeRpsFilter = "Semua";
let activeS3RpsFilter = "Semua";
let activeSpecialMomentYear = "";
let serverChatAvailable = false;
let serverApiReady = false;

const COMMENT_INTEGRATION = {
  giscus: {
    repo: "mindra-bit/pasca-statistika-web",
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
const rpsSearch = document.getElementById("rpsSearch");
const rpsRows = document.getElementById("rpsRows");
const rpsCount = document.getElementById("rpsCount");
const rpsSummary = document.getElementById("rpsSummary");
const s3StudyLoad = document.getElementById("s3StudyLoad");
const s3RpsTotal = document.getElementById("s3RpsTotal");
const s3CplTotal = document.getElementById("s3CplTotal");
const s3VisionText = document.getElementById("s3VisionText");
const s3MissionRows = document.getElementById("s3MissionRows");
const s3ObjectiveRows = document.getElementById("s3ObjectiveRows");
const s3ObjectiveCount = document.getElementById("s3ObjectiveCount");
const s3DocumentRows = document.getElementById("s3DocumentRows");
const s3DocumentCount = document.getElementById("s3DocumentCount");
const s3ProfileRows = document.getElementById("s3ProfileRows");
const s3CplRows = document.getElementById("s3CplRows");
const s3SurveyRows = document.getElementById("s3SurveyRows");
const s3RpsSearch = document.getElementById("s3RpsSearch");
const s3RpsSummary = document.getElementById("s3RpsSummary");
const s3RpsRows = document.getElementById("s3RpsRows");
const s3RpsCount = document.getElementById("s3RpsCount");
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
const specialMomentSummary = document.getElementById("specialMomentSummary");
const specialMomentTabs = document.getElementById("specialMomentTabs");
const specialMomentRows = document.getElementById("specialMomentRows");
const specialMomentCount = document.getElementById("specialMomentCount");
const specialMomentTotal = document.getElementById("specialMomentTotal");
const testimonialRows = document.getElementById("testimonialRows");
const testimonialTotal = document.getElementById("testimonialTotal");
const curriculumDocRows = document.getElementById("curriculumDocRows");
const curriculumDocCount = document.getElementById("curriculumDocCount");
const lectureEvaluationRows = document.getElementById("lectureEvaluationRows");
const lectureEvaluationCount = document.getElementById("lectureEvaluationCount");
const pbmEvaluationRows = document.getElementById("pbmEvaluationRows");
const pbmEvaluationCount = document.getElementById("pbmEvaluationCount");
const modeLabel = document.getElementById("modeLabel");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const questionInput = document.getElementById("questionInput");
const knowledgeCount = document.getElementById("knowledgeCount");
const goatTotalCount = document.getElementById("goatTotalCount");
const goatDashboardLink = document.getElementById("goatDashboardLink");
const workspaceLayout = document.getElementById("program-workspace");
const workspacePanelIds = [
  "kalender-akademik",
  "program-profile",
  "kurikulum",
  "dokumen-kurikulum",
  "mata-kuliah",
  "silabus",
  "rps",
  "materi",
  "panduan-tesis",
  "evaluasi-perkuliahan",
  "evaluasi-pbm",
  "lulusan",
  "tracer-studi",
  "special-moment",
  "video-testimoni",
  "web-s3",
  "komentar",
  "chatbot"
];
let activeWorkspaceProgram = "none";
let activePanelScrollTarget = "";
let pendingWorkspaceSelection = null;

const I18N = {
  id: {
    topbarCampus: "FMIPA Universitas Padjadjaran",
    topbarCurriculum: "Portal S2 dan S3 Statistika",
    navProfile: "Profil",
    navCurriculum: "Kurikulum",
    navDocs: "Dokumen",
    navVisionMission: "Visi Misi",
    navGraduateProfile: "Profil Lulusan",
    navPbmEvaluations: "Evaluasi",
    navGuide: "Panduan",
    navCourses: "Mata Kuliah",
    navMaterials: "Materi",
    navGraduates: "Lulusan",
    navTracer: "Tracer",
    navSpecialMoment: "Momen",
    navS3: "Web S3",
    navSyllabus: "Silabus",
    navRps: "RPS",
    navLectureEvaluations: "Monitoring",
    navComments: "Komentar",
    navChatbot: "Chatbot",
    navAsk: "Tanya Prodi",
    workspaceMenuTitle: "Menu Program",
    workspaceAcademicCalendar: "Kalender Akademik",
    workspaceProgramProfile: "Program Profile",
    workspaceVisionMission: "Visi dan Misi",
    workspaceGraduateProfile: "Profil Lulusan",
    programProfileCombinedTitle: "Profil lengkap S2 Statistika Terapan.",
    programProfileCombinedText: "Ringkasan profil program, visi misi, dan profil lulusan ditempatkan dalam satu panel agar informasi awal S2 langsung utuh saat dibuka.",
    workspaceCurriculum: "Struktur Kurikulum",
    workspaceCurriculumDocs: "Dokumen Kurikulum",
    workspaceCourses: "Daftar Mata Kuliah",
    workspaceSyllabus: "Silabus Mata Kuliah",
    workspaceRps: "RPS Mata Kuliah",
    workspaceMaterials: "Materi Mata Kuliah",
    workspaceThesisGuide: "Panduan Tesis",
    workspaceLectureEvaluation: "Evaluasi Perkuliahan",
    workspacePbmEvaluation: "Evaluasi PBM",
    workspaceGraduates: "Lulusan & Tesis",
    workspaceTracer: "Tracer Studi",
    workspaceSpecialMoment: "Special Moment",
    workspaceTestimonials: "Video Testimoni",
    workspaceS3: "Web S3 Statistika",
    workspaceS3Overview: "Ringkasan S3",
    workspaceS3VisionMission: "Visi dan Misi",
    workspaceComments: "Komentar & Jejak",
    workspaceChatbot: "Chatbot Prodi",
    heroKicker: "Program Pascasarjana",
    heroTitle: "Pasca Sarjana Statistika FMIPA UNPAD",
    heroLead: "Portal akademik terpadu untuk Program S2 Statistika Terapan dan Program S3 Statistika FMIPA Universitas Padjadjaran.",
    heroAsk: "Tanya Chatbot",
    heroCurriculum: "Lihat Kurikulum",
    heroS3: "Web S3",
    frontS2Title: "S2 Statistika Terapan",
    frontS2Text: "Informasi kurikulum OBE 2026, kalender akademik, silabus, RPS, materi kuliah, panduan tesis, lulusan, tracer study, dan komentar pengunjung.",
    frontS2Meta: "Magister",
    frontS2Open: "Buka Informasi S2",
    frontS3Title: "S3 Statistika",
    frontS3Text: "Informasi Program Doktor Statistika: visi, misi, tujuan, profil lulusan, CPL, dokumen akademik, dan katalog RPS S3 berbasis PDF.",
    frontS3Meta: "Doktor",
    frontS3Open: "Buka Informasi S3",
    frontS2MenuTitle: "Menu Program Informasi S2 Statistika Terapan",
    frontS3MenuTitle: "Menu Program Informasi S3 Statistika",
    statSks: "SKS S2 Statistika Terapan",
    statSchemes: "SKS S3 Statistika",
    statAreas: "RPS S2 tersedia",
    statCurriculum: "RPS S3 tersedia",
    profileKicker: "Profil Program",
    profileTitle: "Pusat pendidikan magister statistika yang unggul dalam pendidikan dan riset.",
    profileText: "Program ini menyiapkan lulusan yang mampu mengembangkan metode statistika, mengelola riset, dan menerapkan analisis data pada masalah nyata melalui pendekatan interdisipliner.",
    aeeLabel: "AEE",
    aeeText: "Kelulusan 4 tahun terakhir 100% tepat waktu.",
    pillBusiness: "Bisnis dan Industri",
    pillSocial: "Sosial",
    pillActuarial: "Aktuaria",
    pillBiostat: "Biostatistik",
    pillDataScience: "Sains Data",
    visionMissionKicker: "Visi dan Misi",
    visionMissionTitle: "Arah pengembangan Program Magister Statistika Terapan.",
    visionMissionText: "Visi dan misi program studi dirangkum dari dokumen Kurikulum OBE 2026 sebagai dasar penyelenggaraan pendidikan, riset, kerja sama, dan publikasi ilmiah.",
    visionLabel: "Visi",
    visionTitle: "Menjadi pusat pendidikan Magister Statistika yang unggul.",
    visionText: "Menjadi pusat pendidikan Magister Statistika yang unggul dalam pendidikan dan riset, diakui secara internasional, serta memberikan dampak nyata bagi masyarakat, khususnya dalam bidang statistika bisnis dan industri, statistika sosial, aktuaria, biostatistika, dan sains data.",
    missionLabel: "Misi",
    missionTitle: "Pendidikan, riset, kerja sama, dan publikasi ilmiah.",
    mission1: "Menyelenggarakan pendidikan dan pembelajaran magister dengan fokus pengembangan dan penerapan statistika di bisnis dan industri, sosial, aktuaria, biostatistika, dan sains data.",
    mission2: "Melaksanakan penelitian yang berdampak dan relevan dengan kebutuhan masyarakat serta perkembangan ilmu statistika.",
    mission3: "Mengembangkan kerja sama nasional dan internasional untuk memperkuat pendidikan, riset, dan jejaring akademik.",
    mission4: "Mendorong publikasi ilmiah bereputasi sebagai kontribusi program studi pada pengembangan keilmuan.",
    visionSourceTitle: "Sumber",
    visionSourceText: "Dokumen Kurikulum OBE 2026 Program Magister Statistika Terapan.",
    curriculumKicker: "Struktur Kurikulum",
    curriculumTitle: "Struktur 42 SKS dengan jalur kuliah, riset, dan RPL.",
    curriculumText: "Kurikulum OBE 2026 dirancang untuk memperkuat penguasaan teori, kemampuan analitik, kompetensi riset, rekognisi pembelajaran, dan publikasi ilmiah.",
    lectureEvalKicker: "Evaluasi Pelaksanaan Perkuliahan",
    lectureEvalTitle: "Monitoring perkuliahan setiap sesi 1-16.",
    lectureEvalText: "Blok ini berisi laporan evaluasi pelaksanaan perkuliahan per sesi/pertemuan. Ini berbeda dari Evaluasi PBM yang dilakukan pada akhir semester.",
    lectureEvalCtaLabel: "Form Monitoring Mahasiswa",
    lectureEvalCtaText: "Isi Evaluasi Ganjil MStat",
    lectureEvalCountLabel: "laporan HTML",
    lectureEvalAsk: "Tanyakan Evaluasi Perkuliahan ke chatbot",
    lectureEvalArchive: "Laporan HTML",
    lectureEvalSessions: "Sesi",
    lectureEvalMonitoring: "Monitoring mahasiswa",
    lectureEvalOpenHtml: "Buka Laporan HTML",
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
    graduateCompetencyKicker: "Profil Lulusan",
    graduateCompetencyTitle: "Profil lulusan yang fleksibel untuk akademik, riset, konsultansi, dan industri.",
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
    specialMomentKicker: "Special Moment",
    specialMomentTitle: "Galeri momen tiap angkatan 2022-2025.",
    specialMomentText: "Dokumentasi kegiatan dan kebersamaan mahasiswa ditata per angkatan agar mudah ditelusuri tanpa memuat semua foto sekaligus.",
    specialMomentTotalLabel: "Total foto",
    specialMomentShown: "foto ditampilkan",
    specialMomentPhotos: "foto",
    specialMomentOpen: "Buka foto",
    specialMomentCohort: "Angkatan",
    testimonialKicker: "Video Testimoni",
    testimonialTitle: "Cerita singkat dari keluarga S2 Statistika Terapan.",
    testimonialText: "Kumpulan video pengalaman dan kesan tentang Program S2 Statistika Terapan FMIPA Universitas Padjadjaran.",
    testimonialTotalLabel: "Total video",
    testimonialS2Only: "Khusus informasi Program S2",
    testimonialBadge: "S2 Statistika Terapan",
    testimonialPlay: "Putar video",
    testimonialUnsupported: "Browser Anda tidak mendukung pemutar video HTML5.",
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
    materialsTitle: "Materi, ringkasan, dan kontrak perkuliahan",
    materialsText: "Setiap mata kuliah dilengkapi materi HTML, ringkasan presentasi, dan kontrak perkuliahan yang dapat dibuka langsung dari satu katalog.",
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
    rpsKicker: "RPS 2026",
    rpsTitle: "Dokumen RPS mata kuliah wajib dan pilihan.",
    rpsText: "Seluruh Rencana Pembelajaran Semester dari folder @RPS 2026 disusun sebagai katalog PDF yang mudah dicari dan dibuka langsung.",
    rpsSearchLabel: "Cari RPS",
    rpsSearchPlaceholder: "Regresi, Survival, Basis Data...",
    rpsShown: "RPS tampil",
    rpsAsk: "Tanyakan RPS ke chatbot",
    rpsRequired: "Mata Kuliah Wajib",
    rpsElective: "Mata Kuliah Pilihan",
    rpsDocument: "Dokumen RPS",
    rpsCredits: "SKS",
    rpsCourseCode: "Kode MK",
    s3Kicker: "Web S3 Statistika",
    s3Title: "Program Doktor Statistika FMIPA Unpad.",
    s3Text: "Ruang informasi S3 Statistika yang memuat visi, misi, tujuan, profil lulusan, CPL, dokumen akademik, dan seluruh RPS mata kuliah/kegiatan doktoral.",
    s3StudyLoad: "Beban Studi",
    s3ResearchBased: "Kurikulum berbasis riset",
    s3FullTime: "Penuh waktu",
    s3PartTime: "Paruh waktu",
    s3Semester: "semester",
    s3RpsMetric: "RPS S3",
    s3Documents: "dokumen",
    s3CplMetric: "CPL",
    s3Outcomes: "capaian",
    s3VisionLabel: "Visi",
    s3VisionTitle: "Unggul, bereputasi internasional, dan berdampak.",
    s3MissionLabel: "Misi",
    s3MissionTitle: "Pendidikan doktoral, riset orisinal, komputasi, dan kolaborasi.",
    s3ObjectivesLabel: "Tujuan",
    s3DocsLabel: "Dokumen Akademik",
    s3ProfilesKicker: "Profil Lulusan S3",
    s3ProfilesTitle: "Peran lulusan doktor dalam akademik, riset, kebijakan, industri, kesehatan, survei, risiko, konsultansi, dan energi.",
    s3CplKicker: "Capaian Pembelajaran Lulusan",
    s3CplTitle: "Delapan CPL jenjang doktoral sesuai KKNI Level 9.",
    s3SurveysKicker: "Survei S3",
    s3SurveysTitle: "Masukan pemangku kepentingan dan minat calon pendaftar S3 Statistika.",
    s3SurveysText: "Dua formulir ini digunakan untuk menjaring masukan visi-misi, profil lulusan, minat studi doktoral, dan bidang riset yang dituju.",
    s3SurveyFill: "Isi survei",
    s3SurveyArchive: "Buka arsip HTML",
    s3RpsKicker: "RPS S3 Statistika",
    s3RpsTitle: "Katalog RPS mata kuliah dan kegiatan akademik S3.",
    s3RpsText: "Seluruh RPS dari folder @Dokumen S3/RPS_S3_Statistika disusun sebagai katalog PDF yang bisa dicari, dibuka, dan ditanyakan ke chatbot.",
    s3RpsSearchLabel: "Cari RPS S3",
    s3RpsSearchPlaceholder: "SUR, diseminasi, riset dasar...",
    s3RpsShown: "RPS tampil",
    s3RpsAsk: "Tanyakan RPS S3 ke chatbot",
    s3OpenDocx: "Buka PDF",
    s3AskChatbot: "Tanya chatbot",
    s3Credits: "SKS",
    s3GroupAll: "Semua RPS S3",
    s3NoData: "Data Web S3 belum tersedia.",
    s3NoRps: "RPS S3 yang dicari belum ditemukan.",
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
    chatText: "Jawaban chatbot ditambatkan pada ekstraksi dokumen Kurikulum OBE 2026, dokumen kurikulum 2020-2026, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM, panduan tesis, silabus mata kuliah, PDF RPS, katalog materi HTML, data lulusan, tracer study, Special Moment, dan ringkasan administratif dari SMUP Program Magister.",
    knowledgePieces: "potongan pengetahuan terindeks",
    assistantName: "Asisten Prodi",
    loadingKnowledge: "Memuat knowledge base",
    promptSks: "Berapa SKS?",
    promptPath: "Jalur studi",
    promptVision: "Visi misi",
    promptProfile: "Profil lulusan",
    promptDataScience: "Sains data",
    promptSyllabus: "Silabus ML",
    promptRps: "RPS Regresi",
    promptMaterials: "Materi HTML",
    promptGuide: "Panduan tesis",
    promptThesisFlow: "SUR SKR SAM",
    promptAlumni: "Tesis lulusan",
    promptTracer: "Tracer 2025",
    promptCurriculumDocs: "Dokumen 2026",
    promptLectureEvaluation: "Evaluasi Perkuliahan",
    promptPbmEvaluation: "Evaluasi PBM",
    welcomeText: "Silakan ajukan pertanyaan tentang kurikulum 2026, dokumen kurikulum 2020-2026, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM, jalur studi, SKS, CPL, panduan tesis, SUR, SKR, SAM, silabus, PDF RPS, materi kuliah HTML, tracer study, Special Moment, tesis lulusan, biaya, pendaftaran, dan profil lulusan S2 Statistika Terapan.",
    welcomeSources: "Sumber utama: Kurikulum OBE 2026, dokumen kurikulum, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM, panduan tesis, data lulusan, tracer study, Special Moment, RPS 2026, dan katalog materi kuliah",
    questionLabel: "Pertanyaan",
    questionPlaceholder: "Tulis pertanyaan...",
    send: "Kirim",
    footerText: "Website profesional dengan chatbot berbasis knowledge base kurikulum.",
    backTop: "Kembali ke atas",
    openPdf: "Buka PDF",
    openReport: "Buka laporan",
    openMaterial: "Buka Materi",
    openSummary: "Buka Ringkasan",
    openContract: "Buka Kontrak",
    askChatbot: "Tanya chatbot",
    pages: "halaman",
    folder: "Folder",
    fileHtml: "File HTML",
    noThesisGuides: "Panduan tesis belum tersedia.",
    noCurriculumDocs: "Dokumen kurikulum belum tersedia.",
    noLectureEvaluations: "Laporan Evaluasi Pelaksanaan Perkuliahan belum tersedia.",
    noPbmEvaluations: "Dokumen Evaluasi PBM belum tersedia.",
    noCourses: "Tidak ada mata kuliah yang cocok.",
    noSyllabus: "Silabus yang dicari belum ditemukan.",
    noRpsDocs: "Dokumen RPS yang dicari belum ditemukan.",
    noMaterials: "Materi yang dicari belum ditemukan.",
    noTracer: "Laporan tracer study belum tersedia.",
    noSpecialMoments: "Foto Special Moment belum tersedia.",
    noTestimonials: "Video testimoni S2 belum tersedia.",
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
    topbarCurriculum: "Statistics Master's and Doctoral Portal",
    navProfile: "Profile",
    navCurriculum: "Curriculum",
    navDocs: "Documents",
    navVisionMission: "Vision Mission",
    navGraduateProfile: "Graduate Profile",
    navPbmEvaluations: "Evaluation",
    navGuide: "Guides",
    navCourses: "Courses",
    navMaterials: "Materials",
    navGraduates: "Graduates",
    navTracer: "Tracer",
    navSpecialMoment: "Moments",
    navS3: "S3 Site",
    navSyllabus: "Syllabus",
    navRps: "RPS",
    navLectureEvaluations: "Monitoring",
    navComments: "Comments",
    navChatbot: "Chatbot",
    navAsk: "Ask Program",
    workspaceMenuTitle: "Program Menu",
    workspaceAcademicCalendar: "Academic Calendar",
    workspaceProgramProfile: "Program Profile",
    workspaceVisionMission: "Vision and Mission",
    workspaceGraduateProfile: "Graduate Profile",
    programProfileCombinedTitle: "Complete profile of the Applied Statistics Master's Program.",
    programProfileCombinedText: "Program profile, vision and mission, and graduate profile are combined in one panel so the first S2 view feels complete.",
    workspaceCurriculum: "Curriculum Structure",
    workspaceCurriculumDocs: "Curriculum Documents",
    workspaceCourses: "Course List",
    workspaceSyllabus: "Course Syllabus",
    workspaceRps: "Course RPS",
    workspaceMaterials: "Course Materials",
    workspaceThesisGuide: "Thesis Guides",
    workspaceLectureEvaluation: "Course Evaluation",
    workspaceSpecialMoment: "Special Moment",
    workspaceTestimonials: "Video Testimonials",
    workspacePbmEvaluation: "Learning Evaluation",
    workspaceGraduates: "Graduates & Theses",
    workspaceTracer: "Tracer Studies",
    workspaceS3: "Doctoral Statistics Site",
    workspaceS3Overview: "S3 Overview",
    workspaceS3VisionMission: "Vision and Mission",
    workspaceComments: "Comments & Visits",
    workspaceChatbot: "Program Chatbot",
    heroKicker: "Graduate Programs",
    heroTitle: "Graduate Statistics Programs, FMIPA UNPAD",
    heroLead: "An integrated academic portal for the Applied Statistics Master's Program and Doctoral Program in Statistics at FMIPA Universitas Padjadjaran.",
    heroAsk: "Ask Chatbot",
    heroCurriculum: "View Curriculum",
    heroS3: "S3 Site",
    frontS2Title: "Applied Statistics Master's Program",
    frontS2Text: "Information on the 2026 OBE curriculum, academic calendar, syllabi, RPS, course materials, thesis guides, graduates, tracer studies, and visitor comments.",
    frontS2Meta: "Master's",
    frontS2Open: "Open S2 Information",
    frontS3Title: "Doctoral Program in Statistics",
    frontS3Text: "Doctoral program information: vision, mission, objectives, graduate profiles, learning outcomes, academic documents, and PDF-based doctoral RPS catalog.",
    frontS3Meta: "Doctoral",
    frontS3Open: "Open S3 Information",
    frontS2MenuTitle: "Applied Statistics Master's Information Menu",
    frontS3MenuTitle: "Doctoral Statistics Information Menu",
    statSks: "S2 Applied Statistics credits",
    statSchemes: "S3 Statistics credits",
    statAreas: "S2 RPS available",
    statCurriculum: "S3 RPS available",
    profileKicker: "Program Profile",
    profileTitle: "A master's education center in statistics with strength in teaching and research.",
    profileText: "The program prepares graduates to develop statistical methods, manage research, and apply data analysis to real problems through interdisciplinary approaches.",
    aeeLabel: "AEE",
    aeeText: "100% of graduates completed on time over the last four years.",
    pillBusiness: "Business and Industry",
    pillSocial: "Social Statistics",
    pillActuarial: "Actuarial",
    pillBiostat: "Biostatistics",
    pillDataScience: "Data Science",
    visionMissionKicker: "Vision and Mission",
    visionMissionTitle: "The development direction of the Applied Statistics Master's Program.",
    visionMissionText: "The program vision and mission are summarized from the 2026 OBE Curriculum document as the foundation for education, research, partnerships, and scientific publication.",
    visionLabel: "Vision",
    visionTitle: "To become an excellent master's education center in statistics.",
    visionText: "To become a master's education center in statistics that excels in education and research, is internationally recognized, and creates real impact for society, particularly in business and industrial statistics, social statistics, actuarial science, biostatistics, and data science.",
    missionLabel: "Mission",
    missionTitle: "Education, research, partnerships, and scientific publication.",
    mission1: "Deliver master's education and learning focused on developing and applying statistics in business and industry, social fields, actuarial science, biostatistics, and data science.",
    mission2: "Conduct impactful research that is relevant to societal needs and the development of statistical science.",
    mission3: "Develop national and international partnerships to strengthen education, research, and academic networks.",
    mission4: "Encourage reputable scientific publications as the program's contribution to knowledge development.",
    visionSourceTitle: "Source",
    visionSourceText: "2026 OBE Curriculum document of the Applied Statistics Master's Program.",
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
    lectureEvalKicker: "Course Delivery Evaluation",
    lectureEvalTitle: "Session-by-session monitoring from session 1 to 16.",
    lectureEvalText: "This block contains course delivery evaluation reports by session/meeting. It is different from PBM evaluations conducted at the end of the semester.",
    lectureEvalCtaLabel: "Student Monitoring Form",
    lectureEvalCtaText: "Submit Odd Semester MStat Evaluation",
    lectureEvalCountLabel: "HTML report",
    lectureEvalAsk: "Ask the chatbot about course evaluation",
    lectureEvalArchive: "HTML Report",
    lectureEvalSessions: "Sessions",
    lectureEvalMonitoring: "Student monitoring",
    lectureEvalOpenHtml: "Open HTML Report",
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
    graduateCompetencyKicker: "Graduate Profile",
    graduateCompetencyTitle: "Flexible graduate profiles for academia, research, consulting, and industry.",
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
    specialMomentKicker: "Special Moment",
    specialMomentTitle: "Photo gallery by cohort 2022-2025.",
    specialMomentText: "Student activities and shared moments are organized by cohort so visitors can browse them easily without loading every photo at once.",
    specialMomentTotalLabel: "Total photos",
    specialMomentShown: "photos shown",
    specialMomentPhotos: "photos",
    specialMomentOpen: "Open photo",
    specialMomentCohort: "Cohort",
    testimonialKicker: "Video Testimonials",
    testimonialTitle: "Short stories from the Applied Statistics Master's community.",
    testimonialText: "A collection of experiences and reflections on the Applied Statistics Master's Program at FMIPA Universitas Padjadjaran.",
    testimonialTotalLabel: "Total videos",
    testimonialS2Only: "Applied Statistics Master's information only",
    testimonialBadge: "Applied Statistics Master's",
    testimonialPlay: "Play video",
    testimonialUnsupported: "Your browser does not support HTML5 video playback.",
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
    materialsTitle: "Course materials, summaries, and learning contracts",
    materialsText: "Each course includes HTML material, a presentation summary, and a learning contract available from one catalog.",
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
    rpsKicker: "RPS 2026",
    rpsTitle: "RPS documents for required and elective courses.",
    rpsText: "All Semester Learning Plan documents from the @RPS 2026 folder are organized as a searchable PDF catalog that can be opened directly.",
    rpsSearchLabel: "Search RPS",
    rpsSearchPlaceholder: "Regression, Survival, Database...",
    rpsShown: "RPS shown",
    rpsAsk: "Ask the chatbot about RPS",
    rpsRequired: "Required Courses",
    rpsElective: "Elective Courses",
    rpsDocument: "RPS Document",
    rpsCredits: "Credits",
    rpsCourseCode: "Course code",
    s3Kicker: "Doctoral Statistics Site",
    s3Title: "Doctoral Program in Statistics, FMIPA Unpad.",
    s3Text: "An information space for the doctoral program containing vision, mission, objectives, graduate profiles, learning outcomes, academic documents, and all doctoral course/activity RPS files.",
    s3StudyLoad: "Study Load",
    s3ResearchBased: "Research-based curriculum",
    s3FullTime: "Full-time",
    s3PartTime: "Part-time",
    s3Semester: "semesters",
    s3RpsMetric: "Doctoral RPS",
    s3Documents: "documents",
    s3CplMetric: "Learning outcomes",
    s3Outcomes: "outcomes",
    s3VisionLabel: "Vision",
    s3VisionTitle: "Excellent, internationally reputable, and impactful.",
    s3MissionLabel: "Mission",
    s3MissionTitle: "Doctoral education, original research, computation, and collaboration.",
    s3ObjectivesLabel: "Objectives",
    s3DocsLabel: "Academic Documents",
    s3ProfilesKicker: "Doctoral Graduate Profiles",
    s3ProfilesTitle: "Doctoral graduate roles in academia, research, policy, industry, health, surveys, risk, consulting, and energy.",
    s3CplKicker: "Program Learning Outcomes",
    s3CplTitle: "Eight doctoral learning outcomes aligned with KKNI Level 9.",
    s3SurveysKicker: "Doctoral Surveys",
    s3SurveysTitle: "Stakeholder input and prospective applicant interest for the doctoral statistics program.",
    s3SurveysText: "These two forms collect input on vision, mission, graduate profile, doctoral study interest, and intended research fields.",
    s3SurveyFill: "Fill survey",
    s3SurveyArchive: "Open HTML archive",
    s3RpsKicker: "Doctoral Statistics RPS",
    s3RpsTitle: "RPS catalog for doctoral courses and academic activities.",
    s3RpsText: "All RPS files from @Dokumen S3/RPS_S3_Statistika are organized as a searchable PDF catalog that can be opened and queried through the chatbot.",
    s3RpsSearchLabel: "Search doctoral RPS",
    s3RpsSearchPlaceholder: "SUR, dissemination, research foundation...",
    s3RpsShown: "RPS shown",
    s3RpsAsk: "Ask chatbot about doctoral RPS",
    s3OpenDocx: "Open PDF",
    s3AskChatbot: "Ask chatbot",
    s3Credits: "credits",
    s3GroupAll: "All doctoral RPS",
    s3NoData: "Doctoral program data is not available yet.",
    s3NoRps: "No matching doctoral RPS was found.",
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
    chatText: "The chatbot answers are grounded in the 2026 OBE curriculum extraction, 2020-2026 curriculum documents, course delivery evaluations, PBM evaluations, thesis guides, course syllabi, RPS PDFs, HTML learning material catalog, graduate data, tracer studies, Special Moment gallery, and administrative summaries from SMUP.",
    knowledgePieces: "indexed knowledge chunks",
    assistantName: "Program Assistant",
    loadingKnowledge: "Loading knowledge base",
    promptSks: "Credits?",
    promptPath: "Study paths",
    promptVision: "Vision mission",
    promptProfile: "Graduate profile",
    promptDataScience: "Data science",
    promptSyllabus: "ML syllabus",
    promptRps: "Regression RPS",
    promptMaterials: "HTML material",
    promptGuide: "Thesis guide",
    promptThesisFlow: "SUR SKR SAM",
    promptAlumni: "Graduate theses",
    promptTracer: "Tracer 2025",
    promptCurriculumDocs: "2026 Document",
    promptLectureEvaluation: "Course Evaluation",
    promptPbmEvaluation: "PBM Evaluation",
    welcomeText: "Ask about the 2026 curriculum, 2020-2026 curriculum documents, course delivery evaluations, PBM evaluations, study pathways, credits, learning outcomes, thesis guides, SUR, SKR, SAM, syllabi, RPS PDFs, HTML learning materials, tracer studies, Special Moment gallery, graduate theses, fees, admissions, and graduate profiles.",
    welcomeSources: "Main sources: 2026 OBE Curriculum, curriculum documents, course delivery evaluations, PBM evaluations, thesis guides, graduate data, tracer studies, Special Moment gallery, RPS 2026, and learning material catalog",
    questionLabel: "Question",
    questionPlaceholder: "Type a question...",
    send: "Send",
    footerText: "A professional website with a curriculum knowledge-base chatbot.",
    backTop: "Back to top",
    openPdf: "Open PDF",
    openReport: "Open report",
    openMaterial: "Open Material",
    openSummary: "Open Summary",
    openContract: "Open Contract",
    askChatbot: "Ask chatbot",
    pages: "pages",
    folder: "Folder",
    fileHtml: "HTML file",
    noThesisGuides: "Thesis guides are not available yet.",
    noCurriculumDocs: "Curriculum documents are not available yet.",
    noLectureEvaluations: "Course delivery evaluation reports are not available yet.",
    noPbmEvaluations: "PBM evaluation documents are not available yet.",
    noCourses: "No matching courses found.",
    noSyllabus: "No matching syllabus found.",
    noRpsDocs: "No matching RPS document found.",
    noMaterials: "No matching materials found.",
    noTracer: "Tracer study reports are not available yet.",
    noSpecialMoments: "Special Moment photos are not available yet.",
    noTestimonials: "Applied Statistics Master's testimonial videos are not available yet.",
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

function activeWorkspaceIdFromHash() {
  const id = decodeURIComponent(location.hash.replace(/^#/, ""));
  return workspacePanelIds.includes(id) ? id : "kalender-akademik";
}

function workspaceProgramForPanel(panelId, fallback = activeWorkspaceProgram) {
  if (panelId === "web-s3") return "s3";
  if (panelId === "kalender-akademik") return "none";
  if (panelId === "chatbot" || panelId === "komentar") {
    return fallback === "s3" ? "s3" : "s2";
  }
  return workspacePanelIds.includes(panelId) ? "s2" : "none";
}

function setWorkspaceProgram(program = "none") {
  activeWorkspaceProgram = ["s2", "s3"].includes(program) ? program : "none";
  if (workspaceLayout) {
    workspaceLayout.dataset.program = activeWorkspaceProgram;
  }
}

function scrollWorkspaceToLayout() {
  if (!workspaceLayout) return;
  const targetTop = window.scrollY + workspaceLayout.getBoundingClientRect().top;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
}

function scrollWithinWorkspacePanel(anchorId) {
  if (!anchorId) return;
  const anchor = document.getElementById(anchorId);
  const activePanel = document.querySelector(".workspace-panels > .section.active-panel");
  if (!anchor || !activePanel || !activePanel.contains(anchor)) return;
  const panelRect = activePanel.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  const top = activePanel.scrollTop + anchorRect.top - panelRect.top - 14;
  activePanel.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function setActiveWorkspacePanel(
  panelId = activeWorkspaceIdFromHash(),
  shouldScroll = false,
  programOverride = "",
  panelScrollTarget = ""
) {
  const activeId = workspacePanelIds.includes(panelId) ? panelId : "kalender-akademik";
  const nextProgram = programOverride || workspaceProgramForPanel(activeId);
  const nextPanelScrollTarget = panelScrollTarget || (activeId === "web-s3" ? "s3-overview" : "");
  setWorkspaceProgram(nextProgram);
  activePanelScrollTarget = nextPanelScrollTarget;
  document.querySelectorAll(".workspace-panels > .section").forEach((section) => {
    section.classList.toggle("active-panel", section.id === activeId);
  });
  document.querySelectorAll(".workspace-menu-list [data-workspace-target]").forEach((link) => {
    const linkProgram = link.dataset.programSelect || activeWorkspaceProgram;
    const linkPanelScrollTarget = link.dataset.panelScroll || "";
    const sameProgram = linkProgram === activeWorkspaceProgram;
    const samePanel = link.dataset.workspaceTarget === activeId;
    const sameSubPanel = activePanelScrollTarget
      ? linkPanelScrollTarget === activePanelScrollTarget
      : !linkPanelScrollTarget;
    const isActive = sameProgram && samePanel && sameSubPanel;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
  if (shouldScroll && workspaceLayout) {
    requestAnimationFrame(scrollWorkspaceToLayout);
    window.setTimeout(scrollWorkspaceToLayout, 120);
    window.setTimeout(scrollWorkspaceToLayout, 700);
  }
  if (activePanelScrollTarget) {
    const scrollSubPanel = () => scrollWithinWorkspacePanel(activePanelScrollTarget);
    requestAnimationFrame(scrollSubPanel);
    window.setTimeout(scrollSubPanel, 180);
    window.setTimeout(scrollSubPanel, 760);
  }
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
  renderRpsDocs();
  renderMaterials();
  renderTracerStudies();
  renderSpecialMoments();
  renderTestimonials();
  renderS3Site();
  renderLectureEvaluations();
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
  if (/(rps|rencana pembelajaran semester|course plan|semester learning plan|download rps|unduh rps|buka rps)/.test(normalized)) {
    synonyms.push("rps rencana pembelajaran semester course plan semester learning plan dokumen pdf mata kuliah wajib pilihan");
  }
  if (/(s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional)/.test(normalized)) {
    synonyms.push("s3 doktor program doktor statistika doctoral doctorate disertasi promosi doktor pnd und spd rps s3 visi misi tujuan profil lulusan cpl doctoral learning outcomes");
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
  if (/(special moment|momen|foto angkatan|galeri|gallery|dokumentasi)/.test(normalized)) {
    synonyms.push("special moment momen galeri foto angkatan cohort dokumentasi kebersamaan mahasiswa");
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
  const asksSpecialMoment = /special moment|momen|foto angkatan|galeri|gallery|dokumentasi/.test(normalizedQuestion);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(normalizedQuestion);
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|course delivery evaluation|course evaluation|student monitoring/.test(normalizedQuestion);
  const asksPbmEvaluation = /evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(normalizedQuestion);
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

  if (chunk.id?.startsWith("special-moment-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 22;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 65;
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

  if (chunk.id?.startsWith("lecture-evaluation-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 24;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 74;
  }

  if (chunk.id?.startsWith("rps-doc-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 26;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 78;
  }

  if (chunk.id?.startsWith("s3-")) {
    const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
    const specificTokens = tokens.filter((token) => !GENERIC_QUERY_TERMS.has(token));
    for (const token of specificTokens) {
      if (hasWholeToken(metadata, token)) score += 30;
    }
    const specificPhrase = specificTokens.join(" ");
    if (specificPhrase.length > 4 && metadata.includes(specificPhrase)) score += 90;
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
      "2. Course syllabi, RPS/course plan PDFs, topics, references, and HTML learning materials.",
      "3. Thesis guides, SUR, SKR, and Master's Final Defense.",
      "4. S3 Statistics information: vision, mission, objectives, graduate profiles, CPL, academic documents, and doctoral RPS files.",
      "5. Graduate thesis data, tracer study reports, Special Moment gallery, curriculum PDF archives, course delivery evaluation reports, PBM evaluation documents, fees, and SMUP admissions.",
      "",
      serverApiReady
        ? "Generative API mode is active, but answers remain grounded in the program knowledge base."
        : "Free-form answers outside the program knowledge base require enabling a generative AI API on the server."
    ].join("\n")
    : [
      "Saya bisa menjawab pertanyaan berdasarkan knowledge base website, terutama:",
      "1. Kurikulum 2026, SKS, jalur studi, RPL, CPL, dan profil lulusan.",
      "2. Silabus mata kuliah, PDF RPS, bahan kajian, referensi, dan materi HTML.",
      "3. Panduan tesis, SUR, SKR, dan Sidang Akhir Magister.",
      "4. Informasi S3 Statistika: visi, misi, tujuan, profil lulusan, CPL, dokumen akademik, dan RPS doktoral.",
      "5. Data tesis lulusan, tracer study, Special Moment, arsip PDF kurikulum, Evaluasi Pelaksanaan Perkuliahan, dokumen Evaluasi PBM, biaya, dan pendaftaran SMUP.",
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

function lectureEvaluationTitle(doc) {
  return currentLang === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function lectureEvaluationDescription(doc) {
  return currentLang === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function rpsDocTitle(doc) {
  return currentLang === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function rpsDocDescription(doc) {
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

function findRpsDoc(question, hits = []) {
  const docs = rpsDocsData?.documents || [];
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

  const queryTokens = tokenize(question).filter((token) => !GENERIC_QUERY_TERMS.has(token));
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
  const docs = lectureEvaluationsData?.documents || [];
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
  const docs = s3SiteData?.rps?.documents || [];
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

function buildS3Answer(question, hits = []) {
  if (!isS3Question(question, hits) || !s3SiteData) return null;
  const text = normalize(question);
  const docs = s3SiteData.documents || [];
  const sources = docs.slice(0, 3).map((doc) => ({ title: doc.title, url: doc.href }));
  const asksRps = /rps|rencana pembelajaran semester|course plan|semester learning plan|buka|download|unduh|sur|pnd|und|spd|diseminasi/.test(text);

  if (asksRps) {
    const selected = findS3RpsDoc(question, hits);
    const group = s3RpsGroupFromQuestion(question);
    const rpsDocs = selected
      ? [selected]
      : (s3SiteData.rps?.documents || []).filter((doc) => !group || doc.group === group);
    if (rpsDocs.length) {
      if (selected) {
        const answer = currentLang === "en"
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
          mode: "Local knowledge base"
        };
      }

      const list = rpsDocs
        .slice(0, 20)
        .map((doc, index) => `${index + 1}. ${currentLang === "en" ? doc.courseTitleEn || doc.courseTitle : doc.courseTitle} (${doc.group}, ${doc.credits || "-"} SKS) - ${doc.href}`)
        .join("\n");
      return {
        answer: currentLang === "en"
          ? `The S3 Statistics site contains ${rpsDocs.length} doctoral RPS documents${group ? ` in ${group}` : ""}.\n\n${list}`
          : `Web S3 Statistika memuat ${rpsDocs.length} dokumen RPS doktoral${group ? ` pada kelompok ${group}` : ""}.\n\n${list}`,
        sources: rpsDocs.slice(0, 8).map((doc) => ({ title: doc.title, url: doc.href })),
        mode: "Local knowledge base"
      };
    }
  }

  if (/dokumen|kurikulum|akreditasi|urgensi|pdf|docx|file/.test(text)) {
    const list = docs
      .map((doc, index) => `${index + 1}. ${doc.title} - ${doc.href}`)
      .join("\n");
    return {
      answer: currentLang === "en"
        ? `The S3 Statistics academic documents available on the site are:\n\n${list}`
        : `Dokumen akademik S3 Statistika yang tersedia di website:\n\n${list}`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (/visi/.test(text) && !/misi/.test(text)) {
    return {
      answer: `Visi Program Studi Doktor Statistika:\n\n${s3SiteData.vision}`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (/misi/.test(text) && !/visi/.test(text)) {
    return {
      answer: `Misi Program Studi Doktor Statistika:\n\n${numberedText(s3SiteData.missions || [], 10)}`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (/visi/.test(text) && /misi/.test(text)) {
    return {
      answer: [
        "Visi Program Studi Doktor Statistika:",
        s3SiteData.vision,
        "",
        "Misi:",
        numberedText(s3SiteData.missions || [], 10)
      ].join("\n"),
      sources,
      mode: "Local knowledge base"
    };
  }

  if (/tujuan|objective/.test(text)) {
    return {
      answer: `Tujuan Program Studi Doktor Statistika:\n\n${numberedText(s3SiteData.objectives || [], 10)}`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (/profil|lulusan|karir|karier|pekerjaan|graduate profile/.test(text)) {
    const list = (s3SiteData.graduateProfiles || [])
      .map((profile, index) => `${index + 1}. ${profile.title}: ${profile.description} Kompetensi utama: ${profile.competencies}`)
      .join("\n");
    return {
      answer: `Profil lulusan Program Studi Doktor Statistika:\n\n${list}`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (/cpl|capaian|learning outcome|outcome/.test(text)) {
    const list = (s3SiteData.cpl || [])
      .map((item) => `${item.code} - ${item.domain}: ${item.text}`)
      .join("\n");
    return {
      answer: `Capaian Pembelajaran Lulusan Program Studi Doktor Statistika:\n\n${list}`,
      sources,
      mode: "Local knowledge base"
    };
  }

  const structure = (s3SiteData.program?.structure || [])
    .map((item) => `${item.label}: ${item.credits} SKS`)
    .join("; ");
  return {
    answer: [
      "Web S3 Statistika memuat informasi Program Doktor Statistika FMIPA Unpad.",
      `Beban studi: ${s3SiteData.program?.studyLoad || "54 SKS"}. Penuh waktu: ${s3SiteData.program?.fullTime || "6 semester"}. Paruh waktu: ${s3SiteData.program?.partTime || "8 semester"}.`,
      `Struktur: ${structure}.`,
      `RPS S3 tersedia: ${s3SiteData.rps?.total || s3SiteData.rps?.documents?.length || 0} dokumen.`
    ].join("\n"),
    sources,
    mode: "Local knowledge base"
  };
}

function buildRpsDocAnswer(question, hits = []) {
  const text = normalize(question);
  const asksRpsDoc = /rps|rencana pembelajaran semester|course plan|semester learning plan|buka rps|download rps|unduh rps/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("rps-doc-"));
  if (!asksRpsDoc) return null;

  const selected = findRpsDoc(question, hits);
  const group = /pilihan|elective/.test(text) ? "Pilihan" : (/wajib|required/.test(text) ? "Wajib" : "");
  const docs = selected
    ? [selected]
    : (rpsDocsData?.documents || []).filter((doc) => !group || doc.group === group);
  if (!docs.length) return null;

  if (selected) {
    const answer = currentLang === "en"
      ? [
        `${rpsDocTitle(selected)}: ${rpsDocDescription(selected)}`,
        `Course group: ${selected.groupEn || selected.group}.`,
        `Credits: ${selected.credits || "-"}.`,
        selected.code ? `Course code: ${selected.code}.` : "",
        `File size: ${formatFileSize(selected.sizeKb)}.`,
        `PDF: ${selected.href}`
      ].filter(Boolean).join("\n")
      : [
        `${rpsDocTitle(selected)}: ${rpsDocDescription(selected)}`,
        `Kelompok mata kuliah: ${selected.group}.`,
        `SKS: ${selected.credits || "-"}.`,
        selected.code ? `Kode mata kuliah: ${selected.code}.` : "",
        `Ukuran file: ${formatFileSize(selected.sizeKb)}.`,
        `PDF: ${selected.href}`
      ].filter(Boolean).join("\n");

    return {
      answer,
      sources: [{ title: rpsDocTitle(selected), url: selected.href }],
      mode: "Local knowledge base"
    };
  }

  const label = group || (currentLang === "en" ? "all groups" : "semua kelompok");
  const list = docs
    .slice(0, 28)
    .map((doc, index) => `${index + 1}. ${currentLang === "en" ? doc.courseTitleEn || doc.courseTitle : doc.courseTitle} (${currentLang === "en" ? doc.groupEn || doc.group : doc.group}, ${doc.credits || "-"} SKS) - ${doc.href}`)
    .join("\n");

  return {
    answer: currentLang === "en"
      ? `There are ${docs.length} RPS 2026 documents for ${label}. They are separated into required and elective courses on the website.\n\n${list}`
      : `Tersedia ${docs.length} dokumen RPS 2026 untuk ${label}. Di website, RPS dipisahkan antara mata kuliah wajib dan pilihan.\n\n${list}`,
    sources: docs.slice(0, 12).map((doc) => ({ title: rpsDocTitle(doc), url: doc.href })),
    mode: "Local knowledge base"
  };
}

function buildLectureEvaluationAnswer(question, hits = []) {
  const text = normalize(question);
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|sesi 1|sesi 16|course delivery evaluation|course evaluation|student monitoring/.test(text);
  if (!asksLectureEvaluation) return null;

  const selected = findLectureEvaluation(question, hits);
  const docs = selected ? [selected] : (lectureEvaluationsData?.documents || []);
  if (!docs.length) return null;

  const answer = docs
    .map((doc) => {
      if (currentLang === "en") {
        return [
          `${lectureEvaluationTitle(doc)}: ${lectureEvaluationDescription(doc)}`,
          `Purpose: session-by-session monitoring from session ${doc.sessions || "1-16"}.`,
          `This is different from PBM evaluations conducted at the end of the semester.`,
          `HTML report: ${doc.href}`,
          `Student monitoring form: ${doc.monitoringUrl || lectureEvaluationsData?.monitoringUrl || ""}`
        ].join("\n");
      }
      return [
        `${lectureEvaluationTitle(doc)}: ${lectureEvaluationDescription(doc)}`,
        `Tujuan: monitoring perkuliahan per sesi/pertemuan, sesi ${doc.sessions || "1-16"}.`,
        `Ini berbeda dari Evaluasi PBM yang dilakukan pada akhir semester.`,
        `Laporan HTML: ${doc.href}`,
        `Form monitoring mahasiswa: ${doc.monitoringUrl || lectureEvaluationsData?.monitoringUrl || ""}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: docs.map((doc) => ({ title: lectureEvaluationTitle(doc), url: doc.href })),
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
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|course delivery evaluation|course evaluation|student monitoring/.test(text);
  const asksPbmEvaluation = /evaluasi pbm|pbm|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
  const asksS3 = /s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional/.test(text);
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
  if (asksLectureEvaluation) return null;
  if (asksPbmEvaluation) return null;
  if (asksS3) return null;
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
  const structuredS3 = buildS3Answer(question, hits);
  const structuredRpsDoc = buildRpsDocAnswer(question, hits);
  const structuredSyllabus = buildSyllabusAnswer(question, hits);
  const structuredMaterial = buildMaterialAnswer(question, hits);
  const structuredTracerStudy = buildTracerStudyAnswer(question, hits);
  const structuredCurriculumDoc = buildCurriculumDocAnswer(question, hits);
  const structuredLectureEvaluation = buildLectureEvaluationAnswer(question, hits);
  const structuredPbmEvaluation = buildPbmEvaluationAnswer(question, hits);
  const structuredThesisGuide = buildThesisGuideAnswer(question);

  if (structuredS3) return structuredS3;
  if (structuredRpsDoc) return structuredRpsDoc;
  if (structuredSyllabus) return structuredSyllabus;
  if (structuredMaterial) return structuredMaterial;
  if (structuredTracerStudy) return structuredTracerStudy;
  if (structuredCurriculumDoc) return structuredCurriculumDoc;
  if (structuredLectureEvaluation) return structuredLectureEvaluation;
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
        ? "I have not found that information in the program knowledge base. I can answer the curriculum, syllabi, RPS/course plan PDFs, HTML learning materials, thesis guides, graduate data, tracer studies, curriculum documents, course delivery evaluations, PBM evaluations, fees, and admissions that have been indexed. Free-form answers outside this knowledge base require enabling a generative AI API on the server."
        : "Saya belum menemukan informasi tersebut dalam knowledge base prodi. Saat ini saya bisa menjawab kurikulum, silabus, PDF RPS, materi HTML, panduan tesis, data lulusan, tracer study, dokumen kurikulum, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM, biaya, dan pendaftaran yang sudah terindeks. Jawaban bebas di luar knowledge base memerlukan API AI generatif yang aktif di server.",
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
        : hits[0]?.id?.startsWith("s3-")
          ? (currentLang === "en" ? "I found relevant Doctoral Statistics site information:" : "Saya menemukan informasi Web S3 Statistika yang relevan:")
        : hits[0]?.id?.startsWith("tracer-study-")
          ? (currentLang === "en" ? "I found relevant tracer study reports:" : "Saya menemukan laporan tracer study yang relevan:")
          : hits[0]?.id?.startsWith("special-moment-")
            ? (currentLang === "en" ? "I found relevant Special Moment gallery entries:" : "Saya menemukan galeri Special Moment yang relevan:")
            : hits[0]?.id?.startsWith("curriculum-doc-")
              ? (currentLang === "en" ? "I found relevant curriculum documents:" : "Saya menemukan dokumen kurikulum yang relevan:")
              : hits[0]?.id?.startsWith("lecture-evaluation-")
                ? (currentLang === "en" ? "I found relevant course delivery evaluation reports:" : "Saya menemukan laporan Evaluasi Pelaksanaan Perkuliahan yang relevan:")
                : hits[0]?.id?.startsWith("pbm-evaluation-")
                  ? (currentLang === "en" ? "I found relevant PBM evaluation documents:" : "Saya menemukan dokumen Evaluasi PBM yang relevan:")
                  : hits[0]?.id?.startsWith("rps-doc-")
                    ? (currentLang === "en" ? "I found relevant RPS documents:" : "Saya menemukan dokumen RPS yang relevan:")
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

function rpsGroupLabel(doc) {
  return currentLang === "en" ? doc.groupEn || groupLabel(doc.group) : groupLabel(doc.group);
}

function renderRpsDocs() {
  if (!rpsRows) return;
  const docs = rpsDocsData?.documents || [];
  const query = normalize(rpsSearch?.value || "");
  const filtered = docs.filter((doc) => {
    const matchesFilter = activeRpsFilter === "Semua" || doc.group === activeRpsFilter;
    const haystack = [
      doc.title,
      doc.titleEn,
      doc.courseTitle,
      doc.courseTitleEn,
      doc.code,
      doc.group,
      doc.file,
      doc.folder
    ].join(" ");
    return matchesFilter && (!query || normalize(haystack).includes(query));
  });

  if (rpsCount) rpsCount.textContent = String(filtered.length);

  const groups = rpsDocsData?.groups || [];
  if (rpsSummary) {
    rpsSummary.innerHTML = groups
      .map((group) => {
        const label = currentLang === "en" ? group.labelEn || group.label : group.labelId || group.label;
        const groupName = group.id === "pilihan" ? "Pilihan" : "Wajib";
        return `
          <button class="rps-summary-card${activeRpsFilter === groupName ? " active" : ""}" type="button" data-rps-filter="${escapeHTML(groupName)}">
            <span>${escapeHTML(label)}</span>
            <strong>${escapeHTML(group.total || 0)}</strong>
            <small>${escapeHTML(t("rpsDocument"))}</small>
          </button>
        `;
      })
      .join("");
  }

  document.querySelectorAll("[data-rps-filter]").forEach((button) => {
    const filter = button.dataset.rpsFilter;
    button.classList.toggle("active", filter === activeRpsFilter);
  });

  if (!filtered.length) {
    rpsRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noRpsDocs"))}</p>`;
    return;
  }

  rpsRows.innerHTML = filtered
    .map((doc) => {
      const title = currentLang === "en" ? doc.courseTitleEn || doc.courseTitle : doc.courseTitle;
      const subtitle = currentLang === "en" && doc.courseTitleEn ? doc.courseTitle : doc.courseTitleEn || "";
      const code = doc.code || "-";
      return `
        <article class="rps-card">
          <div class="rps-card-head">
            <span class="badge">${escapeHTML(rpsGroupLabel(doc))}</span>
            <span>${escapeHTML(t("rpsDocument"))}</span>
          </div>
          <h3>${escapeHTML(title)}</h3>
          ${subtitle && subtitle !== title ? `<p class="rps-subtitle">${escapeHTML(subtitle)}</p>` : ""}
          <p>${escapeHTML(rpsDocDescription(doc))}</p>
          <div class="rps-meta">
            <span>${escapeHTML(t("rpsCourseCode"))}: ${escapeHTML(code)}</span>
            <span>${escapeHTML(t("rpsCredits"))}: ${escapeHTML(doc.credits || "-")}</span>
            <span>${escapeHTML(formatFileSize(doc.sizeKb))}</span>
          </div>
          <div class="rps-actions">
            <a href="${escapeHTML(doc.href)}" target="_blank" rel="noopener">${escapeHTML(t("openPdf"))}</a>
            <button type="button" data-rps-q="${currentLang === "en" ? `Open ${escapeHTML(doc.titleEn || doc.title)}` : `Buka ${escapeHTML(doc.titleId || doc.title)}`}">${escapeHTML(t("askChatbot"))}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderS3Site() {
  if (!s3VisionText && !s3RpsRows) return;
  const data = s3SiteData;

  if (!data) {
    if (s3MissionRows) s3MissionRows.innerHTML = "";
    if (s3ObjectiveRows) s3ObjectiveRows.innerHTML = `<p class="empty-note">${escapeHTML(t("s3NoData"))}</p>`;
    if (s3DocumentRows) s3DocumentRows.innerHTML = "";
    if (s3ProfileRows) s3ProfileRows.innerHTML = "";
    if (s3CplRows) s3CplRows.innerHTML = "";
    if (s3SurveyRows) s3SurveyRows.innerHTML = "";
    if (s3RpsRows) s3RpsRows.innerHTML = `<p class="empty-note">${escapeHTML(t("s3NoRps"))}</p>`;
    return;
  }

  if (s3StudyLoad) s3StudyLoad.textContent = data.program?.studyLoad || "54 SKS";
  if (s3RpsTotal) s3RpsTotal.textContent = String(data.rps?.total || data.rps?.documents?.length || 0);
  if (s3CplTotal) s3CplTotal.textContent = String(data.cpl?.length || 0);
  if (s3VisionText) s3VisionText.textContent = data.vision || "";

  if (s3MissionRows) {
    s3MissionRows.innerHTML = (data.missions || [])
      .map((mission) => `<li>${escapeHTML(mission)}</li>`)
      .join("");
  }

  if (s3ObjectiveCount) s3ObjectiveCount.textContent = String(data.objectives?.length || 0);
  if (s3ObjectiveRows) {
    s3ObjectiveRows.innerHTML = (data.objectives || [])
      .map((objective, index) => `
        <article class="s3-mini-row">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <p>${escapeHTML(objective)}</p>
        </article>
      `)
      .join("");
  }

  if (s3DocumentCount) s3DocumentCount.textContent = String(data.documents?.length || 0);
  if (s3DocumentRows) {
    s3DocumentRows.innerHTML = (data.documents || [])
      .map((doc) => `
        <article class="s3-document-card">
          <div>
            <strong>${escapeHTML(doc.title)}</strong>
            <p>${escapeHTML(doc.description)}</p>
            <small>${escapeHTML(doc.format || "PDF")} · ${escapeHTML(formatFileSize(doc.sizeKb))}</small>
          </div>
          <a href="${escapeHTML(doc.href)}" target="_blank" rel="noopener">${escapeHTML(t("s3OpenDocx"))}</a>
        </article>
      `)
      .join("");
  }

  if (s3ProfileRows) {
    s3ProfileRows.innerHTML = (data.graduateProfiles || [])
      .map((profile) => {
        const title = currentLang === "en" ? profile.titleEn || profile.title : profile.title;
        return `
          <article class="s3-profile-card">
            <span>${escapeHTML(profile.code)}</span>
            <h4>${escapeHTML(title)}</h4>
            <p>${escapeHTML(profile.description)}</p>
            <small>${escapeHTML(profile.competencies)}</small>
          </article>
        `;
      })
      .join("");
  }

  if (s3CplRows) {
    s3CplRows.innerHTML = (data.cpl || [])
      .map((item) => `
        <article class="s3-cpl-card">
          <div>
            <span>${escapeHTML(item.code)}</span>
            <strong>${escapeHTML(item.domain)}</strong>
          </div>
          <p>${escapeHTML(item.text)}</p>
        </article>
      `)
      .join("");
  }

  if (s3SurveyRows) {
    s3SurveyRows.innerHTML = (data.surveys || [])
      .map((survey) => {
        const title = currentLang === "en" ? survey.titleEn || survey.title : survey.title;
        const description = currentLang === "en" ? survey.descriptionEn || survey.description : survey.description;
        return `
          <article class="s3-survey-card">
            <div class="s3-survey-content">
              <span>${escapeHTML(survey.format || "HTML")} · ${escapeHTML(formatFileSize(survey.sizeKb))}</span>
              <h4>${escapeHTML(title)}</h4>
              <p>${escapeHTML(description)}</p>
              <small>${escapeHTML(survey.shortUrl || "")}</small>
            </div>
            <div class="s3-survey-actions">
              <a class="primary" href="${escapeHTML(survey.shortUrl || survey.href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t("s3SurveyFill"))}</a>
              <a href="${escapeHTML(survey.href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t("s3SurveyArchive"))}</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  renderS3RpsDocs();
}

function renderS3RpsDocs() {
  if (!s3RpsRows) return;
  const docs = s3SiteData?.rps?.documents || [];
  const query = normalize(s3RpsSearch?.value || "");
  const filtered = docs.filter((doc) => {
    const matchesFilter = activeS3RpsFilter === "Semua" || doc.group === activeS3RpsFilter;
    const haystack = [
      doc.title,
      doc.titleEn,
      doc.courseTitle,
      doc.courseTitleEn,
      doc.group,
      doc.groupEn,
      doc.description,
      doc.file
    ].join(" ");
    return matchesFilter && (!query || normalize(haystack).includes(query));
  });

  if (s3RpsCount) s3RpsCount.textContent = String(filtered.length);

  if (s3RpsSummary) {
    const allSummary = {
      label: t("s3GroupAll"),
      filter: "Semua",
      total: docs.length,
      credits: s3SiteData?.rps?.totalCredits || docs.reduce((sum, doc) => sum + Number(doc.credits || 0), 0)
    };
    const groupSummaries = (s3SiteData?.rps?.groups || []).map((group) => ({
      label: currentLang === "en" ? group.labelEn || group.label : group.label,
      filter: group.label,
      total: group.total,
      credits: group.credits
    }));
    s3RpsSummary.innerHTML = [allSummary, ...groupSummaries]
      .map((group) => `
        <button class="s3-rps-summary-card${activeS3RpsFilter === group.filter ? " active" : ""}" type="button" data-s3-rps-filter="${escapeHTML(group.filter)}">
          <span>${escapeHTML(group.label)}</span>
          <strong>${escapeHTML(group.total || 0)}</strong>
          <small>${escapeHTML(group.credits || 0)} ${escapeHTML(t("s3Credits"))}</small>
        </button>
      `)
      .join("");
  }

  if (!filtered.length) {
    s3RpsRows.innerHTML = `<p class="empty-note">${escapeHTML(t("s3NoRps"))}</p>`;
    return;
  }

  s3RpsRows.innerHTML = filtered
    .map((doc) => {
      const title = currentLang === "en" ? doc.courseTitleEn || doc.courseTitle : doc.courseTitle;
      const subtitle = currentLang === "en" && doc.courseTitleEn ? doc.courseTitle : doc.courseTitleEn || "";
      const group = currentLang === "en" ? doc.groupEn || doc.group : doc.group;
      const question = currentLang === "en"
        ? `Open doctoral RPS ${doc.courseTitleEn || doc.courseTitle}`
        : `Buka RPS S3 ${doc.courseTitle}`;
      return `
        <article class="s3-rps-card">
          <div class="s3-rps-card-head">
            <span class="badge">${escapeHTML(group)}</span>
            <span>${escapeHTML(doc.format || "PDF")}</span>
          </div>
          <h4>${escapeHTML(title)}</h4>
          ${subtitle && subtitle !== title ? `<p class="s3-rps-subtitle">${escapeHTML(subtitle)}</p>` : ""}
          <p>${escapeHTML(doc.description)}</p>
          <div class="s3-rps-meta">
            <span>${escapeHTML(doc.credits || "-")} ${escapeHTML(t("s3Credits"))}</span>
            <span>${escapeHTML(formatFileSize(doc.sizeKb))}</span>
          </div>
          <div class="rps-actions">
            <a href="${escapeHTML(doc.href)}" target="_blank" rel="noopener">${escapeHTML(t("s3OpenDocx"))}</a>
            <button type="button" data-s3-q="${escapeHTML(question)}">${escapeHTML(t("s3AskChatbot"))}</button>
          </div>
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
      material.summaryFile,
      material.contractFile,
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
          <a class="material-action material-action--content" href="${escapeHTML(material.viewerHref || material.href)}" target="_blank" rel="noopener">${escapeHTML(t("openMaterial"))}</a>
          <a class="material-action material-action--summary" href="${escapeHTML(material.summaryHref)}" target="_blank" rel="noopener">${escapeHTML(t("openSummary"))}</a>
          <a class="material-action material-action--contract" href="${escapeHTML(material.contractHref)}" target="_blank" rel="noopener">${escapeHTML(t("openContract"))}</a>
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

function specialMomentCohortTitle(cohort) {
  return currentLang === "en" ? cohort.titleEn || cohort.title : cohort.titleId || cohort.title;
}

function specialMomentPhotoTitle(photo) {
  return currentLang === "en" ? photo.titleEn || photo.title : photo.titleId || photo.title;
}

function renderSpecialMoments() {
  if (!specialMomentRows) return;
  const cohorts = specialMomentsData?.cohorts || [];

  if (specialMomentTotal) specialMomentTotal.textContent = String(specialMomentsData?.totalPhotos || 0);

  if (!cohorts.length) {
    if (specialMomentSummary) specialMomentSummary.innerHTML = "";
    if (specialMomentTabs) specialMomentTabs.innerHTML = "";
    if (specialMomentCount) specialMomentCount.textContent = "0";
    specialMomentRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noSpecialMoments"))}</p>`;
    return;
  }

  if (!activeSpecialMomentYear || !cohorts.some((cohort) => cohort.year === activeSpecialMomentYear)) {
    activeSpecialMomentYear = cohorts[cohorts.length - 1]?.year || cohorts[0].year;
  }

  if (specialMomentSummary) {
    specialMomentSummary.innerHTML = cohorts
      .map((cohort) => `
        <button class="special-moment-cohort${cohort.year === activeSpecialMomentYear ? " active" : ""}" type="button" data-special-year="${escapeHTML(cohort.year)}">
          ${cohort.cover ? `<img src="${escapeHTML(cohort.cover)}" alt="" loading="lazy" />` : ""}
          <span class="special-moment-cohort-copy">
            <span>${escapeHTML(t("specialMomentCohort"))}</span>
            <strong>${escapeHTML(cohort.year)}</strong>
            <small>${escapeHTML(cohort.total)} ${escapeHTML(t("specialMomentPhotos"))}</small>
          </span>
        </button>
      `)
      .join("");
  }

  if (specialMomentTabs) {
    specialMomentTabs.innerHTML = cohorts
      .map((cohort) => `
        <button class="${cohort.year === activeSpecialMomentYear ? "active" : ""}" type="button" data-special-year="${escapeHTML(cohort.year)}" role="tab" aria-selected="${cohort.year === activeSpecialMomentYear ? "true" : "false"}">
          ${escapeHTML(currentLang === "en" ? `Cohort ${cohort.year}` : `Angkatan ${cohort.year}`)}
        </button>
      `)
      .join("");
  }

  const activeCohort = cohorts.find((cohort) => cohort.year === activeSpecialMomentYear) || cohorts[0];
  const photos = activeCohort?.photos || [];
  if (specialMomentCount) specialMomentCount.textContent = String(photos.length);

  specialMomentRows.innerHTML = photos
    .map((photo, index) => `
      <article class="special-moment-card">
        <a href="${escapeHTML(photo.href)}" target="_blank" rel="noopener" aria-label="${escapeHTML(t("specialMomentOpen"))}: ${escapeHTML(specialMomentPhotoTitle(photo))}">
          <img src="${escapeHTML(photo.href)}" alt="${escapeHTML(specialMomentPhotoTitle(photo))}" loading="lazy" decoding="async" />
          <span class="special-moment-caption">
            <span>${escapeHTML(currentLang === "en" ? activeCohort.cohortEn || `Cohort ${activeCohort.year}` : activeCohort.titleId || activeCohort.title)}</span>
            <strong>${escapeHTML(index + 1)}</strong>
          </span>
        </a>
      </article>
    `)
    .join("");
}

function formatVideoDuration(seconds) {
  const totalSeconds = Math.max(0, Math.round(Number(seconds || 0)));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function renderTestimonials() {
  if (!testimonialRows) return;
  const videos = testimonialsData?.videos || [];

  if (testimonialTotal) testimonialTotal.textContent = String(videos.length);

  if (!videos.length) {
    testimonialRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noTestimonials"))}</p>`;
    return;
  }

  testimonialRows.innerHTML = videos
    .map((video) => {
      const title = currentLang === "en" ? video.titleEn || video.titleId : video.titleId || video.titleEn;
      const description = currentLang === "en"
        ? video.descriptionEn || video.descriptionId
        : video.descriptionId || video.descriptionEn;
      const resolution = video.width && video.height ? `${video.width} × ${video.height}` : video.format || "MP4";
      return `
        <article class="testimonial-card ${escapeHTML(video.orientation || "landscape")}">
          <div class="testimonial-media">
            <video controls playsinline preload="metadata" poster="${escapeHTML(video.poster || "")}" aria-label="${escapeHTML(t("testimonialPlay"))}: ${escapeHTML(title)}">
              <source src="${escapeHTML(video.href)}" type="${escapeHTML(video.mimeType || "video/mp4")}" />
              ${escapeHTML(t("testimonialUnsupported"))}
            </video>
          </div>
          <div class="testimonial-copy">
            <div class="testimonial-meta">
              <span>${escapeHTML(t("testimonialBadge"))}</span>
              <small>${escapeHTML(formatVideoDuration(video.durationSeconds))} · ${escapeHTML(resolution)} · ${escapeHTML(formatFileSize(video.sizeKb))}</small>
            </div>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(description)}</p>
          </div>
        </article>
      `;
    })
    .join("");

  const players = [...testimonialRows.querySelectorAll("video")];
  players.forEach((player) => {
    player.addEventListener("play", () => {
      players.forEach((otherPlayer) => {
        if (otherPlayer !== player && !otherPlayer.paused) otherPlayer.pause();
      });
    });
  });
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

function renderLectureEvaluations() {
  if (!lectureEvaluationRows) return;
  const docs = lectureEvaluationsData?.documents || [];

  if (lectureEvaluationCount) lectureEvaluationCount.textContent = String(docs.length);

  if (!docs.length) {
    lectureEvaluationRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noLectureEvaluations"))}</p>`;
    return;
  }

  lectureEvaluationRows.innerHTML = docs
    .map((doc) => {
      const title = lectureEvaluationTitle(doc);
      const monitoringUrl = doc.monitoringUrl || lectureEvaluationsData?.monitoringUrl || "https://bit.ly/EvaluasiGanjilMStat";
      return `
        <article class="lecture-evaluation-card">
          <span class="badge">${escapeHTML(t("lectureEvalArchive"))}</span>
          <div class="lecture-evaluation-period">
            <span>${escapeHTML(currentLang === "en" ? doc.semesterEn || doc.semester : doc.semester)}</span>
            <strong>${escapeHTML(doc.academicYear)}</strong>
          </div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(lectureEvaluationDescription(doc))}</p>
          <div class="lecture-evaluation-meta">
            <span>${escapeHTML(t("lectureEvalSessions"))}: ${escapeHTML(doc.sessions || "1-16")}</span>
            <span>${escapeHTML(doc.format || "HTML")}</span>
            <span>${escapeHTML(formatFileSize(doc.sizeKb))}</span>
          </div>
          <div class="lecture-evaluation-actions">
            <a href="${escapeHTML(doc.href)}" target="_blank" rel="noopener">${escapeHTML(t("lectureEvalOpenHtml"))}</a>
            <a href="${escapeHTML(monitoringUrl)}" target="_blank" rel="noopener">${escapeHTML(t("lectureEvalMonitoring"))}</a>
            <button type="button" data-lecture-evaluation-q="${currentLang === "en" ? `What is ${escapeHTML(title)}?` : `Apa itu ${escapeHTML(title)}?`}">${escapeHTML(t("askChatbot"))}</button>
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

async function loadRpsDocs() {
  try {
    const response = await fetch("data/rps_docs.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Dokumen RPS tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.documents?.length) throw new Error("Dokumen RPS kosong.");
    rpsDocsData = data;
  } catch (error) {
    rpsDocsData = { total: 0, groups: [], documents: [] };
  }
  renderRpsDocs();
}

async function loadS3Site() {
  try {
    const response = await fetch("data/s3_statistika.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Data Web S3 tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.rps?.documents?.length) throw new Error("Data Web S3 kosong.");
    s3SiteData = data;
  } catch (error) {
    s3SiteData = null;
  }
  renderS3Site();
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

async function loadSpecialMoments() {
  try {
    const response = await fetch("data/special_moments.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Galeri Special Moment tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.cohorts?.length) throw new Error("Galeri Special Moment kosong.");
    specialMomentsData = data;
  } catch (error) {
    specialMomentsData = { totalCohorts: 0, totalPhotos: 0, cohorts: [] };
  }
  renderSpecialMoments();
}

async function loadTestimonials() {
  try {
    const response = await fetch("data/testimonials.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Video testimoni tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.videos?.length) throw new Error("Video testimoni kosong.");
    testimonialsData = data;
  } catch (error) {
    testimonialsData = { total: 0, totalDurationSeconds: 0, videos: [] };
  }
  renderTestimonials();
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

async function loadLectureEvaluations() {
  try {
    const response = await fetch("data/lecture_evaluations.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Laporan Evaluasi Pelaksanaan Perkuliahan tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.documents?.length) throw new Error("Laporan Evaluasi Pelaksanaan Perkuliahan kosong.");
    lectureEvaluationsData = data;
  } catch (error) {
    lectureEvaluationsData = { total: 0, documents: [], monitoringUrl: "https://bit.ly/EvaluasiGanjilMStat" };
  }
  renderLectureEvaluations();
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

document.querySelectorAll("[data-workspace-target]").forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.workspaceTarget;
    if (!target) return;
    const program = link.dataset.programSelect || workspaceProgramForPanel(target);
    const panelScrollTarget = link.dataset.panelScroll || "";
    pendingWorkspaceSelection = { target, program, panelScrollTarget };
    if (location.hash === `#${target}`) {
      setActiveWorkspacePanel(target, true, program, panelScrollTarget);
      pendingWorkspaceSelection = null;
    }
  });
});

window.addEventListener("hashchange", () => {
  const id = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (workspacePanelIds.includes(id)) {
    const pending = pendingWorkspaceSelection?.target === id ? pendingWorkspaceSelection : null;
    pendingWorkspaceSelection = null;
    setActiveWorkspacePanel(
      id,
      true,
      pending?.program || workspaceProgramForPanel(id),
      pending?.panelScrollTarget || ""
    );
  } else if (id === "home" || !id) {
    pendingWorkspaceSelection = null;
    setActiveWorkspacePanel("kalender-akademik", false, "none");
  }
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
rpsSearch?.addEventListener("input", renderRpsDocs);
s3RpsSearch?.addEventListener("input", renderS3RpsDocs);
alumniSearch?.addEventListener("input", renderAlumni);
materialSearch?.addEventListener("input", renderMaterials);
rpsRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rps-q]");
  if (!button) return;
  ask(button.dataset.rpsQ);
});
function handleRpsFilterClick(event) {
  const button = event.target.closest("[data-rps-filter]");
  if (!button) return;
  activeRpsFilter = button.dataset.rpsFilter || "Semua";
  renderRpsDocs();
}
document.querySelector(".rps-filter-tabs")?.addEventListener("click", handleRpsFilterClick);
rpsSummary?.addEventListener("click", handleRpsFilterClick);
s3RpsSummary?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-s3-rps-filter]");
  if (!button) return;
  activeS3RpsFilter = button.dataset.s3RpsFilter || "Semua";
  renderS3RpsDocs();
});
s3RpsRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-s3-q]");
  if (!button) return;
  ask(button.dataset.s3Q);
});
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
function handleSpecialMomentYearClick(event) {
  const button = event.target.closest("[data-special-year]");
  if (!button) return;
  activeSpecialMomentYear = button.dataset.specialYear || activeSpecialMomentYear;
  renderSpecialMoments();
}
specialMomentSummary?.addEventListener("click", handleSpecialMomentYearClick);
specialMomentTabs?.addEventListener("click", handleSpecialMomentYearClick);
curriculumDocRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-curriculum-doc-q]");
  if (!button) return;
  ask(button.dataset.curriculumDocQ);
});
lectureEvaluationRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lecture-evaluation-q]");
  if (!button) return;
  ask(button.dataset.lectureEvaluationQ);
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

const initialWorkspaceHash = decodeURIComponent(location.hash.replace(/^#/, ""));
const initialWorkspaceId = activeWorkspaceIdFromHash();
const initialWorkspaceProgram = workspacePanelIds.includes(initialWorkspaceHash)
  ? workspaceProgramForPanel(initialWorkspaceId, "s2")
  : "none";
setActiveWorkspacePanel(initialWorkspaceId, workspacePanelIds.includes(initialWorkspaceHash), initialWorkspaceProgram);
applyLanguage();
mountCommentIntegration();
mountAnalyticsIntegration();
loadKnowledge();
loadSyllabus();
loadRpsDocs();
loadS3Site();
loadMaterials();
loadThesisGuides();
loadTracerStudies();
loadSpecialMoments();
loadTestimonials();
loadCurriculumDocs();
loadLectureEvaluations();
loadPbmEvaluations();
loadAlumni();
