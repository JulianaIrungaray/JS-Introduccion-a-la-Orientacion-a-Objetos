export class CuentaCorriente
{
    cliente;
    numero;
    agencia;
    #saldo;

    constructor(){
        this.cliente = null;
        this.numero = '';       
        this.agencia = '';
        this.#saldo = 0;
    }

    depositoEnCuenta (valor) {//this define la cuenta corriente actual 
        if (valor > 0) {
           this.#saldo += valor; 
           return this.#saldo;
        }       
    }

    retirarDeCuenta(valor) { //Retiro de dinero
        if (valor <= this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }   
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}