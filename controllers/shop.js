const Product = require('../models/product');
/* 
const Cart = require('../models/cart');
const Order = require('../models/order'); */

exports.getProducts = (req,res,next) => {
    Product.fetchAll()
    .then(products => {
        res.render('shop/product-list',{
            prods: products, 
            pageTitle:'ALL Products', 
            path: '/products', 
            activeShop: true
        });
    })
    .catch(console.log);
};

exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId;
    //res.redirect('/');
    /*Product.findAll({where: {id:prodId}})
    .then(products => {
        res.render('shop/product-detail',
        {
            product: products[0],
            pageTitle:products[0].title, 
            path: '/products'
        })
    })
    .catch(console.log);*/

    Product.findById(prodId)
    .then(product => {
        res.render('shop/product-detail',
        {
            product: product,
            pageTitle:'Product Detail', 
            path: '/products'
        })
    })
    .catch(console.log); 

};

exports.getIndex = (req,res,next) =>{
    Product.fetchAll()
    .then(products => {
        console.log(products)
        res.render('shop/index',{
            prods: products, 
            pageTitle:'Shop', 
            path: '/', 
        });
    })
    .catch(console.log);
};

exports.getCart = (req,res, next) => {
    req.user
    .getCart()
    .then(products => { 
        res.render('shop/cart',{
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
        })
    })
    .catch(console.log)

    /* Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products){
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if(cartProductData){
                    console.log(product,"EEEEEEEEEEEEEEE", cartProductData);
                    cartProducts.push({productData:product, qty:cartProductData.qty});
                }
            }
            res.render('shop/cart',{
                path: '/cart',
                pageTitle: 'Your Cart',
                products : cartProducts
            })
        });
    }); */
}

exports.postCart = (req,res, next) => {
    const {productId}=req.body; 
    Product.findById(productId).then(product => { 
        return req.user.addToCart(product);
    }).then(result => { 
        console.log(result);
        res.redirect('/cart');
    })
}

exports.postCartDeleteProdct = (req,res,next) => {
    const prodId = req.body.productId;
    req.user
    .deleteItemFromCart(prodId)
    .then(result => {
        res.redirect('/cart');
    })
    .catch(console.log);
}

exports.postOrder = (req,res,next) => {
    req.user
    .addOrder()
    .then(result => { 
        res.redirect('/orders');
    })
    .catch(console.log);
}

exports.getOrders = (req,res, next) => {
    req.user
    .getOrders()
    .then(orders => {
        res.render('shop/orders', {
            path: '/orders',
            pageTitle: 'Your Cart',
            orders: orders
        })
    })
    .catch(console.log);
}


exports.getCheckout = (req, res, next) => {
    res.render ('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}