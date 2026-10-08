// Crea mostrarMenu(), sumar() y restar(). Utiliza un menú repetitivo 1 Sumar, 2 Restar, 0 Salir. Cada operación
// debe ejecutarse llamando a la función correspondiente.

function sumar(n1, n2) {
  const resultado = n1 + n2;
  console.log(`La suma es: ${n1} + ${n2} = ${resultado}`);
}

function restar(n1, n2) {
  const resultado = n1 - n2;
  console.log(`La resta es: ${n1} - ${n2} = ${resultado}`);
}

function mostrarMenu() {
  return parseInt(prompt(
    "1. Sumar\n2. Restar\n0. Salir\n\nElige una opción:"
  ));
}

let opcion;
do {
  opcion = mostrarMenu();
  switch (opcion) {
    case 1:
      const n1 = parseInt(prompt("Primer número:"));
      const n2 = parseInt(prompt("Segundo número:"));
      sumar(n1, n2);
      break;
    case 2:
      const a = parseInt(prompt("Primer número:"));
      const b = parseInt(prompt("Segundo número:"));
      restar(a, b);
      break;
    case 0:
      console.log("Hasta luego.");
      break;
    default:
      console.log("Opción no válida.");
  }
} while (opcion !== 0);

