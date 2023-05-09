// select the dot dot dot
const $h1Content = document.querySelector('h1');

// setTimeout function
setTimeout(
  function () {
    $h1Content.textContent = 'Hello There!';
  },
  3000 // 3 seconds.
);
