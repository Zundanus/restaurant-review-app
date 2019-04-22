// Register service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('js/sw/service_worker.js');
  console.log('service worker started!');
}
