let nombreUsuario = prompt("Ingrese su nombre de usuario");
let saldo = 1000000; 
let gastosTotales = 0;

alert("Bienvenido " + nombreUsuario + " a su banca en línea"); 

function mostrarBalance() {
    console.log(`Hola, ${nombreUsuario}, su saldo actual es de: $${saldo}`);
}

const registrarIngreso = function(montoIngreso) {
    console.log(`Se ha registrado un ingreso de: $${montoIngreso}`);
    saldo += montoIngreso;
    console.log(`Su nuevo saldo es de: $${saldo}`);
}

const registrarGasto = (montoGasto) => {
    if (montoGasto <= saldo) {
        saldo -= montoGasto;
        gastosTotales += montoGasto;
        console.log(`Gasto registrado correctamente: $${montoGasto}`);
        console.log(`Saldo restante: $${saldo}`);
        console.log(`Gastos totales: $${gastosTotales}`);
    } else {
        console.log(" Fondos insuficientes");
    }
};
