const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com"
}

console.log(`o nome do cliente é ${cliente.nome}, tem ${cliente["idade"]} anos e seu cpf é ${cliente.cpf}`)


const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})