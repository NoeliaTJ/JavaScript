// 1. Pide un saldo inicial.
// 2. Muestra un menú repetitivo: 1 Ingresar, 2 Retirar, 3 Consultar saldo, 0 Salir.
// 3. Repite mientras la opción sea distinta de 0.
// 4. Al ingresar, la cantidad debe ser mayor que 0; si no, vuelve a pedirla con while.
// 5. Al retirar, la cantidad debe ser mayor que 0; si no, vuelve a pedirla con while.
// 6. Solo se puede retirar si hay saldo suficiente.
// 7. Cuenta cuántos ingresos válidos y cuántas retiradas válidas se realizan.
// 8. Al salir, muestra saldo final, número de ingresos y número de retiradas.
// Objetivo del MiniReto: Integrar while con if, switch, validación, contadores y modificación de variables.


// los contadores que empiezan en 0 y se incrementan cada vez que hay una operacion válida.
let saldo = parseFloat(prompt("Introduce tu saldo inicial:"));
let opcion;
let ingresos = 0;
let retiradas = 0;

// BUCLE PRINCIPAL: repite mientras no elija "0 Salir" ---
// este do while es un bucle principal: ejecuta el men´ú al menos una vez y se repite cuando la opcion no sea 0.
do {
    // Menú
    opcion = parseInt(prompt("=== MENÚ ===\n1. Ingresar\n2. Retirar\n3. Consultar saldo\n0. Salir\n\nElige una opción:"));

    switch (opcion) {

        case 1: // ingresar dinerito
            let cantidad = parseFloat(prompt("Di la cantidad a ingresar:"));

            // Validación: debe ser mayor que 0
            while (cantidad <= 0) {
                alert("Cantidad inválida. Debe ser mayor que 0.");
                cantidad = parseFloat(prompt("Di la cantidad a ingresar:"));
            }

            saldo += cantidad;   // Suma al saldo
            ingresos++;          // Aumenta el contador de ingresos
            alert("Ingreso realizado. Saldo actual: " + saldo);
            break;

        case 2: // retirar dinerito
            let retiro = parseFloat(prompt("Pon la cantidad a retirar:"));

            // Validación: debe ser mayor que 0
            while (retiro <= 0) {
                alert("Cantidad inválida. Debe ser mayor que 0.");
                retiro = parseFloat(prompt("Di la cantidad a retirar:"));
            }

            // Validación: saldo sufi o insufi
            if (retiro > saldo) {
                alert("Saldo insuficiente. Tienes: " + saldo);
            } else {
                saldo -= retiro;   // Resta del saldo
                retiradas++;       // Aumenta el contador de retiradas
                alert("Retiro realizado. Saldo actual: " + saldo);
            }
            break;

        case 3: // Consultar la pobreza xDDD
            alert("Tu saldo actual es: " + saldo);
            break;

        case 0: // Salir para romper el bucle
            break;
            // coge cualquier opción no valida.
        default:
            alert("Opción no válida. Elige 0, 1, 2 o 3.");
    }

} while (opcion !== 0);

// RESUMEN FINAL para mostrar el saldo y el total
alert("=== RESUMEN ===\nSaldo final: " + saldo +
      "\nIngresos realizados: " + ingresos +
      "\nRetiros realizados: " + retiradas);   