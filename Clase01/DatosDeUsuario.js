
// 12. Pide los datos al usuario
let nombre = prompt("¿Cómo te llamas?");
let edad = Number(prompt("¿Cuántos años tienes?"));
let ciudad = prompt("¿En qué ciudad vives?");

// Mensaje con concatenación. Diferenciamos de concatenación de template ${}.
let msgConcat = "Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad;

// Mensaje equivalente con template literal. Este sí es template porque tiene ${}
let msgTemplate = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}`;

// Muestra los dos
console.log(msgConcat);
console.log(msgTemplate);

