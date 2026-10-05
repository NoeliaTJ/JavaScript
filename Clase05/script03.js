// Pide exactamente "SI" o "NO". Cualquier otro valor debe volver a solicitarse.

// let declara
let respuesta;
// abre el bucle para ejecutarse una vez al menos
do {
    // pide que escriba un valor
  respuesta = prompt("¿Sí o No?");
  // se repite MIENTRAS no se 'si' o 'no'
  // le pongo upper.case?
} while (respuesta !== "SI" && respuesta !== "NO");
alert("Correcto");
