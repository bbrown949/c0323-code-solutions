/* exported firstChars */
function firstChars(length, string) {
  let chars = '';
  if (string === '' || string.length < length) {
    return string;
  } else {
    for (var i = 0; i < length; i++) {
      chars += string[i];
    }
  }
  return chars;
}
