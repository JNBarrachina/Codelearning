//? MAP

//* Map es una estructura de datos que permite almacenar pares clave-valor.

let m = new Map();
m.set("a", 1);
m.set("b", 2);
m.set("c", 3);
m.set("d", 4);

console.log(typeof m);

//* Uso de has
console.log(m.has("a")); // true
console.log(m.has("e")); // false

//* Iterar sobre un map usando for of
for (let [key, value] of m) {
    console.log(key, value);
}

m.forEach((value, key) => {
    console.log(key, value);
});

//* Conversión a array
let arrayFromMap = [...m];
console.log(typeof (arrayFromMap), arrayFromMap);

let arrayFromMap2 = Array.from(m);
console.log(typeof (arrayFromMap2), arrayFromMap2);

//? SET

//* Set es una estructura de datos que permite almacenar valores únicos.

let s = new Set();
s.add(1);
s.add(2);
s.add(3);

console.log(s.size); // 3
console.log(s.has(1)); // true
console.log(s);

let newSet = new Set([1, 2, 3, 4, 5]);
console.log(newSet);

let stringSet = new Set("patata"); //Crea un set con los caracteres únicos de la cadena
console.log(stringSet);

//* Eliminar duplicados de un array
let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//* Unión de sets
let set1 = new Set([1, 2, 3]);
let set2 = new Set([1, 2, 3, 4, 5]);
let unionSet = new Set([...set1, ...set2]);
console.log(unionSet);

//* Intersección de sets
let intersectionSet = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersectionSet);

//* Diferencia de sets
let differenceSet = new Set([...set1].filter((x) => !set2.has(x)));
console.log(differenceSet);

//* Iterar un set
for (let x of set1) {
    console.log(x);
}