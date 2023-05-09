# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && will execute code on the right side if the left side value is falsey,
  || operator will execute if the left side operand is defined

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  it returns a boolean value as soon as it finds a condition evaluated to be true
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It will only trigger if the left hand value is null or undefined unlike the || operator triggering for all falsey values on the left side of operand
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  A ternary operator is a single statement, while an if-else is a block of code.
- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows us to quickly copy all or part of an existing array or object into another array or object.
- What data types can be spread into an array? Into an object?
  any data type
- How does spread syntax differ from rest syntax?
  spread syntax creates a new array & rest syntax adds values to an existing array

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
