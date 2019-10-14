const express = require('express');
const DepositoController = require('./controllers/DepositoController');

const routes = express.Router();

routes.get('/deposito', DepositoController.index);
routes.post('/deposito', DepositoController.store);

module.exports = routes;