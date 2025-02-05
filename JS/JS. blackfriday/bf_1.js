//* EJ1.1. Arrays pares e impares.

const numeros = [12, 7, 5, 89, 34, 22, 13, 78, 99, 100, 200, 201, 75, 62];
const pares = [];
const impares = [];

for (let i = 0; i <= numeros.length - 1; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

console.log(pares);
console.log(impares);

//* EJ1.2. Array de suma.

const suma = [];

for (let i = 0; i <= pares.length - 1; i++) {
    suma[i] = pares[i] + impares[i];
}

console.log(suma);

//* EJ1.3. Mostrando el array suma y la posición de sus elementos.

let muestraSuma = "";
let num = "";

for (let i = 0; i <= suma.length - 1; i++) {
    num = "Número " + suma[i] + ". Posición: " + suma.indexOf(suma[i]) + ".\n";
    muestraSuma += num;
}

console.log(muestraSuma);

//* EJ1.4. Mostrando el array suma y la posición de sus elementos en orden inverso.

let muestraSumaReversed = "";

for (let i = suma.length - 1; i >= 0; i--) {
    num = "Número " + suma[i] + ". índice: " + suma.indexOf(suma[i]) + ".\n";
    muestraSumaReversed += num;
}

console.log(muestraSumaReversed);
