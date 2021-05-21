const express = require('express');
const router = express.Router();
const siteController = require('../controllers/admin-controller.js');

//homepage
router.route('/admin-console')
    .get(adminController.all)


//about page
router.route('/admin-console/create-book')
    .get(adminController.admin_create_get)

    
//login page
router.route('/admin-console/update-book/:id')
    .get(adminController.admin_create_update)

module.exports = router;