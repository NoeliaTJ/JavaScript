//Crea una clase Videojuego con constructor(titulo, horasJugadas) y mostrarDatos(). Crea un objeto y aumenta
// sus horas.

class Videojuego {
    // horas jugadas se inicializa en el constructor
    // y luego se modifica con +=
  constructor(titulo, horasJugadas) {
    this.titulo = titulo;
    this.horasJugadas = horasJugadas;
  }
// se muestran los datos con el console.log
  mostrarDatos() {
    console.log(`"${this.titulo}" → ${this.horasJugadas} h jugadas`);
  }
}
// creo el videojuego con new
const juego = new Videojuego("Final Fantasy, Allé voy", 120);
juego.mostrarDatos();

// si son +10 horas o igual... se ve
juego.horasJugadas += 10;
juego.mostrarDatos();

