// Crea un objeto lampara con encendida y un método mostrarEstado() que indique si está encendida o
// apagada.

const lampara = {
    // hago un booleano
  encendida: false,
  mostrarEstado() {
    // con el ternario de interrogacion
    console.log(this.encendida ? "Está encendida 💡" : "Está apagada");
  }
};

lampara.mostrarEstado();
// Está apagada de base
lampara.encendida = true;
// La encendemos
lampara.mostrarEstado();
// Está encendida



