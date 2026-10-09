// Crea mayorArray(numeros) que devuelva el valor más alto. El array tendrá al menos un elemento


function mayorArray(numeros) {
    // aquí se deberia de asumir que el primer elemento es el mayor en el inicio
  let mayor = numeros[0];
// compara desde el segundo elemento en adelante
  for (let i = 1; i < numeros.length; i++) {
    // si se encuentra uno mayor, se actualiza
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  // se termina el bucle, y 'mayor' contiene el valor mas alto
  return mayor;
}

// La variable se guarda en const y se muestra mensaje
const numeros = [4, 9, 3, 15, 7, 2];
console.log(`El mayor es: ${mayorArray(numeros)}`);

