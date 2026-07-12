# Persiapan Akreditasi 2027 - Login Apps Script

Folder ini berisi template `Code.gs` dan `Index.html` untuk membuat halaman Apps Script yang meminta email dan password sebelum dashboard Persiapan Akreditasi 2027 terbuka.

## Prinsip keamanan

- Password tidak dimasukkan ke website GitHub Pages.
- Password tidak disimpan sebagai teks biasa.
- Password hanya digunakan satu kali untuk membuat hash di `Script Properties`.
- Setelah hash tersimpan, kode dikembalikan ke placeholder sebelum deploy.

## Cara pasang di Apps Script

1. Buka project Apps Script Persiapan Akreditasi 2027.
2. Ganti isi `Code.gs` dengan isi file `Code.gs` di folder ini.
3. Ganti isi `Index.html` dengan isi file `Index.html` di folder ini.
4. Di `Code.gs`, pada fungsi `SET_LOGIN_AKREDITASI_2027`, ubah:

   ```js
   const temporaryPassword = "GANTI_DENGAN_PASSWORD_KHUSUS";
   ```

   menjadi password akses khusus yang akan dipakai admin.

5. Klik **Run** untuk fungsi `SET_LOGIN_AKREDITASI_2027`.
6. Setelah berhasil, kembalikan baris password ke:

   ```js
   const temporaryPassword = "GANTI_DENGAN_PASSWORD_KHUSUS";
   ```

7. Klik **Run** untuk `CEK_LOGIN_AKREDITASI_2027` dan pastikan log menampilkan:

   - Email admin: sudah ada
   - Hash password: sudah ada

8. Deploy ulang Apps Script:

   - **Deploy**
   - **Manage deployments**
   - Pilih deployment aktif
   - **Edit**
   - **Version: New version**
   - **Deploy**

9. Buka URL Web App. Halaman akan meminta email dan password.

## Menonaktifkan semua sesi lama

Jika password diganti atau ada akses yang ingin diputus, jalankan:

```js
RESET_SESI_AKREDITASI_2027()
```

Semua browser yang sebelumnya login akan diminta login ulang.

## Menaruh konten dashboard lama

Jika Apps Script Persiapan Akreditasi 2027 sudah memiliki dashboard lama, pindahkan HTML konten lama ke bagian ini di `Index.html`:

```html
<div class="protected-slot">
  ...
</div>
```

Konten di area tersebut hanya terlihat setelah login berhasil.
