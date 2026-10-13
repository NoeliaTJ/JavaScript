// Crea una clase Jugador con nombre, vida, monedas, mostrarDatos() y recogerMoneda(). Crea dos jugadores
// y modifica solo uno

class Jugador {
  constructor(nombre, vida, monedas) {
    this.nombre = nombre;
    this.vida = vida;
    this.monedas = monedas;
  }

  mostrarDatos() {
    console.log(`${this.nombre} → Vida: ${this.vida} | Monedas: ${this.monedas}`);
  }

  recogerMoneda(cantidad) {
    this.monedas += cantidad;
    console.log(`${this.nombre} recoge ${cantidad} monedas. Total: ${this.monedas}`);
  }
}

// la vida son 100 y las monedas son 80
const jugador1 = new Jugador("Chibi", 100, 50);
// la vida son 80 y las monedas 20
const jugador2 = new Jugador("Mufi", 80, 20);

jugador1.mostrarDatos();
jugador2.mostrarDatos();

jugador1.recogerMoneda(30);
// Solo modifica a jugador1

console.log("Después");
jugador1.mostrarDatos();
jugador2.mostrarDatos();
// No hay cambios

