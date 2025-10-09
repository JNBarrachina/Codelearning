const oper = parseInt(prompt("Selecciona una operación:\n 1. Suma\n 2. Resta\n 3. Multiplicación\n 4. División"));

if (isNaN(oper)  || (oper > 4 || oper < 1)) {
    alert("Introduce un número válido, por favor.")
    location.reload()
}

const num1 = parseFloat(prompt("Ingresa un número: "));
const num2 = parseFloat(prompt("Ingresa un número: "));

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const divi = (num1, num2) => num1 / num2;

const calculator = (num1, num2, operation) => {
    let result = operation(num1, num2);
    showResult(result)
};

const showResult = result => {
    let textResult = document.createElement("h1");
    textResult.innerText = ("El resultado de la operación es: " + result);
    document.body.appendChild(textResult);
}

switch (oper) {
    case 1:
        calculator(num1, num2, suma);
        break;
    case 2:
        calculator(num1, num2, resta);
        break;
    case 3:
        calculator(num1, num2, multi);
        break;
    case 4:
        calculator(num1, num2, divi);
        break;
}



