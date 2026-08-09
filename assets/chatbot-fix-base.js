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
  if (!rule || rule[1].test(text)) return true;

  const specificTokens = tokenize(text).filter((token) => token.length > 2 && !genericQueryTerms.has(token));
  if (!specificTokens.length) return false;
  const metadata = normalize([chunk.id, chunk.sourceTitle, chunk.title, chunk.text].join(" "));
  const matchedTokens = specificTokens.filter((token) => hasWholeToken(metadata, token));
  return matchedTokens.length >= Math.min(2, specificTokens.length);
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
  projectOutputNote: "Tautan identik ditampilkan satu kali agar daftar tetap ringkas dan mudah ditelusuri.",
  workspacePmb: "PMB 2026",
  pmbKicker: "Penerimaan Mahasiswa Baru",
  pmbTitle: "PMB S2 Statistika Terapan Angkatan 2026",
  pmbText: "Dokumentasi proses penerimaan melalui jalur Mahasiswa Berprestasi, Fast Track, Reguler, KNB, dan Kerja Sama. Wawancara dilaksanakan dalam tiga sesi dengan total 49 calon mahasiswa.",
  pmbOpen: "Buka Halaman PMB",
  pmbReport: "Laporan dan Dokumentasi Wawancara",
  pmbApplicants: "calon mahasiswa",
  pmbSessions: "sesi wawancara",
  pmbPathways: "jalur penerimaan",
  pmbRooms: "room paralel sesi 3",
  pmbSession1: "Sesi 1",
  pmbSession2: "Sesi 2",
  pmbSession3: "Sesi 3",
  pmbSession1Text: "Tahap awal wawancara calon mahasiswa sesuai jadwal seleksi.",
  pmbSession2Text: "Pelaksanaan lanjutan untuk mengakomodasi peserta pada periode berikutnya.",
  pmbSession3Text: "Sesi terbesar: 42 peserta dalam tujuh room paralel dengan 14 dosen pewawancara."
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
  projectOutputNote: "Identical links are displayed once to keep the gallery concise and easy to browse.",
  workspacePmb: "Admissions 2026",
  pmbKicker: "Student Admissions",
  pmbTitle: "Applied Statistics Master's Admissions 2026",
  pmbText: "Admissions documentation covering Achievement, Fast Track, Regular, KNB, and Partnership pathways. Interviews were held in three sessions for 49 applicants.",
  pmbOpen: "Open Admissions Page",
  pmbReport: "Interview Report and Documentation",
  pmbApplicants: "applicants",
  pmbSessions: "interview sessions",
  pmbPathways: "admission pathways",
  pmbRooms: "parallel rooms in session 3",
  pmbSession1: "Session 1",
  pmbSession2: "Session 2",
  pmbSession3: "Session 3",
  pmbSession1Text: "Initial applicant interview stage according to the admissions schedule.",
  pmbSession2Text: "A follow-up session accommodating applicants in the next admissions period.",
  pmbSession3Text: "The largest session: 42 applicants across seven parallel rooms with 14 interviewers."
});

function injectPmbProfileBlock() {
  if (!workspacePanelIds.includes("pmb")) workspacePanelIds.push("pmb");

  if (!document.getElementById("pmb-profile-dynamic-style")) {
    const style = document.createElement("style");
    style.id = "pmb-profile-dynamic-style";
    style.textContent = `
      .pmb-profile-section{background:linear-gradient(180deg,#f3f8fa 0%,#fff 100%)}
      .pmb-profile-shell{display:grid;gap:24px}
      .pmb-profile-hero{position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(280px,.75fr);gap:26px;align-items:stretch;padding:34px;border-radius:28px;color:#fff;background:linear-gradient(135deg,#0b2940 0%,#164e68 58%,#087f6a 100%);box-shadow:0 22px 46px rgba(14,54,76,.16)}
      .pmb-profile-hero:before{content:"";position:absolute;width:360px;height:360px;border:1px solid rgba(255,255,255,.17);border-radius:50%;right:-120px;top:-150px;box-shadow:0 0 0 58px rgba(255,255,255,.045),0 0 0 120px rgba(255,255,255,.025)}
      .pmb-profile-copy,.pmb-profile-summary{position:relative;z-index:1}
      .pmb-profile-kicker{display:inline-flex;margin-bottom:12px;padding:7px 11px;border-radius:999px;color:#173246;background:#ffca55;font-size:.78rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
      .pmb-profile-copy h2{max-width:780px;margin:0 0 12px;color:#fff;font-size:clamp(2rem,4vw,3.65rem);line-height:1.03}
      .pmb-profile-copy p{max-width:790px;margin:0;color:#dcecf1;font-size:1.05rem}
      .pmb-profile-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
      .pmb-profile-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:11px 16px;border-radius:11px;font-weight:850;text-decoration:none;background:#ffb22e;color:#13232e}
      .pmb-profile-actions a.secondary{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.10);color:#fff}
      .pmb-profile-summary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-content:center}
      .pmb-profile-stat{min-height:118px;padding:19px;border:1px solid rgba(255,255,255,.18);border-radius:18px;background:rgba(255,255,255,.09);backdrop-filter:blur(8px)}
      .pmb-profile-stat strong{display:block;color:#fff;font-size:2.35rem;line-height:1}
      .pmb-profile-stat span{display:block;margin-top:8px;color:#d8e8ee;font-size:.9rem}
      .pmb-session-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
      .pmb-session-card{position:relative;overflow:hidden;padding:23px;border:1px solid #d9e6ea;border-radius:20px;background:#fff;box-shadow:0 13px 30px rgba(21,54,72,.07)}
      .pmb-session-card:after{content:"";position:absolute;width:90px;height:90px;right:-32px;bottom:-34px;border-radius:50%;background:#53c7c2;opacity:.13}
      .pmb-session-card b{display:grid;width:40px;height:40px;place-items:center;border-radius:50%;background:#143d5d;color:#fff}
      .pmb-session-card h3{margin:14px 0 4px;color:#143d5d}
      .pmb-session-card time{color:#087f6a;font-weight:850}
      .pmb-session-card p{margin:9px 0 0;color:#61747f}
      .pmb-pathway-strip{display:flex;flex-wrap:wrap;gap:9px}
      .pmb-pathway-strip span{padding:8px 12px;border:1px solid #d8e5e9;border-radius:999px;background:#fff;color:#24485f;font-size:.9rem;font-weight:750}
      .pmb-profile-spotlight{margin:28px 0;padding:24px;border-radius:20px;background:linear-gradient(110deg,#eef7f6,#fff8e8);border:1px solid #d9e6e5;display:grid;grid-template-columns:1fr auto;gap:18px;align-items:center}
      .pmb-profile-spotlight h3{margin:.2rem 0 .4rem;color:#143d5d}
      .pmb-profile-spotlight p{margin:0;color:#5a6f7a}
      .pmb-profile-spotlight a{padding:11px 15px;border-radius:10px;background:#087f6a;color:#fff;font-weight:800;text-decoration:none;white-space:nowrap}
      @media(max-width:920px){.pmb-profile-hero{grid-template-columns:1fr}.pmb-session-grid{grid-template-columns:1fr}.pmb-profile-spotlight{grid-template-columns:1fr}}
      @media(max-width:560px){.pmb-profile-hero{padding:25px;border-radius:22px}.pmb-profile-summary{grid-template-columns:1fr 1fr}.pmb-profile-stat{min-height:105px;padding:15px}}
    `;
    document.head.appendChild(style);
  }

  const menu = document.querySelector(".workspace-menu-s2");
  if (menu && !menu.querySelector('[data-workspace-target="pmb"]')) {
    const profileLink = menu.querySelector('[data-workspace-target="program-profile"]');
    const link = document.createElement("a");
    link.href = "#pmb";
    link.dataset.programSelect = "s2";
    link.dataset.workspaceTarget = "pmb";
    link.dataset.i18n = "workspacePmb";
    link.textContent = I18N[currentLang]?.workspacePmb || "PMB 2026";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      history.replaceState(null, "", "#pmb");
      setActiveWorkspacePanel("pmb", true, "s2");
    });
    profileLink?.insertAdjacentElement("afterend", link);
  }

  if (!document.getElementById("pmb")) {
    const beasiswa = document.getElementById("beasiswa");
    if (beasiswa) {
      const section = document.createElement("section");
      section.className = "section pmb-profile-section";
      section.id = "pmb";
      section.innerHTML = `
        <div class="container pmb-profile-shell">
          <div class="pmb-profile-hero">
            <div class="pmb-profile-copy">
              <span class="pmb-profile-kicker" data-i18n="pmbKicker">Penerimaan Mahasiswa Baru</span>
              <h2 data-i18n="pmbTitle">PMB S2 Statistika Terapan Angkatan 2026</h2>
              <p data-i18n="pmbText">Dokumentasi proses penerimaan melalui jalur Mahasiswa Berprestasi, Fast Track, Reguler, KNB, dan Kerja Sama. Wawancara dilaksanakan dalam tiga sesi dengan total 49 calon mahasiswa.</p>
              <div class="pmb-profile-actions">
                <a href="pmb/" data-i18n="pmbOpen">Buka Halaman PMB</a>
                <a class="secondary" href="pmb/wawancara-calon-mahasiswa-2026/" data-i18n="pmbReport">Laporan dan Dokumentasi Wawancara</a>
              </div>
            </div>
            <div class="pmb-profile-summary" aria-label="Ringkasan PMB 2026">
              <div class="pmb-profile-stat"><strong>49</strong><span data-i18n="pmbApplicants">calon mahasiswa</span></div>
              <div class="pmb-profile-stat"><strong>3</strong><span data-i18n="pmbSessions">sesi wawancara</span></div>
              <div class="pmb-profile-stat"><strong>5</strong><span data-i18n="pmbPathways">jalur penerimaan</span></div>
              <div class="pmb-profile-stat"><strong>7</strong><span data-i18n="pmbRooms">room paralel sesi 3</span></div>
            </div>
          </div>
          <div class="pmb-session-grid">
            <article class="pmb-session-card"><b>1</b><h3 data-i18n="pmbSession1">Sesi 1</h3><time datetime="2026-04-15">15 April 2026</time><p data-i18n="pmbSession1Text">Tahap awal wawancara calon mahasiswa sesuai jadwal seleksi.</p></article>
            <article class="pmb-session-card"><b>2</b><h3 data-i18n="pmbSession2">Sesi 2</h3><time datetime="2026-06-03">Rabu, 3 Juni 2026</time><p data-i18n="pmbSession2Text">Pelaksanaan lanjutan untuk mengakomodasi peserta pada periode berikutnya.</p></article>
            <article class="pmb-session-card"><b>3</b><h3 data-i18n="pmbSession3">Sesi 3</h3><time datetime="2026-07-22">Rabu, 22 Juli 2026</time><p data-i18n="pmbSession3Text">Sesi terbesar: 42 peserta dalam tujuh room paralel dengan 14 dosen pewawancara.</p></article>
          </div>
          <div class="pmb-pathway-strip" aria-label="Jalur penerimaan PMB 2026"><span>Mahasiswa Berprestasi</span><span>Fast Track</span><span>Reguler</span><span>KNB</span><span>Kerja Sama</span></div>
        </div>
      `;
      beasiswa.insertAdjacentElement("beforebegin", section);
    }
  }

  const profilePanel = document.querySelector("#program-profile .program-profile-panel");
  if (profilePanel && !profilePanel.querySelector(".pmb-profile-spotlight")) {
    const spotlight = document.createElement("div");
    spotlight.className = "pmb-profile-spotlight";
    spotlight.innerHTML = `<div><span class="section-kicker" data-i18n="pmbKicker">Penerimaan Mahasiswa Baru</span><h3 data-i18n="pmbTitle">PMB S2 Statistika Terapan Angkatan 2026</h3><p data-i18n="pmbText">Dokumentasi proses penerimaan melalui jalur Mahasiswa Berprestasi, Fast Track, Reguler, KNB, dan Kerja Sama. Wawancara dilaksanakan dalam tiga sesi dengan total 49 calon mahasiswa.</p></div><a href="#pmb" data-i18n="pmbOpen">Buka Halaman PMB</a>`;
    const hero = profilePanel.querySelector(".program-profile-hero");
    hero?.insertAdjacentElement("afterend", spotlight);
    spotlight.querySelector("a")?.addEventListener("click", (event) => {
      event.preventDefault();
      history.replaceState(null, "", "#pmb");
      setActiveWorkspacePanel("pmb", true, "s2");
    });
  }

  applyLanguage();
}

injectPmbProfileBlock();

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
if (["evaluasi-project-mahasiswa-2026", "output-project-mahasiswa-2026", "sharing-session-alumni", "pmb"].includes(projectPanelHash)) {
  setActiveWorkspacePanel(projectPanelHash, true, "s2");
}
