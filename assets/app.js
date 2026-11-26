// ==============================================================
// KONFIGURASI
// Ganti nilai di bawah dengan URL Web App GAS Anda.
// Buka Google Apps Script > Deploy > Manage Deployments > salin URL.
// ==============================================================
const GAS_URL = 'https://script.google.com/macros/s/AKfycbydy_-RvqxTSt7-MRQ8e84QN13YKQDYskFG6g5FJNIPT6ZkF7lDuQPJSXKl2yvCkY7E-w/exec';

// ==============================================================
// DWIBAHASA (ID/EN)
// ==============================================================
const I18N = {
  id: {
    header_info_aria: 'Tentang SIMPRODI',
    theme_toggle_aria: 'Ganti tema terang/gelap',
    about_eyebrow: 'Tentang Aplikasi Ini',
    about_expand: 'Sistem Informasi Program Studi Teknik Informatika',
    about_desc: 'Dikembangkan oleh Program Studi Teknik Informatika sebagai wadah informasi capaian akademik mahasiswa, alat bantu pemilihan peminatan studi, dan galeri karya mahasiswa.',
    btn_tutup: 'Tutup',
    home_eyebrow: 'Program Studi Teknik Informatika',
    home_headline_l1: 'Pilih jalanmu.', home_headline_l2: 'Rekam jejakmu.',
    home_sub: 'Pantau capaian akademikmu, temukan peminatan yang sesuai, atau jelajahi karya mahasiswa lainnya.',
    home_card1_title: 'Portofolio Akademik',
    home_card1_desc: 'Cek prestasi, MBKM, dan sertifikasi yang sudah tercatat di program studi.',
    home_card1_btn: 'Cek Sekarang',
    home_card2_title: 'Tes Peminatan',
    home_card2_desc: 'Jawab 7 pertanyaan singkat untuk tahu apakah kamu lebih cocok ke SSD atau AISD.',
    home_card2_btn: 'Mulai Tes',
    search_placeholder: 'Cari berdasarkan NIM atau nama...',
    search_btn: 'Cari', search_btn_loading: 'Mencari...',
    search_hint: 'Masukkan NIM lengkap atau sebagian nama mahasiswa (minimal 3 karakter).',
    search_min_chars_msg: 'Masukkan minimal 3 karakter untuk melakukan pencarian.',
    search_nim_more_digits: 'Masukkan digit NIM yang lebih banyak atau cari menggunakan nama.',
    search_conn_error: 'Tidak dapat terhubung ke server. Periksa koneksi internet dan coba lagi.',
    search_result_found: 'Ditemukan {count} mahasiswa untuk kata kunci "{query}".',
    search_result_toomany: 'Menampilkan 30 dari {total} hasil. Perlengkap kata kunci untuk mempersempit pencarian.',
    detail_title: 'Detail Portofolio Mahasiswa',
    detail_sub: 'Rincian prestasi, MBKM, dan sertifikasi yang tercatat untuk mahasiswa ini.',
    follow_nim_btn: 'Ikuti NIM Ini',
    follow_btn_active: 'Diikuti ✓',
    follow_nim_section_title: 'NIM yang Kamu Ikuti',
    follow_remove: 'Berhenti mengikuti',
    follow_nim_not_found: 'Data untuk NIM ini tidak ditemukan (mungkin sudah tidak ada catatan tersimpan).',
    label_mbkm: 'MBKM', label_prestasi: 'Prestasi', label_sertifikasi: 'Sertifikasi',
    info_title_mbkm: 'Apa itu MBKM?', info_title_prestasi: 'Apa itu Prestasi?', info_title_sertifikasi: 'Apa itu Sertifikasi?',
    mbkm_title: 'Merdeka Belajar Kampus Merdeka',
    mbkm_body: 'MBKM mencakup berbagai kegiatan pembelajaran di luar program studi yang diakui sebagai bagian dari perkuliahan, seperti magang industri, pertukaran pelajar, riset bersama dosen, kewirausahaan, dan pengabdian kepada masyarakat. Data direkap setiap semester berdasarkan laporan yang telah diverifikasi oleh program studi.',
    prestasi_title: 'Prestasi Akademik Mahasiswa',
    prestasi_body: 'Prestasi yang tercantum di sini adalah capaian pada kompetisi atau kegiatan akademik yang telah diverifikasi dan direkap setiap akhir semester. Termasuk di antaranya kejuaraan ilmiah, olimpiade, dan kompetisi bidang keilmuan yang diselenggarakan oleh institusi resmi di tingkat lokal, nasional, maupun internasional.',
    sertifikasi_title: 'Sertifikasi Kompetensi',
    sertifikasi_body: 'Sertifikasi yang tercantum merupakan sertifikat kompetensi yang diperoleh melalui program studi atau lembaga sertifikasi resmi dan terakreditasi, seperti BNSP serta lembaga internasional yang diakui. Data ini mencerminkan kompetensi terverifikasi yang relevan dengan bidang studi dan profesi.',
    mbkm_empty: 'Belum ada data MBKM yang tercatat.',
    prestasi_empty: 'Belum ada data prestasi yang tercatat.',
    sertifikasi_empty: 'Belum ada data sertifikasi yang tercatat.',
    lapor_title: 'Ada data yang perlu dikoreksi?',
    lapor_desc: 'Hubungi program studi lewat WhatsApp agar bisa segera diperbaiki.',
    btn_lapor_kesalahan: 'Laporkan via WhatsApp',
    wa_koreksi_msg: '[SIMPRODI | Koreksi Data Portofolio]\nNama: {nama}\nNIM: {nim}\nKategori (MBKM/Prestasi/Sertifikasi): \nSemester: \nData yang salah: \nSeharusnya: ',
    wa_notfound_msg: '[SIMPRODI | Data Portofolio Belum Tercatat]\nKata kunci pencarian: {q}\nNama: \nNIM: \nKategori (MBKM/Prestasi/Sertifikasi): \nSemester: \nKeterangan: ',
    wa_karya_msg: '[SIMPRODI | Laporan Karya Showcase]\nNama karya: {nama}\nKode karya: {kode}\nAlasan laporan: ',
    notfound_title: 'Data kamu seharusnya tercatat di sini?',
    notfound_desc: 'Jika datamu belum tercatat, hubungi program studi lewat WhatsApp agar dapat segera ditindaklanjuti.',
    quiz_result_title: 'Hasil Tes Peminatan',
    quiz_result_sub: 'Rekomendasi peminatan berdasarkan jawabanmu.',
    quiz_disclaimer: 'Hasil ini berdasarkan preferensi yang kamu pilih dan bersifat indikatif. Konsultasikan dengan dosen wali atau pembimbing akademik untuk keputusan final pemilihan peminatan.',
    btn_ulangi_tes: 'Ulangi Tes',
    btn_pertanyaan_sebelumnya: 'Sebelumnya',
    quiz_step_label: 'Pertanyaan {n} dari {total}',
    quiz_score_line: '{score} dari {total} jawabanmu mengarah ke peminatan ini.',
    quiz_answer_unit: 'jawaban',
    quiz_careers_label: 'Prospek Karier', quiz_courses_label: 'Mata Kuliah Peminatan',
    memuat_tes: 'Memuat data tes...',

    home_card3_title: 'Showcase Mahasiswa',
    home_card3_desc: 'Lihat aplikasi, web, dan game hasil karya mahasiswa.',
    home_card3_btn: 'Jelajahi Karya',
    home_card4_title: 'Statistik Prodi',
    home_card4_desc: 'Lihat sekilas capaian kolektif mahasiswa kami dalam angka.',
    home_card4_btn: 'Lihat Statistik',
    home_card5_title: 'Buku Panduan Mahasiswa',
    home_card5_desc: 'Panduan perjalanan akademik dari semester 1 sampai lulus, termasuk peminatan, MBKM, dan tugas akhir.',
    home_card5_btn: 'Lihat Panduan',
    panduan_title: 'Buku Panduan Mahasiswa',
    panduan_subtitle: 'Gambaran perjalanan akademik program studi dari semester 1 sampai lulus, semester demi semester.',
    panduan_semester_label: 'Semester',
    panduan_sks_unit: 'SKS',
    home_pengumuman_label: 'Pengumuman',
    scn_sub: 'Karya Mahasiswa Teknik Informatika',
    sc_tab_all: 'Semua',
    sc_latest_title: 'Karya Terbaru',
    sc_popular_title: 'Paling Disukai',
    sc_all_title: 'Semua Karya',
    sc_results_title: 'Hasil',
    sc_filter_tek_label: 'Teknologi',
    sc_filter_dosen_label: 'Dosen Pembimbing',
    sc_filter_semua: 'Semua',
    sc_team_count: 'Tim {n} mahasiswa',
    sc_btn_like: 'Suka',
    sc_btn_share: 'Bagikan',
    sc_link_copied: 'Tautan karya disalin.',
    sc_stat_likes: 'Suka',
    sc_stat_tech: 'Teknologi',
    sc_badge_demo: 'Demo tersedia',
    sc_preview_title: 'Pratinjau',
    sc_about_title: 'Tentang Karya',
    sc_info_title: 'Informasi',
    sc_code_label: 'Kode Karya',
    sc_dosen_role: 'Pembimbing {n}',
    sc_link_download_sub: 'Tersedia di toko aplikasi resmi',
    sc_link_demo_sub: 'Buka versi demo di tab baru',
    sc_link_source_sub: 'Repositori kode tim',
    sc_more_pem: 'Karya Lain di Peminatan {p}',
    sc_more_jenis: 'Karya {j} Lainnya',
    sc_report_q: 'Ada yang salah dengan karya ini?',
    dosen_karya_link: 'Karya bimbingan ({n})',
    scn_explore: 'Jelajahi',
    scn_status: 'Cek Status',
    scn_submit: 'Kirim Karya',
    home_pengumuman_link: 'Selengkapnya',
    panduan_tab_journey: 'Perjalanan Semester',
    panduan_tab_glossary: 'Istilah Penting',
    panduan_search_placeholder: 'Cari istilah, misal KRS atau IPK',
    panduan_cat_label: 'Kategori',
    panduan_cat_all: 'Semua istilah',
    panduan_term_count: '{n} istilah',
    panduan_search_empty: 'Tidak ada istilah yang cocok dengan "{q}".',
    stat_title: 'Capaian Kolektif Program Studi',
    stat_subtitle: 'Ratusan kegiatan, prestasi, dan karya lahir dari mahasiswa kami, dirangkum dalam angka.',
    stat_disclaimer_title: 'Data masih bersifat sementara',
    stat_disclaimer_desc: 'Angka di atas dihimpun dari data yang sudah tercatat di sistem kami dan terus bertambah seiring data baru diimpor admin, jadi mungkin belum mencakup seluruh capaian mahasiswa. Kalau ada capaianmu (atau temanmu) yang belum tercantum atau datanya kurang sesuai, laporkan lewat halaman Portofolio Akademik.',
    stat_label_mahasiswa: 'Mahasiswa Tercatat',
    stat_label_mbkm: 'Kegiatan MBKM',
    stat_label_prestasi: 'Kegiatan Prestasi',
    stat_label_sertifikasi: 'Sertifikasi Profesional',
    stat_label_showcase: 'Karya Showcase',
    stat_error: 'Gagal memuat statistik. Coba lagi beberapa saat.',
    home_card6_title: 'Dosen Pembimbing',
    home_card6_desc: 'Cari dosen pembimbing lomba, kegiatan lain, atau tugas akhir, lengkap dengan status kepegawaian dan profil riset SINTA mereka.',
    home_card6_btn: 'Lihat Dosen',
    dosen_title: 'Dosen Pembimbing',
    dosen_subtitle: 'Cari dosen program studi yang bisa jadi pembimbing lomba, kegiatan lain, atau tugas akhir.',
    dosen_badge_tetap: 'Dosen Tetap Program Studi',
    dosen_badge_ta1: 'Dosen Pembimbing 1',
    dosen_badge_ta2: 'Dosen Pembimbing 2',
    dosen_sinta_link: 'SINTA',
    dosen_error: 'Gagal memuat daftar dosen. Coba lagi beberapa saat.',
    dosen_empty: 'Data dosen belum tersedia.',
    dosen_filter_empty: 'Tidak ada dosen yang sesuai dengan filter ini.',
    sc_search_placeholder: 'Cari nama karya, kreator, atau teknologi...',
    sc_filter_btn: 'Filter',
    sc_filter_peminatan_label: 'Peminatan',
    sc_filter_status_label: 'Status',
    sc_filter_status_publish_label: 'Status Publish',
    sc_filter_sumber_label: 'Sumber Karya',
    sc_filter_semua_peminatan: 'Semua Peminatan',
    sc_filter_semua_status: 'Semua Status',
    sc_filter_semua_status_publish: 'Semua',
    sc_filter_semua_sumber: 'Semua Sumber',
    sc_btn_terapkan: 'Terapkan',
    sc_peminatan_tanpa: 'Tanpa Peminatan',
    sc_status_sudah: 'Sudah Deploy', sc_status_belum: 'Belum Deploy',
    sc_status_publish_sudah: 'Sudah Publish',
    sc_sort_label: 'Urutkan',
    sc_sort_abjad: 'Abjad (A-Z)', sc_sort_populer: 'Terpopuler', sc_sort_baru: 'Baru Ditambahkan',
    sc_result_count: '{n} karya ditemukan',
    sc_empty: 'Belum ada karya yang tayang untuk filter ini.',
    sc_loading: 'Memuat karya...',
    sc_error: 'Gagal memuat showcase. Coba lagi sebentar.',

    sc_creators_label: 'Tim Pembuat',
    sc_sumber_tugas_label: 'Sumber Karya',
    sc_semester_label: 'Semester Dikerjakan',
    sc_dosen_label: 'Dosen Pembimbing',
    sc_kontak_label: 'Kontak Tim',
    sc_tech_label: 'Teknologi',
    sc_btn_demo: 'Demo',
    sc_btn_download: 'Unduh',
    sc_btn_source: 'Source Code',
    sc_report_link: 'Laporkan via WhatsApp',
    sc_detail_not_found: 'Karya tidak ditemukan atau belum disetujui.',

    sc_form_title: 'Tambahkan Karyamu ke Showcase',
    sc_resubmit_title: 'Edit & Kirim Ulang Karya',
    sc_form_sub: 'Isi form di bawah untuk menampilkan aplikasi, web, atau game buatanmu ke galeri publik.',
    sc_form_intro: 'Karya kamu akan ditinjau admin sebelum tayang. Setelah mengirim, kamu akan mendapat kode unik. Simpan baik-baik karena kode ini dipakai untuk mengecek status, dan nantinya jadi tautan tetap karyamu.',
    sc_sec_info: 'Informasi Program',
    sc_req_legend: 'wajib diisi, sisanya opsional',
    sc_label_nama: 'Nama Program',
    sc_label_jenis: 'Jenis',
    sc_label_peminatan: 'Peminatan',
    sc_label_deskripsi: 'Deskripsi',
    sc_placeholder_deskripsi: 'Ceritakan singkat apa yang dilakukan aplikasi/karya ini...',
    sc_label_teknologi: 'Teknologi',
    sc_placeholder_teknologi: 'Flutter, TensorFlow Lite, Firebase',
    sc_hint_koma: 'ketik lalu tekan koma atau Enter, opsional',
    sc_sec_kreator: 'Anggota Tim / Kreator',
    sc_placeholder_nim: 'NIM',
    sc_placeholder_nama: 'Nama lengkap',
    sc_btn_tambah_anggota: 'Tambah Anggota',
    sc_btn_tambah_dosen: 'Tambah Dosen',
    sc_sec_tautan: 'Tautan',
    sc_label_status_deploy: 'Status Deploy',
    sc_opt_belum_deploy: 'Belum Deploy', sc_opt_sudah_deploy: 'Sudah Deploy',
    sc_label_demo: 'Link Demo',
    sc_placeholder_demo: 'https://play.google.com/... atau link uji coba lainnya',
    sc_hint_demo: 'Link demo bisa diisi setelah status diubah menjadi "Sudah Deploy" di atas.',
    sc_label_status_publish: 'Status Publish',
    sc_opt_belum_publish: 'Belum Publish', sc_opt_sudah_publish: 'Sudah Publish',
    sc_hint_status_publish: '"Sudah Publish" artinya karya sudah listing/tersedia di Play Store, App Store, atau tempat resmi lainnya (beda dari Status Deploy di atas, yang artinya sudah bisa dicoba lewat demo).',
    sc_label_download: 'Link Download',
    sc_placeholder_download: 'https://play.google.com/store/apps/... atau link toko resmi lainnya',
    sc_label_source: 'Link Source Code',
    sc_placeholder_source: 'https://github.com/username/repo',
    sc_opt: 'opsional',
    sc_label_trailer: 'Video Trailer',
    sc_placeholder_trailer: 'https://youtu.be/... atau https://www.youtube.com/watch?v=...',
    sc_tutorial_trailer_title: 'Cara mengambil link trailer',
    sc_tutorial_trailer_1: 'Upload video ke YouTube (boleh diatur "Unlisted", tidak harus publik penuh)',
    sc_tutorial_trailer_2: 'Buka videonya, klik tombol Share/Bagikan, salin link yang muncul',
    sc_tutorial_trailer_3: 'Tempel link tersebut di sini, nanti otomatis tampil sebagai video di halaman karyamu',
    sc_sec_tampilan: 'Tampilan Karya',
    sc_label_ss: 'Link Folder Screenshot',
    sc_placeholder_ss: 'https://drive.google.com/drive/folders/...',
    sc_hint_ss: 'Buat folder (mis. di Google Drive) berisi screenshot karyamu, atur akses jadi "siapa saja yang punya link dapat melihat", lalu tempel link foldernya di sini. Minimal 1 gambar untuk Jenis selain Mobile, minimal 2 gambar (1 tampilan Home, 1 fitur terbaik) untuk Jenis Mobile.',
    sc_sec_akademik: 'Informasi Akademik',
    sc_label_sumber: 'Sumber Karya',
    sc_opt_matkul: 'Mata Kuliah', sc_opt_ta: 'Tugas Akhir', sc_opt_kompetisi: 'Kompetisi',
    sc_label_matkul: 'Nama Mata Kuliah',
    sc_label_kompetisi: 'Nama Kompetisi',
    sc_placeholder_matkul: 'mis. Pemrograman Mobile',
    sc_placeholder_kompetisi: 'mis. Gemastik 2026',
    sc_label_semester: 'Semester Dikerjakan',
    sc_placeholder_semester: 'mis. Genap 2025/2026',
    sc_label_dosen: 'Dosen Pembimbing',
    sc_placeholder_dosen: 'Pilih dosen...',
    sc_label_kontak: 'Kontak Tim',
    sc_placeholder_kontak: 'nama@email.com',
    sc_hint_kontak: 'Gunakan alamat email aktif tim, supaya pengunjung bisa menghubungi lewat link yang muncul di halaman detail.',
    sc_sec_konfirmasi: 'Konfirmasi',
    sc_consent1: 'Saya menyatakan karya ini benar dibuat oleh mahasiswa yang tercantum di atas.',
    sc_consent2: 'Saya menyatakan seluruh data yang saya masukkan (nama, deskripsi, video) tidak mengandung unsur SARA (suku, agama, ras, dan antargolongan) atau konten yang menyinggung/melanggar hukum.',
    sc_btn_submit: 'Kirim untuk Ditinjau',
    sc_submitting: 'Mengirim...',
    sc_success_title: 'Karya berhasil dikirim!',
    sc_resubmit_success_title: 'Karya berhasil dikirim ulang!',
    sc_success_sub: 'Simpan kode ini untuk mengecek status peninjauan.',
    sc_success_status: 'Menunggu Peninjauan',
    sc_err_nama: 'Nama program wajib diisi.',
    sc_err_deskripsi: 'Deskripsi wajib diisi.',
    sc_err_kreator: 'Minimal 1 kreator (NIM dan nama) wajib diisi.',
    sc_err_matkul: 'Nama mata kuliah wajib diisi.',
    sc_err_kompetisi: 'Nama kompetisi wajib diisi.',
    sc_err_semester: 'Semester dikerjakan wajib diisi.',
    sc_err_kontak: 'Kontak tim wajib diisi.',
    sc_err_kontak_email: 'Kontak tim harus berupa alamat email yang valid.',
    sc_err_demo: 'Link demo wajib diisi untuk status Sudah Deploy.',
    sc_err_download: 'Link download wajib diisi untuk status Sudah Publish.',
    sc_err_ss: 'Link folder screenshot wajib diisi.',
    sc_err_consent: 'Centang kedua kotak konfirmasi sebelum mengirim.',

    sc_status_title: 'Cek Status Pengajuan Karya',
    sc_status_sub: 'Masukkan kode yang kamu dapat setelah mengirim karya untuk melihat progres peninjauannya.',
    sc_status_placeholder: 'mis. SC-7K2M9',
    sc_btn_cek: 'Cek',
    follow_karya_btn: 'Ikuti Pengajuan Ini',
    follow_karya_section_title: 'Pengajuan yang Kamu Ikuti',
    follow_karya_changed: 'Status berubah',
    sc_status_menunggu: 'Menunggu',
    sc_status_disetujui: 'Disetujui',
    sc_status_ditolak: 'Ditolak',
    sc_status_alasan_label: 'Alasan',
    sc_btn_lihat_galeri: 'Lihat Karya di Galeri',
    sc_btn_lihat_detail: 'Lihat Detail',
    sc_btn_edit_kirim_ulang: 'Edit & Kirim Ulang',
    sc_status_not_found: 'Kode tidak ditemukan. Periksa kembali kode yang kamu masukkan.',
    sc_status_kosong: 'Masukkan kode pengajuan terlebih dahulu.'
  },
  en: {
    header_info_aria: 'About SIMPRODI',
    theme_toggle_aria: 'Toggle light/dark theme',
    about_eyebrow: 'About This App',
    about_expand: 'Information System of the Informatics Engineering Study Program',
    about_desc: 'Developed by the Informatics Engineering Study Program as a hub for students’ academic achievement records, a specialization-track selection aid, and a gallery of student work.',
    btn_tutup: 'Close',
    home_eyebrow: 'Informatics Engineering Study Program',
    home_headline_l1: 'Choose your path.', home_headline_l2: 'Record your journey.',
    home_sub: 'Track your academic achievements, find the specialization track that fits you, or explore work by fellow students.',
    home_card1_title: 'Academic Portfolio',
    home_card1_desc: 'Check the achievements, MBKM activities, and certifications recorded by the study program.',
    home_card1_btn: 'Check Now',
    home_card2_title: 'Specialization Test',
    home_card2_desc: 'Answer 7 short questions to find out whether SSD or AISD suits you better.',
    home_card2_btn: 'Start Test',
    search_placeholder: 'Search by NIM or name...',
    search_btn: 'Search', search_btn_loading: 'Searching...',
    search_hint: 'Enter a full NIM or part of a student name (minimum 3 characters).',
    search_min_chars_msg: 'Enter at least 3 characters to search.',
    search_nim_more_digits: 'Enter more NIM digits or search by name instead.',
    search_conn_error: 'Unable to connect to the server. Check your internet connection and try again.',
    search_result_found: 'Found {count} student(s) for "{query}".',
    search_result_toomany: 'Showing 30 of {total} results. Refine your keyword to narrow the search.',
    detail_title: 'Student Portfolio Detail',
    detail_sub: 'Recorded achievements, MBKM activities, and certifications for this student.',
    follow_nim_btn: 'Follow This NIM',
    follow_btn_active: 'Following ✓',
    follow_nim_section_title: 'NIMs You Follow',
    follow_remove: 'Unfollow',
    follow_nim_not_found: 'No data found for this NIM (it may no longer have any records).',
    label_mbkm: 'MBKM', label_prestasi: 'Achievements', label_sertifikasi: 'Certifications',
    info_title_mbkm: 'What is MBKM?', info_title_prestasi: 'What is Prestasi?', info_title_sertifikasi: 'What is Sertifikasi?',
    mbkm_title: 'Merdeka Belajar Kampus Merdeka (Freedom to Learn – Independent Campus)',
    mbkm_body: 'MBKM covers various learning activities outside the study program that are recognized as part of coursework, such as industry internships, student exchange, research with lecturers, entrepreneurship, and community service. Data is compiled every semester based on reports verified by the study program.',
    prestasi_title: 'Student Academic Achievements',
    prestasi_body: 'The achievements listed here are results from competitions or academic activities that have been verified and compiled at the end of each semester. These include scientific competitions, olympiads, and field-specific contests organized by official institutions at the local, national, or international level.',
    sertifikasi_title: 'Competency Certification',
    sertifikasi_body: 'The certifications listed are competency certificates obtained through the study program or official, accredited certification bodies, such as BNSP and recognized international institutions. This data reflects verified competencies relevant to the field of study and profession.',
    mbkm_empty: 'No MBKM data recorded yet.',
    prestasi_empty: 'No achievement data recorded yet.',
    sertifikasi_empty: 'No certification data recorded yet.',
    lapor_title: 'Is there data that needs correcting?',
    lapor_desc: 'Contact the study program on WhatsApp so it can be fixed promptly.',
    btn_lapor_kesalahan: 'Report via WhatsApp',
    wa_koreksi_msg: '[SIMPRODI | Koreksi Data Portofolio]\nName: {nama}\nNIM: {nim}\nCategory (MBKM/Achievement/Certification): \nSemester: \nIncorrect data: \nShould be: ',
    wa_notfound_msg: '[SIMPRODI | Data Portofolio Belum Tercatat]\nSearch keyword: {q}\nName: \nNIM: \nCategory (MBKM/Achievement/Certification): \nSemester: \nDetails: ',
    wa_karya_msg: '[SIMPRODI | Laporan Karya Showcase]\nWork name: {nama}\nWork code: {kode}\nReason: ',
    notfound_title: 'Should your data be listed here?',
    notfound_desc: "If your data isn't listed yet, contact the study program on WhatsApp so it can be followed up.",
    quiz_result_title: 'Specialization Test Result',
    quiz_result_sub: 'A recommendation based on your answers.',
    quiz_disclaimer: 'This result is based on the preferences you selected and is indicative only. Consult your academic advisor for the final specialization decision.',
    btn_ulangi_tes: 'Retake Test',
    btn_pertanyaan_sebelumnya: 'Previous',
    quiz_step_label: 'Question {n} of {total}',
    quiz_score_line: '{score} of {total} of your answers point to this track.',
    quiz_answer_unit: 'answers',
    quiz_careers_label: 'Career Prospects', quiz_courses_label: 'Specialization Courses',
    memuat_tes: 'Loading test data...',

    home_card3_title: 'Student Showcase',
    home_card3_desc: 'See apps, websites, and games built by students.',
    home_card3_btn: 'Explore Works',
    home_card4_title: 'Program Statistics',
    home_card4_desc: 'See the collective achievements of our students at a glance.',
    home_card4_btn: 'View Statistics',
    home_card5_title: 'Student Guide Book',
    home_card5_desc: 'A guide to your academic journey from semester 1 to graduation, including specialization, MBKM, and your final project.',
    home_card5_btn: 'View Guide',
    panduan_title: 'Student Guide Book',
    panduan_subtitle: 'An overview of the study program\'s academic journey from semester 1 to graduation, semester by semester.',
    panduan_semester_label: 'Semester',
    panduan_sks_unit: 'credits',
    home_pengumuman_label: 'Announcements',
    scn_sub: 'Informatics Engineering Student Works',
    sc_tab_all: 'All',
    sc_latest_title: 'Latest Works',
    sc_popular_title: 'Most Liked',
    sc_all_title: 'All Works',
    sc_results_title: 'Results',
    sc_filter_tek_label: 'Technology',
    sc_filter_dosen_label: 'Supervising Lecturer',
    sc_filter_semua: 'All',
    sc_team_count: 'Team of {n} students',
    sc_btn_like: 'Like',
    sc_btn_share: 'Share',
    sc_link_copied: 'Link to this work copied.',
    sc_stat_likes: 'Likes',
    sc_stat_tech: 'Technologies',
    sc_badge_demo: 'Demo available',
    sc_preview_title: 'Preview',
    sc_about_title: 'About This Work',
    sc_info_title: 'Information',
    sc_code_label: 'Work Code',
    sc_dosen_role: 'Supervisor {n}',
    sc_link_download_sub: 'Available on an official app store',
    sc_link_demo_sub: 'Open the demo in a new tab',
    sc_link_source_sub: 'Team code repository',
    sc_more_pem: 'More {p} Works',
    sc_more_jenis: 'More {j} Works',
    sc_report_q: 'Something wrong with this work?',
    dosen_karya_link: 'Supervised works ({n})',
    scn_explore: 'Explore',
    scn_status: 'Check Status',
    scn_submit: 'Submit Work',
    home_pengumuman_link: 'Read more',
    panduan_tab_journey: 'Semester Journey',
    panduan_tab_glossary: 'Key Terms',
    panduan_search_placeholder: 'Search terms, e.g. KRS or IPK',
    panduan_cat_label: 'Categories',
    panduan_cat_all: 'All terms',
    panduan_term_count: '{n} terms',
    panduan_search_empty: 'No terms match "{q}".',
    stat_title: 'Our Collective Achievements',
    stat_subtitle: 'Hundreds of activities, awards, and projects from our students, summed up in numbers.',
    stat_disclaimer_title: 'Data is still provisional',
    stat_disclaimer_desc: 'The numbers above are drawn from data already recorded in our system and keep growing as admins import new data, so they may not yet cover every student achievement. If your (or a friend\'s) achievement is missing or looks incorrect, please report it from the Academic Portfolio page.',
    stat_label_mahasiswa: 'Students Recorded',
    stat_label_mbkm: 'MBKM Activities',
    stat_label_prestasi: 'Achievement Activities',
    stat_label_sertifikasi: 'Professional Certifications',
    stat_label_showcase: 'Showcase Projects',
    stat_error: 'Failed to load statistics. Please try again shortly.',
    home_card6_title: 'Supervising Lecturers',
    home_card6_desc: 'Find a supervisor for a competition, another activity, or your final thesis, complete with their employment status and SINTA research profile.',
    home_card6_btn: 'View Lecturers',
    dosen_title: 'Supervising Lecturers',
    dosen_subtitle: 'Find a study program lecturer who can supervise a competition, another activity, or your final thesis.',
    dosen_badge_tetap: 'Permanent Faculty',
    dosen_badge_ta1: 'Supervising Lecturer 1',
    dosen_badge_ta2: 'Supervising Lecturer 2',
    dosen_sinta_link: 'SINTA',
    dosen_error: 'Failed to load the lecturer list. Please try again shortly.',
    dosen_empty: 'Lecturer data is not available yet.',
    dosen_filter_empty: 'No lecturers match this filter.',
    sc_search_placeholder: 'Search by project name, creator, or technology...',
    sc_filter_btn: 'Filter',
    sc_filter_peminatan_label: 'Track',
    sc_filter_status_label: 'Status',
    sc_filter_status_publish_label: 'Publish Status',
    sc_filter_sumber_label: 'Work Source',
    sc_filter_semua_peminatan: 'All Tracks',
    sc_filter_semua_status: 'All Statuses',
    sc_filter_semua_status_publish: 'All',
    sc_filter_semua_sumber: 'All Sources',
    sc_btn_terapkan: 'Apply',
    sc_peminatan_tanpa: 'No Specialization',
    sc_status_sudah: 'Deployed', sc_status_belum: 'Not Deployed Yet',
    sc_status_publish_sudah: 'Published',
    sc_sort_label: 'Sort',
    sc_sort_abjad: 'Alphabetical (A-Z)', sc_sort_populer: 'Most Popular', sc_sort_baru: 'Newest',
    sc_result_count: '{n} works found',
    sc_empty: 'No published works match this filter yet.',
    sc_loading: 'Loading works...',
    sc_error: 'Failed to load the showcase. Please try again shortly.',

    sc_creators_label: 'Team',
    sc_sumber_tugas_label: 'Work Source',
    sc_semester_label: 'Semester Made',
    sc_dosen_label: 'Supervisor',
    sc_kontak_label: 'Team Contact',
    sc_tech_label: 'Technology',
    sc_btn_demo: 'Demo',
    sc_btn_download: 'Download',
    sc_btn_source: 'Source Code',
    sc_report_link: 'Report via WhatsApp',
    sc_detail_not_found: 'Work not found or not yet approved.',


    sc_form_title: 'Add Your Work to the Showcase',
    sc_resubmit_title: 'Edit & Resubmit Work',
    sc_form_sub: 'Fill out the form below to feature your app, website, or game in the public gallery.',
    sc_form_intro: 'Your work will be reviewed by an admin before it goes live. After submitting, you\'ll get a unique code. Save it carefully as it\'s used to check the review status and will later become your work\'s permanent link.',
    sc_sec_info: 'Project Information',
    sc_req_legend: 'required, everything else is optional',
    sc_label_nama: 'Project Name',
    sc_label_jenis: 'Type',
    sc_label_peminatan: 'Track',
    sc_label_deskripsi: 'Description',
    sc_placeholder_deskripsi: 'Briefly describe what this app/work does...',
    sc_label_teknologi: 'Technology',
    sc_placeholder_teknologi: 'Flutter, TensorFlow Lite, Firebase',
    sc_hint_koma: 'type then press comma or Enter, optional',
    sc_sec_kreator: 'Team Members / Creators',
    sc_placeholder_nim: 'NIM',
    sc_placeholder_nama: 'Full name',
    sc_btn_tambah_anggota: 'Add Member',
    sc_btn_tambah_dosen: 'Add Supervisor',
    sc_sec_tautan: 'Links',
    sc_label_status_deploy: 'Deploy Status',
    sc_opt_belum_deploy: 'Not Deployed Yet', sc_opt_sudah_deploy: 'Deployed',
    sc_label_demo: 'Demo Link',
    sc_placeholder_demo: 'https://play.google.com/... or another trial link',
    sc_hint_demo: 'The demo link can be filled in once the status above is changed to "Deployed".',
    sc_label_status_publish: 'Publish Status',
    sc_opt_belum_publish: 'Not Published Yet', sc_opt_sudah_publish: 'Published',
    sc_hint_status_publish: '"Published" means the work is already listed/available on the Play Store, App Store, or another official store (different from Deploy Status above, which means it can already be tried via a demo).',
    sc_label_download: 'Download Link',
    sc_placeholder_download: 'https://play.google.com/store/apps/... or another official store link',
    sc_label_source: 'Source Code Link',
    sc_placeholder_source: 'https://github.com/username/repo',
    sc_opt: 'optional',
    sc_label_trailer: 'Video Trailer',
    sc_placeholder_trailer: 'https://youtu.be/... or https://www.youtube.com/watch?v=...',
    sc_tutorial_trailer_title: 'How to get the trailer link',
    sc_tutorial_trailer_1: 'Upload the video to YouTube (it can be set to "Unlisted", it doesn\'t need to be fully public)',
    sc_tutorial_trailer_2: 'Open the video, click Share, copy the link that appears',
    sc_tutorial_trailer_3: 'Paste that link here, it will automatically show as a video on your work\'s page',
    sc_sec_tampilan: 'Work Preview',
    sc_label_ss: 'Screenshot Folder Link',
    sc_placeholder_ss: 'https://drive.google.com/drive/folders/...',
    sc_hint_ss: 'Create a folder (e.g. on Google Drive) with your work\'s screenshots, set access to "anyone with the link can view", then paste the folder link here. At least 1 image for types other than Mobile, at least 2 images (1 home screen, 1 best feature) for Mobile.',
    sc_sec_akademik: 'Academic Information',
    sc_label_sumber: 'Work Source',
    sc_opt_matkul: 'Course', sc_opt_ta: 'Final Project', sc_opt_kompetisi: 'Competition',
    sc_label_matkul: 'Course Name',
    sc_label_kompetisi: 'Competition Name',
    sc_placeholder_matkul: 'e.g. Mobile Programming',
    sc_placeholder_kompetisi: 'e.g. Gemastik 2026',
    sc_label_semester: 'Semester Made',
    sc_placeholder_semester: 'e.g. Even 2025/2026',
    sc_label_dosen: 'Supervisor',
    sc_placeholder_dosen: 'Select a lecturer...',
    sc_label_kontak: 'Team Contact',
    sc_placeholder_kontak: 'name@email.com',
    sc_hint_kontak: 'Use an active team email address, so visitors can reach you via the link shown on the detail page.',
    sc_sec_konfirmasi: 'Confirmation',
    sc_consent1: 'I confirm that this work was genuinely made by the students listed above.',
    sc_consent2: 'I confirm that everything I entered (name, description, video) contains no SARA content (ethnicity, religion, race, and inter-group issues) or content that is offensive/unlawful.',
    sc_btn_submit: 'Submit for Review',
    sc_submitting: 'Submitting...',
    sc_success_title: 'Work submitted successfully!',
    sc_resubmit_success_title: 'Work resubmitted successfully!',
    sc_success_sub: "Save this code to check the review status.",
    sc_success_status: 'Awaiting Review',
    sc_err_nama: 'Project name is required.',
    sc_err_deskripsi: 'Description is required.',
    sc_err_kreator: 'At least 1 creator (NIM and name) is required.',
    sc_err_matkul: 'Course name is required.',
    sc_err_kompetisi: 'Competition name is required.',
    sc_err_semester: 'The semester it was made in is required.',
    sc_err_kontak: 'Team contact is required.',
    sc_err_kontak_email: 'Team contact must be a valid email address.',
    sc_err_demo: 'Demo link is required when status is Deployed.',
    sc_err_download: 'Download link is required when status is Published.',
    sc_err_ss: 'A screenshot folder link is required.',
    sc_err_consent: 'Check both confirmation boxes before submitting.',

    sc_status_title: 'Check Submission Status',
    sc_status_sub: "Enter the code you received after submitting your work to see its review progress.",
    sc_status_placeholder: 'e.g. SC-7K2M9',
    sc_btn_cek: 'Check',
    follow_karya_btn: 'Follow This Submission',
    follow_karya_section_title: 'Submissions You Follow',
    follow_karya_changed: 'Status changed',
    sc_status_menunggu: 'Pending',
    sc_status_disetujui: 'Approved',
    sc_status_ditolak: 'Rejected',
    sc_status_alasan_label: 'Reason',
    sc_btn_lihat_galeri: 'View Work in Gallery',
    sc_btn_lihat_detail: 'View Details',
    sc_btn_edit_kirim_ulang: 'Edit & Resubmit',
    sc_status_not_found: 'Code not found. Please check the code you entered.',
    sc_status_kosong: 'Enter a submission code first.'
  }
};

let currentLang = localStorage.getItem('simprodi_lang') || 'id';

function t(key, vars) {
  const dict = I18N[currentLang] || I18N.id;
  let str = (key in dict) ? dict[key] : (I18N.id[key] !== undefined ? I18N.id[key] : key);
  if (vars) Object.keys(vars).forEach(k => { str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
  return str;
}

function pick(v) {
  return (v && typeof v === 'object') ? (v[currentLang] || v.id) : v;
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label'))); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.setAttribute('title', t(el.getAttribute('data-i18n-title'))); });
  document.getElementById('langBtnID').classList.toggle('active', currentLang === 'id');
  document.getElementById('langBtnEN').classList.toggle('active', currentLang === 'en');
}

function setLang(lang) {
  if ((lang !== 'id' && lang !== 'en') || lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('simprodi_lang', lang);
  applyI18n();
  rerenderActiveView();
}

// ------ TEMA TERANG/GELAP ------
// Default-nya ikut preferensi sistem (prefers-color-scheme, diatur di CSS).
// data-theme di <html> cuma diisi kalau pengguna memilih sendiri lewat
// tombol toggle, menimpa preferensi sistem untuk kunjungan berikutnya.
function isDarkActive_() {
  var explicit = document.documentElement.getAttribute('data-theme');
  if (explicit === 'dark') return true;
  if (explicit === 'light') return false;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyThemeIcon_() {
  var dark = isDarkActive_();
  document.getElementById('themeIconMoon').style.display = dark ? 'none' : 'block';
  document.getElementById('themeIconSun').style.display  = dark ? 'block' : 'none';
}

function toggleTheme() {
  var next = isDarkActive_() ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('simprodi_theme', next);
  applyThemeIcon_();
}

function rerenderActiveView() {
  if (document.body.dataset.page === 'showcase') { scRerender_(); return; }
  if (document.getElementById('detailView').style.display !== 'none' && currentStudent) {
    const s = currentStudent;
    fillMbkm(s.mbkm || []);
    fillPrestasi(s.prestasi || []);
    fillSertifikasi(s.sertifikasi || []);
    updateFollowBtn_();
    return;
  }
  if (document.getElementById('searchSection').style.display !== 'none') {
    if (lastQuery) doSearch(); else renderList();
    renderFollowedNimSection_();
    return;
  }
  if (document.getElementById('quizView').style.display !== 'none') { renderQuizQuestion(); return; }
  if (document.getElementById('quizResultView').style.display !== 'none') { showQuizResult(); return; }
  if (document.getElementById('panduanView').style.display !== 'none') { renderPanduan_(); return; }
  if (document.getElementById('dosenView').style.display !== 'none') { renderDosen_(); }
}

// ==============================================================
let searchInput; // di-set setelah app-shell.html selesai dimuat, lihat loadAppShell_
let allStudents    = [];
let allTooMany     = false;
let allTotal       = 0;
let currentStudent = null;
let lastQuery      = '';
let searchCache    = {};

let quizConfigPromise = null;

function fetchQuizConfig() {
  if (!quizConfigPromise) {
    quizConfigPromise = gasGet({ action: 'config' })
      .then(res => res && res.quiz)
      .catch(err => { console.warn('Gagal memuat konfigurasi kuis:', err); return null; });
  }
  return quizConfigPromise;
}

// Set URL jadi "?key=value" (dan bersihkan param lain) supaya halaman detail
// yang sedang dibuka bisa langsung disalin dari address bar dan dibagikan.
// Panggil tanpa argumen untuk membersihkan kembali ke URL bersih (mis. saat
// kembali ke daftar/galeri). Pakai pushState (bukan replaceState) supaya tiap
// navigasi menambah riwayat browser sungguhan - ini yang membuat tombol
// back/forward perangkat bisa mundur/maju layar demi layar di dalam situs,
// bukan langsung keluar situs setelah satu kali tekan (lihat dispatchRoute_
// di bawah). noPush=true dipakai khusus saat fungsi ini dipanggil untuk
// MEREKONSTRUKSI tampilan dari riwayat yang sudah ada (oleh dispatchRoute_
// saat event popstate, atau saat load pertama kali) - saat itu URL-nya
// sendiri sudah benar (browser yang mengubahnya), jadi cukup replaceState
// (no-op) supaya tidak menambah entri baru yang tidak perlu.
function updateUrlParam_(key, value, noPush) {
  var url = new URL(location.href);
  url.search = '';
  if (key && value) url.searchParams.set(key, value);
  if (noPush) history.replaceState(null, '', url.toString());
  else history.pushState(null, '', url.toString());
}

// Sama seperti updateUrlParam_, tapi juga mengganti PATH-nya (bukan cuma
// query string) - dipakai supaya tiap fitur utama (/portofolio/, /showcase/,
// /specialization/) punya alamat bersih sendiri yang gampang dibagikan,
// bukan cuma root diikuti parameter. Query string yang sedang aktif ikut
// dibersihkan setiap path berpindah. Sama seperti updateUrlParam_, noPush
// dipakai saat merekonstruksi tampilan dari riwayat yang sudah ada.
function setCleanPath_(path, noPush) {
  var url = new URL(location.href);
  url.pathname = path;
  url.search = '';
  if (noPush) history.replaceState(null, '', url.toString());
  else history.pushState(null, '', url.toString());
}

// Titik dispatch tunggal: dari path+query URL saat ini, tentukan tampilan
// mana yang harus terbuka. Dipakai di DUA tempat - saat load pertama kali
// (DOMContentLoaded, noPush=true karena URL-nya sendiri sudah benar dari
// awal) dan saat event popstate (tombol back/forward perangkat/browser,
// noPush=true karena browser sudah mengubah location.* duluan sebelum
// popstate ditembakkan, jadi kita cukup MEREKONSTRUKSI tampilannya saja,
// bukan menulis ulang riwayatnya). Ini yang membuat tombol back perangkat
// bisa "mundur satu layar" di dalam situs alih-alih langsung menutup situs -
// setiap open*() yang dipanggil dari sini dengan noPush=true tidak menambah
// entri riwayat baru, cuma menampilkan ulang apa yang seharusnya sudah ada
// di entri riwayat tersebut.
function dispatchRoute_(noPush) {
  var nim  = new URLSearchParams(location.search).get('nim');
  var path = location.pathname.replace(/\/+$/, '') || '/';
  if      (path === '/portofolio' && nim) { openPortofolio(noPush); searchInput.value = nim; doSearch(true, noPush); }
  else if (path === '/portofolio')        openPortofolio(noPush);
  else if (path === '/specialization')    openQuiz(noPush);
  else if (path === '/statistic')         openStatistik(noPush);
  else if (path === '/student-guide')     openPanduan(noPush);
  else if (path === '/lecturers')         openDosen(noPush);
  else                                     showHome(noPush);
}

// Markup tampilan (home, portofolio, tes peminatan, showcase, modal, dst)
// dipisah ke app-shell.html supaya tiap route (/, /portofolio/, /showcase/,
// /specialization/) bisa jadi berkas HTML sungguhan yang ringan, dengan
// <head> masing-masing (judul & meta khusus untuk preview media sosial),
// sementara isi <body>-nya sama untuk semua route. Di sinilah shell itu
// diambil lalu disisipkan ke halaman saat ini sebelum tampilan awal dibuka.
async function loadAppShell_(url) {
  const res  = await fetch(url);
  const html = await res.text();
  document.body.insertAdjacentHTML('afterbegin', html);
}

window.addEventListener('DOMContentLoaded', async () => {
  // Halaman Showcase (/showcase/) punya shell dan skrip sendiri
  // (showcase-shell.html, showcase.js); app.js tetap jadi mesin bersama
  // untuk i18n, tema, gasGet, dan riwayat browser.
  var isShowcase = document.body.dataset.page === 'showcase';
  await loadAppShell_(isShowcase ? '/assets/showcase-shell.html' : '/assets/app-shell.html');

  if (!isShowcase) {
    searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  }

  applyI18n();
  applyThemeIcon_();

  // Kalau situs dibuka langsung ke halaman selain Home (mis. dari share
  // link seperti /showcase/?kode=SC-XXX), riwayat browser di tab ini masih
  // kosong - satu-satunya entri riwayat adalah halaman ini sendiri, jadi
  // tombol back akan langsung keluar situs pada percobaan PERTAMA (tidak
  // ada "Home" untuk dituju dulu). Supaya tombol back tetap berguna di
  // kasus ini, sisipkan dulu satu entri "Home" SEBELUM entri halaman yang
  // sedang dibuka: replaceState entri saat ini jadi Home, lalu pushState
  // URL aslinya lagi di atasnya (tidak dirender - cuma menyusun riwayat).
  // Begitu pengguna menekan back sekali, dia mendarat di entri Home ini
  // dulu (masih di dalam situs, lewat popstate di bawah), bukan langsung
  // keluar - baru kalau ditekan back SEKALI LAGI dari Home, situs benar-
  // benar ditinggalkan (sama seperti aplikasi lain pada umumnya, Home
  // dianggap "akar" navigasi).
  // CATATAN: sengaja TIDAK disyaratkan history.length<=1 di sini walau itu
  // sempat dicoba - niatnya supaya me-refresh halaman di tengah navigasi
  // yang sudah benar tidak menyisipkan Home duplikat, tapi ternyata
  // history.length awal tidak bisa diasumsikan selalu 1 untuk navigasi
  // baru (headless test membuktikan ini bisa 2+ tergantung browser/
  // konteksnya) - kalau dipaksakan, syarat itu berisiko membuat seeding
  // ini gagal berjalan sama sekali di sebagian browser/in-app-browser
  // nyata, yang berarti fitur utama (back dari share-link ke Home) rusak
  // total. Konsekuensi dari TIDAK memberi syarat ini cuma kosmetik dan
  // ringan (refresh di tengah navigasi bisa menambah satu langkah Home
  // ekstra yang berulang saat back) - jauh lebih aman daripada
  // mempertaruhkan fitur utamanya sendiri demi kasus tepi yang jarang.
  var _initialPath = location.pathname.replace(/\/+$/, '') || '/';
  if (_initialPath !== '/') {
    var _initialHref = location.href;
    history.replaceState(null, '', '/');
    history.pushState(null, '', _initialHref);
  }

  // Tampilan awal ditentukan dari path+query URL saat ini lewat
  // dispatchRoute_ (lihat definisinya di atas) - noPush=true karena entri
  // riwayat untuk tampilan ini sendiri sudah benar (baik dari load biasa,
  // atau baru saja disisipkan di atas), tidak perlu menambah riwayat baru
  // lagi di sini.
  if (isShowcase) scDispatchRoute_(true);
  else { dispatchRoute_(true); loadPengumuman_(); }

  // Tombol back/forward perangkat/browser memicu popstate, bukan reload
  // halaman - dengarkan di sini supaya tombol back bisa mundur ke layar
  // sebelumnya DI DALAM situs (Home <-> fitur <-> detail) alih-alih langsung
  // keluar situs setelah satu kali tekan. Di halaman Showcase, penanganannya
  // diserahkan ke scPopstate_ (showcase.js), yang juga mengenali penanda
  // history.state untuk Kirim Karya/Cek Status.
  window.addEventListener('popstate', function(e) {
    if (isShowcase) { scPopstate_(e); return; }
    dispatchRoute_(true);
  });
});

// ------ SEARCH ------
async function doSearch(autoOpen = false, noPush = false) {
  const q = searchInput.value.trim();
  if (q.length < 3) {
    setStatus(t('search_min_chars_msg'), true);
    return;
  }
  if (/^\d+$/.test(q) && q.length < 5) {
    setStatus(t('search_nim_more_digits'), true);
    return;
  }

  lastQuery = q;
  setStatus('');
  document.getElementById('listView').innerHTML = '';
  document.getElementById('detailView').style.display = 'none';

  const cacheKey = currentLang + '|' + q;
  if (searchCache[cacheKey]) {
    const res = searchCache[cacheKey];
    allStudents = res.students || [];
    allTooMany  = res.tooMany  || false;
    allTotal    = res.total    || 0;
    if (!res.ok) setStatus(res.message, true);
    if (autoOpen && allStudents.length === 1 && allStudents[0].nim.toLowerCase() === q.toLowerCase()) {
      renderList(); openDetail(0, noPush);
    } else {
      renderList();
    }
    return;
  }

  const btn = document.getElementById('searchBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>' + t('search_btn_loading');

  try {
    const res = await gasGet({ action: 'search', q, lang: currentLang });
    btn.disabled = false; btn.textContent = t('search_btn');
    searchCache[cacheKey] = res;
    allStudents = res.students || [];
    allTooMany  = res.tooMany  || false;
    allTotal    = res.total    || 0;
    if (!res.ok) setStatus(res.message, true);
    if (autoOpen && allStudents.length === 1 && allStudents[0].nim.toLowerCase() === q.toLowerCase()) {
      renderList(); openDetail(0, noPush);
    } else {
      renderList();
    }
  } catch {
    btn.disabled = false; btn.textContent = t('search_btn');
    setStatus(t('search_conn_error'), true);
  }
}

// ------ LIST ------
function renderList() {
  const lv = document.getElementById('listView');

  if (!allStudents.length) {
    lv.innerHTML =
      '<div class="lapor-card">' +
        '<div class="lapor-header">' +
          '<div>' +
            '<div class="lapor-title">' + t('notfound_title') + '</div>' +
            '<div class="lapor-desc">' + t('notfound_desc') + '</div>' +
          '</div>' +
          '<button class="btn-lapor" onclick="laporNotFoundWa_()">' + t('btn_lapor_kesalahan') + '</button>' +
        '</div>' +
      '</div>';
    return;
  }

  const infoText = allTooMany
    ? t('search_result_toomany', { total: allTotal })
    : t('search_result_found', { count: allStudents.length, query: escHtml(lastQuery) });
  let html = `<p class="result-info">${infoText}</p>`;

  allStudents.forEach((s, i) => {
    const cp = (s.prestasi||[]).length, cm = (s.mbkm||[]).length, cs = (s.sertifikasi||[]).length;
    html += `<div class="student-card" onclick="openDetail(${i})">
      <div class="s-body">
        <div class="s-name">${escHtml(s.nama || '-')}</div>
        <div class="s-nim">NIM. ${escHtml(s.nim)}</div>
        <div class="s-tags">
          <span class="tag ${cm ? 'tag-m' : 'tag-0'}">${cm} ${t('label_mbkm')}</span>
          <span class="tag ${cp ? 'tag-p' : 'tag-0'}">${cp} ${t('label_prestasi')}</span>
          <span class="tag ${cs ? 'tag-s' : 'tag-0'}">${cs} ${t('label_sertifikasi')}</span>
        </div>
      </div>
      <span class="s-chevron"></span>
    </div>`;
  });

  lv.innerHTML = html;
}

// ------ IKUTI NIM (bookmark lokal per-browser, tanpa akun/login) ------
// Disimpan di localStorage, bukan di server - murni penanda pribadi per
// perangkat supaya mahasiswa bisa cek dengan cepat kalau ada capaian baru
// pada NIM yang mereka ikuti, tanpa perlu sistem akun. Dibandingkan dengan
// JUMLAH MBKM/Prestasi/Sertifikasi terakhir kali dilihat - BUKAN notifikasi
// push sungguhan (situs statis, tidak ada server yang bisa mendorong pesan
// ke perangkat), cuma badge "+N" yang muncul begitu mahasiswa membuka lagi
// halaman Portofolio Akademik. Tidak disinkronkan antar perangkat/browser.
const FOLLOW_NIM_KEY = 'simprodi_followed_nim';

// Jarak minimum antar-refresh latar belakang untuk daftar "diikuti" (NIM
// maupun Karya) - lihat catatan lengkap di renderFollowedNimSection_/
// renderFollowedKaryaSection_ soal kenapa ini perlu ada.
var FOLLOW_REFRESH_COOLDOWN_MS = 15000;
var _followNimLastRefresh = 0;

function getFollowedNim_() {
  try { return JSON.parse(localStorage.getItem(FOLLOW_NIM_KEY) || '[]'); } catch (e) { return []; }
}
function saveFollowedNim_(list) {
  try { localStorage.setItem(FOLLOW_NIM_KEY, JSON.stringify(list)); } catch (e) {}
}
function isFollowingNim_(nim) {
  return getFollowedNim_().some(function(f) { return f.nim === nim; });
}
function countsOf_(s) {
  return { mbkm: (s.mbkm || []).length, prestasi: (s.prestasi || []).length, sertifikasi: (s.sertifikasi || []).length };
}
function toggleFollowNim_() {
  if (!currentStudent) return;
  var list = getFollowedNim_();
  var idx = list.findIndex(function(f) { return f.nim === currentStudent.nim; });
  if (idx !== -1) list.splice(idx, 1);
  else list.push({ nim: currentStudent.nim, nama: currentStudent.nama, counts: countsOf_(currentStudent) });
  saveFollowedNim_(list);
  updateFollowBtn_();
}
function updateFollowBtn_() {
  var btn = document.getElementById('followNimBtn');
  if (!btn || !currentStudent) return;
  var following = isFollowingNim_(currentStudent.nim);
  btn.classList.toggle('active', following);
  btn.textContent = following ? t('follow_btn_active') : t('follow_nim_btn');
}
// Perbarui snapshot count NIM yang diikuti begitu detailnya benar-benar
// dilihat (lewat jalur manapun - pencarian biasa atau daftar "diikuti"),
// supaya badge "+N" hilang setelah dilihat, bukan cuma setelah di-follow.
function markFollowedSeen_(nim, counts) {
  var list = getFollowedNim_();
  var idx = list.findIndex(function(f) { return f.nim === nim; });
  if (idx === -1) return;
  list[idx].counts = counts;
  saveFollowedNim_(list);
}
function unfollowNim_(nim, ev) {
  if (ev) ev.stopPropagation();
  saveFollowedNim_(getFollowedNim_().filter(function(f) { return f.nim !== nim; }));
  renderFollowedNimSection_();
}
function followedNimCardHtml_(f, freshCounts) {
  var delta = 0;
  if (freshCounts) {
    delta = Math.max(0, freshCounts.mbkm - f.counts.mbkm) + Math.max(0, freshCounts.prestasi - f.counts.prestasi) + Math.max(0, freshCounts.sertifikasi - f.counts.sertifikasi);
  }
  var badge = delta > 0 ? '<span class="follow-badge">+' + delta + '</span>' : '';
  return '<div class="student-card follow-card" onclick="openFollowedNim_(\'' + escHtml(f.nim) + '\')">' +
    '<div class="s-body">' +
      '<div class="s-name">' + escHtml(f.nama || '-') + badge + '</div>' +
      '<div class="s-nim">NIM. ' + escHtml(f.nim) + '</div>' +
    '</div>' +
    '<button type="button" class="follow-remove-btn" onclick="unfollowNim_(\'' + escHtml(f.nim) + '\', event)" title="' + t('follow_remove') + '">&times;</button>' +
  '</div>';
}
function renderFollowedNimSection_() {
  var el = document.getElementById('followedNimSection');
  if (!el) return;
  var list = getFollowedNim_();
  if (!list.length) { el.innerHTML = ''; return; }
  el.innerHTML = '<div class="follow-list-title">' + t('follow_nim_section_title') + '</div><div id="followedNimCards">' +
    list.map(function(f) { return followedNimCardHtml_(f, null); }).join('') + '</div>';
  // Cek jumlah terkini di latar belakang (tidak menghalangi render daftar)
  // supaya badge "+N" muncul begitu ada capaian baru sejak terakhir dilihat.
  // renderFollowedNimSection_ dipanggil BERULANG KALI tanpa aksi baru dari
  // pengguna (tiap kali halaman Portofolio dibuka lagi termasuk lewat
  // tombol back/forward, dan tiap kali bahasa ID/EN di-toggle lewat
  // rerenderActiveView) - tanpa jeda ini, satu sesi bisa memicu permintaan
  // 'search' berkali-kali lipat dibanding sebelum fitur ini ada, dan
  // action 'search' TIDAK punya rate limit sendiri di server (lihat
  // searchMahasiswa di Code.gs) sehingga bisa memperlambat/membebani
  // pembacaan Sheet untuk semua pengunjung sekaligus. Jeda ini membatasi
  // refresh JARINGANNYA saja ke maksimal sekali per
  // FOLLOW_REFRESH_COOLDOWN_MS - daftarnya sendiri tetap langsung
  // dirender ulang dari localStorage setiap kali dipanggil, cuma bagian
  // fetch status terkininya yang dilewati kalau masih terlalu baru.
  if (Date.now() - _followNimLastRefresh < FOLLOW_REFRESH_COOLDOWN_MS) return;
  _followNimLastRefresh = Date.now();
  list.forEach(function(f, i) {
    gasGet({ action: 'search', q: f.nim, lang: currentLang }).then(function(res) {
      if (!res || !res.ok) return;
      var match = (res.students || []).find(function(s) { return s.nim === f.nim; });
      if (!match) return;
      var cardsWrap = document.getElementById('followedNimCards');
      if (!cardsWrap || !cardsWrap.children[i]) return;
      cardsWrap.children[i].outerHTML = followedNimCardHtml_(f, countsOf_(match));
    }).catch(function() {});
  });
}
function openFollowedNim_(nim) {
  gasGet({ action: 'search', q: nim, lang: currentLang }).then(function(res) {
    if (!res || !res.ok) { setStatus((res && res.message) || t('search_conn_error'), true); return; }
    var match = (res.students || []).find(function(s) { return s.nim === nim; });
    if (!match) { setStatus(t('follow_nim_not_found'), true); return; }
    allStudents = [match];
    openDetail(0);
  }).catch(function() { setStatus(t('search_conn_error'), true); });
}

// ------ DETAIL ------
function openDetail(idx, noPush) {
  const s = allStudents[idx];
  if (!s) return;
  currentStudent = s;

  document.getElementById('dNama').textContent = s.nama || '-';
  document.getElementById('dNim').textContent  = 'NIM. ' + s.nim;
  markFollowedSeen_(s.nim, countsOf_(s));
  updateFollowBtn_();

  const cp = (s.prestasi||[]).length, cm = (s.mbkm||[]).length, cs = (s.sertifikasi||[]).length;

  document.getElementById('cnt-mbkm').textContent        = cm;
  document.getElementById('cnt-prestasi').textContent    = cp;
  document.getElementById('cnt-sertifikasi').textContent = cs;

  fillMbkm(s.mbkm || []);
  fillPrestasi(s.prestasi || []);
  fillSertifikasi(s.sertifikasi || []);

  // Buka accordion yang punya data, tutup yang kosong (tidak ada gunanya
  // dibuka kalau isinya cuma pesan "belum ada data").
  (cm ? openAcc : closeAcc)('mbkm');
  (cp ? openAcc : closeAcc)('prestasi');
  (cs ? openAcc : closeAcc)('sertifikasi');

  document.getElementById('listView').style.display      = 'none';
  document.getElementById('searchSection').style.display = 'none';
  document.getElementById('detailView').style.display    = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateUrlParam_('nim', s.nim, noPush);
}

// ------ ACCORDION ------
function toggleAcc(k) {
  const panel = document.getElementById('panel-' + k);
  const icon  = document.getElementById('ico-'   + k);
  const btn   = document.getElementById('trg-'   + k);
  const open  = panel.classList.contains('open');
  panel.classList.toggle('open', !open);
  icon.classList.toggle('open', !open);
  btn.classList.toggle('is-open', !open);
}
function openAcc(k) {
  document.getElementById('panel-' + k).classList.add('open');
  document.getElementById('ico-'   + k).classList.add('open');
  document.getElementById('trg-'   + k).classList.add('is-open');
}
function closeAcc(k) {
  document.getElementById('panel-' + k).classList.remove('open');
  document.getElementById('ico-'   + k).classList.remove('open');
  document.getElementById('trg-'   + k).classList.remove('is-open');
}

// ------ HELPERS ------
// Terjemahkan kata "Ganjil"/"Genap" di string semester bebas (mis. "Ganjil
// 2025/2026") saat bahasa Inggris aktif. Field semester diketik manual
// (bukan enum), jadi ini cuma cari-ganti kata, bagian lain (tahun, dll)
// dibiarkan apa adanya.
function translateSemesterLabel_(s) {
  if (currentLang !== 'en' || !s) return s;
  return String(s).replace(/\bganjil\b/gi, 'Odd').replace(/\bgenap\b/gi, 'Even');
}

function groupBySem(data, key) {
  const order = [], map = {};
  data.forEach(r => {
    const s = r[key] || '-';
    if (!map[s]) { map[s] = []; order.push(s); }
    map[s].push(r);
  });
  return { order, map };
}

// ------ FILL PANELS ------
// Urutkan entri dalam satu grup semester berdasarkan teks yang sedang jadi
// judul utama (bukan urutan baris di sheet, yang tidak stabil setelah
// re-import). keyFn menerima satu baris data, kembalikan teks pembanding.
function sortByPrimaryText_(rows, keyFn) {
  return rows.slice().sort((a, b) =>
    String(keyFn(a) || '').localeCompare(String(keyFn(b) || ''), undefined, { sensitivity: 'base' })
  );
}

function fillMbkm(data) {
  const el = document.getElementById('panel-mbkm');
  if (!data.length) { el.innerHTML = '<p class="acc-empty">' + t('mbkm_empty') + '</p>'; return; }
  const { order, map } = groupBySem(data, 'semester');
  const primaryOf = r => currentLang === 'en' ? (r.gabung_en || r.gabung_id) : r.gabung_id;
  el.innerHTML = order.map(sem =>
    '<div class="sem-group"><div class="sem-group-label">' + escHtml(translateSemesterLabel_(sem)) + '</div>'
    + sortByPrimaryText_(map[sem], primaryOf).map(r => {
      const primary   = primaryOf(r);
      const secondary = currentLang === 'en' ? r.gabung_id : r.gabung_en;
      return '<div class="data-row">'
        + '<div class="row-main">' + escHtml(primary || '-') + '</div>'
        + (secondary ? '<div class="row-sub">' + escHtml(secondary) + '</div>' : '')
        + '</div>';
    }).join('') + '</div>'
  ).join('');
}

function fillPrestasi(data) {
  const el = document.getElementById('panel-prestasi');
  if (!data.length) { el.innerHTML = '<p class="acc-empty">' + t('prestasi_empty') + '</p>'; return; }
  const { order, map } = groupBySem(data, 'semester');
  el.innerHTML = order.map(sem =>
    '<div class="sem-group"><div class="sem-group-label">' + escHtml(translateSemesterLabel_(sem)) + '</div>'
    + sortByPrimaryText_(map[sem], r => r.gabung).map(r =>
      '<div class="data-row"><div class="row-main">' + escHtml(r.gabung || '-') + '</div></div>'
    ).join('') + '</div>'
  ).join('');
}

function fillSertifikasi(data) {
  const el = document.getElementById('panel-sertifikasi');
  if (!data.length) { el.innerHTML = '<p class="acc-empty">' + t('sertifikasi_empty') + '</p>'; return; }
  const { order, map } = groupBySem(data, 'semester');
  const primaryOf = r => currentLang === 'en' ? (r.inggris || r.indonesia) : r.indonesia;
  el.innerHTML = order.map(sem =>
    '<div class="sem-group"><div class="sem-group-label">' + escHtml(translateSemesterLabel_(sem)) + '</div>'
    + sortByPrimaryText_(map[sem], primaryOf).map(r => {
      const primary   = primaryOf(r);
      const secondary = currentLang === 'en' ? r.indonesia : r.inggris;
      return '<div class="data-row">'
        + (r.kategori ? '<div class="row-meta"><span class="kat-tag">' + escHtml(r.kategori) + '</span></div>' : '')
        + '<div class="row-main">' + escHtml(primary || '-') + '</div>'
        + (secondary ? '<div class="row-sub">' + escHtml(secondary) + '</div>' : '')
        + '</div>';
    }).join('') + '</div>'
  ).join('');
}

// ------ INFO MODAL ------
const INFO_DATA = {
  mbkm:        { cat: 'mbkm', catLabelKey: 'label_mbkm' },
  prestasi:    { cat: 'pres', catLabelKey: 'label_prestasi' },
  sertifikasi: { cat: 'sert', catLabelKey: 'label_sertifikasi' }
};
function showInfo(type) {
  const d = INFO_DATA[type];
  if (!d) return;
  const cat = document.getElementById('infoCat');
  cat.textContent = t(d.catLabelKey);
  cat.className   = 'info-cat ' + d.cat;
  document.getElementById('infoTitle').textContent = t(type + '_title');
  document.getElementById('infoBody').textContent  = t(type + '_body');
  document.getElementById('infoModal').classList.add('open');
}
function closeInfo() {
  document.getElementById('infoModal').classList.remove('open');
}

function showToast(msg) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2500);
}

// ------ LAPORAN VIA WHATSAPP ------
// Koreksi data capaian, data yang belum tercatat, dan laporan karya Showcase
// tidak lagi lewat form + backend: langsung dialihkan ke WhatsApp prodi dengan
// pesan awal yang sudah terisi, supaya lebih sederhana dan cepat ditanggapi.
const PRODI_WA = '6282277880303';

function openProdiWa_(text) {
  window.open('https://wa.me/' + PRODI_WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
}

function laporKoreksiWa_() {
  if (!currentStudent) return;
  openProdiWa_(t('wa_koreksi_msg', { nama: currentStudent.nama, nim: currentStudent.nim }));
}

function laporNotFoundWa_() {
  openProdiWa_(t('wa_notfound_msg', { q: lastQuery }));
}

// ------ HELPERS ------
async function gasGet(params) {
  const url = GAS_URL + '?' + Object.entries(params)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&');
  const r = await fetch(url);
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}

function setStatus(msg, isErr) {
  const el = document.getElementById('statusMsg');
  el.textContent = msg || '';
  el.className   = isErr ? 'msg-error' : 'msg-center';
}

function openAboutModal()  { document.getElementById('aboutOverlay').classList.add('open'); }
function closeAboutModal() { document.getElementById('aboutOverlay').classList.remove('open'); }

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Lapis pertahanan tambahan di klien untuk URL user (link demo/source/video
// trailer) sebelum dipasang ke href="..." atau CSS url('...'). Backend
// (sanitizeUrl_ di Code.gs) sudah menolak skema selain http(s) dan tanda
// kutip saat submit, tapi ini mencegah data lama/tidak terduga tetap lolos
// sebagai javascript: URI atau CSS-injection saat dirender.
function safeUrl_(url) {
  var s = String(url || '').trim();
  if (!/^https?:\/\//i.test(s)) return '';
  if (s.indexOf("'") !== -1 || s.indexOf('"') !== -1 || s.indexOf('<') !== -1 || s.indexOf('>') !== -1) return '';
  return encodeURI(s);
}

// ------ PENGUMUMAN PRODI (beranda) ------
// Diisi admin lewat menu Pengumuman (Code.gs getPengumumanAktif). Isinya
// satu bahasa (ditulis admin), hanya labelnya yang ikut i18n. Gagal muat
// atau kosong = bagian ini tidak tampil sama sekali.
async function loadPengumuman_() {
  var el = document.getElementById('homeAnnouncements');
  if (!el) return;
  try {
    var res = await gasGet({ action: 'pengumuman' });
    var items = (res && res.ok && res.items) || [];
    if (!items.length) return;
    el.innerHTML = '<div class="ann-label" data-i18n="home_pengumuman_label">' + t('home_pengumuman_label') + '</div>' +
      items.map(function(p) {
        var link = /^https?:\/\//i.test(p.tautan || '')
          ? '<a class="ann-link" href="' + escHtml(p.tautan) + '" target="_blank" rel="noopener" data-i18n="home_pengumuman_link">' + t('home_pengumuman_link') + '</a>'
          : '';
        return '<div class="ann-card">' +
          '<div class="ann-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16 9a3 3 0 0 1 0 6"/></svg></div>' +
          '<div class="ann-body"><div class="ann-title">' + escHtml(p.judul) + '</div>' +
          '<div class="ann-text">' + escHtml(p.isi) + '</div>' + link + '</div>' +
        '</div>';
      }).join('');
    el.style.display = '';
  } catch (e) { /* pengumuman bersifat tambahan, diam saja kalau gagal */ }
}

// ------ NAVIGASI BERANDA ------
function showHome(noPush) {
  scHideAllViews_();
  document.getElementById('homeView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setCleanPath_('/', noPush);
}

function openPortofolio(noPush) {
  scHideAllViews_();
  document.getElementById('searchSection').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Jangan auto-fokus (buka keyboard mobile) saat ini cuma rekonstruksi dari
  // riwayat (tombol back/forward) - hanya relevan saat sungguh-sungguh
  // navigasi baru ke Portofolio.
  if (!noPush) setTimeout(function() { searchInput.focus(); }, 80);
  setCleanPath_('/portofolio/', noPush);
  renderFollowedNimSection_();
}

// ------ STATISTIK PROGRAM STUDI ------
let statLoaded = false;

function fmtStat_(n) {
  return Number(n || 0).toLocaleString('id-ID') + '+';
}

async function openStatistik(noPush) {
  scHideAllViews_();
  document.getElementById('statistikView').style.display = 'block';
  setCleanPath_('/statistic/', noPush);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (statLoaded) return;

  document.getElementById('statMsg').innerHTML = '';
  try {
    const res = await gasGet({ action: 'public_stats' });
    if (res.ok) {
      document.getElementById('statMahasiswa').textContent   = fmtStat_(res.stats.totalMahasiswa);
      document.getElementById('statMbkm').textContent        = fmtStat_(res.stats.totalMbkm);
      document.getElementById('statPrestasi').textContent    = fmtStat_(res.stats.totalPrestasi);
      document.getElementById('statSertifikasi').textContent = fmtStat_(res.stats.totalSertifikasi);
      document.getElementById('statShowcase').textContent    = fmtStat_(res.stats.totalShowcase);
      statLoaded = true;
    } else {
      document.getElementById('statMsg').innerHTML = '<p class="msg-error">' + t('stat_error') + '</p>';
    }
  } catch (e) {
    document.getElementById('statMsg').innerHTML = '<p class="msg-error">' + t('stat_error') + '</p>';
  }
}

// ------ BUKU PANDUAN MAHASISWA ------
// Konten statis (lihat BACKLOG.md #2) - tidak bersumber dari Google Sheets,
// jadi tidak ada panggilan `gasGet` di sini sama sekali. SKS dan daftar mata
// kuliah per semester mengikuti Peta Kurikulum 2026 S-1 Teknik Informatika
// (Kurikulum.docx, bagian 8.3) - kalau kurikulum berubah di masa depan,
// perbarui array ini langsung, tidak perlu skema baru.
var PANDUAN_ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

// Istilah dasar dunia perkuliahan untuk mahasiswa baru yang belum tahu
// menahu soal SKS/IP/IPK dkk. Sudah dikonfirmasi langsung oleh prodi (Sept
// 2026): TIDAK ada "Semester Pendek" di kampus ini (jangan dimunculkan lagi
// - sempat salah diasumsikan ada di versi sebelumnya) - remedial di sini
// terbagi jadi "Remedial Semester" (mata kuliah semester berjalan) dan
// "Remedial Ulang" (mata kuliah semester-semester sebelumnya). PA singkatan
// dari "Penasihat Akademik" (bukan "Pembimbing Akademik"). Semester 1-6
// pakai sistem paket KRS auto-generate (mahasiswa tidak memilih mata kuliah
// satu per satu). Ambang Surat Peringatan (SP1-SP3) dan checkpoint masa
// studi (semester 8/10/12) JUGA dikonfirmasi langsung - angka-angka ini
// TIDAK ada di Kurikulum.docx (sengaja dicek dulu, nihil - itu kebijakan
// akademik terpisah), jadi jangan diubah tanpa konfirmasi ulang dari prodi
// kalau kurikulum/kebijakan berikutnya berbeda. Diurutkan ABJAD per
// `term` (bukan `full`) supaya urutannya konsisten ID/EN, dan dirender
// sebagai kartu per kategori di tab Istilah Penting (lihat
// renderPanduanGlossary_), lengkap dengan kotak cari dan daftar kategori.
// Grup boleh punya `desc` opsional (dirender di renderPanduanGlossary_ tepat
// di bawah judul grup, sebelum daftar istilahnya) - dipakai untuk istilah
// yang sebenarnya cuma mendeskripsikan GRUP itu sendiri (mis. "Fakultas"
// untuk grup Tingkat Fakultas, "Program Studi" untuk grup Tingkat Program
// Studi) daripada jadi istilah tersendiri yang berdiri sejajar dengan
// jabatan-jabatan di dalamnya.
var PANDUAN_GLOSSARY_GROUPS = [
  { title: { id: 'Bagian Administrasi & Layanan', en: 'Administrative & Service Divisions' },
    terms: [
      { term: 'Bagian Administrasi Akademik', full: { id: '', en: '' },
        desc: { id: 'Bagian yang mengurus administrasi akademik mahasiswa, mis. KRS, KHS, transkrip, dan surat-surat akademik lainnya.',
                en: 'The division that handles students\' academic administration, e.g. KRS, KHS, transcripts, and other academic correspondence.' } },
      { term: 'Bagian Alumni', full: { id: '', en: '' },
        desc: { id: 'Bagian yang mengelola hubungan dan data alumni, termasuk kegiatan tracer study (survei lulusan) untuk memantau perkembangan karier alumni.',
                en: 'The division that manages alumni relations and data, including tracer studies (graduate surveys) to monitor alumni career progress.' } },
      { term: 'Bagian Kemahasiswaan', full: { id: '', en: '' },
        desc: { id: 'Bagian yang mengurus kegiatan dan kesejahteraan mahasiswa di luar akademik, mis. organisasi kemahasiswaan, beasiswa, dan kegiatan kemahasiswaan lainnya.',
                en: 'The division that handles student activities and welfare outside academics, e.g. student organizations, scholarships, and other student affairs.' } },
      { term: 'Bagian Keuangan', full: { id: '', en: '' },
        desc: { id: 'Bagian yang mengurus pembayaran dan administrasi keuangan mahasiswa, mis. uang kuliah dan biaya-biaya lainnya.',
                en: 'The division that handles student payments and financial administration, e.g. tuition fees and other charges.' } },
      { term: 'Bagian Teknologi Informasi', full: { id: '', en: '' },
        desc: { id: 'Bagian yang mengurus sistem dan infrastruktur teknologi informasi kampus, mis. akun Office 365, MIKA, jaringan, dan dukungan teknis lainnya.',
                en: 'The division that manages the campus\'s information technology systems and infrastructure, e.g. Office 365 accounts, MIKA, networks, and other technical support.' } }
    ]
  },
  { title: { id: 'Capaian Pembelajaran', en: 'Learning Outcomes' },
    terms: [
      { term: 'CPL', full: { id: 'Capaian Pembelajaran Lulusan', en: 'Capaian Pembelajaran Lulusan (Graduate Learning Outcomes)' },
        desc: { id: 'Kemampuan (sikap, pengetahuan, keterampilan) yang harus kamu miliki setelah lulus dari program studi ini. CPL jadi acuan utama dalam merancang seluruh mata kuliah dan kurikulum.',
                en: 'The abilities (attitudes, knowledge, skills) you are expected to have upon graduating from this study program. CPL is the main reference used to design every course and the curriculum as a whole.' } },
      { term: 'CPMK', full: { id: 'Capaian Pembelajaran Mata Kuliah', en: 'Capaian Pembelajaran Mata Kuliah (Course Learning Outcomes)' },
        desc: { id: 'Capaian pembelajaran yang lebih spesifik untuk satu mata kuliah tertentu, diturunkan dari CPL. CPMK jadi jembatan antara tujuan besar program studi (CPL) dan apa yang kamu pelajari di kelas.',
                en: 'A more specific learning outcome for a particular course, derived from CPL. CPMK bridges the study program’s overall goals (CPL) and what you actually learn in that specific course.' } },
      { term: 'PL', full: { id: 'Profil Lulusan', en: 'Profil Lulusan (Graduate Profile)' },
        desc: { id: 'Peran atau posisi yang diharapkan bisa dijalani lulusan program studi ini di dunia kerja atau bidang keahliannya, dirumuskan berdasarkan kebutuhan industri dan perkembangan ilmu pengetahuan.',
                en: 'The roles or positions graduates of this study program are expected to be able to take on in the workforce or their field of expertise, formulated based on industry needs and advances in the field.' } }
    ]
  },
  { title: { id: 'Dokumen & Perencanaan Studi', en: 'Documents & Study Planning' },
    terms: [
      { term: 'Kalender Akademik', full: { id: '', en: '' },
        desc: { id: 'Jadwal resmi kampus yang memuat tanggal-tanggal penting tiap semester, seperti periode pengisian KRS, jadwal kuliah, ujian, sampai libur akademik.',
                en: 'The campus’s official schedule listing important dates each semester, such as the KRS registration period, class schedules, exams, and academic holidays.' } },
      { term: 'KHS', full: { id: 'Kartu Hasil Studi', en: 'Semester Grade Report' },
        desc: { id: 'Laporan nilai yang kamu terima di akhir tiap semester, berisi nilai dan SKS tiap mata kuliah yang sudah diambil, plus IP semester itu.',
                en: 'The grade report you receive at the end of each semester, listing the grade and SKS for each course you took, plus that semester’s IP.' } },
      { term: 'Kontrak Perkuliahan', full: { id: '', en: '' },
        desc: { id: 'Kesepakatan di awal semester antara dosen dan mahasiswa tentang aturan main perkuliahan - mis. kehadiran minimum, komponen penilaian, dan tata tertib kelas.',
                en: 'An agreement made at the start of the semester between the lecturer and students about how the course will run - e.g. minimum attendance, grading components, and classroom rules.' } },
      { term: 'KRS', full: { id: 'Kartu Rencana Studi', en: 'Study Plan Card' },
        desc: { id: 'Dokumen rencana studimu tiap semester, berisi mata kuliah dan jumlah SKS yang akan kamu ambil. Untuk semester 1-6, paketnya sudah otomatis disusun (auto-generate) sesuai jalur/peminatanmu, jadi kamu umumnya tinggal mengonfirmasi, bukan memilih mata kuliah satu per satu.',
                en: 'Your study plan document each semester, listing the courses and total SKS you will take. For semesters 1-6, the package is auto-generated based on your track/specialization, so you generally just confirm it rather than picking each course individually.' } },
      { term: 'RPS', full: { id: 'Rencana Pembelajaran Semester', en: 'Rencana Pembelajaran Semester (Semester Learning Plan)' },
        desc: { id: 'Dokumen yang lebih rinci dari silabus, memuat rencana pembelajaran tiap pertemuan dalam satu semester - termasuk capaian pembelajaran, metode, bahan kajian, dan penilaian tiap pertemuannya.',
                en: 'A more detailed document than the syllabus, outlining the learning plan for each session throughout the semester - including learning outcomes, methods, topics, and assessments for each meeting.' } },
      { term: 'Silabus', full: { id: '', en: '' },
        desc: { id: 'Dokumen ringkas yang memuat gambaran umum suatu mata kuliah - tujuan pembelajaran, topik yang akan dibahas, dan referensi yang dipakai selama satu semester.',
                en: 'A concise document outlining a course’s overview - its learning objectives, topics to be covered, and references used throughout the semester.' } },
      { term: 'Transkrip Akademik', full: { id: '', en: '' },
        desc: { id: 'Dokumen resmi berisi rekap seluruh nilai dan mata kuliah yang sudah kamu tempuh sepanjang masa studi, termasuk IPK akhir - biasanya dibutuhkan untuk keperluan wisuda, melamar kerja, atau melanjutkan studi.',
                en: 'An official document summarizing all the grades and courses you have taken throughout your studies, including your final IPK - usually needed for graduation, job applications, or further studies.' } }
    ]
  },
  { title: { id: 'Identitas & Sistem Digital', en: 'Identity & Digital Systems' },
    terms: [
      { term: 'Akun Office 365', full: { id: '', en: '' },
        desc: { id: 'Akun resmi kampus yang jadi satu pintu masuk untuk mengakses berbagai sistem kampus sekaligus, termasuk email kampus dan layanan Microsoft 365 (Word, Excel, Teams, dan lainnya).',
                en: 'Your official campus account, used as a single sign-on to access various campus systems at once, including your campus email and Microsoft 365 services (Word, Excel, Teams, and more).' } },
      { term: 'KTM', full: { id: 'Kartu Tanda Mahasiswa', en: 'Student ID Card' },
        desc: { id: 'Kartu identitas resmi sebagai mahasiswa, biasanya dibutuhkan untuk berbagai keperluan administrasi kampus maupun di luar kampus (mis. diskon pelajar).',
                en: 'Your official student identity card, usually needed for various administrative purposes both on and off campus (e.g. student discounts).' } },
      { term: 'Microsoft Teams', full: { id: '', en: '' },
        desc: { id: 'Platform yang dipakai kampus untuk perkuliahan daring, menggantikan sistem e-learning konvensional - dipakai untuk kelas online, materi kuliah, tugas, sampai diskusi dengan dosen dan teman sekelas.',
                en: 'The platform the campus uses for online classes, replacing a conventional e-learning system - used for online classes, course materials, assignments, and discussions with lecturers and classmates.' } },
      { term: 'MIKA', full: { id: '', en: '' },
        desc: { id: 'Portal akademik online kampus - tempat kamu bisa melihat KRS, KHS, IPK, jadwal kuliah, dan informasi akademik lainnya.',
                en: 'The campus’s online academic portal - where you can view your KRS, KHS, IPK, class schedule, and other academic information.' } },
      { term: 'NIM', full: { id: 'Nomor Induk Mahasiswa', en: 'Student ID Number' },
        desc: { id: 'Nomor unik yang menjadi identitas resmimu sebagai mahasiswa, dipakai di hampir semua sistem dan dokumen akademik (KRS, KHS, transkrip, dan lainnya).',
                en: 'A unique number that serves as your official identity as a student, used across almost every academic system and document (KRS, KHS, transcript, and more).' } }
    ]
  },
  { title: { id: 'Kategori Mata Kuliah', en: 'Course Categories' },
    terms: [
      { term: 'MKWF', full: { id: 'Mata Kuliah Wajib Fakultas', en: 'Mata Kuliah Wajib Fakultas (Faculty-Required Courses)' },
        desc: { id: 'Mata kuliah yang wajib diambil seluruh mahasiswa dalam satu fakultas (bukan cuma satu program studi), untuk membekali kompetensi dasar yang relevan dengan bidang ilmu fakultas tersebut.',
                en: 'Courses required for all students within one faculty (not just a single study program), aimed at building foundational competencies relevant to that faculty’s field.' } },
      { term: 'MKWK', full: { id: 'Mata Kuliah Wajib Kurikulum', en: 'Mata Kuliah Wajib Kurikulum (Nationally Required Courses)' },
        desc: { id: 'Mata kuliah yang wajib ada di setiap kurikulum perguruan tinggi di Indonesia sesuai undang-undang, seperti Agama, Pancasila, Kewarganegaraan, dan Bahasa Indonesia.',
                en: 'Courses that must exist in every Indonesian higher-education curriculum by law, such as Religion, Pancasila, Civics, and Indonesian Language.' } },
      { term: 'MKWP', full: { id: 'Mata Kuliah Wajib Prodi', en: 'Mata Kuliah Wajib Prodi (Study-Program-Required Courses)' },
        desc: { id: 'Mata kuliah yang wajib diambil seluruh mahasiswa dalam program studi ini, untuk mencapai kompetensi khusus sesuai keahlian dan fokus bidang studi.',
                en: 'Courses required for all students within this specific study program, aimed at achieving specialized competencies matching the program’s field of expertise.' } },
      { term: 'MKWU', full: { id: 'Mata Kuliah Wajib Universitas', en: 'Mata Kuliah Wajib Universitas (University-Required Courses)' },
        desc: { id: 'Mata kuliah yang wajib diambil seluruh mahasiswa di universitas, dari program studi mana pun, untuk memastikan capaian pembelajaran selaras dengan visi dan misi universitas.',
                en: 'Courses required for all students across the university, regardless of study program, ensuring learning outcomes align with the university’s vision and mission.' } }
    ]
  },
  { title: { id: 'Kelulusan & Wisuda', en: 'Graduation' },
    terms: [
      { term: 'Predikat Kelulusan', full: { id: '', en: '' },
        desc: { id: 'Predikat yang diberikan berdasarkan IPK akhir kamu saat lulus, seperti Memuaskan, Sangat Memuaskan, atau Dengan Pujian (Cum Laude). Predikat ini biasanya tercantum di transkrip dan ijazahmu.',
                en: 'The honor/distinction awarded based on your final IPK upon graduating, such as Satisfactory, Very Satisfactory, or With Honors (Cum Laude). This is usually listed on your transcript and diploma.' } },
      { term: 'Sidang Tugas Akhir', full: { id: '', en: '' },
        desc: { id: 'Ujian untuk mempertahankan Tugas Akhir/Skripsi kamu di depan dosen penguji, biasanya dilakukan setelah Tugas Akhir selesai dan disetujui dosen pembimbing. Kalau lulus sidang, kamu tinggal selangkah lagi menuju kelulusan.',
                en: 'The examination where you defend your Final Project/Thesis in front of examining lecturers, usually held once your Final Project is finished and approved by your advisor. Passing this puts you one step away from graduating.' } },
      { term: 'Wisuda', full: { id: '', en: '' },
        desc: { id: 'Upacara resmi pengukuhan kelulusan, tempat kamu resmi dinyatakan sebagai lulusan dan menerima ijazah.',
                en: 'The official graduation ceremony, where you are formally declared a graduate and receive your diploma.' } },
      { term: 'Yudisium', full: { id: '', en: '' },
        desc: { id: 'Rapat resmi penetapan status dan predikat kelulusanmu, biasanya dilakukan setelah kamu lulus Sidang Tugas Akhir dan sebelum Wisuda.',
                en: 'The official meeting that determines your graduation status and honors, usually held after you pass your Sidang Tugas Akhir and before Wisuda.' } }
    ]
  },
  { title: { id: 'Konsep Kurikulum', en: 'Curriculum Concepts' },
    terms: [
      { term: 'Kurikulum', full: { id: '', en: '' },
        desc: { id: 'Seperangkat rencana yang mengatur tujuan, isi, bahan pelajaran, dan cara pembelajaran, dipakai sebagai pedoman penyelenggaraan perkuliahan untuk mencapai tujuan pendidikan tertentu. Kurikulum dievaluasi dan diperbarui secara berkala mengikuti perkembangan ilmu dan kebutuhan industri.',
                en: 'A set of plans governing the goals, content, materials, and methods of learning, used as the guideline for running courses to achieve specific educational objectives. The curriculum is evaluated and updated periodically to keep up with advances in the field and industry needs.' } },
      { term: 'OBE', full: { id: 'Outcome-Based Education', en: 'Outcome-Based Education' },
        desc: { id: 'Pendekatan pendidikan yang berfokus pada capaian pembelajaran yang terukur (pengetahuan, keterampilan, sikap) sebagai dasar merancang kurikulum - kurikulum program studi ini dirancang mengikuti pendekatan ini. Salah satu penerapannya di kelas: kalau kamu gagal di suatu asesmen (mis. tugas atau kuis) pada suatu mata kuliah, kamu biasanya diberi kesempatan untuk memperbaikinya, paling lambat sebelum UAS mata kuliah tersebut.',
                en: 'An educational approach that focuses on measurable learning outcomes (knowledge, skills, attitudes) as the basis for designing a curriculum - this study program’s curriculum is designed following this approach. One way this shows up in class: if you fail a particular assessment (e.g. an assignment or quiz) in a course, you are usually given a chance to improve it, at the latest before that course\'s UAS (final exam).' } },
      { term: 'Peminatan', full: { id: '', en: '' },
        desc: { id: 'Jalur konsentrasi keahlian yang kamu pilih mulai semester 5, menentukan sebagian mata kuliah lanjutan yang akan kamu ambil. Di program studi ini ada dua peminatan: SSD dan AISD.',
                en: 'The specialization track you choose starting semester 5, determining part of the advanced courses you will take afterward. This study program offers two tracks: SSD and AISD.' } }
    ]
  },
  { title: { id: 'Nilai & Performa Akademik', en: 'Grades & Academic Performance' },
    terms: [
      { term: 'IP', full: { id: 'Indeks Prestasi', en: 'Semester GPA' },
        desc: { id: 'Nilai rata-rata yang menggambarkan performa akademikmu dalam SATU semester, dihitung dari nilai tiap mata kuliah dikali SKS-nya, dalam skala 0-4.',
                en: 'The average score reflecting your academic performance in a SINGLE semester, calculated from each course’s grade weighted by its SKS, on a 0-4 scale.' } },
      { term: 'IPK', full: { id: 'Indeks Prestasi Kumulatif', en: 'Cumulative GPA' },
        desc: { id: 'Sama seperti IP, tapi dihitung dari SELURUH semester yang sudah kamu jalani, bukan cuma satu semester. IPK ini yang biasanya jadi tolok ukur utama performa akademikmu secara keseluruhan.',
                en: 'Similar to IP, but averaged across ALL the semesters you have completed so far, not just one. This is usually the main measure of your overall academic performance.' } },
      { term: 'SKS', full: { id: 'Satuan Kredit Semester', en: 'Semester Credit Unit' },
        desc: { id: 'Satuan yang menunjukkan beban belajar suatu mata kuliah - makin besar SKS-nya, makin besar bobot dan waktu belajarnya. Total SKS yang kamu ambil tiap semester diatur lewat KRS.',
                en: 'A unit that measures a course’s study load - the higher a course’s SKS, the heavier its weight and the more study time it typically needs. The total SKS you take each semester is set through your KRS.' } },
      { term: 'UAS', full: { id: 'Ujian Akhir Semester', en: 'Ujian Akhir Semester (Final Exam)' },
        desc: { id: 'Ujian yang diselenggarakan di akhir semester, biasanya mencakup seluruh materi mata kuliah selama satu semester dan jadi salah satu komponen penilaian akhir.',
                en: 'The exam held at the end of the semester, usually covering all the course material for that semester and serving as one component of the final grade.' } },
      { term: 'UTS', full: { id: 'Ujian Tengah Semester', en: 'Ujian Tengah Semester (Midterm Exam)' },
        desc: { id: 'Ujian yang diselenggarakan di pertengahan semester, biasanya mencakup materi paruh pertama mata kuliah dan jadi salah satu komponen penilaian.',
                en: 'The exam held midway through the semester, usually covering the first half of the course material and serving as one component of the grade.' } }
    ]
  },
  { title: { id: 'Organisasi & Kompetisi Mahasiswa', en: 'Student Organizations & Competitions' },
    terms: [
      { term: 'GEMASTIK', full: { id: '', en: '' },
        desc: { id: 'Kompetisi TIK tahunan tingkat nasional untuk mahasiswa se-Indonesia, diselenggarakan Kemendikbudristek/Belmawa - salah satu ajang bergengsi yang bisa kamu ikuti untuk menambah pengalaman dan prestasi.',
                en: 'An annual national-level ICT competition for university students across Indonesia, organized by Kemendikbudristek/Belmawa - one of the prestigious events you can join to build experience and achievements.' } },
      { term: 'HMPS', full: { id: 'Himpunan Mahasiswa Program Studi', en: 'Himpunan Mahasiswa Program Studi (Student Association)' },
        desc: { id: 'Organisasi kemahasiswaan di tingkat program studi. Di program studi kita, namanya BITSMIKRO - tempat yang baik untuk berorganisasi, mengembangkan soft skill, dan mengenal teman seangkatan maupun senior.',
                en: 'The student organization at the study-program level. At our study program, it is called BITSMIKRO - a good place to get involved in organizational activities, develop soft skills, and get to know classmates and seniors.' } },
      { term: 'PKM', full: { id: 'Program Kreativitas Mahasiswa', en: 'Program Kreativitas Mahasiswa' },
        desc: { id: 'Program hibah dan kompetisi kreativitas mahasiswa tingkat nasional dari Kemendikbudristek/Belmawa, mencakup berbagai bidang (penelitian, kewirausahaan, pengabdian masyarakat, karya inovatif, dan lainnya) - kesempatan bagus untuk mengasah kemampuan sekaligus menambah portofolio.',
                en: 'A national student creativity grant and competition program from Kemendikbudristek/Belmawa, covering various fields (research, entrepreneurship, community service, innovative work, and more) - a great opportunity to sharpen your skills while building your portfolio.' } },
      { term: 'UKM', full: { id: 'Unit Kegiatan Mahasiswa', en: 'Unit Kegiatan Mahasiswa (Student Activity Unit)' },
        desc: { id: 'Wadah kegiatan mahasiswa di luar organisasi program studi, biasanya berdasarkan minat/bakat tertentu (olahraga, seni, keagamaan, dan lainnya) - salah satu cara seru untuk mengembangkan diri di luar akademik.',
                en: 'Student activity groups outside the study-program organization, usually based on specific interests or talents (sports, arts, religious activities, and more) - a fun way to develop yourself outside academics.' } }
    ]
  },
  { title: { id: 'Pembelajaran di Luar Program Studi', en: 'Learning Outside the Study Program' },
    desc: { id: 'Kebijakan nasional yang memberi mahasiswa kesempatan belajar di luar program studi, seperti Magang, Studi Independen, atau Penelitian dan Pengabdian Bersama Dosen - bisa kamu ambil mulai semester 6 sebagai alternatif mata kuliah peminatan.',
            en: 'A national policy giving students the opportunity to learn outside their study program, such as through an Internship (Magang), Independent Study, or Research and Community Service with a Lecturer - available starting semester 6 as an alternative to specialization courses.' },
    terms: [
      { term: 'Magang', full: { id: '', en: '' },
        desc: { id: 'Salah satu bentuk kegiatan MBKM di mana kamu bekerja langsung di perusahaan atau instansi mitra untuk mendapatkan pengalaman kerja nyata. Bisa kamu ambil dari semester 6, menggantikan mata kuliah peminatan (20 SKS).',
                en: 'One form of MBKM activity where you work directly at a partner company or institution to gain real work experience. Can be taken starting semester 6, in place of specialization courses (20 credits).' } },
      { term: 'Penelitian dan Pengabdian Bersama Dosen', full: { id: '', en: '' },
        desc: { id: 'Program yang memungkinkanmu terlibat langsung dalam penelitian atau pengabdian masyarakat bersama dosen. Sama seperti MBKM, program ini juga bisa mulai kamu ambil dari semester 6 sebagai alternatif mata kuliah peminatan.',
                en: 'A program that lets you get directly involved in research or community service alongside a lecturer. Like MBKM, this can also be taken starting semester 6 as an alternative to the specialization courses.' } },
      { term: 'Studi Independen', full: { id: '', en: '' },
        desc: { id: 'Salah satu bentuk kegiatan MBKM di mana kamu mengerjakan proyek belajar mandiri (kadang lintas kampus) sesuai minatmu, biasanya dengan bimbingan dari luar program studi. Bisa kamu ambil dari semester 6, menggantikan mata kuliah peminatan (20 SKS).',
                en: 'One form of MBKM activity where you work on a self-directed learning project (sometimes across campuses) based on your interests, usually guided from outside the study program. Can be taken starting semester 6, in place of specialization courses (20 credits).' } }
    ]
  },
  { title: { id: 'Peran Pendukung Akademik', en: 'Academic Support Roles' },
    terms: [
      { term: 'Asisten Laboratorium', full: { id: '', en: '' },
        desc: { id: 'Mahasiswa atau tenaga kependidikan yang membantu jalannya praktikum di laboratorium - mis. mendampingi mahasiswa, memeriksa tugas praktikum, atau menjaga peralatan lab.',
                en: 'A student or staff member who helps run practicum sessions in the laboratory - e.g. assisting students, checking practicum assignments, or maintaining lab equipment.' } },
      { term: 'Dosen Wali / PA', full: { id: 'Penasihat Akademik', en: 'Academic Advisor' },
        desc: { id: 'Dosen yang ditunjuk membimbingmu secara akademik selama kuliah - tempat utama untuk berkonsultasi soal KRS, IPK, rencana studi, cuti, sampai masalah akademik lainnya.',
                en: 'The lecturer assigned to guide you academically throughout your studies - your main point of contact for questions about KRS, IPK, study planning, academic leave, or any other academic concern.' } },
      { term: 'Komisaris Kelas', full: { id: '', en: '' },
        desc: { id: 'Mahasiswa yang dipilih/ditunjuk sebagai perwakilan satu kelas atau angkatan, menjembatani komunikasi antara mahasiswa dengan dosen atau program studi (mis. menyampaikan informasi, koordinasi jadwal, dan lainnya).',
                en: 'A student elected or appointed to represent one class or cohort, bridging communication between students and lecturers or the study program (e.g. relaying information, coordinating schedules, and more).' } }
    ]
  },
  { title: { id: 'Status & Keberlangsungan Studi', en: 'Status & Study Continuity' },
    terms: [
      { term: 'Cuti Akademik', full: { id: '', en: '' },
        desc: { id: 'Izin resmi untuk berhenti sementara dari perkuliahan selama satu semester atau lebih, tanpa berstatus keluar dari program studi. Tanyakan prosedur dan syaratnya ke Dosen Wali/PA atau bagian akademik.',
                en: 'Official permission to temporarily pause your studies for one or more semesters without being considered to have left the program. Ask your Dosen Wali/PA or the academic affairs office about the procedure and requirements.' } },
      { term: 'DO', full: { id: 'Drop Out', en: 'Drop Out' },
        desc: { id: 'Pemberhentian status kemahasiswaan secara paksa - konsekuensi akhir kalau Surat Peringatan (SP) sudah mencapai batas maksimum (SP3) tanpa perbaikan. Pantau terus IPK-mu dan jangan ragu berkonsultasi ke Dosen Wali/PA kalau merasa kesulitan.',
                en: 'Forced termination of student status - the final consequence once Surat Peringatan (SP) reaches its maximum level (SP3) without improvement. Keep track of your IPK and do not hesitate to consult your Dosen Wali/PA if you are struggling.' } },
      { term: 'Pengunduran Diri', full: { id: '', en: '' },
        desc: { id: 'Permohonan resmi dari mahasiswa untuk berhenti dari status kemahasiswaan secara sukarela (berbeda dari DO yang sifatnya paksaan). Kalau kamu mempertimbangkan ini, sebaiknya konsultasikan dulu dengan Dosen Wali/PA atau bagian akademik untuk memastikan kamu memahami konsekuensinya.',
                en: 'A student official request to voluntarily withdraw from their student status (different from DO, which is forced). If you are considering this, it is best to consult your Dosen Wali/PA or the academic affairs office first to make sure you understand the consequences.' } },
      { term: 'Remedial Semester', full: { id: '', en: '' },
        desc: { id: 'Remedial untuk memperbaiki nilai mata kuliah yang diambil pada semester yang SEDANG berjalan (bukan semester sebelumnya).',
                en: 'A remedial to improve your grade for a course taken in the CURRENT, ongoing semester (not a previous one).' } },
      { term: 'Remedial Ulang', full: { id: '', en: '' },
        desc: { id: 'Remedial untuk memperbaiki nilai mata kuliah yang diambil pada semester-semester SEBELUMNYA (bukan semester yang sedang berjalan).',
                en: 'A remedial to improve your grade for a course taken in a PREVIOUS semester (not the current one).' } },
      { term: 'SP', full: { id: 'Surat Peringatan', en: 'Surat Peringatan' },
        desc: { id: 'Surat teguran akademik yang diberikan kalau IPK kamu di bawah 2.0 pada semester 1-6, atau kalau kamu belum lulus di semester 8, 10, atau 12. Ada maksimal 3 tingkat (SP1, SP2, SP3) - kalau sudah sampai SP3 tanpa perbaikan, risikonya adalah DO. Segera konsultasikan ke Dosen Wali/PA kalau kamu menerima salah satunya.',
                en: 'An academic warning letter issued if your IPK falls below 2.0 in semesters 1-6, or if you have not graduated by semester 8, 10, or 12. There are up to 3 levels (SP1, SP2, SP3) - reaching SP3 without improvement risks DO. Consult your Dosen Wali/PA right away if you receive one.' } },
      { term: 'Status Aktif/Nonaktif', full: { id: '', en: '' },
        desc: { id: '"Aktif" berarti kamu terdaftar dan mengisi KRS pada semester berjalan; "Nonaktif" berarti kamu tidak melakukan registrasi semester itu. Status ini bisa memengaruhi masa studimu, jadi pastikan kamu aktif tiap semester kecuali sedang cuti resmi.',
                en: '"Active" means you are registered and have filled out your KRS for the current semester; "Inactive" means you did not register that semester. This status can affect your study duration, so make sure you stay active every semester unless you are on approved academic leave.' } }
    ]
  },
  { title: { id: 'Tingkat Fakultas', en: 'Faculty Level' },
    desc: { id: 'Unit yang mengelola sejumlah program studi dalam rumpun ilmu sejenis di suatu universitas. Program studi kita, S-1 Teknik Informatika, berada di bawah Fakultas Informatika.',
            en: 'An organizational unit that manages several study programs within a related field at a university. Our study program, S-1 Teknik Informatika, is under the Faculty of Informatics (Fakultas Informatika).' },
    terms: [
      { term: 'Dekan', full: { id: '', en: '' },
        desc: { id: 'Pemimpin tertinggi di tingkat fakultas, bertanggung jawab atas jalannya seluruh kegiatan akademik dan administratif fakultas, termasuk program studi-program studi di bawahnya.',
                en: 'The highest-ranking leader at the faculty level, responsible for running all academic and administrative activities within the faculty, including the study programs under it.' } },
      { term: 'Sekretaris Fakultas', full: { id: '', en: '' },
        desc: { id: 'Pejabat yang membantu Dekan menjalankan tugas administratif dan operasional di tingkat fakultas.',
                en: 'An official who assists the Dean in carrying out administrative and operational duties at the faculty level.' } },
      { term: 'Wakil Dekan', full: { id: '', en: '' },
        desc: { id: 'Pejabat yang membantu Dekan menjalankan tugas di tingkat fakultas, biasanya membawahi bidang tertentu (mis. akademik, kemahasiswaan, atau sumber daya).',
                en: 'An official who assists the Dean in carrying out duties at the faculty level, usually overseeing a specific area (e.g. academics, student affairs, or resources).' } }
    ]
  },
  { title: { id: 'Tingkat Program Studi', en: 'Study Program Level' },
    desc: { id: 'Unit penyelenggara pendidikan pada satu bidang keilmuan tertentu, tempat kamu resmi terdaftar sebagai mahasiswa. Kamu terdaftar di Program Studi S-1 Teknik Informatika, di bawah Fakultas Informatika.',
            en: 'The academic unit that runs a degree program in a specific field, where you are officially enrolled as a student. You are enrolled in the S-1 Teknik Informatika study program, under the Faculty of Informatics.' },
    terms: [
      { term: 'Ketua Program Studi', full: { id: '', en: '' },
        desc: { id: 'Pemimpin tertinggi di tingkat program studi, bertanggung jawab atas jalannya seluruh kegiatan akademik, kurikulum, dan administratif program studi - sering disingkat "Kaprodi".',
                en: 'The highest-ranking leader at the study-program level, responsible for running all academic, curriculum, and administrative activities within the study program - often abbreviated as "Kaprodi".' } },
      { term: 'Sekretaris Program Studi', full: { id: '', en: '' },
        desc: { id: 'Pejabat yang membantu Ketua Program Studi menjalankan tugas administratif dan operasional di tingkat program studi.',
                en: 'An official who assists the Ketua Program Studi (Head of Study Program) in carrying out administrative and operational duties at the study-program level.' } }
    ]
  },
  { title: { id: 'Tingkat Universitas', en: 'University Level' },
    terms: [
      { term: 'Rektor', full: { id: '', en: '' },
        desc: { id: 'Pemimpin tertinggi di tingkat universitas, bertanggung jawab atas seluruh kebijakan dan penyelenggaraan pendidikan di universitas, termasuk mengesahkan dokumen resmi seperti buku kurikulum program studi.',
                en: 'The highest-ranking leader at the university level, responsible for all policies and the overall administration of education at the university, including ratifying official documents such as a study program’s curriculum book.' } },
      { term: 'Sekretaris Universitas', full: { id: '', en: '' },
        desc: { id: 'Pejabat yang membantu Rektor menjalankan tugas administratif dan operasional di tingkat universitas.',
                en: 'An official who assists the Rector in carrying out administrative and operational duties at the university level.' } },
      { term: 'Wakil Rektor', full: { id: '', en: '' },
        desc: { id: 'Pejabat yang membantu Rektor menjalankan tugas di tingkat universitas, biasanya membawahi bidang tertentu (mis. akademik, kemahasiswaan, atau keuangan).',
                en: 'An official who assists the Rector in carrying out duties at the university level, usually overseeing a specific area (e.g. academics, student affairs, or finance).' } }
    ]
  }
];

var PANDUAN_REMINDER = {
  id: 'Ingat tiap akhir semester: cek KHS dan IPK kamu. Kalau ada mata kuliah yang belum lulus, kamu bisa ikut Remedial Semester (untuk mata kuliah semester ini) atau Remedial Ulang (untuk semester sebelumnya). IPK di bawah 2.0 juga bisa berujung Surat Peringatan (SP), jadi jangan sampai lengah.',
  en: 'Remember, at the end of every semester: check your KHS and IPK. If any course did not pass, you can take Remedial Semester (for a course from this semester) or Remedial Ulang (for a previous semester). An IPK below 2.0 can also lead to a Surat Peringatan (SP), so don’t let it slip.'
};

var PANDUAN_SEMESTERS = [
  { sem: 1, sks: 20,
    chapter: { id: 'Langkah Pertama', en: 'First Steps' },
    milestone: { id: 'Semester pertamamu - pastikan kamu sudah paham SKS, IP, dan IPK (lihat tab Istilah Penting), dan kenali Dosen Wali/PA-mu sebagai tempat bertanya soal akademik. Paket KRS semester 1-6 sudah otomatis disusun (auto-generate), jadi kamu tinggal fokus menjalani studi dengan baik sejak awal.', en: 'Your first semester - make sure you understand SKS, IP, and IPK (see the Key Terms tab), and get to know your Dosen Wali/PA as your point of contact for academic questions. Your KRS package for semesters 1-6 is auto-generated, so you can simply focus on doing well in your studies from the start.' },
    courses: [
    { id: 'Aljabar Linier', en: 'Linear Algebra' },
    { id: 'Matematika Diskrit', en: 'Discrete Mathematics' },
    { id: 'Pemrograman Komputer', en: 'Computer Programming' },
    { id: 'Wawasan Informatika', en: 'Introduction to Informatics' },
    { id: 'Sistem Otomasi Perkantoran', en: 'Office Automation Systems' },
    { id: 'Pengembangan Karakter: Kepemimpinan', en: 'Character Development: Leadership' }
  ]},
  { sem: 2, sks: 20,
    chapter: { id: 'Membangun Kebiasaan', en: 'Building Habits' },
    milestone: { id: 'Sudah terima KHS semester 1-mu? Cek IP kamu, dan kalau ada mata kuliah yang belum lulus, pertimbangkan ikut Remedial Semester supaya nilaimu tetap terjaga sebelum lanjut ke semester berikutnya.', en: 'Already got your semester 1 KHS? Check your IP, and if any course did not pass, consider taking Remedial Semester to keep your grades on track before moving into the next semester.' },
    courses: [
    { id: 'Kalkulus', en: 'Calculus' },
    { id: 'Basis Data', en: 'Databases' },
    { id: 'Desain dan Analisis Algoritma', en: 'Algorithm Design and Analysis' },
    { id: 'Organisasi dan Arsitektur Komputer', en: 'Computer Organization and Architecture' }
  ]},
  { sem: 3, sks: 20,
    chapter: { id: 'Memperluas Diri', en: 'Expanding Yourself' },
    milestone: { id: 'Selain menjaga performa akademikmu, mulai aktiflah di organisasi seperti HMPS atau UKM, dan ikut lomba/kompetisi seperti PKM atau GEMASTIK sesuai minatmu - selain menambah pengalaman, ini juga bisa jadi petunjuk awal peminatan yang cocok buatmu di semester 5 nanti. Jangan lupa laporkan pencapaianmu ke program studi lewat <a href="javascript:void(0)" onclick="openPortofolio()" class="panduan-inline-link">Portofolio Akademik</a> supaya tercatat resmi.', en: 'Besides keeping your academic performance on track, get involved in organizations like HMPS or UKM, and join competitions like PKM or GEMASTIK that match your interests - besides adding experience, this can also be an early clue toward the specialization that suits you in semester 5. Don’t forget to report your achievements to the study program through <a href="javascript:void(0)" onclick="openPortofolio()" class="panduan-inline-link">Academic Portfolio</a> so they get officially recorded.' },
    courses: [
    { id: 'Statistika', en: 'Statistics' },
    { id: 'Pengembangan Web Front-End', en: 'Front-End Web Development' },
    { id: 'Perancangan dan Pemrograman Berorientasi Objek', en: 'Object-Oriented Design and Programming' },
    { id: 'Sains Data', en: 'Data Science' },
    { id: 'Pengembangan Karakter: Agama', en: 'Character Development: Religion' }
  ]},
  { sem: 4, sks: 20,
    chapter: { id: 'Menyiapkan Pilihan', en: 'Preparing to Choose' },
    milestone: { id: 'Semester terakhirmu sebelum memilih peminatan - mulai pikirkan baik-baik jalur mana yang paling sesuai untukmu. Kalau masih ragu antara SSD atau AISD, coba ikut <a href="javascript:void(0)" onclick="openQuiz()" class="panduan-inline-link">Tes Peminatan</a> untuk membantu menentukan arah.', en: 'Your last semester before choosing a specialization - start thinking carefully about which track suits you best. If you are still unsure between SSD or AISD, try the <a href="javascript:void(0)" onclick="openQuiz()" class="panduan-inline-link">Specialization Test</a> to help decide.' },
    courses: [
    { id: 'Rekayasa Perangkat Lunak', en: 'Software Engineering' },
    { id: 'Pengembangan Web Back-End', en: 'Back-End Web Development' },
    { id: 'Pengembangan Perangkat Lunak Tangkas', en: 'Agile Software Development' },
    { id: 'Kecerdasan Artifisial', en: 'Artificial Intelligence' },
    { id: 'Pengembangan Karakter: Kewarganegaraan', en: 'Character Development: Civics' },
    { id: 'Pengembangan Karakter: Pancasila', en: 'Character Development: Pancasila' }
  ]},
  { sem: 5, sks: 20,
    chapter: { id: 'Menentukan Arah', en: 'Choosing Your Direction' },
    milestone: { id: 'Peminatan dimulai - pilih jalur SSD atau AISD sesuai minatmu, karena ini akan menentukan sebagian besar mata kuliahmu sampai semester 7.', en: 'Specialization begins - choose the SSD or AISD track based on your interest, since it will shape most of your courses through semester 7.' },
    courses: [
      { id: 'Metodologi Penelitian', en: 'Research Methodology' },
      { id: 'Sistem Operasi', en: 'Operating Systems' },
      { id: 'Pengembangan Aplikasi Mobile Front-End', en: 'Mobile Application Front-End Development' },
      { id: 'Bahasa Indonesia', en: 'Indonesian Language' }
    ],
    tracks: [
      { key: 'ssd', courses: [
        { id: 'Pengembangan dan Operasi', en: 'Development and Operations' },
        { id: 'Sistem Terdistribusi', en: 'Distributed Systems' }
      ]},
      { key: 'aisd', courses: [
        { id: 'Pembelajaran Mesin', en: 'Machine Learning' },
        { id: 'Pemrosesan Bahasa Alami', en: 'Natural Language Processing' }
      ]}
    ]
  },
  { sem: 6, sks: 20,
    chapter: { id: 'Memperluas Peluang', en: 'Expanding Your Opportunities' },
    milestone: { id: 'MBKM (Magang atau Studi Independen, 20 SKS) atau Penelitian dan Pengabdian Bersama Dosen bisa kamu ambil menggantikan mata kuliah peminatan semester ini - pertimbangkan baik-baik sesuai rencana kariermu sebelum memilih. Ini juga saat yang tepat untuk mulai memikirkan calon judul Tugas Akhir atau topik Proyek Informatika (capstone) yang ingin kamu kerjakan, supaya semester depan kamu sudah punya arah yang jelas.', en: 'MBKM (Internship or Independent Study, 20 credits) or Penelitian dan Pengabdian Bersama Dosen (Research and Community Service with a Lecturer) can be taken this semester in place of the specialization courses - weigh it carefully against your career plans before choosing. This is also a good time to start thinking about a potential Final Project title or Proyek Informatika (capstone) topic, so you already have a clear direction going into next semester.' },
    courses: [
      { id: 'Bahasa Inggris', en: 'English' },
      { id: 'Pengembangan Aplikasi Mobile Back-End', en: 'Mobile Application Back-End Development' },
      { id: 'Jaringan Komputer', en: 'Computer Networks' },
      { id: 'Komunikasi dan Negosiasi Bisnis Profesional', en: 'Professional Business Communication and Negotiation' }
    ],
    tracks: [
      { key: 'ssd', courses: [ { id: 'Komputasi Awan', en: 'Cloud Computing' } ] },
      { key: 'aisd', courses: [ { id: 'Visi Komputer', en: 'Computer Vision' } ] }
    ]
  },
  { sem: 7, sks: 18,
    chapter: { id: 'Menuju Puncak', en: 'Approaching the Peak' },
    milestone: { id: 'Proyek Informatika (proyek capstone) - Tugas Akhir/Skripsi juga sudah bisa mulai diambil dari semester ini, asalkan kamu sudah lulus minimal 110 SKS dan dokumen mahasiswa sudah disetujui. MBKM (Studi Independen atau Pertukaran Mahasiswa, 18 SKS) masih bisa jadi alternatif. Kalau berencana mulai TA, diskusikan topiknya dengan Dosen Wali sedini mungkin.', en: 'Proyek Informatika (capstone project) - you can also start taking your Final Project/Thesis from this semester onward, as long as you have passed at least 110 credits and your student documents have been approved. MBKM (Independent Study or Student Exchange, 18 credits) is still available as an alternative. If you plan to start your Final Project, discuss your topic with your academic advisor as early as possible.' },
    courses: [
      { id: 'Proyek Informatika', en: 'Informatics Capstone Project' },
      { id: 'Pengujian dan Kualitas Perangkat Lunak', en: 'Software Testing and Quality' },
      { id: 'Kewirausahaan Digital', en: 'Digital Entrepreneurship' },
      { id: 'Etika Kecerdasan Buatan', en: 'AI Ethics' },
      { id: 'Data Besar', en: 'Big Data' },
      { id: 'Tugas Akhir / Skripsi', en: 'Final Project / Thesis' }
    ]
  },
  { sem: 8, sks: 6,
    chapter: { id: 'Menuju Kelulusan', en: 'Heading Toward Graduation' },
    milestone: { id: 'Tugas Akhir/Skripsi (biasanya diselesaikan di semester ini kalau belum dimulai sejak semester 7) - syaratnya sudah lulus minimal 120 SKS dan dokumen mahasiswa sudah disetujui. Jaga komunikasi rutin dengan dosen pembimbing supaya progresmu tetap sesuai target kelulusan - semester ini juga jadi checkpoint pertama masa studi, kalau belum lulus di akhir semester 8 kamu akan menerima Surat Peringatan pertama (SP1).', en: 'Final Project/Thesis (usually completed this semester if not already started back in semester 7) - requires having passed at least 120 credits and having your student documents approved. Keep in regular contact with your thesis advisor to stay on track for graduation - this semester is also the first study-duration checkpoint: if you have not graduated by the end of semester 8, you will receive your first Surat Peringatan (SP1).' },
    courses: [
      { id: 'Tugas Akhir / Skripsi', en: 'Final Project / Thesis' }
    ]
  }
];

// Ditambahkan setelah user menyadari perjalanan yang digambarkan berhenti
// di "selesai Tugas Akhir" (semester 8), padahal subtitle halaman ini
// sendiri janji "sampai lulus" - Sidang, Yudisium, dan Wisuda belum
// pernah muncul sama sekali sebelumnya. Kartu ini mengisi jarak antara
// "Tugas Akhir selesai" dan "resmi jadi lulusan", ditampilkan SETELAH
// Semester VIII tapi SEBELUM PANDUAN_LANJUT (khusus jalur berhasil lulus
// tepat waktu - PANDUAN_LANJUT tetap khusus untuk yang belum selesai
// dalam 8 semester). Semester VIII sendiri di-rename chapter-nya dari
// "Garis Akhir" ke "Menuju Kelulusan" supaya metafora "garis akhir" yang
// sebenarnya dipindah ke sini, ke titik kelulusan yang sesungguhnya.
var PANDUAN_KELULUSAN = {
  title: { id: 'Kelulusan', en: 'Graduation' },
  chapter: { id: 'Garis Akhir', en: 'The Finish Line' },
  body: {
    id: '<p>Setelah Tugas Akhir/Skripsi kamu selesai dan disetujui Dosen Wali/PA atau dosen pembimbing, langkah berikutnya adalah Sidang Tugas Akhir - saatnya mempertahankan hasil karyamu di depan dosen penguji.</p><p>Kalau kamu lulus sidang, prosesnya berlanjut ke Yudisium (penetapan resmi status kelulusan dan Predikat Kelulusanmu), lalu ditutup dengan Wisuda sebagai lulusan Program Studi S-1 Teknik Informatika. Selamat menempuh perjalanan barumu!</p>',
    en: '<p>Once your Final Project/Thesis is finished and approved by your Dosen Wali/PA or thesis advisor, the next step is the Sidang Tugas Akhir (thesis defense) - time to defend your work in front of examining lecturers.</p><p>Pass the defense, and the process continues to Yudisium (the official determination of your graduation status and Predikat Kelulusan), capped off by Wisuda as a graduate of the S-1 Teknik Informatika study program. Congratulations on the new journey ahead!</p>'
  }
};

var PANDUAN_LANJUT = {
  title: { id: 'Semester 9 dan Seterusnya', en: 'Semester 9 and Beyond' },
  chapter: { id: 'Kalau Perjalanan Berlanjut', en: 'If the Journey Continues' },
  body: {
    id: '<p>Kalau studimu belum selesai dalam 8 semester, semester-semester berikutnya fokus untuk merampungkan mata kuliah yang tersisa dan/atau Tugas Akhir. Syarat minimal SKS untuk mengajukan Tugas Akhir/Skripsi juga terus naik mengikuti pola semester 7-8 kalau kamu belum memulainya - tanyakan angka pastinya ke Program Studi.</p><p>Ingat juga checkpoint masa studi berikutnya: Surat Peringatan kedua (SP2) kalau belum lulus di semester 10, dan Surat Peringatan ketiga/terakhir (SP3) kalau belum lulus di semester 12. Sebaiknya konsultasikan rencana studi lanjutanmu ke Program Studi sesegera mungkin supaya tetap terarah.</p>',
    en: '<p>If you have not finished your studies within 8 semesters, the following semesters focus on completing any remaining courses and/or your Final Project. The minimum-credit requirement to submit your Final Project/Thesis keeps increasing too, following a similar pattern to semesters 7-8 if you have not started it yet - check the exact number with your Study Program.</p><p>Keep the next study-duration checkpoints in mind as well: a second Surat Peringatan (SP2) if you have not graduated by semester 10, and a third and final Surat Peringatan (SP3) if you have not graduated by semester 12. It is best to consult your Study Program as soon as possible to keep your continued study plan on track.</p>'
  }
};

function panduanCoursePills_(courses) {
  return courses.map(function(c) {
    return '<span class="panduan-course-pill">' + escHtml(currentLang === 'en' ? c.en : c.id) + '</span>';
  }).join('');
}

// Istilah Penting tampil di tab tersendiri (bukan lagi akordeon 3 tingkat di
// atas perjalanan semester): kotak cari di hero, daftar kategori di samping
// (di HP jadi deretan chip), dan istilah sebagai kartu yang bisa dipindai
// sekilas. Urutan grup dan istilah tetap alfabetis seperti di
// PANDUAN_GLOSSARY_GROUPS.
var _panduanTab = 'journey';   // 'journey' | 'glossary'
var _panduanCat = -1;          // -1 = semua kategori, selain itu index grup
var _panduanQuery = '';

function panduanTermCount_() {
  return PANDUAN_GLOSSARY_GROUPS.reduce(function(n, g) { return n + g.terms.length; }, 0);
}

function panduanSetTab_(tab) {
  _panduanTab = tab;
  renderPanduan_();
}

function panduanSetCat_(i) {
  _panduanCat = i;
  _panduanQuery = '';
  var input = document.getElementById('panduanSearch');
  if (input) input.value = '';
  renderPanduanGlossary_();
}

function panduanSearch_(q) {
  _panduanQuery = q;
  if (q.trim()) _panduanCat = -1;
  renderPanduanGlossary_();
}

function renderPanduanTabs_() {
  var el = document.getElementById('panduanTabs');
  if (!el) return;
  el.innerHTML =
    '<button type="button" role="tab" aria-selected="' + (_panduanTab === 'journey') + '" class="panduan-tab' + (_panduanTab === 'journey' ? ' active' : '') + '" onclick="panduanSetTab_(\'journey\')">' + t('panduan_tab_journey') + '</button>' +
    '<button type="button" role="tab" aria-selected="' + (_panduanTab === 'glossary') + '" class="panduan-tab' + (_panduanTab === 'glossary' ? ' active' : '') + '" onclick="panduanSetTab_(\'glossary\')">' + t('panduan_tab_glossary') + ' · ' + panduanTermCount_() + '</button>';
  document.getElementById('panduanSearchWrap').style.display = _panduanTab === 'glossary' ? '' : 'none';
}

function renderPanduanGlossary_() {
  var el = document.getElementById('panduanContent');
  if (!el) return;
  var lang = currentLang === 'en' ? 'en' : 'id';
  var q = _panduanQuery.trim().toLowerCase();
  var cats = '<button type="button" class="panduan-cat' + (_panduanCat === -1 ? ' active' : '') + '" onclick="panduanSetCat_(-1)">' +
      '<span>' + t('panduan_cat_all') + '</span><span class="panduan-cat-n">' + panduanTermCount_() + '</span></button>' +
    PANDUAN_GLOSSARY_GROUPS.map(function(g, i) {
      return '<button type="button" class="panduan-cat' + (_panduanCat === i ? ' active' : '') + '" onclick="panduanSetCat_(' + i + ')">' +
        '<span>' + escHtml(g.title[lang]) + '</span><span class="panduan-cat-n">' + g.terms.length + '</span></button>';
    }).join('');

  var sections = PANDUAN_GLOSSARY_GROUPS.map(function(g, i) {
    if (_panduanCat !== -1 && _panduanCat !== i) return '';
    var terms = g.terms.filter(function(tm) {
      if (!q) return true;
      // Kueri pendek (mis. 'ip') hanya dicocokkan ke nama istilah, supaya tidak
      // ikut menangkap potongan kata di deskripsi (mis. 'transkrip').
      var hay = tm.term + ' ' + (tm.full[lang] || '') + (q.length >= 3 ? ' ' + tm.desc[lang] : '');
      return hay.toLowerCase().indexOf(q) !== -1;
    });
    if (!terms.length) return '';
    return '<section class="panduan-gl-section">' +
      '<h2 class="panduan-gl-title">' + escHtml(g.title[lang]) + '</h2>' +
      '<div class="panduan-gl-count">' + t('panduan_term_count', { n: terms.length }) + '</div>' +
      (g.desc ? '<p class="panduan-gl-desc">' + escHtml(g.desc[lang]) + '</p>' : '') +
      '<div class="panduan-gl-grid">' + terms.map(function(tm) {
        var full = tm.full[lang];
        return '<article class="panduan-term">' +
          '<div class="panduan-term-name">' + escHtml(tm.term) + '</div>' +
          (full ? '<div class="panduan-term-full">' + escHtml(full) + '</div>' : '') +
          '<p class="panduan-term-desc">' + escHtml(tm.desc[lang]) + '</p>' +
        '</article>';
      }).join('') + '</div>' +
    '</section>';
  }).join('');

  if (!sections) sections = '<p class="msg-center">' + t('panduan_search_empty', { q: escHtml(_panduanQuery.trim()) }) + '</p>';

  el.innerHTML = '<div class="panduan-gl-layout">' +
    '<nav class="panduan-cats" aria-label="' + t('panduan_cat_label') + '">' +
      '<span class="panduan-cats-label">' + t('panduan_cat_label') + '</span>' + cats +
    '</nav>' +
    '<div class="panduan-gl-content">' + sections + '</div>' +
  '</div>';
}

// Milestone/reminder/lanjut TIDAK di-escHtml - semua kontennya statis dan
// ditulis langsung di sini (bukan input pengguna), dan beberapa sengaja
// berisi tautan (mis. <a onclick="openPortofolio()">) ke fitur lain di
// situs. Beda dari kartu istilah di tab Istilah Penting dan panduan-course-pill
// (tetap di-escHtml, tidak ada alasan untuk berisi HTML).
function renderPanduan_() {
  var el = document.getElementById('panduanContent');
  if (!el) return;
  renderPanduanTabs_();
  if (_panduanTab === 'glossary') { renderPanduanGlossary_(); return; }
  var html = '<div class="panduan-sem-card panduan-lanjut-card">' +
    '<div class="panduan-sem-note" style="margin:0;">' + (currentLang === 'en' ? PANDUAN_REMINDER.en : PANDUAN_REMINDER.id) + '</div>' +
    '</div>';
  html += PANDUAN_SEMESTERS.map(function(s) {
    var milestoneHtml = s.milestone
      ? '<div class="panduan-sem-note">' + (currentLang === 'en' ? s.milestone.en : s.milestone.id) + '</div>'
      : '';
    var tracksHtml = (s.tracks || []).map(function(tr) {
      return '<div class="panduan-track-group">' +
        '<span class="result-chip chip-' + tr.key + '">' + tr.key.toUpperCase() + '</span>' +
        '<div class="panduan-course-list">' + panduanCoursePills_(tr.courses) + '</div>' +
        '</div>';
    }).join('');
    var chapterText = currentLang === 'en' ? s.chapter.en : s.chapter.id;
    return '<div class="panduan-sem-card">' +
      '<div class="panduan-sem-head">' +
        '<div><div class="panduan-sem-title">' + t('panduan_semester_label') + ' ' + PANDUAN_ROMAN[s.sem - 1] + '</div>' +
        '<div class="panduan-sem-chapter">' + escHtml(chapterText) + '</div></div>' +
        '<div class="panduan-sem-sks">' + s.sks + ' ' + t('panduan_sks_unit') + '</div>' +
      '</div>' +
      milestoneHtml +
      '<div class="panduan-course-list">' + panduanCoursePills_(s.courses) + '</div>' +
      tracksHtml +
      '</div>';
  }).join('');

  html += '<div class="panduan-sem-card panduan-kelulusan-card">' +
    '<div class="panduan-sem-title">' + escHtml(currentLang === 'en' ? PANDUAN_KELULUSAN.title.en : PANDUAN_KELULUSAN.title.id) + '</div>' +
    '<div class="panduan-sem-chapter panduan-kelulusan-chapter">' + escHtml(currentLang === 'en' ? PANDUAN_KELULUSAN.chapter.en : PANDUAN_KELULUSAN.chapter.id) + '</div>' +
    '<div class="panduan-sem-note" style="margin-top:6px;">' + (currentLang === 'en' ? PANDUAN_KELULUSAN.body.en : PANDUAN_KELULUSAN.body.id) + '</div>' +
    '</div>';

  html += '<div class="panduan-sem-card panduan-lanjut-card">' +
    '<div class="panduan-sem-title">' + escHtml(currentLang === 'en' ? PANDUAN_LANJUT.title.en : PANDUAN_LANJUT.title.id) + '</div>' +
    '<div class="panduan-sem-chapter">' + escHtml(currentLang === 'en' ? PANDUAN_LANJUT.chapter.en : PANDUAN_LANJUT.chapter.id) + '</div>' +
    '<div class="panduan-sem-note" style="margin-top:6px;">' + (currentLang === 'en' ? PANDUAN_LANJUT.body.en : PANDUAN_LANJUT.body.id) + '</div>' +
    '</div>';

  el.innerHTML = html;
}

function openPanduan(noPush) {
  scHideAllViews_();
  document.getElementById('panduanView').style.display = 'block';
  setCleanPath_('/student-guide/', noPush);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPanduan_();
}

// ------ DAFTAR DOSEN ------
// Sumber data: sheet DOSEN (diisi admin lewat import Excel "timpa penuh",
// lihat Code.gs importDosen/getDosenList). SINTA ID dipakai untuk link
// keluar ke profil SINTA masing-masing dosen (bukan disalin sebagai data
// prestasi terpisah - publikasi/sitasi sudah dikelola SINTA sendiri).
let dosenList_ = null;
// Filter chip (bukan badge di tiap kartu lagi - user merasa badge per kartu
// terlalu ramai/"lebay") - tiga flag independen dari sheet DOSEN (Dosen
// Tetap Program Studi, Pembimbing TA 1, Pembimbing TA 2), tiap chip aktif
// MENYARING (AND): dosen harus cocok dengan SEMUA chip yang sedang aktif.
var dosenFilters_ = { tetap: false, ta1: false, ta2: false };

function dosenToggleFilter_(key) {
  dosenFilters_[key] = !dosenFilters_[key];
  renderDosen_();
}

function dosenFilterBarHtml_() {
  return '<div class="sc-chipbar" style="margin-bottom:14px;">' +
    '<button type="button" class="sc-fchip' + (dosenFilters_.tetap ? ' active' : '') + '" onclick="dosenToggleFilter_(\'tetap\')">' + t('dosen_badge_tetap') + '</button>' +
    '<button type="button" class="sc-fchip' + (dosenFilters_.ta1 ? ' active' : '') + '" onclick="dosenToggleFilter_(\'ta1\')">' + t('dosen_badge_ta1') + '</button>' +
    '<button type="button" class="sc-fchip' + (dosenFilters_.ta2 ? ' active' : '') + '" onclick="dosenToggleFilter_(\'ta2\')">' + t('dosen_badge_ta2') + '</button>' +
    '</div>';
}

var DOSEN_ICON_EXTERNAL = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

// Jumlah karya Showcase per nama dosen pembimbing, dihitung dari galeri
// publik (sudah di-cache di server) di latar belakang. Tautan "Karya
// bimbingan" hanya muncul untuk dosen yang punya karya, dan membuka galeri
// Showcase yang langsung tersaring ke dosen itu (/showcase/?dosen=Nama).
let dosenKaryaCount_ = null;

// Nama dicocokkan tanpa tanda baca/spasi/huruf besar, karena karya lama bisa
// menulis nama dosen sedikit berbeda (mis. tanpa koma setelah nama).
// Sama dengan scNormName_ di showcase.js.
function dosenNormName_(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function loadDosenKaryaCount_() {
  if (dosenKaryaCount_) return;
  try {
    var res = await gasGet({ action: 'showcase_galeri' });
    if (!res || !res.ok) return;
    var counts = {};
    (res.items || []).forEach(function(it) {
      (it.dosenPembimbing || []).forEach(function(n) { var k = dosenNormName_(n); counts[k] = (counts[k] || 0) + 1; });
    });
    dosenKaryaCount_ = counts;
    if (document.getElementById('dosenView').style.display !== 'none') renderDosen_();
  } catch (e) { /* tautan karya bimbingan bersifat tambahan */ }
}

function dosenCardHtml_(d) {
  var sintaHtml = d.sintaId
    ? '<a class="dosen-sinta-link" href="https://sinta.kemdiktisaintek.go.id/authors/profile/' + encodeURIComponent(d.sintaId) + '" target="_blank" rel="noopener">' + DOSEN_ICON_EXTERNAL + t('dosen_sinta_link') + '</a>'
    : '';
  var nKarya = dosenKaryaCount_ && dosenKaryaCount_[dosenNormName_(d.nama)];
  var karyaHtml = nKarya
    ? '<a class="dosen-sinta-link" href="/showcase/?dosen=' + encodeURIComponent(d.nama) + '">' + t('dosen_karya_link', { n: nKarya }) + '</a>'
    : '';
  return '<div class="dosen-card">' +
    '<div class="dosen-card-name">' + escHtml(d.nama) + '</div>' +
    ((sintaHtml || karyaHtml) ? '<div class="dosen-card-links">' + sintaHtml + karyaHtml + '</div>' : '') +
    '</div>';
}

function renderDosen_() {
  var el = document.getElementById('dosenContent');
  if (!el || !dosenList_) return;
  if (!dosenList_.length) {
    el.innerHTML = '<p class="msg-error">' + t('dosen_empty') + '</p>';
    return;
  }
  var filtered = dosenList_.filter(function(d) {
    if (dosenFilters_.tetap && !d.dosenTetap) return false;
    if (dosenFilters_.ta1 && !d.dosenTa1) return false;
    if (dosenFilters_.ta2 && !d.dosenTa2) return false;
    return true;
  });
  var gridHtml = filtered.length
    ? '<div class="dosen-grid">' + filtered.map(dosenCardHtml_).join('') + '</div>'
    : '<p class="msg-error">' + t('dosen_filter_empty') + '</p>';
  el.innerHTML = dosenFilterBarHtml_() + gridHtml;
}

async function openDosen(noPush) {
  scHideAllViews_();
  document.getElementById('dosenView').style.display = 'block';
  setCleanPath_('/lecturers/', noPush);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  loadDosenKaryaCount_();
  var el = document.getElementById('dosenContent');
  if (dosenList_) { renderDosen_(); return; }
  el.innerHTML = '';
  try {
    const res = await gasGet({ action: 'dosen_list' });
    if (res.ok) {
      dosenList_ = res.dosen;
      renderDosen_();
    } else {
      el.innerHTML = '<p class="msg-error">' + t('dosen_error') + '</p>';
    }
  } catch (e) {
    el.innerHTML = '<p class="msg-error">' + t('dosen_error') + '</p>';
  }
}

let quizConfigApplied = false;

async function ensureQuizConfig() {
  if (quizConfigApplied) return;
  const toastTimer = setTimeout(() => showToast(t('memuat_tes')), 300);
  const quiz = await fetchQuizConfig();
  clearTimeout(toastTimer);
  if (quiz && Array.isArray(quiz.questions) && quiz.questions.length
      && quiz.tracks && quiz.tracks.SSD && quiz.tracks.AISD) {
    QUIZ     = quiz.questions.map(q => ({ q: q.q, opts: q.opts }));
    PEM_INFO = quiz.tracks;
  }
  quizConfigApplied = true;
}

async function openQuiz(noPush) {
  scHideAllViews_();
  document.getElementById('quizView').style.display  = 'block';
  setCleanPath_('/specialization/', noPush);
  await ensureQuizConfig();
  startQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ------ TES PEMINATAN ------
var QUIZ = [
  { q: { id: 'Saat mengerjakan proyek software, kamu lebih tertarik...', en: "When working on a software project, you're more drawn to..." }, opts: [
    { text: { id: 'Merancang sistem yang bisa digunakan banyak orang secara bersamaan tanpa gangguan', en: 'Designing a system that many people can use simultaneously without disruption' }, pem: 'SSD' },
    { text: { id: 'Membuat sistem yang bisa belajar dari data dan mengambil keputusan sendiri', en: 'Building a system that can learn from data and make decisions on its own' }, pem: 'AISD' }
  ]},
  { q: { id: 'Kalau ada waktu luang untuk belajar hal baru, kamu lebih tertarik mendalami...', en: "If you had free time to learn something new, you'd rather dive into..." }, opts: [
    { text: { id: 'Cara kerja server dan infrastruktur agar aplikasi tetap tersedia 24 jam tanpa gangguan', en: 'How servers and infrastructure work to keep an application available 24/7 without disruption' }, pem: 'SSD' },
    { text: { id: 'Cara kerja algoritma dan statistik di balik prediksi otomatis', en: 'How algorithms and statistics work behind automatic predictions' }, pem: 'AISD' }
  ]},
  { q: { id: 'Kalau lagi iseng ngoding buat senang-senang, kamu lebih suka bikin...', en: "If you were coding just for fun, you'd rather build..." }, opts: [
    { text: { id: 'Bot atau server kecil yang bisa jalan otomatis dan stabil terus-menerus', en: 'A small bot or server that runs automatically and stays stable non-stop' }, pem: 'SSD' },
    { text: { id: "Program yang bisa 'belajar' sesuatu dari data, misalnya chatbot yang bisa diajak ngobrol atau program yang mengenali objek dari foto", en: "A program that can 'learn' something from data, like a chatbot you can talk to or a program that recognizes objects in photos" }, pem: 'AISD' }
  ]},
  { q: { id: 'Ketika menemukan masalah pada sistem, kamu lebih suka...', en: "When you find a problem in a system, you'd rather..." }, opts: [
    { text: { id: 'Menelusuri log dan alur sistem secara sistematis sampai akar penyebabnya ditemukan', en: 'Trace logs and system flow systematically until you find the root cause' }, pem: 'SSD' },
    { text: { id: 'Bereksperimen mengubah data atau parameter model sampai hasil prediksinya membaik', en: 'Experiment with changing data or model parameters until the predictions improve' }, pem: 'AISD' }
  ]},
  { q: { id: 'Kalau ditugaskan bikin sistem untuk kampus, kamu lebih tertarik mengerjakan...', en: "If you were tasked with building a system for your campus, you'd rather work on..." }, opts: [
    { text: { id: 'Sistem ujian online yang tidak boleh down walau diakses 1000 mahasiswa sekaligus', en: 'An online exam system that must never go down even with 1,000 students accessing it at once' }, pem: 'SSD' },
    { text: { id: 'Sistem yang bisa mendeteksi mahasiswa berisiko terlambat lulus berdasarkan data akademiknya', en: "A system that can detect students at risk of graduating late based on their academic data" }, pem: 'AISD' }
  ]},
  { q: { id: 'Dalam kerja tim proyek, kamu paling nyaman berperan sebagai...', en: "In a project team, you're most comfortable as..." }, opts: [
    { text: { id: 'Orang yang memastikan semua bagian sistem terhubung dan berjalan dengan baik', en: 'The person who makes sure every part of the system connects and runs well' }, pem: 'SSD' },
    { text: { id: 'Orang yang menganalisis data proyek untuk memberi rekomendasi keputusan ke tim', en: 'The person who analyzes project data to give the team decision recommendations' }, pem: 'AISD' }
  ]},
  { q: { id: 'Bayangkan pekerjaan impianmu 5 tahun lagi, aktivitas hariannya lebih banyak...', en: "Imagine your dream job 5 years from now, your day-to-day would mostly involve..." }, opts: [
    { text: { id: 'Memastikan aplikasi tetap lancar dan stabil untuk banyak pengguna, dari pengujian sampai pemeliharaan sistem', en: 'Making sure an application stays smooth and stable for many users, from testing through to system maintenance' }, pem: 'SSD' },
    { text: { id: 'Mengolah data dan melatih model agar prediksinya semakin akurat dari waktu ke waktu', en: 'Processing data and training models so predictions get more accurate over time' }, pem: 'AISD' }
  ]}
];

var PEM_INFO = {
  SSD: {
    name: { id: 'Scalable Software Development', en: 'Scalable Software Development' },
    chip: 'SSD', chipClass: 'chip-ssd',
    desc: {
      id: 'Peminatan SSD berfokus pada pengembangan software dalam skala penggunaan yang lebih besar (digunakan oleh banyak orang). Kamu akan mendalami mata kuliah yang membekali kemampuan membangun, menguji, dan mengoperasikan perangkat lunak skala besar secara andal dan aman.',
      en: "The SSD track focuses on developing software at a larger usage scale (used by many people). You'll take courses that build your ability to build, test, and operate large-scale software reliably and securely."
    },
    careers: {
      id: ['Software QA Analyst', 'Software System Developer', 'Mobile Programmer Supervisor'],
      en: ['Software QA Analyst', 'Software System Developer', 'Mobile Programmer Supervisor']
    },
    courses: {
      id: ['Sistem Terdistribusi', 'Pengembangan dan Operasi', 'Komputasi Awan'],
      en: ['Distributed Systems', 'DevOps', 'Cloud Computing']
    }
  },
  AISD: {
    name: { id: 'Artificial Intelligence (AI)-Based Software Development', en: 'Artificial Intelligence (AI)-Based Software Development' },
    chip: 'AISD', chipClass: 'chip-aisd',
    desc: {
      id: 'Peminatan AISD berfokus pada pengembangan software berbasis kecerdasan buatan, seperti sistem pendukung keputusan dan sistem prediksi. Kamu akan mendalami mata kuliah yang membekali kemampuan mengolah data dan membangun model cerdas untuk diintegrasikan ke produk nyata.',
      en: "The AISD track focuses on developing AI-based software, such as decision support systems and predictive systems. You'll take courses that build your ability to process data and build intelligent models that get integrated into real products."
    },
    careers: {
      id: ['Data Analyst', 'Data Quality Engineer', 'Data Scientist Supervisor'],
      en: ['Data Analyst', 'Data Quality Engineer', 'Data Scientist Supervisor']
    },
    courses: {
      id: ['Pembelajaran Mesin', 'Pemrosesan Bahasa Alami', 'Visi Komputer'],
      en: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
    }
  }
};

var quizAnswers = [];
var quizCurrent = 0;
var quizSession = [];

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function startQuiz() {
  quizAnswers = [];
  quizCurrent = 0;
  quizSession = shuffleArray(QUIZ).map(function(q) {
    return { q: q.q, opts: shuffleArray(q.opts) };
  });
  renderQuizQuestion();
}

function renderQuizQuestion() {
  var q = quizSession[quizCurrent];
  document.getElementById('quizStepLabel').textContent = t('quiz_step_label', { n: quizCurrent + 1, total: quizSession.length });
  document.getElementById('quizSteps').innerHTML = quizSession.map(function(_, i) {
    return '<div class="quiz-step' + (i <= quizCurrent ? ' done' : '') + '"></div>';
  }).join('');
  document.getElementById('quizQ').textContent = pick(q.q);
  document.getElementById('quizOpts').innerHTML = q.opts.map(function(opt, i) {
    return '<button class="quiz-option" onclick="selectAnswer(\'' + opt.pem + '\')">' +
      '<span class="quiz-opt-mark">' + String.fromCharCode(65 + i) + '</span>' +
      '<span class="quiz-opt-text">' + escHtml(pick(opt.text)) + '</span>' +
    '</button>';
  }).join('');
  document.getElementById('quizPrevBtn').style.display = quizCurrent > 0 ? 'flex' : 'none';
}

function selectAnswer(pem) {
  quizAnswers.push(pem);
  quizCurrent++;
  if (quizCurrent >= quizSession.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goToPreviousQuestion() {
  if (quizCurrent <= 0) return;
  quizCurrent--;
  quizAnswers.pop();
  renderQuizQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showQuizResult() {
  var ssdCount  = quizAnswers.filter(function(a) { return a === 'SSD';  }).length;
  var aisdCount = quizAnswers.filter(function(a) { return a === 'AISD'; }).length;
  var winner    = ssdCount >= aisdCount ? 'SSD' : 'AISD';
  var info      = PEM_INFO[winner];
  var total     = quizSession.length;

  document.getElementById('quizView').style.display       = 'none';
  document.getElementById('quizResultView').style.display = 'block';

  document.getElementById('resultChip').textContent  = info.chip;
  document.getElementById('resultChip').className    = 'result-chip ' + info.chipClass;
  document.getElementById('resultPemName').textContent  = pick(info.name);
  document.getElementById('resultScoreLine').textContent =
    t('quiz_score_line', { score: Math.max(ssdCount, aisdCount), total: total });

  document.getElementById('ssdFill').style.width  = Math.round(ssdCount  / total * 100) + '%';
  document.getElementById('aisdFill').style.width = Math.round(aisdCount / total * 100) + '%';
  document.getElementById('ssdScoreLabel').innerHTML  = '<span>SSD</span><span>'  + ssdCount  + ' ' + t('quiz_answer_unit') + '</span>';
  document.getElementById('aisdScoreLabel').innerHTML = '<span>AISD</span><span>' + aisdCount + ' ' + t('quiz_answer_unit') + '</span>';

  document.getElementById('resultDescTitle').textContent = pick(info.name);
  document.getElementById('resultDescBody').innerHTML =
    '<p>' + escHtml(pick(info.desc)) + '</p>' +
    '<div class="result-sub-label">' + t('quiz_careers_label') + '</div>' +
    '<div class="result-tags">' + pick(info.careers).map(function(c) {
      return '<span class="result-tag ' + info.chipClass + '">' + escHtml(c) + '</span>';
    }).join('') + '</div>' +
    '<div class="result-sub-label">' + t('quiz_courses_label') + '</div>' +
    '<div class="result-tags">' + pick(info.courses).map(function(c) {
      return '<span class="result-tag ' + info.chipClass + '">' + escHtml(c) + '</span>';
    }).join('') + '</div>';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
  document.getElementById('quizResultView').style.display = 'none';
  document.getElementById('quizView').style.display       = 'block';
  startQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==============================================================
// TAMPILAN (dipakai bersama situs utama dan halaman Showcase)
// ==============================================================
// Menyembunyikan semua view; null-safe karena tiap halaman hanya punya
// sebagian view (Showcase punya shell sendiri, lihat showcase.js).
function scHideAllViews_() {
  ['homeView','searchSection','detailView','quizView','quizResultView',
   'scGaleriView','scDetailView','scFormView','scStatusView','statistikView','panduanView','dosenView'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}
