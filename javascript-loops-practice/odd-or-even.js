/* exported oddOrEven */

// output should show whether numbers contained within a new array are odd or
// even using strings 'odd' 'even'
// will use a for loop to run through the input and will check for odd or even
// numbers
// pretty sure will need %2 === 0
function oddOrEven(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      output.push('even');
    } else output.push('odd');
  } return output;
}
