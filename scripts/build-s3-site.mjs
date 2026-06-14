import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDirName = "@Dokumen S3";
const sourceDir = path.join(rootDir, sourceDirName);
const rpsDirName = "RPS_S3_Statistika";
const rpsDir = path.join(sourceDir, rpsDirName);
const outputPath = path.join(rootDir, "data", "s3_statistika.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");

function encodeHref(filePath) {
  return filePath.split(path.sep).map(encodeURIComponent).join("/");
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

function slugify(value) {
  return normalize(value).replace(/\s+/g, "-").replace(/^-|-$/g, "");
}

function formatTitle(fileName) {
  return String(fileName || "")
    .replace(/\.(docx|pdf)$/i, "")
    .replace(/^RPS\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function docEntry(fileName, title, description) {
  const fullPath = path.join(sourceDir, fileName);
  const stat = fs.statSync(fullPath);
  const relativePath = path.relative(rootDir, fullPath);
  return {
    id: slugify(title),
    title,
    description,
    file: fileName,
    href: encodeHref(relativePath),
    sizeKb: Math.round(stat.size / 1024),
    format: "PDF"
  };
}

const courseMeta = new Map([
  ["etika dan filsafat keilmuan statistika", {
    credits: 3,
    group: "Fondasi & Metodologi",
    groupEn: "Foundations & Methodology",
    titleEn: "Ethics and Philosophy of Statistical Science",
    description: "Penguatan etika akademik, filsafat ilmu, integritas riset, dan tata kelola data pada jenjang doktoral."
  }],
  ["penguatan riset dasar", {
    credits: 6,
    group: "Fondasi & Metodologi",
    groupEn: "Foundations & Methodology",
    titleEn: "Doctoral Research Foundation",
    description: "Penguatan fondasi teori, perumusan novelty, dan kesiapan riset statistik tingkat doktoral."
  }],
  ["metodologi riset dan penulisan ilmiah", {
    credits: 3,
    group: "Fondasi & Metodologi",
    groupEn: "Foundations & Methodology",
    titleEn: "Research Methodology and Scientific Writing",
    description: "Metodologi riset, rancangan penelitian, dan penulisan ilmiah untuk publikasi bereputasi."
  }],
  ["penulisan studi literatur review", {
    credits: 3,
    group: "Fondasi & Metodologi",
    groupEn: "Foundations & Methodology",
    titleEn: "Literature Review Writing",
    description: "Penyusunan kajian pustaka sistematis sebagai dasar posisi riset dan kebaruan disertasi."
  }],
  ["personal development skills", {
    credits: 2,
    group: "Fondasi & Metodologi",
    groupEn: "Foundations & Methodology",
    titleEn: "Personal Development Skills",
    description: "Penguatan kemandirian, kepemimpinan, komunikasi ilmiah, dan kesiapan karier doktoral."
  }],
  ["proposal riset", {
    credits: 3,
    group: "Riset & Disertasi",
    groupEn: "Research & Dissertation",
    titleEn: "Research Proposal",
    description: "Penyusunan proposal riset doktoral yang orisinal, terukur, dan selaras dengan CPL."
  }],
  ["seminar usulan riset sur", {
    credits: 6,
    group: "Riset & Disertasi",
    groupEn: "Research & Dissertation",
    titleEn: "Research Proposal Seminar",
    description: "Seminar usulan riset untuk menguji kelayakan masalah, metode, dan kontribusi disertasi."
  }],
  ["penelaahan naskah disertasi 1 pnd 1", {
    credits: 3,
    group: "Riset & Disertasi",
    groupEn: "Research & Dissertation",
    titleEn: "Dissertation Manuscript Review 1",
    description: "Penelaahan naskah disertasi tahap pertama untuk memastikan kemajuan riset dan kualitas argumen ilmiah."
  }],
  ["penelaahan naskah disertasi 2 pnd 2", {
    credits: 3,
    group: "Riset & Disertasi",
    groupEn: "Research & Dissertation",
    titleEn: "Dissertation Manuscript Review 2",
    description: "Penelaahan naskah disertasi tahap kedua untuk mematangkan kontribusi, validasi, dan kesiapan ujian."
  }],
  ["ujian naskah disertasi und", {
    credits: 6,
    group: "Riset & Disertasi",
    groupEn: "Research & Dissertation",
    titleEn: "Dissertation Manuscript Examination",
    description: "Ujian naskah disertasi untuk menilai kelayakan substansi, metodologi, dan kontribusi doktoral."
  }],
  ["sidang promosi doktor spd", {
    credits: 6,
    group: "Riset & Disertasi",
    groupEn: "Research & Dissertation",
    titleEn: "Doctoral Promotion Defense",
    description: "Sidang promosi doktor sebagai tahap akhir pertanggungjawaban ilmiah disertasi."
  }],
  ["keterampilan diseminasi dan pengembangan pengetahuan", {
    credits: 4,
    group: "Diseminasi & Rekognisi",
    groupEn: "Dissemination & Recognition",
    titleEn: "Dissemination Skills and Knowledge Development",
    description: "Penguatan kemampuan diseminasi, knowledge translation, publikasi, dan pengembangan dampak riset."
  }],
  ["diseminasi nasional dn", {
    credits: 2,
    group: "Diseminasi & Rekognisi",
    groupEn: "Dissemination & Recognition",
    titleEn: "National Dissemination",
    description: "Diseminasi hasil riset pada forum nasional, komunitas akademik, atau pemangku kepentingan strategis."
  }],
  ["diseminasi internasional di", {
    credits: 4,
    group: "Diseminasi & Rekognisi",
    groupEn: "Dissemination & Recognition",
    titleEn: "International Dissemination",
    description: "Diseminasi hasil riset pada forum internasional atau publikasi bereputasi."
  }]
]);

function courseMetaFor(title) {
  const key = normalize(title);
  return courseMeta.get(key)
    || [...courseMeta.entries()].find(([candidate]) => key.includes(candidate) || candidate.includes(key))?.[1]
    || {
      credits: "",
      group: "RPS S3",
      groupEn: "Doctoral RPS",
      titleEn: title,
      description: `Dokumen RPS untuk ${title} pada Program Doktor Statistika.`
    };
}

function buildRpsDocuments() {
  if (!fs.existsSync(rpsDir)) return [];
  return fs.readdirSync(rpsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".pdf"))
    .map((entry) => {
      const fullPath = path.join(rpsDir, entry.name);
      const stat = fs.statSync(fullPath);
      const relativePath = path.relative(rootDir, fullPath);
      const courseTitle = formatTitle(entry.name);
      const meta = courseMetaFor(courseTitle);
      return {
        id: `s3-rps-${slugify(courseTitle)}`,
        title: `RPS ${courseTitle}`,
        titleId: `RPS ${courseTitle}`,
        titleEn: `Course Plan ${meta.titleEn}`,
        courseTitle,
        courseTitleEn: meta.titleEn,
        credits: meta.credits,
        group: meta.group,
        groupEn: meta.groupEn,
        description: meta.description,
        file: entry.name,
        href: encodeHref(relativePath),
        sizeKb: Math.round(stat.size / 1024),
        format: "PDF",
        source: `${sourceDirName}/${rpsDirName}`
      };
    })
    .sort((a, b) => {
      const order = ["Fondasi & Metodologi", "Riset & Disertasi", "Diseminasi & Rekognisi"];
      const groupDiff = order.indexOf(a.group) - order.indexOf(b.group);
      if (groupDiff) return groupDiff;
      return a.courseTitle.localeCompare(b.courseTitle, "id");
    });
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Folder dokumen S3 tidak ditemukan: ${sourceDir}`);
}

const rpsDocuments = buildRpsDocuments();
const groups = ["Fondasi & Metodologi", "Riset & Disertasi", "Diseminasi & Rekognisi"]
  .map((label) => {
    const documents = rpsDocuments.filter((doc) => doc.group === label);
    const credits = documents.reduce((sum, doc) => sum + Number(doc.credits || 0), 0);
    return {
      id: slugify(label),
      label,
      labelEn: documents[0]?.groupEn || label,
      total: documents.length,
      credits
    };
  });

const program = {
  title: "S3 Statistika",
  titleEn: "Doctoral Program in Statistics",
  subtitle: "FMIPA Universitas Padjadjaran",
  lead: "Program Doktor Statistika dirancang berbasis riset untuk menghasilkan kontribusi orisinal dalam teori, metodologi, komputasi, dan sistem inferensi statistik.",
  leadEn: "The Doctoral Program in Statistics is research-based and designed to produce original contributions in statistical theory, methodology, computation, and statistical inference systems.",
  studyLoad: "54 SKS",
  fullTime: "6 semester",
  partTime: "8 semester",
  maxStudy: "12 semester",
  structure: [
    { label: "Kompetensi Kualifikasi Doktor", labelEn: "Doctoral Qualification Competence", credits: 12 },
    { label: "Riset dan Disertasi", labelEn: "Research and Dissertation", credits: 42 }
  ],
  highlights: [
    "Riset doktoral berbasis novelty dan integritas ilmiah.",
    "Komputasi statistik, reproducible research, dan responsible AI.",
    "Publikasi, diseminasi, dashboard, software, dan policy brief sebagai luaran riset.",
    "Ekosistem riset S2-S3 melalui research group, co-publication, dan doctoral colloquium."
  ]
};

const vision = "Menjadi Program Studi Doktor Statistika yang unggul, bereputasi internasional, dan berdampak dalam pengembangan teori, metodologi, komputasi, serta sistem inferensi statistik untuk menyelesaikan persoalan kompleks lokal, nasional, dan global.";

const missions = [
  "Menyelenggarakan pendidikan doktor statistika berbasis riset yang menekankan orisinalitas, integritas, kedalaman teori, dan kekuatan metodologi.",
  "Mengembangkan riset statistik yang menghasilkan teori, metode, model, estimator, algoritma, dan sistem inferensi baru yang teruji.",
  "Memperkuat komputasi statistik, reproducible research, dan responsible AI sebagai bagian dari pengembangan statistik modern.",
  "Menghasilkan publikasi internasional bereputasi dan luaran inovatif berupa software, dashboard, policy brief, atau model keputusan.",
  "Membangun ekosistem riset S2-S3 melalui research group, shared analytics laboratory, co-publication, dan doctoral colloquium.",
  "Mengembangkan kerja sama nasional dan internasional untuk joint supervision, visiting professor, external examiner, dan riset kolaboratif."
];

const objectives = [
  "Menghasilkan lulusan doktor yang mampu mengembangkan teori, metode, dan model statistika baru atau teruji untuk menyelesaikan persoalan kompleks berbasis data.",
  "Menghasilkan peneliti, akademisi, metodolog statistik, konsultan, dan pemimpin analitik yang mandiri, berintegritas, serta mampu menghasilkan kontribusi ilmiah orisinal.",
  "Mengembangkan riset statistika modern yang mencakup inferensi statistik, statistika Bayesian, statistika komputasi, machine learning, sains data, statistika spasial-temporal, forecasting probabilistik, analitik risiko, causal inference, survei, statistika resmi, dan evaluasi kebijakan.",
  "Meningkatkan luaran akademik bereputasi melalui publikasi ilmiah, diseminasi riset, kolaborasi nasional dan internasional, serta pengembangan inovasi berbasis statistika.",
  "Membangun ekosistem riset kolaboratif dengan perguruan tinggi, lembaga pemerintah, industri, lembaga riset, asosiasi profesi, dan masyarakat pengguna data.",
  "Mendukung pengambilan keputusan berbasis data melalui pengembangan model, sistem inferensi, evaluasi dampak kebijakan, dan decision dashboard yang valid, transparan, dan berkelanjutan.",
  "Memperkuat mutu akademik dan daya saing internasional Program Studi Doktor Statistika melalui kurikulum berbasis riset, standar CPL jenjang KKNI Level 9, serta orientasi pada akreditasi internasional."
];

const graduateProfiles = [
  {
    code: "P1",
    title: "Akademisi Doktoral",
    titleEn: "Doctoral Academic",
    description: "Dosen dan pendidik yang mengembangkan pembelajaran dan riset statistika tingkat lanjut.",
    competencies: "Pengembangan kurikulum, publikasi, pembimbingan, dan kepemimpinan akademik."
  },
  {
    code: "P2",
    title: "Peneliti Utama",
    titleEn: "Principal Researcher",
    description: "Pemimpin riset di perguruan tinggi, lembaga riset, kementerian, BPS, industri, dan lembaga internasional.",
    competencies: "Desain riset, metodologi, hibah, publikasi, dan jejaring kolaborasi."
  },
  {
    code: "P3",
    title: "Metodolog Statistik",
    titleEn: "Statistical Methodologist",
    description: "Pengembang teori, model, estimator, algoritma, dan framework inferensi statistik.",
    competencies: "Advanced inference, validasi, simulasi, komputasi, dan reproducibility."
  },
  {
    code: "P4",
    title: "Data Policy Scientist",
    titleEn: "Data Policy Scientist",
    description: "Ahli yang menerjemahkan data dan bukti statistik menjadi rekomendasi kebijakan.",
    competencies: "Causal inference, policy analytics, dashboard, dan policy brief."
  },
  {
    code: "P5",
    title: "Epidemiological/Public Health Statistician",
    titleEn: "Epidemiological/Public Health Statistician",
    description: "Ahli statistik untuk kesehatan publik, disease mapping, dan evaluasi intervensi.",
    competencies: "Biostatistics, Bayesian/spatiotemporal model, dan public health analytics."
  },
  {
    code: "P6",
    title: "Survey and Official Statistics Specialist",
    titleEn: "Survey and Official Statistics Specialist",
    description: "Ahli statistik untuk survei kompleks, data administratif, dan statistik resmi.",
    competencies: "Sampling, small area estimation, calibration, dan data integration."
  },
  {
    code: "P7",
    title: "Risk, Actuarial, and Financial Analytics Scientist",
    titleEn: "Risk, Actuarial, and Financial Analytics Scientist",
    description: "Ahli risiko, aktuaria, dan pemodelan keuangan.",
    competencies: "Time series, extreme value, survival/loss model, dan risk analytics."
  },
  {
    code: "P8",
    title: "Statistical Consulting and Dashboard Leader",
    titleEn: "Statistical Consulting and Dashboard Leader",
    description: "Pemimpin konsultasi statistik dan pengembang sistem keputusan berbasis data.",
    competencies: "Communication, consulting, software, dashboard, dan stakeholder engagement."
  },
  {
    code: "P9",
    title: "Energy Transition and Renewable Energy Statistician",
    titleEn: "Energy Transition and Renewable Energy Statistician",
    description: "Ahli statistika untuk perencanaan, pemantauan, evaluasi, dan pengambilan keputusan Energi Baru Terbarukan serta transisi energi berkelanjutan.",
    competencies: "Spatiotemporal modeling, probabilistic forecasting, Bayesian hierarchical modeling, uncertainty quantification, risk analytics, causal-policy evaluation, optimal site selection, dan energy decision dashboard."
  }
];

const cpl = [
  { code: "CPL-1", domain: "Sikap dan etika akademik", text: "Lulusan mampu menginternalisasi nilai religius, Pancasila, kemanusiaan, integritas akademik, etika riset, tanggung jawab sosial, dan tata kelola data yang bertanggung jawab." },
  { code: "CPL-2", domain: "Pengetahuan dan filosofi keilmuan", text: "Lulusan mampu mensintesis teori statistika, probabilitas, inferensi, pemodelan, komputasi, dan filosofi sains untuk merumuskan masalah ilmiah tingkat doktoral." },
  { code: "CPL-3", domain: "Kreasi metodologi statistik", text: "Lulusan mampu menciptakan, mengembangkan, dan memvalidasi metode, model, estimator, algoritma, atau sistem inferensi statistik yang orisinal dan teruji." },
  { code: "CPL-4", domain: "Komputasi dan reproducible research", text: "Lulusan mampu merancang komputasi statistik yang efisien, transparan, skalabel, dapat direproduksi, dan sesuai dengan prinsip responsible AI serta tata kelola data." },
  { code: "CPL-5", domain: "Riset interdisipliner berbasis statistika", text: "Lulusan mampu memimpin riset statistik pada masalah kompleks lintas bidang dengan tetap menjaga kontribusi metodologis statistika sebagai inti disertasi." },
  { code: "CPL-6", domain: "Diseminasi dan rekognisi ilmiah", text: "Lulusan mampu mendiseminasikan kontribusi riset melalui publikasi internasional bereputasi, konferensi, repository, dashboard, dan komunikasi ilmiah yang efektif." },
  { code: "CPL-7", domain: "Kepemimpinan riset", text: "Lulusan mampu memimpin kelompok riset, membangun kolaborasi nasional-internasional, mengelola proyek penelitian, dan membina komunitas ilmiah." },
  { code: "CPL-8", domain: "Dampak kebijakan dan inovasi", text: "Lulusan mampu menerjemahkan kontribusi statistik menjadi rekomendasi kebijakan, inovasi sistem keputusan, atau solusi berbasis data yang bermanfaat bagi masyarakat." }
];

const documents = [
  docEntry("Kurikulum S3 STATISTIKA.pdf", "Kurikulum S3 Statistika", "Dokumen kurikulum utama Program Doktor Statistika."),
  docEntry("Naskah Syarat Akreditasi Minimal.pdf", "Naskah Syarat Akreditasi Minimal", "Naskah akademik untuk kebutuhan pemenuhan syarat akreditasi minimal."),
  docEntry("Naskah Urgensi S3 Statistika.pdf", "Naskah Urgensi S3 Statistika", "Naskah urgensi pendirian dan pengembangan Program Doktor Statistika.")
];

const manifest = {
  source: sourceDirName,
  generatedAt: new Date().toISOString(),
  program,
  vision,
  missions,
  objectives,
  graduateProfiles,
  cpl,
  documents,
  rps: {
    total: rpsDocuments.length,
    totalCredits: rpsDocuments.reduce((sum, doc) => sum + Number(doc.credits || 0), 0),
    groups,
    documents: rpsDocuments
  }
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("s3-"));
  const chunksToAdd = [
    {
      id: "s3-overview",
      title: "Web S3 Statistika",
      sourceTitle: "Kurikulum S3 Statistika",
      sourceUrl: documents[0].href,
      text: `${program.title} ${program.subtitle}. ${program.lead} Beban studi ${program.studyLoad}; penuh waktu ${program.fullTime}; paruh waktu ${program.partTime}; batas studi maksimum ${program.maxStudy}. Struktur: Kompetensi Kualifikasi Doktor 12 SKS dan Riset dan Disertasi 42 SKS.`
    },
    {
      id: "s3-visi",
      title: "Visi S3 Statistika",
      sourceTitle: "Kurikulum S3 Statistika",
      sourceUrl: documents[0].href,
      text: `Visi Program Studi Doktor Statistika: ${vision}`
    },
    {
      id: "s3-misi",
      title: "Misi S3 Statistika",
      sourceTitle: "Naskah Urgensi S3 Statistika",
      sourceUrl: documents[2].href,
      text: `Misi Program Studi Doktor Statistika: ${missions.join(" ")}`
    },
    {
      id: "s3-tujuan",
      title: "Tujuan S3 Statistika",
      sourceTitle: "Kurikulum S3 Statistika",
      sourceUrl: documents[0].href,
      text: `Tujuan Program Studi Doktor Statistika: ${objectives.join(" ")}`
    },
    {
      id: "s3-profil-lulusan",
      title: "Profil Lulusan S3 Statistika",
      sourceTitle: "Naskah Syarat Akreditasi Minimal",
      sourceUrl: documents[1].href,
      text: `Profil lulusan Program Studi Doktor Statistika: ${graduateProfiles.map((profile) => `${profile.code} ${profile.title}: ${profile.description} Kompetensi utama: ${profile.competencies}`).join(" ")}`
    },
    {
      id: "s3-cpl",
      title: "Capaian Pembelajaran Lulusan S3 Statistika",
      sourceTitle: "Naskah Urgensi S3 Statistika",
      sourceUrl: documents[2].href,
      text: `Capaian Pembelajaran Lulusan Program Studi Doktor Statistika: ${cpl.map((item) => `${item.code} ${item.domain}: ${item.text}`).join(" ")}`
    },
    {
      id: "s3-rps-catalog",
      title: "Katalog RPS S3 Statistika",
      sourceTitle: "RPS S3 Statistika",
      text: `Katalog RPS S3 Statistika memuat ${rpsDocuments.length} dokumen PDF dengan total ${manifest.rps.totalCredits} SKS. Kelompok RPS: ${groups.map((group) => `${group.label} ${group.total} dokumen ${group.credits} SKS`).join("; ")}.`
    },
    ...documents.map((doc) => ({
      id: `s3-document-${doc.id}`,
      title: doc.title,
      sourceTitle: doc.title,
      sourceUrl: doc.href,
      text: `${doc.title} tersedia sebagai dokumen Program Doktor Statistika. ${doc.description} Link dokumen: ${doc.href}. Format ${doc.format}, ukuran ${doc.sizeKb} KB.`
    })),
    ...rpsDocuments.map((doc) => ({
      id: `s3-rps-doc-${doc.id}`,
      title: doc.title,
      sourceTitle: doc.title,
      sourceUrl: doc.href,
      text: `${doc.title} tersedia untuk Program Doktor Statistika. Mata kuliah/kegiatan ${doc.courseTitle}, ${doc.credits} SKS, kelompok ${doc.group}. ${doc.description} Link dokumen RPS S3: ${doc.href}.`
    }))
  ];
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...chunksToAdd], null, 2)}\n`);
}

console.log(`Berhasil membuat Web S3 dengan ${rpsDocuments.length} RPS S3.`);
