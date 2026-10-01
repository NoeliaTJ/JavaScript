// Pide día de la semana (1-7) y edad. L-M-X: 6 €, J-V: 8 €, S-D: 10 €. Menor de 12 resta 2 €; 65 o más resta 3
// €. El precio no puede ser negativo.

const dia = parseInt(prompt("Introduce el día de la semana (1-7):"));
const edad = parseInt(prompt("Introduce tu edad:"));
// let para modificar?
let precio = 0;

switch (dia) {
  case 1:
  case 2:
  case 3:
    precio = 6;
    break;
  case 4:
  case 5:
    precio = 8;
    break;
  case 6:
  case 7:
    precio = 10;
    break;
  default:
    alert("Día no válido");
}

if (precio > 0) {
  if (edad < 12) {
    precio -= 2;
  } else if (edad >= 65) {
    precio -= 3;
  }

  if (precio < 0) {
    precio = 0;
  }

  alert("El precio es: " + precio + " €");
}   