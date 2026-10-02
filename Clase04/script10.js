// El número secreto es 8. Pide intentos hasta acertar. Indica si el intento es pequeño o grande y cuenta los
// intentos.

let numeroSecreto = 8;
let intentos = 0;
let numero = parseInt(prompt("Adivina el número secreto (1-10):"));

while (numero !== numeroSecreto) {
    intentos++;
    if (numero < numeroSecreto) {
        prompt("Tu número es CHIQUITO. Intenta de nuevo:");
    } else {
        prompt("Tu número es ENORME. Intenta de nuevo:");
    }
    numero = parseInt(prompt("Introduce un número:"));
}

alert("¡SuperCorrecto! Acertaste en " + (intentos + 1) + " intento(s).");
