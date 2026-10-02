// Crea un menú que se repita hasta elegir 0: 1 sumar dos números, 2 restar dos números, 0 salir.

let opcion = "";
// inicializa opcion con una cadena vacia para que while entre por lo menos una vez
// mientras no se elija 0, se repite el menu
while (opcion !== "0") {
    opcion = prompt("Menú:\n1 - Sumar\n2 - Restar\n0 - Salir\n\nElige una opción:");

    if (opcion === "1") {
        let a = Number(prompt("Primer número:"));
        let b = Number(prompt("Segundo número:"));
        alert("Resultado: " + (a + b));
    } else if (opcion === "2") {
        let a = Number(prompt("Primer número:"));
        let b = Number(prompt("Segundo número:"));
        alert("Resultado: " + (a - b));
    } else if (opcion === "0") {
        alert("Hasta luego");
    } else {
        alert("Opción no válida");
    }
}