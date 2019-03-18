const path= require('path');

const express= require('express');

const productController = require('../controllers/products');

const router = express.Router();

const products = [];
// /admin/add-product
router.get('/add-product', productController.getAddProduct);

// /admin/add-product
router.post('/add-product', productController.postAddProduct);

module.exports = router;