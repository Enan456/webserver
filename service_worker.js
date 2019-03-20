
'use strict';


const CACHE_VERSION = 1;
let CURRENT_CACHES = {
  offline: 'offline-v' + CACHE_VERSION
};
const OFFLINE_URL = 'gearScout.html';
const OFFLINE_URL2 = 'geardata.html';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
workbox.precaching.precacheAndRoute([
  '/assets/css/sg.css',
  '/assets/css/sgdata.css',
  '/assets/css/bootstrap.min.css',
  '/assets/js/sg.js',
  { url: 'enan.rocks/gearscout', revision: '383676' },
]);
workbox.routing.registerRoute(
  /sg.js$/
);
workbox.routing.registerRoute(
  new RegExp('sg.js'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  // Cache CSS files.
  /assets/css/sg.css$/
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

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

self.addEventListener('install', event => {
  event.waitUntil(
    fetch(createCacheBustedRequest(OFFLINE_URL2)).then(function(response) {
      return caches.open(CURRENT_CACHES.offline).then(function(cache) {
        return cache.put(OFFLINE_URL2, response);
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
