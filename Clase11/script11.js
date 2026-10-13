// Crea una clase Enemigo con nombre, vida, mostrarDatos() y recibirDanio(cantidad). La vida no puede bajar
// de 0.

// le declaro la clase de enemigo
class Enemigo {
  constructor(nombre, vida) {
    this.nombre = nombre;
    this.vida = vida;
  }

  mostrarDatos() {
    // muestra el estado con el console.log
    console.log(`${this.nombre} → Vida: ${this.vida}`);
  }

  recibirDano(cantidad) {
    // recibe un numero, lo que es el daño
    // se devuelve 0 si x es negativo, si no, devuelve ese x
    this.vida = Math.max(0, this.vida - cantidad);
    console.log(`${this.nombre} recibe ${cantidad} de daño. Vida: ${this.vida}`);
  }
}
// crea una instancia con el goblin y la vida
const goblin = new Enemigo("Goblin", 60);
goblin.mostrarDatos();

// le quito entonces 60 - 30 = 30
goblin.recibirDano(30);
// le quedan 30 - 40 da negativo, 
// pero se queda en 0 o_o
goblin.recibirDano(40);
goblin.recibirDano(10);
// ya está en 0, no baja más
