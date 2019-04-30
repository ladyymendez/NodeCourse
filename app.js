const path= require('path');

const  express = require('express');

const app = express();
const errorController = require('./controllers/error');
const { mongoConnect } = require('./util/database');

app.set('view engine','pug');
app.set('views', 'views');

 const adminRoutes = require('./routes/admin');
/*const shopRoutes = require('./routes/shop'); */


app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next)=>{
   /*  User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(console.log); */
    next();
})

app.use('/admin',adminRoutes);
/* app.use(shopRoutes); */

app.use(errorController.get404Page);

mongoConnect(() => {
    app.listen(3000);
})



