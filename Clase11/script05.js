// Crea un objeto cuenta con titular y saldo. Simula un ingreso y una retirada modificando saldo y muestra el
// resultado.

// le añado un const con el titular y el saldo 
const cuenta = {
  titular: "María Paca",
  saldo: 1000,
  ingresar(cantidad) {
    this.saldo += cantidad;
    console.log(`Ingreso de $${cantidad}. Nuevo saldo: $${this.saldo}`);
  },
  // resta dinero (con comprobación)
  retirar(cantidad) {
    if (cantidad > this.saldo) {
      console.log("Saldo insuficiente.");
      // return detiene la funcion sin hacer mas
      return;
    }
    this.saldo -= cantidad;
    console.log(`Retirada de $${cantidad}. Nuevo saldo: $${this.saldo}`);
  }
};

// lo muestro con un consolelog
console.log(`Titular: ${cuenta.titular} | Saldo inicial: $${cuenta.saldo}`);
cuenta.ingresar(500);
cuenta.retirar(200);


