// Crea mostrarTabla(numero) que muestre la tabla del 1 al 10 con for.

function mostrarTabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log('$')
    }
}

console.log('${numero} x ${i} = ${numero * i} ');
const numero = Number(prompt ("Número:"));
mostrarTabla (numero);