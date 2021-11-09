const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const ProductController = require('../controllers/productsController');

app.post('/starstore/product', ProductController.create);

module.exports = app;