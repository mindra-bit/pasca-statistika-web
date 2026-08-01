PROFIL DOSEN STATISTIKA FMIPA UNIVERSITAS PADJADJARAN
=====================================================

Isi paket
---------
- index.html                 Halaman direktori utama.
- profil/                    26 halaman profil individual.
- assets/                    Logo dan foto resmi yang digunakan direktori.
- data/dosen.json            Data terstruktur untuk pembaruan berikutnya.
- data/publications.json     115 publikasi terpilih hasil verifikasi publik.
- scripts/build-profiles.mjs Skrip pembangun ulang halaman HTML.

Cara membuka
------------
1. Ekstrak seluruh isi ZIP ke satu folder.
2. Klik dua kali index.html.
3. Pilih nama dosen untuk membuka profil individual.

Seluruh halaman dapat dibuka langsung tanpa server dan tanpa instalasi.
Pada setiap profil tersedia tombol "Unduh HTML" dan "Cetak / PDF".
Foto pada halaman profil individual telah ditanam langsung ke dalam HTML,
sehingga file hasil unduhan tetap menampilkan foto tanpa folder tambahan.
Bagian publikasi dapat dicari berdasarkan judul/jurnal dan disaring menurut
tahun. Setiap entri mencantumkan tahun, sumber publikasi, kuartil, urutan
penulis, penulis pertama, dan jumlah sitasi yang tampak saat verifikasi.

Cara memasang pada GitHub Pages
-------------------------------
Salin isi folder ini ke lokasi yang diinginkan di repositori situs, lalu
commit dan push. Jika ditempatkan pada folder "dosen", alamat direktori
menjadi /dosen/index.html.

Catatan data
------------
Data diperiksa silang pada 1 Agustus 2026 dari halaman resmi Departemen/
Program Studi Universitas Padjadjaran dan tab Scopus Analysis pada profil
SINTA publik. Daftar berisi maksimal lima publikasi terpilih per dosen,
bukan keseluruhan rekam publikasi.
Status jabatan, pendidikan, serta indeks dapat berubah. Tautan sumber pada
setiap profil disediakan untuk verifikasi terbaru.

Kuartil dan jumlah sitasi bersifat dinamis. Empat profil memuat kurang dari
lima judul karena hanya rekam tersebut yang dapat dicocokkan secara publik;
data yang belum dapat diverifikasi tidak diisi secara spekulatif.

Untuk dosen yang belum memiliki foto resmi publik, halaman menggunakan
monogram profesional. Data yang belum ditemukan tidak diisi secara spekulatif.
