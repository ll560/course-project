const express = require('express');
const router = express.Router();

const adminRouter = require('./admin-routes.js');
const bookRouter = require('./book-routes');
const siteRouter = require('./site-routes');

router.use('/admin-console', adminRouter);
router.use('/books', bookRouter);
router.use('/', siteRouter);

module.exports = router;