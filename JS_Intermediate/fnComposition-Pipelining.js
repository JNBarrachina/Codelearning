//? COMPOSICIÓN DE FUNCIONES

const users = [
    { id: 1, name: "Juancho", email: "juancho@email.com" },
    { id: 2, name: "Pere", email: "" },
    { id: 1, name: "Raimon", email: "raimon@email.com" },
    { id: 1, name: "Paco", email: "paco@email.com" },
]

// Obtener el email
// Si no hay email, poner uno por defecto
// Obtener la parte del usuario del email
// Pasar a mayúsculas

const getProperty = propertyName => user => user[propertyName];
const defaultEmail = userEmail => userEmail.length == 0 ? "noemail@email.com" : userEmail;
const splitEmail = userEmail => userEmail.split("@")[0];
const upperUsername = string => string.toUpperCase();

const userEmails = users.map(
    getProperty("email"))
    .map(
        defaultEmail)
    .map(
        splitEmail)
    .map(
        upperUsername);

console.log(userEmails);

//* Esta forma de resolver el programa es inteligible y orientada a la programación funcional, pero muy poco eficiente ya que recorremos el array varias veces mediante maps.

//TODO: PIPELINING

const pipe = (...fnArray) => {
    // Retornamos una función que ESPERA el valor inicial
    return function (initialValue) {
        // initialValue será cada elemento del array
        return fnArray.reduce((value, fn) => {
            // value empieza siendo initialValue (el usuario)
            // y luego va siendo el resultado de cada función
            return fn(value);
        }, initialValue); // ← Aquí pasamos el valor inicial al reduce
    }
}

const mailUsernameUpper = pipe(
    getProperty("email"),
    defaultEmail,
    splitEmail,
    upperUsername
)

const pipeUserEmails = users.map(mailUsernameUpper)
console.log(pipeUserEmails)