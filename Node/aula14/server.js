require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
const path = require('path')
const {middleWaresGlobal} = require('./src/middlewares/middlewares');
const e = require('express');


mongoose.connect(process.env.connectionStringMODELO)
.then(()=>{
    console.log("conectei a base de dados")
    app.emit('pronto')
}).catch(e =>{console.log(e)});



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
