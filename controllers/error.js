exports.get404Page = (req,res, next)=>{
    res.render('404', {pageTitle: 'Page not Found', path:""});
}