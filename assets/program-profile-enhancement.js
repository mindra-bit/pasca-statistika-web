(() => {
  const profileMarkup = `<div class="program-profile-hero program-profile-health-ai">
    <div class="program-profile-copy">
      <div class="profile-language" data-profile-lang="id">
        <p class="section-kicker">Profil Program</p>
        <h3 class="profile-main-title">Pusat Pendidikan Magister Statistika yang Unggul dalam Pendidikan, Riset, Kesehatan, dan Artificial Intelligence</h3>
        <div class="program-profile-narrative">
          <p class="profile-lead">Program Studi Magister Statistika Terapan FMIPA Universitas Padjadjaran merupakan pusat pendidikan magister yang unggul dalam pengembangan dan penerapan metodologi statistika untuk menjawab permasalahan strategis di masyarakat.</p>
          <p>Program studi memiliki kekhasan pada bidang kesehatan, sains data, dan artificial intelligence. Kekhasan ini didukung oleh ekosistem pendidikan dan penelitian kesehatan Universitas Padjadjaran, jejaring rumah sakit dan fasilitas kesehatan, serta karakteristik data Jawa Barat yang kaya dan beragam.</p>
          <p>Melalui konsentrasi Sains Data, mahasiswa mengintegrasikan teori statistika, pemrograman, visualisasi, machine learning, predictive analytics, dan responsible AI. Lulusan dipersiapkan untuk menganalisis data kompleks, mengembangkan metodologi, membangun sistem pendukung keputusan, dan menghasilkan inovasi berbasis data yang berdampak.</p>
        </div>
        <div class="profile-feature-grid" aria-label="Kekhasan program studi">
          <article><span>01</span><strong>Statistika Kesehatan</strong><p>Analisis kesehatan masyarakat, epidemiologi, biostatistika, pemetaan penyakit, dan surveilans.</p></article>
          <article><span>02</span><strong>Sains Data &amp; Responsible AI</strong><p>Machine learning, komputasi statistika, predictive analytics, interpretabilitas, dan etika data.</p></article>
          <article><span>03</span><strong>Dampak Berbasis Bukti</strong><p>Pemodelan dan sistem pendukung keputusan untuk kebijakan, kesehatan, dan pelayanan publik.</p></article>
        </div>
      </div>
      <div class="profile-language" data-profile-lang="en" hidden>
        <p class="section-kicker">Program Profile</p>
        <h3 class="profile-main-title">A Leading Master’s Education Center in Statistics, Research, Health, and Artificial Intelligence</h3>
        <div class="program-profile-narrative">
          <p class="profile-lead">The Master of Applied Statistics Program at the Faculty of Mathematics and Natural Sciences, Universitas Padjadjaran, is a leading graduate program in the development and application of statistical methodology for strategic societal challenges.</p>
          <p>The program has distinctive strengths in health, data science, and artificial intelligence, supported by Universitas Padjadjaran’s health education and research ecosystem, its networks of hospitals and healthcare facilities, and the rich and diverse data context of West Java.</p>
          <p>Through the Data Science concentration, students integrate statistical theory, programming, visualization, machine learning, predictive analytics, and responsible AI. Graduates are prepared to analyze complex data, develop methodology, build decision-support systems, and deliver impactful data-driven innovation.</p>
        </div>
        <div class="profile-feature-grid" aria-label="Program distinctive strengths">
          <article><span>01</span><strong>Health Statistics</strong><p>Public health analytics, epidemiology, biostatistics, disease mapping, and surveillance.</p></article>
          <article><span>02</span><strong>Data Science &amp; Responsible AI</strong><p>Machine learning, statistical computing, predictive analytics, interpretability, and data ethics.</p></article>
          <article><span>03</span><strong>Evidence-Based Impact</strong><p>Modeling and decision-support systems for policy, health, and public services.</p></article>
        </div>
      </div>
      <div class="pill-grid" aria-label="Bidang kajian">
        <span data-i18n="pillBusiness">Bisnis dan Industri</span>
        <span data-i18n="pillSocial">Sosial</span>
        <span data-i18n="pillActuarial">Aktuaria</span>
        <span data-i18n="pillBiostat">Biostatistik</span>
        <span data-i18n="pillDataScience">Sains Data</span>
      </div>
      <div class="aee-highlight profile-aee-highlight">
        <span data-i18n="aeeLabel">AEE</span>
        <strong>100%</strong>
        <p data-i18n="aeeText">Kelulusan 4 tahun terakhir 100% tepat waktu.</p>
      </div>
    </div>
    <figure class="program-profile-visual">
      <div class="program-profile-visual-frame">
        <img src="assets/program-profile-health-ai.svg?v=20260726" alt="Ilustrasi penerapan statistika, artificial intelligence, dan sains data dalam bidang kesehatan di Jawa Barat." loading="lazy" decoding="async" />
      </div>
      <figcaption data-profile-caption-id>Statistika terapan menghubungkan data kesehatan, artificial intelligence, dan pengambilan keputusan berbasis bukti.</figcaption>
      <figcaption data-profile-caption-en hidden>Applied statistics connects health data, artificial intelligence, and evidence-based decision-making.</figcaption>
    </figure>
  </div>`;

  const profileStyles = `<style id="program-profile-health-ai-styles">
    .program-profile-health-ai{display:grid!important;grid-template-columns:minmax(0,1.03fr) minmax(380px,.97fr);gap:clamp(30px,4.5vw,64px);align-items:center;padding:clamp(26px,4.2vw,52px);border:1px solid rgba(20,61,93,.12);border-radius:30px;background:linear-gradient(145deg,#fff 0%,#f5fbff 50%,#edf8f3 100%);box-shadow:0 24px 65px rgba(20,61,93,.11);overflow:hidden}.program-profile-copy{min-width:0}.profile-main-title{max-width:760px;margin:8px 0 20px;color:#143d5d;font-size:clamp(1.72rem,2.75vw,2.5rem);line-height:1.16;letter-spacing:-.025em}.program-profile-narrative{display:grid;gap:12px;max-width:780px}.program-profile-narrative p{margin:0;color:#455a6d;font-size:clamp(.95rem,1.1vw,1.03rem);line-height:1.68}.program-profile-narrative .profile-lead{padding-left:16px;border-left:4px solid #c99a2e;color:#294b65;font-weight:650}.profile-feature-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0}.profile-feature-grid article{position:relative;min-height:132px;padding:16px;border:1px solid rgba(20,61,93,.1);border-radius:17px;background:rgba(255,255,255,.9);box-shadow:0 10px 26px rgba(20,61,93,.065)}.profile-feature-grid article>span{display:inline-grid;place-items:center;width:32px;height:32px;margin-bottom:10px;border-radius:10px;background:#e5f2f8;color:#143d5d;font-size:.72rem;font-weight:900}.profile-feature-grid article:nth-child(2)>span{background:#e5f5ef;color:#11624f}.profile-feature-grid article:nth-child(3)>span{background:#fff4d8;color:#8b6214}.profile-feature-grid strong{display:block;margin-bottom:6px;color:#173b59;font-size:.94rem;line-height:1.35}.profile-feature-grid p{margin:0;color:#607181;font-size:.82rem;line-height:1.5}.program-profile-visual{position:relative;margin:0;padding:14px;border:1px solid rgba(20,61,93,.1);border-radius:26px;background:rgba(255,255,255,.94);box-shadow:0 20px 48px rgba(20,61,93,.13);animation:profileVisualEnter .75s ease both}.program-profile-visual::before{content:"HEALTH • DATA SCIENCE • AI";position:absolute;z-index:2;top:28px;left:28px;padding:7px 11px;border-radius:999px;background:rgba(20,61,93,.9);color:#fff;font-size:.68rem;font-weight:850;letter-spacing:.08em;box-shadow:0 8px 20px rgba(20,61,93,.18)}.program-profile-visual-frame{display:grid;min-height:430px;place-items:center;border-radius:19px;background:linear-gradient(145deg,#f7fbfd,#eef8f3);overflow:hidden}.program-profile-visual img{display:block;width:100%;height:100%;max-height:500px;object-fit:contain}.program-profile-visual figcaption{padding:14px 10px 4px;color:#667889;font-size:.84rem;line-height:1.5;text-align:center}.profile-aee-highlight{margin-top:18px}.profile-language[hidden],[data-profile-caption-id][hidden],[data-profile-caption-en][hidden]{display:none!important}@keyframes profileVisualEnter{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@media(max-width:1120px){.profile-feature-grid{grid-template-columns:1fr}.profile-feature-grid article{min-height:0}}@media(max-width:980px){.program-profile-health-ai{grid-template-columns:1fr;align-items:start}.program-profile-visual{max-width:760px;margin-inline:auto}.program-profile-visual-frame{min-height:360px}.profile-feature-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:720px){.profile-feature-grid{grid-template-columns:1fr}.program-profile-visual-frame{min-height:300px}}@media(max-width:620px){.program-profile-health-ai{padding:20px;border-radius:22px}.profile-main-title{font-size:clamp(1.5rem,7vw,1.95rem)}.program-profile-visual{padding:10px;border-radius:20px}.program-profile-visual::before{top:20px;left:20px;font-size:.6rem}.program-profile-visual-frame{min-height:260px;border-radius:15px}}@media(prefers-reduced-motion:reduce){.program-profile-visual{animation:none}}
  </style>`;

  const runtimeScript = `<script id="program-profile-health-ai-runtime">
    window.addEventListener('load',()=>{
      const syncProfileLanguage=()=>{
        let lang='id';
        try{lang=localStorage.getItem('s2-statistika-language')==='en'?'en':'id'}catch(error){}
        document.querySelectorAll('[data-profile-lang]').forEach(element=>{element.hidden=element.dataset.profileLang!==lang});
        const captionId=document.querySelector('[data-profile-caption-id]');
        const captionEn=document.querySelector('[data-profile-caption-en]');
        if(captionId) captionId.hidden=lang==='en';
        if(captionEn) captionEn.hidden=lang!=='en';
      };
      const removeDuplicatePmbMenu=()=>{
        document.querySelectorAll('.workspace-menu-s2 a,.program-profile-menu a,.profile-menu a').forEach(link=>{
          const href=(link.getAttribute('href')||'').trim().toLowerCase();
          const target=(link.dataset.workspaceTarget||'').trim().toLowerCase();
          const key=(link.dataset.i18n||'').trim().toLowerCase();
          const label=(link.textContent||'').trim().toLowerCase();
          if(href==='#pmb'||target==='pmb'||key.includes('pmb')||label==='pmb'||label==='penerimaan mahasiswa baru') link.remove();
        });
      };
      syncProfileLanguage();
      removeDuplicatePmbMenu();
      document.querySelectorAll('.language-switch [data-lang]').forEach(button=>button.addEventListener('click',()=>{setTimeout(syncProfileLanguage,0);setTimeout(syncProfileLanguage,120)}));
      const sidebar=document.querySelector('.workspace-sidebar');
      if(sidebar) new MutationObserver(removeDuplicatePmbMenu).observe(sidebar,{childList:true,subtree:true});
    });
  <\/script>`;

  window.applyProgramProfileEnhancement = (html) => {
    if (typeof html !== 'string' || html.includes('program-profile-health-ai')) return html;
    const profileStart = html.indexOf('<div class="program-profile-hero">');
    const profileEnd = html.indexOf('<section class="inspiration-voices"', profileStart);
    if (profileStart >= 0 && profileEnd > profileStart) {
      html = html.slice(0, profileStart) + profileMarkup + '\n        ' + html.slice(profileEnd);
    }
    if (!html.includes('program-profile-health-ai-styles')) {
      html = html.replace('</head>', profileStyles + '</head>');
    }
    if (!html.includes('program-profile-health-ai-runtime')) {
      html = html.replace('</body>', runtimeScript + '</body>');
    }
    return html;
  };
})();
