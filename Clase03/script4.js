// Pide una letra como texto: A, B, C, D o F. Muestra Excelente, Notable, Bien, Suficiente o Suspenso.

var letra = prompt("Introduce una letra (A, B, C, D o F):").toUpperCase();

switch (letra) {
  case "A":
    alert("Excelente");
    break;
  case "B":
    alert("Notable");
    break;
  case "C":
    alert("Bien");
    break;
  case "D":
    alert("Suficiente");
    break;
  case "F":
    alert("Suspenso");
    break;
  default:
    alert("Letra no válida");
}   