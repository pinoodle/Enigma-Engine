const CACHE_NAME = 'enigma-engine-cache-v1';
const urlsToCache = [
  '',
  'index.html',
  'resources/editor.css',
  'resources/editor.js',
  'resources/esprima-4-0-1.js',
  'resources/jquery-3.4.1.min.js',
  'resources/js-beautify-1-10-3.min.js',
  'resources/markdown.js',
  'resources/ace/ace.js',
  'resources/ace/mode-javascript.js',
  'resources/ace/theme-merbivore.js',
  'resources/ace/worker-javascript.js',
  'resources/jquery-ui-1.12.1.custom/jquery-ui.min.js',
  'resources/jquery-ui-1.12.1.custom/jquery-ui.min.css',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_glass_15_5f391b_1x400.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_gloss-wave_20_1c160d_500x100.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_gloss-wave_25_453326_500x100.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_gloss-wave_30_44372c_500x100.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_highlight-soft_20_201913_1x100.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_highlight-soft_20_619226_1x100.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-bg_inset-soft_10_201913_1x100.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-icons_9bcc60_256x240.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-icons_222222_256x240.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-icons_add978_256x240.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-icons_e3ddc9_256x240.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-icons_f1fd86_256x240.png',
  'resources/jquery-ui-1.12.1.custom/images/ui-icons_ffffff_256x240.png'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('All resources cached successfully.');
      })
      .catch((error) => {
        console.error('Failed to cache resources:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }
        console.log('Fetching:', event.request.url);
        return fetch(event.request).then(
          (response) => {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            let responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});