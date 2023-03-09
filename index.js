import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';


const cliente = new Cliente();
cliente.nombreCliente = 'Marcela';
cliente.dniCliente = '123234';
cliente.rutCliente = '65756';

const cuentaCliente = new CuentaCorriente();
cuentaCliente.numero = '1';
cuentaCliente.agencia = '001';
cuentaCliente.cliente = cliente;


let saldo = cuentaCliente.verSaldo(); 

saldo = cuentaCliente.depositoEnCuenta(150); 
console.log("El saldo actual de cliente 1 es de " + saldo);


const cliente2 = new Cliente();
cliente2.nombreCliente = 'Pedro';
cliente2.dniCliente = '1232345';
cliente2.rutCliente = '657678';

const cuentaClienteDestino = new CuentaCorriente();
cuentaClienteDestino.numero = '2';
cuentaClienteDestino.agencia = '002';
cuentaClienteDestino.cliente = cliente2;


cuentaCliente.transferirParaCuenta(100,cuentaClienteDestino);
const saldoDestino=cuentaClienteDestino.verSaldo();
console.log("El saldo actual de cliente 2 es de " + saldoDestino);

const saldoCliente1=cuentaCliente.verSaldo();
console.log("El saldo después de la transferencia " + saldoCliente1);