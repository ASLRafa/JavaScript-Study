exports.middleWaresGlobal = (req,res,next)=>{
    if(req.body.cliente){
        console.log()
        console.log(`vi que vc postou ${req.body.cliente}`)
    }
    next()
}