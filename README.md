# JavaScript — Fundamentos para React

> Ejercicios de fundamentos para curso de React.
> Se van subiendo cosas de **L a V**.

---

## Convenciones de nomenclatura

- La primera letra de la primera palabra va en **minúscula**; las siguientes en **mayúscula** (camelCase).
- Los booleanos van en minúscula: `true` / `false`.

| Ejemplo | Valor |
|---------|-------|
| `nombreUsuario` | `"Paco"` |
| `edadUsuario` | `20` |
| `notaExamen` | `7.8` (decimales con punto) |
| `tieneEntrada` | `true` / `false` |

---

## Variables

### `let`

Una vez asignado un valor, **se puede modificar**.

### `const`

**No** se puede modificar. En VS Code no dará error en tiempo de escritura, pero al ejecutar sí.

---

## `console.log` y `prompt`

- `console.log()` → imprime en la consola.
- `prompt()` → abre una caja de diálogo donde el usuario escribe (como una pequeña "conversación").

---

## Comentarios

```js
// Comentario de una línea (o Cmd + / en VS Code)
/* Comentario en bloque */

Métodos y propiedades de cadenas de texto
let frase = "Hola Mundo";

// Propiedad longitud
let longitudFrase = frase.length;

// Pasar a minúsculas
let fraseEnMinusculas = frase.toLowerCase();

// Pasar a mayúsculas
let fraseEnMayusculas = frase.toUpperCase();

// Quitar espacios del principio y del final
let fraseSinEspacios = frase.trim(); // *se usa poco*

Métodos de Math
Método	Comportamiento	Ejemplo	Resultado
Math.round(x)	Redondea al entero más cercano	Math.round(4.5)	5
Math.floor(x)	Redondea siempre hacia abajo	Math.floor(4.9)	4
Math.ceil(x)	Redondea siempre hacia arriba	Math.ceil(4.1)	5
Math.trunc(x)	Elimina la parte decimal (sin redondear)	Math.trunc(4.9)	4

⚠️ Con números negativos: floor ≠ trunc
console.log(Math.floor(-4.2)); // -5  (hacia abajo = más negativo)
console.log(Math.trunc(-4.2)); // -4  (solo corta la parte decimal)
console.log(Math.ceil(-4.2));  // -4  (hacia arriba = más positivo)

toFixed(n)
Indica cuántos decimales conservar. Devuelve un string, no un number.

const numero = 4.5678;

console.log(numero.toFixed(2)); // "4.57"
console.log(numero.toFixed(1)); // "4.6"
console.log(numero.toFixed(0)); // "5"

// typeof resultado → "string"

// Para volver a number:
const resultadoNumero = Number(numero.toFixed(2)); // 4.57 (number)

Ejercicios: if / else if / else
Calificar una nota
const nota = Number(prompt("¿Qué nota tienes?"));

if (nota < 5) {
    console.log("Estás suspenso");
} else if (nota < 7) {
    console.log("Aprobado con menos de un 7");
} else if (nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}

Booleanas y operadores lógicos
let tieneCarnet = true;
let respuesta = prompt("¿Tienes carnet? Dime SI o NO");

if (respuesta === "SI") {
    tieneCarnet = true;
} else {
    tieneCarnet = false;
}

if (tieneCarnet === false) {
    console.log("No puedes conducir");
}

if (tieneCarnet && nota > 5) {
    console.log("Puedes pasar");
}

Anidación con && y ||
let estaLloviendo = true;
let tengoParaguas = true;
let tengoChubasquero = false;

if (estaLloviendo && (tengoParaguas || tengoChubasquero)) {
    console.log("Me tapo de la lluvia");

    if (nota > 5) {
        console.log("Puedes salir tranquilo");
    }
}
