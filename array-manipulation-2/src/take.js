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

  const newArr = [];

  for (let i = 0; i < count; i++) {
    if (array[i] || array[i] === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;

}
