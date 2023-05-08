/* exported take */
function take(array, count) {
  const newArr = [];

  for (let i = 0; i < count; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
