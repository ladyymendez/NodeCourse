const express= require('express');

const router = express.Router();

router.use('/add-product',(req,res,next) => {
    console.log("another middleware")
    
    //res.setHeader('Content-type/text');
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Poduct</button></button></form>");
});
router.post('/product', (req,res,next)=>{
    const {title}=req.body;
    console.log(title);
    res.redirect('/');
})

module.exports = router;