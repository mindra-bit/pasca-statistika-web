(() => {
  const cohorts = [
    [2007,42,{"Tidak tercatat":42},{"Lulus":40,"Undur Diri":1,"Meninggal":1}],
    [2009,35,{"S2":35},{"Lulus":33,"Undur Diri":2}],
    [2010,29,{"S2":29},{"Lulus":27,"Undur Diri":2}],
    [2011,13,{"S2":13},{"Lulus":10,"Undur Diri":3}],
    [2012,12,{"S2":12},{"Lulus":12}],
    [2013,30,{"S2":30},{"Lulus":27,"Undur Diri":3}],
    [2014,25,{"S2":25},{"Lulus":24,"Undur Diri":1}],
    [2015,28,{"S2 Kerja Sama":20,"S2":8},{"Lulus":26,"Undur Diri":2}],
    [2016,35,{"S2":35},{"Lulus":33,"Undur Diri":2}],
    [2017,8,{"S2":7,"S2 Kerja Sama":1},{"Lulus":8}],
    [2018,18,{"S2 Kerja Sama":10,"S2":8},{"Lulus":18}],
    [2019,11,{"S2":11},{"Lulus":11}],
    [2020,20,{"S2":20},{"Lulus":20}],
    [2021,49,{"Student Exchange S2":38,"S2":11},{"Selesai":38,"Lulus":9,"Regulasi Akademik":1,"Meninggal":1}],
    [2022,52,{"Student Exchange S2":42,"S2":5,"Fast Track S1 ke S2":4,"S2 Alumni Berprestasi dan Berkinerja":1},{"Selesai":42,"Lulus":10}],
    [2023,22,{"S2":12,"Fast Track S1 ke S2":10},{"Lulus":21,"Undur Diri":1}],
    [2024,15,{"Fast Track S1 ke S2":9,"S2":6},{"Lulus":13,"Undur Diri":2}],
    [2025,14,{"S2":11,"Fast Track S1 ke S2":3},{"Regulasi Akademik":14}],
    [2026,5,{"S2":4,"S2 Alumni Berprestasi dan Berkinerja":1},{"Regulasi Akademik":5}]
  ].map(([year,total,routes,statuses]) => ({year,total,routes,statuses}));

  const elements = {
    select: document.getElementById("studentCohortSelect"),
    selection: document.getElementById("studentCohortSelection"),
    total: document.getElementById("studentTotal"),
    period: document.getElementById("studentPeriod"),
    completed: document.getElementById("studentCompleted"),
    completedRate: document.getElementById("studentCompletedRate"),
    routeCount: document.getElementById("studentRouteCount"),
    topRoute: document.getElementById("studentTopRoute"),
    timeline: document.getElementById("studentCohortTimeline"),
    routes: document.getElementById("studentRouteChart"),
    statuses: document.getElementById("studentStatusChart"),
    ring: document.getElementById("studentStatusRing"),
    ringValue: document.getElementById("studentRingValue")
  };
  if (!elements.select || !elements.timeline) return;

  const number = new Intl.NumberFormat("id-ID");
  const percent = value => `${new Intl.NumberFormat("id-ID", {maximumFractionDigits: 1}).format(value)}%`;
  const palette = ["#123f60", "#0f766e", "#d9a72e", "#6b7f92", "#8d5d88", "#b76845"];
  const statusColors = {
    "Lulus": "#0f766e",
    "Selesai": "#39a884",
    "Regulasi Akademik": "#d9a72e",
    "Undur Diri": "#b76845",
    "Meninggal": "#6b7f92"
  };

  const merge = key => cohorts.reduce((all, cohort) => {
    Object.entries(cohort[key]).forEach(([label,count]) => { all[label] = (all[label] || 0) + count; });
    return all;
  }, {});
  const overall = {year: "all", total: cohorts.reduce((sum,item) => sum + item.total, 0), routes: merge("routes"), statuses: merge("statuses")};

  cohorts.slice().reverse().forEach(cohort => {
    const option = document.createElement("option");
    option.value = String(cohort.year);
    option.textContent = `Angkatan ${cohort.year}`;
    elements.select.append(option);
  });

  const renderBars = (target, entries, total) => {
    const sorted = Object.entries(entries).sort((a,b) => b[1] - a[1]);
    target.innerHTML = sorted.map(([label,count],index) => {
      const share = total ? count / total * 100 : 0;
      return `<div class="student-cohort-bar">
        <div class="student-cohort-bar-label"><span><i style="--bar-color:${palette[index % palette.length]}"></i>${label}</span><strong>${number.format(count)} <small>${percent(share)}</small></strong></div>
        <div class="student-cohort-bar-track"><span style="width:${share}%;--bar-color:${palette[index % palette.length]}"></span></div>
      </div>`;
    }).join("");
  };

  const renderStatuses = (statuses,total) => {
    elements.statuses.innerHTML = Object.entries(statuses).sort((a,b) => b[1] - a[1]).map(([label,count]) => `
      <div class="student-status-row">
        <span><i style="--status-color:${statusColors[label] || "#6b7f92"}"></i>${label}</span>
        <strong>${number.format(count)} <small>${percent(count / total * 100)}</small></strong>
      </div>`).join("");
  };

  const update = value => {
    const data = value === "all" ? overall : cohorts.find(item => String(item.year) === value) || overall;
    const completed = (data.statuses.Lulus || 0) + (data.statuses.Selesai || 0);
    const rate = data.total ? completed / data.total * 100 : 0;
    const routes = Object.entries(data.routes).sort((a,b) => b[1] - a[1]);

    elements.selection.textContent = value === "all" ? "Ringkasan 2007–2026" : `Ringkasan angkatan ${value}`;
    elements.total.textContent = number.format(data.total);
    elements.period.textContent = value === "all" ? `${cohorts.length} angkatan tercatat` : `Angkatan ${value}`;
    elements.completed.textContent = number.format(completed);
    elements.completedRate.textContent = `${percent(rate)} dari mahasiswa terpilih`;
    elements.routeCount.textContent = number.format(routes.length);
    elements.topRoute.textContent = routes.length ? `${routes[0][0]} merupakan jalur terbesar` : "Belum ada data";
    elements.ringValue.textContent = percent(rate);
    elements.ring.style.setProperty("--completion", `${rate * 3.6}deg`);
    elements.ring.setAttribute("aria-label", `${percent(rate)} mahasiswa selesai atau lulus`);

    renderBars(elements.routes, data.routes, data.total);
    renderStatuses(data.statuses, data.total);
    elements.timeline.querySelectorAll("button").forEach(button => button.classList.toggle("is-active", button.dataset.year === value));
  };

  const maxTotal = Math.max(...cohorts.map(item => item.total));
  elements.timeline.innerHTML = cohorts.map(cohort => `
    <button type="button" data-year="${cohort.year}" role="listitem" aria-label="Angkatan ${cohort.year}, ${cohort.total} mahasiswa">
      <strong>${cohort.total}</strong>
      <span class="student-cohort-column" style="--column-height:${Math.max(12, cohort.total / maxTotal * 100)}%"></span>
      <small>${String(cohort.year).slice(2)}</small>
    </button>`).join("");

  elements.select.addEventListener("change", () => update(elements.select.value));
  elements.timeline.addEventListener("click", event => {
    const button = event.target.closest("button[data-year]");
    if (!button) return;
    elements.select.value = button.dataset.year;
    update(button.dataset.year);
  });
  update("all");
})();
