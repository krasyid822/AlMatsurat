self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('woff2-cache').then(function(cache) {
        return cache.addAll([
          'rsc\\woff2\\material-icon.woff2',
          'https://github.com/krasyid822/AlMatsurat/releases/download/1/Al.Matsurat.Pagi.opus',
          'https://github.com/krasyid822/AlMatsurat/releases/download/1/Rabithah_ai.opus'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  