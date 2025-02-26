const jokeButton = document.getElementById("jBut");
jokeButton.addEventListener("click", initJoke);

function initJoke(){
    new Promise((resolve) => {
        jokeButton.innerText = "Seleccionando chiste..."
        setTimeout(() => {
            resolve(selectJoke());
            jokeButton.innerText = "Ríete con otro chiste"
        }, 3000);
    });
}

function selectJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then((response) => response.json())
    .then((data) => {
        const qJoke = data.setup;
        const aJoke = data.delivery;

        showJoke(qJoke, aJoke);
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

function showJoke(qJoke, aJoke){
    const jokeBox = document.getElementById("jBox");
    const newJoke = document.createElement("div");
    newJoke.setAttribute("class", "newJoke");

    const qJ = document.createElement("p");
    qJ.setAttribute("class", "qp");
    qJ.innerText = qJoke;
    const aJ = document.createElement("p");
    aJ.setAttribute("class", "ap");
    aJ.innerText = aJoke;

    newJoke.append(qJ, aJ);
    jokeBox.appendChild(newJoke);
}
    