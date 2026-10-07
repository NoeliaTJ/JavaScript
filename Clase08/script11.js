// Pide 8 números y un valor a buscar. Muestra todas las posiciones en las que aparece, indicando índice y
// posición humana. Si no aparece, indícalo.

let numeros = [];

for (let i = 0; i < 8; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
}

let buscar = parseInt(prompt("Valor a buscar:"));
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscar) {
        console.log(`Encontrado en índice ${i} (posición ${i + 1}).`);
        encontrado = true;
    }
}

if (!encontrado) {
    console.log(`El valor ${buscar} no aparece en el array.`);
}

