/* exported numVowels */
function numVowels(string) {
  let vowels = '';
  for (let i = 0; i < string.length; i++) {
    if (
      string[i].toLowerCase() === 'a' ||
      string[i].toLowerCase() === 'e' ||
      string[i].toLowerCase() === 'i' ||
      string[i].toLowerCase() === 'o' ||
      string[i].toLowerCase() === 'u') {
      vowels += string[i];
    }
  }
  return vowels.length;
}
