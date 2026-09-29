// 7. Pide dos números
let a = Number(prompt("Introduce el valor de a:"));
let b = Number(prompt("Introduce el valor de b:"));

console.log("Antes: a = " + a + ", b = " + b);

// Intercambia usando una variable auxiliar. Esto es un método clásico que se llama 'swap'
// aux viene de 'auxiliar' aunque suene obvio, pero por si acaso.
let aux = a;
a = b;
b = aux;

console.log("Después: a = " + a + ", b = " + b);   
