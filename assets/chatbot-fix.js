(() => {
  const baseScript = document.createElement("script");
  baseScript.src = "assets/chatbot-fix-base.js?v=pmb-2026-hierarchy-20260725";
  baseScript.async = false;

  baseScript.addEventListener("load", () => {
    Object.assign(I18N.id, {
      workspacePmb: "PMB",
      pmbKicker: "Penerimaan Mahasiswa Baru",
      pmbTitle: "PMB",
      pmbText: "Arsip penerimaan mahasiswa baru S2 Statistika Terapan disusun berdasarkan tahun agar laporan, dokumentasi, dan hasil survei mudah ditemukan.",
      pmbOpen: "Buka Arsip PMB",
      pmbYearLabel: "Tahun Penerimaan",
      pmbYearTitle: "PMB S2 Statistika Terapan Angkatan 2026",
      pmbYearText: "Dokumentasi proses penerimaan melalui jalur Mahasiswa Berprestasi, Fast Track, Reguler, KNB, dan Kerja Sama. Wawancara dilaksanakan dalam tiga sesi dengan total 49 calon mahasiswa.",
      pmbReport: "Laporan dan Dokumentasi Wawancara",
      pmbReportText: "Laporan lengkap pelaksanaan wawancara calon mahasiswa pada tiga sesi penerimaan tahun 2026.",
      pmbSurvey: "Hasil Survei Mengenal S2 Statistika Terapan",
      pmbSurveyText: "Dashboard ringkasan 44 responden, minat diskusi, pilihan program, afiliasi institusi, dan dinamika respons.",
      pmbOpenResource: "Buka Dokumen"
    });

    Object.assign(I18N.en, {
      workspacePmb: "Admissions",
      pmbKicker: "Student Admissions",
      pmbTitle: "Admissions",
      pmbText: "The Applied Statistics master's admissions archive is organized by year so reports, documentation, and survey results are easy to find.",
      pmbOpen: "Open Admissions Archive",
      pmbYearLabel: "Admission Year",
      pmbYearTitle: "Applied Statistics Master's Admissions 2026",
      pmbYearText: "Admissions documentation covering Achievement, Fast Track, Regular, KNB, and Partnership pathways. Interviews were held in three sessions for 49 applicants.",
      pmbReport: "Interview Report and Documentation",
      pmbReportText: "Complete documentation of applicant interviews conducted across three admissions sessions in 2026.",
      pmbSurvey: "Getting to Know Applied Statistics Survey",
      pmbSurveyText: "A dashboard summarizing 44 respondents, discussion interest, program preferences, institutional affiliations, and response dynamics.",
      pmbOpenResource: "Open Document"
    });

    if (!document.getElementById("pmb-hierarchy-style")) {
      const style = document.createElement("style");
      style.id = "pmb-hierarchy-style";
      style.textContent = `
        .pmb-year-block{padding:26px;border:1px solid #d9e6ea;border-radius:24px;background:#fff;box-shadow:0 16px 34px rgba(21,54,72,.08)}
        .pmb-year-head{display:flex;gap:16px;align-items:flex-start;margin-bottom:20px}
        .pmb-year-badge{display:grid;flex:0 0 auto;width:78px;height:78px;place-items:center;border-radius:19px;background:linear-gradient(135deg,#ffca55,#ff9c27);color:#173246;font-size:1.18rem;font-weight:950;box-shadow:0 12px 24px rgba(244,166,35,.22)}
        .pmb-year-head h3{margin:1px 0 6px;color:#143d5d;font-size:clamp(1.45rem,2.5vw,2.15rem)}
        .pmb-year-head p{margin:0;color:#61747f}
        .pmb-resource-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:22px}
        .pmb-resource-card{display:flex;flex-direction:column;min-height:190px;padding:22px;border:1px solid #d9e6ea;border-radius:18px;background:linear-gradient(145deg,#f8fbfc,#fff);color:inherit;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
        .pmb-resource-card:hover{transform:translateY(-3px);border-color:#8fc9c4;box-shadow:0 15px 28px rgba(19,65,83,.12)}
        .pmb-resource-type{align-self:flex-start;padding:6px 9px;border-radius:999px;background:#e6f5f2;color:#087f6a;font-size:.75rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
        .pmb-resource-card h4{margin:15px 0 7px;color:#143d5d;font-size:1.15rem}
        .pmb-resource-card p{margin:0;color:#61747f}
        .pmb-resource-action{margin-top:auto;padding-top:17px;color:#087f6a;font-weight:900}
        @media(max-width:720px){.pmb-resource-grid{grid-template-columns:1fr}.pmb-year-head{align-items:center}.pmb-year-badge{width:68px;height:68px}.pmb-year-block{padding:20px}}
      `;
      document.head.appendChild(style);
    }

    const menuLink = document.querySelector('.workspace-menu-s2 [data-workspace-target="pmb"]');
    if (menuLink) menuLink.textContent = I18N[currentLang]?.workspacePmb || "PMB";

    const shell = document.querySelector("#pmb .pmb-profile-shell");
    if (shell) {
      shell.innerHTML = `
        <div class="pmb-profile-hero">
          <div class="pmb-profile-copy">
            <span class="pmb-profile-kicker" data-i18n="pmbKicker">Penerimaan Mahasiswa Baru</span>
            <h2 data-i18n="pmbTitle">PMB</h2>
            <p data-i18n="pmbText">Arsip penerimaan mahasiswa baru S2 Statistika Terapan disusun berdasarkan tahun agar laporan, dokumentasi, dan hasil survei mudah ditemukan.</p>
            <div class="pmb-profile-actions">
              <a href="pmb/" data-i18n="pmbOpen">Buka Arsip PMB</a>
            </div>
          </div>
          <div class="pmb-profile-summary" aria-label="Ringkasan PMB 2026">
            <div class="pmb-profile-stat"><strong>2026</strong><span data-i18n="pmbYearLabel">Tahun Penerimaan</span></div>
            <div class="pmb-profile-stat"><strong>49</strong><span data-i18n="pmbApplicants">calon mahasiswa</span></div>
            <div class="pmb-profile-stat"><strong>3</strong><span data-i18n="pmbSessions">sesi wawancara</span></div>
            <div class="pmb-profile-stat"><strong>5</strong><span data-i18n="pmbPathways">jalur penerimaan</span></div>
          </div>
        </div>

        <section class="pmb-year-block" aria-labelledby="pmb-year-2026-title">
          <div class="pmb-year-head">
            <span class="pmb-year-badge">2026</span>
            <div>
              <h3 id="pmb-year-2026-title" data-i18n="pmbYearTitle">PMB S2 Statistika Terapan Angkatan 2026</h3>
              <p data-i18n="pmbYearText">Dokumentasi proses penerimaan melalui jalur Mahasiswa Berprestasi, Fast Track, Reguler, KNB, dan Kerja Sama. Wawancara dilaksanakan dalam tiga sesi dengan total 49 calon mahasiswa.</p>
            </div>
          </div>

          <div class="pmb-resource-grid">
            <a class="pmb-resource-card" href="pmb/wawancara-calon-mahasiswa-2026/laporan-v8.html">
              <span class="pmb-resource-type">HTML</span>
              <h4 data-i18n="pmbReport">Laporan dan Dokumentasi Wawancara</h4>
              <p data-i18n="pmbReportText">Laporan lengkap pelaksanaan wawancara calon mahasiswa pada tiga sesi penerimaan tahun 2026.</p>
              <span class="pmb-resource-action" data-i18n="pmbOpenResource">Buka Dokumen</span>
            </a>
            <a class="pmb-resource-card" href="pmb/2026/hasil-survey-mengenal-s2-statistika-terapan-2026.html">
              <span class="pmb-resource-type">Dashboard</span>
              <h4 data-i18n="pmbSurvey">Hasil Survei Mengenal S2 Statistika Terapan</h4>
              <p data-i18n="pmbSurveyText">Dashboard ringkasan 44 responden, minat diskusi, pilihan program, afiliasi institusi, dan dinamika respons.</p>
              <span class="pmb-resource-action" data-i18n="pmbOpenResource">Buka Dokumen</span>
            </a>
          </div>

          <div class="pmb-session-grid">
            <article class="pmb-session-card"><b>1</b><h3 data-i18n="pmbSession1">Sesi 1</h3><time datetime="2026-04-15">15 April 2026</time><p data-i18n="pmbSession1Text">Tahap awal wawancara calon mahasiswa sesuai jadwal seleksi.</p></article>
            <article class="pmb-session-card"><b>2</b><h3 data-i18n="pmbSession2">Sesi 2</h3><time datetime="2026-06-03">Rabu, 3 Juni 2026</time><p data-i18n="pmbSession2Text">Pelaksanaan lanjutan untuk mengakomodasi peserta pada periode berikutnya.</p></article>
            <article class="pmb-session-card"><b>3</b><h3 data-i18n="pmbSession3">Sesi 3</h3><time datetime="2026-07-22">Rabu, 22 Juli 2026</time><p data-i18n="pmbSession3Text">Sesi terbesar: 42 peserta dalam tujuh room paralel dengan 14 dosen pewawancara.</p></article>
          </div>
          <div class="pmb-pathway-strip" aria-label="Jalur penerimaan PMB 2026"><span>Mahasiswa Berprestasi</span><span>Fast Track</span><span>Reguler</span><span>KNB</span><span>Kerja Sama</span></div>
        </section>
      `;
    }

    const spotlight = document.querySelector("#program-profile .pmb-profile-spotlight");
    if (spotlight) {
      spotlight.querySelector("h3")?.setAttribute("data-i18n", "pmbTitle");
      spotlight.querySelector("p")?.setAttribute("data-i18n", "pmbText");
      spotlight.querySelector("a")?.setAttribute("data-i18n", "pmbOpen");
    }

    applyLanguage();

    if (!document.querySelector('script[data-renstra-2026]')) {
      const renstraScript = document.createElement("script");
      renstraScript.src = "assets/renstra-2026.js?v=renstra-vision-20260725";
      renstraScript.async = false;
      renstraScript.dataset.renstra2026 = "true";
      document.body.appendChild(renstraScript);
    }

    if (!document.querySelector('link[data-renstra-vision-fix]')) {
      const renstraVisionStyle = document.createElement("link");
      renstraVisionStyle.rel = "stylesheet";
      renstraVisionStyle.href = "assets/renstra-vision-fix.css?v=renstra-vision-20260725";
      renstraVisionStyle.dataset.renstraVisionFix = "true";
      document.head.appendChild(renstraVisionStyle);
    }
  });

  baseScript.addEventListener("error", () => {
    console.error("Gagal memuat skrip dasar chatbot dan komponen website.");
  });

  document.head.appendChild(baseScript);
})();