const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const divi = (num1, num2) => num1 / num2;


const oper = parseInt(prompt("Selecciona una operación:\n 1. Suma\n 2. Resta\n 3. Multiplicación\n 4. División"));
const num1 = parseFloat(prompt("Ingresa un número: "));
const num2 = parseFloat(prompt("Ingresa un número: "));

const calculator = (num1, num2, operation) => {
    return operation(num1, num2);
};

console.log(calculator(num1, num2, suma));

switch (oper) {
    case 1:
        console.log(calculator(num1, num2, suma));
        break;
    case 2:
        console.log(calculator(num1, num2, resta));
        break;
    case 3:
        console.log(calculator(num1, num2, multi));
        break;
    case 4:
        console.log(calculator(num1, num2, divi));
        break;
}



