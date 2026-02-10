//* CALLBACKS

const sumNumbers = (num1, num2, callback) => {
    let result = num1 + num2;
    callback(result);
}

const showResult = (result) => {
    console.log("El resultado de la operación es: " + result);
}

sumNumbers(2, 3, showResult);