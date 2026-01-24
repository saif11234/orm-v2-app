const CACHE_NAME = 'orm-v2-cache-v1';
const ASSETS = [
  '../web/index.html',
  '../web/assessment.html',
  '../web/reference.html',
  '../web/styles.css',
  '../web/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
