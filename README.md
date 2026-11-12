# Ophtal Education

Landing page edukasi kesehatan mata berbahasa Indonesia. HTML, CSS, dan JavaScript tanpa dependensi runtime; Node.js 20+ untuk server lokal dan build.

## Lokal

```sh
npm run dev
```

Server berjalan pada port 3000. Gunakan `PORT=3001 npm run dev` untuk port lain.

```sh
npm run build
npm run preview
```

Build statis tersedia di `dist/`. Preview juga menggunakan port 3000; hentikan server dev sebelum menjalankan preview.

## Vercel

Hubungkan repository melalui dashboard Vercel setelah perubahan disetujui dan di-push. Pilih Framework Preset **Other**, Build Command `npm run build`, dan Output Directory `dist`. Tidak memerlukan environment variable.

## Lingkup preview

- Landing page responsif, navigasi, FAQ, pencarian dan filter topik.
- Enam contoh kartu materi; tiga ditampilkan pada tampilan awal.
- Contoh carousel dengan tombol, panah keyboard, dan gestur geser.
- Contoh animasi respons pupil terhadap intensitas cahaya.
- Ilustrasi SVG lokal, tanpa ketergantungan gambar atau font eksternal.

Nama, tulisan, dan materi masih berupa contoh untuk ditinjau dokter sebelum dipublikasikan. Upload HTML, pengelolaan konten, autentikasi admin, dan pembuatan carousel dengan ChatGPT belum diimplementasikan. Jangan memasukkan API key ke kode frontend. HTML unggahan nantinya perlu diisolasi melalui iframe sandbox dan penyimpanan yang sesuai.

## Berkas

- `index.html`: struktur, metadata, dan konten halaman.
- `styles.css`: desain responsif dan aksesibilitas dasar.
- `app.js`: daftar contoh materi, pencarian, filter, dan pembaca materi.
- `scripts/`: build statis dan server lokal.
