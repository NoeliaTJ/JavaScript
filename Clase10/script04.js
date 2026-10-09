// Crea mayor(a, b) que devuelva el mayor. Si son iguales, puede devolver cualquiera

function mayor(a, b) {
  return a > b ? a : b;
}

// Si a es mayor, devuelve a, y si no, aunque empate, devuelve b.
// creo que por eso son igual porque puede devolver lo que sea.
// ah, y con el parseInt devuelve el texto a número entero.
const n1 = parseInt(prompt("Primer número:"));
const n2 = parseInt(prompt("Segundo número:"));

console.log(`El mayor es: ${mayor(n1, n2)}`);


