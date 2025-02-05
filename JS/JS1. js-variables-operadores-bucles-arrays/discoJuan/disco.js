function activarMenu() {
    let numMenu = parseInt(
        prompt(
            "¡Bienvenido a nuestro menú! \n 1. Reserva tu entra en la DISCO. \n 2. Saluda. \n"
        )
    );

    let name;
    let age;

    if (numMenu == 1) {
        disco();
    } else if (numMenu == 2) {
        saludos();
    } else {
        alert("Introduzca un número válido, por favor.");
        return activarMenu();
    }

    function disco() {
        checkName();

        if (age >= 18) {
            alert("Has reservado tu entrada. Gracias, " + name + ".");
        } else if (0 < age < 18) {
            alert(
                "No eres mayor de edad, " +
                    name +
                    ", por lo que no tienes permitida la entrada. Lo siento."
            );
        } else {
            alert("Escribe un número válido, por favor.");
        }
    }

    function saludos() {
        checkName();
        alert("Hola, " + name + "!");
    }

    function checkName() {
        do {
            name = prompt("¿Cuál es tu nombre?: ");

            if (!isNaN(name)) {
                alert("ERROR: INTRODUCE UN NOMBRE VÁLIDO");
            }
        } while (!isNaN(name));
    }
}
