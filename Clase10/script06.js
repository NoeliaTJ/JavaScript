// Crea calcular(a, b, operador) que devuelva el resultado de +, -, * o /. Para este ejercicio, el operador será
// válido y, si es división, b será distinto de 0.

function calcular(a, b, operador) {
    // aquí hago un switch! se compara el caracter recibido 
    // y devuelve el resultado de la operación
  switch (operador) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
  }
}

// Código principal
const n1 = parseFloat(prompt("Primer número:"));
const n2 = parseFloat(prompt("Segundo número:"));
const op = prompt("Operador (+, -, *, /):");

// se muestra el mensajito
console.log(`El resultado es: ${calcular(n1, n2, op)}`);



