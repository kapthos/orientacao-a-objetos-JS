class Cliente {
    nome;
    cpf;
    agencia;
    conta;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Juan";
cliente1.cpf = 11122233350;
cliente1.agencia = 1001;
cliente1.conta = 7894561;
cliente1.saldo = 0;

cliente2.nome = "Talita";
cliente2.cpf = 55522233350;
cliente2.agencia = 1001;
cliente2.conta = 4569876;
cliente2.saldo = 0;

console.log(cliente1, cliente2);