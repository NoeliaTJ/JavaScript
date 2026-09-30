const a = parseFloat(prompt("Escribe a:"));
const b = parseFloat(prompt("Escribe b:"));

// !== es el equivalente de ===.
// se usa parseFloat porque puede dar decimales
if (b !== 0) {
    alert("El resultado es: " + (a / b));
} else {
    alert("Error: no se puede dividir entre 0.");
}   