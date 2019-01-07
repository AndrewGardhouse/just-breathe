/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updated(registration) {
      console.log('New content is available; please refresh.');
      const confirmationResult = confirm('New content found! Do you want to reload the app?');
      if (confirmationResult) {
        registration.waiting.postMessage({
          action: 'skipWaiting',
        });
      }
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) {
      return;
    }
    window.location.reload();
    refreshing = true;
  });
}
