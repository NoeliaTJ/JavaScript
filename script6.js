// Pide a, b y un operador +, -, * o /. Utiliza switch. Si se intenta dividir entre 0, muestra un mensaje

const a = parseFloat(prompt("Introduce el número a:"));
const b = parseFloat(prompt("Introduce el número b:"));
const op = prompt("Introduce un operador (+, -, * o /):");

switch (op) {
  case "+":
    alert("Resultado: " + (a + b));
    break;
  case "-":
    alert("Resultado: " + (a - b));
    break;
  case "*":
    alert("Resultado: " + (a * b));
    break;
  case "/":
    if (b === 0) {
      alert("No se puede dividir entre 0");
    } else {
      alert("Resultado: " + (a / b));
    }
    break;
  default:
    alert("Operador no válido");
}   

// parseFloat convierte el texto a número.
// b === 0 lo verifica