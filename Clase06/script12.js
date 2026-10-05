// Pide cuántos días va a ahorrar. El día 1 ahorra 1 €, el día 2 ahorra 2 €, etc. Muestra el ahorro diario y el total.

// pide el número de días
let n = parseInt(prompt("¿Cuántos días vas a ahorrar?"));
// acumulador para el ahorro total
let total = 0;

// recorre cada día desde 1 hasta n
for (let dia = 1; dia <= n; dia++) {
// el día DIA se ahorran DIA euros, asi que se suma DIA al total
    total += dia;
    console.log("Día " + dia + ": " + dia + " €");
}

// después del bucle, muestra la suma total.
console.log("Total ahorrado: " + total + " €");
