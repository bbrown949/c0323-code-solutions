# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
so we can see our progress as we work, make sure things are working  properly
- What is a "model"?
the html page
- Which "document" is being referred to in the phrase Document Object Model?
html and xml
- What is the word "object" referring to in the phrase Document Object Model?
tags, id, class
- What is a DOM Tree?
a hierarchical representation of an HTML or XML document.
- Give two examples of `document` methods that retrieve a single element from the DOM.
get element by id, get element by class name
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
getElementsByTagName()
- Why might you want to assign the return value of a DOM query to a variable?
used in css, returns the first child element that matches a specified CSS selector(s) of an element.
- What `console` method allows you to inspect the properties of a DOM element object?
console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
It helps because the HTML page isn't rendered only after the DOM is ready: the browser starts rendering the page as it parses the DOM. This means that you can achieve a faster "load" of the page (even though the DOM isn't ready) by making the browser load the scripts last.

- What does `document.querySelector()` take as its argument and what does it return?
the first Element within the document that matches the specified selector, or group of selectors.
- What does `document.querySelectorAll()` take as its argument and what does it return?
What does `document.querySelectorAll()` take as its argument and what does it return?


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
