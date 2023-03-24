/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) { console.log(true); } else { console.log(false); }
}
console.log('is 4 under 5?', isUnderFive(4));
console.log('is 7 under 5?', isUnderFive(7));

function isEven(number) {
  if (number % 2 === 0) { console.log(true); } else { console.log(false); }
}
console.log('is 7 even?', isEven(7));
console.log('is 4 even?', isEven(4));

function startsWithJ(string) {
  if (string[0] === 'J') { console.log(true); } else { console.log(false); }
}
console.log('does John start with J:', startsWithJ('John'));
console.log('does Bryan start with J:', startsWithJ('Bryan'));
function isOldEnoughToDrink(person) {
  if (person.age >= 21) { console.log(true); } else { console.log(false); }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) { console.log(true); } else { console.log(false); }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person >= 0) { console.log(false); }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    console.log('neutral');
  } else if (pH < 7 && pH >= 0) {
    console.log('acid');
  } else if (pH > 7 && pH <= 14) {
    console.log('base');
  } else if (pH < 0 || pH > 14) {
    console.log('invalid pH level');
  }
}
console.log('pH of 7:', categorizeAcidity(7));
console.log('pH of 3:', categorizeAcidity(3));
console.log('pH of 8:', categorizeAcidity(8));
console.log('pH of -1:', categorizeAcidity(-1));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      console.log('We\'re the warner brothers!');
      break;
    case 'wakko':
      console.log('We\'re the warner brothers!');
      break;
    case 'dot':
      console.log('I\'m cute~');
      break;
    default:
      console.log('Goodnight everybody!');
  }
}
console.log('yakko:', introduceWarnerBro('yakko'));
console.log('wakko:', introduceWarnerBro('wakko'));
console.log('dot:', introduceWarnerBro('dot'));
console.log('bob:', introduceWarnerBro('bob'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('Step Brothers');
      break;
    case 'horror':
      console.log('It');
      break;
    case 'drama':
      console.log('The Shawshank Redemption');
      break;
    case 'musical':
      console.log('Footloose');
      break;
    case 'sci-fi':
      console.log('2001 A Space Odyssy');
      break;
    default:
      console.log('Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi');

  }
}
console.log('action movie:', recommendMovie('action'));
console.log('comedy movie:', recommendMovie('comedy'));
console.log('horror movie:', recommendMovie('horror'));
console.log('drama movie:', recommendMovie('drama'));
console.log('musical movie:', recommendMovie('musical'));
console.log('sci-fi movie:', recommendMovie('sci-fi'));
console.log('classic movie:', recommendMovie('classic'));
