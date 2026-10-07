// Pide 8 enteros y cuenta cuántos son positivos, negativos y cero.

let numeros = [];
let pos = 0, neg = 0, cero = 0;

for (let i = 0; i < 8; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
}
// le pongo un positivo , un negativo y un cero.

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        pos++;
    } else if (numeros[i] < 0) {
        neg++;
    } else {
        cero++;
    }
}

console.log("Positivos:", pos);
console.log("Negativos:", neg);
console.log("Ceros:", cero);

