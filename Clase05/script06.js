// Pide una nota entre 0 y 10. Mientras esté fuera del rango, vuelve a pedirla.

let nota;
do {
    // pide la nota y la convierte a entero
  nota = parseInt(prompt("Di una nota (0-10):"));
  // repite MIENTRAS la nota sea menor que 0 o mayor que 10. sale del bucle si esta entre 0 y 10.
} while (nota < 0 || nota > 10);

alert("Genial!");   