// Crea doble(numero) que devuelva el doble del valor recibido

// le declaro una función doble que recibe un parámetro numero.
function doble(numero) {
// y aquí se multiplica el número x2 y devuelve el resultado.
// osea, como que lo lanza hacia afuera
    return numero * 2;
}

// Con el prompt se muestra el diálogo para que entiendas lo que te pide
// parseInt convierte el texto que se escribe el un número entero 
// y const guarda la variable en n


const n = parseInt(prompt("Número:"));
console.log(`El doble es: ${doble(n)}`);

