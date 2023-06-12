/* exported includes */
function includes(array, value) {

  let trueOrFalse = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      trueOrFalse = true;
    }
  }
  return trueOrFalse;

  return array.some(function (checkTruthyOrFalsey) {
    return checkTruthyOrFalsey === value;
  });

}
