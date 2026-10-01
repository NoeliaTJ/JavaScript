// Pide un número: 1 Menú principal, 2 Jugando, 3 Pausa, 4 Game Over, 5 Victoria. Muestra el estado.

let numero = parseInt(prompt("1 - Menú principal\n2 - Jugando\n3 - Pausa\n4 - Game Over\n5 - Victoria\n\nElige un número:"));

switch (numero) {
    case 1:
        console.log("Menú principal");
        break;
    case 2:
        console.log("Jugando");
        break;
    case 3:
        console.log("Pausa");
        break;
    case 4:
        console.log("Game Over");
        break;
    case 5:
        console.log("Victoria");
        break;
    default:
        console.log("Número inválido");
        break;
}   