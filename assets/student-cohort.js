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
    exchange: document.getElementById("studentExchange"),
    exchangeNote: document.getElementById("studentExchangeNote"),
    completed: document.getElementById("studentCompleted"),
    completedRate: document.getElementById("studentCompletedRate"),
    routeCount: document.getElementById("studentRouteCount"),
    topRoute: document.getElementById("studentTopRoute"),
    timeline: document.getElementById("studentCohortTimeline"),
    routes: document.getElementById("studentRouteChart"),
    statuses: document.getElementById("studentStatusChart"),
    ring: document.getElementById("studentStatusRing"),
    ringValue: document.getElementById("studentRingValue"),
    gpaDashboard: document.querySelector(".student-gpa-dashboard"),
    gpaScope: document.getElementById("studentGpaScope"),
    gpaAverage: document.getElementById("studentGpaAverage"),
    gpaCount: document.getElementById("studentGpaCount"),
    gpaStatusSummary: document.getElementById("studentGpaStatusSummary"),
    gpaRange: document.getElementById("studentGpaRange"),
    gpaDistributionTitle: document.getElementById("studentGpaDistributionTitle"),
    gpaDistribution: document.getElementById("studentGpaDistribution"),
    gpaStatusComparison: document.getElementById("studentGpaStatusComparison"),
    gpaEmpty: document.getElementById("studentGpaEmpty")
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
  const gpaData = {
    all:{n:295,average:3.679,min:2,max:4,bins:{"3,75–4,00":150,"3,50–3,74":92,"3,00–3,49":48,"< 3,00":5},statuses:{"Lulus":{n:232,average:3.695},"Selesai":{n:49,average:3.571},"Regulasi Akademik":{n:14,average:3.776}}},
    2012:{n:12,average:3.438,min:3,max:4,bins:{"3,75–4,00":1,"3,50–3,74":4,"3,00–3,49":7,"< 3,00":0},statuses:{"Lulus":{n:12,average:3.438}}},
    2013:{n:27,average:3.487,min:3,max:3.78,bins:{"3,75–4,00":1,"3,50–3,74":15,"3,00–3,49":11,"< 3,00":0},statuses:{"Lulus":{n:27,average:3.487}}},
    2014:{n:24,average:3.724,min:3.3,max:3.93,bins:{"3,75–4,00":13,"3,50–3,74":9,"3,00–3,49":2,"< 3,00":0},statuses:{"Lulus":{n:24,average:3.724}}},
    2015:{n:26,average:3.651,min:3,max:4,bins:{"3,75–4,00":12,"3,50–3,74":6,"3,00–3,49":8,"< 3,00":0},statuses:{"Lulus":{n:26,average:3.651}}},
    2016:{n:33,average:3.706,min:3.3,max:3.93,bins:{"3,75–4,00":15,"3,50–3,74":13,"3,00–3,49":5,"< 3,00":0},statuses:{"Lulus":{n:33,average:3.706}}},
    2017:{n:8,average:3.716,min:3.41,max:4,bins:{"3,75–4,00":3,"3,50–3,74":4,"3,00–3,49":1,"< 3,00":0},statuses:{"Lulus":{n:8,average:3.716}}},
    2018:{n:18,average:3.825,min:3.51,max:4,bins:{"3,75–4,00":12,"3,50–3,74":6,"3,00–3,49":0,"< 3,00":0},statuses:{"Lulus":{n:18,average:3.825}}},
    2019:{n:11,average:3.749,min:3.51,max:4,bins:{"3,75–4,00":4,"3,50–3,74":7,"3,00–3,49":0,"< 3,00":0},statuses:{"Lulus":{n:11,average:3.749}}},
    2020:{n:20,average:3.788,min:3.22,max:4,bins:{"3,75–4,00":15,"3,50–3,74":3,"3,00–3,49":2,"< 3,00":0},statuses:{"Lulus":{n:20,average:3.788}}},
    2021:{n:32,average:3.633,min:2,max:4,bins:{"3,75–4,00":21,"3,50–3,74":3,"3,00–3,49":6,"< 3,00":2},statuses:{"Lulus":{n:9,average:3.806},"Selesai":{n:23,average:3.565}}},
    2022:{n:36,average:3.672,min:2,max:4,bins:{"3,75–4,00":27,"3,50–3,74":1,"3,00–3,49":5,"< 3,00":3},statuses:{"Lulus":{n:10,average:3.92},"Selesai":{n:26,average:3.577}}},
    2023:{n:21,average:3.719,min:3.49,max:3.93,bins:{"3,75–4,00":8,"3,50–3,74":12,"3,00–3,49":1,"< 3,00":0},statuses:{"Lulus":{n:21,average:3.719}}},
    2024:{n:13,average:3.708,min:3.51,max:3.83,bins:{"3,75–4,00":7,"3,50–3,74":6,"3,00–3,49":0,"< 3,00":0},statuses:{"Lulus":{n:13,average:3.708}}},
    2025:{n:14,average:3.776,min:3.61,max:3.92,bins:{"3,75–4,00":11,"3,50–3,74":3,"3,00–3,49":0,"< 3,00":0},statuses:{"Regulasi Akademik":{n:14,average:3.776}}}
  };

  const merge = key => cohorts.reduce((all, cohort) => {
    Object.entries(cohort[key]).forEach(([label,count]) => { all[label] = (all[label] || 0) + count; });
    return all;
  }, {});
  const overall = {year: "all", total: cohorts.reduce((sum,item) => sum + item.total, 0), routes: merge("routes"), statuses: merge("statuses")};
  const exchangeCount = data => data.routes["Student Exchange S2"] || 0;
  const programTotal = data => Math.max(0, data.total - exchangeCount(data));
  const programRoutes = data => Object.fromEntries(
    Object.entries(data.routes).filter(([label]) => label !== "Student Exchange S2")
  );
  const programStatuses = data => Object.fromEntries(
    Object.entries(data.statuses).filter(([label]) => label !== "Selesai")
  );

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

  const decimal = value => new Intl.NumberFormat("id-ID", {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value);
  const renderGpa = value => {
    if (!elements.gpaDashboard) return;
    const data = gpaData[value];
    const hasData = Boolean(data);
    elements.gpaEmpty.hidden = hasData;
    elements.gpaDashboard.classList.toggle("has-no-gpa-data", !hasData);
    if (!hasData) {
      elements.gpaScope.textContent = `Angkatan ${value}`;
      return;
    }

    elements.gpaScope.textContent = value === "all" ? "Semua data IPK tersedia" : `Angkatan ${value}`;
    elements.gpaAverage.textContent = decimal(data.average);
    elements.gpaCount.textContent = number.format(data.n);
    elements.gpaRange.textContent = `${decimal(data.min)}–${decimal(data.max)}`;
    elements.gpaDistributionTitle.textContent = `${number.format(data.n)} mahasiswa`;
    elements.gpaStatusSummary.textContent = Object.entries(data.statuses)
      .map(([label,item]) => `${number.format(item.n)} ${label}`)
      .join(" · ");

    const maxBin = Math.max(...Object.values(data.bins), 1);
    elements.gpaDistribution.innerHTML = Object.entries(data.bins).map(([label,count],index) => `
      <div class="student-gpa-bin">
        <div class="student-gpa-bin-value"><strong>${number.format(count)}</strong><small>${percent(count / data.n * 100)}</small></div>
        <div class="student-gpa-bin-column"><span style="height:${count / maxBin * 100}%;--gpa-color:${palette[index % palette.length]}"></span></div>
        <span>${label}</span>
      </div>`).join("");

    elements.gpaStatusComparison.innerHTML = Object.entries(data.statuses).map(([label,item]) => `
      <div class="student-gpa-status-card" style="--gpa-status-color:${statusColors[label] || "#6b7f92"}">
        <div><span>${label}</span><small>${number.format(item.n)} mahasiswa</small></div>
        <strong>${decimal(item.average)}</strong>
        <div class="student-gpa-scale"><span style="width:${item.average / 4 * 100}%"></span></div>
      </div>`).join("");
  };

  const update = value => {
    const data = value === "all" ? overall : cohorts.find(item => String(item.year) === value) || overall;
    const exchange = exchangeCount(data);
    const enrolled = programTotal(data);
    const completed = data.statuses.Lulus || 0;
    const rate = enrolled ? completed / enrolled * 100 : 0;
    const routesForProgram = programRoutes(data);
    const statusesForProgram = programStatuses(data);
    const routes = Object.entries(routesForProgram).sort((a,b) => b[1] - a[1]);

    elements.selection.textContent = value === "all" ? "Ringkasan 2007–2026" : `Ringkasan angkatan ${value}`;
    elements.total.textContent = number.format(enrolled);
    elements.period.textContent = value === "all" ? `${cohorts.length} angkatan tercatat` : `Angkatan ${value}`;
    elements.exchange.textContent = number.format(exchange);
    elements.exchangeNote.textContent = exchange
      ? (value === "all" ? "Peserta pertukaran, ditampilkan terpisah" : `Peserta pertukaran angkatan ${value}`)
      : "Tidak ada peserta pertukaran";
    elements.completed.textContent = number.format(completed);
    elements.completedRate.textContent = `${percent(rate)} dari mahasiswa program`;
    elements.routeCount.textContent = number.format(routes.length);
    elements.topRoute.textContent = routes.length ? `${routes[0][0]} merupakan jalur terbesar` : "Belum ada data";
    elements.ringValue.textContent = percent(rate);
    elements.ring.style.setProperty("--completion", `${rate * 3.6}deg`);
    elements.ring.setAttribute("aria-label", `${percent(rate)} mahasiswa program berstatus lulus`);

    renderBars(elements.routes, routesForProgram, enrolled);
    renderStatuses(statusesForProgram, enrolled);
    renderGpa(value);
    elements.timeline.querySelectorAll("button").forEach(button => button.classList.toggle("is-active", button.dataset.year === value));
  };

  const maxTotal = Math.max(...cohorts.flatMap(cohort => [programTotal(cohort), exchangeCount(cohort)]));
  elements.timeline.innerHTML = cohorts.map(cohort => `
    <button type="button" data-year="${cohort.year}" role="listitem" aria-label="Angkatan ${cohort.year}, ${programTotal(cohort)} mahasiswa program${exchangeCount(cohort) ? ` dan ${exchangeCount(cohort)} peserta Student Exchange` : ""}">
      <span class="student-cohort-values" aria-hidden="true">
        <strong>${programTotal(cohort)}</strong>
        ${exchangeCount(cohort) ? `<em>${exchangeCount(cohort)} SE</em>` : ""}
      </span>
      <span class="student-cohort-columns" aria-hidden="true">
        <span class="student-cohort-column student-cohort-column-program" style="--column-height:${Math.max(12, programTotal(cohort) / maxTotal * 100)}%"></span>
        ${exchangeCount(cohort) ? `<span class="student-cohort-column student-cohort-column-exchange" style="--column-height:${Math.max(12, exchangeCount(cohort) / maxTotal * 100)}%"></span>` : ""}
      </span>
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
