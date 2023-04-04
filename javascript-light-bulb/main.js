const $lightbulb = document.querySelector('.lightbulb');
const $row = document.querySelector('.row');
$lightbulb.addEventListener('click', onOff);

function onOff(event) {
  if ($lightbulb.className === 'lightbulb off') {
    $lightbulb.className = 'lightbulb on';
    $row.className = 'row rowon';
  } else {
    $lightbulb.className = 'lightbulb off';
    $row.className = 'row rowoff';
  }
}
