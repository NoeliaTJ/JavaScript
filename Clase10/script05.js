// Crea esPar(numero) que devuelva true si es par y false si es impar


function esPar(numero) {
    // numero % 2 queda divididido y devuelve el resto de la división entre dos.
  return numero % 2 === 0;
}

// parseInt convierte el texto en número entero
// y con prompt se pide el número
const n = parseInt(prompt("Número:"));
console.log(`¿Es par? ${esPar(n)}`);



