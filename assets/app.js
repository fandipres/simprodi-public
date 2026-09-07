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
    btn_beranda: 'Beranda',
    search_placeholder: 'Cari berdasarkan NIM atau nama...',
    search_btn: 'Cari', search_btn_loading: 'Mencari...',
    search_hint: 'Masukkan NIM lengkap atau sebagian nama mahasiswa (minimal 3 karakter).',
    search_min_chars_msg: 'Masukkan minimal 3 karakter untuk melakukan pencarian.',
    search_nim_more_digits: 'Masukkan digit NIM yang lebih banyak atau cari menggunakan nama.',
    search_conn_error: 'Tidak dapat terhubung ke server. Periksa koneksi internet dan coba lagi.',
    search_result_found: 'Ditemukan {count} mahasiswa untuk kata kunci "{query}".',
    search_result_toomany: 'Menampilkan 30 dari {total} hasil. Perlengkap kata kunci untuk mempersempit pencarian.',
    btn_kembali: 'Kembali',
    detail_title: 'Detail Portofolio Mahasiswa',
    detail_sub: 'Rincian prestasi, MBKM, dan sertifikasi yang tercatat untuk mahasiswa ini.',
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

    sc_back: 'Kembali',
    sc_detail_title: 'Detail Karya Showcase',
    sc_detail_sub: 'Info lengkap, tautan, dan dukungan untuk karya mahasiswa ini.',
    sc_creators_label: 'Dikerjakan Oleh',
    sc_academic_label: 'Informasi Akademik',
    sc_sumber_tugas_label: 'Sumber Karya',
    sc_semester_label: 'Semester Dikerjakan',
    sc_dosen_label: 'Dosen Pembimbing',
    sc_kontak_label: 'Kontak Tim',
    sc_tech_label: 'Teknologi',
    sc_btn_demo: 'Demo',
    sc_btn_download: 'Unduh',
    sc_btn_source: 'Source Code',
    sc_btn_trailer: 'Tonton Trailer',
    sc_btn_screenshot: 'Lihat Screenshot',
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
    sc_placeholder_dosen: 'mis. Dr. Ir. Ahmad Fauzan, S.Kom., M.T.',
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
    btn_beranda: 'Home',
    search_placeholder: 'Search by NIM or name...',
    search_btn: 'Search', search_btn_loading: 'Searching...',
    search_hint: 'Enter a full NIM or part of a student name (minimum 3 characters).',
    search_min_chars_msg: 'Enter at least 3 characters to search.',
    search_nim_more_digits: 'Enter more NIM digits or search by name instead.',
    search_conn_error: 'Unable to connect to the server. Check your internet connection and try again.',
    search_result_found: 'Found {count} student(s) for "{query}".',
    search_result_toomany: 'Showing 30 of {total} results. Refine your keyword to narrow the search.',
    btn_kembali: 'Back',
    detail_title: 'Student Portfolio Detail',
    detail_sub: 'Recorded achievements, MBKM activities, and certifications for this student.',
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

    sc_back: 'Back',
    sc_detail_title: 'Showcase Project Detail',
    sc_detail_sub: 'Full info, links, and support for this student project.',
    sc_creators_label: 'Made By',
    sc_academic_label: 'Academic Information',
    sc_sumber_tugas_label: 'Work Source',
    sc_semester_label: 'Semester Made',
    sc_dosen_label: 'Supervisor',
    sc_kontak_label: 'Team Contact',
    sc_tech_label: 'Technology',
    sc_btn_demo: 'Demo',
    sc_btn_download: 'Download',
    sc_btn_source: 'Source Code',
    sc_btn_trailer: 'Watch Trailer',
    sc_btn_screenshot: 'View Screenshots',
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
    sc_placeholder_dosen: 'e.g. Dr. Ir. Ahmad Fauzan, S.Kom., M.T.',
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
    return;
  }
  if (document.getElementById('searchSection').style.display !== 'none') {
    if (lastQuery) doSearch(); else renderList();
    return;
  }
  if (document.getElementById('quizView').style.display !== 'none') { renderQuizQuestion(); return; }
  if (document.getElementById('quizResultView').style.display !== 'none') { showQuizResult(); return; }
  if (document.getElementById('scGaleriView').style.display !== 'none') { scRenderGaleri(); return; }
  if (document.getElementById('scDetailView').style.display !== 'none' && _scCurrentDetail) { scRenderDetail(); }
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
// kembali ke daftar/galeri). Pakai replaceState, bukan pushState, supaya
// tidak menambah riwayat browser untuk setiap detail yang dibuka.
function updateUrlParam_(key, value) {
  var url = new URL(location.href);
  url.search = '';
  if (key && value) url.searchParams.set(key, value);
  history.replaceState(null, '', url.toString());
}

// Sama seperti updateUrlParam_, tapi juga mengganti PATH-nya (bukan cuma
// query string) - dipakai supaya tiap fitur utama (/portofolio/, /showcase/,
// /specialization/) punya alamat bersih sendiri yang gampang dibagikan,
// bukan cuma root diikuti parameter. Query string yang sedang aktif ikut
// dibersihkan setiap path berpindah.
function setCleanPath_(path) {
  var url = new URL(location.href);
  url.pathname = path;
  url.search = '';
  history.replaceState(null, '', url.toString());
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

  // Setiap route punya berkas fisiknya sendiri, jadi tampilan awal yang
  // dibuka ditentukan langsung dari path saat ini (tidak perlu redirect).
  const path = location.pathname.replace(/\/+$/, '') || '/';
  if      (path === '/portofolio')     openPortofolio();
  else if (path === '/showcase')       openShowcaseGaleri();
  else if (path === '/specialization') openQuiz();
  else if (path === '/statistic')      openStatistik();

  const nim = new URLSearchParams(location.search).get('nim');
  if (nim) { openPortofolio(); searchInput.value = nim; doSearch(true); }
  const kode = new URLSearchParams(location.search).get('kode');
  if (kode) { openShowcaseDetail(kode); }
});

// ------ SEARCH ------
async function doSearch(autoOpen = false) {
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
      renderList(); openDetail(0);
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
      renderList(); openDetail(0);
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

function showList() {
  document.getElementById('detailView').style.display    = 'none';
  document.getElementById('searchSection').style.display = 'block';
  document.getElementById('listView').style.display      = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setStatus('');
  updateUrlParam_();
}

// ------ DETAIL ------
function openDetail(idx) {
  const s = allStudents[idx];
  if (!s) return;
  currentStudent = s;

  document.getElementById('dNama').textContent = s.nama || '-';
  document.getElementById('dNim').textContent  = 'NIM. ' + s.nim;

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
  updateUrlParam_('nim', s.nim);
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
function showHome() {
  scHideAllViews_();
  document.getElementById('homeView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setCleanPath_('/');
}

function openPortofolio() {
  scHideAllViews_();
  document.getElementById('searchSection').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(function() { searchInput.focus(); }, 80);
  setCleanPath_('/portofolio/');
}

// ------ STATISTIK PROGRAM STUDI ------
let statLoaded = false;

function fmtStat_(n) {
  return Number(n || 0).toLocaleString('id-ID') + '+';
}

async function openStatistik() {
  scHideAllViews_();
  document.getElementById('statistikView').style.display = 'block';
  setCleanPath_('/statistic/');
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

async function openQuiz() {
  scHideAllViews_();
  document.getElementById('quizView').style.display  = 'block';
  setCleanPath_('/specialization/');
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
      id: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
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
   'scGaleriView','scDetailView','scFormView','scStatusView','statistikView'].forEach(function(id) {
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

async function openShowcaseGaleri() {
  scHideAllViews_();
  document.getElementById('scGaleriView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setCleanPath_('/showcase/');
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
    // (gambar hasil kurasi admin lewat tool Buat Thumbnail, kalau diisi) ->
    // thumbnail YouTube (kalau ada trailer) -> ikon fallback per Jenis.
    var thumbYt = scYoutubeId_(item.videoTrailer);
    var thumb = item.linkThumbnail || (thumbYt ? ('https://img.youtube.com/vi/' + thumbYt + '/hqdefault.jpg') : '');
    var thumbStyle = thumb ? ' style="background-image:url(\'' + safeUrl_(thumb) + '\')"' : '';
    var thumbHtml = thumb ? ('<div class="sc-gthumb"' + thumbStyle + '></div>') : ('<div class="sc-gthumb sc-gthumb-empty">' + SC_ICON_NOPREVIEW + '</div>');
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

async function openShowcaseDetail(kode) {
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
    updateUrlParam_('kode', res.item.kode);
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
  var trailerButtonHtml = '';
  // linkScreenshot adalah link FOLDER (mis. Google Drive), bukan link
  // gambar langsung - tidak bisa dipasang sebagai <img>/background-image,
  // jadi folder screenshot tetap ditawarkan sebagai tombol terpisah ("Lihat
  // Screenshot") di actionsHtml, bukan hero media. linkThumbnail (gambar
  // hasil kurasi admin lewat tool Buat Thumbnail, hotlink langsung) jadi
  // prioritas pertama utk hero media kalau diisi; trailer YouTube jadi
  // tombol sekunder pada kondisi ini (lihat trailerButtonHtml di bawah).
  if (item.linkThumbnail) {
    mediaHtml = '<div class="sc-hero-media" style="cursor:default;">' +
      '<img src="' + safeUrl_(item.linkThumbnail) + '" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"></div>';
  } else if (yt) {
    mediaHtml = '<div class="sc-hero-media" style="cursor:default;">' +
      '<iframe style="position:absolute;inset:0;width:100%;height:100%;border:0;" src="https://www.youtube.com/embed/' + yt + '" allowfullscreen loading="lazy"></iframe></div>';
  } else if (item.videoTrailer) {
    mediaHtml = '<a class="sc-hero-media" href="' + safeUrl_(item.videoTrailer) + '" target="_blank" rel="noopener"><span class="play">&#9654;</span></a>';
  } else {
    mediaHtml = '<div class="sc-hero-media sc-hero-fallback">' + (SC_ICON_JENIS[item.jenis] || SC_ICON_JENIS_DEFAULT) + '</div>';
  }
  if (item.videoTrailer) {
    trailerButtonHtml = '<a class="sc-btn sc-btn-outline" href="' + safeUrl_(item.videoTrailer) + '" target="_blank" rel="noopener">' + t('sc_btn_trailer') + '</a>';
  }
  var screenshotButtonHtml = item.linkScreenshot
    ? '<a class="sc-btn sc-btn-outline" href="' + safeUrl_(item.linkScreenshot) + '" target="_blank" rel="noopener">' + t('sc_btn_screenshot') + '</a>'
    : '';
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
      item.teknologi.map(function(x) { return '<span class="sc-tech-pill">' + escHtml(x) + '</span>'; }).join('') + '</div>'
    : '';

  var actionsHtml = '<div class="sc-action-row">' +
    (item.linkDemo ? '<a class="sc-btn sc-btn-primary" href="' + safeUrl_(item.linkDemo) + '" target="_blank" rel="noopener">' + t('sc_btn_demo') + '</a>' : '') +
    (item.linkDownload ? '<a class="sc-btn sc-btn-primary" href="' + safeUrl_(item.linkDownload) + '" target="_blank" rel="noopener">' + t('sc_btn_download') + '</a>' : '') +
    (item.linkSourceCode ? '<a class="sc-btn sc-btn-outline" href="' + safeUrl_(item.linkSourceCode) + '" target="_blank" rel="noopener">' + t('sc_btn_source') + '</a>' : '') +
    screenshotButtonHtml +
    trailerButtonHtml +
    '</div>';

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
      ((item.dosenPembimbing && item.dosenPembimbing.length) ? '<div class="sc-info-card"><div class="sc-info-icon">' + SC_ICON_DOSEN + '</div><div><div class="sc-info-k">' + t('sc_dosen_label') + '</div><div class="sc-info-v">' + escHtml(item.dosenPembimbing.join(', ')) + '</div></div></div>' : '') +
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
function openShowcaseForm() {
  scHideAllViews_();
  document.getElementById('scFormView').style.display = 'block';
  _scResubmitKode = null;
  document.getElementById('scFormTitle').textContent = t('sc_form_title');
  scResetForm();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
      '<input class="sc-input scf-dosen-nama" placeholder="' + t('sc_placeholder_dosen') + '">' +
      '<button type="button" class="sc-icon-btn" onclick="scRemoveDosenRow(this)" title="Hapus">&times;</button>' +
    '</div>';
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
    '<input class="sc-input scf-dosen-nama" placeholder="' + t('sc_placeholder_dosen') + '">' +
    '<button type="button" class="sc-icon-btn" onclick="scRemoveDosenRow(this)" title="Hapus">&times;</button>';
  wrap.appendChild(row);
}
function scRemoveDosenRow(btn) {
  var wrap = document.getElementById('scfDosenFields');
  if (wrap.children.length > 1) btn.closest('.sc-single-field').remove();
  else btn.closest('.sc-single-field').querySelector('.scf-dosen-nama').value = '';
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
function scGetTechValues_() {
  var vals = Array.prototype.map.call(document.querySelectorAll('#scfTeknologiChips .sc-tag-chip'), function(el) { return el.dataset.val; });
  var trailing = document.getElementById('scfTeknologi').value.trim();
  if (trailing) vals.push(trailing);
  return vals;
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
  (item.teknologi || []).forEach(function(x) { scAddTechChip_(x); });
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
        '<input class="sc-input scf-dosen-nama" value="' + escHtml(nm) + '">' +
        '<button type="button" class="sc-icon-btn" onclick="scRemoveDosenRow(this)" title="Hapus">&times;</button>' +
      '</div>';
    }).join('');
  }
}

async function scOpenResubmit(kode) {
  scHideAllViews_();
  document.getElementById('scFormView').style.display = 'block';
  document.getElementById('scFormTitle').textContent = t('sc_resubmit_title');
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

// ---- Cek Status ----
function openShowcaseStatus() {
  scHideAllViews_();
  document.getElementById('scStatusView').style.display = 'block';
  document.getElementById('scStatusResult').innerHTML = '';
  document.getElementById('scStatusInput').value = '';
  document.getElementById('scOwnDetailBody').innerHTML = '';
  document.getElementById('scOwnDetailBody').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    html += '</div>';
    resultEl.innerHTML = html;
    document.getElementById('scOwnDetailBody').innerHTML = '';
    document.getElementById('scOwnDetailBody').style.display = 'none';
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
  } catch (e) {
    box.innerHTML = '<p class="msg-error">' + t('sc_error') + '</p>';
  }
}
