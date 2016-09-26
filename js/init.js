/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/serviceWorker.js').then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
}
*/

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/serviceWorker.js', { scope: '/js/' }).then(function(reg) {
    
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
    
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};
