// Pide números enteros hasta introducir 0- Cuenta pares e impares sin contar el 0.

let numero = Number(prompt("Introduce un número entero (0 para terminar):"));
let pares = 0;
let impares = 0;

// crea dos contadores iniciales en 0.
while (numero !== 0) {
    // mientras el numero introducido NO sea 0, se repite el bucle
    // % 2 devuelve el resto de dividir entre 2. si el resto es 0, el numero es par.
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
    numero = Number(prompt("Introduce un número entero (0 para terminar):"));
}

alert("Pares: " + pares + " | Impares: " + impares);

