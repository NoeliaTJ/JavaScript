// Pide 5 números y muestra el menor sin utilizar bucles

let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`pon el número ${i + 1}:`));
}

let menor = numeros[0];

if (numeros[1] < menor) menor = numeros[1];
if (numeros[2] < menor) menor = numeros[2];
if (numeros[3] < menor) menor = numeros[3];
if (numeros[4] < menor) menor = numeros[4];

console.log(`El menor es: ${menor}`);
