# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  The process object in Node. js is a global object that can be accessed inside any module without requiring it
- How do you access the `process` object in a Node.js program?
  console.log(process) then execute process.js with the node command.
- What is the data type of `process.argv` in Node.js?
  argv is a property that holds an array of command-line values provided when the current process was initiated. The first element in the array is the absolute path to the Node, followed by the path to the file that's running and finally any command-line arguments provided when the process was initiated.
- How do you access the command line arguments in a Node.js program?
  console.log(process.argv[2]);

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
