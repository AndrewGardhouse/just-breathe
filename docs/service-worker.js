importScripts("https://justbreathe.app/precache-manifest.e21babaf7fc96d3d9bc1b513f7315c98.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.googleAnalytics.initialize();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.core.setCacheNameDetails({prefix: "just-breathe"});

workbox.precaching.precache([
  {
    url: 'https://fonts.googleapis.com/css?family=Comfortaa:300,400,700|Roboto:100,300,400,500,700,900',
    revision: 'abcd',
  },
  {
    url: 'https://unpkg.com/basscss@8.0.2/css/basscss.min.css',
    revision: 'abcd',
  },
  {
    url: 'https://unpkg.com/basscss-btn@1.1.0/css/btn.css',
    revision: 'abcd',
  },
  {
    url: 'https://unpkg.com/basscss-btn-outline@1.1.0/css/btn-outline.css',
    revision: 'abcd',
  },
]);

// Add Precache Route
workbox.precaching.addRoute();

// install new service worker when ok, then reload page.
self.addEventListener('message', (msg) => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
});

