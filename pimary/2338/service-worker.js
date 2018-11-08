// JavaScript Document

// Scripts written by __gulp_init_author_name__ @ __gulp_init_author_company__

import toolbox from "sw-toolbox";

((global) => {
    // disable the service worker for post previews
    global.addEventListener("fetch", (event) => {
        if (event.request.url.match(/wp-admin/) || event.request.url.match(/preview=true/)) {
            return;
        }
    });

    // ensure the service worker takes over as soon as possible
    global.addEventListener("install", event => event.waitUntil(global.skipWaiting()));
    global.addEventListener("activate", event => event.waitUntil(global.clients.claim()));

    // set up the cache
    toolbox.precache(["/", "/offline/"]);
    toolbox.router.get("https://www.gstatic.com/firebasejs/5.5.3/firebase.js", toolbox.cacheFirst);
    toolbox.router.get("/*", toolbox.networkFirst, {NetworkTimeoutSeconds: 5});

    // redirect offline queries to offline page
    toolbox.router.get("/(.*)", function (req, vals, opts) {
        return toolbox.networkFirst(req, vals, opts).catch((error) => {
            if (req.method === "GET" && req.headers.get("accept").includes("text/html")) {
                return toolbox.cacheOnly(new Request("/offline/"), vals, opts);
            }

            throw error;
        });
    });
})(self);