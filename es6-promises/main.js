import takeAChance from './take-a-chance.js';

const takeAChanceBryan = takeAChance('Bryan');

takeAChanceBryan
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
