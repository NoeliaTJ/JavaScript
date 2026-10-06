// Pide 5 números y muestra el mayor sin utilizar bucles ni métodos automáticos.

let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
}
// creo el array
let mayor = numeros[0];

if (numeros[1] > mayor) mayor = numeros[1];
if (numeros[2] > mayor) mayor = numeros[2];
if (numeros[3] > mayor) mayor = numeros[3];
if (numeros[4] > mayor) mayor = numeros[4];

// se muestra aquí
console.log(`El mayor es: ${mayor}`);



