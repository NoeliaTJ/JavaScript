// Pide un entero positivo y muestra todos sus divisores.

// pide un numero y lo guarda en n.
let n = parseInt(prompt("Introduce un entero positivo:"));

// variable des tring vacía que se irá acumulando los divisores encontrados
let divisores = "";
// recorre todos los números desde 1 hasta n
for (let i = 1; i <= n; i++) {
// el operador % devuelve el resto de división.
    if (n % i === 0) {
// anade el divisor al string, separado por un espacio.
        divisores += i + " ";
    }
}
// se muestran los divisores encontrados.
alert("Divisores de " + n + ": " + divisores);
