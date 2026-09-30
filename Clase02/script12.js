const dia = prompt("Escribe un día de la semana:").toUpperCase();

if (dia === "SABADO" || dia === "DOMINGO") {
    alert("Descuento de fin de semana");
} else {
    alert("Sin descuento");
}

// || o lógico, significa que CUALQUIERA de las dos condiciones puede ser True para que el if se cumpla.
// toUpperCase pone todo en mayúsculas.