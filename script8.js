// Pide COCHE, MOTO o CAMION. Según el tipo, pide un dato distinto y valídalo con if: puertas 3-5, cilindrada
// >= 125, toneladas > 3.5.
const tipo = prompt("1 - COCHE\n2 - MOTO\n3 - CAMION\n\nElige tipo de vehículo:");

// La validación de if va DENTRO de cada case
// le pongo parseInt para puertas
switch (tipo) {
    case "1":
        let puertas = parseInt(prompt("Número de puertas (3-5):"));
        if (puertas >= 3 && puertas <= 5) {
            console.log("Coche válido con " + puertas + " puertas");
        } else {
            console.log("Número de puertas inválido");
        }
        break;

        // le pongo parseFloat por las cilindradas
    case "2":
        let cilindrada = parseFloat(prompt("Cilindrada en cc:"));
        if (cilindrada >= 125) {
            console.log("Moto válida con " + cilindrada + " cc");
        } else {
            console.log("Cilindrada inválida (mínimo 125 cc)");
        }
        break;

    case "3":
        let toneladas = parseFloat(prompt("Toneladas de carga:"));
        if (toneladas > 3.5) {
            console.log("Camión válido con " + toneladas + " t");
        } else {
            console.log("Toneladas inválidas (deben superar 3.5 t)");
        }
        break;

    default:
        console.log("Vehículo inválido");
        break;
}   