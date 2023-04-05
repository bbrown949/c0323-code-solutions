function handleFocus(event) {
  console.log('focus event fired:', 'focus');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired:', 'blur');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
