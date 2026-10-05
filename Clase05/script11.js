// Crea un menú que se muestre al menos una vez y se repita hasta elegir 0: 1 Jugar, 2 Opciones, 3 Créditos, 0
// Salir.

let opcion;
do {
    // muestra el menu y pide una opción
  opcion = parseInt(prompt("1. Jugar\n2. Opciones\n3. Créditos\n0. Salir\nElige una opción:"));
// ejecuta la acción a la opción elegida
  switch (opcion) {
    case 1:
      alert("¡A viciar!");
      break;
    case 2:
      alert("Opciones");
      break;
    case 3:
      alert("Créditos");
      break;
    case 0:
      alert("¡Allé voy!");
      break;
  }
  // repite MIENTRAS la opción no sea 0 porque quiero meter 0 como opción, pero no se si puedo
} while (opcion !== 0);

