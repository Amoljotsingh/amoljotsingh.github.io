// give your cache a name
const cacheName = "cache@amolStudio.v1";

// put the static assets and routes you want to cache here
const caching_assets = [
  "index.html",
  "portfolio.html",
  "cv.html",
  "style/style.css",
  "style/book.css",
  "js/index.js",
  "asserts/3d_asserts/earth.glb",
  "asserts/favicon/favicon-180.png",
  "asserts/QR-code/frame.png",
  // "/asserts/icons/", // icons folder
  // "/asserts/images/", // images folder
  // "/asserts/portfolio/", // portfolio folder
];

self.addEventListener("install", (event) => {
  console.log("Service Worker : Installed!");

  event.waitUntil(
    (async () => {
      try {
        const cache_obj = await caches.open(cacheName);
        cache_obj.addAll(caching_assets);

        const skip = self.skipWaiting();
      } catch {
        console.log("error occured while caching...");
      }
    })()
  );
});

// activated event
// before activating the service worker, we can get rid of the old cache.
self.addEventListener("activate", (event) => {
  console.log("Service Worker : Activated!");

  // removing the old cache.
  event.waitUntil(
    (async () => {
      const cache_keys = await caches.keys();
      console.log(cache_keys);

      cache_keys.forEach((key) => {
        if (key !== cacheName) {
          console.log("Service Worker deleted old cache!");
          return caches.delete(key);
        }
      });
      return Promise.all(cache_keys);
    })()
  );
});

// In the fetch event, we need to configure that, whenever the browser
// try to get the file from the server, we need to check whether the broswer
// is online or offline. and give the files according to it.

self.addEventListener("fetch", (event) => {
  console.log("Service Worker : fetch!");
  event.respondWith(
    // we are sending the request to the server. if network is down, then sending the res
    // from the cache.
    fetch(event.request).catch(() => {
      caches.match(event.request);
    })
  );
});
