
/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');

const cliente2 = new Cliente('Maria','16979808','8989');


const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');

const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual (CuentaLeonardo) '+saldo);

console.log (cuentaDeMaria.cliente);
console.log(cuentaDeLeonardo.cliente);


