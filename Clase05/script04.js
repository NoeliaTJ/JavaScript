// Muestra 1 Saludar, 2 Despedirse, 3 Mostrar OK. Repite la lectura hasta que sea 1, 2 o 3 y después ejecuta la
// acción con switch.

let opcion;
do {
    // \n2 son saltos de linea
    // muestra el menú, pide un valor y lo convierte a entero.
  opcion = parseInt(prompt("1. Saludar\n2. Despedirse\n3. Mostrar OK\nElige una opción:"));
// repite MIENTRAS no sea ni 1, ni 2, ni 3.
} while (opcion !== 1 && opcion !== 2 && opcion !== 3);

switch (opcion) {
    // cada bloque de case hace su acción
  case 1:
    alert("¡Hola!");
    break;
  case 2:
    alert("¡Adiós!");
    break;
  case 3:
    alert("OK");
    break;
}