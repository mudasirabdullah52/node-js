const path = require('path');

const express = require('express');

// const rootDir = require('../util/path'); Instead of this we will use controllers to get the files
const productContoller = require('../controllers/products')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productContoller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productContoller.postAddProduct);

// exports.routes = router;
// exports.products = products; instead of this we will write the below line
module.exports = router;
