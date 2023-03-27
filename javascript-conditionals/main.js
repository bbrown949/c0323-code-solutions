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
  if (person.age >= 0) {
    return false;
  }
}
const bryan = {
  name: 'Bryan Brown',
  age: 36
};
console.log(bryan);

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
      return 'Die Hard';
    case 'comedy':
      return 'Step Brothers';
    case 'horror':
      return 'It';
    case 'drama':
      return 'The Shawshank Redemption';
    case 'musical':
      return 'Footloose';
    case 'sci-fi':
      return '2001 A Space Odyssy';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
