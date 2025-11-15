//? Destructuring Arrays


//* Destructuring con array
let myArray = ["apple", "banana", "cherry"];
let [a, b, c, d] = myArray;

console.log(a); // "apple"
console.log(b); // "banana"
console.log(c); // "cherry"
console.log(d); // undefined


//* Intercambio de valores
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1


//* Salto de elementos
let myArray2 = ["apple", "banana", "cherry", "date", "elderberry"];
let [fruta1, , fruta3, , fruta5] = myArray2;

console.log(fruta1); // "apple"
console.log(fruta3); // "cherry"
console.log(fruta5); // "elderberry"


//* Valores por defecto

let itemsArray = [1, 2, 3, 4];
let [item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0] = itemsArray;

console.log(item1); // 1
console.log(item2); // 2
console.log(item3); // 3
console.log(item4); // 4
console.log(item5); // 0


//* Rest operators
let myFruits = ["apple", "banana", "cherry", "date", "elderberry"];
let [first, ...rest] = myFruits;

console.log(first); // "apple"
console.log(rest); // ["banana", "cherry", "date", "elderberry"]


//* Destructuring de arrays en funciones
let myNumbers = [1, 2, 3, 100];

const sumNumbers = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sumNumbers(...myNumbers));