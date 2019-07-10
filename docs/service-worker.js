importScripts("https://justbreathe.app/precache-manifest.cc000d369a9151e8cb57bdaba7203fe5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.core.setCacheNameDetails({ prefix: 'just-breathe' });

workbox.routing.registerRoute(
  new RegExp('https://unpkg.com/basscss'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'basscss',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

// install new service worker when ok, then reload page.
self.addEventListener('message', (msg) => {
  if (msg.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

