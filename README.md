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

Con números negativos: floor ≠ trunc
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

## Switch en JavaScript
Es una estructura condicional para seleccionar una acción según valores concretos. No sustituye a if en comparaciones o rangos; se complementa con él.

## Partes
Parte	Función
switch (expr)	Expresión a evaluar
case valor:	Coincidencia estricta (===)
break;	Sale del switch (no del script)
default:	Se ejecuta si ningún case coincide

## ¿Cuándo usar switch y cuándo if?
Situación	Estructura
Valores concretos (1, "MAGO", "/")	switch
Comparaciones / rangos (>=, <)	if / else if
Condiciones lógicas compuestas	if

## Puntos clave
Comparación estricta: switch usa ===. Un prompt() devuelve string, así que para números hay que convertir con Number() o parseInt().
break obligatorio: sin él, la ejecución "cae" al siguiente case (fall-through).
Combinar con if: dentro de un case se puede usar if para validaciones o rangos (ej. división entre 0).
switch anidado: posible (ej. menú → submenú), pero solo cuando los valores sean concretos y la estructura siga siendo legible.
Errores frecuentes
Error	Corrección
Olvidar break	Añadirlo en cada case
Usar switch para rangos	Usar if
Comparar número con texto	Convertir la entrada al mismo tipo
No incluir default	Añadirlo para valores no contemplados
Exceso de switch anidados	Combinar switch + if según el problema

## Bucle while en JavaScript
While repite un bloque de código mientras su condición sea true.  La condición se comprueba antes de cada iteración, por lo que el bucle puede ejecutarse 0 veces si la condición es falsa desde el inicio. 

## Estructura básica
while (condicion) {
  // Instrucciones que se repiten
}

Un while correcto necesita tres elementos:

## Inicialización: 
valor inicial de la variable de control. 
## Condición: 
mientras sea true, se repite el bloque. 
## Actualización: 
modifica la variable para que la condición pueda volverse false.
let numero = 1;
while (numero <= 5) {
  console.log(numero);
  numero++;
}

## Operadores de incremento/decremento
Forma	Equivalente	Efecto
numero++	numero = numero + 1	Aumenta 1
numero--	numero = numero - 1	Disminuye 1
numero += 5	numero = numero + 5	Aumenta 5
numero -= 5	numero = numero - 5	Disminuye 5

# Patrones básicos
## Contador: 
registra cuántas veces ocurre algo (ej. contador++ en cada iteración).
## Acumulador: 
reúne valores, por ejemplo sumándolos (ej. suma += numero).
## Valor centinela: 
un valor especial (p. ej. 0) que indica que la entrada debe terminar. Se lee una vez antes del while y se vuelve a leer dentro del bucle.
## Validación: 
se pide un dato y se repite el while mientras el dato sea inválido, hasta que el usuario proporcione uno correcto.
## Menú repetitivo: 
se muestra un menú con opciones, se lee la opción antes del bucle y se vuelve a leer al final de cada iteración (usando switch para actuar según la opción).
# Errores frecuentes y buenas prácticas
## Bucle infinito: 
si la condición nunca llega a ser false, el bucle no termina. Siempre verifica qué variable controla el while y dónde se actualiza. 
## Condiciones múltiples: 
se pueden combinar varias condiciones con && o || (ej. while (password !== "1234" && intentos < 3)).
