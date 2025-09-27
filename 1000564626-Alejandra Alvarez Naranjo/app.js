let nombreUsuario = prompt("Ingrese su nombre de usuario");
let saldo = 1000;
let gastosTotales = 0;

function mostrarBalance() {
    console.log(`Hola, ${nombreUsuario}, su saldo actual es de: $${saldo}`);
}

const registrarIngreso = function (montoIngreso) {
    saldo += montoIngreso;
    console.log(`Se ha registrado un ingreso de: $${montoIngreso}`);
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
const simularSemana = () => {


    for (let dia = 1; dia < 8; dia++) {
        console.log(`Día ${dia}:`);
        registrarGasto(50);
    }
};
simularSemana();


function diagnosticoFinanciero() {
    if (gastosTotales > 300) {
        console.log("Tu salud financiera es excelente.");
    } else {
        console.log("Alerta: Revisa tus gastos, podrías estar gastando demasiado.");
    }
}
function diagnosticoFinanciero() {
    switch (true) {
        case gastosTotales > 300:
            console.log("excedes los gastos");
            break;
        case gastosTotales > 150:
            console.log("gasta moderadamente");
            break;
        default:
            console.log("has sido muy prudente con tus gastos");
            break;
    }
}




