const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        pageTitle:'Add Product', 
        path: '/admin/add-product'

    })
};


exports.postAddProduct = (req,res,next)=>{
    const {
        title,
        imageUrl,
        price,
        description
    }=req.body;
    console.log(title);
    console.log(imageUrl, price, description);
    const product = new Product(title,imageUrl,price,description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('admin/products',{
            prods: products, 
            pageTitle:'Admin Products', 
            path: '/admin/products', 
        });
    }); 
}