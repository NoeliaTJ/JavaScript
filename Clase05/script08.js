// Pide una batería inicial entre 0 y 99. Después suma 5 en cada repetición hasta llegar a 100. Si se supera
// 100, corrige a 100.
// le meto dos condicionales
let bateria;
// pide la batería inicial y repite mientras esté fuera del rango entre 0 y 99
do {
  bateria = parseInt(prompt("Batería inicial (0-99):"));
} while (bateria < 0 || bateria > 99);

do {
    // le suma +5 a la batería en cada repe
  bateria += 5;
  // el maximo son 100, y se corrige a 100
  if (bateria > 100) bateria = 100;
  // con el alert se ve el porcentaje de la batería
  alert(`Batería: ${bateria}%`);
} while (bateria < 100);   