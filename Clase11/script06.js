// Crea un array con dos objetos estudiante, cada uno con nombre y nota. Recorre el array y muestra los datos.


// le pongo un const con array con corchetes
const estudiantes = [
  { nombre: "Ana Puri", nota: 8.5 },
  { nombre: "Carlos Gato", nota: 6.2 }
];

// el for recorre el array de elemento a elemento,
// cada estudiante es un objeto al que accedes con .
// y así se leen sus propiedades con template
for (const estudiante of estudiantes) {
  console.log(`${estudiante.nombre} → ${estudiante.nota}`);
}

