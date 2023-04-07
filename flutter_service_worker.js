'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa2ad0c21442c5d15a2cf959a61893c5",
"index.html": "30c77c07569f0a403feaff4040434ea6",
"/": "30c77c07569f0a403feaff4040434ea6",
"styles.css": "37415c92e7efbc9440e8a92c6cdca50b",
"main.dart.js": "9b399cc0074185c21a5e4aa4084fa730",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "bb11149b58c8923d8e27f9f6fb47945c",
"icons/Icon-192.png": "88a37cf6264158095aac41e0c7143a02",
"icons/Icon-maskable-192.png": "88a37cf6264158095aac41e0c7143a02",
"icons/Icon-maskable-512.png": "764ee4defb128779c41293a966bd03b3",
"icons/Icon-512.png": "764ee4defb128779c41293a966bd03b3",
"manifest.json": "11ea64b09be741744690b5dacd418f5c",
"assets/AssetManifest.json": "b002990d5d8f6b39cc31069cdef256c3",
"assets/NOTICES": "b93f8b45c7c30edc975f51058ba81ebd",
"assets/FontManifest.json": "8a49890ed89c3f1806b6c0e949e94151",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/IranianSans.ttf": "6e2db50ef0d7f0b5dc03260193bf5237",
"assets/assets/transfer.svg": "754565c3123a9893f5a50e12c52bdb58",
"assets/assets/search.svg": "9414d93b1f76e4330b446125d5c2b68e",
"assets/assets/maps/floor_map.svg": "aefc86ffa4b5db97f23ff76d54fbb02a",
"assets/assets/maps/floor3.svg": "30c920769fed559f51f979fb2199071e",
"assets/assets/maps/floor2.svg": "6dd02680dcd290aee6b0a1f300a8da2a",
"assets/assets/maps/floor1.svg": "05ea0bafe86f2007c42f3a55e6844076",
"assets/assets/maps/floor4.svg": "56a4088f4b71ba54e50b617708d5c5c8",
"assets/assets/maps/1.svg": "1899c54727bac2d6b79c4a4278acb6cb",
"assets/assets/check.png": "45113e9c4a0b25d6c10909875ae551ba",
"assets/assets/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/file_form_pink.svg": "dc6e6b40234ff021e351b83925a7f4de",
"assets/assets/map.svg": "51da89d863e90c24e761b6250c57b52d",
"assets/assets/phone_notification.png": "19ff94fb53206e8d071843a1dce05638",
"assets/assets/professor.svg": "4b92d020a1c94fb6d513375dc45989e7",
"assets/assets/images/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/images/logo.png": "d05bb6834b1a2a29292a265023b8aa83",
"assets/assets/images/university3d.png": "a08964974bb643f539920b177e97d483",
"assets/assets/clipboard.svg": "c5a3d2583375a9673dcc5a6660a7f9f4",
"assets/assets/group.svg": "bb33a593089f0616585b83de636fb58b",
"assets/assets/rive/house.riv": "3ac77437a4c56b5143d6ceca83dd61d9",
"assets/assets/rive/confetti.riv": "ad0d13cbea799085305316f0e8118274",
"assets/assets/rive/check.riv": "14f9269423eabd7e2e10cafdc6ad4d41",
"assets/assets/rive/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/rive/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/assets/rive/button.riv": "c8ffe2900d31d8236247928cd7c2b5f3",
"assets/assets/rive/avatar.riv": "81fbb76dd4a55e4bdab4f5ea37f216c7",
"assets/assets/rive/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/journal_green.svg": "8582dfe76b705dcf291bd5ddd477bb0a",
"assets/assets/telegram.svg": "a86cb3c9fc974c81eca7bde288a95ba3",
"assets/assets/file_form_yellow.svg": "467afff38428904f039d3057dd106989",
"assets/assets/document.svg": "a490843c9fe9f2ffbeafdc2292fea0c7",
"assets/assets/my_studies.svg": "5998b9315a296541fb30419e4dbc7d36",
"assets/assets/journal_yellow.svg": "e4b7b6e32151c1cfdae5028e87e222f8",
"assets/assets/file_form.svg": "88b7ea51d82a924db226cab7f33aac29",
"assets/assets/file_form_red.svg": "791147f8ebaf2ebdad8a59d01fc2ac9b",
"assets/assets/journal_pink.svg": "144169307b2e46d2e8cda0e3db6e8cee",
"assets/assets/journal_blue.svg": "b9627a7ee0837588df41a0ebe46be982",
"assets/assets/remove.png": "dc8a298218b01cb39958e045e14036f8",
"assets/assets/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/file_form_green.svg": "d129227fe0d2c739898d17a3c525b515",
"assets/assets/not_logged_in.svg": "94091aa49d5d9e17897dfcf81244d5b7",
"assets/assets/calendar.svg": "4f9fe90a6a738bcc6dd3050ba2af2e3b",
"assets/assets/journal_red.svg": "168595019c9ab005e846c89ecc2d41a1",
"assets/assets/invoice.svg": "b7337a2bf234c784b34468a216f926b8",
"assets/assets/ring.svg": "917a20be316d1a52e8f608408b51f906",
"assets/assets/animations/navigation.json": "59c76b519e13b5f7251ea66b6e91cfd0",
"assets/assets/animations/student_login.json": "764837ccb3781f100fbcb730fb570936",
"assets/assets/animations/error.json": "4f1cf7c8266638ee1d224bc06b0295a2",
"assets/assets/animations/girls_study.json": "17cc2bb68f5edfdffabde004f582d51e",
"assets/assets/animations/error4.json": "c1be9e4e9535d27d4330228813f18eb6",
"assets/assets/animations/navigation.svg": "0c17afa703f76ea788285a29871896b8",
"assets/assets/animations/girls_study.svg": "7dce8fe489f55da0f938569545315a95",
"assets/assets/animations/professor_math.json": "5025300dcafc9f78b3c63771e9ded2b7",
"assets/assets/animations/university.json": "2fe495f66d22977d9714373fa298cef4",
"assets/assets/animations/professor_math.svg": "7e20923a3e3293e18918bb70fb48450c",
"assets/assets/animations/error2.json": "c1be9e4e9535d27d4330228813f18eb6",
"assets/assets/animations/university.svg": "9644fd72337b5424bd8be14840ccfce5",
"assets/assets/animations/error3.json": "14adc48a53b3b19886b88dabc2b539ae",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
