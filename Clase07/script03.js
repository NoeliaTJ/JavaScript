// Crea un array de 4 números, pídelos al usuario y muestra únicamente el último utilizando length.

let numeros = [];

for (let i = 0; i < 4; i++) {
  numeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
}

console.log(numeros[numeros.length - 1]);

