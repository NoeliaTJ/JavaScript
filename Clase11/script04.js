// Crea un objeto rectangulo con base, altura, calcularArea() y calcularPerimetro().

// le pongo un const con la base y el calcular la base y la altura
const rectangulo = {
  base: 5,
  altura: 3,
  calcularArea() {
    // se accede con un this. dentro de los metodos
    return this.base * this.altura;
  },
  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }
};

// se muestra con un console.log
console.log(`Área: ${rectangulo.calcularArea()}`);
console.log(`Perímetro: ${rectangulo.calcularPerimetro()}`);

