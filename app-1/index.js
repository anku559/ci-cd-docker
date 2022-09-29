const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send("On ROUTE - Home")
});

app.get('/api/route-1', (req, res) => {
  res.status(200).send("On ROUTE - route-1")
});

app.get('/api/route-2', (req, res) => {
  res.status(200).send("On ROUTE - route-2")
});

app.listen(8080, () => { 
  console.log('Listening on PORT: 8080');
})