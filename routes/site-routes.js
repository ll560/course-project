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
router.route("/about")
    .get(siteController.about_get)


//login page
router.route("/login")
    .get(siteController.login_get)

module.exports = router;