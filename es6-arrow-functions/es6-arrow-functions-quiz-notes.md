# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  param => expression
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

The parenthesis are returning a single value, the curly braces are executing multiple lines of code.

- When using _concise body syntax_, how do you return an object literal?
  In a concise body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.
- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    It is the argument being passed into the function foo.

  - How many arguments does the arrow function take?
    none
  - What value does it return?
    the number 42
  - How many arguments are passed to the function `foo`?
    one
  - What type of argument is passed to the function `foo`?
    arrow function

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  It is the argument being passed into the function bar. - How many arguments does the arrow function take?
  zero - What value does it return?
  It returns a console.log of a string interpolation. - How many arguments are passed to the function `bar`?
  one - What type of argument is passed to the function `bar`?
  arrow function - When does the arrow function's code get executed?
  inside the function "bar' code block.
- How does the value of `this` differ between standard functions and arrow functions?
  The value of this in the arrow function is determined at the time of declaration and never changes.

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
