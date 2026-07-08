const genericQueryTerms = GENERIC_QUERY_TERMS;

["siapa", "kapan", "bagaimana", "dimana", "mengapa", "saat", "sekarang"]
  .forEach((term) => STOPWORDS.add(term));

function chatbotChunkMatchesIntent(question, chunk) {
  const text = normalize(question);
  const id = String(chunk.id || "");
  const rules = [
    ["syllabus-", /silabus|sylabus|referensi|topik kuliah|bahan kajian|deskripsi mata kuliah/],
    ["material-", /materi|bahan ajar|modul|html|katalog|slide|pertemuan|file kuliah/],
    ["thesis-guide-", /panduan tesis|penulisan tesis|format tesis|pelaksanaan tesis|sur|skr|sam|sidang akhir|seminar usulan|seminar kemajuan/],
    ["tracer-study-", /tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus|gaji pertama|gaji sekarang|penghasilan pertama|penghasilan saat ini|pendapatan pertama|pendapatan sekarang/],
    ["graduate-user-satisfaction-", /kepuasan pengguna|pengguna lulusan|user satisfaction|graduate user|employer satisfaction|survei pengguna/],
    ["special-moment-", /special moment|momen|foto angkatan|galeri|gallery|dokumentasi/],
    ["curriculum-doc-", /dokumen kurikulum|file kurikulum|pdf kurikulum|arsip kurikulum|curriculum document|curriculum pdf/],
    ["lecture-evaluation-", /evaluasi pelaksanaan perkuliahan|evaluasi perkuliahan|monitoring perkuliahan|monitoring mahasiswa|sesi perkuliahan/],
    ["pbm-evaluation-", /evaluasi pbm|pbm dosen|evaluasi dosen|evaluasi pembelajaran|proses belajar mengajar|mutu akademik/],
    ["rps-doc-", /rps|rencana pembelajaran semester|course plan|semester learning plan/],
    ["s3-", /s3|doktor|doctoral|doctorate|program doktor|statistika doktor|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional/]
  ];

  const rule = rules.find(([prefix]) => id.startsWith(prefix));
  return !rule || rule[1].test(text);
}

retrieve = function retrieveRelevantChunks(question, limit = 5) {
  return knowledge
    .map((chunk) => ({ ...chunk, score: scoreChunk(question, chunk) }))
    .filter((chunk) => chunk.score >= 10 && chatbotChunkMatchesIntent(question, chunk))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

isS3Question = function isExplicitS3Question(question) {
  const text = normalize(question);
  return /s3|doktor|doctoral|doctorate|program doktor|statistika doktor|web s3|disertasi|promosi doktor|pnd|und|spd|diseminasi nasional|diseminasi internasional/.test(text);
};

findTracerReport = function findTracerReportIncluding2026(question) {
  const reports = tracerStudiesData?.reports || [];
  const year = normalize(question).match(/\b(2022|2023|2024|2025|2026)\b/)?.[1];
  return year ? reports.find((report) => String(report.year) === year) || null : null;
};

function chatbotTracerSummary(question, report = null) {
  const year = normalize(question).match(/\b(2022|2023|2024|2025|2026)\b/)?.[1]
    || String(report?.year || "");
  return (tracerSummaryData?.years || []).find((item) => String(item.year) === year) || null;
}

function chatbotTracerDistribution(items = []) {
  return items
    .filter((item) => Number(item.count) > 0)
    .map((item, index) => `${index + 1}. ${tracerCategoryLabel(item.label)}: ${formatTracerSummaryValue(item.pct)} (${item.count} respons)`)
    .join("\n");
}

buildTracerStudyAnswer = function buildDetailedTracerAnswer(question, hits = []) {
  const text = normalize(question);
  const asksTracer = /tracer|tacer|waktu tunggu|pekerjaan pertama|serapan lulusan|bekerja sebelum lulus|gaji pertama|gaji sekarang|penghasilan pertama|penghasilan saat ini|pendapatan pertama|pendapatan sekarang/.test(text)
    || hits.some((hit) => String(hit.id || "").startsWith("tracer-study-"));
  if (!asksTracer) return null;

  const selected = findTracerReport(question);
  const reports = selected ? [selected] : (tracerStudiesData?.reports || []);
  if (!reports.length) return null;

  const summary = chatbotTracerSummary(question, selected || reports[reports.length - 1]);
  const sourceReport = selected || reports.find((report) => String(report.year) === String(summary?.year)) || reports[reports.length - 1];
  const sources = sourceReport ? [{ title: sourceReport.title, url: sourceReport.href }] : [];

  if (summary && /gaji pertama|penghasilan pertama|pendapatan pertama|first salary|first income/.test(text)) {
    return {
      answer: `Distribusi penghasilan pertama lulusan pada Tracer Studi ${summary.year}:\n\n${chatbotTracerDistribution(summary.distributions?.firstIncome)}\n\nJumlah respons: ${summary.responses}.`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (summary && /gaji sekarang|penghasilan sekarang|pendapatan sekarang|penghasilan saat ini|current salary|current income/.test(text)) {
    return {
      answer: `Distribusi penghasilan saat ini pada Tracer Studi ${summary.year}:\n\n${chatbotTracerDistribution(summary.distributions?.currentIncome)}\n\nJumlah respons: ${summary.responses}.`,
      sources,
      mode: "Local knowledge base"
    };
  }

  if (summary && /waktu tunggu|pekerjaan pertama|berapa bulan|sebelum lulus|first job|waiting time/.test(text)) {
    return {
      answer: [
        `Waktu tunggu pekerjaan pertama pada Tracer Studi ${summary.year}:`,
        `Median: ${formatTracerSummaryValue(summary.kpis?.medianWaitMonths, "")} bulan.`,
        `Rata-rata: ${formatTracerSummaryValue(summary.kpis?.meanWaitMonths, "")} bulan.`,
        `Memperoleh pekerjaan dalam <= 3 bulan: ${formatTracerSummaryValue(summary.kpis?.within3MonthsPct)}.`,
        `Sudah bekerja sebelum lulus: ${formatTracerSummaryValue(summary.kpis?.workingBeforeGraduationPct)}.`,
        `Respons waktu tunggu yang valid: ${summary.kpis?.validWait || "-"}.`
      ].join("\n"),
      sources,
      mode: "Local knowledge base"
    };
  }

  const answer = reports.map((report) => [
    `${report.title}: ${report.summary}`,
    `Respons dianalisis: ${report.metrics?.responses || "-"}.`,
    `Median waktu tunggu kerja pertama: ${report.metrics?.medianWait || "-"}.`,
    `Pekerjaan pertama <= 3 bulan: ${report.metrics?.firstJobUnder3Months || "-"}.`,
    `Sudah bekerja sebelum lulus: ${report.metrics?.workingBeforeGraduation || "-"}.`,
    `Laporan: ${report.href}`
  ].join("\n")).join("\n\n");

  return {
    answer,
    sources: reports.map((report) => ({ title: report.title, url: report.href })),
    mode: "Local knowledge base"
  };
};

const buildLocalAnswerBase = buildLocalAnswer;
buildLocalAnswer = function buildSafeLocalAnswer(question) {
  try {
    return buildLocalAnswerBase(question);
  } catch (error) {
    console.error("Chatbot local gagal memproses pertanyaan:", error);
    return {
      answer: currentLang === "en"
        ? "The chatbot could not process that question. Please try a shorter question that mentions the topic and year."
        : "Chatbot belum dapat memproses pertanyaan tersebut. Coba tuliskan pertanyaan yang lebih singkat dengan menyebutkan topik dan tahun.",
      sources: [],
      mode: "Local knowledge base"
    };
  }
};

if (!workspacePanelIds.includes("evaluasi-project-mahasiswa-2026")) {
  workspacePanelIds.push("evaluasi-project-mahasiswa-2026");
}
if (!workspacePanelIds.includes("output-project-mahasiswa-2026")) {
  workspacePanelIds.push("output-project-mahasiswa-2026");
}
if (!workspacePanelIds.includes("sharing-session-alumni")) {
  workspacePanelIds.push("sharing-session-alumni");
}
if (!evaluationPanelIds.includes("evaluasi-project-mahasiswa-2026")) {
  evaluationPanelIds.push("evaluasi-project-mahasiswa-2026");
}
if (!evaluationPanelIds.includes("output-project-mahasiswa-2026")) {
  evaluationPanelIds.push("output-project-mahasiswa-2026");
}

Object.assign(I18N.id, {
  workspaceAlumniSharing: "Sharing Session Alumni",
  alumniSharingKicker: "Sharing Session Alumni",
  alumniSharingTitle: "Pengalaman alumni menjadi ruang belajar bersama.",
  alumniSharingText: "Rangkaian sesi yang mempertemukan mahasiswa dengan alumni untuk membahas keahlian statistik, pengembangan karier, riset, dan pengalaman profesional.",
  alumniSharingSpeakers: "Narasumber",
  alumniSharingPeriod: "Periode kegiatan",
  alumniSharingTopics: "Topik utama",
  alumniSharingFeatured: "Alumni Berprestasi",
  alumniSharingTalk: "Ngobrol Bareng Alumni",
  alumniSharingInspiration: "Inspirasi Alumni",
  alumniSharingSeminar: "Seminar Series Alumni",
  alumniSharingDate: "Tanggal",
  alumniSharingTime: "Waktu",
  alumniSharingFormat: "Format",
  alumniSharingFocus: "Fokus",
  alumniSharingClassroom: "Kelas tatap muka",
  alumniSharingNaimaText: "Sesi ini memperkenalkan dasar text analysis dalam data science, mulai dari pengolahan teks hingga pemanfaatannya untuk menghasilkan insight berbasis data.",
  alumniSharingYogaText: "Percakapan alumni tentang membangun karier, memanfaatkan AI, dan menerjemahkan kompetensi statistika terapan menjadi peluang profesional setelah lulus.",
  alumniSharingDilaText: "Sesi inspiratif mengenai perjalanan akademik dan profesional alumni, termasuk strategi menyiapkan riset yang mampu menembus publikasi bereputasi Q1.",
  alumniSharingAgusText: "Seminar ini membahas model simultan spasial untuk menganalisis keterkaitan antarwilayah dan penerapannya pada persoalan statistik nyata.",
  workspaceProjectEvaluation: "Evaluasi Project Mahasiswa 2026",
  evaluationHubText: "Evaluasi akademik dan galeri output project mahasiswa ditempatkan dalam satu pintu akses agar mudah ditemukan.",
  evaluationHubProjectText: "Form evaluasi project Epidemiologi, Analisis Spasial, dan Pembelajaran Mesin",
  projectEvalKicker: "Evaluasi Project Mahasiswa",
  projectEvalTitle: "Form evaluasi project mata kuliah 2026.",
  projectEvalText: "Pilih mata kuliah untuk membuka form penilaian project mahasiswa. Setiap tautan mengarah langsung ke formulir evaluasi yang sesuai.",
  projectEvalPeriod: "Periode",
  projectEvalCourseLabel: "Mata Kuliah",
  projectEvalEpidemiology: "Epidemiologi",
  projectEvalEpidemiologyText: "Evaluasi project mahasiswa pada mata kuliah Epidemiologi.",
  projectEvalSpatial: "Analisis Spasial",
  projectEvalSpatialText: "Evaluasi paper dan project mahasiswa pada mata kuliah Analisis Spasial.",
  projectEvalMachineLearning: "Pembelajaran Mesin",
  projectEvalMachineLearningText: "Evaluasi makalah dan project mahasiswa pada mata kuliah Pembelajaran Mesin.",
  projectEvalOpen: "Buka Form Evaluasi",
  workspaceProjectOutput: "Output Project Mahasiswa 2026",
  evaluationHubOutputText: "Galeri 37 Shiny Apps dan makalah mahasiswa dari tiga mata kuliah",
  projectOutputKicker: "Output Project Mahasiswa",
  projectOutputTitle: "Galeri karya mahasiswa 2026.",
  projectOutputText: "Jelajahi aplikasi interaktif Shiny dan makalah RPubs dari mata kuliah Analisis Spasial, Epidemiologi, dan Pembelajaran Mesin.",
  projectOutputWorks: "Karya unik",
  projectOutputPapers: "Makalah RPubs",
  projectOutputItems: "karya",
  projectOutputApps: "aplikasi interaktif",
  projectOutputCourse: "Mata Kuliah",
  projectOutputRpubsTitle: "Makalah RPubs",
  projectOutputPapersShort: "makalah",
  projectOutputOpen: "Buka karya",
  projectOutputNote: "Tautan identik ditampilkan satu kali agar daftar tetap ringkas dan mudah ditelusuri."
});

Object.assign(I18N.en, {
  workspaceAlumniSharing: "Alumni Sharing Sessions",
  alumniSharingKicker: "Alumni Sharing Sessions",
  alumniSharingTitle: "Alumni experience becomes a shared learning space.",
  alumniSharingText: "A series connecting students with alumni to explore statistical expertise, career development, research, and professional experience.",
  alumniSharingSpeakers: "Speakers",
  alumniSharingPeriod: "Activity period",
  alumniSharingTopics: "Main topics",
  alumniSharingFeatured: "Outstanding Alumna",
  alumniSharingTalk: "Alumni Conversation",
  alumniSharingInspiration: "Alumni Inspiration",
  alumniSharingSeminar: "Alumni Seminar Series",
  alumniSharingDate: "Date",
  alumniSharingTime: "Time",
  alumniSharingFormat: "Format",
  alumniSharingFocus: "Focus",
  alumniSharingClassroom: "In-person class",
  alumniSharingNaimaText: "This session introduces the foundations of text analysis in data science, from processing text to turning it into data-driven insight.",
  alumniSharingYogaText: "An alumni conversation on building a career, using AI, and translating applied statistics competencies into professional opportunities after graduation.",
  alumniSharingDilaText: "An inspiring discussion about the speaker's academic and professional journey, including strategies for developing research suitable for a reputable Q1 publication.",
  alumniSharingAgusText: "A seminar on simultaneous spatial models for analyzing relationships across regions and applying them to real statistical problems.",
  workspaceProjectEvaluation: "Student Project Evaluation 2026",
  evaluationHubText: "Academic evaluations and the student project output gallery are grouped in one access point for easier navigation.",
  evaluationHubProjectText: "Project evaluation forms for Epidemiology, Spatial Analysis, and Machine Learning",
  projectEvalKicker: "Student Project Evaluation",
  projectEvalTitle: "2026 course project evaluation forms.",
  projectEvalText: "Choose a course to open its student project assessment form. Each link leads directly to the relevant evaluation form.",
  projectEvalPeriod: "Period",
  projectEvalCourseLabel: "Course",
  projectEvalEpidemiology: "Epidemiology",
  projectEvalEpidemiologyText: "Student project evaluation for the Epidemiology course.",
  projectEvalSpatial: "Spatial Analysis",
  projectEvalSpatialText: "Student paper and project evaluation for the Spatial Analysis course.",
  projectEvalMachineLearning: "Machine Learning",
  projectEvalMachineLearningText: "Student paper and project evaluation for the Machine Learning course.",
  projectEvalOpen: "Open Evaluation Form",
  workspaceProjectOutput: "Student Project Outputs 2026",
  evaluationHubOutputText: "A gallery of 37 student Shiny Apps and papers from three courses",
  projectOutputKicker: "Student Project Outputs",
  projectOutputTitle: "2026 student work gallery.",
  projectOutputText: "Explore interactive Shiny applications and RPubs papers from Spatial Analysis, Epidemiology, and Machine Learning.",
  projectOutputWorks: "Unique works",
  projectOutputPapers: "RPubs papers",
  projectOutputItems: "works",
  projectOutputApps: "interactive apps",
  projectOutputCourse: "Course",
  projectOutputRpubsTitle: "RPubs Papers",
  projectOutputPapersShort: "papers",
  projectOutputOpen: "Open work",
  projectOutputNote: "Identical links are displayed once to keep the gallery concise and easy to browse."
});

applyLanguage();

document.querySelectorAll("[data-project-output-target]").forEach((button) => {
  if (button.dataset.projectOutputBound === "true") return;
  button.dataset.projectOutputBound = "true";
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.projectOutputTarget || "");
    if (!target) return;
    document.querySelectorAll("[data-project-output-target]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const projectPanelHash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
if (["evaluasi-project-mahasiswa-2026", "output-project-mahasiswa-2026", "sharing-session-alumni"].includes(projectPanelHash)) {
  setActiveWorkspacePanel(projectPanelHash, true, "s2");
}
