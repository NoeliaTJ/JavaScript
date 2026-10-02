// pide una contraseña hasta que sea exactamente '1234'.
// Cuando sea correcta, muestra 'acceso permitido'

let clave = "";
while (clave !== "1234") {
    clave = prompt("Introduce la contraseña:");
}
alert("Acceso permitido");
