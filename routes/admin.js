const path= require('path');

const express= require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
// /admin/add-product
router.get('/add-product',(req,res,next) => {
    console.log("another middleware")
    
    //res.setHeader('Content-type/text');
    //res.send("<form action='/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Poduct</button></button></form>");
    res.sendFile(path.join(rootDir,'views','add-product.html'));
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