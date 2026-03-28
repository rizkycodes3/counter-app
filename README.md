# counter-app

Sebuah aplikasi penghitung sederhana namun sangat responsif, dibangun dengan HTML5, CSS3 (Grid & Flexbox), dan Vanilla JavaScript. Project ini mendemonstrasikan manipulasi DOM dasar dan implementasi media queries untuk berbagai ukuran layar.

## Fitur

- Antarmuka Responsif: Layout berubah secara dinamis dari tampilan mobile (stack) hingga desktop (grid 3-kolom).
- Interaktivitas Real-time: Update nilai angka secara instan tanpa perlu reload halaman.
- Feedback Visual: Tombol memiliki efek :active (skala mengecil) untuk memberikan kesan klik yang nyata.
- Aksi Cepat: Tersedia tombol untuk Increment, Decrement, dan Reset ke nilai nol.

## Teknologi yang Digunakan

- HTML5: Struktur semantik menggunakan tag main, h1, dan button.
- CSS3:
  - Flexbox: Digunakan untuk memposisikan kontainer utama di tengah layar.
  - CSS Grid: Digunakan untuk mengatur tata letak tombol dan teks secara presisi pada berbagai resolusi.
  - Media Queries: Optimalisasi tampilan untuk Tablet (768px), Desktop Medium (1024px), hingga Desktop Large (1280px).
- JavaScript (ES6+): Logika aplikasi menggunakan event listeners dan manipulasi textContent.

## Preview Layout

- Mobile: Tombol tersusun vertikal untuk memudahkan akses jempol.
- Desktop: Tombol berjejer secara horizontal dalam satu baris (grid 3-kolom).

> Catatan Developer: Project ini difokuskan pada pemahaman dasar manipulasi Document Object Model (DOM) dan penggunaan CSS Grid untuk tata letak yang kompleks.
