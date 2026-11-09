/* Offline cache. Change CACHE (for example v2 to v3) whenever you upload new files. */
const CACHE = "transporter-cargo-v3";
const FILES = ["./", "index.html", "manifest.webmanifest", "logo-192.png", "logo-512.png", "logo-192-maskable.png", "logo-512-maskable.png", "apple-touch-icon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request).then((m) => m || caches.match("index.html")))
  );
});
