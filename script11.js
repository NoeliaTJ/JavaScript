// Pide GUERRERO, MAGO o ARQUERO. Muestra su arma inicial. Las comparaciones son exactas.

let clase = prompt("Elige tu clase: GUERRERO, MAGO o ARQUERO");

switch (clase) {
    case "GUERRERO":
        console.log("Espada de hierro");
        break;
    case "MAGO":
        console.log("Bastón de madera");
        break;
    case "ARQUERO":
        console.log("Arco corto");
        break;
    default:
        console.log("Clase inválida");
        break;
}   