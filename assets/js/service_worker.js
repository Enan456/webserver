if ('serviceWorker' in navigator) {
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
