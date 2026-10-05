// Pide cuántas veces se mostrará un mensaje y el texto del mensaje. Muéstralo esa cantidad de veces
//numerando cada repetición.

// pide cuantas veces se repite el mensaje
let n = parseInt(prompt("¿Cuántas veces se mostrará el mensaje?"));
// pide el texto.
let texto = prompt("Escribe el texto del mensaje:");

// Bucle que se ejecuta n veces, es como un contador.
for (let i = 1; i <= n; i++) {
    alert(i + ". " + texto);
}   