# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
so we can check out work as we progress through our code
- What is the purpose of events and event handling?
controls the event and decides what should happen if an event occurs
- Are all possible parameters required to use a JavaScript method or function?
no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener()
- What is a callback function?
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
button element object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
property of the Event interface is a reference to the object onto which the event was dispatched, inspector

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)

    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The first passes the function the second calls the function.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
