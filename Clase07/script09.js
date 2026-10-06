// Pide 4 números, intercambia el primero con el último mediante una variable auxiliar y muestra el array
// resultante.

// corchetes son arrays
let numeros = [];

for (let i = 0; i < 4; i++) {
    //parseInt convierte el número en string
  numeros[i] = parseInt(prompt(`pon el número ${i + 1}:`));
}

let aux = numeros[0];
numeros[0] = numeros[3];
numeros[3] = aux; // aux es auxiliar

// muestra los números
console.log(numeros);
