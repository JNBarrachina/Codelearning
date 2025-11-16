//? Manejo del DOM

//*Creación de elementos

let newElement = document.createElement("h1"); // createElement
newElement.textContent = "Esto es un nuevo elemento";
document.body.appendChild(newElement);

let parser = new DOMParser(); //DOMParser
let myDiv = "<div id='myDiv'><p>Esto es un div</p></div>";
document.body.appendChild(parser.parseFromString(myDiv, "text/html").body.firstElementChild);


/** Defer y async.
- Defer: Se ejecuta cuando el DOM ha cargado.
- Async: Se carga de forma asíncrona y se ejecuta cuando ha terminado, independientemente de si se ha cargado o no el DOM.
*/

//? Forms

//* Acceso a los campos de un formulario
let form = document.querySelector("form");
console.log(form.elements["name"].value);

//* onSubmit-preventDefault
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitamos el envío del formulario
    console.log("Formulario enviado");
});

//* Acceso al valor de un input de texto
let input = document.getElementById("name");
input.value = "John"; // Cambiamos el valor del input

//* Acceso al valor de un input de checkbox
let checkbox = document.getElementById("accept");
checkbox.checked = true; // Cambiamos el valor del checkbox

//* Acceso al valor de un input de radio
let radio = document.getElementById("male");
radio.checked = true; // Cambiamos el valor del radio

radio = document.querySelector('input[name="gender"]:checked'); // Accedemos al valor del radio seleccionado
radio = document.querySelector('input[name="gender"][value="male"]'); // Accedemos al valor del radio con el valor indicado

//* Acceso al valor de un input de select
let select = document.getElementById("country");
select.value = "es"; // Cambiamos el valor del select
select.selectedIndex = 1; // Cambiamos el valor del select
select.options(select.selectedIndex).value; // Accedemos al valor del select

//* Validación de campos: onChange y onInput
let age = document.getElementById("age");
age.addEventListener("change", () => {
    if (age.value < 18) {
        alert("No puedes enviar el formulario");
    }
});


