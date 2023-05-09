/* exported includes */
function includes(array, value) {
  return array.some(function (checkTruthyOrFalsey) {
    return checkTruthyOrFalsey === value;
  });
}
