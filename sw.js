const cName = "calc-pwa",
cFiles = [
  "/src/index.html",
  "/src/style.css",
  "/src/run.js"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => {
      return cache.addAll(cFiles);
    })
    .catch((err) => { console.error(err) })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((res) => {
      return res || fetch(event.request);
    })
  );
});
