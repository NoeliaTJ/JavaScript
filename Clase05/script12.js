// El secreto es 7. Pide intentos hasta acertar. Indica si es demasiado pequeño, demasiado grande o correcto.
// Cuenta intentos.

// let secreto lo guarda
let secreto = 7;
let intento;
// empieza los intentos en 0
let intentos = 0;

do {
  intento = parseInt(prompt("Dime un número:"));
  // se suma uno al contado con los ++
  intentos++;

  // acuérdate, aquí es menor
  if (intento < secreto) {
    alert("Demasiado pequeño");
    // y aquí es mayor
  } else if (intento > secreto) {
    alert("Demasiado grande");
  }
  // se repite MIENTRAS no sea el 7
} while (intento !== secreto);

alert(`¡Chachi! Lo has adivinado en ${intentos} intentos.`);
