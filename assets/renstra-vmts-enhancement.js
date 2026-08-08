(() => {
  const previousApply = window.applyProgramProfileEnhancement;
  const VERSION = "20260808-vmts-evaluation-survey";
  const VMTS_SURVEY_URL = "https://script.google.com/a/macros/unpad.ac.id/s/AKfycbzNS1To-M522eVP-LFkl3sYfvB_xsKNCJ8fFhtd4ClzHxnjFoIVxqoiKPv0u6geG4yjow/exec";

  const styles = `<style id="renstra-vmts-styles">
    .profile-strategic-docs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:22px 0 0}
    .profile-strategic-card{position:relative;display:grid;grid-template-columns:52px minmax(0,1fr) 34px;gap:16px;align-items:center;min-height:108px;padding:20px 22px;border:1px solid rgba(255,255,255,.08);border-top:3px solid #53c5a7;border-radius:17px;background:linear-gradient(135deg,#082f52 0%,#0e3f68 100%);box-shadow:0 14px 32px rgba(8,47,82,.16);color:#fff;text-decoration:none;overflow:hidden;transition:transform .2s ease,box-shadow .2s ease}
    .profile-strategic-card:before{content:"";position:absolute;width:170px;height:170px;border:34px solid rgba(255,255,255,.025);border-radius:50%;right:-72px;top:-86px}
    .profile-strategic-card:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(8,47,82,.23)}
    .profile-strategic-icon{position:relative;z-index:1;display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:rgba(255,255,255,.12);font-size:1.35rem}
    .profile-strategic-copy{position:relative;z-index:1}.profile-strategic-copy strong{display:block;margin-bottom:6px;color:#fff;font-size:1rem;line-height:1.35}.profile-strategic-copy span{display:block;color:#d7e6f0;font-size:.82rem;line-height:1.48}
    .profile-strategic-arrow{position:relative;z-index:1;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.10);font-size:1.15rem}
    .profile-vmts-detail{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22px;align-items:center;padding:22px 24px;border:1px solid #d5e2e9;border-radius:18px;background:#fff;box-shadow:0 12px 30px rgba(20,61,93,.08)}
    .profile-vmts-detail h4{margin:7px 0 8px;color:#123f60;font-size:1.08rem}.profile-vmts-detail p{margin:0;color:#61717e;font-size:.88rem;line-height:1.58}.profile-vmts-badge{display:inline-flex;padding:5px 9px;border-radius:999px;background:#e8f4ef;color:#12624f;font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}
    .profile-vmts-actions{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}.profile-vmts-actions a{display:inline-flex;align-items:center;justify-content:center;padding:10px 14px;border-radius:999px;text-decoration:none;font-weight:850;white-space:nowrap}.profile-vmts-actions .pdf{background:#c99a2e;color:#172c3d}.profile-vmts-actions .html{background:#0c3b5e;color:#fff}
    .renstra-vmts-bottom{margin-top:22px;padding:1px;border-radius:22px;background:linear-gradient(135deg,#0b3558,#c99a2e);box-shadow:0 16px 38px rgba(12,47,85,.12)}
    .renstra-vmts-bottom-inner{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:26px;align-items:center;padding:clamp(22px,4vw,34px);border-radius:21px;background:#fff}
    .renstra-vmts-bottom .kicker{display:inline-flex;padding:6px 10px;border-radius:999px;background:#e8f4ef;color:#11624f;font-size:.72rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.renstra-vmts-bottom h3{margin:9px 0 9px;color:#0b3556;font-size:clamp(1.25rem,2.2vw,1.7rem)}.renstra-vmts-bottom p{max-width:850px;margin:0;color:#5e6f7d;line-height:1.65}.renstra-vmts-bottom-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}.renstra-vmts-bottom-actions a{display:inline-flex;align-items:center;justify-content:center;padding:11px 16px;border-radius:999px;text-decoration:none;font-weight:850;white-space:nowrap}.renstra-vmts-bottom-actions .pdf{background:#c99a2e;color:#172c3d}.renstra-vmts-bottom-actions .html{background:#0c3b5e;color:#fff}.renstra-vmts-bottom-actions .survey{background:linear-gradient(135deg,#1264a3 0%,#0e6b58 42%,#f2a900 72%,#d94a3d 100%);color:#fff;box-shadow:0 12px 24px rgba(18,100,163,.18)}
    .renstra-vmts-reports{position:relative;overflow:hidden;margin-top:22px;padding:clamp(22px,4vw,34px);border:1px solid #d8e5e2;border-radius:24px;background:linear-gradient(135deg,#f8fbfa 0%,#fff8e6 100%);box-shadow:0 18px 42px rgba(20,61,93,.10)}
    .renstra-vmts-reports:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,48,79,.94),rgba(12,107,88,.82)),url("assets/vmts/cover-vmts-2023-2028.jpg") center/cover;clip-path:polygon(0 0,100% 0,100% 34%,0 46%);opacity:.98}
    .renstra-vmts-reports>*{position:relative;z-index:1}.vmts-report-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:start;margin-bottom:22px;color:#fff}.vmts-report-kicker{display:inline-flex;width:max-content;max-width:100%;padding:7px 11px;border-radius:999px;background:rgba(242,169,0,.18);border:1px solid rgba(242,169,0,.38);color:#ffe3a2;font-size:.72rem;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.vmts-report-head h3{margin:11px 0 9px;color:#fff;font-size:clamp(1.35rem,2.7vw,2rem);line-height:1.18}.vmts-report-head p{max-width:850px;margin:0;color:#e5f2f1;line-height:1.62}.vmts-report-count{display:grid;place-items:center;min-width:96px;min-height:96px;border:1px solid rgba(255,255,255,.24);border-radius:22px;background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.07);backdrop-filter:blur(8px);text-align:center}.vmts-report-count strong{display:block;color:#fff;font-size:2.1rem;line-height:1}.vmts-report-count span{display:block;margin-top:5px;color:#ffe0a1;font-size:.74rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}
    .vmts-report-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.vmts-report-card{display:flex;flex-direction:column;min-height:245px;padding:18px;border:1px solid #d8e2df;border-top:5px solid var(--vmts-accent,#0e6b58);border-radius:18px;background:rgba(255,255,255,.96);box-shadow:0 14px 30px rgba(20,61,93,.09);text-decoration:none;color:#1f2f3d;transition:transform .18s ease,box-shadow .18s ease}.vmts-report-card:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(20,61,93,.15)}.vmts-report-card:nth-child(2){--vmts-accent:#f2a900}.vmts-report-card:nth-child(3){--vmts-accent:#1f7fbf}.vmts-report-card:nth-child(4){--vmts-accent:#c94b38}.vmts-report-year{display:inline-flex;width:max-content;max-width:100%;padding:6px 9px;border-radius:999px;background:#eef6f3;color:#0e6b58;font-size:.72rem;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.vmts-report-card h4{margin:13px 0 9px;color:#0b3556;font-size:1.02rem;line-height:1.32}.vmts-report-card p{margin:0;color:#5b6c77;font-size:.87rem;line-height:1.55}.vmts-report-action{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:auto;padding-top:18px;color:#0c3b5e;font-weight:900}.vmts-report-action b{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#0c3b5e;color:#fff}
    .vmts-survey-card{display:grid;grid-template-columns:54px minmax(0,1fr) auto;gap:16px;align-items:center;margin:0 0 16px;padding:17px 19px;border:1px solid rgba(255,255,255,.34);border-radius:20px;background:linear-gradient(135deg,#0b3a63 0%,#0e6b58 48%,#f2a900 78%,#d94a3d 100%);box-shadow:0 18px 38px rgba(12,47,85,.16);color:#fff;text-decoration:none;overflow:hidden}.vmts-survey-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:15px;background:rgba(255,255,255,.16);font-weight:950}.vmts-survey-copy strong{display:block;margin-bottom:5px;color:#fff;font-size:1.04rem;line-height:1.3}.vmts-survey-copy span{display:block;color:#fff4d6;font-size:.86rem;line-height:1.48}.vmts-survey-action{display:inline-flex;align-items:center;gap:8px;padding:10px 13px;border-radius:999px;background:rgba(255,255,255,.93);color:#0b3556;font-weight:950;white-space:nowrap}.vmts-survey-card:hover .vmts-survey-action{background:#fff}
    html[lang="en"] .vmts-lang-id{display:none!important}html:not([lang="en"]) .vmts-lang-en{display:none!important}
    @media(max-width:1080px){.vmts-report-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:850px){.profile-strategic-docs{grid-template-columns:1fr}.profile-vmts-detail,.renstra-vmts-bottom-inner,.vmts-report-head,.vmts-survey-card{grid-template-columns:1fr}.profile-vmts-actions,.renstra-vmts-bottom-actions{justify-content:flex-start}.vmts-report-count{place-items:start;min-height:auto;min-width:0;width:max-content;padding:14px 18px}.vmts-survey-action{width:max-content}}
    @media(max-width:560px){.profile-strategic-card{grid-template-columns:44px minmax(0,1fr) 30px;padding:17px}.profile-strategic-icon{width:42px;height:42px}.profile-vmts-actions a,.renstra-vmts-bottom-actions a{flex:1 1 135px}.vmts-report-grid{grid-template-columns:1fr}.renstra-vmts-reports:before{clip-path:polygon(0 0,100% 0,100% 28%,0 42%)}.vmts-survey-action{width:100%;justify-content:center}}
  </style>`;

  const profileCards = `<div class="profile-strategic-docs" id="profile-strategic-docs" aria-label="Dokumen strategis program studi">
    <a class="profile-strategic-card" href="naskah-akademik-penyusunan-vmts-2023-2028.html?v=${VERSION}" target="_blank" rel="noopener">
      <span class="profile-strategic-icon" aria-hidden="true">▤</span>
      <span class="profile-strategic-copy"><strong>Naskah Akademik Penyusunan Visi dan Misi</strong><span>Landasan, proses partisipatif, rumusan VMTS, strategi, indikator, dan dokumentasi penyusunan.</span></span>
      <span class="profile-strategic-arrow" aria-hidden="true">→</span>
    </a>
    <a class="profile-strategic-card" href="#renstra-program-studi" data-open-renstra="true">
      <span class="profile-strategic-icon" aria-hidden="true">⌁</span>
      <span class="profile-strategic-copy"><strong>Rencana Strategis Program Studi</strong><span>Arah pengembangan, sasaran strategis, indikator kinerja, program prioritas, dan monitoring.</span></span>
      <span class="profile-strategic-arrow" aria-hidden="true">→</span>
    </a>
    <div class="profile-vmts-detail">
      <div><span class="profile-vmts-badge">Dokumen VMTS 2023–2028</span><h4>Naskah lengkap ditempatkan di bawah dokumen strategis yang sudah ada</h4><p>Tersedia dalam format PDF dan HTML untuk kebutuhan tata kelola, evaluasi mutu, serta bukti pendukung akreditasi.</p></div>
      <div class="profile-vmts-actions"><a class="pdf" href="Naskah_Akademik_Penyusunan_VMTS_S2_Statistika_Terapan_2023-2028.pdf?v=${VERSION}" target="_blank" rel="noopener">Buka PDF</a><a class="html" href="naskah-akademik-penyusunan-vmts-2023-2028.html?v=${VERSION}" target="_blank" rel="noopener">Buka HTML</a></div>
    </div>
  </div>`;

  const bottomCard = `<section class="renstra-vmts-bottom" id="dokumen-vmts-2023-2028" aria-labelledby="dokumen-vmts-title"><div class="renstra-vmts-bottom-inner"><div><span class="kicker">Dokumen Pendukung Renstra</span><h3 id="dokumen-vmts-title">Naskah Akademik Penyusunan VMTS 2023–2028</h3><p>Dokumen ini melengkapi Renstra Program Studi dengan landasan filosofis, yuridis, sosiologis, akademik, dan institusional; proses penyusunan Januari–Mei 2023; analisis lingkungan strategis; matriks keselarasan; strategi implementasi; serta mekanisme monitoring dan evaluasi.</p></div><div class="renstra-vmts-bottom-actions"><a class="survey" href="${VMTS_SURVEY_URL}" target="_blank" rel="noopener">Survey Evaluasi VMTS</a><a class="pdf" href="Naskah_Akademik_Penyusunan_VMTS_S2_Statistika_Terapan_2023-2028.pdf?v=${VERSION}" target="_blank" rel="noopener">Buka PDF Terbaru</a><a class="html" href="naskah-akademik-penyusunan-vmts-2023-2028.html?v=${VERSION}" target="_blank" rel="noopener">Buka Versi HTML</a></div></div></section>`;

  const vmtsReportsCard = `<section class="renstra-vmts-reports" id="lampiran-sosialisasi-vmts" aria-labelledby="lampiran-sosialisasi-vmts-title">
    <div class="vmts-report-head">
      <div>
        <span class="vmts-report-kicker"><span class="vmts-lang-id">Lampiran Sosialisasi VMTS</span><span class="vmts-lang-en" lang="en">VMTS Socialization Appendices</span></span>
        <h3 id="lampiran-sosialisasi-vmts-title"><span class="vmts-lang-id">Laporan Sosialisasi VMTS S2 Statistika Terapan FMIPA UNPAD</span><span class="vmts-lang-en" lang="en">VMTS Socialization Reports for the Applied Statistics Master's Program</span></h3>
        <p><span class="vmts-lang-id">Dokumen ini merekam sosialisasi visi, misi, tujuan, dan strategi kepada dosen, mahasiswa, serta pemangku kepentingan sebagai bukti pelaksanaan tata kelola dan penjaminan mutu program studi.</span><span class="vmts-lang-en" lang="en">These reports document the socialization of the program vision, mission, objectives, and strategy to lecturers, students, and stakeholders as evidence of governance and quality assurance implementation.</span></p>
      </div>
      <div class="vmts-report-count" aria-hidden="true"><strong>4</strong><span>HTML</span></div>
    </div>
    <a class="vmts-survey-card" href="${VMTS_SURVEY_URL}" target="_blank" rel="noopener">
      <span class="vmts-survey-icon" aria-hidden="true">VM</span>
      <span class="vmts-survey-copy"><strong><span class="vmts-lang-id">Survey Evaluasi VMTS 2023–2028</span><span class="vmts-lang-en" lang="en">VMTS Evaluation Survey 2023–2028</span></strong><span><span class="vmts-lang-id">Berikan masukan untuk evaluasi visi, misi, tujuan, dan strategi Program S2 Statistika Terapan.</span><span class="vmts-lang-en" lang="en">Share feedback for evaluating the vision, mission, objectives, and strategy of the Applied Statistics Master's Program.</span></span></span>
      <span class="vmts-survey-action"><span class="vmts-lang-id">Isi survey</span><span class="vmts-lang-en" lang="en">Open survey</span><b aria-hidden="true">→</b></span>
    </a>
    <div class="vmts-report-grid" aria-label="Lampiran laporan sosialisasi VMTS">
      <a class="vmts-report-card" href="dokumen-vmts/sosialisasi-dosen-stakeholder-2023-2025.html?v=${VERSION}" target="_blank" rel="noopener">
        <span class="vmts-report-year">2023-2025</span>
        <h4><span class="vmts-lang-id">Sosialisasi Dosen dan Stakeholder</span><span class="vmts-lang-en" lang="en">Lecturer and Stakeholder Socialization</span></h4>
        <p><span class="vmts-lang-id">Laporan gabungan pelaksanaan sosialisasi VMTS kepada dosen dan pemangku kepentingan dalam periode 2023-2025.</span><span class="vmts-lang-en" lang="en">A consolidated report on VMTS socialization for lecturers and stakeholders across 2023-2025.</span></p>
        <span class="vmts-report-action"><span class="vmts-lang-id">Buka laporan</span><span class="vmts-lang-en" lang="en">Open report</span><b aria-hidden="true">→</b></span>
      </a>
      <a class="vmts-report-card" href="dokumen-vmts/sosialisasi-vmts-2023.html?v=${VERSION}" target="_blank" rel="noopener">
        <span class="vmts-report-year">2023</span>
        <h4><span class="vmts-lang-id">Sosialisasi VMTS 2023</span><span class="vmts-lang-en" lang="en">VMTS Socialization 2023</span></h4>
        <p><span class="vmts-lang-id">Dokumentasi sosialisasi VMTS awal periode kepada sivitas akademika dan pemangku kepentingan.</span><span class="vmts-lang-en" lang="en">Documentation of the early-period VMTS socialization for the academic community and stakeholders.</span></p>
        <span class="vmts-report-action"><span class="vmts-lang-id">Buka laporan</span><span class="vmts-lang-en" lang="en">Open report</span><b aria-hidden="true">→</b></span>
      </a>
      <a class="vmts-report-card" href="dokumen-vmts/sosialisasi-vmts-2024.html?v=${VERSION}" target="_blank" rel="noopener">
        <span class="vmts-report-year">2024</span>
        <h4><span class="vmts-lang-id">Sosialisasi VMTS 2024</span><span class="vmts-lang-en" lang="en">VMTS Socialization 2024</span></h4>
        <p><span class="vmts-lang-id">Laporan pelaksanaan sosialisasi dan penguatan pemahaman VMTS pada tahun akademik berjalan.</span><span class="vmts-lang-en" lang="en">A report on VMTS socialization and reinforcement of shared understanding during the academic year.</span></p>
        <span class="vmts-report-action"><span class="vmts-lang-id">Buka laporan</span><span class="vmts-lang-en" lang="en">Open report</span><b aria-hidden="true">→</b></span>
      </a>
      <a class="vmts-report-card" href="dokumen-vmts/sosialisasi-vmts-2025.html?v=${VERSION}" target="_blank" rel="noopener">
        <span class="vmts-report-year">2025</span>
        <h4><span class="vmts-lang-id">Sosialisasi VMTS 2025</span><span class="vmts-lang-en" lang="en">VMTS Socialization 2025</span></h4>
        <p><span class="vmts-lang-id">Dokumentasi sosialisasi lanjutan untuk memastikan VMTS dipahami dan digunakan dalam pengembangan program studi.</span><span class="vmts-lang-en" lang="en">Follow-up documentation to ensure the VMTS is understood and used in the program's development agenda.</span></p>
        <span class="vmts-report-action"><span class="vmts-lang-id">Buka laporan</span><span class="vmts-lang-en" lang="en">Open report</span><b aria-hidden="true">→</b></span>
      </a>
    </div>
  </section>`;

  const runtimeScript = `<script id="renstra-vmts-runtime">
    (()=>{
      const activateRenstra=(event)=>{
        const trigger=event.target.closest('[data-open-renstra]');
        if(!trigger)return;
        event.preventDefault();
        history.replaceState(null,'','#renstra-program-studi');
        if(typeof setActiveWorkspacePanel==='function')setActiveWorkspacePanel('renstra-program-studi',true,'s2');
        else document.getElementById('renstra-program-studi')?.scrollIntoView({behavior:'smooth'});
      };
      document.addEventListener('click',activateRenstra);
      const appendStrategicAttachments=()=>{
        const panel=document.getElementById('renstra-program-studi');
        if(!panel)return false;
        const shell=panel.querySelector('.renstra-shell,.container')||panel;
        const source=shell.querySelector('.renstra-source');
        let changed=false;
        let bottom=panel.querySelector('#dokumen-vmts-2023-2028');
        if(!bottom){
          const wrapper=document.createElement('div');
          wrapper.innerHTML=${JSON.stringify(bottomCard)};
          bottom=wrapper.firstElementChild;
          if(source)source.insertAdjacentElement('afterend',bottom);else shell.appendChild(bottom);
          changed=true;
        }
        if(!panel.querySelector('#lampiran-sosialisasi-vmts')){
          const wrapper=document.createElement('div');
          wrapper.innerHTML=${JSON.stringify(vmtsReportsCard)};
          const reports=wrapper.firstElementChild;
          bottom?.insertAdjacentElement('afterend',reports) || shell.appendChild(reports);
          changed=true;
        }
        return Boolean(bottom)&&Boolean(panel.querySelector('#lampiran-sosialisasi-vmts'))||changed;
      };
      if(!appendStrategicAttachments()){
        const observer=new MutationObserver(()=>{if(appendStrategicAttachments())observer.disconnect()});
        observer.observe(document.body,{childList:true,subtree:true});
        setTimeout(()=>observer.disconnect(),20000);
      }
    })();
  <\/script>`;

  window.applyProgramProfileEnhancement = (html) => {
    html = typeof previousApply === "function" ? previousApply(html) : html;
    if (typeof html !== "string") return html;
    if (!html.includes("renstra-vmts-styles")) html = html.replace("</head>", styles + "</head>");
    if (!html.includes('id="profile-strategic-docs"')) {
      const inspirationMarker = '<section class="inspiration-voices"';
      if (html.includes(inspirationMarker)) html = html.replace(inspirationMarker, profileCards + "\n        " + inspirationMarker);
    }
    if (!html.includes("renstra-vmts-runtime")) html = html.replace("</body>", runtimeScript + "</body>");
    if (!html.includes("panduan-ai-enhancement.js")) html = html.replace("</body>", '<script src="assets/panduan-ai-enhancement.js?v=20260728-3"></script></body>');
    return html;
  };
})();
