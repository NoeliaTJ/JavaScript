// Crea enRango(numero, minimo, maximo) que devuelva true si numero está entre minimo y maximo, ambos
// incluidos

function enRango(numero, minimo, maximo) {
    // comprueba que no es menor que el límite inferior
    // y con el && es que las dos condiciones tienen que cumplirse si o si a la vez
  return numero >= minimo && numero <= maximo;
  // con esto se comprueba que no es mayor que el límite superior
}

// Se guardan las variables de n , min, y max en cada const
// y con parseInt se convierte en número entero
const n  = parseInt(prompt("Número:"));
const min = parseInt(prompt("Mínimo:"));
const max = parseInt(prompt("Máximo:"));

// muestro mensaje
console.log(`¿Está en el rango? ${enRango(n, min, max)}`);   