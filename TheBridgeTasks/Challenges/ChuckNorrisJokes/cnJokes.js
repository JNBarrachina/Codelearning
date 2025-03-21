const API_URL = "https://api.chucknorris.io/jokes/random";

const jokeButton = document.getElementById("buttonAddJoke");
jokeButton.addEventListener("click", getJoke);
const boxJokes = document.getElementById("jokesBox");
const ctx = document.getElementById('miGrafico').getContext('2d');

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

    location.reload();
    buildChart();
}

function showJokes(){    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        createJoke(key, localStorage.getItem(key))
    }

    buildChart();
}

showJokes();

function removeJoke(jokeId){
    localStorage.removeItem(jokeId);
    boxJokes.innerHTML = "";

    location.reload();
    showJokes();
}

function buildChart(){
    const datos = {
        labels: [],
        datasets: [{
            label: 'Chistes (longitud por caracteres)',
            data: [],
            order: 2,
            backgroundColor: 'green',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
        ]
    };

    for (i=0; i<localStorage.length;i++){
        let numJoke = `Chiste ${i+1}`
        datos.labels.push(numJoke);
        datos.datasets[0].data.push(localStorage.getItem(localStorage.key(i)).length);
    }
    
    const miGrafico = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
        data: datos,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            indexAxis: 'y',
            animation: {
                duration: 1000, // Duración en milisegundos
                easing: 'easeOutBounce' // Tipo de animación
            }
        }
    });
}