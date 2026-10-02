// Pide un entero mayor que 0. Mientras sea 0 o negativo, muestra "Número inválido" y vuelve a pedirlo.

let numero = parseInt(prompt("Dime un entero mayor que 0:"));

while (numero <= 0) {
    alert("Número inválido");
    numero = parseInt(prompt("Dime un entero mayor que 0:"));
}

alert("Número válido: " + numero);