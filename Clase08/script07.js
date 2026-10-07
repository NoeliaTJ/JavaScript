// Pide 5 números y crea un segundo array con el cuadrado de cada valor. Muéstralo.

let numeros = [];
let cuadrados = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
    cuadrados[i] = numeros[i] * numeros[i];
}
// se llena con numeros  con 5 valores
console.log("Array original:");
for (let i = 0; i < numeros.length; i++) {
    console.log(`numeros[${i}] = ${numeros[i]}`);
}
// y el mismo for se calcula el cuadrado
// de cada uno guardandolo en cuadrados[i]
// y ahora se recorren ambos para que se puedan ver

console.log("\nArray de cuadrados:");
for (let i = 0; i < cuadrados.length; i++) {
    console.log(`cuadrados[${i}] = ${cuadrados[i]}`);
}

