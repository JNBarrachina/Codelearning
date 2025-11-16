//? CLASSES


//* Clases

class User {  //! Al crear una clase, en realidad usamos el modelo de prototipos,

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

    set age(value) {
        if (value < 0 || value !== "number") {
            throw new Error("Invalid age");
        } else {
            this._age = value;
        }
    }

    get age() {
        return this._age;
    }
}

let myUser = new User();
myUser.age = -10;
console.log(myUser);


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
class User {
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

class Admin extends User {
    constructor(name, email, title) {
        super(name, email);
        this.title = title;
    }
}


//* Herencia multiple
