const path= require('path');

const express= require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product
router.use('/add-product',(req,res,next) => {
    console.log("another middleware")
    
    //res.setHeader('Content-type/text');
    //res.send("<form action='/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Poduct</button></button></form>");
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// /admin/add-product
router.post('/add-product', (req,res,next)=>{
    const {title}=req.body;
    console.log(title);
    res.redirect('/');
})

module.exports = router;