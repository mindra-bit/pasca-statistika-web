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

const INSPIRATION_VOICES = [
  {
    name: "I Gede Nyoman Mindra Jaya",
    image: "assets/inspiration/pesan-kaprodi.jpg",
    roleKey: "inspirationHeadRole",
    messageId: "Perjalanan panjang dan penuh perjuangan akhirnya membuahkan hasil. Rumah MStat akan selalu terbuka untuk kalian.",
    messageEn: "Your long and determined journey has borne fruit. The MStat home will always be open to all of you.",
    focusX: "100%", focusY: "36%", zoom: 2.35
  },
  {
    name: "Wanda Alifia",
    image: "assets/inspiration/pesan-wanda-alifia.jpg",
    messageId: "Saya bersyukur bisa belajar di bawah bimbingan Bapak, yang tidak hanya memberikan ilmu, tetapi juga motivasi dan inspirasi.",
    messageEn: "I am grateful to have learned under your guidance, which provided not only knowledge but also motivation and inspiration.",
    focusX: "99%", focusY: "0%", zoom: 2.55
  },
  {
    name: "Widi Wildani Alfarisi",
    image: "assets/inspiration/pesan-widi-wildani-alfarisi.jpg",
    messageId: "Terima kasih banyak, Pak, atas bimbingannya selama saya menjalani S2. Banyak sekali ilmu yang saya dapat dari Bapak.",
    messageEn: "Thank you for guiding me throughout my master's study. I learned so much from you.",
    focusX: "100%", focusY: "0%", zoom: 2.6
  },
  {
    name: "Najma Rafifah Putri Syaleya",
    image: "assets/inspiration/pesan-najma-rafifah-putri-syaleya.jpg",
    messageId: "Terima kasih banyak, Pak, untuk usaha, bimbingan, dan dukungannya selama ini. Semoga Bapak terus sukses dan sehat selalu.",
    messageEn: "Thank you for your effort, guidance, and support. May you always be successful and in good health.",
    focusX: "100%", focusY: "0%", zoom: 2.5
  },
  {
    name: "Fariza Alamanda Putri",
    image: "assets/inspiration/pesan-fariza-alamanda-putri.jpg",
    messageId: "Terima kasih, Pak Mindra, atas kesabaran Bapak selama membimbing kami. Banyak sekali kenangan bersama dosen dan teman-teman selama kuliah.",
    messageEn: "Thank you, Pak Mindra, for patiently guiding us. I carry many memories with our lecturers and friends throughout the program.",
    focusX: "100%", focusY: "0%", zoom: 2.55
  },
  {
    name: "Sandrina Najwa",
    image: "assets/inspiration/pesan-sandrina-najwa.jpg",
    messageId: "Terima kasih atas masukan dan sarannya. Mohon maaf jika selama sidang ada kata yang kurang berkenan.",
    messageEn: "Thank you for your feedback and advice. Please forgive any words during the defense that may have been inappropriate.",
    focusX: "100%", focusY: "0%", zoom: 2.6
  },
  {
    name: "Dila Fitriani Azuri",
    image: "assets/inspiration/pesan-dila-fitriani-azuri.jpg",
    messageId: "Terima kasih atas bimbingan dan ilmunya, serta untuk seluruh dosen dan sivitas akademika yang telah membantu kami.",
    messageEn: "Thank you for your guidance and knowledge, and to all lecturers and academic staff who supported us.",
    focusX: "93%", focusY: "0%", zoom: 2.55
  },
  {
    name: "Theresia Samaria Nauli",
    image: "assets/inspiration/pesan-theresia-samaria-nauli.jpg",
    messageId: "Terima kasih untuk semua dukungan dan bimbingan selama studi kami di Magister Statistika. Semoga Bapak selalu sehat dan dilancarkan dalam setiap kesibukan.",
    messageEn: "Thank you for all the support and guidance throughout our master's study in statistics. May you always be healthy and successful.",
    focusX: "99%", focusY: "0%", zoom: 2.55
  },
  {
    name: "Zhafira Haura",
    image: "assets/inspiration/pesan-zhafira-haura.jpg",
    messageId: "Terima kasih untuk segala ilmu, bimbingan, dan arahan sehingga kami dapat menyelesaikan perkuliahan ini.",
    messageEn: "Thank you for all the knowledge, guidance, and direction that helped us complete this academic journey.",
    focusX: "92%", focusY: "12%", zoom: 2.45
  },
  {
    name: "Dhanti Aurilia Pratiwi",
    image: "assets/inspiration/pesan-dhanti-aurilia-pratiwi.jpg",
    messageId: "Terima kasih atas bantuan dan bimbingannya sejak kami baru masuk sampai sekarang. Semoga kita terus saling terhubung.",
    messageEn: "Thank you for your help and guidance from the beginning of our studies until today. May we always stay connected.",
    focusX: "100%", focusY: "0%", zoom: 2.55
  },
  {
    name: "Muhammad Rhafi Ahdian",
    image: "assets/inspiration/pesan-muhammad-rhafi-ahdian.jpg",
    messageId: "Bapak selalu mendukung dan memotivasi kami dalam menyelesaikan perkuliahan di MStat. Semua yang telah berlalu akan selalu kami kenang.",
    messageEn: "You always supported and motivated us throughout our MStat studies. We will always remember this journey.",
    focusX: "100%", focusY: "0%", zoom: 2.6
  },
  {
    name: "Aisha Kusuma Putri",
    image: "assets/inspiration/pesan-aisha-kusuma-putri.jpg",
    messageId: "Terima kasih banyak atas bantuan selama ini dan karena selalu mengusahakan yang terbaik untuk kami semua.",
    messageEn: "Thank you for all your help and for always striving to give the very best to all of us.",
    focusX: "100%", focusY: "2%", zoom: 2.55
  },
  {
    name: "Ayu Sangrila",
    image: "assets/inspiration/pesan-ayu-sangrila.jpg",
    messageId: "Terima kasih atas bimbingan dan dukungannya, serta telah mengusahakan yang terbaik untuk kami. Semoga silaturahmi tetap terjaga.",
    messageEn: "Thank you for your guidance, support, and dedication to giving us the best. May our connection always remain strong.",
    focusX: "97%", focusY: "7%", zoom: 2.5
  },
  {
    name: "Muhammad Yasyfi Avicenna",
    image: "assets/inspiration/pesan-muhammad-yasyfi-avicenna.jpg",
    messageId: "Kami tidak akan melupakan jasa para dosen yang telah membina dan membimbing kami hingga saat ini.",
    messageEn: "We will never forget the lecturers who have nurtured and guided us throughout this journey.",
    focusX: "96%", focusY: "0%", zoom: 2.55
  },
  {
    name: "Ayu Indriani",
    image: "assets/inspiration/pesan-ayu-indriani.jpg",
    messageId: "Terima kasih atas pembelajaran dan bimbingannya, karena selalu sabar dan mengusahakan yang terbaik untuk kami.",
    messageEn: "Thank you for your teaching and guidance, for your patience, and for always doing your best for us.",
    focusX: "100%", focusY: "8%", zoom: 2.5
  },
  {
    name: "Laila Budhanti",
    image: "assets/inspiration/pesan-laila-budhanti.jpg",
    messageId: "Semua proses pembelajaran yang kami lalui terasa lebih bermakna berkat arahan dan motivasi dari Bapak.",
    messageEn: "Every part of our learning journey became more meaningful because of your guidance and encouragement.",
    focusX: "100%", focusY: "0%", zoom: 2.6
  },
  {
    name: "Aulia Rahman Al Madani",
    image: "assets/inspiration/pesan-aulia-rahman-al-madani.jpg",
    messageId: "Terima kasih atas bimbingan, ilmu, bantuan, dan arahan selama proses perkuliahan. Menjadi bagian dari MStat 23 adalah pengalaman yang berkesan.",
    messageEn: "Thank you for your guidance, knowledge, help, and direction. Being part of MStat 23 has been a memorable experience.",
    focusX: "100%", focusY: "0%", zoom: 2.55
  }
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
let graduateUserSatisfactionData = null;
let specialMomentsData = null;
let testimonialsData = null;
let curriculumDocsData = null;
let lamsamaReportsData = null;
let scholarshipsData = null;
let pkmReportsData = null;
let researchGrantsData = null;
let activeGrantYear = "all";
let pksMoaData = null;
let activePksMoaFilter = "Semua";
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
const graduateUserRows = document.getElementById("graduateUserRows");
const graduateUserCount = document.getElementById("graduateUserCount");
const specialMomentSummary = document.getElementById("specialMomentSummary");
const specialMomentTabs = document.getElementById("specialMomentTabs");
const specialMomentRows = document.getElementById("specialMomentRows");
const specialMomentCount = document.getElementById("specialMomentCount");
const specialMomentTotal = document.getElementById("specialMomentTotal");
const testimonialRows = document.getElementById("testimonialRows");
const testimonialTotal = document.getElementById("testimonialTotal");
const curriculumDocRows = document.getElementById("curriculumDocRows");
const curriculumDocCount = document.getElementById("curriculumDocCount");
const lamsamaRows = document.getElementById("lamsamaRows");
const lamsamaCount = document.getElementById("lamsamaCount");
const scholarshipRows = document.getElementById("scholarshipRows");
const scholarshipCount = document.getElementById("scholarshipCount");
const pkmRows = document.getElementById("pkmRows");
const pkmReportCount = document.getElementById("pkmReportCount");
const grantRows = document.getElementById("grantRows");
const grantSearch = document.getElementById("grantSearch");
const grantYearTabs = document.getElementById("grantYearTabs");
const grantTotalCount = document.getElementById("grantTotalCount");
const grantTotalAmount = document.getElementById("grantTotalAmount");
const grantLinkedCount = document.getElementById("grantLinkedCount");
const grantVisibleCount = document.getElementById("grantVisibleCount");
const grantVisibleAmount = document.getElementById("grantVisibleAmount");
const pksMoaRows = document.getElementById("pksMoaRows");
const pksMoaSearch = document.getElementById("pksMoaSearch");
const pksMoaVisibleCount = document.getElementById("pksMoaVisibleCount");
const pksMoaTotalCount = document.getElementById("pksMoaTotalCount");
const pksMoaNationalCount = document.getElementById("pksMoaNationalCount");
const pksMoaInternationalCount = document.getElementById("pksMoaInternationalCount");
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
  "beasiswa",
  "lamsama",
  "program-pengabdian",
  "hibah-riset",
  "pks-moa",
  "kurikulum",
  "dokumen-kurikulum",
  "mata-kuliah",
  "silabus",
  "rps",
  "materi",
  "panduan-tesis",
  "panduan-akademik",
  "evaluasi",
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
const curriculumPanelIds = [
  "kurikulum",
  "dokumen-kurikulum",
  "mata-kuliah",
  "silabus",
  "rps",
  "materi",
  "panduan-tesis",
  "panduan-akademik"
];
const evaluationPanelIds = [
  "evaluasi",
  "evaluasi-perkuliahan",
  "evaluasi-pbm"
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
    workspaceScholarships: "Beasiswa",
    workspaceLamsama: "LAMSAMA",
    workspacePkm: "Program Pengabdian",
    workspaceResearchGrants: "Hibah Riset Dosen",
    workspacePksMoa: "PKS-MoA",
    workspaceVisionMission: "Visi dan Misi",
    workspaceGraduateProfile: "Profil Lulusan",
    programProfileCombinedTitle: "Profil lengkap S2 Statistika Terapan.",
    programProfileCombinedText: "Ringkasan profil program, visi misi, dan profil lulusan ditempatkan dalam satu panel agar informasi awal S2 langsung utuh saat dibuka.",
    milestoneKicker: "Milestone Program",
    milestoneTitle: "Perjalanan pengembangan S2 Statistika Terapan.",
    milestoneText: "Milestone program ditampilkan sebagai ringkasan visual perkembangan akademik, mutu, dan capaian Program S2 Statistika Terapan FMIPA Universitas Padjadjaran.",
    inspirationKicker: "Pesan dan Inspirasi",
    inspirationTitle: "Suara dari perjalanan akademik kami.",
    inspirationText: "Pesan, kenangan, dan semangat yang tumbuh bersama keluarga besar S2 Statistika Terapan.",
    inspirationPrevious: "Pesan sebelumnya",
    inspirationNext: "Pesan berikutnya",
    inspirationFirst: "Tampilkan gambar pertama",
    inspirationSecond: "Tampilkan gambar kedua",
    inspirationCollection: "MStat Moments",
    inspirationAlumniRole: "Alumni MStat",
    inspirationHeadRole: "Ketua Program Studi",
    inspirationOpenOriginal: "Buka pesan asli",
    inspirationRegionLabel: "Kumpulan pesan dan inspirasi",
    workspaceCurriculum: "Kurikulum",
    workspaceCurriculumDocs: "Dokumen Kurikulum",
    workspaceCourses: "Daftar Mata Kuliah",
    workspaceSyllabus: "Silabus Mata Kuliah",
    workspaceRps: "RPS Mata Kuliah",
    workspaceMaterials: "Materi Mata Kuliah",
    workspaceThesisGuide: "Panduan Tesis",
    workspaceAcademicGuide: "Panduan Akademik",
    workspaceEvaluation: "Evaluasi",
    workspaceLectureEvaluation: "Evaluasi Perkuliahan",
    workspacePbmEvaluation: "Evaluasi PBM-Dosen",
    workspaceGraduates: "Lulusan & Tesis",
    workspaceTracer: "Tracer Studi",
    workspaceSpecialMoment: "Special Moment",
    workspaceTestimonials: "Video Testimoni",
    sidebarVideoKicker: "Video Profil",
    sidebarVideoTitle: "S2 Statistika FMIPA UNPAD",
    sidebarVisionVideoKicker: "Video Visi Misi",
    sidebarVisionVideoTitle: "Visi dan Misi S2 Statistika Terapan",
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
    frontS2Accreditation: "Akreditasi UNGGUL",
    frontS2Text: "Informasi kurikulum OBE 2026, beasiswa, laporan LAMSAMA, Program Pengabdian, hibah riset dosen, jejaring PKS-MoA, silabus, RPS, materi kuliah, panduan akademik, panduan tesis, lulusan, dan tracer study.",
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
    curriculumHubKicker: "Kurikulum",
    curriculumHubTitle: "Pusat akses Kurikulum S2 Statistika Terapan.",
    curriculumHubText: "Struktur kurikulum, dokumen resmi, daftar mata kuliah, silabus, RPS, materi, dan panduan akademik ditempatkan dalam satu pintu akses agar lebih mudah ditelusuri.",
    curriculumHubStructure: "Struktur Kurikulum",
    curriculumHubStructureText: "Jalur kuliah, riset, RPL, dan beban SKS",
    curriculumHubDocsText: "Arsip PDF kurikulum 2020-2026",
    curriculumHubCoursesText: "Daftar mata kuliah, SKS, dan kelompok",
    curriculumHubSyllabusText: "Deskripsi, bahan kajian, dan referensi",
    curriculumHubRpsText: "Dokumen RPS wajib dan pilihan",
    curriculumHubMaterialsText: "Materi HTML, ringkasan, dan kontrak",
    curriculumHubThesisText: "Penulisan dan pelaksanaan tesis",
    curriculumHubAcademicGuideText: "SOP dan dokumen akademik S2",
    evaluationHubKicker: "Evaluasi",
    evaluationHubTitle: "Pusat akses evaluasi akademik S2.",
    evaluationHubText: "Evaluasi perkuliahan dan Evaluasi PBM-Dosen dipisahkan sesuai tujuan, tetapi ditempatkan dalam satu pintu akses agar mudah ditemukan.",
    evaluationHubLectureText: "Monitoring pelaksanaan perkuliahan sesi 1-16 dan form evaluasi mahasiswa",
    evaluationHubPbmText: "Arsip evaluasi proses belajar mengajar dan kinerja dosen per semester",
    lectureEvalKicker: "Evaluasi Pelaksanaan Perkuliahan",
    lectureEvalTitle: "Monitoring perkuliahan setiap sesi 1-16.",
    lectureEvalText: "Blok ini berisi laporan evaluasi pelaksanaan perkuliahan per sesi/pertemuan. Ini berbeda dari Evaluasi PBM-Dosen yang dilakukan pada akhir semester.",
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
    accreditationKicker: "Akreditasi S2",
    accreditationTitle: "S2 Statistika Terapan FMIPA UNPAD",
    accreditationText: "Terakreditasi Unggul oleh LAMSAMA sebagai pengakuan atas mutu akademik Program Magister Statistika Terapan.",
    accreditationView: "Lihat sertifikat penuh",
    accreditationNumber: "Nomor sertifikat",
    accreditationValidUntil: "Berlaku sampai",
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
    lamsamaKicker: "LAMSAMA",
    lamsamaTitle: "Dokumen akreditasi LAMSAMA S2 Statistika Terapan.",
    lamsamaText: "Arsip hasil asesmen, pemantauan mutu, dan tindak lanjut akreditasi bersama Lembaga Akreditasi Mandiri Sains Alam dan Ilmu Formal.",
    lamsamaPeriodLabel: "Periode laporan",
    lamsamaCountLabel: "dokumen PDF",
    lamsamaAssessmentLabel: "Asesmen lapangan",
    lamsamaAsk: "Tanyakan LAMSAMA ke chatbot",
    lamsamaYearLabel: "Tahun laporan",
    lamsamaSequenceLabel: "Tahun ke-",
    lamsamaArchive: "Laporan Akreditasi",
    lamsamaOpen: "Buka laporan PDF",
    lamsamaAskDocument: "Tanya chatbot",
    lamsamaAssessmentDoc: "Dokumen asesmen",
    noLamsamaReports: "Dokumen LAMSAMA belum tersedia.",
    pkmKicker: "Program Pengabdian",
    pkmTitle: "Arsip kegiatan pengabdian berbasis statistika terapan.",
    pkmText: "Blok ini menghimpun laporan kegiatan Program Pengabdian sebagai dokumentasi kontribusi akademik, penerapan statistika, dan kolaborasi program studi dengan masyarakat.",
    pkmSummaryLabel: "Dokumen tersedia",
    pkmSummaryText: "laporan PDF",
    pkmFocusLabel: "Fokus kegiatan",
    pkmFocusText: "Pengabdian kepada masyarakat berbasis statistika terapan",
    pkmAsk: "Tanyakan Program Pengabdian ke chatbot",
    pkmArchive: "Laporan PKM",
    pkmPeriodLabel: "Periode",
    pkmFocusCardLabel: "Fokus",
    pkmOpen: "Buka laporan PDF",
    pkmAskDocument: "Tanya chatbot",
    noPkmReports: "Laporan Program Pengabdian belum tersedia.",
    grantKicker: "Hibah Riset Dosen",
    grantTitle: "Portofolio riset yang tumbuh dari data, kolaborasi, dan dampak.",
    grantText: "Dokumentasi hibah dan pendanaan riset dosen Statistika FMIPA UNPAD, meliputi pengembangan metode, kesehatan, lingkungan, teknologi, sosial, aktuaria, dan kecerdasan artifisial.",
    grantTotalLabel: "Kegiatan riset",
    grantFundingLabel: "Total pendanaan",
    grantDocumentLabel: "Dokumen tertaut",
    grantAllYears: "Semua Tahun",
    grantSearchLabel: "Cari hibah riset",
    grantSearchPlaceholder: "Cari peneliti, judul, skema, atau sumber dana",
    grantDownloadSource: "Buka data Excel",
    grantShownLabel: "kegiatan ditampilkan",
    grantResearcherLabel: "Peneliti utama",
    grantSchemeLabel: "Skema riset",
    grantFundingSourceLabel: "Sumber dana",
    grantContractLabel: "Nomor kontrak",
    grantAmountLabel: "Nilai pendanaan",
    grantOpenDocument: "Buka dokumen",
    grantDocumentUnavailable: "Dokumen belum tertaut",
    grantNotListed: "Tidak dicantumkan",
    grantNoResults: "Tidak ada hibah riset yang cocok dengan pencarian.",
    pksMoaKicker: "PKS-MoA",
    pksMoaTitle: "Jejaring kerja sama nasional dan internasional.",
    pksMoaText: "Portofolio perjanjian kerja sama pendidikan, penelitian, pertukaran mahasiswa, serta pengabdian kepada masyarakat bersama mitra institusi.",
    pksMoaTotal: "Total kerja sama",
    pksMoaNational: "Nasional",
    pksMoaInternational: "Internasional",
    pksMoaFilterAll: "Semua",
    pksMoaSearchLabel: "Cari kerja sama",
    pksMoaSearchPlaceholder: "Cari mitra, kegiatan, atau nomor dokumen",
    pksMoaSource: "Lihat tabel sumber",
    pksMoaRecorded: "dokumen kerja sama ditampilkan",
    pksMoaPartner: "Mitra kolaborasi",
    pksMoaDocument: "Dokumen tercatat",
    pksMoaOpen: "Buka dokumen",
    pksMoaSourceTable: "Lihat pada tabel sumber",
    pksMoaNoResults: "Tidak ada kerja sama yang cocok dengan pencarian.",
    scholarshipKicker: "Beasiswa dan Mobilitas",
    scholarshipTitle: "Peluang pendanaan studi, riset, dan mobilitas global.",
    scholarshipText: "Akses cepat menuju program beasiswa nasional, internasional, pendanaan riset, dan mobilitas yang relevan bagi komunitas pascasarjana.",
    scholarshipCountLabel: "program tersedia",
    scholarshipCoverage: "Studi · Riset · Mobilitas",
    scholarshipNote: "Jadwal pendaftaran, cakupan pendanaan, dan persyaratan mengikuti informasi terbaru dari masing-masing penyelenggara.",
    scholarshipAsk: "Tanyakan beasiswa ke chatbot",
    scholarshipAudience: "Sasaran",
    scholarshipOfficial: "Kunjungi situs resmi",
    scholarshipAskProgram: "Tanya chatbot",
    scholarshipOfficialSite: "Situs resmi",
    noScholarships: "Informasi beasiswa belum tersedia.",
    curriculumDocPeriod: "Periode",
    curriculumDocArchive: "Arsip PDF",
    pbmEvalKicker: "Evaluasi PBM-Dosen",
    pbmEvalTitle: "Arsip Evaluasi PBM-Dosen per semester.",
    pbmEvalText: "Dokumen Evaluasi PBM-Dosen disusun sebagai blok akses cepat untuk meninjau arsip mutu akademik, proses belajar mengajar, dan bahan pemantauan kinerja dosen setiap semester.",
    pbmEvalCountLabel: "dokumen evaluasi",
    pbmEvalAsk: "Tanyakan Evaluasi PBM-Dosen ke chatbot",
    pbmEvalArchive: "Arsip Evaluasi",
    pbmEvalSemester: "Semester",
    pbmEvalAcademicYear: "Tahun akademik",
    thesisGuideKicker: "Panduan Tesis",
    thesisGuideTitle: "Dokumen panduan penulisan dan pelaksanaan tesis.",
    thesisGuideText: "Rujukan resmi untuk penyusunan naskah tesis, Seminar Usulan Riset, Seminar Kemajuan Riset, dan Sidang Akhir Magister.",
    thesisGuideCountLabel: "dokumen panduan",
    thesisGuideAsk: "Tanyakan panduan ke chatbot",
    academicGuideKicker: "Panduan Akademik",
    academicGuideTitle: "Dokumen akademik S2 Statistika Terapan.",
    academicGuideText: "Dokumen ini ditempatkan sebagai rujukan cepat untuk ketentuan akademik dan SOP penyelenggaraan Program S2 Statistika Terapan.",
    academicGuideCountLabel: "dokumen akademik",
    academicGuideAsk: "Tanyakan panduan akademik ke chatbot",
    academicGuideDocTitle: "Dokumen Akademik S2",
    academicGuideDocText: "Panduan akademik dari folder @SOP untuk membantu mahasiswa dan pengelola program membaca ketentuan akademik secara cepat.",
    academicGuideTopic1: "Ketentuan dan administrasi akademik program",
    academicGuideTopic2: "Rujukan SOP akademik S2 Statistika Terapan",
    academicGuideTopic3: "Akses PDF langsung dari website",
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
    tracerTitle: "Tracer Studi dan kepuasan pengguna lulusan.",
    tracerText: "Blok ini memisahkan laporan survei alumni dan laporan kepuasan pengguna lulusan agar evaluasi luaran program lebih mudah dibaca.",
    tracerCtaBadge: "Form Resmi Unpad",
    tracerCtaTitle: "Isi Tracer Study Universitas Padjadjaran",
    tracerCtaText: "Alumni dapat meninggalkan jejak karier dan pengalaman studi melalui form tracer study resmi Unpad.",
    tracerCtaButton: "Buka Form Tracer Study",
    tracerAlumniKicker: "Alumni",
    tracerAlumniTitle: "Survey kepada alumni",
    tracerAlumniText: "Laporan tracer study tahunan untuk melihat waktu tunggu kerja pertama, respons lulusan, dan indikator awal serapan lulusan.",
    tracerCountLabel: "laporan tracer study",
    tracerAsk: "Tanyakan tracer study ke chatbot",
    graduateUserKicker: "Pengguna Lulusan",
    graduateUserTitle: "Survey kepada pengguna lulusan",
    graduateUserText: "Laporan kepuasan pengguna lulusan pada level program studi dan fakultas sebagai bahan evaluasi mutu lulusan.",
    graduateUserCountLabel: "laporan kepuasan pengguna",
    graduateUserAsk: "Tanyakan pengguna lulusan ke chatbot",
    graduateUserLevel: "Level",
    graduateUserFormat: "Format",
    graduateUserPages: "Halaman",
    graduateUserOpen: "Buka laporan",
    graduateUserAskDocument: "Tanya chatbot",
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
    chatText: "Jawaban chatbot ditambatkan pada ekstraksi dokumen Kurikulum OBE 2026, dokumen kurikulum 2020-2026, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM-Dosen, panduan akademik, panduan tesis, silabus mata kuliah, PDF RPS, katalog materi HTML, data lulusan, tracer study, LAMSAMA, Program Pengabdian, Special Moment, dan ringkasan administratif dari SMUP Program Magister.",
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
    promptPbmEvaluation: "Evaluasi PBM-Dosen",
    welcomeText: "Silakan ajukan pertanyaan tentang kurikulum 2026, dokumen kurikulum 2020-2026, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM-Dosen, jalur studi, SKS, CPL, panduan akademik, panduan tesis, SUR, SKR, SAM, silabus, PDF RPS, materi kuliah HTML, tracer study, kepuasan pengguna lulusan, LAMSAMA, Program Pengabdian, Special Moment, tesis lulusan, biaya, pendaftaran, dan profil lulusan S2 Statistika Terapan.",
    welcomeSources: "Sumber utama: Kurikulum OBE 2026, dokumen kurikulum, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM-Dosen, panduan akademik, panduan tesis, data lulusan, tracer study, kepuasan pengguna lulusan, LAMSAMA, Program Pengabdian, Special Moment, RPS 2026, dan katalog materi kuliah",
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
    noPbmEvaluations: "Dokumen Evaluasi PBM-Dosen belum tersedia.",
    noCourses: "Tidak ada mata kuliah yang cocok.",
    noSyllabus: "Silabus yang dicari belum ditemukan.",
    noRpsDocs: "Dokumen RPS yang dicari belum ditemukan.",
    noMaterials: "Materi yang dicari belum ditemukan.",
    noTracer: "Laporan tracer study belum tersedia.",
    noGraduateUserReports: "Laporan kepuasan pengguna lulusan belum tersedia.",
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
    workspaceScholarships: "Scholarships",
    workspaceLamsama: "LAMSAMA",
    workspacePkm: "Community Engagement",
    workspaceResearchGrants: "Faculty Research Grants",
    workspacePksMoa: "Partnerships",
    workspaceVisionMission: "Vision and Mission",
    workspaceGraduateProfile: "Graduate Profile",
    programProfileCombinedTitle: "Complete profile of the Applied Statistics Master's Program.",
    programProfileCombinedText: "Program profile, vision and mission, and graduate profile are combined in one panel so the first S2 view feels complete.",
    milestoneKicker: "Program Milestone",
    milestoneTitle: "Development journey of the Applied Statistics Master's Program.",
    milestoneText: "The program milestone is presented as a visual summary of academic development, quality progress, and achievements of the Applied Statistics Master's Program at FMIPA Universitas Padjadjaran.",
    inspirationKicker: "Messages and Inspiration",
    inspirationTitle: "Voices from our academic journey.",
    inspirationText: "Messages, memories, and encouragement shared across the Applied Statistics Master's community.",
    inspirationPrevious: "Previous message",
    inspirationNext: "Next message",
    inspirationFirst: "Show the first image",
    inspirationSecond: "Show the second image",
    inspirationCollection: "MStat Moments",
    inspirationAlumniRole: "MStat Alumni",
    inspirationHeadRole: "Head of Study Program",
    inspirationOpenOriginal: "Open original message",
    inspirationRegionLabel: "Messages and inspiration collection",
    workspaceCurriculum: "Curriculum",
    workspaceCurriculumDocs: "Curriculum Documents",
    workspaceCourses: "Course List",
    workspaceSyllabus: "Course Syllabus",
    workspaceRps: "Course RPS",
    workspaceMaterials: "Course Materials",
    workspaceThesisGuide: "Thesis Guides",
    workspaceAcademicGuide: "Academic Guide",
    workspaceEvaluation: "Evaluation",
    workspaceLectureEvaluation: "Course Evaluation",
    workspaceSpecialMoment: "Special Moment",
    workspaceTestimonials: "Video Testimonials",
    sidebarVideoKicker: "Profile Video",
    sidebarVideoTitle: "Applied Statistics Master's FMIPA UNPAD",
    sidebarVisionVideoKicker: "Vision Mission Video",
    sidebarVisionVideoTitle: "Vision and Mission of the Applied Statistics Master's Program",
    workspacePbmEvaluation: "PBM-Lecturer Evaluation",
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
    frontS2Accreditation: "UNGGUL Accreditation",
    frontS2Text: "Information on the 2026 OBE curriculum, scholarships, LAMSAMA reports, community engagement, faculty research grants, the PKS-MoA partnership network, syllabi, RPS, course materials, academic guides, thesis guides, graduates, and tracer studies.",
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
    curriculumHubKicker: "Curriculum",
    curriculumHubTitle: "The Applied Statistics Master's curriculum access center.",
    curriculumHubText: "Curriculum structure, official documents, course list, syllabi, RPS, materials, and academic guides are organized in one entry point for easier navigation.",
    curriculumHubStructure: "Curriculum Structure",
    curriculumHubStructureText: "Coursework, research, RPL, and credits",
    curriculumHubDocsText: "Curriculum PDF archive 2020-2026",
    curriculumHubCoursesText: "Course list, credits, and groups",
    curriculumHubSyllabusText: "Descriptions, topics, and references",
    curriculumHubRpsText: "Required and elective RPS documents",
    curriculumHubMaterialsText: "HTML materials, summaries, and contracts",
    curriculumHubThesisText: "Thesis writing and implementation",
    curriculumHubAcademicGuideText: "S2 academic SOP and documents",
    evaluationHubKicker: "Evaluation",
    evaluationHubTitle: "The S2 academic evaluation access center.",
    evaluationHubText: "Course delivery evaluation and PBM-Lecturer Evaluation are separated by purpose, but grouped in one access point for easier navigation.",
    evaluationHubLectureText: "Session 1-16 course delivery monitoring and student evaluation form",
    evaluationHubPbmText: "Teaching-learning process and lecturer evaluation archives by semester",
    navAcademicCalendar: "Calendar",
    academicKicker: "Academic Calendar",
    academicTitle: "Odd Semester 2026/2027 in one infographic.",
    academicText: "A visual summary of Universitas Padjadjaran academic activities for new student admission, classes, administration, exams, grades, graduation, and semester closing.",
    academicSemesterLabel: "Odd Semester",
    accreditationKicker: "Master's Accreditation",
    accreditationTitle: "Applied Statistics Master's, FMIPA UNPAD",
    accreditationText: "Accredited UNGGUL by LAMSAMA in recognition of the academic quality of the Applied Statistics Master's Program.",
    accreditationView: "View full certificate",
    accreditationNumber: "Certificate number",
    accreditationValidUntil: "Valid until",
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
    lamsamaKicker: "LAMSAMA",
    lamsamaTitle: "LAMSAMA accreditation documents for the Applied Statistics Master's Program.",
    lamsamaText: "Assessment result, quality monitoring, and accreditation follow-up archive with the Independent Accreditation Agency for Natural Sciences and Formal Sciences.",
    lamsamaPeriodLabel: "Report period",
    lamsamaCountLabel: "PDF documents",
    lamsamaAssessmentLabel: "Site assessment",
    lamsamaAsk: "Ask the chatbot about LAMSAMA",
    lamsamaYearLabel: "Report year",
    lamsamaSequenceLabel: "Year ",
    lamsamaArchive: "Accreditation Report",
    lamsamaOpen: "Open PDF report",
    lamsamaAskDocument: "Ask chatbot",
    lamsamaAssessmentDoc: "Assessment document",
    noLamsamaReports: "LAMSAMA documents are not yet available.",
    pkmKicker: "Community Engagement",
    pkmTitle: "Applied statistics community engagement activity archive.",
    pkmText: "This block collects Program Pengabdian reports as documentation of academic contribution, statistical application, and program collaboration with communities.",
    pkmSummaryLabel: "Available documents",
    pkmSummaryText: "PDF report",
    pkmFocusLabel: "Activity focus",
    pkmFocusText: "Community engagement based on applied statistics",
    pkmAsk: "Ask the chatbot about community engagement",
    pkmArchive: "PKM Report",
    pkmPeriodLabel: "Period",
    pkmFocusCardLabel: "Focus",
    pkmOpen: "Open PDF report",
    pkmAskDocument: "Ask chatbot",
    noPkmReports: "Community engagement reports are not yet available.",
    grantKicker: "Faculty Research Grants",
    grantTitle: "A research portfolio built through data, collaboration, and impact.",
    grantText: "Faculty research grant and funding records across methodological development, health, environment, technology, society, actuarial science, and artificial intelligence.",
    grantTotalLabel: "Research activities",
    grantFundingLabel: "Total funding",
    grantDocumentLabel: "Linked documents",
    grantAllYears: "All Years",
    grantSearchLabel: "Search research grants",
    grantSearchPlaceholder: "Search researchers, titles, schemes, or funding sources",
    grantDownloadSource: "Open Excel data",
    grantShownLabel: "activities shown",
    grantResearcherLabel: "Lead researcher",
    grantSchemeLabel: "Research scheme",
    grantFundingSourceLabel: "Funding source",
    grantContractLabel: "Contract number",
    grantAmountLabel: "Funding amount",
    grantOpenDocument: "Open document",
    grantDocumentUnavailable: "Document not linked",
    grantNotListed: "Not listed",
    grantNoResults: "No research grants match your search.",
    pksMoaKicker: "PKS-MoA",
    pksMoaTitle: "National and international partnership network.",
    pksMoaText: "A portfolio of agreements for education, research, student exchange, and community engagement with institutional partners.",
    pksMoaTotal: "Total partnerships",
    pksMoaNational: "National",
    pksMoaInternational: "International",
    pksMoaFilterAll: "All",
    pksMoaSearchLabel: "Search partnerships",
    pksMoaSearchPlaceholder: "Search partners, activities, or document numbers",
    pksMoaSource: "View source table",
    pksMoaRecorded: "partnership documents shown",
    pksMoaPartner: "Collaborating partner",
    pksMoaDocument: "Recorded document",
    pksMoaOpen: "Open document",
    pksMoaSourceTable: "View in source table",
    pksMoaNoResults: "No partnerships match your search.",
    scholarshipKicker: "Scholarships and Mobility",
    scholarshipTitle: "Funding opportunities for study, research, and global mobility.",
    scholarshipText: "Quick access to national and international scholarships, research funding, and mobility opportunities relevant to the graduate community.",
    scholarshipCountLabel: "available programs",
    scholarshipCoverage: "Study · Research · Mobility",
    scholarshipNote: "Application dates, funding coverage, and eligibility requirements follow the latest information from each provider.",
    scholarshipAsk: "Ask the chatbot about scholarships",
    scholarshipAudience: "Audience",
    scholarshipOfficial: "Visit official website",
    scholarshipAskProgram: "Ask chatbot",
    scholarshipOfficialSite: "Official website",
    noScholarships: "Scholarship information is not yet available.",
    curriculumDocPeriod: "Period",
    curriculumDocArchive: "PDF Archive",
    lectureEvalKicker: "Course Delivery Evaluation",
    lectureEvalTitle: "Session-by-session monitoring from session 1 to 16.",
    lectureEvalText: "This block contains course delivery evaluation reports by session/meeting. It is different from PBM-Lecturer Evaluation conducted at the end of the semester.",
    lectureEvalCtaLabel: "Student Monitoring Form",
    lectureEvalCtaText: "Submit Odd Semester MStat Evaluation",
    lectureEvalCountLabel: "HTML report",
    lectureEvalAsk: "Ask the chatbot about course evaluation",
    lectureEvalArchive: "HTML Report",
    lectureEvalSessions: "Sessions",
    lectureEvalMonitoring: "Student monitoring",
    lectureEvalOpenHtml: "Open HTML Report",
    pbmEvalKicker: "PBM-Lecturer Evaluation",
    pbmEvalTitle: "PBM-Lecturer Evaluation archive by semester.",
    pbmEvalText: "PBM-Lecturer Evaluation documents are organized as quick-access blocks for academic quality archives, teaching-learning process review, and lecturer performance monitoring by semester.",
    pbmEvalCountLabel: "evaluation documents",
    pbmEvalAsk: "Ask the chatbot about PBM-Lecturer Evaluation",
    pbmEvalArchive: "Evaluation Archive",
    pbmEvalSemester: "Semester",
    pbmEvalAcademicYear: "Academic year",
    thesisGuideKicker: "Thesis Guides",
    thesisGuideTitle: "Thesis writing and implementation guide documents.",
    thesisGuideText: "Official references for thesis writing, Research Proposal Seminar, Research Progress Seminar, and Master's Final Defense.",
    thesisGuideCountLabel: "guide documents",
    thesisGuideAsk: "Ask the chatbot about guides",
    academicGuideKicker: "Academic Guide",
    academicGuideTitle: "Academic documents for the Applied Statistics Master's Program.",
    academicGuideText: "This document is provided as a quick reference for academic regulations and SOPs for the Applied Statistics Master's Program.",
    academicGuideCountLabel: "academic document",
    academicGuideAsk: "Ask the chatbot about the academic guide",
    academicGuideDocTitle: "S2 Academic Document",
    academicGuideDocText: "An academic guide from the @SOP folder to help students and program managers access academic regulations quickly.",
    academicGuideTopic1: "Academic regulations and administration",
    academicGuideTopic2: "SOP reference for the Applied Statistics Master's Program",
    academicGuideTopic3: "Direct PDF access from the website",
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
    tracerTitle: "Tracer studies and graduate user satisfaction.",
    tracerText: "This block separates alumni survey reports and graduate user satisfaction reports so program outcomes are easier to review.",
    tracerCtaBadge: "Official Unpad Form",
    tracerCtaTitle: "Fill Out Universitas Padjadjaran Tracer Study",
    tracerCtaText: "Graduates can leave their career and study-experience record through Unpad's official tracer study form.",
    tracerCtaButton: "Open Tracer Study Form",
    tracerAlumniKicker: "Alumni",
    tracerAlumniTitle: "Alumni survey",
    tracerAlumniText: "Annual tracer study reports for first-job waiting time, graduate responses, and early employment indicators.",
    tracerCountLabel: "tracer study reports",
    tracerAsk: "Ask the chatbot about tracer studies",
    graduateUserKicker: "Graduate Users",
    graduateUserTitle: "Graduate user survey",
    graduateUserText: "Graduate user satisfaction reports at program and faculty levels as references for graduate quality evaluation.",
    graduateUserCountLabel: "user satisfaction reports",
    graduateUserAsk: "Ask the chatbot about graduate users",
    graduateUserLevel: "Level",
    graduateUserFormat: "Format",
    graduateUserPages: "Pages",
    graduateUserOpen: "Open report",
    graduateUserAskDocument: "Ask chatbot",
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
    chatText: "The chatbot answers are grounded in the 2026 OBE curriculum extraction, 2020-2026 curriculum documents, course delivery evaluations, PBM-Lecturer Evaluation, academic guides, thesis guides, course syllabi, RPS PDFs, HTML learning material catalog, graduate data, tracer studies, LAMSAMA, community engagement reports, Special Moment gallery, and administrative summaries from SMUP.",
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
    promptPbmEvaluation: "PBM-Lecturer Evaluation",
    welcomeText: "Ask about the 2026 curriculum, 2020-2026 curriculum documents, course delivery evaluations, PBM-Lecturer Evaluation, study pathways, credits, learning outcomes, academic guides, thesis guides, SUR, SKR, SAM, syllabi, RPS PDFs, HTML learning materials, tracer studies, graduate user satisfaction reports, LAMSAMA, community engagement reports, Special Moment gallery, graduate theses, fees, admissions, and graduate profiles.",
    welcomeSources: "Main sources: 2026 OBE Curriculum, curriculum documents, course delivery evaluations, PBM-Lecturer Evaluation, academic guides, thesis guides, graduate data, tracer studies, graduate user satisfaction reports, LAMSAMA, community engagement reports, Special Moment gallery, RPS 2026, and learning material catalog",
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
    noPbmEvaluations: "PBM-Lecturer Evaluation documents are not available yet.",
    noCourses: "No matching courses found.",
    noSyllabus: "No matching syllabus found.",
    noRpsDocs: "No matching RPS document found.",
    noMaterials: "No matching materials found.",
    noTracer: "Tracer study reports are not available yet.",
    noGraduateUserReports: "Graduate user satisfaction reports are not available yet.",
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
  const stickyHeaderHeight = document.querySelector(".site-header")?.offsetHeight || 0;
  const targetTop = window.scrollY + workspaceLayout.getBoundingClientRect().top - stickyHeaderHeight - 12;
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
    const linkTarget = link.dataset.workspaceTarget;
    const parentCurriculumMatch = linkTarget === "kurikulum" && curriculumPanelIds.includes(activeId);
    const parentEvaluationMatch = linkTarget === "evaluasi" && evaluationPanelIds.includes(activeId);
    const sameProgram = linkProgram === activeWorkspaceProgram;
    const samePanel = linkTarget === activeId || parentCurriculumMatch || parentEvaluationMatch;
    const sameSubPanel = parentCurriculumMatch || parentEvaluationMatch
      ? true
      : activePanelScrollTarget
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

function updateInspirationVoiceLanguage() {
  const cards = [...document.querySelectorAll("[data-voice-card]")];
  cards.forEach((card, cardIndex) => {
    card.setAttribute("aria-label", currentLang === "en"
      ? `Message ${cardIndex + 1} of ${cards.length}`
      : `Pesan ${cardIndex + 1} dari ${cards.length}`);
  });
  document.querySelectorAll("[data-voice-source]").forEach((link) => {
    link.title = t("inspirationOpenOriginal");
  });
  const viewport = document.querySelector("[data-voice-viewport]");
  if (viewport) viewport.setAttribute("aria-label", t("inspirationRegionLabel"));
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
  renderLamsamaReports();
  renderPkmReports();
  renderResearchGrants();
  renderPksMoa();
  renderScholarships();
  renderThesisGuides();
  renderSyllabus();
  renderRpsDocs();
  renderMaterials();
  renderTracerStudies();
  renderGraduateUserSatisfaction();
  renderSpecialMoments();
  renderTestimonials();
  renderS3Site();
  renderLectureEvaluations();
  renderPbmEvaluations();
  renderAlumni();
  renderAnalyticsPanel();
  updateInspirationVoiceLanguage();
}

function renderInspirationVoices() {
  const track = document.getElementById("inspirationVoiceTrack");
  if (!track) return;
  track.innerHTML = INSPIRATION_VOICES.map((voice, index) => {
    const roleKey = voice.roleKey || "inspirationAlumniRole";
    return `
      <article class="inspiration-voice-card" data-voice-card aria-label="Pesan ${index + 1} dari ${INSPIRATION_VOICES.length}">
        <div class="inspiration-voice-card-head">
          <div class="inspiration-voice-avatar" style="--voice-focus-x:${escapeHTML(voice.focusX)};--voice-focus-y:${escapeHTML(voice.focusY)};--voice-zoom:${escapeHTML(voice.zoom)}" aria-hidden="true">
            <img src="${escapeHTML(voice.image)}" alt="" loading="lazy" decoding="async" />
          </div>
          <div class="inspiration-voice-identity">
            <strong>${escapeHTML(voice.name)}</strong>
            <span data-i18n="${escapeHTML(roleKey)}">${escapeHTML(t(roleKey))}</span>
          </div>
          <a class="inspiration-voice-source" href="${escapeHTML(voice.image)}" target="_blank" rel="noopener" data-voice-source title="${escapeHTML(t("inspirationOpenOriginal"))}">
            <span aria-hidden="true">&#8599;</span>
            <span class="sr-only" data-i18n="inspirationOpenOriginal">${escapeHTML(t("inspirationOpenOriginal"))}</span>
          </a>
        </div>
        <blockquote>
          <p>
            <span class="inspiration-voice-lang inspiration-voice-lang-id">${escapeHTML(voice.messageId)}</span>
            <span class="inspiration-voice-lang inspiration-voice-lang-en" lang="en">${escapeHTML(voice.messageEn)}</span>
          </p>
        </blockquote>
      </article>
    `;
  }).join("");
}

function setupInspirationVoices() {
  const showcase = document.querySelector("[data-inspiration-voices]");
  if (!showcase) return;
  renderInspirationVoices();

  const viewport = showcase.querySelector("[data-voice-viewport]");
  const cards = [...showcase.querySelectorAll("[data-voice-card]")];
  const currentLabel = showcase.querySelector("[data-voice-current]");
  const totalLabel = showcase.querySelector("[data-voice-total]");
  const progress = showcase.querySelector("[data-voice-progress]");
  const previousButton = showcase.querySelector("[data-voice-previous]");
  const nextButton = showcase.querySelector("[data-voice-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 0;
  let autoplayTimer = null;
  let scrollFrame = null;
  let resumeTimer = null;
  let showcaseIsVisible = false;

  if (totalLabel) totalLabel.textContent = String(cards.length).padStart(2, "0");

  function stopAutoplay() {
    if (!autoplayTimer) return;
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (reducedMotion.matches || !showcaseIsVisible || document.hidden || cards.length < 2) return;
    autoplayTimer = window.setInterval(() => goToCard(activeIndex + 1, false), 7000);
  }

  function updateStatus(index) {
    activeIndex = Math.max(0, Math.min(index, cards.length - 1));
    if (currentLabel) currentLabel.textContent = String(activeIndex + 1).padStart(2, "0");
    if (progress) progress.style.width = `${((activeIndex + 1) / cards.length) * 100}%`;
    cards.forEach((card, cardIndex) => {
      if (cardIndex === activeIndex) card.setAttribute("aria-current", "true");
      else card.removeAttribute("aria-current");
    });
  }

  function goToCard(index, restartAutoplay = true) {
    const targetIndex = (index + cards.length) % cards.length;
    const target = cards[targetIndex];
    if (!viewport || !target) return;
    viewport.scrollTo({
      left: target.offsetLeft,
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
    updateStatus(targetIndex);
    if (restartAutoplay) startAutoplay();
  }

  previousButton?.addEventListener("click", () => goToCard(activeIndex - 1));
  nextButton?.addEventListener("click", () => goToCard(activeIndex + 1));

  viewport?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToCard(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToCard(activeIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goToCard(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goToCard(cards.length - 1);
    }
  });

  viewport?.addEventListener("pointerdown", stopAutoplay);
  viewport?.addEventListener("scroll", () => {
    stopAutoplay();
    if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    scrollFrame = window.requestAnimationFrame(() => {
      const step = cards[1]?.offsetLeft - cards[0]?.offsetLeft || cards[0]?.offsetWidth || 1;
      updateStatus(Math.round((viewport.scrollLeft || 0) / step));
    });
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(startAutoplay, 1100);
  }, { passive: true });

  showcase.addEventListener("pointerenter", stopAutoplay);
  showcase.addEventListener("pointerleave", startAutoplay);
  showcase.addEventListener("focusin", stopAutoplay);
  showcase.addEventListener("focusout", (event) => {
    if (!showcase.contains(event.relatedTarget)) startAutoplay();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });
  reducedMotion.addEventListener?.("change", startAutoplay);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      showcaseIsVisible = Boolean(entry?.isIntersecting);
      if (showcaseIsVisible) startAutoplay();
      else stopAutoplay();
    }, { threshold: 0.35 });
    observer.observe(showcase);
  } else {
    showcaseIsVisible = true;
    startAutoplay();
  }

  updateStatus(0);
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
  if (/(kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna)/.test(normalized)) {
    synonyms.push("kepuasan pengguna lulusan survei pengguna lulusan user satisfaction graduate user employer satisfaction mutu lulusan");
  }
  if (/(pkm|pengabdian|program pengabdian|pengabdian masyarakat|community engagement|community service)/.test(normalized)) {
    synonyms.push("pkm program pengabdian pengabdian kepada masyarakat laporan kegiatan community engagement community service applied statistics");
  }
  if (/(special moment|momen|foto angkatan|galeri|gallery|dokumentasi)/.test(normalized)) {
    synonyms.push("special moment momen galeri foto angkatan cohort dokumentasi kebersamaan mahasiswa");
  }
  if (/(dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|kurikulum 2020|kurikulum 2021|kurikulum 2022|kurikulum 2023|kurikulum 2024|kurikulum 2025|kurikulum 2026|curriculum document|curriculum pdf)/.test(normalized)) {
    synonyms.push("dokumen kurikulum file kurikulum pdf kurikulum arsip kurikulum curriculum document curriculum pdf 2020 2021 2022 2023 2024 2025 2026");
  }
  if (/(evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation)/.test(normalized)) {
    synonyms.push("evaluasi pbm dosen evaluasi pembelajaran evaluasi dosen proses belajar mengajar mutu akademik dokumen evaluasi semester ganjil genap learning evaluation lecturer evaluation teaching learning evaluation");
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
      "3. Academic guides, thesis guides, SUR, SKR, and Master's Final Defense.",
      "4. S3 Statistics information: vision, mission, objectives, graduate profiles, CPL, academic documents, and doctoral RPS files.",
      "5. Graduate thesis data, tracer study reports, graduate user satisfaction reports, LAMSAMA documents, Special Moment gallery, curriculum PDF archives, course delivery evaluation reports, PBM-Lecturer Evaluation documents, fees, and SMUP admissions.",
      "",
      serverApiReady
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

function formatGrantAmount(value, compact = false) {
  return new Intl.NumberFormat(currentLang === "en" ? "en-US" : "id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: compact ? 1 : 0,
    notation: compact ? "compact" : "standard",
    compactDisplay: "short"
  }).format(Number(value) || 0);
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

function findGraduateUserReport(question) {
  const docs = graduateUserSatisfactionData?.reports || [];
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

function buildGraduateUserSatisfactionAnswer(question, hits = []) {
  const text = normalize(question);
  const asksGraduateUser = /kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("graduate-user-satisfaction-"));
  if (!asksGraduateUser) return null;

  const selected = findGraduateUserReport(question);
  const reports = selected ? [selected] : (graduateUserSatisfactionData?.reports || []);
  if (!reports.length) return null;

  const answer = reports
    .map((report) => {
      if (currentLang === "en") {
        return [
          `${graduateUserReportTitle(report)}: ${graduateUserReportDescription(report)}`,
          `Level: ${graduateUserReportLevel(report)}.`,
          `Year: ${report.year}.`,
          `Format: ${report.format || "PDF"}${report.pages ? `, ${report.pages} pages` : ""}.`,
          `Report: ${report.href}`
        ].join("\n");
      }
      return [
        `${graduateUserReportTitle(report)}: ${graduateUserReportDescription(report)}`,
        `Level: ${graduateUserReportLevel(report)}.`,
        `Tahun: ${report.year}.`,
        `Format: ${report.format || "PDF"}${report.pages ? `, ${report.pages} halaman` : ""}.`,
        `Laporan: ${report.href}`
      ].join("\n");
    })
    .join("\n\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: graduateUserReportTitle(report), url: report.href })),
    mode: "Local knowledge base"
  };
}

function curriculumDocTitle(doc) {
  return currentLang === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
}

function curriculumDocDescription(doc) {
  return currentLang === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
}

function lamsamaReportTitle(report) {
  return currentLang === "en" ? report.titleEn || report.title : report.titleId || report.title;
}

function lamsamaReportDescription(report) {
  return currentLang === "en"
    ? report.descriptionEn || report.descriptionId
    : report.descriptionId || report.descriptionEn;
}

function lamsamaReportBadge(report) {
  return currentLang === "en"
    ? report.badgeEn || t("lamsamaArchive")
    : report.badgeId || t("lamsamaArchive");
}

function lamsamaReportPeriodLabel(report) {
  return currentLang === "en"
    ? report.periodLabelEn || t("lamsamaYearLabel")
    : report.periodLabelId || t("lamsamaYearLabel");
}

function lamsamaReportSequenceLabel(report) {
  if (report.sequenceLabelId || report.sequenceLabelEn) {
    return currentLang === "en"
      ? report.sequenceLabelEn || report.sequenceLabelId
      : report.sequenceLabelId || report.sequenceLabelEn;
  }
  return `${t("lamsamaSequenceLabel")}${report.sequence || "-"}`;
}

function pkmReportTitle(report) {
  return currentLang === "en" ? report.titleEn || report.titleId : report.titleId || report.titleEn;
}

function pkmReportDescription(report) {
  return currentLang === "en"
    ? report.descriptionEn || report.descriptionId
    : report.descriptionId || report.descriptionEn;
}

function pkmReportPeriod(report) {
  return currentLang === "en" ? report.periodEn || report.period : report.period || report.periodEn;
}

function pkmReportFocus(report) {
  return currentLang === "en" ? report.focusEn || report.focusId : report.focusId || report.focusEn;
}

function graduateUserReportTitle(report) {
  return currentLang === "en" ? report.titleEn || report.title : report.titleId || report.title;
}

function graduateUserReportDescription(report) {
  return currentLang === "en"
    ? report.descriptionEn || report.descriptionId
    : report.descriptionId || report.descriptionEn;
}

function graduateUserReportLevel(report) {
  return currentLang === "en" ? report.levelEn || report.level : report.level || report.levelEn;
}

function scholarshipTitle(item) {
  return currentLang === "en" ? item.titleEn || item.title : item.titleId || item.title;
}

function scholarshipDescription(item) {
  return currentLang === "en" ? item.descriptionEn || item.descriptionId : item.descriptionId || item.descriptionEn;
}

function scholarshipCategory(item) {
  return currentLang === "en" ? item.categoryEn || item.categoryId : item.categoryId || item.categoryEn;
}

function scholarshipAudience(item) {
  return currentLang === "en" ? item.audienceEn || item.audienceId : item.audienceId || item.audienceEn;
}

function pbmEvaluationTitle(doc) {
  const rawTitle = currentLang === "en" ? doc.titleEn || doc.title : doc.titleId || doc.title;
  return currentLang === "en"
    ? String(rawTitle).replace(/^Learning Evaluation/i, "PBM-Lecturer Evaluation")
    : String(rawTitle).replace(/^Evaluasi PBM/i, "Evaluasi PBM-Dosen");
}

function pbmEvaluationDescription(doc) {
  const rawDescription = currentLang === "en" ? doc.descriptionEn || doc.description : doc.descriptionId || doc.description;
  return currentLang === "en"
    ? String(rawDescription).replace(/^Learning evaluation document/i, "PBM-Lecturer Evaluation document")
    : String(rawDescription).replace(/^Dokumen evaluasi pembelajaran/i, "Dokumen Evaluasi PBM-Dosen");
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
          `This is different from PBM-Lecturer Evaluation conducted at the end of the semester.`,
          `HTML report: ${doc.href}`,
          `Student monitoring form: ${doc.monitoringUrl || lectureEvaluationsData?.monitoringUrl || ""}`
        ].join("\n");
      }
      return [
        `${lectureEvaluationTitle(doc)}: ${lectureEvaluationDescription(doc)}`,
        `Tujuan: monitoring perkuliahan per sesi/pertemuan, sesi ${doc.sessions || "1-16"}.`,
        `Ini berbeda dari Evaluasi PBM-Dosen yang dilakukan pada akhir semester.`,
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
  const asksPbmEvaluation = /evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
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
  const asksGraduateUser = /kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna/.test(text);
  const asksCurriculumDoc = /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf|buka kurikulum|download kurikulum|unduh kurikulum/.test(text);
  const asksLectureEvaluation = /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|pertemuan perkuliahan|sesi perkuliahan|course delivery evaluation|course evaluation|student monitoring/.test(text);
  const asksPbmEvaluation = /evaluasi pbm|pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik|learning evaluation|lecturer evaluation|teaching learning evaluation|buka evaluasi|download evaluasi|unduh evaluasi/.test(text);
  const asksPkm = /pkm|pengabdian|program pengabdian|pengabdian masyarakat|community engagement|community service/.test(text);
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
  if (asksGraduateUser) return null;
  if (asksCurriculumDoc) return null;
  if (asksLectureEvaluation) return null;
  if (asksPbmEvaluation) return null;
  if (asksPkm) return null;
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

function buildLamsamaAnswer(question) {
  const text = normalize(question);
  if (!/lamsama|akreditasi lamsama|laporan tahunan akreditasi|hasil asesmen|asesmen lamsama|annual accreditation report|assessment result/.test(text)) return null;

  const allReports = lamsamaReportsData?.reports || [];
  const requestedYear = Number(text.match(/20\d{2}/)?.[0]);
  const reports = requestedYear
    ? allReports.filter((report) => Number(report.year) === requestedYear)
    : allReports;
  if (!reports.length) return null;

  const answer = currentLang === "en"
    ? [
        "Available LAMSAMA accreditation documents:",
        "",
        ...reports.map((report) => `${report.year} (${lamsamaReportSequenceLabel(report)}): ${lamsamaReportTitle(report)}. ${report.pages || "-"} pages, ${formatFileSize(report.sizeKb)}. PDF: ${report.href}`),
        "",
        `Site assessment date: ${lamsamaReportsData?.assessmentDate || "25-26 November 2022"}.`
      ].join("\n")
    : [
        "Dokumen akreditasi LAMSAMA yang tersedia:",
        "",
        ...reports.map((report) => `${report.year} (${lamsamaReportSequenceLabel(report)}): ${lamsamaReportTitle(report)}. ${report.pages || "-"} halaman, ${formatFileSize(report.sizeKb)}. PDF: ${report.href}`),
        "",
        `Tanggal asesmen lapangan: ${lamsamaReportsData?.assessmentDate || "25-26 November 2022"}.`
      ].join("\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: lamsamaReportTitle(report), url: report.href })),
    mode: "Local knowledge base"
  };
}

function buildPkmAnswer(question) {
  const text = normalize(question);
  if (!/pkm|pengabdian|program pengabdian|pengabdian masyarakat|community engagement|community service/.test(text)) return null;

  const reports = pkmReportsData?.reports || [];
  if (!reports.length) return null;

  const answer = currentLang === "en"
    ? [
        "Available community engagement program reports:",
        "",
        ...reports.map((report) => [
          `${pkmReportTitle(report)}.`,
          `Period: ${pkmReportPeriod(report)}.`,
          `Focus: ${pkmReportFocus(report)}.`,
          `${report.pages || "-"} pages, ${formatFileSize(report.sizeKb)}.`,
          `PDF: ${report.href}`
        ].join(" "))
      ].join("\n")
    : [
        "Laporan Program Pengabdian yang tersedia:",
        "",
        ...reports.map((report) => [
          `${pkmReportTitle(report)}.`,
          `Periode: ${pkmReportPeriod(report)}.`,
          `Fokus: ${pkmReportFocus(report)}.`,
          `${report.pages || "-"} halaman, ${formatFileSize(report.sizeKb)}.`,
          `PDF: ${report.href}`
        ].join(" "))
      ].join("\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: pkmReportTitle(report), url: report.href })),
    mode: "Local knowledge base"
  };
}

function buildScholarshipAnswer(question) {
  const text = normalize(question);
  if (!/beasiswa|scholarship|lpdp|knb|brin|unpad glow|visiting grant|asean scholarship|mobility grant/.test(text)) return null;

  const allScholarships = scholarshipsData?.scholarships || [];
  const selected = allScholarships.find((item) => {
    const candidates = [item.id, item.title, item.titleId, item.titleEn].map(normalize).filter(Boolean);
    return candidates.some((candidate) => candidate.length >= 3 && text.includes(candidate));
  });
  const scholarships = selected ? [selected] : allScholarships;
  if (!scholarships.length) return null;

  const answer = currentLang === "en"
    ? [
        "Scholarship and mobility opportunities:",
        "",
        ...scholarships.map((item) => `${scholarshipTitle(item)} - ${scholarshipCategory(item)}. Audience: ${scholarshipAudience(item)}. ${scholarshipDescription(item)} Official website: ${item.url}`)
      ].join("\n")
    : [
        "Peluang beasiswa dan mobilitas yang tersedia:",
        "",
        ...scholarships.map((item) => `${scholarshipTitle(item)} - ${scholarshipCategory(item)}. Sasaran: ${scholarshipAudience(item)}. ${scholarshipDescription(item)} Situs resmi: ${item.url}`)
      ].join("\n");

  return {
    answer,
    sources: scholarships.map((item) => ({ title: scholarshipTitle(item), url: item.url })),
    mode: "Local knowledge base"
  };
}

function buildAcademicGuideAnswer(question) {
  const text = normalize(question);
  if (!/panduan akademik|dokumen akademik|sop akademik|academic guide|academic document|academic sop/.test(text)) return null;

  const href = "%40SOP/DOKUMEN%20AKADEMIK%20S2.pdf";
  const answer = currentLang === "en"
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
    sources: [{ title: currentLang === "en" ? "S2 Academic Document" : "Dokumen Akademik S2", url: href }],
    mode: "Local knowledge base"
  };
}

function buildLocalAnswer(question) {
  const directScholarship = buildScholarshipAnswer(question);
  if (directScholarship) return directScholarship;
  const directLamsama = buildLamsamaAnswer(question);
  if (directLamsama) return directLamsama;
  const directPkm = buildPkmAnswer(question);
  if (directPkm) return directPkm;
  const directAcademicGuide = buildAcademicGuideAnswer(question);
  if (directAcademicGuide) return directAcademicGuide;

  const capabilityAnswer = buildCapabilityAnswer(question);
  if (capabilityAnswer) return capabilityAnswer;

  const fact = matchFact(question);
  const hits = retrieve(question, 4);
  const structuredLectureEvaluation = buildLectureEvaluationAnswer(question, hits);
  const structuredPbmEvaluation = buildPbmEvaluationAnswer(question, hits);
  const structuredS3 = buildS3Answer(question, hits);
  const structuredRpsDoc = buildRpsDocAnswer(question, hits);
  const structuredSyllabus = buildSyllabusAnswer(question, hits);
  const structuredMaterial = buildMaterialAnswer(question, hits);
  const structuredGraduateUser = buildGraduateUserSatisfactionAnswer(question, hits);
  const structuredTracerStudy = buildTracerStudyAnswer(question, hits);
  const structuredCurriculumDoc = buildCurriculumDocAnswer(question, hits);
  const structuredThesisGuide = buildThesisGuideAnswer(question);

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
    const sources = fact.sources.length || fact === FACTS.administrasi
      ? fact.sources
      : hits.map(sourceFromHit);
    return { answer: fact.answer, sources, mode: "Local knowledge base" };
  }

  if (!hits.length) {
    return {
      answer: currentLang === "en"
        ? "I have not found that information in the program knowledge base. I can answer the curriculum, syllabi, RPS/course plan PDFs, HTML learning materials, academic guides, thesis guides, graduate data, tracer studies, graduate user satisfaction reports, LAMSAMA, community engagement reports, curriculum documents, course delivery evaluations, PBM-Lecturer Evaluation, fees, and admissions that have been indexed. Free-form answers outside this knowledge base require enabling a generative AI API on the server."
        : "Saya belum menemukan informasi tersebut dalam knowledge base prodi. Saat ini saya bisa menjawab kurikulum, silabus, PDF RPS, materi HTML, panduan akademik, panduan tesis, data lulusan, tracer study, laporan kepuasan pengguna lulusan, LAMSAMA, laporan Program Pengabdian, dokumen kurikulum, Evaluasi Pelaksanaan Perkuliahan, Evaluasi PBM-Dosen, biaya, dan pendaftaran yang sudah terindeks. Jawaban bebas di luar knowledge base memerlukan API AI generatif yang aktif di server.",
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
          : hits[0]?.id?.startsWith("graduate-user-satisfaction-")
            ? (currentLang === "en" ? "I found relevant graduate user satisfaction reports:" : "Saya menemukan laporan kepuasan pengguna lulusan yang relevan:")
            : hits[0]?.id?.startsWith("special-moment-")
              ? (currentLang === "en" ? "I found relevant Special Moment gallery entries:" : "Saya menemukan galeri Special Moment yang relevan:")
              : hits[0]?.id?.startsWith("curriculum-doc-")
                ? (currentLang === "en" ? "I found relevant curriculum documents:" : "Saya menemukan dokumen kurikulum yang relevan:")
                : hits[0]?.id?.startsWith("lecture-evaluation-")
                  ? (currentLang === "en" ? "I found relevant course delivery evaluation reports:" : "Saya menemukan laporan Evaluasi Pelaksanaan Perkuliahan yang relevan:")
                  : hits[0]?.id?.startsWith("pbm-evaluation-")
                    ? (currentLang === "en" ? "I found relevant PBM-Lecturer Evaluation documents:" : "Saya menemukan dokumen Evaluasi PBM-Dosen yang relevan:")
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

function renderGraduateUserSatisfaction() {
  if (!graduateUserRows) return;
  const reports = graduateUserSatisfactionData?.reports || [];

  if (graduateUserCount) graduateUserCount.textContent = String(reports.length);

  if (!reports.length) {
    graduateUserRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noGraduateUserReports"))}</p>`;
    return;
  }

  graduateUserRows.innerHTML = reports
    .map((report) => {
      const title = graduateUserReportTitle(report);
      const question = currentLang === "en"
        ? `What is in ${title}?`
        : `Apa isi ${title}?`;
      return `
        <article class="tracer-card user-satisfaction-card">
          <span class="badge">${escapeHTML(graduateUserReportLevel(report))}</span>
          <div class="tracer-year">${escapeHTML(report.year)}</div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(graduateUserReportDescription(report))}</p>
          <dl class="tracer-metrics">
            <div>
              <dt>${escapeHTML(t("graduateUserLevel"))}</dt>
              <dd>${escapeHTML(graduateUserReportLevel(report))}</dd>
            </div>
            <div>
              <dt>${escapeHTML(t("graduateUserFormat"))}</dt>
              <dd>${escapeHTML(report.format || "PDF")}</dd>
            </div>
            <div>
              <dt>${escapeHTML(t("graduateUserPages"))}</dt>
              <dd>${escapeHTML(report.pages || "-")}</dd>
            </div>
          </dl>
          <div class="tracer-actions">
            <a href="${escapeHTML(report.href)}" target="_blank" rel="noopener">${escapeHTML(t("graduateUserOpen"))}</a>
            <button type="button" data-user-satisfaction-q="${escapeHTML(question)}">${escapeHTML(t("graduateUserAskDocument"))}</button>
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

function renderLamsamaReports() {
  if (!lamsamaRows) return;
  const reports = lamsamaReportsData?.reports || [];

  if (lamsamaCount) lamsamaCount.textContent = String(reports.length);

  if (!reports.length) {
    lamsamaRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noLamsamaReports"))}</p>`;
    return;
  }

  lamsamaRows.innerHTML = reports
    .map((report) => {
      const title = lamsamaReportTitle(report);
      const question = currentLang === "en"
        ? `Explain ${title}`
        : `Jelaskan ${title}`;
      return `
        <article class="lamsama-card ${escapeHTML(report.type || "")}">
          <div class="lamsama-card-head">
            <span class="badge">${escapeHTML(lamsamaReportBadge(report))}</span>
            <small>${escapeHTML(report.pages || "-")} ${escapeHTML(t("pages"))}</small>
          </div>
          <div class="lamsama-year">
            <span>${escapeHTML(lamsamaReportPeriodLabel(report))}</span>
            <strong>${escapeHTML(report.year)}</strong>
          </div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(lamsamaReportDescription(report))}</p>
          <div class="lamsama-card-meta">
            <span>${escapeHTML(lamsamaReportSequenceLabel(report))}</span>
            <span>${escapeHTML(report.format || "PDF")} · ${escapeHTML(formatFileSize(report.sizeKb))}</span>
          </div>
          <div class="lamsama-card-actions">
            <a href="${escapeHTML(report.href)}" target="_blank" rel="noopener">${escapeHTML(t("lamsamaOpen"))}</a>
            <button type="button" data-lamsama-q="${escapeHTML(question)}">${escapeHTML(t("lamsamaAskDocument"))}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPkmReports() {
  if (!pkmRows) return;
  const reports = pkmReportsData?.reports || [];

  if (pkmReportCount) pkmReportCount.textContent = String(reports.length);

  if (!reports.length) {
    pkmRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noPkmReports"))}</p>`;
    return;
  }

  pkmRows.innerHTML = reports
    .map((report) => {
      const title = pkmReportTitle(report);
      const question = currentLang === "en"
        ? `Explain ${title}`
        : `Jelaskan ${title}`;
      return `
        <article class="pkm-card">
          <div class="pkm-card-head">
            <span class="badge">${escapeHTML(t("pkmArchive"))}</span>
            <small>${escapeHTML(report.pages || "-")} ${escapeHTML(t("pages"))}</small>
          </div>
          <div class="pkm-period">
            <span>${escapeHTML(t("pkmPeriodLabel"))}</span>
            <strong>${escapeHTML(pkmReportPeriod(report))}</strong>
          </div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(pkmReportDescription(report))}</p>
          <div class="pkm-focus">
            <span>${escapeHTML(t("pkmFocusCardLabel"))}</span>
            <strong>${escapeHTML(pkmReportFocus(report))}</strong>
          </div>
          <div class="pkm-card-meta">
            <span>${escapeHTML(report.format || "PDF")}</span>
            <span>${escapeHTML(formatFileSize(report.sizeKb))}</span>
          </div>
          <div class="pkm-card-actions">
            <a href="${escapeHTML(report.href)}" target="_blank" rel="noopener">${escapeHTML(t("pkmOpen"))}</a>
            <button type="button" data-pkm-q="${escapeHTML(question)}">${escapeHTML(t("pkmAskDocument"))}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderResearchGrants() {
  if (!grantRows) return;
  const grants = researchGrantsData?.grants || [];
  const query = normalize(grantSearch?.value || "");
  const visible = grants.filter((grant) => {
    const matchesYear = activeGrantYear === "all" || String(grant.year) === activeGrantYear;
    const searchable = normalize([
      grant.id,
      grant.year,
      grant.researcher,
      grant.title,
      grant.scheme,
      grant.contractNumber,
      grant.fundingSource
    ].join(" "));
    return matchesYear && (!query || searchable.includes(query));
  });
  const visibleFunding = visible.reduce((total, grant) => total + (Number(grant.amount) || 0), 0);

  if (grantTotalCount) grantTotalCount.textContent = String(researchGrantsData?.total || grants.length);
  if (grantTotalAmount) grantTotalAmount.textContent = formatGrantAmount(researchGrantsData?.totalAmount || 0, true);
  if (grantLinkedCount) grantLinkedCount.textContent = String(researchGrantsData?.linkedDocuments || 0);
  if (grantVisibleCount) grantVisibleCount.textContent = String(visible.length);
  if (grantVisibleAmount) grantVisibleAmount.textContent = formatGrantAmount(visibleFunding);

  if (grantYearTabs) {
    const years = Object.entries(researchGrantsData?.years || {})
      .sort((left, right) => Number(right[0]) - Number(left[0]));
    grantYearTabs.innerHTML = [
      `<button class="${activeGrantYear === "all" ? "active" : ""}" type="button" data-grant-year="all" aria-pressed="${String(activeGrantYear === "all")}">
        <span>${escapeHTML(t("grantAllYears"))}</span>
        <small>${escapeHTML(researchGrantsData?.total || grants.length)}</small>
      </button>`,
      ...years.map(([year, summary]) => `
        <button class="${activeGrantYear === year ? "active" : ""}" type="button" data-grant-year="${escapeHTML(year)}" aria-pressed="${String(activeGrantYear === year)}">
          <span>${escapeHTML(year)}</span>
          <small>${escapeHTML(summary.count)}</small>
        </button>
      `)
    ].join("");
  }

  if (!visible.length) {
    grantRows.innerHTML = `<p class="empty-note">${escapeHTML(t("grantNoResults"))}</p>`;
    return;
  }

  grantRows.innerHTML = visible.map((grant) => {
    const scheme = grant.scheme || t("grantNotListed");
    const fundingSource = grant.fundingSource || t("grantNotListed");
    const contractNumber = grant.contractNumber || t("grantNotListed");
    const documentAction = grant.documentHref
      ? `<a href="${escapeHTML(grant.documentHref)}" target="_blank" rel="noopener"><span>${escapeHTML(t("grantOpenDocument"))}</span><span aria-hidden="true">&#8599;</span></a>`
      : `<span class="research-grant-unavailable">${escapeHTML(t("grantDocumentUnavailable"))}</span>`;
    return `
      <article class="research-grant-card">
        <div class="research-grant-card-head">
          <span>${escapeHTML(grant.id)}</span>
          <strong>${escapeHTML(grant.year)}</strong>
        </div>
        <div class="research-grant-researcher">
          <span>${escapeHTML(t("grantResearcherLabel"))}</span>
          <h3>${escapeHTML(grant.researcher)}</h3>
        </div>
        <p class="research-grant-card-title">${escapeHTML(grant.title)}</p>
        <div class="research-grant-scheme">
          <span>${escapeHTML(t("grantSchemeLabel"))}</span>
          <strong>${escapeHTML(scheme)}</strong>
        </div>
        <dl class="research-grant-meta">
          <div>
            <dt>${escapeHTML(t("grantFundingSourceLabel"))}</dt>
            <dd>${escapeHTML(fundingSource)}</dd>
          </div>
          <div>
            <dt>${escapeHTML(t("grantContractLabel"))}</dt>
            <dd>${escapeHTML(contractNumber)}</dd>
          </div>
        </dl>
        <div class="research-grant-card-foot">
          <div>
            <span>${escapeHTML(t("grantAmountLabel"))}</span>
            <strong>${escapeHTML(grant.amount > 0 ? formatGrantAmount(grant.amount) : t("grantNotListed"))}</strong>
          </div>
          ${documentAction}
        </div>
      </article>
    `;
  }).join("");
}

function renderPksMoa() {
  if (!pksMoaRows) return;
  const agreements = pksMoaData?.agreements || [];
  const query = normalize(pksMoaSearch?.value || "");
  const visible = agreements.filter((agreement) => {
    const matchesType = activePksMoaFilter === "Semua" || agreement.type === activePksMoaFilter;
    const searchable = normalize([
      agreement.type,
      agreement.year,
      agreement.scope,
      agreement.number,
      agreement.titleId,
      agreement.titleEn,
      agreement.collaborator,
      agreement.documentLabel
    ].join(" "));
    return matchesType && (!query || searchable.includes(query));
  });

  if (pksMoaTotalCount) pksMoaTotalCount.textContent = String(pksMoaData?.total || agreements.length);
  if (pksMoaNationalCount) pksMoaNationalCount.textContent = String(pksMoaData?.national || 0);
  if (pksMoaInternationalCount) pksMoaInternationalCount.textContent = String(pksMoaData?.international || 0);
  if (pksMoaVisibleCount) pksMoaVisibleCount.textContent = String(visible.length);

  document.querySelectorAll("[data-pks-moa-filter]").forEach((button) => {
    const isActive = button.dataset.pksMoaFilter === activePksMoaFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (!visible.length) {
    pksMoaRows.innerHTML = `<p class="empty-note">${escapeHTML(t("pksMoaNoResults"))}</p>`;
    return;
  }

  pksMoaRows.innerHTML = visible.map((agreement) => {
    const title = currentLang === "en" ? agreement.titleEn : agreement.titleId;
    const scope = currentLang === "en"
      ? (agreement.scope === "Internasional" ? t("pksMoaInternational") : t("pksMoaNational"))
      : agreement.scope;
    const href = agreement.href || "assets/pks-moa-source.png";
    const actionLabel = agreement.href ? t("pksMoaOpen") : t("pksMoaSourceTable");
    const typeClass = String(agreement.type || "").toLowerCase();
    return `
      <article class="pks-moa-card ${escapeHTML(typeClass)}">
        <div class="pks-moa-card-head">
          <span class="pks-moa-type">${escapeHTML(agreement.type)}</span>
          <span class="pks-moa-scope">${escapeHTML(scope)}</span>
          <strong>${escapeHTML(agreement.year)}</strong>
        </div>
        <div class="pks-moa-partner">
          <span data-i18n="pksMoaPartner">${escapeHTML(t("pksMoaPartner"))}</span>
          <h3>${escapeHTML(agreement.collaborator)}</h3>
        </div>
        <p class="pks-moa-title">${escapeHTML(title)}</p>
        <div class="pks-moa-number">${escapeHTML(agreement.number)}</div>
        <div class="pks-moa-document">
          <span data-i18n="pksMoaDocument">${escapeHTML(t("pksMoaDocument"))}</span>
          <strong>${escapeHTML(agreement.documentLabel)}</strong>
        </div>
        <a class="pks-moa-open" href="${escapeHTML(href)}" target="_blank" rel="noopener">
          <span>${escapeHTML(actionLabel)}</span>
          <span aria-hidden="true">&#8599;</span>
        </a>
      </article>
    `;
  }).join("");
}

function renderScholarships() {
  if (!scholarshipRows) return;
  const scholarships = scholarshipsData?.scholarships || [];

  if (scholarshipCount) scholarshipCount.textContent = String(scholarships.length);

  if (!scholarships.length) {
    scholarshipRows.innerHTML = `<p class="empty-note">${escapeHTML(t("noScholarships"))}</p>`;
    return;
  }

  scholarshipRows.innerHTML = scholarships
    .map((item) => {
      const title = scholarshipTitle(item);
      const question = currentLang === "en"
        ? `Explain the ${title} opportunity and provide its official link`
        : `Jelaskan peluang ${title} dan berikan tautan resminya`;
      return `
        <article class="scholarship-card">
          <a class="scholarship-media" href="${escapeHTML(item.url)}" target="_blank" rel="noopener" aria-label="${escapeHTML(t("scholarshipOfficial"))}: ${escapeHTML(title)}">
            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(title)}" loading="lazy" decoding="async" />
            <span>${escapeHTML(t("scholarshipOfficialSite"))}</span>
          </a>
          <div class="scholarship-card-copy">
            <span class="badge">${escapeHTML(scholarshipCategory(item))}</span>
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(scholarshipDescription(item))}</p>
            <div class="scholarship-audience">
              <span>${escapeHTML(t("scholarshipAudience"))}</span>
              <strong>${escapeHTML(scholarshipAudience(item))}</strong>
            </div>
            <div class="scholarship-actions">
              <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">${escapeHTML(t("scholarshipOfficial"))}</a>
              <button type="button" data-scholarship-q="${escapeHTML(question)}">${escapeHTML(t("scholarshipAskProgram"))}</button>
            </div>
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

async function loadGraduateUserSatisfaction() {
  try {
    const response = await fetch("data/graduate_user_satisfaction.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Laporan kepuasan pengguna lulusan tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.reports?.length) throw new Error("Laporan kepuasan pengguna lulusan kosong.");
    graduateUserSatisfactionData = data;
  } catch (error) {
    graduateUserSatisfactionData = { total: 0, reports: [], years: [] };
  }
  renderGraduateUserSatisfaction();
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

async function loadLamsamaReports() {
  try {
    const response = await fetch("data/lamsama_reports.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Laporan tahunan LAMSAMA tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.reports?.length) throw new Error("Laporan tahunan LAMSAMA kosong.");
    lamsamaReportsData = data;
  } catch (error) {
    lamsamaReportsData = { total: 0, reports: [] };
  }
  renderLamsamaReports();
}

async function loadPkmReports() {
  try {
    const response = await fetch("data/pkm_reports.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Laporan Program Pengabdian tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.reports?.length) throw new Error("Laporan Program Pengabdian kosong.");
    pkmReportsData = data;
  } catch (error) {
    pkmReportsData = { total: 0, reports: [] };
  }
  renderPkmReports();
}

async function loadResearchGrants() {
  try {
    const response = await fetch("data/research_grants.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Data Hibah Riset Dosen tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.grants?.length) throw new Error("Data Hibah Riset Dosen kosong.");
    researchGrantsData = data;
  } catch (error) {
    researchGrantsData = {
      total: 0,
      totalAmount: 0,
      linkedDocuments: 0,
      period: [],
      years: {},
      grants: []
    };
  }
  renderResearchGrants();
}

async function loadPksMoa() {
  try {
    const response = await fetch("data/pks_moa.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Data PKS-MoA tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.agreements?.length) throw new Error("Data PKS-MoA kosong.");
    pksMoaData = data;
  } catch (error) {
    pksMoaData = { total: 0, national: 0, international: 0, agreements: [] };
  }
  renderPksMoa();
}

async function loadScholarships() {
  try {
    const response = await fetch("data/scholarships.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Informasi beasiswa tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.scholarships?.length) throw new Error("Informasi beasiswa kosong.");
    scholarshipsData = data;
  } catch (error) {
    scholarshipsData = { total: 0, scholarships: [] };
  }
  renderScholarships();
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
    if (!response.ok) throw new Error("Dokumen Evaluasi PBM-Dosen tidak dapat dimuat.");
    const data = await response.json();
    if (!data?.documents?.length) throw new Error("Dokumen Evaluasi PBM-Dosen kosong.");
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
document.querySelectorAll("[data-academic-guide-q]").forEach((button) => {
  button.addEventListener("click", () => ask(button.dataset.academicGuideQ));
});
tracerStudyRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tracer-q]");
  if (!button) return;
  ask(button.dataset.tracerQ);
});
graduateUserRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-user-satisfaction-q]");
  if (!button) return;
  ask(button.dataset.userSatisfactionQ);
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
lamsamaRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lamsama-q]");
  if (!button) return;
  ask(button.dataset.lamsamaQ);
});
pkmRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pkm-q]");
  if (!button) return;
  ask(button.dataset.pkmQ);
});
grantYearTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-grant-year]");
  if (!button) return;
  activeGrantYear = button.dataset.grantYear || "all";
  renderResearchGrants();
});
grantSearch?.addEventListener("input", renderResearchGrants);
document.querySelector(".pks-moa-filter-tabs")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pks-moa-filter]");
  if (!button) return;
  activePksMoaFilter = button.dataset.pksMoaFilter || "Semua";
  renderPksMoa();
});
pksMoaSearch?.addEventListener("input", renderPksMoa);
scholarshipRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scholarship-q]");
  if (!button) return;
  ask(button.dataset.scholarshipQ);
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
setupInspirationVoices();
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
loadGraduateUserSatisfaction();
loadSpecialMoments();
loadTestimonials();
loadCurriculumDocs();
loadLamsamaReports();
loadPkmReports();
loadResearchGrants();
loadPksMoa();
loadScholarships();
loadLectureEvaluations();
loadPbmEvaluations();
loadAlumni();
