// const variablenName = ["wert1", "wert2"]

const cars = ["Saab", "Volvo", "BMW", "Audi"];

console.log(cars);

//array[index]
console.log(cars[2])

const bmw = cars[2];

console.log(cars[1]);

// Vorsicht: Bei Länge zählen wir von 1
console.log(cars.length) // 4

const first = cars[0];
const last = cars[cars.length - 1];
//const last = cars[3];

console.log(last); // Audi

console.log(cars.indexOf("Volvo"));

cars[3] = "Fiat";

console.log(cars);

//Löschen eines Elementes in der Array, Array sind intern veränderlich selbst wenn sie const sind
const fiat = cars.pop();

console.log(cars);
console.log(fiat);
console.log(cars.length);

cars.push("VW");
console.log(cars);

const carsLength = cars.push("Mercedes");
console.log(cars);
console.log(cars.length);//5

const saab = cars.shift();
console.log(cars);
console.log(saab);

cars.unshift("Ford");
console.log(cars);

const uneven = [1, 3, 5, 7, 9, 11, 13];
console.log(uneven);
const mixed = [1, "one", 2, "two", 3, "three"];
console.log(mixed);

cars.push("Ferrari", "Tesla");
console.log(cars);