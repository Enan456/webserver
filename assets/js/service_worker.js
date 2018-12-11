/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('assets/js/sg.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
self.addEventListener('install', function (event) {
    // Perform install steps
});
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/assets/js/bootstrap.min.js',
    '/css/materialize.css',
    '/assets/js/sg.js',
    '/assets/js/index.js',
    '/assets/js/bootstrap.min.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});
let CACHE_CHECK = 'my-site-cache-v1'
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_CHECK)
    .then(cache => cache.addAll('./404.html'))
  )
})
self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
      .then((cached) => {
        var networked = fetch(event.request)
          .then((response) => {
            let cacheCopy = response.clone()
            caches.open(CACHE_CHECK)
              .then(cache => cache.put(event.request, cacheCopy))
            return response;
          })
          .catch(() => caches.match(offlinePage));
        return cached || networked;
      })
    )
  }
  return;
});
*/

// New Service serviceWorker


'use strict';


const CACHE_VERSION = 1;
let CURRENT_CACHES = {
  offline: 'offline-v' + CACHE_VERSION
};
const OFFLINE_URL = 'sg.html';

function createCacheBustedRequest(url) {
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
    fetch(createCacheBustedRequest(OFFLINE_URL)).then(function(response) {
      return caches.open(CURRENT_CACHES.offline).then(function(cache) {
        return cache.put(OFFLINE_URL, response);
      });
    })
  );
});

self.addEventListener('activate', event => {
  let expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
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
        return caches.match(OFFLINE_URL);
      })
    );
  }

});
