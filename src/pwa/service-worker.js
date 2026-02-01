const CACHE_NAME = 'orm-v2-cache-v1';
const ASSETS = [
  'index.html',
  'assessment.html',
  'reference.html',
  'styles.css',
  'main.js',
  'manifest.json',
  'icon-192x192.ico',
  'icon-512x512.ico',
  'left.png',
  'right.png',
  'logo.ico',
  'background.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request).then(response => {
        // Cache new resources
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    })
  );
});
