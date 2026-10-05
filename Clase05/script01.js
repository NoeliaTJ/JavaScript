// Pide un entero hasta que sea mayor que 0. Cuando sea válido, muestra "Correcto".

// let declara la variable numero sin asignar
let numero;
// se abre el bucle
do {
    // prompt muestra una ventana de diálogo con el texto y devuelve lo que se escribe como string. parseInt lo convierte a entero. El resultado se guarda en numero.
  numero = parseInt(prompt("Di un entero:"));
} while (numero <= 0);
alert("Correcto");   