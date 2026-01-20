const CACHE_NAME = 'patitour-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  'https://i.ibb.co/C5tXb17w/patitour-90.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});