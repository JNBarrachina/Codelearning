const numbers = [12, 2, 23, 1, 7, 27, 32, 15, 52, 10];

const pares = numbers.filter((number) => number % 2 == 0);
console.log(pares);

const doble = numbers.map((number) => number * 2);
console.log(doble);

const sumaTotal = numbers.reduce((num1, num2) => num1 + num2);
console.log(sumaTotal)

console.log(numbers.sort((x,y) => x - y ))

const mayor = (num) => num > 0;
console.log(numbers.every(mayor))