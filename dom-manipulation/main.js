let numberClicks = 0;
function counter() {
  numberClicks++;
  $clickCount.textContent = 'clicks:' + numberClicks;
  if (numberClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (numberClicks >= 17) {
    $hotButton.className = 'hot-button nuclear';
  }
}

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', counter);
