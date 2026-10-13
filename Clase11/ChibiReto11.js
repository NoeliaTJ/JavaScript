// MiniReto. Personaje de videojuego
// 1. Crea una clase Jugador con nombre, vida, monedas y nivel.
// 2. Añade mostrarDatos().
// 3. Añade recibirDanio(cantidad); la vida no puede bajar de 0.
// 4. Añade curar(cantidad); la vida no puede superar 100.
// 5. Añade recogerMoneda().
// 6. Crea un jugador, muestra su estado inicial, haz que reciba daño, recoja dos monedas y se cure.
// 7. Muestra el estado final.
// Objetivo del MiniReto: Comprobar que una clase puede agrupar datos y comportamientos que modifican el
// estado de cada objeto.

class Jugador {
  constructor(nombre, vida, monedas, nivel) {
    // con el this llama a nombre, a vida a monedas, y a nivel
    this.nombre = nombre;
    this.vida = vida;
    this.monedas = monedas;
    this.nivel = nivel;
  }

  mostrarDatos() {
    console.log(`${this.nombre} (Nv.${this.nivel}) : Vida: ${this.vida} | Monedas: ${this.monedas}`);
  }

  recibirDanio(cantidad) {
    // si la vida es mayor o igual que 0
    this.vida = Math.max(0, this.vida - cantidad);
    // le quiero poner >< como si fuera una pelea xD
    console.log(`>< ${this.nombre} recibe ${cantidad} de daño. Vida: ${this.vida}`);
  }

  curar(cantidad) {
    // si la vida es menor? o igual que 100
    this.vida = Math.min(100, this.vida + cantidad);
    // <3 como corazoncito
    console.log(`<3 ${this.nombre} se cura ${cantidad}. Vida: ${this.vida}`);
  }

  recogerMoneda(cantidad = 1) {
    // pues es lo mismo que this monedas = this monedas + 10
    this.monedas += cantidad;
    console.log(`${this.nombre} recoge ${cantidad} moneda(s). Total: ${this.monedas}`);
  }
}

const heroe = new Jugador("Michi", 100, 10, 5);

heroe.mostrarDatos();

heroe.recibirDanio(40);
heroe.recogerMoneda();
heroe.recogerMoneda();
heroe.curar(30);

console.log("Estado final");
heroe.mostrarDatos();

