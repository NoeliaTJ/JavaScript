// MiniReto. Menú de videojuego modular
// 1. Pide el nombre del jugador y su nivel.
// 2. Crea un array de 3 objetos del inventario.
// 3. Crea variables vida y energía.
// 4. Muestra un menú repetitivo: 1 Jugador, 2 Inventario, 3 Estadísticas, 0 Salir.
// 5. Crea y usa mostrarMenu(), mostrarJugador(nombre, nivel), mostrarInventario(inventario) y
// mostrarEstadisticas(vida, energia).
// 6. El código principal debe encargarse sobre todo del flujo y delegar la presentación en funciones.
// Objetivo del MiniReto: Practicar modularización: el flujo general coordina y cada función se ocupa de una tarea
// concreta

function mostrarMenu() {
  return parseInt(prompt(
    "1. Jugador\n2. Inventario\n3. Estadísticas\n0. Salir\n\nElige una opción:"
  ));
}

function mostrarJugador(nombre, nivel) {
  console.log(`\n--- Jugador ---`);
  console.log(`Nombre: ${nombre}`);
  console.log(`Nivel:  ${nivel}`);
}

function mostrarInventario(inventario) {
  console.log(`\n--- Inventario ---`);
  inventario.forEach((item, i) => {
    console.log(`${i + 1}. ${item.nombre}  (x${item.cantidad})`);
  });
}

function mostrarEstadisticas(vida, energia) {
  console.log(`\n--- Estadísticas ---`);
  console.log(`Vida:     ${vida}`);
  console.log(`Energía:  ${energia}`);
}

// === Código principal: flujo ===

const nombre = prompt("Nombre del jugador:");
const nivel  = parseInt(prompt("Nivel inicial:"));

const inventario = [
  { nombre: "Espada",    cantidad: 1 },
  { nombre: "Poción",    cantidad: 3 },
  { nombre: "Escudo",    cantidad: 1 }
];

let vida    = 100;
let energia = 50;

let opcion;
do {
  opcion = mostrarMenu();
  switch (opcion) {
    case 1: mostrarJugador(nombre, nivel);         break;
    case 2: mostrarInventario(inventario);          break;
    case 3: mostrarEstadisticas(vida, energia);    break;
    case 0: console.log("Hasta luego, ¡nos vemos en la próxima partida!"); break;
    default: console.log("Opción no válida.");
  }
} while (opcion !== 0);



