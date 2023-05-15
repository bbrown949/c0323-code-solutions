import express from 'express';

const app = express();

// Call the use() method of your app object and pass it a callback function with two parameters:
// req (short for "request")
// res (short for "response")
app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('hola Bryan!');
});

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 8080');
});
