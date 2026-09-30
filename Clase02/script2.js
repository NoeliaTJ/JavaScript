// le vuelvo a poner const porque no se reasigna despues de declarar la variable.
const num = parseInt(prompt("Escribe un número:"));

if (num > 0) {
    alert("Positivo");
} else if (num < 0) {
    alert("Negativo");
} else {
    alert("Cero");
}   