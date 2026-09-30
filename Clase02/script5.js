const a = parseInt(prompt("Escribe el número a:"));
const b = parseInt(prompt("Escribe el número b:"));

if (a > b) {
    alert("a es mayor");
} else if (b > a) {
    alert("b es mayor");
} else {
    alert("Son iguales");
}   

// Else al final solo se cumple cuando 'a' NO es mayor que 'b' y 'b' NO es mayor que 'a'.
