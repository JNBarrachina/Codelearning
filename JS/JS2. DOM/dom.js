const pulsado = document.getElementById("pulsar");
const grid = document.getElementById("bGraella");
const reboot = document.getElementById("reboot");
pulsado.addEventListener("click", pulsador);
grid.addEventListener("click", activeGraella);
reboot.addEventListener("click", reinicio);

function pulsador() {
    let name = prompt("Introduce tu nombre: ");
    let color = prompt("Introduce un color (en inglés): ");

    mod = document.getElementById("modParrafo");
    mod.innerText = "Saludos, " + name;
    mod.style.backgroundColor = color;

    let t = document.querySelector("h1");
    t.setAttribute("class", "titulo");
    t.style.color = color;

    document.getElementById("bGraella").style.visibility = "visible";
    document.getElementById("reboot").style.visibility = "visible";
    document.getElementById("pulsar").style.visibility = "collapse";
    document.querySelectorAll("div").innerText = name;
}

function activeGraella() {
    document.getElementById("bGraella").innerText = "¡Bien hecho!";
    showGraella = document.getElementById("gr").style.visibility;

    if (showGraella == "visible") {
        document.getElementById("gr").style.visibility = "collapse";
        document.getElementById("bGraella").innerText = "¿Harás click?";
        document.getElementById("reboot").style.visibility = "visible";
    } else {
        document.getElementById("gr").style.visibility = "visible";
        document.getElementById("reboot").style.visibility = "hidden";
    }
}

function reinicio() {
    location.reload();
}
