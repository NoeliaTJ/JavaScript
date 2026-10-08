// Crea mostrarRectangulo(base, altura) que calcule y muestre área y perímetro.

function mostrarRectangulo(base, altura) {
    const area = base * altura;
    const perimetro = (base + altura) * 2;
    console.log(`Área: ${area}`);
    console.log(`{Perímetro}`);
}

const base = Number(prompt("Base"));
const altura = Number(prompt("Altura"));
mostrarRectangulo(base, altura);

