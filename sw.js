//Der ServiceWorker installiert die Anwendungsdaten lokal im Cache und benutzt bevorzugt in einem fetch die offline Daten.
//Name des Cache
const cache_name = 'at-cache-v0000000006';
//Auflistung der Caching-Daten
const precacheResources = ["./", "index.html", "sw.js", "js/main.js", "css/style.css", "manifest.json",
							"img/ring.png",

							"img/mitte.png",

							"img/ring_maske_dunkel.png",

							"img/ring_maske_dunkel_doppel.png",

							"img/mitte_maske_dunkel.png",

							"img/restgrau.png",

							"img/schwarzer_rand.png",

							"img/person_1.png",
							"img/person_2.png",
							"img/person_3.png",
							"img/person_4.png",
							"img/person_5.png",
							"img/person_6.png",
							"img/person_8.png",
							"img/person_9.png",
							"img/person_10.png",
							"img/person_11.png",
							"img/person_12.png",
							"img/person_13.png",
							"img/person_14.png",
							"img/person_15.png",
							"img/person_16.png",
							"img/person_17.png",

							"img/personenhervorhebung_1.png",
							"img/personenhervorhebung_2.png",
							"img/personenhervorhebung_3.png",
							"img/personenhervorhebung_4.png",
							"img/personenhervorhebung_5.png",
							"img/personenhervorhebung_6.png",
							"img/personenhervorhebung_7.png",
							"img/personenhervorhebung_8.png",
							"img/personenhervorhebung_9.png",
							"img/personenhervorhebung_10.png",
							"img/personenhervorhebung_11.png",
							"img/personenhervorhebung_12.png",
							"img/personenhervorhebung_13.png",
							"img/personenhervorhebung_14.png",
							"img/personenhervorhebung_15.png",
							"img/personenhervorhebung_16.png",
							"img/personenhervorhebung_17.png",

							"img/innen dunkel.png",
							"img/aussenbildhervorhebung_1.png",
							"img/aussenbildhervorhebung_2.png",
							"img/aussenbildhervorhebung_3.png",
							"img/aussenbildhervorhebung_4.png",
							"img/aussenbildhervorhebung_5.png",
							"img/aussenbildhervorhebung_6.png",
							"img/aussenbildhervorhebung_7.png",
							"img/aussenbildhervorhebung_8.png",

							"img/philippine.png",
							"img/ferdinand.png",

							"img/logos_abspann.jpg",

							"img/atlogo192.png",
							"img/atlogo512.png",

							"audio/ende_1.mp3",
							"audio/ende_2.mp3",
							"audio/ende_3.mp3",
							"audio/ende_4.mp3",

							"audio/extra_audio_narrenmutter.mp3",

							"audio/person_1_4.mp3",
							"audio/person_1_5.mp3",
							"audio/person_1_6.mp3",

							"audio/person_2_4.mp3",
							"audio/person_2_5.mp3",
							"audio/person_2_6.mp3",

							"audio/person_3_4.mp3",
							"audio/person_3_5.mp3",
							"audio/person_3_6.mp3",

							"audio/person_4_4.mp3",
							"audio/person_4_5.mp3",
							"audio/person_4_6.mp3",

							"audio/person_5_4.mp3",
							"audio/person_5_5.mp3",
							"audio/person_5_6.mp3",

							"audio/person_6_4.mp3",
							"audio/person_6_5.mp3",
							"audio/person_6_6.mp3",

							"audio/person_7_4.mp3",
							"audio/person_7_5.mp3",
							"audio/person_7_6.mp3",

							"audio/person_8_0.mp3",
							"audio/person_8_4.mp3",
							"audio/person_8_5.mp3",
							"audio/person_8_6.mp3",

							"audio/person_9_1.mp3",
							"audio/person_9_4.mp3",
							"audio/person_9_5.mp3",
							"audio/person_9_6.mp3",
							"audio/person_9_7.mp3",
							"audio/person_9_8.mp3",

							"audio/person_10_4.mp3",
							"audio/person_10_5.mp3",
							"audio/person_10_6.mp3",
							"audio/person_10_7.mp3",

							"audio/person_11_4.mp3",
							"audio/person_11_5.mp3",
							"audio/person_11_6.mp3",
							"audio/person_11_7.mp3",

							"audio/person_12_4.mp3",
							"audio/person_12_5.mp3",
							"audio/person_12_6.mp3",
							"audio/person_12_7.mp3",

							"audio/person_13_4.mp3",
							"audio/person_13_5.mp3",
							"audio/person_13_6.mp3",
							"audio/person_13_7.mp3",

							"audio/person_15_2.mp3",
							"audio/person_15_4.mp3",
							"audio/person_15_5.mp3",
							"audio/person_15_6.mp3",
							"audio/person_15_7.mp3",

							"audio/person_16_4.mp3",
							"audio/person_16_5.mp3",
							"audio/person_16_6.mp3",
							"audio/person_16_7.mp3",

							"audio/person_17_4.mp3",
							"audio/person_17_5.mp3",
							"audio/person_17_6.mp3",
							"audio/person_17_7.mp3",

							"audio/r1e7.mp3",
							"audio/r2e7.mp3",
							"audio/r3e7.mp3",
							"audio/r4e7.mp3",
							"audio/r5e7.mp3",
							"audio/r6e7.mp3",
							"audio/r7e7.mp3",
							"audio/r8e7.mp3",

							"audio/r81e7.mp3",

							"video/film.mp4"];


self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(caches.open(cache_name).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
