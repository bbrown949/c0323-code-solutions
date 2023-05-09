# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?

executes a provided function once for each array element.

    - What should the callback function do?

A function to execute for each element in the array

    - What is `Array.forEach` useful for?
    useful instead of loops

- `Array.map`:
  - What does `Array.map` do?

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

    - What should the callback function return?

A function to execute for each element in the array. Its return value is added as a single element in the new array.

    - What is `Array.map` useful for?
    when you want to perform an action on each element in a collection, and gather the results into a new array

- `Array.filter`: - What does `Array.filter` do?
  The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

      - What should the callback function return?

  A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

      - What is `Array.filter` useful for?

  This is useful for accessing properties, in the case of objects. If the current item passes the condition , it gets returned to the new array.

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
