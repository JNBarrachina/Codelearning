//Rest params

function sum(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(sum(1, 2, 3, 4, 5));

/*
    - Los rest params se utilizan para pasar un numero indeterminado de argumentos a una funcion.
    - Los argumentos se pasan como un array.
*/

//Spread operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const spreadSum = sum(...numbers);
console.log(spreadSum);

/*
    - El spread operator se utiliza para pasar un array como argumento a una funcion.
    - Los argumentos se pasan como valores individuales.
*/