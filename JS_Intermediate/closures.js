//* Closures

function saludar(name) {
    let greetNum = 0;
    let saludo = "Hola";

    return function () {
        console.log(`${saludo}, ${name}. Este es el saludo ${greetNum++}`);
    }

    //? El contexto de la función se guarda en cada llamada, por lo que el número incrementará aunque greetNum sea inicializado en 0.
}

function greetNumber() {
    console.log(greetNum);
} //! Error: la función no puede acceder a la variable, ya que esta pertenece a otro scope (está dentro de la función saludar())


let saludarJohn = saludar("John");  //Función que devuelve otra función
saludarJohn();
saludarJohn();
saludarJohn();
greetNumber();
