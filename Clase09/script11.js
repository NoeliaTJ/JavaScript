// Crea mostrarFicha(nombre, edad, ciudad) que muestre los tres datos. Pídelos fuera de la función.

function mostrarFicha(nombre, edad, ciudad) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Ciudad: ${ciudad}`);
}

// Pedir datos FUERA de la función
const nombre = prompt("Nombre:");
const edad = parseInt(prompt("Edad:"));
const ciudad = prompt("Ciudad:");

mostrarFicha(nombre, edad, ciudad);

