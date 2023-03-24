/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const input = [];
  for (let i = 0; i < words.length; i++) {
    input.push(words[i] + suffix);
  }
  return input;
}
