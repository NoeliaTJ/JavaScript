// Pide un número y muestra su tabla del 1 al 10 con for. 

// parseInt convierte letra a número.
let numero = parseInt(prompt("Introduce un número:"));

// se muestra cada multiplicación
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}