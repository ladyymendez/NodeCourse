const path= require('path');

const  express = require('express');

const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res, next)=>{
    res.render('404', {pageTitle: 'Page not Found', path:""});
})



app.listen(3000);
