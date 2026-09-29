
// 3. Pido dos números.
let num1 = number(prompt("Pon el primer numero: "));
let num2 = number(prompt("Pon el segundo numero: "));

// Verifica que el segundo número no sea 0
// la condición if evita la división por cero, que en js daría Infinity o NaN o lo que es lo mismo 'notAnumber'
// lo que hace de ===0 es un valor 'falsy', por eso se necesita una comparación estricta.
if (num2 ===0 ) {
    console. log("Elsegundo número no puede ser 0 (división por cero). ");
} else {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("multiplicación: " + (num1 * num2));
    console.log("División: " + (num1 / num2));
}
// creo que se puede poner igualmente num1 , igual que numero1.
// lo he probado en otro ejercicio anterior.
// recordar y fijarse bien en las separaciones, paréntesis, y ; de cada final de línea.