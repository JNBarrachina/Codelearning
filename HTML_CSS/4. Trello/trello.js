console.log("Ejecutando JS");

function nuevaTarea() {
    let nombreTarea;
    let descTarea;

    nombreTarea = prompt("Nueva tarea");
    descTarea = prompt("Descripcion de la tarea");

    alert("Nueva tarea: " + nombreTarea + " - " + descTarea);
}

const clients = {
    name: "Pedro",
    age: 25,
    address: "Calle falsa 123",
    email: "X3lX7@example.com",
};

clients.phone = "+54 11 1234 5678";

console.log(clients);
