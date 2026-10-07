// Pide 7 números. Después pide un valor a buscar y muestra cuántas veces aparece.

let numeros = [];
// se llena el array de 7 numeros
for (let i = 0; i < 7; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
}

// se pide el valor a buscar
let buscar = parseInt(prompt("Valor a buscar:"));
let conteo = 0;

// y en este for se cuenta cuantas veces coincide con numeros[i]
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscar) {
        conteo++;
    }
}

console.log(`El valor ${buscar} aparece ${conteo} vez/veces.`);

