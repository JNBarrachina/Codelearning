//* EJ2.1. Dos arrays en un array nuevo, alternando sus valores.

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8, 10, 12];

const arrayFinal = [];
let maxL;

if (array1.length > array2.length) {
    maxL = array1.length;
} else {
    maxL = array2.length;
}

for (let i = 0; i < maxL; i++) {
    if (i < array1.length) {
        arrayFinal.push(array1[i]);
    }

    if (i < array2.length) {
        arrayFinal.push(array2[i]);
    }
}

console.log(arrayFinal);

//* EJ2.2. Máximo, mínimo y media.

//* Máximo.

let mayor;

for (i = 0; i <= arrayFinal.length - 1; i++) {
    if (arrayFinal[i] > arrayFinal[0]) {
        mayor = arrayFinal[i];
    } else {
        mayor = arrayFinal[0];
    }
}

console.log(mayor);

//*Menor.

let menor;

for (i = 0; i <= arrayFinal.length - 1; i++) {
    if (arrayFinal[i] < arrayFinal[0]) {
        menor = arrayFinal[i];
    } else {
        menor = arrayFinal[0];
    }
}

console.log(menor);

//*Media.

let suma = 0;

for (i = 0; i <= arrayFinal.length - 1; i++) {
    suma += arrayFinal[i];
}

let media = suma / arrayFinal.length;
console.log(media);
