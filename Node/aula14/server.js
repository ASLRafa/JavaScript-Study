require('dotenv').config();

const express = require('express');
const app = express()
const mongoose = require('mongoose');


mongoose.connect(process.env.connectionString)
.then(()=>{
    console.log("conectei a base de dados")
    app.emit('pronto')
});

const routes = require('./routes')
const path = require('path')
const {middleWaresGlobal} = require('./src/middlewares/middlewares')


app.use(express.urlencoded({extended:true}))


app.use(express.static('./public'))

app.set('views',path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')
app.use(middleWaresGlobal)
app.use(routes)

app.on('pronto',()=> {
    app.listen(3000, ()=>{
        console.log('Acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})
