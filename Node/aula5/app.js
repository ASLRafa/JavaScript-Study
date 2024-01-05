const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');


const escreve = require('./modules/escrever')
const ler = require('./modules/ler')


// const pessoas = [
//     {nome:'João'},
//     {nome:'Rafa'},
//     {nome:'Vava'},
//     {nome:'Asas'},
//     {nome:'Jesus'},
// ]

// const json = JSON.stringify(pessoas,'',2);

// escreve(caminhoArquivo, json)

async function lerArquivo(caminho){
    const arquivo = await ler(caminho)
    renderizaDados(arquivo)
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val))
   
}

lerArquivo(caminhoArquivo)