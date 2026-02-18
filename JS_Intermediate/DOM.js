//? DOM

//*Creación y borrado de elementos
let newElement = document.createElement("h1"); // createElement
newElement.textContent = "Esto es un nuevo elemento";
document.body.appendChild(newElement);
document.body.removeChild(newElement)
newElement.remove()

const ulList = document.querySelector("ul")
const newListItem = document.createElement("li")
newListItem = "Nuevo item de la lista"

const secondItem = ulList.children[1]
ulList.insertBefore(newListItem, secondItem)
ulList.append(newListItem)
ulList.prepend(newListItem)
ulList.before(newListItem)
ulList.after(newListItem)

let parser = new DOMParser(); //DOMParser
let myDiv = "<div id='myDiv'><p>Esto es un div</p></div>";
document.body.appendChild(parser.parseFromString(myDiv, "text/html").body.firstElementChild);


/** Defer y async.
- Defer: Se ejecuta cuando el DOM ha cargado.
- Async: Se carga de forma asíncrona y se ejecuta cuando ha terminado, independientemente de si se ha cargado o no el DOM.
*/


//* Selección de elementos
let box = document.getElementById("box") //Por id
let boxClass = document.getElementsByClassName("boxes") //Por clase
let tag = document.getElementsByTagName("p") //Por tagname
let element = document.getElementsByName("formulario") //Por atributo name


//* Manipulación de elementos
let title = document.getElementById("title")
title.textContent("Hi")

const container = document.getElementById("container")
container.innerHTML = "<p> New text </p>"


//* Modificación de atributos
let link = document.querySelector("a")
link.getAttribute("href")
link.setAttribute("href", "http://www.google.es")
link.hasAttribute("target")
link.removeAttribute("target")


//* Interacción CSS
let bodytext = document.querySelector("bodytext")
bodytext.classList.add("selected")
bodytext.classList.remove("selected")
bodytext.classList.toggle("selected")

let button = document.getElementById("submitBtn")
button.style.backgroundColor("black")


//* DOM Events

button.addEventListener("click", sendData)
button.addEventListener("mouseenter", newBgColor)


//? DOM-Forms
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


