const $tabContainer = document.querySelector('.tab-container');
const $tabNodes = document.querySelectorAll('.tab');
const $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodes.length; i++) {
      if ($tabNodes[i] === event.target) {
        $tabNodes[i].className = 'tab active';
      } else {
        $tabNodes[i].className = 'tab';
      }
    }
  }
  const $dataView = event.target.getAttribute('data-view');
  for (let i = 0; i < $viewNodes.length; i++) {
    if ($viewNodes[i].getAttribute('data-view') !== $dataView) {
      $viewNodes[i].className = 'view hidden';
    } else {
      $viewNodes[i].className = 'view';
    }
  }
});
