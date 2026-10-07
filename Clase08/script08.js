// Pide 6 números y determina si están ordenados de menor a mayor comparando cada elemento con el
// siguiente.

let numeros = [];

// se recorren los seis elementos
for (let i = 0; i < 6; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
}

let ordenado = true;

for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
        ordenado = false;
        // se rompe el bucle con break
        break;
    }
}

if (ordenado) {
    console.log("Los números están ordenados de menor a mayor.");
} else {
    console.log("Los números NO están ordenados de menor a mayor.");
}

