const path= require('path');

const  express = require('express');

const app = express();
const errorController = require('./controllers/error');
const db = require('./util/database');

app.set('view engine','pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('select * from products')
.then(result => {
    console.log(result);
})
.catch(err =>{
    console.log(err);
});

//db.end();

app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page)



app.listen(3000);
