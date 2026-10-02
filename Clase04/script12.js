// La contraseña es "1234" y hay 3 intentos. Sigue pidiendo mientras sea incorrecta y queden intentos. Muestra
// "Acceso permitido" o "Cuenta bloqueada".

// no reconoce eñe
// el while se repite mientras la contraseña sea incorrecta y queden intentos.
// cuando se acaban esos intentos, es cuando se bloquea.
let contrasena = "1234";
let intentos = 3;
let password = prompt("Introduce la contraseña:");

while (password !== contrasena && intentos > 0) {
    intentos--;
    if (intentos > 0) {
        password = prompt("Contraseña incorrecta. Intentos restantes: " + intentos + " - Inténtalo de nuevo:");
    }
}

if (password === contrasena) {
    alert("Acceso permitido");
} else {
    alert("Cuenta bloqueada");
}