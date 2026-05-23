# Tailwind To Do List (Vanilla JS)

Aplikasi **To Do List** sederhana yang dibuat dengan **TailwindCSS** (hasil kompilasi ke `output.css`) dan **JavaScript vanilla**.

## Fitur
- Menambahkan task baru (input + tombol **Tambah**)
- Validasi: mencegah input kosong (menampilkan pesan peringatan)
- Menghapus task (tombol **Hapus**)
- Menandai task selesai (checkbox)
  - Jika dicentang, teks task akan diberi **coret** (`line-through`)

## Tech Stack
- HTML (`index.html`)
- JavaScript (`main.js`)
- TailwindCSS (`output.css`)
- `package.json` berisi dependency Tailwind CLI

## Struktur Project
- `index.html` — layout halaman + elemen DOM
- `main.js` — seluruh logic task (tambah/hapus/checkbox)
- `style.css` — (jika digunakan untuk development)
- `output.css` — hasil kompilasi style Tailwind
- `package.json` / `package-lock.json` — setup Tailwind

## Cara Menjalankan
Opsi 1 (paling mudah):
- kunjungi website `https://to-do-list-rho-ruby.vercel.app`.

Opsi 2 (jika ingin rebuild CSS):
- Jalankan script Tailwind dari `package.json` (jika tersedia di setup kamu).

## Catatan
- Task ditambahkan secara dinamis (tanpa backend / tanpa penyimpanan permanen). Jika halaman di-refresh, daftar akan kembali kosong.


