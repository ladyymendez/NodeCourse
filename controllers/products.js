const products = [];

exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{
        pageTitle:'Add Product', 
        path: '/admin/add-product'

    })
};


exports.postAddProduct = (req,res,next)=>{
    const {title}=req.body;
    console.log(title);
    products.push({title: title});
    res.redirect('/');
};

exports.getProducts = (req,res,next) => {
     res.render('shop',{
        prods: products, 
        pageTitle:'Shop', 
        path: '/', 
        hasProducts: products.length >0 ,
        activeShop: true
    });
};
