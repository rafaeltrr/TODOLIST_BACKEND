const express = require('express');
const routes = express.Router();

const CardController = require('../controllers/CardController');

routes.get('/cards', CardController.getAll);
routes.post('/cards', CardController.createCard);
routes.put('/cards', CardController.updateCard);

module.exports = routes;