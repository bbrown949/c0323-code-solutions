/* exported findIndex */

// output will be the index of the number outside array
// using an input of an array and a seperate number, loop will check for the
// seperate number in the array and return the index of that value
// if no matching number is found output will be -1
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}
