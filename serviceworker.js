const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// install sw

self.addEventListener("install", (e) => {
    e.waitUntill(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("cache");
                return cache.addAll(urlsToCache)
            })
    )
})