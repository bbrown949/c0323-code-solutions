/* exported takeRight */
function takeRight(array, count) {

  const newArray = [];
  if (count > array.length) {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    for (let j = array.length - count; j < array.length; j++) {
      newArray.push(array[j]);
    }
    return newArray;
  }

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
