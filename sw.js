const CACHE = "eprm-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/favicon-32.png", "icons/logo-192.png", "icons/logo-512.png", "icons/logo-512-maskable.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
