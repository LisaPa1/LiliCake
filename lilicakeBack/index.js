const express = require('express');
const app = express();
const cors = require('cors');
const { port } = require('./config/config');

const cakes = require('./cakes.json');
const articles = require('./products.json');

app.use(cors())

app.get('/cakes', function (req, res) {
  res.json(cakes)
})

app.get('/articles', function (req, res) {
  res.json(articles)
})

app.listen(port, () => console.log(`Listening on port ${port}`));