// Pide tipo de envío: 1 Estándar 5 €, 2 Urgente 10 €, 3 Premium 15 €. Después pide el importe. Si cuesta 50 €
// o más, el envío Estándar es gratuito

let opcion = parseInt(prompt("1 - Estándar (5 €)\n2 - Urgente (10 €)\n3 - Premium (15 €)\n\nElige el tipo de envío:"));
let importe = parseFloat(prompt("Introduce el importe del pedido:"));

let envio = 0;

switch (opcion) {
    case 1:
        if (importe >= 50) {
            envio = 0;
            console.log("¡Envío Estándar gratuito!");
        } else {
            envio = 5;
            console.log("Envío Estándar: 5 €");
        }
        break;
    case 2:
        envio = 10;
        console.log("Envío Urgente: 10 €");
        break;
    case 3:
        envio = 15;
        console.log("Envío Premium: 15 €");
        break;
    default:
        console.log("Opción inválida");
        break;
}

console.log("Total: " + (importe + envio) + " €");   