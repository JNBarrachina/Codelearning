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