const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller.js');
// const { route } = require('./book-routes.js');


//new book this goes before book controller
router.route('/')
    .post(bookController.book_create);

router.route('/:id')
    .get(bookController.book_detail_get)
// , (request, response) => {
//     const bookId = request.params.id;
//     response.render('pages/book');
// })

module.exports = router;