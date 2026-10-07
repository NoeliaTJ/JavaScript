// Pide 6 números, guárdalos y muestra únicamente los pares.

// Creo el array y pido los valores
const numeros = [];
for (let i = 0; i < 6; i++) {
    // Number, eso, va en mayus
  numeros[i] = Number(prompt(`Di el número ${i + 1}:`));
}

// Muestro solo los pares
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    // se muestra con un template, y recuerda el `, no '
    console.log(`Posición ${i + 1}: ${numeros[i]}`);
  }
}


