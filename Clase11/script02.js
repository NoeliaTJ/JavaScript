// Crea un objeto coche con marca, modelo y velocidad. 
// Cambia la velocidad varias veces y muestra el estado
// final.

// le pongo const para pueda variar de marca
const coche = {
    // le ponemos la marca el modelo y la vel
    marca: "toyota",
    modelo: "supra",
    velocidad: 120
};

// ponemos la primera vel
// y lo que quiero es que se muestre
coche.velocidad = 60; 
console.log (`tras empezar: ${coche.velocidad} km/h`);

// ponemos la segunda vel
coche.velocidad = 120;
console.log (`vuelve a acelerar: ${coche.velocidad} km/h`);





