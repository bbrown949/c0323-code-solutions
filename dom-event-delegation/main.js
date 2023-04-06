const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('.event-target', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $closest = event.target.closest('.task-list-item');
    console.log($closest);
    $closest.remove();
    return $closest;
  }
});
