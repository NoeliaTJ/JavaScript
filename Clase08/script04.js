// Pide 5 notas, guárdalas y calcula la media.

let notas = [];

// Pido 5 notas y guardarlas en el array
// se suma con i++ i+1
for (let i = 0; i < 5; i++) {
  notas[i] = parseFloat(prompt(`di la nota ${i + 1}:`));
}

// Calculo la media
let suma = 0;
// que sea i MENOR que notas?
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

let media = suma / notas.length;
console.log("La media es:", media);

