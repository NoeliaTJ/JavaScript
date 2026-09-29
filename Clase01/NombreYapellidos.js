// 11. Pide nombre y dos apellidos
let nombre = prompt("Dí tu nombre:");
let apellido1 = prompt("Ponme el primer apellido:");
let apellido2 = prompt("Ponme el segundo apellido:");

// Construye el nombre completo
let nombreCompleto = nombre + " " + apellido1 + " " + apellido2;

// Muestra los datos
console.log("Nombre completo: " + nombreCompleto);
console.log("Longitud: " + nombreCompleto.length);
console.log("Mayúsculas: " + nombreCompleto.toUpperCase());
console.log("Sin espacios: " + nombreCompleto.trim());

