/**
 * A script to initialize Jahuty.
 *
 * Using `defer` on the script and the `DOMContentLoaded` event here helps run
 * Jahuty as soon as possible, without blocking the loading the rest of the page. 
 */
document.addEventListener('DOMContentLoaded', function () {
  jahuty({ apiKey: 'kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc' });
});
