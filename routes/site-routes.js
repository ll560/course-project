const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller.js');

//homepage
//site route
router.route('/') 
    .get(siteController.all)
// (request, response) =>{
//     response.render('pages/index');
// })



//about page
router.route("/about" )


//login page
router.route("/login")

module.exports = router;