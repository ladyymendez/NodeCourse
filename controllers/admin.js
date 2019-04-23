const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/edit-product',{
        pageTitle:'Add Product', 
        path: '/admin/add-product',
        editing: false
    })
};


exports.postAddProduct = (req,res,next)=>{
    const {
        title,
        imageUrl,
        price,
        description
    }=req.body;
    Product.create({
        title:title,
        price:price,
        imageUrl: imageUrl,
        description: description
    })
    .then(result => {
        console.log("Created Product")
        //console.log(result);
    })
    .catch(console.log);
};

exports.getEditProduct = (req,res,next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByPk(prodId)
    .then(product =>{
        if(!product){
            return res.redirect('/');
        }
        res.render('admin/edit-product',{
            pageTitle:'Edit Product', 
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    })
    .catch(console.log);    
    
};

exports.postEditProduct = (req,res,next) => {
    const {productId,
            title,
            imageUrl,
            price,
            description} = req.body;
    Product.findByPk(productId)
    .then(product => {
        product.title = title;
        product.price = price;
        product.description = description;
        product.imageUrl = imageUrl;
        return product.save();
    })
    .then(result => {
        console.log("Updated product!");
        res.redirect('/admin/products');
    })
    .catch(console.log);

};

exports.deleteProduct = (req,res,next) => {
    const {productId} = req.body;
    console.log(`Delete ${productId}`)
    Product.delete(productId);
    res.redirect('/admin/products');
}
exports.getProducts = (req,res,next) => {
    Product.findAll()
    .then(products => {
        res.render('admin/products',{
            prods: products, 
            pageTitle:'Admin Products', 
            path: '/admin/products', 
        });
    })
    .catch(console.log);
}