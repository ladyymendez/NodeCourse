const path= require('path');

const express= require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product
router.post('/add-product', adminController.postAddProduct);

// /admin/products
router.get('/products', adminController.getProducts);

module.exports = router;