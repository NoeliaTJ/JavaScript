// Gestión de notas
// 1. Crea un array de 5 notas.
// 2. Pide las 5 notas una por una y guárdalas manualmente.
// 3. Muestra todas las notas.
// 4. Calcula la más alta y la más baja.
// 5. Calcula la media.
// 6. Si la media es 5 o superior, muestra "Aprueba"; si no, "Suspende".
// 7. Extra: cuenta aprobadas y suspensas. Si alguna nota vale 10, muestra "¡Excelente rendimiento!".
// Restricciones: No se puede utilizar ningún bucle, includes(), Math.max(), Math.min() ni arrays adicionales para
// resolver el análisis.
// Objetivo del MiniReto: Practicar acceso por índice, comparaciones y acumulación manual antes de automatizar
// el recorrido.


// 1. Array de 5 notas
let notas = [0, 0, 0, 0, 0];

// 2. Pedir y guardar manualmente, con un parsefloat para que admita decimales
notas[0] = parseFloat(prompt("Di la nota 1:"));
notas[1] = parseFloat(prompt("Di la nota 2:"));
notas[2] = parseFloat(prompt("Dí la nota 3:"));
notas[3] = parseFloat(prompt("Dime la nota 4:"));
notas[4] = parseFloat(prompt("Dime la nota 5:"));

// 3. Mostrar todas con un template, se me ocurre
console.log(`Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}, ${notas[3]}, ${notas[4]}`);

// 4. Más alta y más baja
let masAlta = notas[0];
let masBaja = notas[0];

if (notas[1] > masAlta) masAlta = notas[1];
if (notas[2] > masAlta) masAlta = notas[2];
if (notas[3] > masAlta) masAlta = notas[3];
if (notas[4] > masAlta) masAlta = notas[4];

if (notas[1] < masBaja) masBaja = notas[1];
if (notas[2] < masBaja) masBaja = notas[2];
if (notas[3] < masBaja) masBaja = notas[3];
if (notas[4] < masBaja) masBaja = notas[4];

console.log(`Más alta: ${masAlta}`);
console.log(`Más baja: ${masBaja}`);

// 5. Media
let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5;
console.log(`Media: ${media}`);

// 6. Aprueba o Suspende
if (media >= 5) {
  console.log("Aprueba");
} else {
  console.log("Suspende");
}

// 7. Extra: contar aprobadas y suspensas
let aprobadas = 0;
let suspensas = 0;

if (notas[0] >= 5) aprobadas++; else suspensas++;
if (notas[1] >= 5) aprobadas++; else suspensas++;
if (notas[2] >= 5) aprobadas++; else suspensas++;
if (notas[3] >= 5) aprobadas++; else suspensas++;
if (notas[4] >= 5) aprobadas++; else suspensas++;

console.log(`Aprobadas: ${aprobadas}, Suspensas: ${suspensas}`);

if (notas[0] === 10 || notas[1] === 10 || notas[2] === 10 || notas[3] === 10 || notas[4] === 10) {
  console.log("¡Super rendimiento!");
}

