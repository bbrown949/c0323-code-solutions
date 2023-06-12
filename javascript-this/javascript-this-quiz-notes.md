# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
refers to an object that is executing the current piece of code.
- What does it mean to say that `this` is an "implicit parameter"?
 they could be passed to a method silently without going through the regular parameters list.
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
call time
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
the object
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
Its aa mee Mario!
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
It's-a-me, undefined! when character.greet(),  but when hello() is called it has no parameters
- How can you tell what the value of `this` will be for a particular function or method **definition**?
it'll be put inside the object, so the object and its particular property will be the 'this'
- How can you tell what the value of `this` is for a particular function or method **call**?
you can tell by the object on left side of period > 'this'

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
