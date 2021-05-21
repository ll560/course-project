const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller.js');
// const { route } = require('./book-routes.js');


router.route('/books/:id')
// , (request, response) => {
//     const bookId = request.params.id;
//     response.render('pages/book');
// })

module.exports = router;