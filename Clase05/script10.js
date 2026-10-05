// Pide cuántas bolsas tiene el jugador. Para cada bolsa, pide monedas. Si es negativo, vuelve a pedir esa
// misma bolsa. Muestra el total.

// pide el numero de bolsas
let bolsas = parseInt(prompt("¿Cuántas bolsas tienes?"));
let total = 0;
// Blucle que recorre cada bolsa, de 1 a la b
for (let i = 1; i <= bolsas; i++) {
  let monedas;
  do {
    monedas = parseInt(prompt(`Bolsa ${i}: ¿cuántas monedas?`));
// si es negativo a 0 vuelve a pedir la misma bolsa
} while (monedas < 0);
// suma las monedas
  total += monedas;
}
// muestra el total al acabar
alert(`Total: ${total} monedas`);   