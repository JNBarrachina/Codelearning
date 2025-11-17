//* Escribir un programa que muestre en pantalla los números del 1 al 300 sustituyendo los númerosque terminen en 3 por la palabra “fizz”, los números que acaben en 5 por “buzz” y los números que acaben en 15 por la palabra “fizzbuzz”.

for (let i = 0; i < 301; i++) {
    const stringifyNum = i.toString();

    if (stringifyNum.endsWith("3")) {
        console.log("fizz", stringifyNum)
    } else if (stringifyNum.endsWith("15")) {
        console.log("fizzbuzz", stringifyNum)
    } else if (stringifyNum.endsWith("5")) {
        console.log("buzz", stringifyNum)
    }
}