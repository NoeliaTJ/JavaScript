// Crea mostrarMayorMenor(numeros) que calcule y muestre mayor y menor

function mostrarMayorMenor(numeros) {
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) mayor = numeros[i];
    if (numeros[i] < menor) menor = numeros[i];
  }

  console.log(`Mayor: ${mayor}`);
  console.log(`Menor: ${menor}`);
}

mostrarMayorMenor([8, 3, 15, 1, 10]);

