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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


app.use(express.urlencoded({extended:true}))


app.use(express.static('./public'))

const sessionOptions = session({
    secret:'asdasdasdasd',
    store: MongoStore.create({ mongoUrl: process.env.connectionStringMODELO }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24*7,
        httpOnly:true
    }    
});
app.use(sessionOptions);
app.use(flash());

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
