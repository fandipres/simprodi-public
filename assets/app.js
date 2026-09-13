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
    lapor_desc: 'Sampaikan ke program studi agar bisa segera diperbaiki.',
    btn_lapor_kesalahan: 'Laporkan Kesalahan',
    lapor_pesan_label: 'Jelaskan data yang perlu dikoreksi',
    lapor_pesan_placeholder: 'Contoh: pada semester Ganjil 2025/2026, kegiatan saya seharusnya Juara 2, bukan Peserta.',
    lapor_note: 'Tindak lanjut laporan akan disampaikan melalui nomor yang tercatat di MIKA kamu. Pastikan nomor tersebut sudah diperbarui sebelum mengirim.',
    btn_kirim_laporan: 'Kirim Laporan', lapor_send_loading: 'Mengirim...',
    lapor_too_short_msg: 'Tuliskan penjelasan yang lebih lengkap agar bisa kami tindaklanjuti.',
    lapor_success_msg: 'Laporan berhasil dikirim. Terima kasih, kami akan segera meninjau datanya.',
    lapor_fail_generic: 'Pengiriman gagal. Coba lagi beberapa saat.',
    notfound_title: 'Data kamu seharusnya tercatat di sini?',
    notfound_desc: 'Jika sudah pernah lapor namun datamu belum tercatat, sampaikan ke program studi agar dapat segera ditindaklanjuti.',
    notfound_nim_label: 'NIM', notfound_nim_placeholder: 'Masukkan NIM kamu',
    notfound_nama_label: 'Nama lengkap', notfound_nama_placeholder: 'Masukkan nama lengkap kamu',
    notfound_ket_label: 'Keterangan',
    notfound_ket_placeholder: 'Contoh: Saya mengikuti MBKM Magang Industri semester Ganjil 2025/2026 namun nama saya tidak muncul saat dicari.',
    notfound_nim_required: 'NIM tidak boleh kosong.', notfound_nim_invalid: 'Format NIM tidak valid.',
    notfound_nama_required: 'Nama tidak boleh kosong.',
    notfound_ket_too_short: 'Tuliskan keterangan yang lebih lengkap agar bisa kami tindaklanjuti.',
    notfound_success_msg: 'Laporan berhasil dikirim. Program studi akan segera menindaklanjuti, terima kasih.',
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
    panduan_glossary_title: 'Istilah Penting untuk Mahasiswa',
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
    sc_galeri_title: 'Karya Mahasiswa Teknik Informatika',
    sc_galeri_sub: 'Aplikasi, situs, dan game hasil tugas kuliah maupun tugas akhir mahasiswa. Jelajahi dan berikan dukungan lewat like.',
    sc_search_placeholder: 'Cari nama karya, kreator, atau teknologi...',
    sc_add_btn: 'Kirim Karya',
    sc_status_link: 'Cek Status Pengajuan',
    sc_filter_btn: 'Filter',
    sc_filter_jenis_label: 'Jenis',
    sc_filter_peminatan_label: 'Peminatan',
    sc_filter_status_label: 'Status',
    sc_filter_status_publish_label: 'Status Publish',
    sc_filter_sumber_label: 'Sumber Karya',
    sc_filter_semua_jenis: 'Semua Jenis',
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
    sc_creator_more: '+{n} lainnya',

    sc_detail_title: 'Detail Karya Showcase',
    sc_detail_sub: 'Info lengkap, tautan, dan dukungan untuk karya mahasiswa ini.',
    sc_creators_label: 'Dikerjakan Oleh',
    sc_academic_label: 'Informasi Akademik',
    sc_sumber_tugas_label: 'Sumber Karya',
    sc_semester_label: 'Semester Dikerjakan',
    sc_dosen_label: 'Dosen Pembimbing',
    sc_dosen_ordinal: '{n}. ',
    sc_kontak_label: 'Kontak Tim',
    sc_tech_label: 'Teknologi',
    sc_btn_demo: 'Demo',
    sc_btn_download: 'Unduh',
    sc_btn_source: 'Source Code',
    sc_report_link: 'Laporkan',
    sc_detail_not_found: 'Karya tidak ditemukan atau belum disetujui.',

    sc_report_modal_title: 'Laporkan Karya',
    sc_report_desc: 'Laporkan kalau ada yang tidak sesuai dari karya "{nama}", misalnya link rusak, konten menyinggung, atau dugaan bukan karya asli.',
    sc_report_reason_label: 'Alasan Laporan',
    sc_report_reason_placeholder: 'Jelaskan singkat apa yang menurutmu bermasalah...',
    sc_report_contact_label: 'Kontak Kamu',
    sc_report_contact_placeholder: 'Email / nomor WhatsApp, kalau perlu ditindaklanjuti',
    sc_report_submit: 'Kirim Laporan',
    sc_report_success: 'Laporan terkirim. Terima kasih, admin akan meninjau karya ini.',
    sc_report_reason_short: 'Alasan laporan terlalu pendek (minimal 10 karakter).',

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
    lapor_desc: 'Let the study program know so it can be fixed promptly.',
    btn_lapor_kesalahan: 'Report an Issue',
    lapor_pesan_label: 'Describe the data that needs correcting',
    lapor_pesan_placeholder: 'Example: in the Odd 2025/2026 semester, my activity should be "2nd Place", not "Participant".',
    lapor_note: 'Follow-up on your report will be sent to the phone number on file in your MIKA account. Make sure it is up to date before submitting.',
    btn_kirim_laporan: 'Submit Report', lapor_send_loading: 'Sending...',
    lapor_too_short_msg: 'Please write a more detailed explanation so we can follow up.',
    lapor_success_msg: 'Report submitted successfully. Thank you, we will review it shortly.',
    lapor_fail_generic: 'Submission failed. Please try again shortly.',
    notfound_title: 'Should your data be listed here?',
    notfound_desc: "If you've reported this before but your data still isn't listed, let the study program know so it can be followed up.",
    notfound_nim_label: 'NIM', notfound_nim_placeholder: 'Enter your NIM',
    notfound_nama_label: 'Full name', notfound_nama_placeholder: 'Enter your full name',
    notfound_ket_label: 'Details',
    notfound_ket_placeholder: 'Example: I took part in the MBKM Industry Internship in the Odd 2025/2026 semester but my name does not appear in the search.',
    notfound_nim_required: 'NIM must not be empty.', notfound_nim_invalid: 'Invalid NIM format.',
    notfound_nama_required: 'Name must not be empty.',
    notfound_ket_too_short: 'Please write more detailed information so we can follow up.',
    notfound_success_msg: 'Report submitted successfully. The study program will follow up shortly, thank you.',
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
    panduan_glossary_title: 'Key Terms for Students',
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
    sc_galeri_title: 'Informatics Engineering Student Works',
    sc_galeri_sub: 'Apps, websites, and games made for coursework or final projects. Explore and show your support with a like.',
    sc_search_placeholder: 'Search by project name, creator, or technology...',
    sc_add_btn: 'Submit a Work',
    sc_status_link: 'Check Submission Status',
    sc_filter_btn: 'Filter',
    sc_filter_jenis_label: 'Type',
    sc_filter_peminatan_label: 'Track',
    sc_filter_status_label: 'Status',
    sc_filter_status_publish_label: 'Publish Status',
    sc_filter_sumber_label: 'Work Source',
    sc_filter_semua_jenis: 'All Types',
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
    sc_creator_more: '+{n} more',

    sc_detail_title: 'Showcase Project Detail',
    sc_detail_sub: 'Full info, links, and support for this student project.',
    sc_creators_label: 'Made By',
    sc_academic_label: 'Academic Information',
    sc_sumber_tugas_label: 'Work Source',
    sc_semester_label: 'Semester Made',
    sc_dosen_label: 'Supervisor',
    sc_dosen_ordinal: '{n}. ',
    sc_kontak_label: 'Team Contact',
    sc_tech_label: 'Technology',
    sc_btn_demo: 'Demo',
    sc_btn_download: 'Download',
    sc_btn_source: 'Source Code',
    sc_report_link: 'Report',
    sc_detail_not_found: 'Work not found or not yet approved.',

    sc_report_modal_title: 'Report This Work',
    sc_report_desc: 'Report if something is wrong with "{nama}", such as a broken link, offensive content, or suspected plagiarism.',
    sc_report_reason_label: 'Reason',
    sc_report_reason_placeholder: 'Briefly explain what you think is wrong...',
    sc_report_contact_label: 'Your Contact',
    sc_report_contact_placeholder: 'Email / WhatsApp number, if follow-up is needed',
    sc_report_submit: 'Submit Report',
    sc_report_success: 'Report submitted. Thanks, an admin will review this work.',
    sc_report_reason_short: 'Report reason is too short (minimum 10 characters).',

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
  if (document.getElementById('scGaleriView').style.display !== 'none') { scRenderGaleri(); return; }
  if (document.getElementById('scDetailView').style.display !== 'none' && _scCurrentDetail) { scRenderDetail(); return; }
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
  var kode = new URLSearchParams(location.search).get('kode');
  var path = location.pathname.replace(/\/+$/, '') || '/';
  if      (path === '/portofolio' && nim) { openPortofolio(noPush); searchInput.value = nim; doSearch(true, noPush); }
  else if (path === '/portofolio')        openPortofolio(noPush);
  else if (path === '/showcase' && kode)  openShowcaseDetail(kode, noPush);
  else if (path === '/showcase')          openShowcaseGaleri(noPush);
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
async function loadAppShell_() {
  const res  = await fetch('/assets/app-shell.html');
  const html = await res.text();
  document.body.insertAdjacentHTML('afterbegin', html);
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadAppShell_();

  searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

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
  dispatchRoute_(true);

  // Tombol back/forward perangkat/browser memicu popstate, bukan reload
  // halaman - dengarkan di sini supaya tombol back bisa mundur ke layar
  // sebelumnya DI DALAM situs (Home <-> fitur <-> detail) alih-alih langsung
  // keluar situs setelah satu kali tekan. scForm/scStatus (form Kirim Karya,
  // Cek Status Pengajuan) tidak punya path/query sendiri (lihat komentar di
  // openShowcaseForm/openShowcaseStatus), jadi ditandai lewat history.state
  // dan dicek lebih dulu di sini sebelum jatuh ke dispatchRoute_ yang
  // berbasis path.
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.view === 'scForm')   { openShowcaseForm(true); return; }
    if (e.state && e.state.view === 'scStatus') { openShowcaseStatus(true); return; }
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
    const isNimLike = /^\d{9}$/.test(lastQuery);
    lv.innerHTML =
      '<div class="lapor-card">' +
        '<div class="lapor-header">' +
          '<div>' +
            '<div class="lapor-title">' + t('notfound_title') + '</div>' +
            '<div class="lapor-desc">' + t('notfound_desc') + '</div>' +
          '</div>' +
          '<button class="btn-lapor" onclick="toggleNotFoundLapor()">' + t('btn_lapor_kesalahan') + '</button>' +
        '</div>' +
        '<div id="notFoundLaporForm" class="lapor-form">' +
          '<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:10px;">' +
            '<div>' +
              '<label class="form-label" for="notFoundNim">' + t('notfound_nim_label') + ' <span style="color:var(--red);">*</span></label>' +
              '<input class="text-input" type="tel" id="notFoundNim" placeholder="' + t('notfound_nim_placeholder') + '" maxlength="9"' +
              ' inputmode="numeric" oninput="this.value=this.value.replace(/[^0-9]/g,\'\')"' +
              ' value="' + (isNimLike ? escHtml(lastQuery) : '') + '">' +
            '</div>' +
            '<div>' +
              '<label class="form-label" for="notFoundNama">' + t('notfound_nama_label') + ' <span style="color:var(--red);">*</span></label>' +
              '<input class="text-input" type="text" id="notFoundNama" placeholder="' + t('notfound_nama_placeholder') + '" maxlength="100">' +
            '</div>' +
            '<div>' +
              '<label class="form-label" for="notFoundPesan">' + t('notfound_ket_label') + ' <span style="color:var(--red);">*</span></label>' +
              '<textarea class="form-textarea" id="notFoundPesan" oninput="updateCharCounter(\'notFoundPesan\',\'notFoundPesanCount\',10)"' +
              ' placeholder="' + t('notfound_ket_placeholder') + '"></textarea>' +
              '<div class="char-counter" id="notFoundPesanCount">0/10</div>' +
            '</div>' +
          '</div>' +
          '<div class="lapor-note">' + t('lapor_note') + '</div>' +
          '<button class="btn-send" id="notFoundLaporBtn" onclick="doLaporNotFound()">' + t('btn_kirim_laporan') + '</button>' +
          '<div id="notFoundLaporMsg"></div>' +
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

  document.getElementById('laporForm').classList.remove('open');
  document.getElementById('laporPesan').value   = '';
  updateCharCounter('laporPesan', 'laporPesanCount', 10);
  document.getElementById('laporMsg').innerHTML  = '';

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

// ------ LAPORAN ------
function toggleLapor() {
  document.getElementById('laporForm').classList.toggle('open');
}

async function doLapor() {
  if (!currentStudent) return;
  const pesan = document.getElementById('laporPesan').value.trim();
  const msgEl = document.getElementById('laporMsg');

  if (pesan.length < 10) {
    msgEl.innerHTML = '<div class="alert alert-err">' + t('lapor_too_short_msg') + '</div>';
    return;
  }

  const btn = document.getElementById('laporBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>' + t('lapor_send_loading');
  msgEl.innerHTML = '';

  try {
    const res = await gasGet({
      action: 'laporan',
      nim:   currentStudent.nim,
      nama:  currentStudent.nama,
      pesan,
      lang: currentLang
    });
    btn.disabled = false; btn.textContent = t('btn_kirim_laporan');
    if (res.ok) {
      msgEl.innerHTML = '<div class="alert alert-ok">' + t('lapor_success_msg') + '</div>';
      document.getElementById('laporPesan').value = '';
      updateCharCounter('laporPesan', 'laporPesanCount', 10);
    } else {
      msgEl.innerHTML = `<div class="alert alert-err">${escHtml(res.message)}</div>`;
    }
  } catch {
    btn.disabled = false; btn.textContent = t('btn_kirim_laporan');
    msgEl.innerHTML = '<div class="alert alert-err">' + t('lapor_fail_generic') + '</div>';
  }
}

// ------ LAPORAN DATA TIDAK DITEMUKAN ------
function toggleNotFoundLapor() {
  document.getElementById('notFoundLaporForm').classList.toggle('open');
}

async function doLaporNotFound() {
  const nim   = document.getElementById('notFoundNim').value.trim();
  const nama  = document.getElementById('notFoundNama').value.trim();
  const pesan = document.getElementById('notFoundPesan').value.trim();
  const msgEl = document.getElementById('notFoundLaporMsg');

  if (!nim) {
    msgEl.innerHTML = '<div class="alert alert-err">' + t('notfound_nim_required') + '</div>'; return;
  }
  if (!/^\d{9}$/.test(nim)) {
    msgEl.innerHTML = '<div class="alert alert-err">' + t('notfound_nim_invalid') + '</div>'; return;
  }
  if (!nama) {
    msgEl.innerHTML = '<div class="alert alert-err">' + t('notfound_nama_required') + '</div>'; return;
  }
  if (pesan.length < 10) {
    msgEl.innerHTML = '<div class="alert alert-err">' + t('notfound_ket_too_short') + '</div>'; return;
  }

  const btn = document.getElementById('notFoundLaporBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>' + t('lapor_send_loading');
  msgEl.innerHTML = '';

  try {
    const res = await gasGet({
      action: 'laporan',
      nim,
      nama,
      pesan: '[DATA TIDAK DITEMUKAN] ' + pesan,
      lang: currentLang
    });
    btn.disabled = false; btn.textContent = t('btn_kirim_laporan');
    if (res.ok) {
      msgEl.innerHTML = '<div class="alert alert-ok">' + t('notfound_success_msg') + '</div>';
      document.getElementById('notFoundNim').value   = '';
      document.getElementById('notFoundNama').value  = '';
      document.getElementById('notFoundPesan').value = '';
      updateCharCounter('notFoundPesan', 'notFoundPesanCount', 10);
    } else {
      msgEl.innerHTML = '<div class="alert alert-err">' + escHtml(res.message) + '</div>';
    }
  } catch {
    btn.disabled = false; btn.textContent = t('btn_kirim_laporan');
    msgEl.innerHTML = '<div class="alert alert-err">' + t('lapor_fail_generic') + '</div>';
  }
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

function updateCharCounter(textareaId, counterId, min) {
  var len = document.getElementById(textareaId).value.trim().length;
  var el  = document.getElementById(counterId);
  el.textContent = len + '/' + min;
  el.classList.toggle('ok', len >= min);
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
// sebagai accordion (lihat panduanGlossaryHtml_) karena daftarnya sudah
// cukup panjang untuk terasa berat kalau ditampilkan terbuka semua sekaligus.
// Grup boleh punya `desc` opsional (dirender di panduanGlossaryHtml_ tepat
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
    milestone: { id: 'Semester pertamamu - pastikan kamu sudah paham SKS, IP, dan IPK (lihat Istilah Penting di atas), dan kenali Dosen Wali/PA-mu sebagai tempat bertanya soal akademik. Paket KRS semester 1-6 sudah otomatis disusun (auto-generate), jadi kamu tinggal fokus menjalani studi dengan baik sejak awal.', en: 'Your first semester - make sure you understand SKS, IP, and IPK (see Key Terms above), and get to know your Dosen Wali/PA as your point of contact for academic questions. Your KRS package for semesters 1-6 is auto-generated, so you can simply focus on doing well in your studies from the start.' },
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
    id: 'Setelah Tugas Akhir/Skripsi kamu selesai dan disetujui Dosen Wali/PA atau dosen pembimbing, kamu akan melalui Sidang Tugas Akhir untuk mempertahankan hasil karyamu di depan dosen penguji. Kalau lulus sidang, kamu akan mengikuti Yudisium (penetapan status dan Predikat Kelulusanmu secara resmi), lalu diwisuda di Wisuda sebagai lulusan Program Studi S-1 Teknik Informatika. Selamat menempuh perjalanan barumu!',
    en: 'Once your Final Project/Thesis is finished and approved by your Dosen Wali/PA or thesis advisor, you will go through a Sidang Tugas Akhir (thesis defense) to defend your work in front of examining lecturers. If you pass, you will go through Yudisium (the official determination of your graduation status and Predikat Kelulusan), then be conferred at Wisuda (the graduation ceremony) as a graduate of the S-1 Teknik Informatika study program. Congratulations on the new journey ahead!'
  }
};

var PANDUAN_LANJUT = {
  title: { id: 'Semester 9 dan Seterusnya', en: 'Semester 9 and Beyond' },
  chapter: { id: 'Kalau Perjalanan Berlanjut', en: 'If the Journey Continues' },
  body: {
    id: 'Kalau kamu belum menyelesaikan studi dalam 8 semester, semester-semester berikutnya berfokus pada penyelesaian mata kuliah yang tersisa dan/atau Tugas Akhir. Syarat minimal SKS untuk mengajukan Tugas Akhir/Skripsi juga terus meningkat mengikuti pola serupa semester 7-8 kalau kamu belum memulainya - tanyakan angka pastinya ke Program Studi. Ingat juga checkpoint masa studi berikutnya: Surat Peringatan kedua (SP2) kalau belum lulus di semester 10, dan Surat Peringatan ketiga/terakhir (SP3) kalau belum lulus di semester 12. Disarankan untuk berkonsultasi dengan Program Studi sesegera mungkin supaya rencana studi lanjutanmu tetap terarah.',
    en: 'If you have not finished your studies within 8 semesters, the following semesters focus on completing any remaining courses and/or your Final Project. The minimum-credit requirement to submit your Final Project/Thesis also keeps increasing, following a similar pattern to semesters 7-8, if you have not started it yet - check the exact number with your Study Program. Also keep in mind the next study-duration checkpoints: a second Surat Peringatan (SP2) if you have not graduated by semester 10, and a third and final Surat Peringatan (SP3) if you have not graduated by semester 12. It is recommended to consult your Study Program as soon as possible to keep your continued study plan on track.'
  }
};

function panduanCoursePills_(courses) {
  return courses.map(function(c) {
    return '<span class="panduan-course-pill">' + escHtml(currentLang === 'en' ? c.en : c.id) + '</span>';
  }).join('');
}

// Accordion glossary di dalam SATU toggle induk lagi ("Sebelum Memulai"),
// tertutup semua secara default - user menilai versi sebelumnya (24 baris
// istilah langsung terbuka di paling atas halaman) terasa seperti kamus,
// bukan seperti awal sebuah perjalanan. Membungkusnya di balik satu toggle
// induk membuat halaman dibuka dengan satu baris ringkas, bukan dinding
// istilah, sementara Semester I ("Langkah Pertama") langsung jadi konten
// utama yang terlihat - istilahnya tetap ada dan gampang dibuka kalau
// dibutuhkan, cuma tidak lagi mendominasi tampilan awal.
// TIGA tingkat accordion bersarang: toggle induk ('glossaryAll') -> tiap
// GRUP juga togglenya sendiri ('grp0', 'grp1', ...) -> tiap ISTILAH juga
// togglenya sendiri (key global lintas grup: g0, g1, ...). Grup ditambah
// jadi accordion sendiri (sebelumnya cuma judul statis, semua istilah di
// dalamnya langsung tampak begitu toggle induk dibuka) karena dengan 49
// istilah, membuka toggle induk saja masih memuntahkan seluruh daftar ke
// layar - dengan grup ikut tertutup secara default, membuka "Istilah
// Penting" cuma menampilkan judul-judul grup yang ringkas, baru istilah
// di dalam satu grup muncul kalau grup itu sendiri diklik. Ketiga tingkat
// sama-sama lewat mekanisme toggleAcc/.acc-btn/.acc-body yang sudah ada,
// tidak ada JS baru untuk accordion bersarang ini.
// PANDUAN_GLOSSARY_GROUPS mengelompokkan 49 istilah jadi 12 bagian kecil
// (dipecah lagi dari 4 bagian sebelumnya supaya tiap bagian tetap ringkas
// untuk di-scan). Alfabetis TETAP dipertahankan DI DALAM tiap grup (bukan
// diganti jadi urutan lain), sesuai preferensi yang sudah ditetapkan.
function panduanGlossaryHtml_() {
  var idx = 0;
  var groupsHtml = PANDUAN_GLOSSARY_GROUPS.map(function(group, gi) {
    var gk = 'grp' + gi;
    var items = group.terms.map(function(g) {
      var k = 'g' + (idx++);
      var full = currentLang === 'en' ? g.full.en : g.full.id;
      var fullHtml = full ? ' <span class="panduan-glossary-full">(' + escHtml(full) + ')</span>' : '';
      return '<div class="acc-wrap">' +
        '<button class="acc-btn" id="trg-' + k + '" onclick="toggleAcc(\'' + k + '\')">' +
          '<span class="acc-label">' + escHtml(g.term) + fullHtml + '</span>' +
          '<span class="acc-icon" id="ico-' + k + '"></span>' +
        '</button>' +
        '<div class="acc-body" id="panel-' + k + '"><div class="panduan-glossary-desc">' + escHtml(currentLang === 'en' ? g.desc.en : g.desc.id) + '</div></div>' +
        '</div>';
    }).join('');
    var groupDescHtml = group.desc
      ? '<div class="panduan-glossary-group-desc">' + escHtml(currentLang === 'en' ? group.desc.en : group.desc.id) + '</div>'
      : '';
    return '<div class="acc-wrap panduan-glossary-group">' +
      '<button class="acc-btn panduan-glossary-group-btn" id="trg-' + gk + '" onclick="toggleAcc(\'' + gk + '\')">' +
        '<span class="acc-label panduan-glossary-group-title">' + escHtml(currentLang === 'en' ? group.title.en : group.title.id) + '</span>' +
        '<span class="acc-icon" id="ico-' + gk + '"></span>' +
      '</button>' +
      '<div class="acc-body" id="panel-' + gk + '">' + groupDescHtml + '<div class="panduan-glossary-group-terms">' + items + '</div></div>' +
      '</div>';
  }).join('');
  return '<div class="acc-wrap panduan-glossary-outer">' +
    '<button class="acc-btn" id="trg-glossaryAll" onclick="toggleAcc(\'glossaryAll\')">' +
      '<span class="acc-label">' + t('panduan_glossary_title') + '</span>' +
      '<span class="acc-icon" id="ico-glossaryAll"></span>' +
    '</button>' +
    '<div class="acc-body" id="panel-glossaryAll"><div class="panduan-glossary">' + groupsHtml + '</div></div>' +
    '</div>';
}

// Milestone/reminder/lanjut TIDAK di-escHtml - semua kontennya statis dan
// ditulis langsung di sini (bukan input pengguna), dan beberapa sengaja
// berisi tautan (mis. <a onclick="openPortofolio()">) ke fitur lain di
// situs. Beda dari panduan-glossary-desc di atas dan panduan-course-pill
// (tetap di-escHtml, tidak ada alasan untuk berisi HTML).
function renderPanduan_() {
  var el = document.getElementById('panduanContent');
  if (!el) return;
  var html = panduanGlossaryHtml_();
  html += '<div class="panduan-sem-card panduan-lanjut-card">' +
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

function dosenCardHtml_(d) {
  var sintaHtml = d.sintaId
    ? '<a class="dosen-sinta-link" href="https://sinta.kemdiktisaintek.go.id/authors/profile/' + encodeURIComponent(d.sintaId) + '" target="_blank" rel="noopener">' + DOSEN_ICON_EXTERNAL + t('dosen_sinta_link') + '</a>'
    : '';
  return '<div class="dosen-card">' +
    '<div class="dosen-card-name">' + escHtml(d.nama) + '</div>' +
    (sintaHtml ? '<div class="dosen-card-links">' + sintaHtml + '</div>' : '') +
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
// SHOWCASE MAHASISWA
// ==============================================================
function scHideAllViews_() {
  ['homeView','searchSection','detailView','quizView','quizResultView',
   'scGaleriView','scDetailView','scFormView','scStatusView','statistikView','panduanView','dosenView'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

// Placeholder ikon untuk kartu galeri yang belum punya trailer YouTube.
// Dipakai ganti kotak abu polos supaya kartu tanpa preview tetap terlihat
// tertata, bukan seperti kosong/rusak.
var SC_ICON_NOPREVIEW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>';

// Ikon besar per Jenis karya, dipakai sebagai hero banner fallback di halaman
// detail saat karya tidak punya video trailer sama sekali.
var SC_ICON_JENIS = {
  'Mobile':  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"></rect><path d="M11 18h2"></path></svg>',
  'Web':     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.6 3.8 5.9 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.9-3.8-9s1.3-6.4 3.8-9z"></path></svg>',
  'Game':    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="5.5"></rect><path d="M7 10.5v4M5 12.5h4"></path><circle cx="16" cy="10.5" r="1"></circle><circle cx="18.5" cy="13" r="1"></circle></svg>',
  'Console': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="5.5"></rect><path d="M7 10.5v4M5 12.5h4"></path><circle cx="16" cy="10.5" r="1"></circle><circle cx="18.5" cy="13" r="1"></circle></svg>',
  'Desktop': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"></rect><path d="M8 20h8M12 16v4"></path></svg>',
  'AI':      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"></path><circle cx="12" cy="12" r="4"></circle></svg>'
};
var SC_ICON_JENIS_DEFAULT = SC_ICON_NOPREVIEW;

// Ikon kecil di depan label info akademik pada halaman detail (Sumber, Semester, Dosen, Kontak).
var SC_ICON_SUMBER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path></svg>';
var SC_ICON_SEMESTER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"></rect><path d="M3 9.5h18M8 2.5v4M16 2.5v4"></path></svg>';
var SC_ICON_DOSEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"></circle><path d="M4.5 20c1.3-3.6 4-5.5 7.5-5.5s6.2 1.9 7.5 5.5"></path></svg>';
var SC_ICON_KONTAK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"></rect><path d="M3 6.5l9 6.5 9-6.5"></path></svg>';

// Kontak Tim ditetapkan email saja, dipakai baik saat validasi form maupun render detail.
var SC_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function scYoutubeId_(url) {
  var m = String(url || '').match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

// linkThumbnail cuma dipakai sebagai OVERRIDE eksplisit sekarang - kalau
// admin tidak isi field itu, situs publik langsung coba path konvensi ini
// (lihat docs/assets/thumbnails/README.md - staf upload PNG-nya lewat
// GitHub dengan nama file KODE.png, tanpa perlu tempel link sama sekali).
// location.origin (bukan domain di-hardcode) supaya tetap benar diakses
// lewat domain apapun situs ini disajikan (custom domain, staging, atau
// server lokal saat testing) - hasilnya http(s):// penuh supaya lolos
// validasi safeUrl_ yang sama seperti link lain di halaman ini.
function scDerivedThumbUrl_(kode) {
  return location.origin + '/assets/thumbnails/' + kode + '.png';
}

// Dipasang sebagai onerror pada <img class="sc-gthumb">/<img> hero detail -
// coba data-fallback (thumbnail YouTube kalau ada trailer) dulu sekali,
// baru kalau itu juga gagal (atau memang tidak ada trailer sama sekali)
// sembunyikan gambarnya dan tampilkan elemen sibling berikutnya (ikon
// fallback / markup pengganti lain, tergantung konteks pemanggilnya).
function scThumbFallback_(img) {
  var fb = img.getAttribute('data-fallback');
  if (fb) {
    img.removeAttribute('data-fallback');
    img.src = fb;
  } else {
    img.style.display = 'none';
    if (img.nextElementSibling) img.nextElementSibling.style.display = '';
  }
}

// Sama idenya, tapi utk hero halaman detail - gambarnya dibungkus
// .sc-hero-media (posisi absolut di dalamnya, sama pola dgn iframe
// YouTube), jadi yang disembunyikan/dimunculkan itu WRAPPER-nya, bukan
// <img>-nya sendiri.
function scHeroThumbFallback_(img) {
  var wrap = img.closest('.sc-hero-media');
  if (!wrap) return;
  wrap.style.display = 'none';
  if (wrap.nextElementSibling) wrap.nextElementSibling.style.display = '';
}

// Carousel hero (thumbnail + trailer, 2 slide tetap) - .sc-hero-track pakai
// scroll-snap native (lihat app.css) jadi swipe di HP sudah otomatis
// berfungsi tanpa JS sama sekali; kedua fungsi ini cuma buat sinkronisasi
// titik indikator dgn slide yang sedang tampil, dan navigasi klik titiknya.
function scHeroCarouselGo_(dotEl, index) {
  var track = dotEl.closest('.sc-hero-carousel').querySelector('.sc-hero-track');
  track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
}
function scHeroCarouselScroll_(track) {
  var index = Math.round(track.scrollLeft / track.clientWidth);
  var dots = track.parentElement.querySelectorAll('.sc-hero-dot');
  dots.forEach(function(d, i) { d.classList.toggle('active', i === index); });
}

// Auto-geser antara slide thumbnail <-> trailer terus-menerus, berhenti
// HANYA saat trailernya (kalau YouTube) benar-benar diputar - bukan cuma
// berhenti begitu slide trailer tampil, harus menunggu play sungguhan
// lewat YT IFrame API (postMessage), makanya slide2Html di atas menambah
// enablejsapi=1 pada iframe-nya. Klik titik/swipe manual TIDAK menghentikan
// auto-geser (sesuai diminta - cuma play yang menghentikan).
var _scHeroAutoTimer = null;
function scHeroCarouselStopAuto_() {
  if (_scHeroAutoTimer) { clearInterval(_scHeroAutoTimer); _scHeroAutoTimer = null; }
}
function scHeroCarouselAutoAdvance_(track) {
  // isConnected jadi jaring pengaman kalau timer lama belum sempat
  // dibersihkan tapi pengguna sudah pindah halaman (DOM lama sudah lepas) -
  // daripada nge-scroll elemen yang sudah tidak ada di layar, matikan saja.
  if (!track || !track.isConnected) { scHeroCarouselStopAuto_(); return; }
  var current = Math.round(track.scrollLeft / track.clientWidth);
  track.scrollTo({ left: track.clientWidth * (current === 0 ? 1 : 0), behavior: 'smooth' });
}
// Dipanggil sekali setiap detail karya selesai dirender (lihat scRenderDetail
// & scViewOwnDetail) - selalu menghentikan timer lama dulu (kalau ada karya
// sebelumnya juga carousel) sebelum mulai yang baru, supaya tidak ada 2 timer
// jalan bareng saat berpindah-pindah antar karya.
function scHeroCarouselInit_() {
  scHeroCarouselStopAuto_();
  var carousel = document.querySelector('.sc-hero-carousel');
  if (!carousel) return;
  var track = carousel.querySelector('.sc-hero-track');
  _scHeroAutoTimer = setInterval(function() { scHeroCarouselAutoAdvance_(track); }, 4500);
  if (carousel.querySelector('#scHeroYtFrame')) scEnsureYtApi_(scHeroSetupYtWatcher_);
}

// YT IFrame API dimuat sekali saja (bukan per-render) - callback yang
// menunggu ditumpuk di _scYtApiCallbacks kalau skripnya belum selesai load
// saat dibutuhkan lagi (mis. pindah ke karya lain sebelum API siap).
var _scYtApiLoading = false;
var _scYtApiCallbacks = [];
function scEnsureYtApi_(callback) {
  if (window.YT && window.YT.Player) { callback(); return; }
  _scYtApiCallbacks.push(callback);
  if (_scYtApiLoading) return;
  _scYtApiLoading = true;
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
  window.onYouTubeIframeAPIReady = function() {
    _scYtApiCallbacks.forEach(function(cb) { cb(); });
    _scYtApiCallbacks = [];
  };
}
function scHeroSetupYtWatcher_() {
  if (!document.getElementById('scHeroYtFrame')) return;
  new YT.Player('scHeroYtFrame', {
    events: {
      onStateChange: function(e) {
        if (e.data === YT.PlayerState.PLAYING) scHeroCarouselStopAuto_();
      }
    }
  });
}

// Kontak Tim ditetapkan email saja (lihat sc_email_regex_) supaya tidak perlu
// menebak jenis kontak dari format teks. Dirender langsung sebagai link
// mailto: tanpa label tambahan.
function scRenderKontak_(kontak) {
  var s = String(kontak || '').trim();
  if (!s) return '';
  if (SC_EMAIL_REGEX.test(s)) {
    return '<a href="mailto:' + encodeURIComponent(s) + '">' + escHtml(s) + '</a>';
  }
  return escHtml(s);
}

// ---- Galeri ----
var _scItems   = [];
var _scLoaded  = false;
var _scFilters = { jenis: '', peminatan: '', status: '', statusPublish: '', sumber: '' };
var _scSort    = 'baru';

async function openShowcaseGaleri(noPush) {
  scHideAllViews_();
  document.getElementById('scGaleriView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setCleanPath_('/showcase/', noPush);
  await scEnsureGaleriLoaded();
  scRenderGaleri();
}

async function scEnsureGaleriLoaded() {
  if (_scLoaded) return;
  document.getElementById('scGaleriGrid').innerHTML = '<div class="sc-empty">' + t('sc_loading') + '</div>';
  try {
    var res = await gasGet({ action: 'showcase_galeri' });
    if (res && res.ok) { _scItems = res.items; _scLoaded = true; }
    else { document.getElementById('scGaleriGrid').innerHTML = '<div class="sc-empty">' + t('sc_error') + '</div>'; }
  } catch (e) {
    document.getElementById('scGaleriGrid').innerHTML = '<div class="sc-empty">' + t('sc_error') + '</div>';
  }
}

function scToggleFilterPanel() {
  var overlay = document.getElementById('scFilterOverlay');
  var btn     = document.getElementById('scFilterToggleBtn');
  var open    = !overlay.classList.contains('open');
  overlay.classList.toggle('open', open);
  btn.classList.toggle('active', open);
}

function scCloseFilterPanel() {
  document.getElementById('scFilterOverlay').classList.remove('open');
  document.getElementById('scFilterToggleBtn').classList.remove('active');
}

function scSetFilter(group, val, btn) {
  _scFilters[group] = val;
  var bar = btn.parentElement;
  bar.querySelectorAll('.sc-fchip').forEach(function(c) { c.classList.remove('active'); });
  btn.classList.add('active');
  var activeCount = Object.keys(_scFilters).filter(function(k) { return _scFilters[k]; }).length;
  var badge = document.getElementById('scFilterBadge');
  if (activeCount > 0) { badge.textContent = activeCount; badge.style.display = 'inline-flex'; }
  else badge.style.display = 'none';
  scRenderGaleri();
}

function scToggleSortMenu() {
  var menu = document.getElementById('scSortMenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('click', function(e) {
  var menu = document.getElementById('scSortMenu');
  if (menu && menu.style.display !== 'none' && !e.target.closest('.sc-sort-wrap')) menu.style.display = 'none';
});

// NIM cuma boleh angka, berlaku untuk semua baris kreator (statis, ditambah
// dinamis, maupun hasil scPopulateForm_ saat resubmit) lewat event delegation.
document.addEventListener('input', function(e) {
  if (e.target.classList.contains('scf-kreator-nim')) {
    e.target.value = e.target.value.replace(/\D/g, '');
  }
});

function scSetSort(key) {
  _scSort = key;
  document.querySelectorAll('.sc-sort-option').forEach(function(o) { o.classList.toggle('active', o.dataset.sort === key); });
  document.getElementById('scSortBtnLabel').textContent = t('sc_sort_' + key);
  document.getElementById('scSortMenu').style.display = 'none';
  scRenderGaleri();
}

function scRenderGaleri() {
  var q = (document.getElementById('scSearchInput').value || '').trim().toLowerCase();
  var list = _scItems.filter(function(item) {
    if (_scFilters.jenis && item.jenis !== _scFilters.jenis) return false;
    if (_scFilters.peminatan && item.peminatan !== _scFilters.peminatan) return false;
    if (_scFilters.status && item.statusDeploy !== _scFilters.status) return false;
    if (_scFilters.statusPublish && item.statusPublish !== _scFilters.statusPublish) return false;
    if (_scFilters.sumber && item.sumberTugas !== _scFilters.sumber) return false;
    if (q) {
      var hay = [item.namaProgram, item.namaProgramEn, item.teknologi.join(' '), item.kreator.map(function(k) { return k.nama; }).join(' ')].join(' ').toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  });

  if (_scSort === 'abjad') list.sort(function(a, b) { return a.namaProgram.localeCompare(b.namaProgram); });
  else if (_scSort === 'populer') list.sort(function(a, b) { return b.likes - a.likes; });
  else list.sort(function(a, b) { return new Date(b.timestamp) - new Date(a.timestamp); });

  document.getElementById('scResultCount').textContent = t('sc_result_count', { n: list.length });

  var grid = document.getElementById('scGaleriGrid');
  if (!list.length) { grid.innerHTML = '<div class="sc-empty">' + t('sc_empty') + '</div>'; return; }

  grid.innerHTML = list.map(function(item) {
    // linkScreenshot adalah link folder, bukan link gambar langsung, jadi
    // tidak bisa dipakai sebagai thumbnail. Urutan prioritas: linkThumbnail
    // (override eksplisit admin, kalau diisi) -> path konvensi
    // /assets/thumbnails/KODE.png (coba duluan, tanpa perlu admin isi
    // apa-apa - lihat scDerivedThumbUrl_) -> kalau itu 404 juga, thumbnail
    // YouTube (kalau ada trailer) -> ikon fallback per Jenis. Pakai <img>
    // + onerror (scThumbFallback_), bukan background-image, supaya bisa
    // rantai fallback begini.
    var thumbYt = scYoutubeId_(item.videoTrailer);
    var thumbYtUrl = thumbYt ? ('https://img.youtube.com/vi/' + thumbYt + '/hqdefault.jpg') : '';
    var thumbPrimary = item.linkThumbnail || scDerivedThumbUrl_(item.kode);
    var thumbHtml = '<img class="sc-gthumb" src="' + safeUrl_(thumbPrimary) + '" alt="" loading="lazy"' +
        (thumbYtUrl ? ' data-fallback="' + safeUrl_(thumbYtUrl) + '"' : '') +
        ' onerror="scThumbFallback_(this)">' +
      '<div class="sc-gthumb sc-gthumb-empty" style="display:none;">' + SC_ICON_NOPREVIEW + '</div>';
    var creators = item.kreator.length
      ? escHtml(item.kreator[0].nama) + (item.kreator.length > 1 ? ' ' + t('sc_creator_more', { n: item.kreator.length - 1 }) : '')
      : '';
    var pemBadge = item.peminatan === 'Tanpa Peminatan' ? '' :
      '<span class="sc-tag ' + (item.peminatan === 'SSD' ? 'sc-tag-ssd' : 'sc-tag-aisd') + '">' + escHtml(item.peminatan) + '</span>';
    var publishBadge = item.statusPublish === 'Sudah Publish' ? '<span class="sc-tag sc-tag-live">' + t('sc_status_publish_sudah') + '</span>' : '';
    var statusTag = item.statusDeploy === 'Sudah Deploy' ? 'sc-tag-live' : 'sc-tag-dev';
    var statusLabel = item.statusDeploy === 'Sudah Deploy' ? t('sc_status_sudah') : t('sc_status_belum');
    return '<div class="sc-card sc-gcard" onclick="openShowcaseDetail(\'' + escHtml(item.kode) + '\')">' +
      thumbHtml +
      '<div class="sc-gbody">' +
        '<div class="sc-tags"><span class="sc-tag sc-tag-jenis">' + escHtml(item.jenis) + '</span>' + pemBadge + publishBadge + '</div>' +
        '<div class="sc-gtitle">' + escHtml((currentLang === 'en' && item.namaProgramEn) ? item.namaProgramEn : item.namaProgram) + '</div>' +
        '<div class="sc-gcreators">' + creators + '</div>' +
        '<div class="sc-gfoot"><span class="sc-tag ' + statusTag + '">' + statusLabel + '</span><span class="sc-likes"><span class="heart">&hearts;</span> ' + item.likes + '</span></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

// ---- Detail Karya ----
var _scCurrentDetail = null;

// Kode yang sedang diminta paling baru. Dipakai untuk cegah race condition:
// kalau user pindah ke detail lain sebelum request sebelumnya selesai, respons
// yang datang belakangan (basi) tidak boleh menimpa detail yang sedang tampil.
var _scDetailReqKode = null;

async function openShowcaseDetail(kode, noPush) {
  scHideAllViews_();
  document.getElementById('scDetailView').style.display = 'block';
  document.getElementById('scDetailBody').innerHTML = '<p class="msg-center">' + t('sc_loading') + '</p>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  _scDetailReqKode = kode;
  try {
    var res = await gasGet({ action: 'showcase_detail', kode: kode });
    if (_scDetailReqKode !== kode) return;
    if (!res || !res.ok) {
      document.getElementById('scDetailBody').innerHTML = '<p class="msg-error">' + escHtml((res && res.message) || t('sc_detail_not_found')) + '</p>';
      return;
    }
    _scCurrentDetail = res.item;
    scRenderDetail();
    updateUrlParam_('kode', res.item.kode, noPush);
  } catch (e) {
    if (_scDetailReqKode !== kode) return;
    document.getElementById('scDetailBody').innerHTML = '<p class="msg-error">' + t('sc_error') + '</p>';
  }
}

// Dipakai bersama oleh halaman Detail Karya publik (karya Disetujui) dan
// tampilan "Lihat Detail" milik sendiri di Cek Status (berapa pun statusnya).
// opts.showLike/opts.showReport mengatur elemen yang cuma relevan untuk
// karya yang sudah tayang publik.
function scBuildDetailBodyHtml_(item, opts) {
  opts = opts || {};
  var yt = scYoutubeId_(item.videoTrailer);
  var mediaHtml = '';
  // linkScreenshot (folder screenshot mentah yang dikirim mahasiswa) TIDAK
  // ditampilkan di sini sama sekali - itu cuma bahan mentah untuk admin
  // membuat thumbnail lewat "Buat Thumbnail" (lihat linkRow di
  // admin-script.html), bukan untuk konsumsi publik. Slide 1 (thumbnail)
  // SELALU coba thumbnail dulu (linkThumbnail kalau admin isi override-nya,
  // atau kalau tidak, path konvensi dari scDerivedThumbUrl_ - lihat komentar
  // di definisinya) - fallback-nya (ikon per Jenis) cuma dipasang tersembunyi,
  // baru dimunculkan lewat scHeroThumbFallback_ kalau <img>-nya gagal dimuat
  // (404 - berarti PNG-nya belum diupload).
  var thumbUrl = item.linkThumbnail || scDerivedThumbUrl_(item.kode);
  var slide1Html = '<div class="sc-hero-media" style="cursor:default;">' +
    '<img src="' + safeUrl_(thumbUrl) + '" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="scHeroThumbFallback_(this)">' +
    '</div>' +
    '<div class="sc-hero-media sc-hero-fallback" style="display:none;">' + (SC_ICON_JENIS[item.jenis] || SC_ICON_JENIS_DEFAULT) + '</div>';
  // Kalau ada trailer, hero-nya jadi carousel 2 slide (thumbnail lalu
  // trailer) - dulu trailer cuma jadi tombol terpisah di sc-action-row,
  // user minta ini juga diakses langsung dari hero-nya, tapi bukan overlay
  // di atas thumbnail (yang sudah pernah dicoba & ditolak) - carousel-nya
  // slide yang jelas terpisah, bukan menyatu di gambar yang sama. Tombol
  // "Trailer" yang berdiri sendiri jadi dihapus supaya tidak ada 2 jalan ke
  // konten yang sama.
  if (item.videoTrailer) {
    // enablejsapi=1 + id tetap "scHeroYtFrame" (cuma satu detail view aktif
    // dalam satu waktu, SPA) supaya scHeroCarouselInit_ bisa membungkusnya
    // dengan YT.Player dan mendeteksi kapan videonya benar-benar diputar.
    var slide2Html = yt
      ? '<div class="sc-hero-media" style="cursor:default;"><iframe id="scHeroYtFrame" style="position:absolute;inset:0;width:100%;height:100%;border:0;" src="https://www.youtube.com/embed/' + yt + '?enablejsapi=1&origin=' + encodeURIComponent(location.origin) + '" allowfullscreen loading="lazy"></iframe></div>'
      : '<a class="sc-hero-media" href="' + safeUrl_(item.videoTrailer) + '" target="_blank" rel="noopener"><span class="play">&#9654;</span></a>';
    mediaHtml = '<div class="sc-hero-carousel">' +
      '<div class="sc-hero-track" onscroll="scHeroCarouselScroll_(this)">' +
        '<div class="sc-hero-slide">' + slide1Html + '</div>' +
        '<div class="sc-hero-slide">' + slide2Html + '</div>' +
      '</div>' +
      '<div class="sc-hero-dots">' +
        '<button class="sc-hero-dot active" aria-label="1" onclick="scHeroCarouselGo_(this,0)"></button>' +
        '<button class="sc-hero-dot" aria-label="2" onclick="scHeroCarouselGo_(this,1)"></button>' +
      '</div>' +
    '</div>';
  } else {
    mediaHtml = slide1Html;
  }
  var pemBadge = item.peminatan === 'Tanpa Peminatan' ? '' :
    '<span class="sc-tag ' + (item.peminatan === 'SSD' ? 'sc-tag-ssd' : 'sc-tag-aisd') + '">' + escHtml(item.peminatan) + '</span>';
  var publishBadge = item.statusPublish === 'Sudah Publish' ? '<span class="sc-tag sc-tag-live">' + t('sc_status_publish_sudah') + '</span>' : '';
  var statusTag = item.statusDeploy === 'Sudah Deploy' ? 'sc-tag-live' : 'sc-tag-dev';
  var statusLabel = item.statusDeploy === 'Sudah Deploy' ? t('sc_status_sudah') : t('sc_status_belum');

  var creatorsHtml = item.kreator.map(function(k) {
    var initial = escHtml((String(k.nama || '').trim().charAt(0) || '?').toUpperCase());
    return '<div class="sc-team-member"><div class="sc-creator-avatar">' + initial + '</div><div><b>' + escHtml(k.nama) + '</b><div class="sc-creator-nim">NIM. ' + escHtml(k.nim) + '</div></div></div>';
  }).join('');

  var mataKuliahDisplay = (currentLang === 'en' && item.mataKuliahEn) ? item.mataKuliahEn : item.mataKuliah;
  // Penanda sumber karya ditaruh di depan nama mata kuliah/kompetisi supaya
  // jelas keduanya, mis. "Kompetisi GEMASTIK 2026" / "Competition GEMASTIK
  // 2026" (nama lombanya sendiri tidak diterjemahkan, cuma penandanya).
  var sumberTugasLabel = t(item.sumberTugas === 'Kompetisi' ? 'sc_opt_kompetisi' : 'sc_opt_matkul');
  var sumberLabel = (item.sumberTugas === 'Mata Kuliah' || item.sumberTugas === 'Kompetisi')
    ? (mataKuliahDisplay ? (sumberTugasLabel + ' ' + mataKuliahDisplay) : sumberTugasLabel)
    : t('sc_opt_ta');
  var namaProgramDisplay = (currentLang === 'en' && item.namaProgramEn) ? item.namaProgramEn : item.namaProgram;

  var techHtml = (item.teknologi && item.teknologi.length)
    ? '<div class="sc-section-label">' + t('sc_tech_label') + '</div><div class="sc-tech-pills">' +
      sortTeknologi_(item.teknologi).map(function(x) { return '<span class="sc-tech-pill">' + escHtml(x) + '</span>'; }).join('') + '</div>'
    : '';

  var linkButtonsHtml =
    (item.linkDemo ? '<a class="sc-btn sc-btn-primary" href="' + safeUrl_(item.linkDemo) + '" target="_blank" rel="noopener">' + t('sc_btn_demo') + '</a>' : '') +
    (item.linkDownload ? '<a class="sc-btn sc-btn-primary" href="' + safeUrl_(item.linkDownload) + '" target="_blank" rel="noopener">' + t('sc_btn_download') + '</a>' : '') +
    (item.linkSourceCode ? '<a class="sc-btn sc-btn-outline" href="' + safeUrl_(item.linkSourceCode) + '" target="_blank" rel="noopener">' + t('sc_btn_source') + '</a>' : '');
  var actionsHtml = linkButtonsHtml
    ? '<div class="sc-section-label">' + t('sc_sec_tautan') + '</div><div class="sc-action-row">' + linkButtonsHtml + '</div>'
    : '';

  var likeHtml = opts.showLike
    ? '<button class="sc-like-btn" id="scLikeBtn" onclick="scDoLike(\'' + escHtml(item.kode) + '\')"><span id="scLikeHeart">&hearts;</span><span id="scLikeCount">' + item.likes + '</span></button>'
    : '';
  var reportHtml = opts.showReport
    ? '<button class="sc-report-link" onclick="openScReportModal(\'' + escHtml(item.kode) + '\')">' + t('sc_report_link') + '</button>'
    : '';

  return mediaHtml +
    '<div class="sc-detail-head">' +
      '<div class="sc-detail-head-main"><div class="sc-tags"><span class="sc-tag sc-tag-jenis">' + escHtml(item.jenis) + '</span>' + pemBadge + '<span class="sc-tag ' + statusTag + '">' + statusLabel + '</span>' + publishBadge + '</div>' +
      '<div class="sc-detail-title">' + escHtml(namaProgramDisplay) + '</div></div>' +
      likeHtml +
    '</div>' +
    '<p class="sc-detail-desc">' + escHtml(pick(item.deskripsi)) + '</p>' +
    '<div class="sc-section-label">' + t('sc_creators_label') + '</div>' +
    '<div class="sc-card sc-team-card">' + creatorsHtml + '</div>' +
    '<div class="sc-section-label">' + t('sc_academic_label') + '</div>' +
    '<div class="sc-info-grid">' +
      '<div class="sc-info-card"><div class="sc-info-icon">' + SC_ICON_SUMBER + '</div><div><div class="sc-info-k">' + t('sc_sumber_tugas_label') + '</div><div class="sc-info-v">' + escHtml(sumberLabel) + '</div></div></div>' +
      '<div class="sc-info-card"><div class="sc-info-icon">' + SC_ICON_SEMESTER + '</div><div><div class="sc-info-k">' + t('sc_semester_label') + '</div><div class="sc-info-v">' + escHtml(translateSemesterLabel_(item.semester)) + '</div></div></div>' +
      ((item.dosenPembimbing && item.dosenPembimbing.length) ? '<div class="sc-info-card"><div class="sc-info-icon">' + SC_ICON_DOSEN + '</div><div><div class="sc-info-k">' + t('sc_dosen_label') + '</div><div class="sc-info-v">' + item.dosenPembimbing.map(function(nm, i) { return (item.dosenPembimbing.length > 1 ? t('sc_dosen_ordinal', { n: i + 1 }) : '') + escHtml(nm); }).join('<br>') + '</div></div></div>' : '') +
      '<div class="sc-info-card"><div class="sc-info-icon">' + SC_ICON_KONTAK + '</div><div><div class="sc-info-k">' + t('sc_kontak_label') + '</div><div class="sc-info-v">' + scRenderKontak_(item.kontakTim) + '</div></div></div>' +
    '</div>' +
    techHtml + actionsHtml + reportHtml;
}

function scRenderDetail() {
  var item = _scCurrentDetail;
  if (!item) return;
  document.getElementById('scDetailBody').innerHTML = scBuildDetailBodyHtml_(item, { showLike: true, showReport: true });
  if (localStorage.getItem('sc_liked_' + item.kode)) {
    document.getElementById('scLikeBtn').classList.add('liked');
  }
  scHeroCarouselInit_();
}

async function scDoLike(kode) {
  var likedKey = 'sc_liked_' + kode;
  if (localStorage.getItem(likedKey)) return;
  var btn = document.getElementById('scLikeBtn');
  if (btn.disabled) return; // request sebelumnya masih diproses, cegah klik ganda
  btn.disabled = true;
  try {
    var res = await gasGet({ action: 'showcase_like', kode: kode, lang: currentLang });
    // Cuma tandai "sudah like" (localStorage + UI) SETELAH server konfirmasi
    // berhasil. Kalau ditandai duluan lalu request gagal, tombol jadi terkunci
    // permanen (early-return di atas) padahal counter di server tidak pernah
    // bertambah, itu penyebab bug "sudah dilike tapi tidak terhitung".
    if (res && res.ok) {
      localStorage.setItem(likedKey, '1');
      // Kalau user sudah pindah ke detail lain sebelum respons ini datang,
      // jangan timpa scLikeCount/scLikeBtn milik detail yang sedang tampil
      // sekarang dengan data dari kode yang berbeda (scLikeCount di-lookup
      // ulang di sini, bukan elemen yang sama dengan btn di atas).
      if (_scCurrentDetail && _scCurrentDetail.kode === kode) {
        btn.classList.add('liked');
        document.getElementById('scLikeCount').textContent = res.likes;
      }
    }
  } catch (e) {
  } finally {
    btn.disabled = false;
  }
}

// ---- Laporkan Karya ----
function openScReportModal(kode) {
  var nama = (_scCurrentDetail && _scCurrentDetail.kode === kode) ? _scCurrentDetail.namaProgram : kode;
  document.getElementById('scReportDesc').textContent = t('sc_report_desc', { nama: nama });
  document.getElementById('scReportReason').value = '';
  document.getElementById('scReportContact').value = '';
  document.getElementById('scReportMsg').style.display = 'none';
  document.getElementById('scReportForm').style.display = 'block';
  document.getElementById('scReportSuccess').style.display = 'none';
  document.getElementById('scReportOverlay').dataset.kode = kode;
  document.getElementById('scReportOverlay').classList.add('open');
}
function closeScReportModal() { document.getElementById('scReportOverlay').classList.remove('open'); }

async function submitScReport() {
  var kode = document.getElementById('scReportOverlay').dataset.kode;
  var reason = document.getElementById('scReportReason').value.trim();
  var msgEl = document.getElementById('scReportMsg');
  if (reason.length < 10) { msgEl.textContent = t('sc_report_reason_short'); msgEl.style.display = 'block'; return; }
  msgEl.style.display = 'none';
  try {
    var res = await gasGet({
      action: 'showcase_report', kode: kode, alasan: reason,
      kontak: document.getElementById('scReportContact').value.trim(), lang: currentLang
    });
    if (res && res.ok) {
      document.getElementById('scReportForm').style.display = 'none';
      document.getElementById('scReportSuccess').style.display = 'block';
    } else {
      msgEl.textContent = (res && res.message) || t('sc_error');
      msgEl.style.display = 'block';
    }
  } catch (e) {
    msgEl.textContent = t('sc_error');
    msgEl.style.display = 'block';
  }
}

// ---- Form Submit ----
// scFormView/scStatusView tidak punya path/query URL sendiri (keduanya cuma
// sub-tampilan di dalam /showcase/), jadi riwayatnya ditandai lewat
// history.state, bukan lewat setCleanPath_/updateUrlParam_ - lihat listener
// popstate di DOMContentLoaded yang mengecek state.view ini.
function openShowcaseForm(noPush) {
  scHideAllViews_();
  document.getElementById('scFormView').style.display = 'block';
  _scResubmitKode = null;
  document.getElementById('scFormTitle').textContent = t('sc_form_title');
  scResetForm();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (noPush) history.replaceState({ view: 'scForm' }, '', location.href);
  else history.pushState({ view: 'scForm' }, '', location.href);
}

function scResetForm() {
  document.getElementById('scFormBody').style.display = 'block';
  document.getElementById('scFormSuccess').style.display = 'none';
  ['scfNama','scfDeskripsi','scfTeknologi','scfKontak','scfDemo','scfDownload','scfSource','scfTrailer','scfScreenshot','scfMatkul','scfSemester'].forEach(function(id) {
    document.getElementById(id).value = '';
  });
  document.getElementById('scfTeknologiChips').innerHTML = '';
  document.getElementById('scfConsent1').checked = false;
  document.getElementById('scfConsent2').checked = false;
  document.getElementById('scfKreatorFields').innerHTML =
    '<div class="sc-creator-field">' +
      '<input class="sc-input scf-kreator-nim" inputmode="numeric" pattern="[0-9]*" placeholder="' + t('sc_placeholder_nim') + '">' +
      '<input class="sc-input scf-kreator-nama" placeholder="' + t('sc_placeholder_nama') + '">' +
      '<button type="button" class="sc-icon-btn" onclick="scRemoveKreatorRow(this)" title="Hapus">&times;</button>' +
    '</div>';
  document.getElementById('scfDosenFields').innerHTML =
    '<div class="sc-single-field">' +
      '<select class="sc-select scf-dosen-nama">' + scDosenOptionsHtml_('') + '</select>' +
      '<button type="button" class="sc-icon-btn" onclick="scRemoveDosenRow(this)" title="Hapus">&times;</button>' +
    '</div>';
  scEnsureDosenOptions_();
  ['scfJenis', 'scfPeminatan', 'scfStatusDeploy', 'scfStatusPublish'].forEach(function(id) {
    var wrap = document.getElementById(id);
    wrap.querySelectorAll('.sc-seg-btn').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
  });
  document.getElementById('scfDemoGroup').style.display = 'none';
  document.getElementById('scfDemoNote').style.display  = 'block';
  document.getElementById('scfDownloadGroup').style.display = 'none';
  scApplyScreenshotFieldsForJenis_(document.querySelector('#scfJenis .sc-seg-btn.active').dataset.val);
  scSetSegValue_('scfSumber', 'Mata Kuliah');
  document.getElementById('scfMsg').style.display = 'none';
  scRefreshSubmitState();
}

function scAddKreatorRow() {
  var wrap = document.getElementById('scfKreatorFields');
  var row = document.createElement('div');
  row.className = 'sc-creator-field';
  row.innerHTML =
    '<input class="sc-input scf-kreator-nim" inputmode="numeric" pattern="[0-9]*" placeholder="' + t('sc_placeholder_nim') + '">' +
    '<input class="sc-input scf-kreator-nama" placeholder="' + t('sc_placeholder_nama') + '">' +
    '<button type="button" class="sc-icon-btn" onclick="scRemoveKreatorRow(this)" title="Hapus">&times;</button>';
  wrap.appendChild(row);
}
function scRemoveKreatorRow(btn) {
  var wrap = document.getElementById('scfKreatorFields');
  if (wrap.children.length > 1) btn.closest('.sc-creator-field').remove();
}

function scAddDosenRow() {
  var wrap = document.getElementById('scfDosenFields');
  var row = document.createElement('div');
  row.className = 'sc-single-field';
  row.innerHTML =
    '<select class="sc-select scf-dosen-nama">' + scDosenOptionsHtml_('') + '</select>' +
    '<button type="button" class="sc-icon-btn" onclick="scRemoveDosenRow(this)" title="Hapus">&times;</button>';
  wrap.appendChild(row);
}
function scRemoveDosenRow(btn) {
  var wrap = document.getElementById('scfDosenFields');
  if (wrap.children.length > 1) btn.closest('.sc-single-field').remove();
  else btn.closest('.sc-single-field').querySelector('.scf-dosen-nama').value = '';
}

// Pilihan Dosen Pembimbing di form Showcase (publik) bersumber dari sheet
// DOSEN yang berstatus DosenTA='Ya' (lihat Code.gs getDosenList/importDosen)
// - supaya daftar dosen di halaman /lecturers/ dan pilihan di form ini
// selalu konsisten dari satu sumber data yang sama. `selected` yang tidak
// ada di daftar (mis. nama lama hasil ketik bebas sebelum fitur ini ada)
// tetap ditambahkan sebagai opsi tambahan supaya data lama tidak hilang.
var scDosenOptions_        = null;
var scDosenOptionsPromise_ = null;

function scDosenOptionsHtml_(selected) {
  var opts = '<option value="" data-i18n="sc_placeholder_dosen">' + t('sc_placeholder_dosen') + '</option>';
  var found = false;
  (scDosenOptions_ || []).forEach(function(nama) {
    if (nama === selected) found = true;
    opts += '<option value="' + escHtml(nama) + '"' + (nama === selected ? ' selected' : '') + '>' + escHtml(nama) + '</option>';
  });
  if (selected && !found) opts += '<option value="' + escHtml(selected) + '" selected>' + escHtml(selected) + '</option>';
  return opts;
}

function scRefreshDosenSelects_() {
  document.querySelectorAll('#scfDosenFields .scf-dosen-nama').forEach(function(sel) {
    var current = sel.value;
    sel.innerHTML = scDosenOptionsHtml_(current);
  });
}

function scEnsureDosenOptions_() {
  if (scDosenOptions_) return Promise.resolve(scDosenOptions_);
  if (!scDosenOptionsPromise_) {
    scDosenOptionsPromise_ = gasGet({ action: 'dosen_list' }).then(function(res) {
      scDosenOptions_ = (res && res.ok) ? res.dosen.filter(function(d) { return d.dosenTa1 || d.dosenTa2; }).map(function(d) { return d.nama; }) : [];
      scRefreshDosenSelects_();
      return scDosenOptions_;
    }).catch(function() { scDosenOptions_ = []; return scDosenOptions_; });
  }
  return scDosenOptionsPromise_;
}

// Tag-input Teknologi: ketik teks, koma atau Enter langsung mengubahnya jadi
// chip supaya keyword yang sudah selesai diketik terlihat jelas terpisah,
// bukan cuma teks polos dipisah koma.
function scAddTechChip_(text) {
  var val = String(text || '').trim();
  if (!val) return;
  var chips = document.getElementById('scfTeknologiChips');
  var chip = document.createElement('span');
  chip.className = 'sc-tag-chip';
  chip.dataset.val = val;
  chip.innerHTML = escHtml(val) + '<button type="button" tabindex="-1" onclick="scRemoveTechChip(this)">&times;</button>';
  chips.appendChild(chip);
}
function scRemoveTechChip(btn) {
  btn.closest('.sc-tag-chip').remove();
}
function scTeknologiCommit_() {
  var input = document.getElementById('scfTeknologi');
  if (input.value.indexOf(',') === -1) return;
  var parts = input.value.split(',');
  var last = parts.pop();
  parts.forEach(function(p) { scAddTechChip_(p); });
  input.value = last;
}
function scTeknologiKeydown_(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    scAddTechChip_(e.target.value);
    e.target.value = '';
  } else if (e.key === 'Backspace' && !e.target.value) {
    var chips = document.getElementById('scfTeknologiChips');
    if (chips.lastElementChild) chips.lastElementChild.remove();
  }
}
// Teknologi diurutkan abjad di mana pun ditampilkan/disimpan (public dan
// admin) - sebelumnya tidak ada pengurutan sama sekali, jadi urutannya ikut
// urutan mahasiswa/admin mengetik (mis. "Flask, Firebase" - tidak berurut).
function sortTeknologi_(arr) {
  return (arr || []).slice().sort(function(a, b) { return a.localeCompare(b, 'id', { sensitivity: 'base' }); });
}

function scGetTechValues_() {
  var vals = Array.prototype.map.call(document.querySelectorAll('#scfTeknologiChips .sc-tag-chip'), function(el) { return el.dataset.val; });
  var trailing = document.getElementById('scfTeknologi').value.trim();
  if (trailing) vals.push(trailing);
  return sortTeknologi_(vals);
}

function scSelectSeg(groupId, btn) {
  var wrap = document.getElementById(groupId);
  wrap.querySelectorAll('.sc-seg-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  scApplySegSideEffects_(groupId, btn);
}

function scApplySegSideEffects_(groupId, btn) {
  if (groupId === 'scfStatusDeploy') {
    var sudah = btn.dataset.val === 'Sudah Deploy';
    document.getElementById('scfDemoGroup').style.display = sudah ? 'block' : 'none';
    document.getElementById('scfDemoNote').style.display  = sudah ? 'none'  : 'block';
  }
  if (groupId === 'scfStatusPublish') {
    var sudahPublish = btn.dataset.val === 'Sudah Publish';
    document.getElementById('scfDownloadGroup').style.display = sudahPublish ? 'block' : 'none';
  }
  if (groupId === 'scfJenis') {
    scApplyScreenshotFieldsForJenis_(btn.dataset.val);
  }
  if (groupId === 'scfSumber') {
    var val = btn.dataset.val;
    document.getElementById('scfMatkulGroup').style.display = (val === 'Mata Kuliah' || val === 'Kompetisi') ? 'block' : 'none';
    var key = val === 'Kompetisi' ? 'sc_label_kompetisi' : 'sc_label_matkul';
    var placeholderKey = val === 'Kompetisi' ? 'sc_placeholder_kompetisi' : 'sc_placeholder_matkul';
    document.getElementById('scfMatkulLabel').innerHTML = '<span data-i18n="' + key + '">' + t(key) + '</span> <span class="sc-req">*</span>';
    document.getElementById('scfMatkul').placeholder = t(placeholderKey);
  }
}

// Screenshot yang diminta beda per Jenis, supaya preview di galeri/detail
// punya konsep seragam: AI tidak butuh screenshot sama sekali (dipakaikan
// ilustrasi template), Mobile butuh 2 (Home/Login + Fitur Terbaik) karena
// ditampilkan berdampingan, Jenis lain cukup 1 (Home).
// Satu field screenshot (link folder) yang cuma disembunyikan utk Jenis AI
// (tidak butuh screenshot sama sekali). Berapa banyak gambar yang harus
// ada di dalam foldernya (1 utk Jenis lain, 2 utk Mobile) sudah dijelaskan
// di teks bantuan statis field-nya, tidak perlu berubah per Jenis lagi.
function scApplyScreenshotFieldsForJenis_(jenis) {
  document.getElementById('scfScreenshotGroup').style.display = jenis === 'AI' ? 'none' : 'block';
}

// Set nilai seg tanpa event klik (dipakai saat mengisi ulang form untuk Edit & Kirim Ulang).
function scSetSegValue_(groupId, val) {
  var wrap = document.getElementById(groupId);
  var matched = null;
  wrap.querySelectorAll('.sc-seg-btn').forEach(function(b) {
    var isMatch = b.dataset.val === val;
    b.classList.toggle('active', isMatch);
    if (isMatch) matched = b;
  });
  if (matched) scApplySegSideEffects_(groupId, matched);
}

// ---- Edit & Kirim Ulang (karya berstatus Ditolak) ----
var _scResubmitKode = null;

function scPopulateForm_(item) {
  document.getElementById('scfNama').value = item.namaProgram;
  document.getElementById('scfDeskripsi').value = item.deskripsi.id;
  document.getElementById('scfTeknologiChips').innerHTML = '';
  document.getElementById('scfTeknologi').value = '';
  sortTeknologi_(item.teknologi).forEach(function(x) { scAddTechChip_(x); });
  document.getElementById('scfKontak').value = item.kontakTim;
  document.getElementById('scfDemo').value = item.linkDemo;
  document.getElementById('scfDownload').value = item.linkDownload || '';
  document.getElementById('scfSource').value = item.linkSourceCode;
  document.getElementById('scfTrailer').value = item.videoTrailer;
  document.getElementById('scfScreenshot').value = item.linkScreenshot || '';
  document.getElementById('scfMatkul').value = item.mataKuliah;
  document.getElementById('scfSemester').value = item.semester;

  scSetSegValue_('scfJenis', item.jenis);
  scSetSegValue_('scfPeminatan', item.peminatan);
  scSetSegValue_('scfSumber', item.sumberTugas);
  scSetSegValue_('scfStatusDeploy', item.statusDeploy);
  scSetSegValue_('scfStatusPublish', item.statusPublish || 'Belum Publish');

  document.getElementById('scfKreatorFields').innerHTML = item.kreator.map(function(k) {
    return '<div class="sc-creator-field">' +
      '<input class="sc-input scf-kreator-nim" inputmode="numeric" pattern="[0-9]*" value="' + escHtml(k.nim) + '">' +
      '<input class="sc-input scf-kreator-nama" value="' + escHtml(k.nama) + '">' +
      '<button type="button" class="sc-icon-btn" onclick="scRemoveKreatorRow(this)" title="Hapus">&times;</button>' +
    '</div>';
  }).join('');

  if (item.dosenPembimbing && item.dosenPembimbing.length) {
    document.getElementById('scfDosenFields').innerHTML = item.dosenPembimbing.map(function(nm) {
      return '<div class="sc-single-field">' +
        '<select class="sc-select scf-dosen-nama">' + scDosenOptionsHtml_(nm) + '</select>' +
        '<button type="button" class="sc-icon-btn" onclick="scRemoveDosenRow(this)" title="Hapus">&times;</button>' +
      '</div>';
    }).join('');
    scEnsureDosenOptions_();
  }
}

async function scOpenResubmit(kode) {
  scHideAllViews_();
  document.getElementById('scFormView').style.display = 'block';
  document.getElementById('scFormTitle').textContent = t('sc_resubmit_title');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({ view: 'scForm' }, '', location.href);
  scResetForm();
  document.getElementById('scFormBody').style.display = 'none';
  document.getElementById('scfSubmitBtn').style.display = 'none';
  var loadingEl = document.getElementById('scFormLoading');
  loadingEl.textContent = t('sc_loading');
  loadingEl.style.display = 'block';
  try {
    var res = await gasGet({ action: 'showcase_mine', kode: kode, lang: currentLang });
    if (!res || !res.ok) { scFormError_((res && res.message) || t('sc_error')); return; }
    scPopulateForm_(res.item);
    _scResubmitKode = kode;
  } catch (e) {
    scFormError_(t('sc_error'));
  } finally {
    loadingEl.style.display = 'none';
    document.getElementById('scFormBody').style.display = '';
    document.getElementById('scfSubmitBtn').style.display = '';
  }
}

function scGetSegVal_(groupId) {
  var active = document.querySelector('#' + groupId + ' .sc-seg-btn.active');
  return active ? active.dataset.val : '';
}

function scRefreshSubmitState() {
  var ok = document.getElementById('scfConsent1').checked && document.getElementById('scfConsent2').checked;
  document.getElementById('scfSubmitBtn').disabled = !ok;
}

function scFormError_(msg) {
  var el = document.getElementById('scfMsg');
  el.textContent = msg;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function submitShowcaseForm() {
  document.getElementById('scfMsg').style.display = 'none';

  var namaProgram = document.getElementById('scfNama').value.trim();
  if (!namaProgram) return scFormError_(t('sc_err_nama'));

  var deskripsiId = document.getElementById('scfDeskripsi').value.trim();
  if (!deskripsiId) return scFormError_(t('sc_err_deskripsi'));

  var kreator = [];
  document.querySelectorAll('#scfKreatorFields .sc-creator-field').forEach(function(row) {
    var nim  = row.querySelector('.scf-kreator-nim').value.trim();
    var nama = row.querySelector('.scf-kreator-nama').value.trim();
    if (nim && nama) kreator.push({ nim: nim, nama: nama });
  });
  if (!kreator.length) return scFormError_(t('sc_err_kreator'));

  var sumberTugas = scGetSegVal_('scfSumber');
  var mataKuliah  = document.getElementById('scfMatkul').value.trim();
  if (sumberTugas === 'Mata Kuliah' && !mataKuliah) return scFormError_(t('sc_err_matkul'));
  if (sumberTugas === 'Kompetisi' && !mataKuliah) return scFormError_(t('sc_err_kompetisi'));

  var semester = document.getElementById('scfSemester').value.trim();
  if (!semester) return scFormError_(t('sc_err_semester'));

  var kontakTim = document.getElementById('scfKontak').value.trim();
  if (!kontakTim) return scFormError_(t('sc_err_kontak'));
  if (!SC_EMAIL_REGEX.test(kontakTim)) return scFormError_(t('sc_err_kontak_email'));

  var statusDeploy = scGetSegVal_('scfStatusDeploy');
  var linkDemo = document.getElementById('scfDemo').value.trim();
  if (statusDeploy === 'Sudah Deploy' && !linkDemo) return scFormError_(t('sc_err_demo'));

  var statusPublish = scGetSegVal_('scfStatusPublish');
  var linkDownload = document.getElementById('scfDownload').value.trim();
  if (statusPublish === 'Sudah Publish' && !linkDownload) return scFormError_(t('sc_err_download'));

  var jenis = scGetSegVal_('scfJenis');
  var linkScreenshot = document.getElementById('scfScreenshot').value.trim();
  if (jenis !== 'AI' && !linkScreenshot) return scFormError_(t('sc_err_ss'));

  if (!document.getElementById('scfConsent1').checked || !document.getElementById('scfConsent2').checked) {
    return scFormError_(t('sc_err_consent'));
  }

  var payload = {
    namaProgram: { id: namaProgram, en: '' },
    deskripsi: { id: deskripsiId, en: '' },
    kreator: kreator,
    jenis: jenis,
    peminatan: scGetSegVal_('scfPeminatan'),
    sumberTugas: sumberTugas,
    mataKuliah: mataKuliah,
    semester: semester,
    teknologi: scGetTechValues_(),
    kontakTim: kontakTim,
    statusDeploy: statusDeploy,
    linkDemo: linkDemo,
    statusPublish: statusPublish,
    linkDownload: linkDownload,
    linkSourceCode: document.getElementById('scfSource').value.trim(),
    videoTrailer: document.getElementById('scfTrailer').value.trim(),
    linkScreenshot: linkScreenshot,
    dosenPembimbing: Array.prototype.map.call(document.querySelectorAll('#scfDosenFields .scf-dosen-nama'), function(el) { return el.value.trim(); }).filter(Boolean)
  };

  var btn = document.getElementById('scfSubmitBtn');
  btn.disabled = true; btn.textContent = t('sc_submitting');
  try {
    var params = _scResubmitKode
      ? { action: 'showcase_resubmit', kode: _scResubmitKode, data: JSON.stringify(payload), lang: currentLang }
      : { action: 'showcase_submit', data: JSON.stringify(payload), lang: currentLang };
    var res = await gasGet(params);
    if (res && res.ok) {
      document.getElementById('scFormBody').style.display = 'none';
      document.getElementById('scFormSuccess').style.display = 'block';
      document.getElementById('scFormSuccessTitle').textContent = _scResubmitKode ? t('sc_resubmit_success_title') : t('sc_success_title');
      document.getElementById('scFormSuccessCode').textContent = res.kode;
      _scResubmitKode = null;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      btn.disabled = false; btn.textContent = t('sc_btn_submit');
      scFormError_((res && res.message) || t('sc_error'));
    }
  } catch (e) {
    btn.disabled = false; btn.textContent = t('sc_btn_submit');
    scFormError_(t('sc_error'));
  }
}

// ------ IKUTI PENGAJUAN/KARYA (bookmark lokal, sama seperti Ikuti NIM di
// atas) ------ Membandingkan StatusModerasi terakhir kali dilihat dengan
// status TERKINI, supaya mahasiswa tahu ada perubahan (mis. Menunggu ->
// Disetujui) tanpa perlu bolak-balik cek manual. Sama-sama localStorage
// saja, BUKAN notifikasi push sungguhan, dan tidak disinkronkan antar
// perangkat/browser - lihat catatan lengkap di blok Ikuti NIM di atas,
// alasannya sama persis.
const FOLLOW_KARYA_KEY = 'simprodi_followed_karya';
var _followKaryaLastRefresh = 0;

// Hasil cekShowcaseStatus() TERAKHIR - dipakai toggleFollowKarya_() untuk
// mengambil namaProgram/statusModerasi TANPA menyisipkannya sebagai literal
// string JS di dalam atribut onclick. namaProgram adalah teks bebas
// (isian mahasiswa/admin) yang bisa memuat tanda kutip/kurung/titik koma -
// menyisipkannya langsung ke onclick="toggleFollowKarya_('...')" rentan
// injeksi (escHtml tidak mengubah tanda kutip tunggal, dan meng-encode-nya
// jadi &#39; TIDAK cukup, karena decoding entity HTML pada atribut tetap
// terjadi SEBELUM string itu dieksekusi sebagai JS - jadi tetap bisa
// memutus string literalnya). Hanya `kode` (format tetap dari server,
// mis. "SC-7K2M9") yang aman disisipkan langsung.
var _scLastStatusRes = null;
function getFollowedKarya_() {
  try { return JSON.parse(localStorage.getItem(FOLLOW_KARYA_KEY) || '[]'); } catch (e) { return []; }
}
function saveFollowedKarya_(list) {
  try { localStorage.setItem(FOLLOW_KARYA_KEY, JSON.stringify(list)); } catch (e) {}
}
function isFollowingKarya_(kode) {
  return getFollowedKarya_().some(function(f) { return f.kode === kode; });
}
function scStatusLabel_(status) {
  return status === 'Disetujui' ? t('sc_status_disetujui') : (status === 'Ditolak' ? t('sc_status_ditolak') : t('sc_status_menunggu'));
}
function toggleFollowKarya_(kode) {
  var list = getFollowedKarya_();
  var idx = list.findIndex(function(f) { return f.kode === kode; });
  if (idx !== -1) {
    list.splice(idx, 1);
  } else {
    var res = _scLastStatusRes;
    list.push({
      kode: kode,
      namaProgram: (res && res.kode === kode) ? res.namaProgram : '',
      statusModerasi: (res && res.kode === kode) ? res.statusModerasi : 'Menunggu'
    });
  }
  saveFollowedKarya_(list);
  var btn = document.getElementById('followKaryaBtn');
  if (btn) {
    var following = isFollowingKarya_(kode);
    btn.classList.toggle('active', following);
    btn.textContent = following ? t('follow_btn_active') : t('follow_karya_btn');
  }
  renderFollowedKaryaSection_();
}
// Perbarui snapshot status begitu benar-benar dilihat (lewat cek manual ATAU
// lewat daftar "diikuti"), supaya badge "status berubah" hilang setelah
// dilihat, bukan cuma setelah di-follow.
function markFollowedKaryaSeen_(kode, statusModerasi) {
  var list = getFollowedKarya_();
  var idx = list.findIndex(function(f) { return f.kode === kode; });
  if (idx === -1) return;
  list[idx].statusModerasi = statusModerasi;
  saveFollowedKarya_(list);
}
function unfollowKarya_(kode, ev) {
  if (ev) ev.stopPropagation();
  saveFollowedKarya_(getFollowedKarya_().filter(function(f) { return f.kode !== kode; }));
  renderFollowedKaryaSection_();
}
function followedKaryaCardHtml_(f, freshStatus) {
  var changed = freshStatus && freshStatus !== f.statusModerasi;
  var badge = changed ? '<span class="follow-badge">' + t('follow_karya_changed') + '</span>' : '';
  return '<div class="sc-card follow-card" onclick="openFollowedKarya_(\'' + escHtml(f.kode) + '\')" style="cursor:pointer;">' +
    '<div class="sc-status-card-top">' +
      '<div><div class="sc-status-name">' + escHtml(f.namaProgram || '-') + badge + '</div><div class="sc-status-code">' + escHtml(f.kode) + ' &middot; ' + escHtml(scStatusLabel_(freshStatus || f.statusModerasi)) + '</div></div>' +
      '<button type="button" class="follow-remove-btn" onclick="unfollowKarya_(\'' + escHtml(f.kode) + '\', event)" title="' + t('follow_remove') + '">&times;</button>' +
    '</div>' +
  '</div>';
}
function renderFollowedKaryaSection_() {
  var el = document.getElementById('followedKaryaSection');
  if (!el) return;
  var list = getFollowedKarya_();
  if (!list.length) { el.innerHTML = ''; return; }
  el.innerHTML = '<div class="follow-list-title">' + t('follow_karya_section_title') + '</div><div id="followedKaryaCards">' +
    list.map(function(f) { return followedKaryaCardHtml_(f, null); }).join('') + '</div>';
  // Cek status terkini di latar belakang (tidak menghalangi render daftar)
  // supaya badge "status berubah" muncul begitu statusnya berubah sejak
  // terakhir dilihat. Sama seperti renderFollowedNimSection_ - jeda ini
  // WAJIB ada karena openShowcaseStatus() (satu-satunya pemanggil fungsi
  // ini) sekarang juga dipanggil ulang lewat tombol back/forward
  // (popstate), jadi tanpa jeda, hanya bolak-balik di riwayat browser saja
  // sudah bisa memicu action 'showcase_status' berkali-kali - action ini
  // punya rate limit KETAT dan GLOBAL untuk SELURUH pengunjung situs
  // sekaligus (checkRateLimit_('sc_status', 20) di Code.gs, 20x/menit
  // dibagi rata semua orang, bukan per-pengunjung), jadi volume permintaan
  // ekstra dari fitur follow ini bisa membuat pengecekan status manual
  // milik pengunjung LAIN ikut gagal (pesan "sc_rate_limited") walau
  // mereka sama sekali tidak memakai fitur follow. Ini kemungkinan besar
  // penyebab laporan "sering gagal mengambil data" setelah fitur ini
  // ditambahkan.
  if (Date.now() - _followKaryaLastRefresh < FOLLOW_REFRESH_COOLDOWN_MS) return;
  _followKaryaLastRefresh = Date.now();
  list.forEach(function(f, i) {
    gasGet({ action: 'showcase_status', kode: f.kode, lang: currentLang }).then(function(res) {
      if (!res || !res.ok) return;
      var cardsWrap = document.getElementById('followedKaryaCards');
      if (!cardsWrap || !cardsWrap.children[i]) return;
      cardsWrap.children[i].outerHTML = followedKaryaCardHtml_(f, res.statusModerasi);
    }).catch(function() {});
  });
}
function openFollowedKarya_(kode) {
  document.getElementById('scStatusInput').value = kode;
  cekShowcaseStatus();
}

// ---- Cek Status ----
function openShowcaseStatus(noPush) {
  scHideAllViews_();
  document.getElementById('scStatusView').style.display = 'block';
  document.getElementById('scStatusResult').innerHTML = '';
  document.getElementById('scStatusInput').value = '';
  document.getElementById('scOwnDetailBody').innerHTML = '';
  document.getElementById('scOwnDetailBody').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderFollowedKaryaSection_();
  if (noPush) history.replaceState({ view: 'scStatus' }, '', location.href);
  else history.pushState({ view: 'scStatus' }, '', location.href);
}

async function cekShowcaseStatus() {
  var kode = document.getElementById('scStatusInput').value.trim();
  var resultEl = document.getElementById('scStatusResult');
  if (!kode) { resultEl.innerHTML = '<p class="msg-error">' + t('sc_status_kosong') + '</p>'; return; }
  resultEl.innerHTML = '<p class="msg-center">' + t('sc_loading') + '</p>';
  try {
    var res = await gasGet({ action: 'showcase_status', kode: kode, lang: currentLang });
    if (!res || !res.ok) {
      resultEl.innerHTML = '<p class="msg-error">' + escHtml((res && res.message) || t('sc_status_not_found')) + '</p>';
      return;
    }
    _scLastStatusRes = res;
    var pillClass = res.statusModerasi === 'Disetujui' ? 'sc-status-disetujui' : (res.statusModerasi === 'Ditolak' ? 'sc-status-ditolak' : 'sc-status-menunggu');
    var pillLabel = res.statusModerasi === 'Disetujui' ? t('sc_status_disetujui') : (res.statusModerasi === 'Ditolak' ? t('sc_status_ditolak') : t('sc_status_menunggu'));
    var html = '<div class="sc-card">' +
      '<div class="sc-status-card-top">' +
        '<div><div class="sc-status-name">' + escHtml(res.namaProgram) + '</div><div class="sc-status-code">' + escHtml(res.kode) + '</div></div>' +
        '<span class="sc-status-pill ' + pillClass + '">' + pillLabel + '</span>' +
      '</div>';
    if (res.statusModerasi === 'Disetujui') {
      html += '<button class="sc-btn sc-btn-outline sc-btn-sm" onclick="openShowcaseDetail(\'' + escHtml(res.kode) + '\')">' + t('sc_btn_lihat_galeri') + '</button>';
    } else if (res.statusModerasi === 'Ditolak') {
      if (res.alasanDitolak) html += '<div class="sc-reject-reason"><b>' + t('sc_status_alasan_label') + ':</b> ' + escHtml(res.alasanDitolak) + '</div>';
      html += '<div class="sc-action-row"><button class="sc-btn sc-btn-primary sc-btn-sm" onclick="scOpenResubmit(\'' + escHtml(res.kode) + '\')">' + t('sc_btn_edit_kirim_ulang') + '</button></div>';
    } else {
      html += '<div class="sc-action-row"><button class="sc-btn sc-btn-outline sc-btn-sm" onclick="scViewOwnDetail(\'' + escHtml(res.kode) + '\')">' + t('sc_btn_lihat_detail') + '</button></div>';
    }
    html += '<button type="button" class="follow-btn' + (isFollowingKarya_(res.kode) ? ' active' : '') + '" id="followKaryaBtn" style="margin-top:10px;" onclick="toggleFollowKarya_(\'' + escHtml(res.kode) + '\')">' + t(isFollowingKarya_(res.kode) ? 'follow_btn_active' : 'follow_karya_btn') + '</button>';
    html += '</div>';
    resultEl.innerHTML = html;
    document.getElementById('scOwnDetailBody').innerHTML = '';
    document.getElementById('scOwnDetailBody').style.display = 'none';
    markFollowedKaryaSeen_(res.kode, res.statusModerasi);
  } catch (e) {
    resultEl.innerHTML = '<p class="msg-error">' + t('sc_error') + '</p>';
  }
}

async function scViewOwnDetail(kode) {
  var box = document.getElementById('scOwnDetailBody');
  box.style.display = 'block';
  box.innerHTML = '<p class="msg-center">' + t('sc_loading') + '</p>';
  try {
    var res = await gasGet({ action: 'showcase_mine', kode: kode, lang: currentLang });
    if (!res || !res.ok) { box.innerHTML = '<p class="msg-error">' + escHtml((res && res.message) || t('sc_error')) + '</p>'; return; }
    box.innerHTML = '<div class="sc-card">' + scBuildDetailBodyHtml_(res.item, { showLike: false, showReport: false }) + '</div>';
    scHeroCarouselInit_();
  } catch (e) {
    box.innerHTML = '<p class="msg-error">' + t('sc_error') + '</p>';
  }
}
