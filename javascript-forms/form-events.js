function handleFocus(event) {
  console.log('focus event fired');
  console.log(' event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(' event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('input event fired');
  console.log('Value of:', event.target.name + ':', event.target.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
