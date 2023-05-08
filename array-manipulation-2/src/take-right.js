/* exported takeRight */
function takeRight(array, count) {
  const newArr = [];

  for (let i = array.length - count; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    } else {
      return array.slice(0, count);
    }
  }
  return newArr;
}
