//* Creamos el array.
const numbers = [12, 2, 23, 1, 7, 27, 32, 15, 52, 10];

//*Filtrar los números pares.
const pares = numbers.filter((number) => number % 2 == 0);
console.log(pares);

//*Duplicar los números con map.
const doble = numbers.map((number) => number * 2);
console.log(doble);

//*Sumar todos los números con reduce.
const sumaTotal = numbers.reduce((num1, num2) => num1 + num2);
console.log(sumaTotal)

//*Ordenar los números de menor a mayor.
console.log(numbers.sort((x,y) => x - y ))

//*Comprobar si todos los números son >0 con every.
const mayor = (num) => num > 0;
console.log(numbers.every(mayor));

//*Comprobar si al menos un elemento del array es >100 con some.
//*Comprobar si todos los elementos del array son <50 con every.
const menor = (num) => num < 50;
console.log(numbers.every(menor));

