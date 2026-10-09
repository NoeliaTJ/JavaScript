// MiniReto. Analizador de notas con funciones
// 1. Crea un array de 5 notas y pide sus valores con for.
// 2. Crea calcularMedia(notas) y devuelve la media.
// 3. Crea obtenerMayor(notas).
// 4. Crea obtenerMenor(notas).
// 5. Crea contarAprobadas(notas).
// 6. Crea haySobresaliente(notas), que devuelva true si existe alguna nota >= 9.
// 7. Guarda los valores devueltos y muestra un resumen final.
// Objetivo del MiniReto: Separar el cálculo de la presentación: las funciones obtienen resultados y el código
// principal decide cómo mostrarlos.

// calcula y devuelve un valor con calcularMedia
function calcularMedia(notas) {
    // el for inicial recopila datos
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
}
// calcula y devuelve un valor con obtenerMayor
function obtenerMayor(notas) {
  let mayor = notas[0];
  for (let i = 1; i < notas.length; i++) {
    if (notas[i] > mayor) mayor = notas[i];
  }
  return mayor;
}
// calcula y devuelve un valor con obtenerMenor
function obtenerMenor(notas) {
  let menor = notas[0];
  for (let i = 1; i < notas.length; i++) {
    if (notas[i] < menor) menor = notas[i];
  }
  return menor;
}
// calcula y devuelve un valor con contarAprobadas
function contarAprobadas(notas) {
  let contador = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 5) contador++;
  }
  return contador;
}
// calcula y devuelve un valor con haySobresaliente
function haySobresaliente(notas) {
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 9) return true;
  }
  return false;
}

// flujo y presentación

const notas = [];
for (let i = 0; i < 5; i++) {
  notas[i] = parseFloat(prompt(`Nota ${i + 1}:`));
}

// Guardo los valores devueltos con const
const media      = calcularMedia(notas);
const mayor      = obtenerMayor(notas);
const menor      = obtenerMenor(notas);
const aprobadas  = contarAprobadas(notas);
const sobresal   = haySobresaliente(notas);

// se ve todo con los mensajes y con \n que es un salto de linea
console.log("\nResumen!");
console.log(`Notas:[${notas.join(", ")}]`);
console.log(`Media:${media}`);
console.log(`Mayor:${mayor}`);
console.log(`Menor:${menor}`);
console.log(`Aprobadas:${aprobadas} / 5`);
// ? es si es verdadero, usa el si o el no.
console.log(`Sobresaliente: ${sobresal ? "Sí" : "No"}`);


