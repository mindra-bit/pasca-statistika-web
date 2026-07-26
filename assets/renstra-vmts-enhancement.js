(() => {
  const previousApply = window.applyProgramProfileEnhancement;

  const styles = `<style id="renstra-vmts-styles">
    .renstra-vmts-section{background:linear-gradient(180deg,#f3f7fa 0%,#fff 100%)}
    .renstra-vmts-section .container{display:grid;gap:22px}
    .renstra-vmts-hero{position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) 250px;gap:34px;align-items:center;padding:clamp(28px,5vw,54px);border-radius:28px;background:linear-gradient(135deg,#082b4c 0%,#124e73 58%,#167c78 100%);color:#fff;box-shadow:0 22px 58px rgba(8,43,76,.19)}
    .renstra-vmts-hero:before{content:"";position:absolute;width:440px;height:440px;border:82px solid rgba(255,255,255,.045);border-radius:50%;right:-170px;top:-195px}
    .renstra-vmts-copy,.renstra-vmts-cover{position:relative;z-index:1}
    .renstra-vmts-kicker{display:inline-flex;padding:7px 12px;border-radius:999px;background:rgba(244,188,69,.16);border:1px solid rgba(244,188,69,.4);color:#f5d083;font-size:.78rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
    .renstra-vmts-hero h2{margin:15px 0 12px;color:#fff;font-size:clamp(1.8rem,4vw,3rem);line-height:1.12}
    .renstra-vmts-hero p{max-width:850px;margin:0;color:#dceaf2;font-size:1.02rem;line-height:1.72}
    .renstra-vmts-cover{display:block;padding:9px;border-radius:20px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);box-shadow:0 18px 38px rgba(0,0,0,.22)}
    .renstra-vmts-cover img{display:block;width:100%;aspect-ratio:595/842;object-fit:cover;border-radius:13px;background:#fff}
    .renstra-vmts-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
    .renstra-vmts-metric{padding:20px;border:1px solid #d9e4ea;border-radius:18px;background:#fff;box-shadow:0 10px 28px rgba(18,61,91,.07)}
    .renstra-vmts-metric strong{display:block;margin-bottom:5px;color:#0c3a5d;font-size:1.35rem}.renstra-vmts-metric span{color:#657582;font-size:.88rem}
    .renstra-vmts-document{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:center;padding:clamp(24px,4vw,38px);border:1px solid #d8e3ea;border-radius:23px;background:#fff;box-shadow:0 16px 42px rgba(12,47,85,.09)}
    .renstra-vmts-document h3{margin:9px 0 10px;color:#0b3556;font-size:clamp(1.35rem,2.5vw,1.9rem)}
    .renstra-vmts-document p{max-width:850px;margin:0;color:#566977;line-height:1.68}
    .renstra-vmts-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.renstra-vmts-tags span{padding:6px 10px;border-radius:999px;background:#edf5f3;color:#11624f;font-size:.76rem;font-weight:800}
    .renstra-vmts-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}.renstra-vmts-actions a{display:inline-flex;align-items:center;justify-content:center;padding:12px 17px;border-radius:999px;text-decoration:none;font-weight:850;white-space:nowrap}
    .renstra-vmts-pdf{background:#c99a2e;color:#172c3d}.renstra-vmts-html{background:#0c3b5e;color:#fff}
    .renstra-vmts-note{grid-column:1/-1;margin:0;padding-top:17px;border-top:1px solid #e4ebef;color:#6b7984;font-size:.83rem}
    .workspace-menu-list a[data-workspace-target="renstra-program-studi"]{border-left:3px solid #dca536;background:linear-gradient(90deg,rgba(220,165,54,.13),transparent)}
    @media(max-width:900px){.renstra-vmts-hero{grid-template-columns:1fr}.renstra-vmts-cover{width:min(250px,70%)}.renstra-vmts-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.renstra-vmts-document{grid-template-columns:1fr}.renstra-vmts-actions{justify-content:flex-start}}
    @media(max-width:560px){.renstra-vmts-metrics{grid-template-columns:1fr}.renstra-vmts-actions a{width:100%}}
  </style>`;

  const menuLink = `<a href="#renstra-program-studi" data-program-select="s2" data-workspace-target="renstra-program-studi">Renstra Program Studi</a>`;

  const section = `<section class="section renstra-vmts-section" id="renstra-program-studi" aria-labelledby="renstra-vmts-title">
    <div class="container">
      <article class="renstra-vmts-hero">
        <div class="renstra-vmts-copy">
          <span class="renstra-vmts-kicker">Arah Strategis Program Studi</span>
          <h2 id="renstra-vmts-title">Rencana Strategis dan Naskah Akademik VMTS 2023–2028</h2>
          <p>Dokumen akademik yang menjelaskan landasan, proses penyusunan, rumusan visi dan misi, tujuan, strategi, indikator pencapaian, implementasi, serta mekanisme monitoring dan evaluasi Program Studi Magister Statistika Terapan FMIPA Universitas Padjadjaran.</p>
        </div>
        <a class="renstra-vmts-cover" href="naskah-akademik-penyusunan-vmts-2023-2028.html?v=20260726" target="_blank" rel="noopener" aria-label="Buka versi HTML Naskah Akademik VMTS">
          <img src="assets/vmts/cover-vmts-2023-2028.jpg" alt="Sampul Naskah Akademik Penyusunan VMTS Program Studi Magister Statistika Terapan 2023–2028" loading="lazy" decoding="async">
        </a>
      </article>

      <div class="renstra-vmts-metrics" aria-label="Ringkasan dokumen">
        <article class="renstra-vmts-metric"><strong>2023–2028</strong><span>Periode VMTS dan arah pengembangan</span></article>
        <article class="renstra-vmts-metric"><strong>5 Tahap</strong><span>Proses penyusunan Januari–Mei 2023</span></article>
        <article class="renstra-vmts-metric"><strong>11 Bab</strong><span>Landasan hingga monitoring dan evaluasi</span></article>
        <article class="renstra-vmts-metric"><strong>37 Halaman</strong><span>Dokumen PDF lengkap dengan lampiran</span></article>
      </div>

      <article class="renstra-vmts-document">
        <div>
          <span class="renstra-vmts-kicker">Dokumen Utama · Program Studi S2</span>
          <h3>Naskah Akademik Penyusunan Visi, Misi, Tujuan, dan Strategi</h3>
          <p>Naskah memuat landasan filosofis, yuridis, sosiologis, akademik, dan institusional; metodologi penyusunan; rekonstruksi tahapan Januari–Mei 2023; analisis SWOT; matriks keselarasan; strategi implementasi; PPEPP; dokumentasi kegiatan; serta instrumen dan format bukti pendukung.</p>
          <div class="renstra-vmts-tags"><span>VMTS 2023–2028</span><span>OBE</span><span>PPEPP</span><span>LAMSAMA</span><span>Akreditasi</span></div>
        </div>
        <div class="renstra-vmts-actions">
          <a class="renstra-vmts-pdf" href="Naskah_Akademik_Penyusunan_VMTS_S2_Statistika_Terapan_2023-2028.pdf?v=20260726" target="_blank" rel="noopener">Buka PDF</a>
          <a class="renstra-vmts-html" href="naskah-akademik-penyusunan-vmts-2023-2028.html?v=20260726" target="_blank" rel="noopener">Buka HTML</a>
        </div>
        <p class="renstra-vmts-note">Catatan: nomor dan tanggal SK Departemen, tanggal rinci rapat, daftar hadir, serta notulen perlu dilengkapi dari arsip primer sebelum digunakan sebagai bukti administratif final.</p>
      </article>
    </div>
  </section>`;

  window.applyProgramProfileEnhancement = (html) => {
    html = typeof previousApply === 'function' ? previousApply(html) : html;
    if (typeof html !== 'string') return html;

    if (!html.includes('renstra-vmts-styles')) {
      html = html.replace('</head>', styles + '</head>');
    }

    if (!html.includes('data-workspace-target="renstra-program-studi"')) {
      const profileLink = /(<a\s+href="#program-profile"[^>]*data-workspace-target="program-profile"[^>]*>.*?<\/a>)/i;
      if (profileLink.test(html)) html = html.replace(profileLink, '$1' + menuLink);
    }

    if (!html.includes('id="renstra-program-studi"')) {
      const beasiswaSection = /(<section\b[^>]*\bid="beasiswa"[^>]*>)/i;
      if (beasiswaSection.test(html)) html = html.replace(beasiswaSection, section + '$1');
      else html = html.replace('<div class="workspace-panels">', '<div class="workspace-panels">' + section);
    }
    return html;
  };
})();
