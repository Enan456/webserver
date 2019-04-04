
'use strict';


const CACHE_VERSION2 = 1;
let CURRENT_CACHES2 = {
  offline: 'offline-v' + CACHE_VERSION2
};
const OFFLINE_URL2 = 'geardata.html';

function createCacheBustedRequest2(url) {
  let request = new Request(url, {cache: 'reload'});
  if ('cache' in request) {
    return request;
  }


  let bustedUrl = new URL(url, self.location.href);
  bustedUrl.search += (bustedUrl.search ? '&' : '') + 'cachebust=' + Date.now();
  return new Request(bustedUrl);
}

self.addEventListener('install', event => {
  event.waitUntil(
    fetch(createCacheBustedRequest2(OFFLINE_URL2)).then(function(response) {
      return caches.open(CURRENT_CACHES2.offline).then(function(cache) {
        return cache.put(OFFLINE_URL2, response);
      });
    })
  );
});

self.addEventListener('activate', event => {
  let expectedCacheNames = Object.keys(CURRENT_CACHES2).map(function(key) {
    return CURRENT_CACHES2[key];
  });

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {

  if (event.request.mode === 'navigate' ||
      (event.request.method === 'GET' &&
       event.request.headers.get('accept').includes('text/html'))) {
    console.log('Handling fetch event for', event.request.url);
    event.respondWith(
      fetch(event.request).catch(error => {

        console.log('Fetch failed; returning offline page instead.', error);
        return caches.match(OFFLINE_URL2);
      })
    );
  }

});
