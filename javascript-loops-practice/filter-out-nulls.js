/* exported filterOutNulls */
function filterOutNulls(values) {
  const input = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      input.push(values[i]);
    }
  }
  return input;
}
