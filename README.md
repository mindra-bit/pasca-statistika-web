# S2 Statistika Terapan FMIPA Unpad

Website profesional satu halaman untuk Program Magister Statistika Terapan FMIPA Universitas Padjadjaran, dilengkapi chatbot akademik berbasis knowledge base Kurikulum OBE 2026 dan data lulusan.

## Fitur Utama

- Landing page profesional dengan visual kampus/prodi, profil program, struktur kurikulum, profil lulusan, dan daftar mata kuliah.
- Tabel mata kuliah dengan pencarian dan filter kelompok: Wajib, Pilihan, Riset, Keterampilan Riset, dan Publikasi.
- Halaman silabus yang menampilkan deskripsi, bahan kajian, dan referensi dari PDF Kurikulum S2 Statistika 2026.
- Halaman lulusan dan tesis yang menampilkan ringkasan tahun lulus, tema riset, dan daftar judul tesis dari `Lulusan.xlsx`.
- Chatbot akademik yang menjawab berdasarkan `data/knowledge_chunks.json`, termasuk dokumen kurikulum dan ringkasan resmi SMUP Program Magister.
- Endpoint server `/api/chat` dengan mode retrieval lokal dan mode OpenAI API jika `OPENAI_API_KEY` tersedia.
- Sumber jawaban ditampilkan sebagai rujukan halaman agar chatbot tidak terasa seperti mengarang.
- Pertanyaan PMB Magister, biaya/BPP, jadwal pendaftaran, persyaratan, dan daya tampung dijawab dari halaman resmi SMUP Program Magister. Pertanyaan RPL yang sangat spesifik tetap perlu ditambah dari halaman/dokumen RPL resmi.

## Struktur Proyek

```text
.
├── assets/
│   ├── app.js
│   ├── campus-hero.jpg
│   ├── campus-profile.jpg
│   ├── logo-unpad.png
│   └── site.css
├── data/
│   ├── knowledge_base.md
│   ├── knowledge_chunks.json
│   ├── alumni.json
│   └── syllabus.json
├── scripts/
│   └── build-syllabus.mjs
├── KURIKULUM S2 STATISTIKA 2026.pdf
├── Lulusan.xlsx
├── index.html
├── server.js
├── package.json
└── .env.example
```

## Menjalankan Website

```bash
npm install
cp .env.example .env
npm run dev
```

Buka:

```text
http://127.0.0.1:3000
```

Untuk mode API, isi `.env`:

```bash
OPENAI_API_KEY=sk-proj-...
OPENAI_MODEL=gpt-4.1-mini
PORT=3000
```

Jika `OPENAI_API_KEY` kosong, chatbot tetap berjalan dengan retrieval lokal dari knowledge base.

## Memperbarui Silabus Dari PDF

Jika PDF kurikulum diperbarui, ganti file:

```text
KURIKULUM S2 STATISTIKA 2026.pdf
```

Lalu jalankan:

```bash
npm run build:syllabus
```

Perintah ini akan membuat ulang `data/syllabus.json` dan membangun ulang `data/knowledge_chunks.json` dari PDF 2026, chunk SMUP, chunk alumni, dan chunk silabus, sehingga halaman Silabus dan chatbot memakai sumber yang sama.

## Cara Kerja Chatbot

1. Pertanyaan pengguna diterima oleh `/api/chat`.
2. Server mencari potongan knowledge base yang paling relevan.
3. Jika OpenAI API aktif, konteks relevan dikirim ke model untuk disusun menjadi jawaban natural.
4. Jika OpenAI API tidak aktif, server mengembalikan jawaban retrieval lokal.
5. Jawaban selalu menyertakan sumber halaman ketika tersedia.

Untuk chatbot yang lebih mirip ChatGPT, aktifkan `OPENAI_API_KEY` di server. Model akan menyusun jawaban natural dari hasil pencarian dokumen, sementara aturan sistem tetap membatasi jawaban resmi prodi agar tidak mengarang informasi yang tidak ada di knowledge base.

## Menambah Pengetahuan Chatbot

Tambahkan dokumen resmi ke knowledge base sebelum meminta chatbot menjawab topik administratif seperti PMB, biaya, jadwal, RPL, beasiswa, kontak resmi, prosedur pendaftaran, atau data lulusan terbaru. Setelah dokumen ditambahkan dan diindeks ke `data/knowledge_chunks.json`, chatbot akan dapat mengambilnya sebagai sumber.

## Sumber SMUP Yang Sudah Masuk

- Halaman resmi SMUP Program Magister: `https://smup.unpad.ac.id/magister/`
- Daya tampung S2 Statistika Terapan Gelombang I TA 2026/2027: 30.
- Pendaftaran Gelombang I TA 2026/2027: 27 Maret 2026 sampai 13 Juli 2026.
- BPP Magister Statistika Terapan pada tabel BPP TA 2025/2026: Rp13.500.000 per semester.
- Prosedur pendaftaran dan persyaratan umum Magister SMUP.

## Agar Website Online dan Publik

Opsi praktis:

1. Deploy Node.js app ini ke Render, Railway, Fly.io, VPS, atau server kampus.
2. Set environment variable `OPENAI_API_KEY`, `OPENAI_MODEL`, dan `PORT` di dashboard hosting.
3. Jalankan command produksi `npm start`.
4. Arahkan domain/subdomain kampus ke URL hosting.
5. Pastikan API key hanya disimpan sebagai environment variable server, bukan di `index.html` atau `assets/app.js`.

Untuk produksi kampus, mode idealnya adalah chatbot RAG: semua dokumen resmi prodi, kurikulum, SMUP, RPL, kontak, kalender akademik, dan SOP diindeks sebagai knowledge base; model hanya dipakai untuk merangkai jawaban dan wajib menampilkan sumber.

## Deploy Gratis Sementara Dengan GitHub Pages

GitHub Pages bisa dipakai gratis untuk versi statis website ini. Cocok untuk publikasi awal karena `index.html`, `assets/`, dan `data/` dapat dilayani langsung tanpa server.

Langkah ringkas:

1. Buat repository GitHub public, misalnya `s2-statistika-terapan`.
2. Upload/push seluruh isi folder ini ke repository.
3. Buka `Settings > Pages`.
4. Pilih `Deploy from a branch`.
5. Pilih branch `main` dan folder `/root`.
6. Simpan, lalu tunggu URL `https://username.github.io/s2-statistika-terapan/` aktif.

Catatan penting:

- GitHub Pages hanya menjalankan file statis. `server.js`, `/api/chat`, dan OpenAI API tidak berjalan di sana.
- Chatbot tetap bisa menjawab dari `data/knowledge_chunks.json` dan `data/syllabus.json` dengan mode local static retrieval.
- Jangan pernah menaruh `OPENAI_API_KEY` di file frontend seperti `index.html` atau `assets/app.js`.
- Jika nanti ingin chatbot seperti ChatGPT, tetap perlu backend murah seperti Render, DigitalOcean App Platform, Railway, atau Cloudflare Workers.
