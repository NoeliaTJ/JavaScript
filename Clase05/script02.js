// Pide una contraseña hasta que sea exactamente "1234".

// let pass declara la variable sin valor aún
let pass;
do {
  pass = prompt("Ponme la contraseña:");
  // Compara con !==. si no repite,si coincide, sale del bucle.
} while (pass !== "1234");
alert("Correcto");
