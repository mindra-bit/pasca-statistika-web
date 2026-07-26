(()=>{
  const ethicsId='etika-akademik-dosen';

  const fixVisitUsImage=()=>{
    const section=document.getElementById('visit-us');
    if(!section)return;
    const image=section.querySelector('img');
    if(!image)return;
    image.src='assets/visit-us-building.svg?v=20260726-fixed';
    image.removeAttribute('srcset');
    image.style.display='block';
    image.style.width='100%';
    image.style.height='100%';
    image.style.objectFit='cover';
  };

  const ethicsSectionMarkup=()=>`<section class="section ethics-academic-section" id="${ethicsId}" aria-labelledby="ethics-academic-title">
    <div class="container">
      <article class="ethics-hero">
        <div class="ethics-hero-copy"><span class="ethics-kicker">Tata Kelola dan Integritas Akademik</span><h2 id="ethics-academic-title">Etika Akademik Dosen Universitas Padjadjaran</h2><p>Ruang khusus untuk memahami kode etik dosen, integritas penelitian dan publikasi, penggunaan kecerdasan artifisial secara bertanggung jawab, perlindungan dalam relasi akademik, serta jalur penanganan pelanggaran berdasarkan regulasi resmi Universitas Padjadjaran.</p></div>
        <div class="ethics-logo-frame"><img src="assets/logo-unpad.png" alt="Logo Universitas Padjadjaran" loading="lazy" decoding="async"></div>
      </article>
      <div class="ethics-summary-grid" aria-label="Pokok etika akademik dosen">
        <article class="ethics-summary-card"><span>01</span><h3>Kode Etik Dosen</h3><p>Profesionalisme, keadilan penilaian, tanggung jawab, konflik kepentingan, dan penggunaan kewenangan akademik.</p></article>
        <article class="ethics-summary-card"><span>02</span><h3>Integritas Ilmiah</h3><p>Pencegahan fabrikasi, falsifikasi, plagiarisme, kepengarangan tidak sah, dan pengajuan jamak.</p></article>
        <article class="ethics-summary-card"><span>03</span><h3>AI Bertanggung Jawab</h3><p>Transparansi, validasi hasil, perlindungan data, mitigasi bias, dan akuntabilitas manusia.</p></article>
        <article class="ethics-summary-card"><span>04</span><h3>Relasi Akademik Aman</h3><p>Perlindungan mahasiswa, penghormatan kontribusi, pencegahan intimidasi, pelecehan, dan penyalahgunaan relasi kuasa.</p></article>
      </div>
      <article class="ethics-document-card">
        <div><span class="ethics-kicker">Naskah Akademik · 26 Juli 2026</span><h3>Penguatan dan Implementasi Etika Akademik Dosen</h3><p>Naskah ini menyintesiskan landasan filosofis, sosiologis, yuridis, dan akademik; memetakan regulasi; membedakan jalur kode etik, integritas karya ilmiah, kekerasan, dan disiplin; serta menawarkan matriks pelanggaran, alur triase perkara, rekomendasi kelembagaan, dan indikator evaluasi.</p><div class="ethics-regulation-pills"><span>Peraturan SA 1/2023</span><span>Peraturan Rektor 14/2024</span><span>Peraturan Rektor 32/2024</span><span>Peraturan Rektor 31/2025</span><span>Peraturan Rektor 39/2025</span></div></div>
        <div class="ethics-document-actions"><a class="ethics-open-primary" href="etika-akademik-dosen.html?v=20260726-panel-fix" target="_blank" rel="noopener">Buka Naskah Akademik</a><a class="ethics-open-secondary" href="etika-akademik-dosen.html?v=20260726-panel-fix#referensi" target="_blank" rel="noopener">Lihat Referensi</a></div>
        <p class="ethics-disclaimer">Dokumen merupakan kajian akademik dan rekomendasi implementasi. Naskah resmi peraturan dan keputusan organ yang berwenang tetap menjadi rujukan utama.</p>
      </article>
    </div>
  </section>`;

  const ensureEthicsSection=()=>{
    let section=document.getElementById(ethicsId);
    if(section)return section;
    const panels=document.querySelector('.workspace-panels');
    if(!panels)return null;
    panels.insertAdjacentHTML('afterbegin',ethicsSectionMarkup());
    return document.getElementById(ethicsId);
  };

  const ensureEthicsMenu=()=>{
    const menu=document.querySelector('.workspace-menu-s2');
    if(!menu)return null;
    let link=menu.querySelector(`[data-workspace-target="${ethicsId}"]`);
    if(link)return link;
    link=document.createElement('a');
    link.href=`#${ethicsId}`;
    link.dataset.programSelect='s2';
    link.dataset.workspaceTarget=ethicsId;
    link.textContent='Etika Akademik Dosen';
    const publicationLink=menu.querySelector('[data-workspace-target="publikasi-dosen"]');
    if(publicationLink)publicationLink.insertAdjacentElement('afterend',link);
    else menu.appendChild(link);
    link.addEventListener('click',()=>setTimeout(activateEthicsPanel,0));
    return link;
  };

  const activateEthicsPanel=()=>{
    if(decodeURIComponent(location.hash.replace(/^#/,''))!==ethicsId)return;
    const section=ensureEthicsSection();
    const layout=document.getElementById('program-workspace');
    if(!section||!layout)return;
    layout.dataset.program='s2';
    document.querySelectorAll('.workspace-panels > .section').forEach(panel=>panel.classList.toggle('active-panel',panel===section));
    document.querySelectorAll('.workspace-menu-list [data-workspace-target]').forEach(link=>{
      const active=link.dataset.workspaceTarget===ethicsId;
      link.classList.toggle('active',active);
      if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
    });
    requestAnimationFrame(()=>layout.scrollIntoView({behavior:'smooth',block:'start'}));
  };

  const repair=()=>{
    fixVisitUsImage();
    ensureEthicsSection();
    ensureEthicsMenu();
    activateEthicsPanel();
  };

  window.addEventListener('load',()=>{
    repair();
    setTimeout(repair,250);
    setTimeout(repair,1000);
  });
  window.addEventListener('hashchange',()=>{
    setTimeout(repair,0);
    setTimeout(repair,120);
  });
  document.addEventListener('click',event=>{
    if(event.target.closest(`[data-workspace-target="${ethicsId}"]`)){
      setTimeout(repair,0);
      setTimeout(repair,120);
    }
  });
  let scheduled=false;
  new MutationObserver(()=>{
    if(scheduled)return;
    scheduled=true;
    requestAnimationFrame(()=>{scheduled=false;repair();});
  }).observe(document.documentElement,{childList:true,subtree:true});
})();