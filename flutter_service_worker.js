'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1545fdf802574de8af8b12aafd90115d",
"assets/AssetManifest.bin.json": "54d106c38dc11a000cd4e8af3a01a7eb",
"assets/AssetManifest.json": "59b0413b9bb5c03d41dac7ce68771c44",
"assets/assets/img/excercises/men/icon_men_01.png": "2678a590f91a6ca02fd691806c4d0df5",
"assets/assets/img/excercises/men/icon_men_02.png": "78c6a8c4cf977b68c5ad4813fc19208a",
"assets/assets/img/excercises/men/icon_men_03.png": "9f35bf8f7dc5586503abba5efd0511cf",
"assets/assets/img/excercises/men/icon_men_04.png": "4fa7109587605ef114fdfbb22a988946",
"assets/assets/img/excercises/men/icon_men_05.png": "19393fbf65a2c495ea3058456a767f33",
"assets/assets/img/excercises/men/icon_men_06.png": "9e1c8198b9fa9066769e26aee1bcec0d",
"assets/assets/img/excercises/men/icon_men_07.png": "eab87f8666baf751af6e0f073fb0d0be",
"assets/assets/img/excercises/men/icon_men_08.png": "d782ece00d1dc7f12447bb1729f8b67f",
"assets/assets/img/excercises/men/icon_men_09.png": "79e793c91c8b2c9290b22646c15e401b",
"assets/assets/img/excercises/men/icon_men_10.png": "0715eae02758c8a49f6eb1c66702f8a3",
"assets/assets/img/excercises/men/icon_men_11.png": "474ec23d3f9b43df63c5d169428f484d",
"assets/assets/img/excercises/men/icon_men_12.png": "d54980bf4e4a13746888fbdacc50ff58",
"assets/assets/img/excercises/men/icon_men_13.png": "540b4a5dd04d8a2010b82f90e3457307",
"assets/assets/img/excercises/men/icon_men_14.png": "5ac178f545f25a24b141db2f82d44fb5",
"assets/assets/img/excercises/women/icon_men_01.png": "69974c8414aaf08dfa66c34040a61bf8",
"assets/assets/img/excercises/women/icon_men_02.png": "828c04096ce388277b5abab418099275",
"assets/assets/img/excercises/women/icon_men_03.png": "7deef4f848c2cf9dfb264d41c233fe77",
"assets/assets/img/excercises/women/icon_men_04.png": "3d0373f0f22c85fd24ee5f1debcb0e5e",
"assets/assets/img/excercises/women/icon_men_05.png": "6f534f249fd7a0d4c234bf1266e1b621",
"assets/assets/img/excercises/women/icon_men_06.png": "ffde218cb6ac9b8a168db03bba521e3c",
"assets/assets/img/excercises/women/icon_men_07.png": "a5c8c0a03ba9bdf14322749194870e92",
"assets/assets/img/excercises/women/icon_men_08.png": "eeaccafab74f6a0b3d8b754398a70476",
"assets/assets/img/excercises/women/icon_men_09.png": "676c9dc9124c49b09141fa9449a6469e",
"assets/assets/img/excercises/women/icon_men_10.png": "66f2b4c30b4fa224fa98f139456dcd8d",
"assets/assets/img/excercises/women/icon_men_11.png": "c2ffd02c071835b536c2143600b1a679",
"assets/assets/img/excercises/women/icon_men_12.png": "60f18aa74b58fe21f8de2de89fa5121e",
"assets/assets/img/excercises/women/icon_men_13.png": "54cffe459ee0c643a1651562162acc14",
"assets/assets/img/excercises/women/icon_men_14.png": "4fb8fae5b49d1292b8f710dd1326c303",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dddeaad25871e3bc14d1871dafb885d1",
"assets/NOTICES": "4914ed447535cbbd0bfaeaae8219b4cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7471bb0f46978b2d1fd0006797453030",
"/": "7471bb0f46978b2d1fd0006797453030",
"main.dart.js": "340b4f5528a0f6beb31ef909272796c8",
"manifest.json": "b8118422a73b6371a8bd275a92a821aa",
"version.json": "ab260163701a6da46587ecdbbd004cdf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
