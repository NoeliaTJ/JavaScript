// Pide un número del 1 al 4: 1 Fácil, 2 Normal, 3 Difícil, 4 Pesadilla.

var num = prompt("Introduce un número del 1 al 4:");
// switch muestra al dificultad.
switch (num) {
  case "1":
    alert("Fácil");
    break;
  case "2":
    alert("Normal");
    break;
  case "3":
    alert("Difícil");
    break;
  case "4":
    alert("Pesadilla");
    break;
  default:
    alert("Número no válido");
}

