/* exported dropRight */
function dropRight(array, count) {
  const newArr = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    } else {
      return array.slice(0, 1);
    }
  }
  return newArr;
}
