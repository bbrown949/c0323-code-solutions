# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains
  **_have to use it when_**
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  syntatix difference, makes it easier to write the code.
- When do you use `async`?
  instead of promises
  when there is a large number of iterations involved or when the operations within the loop are complex.
  **if you ever want to use the await keyword you can only use it inside a function that is annotated with async**
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use it if you want to wait for a promise to settle. you do not use it on synchronous functions
- How do you handle errors with `await`?
  try/catch
- What do `try`, `catch` and `throw` do? When do you use them?
  Use the throw statement to throw an exception. Use the try statement to catch and handle exceptions that might occur during execution of a code block.
  try keyword BEFORE AWAIT - CATCH GOES AFTER AWAIT - THROW throws an exception. if you use throw the code will stop executing and go to the closest catch.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  your test will complete before the promise returned from fetchData resolves or rejects. if the promise rejects, the catch will not execute.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await - easier to write and read.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
