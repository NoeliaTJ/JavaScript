// Pide a una sola vez. Pide b hasta que sea distinto de 0. Muestra a / b

// lo pide solo una vez
let a = parseInt(prompt("Pon a:"));
let b;
do {
    // pide b y lo convierte a entero
  b = parseInt(prompt("Ponme b (distinto de 0):"));
// se repite MIENTRAS b sea 0. Sale cuando sea diferente de 0.
} while (b === 0);

alert(a / b);