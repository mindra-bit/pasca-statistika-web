import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data', 'dosen.json'), 'utf8'));
const publicationsBySlug = JSON.parse(fs.readFileSync(path.join(root, 'data', 'publications.json'), 'utf8'));
const profilesDir = path.join(root, 'profil');
fs.mkdirSync(profilesDir, { recursive: true });

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 3).map((word) => word[0]).join('').toUpperCase();
const linkFor = (type, id) => {
  if (!id) return null;
  if (type === 'sinta') return `https://sinta.kemdiktisaintek.go.id/authors/profile/${id}`;
  if (type === 'scopus') return `https://www.scopus.com/authid/detail.uri?authorId=${id}`;
  return `https://scholar.google.com/citations?user=${id}&hl=id`;
};

const sharedCss = `
  :root{--navy:#102a43;--navy-2:#163d5c;--gold:#d6a928;--gold-soft:#f7e8b1;--green:#16735d;--ink:#243646;--muted:#617487;--paper:#fff;--wash:#f3f6f8;--line:#dce4e9;--shadow:0 18px 48px rgba(16,42,67,.12);--radius:20px}
  *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:linear-gradient(180deg,#eaf0f3 0,#f8fafb 42%,#eef3f5 100%);color:var(--ink);font:15px/1.65 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  a{color:inherit}.toolbar{position:sticky;top:0;z-index:50;background:rgba(16,42,67,.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.14)}
  .toolbar-inner{max-width:1180px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:10px 22px}.toolbar-brand{color:#fff;text-decoration:none;font-weight:800;letter-spacing:.02em}.toolbar-actions{display:flex;gap:8px;flex-wrap:wrap}.tool-button{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.09);color:#fff;border-radius:9px;padding:8px 12px;font:inherit;font-weight:700;cursor:pointer;text-decoration:none}.tool-button:hover{background:#fff;color:var(--navy)}
  .cv-shell{max-width:1120px;margin:30px auto 56px;background:var(--paper);box-shadow:var(--shadow);border-radius:var(--radius);overflow:hidden;border:1px solid rgba(16,42,67,.08)}
  .hero{position:relative;display:grid;grid-template-columns:1fr 250px;gap:44px;min-height:360px;padding:56px 62px;background:linear-gradient(125deg,var(--navy) 0%,#164666 62%,#16735d 100%);color:#fff;overflow:hidden}.hero:before{content:"";position:absolute;width:420px;height:420px;border:74px solid rgba(214,169,40,.12);border-radius:50%;right:-180px;top:-190px}.hero:after{content:"";position:absolute;inset:auto 0 0;height:5px;background:linear-gradient(90deg,var(--gold),#f2d36a,var(--gold))}.hero-copy,.portrait{position:relative;z-index:1}.eyebrow{margin:0 0 13px;color:#f3d46d;text-transform:uppercase;letter-spacing:.14em;font-size:.76rem;font-weight:900}.hero h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(2.35rem,5vw,4.4rem);line-height:1.03;margin:0 0 18px;letter-spacing:-.035em;max-width:760px}.hero-role{font-size:1.05rem;margin:0 0 24px;color:#e8f0f4}.hero-role strong{color:#fff}.hero-meta{display:flex;flex-wrap:wrap;gap:10px}.hero-meta span,.hero-meta a{display:inline-flex;align-items:center;min-height:34px;padding:6px 11px;border:1px solid rgba(255,255,255,.23);border-radius:999px;background:rgba(255,255,255,.09);color:#fff;text-decoration:none;font-size:.86rem}.portrait{align-self:center;justify-self:end;width:230px;height:276px;border-radius:18px;border:5px solid rgba(255,255,255,.9);box-shadow:0 22px 50px rgba(0,0,0,.28);overflow:hidden;background:#dbe5e9}.portrait img{width:100%;height:100%;object-fit:cover;object-position:center top}.portrait-placeholder{width:100%;height:100%;display:grid;place-items:center;background:linear-gradient(145deg,#e7eef1,#b9cbd3);color:var(--navy);font:800 4rem/1 Georgia,serif}
  .page-nav{display:flex;gap:4px;overflow-x:auto;padding:0 36px;background:#fff;border-bottom:1px solid var(--line);position:sticky;top:55px;z-index:30}.page-nav a{padding:17px 14px;color:var(--navy);font-weight:800;text-decoration:none;white-space:nowrap;border-bottom:3px solid transparent}.page-nav a:hover{border-bottom-color:var(--gold);color:var(--green)}
  .content{padding:18px 62px 56px}.section{padding:40px 0;border-bottom:1px solid var(--line)}.section:last-child{border-bottom:0}.section-head{display:grid;grid-template-columns:66px 1fr;gap:18px;align-items:center;margin-bottom:26px}.section-number{display:grid;place-items:center;width:54px;height:54px;border-radius:16px;background:var(--navy);color:#fff;font-family:Georgia,serif;font-size:1.25rem;box-shadow:inset 0 -4px 0 rgba(214,169,40,.85)}.section h2{font-family:Georgia,"Times New Roman",serif;color:var(--navy);font-size:2rem;line-height:1.15;margin:0 0 4px}.section-head p{margin:0;color:var(--muted)}
  .identity-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.identity-item{padding:16px 18px;border:1px solid var(--line);border-radius:14px;background:linear-gradient(180deg,#fff,#f8fafb)}.identity-label{display:block;margin-bottom:2px;color:var(--muted);font-size:.75rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.identity-value{font-weight:800;color:var(--navy);overflow-wrap:anywhere}.identity-value a{color:var(--green)}
  .role-card{display:grid;grid-template-columns:8px 1fr;overflow:hidden;border:1px solid var(--line);border-radius:16px;background:var(--wash)}.role-card:before{content:"";background:linear-gradient(var(--gold),var(--green))}.role-card div{padding:22px 24px}.role-card strong{display:block;font-family:Georgia,serif;font-size:1.4rem;color:var(--navy);margin-bottom:4px}.role-card p{margin:0;color:var(--muted)}
  .tag-grid{display:flex;flex-wrap:wrap;gap:10px}.tag{padding:10px 14px;border-radius:999px;background:#edf6f3;border:1px solid #cce6dd;color:#125b4b;font-weight:800}.note{margin:20px 0 0;padding:14px 16px;border-left:4px solid var(--gold);background:#fff9e7;color:#5f521e;border-radius:0 10px 10px 0}
  .timeline{display:grid;gap:12px}.education-card{display:grid;grid-template-columns:145px 1fr;gap:18px;padding:18px 20px;border:1px solid var(--line);border-radius:14px;background:#fff}.education-degree{font-weight:900;color:var(--green)}.education-card h3{margin:0 0 3px;color:var(--navy);font-size:1rem}.education-card p{margin:0;color:var(--muted)}
  .index-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.index-card{display:flex;flex-direction:column;min-height:178px;padding:20px;border-radius:16px;border:1px solid var(--line);background:linear-gradient(150deg,#fff,#f4f7f8);text-decoration:none;transition:.18s ease}.index-card:hover{transform:translateY(-3px);border-color:#aac4cf;box-shadow:0 12px 25px rgba(16,42,67,.1)}.index-card.disabled{opacity:.55;pointer-events:none}.index-name{font-size:.74rem;text-transform:uppercase;letter-spacing:.1em;font-weight:900;color:var(--green)}.index-id{margin:11px 0;color:var(--navy);font-size:1.08rem;font-weight:900;overflow-wrap:anywhere}.index-action{margin-top:auto;color:var(--muted);font-weight:700}.source-list{display:grid;gap:10px}.source-list a,.source-list span{display:flex;align-items:flex-start;gap:12px;padding:13px 15px;border-radius:12px;background:var(--wash);border:1px solid var(--line);text-decoration:none}.source-list a:hover{border-color:var(--green);color:var(--green)}.source-marker{flex:0 0 24px;height:24px;display:grid;place-items:center;border-radius:50%;background:var(--navy);color:#fff;font-size:.75rem;font-weight:900}
  .publication-tools{display:grid;grid-template-columns:minmax(230px,1fr) auto;gap:12px;align-items:center;margin-bottom:18px}.publication-search{width:100%;padding:12px 14px;border:1px solid #cbd8de;border-radius:11px;font:inherit;outline:none}.publication-search:focus{border-color:var(--green);box-shadow:0 0 0 3px rgba(22,115,93,.12)}.publication-years{display:flex;gap:7px;flex-wrap:wrap}.publication-filter{border:1px solid #cad7dd;background:#fff;color:var(--navy);border-radius:999px;padding:7px 11px;font:inherit;font-size:.78rem;font-weight:900;cursor:pointer}.publication-filter.active,.publication-filter:hover{background:var(--navy);border-color:var(--navy);color:#fff}.publication-status{margin:0 0 12px;color:var(--muted);font-size:.84rem;font-weight:700}.publication-list{display:grid;gap:12px}.publication-card{display:grid;grid-template-columns:82px minmax(0,1fr) auto;gap:18px;align-items:start;padding:19px 20px;border:1px solid var(--line);border-radius:15px;background:linear-gradient(145deg,#fff,#f7f9fa)}.publication-card[hidden]{display:none}.publication-year{display:grid;place-items:center;min-height:58px;border-radius:13px;background:var(--navy);color:#fff;font:800 1.05rem/1 Georgia,serif;box-shadow:inset 0 -4px 0 var(--gold)}.publication-card h3{margin:0 0 7px;color:var(--navy);font:700 1.08rem/1.35 Georgia,serif}.publication-venue{margin:0 0 9px;color:var(--green);font-weight:900}.publication-meta{display:flex;gap:7px;flex-wrap:wrap}.publication-meta span{padding:4px 8px;border-radius:999px;background:#eaf1f4;color:#496073;font-size:.72rem;font-weight:800}.publication-note{margin:9px 0 0;color:#795f13;font-size:.78rem}.publication-link{align-self:center;padding:8px 10px;border:1px solid #cbd8de;border-radius:9px;color:var(--navy);text-decoration:none;font-size:.78rem;font-weight:900;white-space:nowrap}.publication-link:hover{background:var(--navy);color:#fff}.publication-empty{display:none;padding:20px;text-align:center;border:1px dashed #b8c9d1;border-radius:12px;color:var(--muted)}
  .profile-footer{display:flex;justify-content:space-between;gap:20px;padding:22px 62px;background:var(--navy);color:#dce8ee;font-size:.82rem}.profile-footer p{margin:0}.profile-footer a{color:#f2d36a}.dense .section{padding:25px 0}.dense .content{padding-top:8px}.dense .hero{min-height:300px;padding-top:38px;padding-bottom:38px}
  @media(max-width:760px){.toolbar-inner{padding-inline:14px}.toolbar-brand{font-size:.82rem}.hero{grid-template-columns:1fr;padding:38px 25px;gap:26px}.portrait{justify-self:start;width:178px;height:214px}.page-nav{padding-inline:12px;top:54px}.content{padding:8px 24px 38px}.section{padding:32px 0}.identity-grid,.index-grid{grid-template-columns:1fr}.section-head{grid-template-columns:48px 1fr}.section-number{width:42px;height:42px;border-radius:12px}.section h2{font-size:1.55rem}.education-card{grid-template-columns:1fr;gap:4px}.publication-tools{grid-template-columns:1fr}.publication-card{grid-template-columns:58px 1fr}.publication-link{grid-column:1/-1;justify-self:start}.profile-footer{padding:20px 24px;display:block}.profile-footer p+p{margin-top:7px}}
  @media print{body{background:#fff;font-size:11pt}.toolbar,.page-nav,.publication-tools{display:none!important}.cv-shell{margin:0;max-width:none;border:0;border-radius:0;box-shadow:none}.hero{min-height:250px;padding:35px 45px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.portrait{width:165px;height:198px}.content{padding:0 42px 30px}.section{padding:24px 0}.profile-footer{padding:18px 42px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.index-card{min-height:145px}.tool-button{display:none}.publication-card,.education-card,.role-card{break-inside:avoid}}
`;

function pageFor(person) {
  const selectedPublications = publicationsBySlug[person.slug] || [];
  const photoData = person.photo
    ? `data:image/png;base64,${fs.readFileSync(path.join(root, 'assets', 'dosen', person.photo)).toString('base64')}`
    : null;
  const portrait = person.photo
    ? `<img src="${photoData}" alt="Foto ${esc(person.name)}">`
    : `<div class="portrait-placeholder" role="img" aria-label="Monogram ${esc(person.name)}">${esc(initials(person.name))}</div>`;
  const email = person.email ? `<a href="mailto:${esc(person.email)}">${esc(person.email)}</a>` : 'Belum dipublikasikan';
  const platformCards = [
    ['SINTA', person.sintaId, linkFor('sinta', person.sintaId)],
    ['Scopus', person.scopusId, linkFor('scopus', person.scopusId)],
    ['Google Scholar', person.scholarId, linkFor('scholar', person.scholarId)]
  ].map(([name, id, url]) => url
    ? `<a class="index-card" href="${url}" target="_blank" rel="noopener"><span class="index-name">${name}</span><span class="index-id">${esc(id)}</span><span class="index-action">Buka profil ↗</span></a>`
    : `<span class="index-card disabled"><span class="index-name">${name}</span><span class="index-id">Belum tersedia</span><span class="index-action">Belum ditemukan pada sumber publik</span></span>`
  ).join('');
  const publicationSourceUrl = person.sintaId
    ? `${linkFor('sinta', person.sintaId)}/?view=scopus`
    : linkFor('scopus', person.scopusId);
  const publicationYears = [...new Set(selectedPublications.map((item) => item.year))].sort((a, b) => b - a);
  const publicationFilters = ['<button class="publication-filter active" type="button" data-year="all">Semua</button>', ...publicationYears.map((year) => `<button class="publication-filter" type="button" data-year="${year}">${year}</button>`)].join('');
  const publicationCards = selectedPublications.map((item) => `<article class="publication-card" data-year="${item.year}" data-search="${esc(`${item.title} ${item.venue} ${item.quartile}`.toLowerCase())}"><span class="publication-year">${item.year}</span><div><h3>${esc(item.title)}</h3><p class="publication-venue">${esc(item.venue)}</p><div class="publication-meta"><span>${esc(item.quartile)}</span><span>Urutan penulis ${esc(item.authorOrder)}</span><span>Penulis pertama ${esc(item.creator)}</span><span>${item.citations} sitasi</span></div>${item.note ? `<p class="publication-note">${esc(item.note)}</p>` : ''}</div>${publicationSourceUrl ? `<a class="publication-link" href="${publicationSourceUrl}" target="_blank" rel="noopener">Verifikasi ↗</a>` : ''}</article>`).join('');
  const sourceLinks = [
    [person.officialUrl, 'Profil resmi Departemen/Program Studi Universitas Padjadjaran'],
    [linkFor('sinta', person.sintaId), person.sintaId ? `Profil SINTA ID ${person.sintaId}` : null],
    [linkFor('scopus', person.scopusId), person.scopusId ? `Profil penulis Scopus ID ${person.scopusId}` : null],
    [linkFor('scholar', person.scholarId), person.scholarId ? 'Profil Google Scholar' : null]
  ].filter(([, label]) => label).map(([url, label], index) => url
    ? `<a href="${url}" target="_blank" rel="noopener"><span class="source-marker">${index + 1}</span><span>${esc(label)}</span></a>`
    : `<span><span class="source-marker">${index + 1}</span><span>${esc(label)}</span></span>`
  ).join('');
  const education = person.education.map((item) => `<article class="education-card"><div class="education-degree">${esc(item.degree)}</div><div><h3>${esc(item.institution)}</h3><p>${esc(item.field)}</p></div></article>`).join('');
  const tags = person.expertise.map((item) => `<span class="tag">${esc(item)}</span>`).join('');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Profil akademik ${esc(person.name)}, ${esc(person.unit)}.">
  <title>${esc(person.name)} · Statistika FMIPA Unpad</title>
  <style>${sharedCss}</style>
</head>
<body>
  <div class="toolbar">
    <div class="toolbar-inner">
      <a class="toolbar-brand" href="../index.html">← Direktori Dosen Statistika Unpad</a>
      <div class="toolbar-actions">
        <button class="tool-button" type="button" id="densityButton" aria-pressed="false">Tampilan ringkas</button>
        <button class="tool-button" type="button" id="downloadButton">Unduh HTML</button>
        <button class="tool-button" type="button" onclick="window.print()">Cetak / PDF</button>
      </div>
    </div>
  </div>
  <main class="cv-shell" id="cvDocument">
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Profil Akademik · Universitas Padjadjaran</p>
        <h1>${esc(person.displayName)}</h1>
        <p class="hero-role"><strong>${esc(person.role)}</strong><br>${esc(person.unit)}</p>
        <div class="hero-meta">
          <span>NIP ${esc(person.nip)}</span>
          <span>Pendidikan ${esc(person.degree)}</span>
          ${person.email ? `<a href="mailto:${esc(person.email)}">${esc(person.email)}</a>` : '<span>Email belum dipublikasikan</span>'}
        </div>
      </div>
      <div class="portrait">${portrait}</div>
    </header>
    <nav class="page-nav" aria-label="Navigasi profil">
      <a href="#profil">Profil</a><a href="#jabatan">Jabatan</a><a href="#keahlian">Keahlian</a><a href="#pendidikan">Pendidikan</a><a href="#indeks">Indeks Akademik</a><a href="#publikasi">Publikasi</a><a href="#sumber">Sumber</a>
    </nav>
    <div class="content">
      <section class="section" id="profil">
        <div class="section-head"><span class="section-number">01</span><div><h2>Profil</h2><p>Identitas akademik dan kontak institusi.</p></div></div>
        <div class="identity-grid">
          <div class="identity-item"><span class="identity-label">Nama lengkap</span><span class="identity-value">${esc(person.displayName)}</span></div>
          <div class="identity-item"><span class="identity-label">NIP</span><span class="identity-value">${esc(person.nip)}</span></div>
          <div class="identity-item"><span class="identity-label">NIDN</span><span class="identity-value">${esc(person.nidn || 'Belum tersedia')}</span></div>
          <div class="identity-item"><span class="identity-label">Email</span><span class="identity-value">${email}</span></div>
        </div>
      </section>
      <section class="section" id="jabatan">
        <div class="section-head"><span class="section-number">02</span><div><h2>Jabatan &amp; Afiliasi</h2><p>Peran utama dalam lingkungan akademik.</p></div></div>
        <div class="role-card"><div><strong>${esc(person.role)}</strong><p>${esc(person.unit)}</p></div></div>
      </section>
      <section class="section" id="keahlian">
        <div class="section-head"><span class="section-number">03</span><div><h2>Bidang Keahlian</h2><p>Ringkasan fokus riset berdasarkan profil dan rekam publikasi akademik.</p></div></div>
        <div class="tag-grid">${tags}</div>
        <p class="note">Bidang keahlian merupakan ringkasan tematik; daftar publikasi paling mutakhir tersedia melalui SINTA, Scopus, dan Google Scholar.</p>
      </section>
      <section class="section" id="pendidikan">
        <div class="section-head"><span class="section-number">04</span><div><h2>Riwayat Pendidikan</h2><p>Jenjang pendidikan yang dapat diverifikasi dari sumber publik.</p></div></div>
        <div class="timeline">${education}</div>
      </section>
      <section class="section" id="indeks">
        <div class="section-head"><span class="section-number">05</span><div><h2>Publikasi &amp; Indeks Akademik</h2><p>Tautan langsung ke daftar karya pada pangkalan data akademik.</p></div></div>
        <div class="index-grid">${platformCards}</div>
      </section>
      <section class="section" id="publikasi">
        <div class="section-head"><span class="section-number">06</span><div><h2>Publikasi Terpilih dari Scopus</h2><p>${selectedPublications.length} publikasi yang dapat dicocokkan melalui profil publik SINTA–Scopus.</p></div></div>
        <div class="publication-tools"><input class="publication-search" id="publicationSearch" type="search" placeholder="Cari judul atau jurnal…" aria-label="Cari publikasi"><div class="publication-years" role="group" aria-label="Filter tahun publikasi">${publicationFilters}</div></div>
        <p class="publication-status" id="publicationStatus">Menampilkan ${selectedPublications.length} publikasi</p>
        <div class="publication-list" id="publicationList">${publicationCards}</div>
        <div class="publication-empty" id="publicationEmpty">Tidak ada publikasi yang cocok dengan pencarian.</div>
        <p class="note">Kuartil dan jumlah sitasi mengikuti tampilan publik SINTA–Scopus pada saat verifikasi dan dapat berubah. Daftar ini bersifat terpilih, bukan keseluruhan rekam publikasi.</p>
      </section>
      <section class="section" id="sumber">
        <div class="section-head"><span class="section-number">07</span><div><h2>Sumber &amp; Verifikasi</h2><p>Sumber publik yang digunakan untuk menyusun profil ini.</p></div></div>
        <div class="source-list">${sourceLinks}</div>
        <p class="note">Data diperiksa silang pada 1 Agustus 2026. Afiliasi, jabatan, indeks, dan pendidikan dapat berubah; gunakan tautan sumber untuk status terbaru.</p>
      </section>
    </div>
    <footer class="profile-footer"><p>Departemen Statistika · FMIPA Universitas Padjadjaran</p><p><a href="../index.html">Kembali ke direktori</a></p></footer>
  </main>
  <script>
    document.getElementById('densityButton').addEventListener('click', (event) => {
      document.body.classList.toggle('dense');
      const active = document.body.classList.contains('dense');
      event.currentTarget.setAttribute('aria-pressed', String(active));
      event.currentTarget.textContent = active ? 'Tampilan nyaman' : 'Tampilan ringkas';
    });
    document.getElementById('downloadButton').addEventListener('click', () => {
      const blob = new Blob(['<!doctype html>\\n' + document.documentElement.outerHTML], {type:'text/html;charset=utf-8'});
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = '${esc(person.slug)}.html';
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(anchor.href), 1000);
    });
    const publicationSearch = document.getElementById('publicationSearch');
    const publicationItems = [...document.querySelectorAll('.publication-card')];
    const publicationStatus = document.getElementById('publicationStatus');
    const publicationEmpty = document.getElementById('publicationEmpty');
    let publicationYear = 'all';
    function updatePublications() {
      const query = publicationSearch.value.trim().toLowerCase();
      let visible = 0;
      publicationItems.forEach((item) => {
        const matchesText = !query || item.dataset.search.includes(query);
        const matchesYear = publicationYear === 'all' || item.dataset.year === publicationYear;
        item.hidden = !(matchesText && matchesYear);
        if (!item.hidden) visible += 1;
      });
      publicationStatus.textContent = 'Menampilkan ' + visible + ' dari ' + publicationItems.length + ' publikasi';
      publicationEmpty.style.display = visible ? 'none' : 'block';
    }
    publicationSearch.addEventListener('input', updatePublications);
    document.querySelectorAll('.publication-filter').forEach((button) => button.addEventListener('click', () => {
      document.querySelector('.publication-filter.active').classList.remove('active');
      button.classList.add('active');
      publicationYear = button.dataset.year;
      updatePublications();
    }));
  </script>
</body>
</html>`;
}

function indexPage() {
  const cards = data.map((person) => {
    const publicationCount = (publicationsBySlug[person.slug] || []).length;
    const portrait = person.photo
      ? `<img src="assets/dosen/${esc(person.photo)}" alt="Foto ${esc(person.name)}">`
      : `<span class="card-placeholder">${esc(initials(person.name))}</span>`;
    const type = person.role.toLowerCase().includes('aktuaria') ? 'aktuaria' : 'statistika';
    const tags = [type, person.role.toLowerCase().includes('profesor') ? 'profesor' : '', /kepala|ketua|wakil dekan/i.test(person.role) ? 'pimpinan' : ''].filter(Boolean).join(' ');
    return `<article class="person-card" data-name="${esc(`${person.name} ${person.displayName} ${person.expertise.join(' ')}`.toLowerCase())}" data-tags="${tags}">
      <a class="photo-link" href="profil/${person.slug}.html">${portrait}</a>
      <div class="person-content"><p class="person-kicker">${esc(person.role)}</p><h2><a href="profil/${person.slug}.html">${esc(person.displayName)}</a></h2><p class="person-focus">${person.expertise.slice(0, 3).map(esc).join(' · ')}</p><div class="person-ids"><span>${esc(person.degree)}</span>${person.sintaId ? `<span>SINTA ${esc(person.sintaId)}</span>` : '<span>SINTA —</span>'}<span>${publicationCount} publikasi</span></div><a class="profile-button" href="profil/${person.slug}.html">Lihat profil lengkap <span>→</span></a></div>
    </article>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Direktori profil akademik dosen Departemen Statistika FMIPA Universitas Padjadjaran.">
  <title>Profil Dosen Statistika FMIPA Unpad</title>
  <style>
    :root{--navy:#102a43;--navy2:#164666;--gold:#d6a928;--green:#16735d;--ink:#243646;--muted:#647789;--line:#dce4e9;--wash:#f2f6f7;--shadow:0 16px 38px rgba(16,42,67,.11)}*{box-sizing:border-box}body{margin:0;background:#f4f7f8;color:var(--ink);font:15px/1.6 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}a{color:inherit}.topbar{background:var(--navy);color:#fff}.topbar-inner{max-width:1220px;margin:auto;display:flex;align-items:center;gap:14px;padding:13px 24px}.topbar img{width:42px;height:42px;object-fit:contain}.topbar strong{display:block}.topbar span{display:block;color:#c8d8e1;font-size:.78rem}.hero{background:linear-gradient(120deg,var(--navy),var(--navy2) 65%,var(--green));color:#fff;position:relative;overflow:hidden}.hero:after{content:"";position:absolute;width:480px;height:480px;right:-220px;top:-290px;border:80px solid rgba(214,169,40,.14);border-radius:50%}.hero-inner{max-width:1220px;margin:auto;padding:74px 24px 76px;position:relative;z-index:1}.eyebrow{color:#f1d166;text-transform:uppercase;letter-spacing:.14em;font-size:.76rem;font-weight:900}.hero h1{max-width:800px;margin:10px 0 17px;font:700 clamp(2.5rem,6vw,5rem)/1.02 Georgia,serif;letter-spacing:-.04em}.hero p{max-width:760px;color:#dfebf0;font-size:1.05rem}.metrics{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.metric{min-width:120px;padding:10px 14px;border:1px solid rgba(255,255,255,.2);border-radius:12px;background:rgba(255,255,255,.08)}.metric strong{display:block;font-size:1.35rem}.metric span{font-size:.78rem;color:#d6e3e8}.directory{max-width:1220px;margin:-26px auto 60px;padding:0 24px;position:relative;z-index:3}.controls{background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px;box-shadow:var(--shadow);display:grid;grid-template-columns:minmax(220px,1fr) auto;gap:16px;align-items:center}.search{width:100%;border:1px solid #cdd9df;border-radius:11px;padding:12px 14px;font:inherit;outline:none}.search:focus{border-color:var(--green);box-shadow:0 0 0 3px rgba(22,115,93,.13)}.filters{display:flex;gap:7px;flex-wrap:wrap}.filter{border:1px solid #cdd9df;background:#fff;color:var(--navy);border-radius:999px;padding:8px 12px;font:inherit;font-size:.82rem;font-weight:800;cursor:pointer}.filter.active,.filter:hover{background:var(--navy);border-color:var(--navy);color:#fff}.result-meta{margin:22px 2px 14px;color:var(--muted);font-weight:700}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.person-card{display:grid;grid-template-rows:220px 1fr;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(16,42,67,.07);transition:.2s ease}.person-card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}.person-card[hidden]{display:none}.photo-link{display:block;background:linear-gradient(145deg,#dce7eb,#adbec8);overflow:hidden}.photo-link img{width:100%;height:100%;object-fit:cover;object-position:center top;transition:.25s ease}.person-card:hover img{transform:scale(1.025)}.card-placeholder{width:100%;height:100%;display:grid;place-items:center;color:var(--navy);font:700 3.4rem/1 Georgia,serif}.person-content{display:flex;flex-direction:column;padding:20px}.person-kicker{margin:0 0 5px;color:var(--green);font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.person-content h2{margin:0 0 9px;color:var(--navy);font:700 1.35rem/1.2 Georgia,serif}.person-content h2 a{text-decoration:none}.person-focus{margin:0 0 16px;color:var(--muted);font-size:.88rem}.person-ids{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto}.person-ids span{padding:4px 8px;border-radius:999px;background:var(--wash);font-size:.72rem;font-weight:800;color:#526779}.profile-button{display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding-top:14px;border-top:1px solid var(--line);color:var(--navy);text-decoration:none;font-weight:900}.profile-button span{color:var(--gold);font-size:1.2rem}.empty{display:none;padding:42px;text-align:center;background:#fff;border:1px dashed #bacbd3;border-radius:16px;color:var(--muted)}.footer{background:var(--navy);color:#d7e4e9}.footer-inner{max-width:1220px;margin:auto;padding:28px 24px;display:flex;justify-content:space-between;gap:20px}.footer p{margin:0}.footer a{color:#f1d166}@media(max-width:900px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.controls{grid-template-columns:1fr}}@media(max-width:580px){.hero-inner{padding-top:50px}.directory{padding:0 14px}.grid{grid-template-columns:1fr}.person-card{grid-template-rows:250px 1fr}.topbar-inner{padding-inline:16px}.footer-inner{display:block}.footer p+p{margin-top:8px}}@media print{.controls{display:none}.directory{margin:20px auto}.grid{grid-template-columns:repeat(2,1fr)}.person-card{break-inside:avoid;box-shadow:none}.hero-inner{padding:35px 24px}.footer{display:none}}
  </style>
</head>
<body>
  <header class="topbar"><div class="topbar-inner"><img src="assets/logo-unpad.png" alt="Logo Universitas Padjadjaran"><div><strong>Departemen Statistika</strong><span>FMIPA Universitas Padjadjaran</span></div></div></header>
  <section class="hero"><div class="hero-inner"><p class="eyebrow">Direktori Akademik</p><h1>Profil Dosen Statistika FMIPA Unpad</h1><p>Direktori statis berisi identitas, afiliasi, bidang keahlian, pendidikan, dan publikasi terpilih yang ditelusuri melalui SINTA–Scopus.</p><div class="metrics"><div class="metric"><strong>26</strong><span>profil dosen</span></div><div class="metric"><strong>${data.filter((p) => p.degree === 'S-3').length}</strong><span>pendidikan S-3</span></div><div class="metric"><strong>${Object.values(publicationsBySlug).flat().length}</strong><span>publikasi terpilih</span></div><div class="metric"><strong>${data.filter((p) => p.scholarId).length}</strong><span>Google Scholar</span></div></div></div></section>
  <main class="directory"><section class="controls" aria-label="Pencarian dan penyaringan"><input class="search" id="search" type="search" placeholder="Cari nama atau bidang keahlian…" aria-label="Cari dosen"><div class="filters" role="group" aria-label="Filter kategori"><button class="filter active" type="button" data-filter="all">Semua</button><button class="filter" type="button" data-filter="statistika">Statistika</button><button class="filter" type="button" data-filter="aktuaria">Ilmu Aktuaria</button><button class="filter" type="button" data-filter="profesor">Profesor</button><button class="filter" type="button" data-filter="pimpinan">Pimpinan</button></div></section><p class="result-meta" id="resultMeta">Menampilkan 26 profil</p><section class="grid" id="grid">${cards}</section><div class="empty" id="empty">Tidak ada profil yang cocok dengan pencarian.</div></main>
  <footer class="footer"><div class="footer-inner"><p>Departemen Statistika · FMIPA Universitas Padjadjaran</p><p>Data diperiksa silang pada 1 Agustus 2026 · <a href="https://statistics.unpad.ac.id/dosen/" target="_blank" rel="noopener">Sumber resmi</a></p></div></footer>
  <script>
    const cards = [...document.querySelectorAll('.person-card')];
    const search = document.getElementById('search');
    const meta = document.getElementById('resultMeta');
    const empty = document.getElementById('empty');
    let activeFilter = 'all';
    function update(){const query=search.value.trim().toLowerCase();let visible=0;cards.forEach(card=>{const matchesText=!query||card.dataset.name.includes(query);const matchesFilter=activeFilter==='all'||card.dataset.tags.split(' ').includes(activeFilter);card.hidden=!(matchesText&&matchesFilter);if(!card.hidden)visible++;});meta.textContent='Menampilkan '+visible+' dari '+cards.length+' profil';empty.style.display=visible?'none':'block';}
    search.addEventListener('input',update);
    document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');button.classList.add('active');activeFilter=button.dataset.filter;update();}));
  </script>
</body>
</html>`;
}

for (const person of data) {
  if (!person.useDetailedTemplate) {
    fs.writeFileSync(path.join(profilesDir, `${person.slug}.html`), pageFor(person));
  }
}
const mindraScopusEntries = (publicationsBySlug['i-gede-nyoman-mindra-jaya'] || [])
  .map((item) => `      {year:${item.year}, title:${JSON.stringify(item.title)}, journal:${JSON.stringify(item.venue)}, issue:${JSON.stringify(`Urutan penulis ${item.authorOrder} · ${item.citations} sitasi · rekam publik SINTA–Scopus`)}, rank:${JSON.stringify(item.quartile)}},`)
  .join('\n');
const mindraSource = fs.readFileSync(path.resolve(root, '..', 'upload', 'Mindra.html'), 'utf8')
  .replace('<!doctype html>', '<!DOCTYPE html>')
  .replace('</style>', '.mt-16{margin-top:16px}.mt-18{margin-top:18px}.mt-22{margin-top:22px}.subheading{margin:30px 0 14px;color:var(--navy-900);font-size:18px}.subheading.first{margin-top:0}</style>')
  .replace('class="toolbar" aria-label=', 'class="toolbar" role="toolbar" aria-label=')
  .replace('class="contact-row" aria-label=', 'class="contact-row" role="group" aria-label=')
  .replace('class="metric-grid" aria-label=', 'class="metric-grid" role="group" aria-label=')
  .replace('class="expertise-wrap" style="margin-top:18px" aria-label=', 'class="expertise-wrap mt-18" role="group" aria-label=')
  .replace('class="filters" aria-label=', 'class="filters" role="search" aria-label=')
  .replace('+62 818 0931 9977', '+62&nbsp;818&nbsp;0931&nbsp;9977')
  .replace('Buku & HKI', 'Buku &amp; HKI')
  .replace('Jabatan & Peran Akademik', 'Jabatan &amp; Peran Akademik')
  .replace('Penelitian & Pengabdian', 'Penelitian &amp; Pengabdian')
  .replace('Buku & Kekayaan Intelektual', 'Buku &amp; Kekayaan Intelektual')
  .replace('HKI & Perangkat Lunak', 'HKI &amp; Perangkat Lunak')
  .replace('Presentasi Ilmiah & Kontribusi Kebijakan', 'Presentasi Ilmiah &amp; Kontribusi Kebijakan')
  .replace('Waktu & Tempat', 'Waktu &amp; Tempat')
  .replace('class="card-grid" style="margin-top:16px"', 'class="card-grid mt-16"')
  .replace('<h3 style="margin:30px 0 14px;color:var(--navy-900);font-size:18px">Pengabdian kepada Masyarakat</h3>', '<h3 class="subheading">Pengabdian kepada Masyarakat</h3>')
  .replace('<h3 style="margin:0 0 14px;color:var(--navy-900);font-size:18px">Karya Buku</h3>', '<h3 class="subheading first">Karya Buku</h3>')
  .replace('<h3 style="margin:30px 0 14px;color:var(--navy-900);font-size:18px">HKI &amp; Perangkat Lunak</h3>', '<h3 class="subheading">HKI &amp; Perangkat Lunak</h3>')
  .replace('class="lead-card" style="margin-top:22px"', 'class="lead-card mt-22"')
  .replace('<div class="metric"><strong>36</strong><span>Artikel jurnal tercatat 2021–2024</span></div>', '<div class="metric"><strong>41</strong><span>Publikasi terpilih 2021–2026</span></div>')
  .replace('<p>Daftar 36 artikel jurnal yang tercantum dalam CV sumber untuk periode 2021–2024.</p>', '<p>Daftar 36 artikel dalam CV sumber ditambah 5 publikasi terbaru yang diverifikasi melalui rekam publik SINTA–Scopus.</p>')
  .replace('    const publications = [', `    const publications = [\n${mindraScopusEntries}`)
  .replace("      {year:'2019', title:'Tiebout Prize — Best Paper', detail:'Western Regional Science Association, untuk artikel tentang identifikasi klaster spatiotemporal.'}\n      {year:'2019', title:'Tiebout Prize — Best Paper', detail:'Western Regional Science Association, untuk artikel tentang identifikasi klaster spatiotemporal.'}", "      {year:'2019', title:'Tiebout Prize — Best Paper', detail:'Western Regional Science Association, untuk artikel tentang identifikasi klaster spatiotemporal.'}")
  .replace(
    '<button class="tool-button primary" type="button" onclick="window.print()" title="Cetak atau simpan sebagai PDF">',
    '<button class="tool-button" type="button" onclick="downloadCurrentHtml()" title="Unduh CV sebagai HTML"><span>Unduh HTML</span></button><button class="tool-button primary" type="button" onclick="window.print()" title="Cetak atau simpan sebagai PDF">'
  )
  .replace('</body>', `<script>
    function downloadCurrentHtml() {
      const blob = new Blob(['<!DOCTYPE html>\\n' + document.documentElement.outerHTML], {type:'text/html;charset=utf-8'});
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = 'i-gede-nyoman-mindra-jaya.html';
      anchor.click();
      setTimeout(() => URL.revokeObjectURL(anchor.href), 1000);
    }
  </script></body>`);
fs.writeFileSync(path.join(profilesDir, 'i-gede-nyoman-mindra-jaya.html'), mindraSource);
fs.writeFileSync(path.join(root, 'index.html'), indexPage());
console.log(`Built ${data.length} profiles and directory index.`);
