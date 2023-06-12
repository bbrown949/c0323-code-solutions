/* exported chunk */
function chunk(array, size) {

  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunkedArray.push(chunk);
  }
  return chunkedArray;

  const newArr = [];

  for (let i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;

}
