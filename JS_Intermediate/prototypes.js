//? PROTOTYPES

//* Los prototipos son un mecanismo de JavaScript que permite compartir propiedades entre objetos.
//* Los objetos que heredan de un prototipo tienen acceso a las propiedades y metodos de ese prototipo.

let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function () {
        console.log("Hello, my name is " + this.name, "and I am " + this.age + " years old.");
    },
};


//* Herencia
let person1 = Object.create(person);
console.log(person1);
person1.greet();  //Ejecutamos la función heredada del prototipo.