//* Closures

function saludar(name) {
    let greetNum = 0;
    let saludo = "Hola";

    return function () {
        console.log(`${saludo}, ${name}. Este es el saludo ${greetNum++}`);
    }

    //? El contexto de la función se guarda en cada llamada, por lo que el número incrementará aunque greetNum sea inicializado en 0.
}



let saludarJohn = saludar("John");  //Función que devuelve otra función
saludarJohn();
saludarJohn();
saludarJohn();

