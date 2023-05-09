/* exported ransomCase */
function ransomCase(string) {
  const strArr = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      strArr.push(string.split('')[i].toLowerCase());
    } else {
      strArr.push(string.split('')[i].toUpperCase());
    }
  }
  return strArr.join('');
}
