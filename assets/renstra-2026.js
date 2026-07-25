(() => {
  "use strict";

  const PANEL_ID = "renstra-program-studi";
  let DATA = {};

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function addTranslations() {
    if (typeof I18N === "undefined") return;
    Object.assign(I18N.id, {
      workspaceRenstra: "Renstra Program Studi",
      renstraKicker: "Rencana Operasional 2026",
      renstraTitle: "Renstra Program Studi S2 Statistika Terapan",
      renstraLead: "Arah operasional, sasaran strategis, indikator kinerja, target, dan katalog kegiatan Program Studi S2 Statistika Terapan FMIPA Universitas Padjadjaran.",
      renstraTabOverview: "Ringkasan",
      renstraTabDirection: "Visi, Misi & Tujuan",
      renstraTabPrograms: "Program Strategis",
      renstraTabActivities: "Katalog Kegiatan",
      renstraSearchPlaceholder: "Cari kode atau uraian kegiatan...",
      renstraAllCategories: "Semua kategori",
      renstraSource: "Sumber: Rencana Operasional Tahun 2026 Program Studi S2 Statistika Terapan."
    });
    Object.assign(I18N.en, {
      workspaceRenstra: "Study Program Strategic Plan",
      renstraKicker: "2026 Operational Plan",
      renstraTitle: "Strategic Plan of the Applied Statistics Master's Program",
      renstraLead: "Operational direction, strategic objectives, performance indicators, targets, and activity catalogue for the Applied Statistics Master's Program at FMIPA Universitas Padjadjaran.",
      renstraTabOverview: "Overview",
      renstraTabDirection: "Vision, Mission & Objectives",
      renstraTabPrograms: "Strategic Programs",
      renstraTabActivities: "Activity Catalogue",
      renstraSearchPlaceholder: "Search activity code or description...",
      renstraAllCategories: "All categories",
      renstraSource: "Source: 2026 Operational Plan of the Applied Statistics Master's Program."
    });
  }

  function renderPrograms() {
    return DATA.programs.map((item) => `
      <article class="renstra-program-card">
        <div class="renstra-program-top">
          <b>${esc(item.no)}</b>
          <h3>${esc(item.program)}</h3>
        </div>
        <div class="renstra-program-tags">
          <span>${esc(item.phase)}</span>
          <span>${esc(item.indicatorCode)}</span>
          <span>${esc(item.month)}</span>
        </div>
        <div class="renstra-program-target">
          <div><small>${esc(item.indicator)}</small><strong>${esc(item.unit)}</strong></div>
          <strong>${esc(item.target)}</strong>
        </div>
        <details>
          <summary>Rincian kegiatan dan target operasional</summary>
          <div class="renstra-program-detail">
            <div><b>Kode kegiatan:</b> ${item.activityCodes.map(esc).join(", ")}</div>
            <div><b>Kegiatan:</b> ${esc(item.activity)}</div>
            <div><b>Keterangan:</b> ${esc(item.note)}</div>
          </div>
        </details>
      </article>
    `).join("");
  }

  function renderSection() {
    const section = document.createElement("section");
    section.className = "section renstra-section";
    section.id = PANEL_ID;
    section.innerHTML = `
      <div class="container renstra-shell">
        <div class="renstra-hero">
          <div class="renstra-hero-copy">
            <span class="renstra-eyebrow" data-i18n="renstraKicker">Rencana Operasional 2026</span>
            <h2 data-i18n="renstraTitle">Renstra Program Studi S2 Statistika Terapan</h2>
            <p data-i18n="renstraLead">Arah operasional, sasaran strategis, indikator kinerja, target, dan katalog kegiatan Program Studi S2 Statistika Terapan FMIPA Universitas Padjadjaran.</p>
            <div class="renstra-meta">
              <span>SK Dikti No. 117/D/T/2007</span>
              <span>Akreditasi Unggul</span>
              <span>OBE</span>
              <span>Coursework & By Research</span>
            </div>
          </div>
          <div class="renstra-hero-metrics">
            <div class="renstra-metric"><strong>12</strong><span>program strategis dalam dokumen operasional</span></div>
            <div class="renstra-metric"><strong>152</strong><span>rincian kegiatan dan inisiatif pendukung</span></div>
            <div class="renstra-metric"><strong>80%</strong><span>target mata kuliah menggunakan LMS</span></div>
            <div class="renstra-metric"><strong>3</strong><span>kolaborasi internasional aktif</span></div>
          </div>
        </div>

        <div class="renstra-tabs" role="tablist" aria-label="Navigasi Renstra Program Studi">
          <button class="renstra-tab active" type="button" role="tab" aria-selected="true" data-renstra-tab="overview" data-i18n="renstraTabOverview">Ringkasan</button>
          <button class="renstra-tab" type="button" role="tab" aria-selected="false" data-renstra-tab="direction" data-i18n="renstraTabDirection">Visi, Misi & Tujuan</button>
          <button class="renstra-tab" type="button" role="tab" aria-selected="false" data-renstra-tab="programs" data-i18n="renstraTabPrograms">Program Strategis</button>
          <button class="renstra-tab" type="button" role="tab" aria-selected="false" data-renstra-tab="activities" data-i18n="renstraTabActivities">Katalog Kegiatan</button>
        </div>

        <div class="renstra-view active" data-renstra-view="overview">
          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Kondisi Umum</h3><p>Posisi kelembagaan, arah kurikulum, bidang minat, dan tantangan pengembangan program studi.</p></div><span class="renstra-number">01</span></div>
            <div class="renstra-context-grid">
              ${DATA.conditions.map((text) => {
                const parts = text.split(":");
                const title = parts.shift();
                return `<article class="renstra-context-card"><h4>${esc(title)}</h4><p>${esc(parts.join(":").trim())}</p></article>`;
              }).join("")}
            </div>
          </section>

          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Analisis SWOT</h3><p>Peta posisi strategis sebagai dasar penyusunan prioritas operasional tahun 2026.</p></div><span class="renstra-number">02</span></div>
            <div class="renstra-swot-grid">
              ${DATA.swot.map(item => `<article class="renstra-swot"><h4>${esc(item.label)}</h4><p>${esc(item.text)}</p></article>`).join("")}
            </div>
          </section>

          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Rekomendasi Strategi Umum</h3><p>Empat jalur penguatan untuk menjaga mutu, relevansi, daya saing, dan rekognisi program studi.</p></div><span class="renstra-number">03</span></div>
            <div class="renstra-strategy-grid">
              ${DATA.strategies.map((item,index) => `<article class="renstra-strategy"><b>${String(index+1).padStart(2,"0")}</b><div><h4>${esc(item.label)}</h4><p>${esc(item.text)}</p></div></article>`).join("")}
            </div>
          </section>
        </div>

        <div class="renstra-view" data-renstra-view="direction">
          <div class="renstra-vision"><small>Visi Program Studi</small><p>${esc(DATA.vision)}</p></div>

          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Misi</h3><p>Empat mandat penyelenggaraan pendidikan, penelitian, kerja sama, dan publikasi ilmiah.</p></div><span class="renstra-number">04</span></div>
            <div class="renstra-list-grid">
              ${DATA.missions.map(item => `<article class="renstra-list-card"><h4>${esc(item.label)}</h4><p>${esc(item.text)}</p></article>`).join("")}
            </div>
          </section>

          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Tujuan</h3><p>Kompetensi dan dampak yang diarahkan pada pengembangan keilmuan, pemecahan masalah, jejaring, serta profesionalisme.</p></div><span class="renstra-number">05</span></div>
            <div class="renstra-list-grid">
              ${DATA.objectives.map(item => `<article class="renstra-list-card"><h4>${esc(item.label)}</h4><p>${esc(item.text)}</p></article>`).join("")}
            </div>
          </section>

          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Sasaran Strategis 2026</h3><p>Fokus penguatan mutu akademik, daya saing lulusan, ekosistem riset, dan kapasitas kelembagaan.</p></div><span class="renstra-number">06</span></div>
            <div class="renstra-targets">
              ${DATA.strategicTargets.map((text,index) => `<article class="renstra-target"><span>${index+1}</span><p>${esc(text)}</p></article>`).join("")}
            </div>
          </section>
        </div>

        <div class="renstra-view" data-renstra-view="programs">
          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Program Strategis, Indikator, dan Target 2026</h3><p>Seluruh 12 baris program ditampilkan sesuai dokumen, termasuk dua tahap kegiatan dengan indikator, target, jadwal, dan catatan operasional.</p></div><span class="renstra-number">07</span></div>
            <div class="renstra-program-toolbar">
              <div class="renstra-program-summary">
                <span>Target AEE: 81%</span><span>LMS: 80%</span><span>Micro-credential: 30%</span><span>Tracer Study: 80%</span><span>Fleksibilitas: 2 skema</span><span>Kolaborasi: 3 aktif</span>
              </div>
            </div>
            <div class="renstra-program-grid">${renderPrograms()}</div>
          </section>
        </div>

        <div class="renstra-view" data-renstra-view="activities">
          <section class="renstra-section-card">
            <div class="renstra-card-head"><div><h3>Katalog Lengkap Kegiatan</h3><p>Daftar lengkap kode kegiatan pada lampiran Renstra dapat dicari dan difilter berdasarkan kelompok tema.</p></div><span class="renstra-number">08</span></div>
            <div class="renstra-activity-toolbar">
              <label class="renstra-search"><span aria-hidden="true">⌕</span><input type="search" data-renstra-search data-i18n-placeholder="renstraSearchPlaceholder" placeholder="Cari kode atau uraian kegiatan..." /></label>
              <select class="renstra-filter" data-renstra-category aria-label="Filter kategori kegiatan"></select>
              <span class="renstra-activity-count" data-renstra-count></span>
            </div>
            <div class="renstra-activity-list" data-renstra-activities></div>
          </section>
        </div>

        <div class="renstra-source" data-i18n="renstraSource">Sumber: Rencana Operasional Tahun 2026 Program Studi S2 Statistika Terapan.</div>
      </div>
    `;
    return section;
  }

  function bindTabs(section) {
    const tabs = [...section.querySelectorAll("[data-renstra-tab]")];
    const views = [...section.querySelectorAll("[data-renstra-view]")];
    tabs.forEach(tab => tab.addEventListener("click", () => {
      const key = tab.dataset.renstraTab;
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      views.forEach(view => view.classList.toggle("active", view.dataset.renstraView === key));
      section.scrollTo({ top: 0, behavior: "smooth" });
    }));
  }

  function bindActivities(section) {
    const input = section.querySelector("[data-renstra-search]");
    const select = section.querySelector("[data-renstra-category]");
    const list = section.querySelector("[data-renstra-activities]");
    const count = section.querySelector("[data-renstra-count]");
    const categories = [...new Set(DATA.activities.map(item => item.category))].sort((a,b) => a.localeCompare(b,"id"));
    select.innerHTML = `<option value="">${typeof t === "function" ? t("renstraAllCategories") : "Semua kategori"}</option>${categories.map(value => `<option value="${esc(value)}">${esc(value)}</option>`).join("")}`;

    const draw = () => {
      const query = String(input.value || "").toLowerCase().trim();
      const category = select.value;
      const rows = DATA.activities.filter(item => {
        const haystack = `${item.code} ${item.description}`.toLowerCase();
        return (!query || haystack.includes(query)) && (!category || item.category === category);
      });
      count.textContent = `${rows.length} dari ${DATA.activities.length} kegiatan`;
      list.innerHTML = rows.length
        ? rows.map(item => `<article class="renstra-activity"><code>${esc(item.code)}</code><p>${esc(item.description)}</p><em>${esc(item.category)}</em></article>`).join("")
        : `<div class="renstra-empty">Tidak ada kegiatan yang cocok dengan pencarian.</div>`;
    };

    input.addEventListener("input", draw);
    select.addEventListener("change", draw);
    draw();
  }

  function addMenuLink() {
    const menu = document.querySelector(".workspace-menu-s2");
    if (!menu || menu.querySelector(`[data-workspace-target="${PANEL_ID}"]`)) return;
    const profileLink = menu.querySelector('[data-workspace-target="program-profile"]');
    const link = document.createElement("a");
    link.href = `#${PANEL_ID}`;
    link.dataset.programSelect = "s2";
    link.dataset.workspaceTarget = PANEL_ID;
    link.dataset.i18n = "workspaceRenstra";
    link.textContent = typeof t === "function" ? t("workspaceRenstra") : "Renstra Program Studi";
    link.addEventListener("click", event => {
      event.preventDefault();
      history.replaceState(null, "", `#${PANEL_ID}`);
      setActiveWorkspacePanel(PANEL_ID, true, "s2");
    });
    profileLink?.insertAdjacentElement("afterend", link);
  }

  async function init() {
    addTranslations();
    if (!document.querySelector('link[data-renstra-style]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "assets/renstra-2026.css?v=renstra-20260725";
      link.dataset.renstraStyle = "true";
      document.head.appendChild(link);
    }
    try {
      const files = [
        "assets/renstra-core.json",
        "assets/renstra-programs.json",
        "assets/renstra-activities-1.json",
        "assets/renstra-activities-2.json",
        "assets/renstra-activities-3.json"
      ];
      const [core, programs, ...activityParts] = await Promise.all(files.map(async (url) => {
        const response = await fetch(`${url}?v=renstra-20260725`);
        if (!response.ok) throw new Error(`Gagal memuat ${url}`);
        return response.json();
      }));
      DATA = { ...core, programs, activities: activityParts.flat() };
    } catch (error) {
      console.error("Renstra Program Studi gagal dimuat:", error);
      return;
    }

    if (typeof workspacePanelIds !== "undefined" && !workspacePanelIds.includes(PANEL_ID)) workspacePanelIds.push(PANEL_ID);
    addMenuLink();

    if (!document.getElementById(PANEL_ID)) {
      const section = renderSection();
      const reference = document.getElementById("pmb") || document.getElementById("beasiswa");
      reference?.insertAdjacentElement("beforebegin", section);
      bindTabs(section);
      bindActivities(section);
    }

    if (typeof applyLanguage === "function") applyLanguage();
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (hash === PANEL_ID && typeof setActiveWorkspacePanel === "function") setActiveWorkspacePanel(PANEL_ID, true, "s2");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
