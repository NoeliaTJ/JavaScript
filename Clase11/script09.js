// Crea objetos animal con nombre y tipo, y una función externa hacerSonido(animal) que muestre Guau, Miau
// o Sonido desconocido.

class animal {
    // sin constructor, la propiedades de nombre y tipo no existirian
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  hacerSonido() {
    switch (this.tipo) {
      case "perro":
        console.log(`${this.nombre} dice: Guau!`);
        break;
      case "gato":
        console.log(`${this.nombre} dice: Mau!`);
        break;
      default:
        console.log(`${this.nombre} dice: No sabemos xD`);
    }
  }
}

// creo un objeto con new, y le inicio las propiedades con this
const rex = new animal("Rex", "perro");
const michi = new animal("Michi", "gato");
const paco = new animal("Paco", "pato");

rex.hacerSonido();
michi.hacerSonido();
paco.hacerSonido();

