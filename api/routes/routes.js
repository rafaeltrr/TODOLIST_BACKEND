const express = require('express');
const routes = express.Router();

const cards = require('./cardsRoutes')

module.exports = app =>{
    app.use(cards)
}