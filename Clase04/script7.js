// Pide números mientras sean positivos o 0. Cuando se introduzca un negativo, muestra cuántos números
// válidos hubo y su media. Si el primero ya es negativo, muestra "No hay datos"

let numero = Number(prompt("Introduce un número:"));
let contador = 0;
let suma = 0;

while (numero >= 0) {
    suma += numero;
    // ++ es lo mismo que a+1
    contador++;
    numero = Number(prompt("Introduce un número:"));
}

if (contador === 0) {
    alert("No hay datos");
} else {
    alert("Números válidos: " + contador + " | Media: " + (suma / contador));
}