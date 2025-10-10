# 🚀 Panduan Penggunaan Fitur Baru

## Untuk Pengguna

### 🔄 Auto-Save Counter (Fitur Baru!)

**Cara Kerja:**
- Counter dzikir Anda **otomatis tersimpan** setiap kali berubah
- Tidak perlu khawatir kehilangan progress saat tutup aplikasi
- Progress akan ter-restore otomatis saat buka aplikasi lagi

**Contoh:**
1. Anda baca dzikir dan klik Count 10 kali → Counter: 10
2. Tutup browser/tab
3. Buka aplikasi lagi
4. Counter otomatis menampilkan: 10 ✅

**Reset Counter:**
- Klik tombol "Reset Count" atau tekan Ctrl
- Counter akan kembali ke 0 dan tersimpan otomatis

### 📊 Loading Screen (Diperbaiki!)

**Yang Ditampilkan:**
- **Progress Bar**: Menunjukkan persentase loading (0% → 100%)
- **File Info**: File mana yang sedang dimuat (File 1/9, 2/9, dst)
- **Cache Status**: 
  - ✓ Cache = File dari memori (cepat, hemat kuota)
  - ⬇ Download = File dari internet
- **Total Size**: Ukuran total file yang dimuat

**Tips:**
- Loading cepat = File sudah di-cache = **GRATIS, tidak pakai kuota!**
- Loading pertama kali lebih lama, loading selanjutnya cepat
- Total ukuran ~6-8 MB untuk pertama kali

### 🔗 Hash Navigation (Diperbaiki!)

**Cara Pakai:**
Sekarang Anda bisa langsung ke dzikir tertentu dengan URL:
- `index.html#ayat-kursi` → Langsung ke Ayat Kursi
- `index.html#taawudz` → Langsung ke Ta'awudz
- `index.html?action=pagi#al-fatihah` → Pagi mode, langsung ke Al-Fatihah

**Otomatis Smooth Scroll:**
- Halaman akan scroll dengan mulus ke dzikir yang dituju
- Hanya berfungsi setelah loading selesai (lebih stabil!)

---

## Untuk Developer

### 🛠️ Development Setup

**1. Clone & Setup:**
```bash
cd AlMatsurat-1
# Pastikan semua file ada
```

**2. Testing Lokal:**
```bash
# Gunakan local server (bukan double-click file)
python -m http.server 8000
# atau
npx serve
```

**3. Open Browser:**
```
http://localhost:8000
```

### 🧪 Testing Checklist

**Loading Screen:**
```javascript
// Check di DevTools Console
// Seharusnya muncul:
// - "Loading files..."
// - "File 1/9", "File 2/9", dst
// - "All files loaded!"
```

**Auto-Save:**
```javascript
// Test di Console
localStorage.getItem('alMatsurat_counter'); // Should return saved count
localStorage.setItem('alMatsurat_counter', '99'); // Manual set
// Refresh page → Counter should show 99
```

**Hash Navigation:**
```javascript
// Test dengan URL
// index.html#ayat-kursi
// Seharusnya scroll ke element dengan id="ayat-kursi"
```

### 📝 API Reference

#### `loadProgress()`
Memuat counter yang tersimpan dari localStorage.
```javascript
const loadProgress = () => {
    const savedCount = localStorage.getItem('alMatsurat_counter');
    if (savedCount !== null) {
        count = parseInt(savedCount, 10);
        ui.updateCounterView(count);
    }
};
```

#### `saveProgress()`
Menyimpan counter ke localStorage. Dipanggil otomatis dari `updateCounter()`.
```javascript
const saveProgress = () => {
    localStorage.setItem('alMatsurat_counter', count);
};
```

#### `startLoading()`
Memuat semua file audio dengan progress tracking.
```javascript
const startLoading = async () => {
    // Load 9 files
    // Track progress
    // Update UI
};
```

#### `preventHashNavigation(e)`
Memblokir hash navigation saat loading.
```javascript
const preventHashNavigation = (e) => {
    if (!isLoadingComplete) {
        e.preventDefault();
        return false;
    }
};
```

### 🔧 Configuration

**File yang Dimuat (dapat dimodifikasi di `script.js`):**
```javascript
const filesToLoad = [
    'rsc/opus/Al.Matsurat.Pagi-000.opus',
    'rsc/opus/Al.Matsurat.Pagi-001.opus',
    'rsc/opus/Al.Matsurat.Petang-Trim.opus',
    'rsc/opus/Rabithah_ai.opus',
    'rsc/opus/ast.opus',
    'rsc/opus/kafaratul.opus',
    'rsc/wav/nav_boost',
    'rsc/wav/info_boost',
    'rsc/wav/recycle_boost'
];
```

**Minimum Loading Time (dapat diubah):**
```javascript
const minimumLoadingTime = 1500; // milliseconds (default 1.5s)
```

**LocalStorage Key:**
```javascript
const STORAGE_KEY = 'alMatsurat_counter';
```

### 🐛 Debug Mode

**Enable Debug Logging:**
```javascript
// Tambahkan di script.js untuk debug
const DEBUG = true;

// Lalu tambahkan log statements:
if (DEBUG) console.log('Loading file:', fileName);
if (DEBUG) console.log('Progress:', percentComplete);
if (DEBUG) console.log('Counter saved:', count);
```

**Check Service Worker:**
```javascript
// Di Console
navigator.serviceWorker.getRegistrations().then(registrations => {
    console.log('Active Service Workers:', registrations);
});
```

**Clear Cache:**
```javascript
// Di Console - Clear Service Worker Cache
caches.keys().then(names => {
    names.forEach(name => caches.delete(name));
});

// Clear LocalStorage
localStorage.clear();
```

### 🎨 Customization

**Ubah Warna Progress Bar:**
```css
/* style.css */
#progress-bar-fill {
    background-color: blue; /* Ubah sesuai keinginan */
}
```

**Ubah Loading Animation:**
```css
/* style.css */
@keyframes loading-pulse {
    0%, 20% { opacity: 0.3; }
    40% { opacity: 1; }
    60%, 100% { opacity: 0.5; }
}
```

**Ubah Minimum Loading Time:**
```javascript
// script.js
const minimumLoadingTime = 2000; // 2 detik
```

### 📊 Performance Monitoring

**Track Loading Time:**
```javascript
// Tambahkan di script.js
const loadStartTime = performance.now();
// ... after loading complete
const loadEndTime = performance.now();
console.log(`Loading took ${loadEndTime - loadStartTime}ms`);
```

**Monitor localStorage Size:**
```javascript
// Check size
const size = new Blob([localStorage.getItem('alMatsurat_counter')]).size;
console.log(`LocalStorage size: ${size} bytes`);
```

### 🚀 Deployment

**Checklist sebelum deploy:**
- [ ] Test di multiple browsers
- [ ] Test dengan slow connection
- [ ] Test auto-save functionality
- [ ] Test hash navigation
- [ ] Clear console errors
- [ ] Optimize images/audio jika perlu
- [ ] Update service worker cache version jika ada perubahan file

**Update Service Worker:**
```javascript
// service-worker.js
const CACHE_NAME = 'rsc-cache-v2'; // Increment version
```

### 🔒 Security Notes

- LocalStorage tidak encrypted → Aman untuk counter, tapi jangan simpan data sensitif
- Service Worker hanya berfungsi di HTTPS (atau localhost untuk dev)
- Cross-Origin requests harus dihandle dengan CORS

---

## 📞 Support

**Lapor Bug:**
- GitHub Issues: [AlMatsurat/issues](https://github.com/krasyid822/AlMatsurat/issues)

**Kontribusi:**
- Fork repository
- Buat branch baru
- Submit pull request

**Testing:**
- Gunakan file `test-loading.html` untuk automated testing
- Report hasil test di Issues jika ada yang gagal

---

**Last Updated:** 11 Oktober 2025  
**Version:** 2.0 (Loading Screen Fix + Auto-Save)
