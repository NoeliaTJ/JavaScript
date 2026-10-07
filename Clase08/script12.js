// Pide 6 números, calcula la media y vuelve a recorrer el array para mostrar los valores superiores a la media y
// contar cuántos son.

let numeros = [];

// este calcula la suma y se divide entre seis para obtener la media
for (let i = 0; i < 6; i++) {
    numeros[i] = parseInt(prompt(`numeros[${i}]:`));
}

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
let media = suma / numeros.length;

console.log(`Media: ${media}`);

// este recorre el array otra vez
// y muestra cada valor que supere la media y va aumentando
let contador = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
        console.log(`numeros[${i}] = ${numeros[i]} (superior a la media)`);
        contador++;
    }
}

console.log(`Valores superiores a la media: ${contador}`);

