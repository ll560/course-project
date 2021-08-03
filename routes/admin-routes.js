const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller.js');

router.route('/admin-console')
    .get(adminController.all)

    

router.route('/admin-console/create-book')
    .get(adminController.admin_new)

// , (request, response) =>{
//     response.render('pages/create');
// })

router.route('/admin-console/update-book/:id')
    .get(adminController.admin_edit)

// , 
// })


module.exports = router;
