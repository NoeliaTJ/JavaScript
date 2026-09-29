
// 9. Pide la cantidad en euros
let euros = Number(prompt("Introduce la cantidad en euros:"));

// Tasa fija de conversión. Tasa es 1.10 que es la conversión.
let tasa = 1.10;

// Convierte a dólares
let dolares = euros * tasa;

// Muestra el resultado con concatenación. No con template ${}.
console.log(euros + " € = " + dolares + " $");   
