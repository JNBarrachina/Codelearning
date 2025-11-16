//* Closures

function saludar(name) {
    let greetNum = 0;
    let saludo = "Hola";

    return function () {
        console.log(`${saludo}, ${name}. Este es el saludo ${greetNum++}`);
    }
}

let saludarJohn = saludar("John");  //Función que devuelve otra función
saludarJohn();  //Ejecutamos la segunda función
saludar("John")();  //Ejecutamos directamente la segunda función

