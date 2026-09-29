// MINIRETO. Pido el nombre del cliente
let cliente = prompt("Nombre del cliente:");

// 2. Pido el precio de 3 productos
// hay DOS TIPOS DE NUMBER. 
// Number es una función > Number("25") -> 25. o en este caso, Number, precio del producto
// number es un tipo de dato > typeof x -> "number". osea, devuelve para decir el tipo
let p1 = Number(prompt("Precio del producto 1:"));
let p2 = Number(prompt("Precio del producto 2:"));
let p3 = Number(prompt("Precio del producto 3:"));

// 3. Calculo el total
let total = p1 + p2 + p3;

// 4. PidO el dinero entregado
let entregado = Number(prompt("Dinero entregado:"));

// 5. CalculO el cambio
let cambio = entregado - total;

// 6. Muestra el resumen
console.log("=== RESUMEN DE LA CHUPICOMPRA ===");
console.log("Cliente: " + cliente);
console.log("Total: " + total.toFixed(2) + " €");
console.log("Entregado: " + entregado.toFixed(2) + " €");
console.log("Cambio: " + cambio.toFixed(2) + " €");   
