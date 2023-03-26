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
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
console.log(bart);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log(homer);

function isOldEnoughToDrinkAndDrive(person) {
  if (person >= 0) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'We\'re the warner brothers!';
    case 'wakko':
      return 'We\'re the warner brothers!';
    case 'dot':
      return 'I\'m cute~';
    default:
      return 'Goodnight everybody!';
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
