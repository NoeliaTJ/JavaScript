// Crea un array de 5 números. Pide los valores con un for y después recórrelo con otro for para mostrarlos.

// 1. Crear el array
const numeros = [];

// 2. Rellenar con un for
for (let i = 0; i < 5; i++) {
  numeros[i] = Number(prompt(`Di el número ${i + 1}:`));
}

// 3. Mostrar con otro for
for (let i = 0; i < numeros.length; i++) {
  console.log(`Posición ${i + 1}: ${numeros[i]}`);
}

