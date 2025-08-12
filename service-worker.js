const CACHE_NAME = 'al-matsurat-cache-v1.1'; // Increment version to force update

// List of all files to be cached on install
const URLS_TO_CACHE = [
    '/',
    'index.html',
    'rsc/css/style.css',
    'rsc/js/main.js',
    'manifest.json',
    'rsc/png/icon.png',
    // Fonts
    'https://fonts.googleapis.com/css2?family=Sofadi+One&family=Montserrat:wght@400;700&display=swap',
    'https://fonts.gstatic.com/s/sofadione/v23/JIA2UVBxd-L_bFc_fA0f7p13oQ.woff2', // Specific font file
    'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2', // Specific font file
    'rsc/woff2/AlQuran-IndoPak-by-QuranWBW.v.4.2.2-WL.woff2',
    // Audio files
    'rsc/opus/Al.Matsurat.Pagi-000.opus',
    'rsc/opus/Al.Matsurat.Pagi-001.opus',
    'rsc/opus/Al.Matsurat.Petang-Trim.opus',
    'rsc/opus/Rabithah_ai.opus',
    'rsc/opus/ast.opus',
    'rsc/opus/kafaratul.opus',
    'rsc/wav/recycle_boost.wav',
    'rsc/wav/nav_boost.wav',
    'rsc/wav/info_boost.wav',
    // Icons
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    'https://fonts.gstatic.com/s/materialsymbolsoutlined/v166/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2' // Specific icon font
];

// Install event: Open a cache and add all URLs to it
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                // Use addAll to fetch and cache all resources
                // It's atomic: if one file fails, the entire operation fails.
                return cache.addAll(URLS_TO_CACHE);
            })
            .catch(error => {
                console.error('Failed to cache resources during install:', error);
            })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event: Serve from cache first, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response from cache
                if (response) {
                    return response;
                }

                // Not in cache - fetch from network
                return fetch(event.request).then(
                    networkResponse => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                           if(networkResponse.type.includes('opaque')){
                                //Don't cache opaque responses
                           }else{
                                return networkResponse;
                           }
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    }
                );
            })
            .catch(error => {
                console.error('Error in fetch handler:', error);
                // Optionally, you can return a fallback page here
                // e.g., return caches.match('/offline.html');
            })
    );
});
