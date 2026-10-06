// Pide 5 números. Después pide x y comprueba manualmente si está en alguna de las cinco posiciones. No
// utilices bucles ni includes().

let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt(`Introduce el número ${i + 1}:`));
}

let x = parseInt(prompt("Introduce x:"));

if (numeros[0] === x) console.log(`x está en la posición 1`);
if (numeros[1] === x) console.log(`x está en la posición 2`);
if (numeros[2] === x) console.log(`x está en la posición 3`);
if (numeros[3] === x) console.log(`x está en la posición 4`);
if (numeros[4] === x) console.log(`x está en la posición 5`);

