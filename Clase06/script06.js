// Pide un entero positivo n y calcula la suma desde 1 hasta n

// El bucle for itera desde i=1 hasta i=n,
// acumulando cada valor en la variable SUMA.
let n = parseInt(prompt("Pon un entero positivo:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
  suma += i;
}

alert("La suma de 1 a " + n + " es: " + suma);   