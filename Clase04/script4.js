// Pide un número y muestra su tabla del 1 al 10 utilizando while.


//le pongo el prompt para tener un número, y en cada while se hace una multiplicación.
let numero = parseInt(prompt("Ingresa un número:"));
let contador = 1;

while (contador <= 10) {
    console.log(numero + " x " + contador + " = " + (numero * contador));
    contador++;
}
