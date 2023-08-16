# chartAdminDashboard
#index.html
1.	Tampilkan Halaman:
Buka halaman HTML menggunakan browser seperti biasa.
2.	Judul Halaman:
Di atas halaman, Anda akan melihat judul "Admin Dashboard" yang ditampilkan secara tengah.
3.	Grafik Penjualan (Sales Chart):
Di baris pertama, Anda akan melihat dua buah kolom yang masing-masing memuat grafik. Ini disusun dalam format 50:50 menggunakan Bootstrap Grid System.
Pada kolom pertama, ada kartu (card) yang memiliki judul "Sales Chart".
Di dalam kartu, ada elemen <canvas> dengan id "salesChart". Ini akan menjadi tempat di mana grafik penjualan akan ditampilkan.
4.	Grafik Pendaftaran Pengguna (User Registrations Chart):
Di kolom kedua, ada kartu (card) yang memiliki judul "User Registrations".
Di dalam kartu ini juga ada elemen <canvas> dengan id "userChart". Ini akan menjadi tempat di mana grafik pendaftaran pengguna akan ditampilkan.
5.	Menghubungkan Chart.js:
Di dalam elemen <head>, ada baris <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>, yang menghubungkan library Chart.js dari alamat CDN.
6.	Menghubungkan Script JavaScript:
Di akhir halaman, sebelum tag penutup </body>, ada baris <script src="script.js"></script>, yang menghubungkan file JavaScript "script.js" dari direktori lokal.
7.	Tampilan Grafik:
Grafik akan muncul pada halaman tergantung pada logika yang diimplementasikan dalam "script.js".
Grafik akan ditampilkan menggunakan data yang diolah oleh Chart.js dan tampilan yang diatur melalui JavaScript.
8.	Tutup Halaman:
Setelah selesai menggunakan halaman, Anda bisa menutup tab browser atau mengakhiri sesi.
Grafik yang ditampilkan di halaman ini bergantung pada data yang dimasukkan dan diolah melalui JavaScript. Anda perlu mengimplementasikan logika JavaScript yang sesuai untuk mengisi dan menampilkan data pada grafik dengan benar.

#Script.js
   
1.	Mendefinisikan Data Grafik:
Anda mendefinisikan dua set data untuk grafik yang berbeda: salesData dan userRegistrationData.
labels adalah label sumbu X untuk setiap titik data pada grafik.
datasets adalah array yang berisi informasi tentang setiap dataset pada grafik, termasuk label, data, warna latar belakang, warna garis tepi, dan lebar garis tepi.
2.	Mengambil Elemen Canvas:
Anda menggunakan getElementById untuk mengambil elemen <canvas> dengan ID yang sesuai untuk setiap grafik: salesChart dan userChart.
3.	Membuat Grafik dengan Chart.js:
Anda menggunakan library Chart.js untuk membuat grafik dengan konfigurasi yang telah Anda tentukan.
Pertama, Anda membuat grafik batang (bar) untuk data penjualan (salesData).
Anda menggunakan new Chart() dan memberikan elemen canvas dan konfigurasi sebagai parameter.
Anda mengatur tipe grafik sebagai "bar" dan memberikan data dan opsi yang sesuai.
Kemudian, Anda membuat grafik garis (line) untuk data pendaftaran pengguna (userRegistrationData).
Anda menggunakan new Chart() lagi dan memberikan elemen canvas dan konfigurasi sebagai parameter.
Anda mengatur tipe grafik sebagai "line" dan memberikan data dan opsi yang sesuai.
4.	Konfigurasi Grafik:
Anda mengatur konfigurasi untuk masing-masing grafik dengan menggunakan properti options.
Dalam hal ini, Anda mengatur skala sumbu Y dimulai dari nol dengan properti beginAtZero.
5.	Tampilan Grafik:

Setelah kode ini dijalankan, grafik penjualan dan grafik pendaftaran pengguna akan ditampilkan di halaman sesuai dengan data dan konfigurasi yang telah Anda tentukan.
6.	Memanggil Skrip JavaScript:
Skrip JavaScript ini disimpan dalam file "script.js" dan dihubungkan pada halaman utama menggunakan tag <script> di bagian akhir elemen <body>.
Kita memerlukan library Chart.js untuk menjalankan skrip ini dengan benar. Pastikan Anda telah menghubungkan Chart.js dengan benar pada halaman HTML Anda menggunakan tag <script> yang benar.
