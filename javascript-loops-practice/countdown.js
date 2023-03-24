/* exported countdown */
function countdown(number) {
  const numbers = [];
  let currentNumber = number;
  while (currentNumber >= 0) {
    console.log(currentNumber);
    numbers.push(currentNumber);
    currentNumber--;
  }
  return numbers;
}
