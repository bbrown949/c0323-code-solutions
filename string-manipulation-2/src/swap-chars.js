/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const stringArr = string.split('');
  let swapChar = [];

  swapChar = stringArr[firstIndex];
  stringArr[firstIndex] = stringArr[secondIndex];
  stringArr[secondIndex] = swapChar;

  return stringArr.join('');
}
