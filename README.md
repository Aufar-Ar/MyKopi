# MyKopi — Prototype V3

Versi ini menambahkan fitur dynamic quiz, reset, dan riwayat hasil sementara.

## Fitur Baru
1. Dynamic Question Bank
   - Pertanyaan diambil secara acak dari bank pertanyaan.
   - Setiap sesi quiz menampilkan 6 pertanyaan dari total 16 pertanyaan.
   - Konteks pertanyaan tetap mengarah ke atribut rasa kopi:
     fruity, complex, bold, sweet, smooth, dan chocolatey.

2. Reset Quiz Tanpa Refresh
   - Pengguna bisa menekan tombol "Reset Quiz".
   - Quiz kembali ke awal tanpa perlu refresh browser.
   - Pertanyaan akan diacak ulang.

3. Riwayat Hasil Sementara
   - Ketika pengguna sudah mendapat hasil lalu menekan reset, hasil sebelumnya masuk ke bagian riwayat.
   - Riwayat ini hanya tersimpan di memori JavaScript selama halaman masih terbuka.
   - Jika halaman di-refresh, riwayat hilang.

4. Matched Coffee Dinamis
   - Setelah quiz selesai, rekomendasi kopi berubah sesuai persona pengguna.
   - Katalog umum tetap tersedia untuk pembeli yang tidak ingin mengikuti quiz.

## Struktur File
- index.html
- style.css
- script.js
- README.md

## Cara Membuka
1. Extract file ZIP.
2. Buka folder `ai_coffee_match_prototype_v3`.
3. Klik dua kali file `index.html`.
4. Jalankan quiz.
5. Klik reset untuk mencoba pertanyaan baru dan melihat riwayat hasil sebelumnya.

## Catatan Konsep Technopreneur
Fitur ini memperkuat value proposition karena pengalaman pengguna tidak monoton.
Pertanyaan dapat berubah, tetapi scoring system tetap mengarahkan pengguna ke rekomendasi kopi yang sesuai.
