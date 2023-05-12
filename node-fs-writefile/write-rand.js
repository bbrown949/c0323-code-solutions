import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', Math.random().toString() + '\n', 'utf8');
} catch (error) {
  console.log('error message: ', error.message);
}
