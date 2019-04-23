// Register service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service_worker.js');
  console.log('service worker started!');
}
