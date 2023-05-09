const a = 7;
const b = 5;
const c = 3;
const maximumValue = Math.max(a, b, c);

console.log('maximumValue:', maximumValue);

const heros = ['Spiderman', 'Ironman', 'Superman', 'The Hulk'];
let randomNumber = Math.random();
randomNumber = randomNumber * heros.length;

const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heros[randomIndex];
console.log('randomHero:', randomHero);

const library = [{
  title: 'Harry Potter and the Sorcerers Stone',
  author: 'J.K Rowling'
},
{
  title: 'The Hobbit',
  author: 'J. R. R. Tolkien'
},
{
  title: 'The Great Gatsby',
  author: 'F.Scott Fitzgerald'
}];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

const fullName = 'Bryan Brown';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
