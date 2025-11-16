//? CONSTRUCTORS

//* Construyendo con función
function user(userName, userSurname) {
    return {
        name: userName,
        surname: userSurname,
        validated: false,
        fullName: () => `${userName} ${userSurname}`
    }
}

function animal(name, age) {
    this.name = name;
    this.age = age;
}


//* Construyendo con palabra reservada new
let user1 = new user("John", "Doe");
let animal1 = new animal("Perro", 5);

console.log(user1.fullName());
console.log(animal1);