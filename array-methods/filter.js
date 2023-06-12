const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((num) => num % 2 === 0);
console.log('even numbers', evens);

const noDLetters = names.filter(
  (element) => !element.toLowerCase().includes('d')
);
console.log('No D', noDLetters);

const dLetters = names.filter((nam) => nam.includes('d', 'D'));
console.log('D Letters', dLetters);
