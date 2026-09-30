const edad = parseInt(prompt("Escribe tu edad:"));
const tieneEntrada = prompt("¿Tienes entrada? (sí/no)") === "sí";

if (edad >= 18 && tieneEntrada) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}

// && significa AMBAS CONDICIONES deben ser True para que l if se cumpla.
// Si uno de los dos no son true o los dos son false, se deniega.