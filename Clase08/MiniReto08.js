// MiniReto. Análisis de puntuaciones de partidas
// 1. Crea un array para 8 puntuaciones y pídelas con for.
// 2. Muestra todas las puntuaciones.
// 3. Calcula puntuación total y media.
// 4. Encuentra mayor y menor.
// 5. Cuenta cuántas partidas están en la media o por encima.
// 6. Pide una puntuación y cuenta cuántas veces aparece.
// 7. Crea un segundo array con las puntuaciones en orden inverso y muéstralo.
// 8. Extra: muestra el número de partida en la que se consiguió la puntuación máxima.
//Objetivo del MiniReto: Integrar los principales algoritmos de recorrido manual con arrays y for.


let puntuaciones = [];

// 1. Pedir puntuaciones
for (let i = 0; i < 8; i++) {
    puntuaciones[i] = parseInt(prompt(`Puntuación de la partida ${i + 1}:`));
}

// 2. Mostrar todas
console.log("\n--- Puntuaciones ---");
for (let i = 0; i < puntuaciones.length; i++) {
    console.log(`Partida ${i + 1}: ${puntuaciones[i]}`);
}

// 3. Total y media
let total = 0;
for (let i = 0; i < puntuaciones.length; i++) {
    total += puntuaciones[i];
}
let media = total / puntuaciones.length;
console.log(`\nTotal: ${total}`);
console.log(`Media: ${media}`);

// 4. Mayor y menor
let mayor = puntuaciones[0];
let menor = puntuaciones[0];
let partidaMax = 0;

for (let i = 1; i < puntuaciones.length; i++) {
    if (puntuaciones[i] > mayor) {
        mayor = puntuaciones[i];
        partidaMax = i;
    }
    if (puntuaciones[i] < menor) {
        menor = puntuaciones[i];
    }
}
console.log(`\nMayor: ${mayor}`);
console.log(`Menor: ${menor}`);

// 5. Partidas en la media o por encima
let enMedia = 0;
for (let i = 0; i < puntuaciones.length; i++) {
    if (puntuaciones[i] >= media) {
        enMedia++;
    }
}
console.log(`Partidas en la media o por encima: ${enMedia}`);

// 6. Buscar una puntuación
let buscar = parseInt(prompt("\nPuntuación a buscar:"));
let conteo = 0;
for (let i = 0; i < puntuaciones.length; i++) {
    if (puntuaciones[i] === buscar) {
        conteo++;
    }
}
console.log(`La puntuación ${buscar} aparece ${conteo} vez/veces.`);

// 7. Array invertido
let inverso = [];
for (let i = 0; i < puntuaciones.length; i++) {
    inverso[i] = puntuaciones[puntuaciones.length - 1 - i];
}
console.log("\n--- Puntuaciones en orden inverso ---");
for (let i = 0; i < inverso.length; i++) {
    console.log(`inverso[${i}] = ${inverso[i]}`);
}

// 8. Extra: partida de la puntuación máxima
console.log(`\nLa puntuación máxima (${mayor}) se consiguió en la partida ${partidaMax + 1}.`);

