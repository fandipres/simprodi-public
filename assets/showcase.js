// ==============================================================
// SHOWCASE MAHASISWA - hanya dimuat di /showcase/ (docs/showcase/index.html),
// setelah app.js. app.js tetap jadi mesin bersama (I18N/t, tema, gasGet,
// escHtml, setCleanPath_/updateUrlParam_, scHideAllViews_, riwayat browser);
// berkas ini berisi seluruh fitur Showcase plus routing-nya sendiri.
// Markup-nya di showcase-shell.html, gaya khususnya di showcase.css.
// shortcut: halaman Showcase ikut memuat app.js utuh sebagai mesin (fitur
// situs utama ikut terunduh walau tidak dipakai); pecah jadi core.js kalau
// ukuran unduhan mulai jadi masalah.
// ==============================================================

// Rute halaman Showcase. Path selain /showcase berarti riwayat browser
// kembali ke halaman situs utama (mis. entri Home yang disisipkan saat
// halaman dibuka langsung dari tautan) - muat ulang halaman itu apa adanya.
function scDispatchRoute_(noPush) {
  var path = location.pathname.replace(/\/+$/, '') || '/';
  if (path !== '/showcase') { location.replace(location.href); return; }
  var params = new URLSearchParams(location.search);
  var kode = params.get('kode');
  if (params.get('dosen')) { _scFilters.dosen = params.get('dosen'); scSyncFilterUi_(); }
  if (kode) openShowcaseDetail(kode, noPush);
  else openShowcaseGaleri(noPush);
}

// Kirim Karya dan Cek Status tidak punya URL sendiri; riwayatnya ditandai
// lewat history.state (lihat openShowcaseForm/openShowcaseStatus).
function scPopstate_(e) {
  if (e.state && e.state.view === 'scForm')   { openShowcaseForm(true); return; }
  if (e.state && e.state.view === 'scStatus') { openShowcaseStatus(true); return; }
  scDispatchRoute_(true);
}

function scRerender_() {
  if (document.getElementById('scGaleriView').style.display !== 'none') { scRenderGaleri(); return; }
  if (document.getElementById('scDetailView').style.display !== 'none' && _scCurrentDetail) { scRenderDetail(); }
}

function laporKaryaWa_(kode) {
  var nama = (_scCurrentDetail && _scCurrentDetail.kode === kode) ? _scCurrentDetail.namaProgram : kode;
  openProdiWa_(t('wa_karya_msg', { nama: nama, kode: kode }));
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
// (lihat docs/assets/thumbnails/README.md - staf upload WebP-nya lewat
// GitHub dengan nama file KODE.webp, tanpa perlu tempel link sama sekali).
// Ekstensi .webp (bukan .png lagi) - tool "Buat Thumbnail" sekarang
// mengekspor WebP (jauh lebih kecil untuk konten screenshot/foto seperti
// ini, lihat thumbDownload_ di admin-script.html), dan 11 thumbnail lama
// yang sudah terlanjur di-upload sebagai PNG sudah dikonversi ulang jadi
// WebP juga supaya konsisten satu ekstensi saja - tidak perlu logika
// fallback dua-ekstensi di sini. location.origin (bukan domain di-
// hardcode) supaya tetap benar diakses lewat domain apapun situs ini
// disajikan (custom domain, staging, atau server lokal saat testing) -
// hasilnya http(s):// penuh supaya lolos validasi safeUrl_ yang sama
// seperti link lain di halaman ini.
function scDerivedThumbUrl_(kode) {
  return location.origin + '/assets/thumbnails/' + kode + '.webp';
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
  // Di layar lebar thumbnail dan trailer tampil berdampingan (showcase.css),
  // jadi tidak ada slide yang perlu digeser otomatis.
  if (!window.matchMedia('(min-width: 900px)').matches) {
    _scHeroAutoTimer = setInterval(function() { scHeroCarouselAutoAdvance_(track); }, 4500);
  }
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
var _scFilters = { jenis: '', peminatan: '', status: '', statusPublish: '', sumber: '', teknologi: '', dosen: '' };
var _scSort    = 'baru';

async function openShowcaseGaleri(noPush) {
  scHideAllViews_();
  scSetNavActive_(''); // galeri & detail: dibuka lewat brand "Showcase", tidak ada menu aktif
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
    if (res && res.ok) { _scItems = res.items; _scLoaded = true; scPopulateFilterOptions_(); }
    else { document.getElementById('scGaleriGrid').innerHTML = '<div class="sc-empty">' + t('sc_error') + '</div>'; }
  } catch (e) {
    document.getElementById('scGaleriGrid').innerHTML = '<div class="sc-empty">' + t('sc_error') + '</div>';
  }
}

function scToggleFilterPanel() {
  var overlay = document.getElementById('scFilterOverlay');
  if (overlay.classList.contains('open')) { scCloseFilterPanel(); return; }
  overlay.classList.add('open');
  document.getElementById('scFilterToggleBtn').setAttribute('aria-expanded', 'true');
  var first = overlay.querySelector('.scf-chip[aria-pressed="true"]') || overlay.querySelector('.scf-chip');
  if (first) first.focus();
}

function scCloseFilterPanel() {
  var overlay = document.getElementById('scFilterOverlay');
  if (!overlay || !overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  var btn = document.getElementById('scFilterToggleBtn');
  btn.setAttribute('aria-expanded', 'false');
  btn.focus();
}

// Esc dan klik di luar panel menutup filter (di desktop panelnya berupa
// dropdown, jadi tidak ada latar yang menangkap klik).
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') scCloseFilterPanel();
});
document.addEventListener('click', function(e) {
  var overlay = document.getElementById('scFilterOverlay');
  if (!overlay || !overlay.classList.contains('open')) return;
  if (!e.target.closest('#scFilterPanel') && !e.target.closest('#scFilterToggleBtn')) scCloseFilterPanel();
});

function scSetFilter(group, val) {
  _scFilters[group] = val;
  scSyncFilterUi_();
  scRenderGaleri();
}

function scClearFilter_(group) {
  _scFilters[group] = '';
  scSyncFilterUi_();
  scRenderGaleri();
}

// Reset hanya filter di panel; Jenis dipilih lewat tab dan tetap terlihat.
function scResetFilters_() {
  Object.keys(_scFilters).forEach(function(k) { if (k !== 'jenis') _scFilters[k] = ''; });
  scSyncFilterUi_();
  scRenderGaleri();
}

// NIM cuma boleh angka, berlaku untuk semua baris kreator (statis, ditambah
// dinamis, maupun hasil scPopulateForm_ saat resubmit) lewat event delegation.
document.addEventListener('input', function(e) {
  if (e.target.classList.contains('scf-kreator-nim')) {
    e.target.value = e.target.value.replace(/\D/g, '');
  }
});

function scSetSort(key) {
  _scSort = key;
  document.getElementById('scSortSelect').value = key;
  scRenderGaleri();
}

function scSetNavActive_(id) {
  document.querySelectorAll('.scn-link').forEach(function(a) { a.classList.toggle('active', a.id === id); });
}

// Jenis dipilih lewat tab di atas galeri; filter lain (termasuk Teknologi
// dan Dosen Pembimbing) ada di panel Filter, dan badge-nya hanya
// menghitung filter di panel itu.
function scSetJenisTab_(val, btn) {
  _scFilters.jenis = val;
  document.querySelectorAll('#scJenisTabs .scg-tab').forEach(function(b) {
    b.classList.toggle('active', b === btn);
    b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
  });
  scRenderGaleri();
}

function scSetSelectFilter_(group, val) {
  _scFilters[group] = val;
  scSyncFilterUi_();
  scRenderGaleri();
}

// Label filter aktif sesuai bahasa yang sedang dipakai.
function scFilterValueLabel_(group, v) {
  var keys = {
    'Tanpa Peminatan': 'sc_peminatan_tanpa', 'Sudah Deploy': 'sc_status_sudah', 'Belum Deploy': 'sc_status_belum',
    'Sudah Publish': 'sc_opt_sudah_publish', 'Belum Publish': 'sc_opt_belum_publish',
    'Kompetisi': 'sc_opt_kompetisi', 'Mata Kuliah': 'sc_opt_matkul', 'Tugas Akhir': 'sc_opt_ta'
  };
  return (group !== 'teknologi' && group !== 'dosen' && keys[v]) ? t(keys[v]) : v;
}

// Menyamakan semua tampilan filter dengan _scFilters: chip di panel
// (aria-pressed), dropdown, angka di tombol Filter, dan baris filter aktif
// di bawah tab (tiap filter bisa dicabut langsung tanpa membuka panel).
function scSyncFilterUi_() {
  document.querySelectorAll('.scf-chips').forEach(function(box) {
    var current = _scFilters[box.dataset.group] || '';
    box.querySelectorAll('.scf-chip').forEach(function(c) { c.setAttribute('aria-pressed', c.dataset.val === current ? 'true' : 'false'); });
  });
  var tek = document.getElementById('scFilterTek');
  if (tek && tek.value !== _scFilters.teknologi) tek.value = _scFilters.teknologi;
  var dsn = document.getElementById('scFilterDosen');
  if (dsn && scNormName_(dsn.value) !== scNormName_(_scFilters.dosen)) dsn.value = _scFilters.dosen;

  var active = Object.keys(_scFilters).filter(function(k) { return k !== 'jenis' && _scFilters[k]; });
  var badge = document.getElementById('scFilterBadge');
  if (badge) {
    if (active.length) { badge.textContent = active.length; badge.style.display = 'inline-flex'; }
    else badge.style.display = 'none';
  }
  var row = document.getElementById('scActiveFilters');
  if (!row) return;
  if (!active.length) { row.innerHTML = ''; row.style.display = 'none'; return; }
  // group adalah kunci tetap milik kode (bukan input pengguna), aman di onclick.
  row.innerHTML = active.map(function(k) {
    var label = scFilterValueLabel_(k, _scFilters[k]);
    return '<button type="button" class="scg-active-chip" onclick="scClearFilter_(\'' + k + '\')" aria-label="' + escHtml(t('sc_filter_remove', { v: label })) + '">' +
      escHtml(label) + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
  }).join('') + '<button type="button" class="scg-active-clear" onclick="scResetFilters_()">' + t('sc_filter_clear_all') + '</button>';
  row.style.display = '';
}

// Pilihan Teknologi/Dosen diambil dari karya yang sudah tayang, jadi tidak
// pernah ada pilihan yang hasilnya kosong.
function scPopulateFilterOptions_() {
  var tech = {}, dosen = {};
  _scItems.forEach(function(item) {
    (item.teknologi || []).forEach(function(x) { var k = x.toLowerCase(); if (!tech[k]) tech[k] = x; });
    (item.dosenPembimbing || []).forEach(function(d) { var k = scNormName_(d); if (!dosen[k]) dosen[k] = d; });
  });
  var fill = function(id, values, current, norm) {
    var el = document.getElementById(id);
    if (!el) return;
    // Pakai ejaan yang ada di daftar kalau nilai aktif hanya beda tulisan.
    var match = current ? values.filter(function(v) { return norm(v) === norm(current); })[0] : '';
    if (current && !match) values.unshift(current);
    el.innerHTML = '<option value="">' + escHtml(t('sc_filter_semua')) + '</option>' +
      values.map(function(v) { return '<option value="' + escHtml(v) + '">' + escHtml(v) + '</option>'; }).join('');
    el.value = match || current || '';
  };
  var lower = function(v) { return String(v).toLowerCase(); };
  fill('scFilterTek', sortTeknologi_(Object.keys(tech).map(function(k) { return tech[k]; })), _scFilters.teknologi, lower);
  fill('scFilterDosen', Object.keys(dosen).map(function(k) { return dosen[k]; }).sort(function(a, b) { return a.localeCompare(b, 'id', { sensitivity: 'base' }); }), _scFilters.dosen, scNormName_);
}

// Nama dosen dicocokkan tanpa peduli tanda baca, spasi, dan huruf besar/kecil:
// karya lama yang diisi sebelum ada pilihan dosen bisa berbeda tulisan
// (mis. "Andri S.Kom." vs "Andri, S.Kom.").
function scNormName_(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function scName_(item) {
  return (currentLang === 'en' && item.namaProgramEn) ? item.namaProgramEn : item.namaProgram;
}

function scPemLabel_(p) {
  return p === 'Tanpa Peminatan' ? t('sc_peminatan_tanpa') : p;
}

// Meta kartu: peminatan hanya disebut kalau ada, supaya kartu tidak ramai.
function scCardMeta_(item) {
  return item.peminatan === 'Tanpa Peminatan' ? item.jenis : item.jenis + ' · ' + item.peminatan;
}

var SC_ICON_HEART = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>';

// Urutan sumber thumbnail: linkThumbnail (override admin) -> konvensi
// /assets/thumbnails/KODE.webp -> thumbnail YouTube trailer -> ikon Jenis
// (lihat scThumbFallback_).
function scThumbHtml_(item) {
  var yt = scYoutubeId_(item.videoTrailer);
  var ytUrl = yt ? ('https://img.youtube.com/vi/' + yt + '/hqdefault.jpg') : '';
  return '<img class="sc-gthumb" src="' + safeUrl_(item.linkThumbnail || scDerivedThumbUrl_(item.kode)) + '" alt="" loading="lazy"' +
      (ytUrl ? ' data-fallback="' + safeUrl_(ytUrl) + '"' : '') + ' onerror="scThumbFallback_(this)">' +
    '<div class="sc-gthumb sc-gthumb-empty" style="display:none;">' + (SC_ICON_JENIS[item.jenis] || SC_ICON_JENIS_DEFAULT) + '</div>';
}

// item.kode berformat tetap dari server (SC-XXXXX), aman disisipkan ke onclick.
function scDetailLinkAttrs_(item) {
  return 'href="/showcase/?kode=' + encodeURIComponent(item.kode) + '" onclick="event.preventDefault();openShowcaseDetail(\'' + escHtml(item.kode) + '\')"';
}

function scCardHtml_(item) {
  var tech = sortTeknologi_(item.teknologi || []).slice(0, 2).map(function(x) { return '<span class="scg-pill" title="' + escHtml(x) + '">' + escHtml(x) + '</span>'; }).join('');
  return '<a class="scg-card" ' + scDetailLinkAttrs_(item) + '>' +
    '<div class="scg-thumb">' + scThumbHtml_(item) +
      (item.statusPublish === 'Sudah Publish' ? '<span class="scg-badge">' + t('sc_status_publish_sudah') + '</span>' : '') + '</div>' +
    '<div class="scg-body">' +
      '<div class="scg-row"><span class="scg-icon">' + (SC_ICON_JENIS[item.jenis] || SC_ICON_JENIS_DEFAULT) + '</span>' +
        '<span class="scg-titles"><span class="scg-name">' + escHtml(scName_(item)) + '</span>' +
        '<span class="scg-meta">' + escHtml(scCardMeta_(item)) + '</span></span></div>' +
      '<div class="scg-foot"><span class="scg-pills">' + tech + '</span><span class="scg-likes">' + SC_ICON_HEART + item.likes + '</span></div>' +
    '</div></a>';
}

function scRankHtml_(item, i) {
  return '<a class="scg-rank" ' + scDetailLinkAttrs_(item) + '>' +
    '<span class="scg-rank-n">' + (i + 1) + '</span>' +
    '<span class="scg-rank-thumb">' + scThumbHtml_(item) + '</span>' +
    '<span class="scg-titles"><span class="scg-name">' + escHtml(scName_(item)) + '</span>' +
    '<span class="scg-meta">' + escHtml(scCardMeta_(item)) + '</span></span>' +
    '<span class="scg-likes">' + SC_ICON_HEART + item.likes + '</span></a>';
}

function scByNewest_(a, b) { return new Date(b.timestamp) - new Date(a.timestamp); }
function scByLikes_(a, b) { return b.likes - a.likes; }

function scRenderGaleri() {
  var q = (document.getElementById('scSearchInput').value || '').trim().toLowerCase();
  var list = _scItems.filter(function(item) {
    if (_scFilters.jenis && item.jenis !== _scFilters.jenis) return false;
    if (_scFilters.peminatan && item.peminatan !== _scFilters.peminatan) return false;
    if (_scFilters.status && item.statusDeploy !== _scFilters.status) return false;
    if (_scFilters.statusPublish && item.statusPublish !== _scFilters.statusPublish) return false;
    if (_scFilters.sumber && item.sumberTugas !== _scFilters.sumber) return false;
    if (_scFilters.teknologi && !(item.teknologi || []).some(function(x) { return x.toLowerCase() === _scFilters.teknologi.toLowerCase(); })) return false;
    if (_scFilters.dosen && !(item.dosenPembimbing || []).some(function(n) { return scNormName_(n) === scNormName_(_scFilters.dosen); })) return false;
    if (q) {
      var hay = [item.namaProgram, item.namaProgramEn, item.teknologi.join(' '), item.kreator.map(function(k) { return k.nama; }).join(' ')].join(' ').toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  });

  if (_scSort === 'abjad') list.sort(function(a, b) { return a.namaProgram.localeCompare(b.namaProgram); });
  else if (_scSort === 'populer') list.sort(scByLikes_);
  else list.sort(scByNewest_);

  // Mode jelajah (tanpa pencarian/filter): tampilkan Karya Terbaru dan
  // Paling Disukai di atas daftar lengkap. Begitu ada pencarian atau filter,
  // yang tampil hanya hasilnya.
  var browse = !q && !Object.keys(_scFilters).some(function(k) { return _scFilters[k]; });
  var sections = document.getElementById('scBrowseSections');
  if (browse && _scItems.length) {
    sections.innerHTML =
      '<section class="scg-section"><div class="scg-head"><h2 class="scg-h">' + t('sc_latest_title') + '</h2></div>' +
        '<div class="scg-hscroll">' + _scItems.slice().sort(scByNewest_).slice(0, 8).map(scCardHtml_).join('') + '</div></section>' +
      '<section class="scg-section"><div class="scg-head"><h2 class="scg-h">' + t('sc_popular_title') + '</h2></div>' +
        '<div class="scg-ranks">' + _scItems.slice().sort(scByLikes_).slice(0, 6).map(scRankHtml_).join('') + '</div></section>';
    sections.style.display = '';
  } else {
    sections.innerHTML = '';
    sections.style.display = 'none';
  }
  document.getElementById('scAllTitle').textContent = t(browse ? 'sc_all_title' : 'sc_results_title');
  document.getElementById('scResultCount').textContent = t('sc_result_count', { n: list.length });
  var applyBtn = document.getElementById('scFilterApply');
  if (applyBtn) applyBtn.textContent = t('sc_filter_show', { n: list.length });

  var grid = document.getElementById('scGaleriGrid');
  if (!list.length) { grid.innerHTML = '<div class="sc-empty">' + t('sc_empty') + '</div>'; return; }
  grid.innerHTML = list.map(scCardHtml_).join('');
}

// ---- Detail Karya ----
var _scCurrentDetail = null;

// Kode yang sedang diminta paling baru. Dipakai untuk cegah race condition:
// kalau user pindah ke detail lain sebelum request sebelumnya selesai, respons
// yang datang belakangan (basi) tidak boleh menimpa detail yang sedang tampil.
var _scDetailReqKode = null;

async function openShowcaseDetail(kode, noPush) {
  scHideAllViews_();
  scSetNavActive_(''); // galeri & detail: dibuka lewat brand "Showcase", tidak ada menu aktif
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
  var kodeEsc = escHtml(item.kode);
  var mataKuliahDisplay = (currentLang === 'en' && item.mataKuliahEn) ? item.mataKuliahEn : item.mataKuliah;
  // Penanda sumber karya ditaruh di depan nama mata kuliah/kompetisi supaya
  // jelas keduanya, mis. "Kompetisi GEMASTIK 2026" / "Competition GEMASTIK
  // 2026" (nama lombanya sendiri tidak diterjemahkan, cuma penandanya).
  var sumberTugasLabel = t(item.sumberTugas === 'Kompetisi' ? 'sc_opt_kompetisi' : 'sc_opt_matkul');
  var sumberLabel = (item.sumberTugas === 'Mata Kuliah' || item.sumberTugas === 'Kompetisi')
    ? (mataKuliahDisplay ? (sumberTugasLabel + ' ' + mataKuliahDisplay) : sumberTugasLabel)
    : t('sc_opt_ta');
  var deployLabel = item.statusDeploy === 'Sudah Deploy' ? t('sc_status_sudah') : t('sc_status_belum');
  var publishLabel = item.statusPublish === 'Sudah Publish' ? t('sc_status_publish_sudah') : t('sc_opt_belum_publish');

  var badges =
    (item.statusPublish === 'Sudah Publish' ? '<span class="scd-badge scd-badge-ok">' + t('sc_status_publish_sudah') + '</span>' : '') +
    (item.linkDemo ? '<span class="scd-badge scd-badge-ok">' + t('sc_badge_demo') + '</span>' : '') +
    (item.peminatan !== 'Tanpa Peminatan' ? '<span class="scd-badge">' + escHtml(item.peminatan) + '</span>' : '');

  var icoDownload = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';
  var icoExternal = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  var icoShare = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 8l5-5 5 5M5 14v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5"/></svg>';
  var actions =
    (item.linkDownload ? '<a class="scd-btn scd-btn-primary" href="' + safeUrl_(item.linkDownload) + '" target="_blank" rel="noopener">' + icoDownload + t('sc_btn_download') + '</a>' : '') +
    (item.linkDemo ? '<a class="scd-btn scd-btn-primary" href="' + safeUrl_(item.linkDemo) + '" target="_blank" rel="noopener">' + icoExternal + t('sc_btn_demo') + '</a>' : '') +
    (opts.showLike
      ? '<button type="button" class="scd-btn scd-btn-outline" id="scLikeBtn" onclick="scDoLike(\'' + kodeEsc + '\')"><span id="scLikeHeart" class="scd-heart">' + SC_ICON_HEART + '</span>' + t('sc_btn_like') + '</button>' +
        '<button type="button" class="scd-btn scd-btn-icon" onclick="scShare_()" aria-label="' + t('sc_btn_share') + '" title="' + t('sc_btn_share') + '">' + icoShare + '</button>'
      : '');

  var stats = [
    [t('sc_stat_likes'), opts.showLike ? '<span id="scLikeCount">' + item.likes + '</span>' : String(item.likes)],
    [t('sc_label_jenis'), escHtml(item.jenis)],
    [t('sc_label_peminatan'), item.peminatan === 'Tanpa Peminatan' ? '-' : escHtml(item.peminatan)],
    [t('sc_semester_label'), escHtml(translateSemesterLabel_(item.semester))],
    [t('sc_stat_tech'), String((item.teknologi || []).length)]
  ].map(function(st) { return '<div class="scd-stat"><span class="scd-stat-k">' + st[0] + '</span><span class="scd-stat-v">' + st[1] + '</span></div>'; }).join('');

  var techHtml = (item.teknologi && item.teknologi.length)
    ? '<div class="scd-sub">' + t('sc_tech_label') + '</div><div class="scd-pills">' +
      sortTeknologi_(item.teknologi).map(function(x) { return '<span class="scd-pill">' + escHtml(x) + '</span>'; }).join('') + '</div>'
    : '';

  // Tim dan Dosen Pembimbing memakai baris yang sama: nama di kiri,
  // keterangan di kanan (NIM untuk tim, "Pembimbing n" untuk dosen kalau
  // lebih dari satu - urutan dosen bermakna, urutan tim tidak).
  var teamHtml = item.kreator.map(function(k) {
    return '<div class="scd-row"><span class="scd-row-main">' + escHtml(k.nama) + '</span><span class="scd-row-side">' + escHtml(k.nim) + '</span></div>';
  }).join('');
  var dosenList = item.dosenPembimbing || [];
  var dosenHtml = dosenList.map(function(nm, i) {
    return '<div class="scd-row"><span class="scd-row-main">' + escHtml(nm) + '</span>' +
      (dosenList.length > 1 ? '<span class="scd-row-side">' + t('sc_dosen_role', { n: i + 1 }) + '</span>' : '') + '</div>';
  }).join('');

  var info = [
    [t('sc_code_label'), kodeEsc],
    [t('sc_label_jenis'), escHtml(item.jenis)],
    [t('sc_label_peminatan'), escHtml(scPemLabel_(item.peminatan))],
    [t('sc_sumber_tugas_label'), escHtml(sumberLabel)],
    [t('sc_semester_label'), escHtml(translateSemesterLabel_(item.semester))],
    [t('sc_label_status_deploy'), deployLabel],
    [t('sc_label_status_publish'), publishLabel]
  ];
  if (String(item.kontakTim || '').trim()) info.push([t('sc_kontak_label'), scRenderKontak_(item.kontakTim)]);
  var infoHtml = info.map(function(r) { return '<div class="scd-info-row"><span class="scd-info-k">' + r[0] + '</span><span class="scd-info-v">' + r[1] + '</span></div>'; }).join('');

  var linkRow = function(url, title, sub) {
    return '<a class="scd-link" href="' + safeUrl_(url) + '" target="_blank" rel="noopener"><span><span class="scd-link-title">' + title + '</span><span class="scd-link-sub">' + sub + '</span></span>' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></a>';
  };
  var linksHtml =
    (item.linkDownload ? linkRow(item.linkDownload, t('sc_btn_download'), t('sc_link_download_sub')) : '') +
    (item.linkDemo ? linkRow(item.linkDemo, t('sc_btn_demo'), t('sc_link_demo_sub')) : '') +
    (item.linkSourceCode ? linkRow(item.linkSourceCode, t('sc_btn_source'), t('sc_link_source_sub')) : '');

  var crumb = opts.showLike
    ? '<nav class="scd-crumb" aria-label="Breadcrumb"><a href="/showcase/" onclick="event.preventDefault();openShowcaseGaleri()">Showcase</a><span aria-hidden="true">/</span><span>' + escHtml(item.jenis) + '</span><span aria-hidden="true">/</span><span class="scd-crumb-cur">' + escHtml(scName_(item)) + '</span></nav>'
    : '';

  return crumb +
    '<section class="scd-card scd-head">' +
      '<div class="scd-head-top">' +
        '<span class="scd-icon">' + (SC_ICON_JENIS[item.jenis] || SC_ICON_JENIS_DEFAULT) + '</span>' +
        '<div class="scd-head-text"><h1 class="scd-title">' + escHtml(scName_(item)) + '</h1>' +
          '<div class="scd-meta">' + t('sc_team_count', { n: item.kreator.length }) + ' · ' + escHtml(sumberLabel) + '</div>' +
          (badges ? '<div class="scd-badges">' + badges + '</div>' : '') + '</div>' +
      '</div>' +
      (actions ? '<div class="scd-actions">' + actions + '</div>' : '') +
      '<div class="scd-stats">' + stats + '</div>' +
    '</section>' +
    '<section class="scd-section"><h2 class="scd-h">' + t('sc_preview_title') + '</h2>' + mediaHtml + '</section>' +
    '<section class="scd-card"><h2 class="scd-h">' + t('sc_about_title') + '</h2><p class="scd-desc">' + escHtml(pick(item.deskripsi)) + '</p>' + techHtml + '</section>' +
    // Tim (bisa sampai 5) dan dosen (biasanya 1-2) dalam satu kartu supaya
    // tidak ada kartu dosen yang setengah kosong; barisnya 2 kolom di layar lebar.
    '<section class="scd-card"><h2 class="scd-h">' + t('sc_team_dosen_title') + '</h2>' +
      '<div class="scd-sub">' + t('sc_creators_label') + '</div><div class="scd-rows">' + teamHtml + '</div>' +
      (dosenHtml ? '<div class="scd-sub">' + t('sc_dosen_label') + '</div><div class="scd-rows">' + dosenHtml + '</div>' : '') +
    '</section>' +
    '<section class="scd-card"><h2 class="scd-h">' + t('sc_info_title') + '</h2><div class="scd-info">' + infoHtml + '</div></section>' +
    (linksHtml ? '<section class="scd-card scd-links"><h2 class="scd-h">' + t('sc_sec_tautan') + '</h2>' + linksHtml + '</section>' : '') +
    (opts.showLike ? '<div id="scMore"></div>' : '') +
    (opts.showReport ? '<div class="scd-report">' + t('sc_report_q') + ' <button type="button" class="scd-report-link" onclick="laporKaryaWa_(\'' + kodeEsc + '\')">' + t('sc_report_link') + '</button></div>' : '');
}

function scRenderDetail() {
  var item = _scCurrentDetail;
  if (!item) return;
  document.getElementById('scDetailBody').innerHTML = scBuildDetailBodyHtml_(item, { showLike: true, showReport: true });
  if (localStorage.getItem('sc_liked_' + item.kode)) {
    document.getElementById('scLikeBtn').classList.add('liked');
  }
  scHeroCarouselInit_();
  scRenderMore_(item);
}

// "Karya lain": peminatan yang sama (atau Jenis yang sama kalau karya ini
// tanpa peminatan), diurutkan dari yang paling disukai. Data galeri dimuat
// di latar belakang kalau detail dibuka langsung dari tautan.
async function scRenderMore_(item) {
  await scEnsureGaleriLoaded();
  var el = document.getElementById('scMore');
  if (!el || !_scCurrentDetail || _scCurrentDetail.kode !== item.kode) return;
  var byPem = item.peminatan !== 'Tanpa Peminatan';
  var others = _scItems.filter(function(x) {
    return x.kode !== item.kode && (byPem ? x.peminatan === item.peminatan : x.jenis === item.jenis);
  }).sort(scByLikes_).slice(0, 3);
  if (!others.length) { el.innerHTML = ''; return; }
  var title = byPem ? t('sc_more_pem', { p: item.peminatan }) : t('sc_more_jenis', { j: item.jenis });
  el.innerHTML = '<section class="scd-section"><h2 class="scd-h">' + escHtml(title) + '</h2><div class="scg-grid">' + others.map(scCardHtml_).join('') + '</div></section>';
}

function scShare_() {
  var item = _scCurrentDetail;
  if (!item) return;
  var url = location.origin + '/showcase/?kode=' + encodeURIComponent(item.kode);
  if (navigator.share) { navigator.share({ title: scName_(item), url: url }).catch(function() {}); return; }
  if (navigator.clipboard) navigator.clipboard.writeText(url).then(function() { showToast(t('sc_link_copied')); });
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

// ---- Form Submit ----
// scFormView/scStatusView tidak punya path/query URL sendiri (keduanya cuma
// sub-tampilan di dalam /showcase/), jadi riwayatnya ditandai lewat
// history.state, bukan lewat setCleanPath_/updateUrlParam_ - lihat listener
// popstate di DOMContentLoaded yang mengecek state.view ini.
function openShowcaseForm(noPush) {
  scHideAllViews_();
  scSetNavActive_('scnKirim');
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
  scHideTechSuggest_();
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

// Daftar rekomendasi teknologi - BUKAN daftar tertutup (mahasiswa tetap
// bebas mengetik apa saja, termasuk yang tidak ada di sini), cuma saran yang
// muncul sambil mengetik supaya penulisan nama teknologi yang SAMA jadi
// seragam antar-karya (mis. selalu "Firebase", bukan campuran "firebase"/
// "Fire base"/dst). Ejaan di sini sengaja jadi bentuk baku yang dipakai
// (huruf besar/kecil, titik, spasi) - kalau ada tambahan, ikuti gaya
// penulisan resmi teknologi tsb, bukan sembarang kapitalisasi.
var SC_TECH_SUGGESTIONS = [
  // Bahasa pemrograman
  'JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'Swift', 'Dart',
  'PHP', 'C++', 'C#', 'Go', 'Rust', 'HTML', 'CSS',
  // Web framework/library
  'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Laravel', 'CodeIgniter',
  'Django', 'Flask', 'FastAPI', 'Express.js', 'Node.js', 'Spring Boot',
  'ASP.NET', 'Tailwind CSS', 'Bootstrap',
  // Mobile
  'Flutter', 'React Native', 'Android (Kotlin)', 'Android (Java)', 'SwiftUI',
  // Game/desktop
  'Unity', 'Unreal Engine', 'Godot', 'Electron', 'JavaFX', '.NET MAUI',
  // AI/ML/Data
  'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Pandas',
  'NumPy', 'YOLO', 'Hugging Face Transformers',
  // Database
  'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore',
  'Firebase Realtime Database', 'SQLite', 'Redis', 'Supabase',
  // Cloud/infrastruktur
  'Firebase', 'Google Cloud Platform', 'AWS', 'Microsoft Azure', 'Docker',
  'Vercel', 'Netlify', 'Heroku',
  // Lainnya
  'GraphQL', 'REST API', 'Socket.IO', 'Figma'
];

function scTechSuggestFilter_(query) {
  var q = String(query || '').trim().toLowerCase();
  if (!q) return [];
  var already = Array.prototype.map.call(document.querySelectorAll('#scfTeknologiChips .sc-tag-chip'), function(el) { return el.dataset.val.toLowerCase(); });
  return SC_TECH_SUGGESTIONS
    .filter(function(t) { return t.toLowerCase().indexOf(q) !== -1 && already.indexOf(t.toLowerCase()) === -1; })
    .slice(0, 6);
}
function scRenderTechSuggest_() {
  var box = document.getElementById('scfTeknologiSuggest');
  if (!box) return;
  var matches = scTechSuggestFilter_(document.getElementById('scfTeknologi').value);
  if (!matches.length) { box.innerHTML = ''; box.style.display = 'none'; return; }
  box.innerHTML = matches.map(function(t) {
    return '<button type="button" class="sc-tech-suggest-item" data-val="' + escHtml(t) + '" onmousedown="event.preventDefault();scPickTechSuggest_(this.dataset.val)">' + escHtml(t) + '</button>';
  }).join('');
  box.style.display = 'block';
}
function scPickTechSuggest_(val) {
  scAddTechChip_(val);
  var input = document.getElementById('scfTeknologi');
  input.value = '';
  input.focus();
  scRenderTechSuggest_();
}
function scHideTechSuggest_() {
  var box = document.getElementById('scfTeknologiSuggest');
  if (box) { box.innerHTML = ''; box.style.display = 'none'; }
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
function scTeknologiInput_() {
  scTeknologiCommit_();
  scRenderTechSuggest_();
}
function scTeknologiKeydown_(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    scAddTechChip_(e.target.value);
    e.target.value = '';
    scHideTechSuggest_();
  } else if (e.key === 'Escape') {
    scHideTechSuggest_();
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
  scSetNavActive_('scnStatus');
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

