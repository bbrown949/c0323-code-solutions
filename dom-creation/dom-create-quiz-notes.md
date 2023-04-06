# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
no

- How do you add an element as a child to another element?
appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
name, value
- What steps do you need to take in order to insert a new element into the page?
The first step is to create the node (element) you wish to append, the next is to find where you wish to append it within the document, and the final step is to actually do the appending.
- What is the `textContent` property of an element object for?
sets or returns the text content of the specified node, and all its descendants
- Name two ways to set the `class` attribute of a DOM element.
element. setAttribute, Change an input field to an input button: myInput. setAttribute("type", "button")
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
it saves a ton of time, reusable.


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
