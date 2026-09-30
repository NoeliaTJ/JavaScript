// esta vez es let porque resaigna precio dentro del 'if' porque se le restan 5 euros.
// también se usa parsefloat en lugar parseint porque es decimal.
let precio = parseFloat(prompt("Escribe el precio del producto:"));

if (precio >= 50) {
    precio = precio - 5;
}
// esto es concatenación
alert("Precio final: " + precio + " €");   