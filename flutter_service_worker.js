'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa2ad0c21442c5d15a2cf959a61893c5",
"index.html": "ceaf08fad8e7c90e14474fec7c7aa33c",
"/": "ceaf08fad8e7c90e14474fec7c7aa33c",
"styles.css": "37415c92e7efbc9440e8a92c6cdca50b",
"main.dart.js": "af42d85271888d660966368562f2870b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "b8f0d99df9d048187bdf55956096f68f",
"icons/Icon-192.png": "6d68fd80e2002a66d5095cab43edc4e1",
"icons/Icon-maskable-192.png": "6d68fd80e2002a66d5095cab43edc4e1",
"icons/Icon-maskable-512.png": "f25b57b07a994ea4f7103051511a7a3c",
"icons/Icon-512.png": "f25b57b07a994ea4f7103051511a7a3c",
"manifest.json": "f3eb3dc875ec8b8afdfe319a45bff158",
"assets/AssetManifest.json": "d6e8a9aac51ffedbd88c0251cd1f539c",
"assets/NOTICES": "5a219fe8b2b3085eb8f85a5e76d1abcf",
"assets/FontManifest.json": "8a49890ed89c3f1806b6c0e949e94151",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/shaders/ink_sparkle.frag": "654f59b6a1618f31e5bdb8aa8c4a6352",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/IranianSans.ttf": "6e2db50ef0d7f0b5dc03260193bf5237",
"assets/assets/transfer.svg": "754565c3123a9893f5a50e12c52bdb58",
"assets/assets/search.svg": "9414d93b1f76e4330b446125d5c2b68e",
"assets/assets/maps/f1-path.svg": "08ef05d35fb0e653b72ac7ffe161d29c",
"assets/assets/maps/iran.svg": "71081cb59104df7af25c0f8c6f2f246c",
"assets/assets/maps/1.svg": "1899c54727bac2d6b79c4a4278acb6cb",
"assets/assets/maps/f3-path.svg": "3877680b7afcb0b9d54c8f3dc9f4f01d",
"assets/assets/maps/f2-path.svg": "d1b2e79a0630859c861c5af4abb091fc",
"assets/assets/maps/f4-path.svg": "2749df9bcda6fb8d467631f074033788",
"assets/assets/card.png": "299e694bfe68985abd9c4e3ea19802d2",
"assets/assets/check.png": "45113e9c4a0b25d6c10909875ae551ba",
"assets/assets/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/map.svg": "51da89d863e90c24e761b6250c57b52d",
"assets/assets/phone_notification.png": "19ff94fb53206e8d071843a1dce05638",
"assets/assets/professor.svg": "4b92d020a1c94fb6d513375dc45989e7",
"assets/assets/images/logo-pink.svg": "bb36d1934b8237c050001ee4b45a387b",
"assets/assets/images/logo-blue.svg": "09c00bfa4bae35003cb17bdcd41ea99e",
"assets/assets/images/icon.png": "761f70c73894e0b1139699c9e5884f32",
"assets/assets/images/logo-pink.png": "8663d8e54854e31cea7af662675d12ae",
"assets/assets/images/logo-blue.png": "da7382fdf57a482d938b7c938db0fcf3",
"assets/assets/clipboard.svg": "c5a3d2583375a9673dcc5a6660a7f9f4",
"assets/assets/group.svg": "bb33a593089f0616585b83de636fb58b",
"assets/assets/document.svg": "a490843c9fe9f2ffbeafdc2292fea0c7",
"assets/assets/remove.png": "dc8a298218b01cb39958e045e14036f8",
"assets/assets/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/calendar.svg": "4f9fe90a6a738bcc6dd3050ba2af2e3b",
"assets/assets/invoice.svg": "b7337a2bf234c784b34468a216f926b8",
"assets/assets/ring.svg": "917a20be316d1a52e8f608408b51f906",
"assets/assets/animations/navigation.json": "59c76b519e13b5f7251ea66b6e91cfd0",
"assets/assets/animations/girls_study.json": "17cc2bb68f5edfdffabde004f582d51e",
"assets/assets/animations/navigation.svg": "0c17afa703f76ea788285a29871896b8",
"assets/assets/animations/girls_study.svg": "7dce8fe489f55da0f938569545315a95",
"assets/assets/animations/professor_math.json": "5025300dcafc9f78b3c63771e9ded2b7",
"assets/assets/animations/university.json": "2fe495f66d22977d9714373fa298cef4",
"assets/assets/animations/professor_math.svg": "7e20923a3e3293e18918bb70fb48450c",
"assets/assets/animations/university.svg": "9644fd72337b5424bd8be14840ccfce5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
