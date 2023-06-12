/* exported lastChars */
function lastChars(length, string) {
  let chars = '';
  if (string === '' || string.length < length) {
    return string;
  } else {
    for (let i = string.length - length; i < string.length; i++) {
      chars += string[i];
    }
  }
  return (chars);
}
