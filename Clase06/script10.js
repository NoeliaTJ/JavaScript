// Pide n y dibuja un triángulo creciente con n filas usando dos for anidados.

let n = parseInt(prompt("Dime el número de filas:"));

let triangulo = "";
// blucle exterior que controla filas
for (let fila = 1; fila <= n; fila++) {
// bucle interior que imprime fila de asteriscos.
    for (let j = 1; j <= fila; j++) {
       // añade un asterisco seguido de un espacio
        triangulo += "* ";
    }
    // salto de linea 
    triangulo += "\n";
}

alert(triangulo);   