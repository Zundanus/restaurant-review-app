/*
 Registers a service worker for the Restaurant App
*/

// Register service worker
if (navigator.serviceWorker) {
	navigator.serviceWorker.register('js/sw/service_worker.js').then(function(reg) {

    if (reg.waiting) {
      console.log('sw waiting');
      return;
    }

    if (reg.installing) {
      console.log('sw installing');
      return;
    }

    reg.addEventListener('updatefound', function() {
      console.log('sw updatefound');
    });
  });
	console.log('Service worker registered!');
}
