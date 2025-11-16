//? PROTOTYPES

//* Los prototipos son un mecanismo de JavaScript que permite compartir propiedades entre objetos.
//* Los objetos que heredan de un prototipo tienen acceso a las propiedades y metodos de ese prototipo.

let myObject = {
    age: 30,
    city: "New York",
    greet: function (name) {
        console.log("Hello, my name is " + name);
    },
};

let newObject = Object.create(myObject);
newObject.name = "John"; //La propiedad name se hereda del prototipo myObject, ya que newObject no tiene su propia propiedad name.
console.log(newObject);
newObject.greet("Juanjo");  //Ejecutamos la función heredada del prototipo.