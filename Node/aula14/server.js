const express = require('express');
const app = express()
const mongoose = require('mongoose');
const connectionString = ''
mongoose.connect(connectionString, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('agora ocorreu'))

const routes = require('./routes')
const path = require('path')
const {middleWaresGlobal} = require('./src/middlewares/middlewares')


app.use(express.urlencoded({extended:true}))


app.use(express.static('./public'))

app.set('views',path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')
app.use(middleWaresGlobal)
app.use(routes)


app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})