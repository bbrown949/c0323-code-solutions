const $lightbulb = document.querySelector('.lightbulb');
const $row = document.querySelector('.row');
$lightbulb.addEventListener('click', onOff);

function onOff(event) {
  $lightbulb.className = 'lightbulb off';
  $row.className = 'row rowoff';

}
