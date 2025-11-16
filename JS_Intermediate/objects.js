//? OBJETOS

//* Objeto: pares desordeados de clave-valor. Es un tipo referencial, es decir, se pasa por referencia en lugar de por valor.

//* Creación de un objeto
const myObject = {
    name: "John",
    age: 30,
    city: "New York",
};

let newObject = new Object();
let newObject2 = Object.create({});


//* Acceso a las propiedades de un objeto
console.log(myObject.name);
console.log(myObject["age"]);


//* Modificación de las propiedades de un objeto
myObject.name = "Jane";
myObject["age"] = 25;


//* Eliminación de propiedades de un objeto
delete myObject.city;