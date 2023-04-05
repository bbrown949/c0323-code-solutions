
const $openModal = document.querySelector('.open-modal');
const $modalBtn = document.querySelector('.modal-btn');
const $closeBtn = document.querySelector('.close-btn');

$modalBtn.addEventListener('click', openModal);
$closeBtn.addEventListener('click', closeModal);

function openModal(event) {
  $openModal.className = 'open-modal';
}

function closeModal(event) {
  $openModal.className = 'open-modal hidden';

}
