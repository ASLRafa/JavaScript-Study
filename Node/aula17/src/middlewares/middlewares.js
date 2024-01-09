exports.middleWaresGlobal = (req,res,next)=>{
    res.locals.umaVariavelLocal = 'Este é o valor da variável local';
    next();
}

exports.checkCsrfError = (err,req,res,next) =>{
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}