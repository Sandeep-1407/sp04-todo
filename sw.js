// SP04 service worker: works offline after the first visit
const VERSION = 'sp04-v3';
const SHELL = ['./', './index.html', './updater.js', './core.js', './pages-a.js', './pages-b.js', './pages-c.js', './ui.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './favicon.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  if (!sameOrigin && !url.hostname.endsWith('jsdelivr.net')) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(VERSION).then((x) => x.put('./index.html', c)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  // app files: use network when online (fresh code), cache as fallback
  e.respondWith(fetch(req).then((r) => {
    if (r.ok) { const c = r.clone(); caches.open(VERSION).then((x) => x.put(req, c)); }
    return r;
  }).catch(() => caches.match(req)));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then((l) => (l[0] ? l[0].focus() : self.clients.openWindow('./#/cal'))));
});
