/* exported capitalizeWord */
function capitalizeWords(words) {
  const wordsArr = words.split(' ');
  const wordsCapArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    wordsCapArr.push(wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1).toLowerCase());
  }
  return (wordsCapArr.join(' '));
}
