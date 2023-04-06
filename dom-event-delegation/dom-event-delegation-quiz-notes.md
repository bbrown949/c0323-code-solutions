# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
a property of an event object that refers to the element that triggered the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
event bubbling, because they are the children of the parent element

- What DOM element property tells you what type of element it is?
tagName

- What does the `element.closest()` method take as its argument and what does it return?
css selector, returns node that is closest up the dom tree from where it was called.

- How can you remove an element from the DOM?
Use element. remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
event delegation add the event listener to the parent.


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
