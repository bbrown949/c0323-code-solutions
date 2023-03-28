/* exported getKeys */

function getKeys(object) {
  const output = [];
  for (const key in object) {
    output.push(key);
  }
  return output;
}
