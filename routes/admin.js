const express= require('express');

const router = express.Router();

// /admin/add-product
router.use('/add-product',(req,res,next) => {
    console.log("another middleware")
    
    //res.setHeader('Content-type/text');
    res.send("<form action='/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Poduct</button></button></form>");
});

// /admin/add-product
router.post('/add-product', (req,res,next)=>{
    const {title}=req.body;
    console.log(title);
    res.redirect('/');
})

module.exports = router;