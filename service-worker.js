// // Perform install steps
// let CACHE_NAME = "my-cache";
// let urlsToCache = [
//   "./",
//   "./style.css",
//   "/index.html",
//   "/script.js",
//   "/security.js",
//   "https://unpkg.com/feather-icons",
// ];
// console.log("loading sw");

// self.addEventListener("install", function (event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // self.addEventListener("fetch", function (event) {
// //   event.respondWith(
// //     caches.match(event.request).then(function (response) {
// //       // Cache hit - return response
// //       if (response) {
// //         return response;
// //       }
// //       return fetch(event.request);
// //     })
// //   );
// // });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// self.addEventListener("activate", function (event) {
//   var cacheWhitelist = ["pigment"];
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map(function (cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

const CACHE_NAME = `my-passwordgenerator-cache`;

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll([
        "./",
        "/.style.css",
        "./index.html",
        "./script.js",
        "./security.js",
        "https://unpkg.com/feather-icons",
      ]);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Get the resource from the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed
        }
      }
    })()
  );
});
