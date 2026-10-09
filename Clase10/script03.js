// Crea areaRectangulo(base, altura) que devuelva el área.

// aquí reecibe los dos lados y devuelve su producto 
function areaRectangulo(base, altura) {
  return base * altura;
}

// aquí pongo parseFloat porque puede ser decimal
const base   = parseFloat(prompt("Base:"));
const altura = parseFloat(prompt("Altura:"));

console.log(`El área es: ${areaRectangulo(base, altura)}`);

