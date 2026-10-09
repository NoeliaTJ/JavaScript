// Crea minutosTotales(horas, minutos) que devuelva la duración completa en minutos.

function minutosTotales(horas, minutos) {
    // horas * 60 es como se convierte las horas en minutos
    // y con + se añaden los sobrantes
  return horas * 60 + minutos;
}

// Const guarda las variables de h (horas) y m (minutos)
const h = parseInt(prompt("Horas:"));
const m = parseInt(prompt("Minutos:"));

// muestro el mensaje
console.log(`Duración total: ${minutosTotales(h, m)} minutos`);   