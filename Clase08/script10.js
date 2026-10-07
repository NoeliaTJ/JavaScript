// Pide 5 números y crea un segundo array con los valores en orden inverso. Muéstralo.

// son arrays vacíos
let numeros = [];
let inverso = [];

// se le dice que i empieza en valor de 0, 
// y que sea menor o igual que 0 y se va sumando 1
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
}

for (let i = 0; i < numeros.length; i++) {
    inverso[i] = numeros[numeros.length - 1 - i];
}

console.log("Este es un array original:");
for (let i = 0; i < numeros.length; i++) {
    console.log(`numeros[${i}] = ${numeros[i]}`);
}
// el inverso copia desde el final 
console.log("\nEste es un array invertido:");
for (let i = 0; i < inverso.length; i++) {
    console.log(`inverso[${i}] = ${inverso[i]}`);
}

