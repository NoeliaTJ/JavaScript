// Pide un entero positivo e indica si es primo. Considera primo un número mayor que 1 con exactamente dos
// divisores positivos.

// Pide un número entero y lo guarda en n.
let n = parseInt(prompt("Dime un entero positivo:"));

// Booleano que parte asumiendo que n es primo
let esPrimo = true;
// 0 y 1 no son primos, asique son 'false'
if (n <= 1) {
    esPrimo = false;
} else {
    // prueba todos los posibles divisores desde 2 hasta n-1
    for (let i = 2; i <= n - 1; i++) {
// si i divide a n, entonces, n tiene mas de dos divisores. NO es primo.
        if (n % i === 0) {
            esPrimo = false;
// sale del bucle
            break;
        }
    }
}
// alert muestra el resultado según el valor del booleano
if (esPrimo) {
    alert(n + " es primo");
} else {
    alert(n + " no es primo");
}