const jokeButton = document.getElementById("jBut");
jokeButton.addEventListener("click", answerJoke);
const aJoke = document.getElementById("pJoke");

fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart")
    .then((response) => response.json())
    .then((data) => {
        const chiste = data.setup;
        const respuestaChiste = data.delivery;

        aJoke.innerText = chiste;
        answerJoke(respuestaChiste);
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });


function answerJoke(respuestaChiste){
    aJoke.innerText = respuestaChiste;
}
    