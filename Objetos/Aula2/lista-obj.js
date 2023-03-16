const cliente = {
    nome: "Rafa",
    idade: 23,
    email: "rafael@firma.com",
    telefone: ["13 991559992","13 997140479"],
}

cliente.enderecos = [{
    rua: 'R. Jaguatirica',
    numero: '1337',
    apartamento: true,
    complemento:'ap 934'
},]

cliente.enderecos.push({
    rua: 'R. Jaguatirica',
    numero: '1400',
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter((endereco) =>endereco.apartamento === true)

console.log(listaApenasApartamentos)

