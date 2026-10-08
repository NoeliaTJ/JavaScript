// Crea mostrarPositivos(numeros) que muestre solo los valores mayores que 0.

function mostrarPositivos(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      console.log(numeros[i]);
    }
  }
}

const numeros = [4, -2, 0, 7, -8, 3];
mostrarPositivos(numeros);

