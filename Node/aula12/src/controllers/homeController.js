exports.paginaInicial = (req,res) =>{
    res.render('index')
};
exports.trataPost = (req,res) =>{
    res.send('Ei, Sou sua nova rota de POST')
}


    