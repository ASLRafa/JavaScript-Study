const express = require('express');
const app = express()

app.use(
    express.urlencoded(
        {
            extended:true
        }
        )
        )

app.get('/', (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`)})

app.get('/testes/:id_usuarios?/:parametro?',(req,res)=>{
    // console.log(req.params)
    // console.log(req.query)
    res.send('oi')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(`o que voce me enviou foi: ${req.body.nome}`)
})

app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato')
})



app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})