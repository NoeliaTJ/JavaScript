// Crea notaFinal(examen, practica) que calcule examen * 0.7 + practica * 0.3 y devuelva la nota

function notaFinal(examen, practica) {
    // hace que el examen valga un 70% y la práctica un 30% y devuleve esa suma.
  return examen * 0.7 + practica * 0.3;
}

// se pone parseFloat porque puede tener decimal.
const examen   = parseFloat(prompt("Nota del examen:"));
const practica = parseFloat(prompt("Nota de la práctica:"));

// muestra el mensaje
console.log(`Nota final: ${notaFinal(examen, practica)}`);

