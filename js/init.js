/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/serviceWorker.js').then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
}
*/

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.addEventListener("load", function () {
  page();

  // Usage!
  sleep(1000).then(() => {
  page();
  });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/serviceWorker.js', { scope: '/js/' }).then(function (reg) {

    if (reg.installing) {
      console.log('Service worker installing');
    } else if (reg.waiting) {
      console.log('Service worker installed');
    } else if (reg.active) {
      console.log('Service worker active');
    }

  }).catch(function (error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};
