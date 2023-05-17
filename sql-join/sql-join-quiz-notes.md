# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  a column or combination of columns that is used to establish and enforce a link between the data in two tables to control the data that can be stored in the foreign key table
- How do you join two SQL tables?
  using a join clause
- How do you temporarily rename columns or tables in a SQL statement?
  In order to address either of these scenarios, we can alias column names. For example, if we want the product "name" and the supplier "name" to both appear in the same result set, we can do this:

select "products"."name" as "product",
"suppliers"."name" as "supplier"
from "products"
join "suppliers" using ("supplierId");
In this example we're selecting the "name" column from both the "products" table and the "suppliers" table, but then renaming them just for the result set using the as keyword. The column names are not changed in the tables themselves.

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
