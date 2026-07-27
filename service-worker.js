self.addEventListener("install", event => {
  self.skipWaiting();
});


self.addEventListener("activate", event => {
  event.waitUntil(
    clients.claim()
  );
});


self.addEventListener("message", event => {

  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }

});