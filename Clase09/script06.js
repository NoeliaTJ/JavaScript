// Crea pedirPositivo() que pida un número hasta que sea mayor que 0 y, cuando sea válido, lo muestre. La
// función no necesita parámetros.

function pedirPositivo() {
let numero;
do {
    numero = Number(prompt("Número mayor que O:"));
} while (numero <= 0);
console.log ('Número aceptado: ${numero}');
}
pedirPositivo();

