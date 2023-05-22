# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  -- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  -- Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.
- What is the purpose of state in React?
  The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
- Why can't we just maintain state in a local variable?

Because changing the state will re-render your component to present the most recent data in the view, you should keep this data in the state. If you save this data in a variable, your component will not be updated!

- What two actions happen when you call a `state setter` function?
  update the variable and trigger React to render the component again
- When does the local `state variable` get updated with the new value?
  when the setState function is called.

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
