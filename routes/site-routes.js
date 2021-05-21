const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller.js');

//homepage
router.route('/')
    .get(siteController.all)


//about page
router.route('/about')
    .get(siteController)


//login page
router.route('/login')
    .get()

module.exports = router;