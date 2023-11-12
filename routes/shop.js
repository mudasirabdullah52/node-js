const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin'); insteal of this write the below line
const productContoller = require('../controllers/products')

const router = express.Router();

router.get('/', productContoller.getProduct);

module.exports = router;
