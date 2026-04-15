self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // גורם לאפליקציה לעבוד גם כשיש בעיות רשת רגעיות
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
