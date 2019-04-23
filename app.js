const path= require('path');

const  express = require('express');

const app = express();
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require("./models/product");
const User = require("./models/user");

app.set('view engine','pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

Product.belongsTo(User,{constrains: true, onDelete: 'CASCADE'});
User.hasMany(Product);
sequelize
.sync({force: true})
.then(result => {
    //console.log(result);
    app.listen(3000);
}) 
.catch(console.log);


