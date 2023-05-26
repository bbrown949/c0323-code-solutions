# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when React "renders" the component for the first time
- What is a React Effect?
  tell React that your component needs to do something after render.
- When should you use an Effect and when should you not use an Effect?
  If there is no external system involved
- When do Effects run?
  when the component is mounted,
- What function is used to declare an Effect?
  useEffect Hook
- What are Effect dependencies and how do you declare them?
  a list of dependencies of your side-effect: being props or state values
- Why would you want to clean up from an Effect?
  Cleaning up side effects in React is a way of stopping side effects that do not need to be executed anymore
- How do you clean up from an Effect?
  The hook comes with a cleanup function, which you might not always need, but it can come in handy. To invoke the cleanup function you can simply add a return function like so: useEffect(() => { // Your effect return () => { // Cleanup }; }, []); The cleanup can prevent memory leaks and remove unwanted things
- When does the cleanup function run?
  The cleanup function will get called when we "switch" effects

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
