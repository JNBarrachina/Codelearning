//*This refers to the object that is currently executing the code.

const Person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

console.log(Person.greet());

//*This doesnt work with arrow functions

const Person2 = {
    name: "John",
    age: 30,
    greet: () => {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

console.log(Person2.greet());

