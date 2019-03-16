const  express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/add-product',(req,res,next) => {
    console.log("another middleware")
    
    //res.setHeader('Content-type/text');
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Poduct</button></button></form>");
});
app.use('/product', (req,res,next)=>{
    const {title}=req.body;
    console.log(title);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    console.log("another middleware")
    res.send("Hello from express");
});

app.listen(3000);
