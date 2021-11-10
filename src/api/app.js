const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const ProductController = require('../controllers/productsController');
const SalesController = require('../controllers/salesController');

app.post('/starstore/product', ProductController.create);
app.get('/starstore/products', ProductController.getAll);

app.post('/starstore/buy', SalesController.create);
app.get('/starstore/history', SalesController.getAll);
app.get('/starstore/history/:id', SalesController.getById);

module.exports = app;