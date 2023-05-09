/* exported drop */
function drop(array, count) {
  const newArr = [];

  for (let i = count; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
