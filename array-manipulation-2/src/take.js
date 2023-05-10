/* exported take */
function take(array, count) {
  let newArray = [];
  if (array.length === 0) {
    newArray = [];
    return newArray;
  } else {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
