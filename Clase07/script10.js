// Pide 5 números y crea un segundo array con el doble de cada valor. No utilices bucles.

let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
}
// aquí creo el segundo array,
// asignando cada posición con el valor x2
let doble = [
  numeros[0] * 2,
  numeros[1] * 2,
  numeros[2] * 2,
  numeros[3] * 2,
  numeros[4] * 2
];

console.log(doble);   