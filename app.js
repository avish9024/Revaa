const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const productRoute = require('./routes/products');

app.use(bodyParser.json());
app.use('/product', productRoute);

module.exports = app
