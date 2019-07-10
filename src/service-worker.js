/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
workbox.setConfig({
  debug: false,
});

workbox.precaching.precacheAndRoute([]);

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
