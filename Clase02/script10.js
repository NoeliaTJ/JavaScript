const total = parseFloat(prompt("Escribe el total:"));
const entregado = parseFloat(prompt("Escribe la cantidad entregada:"));

if (entregado >= total) {
    alert("Cambio: " + (entregado - total) + " €");
} else {
    alert("Te faltan: " + (total - entregado) + " €");
}

// entregado >= total mayor o igual*. muestra cambio = entregado - total
// entregado < total. FAlta = total - entregado