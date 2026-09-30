const edad = parseInt(prompt("Escribe tu edad:"));

if (edad < 12) {
    alert("Entrada niño");
} else if (edad < 65) {
    alert("Entrada adulto");
} else {
    alert("Entrada senior");
}   