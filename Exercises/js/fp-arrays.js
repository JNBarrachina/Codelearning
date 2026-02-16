//* Nuevo array con elementos comunes de array1 y array2, tantas veces como aparezcan en array1, ordenados de menor a mayor.

const array1 = [1, 2, 3, 1, 5, 2, 5, 7, 1]
const array2 = [1, 4, 6, 1, 7, 8, 9, 10]

const intersectionArray = (a, b) => a.filter(value => b.indexOf(value) > -1).sort();

console.log(intersectionArray(array1, array2))