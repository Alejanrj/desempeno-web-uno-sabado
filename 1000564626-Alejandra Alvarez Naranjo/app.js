nombreUsuario = prompt("Ingrese su nombre de usuario");
saldo = 1000000; 
gastosTotales = 0;

alert("Bienvenido " + nombreUsuario + " a su banca en línea"); 

function mostrarBalance() {
    console.log("Hola, [nombreUsuario], su saldo actual es de: $[saldo]");
}
mostrarBalance();
