const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            prods: products, 
            pageTitle:'Shop', 
            path: '/products', 
            hasProducts: products.length >0 ,
            activeShop: true
        });
    }); 
};

exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId,product => {
        console.log("prodId",product);
        res.render('shop/product-detail',
        {
            product: product,
            pageTitle:'Product Detail', 
            path: '/product'
        })
    })
    //res.redirect('/');
};

exports.getIndex= (req,res,next) =>{
    Product.fetchAll(products => {
        res.render('shop/index',{
            prods: products, 
            pageTitle:'Shop', 
            path: '/', 
            hasProducts: products.length >0 ,
            activeShop: true
        });
    }); 
};

exports.getCart = (req,res, next) => {
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.postCart = (req,res, next) => {
   const {productId}=req.body;
   console.log("productID",productId);
    Product.findById(productId,(product)=>{
        Cart.addProduct(productId,product.price)
    })
   res.redirect('/cart');
}


exports.getOrders = (req,res, next) => {
    res.render('shop/orders',{
        path: '/orders',
        pageTitle: 'Your Cart'
    })
}


exports.getCheckout = (req,res, next) => {
    res.render ('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}