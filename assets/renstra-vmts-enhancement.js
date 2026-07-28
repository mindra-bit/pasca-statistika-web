(() => {
  const previousApply = window.applyProgramProfileEnhancement;
  const VERSION = "20260726-vmts-fix-2";

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
    .renstra-vmts-bottom .kicker{display:inline-flex;padding:6px 10px;border-radius:999px;background:#e8f4ef;color:#11624f;font-size:.72rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.renstra-vmts-bottom h3{margin:9px 0 9px;color:#0b3556;font-size:clamp(1.25rem,2.2vw,1.7rem)}.renstra-vmts-bottom p{max-width:850px;margin:0;color:#5e6f7d;line-height:1.65}.renstra-vmts-bottom-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}.renstra-vmts-bottom-actions a{display:inline-flex;align-items:center;justify-content:center;padding:11px 16px;border-radius:999px;text-decoration:none;font-weight:850;white-space:nowrap}.renstra-vmts-bottom-actions .pdf{background:#c99a2e;color:#172c3d}.renstra-vmts-bottom-actions .html{background:#0c3b5e;color:#fff}
    @media(max-width:850px){.profile-strategic-docs{grid-template-columns:1fr}.profile-vmts-detail,.renstra-vmts-bottom-inner{grid-template-columns:1fr}.profile-vmts-actions,.renstra-vmts-bottom-actions{justify-content:flex-start}}
    @media(max-width:560px){.profile-strategic-card{grid-template-columns:44px minmax(0,1fr) 30px;padding:17px}.profile-strategic-icon{width:42px;height:42px}.profile-vmts-actions a,.renstra-vmts-bottom-actions a{flex:1 1 135px}}
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

  const bottomCard = `<section class="renstra-vmts-bottom" id="dokumen-vmts-2023-2028" aria-labelledby="dokumen-vmts-title"><div class="renstra-vmts-bottom-inner"><div><span class="kicker">Dokumen Pendukung Renstra</span><h3 id="dokumen-vmts-title">Naskah Akademik Penyusunan VMTS 2023–2028</h3><p>Dokumen ini melengkapi Renstra Program Studi dengan landasan filosofis, yuridis, sosiologis, akademik, dan institusional; proses penyusunan Januari–Mei 2023; analisis lingkungan strategis; matriks keselarasan; strategi implementasi; serta mekanisme monitoring dan evaluasi.</p></div><div class="renstra-vmts-bottom-actions"><a class="pdf" href="Naskah_Akademik_Penyusunan_VMTS_S2_Statistika_Terapan_2023-2028.pdf?v=${VERSION}" target="_blank" rel="noopener">Buka PDF Terbaru</a><a class="html" href="naskah-akademik-penyusunan-vmts-2023-2028.html?v=${VERSION}" target="_blank" rel="noopener">Buka Versi HTML</a></div></div></section>`;

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
      const appendBottomCard=()=>{
        const panel=document.getElementById('renstra-program-studi');
        if(!panel||panel.querySelector('#dokumen-vmts-2023-2028'))return false;
        const shell=panel.querySelector('.renstra-shell,.container')||panel;
        const source=shell.querySelector('.renstra-source');
        const wrapper=document.createElement('div');
        wrapper.innerHTML=${JSON.stringify(bottomCard)};
        const card=wrapper.firstElementChild;
        if(source)source.insertAdjacentElement('afterend',card);else shell.appendChild(card);
        return true;
      };
      if(!appendBottomCard()){
        const observer=new MutationObserver(()=>{if(appendBottomCard())observer.disconnect()});
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
