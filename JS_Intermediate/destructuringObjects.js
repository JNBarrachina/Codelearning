//? Destructuring Objects


//* Destructuring con objectos
let myObject = { name: "John", age: 30, city: "New York" };
let { name: myName, age, city, country = "España" } = myObject;  //El orden no es relevante porque la referencia se basa en el nombre de las propiedades, a diferencia de los arrays.

console.log(myName);
console.log(age);
console.log(city);


//* Rest operator
let { name, ...rest } = myObject;
console.log(name);
console.log(rest);


//*Objeto anidado
let animal = {
    name: "Perro",
    age: 5,
    owner: {
        name: "Juan",
        age: 40,
    },
}

let { name: animalName, owner: { name: ownerName } } = animal;
console.log(animalName);
console.log(ownerName);


//* Destructuring con funciones
function saludar({ name, age }) {
    console.log("Hola, mi nombre es " + name + " y tengo " + age + " años.");
}

saludar({ name: "John", age: 30 });
