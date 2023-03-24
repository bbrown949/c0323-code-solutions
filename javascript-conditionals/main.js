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

function isEven(number) {
  if (number % 2 === 0) { console.log(true); } else { console.log(false); }
}

function startsWithJ(string) {
  if (string[0] === 'J') { console.log(true); } else { console.log(false); }
}
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
