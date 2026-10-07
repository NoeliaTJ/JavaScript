// Pide 5 números y muestra el mayor utilizando el primer elemento como valor inicial

let numeros = [];

// Pedir 5 números y guardarlos en el array
for (let i = 0; i < 5; i++) {
  numeros[i] = parseFloat(prompt(`Introduce el número ${i + 1}:`));
}

// Uso el primer elemento como valor inicial del mayor
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("El mayor es:", mayor);

