const cliente = {
    nome: "Rafa",
    idade: 23,
    email: "rafael@firma.com",
    telefone: ["13 991559992","13 997140479"],
    saldo: 200,

    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("Saldo Insuficiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento Realizado. Novo saldo ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(50);
cliente.efetuaPagamento(160);