const suma = document.getElementById("bsum");
suma.addEventListener("click", sumatoria);

function sumatoria() {
    let num = parseInt(
        prompt("Ingresa un número a sumar o un 0 para ver el resultado final: ")
    );

    if (isNaN(num)) {
        alert("Introduce un número válido, por favor.");
        return sumatoria();
    }

    let result = num;

    while (num !== 0) {
        num = parseInt(
            prompt(
                "Ingresa un número a sumar o un 0 para ver el resultado final: "
            )
        );

        if (isNaN(num)) {
            alert("Introduce un número válido, por favor.");
        } else if (num !== 0 && !isNaN(num)) {
            result += num;
        }
    }

    let showResult = document.getElementById("secTitulo");
    showResult.innerHTML =
        "<h1 id='tituloResult' class='titulo'>El resultado de la suma es: <span class='colorTitulo' id='colorT'>" +
        result +
        "</span></h1>";

    let colorTitle = document.getElementById("colorT");
    if (result > 50) {
        colorTitle.style.color = "red";
    }

    document.getElementById("bsum").innerText = "Realiza otra suma";
}
