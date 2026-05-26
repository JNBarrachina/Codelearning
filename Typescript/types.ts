//? TYPESCRIPT

//* Basic types

let myName: string = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false


//* Custom types

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address  // Optional property
}

type Address = {
    street: string,
    city: string,
    country: string
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "John",
    age: 22,
    isStudent: false,
}

let persons: Person[] = [person1, person2]
console.log(typeof (persons))


//* Literal Types & Unions

type User = {
    username: string,
    role: userRole
}

type userRole = "guest" | "member" | "admin"  // Literal Union Type
let userRole = "admin"