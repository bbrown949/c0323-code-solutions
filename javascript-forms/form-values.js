
const $contactForm = document.forms[0];
$contactForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const object = {
    name: document.forms[0].elements[0].value,
    email: document.forms[0].elements[1].value,
    message: document.forms[0].elements[2].value
  };
  console.log(object);
  $contactForm.reset();
}
