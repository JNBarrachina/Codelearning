const jokeButton = document.getElementById("jBut");
jokeButton.addEventListener("click", initJoke);
const qJoke = document.getElementById("pJoke1");
const aJoke = document.getElementById("pJoke2");

function initJoke(){
    qJoke.innerText = "";
    aJoke.innerText = "";

    const loading = new Promise((resolve) => {
        jokeButton.innerText = "Seleccionando chiste..."
        setTimeout(() => {
            resolve(selectJoke());
            jokeButton.innerText = "Ríete con otro chiste."
        }, 3000);
    });
}

function selectJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart")
    .then((response) => response.json())
    .then((data) => {
        const chiste = data.setup;
        const respuestaChiste = data.delivery;

        qJoke.innerText = chiste;
        aJoke.innerText = respuestaChiste;
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}
    