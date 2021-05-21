const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller.js');

router.route("/admin-console", (request, response) =>{
    response.render('pages/admin');
})

router.route("/admin-console/create-book", (request, response) =>{
    response.render('pages/create');
})

router.route('/admin-console/update-book/:id', (request, response) => {
    const bookId = request.params.id;
    response.render('pages/update');
})
module.exports = router;
