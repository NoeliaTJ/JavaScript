// Crea un array para guardar 3 nombres. Pídelos uno a uno, guárdalos y muéstralos.

let nombres = Array(3);

nombres[0] = prompt("Pon el primer nombre:");
nombres[1] = prompt("Dime el segundo nombre:");
nombres[2] = prompt("Dime el tercer nombre:");

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
