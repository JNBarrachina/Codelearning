//For in; For of

let myObject = {
    name: "John",
    age: 30,
    city: "New York",
};

let myArray = ["apple", "banana", "cherry"];

//* For in con objeto
for (propiedad in myObject) {
    console.log(propiedad); // Devuelve las propiedades del objeto
}

for (propiedad in myObject) {
    console.log(myObject[propiedad]); //Devuelve los valores de las propiedades del objeto
}

//* For in con array
for (elemento in myArray) {
    console.log(elemento); //Devuelve los indices del array
}

for (elemento in myArray) {
    console.log(myArray[elemento]); //Devuelve los elementos del array
}

//* For of con array
for (elemento of myArray) {
    console.log(elemento); //Devuelve los elementos del array
}

//* For of con objeto
for (elemento of myObject) {
    console.log(elemento); //! ERROR: LOS OBJETOS NO SON ITERABLES
}
