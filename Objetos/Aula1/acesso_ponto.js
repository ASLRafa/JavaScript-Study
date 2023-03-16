const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com"
}

console.log(`o nome do cliente é ${cliente.nome}, tem ${cliente.idade} anos e seu cpf é ${cliente.cpf}`)

console.log(`os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)