// import { readFile } from 'node:fs/promises';

// const [, , ...args] = process.argv;

// async function readAny(fileName) {
//   try {
//     const file = await readFile(fileName, 'utf-8');
//     await console.log(file);
//   } catch (error) {
//     console.log(error);
//   }
// }

import { readFile } from 'node:fs/promises';

const [, , ...files] = process.argv;

async function readAll(books) {
  const bks = books.map(async (element) => {
    return await readFile(element, 'utf8');
  });

  const done = await Promise.all(bks);
  done.forEach((element) => console.log(element));
}

await readAll(files);
