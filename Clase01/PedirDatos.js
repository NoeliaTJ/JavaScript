// 8. Pido los datos a alguien
let nombre = prompt("¿Cómo te llamas?");
let edad = Number(prompt("¿Cuántos años tienes?"));
let altura = Number(prompt("¿Cuál es tu altura (m)?"));
let ciudad = prompt("¿En qué ciudad vives?");

// Muestra todos los datos en una línea con template literal
// los template literal, hay que fijarse que se marcan con ' y no "".
// También llevan el símbolo del ${}. dentro de esas llaves se puede meter cualquier expresión.
console.log(`Soy ${nombre}, tengo ${edad} años, mido ${altura} m y vivo en ${ciudad}`);   
