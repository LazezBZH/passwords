self.addEventListener("install", (e) => {
  e.waitUntil(
    // Après l'installation du service worker,
    // ouvre un nouveau cache
    caches.open("mon-cache-pwa").then((cache) => {
      // Ajoute toutes les URLs des éléments à mettre en cache
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/scripts.js",
        "/security.js",
      ]);
    })
  );
});
