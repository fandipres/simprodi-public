# Thumbnail Showcase

Folder ini berisi gambar thumbnail hasil tool "Buat Thumbnail" di panel
admin (menu Showcase, sub-tab Buat Thumbnail), yang tampil otomatis
sebagai gambar utama kartu galeri dan halaman detail Showcase publik -
**asal nama filenya sesuai konvensi, tidak perlu isi field apapun di
panel admin.**

## Cara upload (lewat GitHub, tanpa perlu tahu git)

1. Buka tool "Buat Thumbnail" di panel admin, susun thumbnail-nya, lalu
   unduh (tombol "Unduh Thumbnail") - hasilnya file **WebP** (jauh lebih
   kecil dari PNG untuk gambar seperti ini, biasanya 70-90% lebih hemat
   tanpa kelihatan bedanya). Kalau browser yang dipakai admin ternyata
   tidak mendukung WebP, tool ini otomatis mengunduh PNG sebagai gantinya
   - perhatikan ekstensi file yang benar-benar terunduh.
2. Buka folder ini di github.com (repo `fandipres/simprodi`, harus sudah
   diundang sebagai kolaborator).
3. Klik tombol "Add file" > "Upload files".
4. Seret file hasil unduhan ke sana. **Ganti nama filenya jadi kode
   karyanya persis, dengan ekstensi yang SAMA seperti file yang
   terunduh**, misalnya `SC-7XQ2M.webp` (kode karya bisa dilihat di
   daftar Karya Terpublikasi/Antrian Moderasi) - WAJIB persis (termasuk
   ekstensinya) supaya situs publik bisa menemukannya secara otomatis.
5. Klik "Commit changes" langsung ke branch `main`.
6. Tunggu sekitar 1 menit (proses sinkronisasi otomatis ke situs
   publik) - selesai, thumbnail-nya langsung tampil di galeri dan
   halaman detail karya yang bersangkutan. **Tidak perlu buka panel
   admin atau isi field apapun.**

Field **Link Thumbnail** di menu Karya Terpublikasi cuma perlu diisi
kalau mau OVERRIDE (pakai gambar dari tautan lain, bukan file di sini) -
biarkan kosong untuk pemakaian normal. Pratinjau di field itu bisa
dipakai buat mengecek apakah upload-nya sudah berhasil terbaca.

## Mengganti thumbnail yang sudah ada

Upload ulang dengan nama file yang SAMA (replace) - GitHub akan
menawarkan untuk mengganti file lama. Tidak perlu langkah lain, situs
publik otomatis memakai versi terbaru begitu tersinkron.
