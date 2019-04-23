const path= require('path');

const  express = require('express');

const app = express();
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

app.set('view engine','pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next)=>{
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(console.log);
})

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

Product.belongsTo(User,{constrains: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

sequelize
.sync()
.then(result => {
    return User.findByPk(1);
    //console.log(result);
})
.then(user => {
    if(!user){
        return User.create({name: 'Lady', email: 'ladyy.mendez@gmail.com'});
    }
    return user;
})
.then(user => {
    //console.log(user);
    app.listen(3000);
}) 
.catch(console.log);


