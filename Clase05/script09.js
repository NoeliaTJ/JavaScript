// La contraseña es "1234" y hay 3 intentos. El programa debe pedir al menos una vez y continuar mientras sea
// incorrecta y queden intentos.

// mejor con cons
let pass;
// son tres intentos nada mas
let intentos = 3;
do {
    // pide la contraseña en esos tres intentos
  pass = prompt(`Introduce la contraseña (te quedan ${intentos} intentos):`);
  intentos--;
// repite MIENTRAS esté incorrecta y queden intentos.
// solo sale si la pass es correcta o se acaban las oportunidades
} while (pass !== "1234" && intentos > 0);

// al salir, comprueba si acertó.
if (pass === "1234") {
  alert("Correcto");
} else {
    // si se agotan, enseña el fallo porque no quedan oportunidades
  alert("Quedaste sin intentos. Acceso denegado.");
}