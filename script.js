/*
// For reference:

// If URL is http://www.somedomain.com/account/search?filter=a#top
window.location.pathname // /account/search
window.location.host     // www.somedomain.com (includes port if there is one)
window.location.hostname // www.somedomain.com
window.location.hash     // #top
window.location.href     // http://www.somedomain.com/account/search?filter=a#top
window.location.port     // (empty string)
window.location.protocol // http:
window.location.search   // ?filter=a
window.location.href.split('/').pop(); // for the last part
*/

var replacer= window.location.href.split('/').pop(); // To append the last part.
var a = document.querySelector('a[href="https://somedomain.com"]');
if (a) {
  a.setAttribute('href', 'https://domain.com'+replacer)
}
