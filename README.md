# JavaScript — Fundamentos para React

Ejercicios de fundamentos para curso de React.  
Se van subiendo cosas de **L a V**.

---

# Clase01. Variables, entrada de datos y operaciones.
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

## Variables. 

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

### Métodos y propiedades de cadenas de texto  
let frase = "Hola Mundo";  

### // Propiedad longitud  
let longitudFrase = frase.length;  

### // Pasar a minúsculas  
let fraseEnMinusculas = frase.toLowerCase();  

### // Pasar a mayúsculas  
let fraseEnMayusculas = frase.toUpperCase();  

### // Quitar espacios del principio y del final  
let fraseSinEspacios = frase.trim(); // *se usa poco*  

### Métodos de Math  
## Método	Comportamiento	Ejemplo	Resultado  
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

# Clase02. If, else if, else  
## Ejercicios: if / else if / else  
### Calificar una nota  
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

## Booleanas y operadores lógicos.  
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
  
## Anidación con && y ||
  
let estaLloviendo = true;
let tengoParaguas = true;
let tengoChubasquero = false;
  
if (estaLloviendo && (tengoParaguas || tengoChubasquero)) {
    console.log("Me tapo de la lluvia");
  
 if (nota > 5) {
    console.log("Puedes salir tranquilo");
    }
}

# Clase03. Switch.  
Es una estructura condicional para seleccionar una acción según valores concretos. No sustituye a if en comparaciones o rangos; se complementa con él.

### Partes  
| Parte	| Función |  
|---------|-------|  
| switch (expr)	| Expresión a evaluar   
| case valor:	| Coincidencia estricta (===)  
| break;	| Sale del switch (no del script)  
| default: | Se ejecuta si ningún case coincide  

## ¿Cuándo usar switch y cuándo if?  
Situación	Estructura  
Valores concretos (1, "MAGO", "/")	switch  
Comparaciones / rangos (>=, <)	if / else if  
Condiciones lógicas compuestas	if  

### Puntos clave.  
* Comparación estricta: switch usa ===.  Un prompt() devuelve string, así que para números hay que convertir con Number() o parseInt().
break obligatorio: sin él, la ejecución "cae" al siguiente case (fall-through).  
* Combinar con if: dentro de un case se puede usar if para validaciones o rangos (ej. división entre 0).  
* Switch anidado: posible (ej. menú → submenú), pero solo cuando los valores sean concretos y la estructura siga siendo legible.    

### Errores frecuentes  
* Error	Corrección  
* Olvidar break	Añadirlo en cada case  
* Usar switch para rangos	Usar if    
* Comparar número con texto	 
* Convertir la entrada al mismo tipo   
* No incluir default	 
* Añadirlo para valores no contemplados    
* Exceso de switch anidados	 
* Combinar switch + if según el problema. 
  
# Clase04. Bucle while.  
While repite un bloque de código mientras su condición sea true.  La condición se comprueba antes de cada iteración, por lo que el bucle puede ejecutarse 0 veces si la condición es falsa desde el inicio.  

## Estructura básica.  
while (condicion) {  
  // Instrucciones que se repiten  
}  
  
Un while correcto necesita tres elementos:  
  
### Inicialización:  
valor inicial de la variable de control. 
### Condición:  
mientras sea true, se repite el bloque. 
### Actualización:  
modifica la variable para que la condición pueda volverse false.
let numero = 1;
while (numero <= 5) {
  console.log(numero);
  numero++;
}  
  
## Operadores de incremento/decremento.  
Forma	Equivalente	Efecto.  
numero++	numero = numero + 1	Aumenta 1.  
numero--	numero = numero - 1	Disminuye 1.  
numero += 5	numero = numero + 5	Aumenta 5.  
numero -= 5	numero = numero - 5	Disminuye 5.  

## Patrones básicos. 
### Contador:   
registra cuántas veces ocurre algo (ej. contador++ en cada iteración).
### Acumulador: 
reúne valores, por ejemplo sumándolos (ej. suma += numero).
### Valor centinela:  
un valor especial (p. ej. 0) que indica que la entrada debe terminar. Se lee una vez antes del while y se vuelve a leer dentro del bucle.
### Validación:  
se pide un dato y se repite el while mientras el dato sea inválido, hasta que el usuario proporcione uno correcto.
### Menú repetitivo:  
se muestra un menú con opciones, se lee la opción antes del bucle y se vuelve a leer al final de cada iteración (usando switch para actuar según la opción).
### Errores frecuentes y buenas prácticas. 
### Bucle infinito:  
si la condición nunca llega a ser false, el bucle no termina. Siempre verifica qué variable controla el while y dónde se actualiza.  
### Condiciones múltiples:  
se pueden combinar varias condiciones con && o || (ej. while (password !== "1234" && intentos < 3))  

# Clase05. bucle do...while   
Ejecuta el bloque de código al menos una vez y luego evalúa la condición para decidir si repite.  
* Su sintaxis es:  

do {
  // instrucciones
} while (condicion);
  
Diferencia clave con while: while comprueba la condición antes de entrar (0 ejecuciones posibles), mientras que do...while la comprueba después (mínimo 1 ejecución).   

### Casos de uso típicos:  
* Validar datos de usuario (pedir una nota entre 0 y 10, un número positivo, una contraseña).  
* Menús interactivos que se repiten hasta que el usuario elija "Salir".  
* Contadores/acumuladores donde la primera iteración es obligatoria.  
  
### Errores comunes:  
* Olvidar el ; final → error de sintaxis.  
* Declarar la variable dentro del do cuando la condición la necesita → declárala antes.  
* Usar do...while sin necesidad de garantizar una ejecución inicial.  

# Clase06. Bucle for.
El bucle for en JavaScript reúne en una sola línea tres partes: inicialización, condición y actualización:  
  
for (let i = 1; i <= 5; i++) { 
  // instrucciones  
}  

### Orden de ejecución:  
inicialización → comprobar condición → ejecutar bloque → actualización → repetir desde la condición.  

### Equivalencia con while:
  
// while
let i = 1;
while (i <= 5) { console.log(i); i++; }
  
// for (más compacto)
for (let i = 1; i <= 5; i++) { console.log(i); }

### Variantes de recorrido:  
  
Actualización	Secuencia.  
i++	1, 2, 3, 4, 5
i--	5, 4, 3, 2, 1
i += 2	2, 4, 6, 8, 10

### Casos de uso típicos:  

* Contar un número conocido de repeticiones.
* Recorrer una secuencia ascendente o descendente.
* Acumuladores (suma de 1 a 100, etc.).
* Bucles anidados (filas y columnas).
* Recorrer índices de arrays (empezando en 0).


### Errores comunes:  

* Usar <= cuando el límite no debe incluirse (o viceversa).  
* Incrementar en la dirección opuesta al recorrido.  
* Olvidar la actualización → bucle infinito.  
* Empezar en 1 por costumbre cuando los arrays empiezan en 0.  

### Cuándo elegirlo:  
Cuando sabes de antes cuántas veces repetir o puedes controlar el recorrido con una variable. Si no lo sabes, while o do...while serían más adecuados.  

# Clase 07. Arrays.  
Un array en JavaScript agrupa varios valores con un único nombre, accesibles por índice (que empieza en 0).

const numeros = [10, 20, 30];

### Conceptos clave:  

## Propiedad / Método	Uso  
* array[i]	Leer o modificar el elemento en la posición i  
* array.length	Número de elementos  
* array.length - 1	Último índice válido  
* push(valor)	Añadir un elemento al final  
* pop()	Quitar y devolver el último elemento  

### Const con arrays:  
Impide reasignar la variable completa, pero sí permite modificar elementos, push(), pop(), etc.

const numeros = [1, 2, 3];  
numeros[0] = 99;   // permitido  
numeros.push(4);   // permitido  
numeros = [5, 6];  // Error: reasignación  

### Características:

* Son dinámicos: pueden crecer o encogerse durante la ejecución.  
* Permiten mezclar tipos ([1, "hola", true]), aunque en fundamentos se evita.  
* Acceder a una posición inexistente devuelve undefined.  

### Errores comunes:  

* Pensar que el primer elemento está en [1] → está en [0]. (Sí me pasa xD)  
* Usar array.length como índice → el último es array.length - 1.  
* Creer que const hace inmutable el contenido.  

# Clase08. Arrays y bucle. 
Patrón clave: for (let i = 0; i < array.length; i++)  
  
* i empieza en 0 (primer índice).  
* i < array.length (nunca <=, o se sale del array).  
* i++ avanza una posición.  
* array[i] es el elemento actual.  

### Usos del recorrido:  

| Uso	| Idea |
|---------|-------|
| Rellenar | Pedir valores con prompt y guardar en array[i] |  
| Mostrar	| console.log(array[i]) en cada iteración |  
| Acumular | suma += array[i] → luego suma / length para la media |  
| Contar |	if (array[i] % 2 === 0) pares++ |  
| Buscar |	Comparar array[i] === buscado y contar o guardar el índice |  
| Mayor/menor |	Iniciar con array[0] y comparar desde i = 1 |  
| Transformar | Crear un segundo array: dobles[i] = array[i] * 2 |  
| Comparar vecinos	| array[i] vs array[i+1] (límite: length - 1) | 

### Detalles importantes:  
* i es el índice (0-based); i + 1 es solo para mostrar la posición "humana" al usuario.  
* Se inicia mayor/menor con array[0] y el bucle arranca en i = 1 para no compararse consigo mismo.  
* Al comparar con el siguiente elemento, el bucle va hasta length - 1 para no salir del array.  

# Clase09. Funciones.  

## Idea central:  
Una función agrupa instrucciones bajo un nombre. En JS no existe void; sin return devuelve undefined implícitamente. Aquí nos interesa la función como acción, no como valor.  
  
## Puntos clave:  
### ¿Por qué usarlas?  
Organización, evitar repetición, dar nombre a tareas, facilitar mantenimiento.
* Estructura: function nombre(param) { ... }. 
* Llamada: nombre() — cada llamada reejecuta el bloque.  
* Parámetros: variables en la definición; argumentos son los valores reales en la llamada. Se asignan por posición.  
* Script principal: JS no tiene main; el código fuera de funciones coordina y delega.
* Ámbito: las variables dentro de una función son locales y no se accede desde fuera.
Dentro de una función puedes usar if, for, etc., normalmente.  
* Arrays como parámetro: se pueden recorrer y modificar (son objetos, se pasan por referencia).  
* Convención: camelCase → mostrarMenu(), calcularMedia().  
  
### Errores frecuentes:  

| Error	| Corrección |  
|---------|-------|  
| Escribir el nombre sin () para "ejecutarla"	| La llamada usa nombreFuncion()|  
| Confundir parámetro con argumento	| Parámetro = definición; argumento = llamada|  
| Usar una variable local fuera de la función	| Solo existe dentro de su ámbito|  
| Crear una función enorme	| Dividir por responsabilidades|  
| Pensar que sin return no devuelve nada | 	Devuelve undefined implícitamente|  

# Clase10. Funciones que devuelven un valor    

Una función con return no solo ejecuta una acción: produce un dato reutilizable que puede guardarse en una variable, mostrarse, compararse o usarse en otras operaciones. A diferencia de C# o Java, en JavaScript no se declara el tipo de retorno; basta con return valor;   
  
### Uso del valor devuelto:  
  
Guardarlo: const r = sumar(5, 3);  
Usarlo directamente: console.log(sumar(5, 3));  
Incorporarlo a expresiones: const doble = sumar(5, 3) * 2;   
  
### Comportamiento clave de return:  
Finaliza la función inmediatamente — cualquier código después de él no se ejecuta.   
Puede devolver cualquier tipo: números, textos, booleanos, arrays, objetos.  
Se usan múltiples return en switch o if para rutas de salida distintas.   

### Diferencia fundamental:  
  
| Función de acción	| Función con return |  
|---------|-------|  
| Muestra o modifica algo	| Produce un resultado |  
| No entrega dato al llamador	| El resultado se guarda o reutiliza |  
| mostrarTabla(5);	| const total = sumar(5, 3); |  
  
### Buena práctica:   
Separar cálculo (la función devuelve el dato) de presentación (decidir fuera cómo se muestra)  
  
### Errores frecuentes:  
  
* Olvidar return → la función devuelve undefined.  
* Poner código útil después de return → nunca se ejecuta.  
* Mostrar dentro cuando se necesita reutilizar → devolver el dato y presentar fuera.  
* Ignorar el valor devuelto → guardarlo o usarlo en una expresión.  
* Devolver valores incoherentes → mantener una responsabilidad clara y resultados predecibles.   

