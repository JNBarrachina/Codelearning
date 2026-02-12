//? CLASSES

//* Definiendo una clase
class Person {  //! Al crear una clase, en realidad usamos el modelo de prototipos,

    validate = false; //Propiedad común para todas las instancias de la clase
    _userKeyword = "secret"; //Propiedad privada //!(No es verdaderamente privada, es una convención para indicar que no se tiene intención de usar la propiedad fuera de la clase)

    //*Alternativa para propiedades y métodos privados: #

    constructor(name, age, email) {  //El constructor me obliga a crear las propiedades de la clase
        this.name = name;
        this.age = age;
        this.email = email;
    }

    about() {
        return `${this.name} is ${this.age} years old.`;
    }

    is18() {
        return this.age >= 18;
    }

    // set age(value) {
    //     if (value < 0 || value !== "number") {
    //         throw new Error("Invalid age");
    //     } else {
    //         this._age = value;
    //     }
    // }

    // get age() {
    //     return this._age;
    // }
}

let myPerson = new Person(name = "John", age = 30, email = "john@john.com");


//*Propiedades y métodos estáticos
class Product {
    static #id = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Product.#id++;
    }
}

let product = new Product("Laptop", 1000);
console.log(product);


class User {
    constructor(name, email, isAdmin = false) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
    static createAdmin(name, email) {
        return new User(name, email, true);
    }
}

let user = User.createAdmin("Paco", "paco@paco.com");
console.log(user);


//* Herencia
class BasicUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    about() {
        return `${this.name} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
}

class Admin extends BasicUser {
    constructor(name, email, title) {
        super(name, email);
        this.title = title;
    }
}


//* Clase abstracta (No se puede instanciar)
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Abstract classes cannot be instantiated.");
        }

        this.name = name;
    }

    makeSound() {
        throw new Error("Abstract methods cannot be called.");
    }
}

// Animal.makeSound(); //Error


//* Polimorfismo
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

let myDog = new Dog("Fido");
console.log(myDog);
myDog.makeSound();


//* Mixins (like an interface)
const FlyMixin = {
    fly() {
        console.log(`${this.name} is flying`);
    },
};

class Bird extends Animal { }
Object.assign(Bird.prototype, FlyMixin);

let myBird = new Bird("Polly");
console.log(myBird);
myBird.fly();


//* Singleton (Clase que se puede instanciar una sola vez)
class Logger {
    static instance;

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
}

let logger1 = Logger.getInstance();
let logger2 = Logger.getInstance();
console.log(logger1 === logger2);


//* Symbol (Identificador exclusivo para propiedades privadas; mejor utilizar #)
const playerID = Symbol("id");

class Player {
    constructor(name, score) {
        this.name = name;
        this[id] = score;
    }
}

let player = new Player("John", 100);
console.log(player[id]); // Propiedad privada: no tenemos acceso a priori