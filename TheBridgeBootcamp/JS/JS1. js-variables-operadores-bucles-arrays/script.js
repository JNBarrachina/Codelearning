var numeroUno = 10;
let texto = "Operaciones realizadas con éxito";
numeroUno = 20;
let numeroDos = 5;

//*Operaciones con variables

let suma = numeroUno + numeroDos;
console.log(suma);
let multi = numeroUno * numeroDos;
console.log(multi);
let resta = numeroUno - numeroDos;
console.log(resta);
let divi = numeroUno / numeroDos;
console.log(divi);
let cubo = numeroUno ** 3;
console.log(cubo);
let resto = numeroUno % numeroDos;
console.log(resto);

console.log(texto);

//*Creamos un array con números.

let numeros = [1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8];
let sumaFinal = 0;
let indice;

console.log("Array creado");

//*Bucle que recorre el array y suma todos los números.

for (indice = 0; indice < numeros.length; indice++) {
    sumando = numeros[indice];

    sumaFinal = sumaFinal + sumando;
}

console.log("La suma de los números del array es:" + " " + sumaFinal);

//*Número más alto del array.

maxnum = numeros.sort().reverse();
console.log("El número más alto del array es: " + maxnum[0]);

//*Recorrido del array, evaluación de sus elementos, suma y resta(if-else)

for (indice = 0; indice < numeros.length; indice++) {
    let nuevoNumero = numeros[indice];

    if (nuevoNumero >= 5) {
        nuevoNumero++;
        console.log(
            numeros[indice] +
                " " +
                "es mayor o igual que" +
                " " +
                5 +
                ". El resultado es: " +
                numeros[indice] +
                " " +
                "1" +
                "=" +
                nuevoNumero
        );
    } else {
        nuevoNumero--;
        console.log(
            numeros[indice] +
                " " +
                "es menor que" +
                " " +
                5 +
                ". El resultado es: " +
                nuevoNumero
        );
    }
}

//*Cantidad de elementos del array.

console.log("La cantidad de elementos del array es de:" + " " + numeros.length);

//*Numero de veces que se repiten los numeros.

let lista_numeros = [
    1, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 10,
];

for (let i = 0; i < lista_numeros.length; i++) {
    let repeticion = 0;
    let num1 = lista_numeros[i];

    for (let ii = 0; ii < lista_numeros.length; ii++) {
        let num2 = lista_numeros[ii];
        if (num1 == num2) {
            repeticion++;
        }
    }

    if (repeticion < 2) {
        console.log("El número " + num1 + " aparece " + repeticion + " vez.");
    } else {
        console.log("El número " + num1 + " aparece " + repeticion + " veces.");
    }
}

//* Número de veces que se repite una palabra.

let frutero = [
    "manzana",
    "pera",
    "naranja",
    "naranja",
    "uva",
    "uva",
    "manzana",
    "mandarina",
    "manzana",
    "mandarina",
];
let fruteroNuevo = [];

for (let i = 0; i < frutero.length; i++) {
    let fruta = frutero[i];

    if (fruteroNuevo[fruta]) {
        fruteroNuevo[fruta]++;
    } else {
        fruteroNuevo[fruta] = 1;
    }
}

console.log(fruteroNuevo);

//* Recorriendo un array con forEach.

frutero.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});

//* Añadir un elemento al final del array.

frutero.push("Melocotón");
console.log(frutero);

//* Eliminar el último elemento del array.

function numberToPower(number, power) {
    let resultado = 1;
    let i = 0;

    while (i < power) {
        resultado = resultado * number;
        i++;
    }

    return resultado;
}

console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));
