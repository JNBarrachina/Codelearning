const singleUser = {
    nombre: "JNB",
    edad: "100",
    profesion: "Futurólogo",
    CP: "00000",
    ciudad: "Pueblo Paleta",
    tlf: "123456789",
}

localStorage.setItem("user", JSON.stringify(singleUser));

const readUser = JSON.parse(localStorage.getItem("user"));
console.log(readUser);

let showUser = `Hola, mi nombre es ${readUser.nombre}, tengo ${readUser.edad} años, y vivo en ${readUser.ciudad}, con código postal: ${readUser.CP}. Trabajo como ${readUser.profesion}, contacta conmigo con el siguiente número: ${readUser.tlf}`;

console.log(showUser);

readUser.ciudad = "Capital";

showUser = `Hola, mi nombre es ${readUser.nombre}, tengo ${readUser.edad} años, y vivo en ${readUser.ciudad}, con código postal: ${readUser.CP}. Trabajo como ${readUser.profesion}, contacta conmigo con el siguiente número: ${readUser.tlf}`;

console.log(showUser);

localStorage.setItem("user", JSON.stringify(readUser));




