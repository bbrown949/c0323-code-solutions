/* exported includesSeven */

// expected output will be a boolean
// want to check to see if inputs into the function contain the number 7
// will try to accomplish using a for loop and if statement
// if it is number 7 we will return true

function includesSeven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
