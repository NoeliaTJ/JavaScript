// Crea dos objetos libro con titulo, autor y numeroPaginas. Muestra la información de ambos.

// le pongo const con el titulo, autor, y num de pag
const libro1 = {
  titulo: "1986",
  autor: "Mari Bobo",
  numeroPaginas: 328
};

// y aqui pongo otro const con lo mismo
const libro2 = {
  titulo: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  numeroPaginas: 863
};

// y aqui se muestran con un console.log
console.log(`Libro 1: "${libro1.titulo}" por ${libro1.autor} - ${libro1.numeroPaginas} páginas`);
console.log(`Libro 2: "${libro2.titulo}" por ${libro2.autor} - ${libro2.numeroPaginas} páginas`);

