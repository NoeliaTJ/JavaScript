// Calcula la suma de los números del 1 al 5 con while y muestra el resultado

let contador = 1;
let suma = 0;

while (contador <= 5) {
    suma += contador;
    contador++;
}

console.log("La suma es: " + suma);

// Se acumula cada valor de contador en la variable 'suma' por cada vuelta que hace while.
