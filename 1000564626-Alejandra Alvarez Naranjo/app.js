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
        console.log("Fondos insuficientes");
    }
};

const simularSemana = () => {
    for (let dia = 1; dia <= 7; dia++) {
        console.log(` Día ${dia}:`);
        registrarGasto(50);
    }
};

function diagnosticoFinanciero() {
    switch (true) {
        case gastosTotales > 300:
            console.log(" Excedes los gastos.");
            break;
        case gastosTotales > 150:
            console.log(" Gasta moderadamente.");
            break;
        default:
            console.log(" Has sido muy prudente con tus gastos.");
            break;
    }
}

function iniciarApp() {
    while (true) {
        let opcion = prompt(
`Seleccione una opción:
1. Registrar un ingreso
2. Registrar gasto
3. Simular una semana de gastos
4. Ver diagnóstico financiero
5. Mostrar balance actual
6. Salir`
        );

        switch (opcion) {
            case "1":
                let montoIngreso = parseFloat(prompt("Ingrese el monto del ingreso:"));
                registrarIngreso(montoIngreso);
                break;
            case "2":
                let montoGasto = parseFloat(prompt("Ingrese el monto del gasto:"));
                registrarGasto(montoGasto);
                break;
            case "3":
                simularSemana();
                break;
            case "4":
                diagnosticoFinanciero();
                break;
            case "5":
                mostrarBalance();
                break;
            case "6":
                console.log("👋 Gracias por usar tu banca en línea. ¡Hasta pronto!");
                return;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
}

iniciarApp();
