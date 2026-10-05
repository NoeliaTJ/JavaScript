// Pide 5 números con un único for. Calcula suma y media sin utilizar arrays.

// la suma inicializa en 0 y se usa como acumulador

let suma = 0;

// Bucle for que se ejecuta 5 veces. 
// i es el contador que empieza en 1 y suma +1
for (let i = 1; i <= 5; i++) {
// pide un numero con el prompt y parseInt lo convierte de string a entero.
    let num = parseInt(prompt("Introduce el número " + i + ":"));
    suma += num;
}
// tras salir del bucle, divide la suma total para tener la media aritmetica.
let media = suma / 5;

alert("Suma: " + suma);
alert("Media: " + media);
