(()=>{
  const MAP_QUERY='Departemen Statistika FMIPA Universitas Padjadjaran';
  const PHOTO='assets/visit-us-building.svg?v=20260726-photo-final';
  const mapUrl='https://www.google.com/maps?q='+encodeURIComponent(MAP_QUERY)+'&output=embed';
  const directionUrl='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(MAP_QUERY);

  const copy={
    id:{kicker:'KUNJUNGI KAMI',title:'Peta & Rute ke Departemen Statistika FMIPA Unpad',lead:'Temukan lokasi Departemen Statistika FMIPA Universitas Padjadjaran, Kampus Jatinangor.',name:'Departemen Statistika FMIPA Unpad',addressLabel:'Alamat',address:'Jl. Raya Bandung–Sumedang Km. 21, Jatinangor, Kabupaten Sumedang, Jawa Barat 45363.',route:'Buka Rute',website:'Website Departemen',accessTitle:'Akses Kampus',accessText:'Mudah dijangkau melalui kawasan Jatinangor dan jaringan jalan menuju Kampus Unpad.',transportTitle:'Transportasi',transportText:'Kendaraan pribadi, transportasi daring, angkutan lokal, dan layanan transportasi kampus.',academicTitle:'Lingkungan Akademik',academicText:'Berada di kawasan FMIPA Universitas Padjadjaran, Kampus Jatinangor.',photoAlt:'Gedung Departemen Statistika FMIPA Universitas Padjadjaran'},
    en:{kicker:'VISIT US',title:'Map & Directions to the Department of Statistics, FMIPA Unpad',lead:'Find the Department of Statistics at Universitas Padjadjaran’s Jatinangor Campus.',name:'Department of Statistics, FMIPA Unpad',addressLabel:'Address',address:'Jl. Raya Bandung–Sumedang Km. 21, Jatinangor, Sumedang Regency, West Java 45363.',route:'Get Directions',website:'Department Website',accessTitle:'Campus Access',accessText:'Conveniently accessible through Jatinangor and the road network leading to the Unpad campus.',transportTitle:'Transportation',transportText:'Private vehicles, ride-hailing services, local public transport, and campus transportation.',academicTitle:'Academic Environment',academicText:'Located within the FMIPA academic precinct at Universitas Padjadjaran’s Jatinangor Campus.',photoAlt:'Department of Statistics building, Universitas Padjadjaran'}
  };

  const style=document.createElement('style');
  style.id='visit-us-compact-style';
  style.textContent=`
    #visit-us{padding:42px 0 38px;background:linear-gradient(180deg,#f8fbfc 0%,#eef8f4 100%);color:#173f5f}
    #visit-us .vu-wrap{width:min(1080px,calc(100% - 36px));margin:auto}
    #visit-us .vu-head{text-align:center;max-width:760px;margin:0 auto 22px}
    #visit-us .vu-kicker{margin:0 0 6px;color:#08745a;font-size:.72rem;font-weight:900;letter-spacing:.14em}
    #visit-us h2{margin:0;color:#173f5f;font-size:clamp(1.55rem,3vw,2.35rem);line-height:1.12;letter-spacing:-.025em}
    #visit-us .vu-lead{margin:10px auto 0;color:#60758a;font-size:.94rem;line-height:1.55}
    #visit-us .vu-main{display:grid;grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr);gap:18px;align-items:stretch}
    #visit-us .vu-card,#visit-us .vu-map{overflow:hidden;border:1px solid rgba(23,63,95,.11);border-radius:20px;background:#fff;box-shadow:0 13px 34px rgba(23,63,95,.08)}
    #visit-us .vu-photo{display:block;width:100%;height:210px;object-fit:cover;background:#e9f0f2}
    #visit-us .vu-info{padding:18px 20px 20px}
    #visit-us .vu-info h3{margin:0 0 11px;color:#173f5f;font-size:1.16rem;line-height:1.25}
    #visit-us .vu-address{margin:0;color:#50677d;font-size:.9rem;line-height:1.55}
    #visit-us .vu-address strong{display:block;margin-bottom:3px;color:#50677d}
    #visit-us .vu-actions{display:flex;flex-wrap:wrap;gap:9px;margin-top:15px}
    #visit-us .vu-btn{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:0 15px;border:1px solid #08745a;border-radius:999px;text-decoration:none;font-size:.86rem;font-weight:850;transition:.18s ease}
    #visit-us .vu-btn-primary{background:#08745a;color:#fff}.vu-btn-secondary{background:#fff;color:#075b49}
    #visit-us .vu-btn:hover{transform:translateY(-1px);box-shadow:0 7px 16px rgba(8,116,90,.16)}
    #visit-us .vu-map iframe{display:block;width:100%;height:100%;min-height:348px;border:0}
    #visit-us .vu-mini{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:15px}
    #visit-us .vu-mini article{padding:14px 16px;border:1px solid rgba(23,63,95,.1);border-radius:16px;background:#fff;box-shadow:0 9px 23px rgba(23,63,95,.06)}
    #visit-us .vu-mini h3{margin:0 0 5px;color:#173f5f;font-size:.93rem}
    #visit-us .vu-mini p{margin:0;color:#60758a;font-size:.82rem;line-height:1.48}
    @media(max-width:820px){#visit-us .vu-main{grid-template-columns:1fr}#visit-us .vu-photo{height:240px}#visit-us .vu-map iframe{min-height:300px}}
    @media(max-width:620px){#visit-us{padding:34px 0 30px}#visit-us .vu-wrap{width:min(100% - 22px,1080px)}#visit-us .vu-mini{grid-template-columns:1fr}#visit-us .vu-photo{height:190px}#visit-us .vu-map iframe{min-height:270px}}
  `;
  document.head.appendChild(style);

  const section=document.createElement('section');
  section.id='visit-us';
  section.innerHTML=`<div class="vu-wrap">
    <header class="vu-head"><p class="vu-kicker" data-vu="kicker"></p><h2 data-vu="title"></h2><p class="vu-lead" data-vu="lead"></p></header>
    <div class="vu-main">
      <article class="vu-card"><img class="vu-photo" src="${PHOTO}" alt="" loading="lazy" decoding="async"><div class="vu-info"><h3 data-vu="name"></h3><p class="vu-address"><strong data-vu="addressLabel"></strong><span data-vu="address"></span></p><div class="vu-actions"><a class="vu-btn vu-btn-primary" href="${directionUrl}" target="_blank" rel="noopener" data-vu="route"></a><a class="vu-btn vu-btn-secondary" href="https://statistics.unpad.ac.id" target="_blank" rel="noopener" data-vu="website"></a></div></div></article>
      <div class="vu-map"><iframe src="${mapUrl}" title="Google Maps — Departemen Statistika FMIPA Unpad" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
    <div class="vu-mini"><article><h3 data-vu="accessTitle"></h3><p data-vu="accessText"></p></article><article><h3 data-vu="transportTitle"></h3><p data-vu="transportText"></p></article><article><h3 data-vu="academicTitle"></h3><p data-vu="academicText"></p></article></div>
  </div>`;

  const footer=document.querySelector('footer');
  if(footer) footer.before(section); else document.body.appendChild(section);

  function currentLang(){
    const active=document.querySelector('.language-switch button.active,[data-lang][aria-pressed="true"]');
    return active?.dataset.lang==='en'?'en':'id';
  }
  function render(){
    const lang=currentLang(),dict=copy[lang];
    section.querySelectorAll('[data-vu]').forEach(el=>{el.textContent=dict[el.dataset.vu]||''});
    const img=section.querySelector('.vu-photo');
    img.alt=dict.photoAlt;
  }
  render();
  document.addEventListener('click',e=>{if(e.target.closest('[data-lang]')) setTimeout(render,0)});
  new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();