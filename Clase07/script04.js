// Pide 5 números y muestra el primero, el tercero y el quinto

let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
}

console.log(`Primer número: ${numeros[0]}`);
console.log(`Tercer número: ${numeros[2]}`);
console.log(`Quinto número: ${numeros[4]}`);
