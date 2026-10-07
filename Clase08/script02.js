// Pide 5 números, guárdalos en un array y calcula la suma recorriéndolo con for

// 1. Crear el array y pedir los valores
const numeros = [];
for (let i = 0; i < 5; i++) {
  numeros[i] = Number(prompt(`Introduce el número ${i + 1}:`));
}

// 2. Calcular la suma recorriendo el array
// suma se inicializa en 0 antes del bucle
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
// en cada iteración, se va acumulando el valor de la posición actual.
// al acabar el for, suma tiene la suma de los cinco num.
suma += numeros[i];
}

console.log(`La suma es: ${suma}`);

// la suma deberia de dar 150...
