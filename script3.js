// Muestra 1) Saludar, 2) Despedirse, 3) Mostrar tu nombre. Pide una opción y ejecuta la acción. Para la opción
// 3, pide previamente el nombre.

let opcion = prompt("Elige una opción:\n1) Saludar\n2) Despedirse\n3) Mostrar tu nombre");

if (opcion === "1") {
  alert("¡Holi!");
} else if (opcion === "2") {
  alert("¡Adiós bobo!");
} else if (opcion === "3") {
  let nombre = prompt("¿Como te llamas?");
  alert("Mi nombre es " + nombre);
} else {
  alert("Opción no válida");
}