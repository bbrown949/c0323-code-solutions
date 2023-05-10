/* exported take */
function take(array, count) {
  let returnedArray = [];
  if (array.length === 0) {
    returnedArray = [];
    return returnedArray;
  } else {
    for (let i = 0; i < count; i++) {
      returnedArray.push(array[i]);
    }
    return returnedArray;
  }
}
