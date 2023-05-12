# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  The original package manager for both Node.js and frontend web applications.
  npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry

- What is a package?
  a directory with one or more file in it
- What are some other popular package managers?
  yarn, PNPM
- How can you create a `package.json` with `npm`?
  npm init --yes
- What is a dependency and how do you add one to a package?
  allow the project to install the versions of the modules it depends on.
  npm install command
- What happens when you add a dependency to a package with `npm`?
  When installed through the node dependency manager, npm, the devDependencies will get stored in the package.
- What is a devDependency and how do you add one to a package?
  Packages that are only needed for local development and testing.
- How do you define and run `npm` scripts? Why are these useful?
  set its name and write the script under the 'scripts' property of your package. json file
  NPM Scripts are a set of built-in and custom scripts defined in the package. json file. Their goal is to provide a simple way to execute repetitive tasks, like: Running a linter tool on your code.

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
