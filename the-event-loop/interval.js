let count = 3;
function countDown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(newCount);
  }
}
const newCount = setInterval(countDown, 1000);
