const addnum = document.getElementById("butAdd");
const sumar = document.getElementById("butSum");
const reload = document.getElementById("butReload");
addnum.addEventListener("click", addNumber);
sumar.addEventListener("click", showResult);
reload.addEventListener("click", pageReload);

let num;
let result = 0;

function addNumber() {
    num = parseFloat(document.getElementById("intronum").value);

    if (isNaN(num)) {
        alert("Introduce un número válido, por favor.");
    } else {
        result += num;

        let numItem = document.createElement("li");
        numItem.innerText = "Número añadido: " + num;
        document.getElementById("listnum").appendChild(numItem);

        document.getElementById("butSum").style.visibility = "visible";
    }
}

function showResult() {
    document.getElementById("resultadoFinal").innerText =
        "El resultado de la suma es: " + result;
    document.getElementById("butSum").style.visibility = "collapse";
    document.getElementById("butAdd").style.visibility = "collapse";
    document.getElementById("butReload").style.visibility = "visible";
}

function pageReload() {
    location.reload();
    document.getElementById("intronum").value = "";
}
