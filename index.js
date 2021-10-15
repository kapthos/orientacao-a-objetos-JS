class Cliente { //criando classe Cliente (molde do objeto)
    nome;
    cpf; 
}
class ContaCorrente { //criando classe ContaCorrente (molde do objeto)
    agencia;
    conta;
    saldo;
    sacar(valor){                           //Nome do método e entre parenteses será o valor necessário para fazer a operação
        if (correnteJuan.saldo >= valor){
            correnteJuan.saldo -= valor
        }
    }
    depositar(valor){                       //Criando método depositar dentro da classe para ser usada nas instancias.
        if (valor > 0){
            correnteJuan.saldo += valor;
        }
    }
}
const cliente1 = new Cliente(); //Criando o objeto cliente1 (instanciado) à partir do molde de cima
cliente1.nome = "Juan";
cliente1.cpf = 11122233350;

const correnteJuan = new ContaCorrente();
correnteJuan.agencia = 1001;
correnteJuan.conta = 7894561;
correnteJuan.saldo = 0;

correnteJuan.saldo = 100;       // adicionando saldo à conta
correnteJuan.sacar(50);        // chamando o método SACAR criado lá em cima e informando o VALOR especificado
correnteJuan.depositar(300);


//////////////

const cliente2 = new Cliente();
cliente2.nome = "Talita";
cliente2.cpf = 55522233350;

const correnteTalita = new ContaCorrente();
correnteTalita.agencia = 1001;
correnteTalita.conta = 4569876;
correnteTalita.saldo = 0;


console.log(correnteJuan.saldo);