const path= require('path');

const express= require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
// /admin/add-product
router.get('/add-product',(req,res,next) => {
        res.render('add-product',{
        pageTitle:'Add Product', 
        path: '/admin/add-product'

    });
});

// /admin/add-product
router.post('/add-product', (req,res,next)=>{
    const {title}=req.body;
    console.log(title);
    products.push({title: title});
    res.redirect('/');
})

//module.exports = router;
exports.routes = router;
exports.products = products;