//? ARRAY FUNCTIONS

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* Filter
const evenNumbersArray = numbersArray.filter((number) => number % 2 === 0);
console.log(evenNumbersArray);

const mayorQueAnterior = (number, index, array) => { // La signatura de filter siempre admite el elemento, su índice y el array completo al que pertenece
    return number > array[index - 1];
};  // Devuelve true si el elemento es mayor que el anterior

const mayorQueAnteriorArray = numbersArray.filter(mayorQueAnterior); //Pasamos filter la función construida anteriormente
console.log(mayorQueAnteriorArray);

//* Includes: Devuelve true si el elemento esta en el array
const includesNumber = numbersArray.includes(5);
console.log(includesNumber);


//* Find: Devuelve el primer elemento que cumple la condicion
const findNumber = numbersArray.find((number) => number / 2 === 1);
console.log(findNumber);


//* Some: Devuelve true si al menos un elemento cumple la condicion
const someNumber = numbersArray.some((number) => number / 2 === 1);
console.log(someNumber); //True


//* Every: Devuelve true si todos los elementos cumplen la condicion
const everyNumber = numbersArray.every((number) => number / 2 === 1);
console.log(everyNumber); //False


//* Map: Devuelve un nuevo array con los elementos modificados
const mapNumber = numbersArray.map((number) => number * 2);
console.log(mapNumber);

//* FlatMap: Devuelve un nuevo array, aplanando array anidados desde el nivel indicado y aplicando una funcion a cada elemento
const words = ["hola", "mundo", "JavaScript"];

const flatMapArray = words.flatMap((word) => word.split(""));
console.log(flatMapArray);


//* forEach: Recorre el array y realiza una accion para cada elemento
numbersArray.forEach((number) => console.log(number));


//* Reduce: Devuelve un nuevo array con los elementos modificados (calcular un valor derivado de un array)
const reduceNumber = numbersArray.reduce((num1, num2) => { console.log(`Acumulador: ${num1} - Elemento: ${num2} - Resultado: ${num1 + num2}`); return num1 + num2 }); // Reduce recorre los elementos desde el último hasta el primero. Para hacerlo de izquierda a derecha: reduceRight.

console.log(reduceNumber);


//* Sort: Ordena el array
const unsortedArray = [10, 1, 23, 14, 124, 12, 5, 54];
const sortNumbers = unsortedArray.sort((num1, num2) => num1 - num2);
console.log(sortNumbers);


//* Flat: Devuelve un nuevo array, aplanando array anidados desde el nivel indicado
let nestedArray = [[1, 2], [3, [4]], [5, 6]];

const flatArray = nestedArray.flat(1); // Aplanar 1 subnivel
console.log(flatArray);
