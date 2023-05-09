/* exported sumAll */
function sumAll(numbers) {
  let input = 0;
  for (let i = 0; i < numbers.length; i++) {
    input += numbers[i];
  }
  return input;
}
