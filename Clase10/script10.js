// Crea precioFinal(precio, esVip, tieneCupon). VIP descuenta 10% del precio original y cupón 5% adicional. Si
// tiene ambos, aplica ambos.

function precioFinal(precio, esVip, tieneCupon) {
  let descuento = 0;
  // con el esVip si es true suma un 10% del precio al descuento
  if (esVip) descuento += precio * 0.10;
  // si tiene cupon, osea, si es true, suma un 5% adicional del precio original
  if (tieneCupon) descuento += precio * 0.05;
  return precio - descuento;
}

// Const guarda la variable de precio, esVip y tieneCupon
// y le pongo parseFloat para que admita decimales.
const precio = parseFloat(prompt("Precio:"));
const esVip = confirm("¿Es VIP?");
const tieneCupon = confirm("¿Tiene cupón?");

console.log(`Precio final: ${precioFinal(precio, esVip, tieneCupon)}`);

