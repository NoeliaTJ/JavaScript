// ChibiReto3

let opcion = parseInt(prompt("1 - Dificultad\n2 - Volumen\n3 - Resolución\n4 - Controles\n0 - Salir\n\nElige una opción:"));

switch (opcion) {
    case 1:
        let dificultad = parseInt(prompt("1 - Fácil\n2 - Normal\n3 - Difícil\n\nElige dificultad:"));
        switch (dificultad) {
            case 1:
                console.log("Dificultad: Fácil");
                break;
            case 2:
                console.log("Dificultad: Normal");
                break;
            case 3:
                console.log("Dificultad: Difícil");
                break;
            default:
                console.log("Dificultad inválida");
                break;
        }
        break;

    case 2:
        let volumen = parseInt(prompt("Introduce el volumen (0-100):"));
        if (volumen >= 0 && volumen <= 100) {
            console.log("Volumen: " + volumen);
        } else {
            console.log("Valor inválido");
        }
        break;

    case 3:
        let resolucion = parseInt(prompt("1 - 720p\n2 - 1080p\n3 - 4K\n\nElige resolución:"));
        switch (resolucion) {
            case 1:
                console.log("Resolución: 720p");
                break;
            case 2:
                console.log("Resolución: 1080p");
                break;
            case 3:
                console.log("Resolución: 4K");
                break;
            default:
                console.log("Resolución inválida");
                break;
        }
        break;

    case 4:
        console.log("Controles: WASD + ratón");
        break;

    case 0:
        console.log("Saliendo...");
        break;

    default:
        console.log("Opción inválida");
        break;
}   