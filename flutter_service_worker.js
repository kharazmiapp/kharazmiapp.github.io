'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa2ad0c21442c5d15a2cf959a61893c5",
"index.html": "8931f0afb6fefc154247d55061cb29eb",
"/": "8931f0afb6fefc154247d55061cb29eb",
"styles.css": "e19052e3e22719a1e213f8566ae64c88",
"main.dart.js": "8486f88dc771ea53953c86da6d601f86",
"logo.webp": "5468d869eacde41005e1eab06f4bdc9f",
"favicon.png": "bb11149b58c8923d8e27f9f6fb47945c",
"icons/favicon-16x16.png": "bb11149b58c8923d8e27f9f6fb47945c",
"icons/Icon-192.png": "88a37cf6264158095aac41e0c7143a02",
"icons/Icon-maskable-192.png": "88a37cf6264158095aac41e0c7143a02",
"icons/Icon-maskable-512.png": "764ee4defb128779c41293a966bd03b3",
"icons/Icon-512.png": "764ee4defb128779c41293a966bd03b3",
"icons/favicon-32x32.png": "c40717d16d324f000f99f3dbf3cc5e29",
"manifest.json": "9cbf00242405c2570e6e7a8fd6923bda",
"assets/AssetManifest.json": "82f23ef13faed9107855586aed20cefd",
"assets/NOTICES": "78077e5c7fe747c666f65cc60e196264",
"assets/FontManifest.json": "f0cd4f2a48aa885633ee44f50e4f40b6",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/icomoon.ttf": "7b021822744219f12251ca451083e93a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/IranianSans.ttf": "6e2db50ef0d7f0b5dc03260193bf5237",
"assets/assets/maps/floor3.svg": "a5cd56c39d3bcb09004edb4395bfd425",
"assets/assets/maps/floor2.svg": "92fa61147cfa8b5ba070efed991e33bd",
"assets/assets/maps/floor1.svg": "65b1a5dd2baa1513c079bf074b1cc253",
"assets/assets/maps/floor4.svg": "d093664f923224dee7e22efbfa1f88f2",
"assets/assets/check.png": "45113e9c4a0b25d6c10909875ae551ba",
"assets/assets/file_form_pink.svg": "dc6e6b40234ff021e351b83925a7f4de",
"assets/assets/phone_notification.png": "19ff94fb53206e8d071843a1dce05638",
"assets/assets/images/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/images/logo.png": "d05bb6834b1a2a29292a265023b8aa83",
"assets/assets/images/university3d.png": "a08964974bb643f539920b177e97d483",
"assets/assets/rive/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/assets/rive/avatar.riv": "81fbb76dd4a55e4bdab4f5ea37f216c7",
"assets/assets/rive/student.riv": "0d2927f52b69694ed1c6a421f951b8d6",
"assets/assets/journal_green.svg": "8582dfe76b705dcf291bd5ddd477bb0a",
"assets/assets/telegram.svg": "a86cb3c9fc974c81eca7bde288a95ba3",
"assets/assets/file_form_yellow.svg": "467afff38428904f039d3057dd106989",
"assets/assets/my_studies.svg": "5998b9315a296541fb30419e4dbc7d36",
"assets/assets/journal_yellow.svg": "e4b7b6e32151c1cfdae5028e87e222f8",
"assets/assets/file_form.svg": "88b7ea51d82a924db226cab7f33aac29",
"assets/assets/not_found.svg": "f3bbdafe256027550a1750c00d29c8c6",
"assets/assets/file_form_red.svg": "791147f8ebaf2ebdad8a59d01fc2ac9b",
"assets/assets/journal_pink.svg": "144169307b2e46d2e8cda0e3db6e8cee",
"assets/assets/journal_blue.svg": "b9627a7ee0837588df41a0ebe46be982",
"assets/assets/remove.png": "dc8a298218b01cb39958e045e14036f8",
"assets/assets/file_form_green.svg": "d129227fe0d2c739898d17a3c525b515",
"assets/assets/not_logged_in.svg": "94091aa49d5d9e17897dfcf81244d5b7",
"assets/assets/journal_red.svg": "168595019c9ab005e846c89ecc2d41a1",
"assets/assets/animations/navigation.json": "59c76b519e13b5f7251ea66b6e91cfd0",
"assets/assets/animations/student_login.json": "764837ccb3781f100fbcb730fb570936",
"assets/assets/animations/error.json": "4f1cf7c8266638ee1d224bc06b0295a2",
"assets/assets/animations/girls_study.json": "17cc2bb68f5edfdffabde004f582d51e",
"assets/assets/animations/navigation.svg": "0c17afa703f76ea788285a29871896b8",
"assets/assets/animations/girls_study.svg": "7dce8fe489f55da0f938569545315a95",
"assets/assets/animations/professor_math.json": "5025300dcafc9f78b3c63771e9ded2b7",
"assets/assets/animations/university.png": "8de6b2c4073e292ca9bf42da26aa6d00",
"assets/assets/animations/professor_math.png": "981924de01642ab87285c643f76509a5",
"assets/assets/animations/university.json": "2fe495f66d22977d9714373fa298cef4",
"assets/assets/animations/professor_math.svg": "7e20923a3e3293e18918bb70fb48450c",
"assets/assets/animations/error2.json": "c1be9e4e9535d27d4330228813f18eb6",
"assets/assets/animations/university.svg": "9644fd72337b5424bd8be14840ccfce5",
"assets/assets/animations/girls_study.png": "106e29de1540df86386a1708f1eb7cec",
"assets/assets/animations/navigation.png": "2f3cfb4c29354fc06a3fafd98e3c67b8",
"assets/assets/not_found.png": "1f9faa51af71c488a141c739ffa41545"
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
