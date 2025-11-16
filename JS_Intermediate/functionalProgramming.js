//? PROGRAMACIÓN FUNCIONAL


//* Funcionas puras: predecibles y sin efectos colaterales
function addSeven(num) {
    return num + 7;
}

addSeven(10); // Siempre va a responder con el mismo resultado


//* De función impura a función pura
function insertSecond(element, array) { // Función impura
    array.splice(1, 0, element);  // La función modifica el array original
}

let data = [1, 2, 3];
insertSecond(4, data);
console.log(data);

function insertSecondPure(element, array) { // Función pura
    let [primero, ...resto] = array;
    return [primero, element, ...resto];
}

let dataPure = [1, 2, 3];
dataPure = insertSecondPure(4, dataPure);
console.log(dataPure);


//* Funciones de orden superior: funciones que operan sobre otras funciones
function repetir(fn, num) {  //Recoge dos parámetros, donde el primero es uuna función que se ejecutará y el segundo es un número.
    for (let i = 0; i < num; i++) {
        fn();
    }
}

function greet() {
    console.log("Hello");
}

function goodbye() {
    console.log("Goodbye");
}

repetir(greet, 3);
repetir(goodbye, 2);