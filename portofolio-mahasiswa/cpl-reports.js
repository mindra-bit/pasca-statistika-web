(() => {
  const years = ["2022-2023", "2023-2024", "2024-2025", "2025-2026"];
  const reports = [
    ...years.flatMap((year, index) => [
      {group:"semester",title:`Semester Ganjil ${year.replace("-", "/")}`,description:"Laporan capaian periode ganjil",pages:index === 1 ? 7 : 6,file:`Laporan_CPL_Ganjil_${year}.pdf`},
      {group:"semester",title:`Semester Genap ${year.replace("-", "/")}`,description:"Laporan capaian periode genap",pages:index === 1 ? 7 : 6,file:`Laporan_CPL_Genap_${year}.pdf`}
    ]),
    ...["2022","2023","2024","2025"].map(year => ({group:"angkatan",title:`Tren CPL Angkatan ${year}`,description:"Perkembangan longitudinal angkatan",pages:5,file:`Laporan_Trend_CPL_Angkatan_${year}.pdf`})),
    {group:"angkatan",title:"Tren Gabungan 2022–2025",description:"Perbandingan lintas angkatan",pages:7,file:"Laporan_Trend_CPL_Gabungan_Angkatan_2022-2025.pdf",featured:true},
    ...["2022","2023","2024","2025"].map((year,index) => ({group:"mata-kuliah",title:`Mata Kuliah · Angkatan ${year}`,description:"Capaian CPL pada level mata kuliah",pages:[7,8,8,7][index],file:`Laporan_CPL_Per_Mata_Kuliah_Angkatan_${year}.pdf`})),
    {group:"mata-kuliah",title:"Mata Kuliah · Gabungan 2022–2025",description:"Kontribusi mata kuliah lintas angkatan",pages:4,file:"Laporan_CPL_Per_Mata_Kuliah_Gabungan_Angkatan_2022-2025.pdf",featured:true}
  ];
  const details = {
    "semester": {number:"01",title:"Laporan CPL Per Semester",subtitle:"Ganjil dan genap · TA 2022/2023–2025/2026",folder:"semester"},
    "angkatan": {number:"02",title:"Tren CPL Per Angkatan",subtitle:"Angkatan 2022–2025 · termasuk laporan gabungan",folder:"tren-angkatan"},
    "mata-kuliah": {number:"03",title:"CPL Per Mata Kuliah",subtitle:"Angkatan 2022–2025 · termasuk laporan gabungan",folder:"mata-kuliah"}
  };
  const mount = document.getElementById("cplReportGroups");
  const search = document.getElementById("cplSearch");
  const summary = document.getElementById("cplResultSummary");
  const empty = document.getElementById("cplEmpty");
  if (!mount || !search || !summary || !empty) return;

  Object.entries(details).forEach(([key, group]) => {
    const section = document.createElement("section"); section.className = "cpl-report-group"; section.dataset.cplGroup = key;
    section.innerHTML = `<div class="cpl-group-head"><div><span>${group.number}</span><h4>${group.title}</h4></div><p>${group.subtitle}</p></div><div class="cpl-card-grid"></div>`;
    reports.filter(report => report.group === key).forEach(report => {
      const href = `dokumen-cpl/${group.folder}/${report.file}`;
      const card = document.createElement("article"); card.className = "cpl-report-card"; card.dataset.search = `${report.title} ${report.description}`.toLowerCase();
      card.innerHTML = `<div><span class="tag">${report.featured ? "RINGKASAN" : "PDF"}</span><span class="pages">${report.pages} halaman</span></div><h5>${report.title}</h5><p>${report.description}</p><div class="cpl-card-actions"><a href="${href}" target="_blank" rel="noopener">Buka</a><a href="${href}" download>Unduh</a></div>`;
      section.querySelector(".cpl-card-grid").append(card);
    });
    mount.append(section);
  });

  const buttons = [...document.querySelectorAll("[data-cpl-filter]")];
  const cards = [...document.querySelectorAll(".cpl-report-card")];
  const groups = [...document.querySelectorAll(".cpl-report-group")];
  let active = "all";
  const update = () => {
    const query = search.value.trim().toLowerCase(); let count = 0;
    cards.forEach(card => { const show = (active === "all" || card.closest("[data-cpl-group]").dataset.cplGroup === active) && card.dataset.search.includes(query); card.hidden = !show; if (show) count += 1; });
    groups.forEach(group => { group.hidden = ![...group.querySelectorAll(".cpl-report-card")].some(card => !card.hidden); });
    summary.textContent = `${count} laporan ditampilkan`; empty.hidden = count !== 0;
  };
  buttons.forEach(button => button.addEventListener("click", () => { active = button.dataset.cplFilter; buttons.forEach(item => { const selected = item === button; item.classList.toggle("is-active", selected); item.setAttribute("aria-pressed", selected); }); update(); }));
  search.addEventListener("input", update);

  const followUpMount = document.getElementById("ppeppDocumentGrid");
  if (followUpMount) {
    const followUps = years.flatMap((year, index) => [
      {term:"Ganjil",year,pages:index === 1 ? 11 : 10},
      {term:"Genap",year,pages:index === 1 ? 11 : 10}
    ]);
    followUps.forEach((item, index) => {
      const file = `dokumen-cpl/tindak-lanjut-ppepp/Dokumen_Tindak_Lanjut_PPEPP_CPL_${item.term}_${item.year}.pdf`;
      const card = document.createElement("article");
      card.className = "ppepp-card";
      card.innerHTML = `<div><span>${String(index + 1).padStart(2,"0")}</span><small>${item.pages} halaman</small></div><p>Semester ${item.term}</p><h4>${item.year.replace("-","/")}</h4><em>Pengendalian · Peningkatan</em><div><a href="${file}" target="_blank" rel="noopener">Buka dokumen</a><a href="${file}" download aria-label="Unduh dokumen tindak lanjut ${item.term} ${item.year}">↓</a></div>`;
      followUpMount.append(card);
    });
  }
})();
