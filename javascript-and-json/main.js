const books = [
  {
    isbn: '9783161484100',
    title: 'Coding is fun',
    author: 'Bryan Brown'
  },

  {
    isbn: '97801371170180',
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  },
  {
    isbn: '9780006934370',
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson'
  }
];

console.log('books:', books);
console.log('typeof:', typeof books);

const jsonBooks = JSON.stringify(books);
console.log('jsonBooksString', jsonBooks);
console.log('type of jsonBooksString:', typeof jsonBooks);

const studentJSON = '{"id":1,"name":"Jeff Jefferson"}';

console.log('string:', studentJSON);
console.log('typeof:', typeof studentJSON);

const objectJSON = JSON.parse(studentJSON);
console.log('objectJSON:', objectJSON);
