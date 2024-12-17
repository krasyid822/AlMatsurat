self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('woff2-cache').then(function(cache) {
        return cache.addAll([
          'rsc\\woff2\\material-icon.woff2'
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
  