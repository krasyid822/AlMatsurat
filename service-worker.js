// Nama dan versi cache. Ubah versi jika Anda memperbarui file di dalam rscFilesToCache.
const CACHE_NAME = 'rsc-cache-v1';

// Daftar lengkap file di dalam folder rsc yang harus di-cache.
const rscFilesToCache = [
    'rsc/css/style.css',
    'rsc/woff2/AlQuran-IndoPak-by-QuranWBW.v.4.2.2-WL.woff2',
    'rsc/woff2/material-icon.woff2',
    'rsc/png/icon.png',
    'rsc/png/splash.png',
    'rsc/opus/Rabithah_ai.opus',
    'rsc/opus/ast.opus',
    'rsc/opus/kafaratul.opus',
    'rsc/opus/Al.Matsurat.Pagi-000.opus',
    'rsc/opus/Al.Matsurat.Pagi-001.opus',
    'rsc/opus/Al.Matsurat.Petang-Trim.opus',
    'rsc/wav/recycle_boost',
    'rsc/wav/nav_boost',
    'rsc/wav/info_boost'
];

// 1. Event 'install': Menyimpan semua file rsc ke dalam cache.
self.addEventListener('install', event => {
    console.log('Service Worker: Menginstall...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Membuka cache dan menyimpan aset rsc.');
                return cache.addAll(rscFilesToCache);
            })
            .then(() => {
                // Melewati fase waiting agar service worker baru segera aktif.
                self.skipWaiting();
            })
    );
});

// 2. Event 'activate': Membersihkan cache lama jika ada versi cache baru.
self.addEventListener('activate', event => {
    console.log('Service Worker: Mengaktifkan...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Jika nama cache tidak sama dengan yang sekarang, hapus.
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Mengambil alih kontrol halaman dengan segera.
    return self.clients.claim();
});

// 3. Event 'fetch': Mengintersep permintaan jaringan.
self.addEventListener('fetch', event => {
    // Memeriksa apakah URL permintaan mengandung '/rsc/'.
    if (event.request.url.includes('/rsc/')) {
        // Jika ya, terapkan strategi "Cache First" untuk folder rsc.
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    // Jika ditemukan di cache, kembalikan dari cache.
                    if (cachedResponse) {
                        // console.log('Menyajikan dari cache:', event.request.url);
                        return cachedResponse;
                    }
                    
                    // Jika tidak ada di cache, ambil dari jaringan.
                    return fetch(event.request).then(networkResponse => {
                        // Setelah diambil, simpan salinannya ke cache untuk penggunaan selanjutnya.
                        return caches.open(CACHE_NAME).then(cache => {
                            // Periksa apakah response valid sebelum di-cache
                            if (networkResponse && networkResponse.status === 200) {
                                cache.put(event.request, networkResponse.clone());
                            }
                            return networkResponse;
                        });
                    });
                })
        );
    } else {
        // Jika tidak, ambil langsung dari jaringan (Network Only).
        // Ini berlaku untuk index.html, .js, .css di root, dll.
        event.respondWith(fetch(event.request));
    }
});
