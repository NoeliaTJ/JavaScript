// Pide saldo inicial y una operación: 1 ingresar, 2 retirar, 3 ver saldo. El menú se ejecuta una sola vez.
// Comprueba fondos al retirar.

let saldo = parseFloat(prompt("Introduce el saldo inicial:"));
let opcion = parseInt(prompt("1 - Ingresar\n2 - Retirar\n3 - Ver saldo\n\nElige una opción:"));

switch (opcion) {
    case 1:
        let ingreso = parseFloat(prompt("Introduce el monto a ingresar:"));
        saldo += ingreso;
        console.log("Saldo actual: " + saldo);
        break;
    case 2:
        let retiro = parseFloat(prompt("Introduce el monto a retirar:"));
        if (retiro <= saldo) {
            saldo -= retiro;
            console.log("Saldo actual: " + saldo);
        } else {
            console.log("Fondos insuficientes");
        }
        break;
    case 3:
        console.log("Saldo actual: " + saldo);
        break;
    default:
        console.log("Opción inválida");
        break;
}   