// 1. Pido el nombre del cliente
let cliente = prompt("Nombre del cliente:");

// 2. Pido el precio de 3 productos
let p1 = Number(prompt("Precio del producto 1:"));
let p2 = Number(prompt("Precio del producto 2:"));
let p3 = Number(prompt("Precio del producto 3:"));

// 3. Calculo el total
let total = p1 + p2 + p3;

// 4. Descuento si el total es 100€ o más
if (total >= 100) {
    total = total - 10;
}

// 5. Pido el dinero entregado
let entregado = Number(prompt("Dinero entregado:"));

// 6, 7 y 8. Pago exacto, cambio o falta
let mensaje;
if (entregado === total) {
    mensaje = "Pago exacto";
} else if (entregado > total) {
    mensaje = "Cambio: " + (entregado - total).toFixed(2) + " €";
} else {
    mensaje = "Te faltan: " + (total - entregado).toFixed(2) + " €";
}

// 9. Resumen final
console.log("=== RESUMEN DE LA CHUPICOMPRA ===");
console.log("Cliente: " + cliente);
console.log("Total: " + total.toFixed(2) + " €");
console.log("Entregado: " + entregado.toFixed(2) + " €");
console.log(mensaje);   


// creo que tengo errores en el punto 4 porque va antes de pedir el dinero, porque el que paga tiene que saber cuanto tiene que pagar con el descuento aplicado.
// y en el 6 - 8 calculaba el cambio siempre sin comprobar los tres campos