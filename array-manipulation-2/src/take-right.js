/* exported takeRight */
function takeRight(array, count) {
  const finishedArray = [];
  if (count > array.length) {
    for (let i = 0; i < array.length; i++) {
      finishedArray.push(array[i]);
    }
    return finishedArray;
  } else {
    for (let j = array.length - count; j < array.length; j++) {
      finishedArray.push(array[j]);
    }
    return finishedArray;
  }
}
