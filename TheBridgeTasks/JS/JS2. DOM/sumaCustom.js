const addnum = document.getElementById("butAdd");
const sumar = document.getElementById("butSum");
addnum.addEventListener("click", addNumber);
sumar.addEventListener("click", showResult);

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
    }
}

function showResult() {
    document.getElementById("resultadoFinal").innerText =
        "El resultado de la suma es: " + result;
}
