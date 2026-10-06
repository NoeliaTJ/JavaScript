// Crea un array vacío llamado inventario. Pide 3 objetos al usuario y añádelos con push(). Muestra los tres
// objetos y la longitud final.

// creo un array vacío
let inventario = [];

// pido cosas
inventario.push(prompt("Dime el objeto 1:"));
inventario.push(prompt("Ponme el objeto 2:"));
inventario.push(prompt("Di el objeto 3:"));

// se muestra 
console.log(`Objetos: ${inventario[0]}, ${inventario[1]}, ${inventario[2]}`);
console.log(`Longitud final: ${inventario.length}`);
