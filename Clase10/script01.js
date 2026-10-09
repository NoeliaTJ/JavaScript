// Crea sumarDosNumeros(a, b) que devuelva la suma. Pide los números fuera, llama a la función y muestra el
// resultado.

function sumarDosNumeros(a, b) {
  // para que me devuelva el resultado de a+b en este caso
  return a + b;
}

// ParseInt convierte el textoescrito en un número enterito
// y con el prompt se muestra el mensaje de lo que se pide 
const n1 = parseInt(prompt("Primer número:"));
const n2 = parseInt(prompt("Segundo número:"));

// const guarda la variable en resultado
const resultado = sumarDosNumeros(n1, n2);
console.log(`La suma es: ${resultado}`);



