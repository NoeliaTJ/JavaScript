// Crea un objeto producto con nombre y precio. Aplica un descuento modificando el precio y muéstralo.

const producto = {
  nombre: "Auriculares tochos Bluetooth",
  precio: 59.99,
  // estoy que lo tiro de barato, jeje
  aplicarDescuento(porcentaje) {
    this.precio = this.precio * (1 - porcentaje / 100);
    // redondea el toFixed a 2 decimales para que no se vea feote
    console.log(`Descuento de ${porcentaje}% aplicado. Nuevo precio: $${this.precio.toFixed(2)}`);
  }
  // devuelve un string?
  // convertirlo con Number() o parseFloat()
};

console.log(`${producto.nombre} : $${producto.precio}`);
// se modifica el valor que ya existe
producto.aplicarDescuento(20);
console.log(`${producto.nombre} : ${producto.precio.toFixed(2)}`);

