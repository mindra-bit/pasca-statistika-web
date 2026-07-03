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
