const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller.js');
const { route } = require('./admin-routes.js');


router.route('/books/:id')
    .get(bookController.all)