/* exported isVowel */
function isVowel(char) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i <= vowel.length; i++) {
    if (char === (vowel[i])) {
      return true;
    }
  }
  return false;
}
