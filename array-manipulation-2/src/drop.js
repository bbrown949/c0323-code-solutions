/* exported drop */
function drop(array, count) {

  const newArray = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;

  const newArr = [];

  for (let i = count; i < array.length; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;

}
