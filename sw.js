const CACHE_NAME = 'lamastock-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  self.skipWaiting(); // מכריח התקנה מיידית
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim()); // משתלט על הדף מיד
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
