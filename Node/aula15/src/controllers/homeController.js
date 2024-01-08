// const HomeModel = require('../model/homeModel');

// HomeModel.create({
//     titulo:'Uma noite conturbada 3',
//     descricao:'descrição de uma noite de sono da raquelzinha 2',
//     usuario:'raquelzinha'
// }).then(dados => console.log(dados))
// .catch(e => console.log(e));

    // HomeModel.find({usuario:'raquelzinha'}).then(dados => console.log(dados))

exports.paginaInicial = (req,res) =>{
    console.log(req.flash('error'));
    console.log(req.flash('info'));
    console.log(req.flash('warning'));
    console.log(req.flash('success'));

    res.render('index')

};
exports.trataPost = (req,res) =>{
    res.send(req.body)
}


    