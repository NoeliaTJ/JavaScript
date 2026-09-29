// 4. Pide la base y la altura
// Number() convierte la entrada de prompt() a número para que la aritmética funcione.
let base = Number(prompt("Introduce la base:"));
let altura = Number(prompt("Introduce la altura:"));

// Calcula y muestra el área y el perímetro
let area = base * altura;
let perimetro = 2 * (base + altura);

console.log("Área: " + area);
console.log("Perímetro: " + perimetro);
