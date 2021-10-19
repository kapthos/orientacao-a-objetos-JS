export class ContaCorrente { //criando classe ContaCorrente (molde do objeto)
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