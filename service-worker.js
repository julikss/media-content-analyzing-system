/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "61733df8cefbb5d80c0b12ba44efaf7d"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.c3131363.css",
    "revision": "7158acf0e3ec3c00b6189eec97d9827a"
  },
  {
    "url": "assets/img/delete.3632627b.jpg",
    "revision": "3632627ba2955c8a300e633d2e31d071"
  },
  {
    "url": "assets/img/EER-diagram.c3eca197.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "assets/img/get-all.e7f668a8.jpg",
    "revision": "e7f668a8e0b6814ea30922444a9039aa"
  },
  {
    "url": "assets/img/id.543222c5.jpg",
    "revision": "543222c5bb1820b4ce5d7e9bedf763a5"
  },
  {
    "url": "assets/img/post-add.2b0ee4a3.jpg",
    "revision": "2b0ee4a3aea1f61380b95c1f0867963c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update.ec4d74b6.jpg",
    "revision": "ec4d74b60416d37a224e76adcc5a0b81"
  },
  {
    "url": "assets/js/10.65add0f1.js",
    "revision": "bc9b21907a09560129b7252d345cff7d"
  },
  {
    "url": "assets/js/11.98fc3f43.js",
    "revision": "62303b4613386cfbb6eee69425b3a077"
  },
  {
    "url": "assets/js/12.476fe83f.js",
    "revision": "5928533dff9090ff539370c5c7d3fad7"
  },
  {
    "url": "assets/js/13.94173e4c.js",
    "revision": "621ea4d3c829a5087a59eb3406f910e8"
  },
  {
    "url": "assets/js/14.2e7e37ae.js",
    "revision": "07f5fa5561efda74fd3a689b52868498"
  },
  {
    "url": "assets/js/15.480b057c.js",
    "revision": "f5f3545f0fa1d58719d6b98b81e2f63e"
  },
  {
    "url": "assets/js/16.71ea3761.js",
    "revision": "0bca24fe14eba17b5534edb50e996255"
  },
  {
    "url": "assets/js/17.eef6344c.js",
    "revision": "39cc93fa896fc0abe6387dd0b883ec7d"
  },
  {
    "url": "assets/js/18.90390a51.js",
    "revision": "bd2e8a18510a9639bc92127858becc65"
  },
  {
    "url": "assets/js/19.902e8326.js",
    "revision": "3bcfad6ef2ece05d2f7e6131c2213055"
  },
  {
    "url": "assets/js/2.9c0c6001.js",
    "revision": "d9744c18ef93abd912b47004251a1641"
  },
  {
    "url": "assets/js/20.4d8466cb.js",
    "revision": "391e41e7bfe8afca7f9bb686cefa0f91"
  },
  {
    "url": "assets/js/21.1462bb39.js",
    "revision": "852bee110ed9afa2e13921682619a9cf"
  },
  {
    "url": "assets/js/22.aaabcd07.js",
    "revision": "5253e4752af3a39dd49f55b9a995c9f6"
  },
  {
    "url": "assets/js/3.cdc12772.js",
    "revision": "3940b03a220af972cc97e1ab0175015a"
  },
  {
    "url": "assets/js/4.66375f55.js",
    "revision": "e14a31340e43419119432b23aeeda7dd"
  },
  {
    "url": "assets/js/5.e840a1bc.js",
    "revision": "f60fb45a0103ad4c8ca6179e48920d1e"
  },
  {
    "url": "assets/js/6.5258e533.js",
    "revision": "deae10545ae5360baba627b3530c2079"
  },
  {
    "url": "assets/js/7.95198e11.js",
    "revision": "cfa4d3618ac18cb918337190077eb5ee"
  },
  {
    "url": "assets/js/8.f50c6913.js",
    "revision": "c105d1f13987bedb8bf7401509cd77c8"
  },
  {
    "url": "assets/js/9.9e6743f7.js",
    "revision": "b6284f1fd3fc41ca44b61a6d1537f453"
  },
  {
    "url": "assets/js/app.06e026e7.js",
    "revision": "2e716da6343e1216cd31ffdb19c1f58c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6cb08fc39cb3bb8bffc61a58af902a39"
  },
  {
    "url": "design/index.html",
    "revision": "95f497e4599772c6d826e26211bce40a"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "e6b67cf344801accc3300cbefd968b3d"
  },
  {
    "url": "intro/index.html",
    "revision": "96ab79562c923d8f30e55de5ddf60aae"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "985f6ef4440c7211f4d0d8bb1b1c1aba"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "04bc9794705e5399ccf7c6a7691ab73a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0a550bef72ff1dad03683bbecb49689b"
  },
  {
    "url": "software/index.html",
    "revision": "512329e0fbe0f83724032009ceba060d"
  },
  {
    "url": "test/index.html",
    "revision": "5461a63f5abfc3aecd1f25f8705f6263"
  },
  {
    "url": "use cases/index.html",
    "revision": "45d15d0ca3fbaf1cc68b283e7c66835f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
