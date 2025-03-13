const API_URL = "https://api.chucknorris.io/jokes/random";
const jokeButton = document.getElementById("buttonAddJoke");
jokeButton.addEventListener("click", getJoke);

function getJoke(){
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {        
        createJoke(data.id, data.value);
        saveJoke(data.value, data.id)
    })

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

function createJoke(jokeId, jokeText){
    const putJoke = document.getElementById("jokesBox");

    const singleJokeBox = document.createElement("section");
    singleJokeBox.setAttribute("class", "singleJokeBox");

    const singleJoke = document.createElement("p");
    singleJoke.innerText = jokeText;
    const deleteJoke = document.createElement("button");
    deleteJoke.innerText = "Remove"
    deleteJoke.setAttribute("class", "deleteJoke");
    deleteJoke.setAttribute("id", jokeId);
    deleteJoke.addEventListener("click", () => removeJoke(jokeId));

    singleJokeBox.append(singleJoke, deleteJoke);
    putJoke.append(singleJokeBox);
}

function saveJoke(jokeText, jokeId){
    localStorage.setItem(jokeId, JSON.stringify(jokeText));
}

function showJokes(){    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        createJoke(key, localStorage.getItem(key) )
    }
}

showJokes();


const boxJokes = document.getElementById("jokesBox");

function removeJoke(jokeId){
    localStorage.removeItem(jokeId);
    boxJokes.innerHTML = "";
    showJokes();
}

