class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    };

    deposito(valor) {
        this.saldo += valor;
    };

    saque(valor){
        this.saldo -= valor
    }
};

let conta = new Conta(2000);
console.log(typeof conta);

conta.deposito(300);
console.log(conta);

conta.saque(800);
console.log(conta);