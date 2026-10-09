// Crea contarPares(numeros) que recorra el array y devuelva cuántos elementos son pares

function contarPares(numeros) {
    // let contador 0 es una variable que acumula la cantidad de pares
  let contador = 0;
  // recorre el array elemento a elemento
  for (let i = 0; i < numeros.length; i++) {
    // aquí se comprueba si el elemento es par
    if (numeros[i] % 2 === 0) {
        // y si es par, incrementa el contador
      contador++;
    }
  }
  // devuelve el total de pares encontrados
  return contador;
}

// entonces, se mete const para que varien y se guarda la variable
const numeros = [3, 9, 12, 7, 5, 20, 14];
console.log(`Pares: ${contarPares(numeros)}`);   