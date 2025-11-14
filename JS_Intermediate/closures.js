// Closures

function saludar() {
    let saludo = "Hola";
    return function () {
        console.log(saludo);
    };
}

const saludo = saludar();
saludo();